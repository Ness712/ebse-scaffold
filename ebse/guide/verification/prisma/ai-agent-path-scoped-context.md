# PRISMA Flow — PICOC Batch 1 - C : ai-agent-path-scoped-context

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com/docs, GitHub issues anthropics/claude-code, WebSearch general, community discussions
**Mots-cles Agent A** : "Claude Code rules paths frontmatter scoped context", "path-scoped instructions Claude Code .claude/rules", "context loading selective path-based agent", "CLAUDE.md scoping selective file rules", "project instructions path filter Claude"
**Mots-cles Agent B** : "Claude Code paths: frontmatter not working bug", "rule files paths field ignored issue", "path-scoped rules loading failure reproduction", "Claude Code .claude/rules path scoping reliability", "has-repro rule loading bug claude-code"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + accord direct (grade identique, pas d'Agent C requis)

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com/docs (documentation officielle Claude Code) : 2 sources
    - GitHub issues anthropics/claude-code : ~6 issues identifiees (bug reports)
    - WebSearch general (blog posts, community) : ~4 sources
  Total identifie (brut, combine A+B) : ~12
  Doublons retires (meme source identifiee par A et B) : 2
  Total apres deduplication : ~10

SCREENING (titre + resume)
  Sources screenees : ~10
  Sources exclues au screening : ~5
    - E1 (blog opinion sans reproduction documentee) : ~3
    - E2 (hors scope — path filtering en general, pas Claude Code rules) : ~1
    - E3 (doublons partiels) : ~1

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~5
  Sources exclues apres lecture complete : 0 (toutes retenues ou exclues au screening)

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 3 (vendor-doc ou evidence empirique tracee) : 5
      - 2 sources documentation officielle Anthropic (spec de la fonctionnalite)
      - 3 GitHub issues avec label has-repro (evidence negative confirmee)

  Note critique sur les GitHub issues :
    Les GitHub issues avec label `has-repro` constituent une evidence negative de niveau 3
    dans notre classification — ce sont des rapports d'incidents avec reproduction documentee
    dans le tracker officiel du vendeur lui-meme. Le label `not-planned` sur l'issue #16853
    est particulierement significatif : il indique qu'Anthropic a pris connaissance du bug et
    n'a pas planifie de correction dans la roadmap connue au 2026-04-25.

  Sources exclues avec raison documentee : 0 (toutes issues sans has-repro exclues au screening)
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com/docs, WebSearch general |
| Mots-cles | "Claude Code rules paths frontmatter scoped context", "path-scoped instructions Claude Code .claude/rules" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~6 |
| Sources retenues | 3 (docs officielle + mention indirecte best-practices) |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | GitHub issues anthropics/claude-code, WebSearch (bug reports) |
| Mots-cles | "Claude Code paths: frontmatter not working bug", "rule files paths field ignored issue has-repro" |
| Periode couverte | 2025-2026 |
| Sources identifiees | ~6 |
| Sources retenues | 3 (3 GitHub issues has-repro) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| GitHub issues routing paths sans label has-repro | Evidence anecdotique insuffisante — non qualifiable comme evidence negative confirmed |
| Blog posts sur path filtering context (general) | Hors scope PICOC strict — pas specifique Claude Code rules paths: frontmatter |
| Community discussions sans reproduction documentee | Niveau 5 anecdotique |

---

## Note sur l'accord Agent A / Agent B

Accord parfait sur grade 1 (BONNE PRATIQUE) — pas de divergence, pas d'Agent C requis.
Les deux agents ont abouti a la meme conclusion par des chemins differents :
- Agent A : feature underdocumentee, theorie solide mais donnees directes manquantes → grade 1
- Agent B : 3 bugs GitHub has-repro confirmes, comportement impredictible → grade 1 (meme conclusion, evidence plus forte)
Le kappa pour ce PICOC est de 1.0 (accord parfait sur la classification binaire >=3 vs <3).

## AVERTISSEMENT CRITIQUE

La fonctionnalite paths: est documentee dans les specs officielles Anthropic mais presente
un comportement impredictible en production confirme par 3 bugs has-repro dont l'un (issue #16853)
est tagged `not-planned` — indiquant qu'Anthropic ne prevoit pas de correction a court terme.
Ne pas dependre de cette fonctionnalite pour la conformite a des regles critiques (securite, auth).
Alternative robuste recommandee : imports @fichier explicites ou skills `context: fork`.
