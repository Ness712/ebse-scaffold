# PRISMA Flow — `project-health-audit`

**Date de recherche** : 2026-04-23
**Protocole** : methodology.md v3.0 §2.1
**PICOC** : voir [`verification/picoc/project-health-audit-picoc.md`](../picoc/project-health-audit-picoc.md)

**Bases interrogees** :
- IEEE Xplore (via WebSearch proxy)
- ISO.org (via WebSearch)
- OWASP Foundation (owasp.org)
- ACM Digital Library (via WebSearch proxy)
- Google Scholar (via WebSearch proxy)
- PMI (pmi.org)
- Semantic Scholar (via WebSearch proxy)

**Mots-cles principaux** :
- "systematic review software inspection audit methodology EBSE Kitchenham"
- "IEEE 1028 2008 software reviews audits inspections standard"
- "ISO IEC 25040 software quality evaluation process standard"
- "comprehensive software project health audit checklist methodology dimensions"
- "OWASP web security testing guide WSTG methodology structured audit 2023 2024"
- "OWASP ASVS Application Security Verification Standard structured checklist levels 2024"
- "McIntosh 2016 review coverage predictor post-release defects EMSE"
- "Capers Jones software inspection effectiveness defect removal efficiency statistics"
- "systematic literature review software code inspection Fagan defect detection effectiveness"
- "code audit ad hoc vs structured methodology defect detection comparison empirical"
- "NIST cybersecurity framework CSF structured audit methodology 2024"
- "SWEBOK v4 2024 software quality processes evaluation review knowledge area"

---

## Flux PRISMA

```
IDENTIFICATION
  Sources identifiees par base :
    - IEEE Xplore : ~18 resultats candidats (standards IEEE 1028, etudes empiriques inspection)
    - ISO.org : 3 sources (ISO 25040:2011, ISO 25040:2024, ISO 25010:2023)
    - OWASP Foundation : 4 sources (WSTG v4.2, ASVS 4.0.3, ASVS 5.0, OWASP Developer Guide)
    - ACM DL / Semantic Scholar : ~12 resultats (McIntosh, Olalekan, Bacchelli&Bird, Fagan replications)
    - Google Scholar : ~22 resultats (Capers Jones, SmartBear, DRE studies, PMI healthcheck)
    - PMI : 2 sources (Introduction to Healthcheck Process, PMBOK Guide)
    - Snowballing backward (references citees par sources principales) : 5 sources additionnelles
  Total identifie (brut) : ~66
  Doublons retires (meme source identifiee par plusieurs bases) : 7
  Total apres deduplication : ~59

SCREENING (titre + resume)
  Sources screenees : 59
  Sources exclues au screening : 41
    - E1 (niveau 6 — blog individuel, tutoriel sans donnees) : 19
      [softwaremind.com/blog/software-audit-checklist, medium.com/@cuncis, imaginovation.net/blog, etc.]
    - E2 (obsolete — >5 ans ET pas standard actif) : 6
      [Fagan 1976 original — retenu comme source fondatrice uniquement, pas pour GRADE ; etudes Fagan pre-2020 sans generalisation]
    - E4 (marketing vendeur sans donnees independantes) : 8
      [white papers SonarQube, Snyk, Checkmarx sur "notre outil detecte tout"]
    - E6 (contexte radicalement different — inspection hardware, medical devices) : 8
  Retenu pour lecture complete : 18

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : 18
  Sources exclues apres lecture complete : 10
    - Fagan 1976 original : retenu comme source historique fondatrice (niv. 5) mais pas pour GRADE principal — obsolete comme pratique, les grandes lignes sont abstraites dans les etudes de revision
    - PMBOK Guide : E6 — focus gestion projet (budget, planning, risques), pas qualite technique code
    - PMI Healthcheck Process : E6 — idem, pas qualite technique
    - Bacchelli & Bird 2013 "Expectations, Outcomes, and Challenges of Modern Code Review" : retenu comme contexte mais pas de donnees DRE comparatives
    - NIST CSF 2.0 : retenu partiellement — focus securite organisationnelle uniquement, pas audit technique dev
    - Thoughtbot audit checklist : E1 (blog) — exclu
    - Autres blog/guides industrie (5 sources) : E1

INCLUSION
  Sources incluses dans la synthese : 8
    - Niveau 1 : 3 (IEEE 1028-2008, ISO/IEC 25040:2024, SWEBOK v4 2024)
    - Niveau 2 : 2 (OWASP WSTG v4.2, OWASP ASVS 4.0.3)
    - Niveau 4 : 2 (McIntosh et al. 2020 EMSE, Olalekan & Osofisan — checklist vs ad hoc)
    - Niveau 5 : 1 (Capers Jones — DRE statistics, "The Economics of Software Quality" 2012)
```

---

## Documentation recherche (Table 2 Kitchenham)

### Base 1 — IEEE Xplore (via WebSearch)

| Element | Valeur |
|---------|--------|
| Nom de la base | IEEE Xplore |
| Strategie de recherche | "IEEE 1028 software reviews audits" ; "software inspection checklist effectiveness" |
| Annees couvertes | 1990-2026 (standard IEEE 1028 actif independamment de la date) |
| Date de la recherche | 2026-04-23 |
| Nombre de resultats candidats | ~18 |
| Sources retenues | IEEE 1028-2008 (niv. 1) |

### Base 2 — ISO.org (via WebSearch)

| Element | Valeur |
|---------|--------|
| Nom de la base | ISO.org / iso25000.com |
| Strategie de recherche | "ISO IEC 25040 software quality evaluation process" |
| Annees couvertes | Standards actifs (2011, 2024) |
| Date de la recherche | 2026-04-23 |
| Nombre de resultats candidats | 3 |
| Sources retenues | ISO/IEC 25040:2024 (niv. 1) |

### Base 3 — OWASP Foundation (owasp.org, GitHub)

| Element | Valeur |
|---------|--------|
| Nom de la base | OWASP Foundation + GitHub OWASP org |
| Strategie de recherche | "OWASP WSTG web security testing guide" ; "OWASP ASVS application security verification standard" |
| Annees couvertes | Versions actives (WSTG v4.2 2020, ASVS 4.0.3 2021, ASVS 5.0 2025) |
| Date de la recherche | 2026-04-23 |
| Nombre de resultats candidats | 4 |
| Sources retenues | OWASP WSTG v4.2 (niv. 2), OWASP ASVS 4.0.3 (niv. 2) |

### Base 4 — ACM DL / Semantic Scholar (via WebSearch)

| Element | Valeur |
|---------|--------|
| Nom de la base | ACM Digital Library + Semantic Scholar |
| Strategie de recherche | "McIntosh review coverage post-release defects EMSE" ; "checklist-based reading vs ad hoc empirical study" |
| Annees couvertes | 2010-2026 |
| Date de la recherche | 2026-04-23 |
| Nombre de resultats candidats | ~12 |
| Sources retenues | McIntosh et al. 2020 EMSE (niv. 4) ; Olalekan & Osofisan — checklist vs ad hoc (niv. 4) |

### Base 5 — Google Scholar (via WebSearch)

| Element | Valeur |
|---------|--------|
| Nom de la base | Google Scholar (proxy WebSearch) |
| Strategie de recherche | "Capers Jones defect removal efficiency" ; "software inspection DRE statistics" ; "SWEBOK v4 software quality" |
| Annees couvertes | 2000-2026 |
| Date de la recherche | 2026-04-23 |
| Nombre de resultats candidats | ~22 |
| Sources retenues | Capers Jones "Software Defect Removal Efficiency" (niv. 5) ; SWEBOK v4 2024 (niv. 1) |

---

## Sources exclues avec raisons individuelles (apres lecture complete)

| # | Source | Critere | Raison |
|---|--------|---------|--------|
| 1 | Fagan 1976 original | E2 + obsolescence pratique | Source fondatrice historique ; methode formelle abandonnee par equipes modernes (Bacchelli 2013) ; donnees DRE non comparables au contexte agile |
| 2 | PMBOK Guide | E6 | Gestion de projet (scope, budget, risques) — pas qualite technique du code |
| 3 | PMI Healthcheck Process | E6 | Idem PMBOK — focus project management, pas engineering quality |
| 4 | Thoughtbot audit checklist blog | E1 | Blog d'entreprise sans protocole, sans donnees, sans peer review |
| 5 | NIST CSF 2.0 (complete) | E6 (partiel) | Focus securite organisationnelle (gouvernance, politiques) — pas audit technique developpement ; partiellement utile pour la dimension securite mais non inclus en source principale (indirectness trop forte) |
| 6 | Bacchelli & Bird 2013 MSR | E2 + usage limite | Etude sur expectations/outcomes de la code review — tres pertinente pour le contexte mais ne fournit pas de donnees DRE comparatives entre methodes |
| 7-10 | Blogs industrie divers (5 sources) | E1 | Niveau 6 — sans donnees empiriques ni protocole |
