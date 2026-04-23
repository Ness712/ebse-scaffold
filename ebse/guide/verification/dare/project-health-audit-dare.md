# Phase 1.1 — DARE : domaine `project-management` — question `project-health-audit`

**Protocole** : `methodology.md` v3.0, section 1.1 (Kitchenham & Charters 2007, EBSE-2007-01)
**Date** : 2026-04-23
**Methode** : recherche systematique (WebSearch — IEEE Xplore, ACM DL, Google Scholar, ISO, OWASP) + evaluation DARE
**Reviewer** : Claude Sonnet 4.6 (session principale)

---

## Sujet de la SLR

**Question cible** : "Pour des equipes de developpement web (startup, 1-10 devs, assistance IA), quelle methodologie d'audit complet de la sante projet — dimensions couvertes, structure d'execution, format des findings — maximise l'exhaustivite de detection des problemes de qualite, securite, conformite et coherence, comparee a une inspection ad hoc, des outils automatises seuls, ou un audit cible pre-release ?"

---

## Strategie de recherche DARE

| Element | Valeur |
|---------|--------|
| Bases interrogees | WebSearch (Google Scholar proxy), IEEE Xplore, ACM DL, ISO.org, OWASP Foundation |
| Fenetres de publication | 2020-2026 pour revues empiriques ; standards actifs independamment de la date |
| Type de source recherche | SLR, Systematic Mapping Study, tertiary study avec protocole declare (PRISMA/Kitchenham) |
| Type de source rejete | Etudes primaires, narrative surveys sans protocole, opinion |
| Mots-cles | "systematic review software inspection audit methodology", "software project health audit checklist", "comprehensive code audit dimensions", "structured vs ad hoc code review empirical" |

---

## Corpus identifie et scores DARE

### Source #1 — IEEE 1028-2008 : Software Reviews and Audits

- **Type** : Standard international (niveau 1 pyramide) — PAS une SLR
- **Contenu** : Definit 5 types de revues (management, technical, inspections, walkthroughs, audits). Prescrit les procedures. Ne constitue pas une SLR comparative.
- **DARE** : N/A — standard normatif, non evaluable comme SLR. Citer comme source de niveau 1 dans la SLR.
- **Verdict** : **Retenue comme source primaire**, non comme SLR existante.

### Source #2 — ISO/IEC 25040:2024 : Software Quality Evaluation Process

- **Type** : Standard international (niveau 1) — PAS une SLR
- **Contenu** : Processus d'evaluation qualite en 5 activites. Tres haut niveau, ne specifie pas les dimensions d'un audit projet.
- **DARE** : N/A — standard normatif.
- **Verdict** : **Retenue comme source primaire**, non comme SLR existante.

### Source #3 — Olalekan & Osofisan : "Empirical Comparative Study of Checklist-based and Ad Hoc Code Reading"

- **Type** : Etude empirique comparative (niveau 4 pyramide) — candidate SLR
- **Methodologie** : Experiment comparatif (checklist vs ad hoc), distributed groupware environment.
- **DARE scoring** :
  - D1 (criteres inc/exc reportes) : 0.5 — protocole present mais peu explicite
  - D2 (recherche adequate) : 0 — etude primaire, pas de recherche multi-bases
  - D3 (etudes incluses synthetisees) : 0 — etude primaire, N=1 study
  - D4 (qualite evaluee) : 0.5 — biais reconnus partiellement
  - D5 (details par etude) : 0.5 — donnees rapportees
  - **Total = 1.5 / 5**
- **Verdict** : Score < 2.5/5 — etude primaire, pas une SLR. **Retenue comme source niveau 4** pour la synthese.

### Source #4 — Searches sur "systematic review software inspection methodology" (IEEE Xplore, ACM DL)

Recherche systematique sur IEEE Xplore et ACM DL via WebSearch n'a pas identifie de SLR couvrant directement notre PICOC (multi-dimension project health audit avec agents paralleles). Les SLRs trouvees couvrent :
- Inspection Fagan (obsolete pour teams modernes — Fagan 1976, revues jusqu'a 2022)
- Modern code review practices (McIntosh 2016/2020 — code review uniquement, pas multi-dimension)
- LLM-assisted code review (He et al. 2025 — focus agents IA, pas audit sante projet)

Aucune SLR avec score DARE >= 2.5/5 ne repond a notre question specifique.

---

## Conclusion DARE

**Aucune SLR existante n'adresse notre question PICOC**. Les etudes existantes couvrent :
- L'inspection de code (Fagan-style, maintenant obsolete)
- La code review moderne (McIntosh — pas multi-dimension)
- Les agents IA pour la review (He et al. — pas audit sante projet)

**Justification de nouvelle SLR** : gap confirme. La question "comment structurer un audit multi-dimension avec agents paralleles" est nouvelle, non couverte, et justifiee par le contexte AI-assisted development.

**Consequence** : proceder avec la SLR complete selon methodology.md v3.0.
