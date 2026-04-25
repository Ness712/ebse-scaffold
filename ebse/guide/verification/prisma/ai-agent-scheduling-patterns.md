# PRISMA Flow — PICOC Batch 1 - D : ai-agent-scheduling-patterns

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com/docs, WebSearch general, arXiv (cs.SE, cs.DC), Google SRE Book references
**Mots-cles Agent A** : "Claude Code scheduling /loop Desktop Tasks Cloud Routines", "autonomous agent scheduling patterns recurring tasks", "Claude Code ScheduleWakeup cron task", "agent automation scheduling event-driven webhook", "Cloud Routines research preview stability"
**Mots-cles Agent B** : "Claude Code /loop polling session scheduling", "Desktop Tasks macOS Claude Code scheduled agent", "Cloud Routines webhook GitHub PR trigger Claude", "autonomous agent cron scheduling decision matrix", "scheduled tasks Claude Code caps limitations"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + resolution divergence (1 point, moyenne arrondie)

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com/docs (documentation officielle Claude Code) : 5 sources
    - WebSearch general (blog posts, SRE references) : ~6 sources
    - arXiv (cs.SE, cs.DC) : ~4 resultats candidats
  Total identifie (brut, combine A+B) : ~15
  Doublons retires (meme source identifiee par A et B) : 3
  Total apres deduplication : ~12

SCREENING (titre + resume)
  Sources screenees : ~12
  Sources exclues au screening : ~7
    - E1 (blog opinion sans donnees, niveau 5) : ~3
    - E2 (hors scope — scheduling en general, pas Claude Code specifique) : ~2
    - E3 (doublons partiels ou versions anterieures de la doc) : ~2

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~5
  Sources exclues apres lecture complete : 0

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 2 (etude empirique controllee ou standard etabli) : 1 (Google SRE Book)
    - Niveau 3 (vendor-doc) : 4 (docs Anthropic pour les 3 mecanismes + common-workflows)
    - Niveau 4 : 0 (pas d'etudes empiriques independantes sur ce PICOC specifique)

  Note critique sur la concentration de sources vendor :
    Toutes les sources descriptives des mecanismes (/loop, Desktop Tasks, Cloud Routines)
    sont exclusivement Anthropic — CoI 100% sur ce PICOC. Il n'existe pas a ce jour (2026-04-25)
    d'etudes independantes comparant ces mecanismes. Cette concentration est documentee dans
    grade_factors_applied comme facteur minus, et justifie le grade 2 (BONNE PRATIQUE)
    plutot que 3-4. Le Google SRE Book (niveau 2) supporte le principe general d'hierarchie
    d'automatisation mais ne valide pas les mecanismes Claude Code specifiques.

  Sources exclues avec raison documentee : 2
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com/docs, WebSearch general (SRE references) |
| Mots-cles | "Claude Code scheduling /loop Desktop Tasks Cloud Routines", "agent automation scheduling event-driven webhook" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~8 |
| Sources retenues | 5 (docs officielle + Google SRE Book) |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com/docs, WebSearch, arXiv (cs.SE) |
| Mots-cles | "Claude Code /loop polling session scheduling", "Cloud Routines webhook GitHub PR trigger", "scheduled tasks caps limitations" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~7 |
| Sources retenues | 5 (meme sources, meme conclusions mais grade superieur) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| arXiv scheduling en general (cron, distributed systems) | Hors scope PICOC strict — mecanismes Claude Code specifiques non evalues |
| Blog posts sur automation scheduling (CI/CD general) | Niveau 5 redondant, pas specifique au mecanisme Claude Code |

---

## Note sur la divergence Agent A / Agent B

Divergence de 1 point : Agent A grade 1 (matrice claire mais Cloud Routines instable, vision conservative),
Agent B grade 2 (meme conclusion, meme limitations, mais matrice valide justifie grade superieur).
Resolution par moyenne arrondie : (1 + 2) / 2 = 1.5 → arrondi a 2.
Logique : la matrice de decision Anthropic est differenciee et actionnable meme si une composante
(Cloud Routines) est en research preview. Les 2 autres mecanismes (/loop, Desktop Tasks) sont stables.
Grade final : 2 (BONNE PRATIQUE) avec marquage [RESEARCH PREVIEW] obligatoire pour Cloud Routines.
