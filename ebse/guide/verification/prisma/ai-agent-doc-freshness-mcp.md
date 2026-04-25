# PRISMA Flow — PICOC-K : ai-agent-doc-freshness-mcp

**Date de recherche** : 2026-04-25
**Bases interrogées** : arXiv (cs.AI, cs.SE), upstash.com, owasp.org, WebSearch général, documentation MCP officielle
**Mots-clés Agent A** : "Context7 MCP documentation freshness evaluation", "RAG documentation AI agent freshness", "LLM hallucination API documentation code generation", "OWASP knowledge base API freshness", "MCP server documentation retrieval benchmark"
**Mots-clés Agent B** : "LLM training cutoff documentation staleness production", "WebSearch vs RAG documentation freshness comparison", "Context7 independent evaluation benchmark", "API hallucination code generation autonomous agent", "documentation retrieval augmentation code accuracy"
**Protocole** : methodology.md v3.0 §2.1 — double extraction indépendante (Agents A + B) + Agent C (résolution divergence 2 points)

---

## Flux

```
IDENTIFICATION
  Sources identifiées par base (Agent A + Agent B combinés, avant déduplication) :
    - arXiv (cs.AI, cs.SE) : ~10 résultats candidats
    - upstash.com (vendor Context7) : 3 sources
    - OWASP Knowledge Base : 2 sources
    - WebSearch général (benchmarks MCP, practitioner reviews) : ~8 sources
    - Documentation officielle MCP (modelcontextprotocol.io) : ~4 sources
    - Snowballing : ~3 sources
  Total identifié (brut, combiné A+B) : ~30
  Doublons retirés : 6
  Total après déduplication : ~24

SCREENING (titre + résumé)
  Sources screenées : ~24
  Sources exclues au screening : ~18
    - E1 (RAG général sans application documentation spécifique) : ~6
    - E2 (hors scope — MCP general sans documentation freshness) : ~4
    - E3 (vendor marketing sans données) : ~5
    - E4 (blogs opinion sans évaluation) : ~3

ELIGIBILITÉ (lecture complète)
  Sources évaluées en détail : ~6
  Sources exclues après lecture complète : 0

INCLUSION
  Sources incluses dans la synthèse : 6
    - Niveau 1 : 0
    - Niveau 2 : 1 (OWASP Knowledge Base K-4 API documentation freshness)
    - Niveau 3 : 2 (upstash.com/blog/context7-mcp ; upstash.com/blog/new-context7)
    - Niveau 4 : 1 (arXiv 2409.20550 — LLM Hallucinations in Practical Code Generation)
    - Niveau 5 : 2 (WebSearch direct comme méthode ; CLAUDE.md pattern praticien)

  ALERTE CRITIQUE — AUCUNE ÉVALUATION INDÉPENDANTE DE CONTEXT7 :
    Après recherche exhaustive combinée A+B (2026-04-25), AUCUNE publication tierce indépendante
    évaluant Context7 MCP n'a été identifiée. Toutes les évaluations disponibles proviennent
    d'Upstash (créateur et opérateur de Context7). Le N=80 auto-benchmark présente un risque
    de biais ÉLEVÉ par conflit d'intérêt. Cette limitation est décisive pour le grade final.

  Divergence A vs B documentée :
    - Agent A grade 3 : RAG solide OWASP K-4 Level 2 → confiance Context7 comme implémentation
    - Agent B grade 1 : Context7 = auto-benchmark uniquement, aucune validation indépendante
    - Résolution Agent C requis (diff = 2 points)
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | arXiv (cs.AI, cs.SE), upstash.com, owasp.org, modelcontextprotocol.io |
| Mots-clés | "Context7 MCP documentation freshness", "RAG documentation AI agent freshness", "LLM hallucination API documentation" |
| Période couverte | 2023-2026 |
| Sources identifiées | ~14 |
| Sources retenues | 4 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | arXiv (cs.AI, cs.SE), WebSearch, Google Scholar, GitHub |
| Mots-clés | "LLM training cutoff documentation staleness", "Context7 independent evaluation", "API hallucination code generation agent" |
| Période couverte | 2023-2026 |
| Sources identifiées | ~16 |
| Sources retenues | 3 (faible convergence avec A — divergence sur évaluation Context7) |
| Date d'extraction | 2026-04-25 |

---

## Résolution Agent C — Divergence PICOC-K

**Divergence** : Agent A = grade 3 (Modéré/RECOMMANDE) vs Agent B = grade 1 (Faible)
**Écart** : 2 points → Agent C requis selon protocole methodology.md v3.0

**Raisonnement Agent C** :
- Score de départ : OWASP K-4 (Level 2) = 3 (RECOMMANDE)
- Facteur -1 : CoI fort (sources 2 et 3 = Upstash vendor, auto-évaluation sans réplication)
- Facteur -1 : Indirectness (OWASP K-4 = RAG en général ≠ Context7 spécifiquement)
- Score final Agent C : **2 (BONNE PRATIQUE)**

**Rationale** : Le principe RAG pour documentation freshness est solide (OWASP K-4), mais l'extrapolation vers Context7 spécifiquement est non prouvée par des tiers. Grade 2 est conservateur mais justifié par l'absence totale d'évaluation indépendante. Le grade peut être réévalué si une étude tierce de Context7 est publiée.

---

## Sources exclues — raisons documentées

| Source | Raison exclusion |
|--------|-----------------|
| Benchmarks RAG généraux sans application documentation APIs | Indirectness trop élevée pour PICOC-K spécifique |
| Marketing Context7 sans benchmark | Niveau 5 sans données — vendor promotion |
| Comparaisons MCP servers sans focus documentation freshness | Hors scope PICOC strict |
