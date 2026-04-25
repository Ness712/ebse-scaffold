#!/bin/bash
# Claude Code hook — PreToolUse(Bash) sur git push
# Perimetre : pipeline qualite complet avant push (lint, tests, audit, CI gate)
# Declencheur : quand l'agent execute git push
#
# Source : PICOC #4 Deterministic gates GRADE 5 STANDARD
#          PICOC ai-agent-sast-integration GRADE 3 RECOMMANDE
#          docs.anthropic.com/en/docs/claude-code/hooks

TOOL_INPUT=$(cat)
COMMAND=$(echo "$TOOL_INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('command',''))" 2>/dev/null || echo "")

echo "$COMMAND" | grep -qE 'git\b.*\bpush\b' || exit 0

# Extraire le repo reel (supporte worktrees)
REPO_PATH=$(python3 - "$COMMAND" <<'PYEOF'
import sys, re, os
cmd = sys.argv[1]
def to_os_path(p):
    m = re.match(r'^/([a-zA-Z])/(.*)', p)
    if m: return m.group(1).upper() + ':/' + m.group(2)
    return p
for m in re.finditer(r'cd\s+"?([^";&\s]+)"?', cmd):
    p = to_os_path(m.group(1))
    if any(os.path.isfile(os.path.join(p, f)) for f in ('package.json', 'pom.xml', 'go.mod', 'Cargo.toml')):
        print(p); sys.exit(0)
for m in re.finditer(r'git\s+-C\s+"?([^";&\s]+)"?', cmd):
    p = to_os_path(m.group(1))
    if os.path.isdir(p): print(p); sys.exit(0)
PYEOF
)
[ -z "$REPO_PATH" ] && REPO_PATH="${CLAUDE_PROJECT_DIR:-$(pwd)}"

PM="npm"
[ -f "${REPO_PATH}/pnpm-lock.yaml" ] && PM="pnpm" || true

# ============================================================
# [CONFIGURER] : decommenter et adapter selon votre stack
# ============================================================

# 1. Lint + format:check
# (cd "$REPO_PATH" && $PM run lint --quiet && $PM run format:check 2>&1 | tail -10) || {
#   echo "[hook][GATE] lint/format:check FAILED — corriger avant push" >&2; exit 2
# }

# 2. Tests unitaires
# (cd "$REPO_PATH" && $PM test --run 2>&1 | tail -15) || {
#   echo "[hook][GATE] tests FAILED — corriger avant push" >&2; exit 2
# }

# 3. Dependency audit (vulnerabilites critiques)
# (cd "$REPO_PATH" && $PM audit --audit-level=high 2>&1 | tail -5) || {
#   echo "[hook][GATE] vulnerabilites critiques detectees — corriger avant push" >&2; exit 2
# }

# 4. Quality gate CI/SonarQube (uniquement sur main/staging)
# BRANCH=$(git -C "$REPO_PATH" rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
# if echo "$BRANCH" | grep -qE '^(main|staging|master)$'; then
#   STATUS=$(curl -s --max-time 10 \
#     -H "Authorization: Bearer [CONFIGURER: $SONARQUBE_TOKEN]" \
#     "[CONFIGURER: https://sonar.example.com/api/qualitygates/project_status?projectKey=<key>]" \
#     | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['projectStatus']['status'])" 2>/dev/null || echo "UNKNOWN")
#   if [ "$STATUS" = "ERROR" ]; then
#     echo "[hook][GATE] SonarQube quality gate FAILED" >&2; exit 2
#   fi
# fi

exit 0
