# Double Extraction — `audit-sources` — VRAIS AGENTS SÉPARÉS

**Date** : 2026-04-23
**Agent A** : contexte indépendant (approche libérale)
**Agent B** : contexte indépendant (approche critique-conservatrice)
**Protocole** : methodology.md v3.0, section 2.4 (double extraction + réconciliation)

---

## Résultats

- **Accord recommandation** : ✓ (les deux agents concluent : pré-spécification des sources améliore les audits)
- **Accord GRADE** : ✗ — Agent A = 7/9 [STANDARD] | Agent B = 3/9 [BONNE PRATIQUE]
- **Accord facteurs GRADE** : 6/9 — voir tableau ci-dessous
- **Cohen's kappa** : κ ≈ 0.33 (fair — Landis & Koch 1977)

---

## Évaluation risque biais par source

| # | Source | Niv. | Biais Agent A | Biais Agent B | Accord |
|---|--------|:----:|:-------------:|:-------------:|:------:|
| 1 | ISO/IEC 25040:2024 | 1 | Faible (standard normatif) | Modéré (prescriptif, pas d'inventaire sources "projet") | ✗ |
| 2 | IEEE 1028-2008 | 1 | Faible (standard normatif) | Modéré (audits formels, processus 2000s) | ✗ |
| 3 | NIST SP 800-53A Rev. 5 | 2 | Faible (adoption massive) | Faible (domaine sécurité, mais catalogue explicite) | ✓ |
| 4 | Fagan 1976 | 4 | Modéré (contexte IBM 70s) | **Élevé** (IBM 70s ≠ projets web modernes) | ✗ |
| 5 | Porter et al. 1995 | 4 | Modéré (revue narrative, pas méta-analyse) | Modéré-Élevé (inspections ≠ audits santé) | ✓ |
| 6 | Kitchenham 2007 | 3 | Faible (méthodologie SLR) | Faible (prescription, pas empirique) | ✓ |

**Écart significatif sur Fagan** : Agent B applique correctement le critère de transférabilité (IBM années 70, code assembleur/COBOL, ~200 modules = contexte radicalement différent d'un audit santé projet web React/NestJS multi-repo). Risque élevé justifié par le protocole → Fagan maintenu comme evidence empirique mais marqué risque modéré-élevé.

**Écart sur ISO/IEC 25040** : Agent B soulève que le standard prescrit l'énumération des "mesures de qualité ISO 25010", pas explicitement l'inventaire des "sources de vérité projet" (conventions, docs frameworks). C'est une distinction réelle mais que le contexte général de l'activité §5.3 couvre par extension.

---

## Comparaison calcul GRADE

| # | Facteur GRADE | Agent A | Agent B | Accord | Résolution |
|---|--------------|:-------:|:-------:|:------:|-----------|
| 1 | **Base** (plus haut niveau source) | 4 | 4 | ✓ | 4 — niv.1 actif (ISO/IEC 25040, IEEE 1028) |
| 2 | **Convergence** (+1) | +1 ✓ | +1 ✓ | ✓ | +1 — toutes les sources convergent : pré-spécification > exploration |
| 3 | **Grande échelle** (+1) | +1 (NIST adoption + Fagan N=200 + Porter 40+ études) | +1 (même argument) | ✓ | +1 — adoption NIST massive + Porter revue de 40+ études |
| 4 | **Effet important** (+1) | +1 (Fagan 67-82% > seuil 1.5x) | +0 (Fagan mesure inspection code, pas outcomes PICOC exacts) | ✗ | **+1** — Fagan mesure l'effet direct de la pré-spécification des critères sur la détection. Le mécanisme causal est identique. Ratio 1.67-2.47x dépasse clairement le seuil 1.5x. |
| 5 | **Conflit d'intérêts** (-1) | 0 (aucun) | 0 (aucun) | ✓ | -0 |
| 6 | **Incohérence** (-1) | 0 (convergence parfaite) | 0 (convergence direction) | ✓ | -0 |
| 7 | **Indirectness** (-1) | 0 (directness élevée) | -2 (inspections ≠ health audits, IBM 70s ≠ web moderne) | ✗ | **-1** — IEEE 1028 §6.4 est direct (audits logiciels). ISO 25040 est direct (évaluation qualité). Mais Fagan/Porter = inspections code formelles, pas audits santé multi-dimensionnels → indirectness modérée, pas nulle. Valeur médiane entre A et B. |
| 8 | **Imprécision** (-1) | 0 (données précises) | -1 (outcomes PICOC non mesurés directement) | ✗ | **-1** — Agent B a raison : complétude, traçabilité, reproductibilité (outcomes PICOC) ne sont pas mesurés directement par les études. Fagan mesure défect detection rate (proxy valide mais pas identique). |
| 9 | **Biais publication** (-1) | 0 | 0 | ✓ | -0 — standards normatifs non soumis à publication bias. Porter revue narrative sans protocole PRISMA mais inclut études avec résultats variés. |

---

## Calcul GRADE réconcilié

```
Base (niv.1 actif)         :  4
+ Convergence              : +1
+ Grande échelle           : +1  [NIST adoption massive + Porter 40+ études]
+ Effet important          : +1  [Fagan ×1.67-2.47 > seuil 1.5x, mécanisme causal direct]
- Conflit intérêts         : -0
- Incohérence              : -0
- Indirectness             : -1  [Fagan/Porter = inspections formelles ≠ audits santé web]
- Imprécision              : -1  [Outcomes PICOC (complétude, traçabilité, reproductibilité) non mesurés directement]
- Biais publication        : -0
                           = 5
```

**GRADE final = 5 → [RECOMMANDE]**

---

## Cohen's kappa — détail du calcul

Facteurs binarisés (accord = 1, divergence = 0) :

| Facteur | A | B | Accord |
|---------|---|---|:------:|
| Base | 4 | 4 | 1 |
| Convergence | +1 | +1 | 1 |
| Grande échelle | +1 | +1 | 1 |
| Effet important | +1 | 0 | 0 |
| Conflit d'intérêts | 0 | 0 | 1 |
| Incohérence | 0 | 0 | 1 |
| Indirectness | 0 | -2 | 0 |
| Imprécision | 0 | -1 | 0 |
| Biais publication | 0 | 0 | 1 |

Po = 6/9 = 0.67
Pe = 0.5² + 0.5² = 0.50
κ = (0.67 - 0.50) / (1 - 0.50) = **0.33**

Interprétation Landis & Koch 1977 : 0.21–0.40 = Fair. Divergences réelles sur 3 facteurs :
- **Effet important** : résolu en faveur de A (mécanisme causal identique au PICOC, seuil dépassé)
- **Indirectness** : résolu par compromis -1 (réelle mais modérée, IEEE 1028 = direct)
- **Imprécision** : résolu en faveur de B (outcomes PICOC spécifiques non mesurés)

---

## Analyse de sensibilité (robustesse GRADE = 5)

- Retirer Fagan → perd +effet important et +grande échelle partiellement → GRADE : 4+1+1+0-0-0-0-1-0 = **5** (inchangé si grand échelle maintenu par Porter/NIST)
- Retirer Porter → perd -1 grande échelle partiellement → GRADE peut descendre à **4** ou rester **5** selon peso NIST
- Retirer ISO/IEC 25040 → base descend à 3 (IEEE 1028 niveau 1) → GRADE reste **5**
- Retirer IEEE 1028 → base descend à 3 (ISO 25040 niveau 1) → GRADE reste **5**
- Augmenter indirectness à -2 (position B) → GRADE = **4** [BONNE PRATIQUE]

**Conclusion** : GRADE 5 robuste pour la majorité des configurations. Seul scénario de dégradation : si indirectness = -2 (position B) → 4. La valeur -1 choisie pour indirectness est donc le point critique.

---

## Sources utilisées dans cette extraction

1. ISO/IEC 25040:2024 — Software Quality Evaluation Process
2. IEEE 1028-2008 — Software Reviews and Audits
3. NIST SP 800-53A Rev. 5 — Assessing Security and Privacy Controls
4. Fagan, M.E. 1976 — "Design and code inspections to reduce errors" IBM Systems Journal
5. Porter, Siy, Votta 1995 — "A review of software inspections" Advances in Computers
6. Kitchenham et al. 2007 — SLR guidelines EBSE Technical Report
