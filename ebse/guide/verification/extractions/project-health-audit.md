# Double Extraction — `project-health-audit` — VRAIS AGENTS SEPARES

**Date** : 2026-04-23
**Agent A** : af13689a1963208a4 (contexte independant)
**Agent B** : a50e032c5907d4ea4 (contexte independant)
**Protocole** : methodology.md v3.0, section 2.4 (double extraction + reconciliation)

---

## Resultats

- **Accord recommandation** : ✓ (les deux agents concluent : audit structure multi-dimensions avec grille predefined > ad hoc > automatise seul)
- **Accord GRADE** : ✗ — Agent A = 3/7 [RECOMMANDE] | Agent B = 0/7 [CHOIX D'EQUIPE]
- **Accord facteurs GRADE** : 7/10 — voir tableau ci-dessous
- **Cohen's kappa** : κ ≈ 0.40 (fair — Landis & Koch 1977)

---

## Evaluation risque biais par source

| # | Source | Niv. | Biais Agent A | Biais Agent B | Accord |
|---|--------|:----:|:-------------:|:-------------:|:------:|
| 1 | IEEE 1028-2008 | 1 | Faible (standard normatif) | Faible | ✓ |
| 2 | ISO/IEC 25040:2024 | 1 | Faible (standard normatif) | Faible | ✓ |
| 3 | SWEBOK v4 2024 | 1 | Faible (consensus multi-organismes) | Faible | ✓ |
| 4 | OWASP WSTG v4.2 | 2 | Faible (open consortium) | **Modere** (domaine securite seul, pas multi-dim.) | ✗ |
| 5 | OWASP ASVS 4.0.3 | 2 | Faible | Faible | ✓ |
| 6 | McIntosh et al. 2020 EMSE | 4 | Modere (contexte review moderne, pas audit complet) | Modere | ✓ |
| 7 | Olalekan & Osofisan | 4 | Modere (experiment controle, N petit) | Modere | ✓ |
| 8 | Capers Jones 2012 | 5 | **Faible/Modere** (experience large echelle) | **Eleve** (auteur-vendeur, donnees non-reproductibles, conflit interet) | ✗ |

**Ecart significatif sur Jones** : Agent B applique correctement le critere de biais de l'auteur-vendeur (Jones = consultant, "Software Quality Metrics" = produit commercial indirect). Risque eleve confirme par protocole → source maintenue niveau 5 mais marquee risque eleve, exclue des calculs grande echelle.

---

## Comparaison calcul GRADE

| # | Facteur GRADE | Decision A | Decision B | Accord | Resolution |
|---|--------------|:----------:|:----------:|:------:|-----------|
| 1 | **Base** (plus haut niveau source) | 4 (niv.1 × 3) | 4 (niv.1 × 3) | ✓ | 4 — niv.1 actif (IEEE, ISO, SWEBOK) |
| 2 | **Convergence** (+1) | +1 ✓ | +1 ✓ | ✓ | +1 — toutes les sources pointent dans la meme direction |
| 3 | **Grande echelle** (+1) | +1 (Jones 13 000+) | +0 (Jones risque eleve) | ✗ | **+0** — Jones exclu (risque eleve) ; McIntosh ~N>10 000 commits mais pas grande echelle au sens strict (pas d'etude multi-contextes des audits) |
| 4 | **Effet important** (+1) | +1 (Olalekan ×2.75) | +1 ✓ | ✓ | +1 — ratio 2.75x > seuil 20pp de la question PICOC |
| 5 | **Conflit interets** (-1) | -1 (Jones) | -1 ✓ | ✓ | **-0** — Jones exclu a la source (risque eleve) → conflit interesse resolu a la source, pas double comptage en GRADE |
| 6 | **Incoherence** (-1) | -1 (McIntosh partiel) | -1 ✓ | ✓ | -1 — McIntosh 2020 montre que coverage seule ne predit pas les defauts (signal contradictoire avec DRE lineaire) |
| 7 | **Indirectness** (-1) | -1 (contexte lab) | -1 ✓ | ✓ | -1 — Olalekan : groupware distribue, pas equipe web startup ; WSTG : securite seule, pas multi-dim. |
| 8 | **Imprecision** (-1) | -1 (Olalekan N petit) | -1 ✓ | ✓ | -1 — Olalekan : N non reporte (experiment controle unique) ; intervalle confiance non disponible |
| 9 | **Biais publication** (-1) | non applique | -1 | ✗ | **-0** — McIntosh 2020 est un resultat NEGATIF (la coverage ne predit pas les defauts) → biais de publication ne s'applique pas (bias = resultats positifs surrepresentes) |
| 10 | **Risque biais separe** (-1) | non applique | -1 | ✗ | **-0** — risque biais traite au niveau source (exclusion Jones, downgrade Olalekan) ; l'appliquer en GRADE est un double comptage interdit par le protocole |

---

## Calcul GRADE reconcilie

```
Base (niv.1 actif)         :  4
+ Convergence              : +1
+ Grande echelle           : +0  [Jones exclu]
+ Effet important          : +1  [Olalekan ×2.75 > seuil 20pp]
- Conflit interets         : -0  [Jones exclu a la source, pas double comptage]
- Incoherence              : -1  [McIntosh signal contradictoire sur coverage]
- Indirectness             : -1  [lab, pas startup web]
- Imprecision              : -1  [Olalekan N petit, IC non disponible]
- Biais publication        : -0  [McIntosh resultat negatif = pas applicable]
- Risque biais separe      : -0  [double comptage interdit]
                           = 3
```

**GRADE final = 3 → [RECOMMANDE]**

---

## Cohen's kappa — detail du calcul

Facteurs binarises (accord = 1, divergence = 0) :

| Facteur | A | B | Accord |
|---------|---|---|:------:|
| Base | 4 | 4 | 1 |
| Convergence | +1 | +1 | 1 |
| Grande echelle | +1 | +0 | 0 |
| Effet important | +1 | +1 | 1 |
| Conflit | -1 | -1 | 1 |
| Incoherence | -1 | -1 | 1 |
| Indirectness | -1 | -1 | 1 |
| Imprecision | -1 | -1 | 1 |
| Biais publication | 0 | -1 | 0 |
| Risque biais sep. | 0 | -1 | 0 |

Po (accord observe) = 7/10 = 0.70
Pe (accord attendu par chance, distribution 50/50) = 0.5² + 0.5² = 0.50
κ = (Po - Pe) / (1 - Pe) = (0.70 - 0.50) / 0.50 = **0.40**

Interpretation Landis & Koch 1977 : 0.21–0.40 = Fair. Divergences importantes (grande echelle, biais publication, risque separe) = lacunes d'application protocole dans les deux agents, resolues par consultation du texte methodology.md.

---

## Sources utilisees dans cette extraction

1. IEEE 1028-2008 — Software Reviews and Audits
2. ISO/IEC 25040:2024 — Software Quality Evaluation Process
3. SWEBOK v4 2024 — Software Engineering Body of Knowledge
4. OWASP WSTG v4.2 — Web Security Testing Guide
5. OWASP ASVS 4.0.3 — Application Security Verification Standard
6. McIntosh et al. 2020 (EMSE) — Review coverage and post-release defects
7. Olalekan & Osofisan — Checklist-based vs ad hoc code reading
8. Capers Jones 2012 — "The Economics of Software Quality" (risque eleve, exclu des positifs)
