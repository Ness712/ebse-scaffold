# Scaffold — Guide d'installation

Installation d'un agent autonome Claude Code piloté par PO sur un nouveau projet.

---

## 1. Prérequis

- Claude Code installé (plan Max recommandé pour usage intensif)
- Le repo `ebse-scaffold` accessible depuis la machine (ex : `../ebse-scaffold/` depuis la racine projet)
- CI/CD avec lint + tests + typecheck configuré (requis par les hooks `pre-commit-quality.sh` et `pre-push-quality.sh`)
- `gh` CLI installé et authentifié (requis par `pre-push-quality.sh` pour vérifier les issues)
- Optionnel : Playwright MCP (tests navigateur), Context7 MCP (docs)

---

## 2. Étapes d'installation

### Étape 1 — CLAUDE.md principal

Copier `scaffold/scaffold-claude.md` → `<projet>/CLAUDE.md`

En mono-repo : commiter ce fichier.
En multi-repo (dossier parent non-git) : ne pas commiter — sauvegarder dans un repo de backup.

### Étape 2 — CLAUDE.local.md

Copier `scaffold/scaffold-claude-local.md` → `<projet>/CLAUDE.local.md`

Ne **jamais** commiter ce fichier. Ajouter à `.gitignore`.
Décommenter les blocs selon le contexte du projet.

### Étape 3 — settings.json

```bash
# Retirer les commentaires JSONC (JSON strict ne supporte pas //)
grep -v "^\s*//" scaffold/scaffold-settings.jsonc > <projet>/.claude/settings.json
```

En mono-repo : commiter. En multi-repo racine : ne pas commiter.

### Étape 4 — settings.local.json (optionnel)

Copier `scaffold/scaffold-settings-local.jsonc` → `<projet>/.claude/settings.local.json`

Ne **jamais** commiter. Contient les overrides personnels (directories supplémentaires, prefs locales).

### Étape 5 — Hooks Claude Code

Copier `scaffold/hooks/` → `<projet>/.claude/hooks/`

Hooks inclus :
- `session-start.sh` — charge env + health-check monitoring au démarrage
- `pre-commit-quality.sh` — gate Co-Authored-By avant commit
- `pre-push-quality.sh` — vérifie que l'issue GitHub existe et est ouverte
- `pre-pr-create.sh` — déclenche review sub-agent avant création PR
- `post-edit-lint.sh` — lint rapide après édition
- `post-merge-worktree.sh` — `git worktree prune` après merge
- `audit-tool-use.sh` — audit trail de tous les appels outils
- `stop-notify.sh` — rappel vérification avant déclaration "done"

Hooks avancés (désactivés par défaut, voir section 5) :
- `pre-compact.sh`, `subagent-start.sh`, `user-prompt-filter.sh`

### Étape 6 — Git hooks (pre-commit natif)

Copier `scaffold/git-hooks/pre-commit.sh` → `<projet>/.git/hooks/pre-commit`
Copier `scaffold/git-hooks/pre-push.sh` → `<projet>/.git/hooks/pre-push`

```bash
chmod +x <projet>/.git/hooks/pre-commit <projet>/.git/hooks/pre-push
```

Ces hooks s'exécutent pour **tous les acteurs** (humain + agent).

### Étape 7 — Agents et Skills

Copier `scaffold/agents/` → `<projet>/.claude/agents/` (reviewer, auditor, explorer)
Copier `scaffold/skills/` → `<projet>/.claude/skills/` (review, audit, conventions)

### Étape 8 — CONVENTIONS.md par repo

Créer `<sous-repo>/CONVENTIONS.md` avec les règles vérifiables mécaniquement.
Référence de structure : `scaffold/rules/template.md`

---

## 3. Configuration obligatoire

Les `[CONFIGURER]` critiques à remplacer après copie :

**Dans `CLAUDE.md`** :
- Stack (backend, frontend, BDD, CI/CD, monitoring)
- Commandes build/test/lint/typecheck/e2e/dev
- Chemins critiques (auth, payment, migrations, security)
- Format de branche (ex : `OLS-{TICKET}-{description}`)
- Format de commit (ex : `OLS-{TICKET} {type}({scope}): {description}`)
- Chemin vers `scaffold-claude.md` (ex : `../ebse-scaffold/scaffold/scaffold-claude.md`)
- Chemin vers les recommandations EBSE (ex : `../ebse-scaffold/ebse/guide/data/stacks/ols-recommendations.json`)
- Canal d'urgence SEV1 (email ou Slack si PO indisponible > 4h)
- Outils monitoring (GlitchTip/Sentry, SonarQube, Grafana) + commandes curl

**Dans `.claude/settings.json`** :
- Commandes `allow` selon la stack (TypeScript : `pnpm *`, Java : `mvn *`, Python : `pytest *`)
- Commandes `pnpm lint && pnpm typecheck` dans le hook `post-edit-lint.sh`
- MCP servers à activer (`mcp__playwright__*`, `mcp__plugin_context7_context7__*`)

**Dans `session-start.sh`** :
- Chemin vers le fichier `.ols.env` ou équivalent (tokens monitoring)
- Commandes de health-check à exécuter au démarrage

**Dans les git hooks** :
- Format de branche regex dans `pre-push.sh`
- Commandes lint/typecheck dans `pre-commit.sh`

---

## 4. Vérification

```bash
# 1. Vérifier que les hooks sont exécutables
ls -la <projet>/.git/hooks/pre-commit <projet>/.git/hooks/pre-push

# 2. Tester le hook pre-commit (depuis le repo)
git add . && git commit --dry-run

# 3. Vérifier que settings.json est du JSON valide (pas de commentaires restants)
python3 -c "import json; json.load(open('<projet>/.claude/settings.json')); print('OK')"

# 4. Vérifier que Claude Code charge les CLAUDE.md
# Lancer Claude Code dans le projet et taper : /status
# Les fichiers CLAUDE.md chargés doivent apparaître dans le contexte
```

---

## 5. Ce qui est optionnel

Ces hooks sont **commentés** dans `scaffold-settings.jsonc` — activer uniquement si le scénario a été observé comme source de défaillance (chaque hook actif augmente latence et complexité de debugging) :

| Hook | Quand l'activer |
|------|-----------------|
| `PreCompact` → `pre-compact.sh` | Sessions régulièrement > 50K tokens (règles MANDATORY perdues à la compaction) |
| `SubagentStart` → `subagent-start.sh` | Architecture multi-agents (PICOC #20 audit trail inter-agents) |
| `UserPromptSubmit` → `user-prompt-filter.sh` | Sécurité renforcée ou audit des prompts utilisateur requis |
| `PermissionRequest` (auto-approve) | Réduire les popups répétitifs pour des patterns pré-autorisés connus |

Pour activer : décommenter le bloc correspondant dans `.claude/settings.json`.
