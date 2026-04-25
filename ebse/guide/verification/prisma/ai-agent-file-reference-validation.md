# PRISMA Flow — PICOC-L : ai-agent-file-reference-validation

**Date de recherche** : 2026-04-25
**Bases interrogées** : arXiv (cs.SE, cs.AI), ACM ISSTA proceedings, USENIX Security proceedings, WebSearch général
**Mots-clés Agent A** : "LLM hallucination file imports code generation", "phantom imports package hallucination code LLM", "static analysis file reference verification AI agent", "code generation incorrect path hallucination", "AST analysis hallucination detection code"
**Mots-clés Agent B** : "LLM code hallucination non-existent module import", "package hallucination rate empirical study", "mechanical verification file references AI code", "PreToolUse hook file existence check", "code completion hallucination file system verification"
**Protocole** : methodology.md v3.0 §2.1 — double extraction indépendante (Agents A + B, mots-clés différents)

---

## Flux

```
IDENTIFICATION
  Sources identifiées par base (Agent A + Agent B combinés, avant déduplication) :
    - arXiv (cs.SE, cs.AI) : ~14 résultats candidats
    - ACM ISSTA proceedings (via WebSearch) : ~4 sources
    - USENIX Security proceedings (via WebSearch) : ~3 sources
    - WebSearch général (Claude Code docs, practitioner reports) : ~8 sources
    - Snowballing (références des papers principaux) : ~5 sources
  Total identifié (brut, combiné A+B) : ~34
  Doublons retirés (convergence A+B sur 3 papers principaux) : 12
  Total après déduplication : ~22

SCREENING (titre + résumé)
  Sources screenées : ~22
  Sources exclues au screening : ~15
    - E1 (hallucinations LLM générales sans focus références fichiers/modules) : ~6
    - E2 (hors scope — focus factual hallucination, pas code references) : ~5
    - E3 (doublons partiels) : ~2
    - E4 (pas de données empiriques — théoriques uniquement) : ~2

ELIGIBILITÉ (lecture complète)
  Sources évaluées en détail : ~7
  Sources exclues après lecture complète : 0
    - Toutes les 7 sources évaluées retenues

INCLUSION
  Sources incluses dans la synthèse : 7
    - Niveau 1 : 0
    - Niveau 2 : 0
    - Niveau 3 : 1 (Claude Code Hooks Guide — PreToolUse mechanism)
    - Niveau 4 : 5 (ACM ISSTA 2025 44% tasks ; arXiv 2512.12117 100% prevention ; USENIX 2025 N=576k ; arXiv 2406.10279 package hallucinations ; arXiv 2501.19012 importing phantoms)
    - Niveau 5 : 1 (rapport usage empirique PreToolUse bug #316)

  Note méthodologique :
    - Convergence exceptionnelle : 3 études indépendantes (ACM ISSTA, USENIX, arXiv 2512.12117) convergent
      sur le même problème et la même solution (vérification mécanique)
    - USENIX N=576k = très grand échantillon — robustesse statistique élevée
    - Divergence A vs B (diff = 1 point) résolue par règle conservative : grade 4 retenu
    - Bug #316 PreToolUse = évidence négative documentée, justifie recommandation triple-défense

  Corpus de preuves noté comme particulièrement solide pour un PICOC "ai-collaboration" :
    - 5 papers niveau 4 peer-reviewed convergents est supérieur à la majorité des PICOCs du batch
    - Effet important quantifié (44%, 5-21%, 100% prevention) avec N importants
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | arXiv (cs.SE, cs.AI), ACM ISSTA, WebSearch général |
| Mots-clés | "LLM hallucination file imports code generation", "phantom imports package hallucination", "AST analysis hallucination detection code" |
| Période couverte | 2023-2026 |
| Sources identifiées | ~16 |
| Sources retenues | 5 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | arXiv (cs.SE, cs.AI), USENIX Security, WebSearch, docs.anthropic.com |
| Mots-clés | "LLM code hallucination non-existent module import", "package hallucination rate empirical study", "mechanical verification file references AI code" |
| Période couverte | 2023-2026 |
| Sources identifiées | ~18 |
| Sources retenues | 5 (convergence élevée avec A sur papers principaux) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentées

| Source | Raison exclusion |
|--------|-----------------|
| Hallucination factuelle LLM (noms, dates, faits) | Hors scope — PICOC-L = références code/modules, pas faits généraux |
| Code completion benchmarks sans mesure hallucination références | Hors scope PICOC strict |
| Détection hallucinations post-génération sans prévention | Hors scope — PICOC-L focus prévention, pas détection après |
