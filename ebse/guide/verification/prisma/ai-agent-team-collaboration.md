# PRISMA Flow — PICOC-H : ai-agent-team-collaboration

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com, arXiv (cs.AI, cs.MA), WebSearch multi-agent benchmarks, GitHub experiments
**Mots-cles Agent A** : "Claude Code Agent Teams experimental", "peer-to-peer agent collaboration mailbox", "agent teams token cost overhead", "multi-agent peer collaboration benchmark", "claude code v2.1.32 agent teams"
**Mots-cles Agent B** : "autonomous agent team collaboration peer review", "LLM peer agent coordination cost", "multi-perspective agent verification", "agent mailbox shared task list", "agent teams vs orchestrator comparison"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + reconciliation Agent C

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com (agent-teams, costs) : 2 sources
    - arXiv (cs.AI, cs.MA, cs.SE) : ~6 candidats
    - GitHub experiments (gists, repos) : ~3 candidats
    - WebSearch benchmarks multi-agent : ~4 candidats
  Total identifie (brut, combine A+B) : ~15
  Doublons retires : 2
  Total apres deduplication : ~13

SCREENING (titre + resume)
  Sources screenees : ~13
  Sources exclues au screening : ~5
    - E1 (multi-agent coordination generale, pas peer-to-peer specifique) : ~2
    - E2 (hors scope — teams humains, pas agents LLM) : ~2
    - E3 (doublons partiels) : ~1

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~8
  Sources exclues apres lecture complete : ~3
    - Hors scope PICOC strict (orchestrateur classique, pas Agent Teams) : 2
    - Feature experimental non documentee independamment : 1

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 1 : 0
    - Niveau 2 : 0
    - Niveau 3 : 2 (code.claude.com/docs/en/agent-teams ; code.claude.com/docs/en/costs)
    - Niveau 4 : 2 (arXiv 2503.01935 MultiAgentBench N=260 ; arXiv 2603.22651 latence)
    - Niveau 5 : 1 (practitioner C compiler experiment — mailbox instability evidence)

  Sources exclues avec raison documentee : 2
    - Papers multi-agent coordination generaux : hors scope Agent Teams specifique Claude Code
    - GA announcement speculation blogs : speculation sans donnees, E1
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com, arXiv (cs.AI, cs.MA), GitHub |
| Mots-cles | "Claude Code Agent Teams experimental mailbox", "peer-to-peer agent token cost overhead" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~9 |
| Sources retenues | 5 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | arXiv (cs.AI, cs.SE), WebSearch benchmarks, GitHub experiments |
| Mots-cles | "LLM peer agent coordination cost benchmark", "multi-perspective agent verification mailbox" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~6 |
| Sources retenues | 5 (forte convergence avec A) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| Papers multi-agent coordination generaux | Hors scope PICOC — traitent l'orchestration classique, pas Agent Teams peer-to-peer Claude Code |
| Blogs speculation GA announcement | Speculation sans donnees primaires, niveau E1 |
