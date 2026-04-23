# PRISMA — `audit-sources` — Énumération des sources de vérité avant audit

**Date** : 2026-04-23
**Protocole** : methodology.md v3.0, phase 2.1

---

## Stratégie de recherche

**Termes** : "software audit completeness" | "inspection checklist exhaustiveness" | "audit input specification" | "evaluation criteria pre-specification" | "software quality evaluation inputs" | "systematic audit methodology"

**Bases consultées** :
- IEEE Xplore (standards + journal articles)
- ISO Online Browsing Platform (25040, 25010, 29119)
- NIST CSRC (SP 800-53A, SP 800-115)
- ACM Digital Library
- Google Scholar (Fagan inspection replications)
- SWEBOK v4 (IEEE Computer Society)
- OWASP Foundation (WSTG, ASVS)

---

## Flux PRISMA

```
Identifiées : 31 sources potentielles
  Bases IEEE/ISO/NIST : 12
  ACM DL / Google Scholar : 14
  OWASP / SWEBOK : 5

Doublons supprimés : 4

Criblées (titre/résumé) : 27
  Exclues hors scope : 13
    - Audits financiers/comptables : 5
    - Outils automatisés sans dimension méthodologique : 4
    - Domaine médical/sécurité physique : 4

Éligibles (texte intégral) : 14

Incluses : 6
  Exclues après lecture complète : 8
    - ISO/IEC 25041 (guide utilisateur 25040, redondant) : 1
    - IEEE 730 (assurance qualité, pas audit spécifiquement) : 1
    - NIST SP 800-115 (tests pénétration seuls) : 1
    - Kitchenham 2004 (SLR guidelines, hors scope direct) : 1
    - Eickelmann & Richardson 1996 (trop ancien, pas répliqué) : 1
    - Wohlin et al. 2012 (expérimentation SE, hors scope audit santé) : 1
    - OWASP Testing Guide v4.2 (sécurité seule, déjà dans project-health-audit) : 1
    - ISTQB Foundation 2023 (testing, pas audit santé projet) : 1
```

---

## Sources incluses

| # | Source | Niveau pyramide | Pertinence |
|---|--------|:--------------:|-----------|
| 1 | ISO/IEC 25040:2024 — SQuaRE Evaluation Process | 1 | §5.3 "Specify evaluation" : énumération des mesures avant exécution obligatoire |
| 2 | IEEE 1028-2008 — Software Reviews and Audits | 1 | §6.4 "Audit inputs" : documentation des standards de référence avant audit |
| 3 | NIST SP 800-53A Rev. 5 (2022) — Assessing Security and Privacy Controls | 2 | Approche catalogue : chaque contrôle énuméré explicitement avant évaluation |
| 4 | Fagan, M.E. 1976 — "Design and code inspections to reduce errors" IBM Systems Journal 15(3) | 4 | Inspection formelle vs ad hoc : +67-82% détection ; checklists pré-définies obligatoires |
| 5 | Porter, Siy, Votta 1995 — "A review of software inspections" Advances in Computers 42 | 4 | Revue de 40 études ; la pré-spécification des critères est le facteur commun des inspections efficaces |
| 6 | Kitchenham et al. 2007 — "Guidelines for performing SLR in SE" EBSE Technical Report | 3 | Protocole pré-enregistré obligatoire avant recherche ; principe de non-circularité |

---

## Justifications d'exclusion principales

- OWASP WSTG v4.2 : couverture sécurité seule (indirectness) — déjà référencé dans project-health-audit
- NIST SP 800-115 : tests de pénétration actifs, pas audit passif de santé projet
- Wohlin et al. 2012 : expérimentation contrôlée en SE (comment concevoir des études), pas audit de santé
