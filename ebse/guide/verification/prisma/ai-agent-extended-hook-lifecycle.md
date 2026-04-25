# PRISMA Flow — PICOC-F : ai-agent-extended-hook-lifecycle

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com, arXiv (cs.AI, cs.SE), GitHub (hooks repositories), WebSearch praticiens
**Mots-cles Agent A** : "Claude Code hooks lifecycle UserPromptSubmit", "PreCompact hook context compaction", "SubagentStart hook multi-agent", "PermissionRequest hook auto-approve", "claude code exit code 2 hook blocking"
**Mots-cles Agent B** : "advanced lifecycle hooks LLM agent", "agentic hook guardrail pattern", "hook-as-constraint autonomous agent", "claude code UserPromptSubmit injection detection", "PreCompact context window recovery"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + reconciliation Agent C

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com (documentation officielle hooks) : 3 sources
    - arXiv (cs.AI, cs.SE, cs.CY) : ~6 candidats
    - GitHub repositories (hooks-mastery, agent patterns) : ~4 candidats
    - WebSearch praticiens (blog posts avec donnees) : ~5 candidats
    - CVE databases (CVE-2025-54794 UserPromptSubmit) : 2 sources
  Total identifie (brut, combine A+B) : ~20
  Doublons retires : 3
  Total apres deduplication : ~17

SCREENING (titre + resume)
  Sources screenees : ~17
  Sources exclues au screening : ~8
    - E1 (hooks generiques non-specifiques LLM) : ~3
    - E2 (hors scope — hooks CI/CD generaux, pas lifecycle agent) : ~3
    - E3 (doublons partiels) : ~2

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~9
  Sources exclues apres lecture complete : ~4
    - Confusion exit code 1 vs 2 non resolue (sources contradictoires) : 1
    - Hors scope PICOC strict : 2
    - Niveau de preuve insuffisant : 1

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 1 : 0
    - Niveau 2 : 0
    - Niveau 3 : 2 (code.claude.com/docs/en/hooks ; code.claude.com/docs/en/hooks-guide)
    - Niveau 4 : 2 (arXiv 2509.14744 hook-as-guardrail ; CVE-2025-54794 UserPromptSubmit)
    - Niveau 5 : 1 (github.com/disler/claude-code-hooks-mastery — praticiens convergents)

  Sources exclues avec raison documentee : 2
    - Source tiers confondant exit code 1 (non-bloquant) et exit code 2 (bloquant) : information incorrecte, exclue
    - Vendor blog sans donnees primaires sur les hooks individuels : L5 redondant
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com, arXiv (cs.AI, cs.SE), GitHub hooks repositories |
| Mots-cles | "Claude Code hooks lifecycle UserPromptSubmit PreCompact", "SubagentStart hook injection", "exit code 2 hook blocking" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~12 |
| Sources retenues | 5 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | arXiv (cs.AI, cs.CY), WebSearch, GitHub, CVE databases |
| Mots-cles | "agentic hook guardrail pattern", "hook-as-constraint autonomous agent", "UserPromptSubmit injection detection" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~8 |
| Sources retenues | 5 (convergence elevee avec A) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| Source tiers exit code 1/2 contradictoire | Information factuelle incorrecte sur le comportement bloquant/non-bloquant |
| Vendor blog hooks generaux | Niveau 5 redondant avec documentation officielle Anthropic |
