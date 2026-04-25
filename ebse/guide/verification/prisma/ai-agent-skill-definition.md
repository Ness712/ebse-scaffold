# PRISMA Flow — PICOC Batch 1 - B : ai-agent-skill-definition

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com/docs, agentskills.io, arXiv (cs.AI, cs.SE), GitHub issues anthropics/claude-code, WebSearch general
**Mots-cles Agent A** : "Claude Code skills lazy context loading tokens", "slash commands skill definition SKILL.md", "agent context injection lazy vs eager loading", "LLM context management token reduction patterns", "allowed-tools pre-approval agent workflow"
**Mots-cles Agent B** : "Claude Code skills post-compaction drop limitation", "agent skills open standard multi-vendor", "lazy context loading empirical token reduction", "CLAUDE.md vs skills context loading comparison", "agent skill definition workflow automation"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + verification Agent C (divergence 2 points)

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com/docs (documentation officielle Claude Code) : 3 sources
    - agentskills.io (open standard) : 1 source
    - arXiv (cs.AI, cs.SE) : ~8 resultats candidats
    - GitHub issues anthropics/claude-code : ~4 issues identifiees
    - WebSearch general : ~4 sources
  Total identifie (brut, combine A+B) : ~20
  Doublons retires (meme source identifiee par A et B) : 4
  Total apres deduplication : ~16

SCREENING (titre + resume)
  Sources screenees : ~16
  Sources exclues au screening : ~10
    - E1 (blog opinion sans donnees, niveau 5) : ~4
    - E2 (hors scope PICOC — context management general, pas Claude Code skills) : ~3
    - E3 (doublons partiels) : ~2
    - E4 (produits commerciaux avec bias, sans methodologie) : ~1

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~6
  Sources exclues apres lecture complete : 0 (toutes retenues ou deja exclues au screening)

INCLUSION
  Sources incluses dans la synthese : 6
    - Niveau 2 (open standard independant) : 1 (agentskills.io)
    - Niveau 3 (etude controllee ou vendor-doc) : 4 (docs Anthropic L3)
    - Niveau 4 (etude empirique primaire) : 1 (arXiv 2602.12430, N=42k)
    - Evidence negative incluse : 1 (post-compaction drop, GitHub issue)

  Note sur arXiv 2602.12430 :
    Cet arXiv (N=42k interactions) constitue la preuve empirique la plus solide du batch.
    L'etude mesure le lazy context loading en general (pas specifiquement les skills Claude Code),
    mais le principe s'applique directement. Le large N (42 000 interactions) donne un poids
    important a ce resultat dans la determination du grade.

  Note sur agentskills.io :
    Cet open standard (niveau 2) reduit significativement le concern CoI Anthropic — la
    fonctionnalite n'est pas proprietaire Anthropic mais s'inscrit dans un ecosysteme multi-vendor.
    Ce facteur a contribue au +1 dans grade_factors_applied.

  Sources exclues avec raison documentee : 2
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com/docs, arXiv (cs.AI, cs.SE), WebSearch general |
| Mots-cles | "Claude Code skills lazy context loading tokens", "allowed-tools pre-approval agent workflow", "LLM context management token reduction" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~12 |
| Sources retenues | 5 (docs officielle + arXiv N=42k + open standard) |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com/docs, agentskills.io, GitHub issues anthropics/claude-code, arXiv |
| Mots-cles | "Claude Code skills post-compaction drop limitation", "agent skills open standard multi-vendor", "lazy context loading empirical comparison" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~8 |
| Sources retenues | 5 (dont post-compaction limitation focalisee) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| Blog posts token optimization sans donnees primaires | Niveau 5 redondant avec arXiv 2602.12430 inclus |
| Outils context management commerciaux (LangChain, etc.) | Hors scope PICOC strict — pas specifique Claude Code skills |

---

## Note sur la divergence Agent A / Agent B

Agent A a prioritise l'evidence positive (arXiv N=42k, -59% tokens) et l'open standard.
Agent B a prioritise la limitation post-compaction drop et l'absence de RCT direct skills vs CLAUDE.md.
La divergence de 2 points (A=4 vs B=2) a necessite resolution par Agent C.
Agent C : le N=42k est solide (L4) mais mesure le lazy loading en general, pas les skills Claude Code
specifiquement. L'open standard reduit le CoI. La limitation post-compaction est reelle mais gérable.
Grade final : 3 (arXiv L4 N>1000 = +1, open standard multi-vendor = attenuation CoI,
limite par absence RCT direct et post-compaction drop).
