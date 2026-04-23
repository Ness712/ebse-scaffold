# Audit de sante projet (Project Health Audit)

**[RECOMMANDE]** Audit structure multi-dimensions avec grille predefined derivee de standards existants (ISO 25010 x SWEBOK v4) | Score GRADE : 3/7

L'audit structure multi-dimensions detecte 2.75x plus de defauts que l'inspection ad hoc (Olalekan & Osofisan). Les outils automatises seuls atteignent environ 55% de DRE (Defect Removal Efficiency, Capers Jones) — un audit structure avec grille combinee a l'automatisation approche 70-85%. La grille predefined garantit la reproductibilite : deux sessions independantes sur le meme codebase produisent des findings convergents. Un audit cible (fichiers modifies uniquement) manque les problemes de fond — il complement mais ne remplace pas un audit complet periodique.

---

## Principes fondamentaux

| Principe | Source | GRADE |
|----------|--------|:-----:|
| Utiliser une grille de criteres predefined derivee de standards existants (pas de checklist ad hoc) | IEEE 1028-2008, ISO 25040:2024 | 3 |
| Couvrir les 7 dimensions actives de qualite ISO 25010 — securite, fiabilite, maintenabilite, accessibilite, performance, flexibilite, conformite | ISO 25010:2023, SWEBOK v4 2024 | 3 |
| Format de finding actionable : titre + label + severite + fichier:ligne + regle + correction | IEEE 1028-2008 (§5 findings), OWASP WSTG v4.2 | 3 |
| Audit pre-release (cible) : suffisant pour les PRs — audit complet periodique en complement | IEEE 1028-2008 (distincts audit types), McIntosh 2020 | 3 |
| Combiner agents specialises par dimension plutot qu'un agent generaliste | SWEBOK v4 (specialisation inspection), Olalekan & Osofisan | 3 |

---

## 7 dimensions actives (ISO 25010 x SWEBOK v4)

| Dimension ISO 25010 | SWEBOK KA | Contenus cles |
|--------------------|-----------|---------------|
| **Security** | Software Security | OWASP ASVS (authentification, autorisation, injection, secrets, headers HTTP, rate limiting) ; OWASP WSTG (tests securite actifs) |
| **Reliability** | Software Testing | Couverture tests (unit, integration, E2E) ; error handling ; circuit breaker ; transactions |
| **Maintainability** | Software Construction | Conventions nommage, linting, TypeScript strict, dette technique, code review, null safety |
| **Interaction Capability** (Accessibilite) | Software Design | WCAG 2.2 AA (images, navigation clavier, contraste, ARIA) ; internationalisation |
| **Performance Efficiency** | Engineering Operations | Bundle size, caching, connection pooling, image optimization, Core Web Vitals |
| **Flexibility** (Architecture) | Software Architecture | Structure modules, API versioning, OpenAPI, monorepo/polyrepo, strategie deploiement |
| **Safety** (Conformite legale) | Software Quality | RGPD (DCP, consentement cookies, mentions legales) ; RGAA (conformite accessibilite legale France) |

> Les 2 dimensions inactives : Functional Suitability (necessite specs acceptation utilisateur) et Compatibility/Interoperability (hors perimetre mono-stack sans integration tierce). Reevaluer si le contexte change.

---

## Structure d'execution

```
ETAPE 1 — Preparation (session chef de file)
  Lire CONVENTIONS.md de chaque repo
  Lire les recommandations EBSE actives (ols-recommendations.json)
  Definir perimetre (repos, branches, date de reference)

ETAPE 2 — Audit par dimension (agents specialises en parallele)
  Pour chaque dimension ISO 25010 active :
    - Agent specialise → lit les fichiers concernes → evalue contre la grille
    - Produit liste de findings au format standard
    - Inclut : titre, label, severite, fichier:ligne, regle, correction

ETAPE 3 — Consolidation (session chef de file)
  Deduplication des findings croises (ex: securite x architecture)
  Classement par severite : CRITIQUE > MAJEUR > MINEUR > INFO
  Creation GitHub issues (une par finding CRITIQUE/MAJEUR, lot pour MINEUR)

ETAPE 4 — Rapport final
  REPOS AUDITES : [liste]
  RAPPORT PAR DIMENSION : [findings par dimension]
  CORRECTIONS AUTONOMES : [fichier:ligne corrige directement]
  A TRAITER PAR PO : [findings necessitant decision humaine]
  STATUT GLOBAL : OK / KO
```

---

## Format de finding standard

```
**[LABEL] Titre court**
- Severite : CRITIQUE | MAJEUR | MINEUR | INFO
- Fichier : chemin/vers/fichier.ts:42
- Regle : OWASP ASVS 2.1.1 | WCAG 2.2 SC 1.1.1 | SWEBOK v4 ch.10 | ...
- Probleme : description courte du probleme trouve
- Correction : correction precise et applicable
```

Labels standards :
- `[SEC]` Securite
- `[A11Y]` Accessibilite
- `[PERF]` Performance
- `[CONV]` Convention / code quality
- `[RGPD]` Conformite RGPD
- `[ARCH]` Architecture
- `[TEST]` Tests
- `[DOC]` Documentation

---

## Frequence recommandee

| Declencheur | Type d'audit | Scope |
|------------|-------------|-------|
| PR vers staging | Audit cible (pre-release) | Fichiers modifies + chemins critiques |
| PR vers main | Audit cible + relecture PO | Fichiers modifies + chemins critiques |
| Nouveau module / feature complete | Audit partiel | Dimension(s) concernees par la feature |
| **Trimestriel ou avant release majeure** | **Audit complet** | **Tous repos, toutes dimensions** |
| Incident securite ou dette detectee | Audit declenche | Dimension(s) concernees |

---

## Analyse de sensibilite (robustesse GRADE = 3)

Suppression de chaque source :
- Retirer IEEE 1028 → base reste 4 (ISO + SWEBOK niv.1 suffisants) → GRADE inchange
- Retirer ISO 25040 → base reste 4 → GRADE inchange
- Retirer SWEBOK v4 → base reste 4 → GRADE inchange
- Retirer Olalekan → perd +effet important et -imprecision (net 0) → GRADE reste 3
- Retirer McIntosh → perd -incoherence (+1) → GRADE monterait a 4
- Retirer OWASP sources → perd couverture securite (indirectness s'attenue) → GRADE reste 3

**Conclusion** : GRADE 3 robuste. La seule source dont la suppression ameliorerait le score (McIntosh) est precisement celle qui apporte la nuance la plus utile (la couverture seule ne predit pas les defauts — il faut la qualite de l'audit).

---

## Sources

- [niv. 1] IEEE 1028-2008 — Software Reviews and Audits (5 types, procedures, findings format)
- [niv. 1] ISO/IEC 25040:2024 — Software Quality Evaluation Process (5 activites)
- [niv. 1] SWEBOK v4 2024 — Software Engineering Body of Knowledge (ch. Quality, Testing, Security)
- [niv. 2] OWASP WSTG v4.2 — Web Security Testing Guide (checklist structured securite)
- [niv. 2] OWASP ASVS 4.0.3 — Application Security Verification Standard (niveaux 1-3)
- [niv. 4] McIntosh et al. 2020 (EMSE) — Review coverage as predictor of post-release defects (nuance : coverage ≠ qualite)
- [niv. 4] Olalekan & Osofisan — Checklist-based vs ad hoc code reading (×2.75 detection superieure)
- [niv. 5*] Capers Jones 2012 — "The Economics of Software Quality" (DRE statistics) *risque biais eleve — indicatif uniquement
