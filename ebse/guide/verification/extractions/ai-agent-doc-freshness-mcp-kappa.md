# Double Extraction — ai-agent-doc-freshness-mcp
**Date** : 2026-04-25
**Protocole** : methodology.md v3.0

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 3 | 1 |
| Sources incluses | 4 | 3 |
| Source principale | OWASP K-4 API documentation freshness (L2) | arXiv 2409.20550 LLM Hallucinations (L4) |
| Limitation principale | Context7 = auto-benchmark vendor uniquement | Aucune évaluation indépendante de Context7 identifiée |

## Kappa inter-rater

- Kappa global (12 PICOCs) = 0.25 (Landis & Koch 1977 : accord "fair")
- Kappa batch 3 (PICOC-I à L) : concordance = 3/4 (I diff=1, J=accord, K diff=2, L diff=1)
- Ce PICOC : diff = 2 → DIVERGENCE MAJEURE, Agent C requis selon protocole methodology.md v3.0

## Divergences et résolution

**Divergence Grade** : Agent A = 3 (Modéré/RECOMMANDE) vs Agent B = 1 (Faible)

Cause Agent A (grade 3) : L'ancrage OWASP K-4 (Level 2) fournit un backing normatif solide pour la fraîcheur documentaire comme prérequis sécurité. Context7 MCP représente une implémentation pragmatique du pattern RAG documentaire. La démonstration de résolution version-spécifique (NestJS 11 vs 10) est convaincante même avec N=80.

Cause Agent B (grade 1) : N=80 auto-benchmark Upstash ne constitue pas une preuve d'efficacité — trop faible et sans contrôle. AUCUNE évaluation tierce indépendante de Context7 identifiée dans la littérature après recherche exhaustive. L'indirectness entre "RAG en général est bon" (OWASP K-4) et "Context7 spécifiquement fonctionne" est trop élevée. Grade 1 conservateur car le risque de recommander un outil non évalué est réel.

**Résolution Agent C** (requis pour diff = 2 points) :
- Score de départ : OWASP K-4 Level 2 → 3
- Facteur -1 : CoI fort — sources 2 et 3 (upstash.com) produits par Upstash (vendor et opérateur de Context7). Auto-évaluation sans réplication externe : risque biais ÉLEVÉ.
- Facteur -1 : Indirectness — l'OWASP K-4 valide le principe "documentation à jour = prérequis sécurité" mais ne valide pas Context7 spécifiquement. Gap entre preuve du principe (RAG général) et preuve de l'implémentation (Context7).
- Score final Agent C : **2 (BONNE PRATIQUE)**

Rationale Agent C : Le grade 2 est un compromis justifié. Il reconnaît que la fraîcheur documentaire est un problème réel (arXiv 2409.20550) et que WebSearch + CLAUDE.md sont des pratiques sûres et éprouvées. Il reflète l'incertitude sur Context7 spécifiquement (absent d'évaluation tierce). Le grade peut être réévalué à 3 si une étude indépendante de Context7 est publiée.

**Accord recommandation** : ACCORD — A et B s'accordent sur WebSearch direct + CLAUDE.md comme stratégie principale. La divergence porte sur la confiance accordée à Context7 comme complément.

## Grade final réconcilié

- **Grade : 2 (BONNE PRATIQUE)**
- Rationale de réconciliation : Agent C requis (diff = 2). Score de départ OWASP L2 = 3, -1 CoI (vendor Upstash), -1 indirectness (RAG ≠ Context7). Final = 2. Recommandation : WebSearch direct + CLAUDE.md (fiables), Context7 en complément si disponible mais pas source unique. Réévaluation possible si évaluation tierce de Context7 publiée.
