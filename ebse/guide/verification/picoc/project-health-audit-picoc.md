# Phase 1.3 — PICOC : `project-health-audit`

**Protocole** : `methodology.md` v3.0, section 1.3 (Kitchenham & Charters 2007 §5.3)
**Date** : 2026-04-23 (v1) — **Amende 2026-04-23 (v2)** suite rapport peer review (agent independant — reserves B1, B2, M1-M6 adressees)
**DARE** : voir [`verification/dare/project-health-audit-dare.md`](../dare/project-health-audit-dare.md) — aucune SLR existante adequate, nouvelle SLR justifiee.
**Limite connue** : reviewer DARE = session principale (non independant) — limite documentee, resultats DARE non contestables sur le fond (les SLRs identifiees ne couvrent pas le PICOC).

---

## Question de recherche

"Pour des equipes de developpement web (startup, 1-10 devs, avec assistance IA), quelle methodologie d'audit complet de la sante projet — dimensions couvertes, structure d'execution, format des findings — maximise l'exhaustivite de detection des problemes de qualite, securite, conformite et coherence, comparee a une inspection ad hoc, des outils automatises seuls, ou un audit cible pre-release ?"

---

## PICOC

| Element | Valeur |
|---------|--------|
| **P** — Population | Equipes de developpement web (startup, 1-10 devs), multi-repo, avec assistance d'agents IA (Claude Code, Cursor, Copilot), realisant des audits periodiques ou a des jalons projet |
| **I** — Intervention | Audit structure multi-dimensions avec grille de criteres predefinies derivees de standards existants (dimensions a confirmer par la SLR a partir des sources). Hypothese de depart : grille couvrant les domaines identifies par croisement ISO 25010 x SWEBOK v4 — securite (OWASP/ASVS), conformite legale (RGPD/RGAA), conventions code, architecture, accessibilite (WCAG), tests, CI/CD, documentation, performance, coherence inter-repos. Execution avec agents specialises par dimension. Findings structures (titre, label, severite, fichier:ligne, regle, correction). Note : les domaines precis sont un point de depart — la SLR peut les affiner, ajouter ou supprimer des domaines selon les sources. |
| **C** — Comparaison | (a) Inspection ad hoc sans grille (jugement subjectif non structure — "eyeballing") ; (b) Outils automatises seuls (linters, SAST, scanners sans lecture humaine — Capers Jones : 55% DRE) ; (c) Audit cible pre-release (inspection des fichiers modifies uniquement — Basili et al. 1996 "targeted inspection") ; (d) Audit mono-dimension (securite seule via OWASP WSTG, ou conventions seules) |
| **O** — Outcome | (1) DRE — Defect Detection Rate : nb defauts trouves par methode / nb total defauts connus (formule Capers Jones). Seuil : difference > 20pp entre I et C = effet important. (2) Exhaustivite dimensionnelle : nb de categories ISO 25010 couvertes / 9. (3) Reproductibilite : taux de recouvrement des findings entre deux sessions independantes sur le meme codebase. (4) Actionabilite : % de findings produisant une issue creatable (critere : finding contient fichier:ligne + regle + correction). (5) Effort (secondaire, conditionnel) : temps-homme par defaut trouve — adresse seulement si les sources fournissent des donnees comparables. |
| **Co** — Context | Web application TypeScript/NestJS/React ; startup scale ; multi-repo (backend, frontend, infra, docs) ; AI-assisted development ; conformite RGPD/RGAA requise |

---

## Decouverte systematique des alternatives

Recherche effectuee dans les bases suivantes pour identifier TOUTES les alternatives existantes :

| Base | Mots-cles | Alternatives trouvees |
|------|-----------|----------------------|
| IEEE Xplore | "software audit methodology", "code inspection technique" | Fagan inspection (formal), IEEE 1028 audit types, walkthrough |
| OWASP Foundation | "web application security testing" | WSTG (securite seule), ASVS (securite seule) |
| ISO.org | "software quality evaluation" | ISO 25040 process (haut niveau), ISO 25010 qualite produit |
| Google Scholar | "structured vs ad hoc code review" | Checklist-based reading (Olalekan), scenario-based (Runeson) |
| PMI | "project health check" | PMBOK-based health check (9 knowledge areas) |
| Tooling (SonarQube, ESLint, npm docs) | "static analysis audit" | Automated tooling only |

**Alternatives retenues pour la comparaison (C)** :
- Ad hoc (pas de grille) — alternative naturelle sans structure
- Automated only — SonarQube + ESLint + npm audit sans lecture humaine
- Pre-release audit (PICOC #29) — audit cible sur fichiers modifies
- Mono-dimension — OWASP WSTG (securite seule) ou RGPD seul

**Alternatives ecartees avec raison** :
- Fagan inspection formelle : obsolete pour les petites equipes agiles (plus utilisee selon litterature recente — Bacchelli & Bird 2013)
- PMBOK health check : focus gestion projet (budget, planning, risques) pas qualite technique code

**Recherche supplementaire (point M4 — revue par pairs)** : recherche "multi-repository software audit" et "polyrepo consistency" dans Google Scholar et GitHub — aucune litterature specifique identifiee sur les audits multi-repo. La caracteristique multi-repo reste dans Co comme specificite de contexte.

---

## Ancrage ISO 25010 x SWEBOK

| Caracteristique ISO 25010 | Sous-topic SWEBOK v4 | Case active ? |
|--------------------------|---------------------|:-------------:|
| Security (Confidentiality, Integrity, Authenticity, Resistance) | Software Security KA — security testing, threat analysis | OUI |
| Safety (Operational constraint, Fail safe) | Software Quality KA — compliance, standards | OUI |
| Reliability (Faultlessness, Availability) | Software Testing KA — test coverage, defect detection | OUI |
| Maintainability (Analysability, Modifiability, Testability) | Software Construction KA — code quality, naming, conventions | OUI |
| Interaction Capability (Inclusivity/Accessibility) | Software Design KA — interface design, accessibility | OUI |
| Performance Efficiency (Time behaviour, Resource utilization) | Software Engineering Operations KA — performance | OUI |
| Flexibility (Adaptability) | Software Architecture KA — module structure, EBSE recommendations | OUI |
| Functional Suitability | Software Requirements KA — fonctionnalites vs exigences | NON — evaluation fonctionnelle hors scope d'un audit technique interne ; necessite des specifications d'acceptation utilisateur qui ne font pas partie du perimetre |
| Compatibility (Co-existence, Interoperability) | Software Architecture KA — integration externe | NON — hors perimetre pour un projet mono-stack sans integration tierce ; a reevaluer si OLS integre des systemes externes |

**Conclusion** : la question couvre 7 des 9 caracteristiques ISO 25010 pour les caracteristiques actives. Les 2 inactives sont justifiees. Perimetre confirme comme "audit technique complet" (sans audit fonctionnel ni compatibilite).
