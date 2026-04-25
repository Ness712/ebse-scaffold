# Double Extraction — ai-agent-file-reference-validation
**Date** : 2026-04-25
**Protocole** : methodology.md v3.0

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 4 | 3 |
| Sources incluses | 5 | 5 |
| Source principale | ACM ISSTA 2025 (44% tasks affected) + arXiv 2512.12117 (100% prevention) | USENIX Security 2025 N=576k + arXiv 2512.12117 |
| Limitation principale | Bug PreToolUse #316 (limitation mécanique connue) | Bug PreToolUse #316 — mécanisme incomplet sans règle MANDATORY |

## Kappa inter-rater

- Kappa global (12 PICOCs) = 0.25 (Landis & Koch 1977 : accord "fair")
- Kappa batch 3 (PICOC-I à L) : concordance = 3/4 (I diff=1, J=accord, K diff=2, L diff=1)
- Ce PICOC : diff = 1 → divergence mineure, moyenne arrondie appliquée

## Divergences et résolution

**Divergence Grade** : Agent A = 4 (Modéré-Fort) vs Agent B = 3 (Élevé)

Cause Agent A (grade 4) : La combinaison ACM ISSTA 2025 (44% tasks affected) + arXiv 2512.12117 (100% prevention avec vérification mécanique) + USENIX N=576k justifie un grade 4. L'effet documenté est important (44% tasks affectées sans protection), et la solution est prouvée efficace (100% prevention). L'agent A accordait un bonus pour la convergence de 3 papers indépendants peer-reviewed + l'effet-taille important.

Cause Agent B (grade 3) : L'agent B reconnaissait la solidité des preuves (USENIX N=576k, arXiv 2512.12117) mais appliquait un facteur minus pour l'indirectness entre environnements de laboratoire (benchmarks contrôlés) et production réelle (agent Claude Code autonome). Grade 3 = RECOMMANDE suffisant, grade 4 serait surestimé sans production RCT.

Résolution : Moyenne arrondie (4+3)/2 = 3.5 → arrondi à **4**. Justification du choix d'arrondi supérieur : convergence exceptionnelle de 5 papers niveau 4 peer-reviewed, USENIX N=576k (très grand échantillon), effet-taille important documenté (44% tasks, 5-21% taux production), et solution 100% effective prouvée en conditions contrôlées. C'est le PICOC avec le corpus de preuves le plus robuste du Batch 3.

**Accord recommandation** : ACCORD PARFAIT — A et B convergent sur le mécanisme triple-défense (règle MANDATORY + hook PreToolUse + Glob/Grep obligatoire) comme solution recommandée.

## Grade final réconcilié

- **Grade : 4 (RECOMMANDE)**
- Rationale de réconciliation : Moyenne (3+4)/2 = 3.5 arrondie à 4. Justifié par la convergence exceptionnelle (5 papers peer-reviewed niveau 4 indépendants), l'effet-taille important (44% tasks ACM ISSTA, N=576k USENIX), et la solution prouvée 100% effective (arXiv 2512.12117). Le corpus de preuves de PICOC-L est le plus solide du Batch 3. Mécanisme triple-défense recommandé : règle MANDATORY CLAUDE.md + hook PreToolUse + Glob/Grep avant référence.
