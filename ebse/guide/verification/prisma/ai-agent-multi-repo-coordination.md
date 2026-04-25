# PRISMA Flow — PICOC-G : ai-agent-multi-repo-coordination

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com, git-scm.com, arXiv (cs.SE), GitHub repositories praticiens, WebSearch multi-repo agent patterns
**Mots-cles Agent A** : "Claude Code multi-repo worktree agent", "git worktree parallel agent execution", "Agent isolation worktree frontmatter", "multi-repo orchestration sequential commits", "ccswarm multi-agent worktree"
**Mots-cles Agent B** : "autonomous agent multi-repository coordination", "git worktree AI agent isolation", "parallel agent git branch management", "orchestrator subagent multi-repo pattern", "background agents multi-repo github"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + reconciliation Agent C

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com (sub-agents documentation) : 2 sources
    - git-scm.com (documentation officielle git) : 1 source
    - GitHub repositories (ccswarm, AugmentCode guides) : ~5 candidats
    - GitHub Community discussions : ~3 candidats
    - arXiv (cs.SE) : ~4 candidats
    - WebSearch praticiens : ~3 candidats
  Total identifie (brut, combine A+B) : ~18
  Doublons retires : 3
  Total apres deduplication : ~15

SCREENING (titre + resume)
  Sources screenees : ~15
  Sources exclues au screening : ~7
    - E1 (multi-repo CI/CD generaux, pas agent-specifiques) : ~3
    - E2 (worktrees git generaux sans contexte agent LLM) : ~2
    - E3 (doublons partiels) : ~2

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~8
  Sources exclues apres lecture complete : ~3
    - Hors scope PICOC strict (monorepo, pas multi-repo) : 2
    - Niveau de preuve insuffisant : 1

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 1 : 0
    - Niveau 2 : 0
    - Niveau 3 : 2 (code.claude.com/docs/en/sub-agents ; git-scm.com/docs/git-worktree)
    - Niveau 4 : 0
    - Niveau 5 : 3 (nwiizo/ccswarm ; augmentcode.com guide ; GitHub Community discussions/186469)

  Sources exclues avec raison documentee : 2
    - Articles CI/CD multi-repo generaux : hors scope specificite agent Claude Code
    - Worktree guides sans mention agent LLM : hors scope PICOC
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com, git-scm.com, GitHub repositories |
| Mots-cles | "Claude Code multi-repo worktree agent", "git worktree parallel agent", "Agent isolation worktree" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~11 |
| Sources retenues | 5 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | arXiv (cs.SE), WebSearch, GitHub Community discussions |
| Mots-cles | "autonomous agent multi-repository coordination", "git worktree AI agent isolation", "orchestrator subagent multi-repo" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~7 |
| Sources retenues | 5 (forte convergence avec A) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| CI/CD multi-repo articles generaux | Hors scope — ne traitent pas l'orchestration agent LLM specifiquement |
| Git worktree guides sans contexte agent | Hors scope PICOC — usage git pur sans dimension orchestration agent |
