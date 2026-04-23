# PICOC — `audit-sources` — Énumération des sources de vérité avant audit

**Date** : 2026-04-23
**Protocole** : methodology.md v3.0, phase 1.2
**Revue par** : peer review interne (v2 post-corrections)

---

## PICOC

| Composante | Définition opérationnelle |
|-----------|--------------------------|
| **Population** | Équipes de développement logiciel réalisant des audits de santé de projet (applications web, multi-repo, stacks TypeScript/JavaScript, équipes 1-10) |
| **Intervention** | Énumération explicite et exhaustive de TOUTES les sources de vérité applicables (normes universelles, docs officielles des outils, conventions projet) dans un inventaire documenté AVANT l'exécution de l'audit |
| **Comparison** | Audit exploratoire par dimensions : exploration du code, application d'une grille de dimensions ISO 25010, sans inventaire préalable des sources ni vérification de couverture |
| **Outcome** | (1) Taux de complétude : proportion des exigences applicables effectivement vérifiées ; (2) Traçabilité : chaque finding lié à une source explicite et identifiable ; (3) Reproductibilité : deux sessions indépendantes sur le même codebase produisent des findings convergents ; (4) Taux de faux négatifs : proportion d'exigences critiques manquées |
| **Context** | Développement logiciel professionnel, projets web avec stack déterminée, environnement CI/CD, présence possible d'agents IA |

---

## Opérationnalisation des outcomes

**Complétude** : ratio N_verified / N_applicable où N_applicable = somme des exigences de toutes les sources inventoriées qui s'appliquent au profil projet. Seuil minimal acceptable : ≥ 80 %.

**Traçabilité** : présence d'un lien [source:section] pour chaque finding. Binaire par finding.

**Reproductibilité** : Cohen's kappa ≥ 0.61 (substantial) entre deux sessions indépendantes sur le même codebase.

**Taux de faux négatifs** : proportion d'exigences classées CRITIQUE ou MAJEUR non détectées par l'approche. Calculé par comparaison avec une liste de référence (gold standard).

---

## Périmètre de la SLR

Cette SLR est complémentaire à `project-health-audit` (GRADE 3 — structure d'audit + 7 dimensions ISO 25010). Elle répond à une question distincte : non pas "comment structurer les findings" mais "comment garantir que toutes les sources applicables ont été consultées avant de commencer".

---

## Corrections apportées (peer review)

- **P** : ajout "équipes 1-10" pour délimiter la population (éviter l'extrapolation à des organisations de grande taille)
- **I** : précision "dans un inventaire documenté" pour distinguer de l'énumération mentale informelle
- **O** : ajout opérationnalisation quantitative des 4 outcomes pour permettre mesure réelle
- **C** : précision "sans vérification de couverture" pour clarifier la distinction avec I
