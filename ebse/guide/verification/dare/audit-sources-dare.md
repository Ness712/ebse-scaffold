# DARE — `audit-sources` — Énumération des sources de vérité avant audit

**Date** : 2026-04-23
**Protocole** : methodology.md v3.0, phase 1.1

---

## D — Define

**Question de recherche** :
> L'énumération explicite et exhaustive de toutes les sources de vérité applicables AVANT l'exécution d'un audit logiciel améliore-t-elle la complétude et la traçabilité des findings par rapport à une approche exploratoire par dimensions ?

**Sous-questions** :
1. Les standards d'audit logiciel prescrivent-ils une phase d'inventaire des sources préalable à l'exécution ?
2. Existe-t-il des preuves empiriques que la pré-spécification des critères réduit le taux de faux négatifs ?
3. Comment organiser taxonomiquement les sources de vérité pour garantir l'exhaustivité ?

---

## A — Appraise

**Types de preuves recherchées** (par priorité décroissante) :
1. Standards normatifs internationaux définissant les inputs obligatoires d'un audit (ISO, IEEE)
2. Cadres de conformité par catalogue/checklist (NIST, OWASP)
3. Méta-analyses ou revues systématiques sur l'efficacité des inspections
4. Études empiriques contrôlées sur les taux de détection (N > 50)
5. Littérature grise experte avec pratique documentée

**Critères d'inclusion** :
- Porte sur l'inspection, l'audit ou la revue de logiciels
- Aborde explicitement les inputs / sources / critères pré-audit
- Mesure la complétude, la traçabilité ou le taux de détection

**Critères d'exclusion** :
- Audits financiers (hors scope logiciel)
- Approches purement outillées sans dimension méthodologique
- Sources antérieures à 2000 sans réplication récente (sauf fondationnelles)

---

## R — Resolve

**Résolution des conflits** :
- Standards normatifs (niveau 1) > études empiriques en cas de contradiction
- En cas de conflit entre études : comparer niveaux pyramidaux + évaluer biais
- Résultat négatif (approche exhaustive inefficace) : tracer l'incoherence (-1 GRADE), ne pas exclure
- Donnée manquante : noter l'imprecision (-1 GRADE), ne pas remplacer par hypothèse

---

## E — Evaluate

**Suffisance** : GRADE ≥ 3 avec convergence ≥ 3 sources de niveau ≤ 2
**Insuffisance → escalade PO** : si sources contradictoires niveau 1 ou GRADE < 2
