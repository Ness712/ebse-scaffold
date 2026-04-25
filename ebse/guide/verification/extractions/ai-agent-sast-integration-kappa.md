# Double Extraction — ai-agent-sast-integration
**Date** : 2026-04-25
**Protocole** : methodology.md v3.0

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 3 | 3 |
| Sources incluses | 6 | 5 |
| Source principale | Springer DIMVA 2024 N=300 (86% précision OWASP Top 10) | ACM ISSTA peer-reviewed + OWASP L2 convergence |
| Limitation principale | Indirectness benchmarks DIMVA vs production réelle | Données latence/RAM basées sur benchmarks vendor (semgrep.dev) |

## Kappa inter-rater

- Kappa global (12 PICOCs) = 0.25 (Landis & Koch 1977 : accord "fair")
- Kappa batch 3 (PICOC-I à L) : concordance = 3/4 (I diff=1, J=accord, K diff=2, L diff=1)
- Ce PICOC : diff = 0 → ACCORD PARFAIT, pas de résolution nécessaire

## Divergences et résolution

**Aucune divergence** : A et B convergent sur grade 3 (RECOMMANDE) de façon indépendante.

Agent A s'appuyait principalement sur Springer DIMVA 2024 N=300 (86% précision empirique) + OWASP L2 backing.
Agent B s'appuyait principalement sur convergence ACM ISSTA + OWASP L2 + data latence praticiens.
Les deux aboutissent au même grade 3 par des chemins de raisonnement différents mais convergents.

**Accord recommandation** : ACCORD PARFAIT — A et B convergent sur Semgrep comme outil pre-commit + CodeQL comme CI nightly + défense en profondeur multi-couches.

## Grade final réconcilié

- **Grade : 3 (RECOMMANDE)**
- Rationale de réconciliation : Accord parfait A+B sans divergence. Grade 3 retenu directement. Semgrep recommandé pour pre-commit (latence < 20s, offline, 86% précision OWASP), CodeQL pour CI nightly (profondeur dataflow), Trivy pour dépendances (complément). Schéma défense en profondeur multi-couches validé par les deux agents indépendants.
