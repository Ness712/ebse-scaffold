# Phase 1.1 — DARE : domaine `agent-runtime`

**Protocole** : `methodology.md` v3.0, section 1.1 (Kitchenham & Charters 2007, EBSE-2007-01)
**Date** : 2026-04-28
**Methode** : recherche via WebSearch sur arXiv, Google Scholar, IEEE/ACM (proxied), docs officielles ; screening par Agent (Reviewer A) ; verification sources accessibles directement.
**Fichier de tracabilite** : fichier present (pas de fichier separé — contexte agent unique)

## Sujet de la SLR

**Question de depart** : quel runtime choisir pour un agent de developpement autonome basé sur un guide EBSE externalisé ? Les options candidates sont : (A) CLI + hooks (Claude Code CLI), (B) Agent SDK + orchestrateur (Claude Agent SDK / OpenAI Agents SDK), (C) Custom via LiteLLM (implementation maison du tool-loop), (D) Hybride CLI + SDK.

## Strategie de recherche

| Element | Valeur |
|---------|--------|
| Bases interrogees | WebSearch (proxy Google Scholar + arXiv), docs officielles Anthropic, docs officielles OpenAI, docs officielles AWS, docs officielles Google ADK, arXiv.org direct |
| Mots-cles utilises | "LLM coding agent runtime architecture", "AI agent execution environment comparison", "agent orchestration framework systematic review", "Claude Code CLI agent SDK comparison", "coding agent scaffold taxonomy", "agent loop max_turns tool execution" |
| Fenetre de publication | 2024-2026 |
| Type de source accepte | SLR/surveys avec protocole (PRISMA ou Kitchenham), systematic mapping studies, taxonomies empiriques sur architectures d'agents |
| Type de source rejete | Narrative surveys sans protocole, opinion, vendor whitepapers sans donnees |
| Reviewers | Agent (Reviewer A), Gabriel (superviseur) |

## Criteres DARE appliques

Chaque SLR/survey est scoree sur 5 criteres (0 / 0.5 / 1, total /5), conformement au Centre for Reviews and Dissemination (University of York) et repris par Kitchenham & Charters 2007 §5.1 :

- **D1** — Inclusion/exclusion criteria reported
- **D2** — Search adequate (multiple databases, explicit strings)
- **D3** — Included studies synthesised
- **D4** — Quality of included studies assessed
- **D5** — Per-study details presented

**Regle** : total >= 2.5/5 sur scope DIRECT = existing SLR suffit. Sinon nouvelle SLR justifiee.

---

## Corpus identifie et score DARE

7 sources candidates examinees. Aucune SLR directement disponible derriere paywall IEEE/ACM — acces proxied via WebSearch et arXiv uniquement.

---

### Source #1 — Rombaut 2026 (Inside the Scaffold: Taxonomy of Coding Agent Architectures)

- **Citation** : Rombaut, Benjamin (2026). *Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures*. arXiv:2604.03515. Soumis le 3 avril 2026, v2 le 10 avril 2026.
- **URL** : https://arxiv.org/abs/2604.03515
- **Methodologie** : analyse source-code de 13 agents open-source. Caracterisation sur 12 dimensions en 3 couches (control architecture, tool/environment interface, resource management). Pas de PRISMA/Kitchenham formels — pas une SLR au sens strict mais une **taxonomie empirique** derivee d'un corpus code.
- **Coverage** : **DIRECTE** — analyse exactement les architectures de scaffold d'agents de coding, les boucles de contrôle, les strategies de gestion de contexte. Couvre les primitives ReAct, generate-test-repair, plan-execute, multi-attempt retry, tree search. Inclut Claude Code, OpenHands, SWE-agent.
- **DARE scoring** :
  - D1 = 0.5 (corpus de 13 agents justifie qualitativement mais criteres d'inclusion non formalises)
  - D2 = 0 (analyse de code source, pas de search systematique de bases de donnees)
  - D3 = 1 (synthese taxonomique complete sur 12 dimensions)
  - D4 = 0 (pas de quality assessment formel des agents analyses)
  - D5 = 1 (details par agent dans les 12 dimensions)
  - **Total = 2.5 / 5**
- **Risque de biais global** : Modere (corpus selectif — open-source uniquement, exclut agents proprietaires comme Devin)
- **Verdict** : **Citer comme source primaire** pour la taxonomie des architectures. Couvre notre question topiquement mais n'est pas une SLR comparative sur le choix de runtime pour un usage specifique (guide EBSE + supervision PO minimale).

---

### Source #2 — Wang et al. 2025 (Empirical Study of Agent Developer Practices)

- **Citation** : Wang, Yanlin et al. (2025). *An Empirical Study of Agent Developer Practices in AI Agent Frameworks*. arXiv:2512.01939. Soumis le 1er decembre 2025.
- **URL** : https://arxiv.org/abs/2512.01939
- **Methodologie** : analyse de 11 910 discussions sur 10 frameworks d'agents. Evaluation sur 5 dimensions (development efficiency, functional abstraction, learning cost, performance optimization, maintainability).
- **Coverage** : **DIRECTE-ADJACENTE** — compare les frameworks d'agents du point de vue developpeur, mais pas specifiquement pour agents de coding autonomes avec guide EBSE. Ne distingue pas CLI vs SDK vs custom.
- **DARE scoring** :
  - D1 = 0.5 (10 frameworks, mais criteres de selection des discussions pas clairement formels)
  - D2 = 0.5 (corpus de discussions multi-frameworks, methode d'extraction non detaillee dans l'abstract)
  - D3 = 1 (synthese sur 5 dimensions)
  - D4 = 0.5 (methodologie empirique sur corpus de discussions, mais pas de quality assessment des sources primaires)
  - D5 = 0.5 (resultats par framework partiellement documentes)
  - **Total = 3.0 / 5**
- **Risque de biais global** : Modere (discussion forums = biais vers problemes, pas vers reussites)
- **Verdict** : **Citer** pour les pain points developpeurs. Ne couvre pas notre decision specifique.

---

### Source #3 — Bui 2026 (Building Effective AI Coding Agents for the Terminal)

- **Citation** : Bui, Nghi D. Q. (2026). *Building Effective AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned*. arXiv:2603.05344v3. Soumis le 5 mars 2026, v3 le 13 mars 2026.
- **URL** : https://arxiv.org/abs/2603.05344
- **Methodologie** : rapport d'implementation d'OPENDEV, agent CLI en Rust. Pas une SLR — experience report + design rationale.
- **Coverage** : **DIRECTE** (pour le pattern CLI) — documente les decisions architecturales d'un agent terminal (compound AI system, dual-agent design planning/execution, lazy tool discovery, adaptive context compaction). Lessons learned explicites.
- **DARE scoring** :
  - D1 = 0 (pas de criteres d'inclusion/exclusion — c'est un experience report)
  - D2 = 0 (pas de search systematique)
  - D3 = 0.5 (synthese des leçons apprises)
  - D4 = 0 (pas de quality assessment)
  - D5 = 0.5 (details sur OPENDEV uniquement)
  - **Total = 1.0 / 5**
- **Risque de biais global** : Eleve (un seul systeme, auteur = createur)
- **Verdict** : **Exclure du corpus SLR**. Source primaire utile pour extraction de donnees architecturales sur le pattern CLI.

---

### Source #4 — Hou et al. 2024 (LLM4SE SLR)

- **Citation** : Hou, Zhao, Liu, Yang, Wang, Li, Luo, Lo, Grundy, Wang (2024). *Large Language Models for Software Engineering: A Systematic Literature Review*. ACM TOSEM. DOI:10.1145/3695988. arXiv:2308.10620.
- **URL** : https://arxiv.org/abs/2308.10620
- **Methodologie** : SLR Kitchenham explicite. 395 etudes (Jan 2017 - Jan 2024). 7 bases.
- **Coverage** : **ADJACENTE** — LLM4SE general, ne couvre pas le choix de runtime d'agent. Cutoff janvier 2024 pre-Claude-Code-GA.
- **DARE scoring** : D1=1, D2=1, D3=1, D4=1, D5=0.5 = **Total = 4.5 / 5** (score repris du DARE ai-collaboration)
- **Risque de biais global** : Modere (obsolete sur notre topic)
- **Verdict** : **Citer** comme reference fondatrice LLM4SE. Ne couvre pas notre scope.

---

### Source #5 — Agentic AI Comprehensive Survey 2025 (Springer/arXiv)

- **Citation** : Auteurs multiples (2025). *Agentic AI: a comprehensive survey of architectures, applications, and future directions*. Springer AI Review (publie). arXiv:2510.25445. PRISMA-based, 90 etudes (2018-2025).
- **URL** : https://arxiv.org/html/2510.25445v1 | https://link.springer.com/article/10.1007/s10462-025-11422-4
- **Methodologie** : PRISMA explicite, 90 etudes. Categorise en deux lineages : Symbolic/Classical vs Neural/Generative. Ne couvre pas les frameworks de coding agents specifiquement — focus healthcare, finance, robotics.
- **Coverage** : **ADJACENTE** — architectures generales d'agents, pas specifique coding agents ni comparaison CLI vs SDK.
- **DARE scoring** :
  - D1 = 1 (PRISMA = IC/EC explicites)
  - D2 = 1 (PRISMA multi-bases)
  - D3 = 1 (synthese par lineage)
  - D4 = 0.5 (quality assessment partiel)
  - D5 = 0.5 (details variables par etude)
  - **Total = 4.0 / 5**
- **Risque de biais global** : Modere (hors domaine coding agent)
- **Verdict** : **Citer** pour background architectures generales. Hors scope direct.

---

### Source #6 — Rise of Agentic AI Review (MDPI, 2025)

- **Citation** : Auteurs multiples (2025). *The Rise of Agentic AI: A Review of Definitions, Frameworks, Architectures, Applications, Evaluation Metrics, and Challenges*. MDPI Future Internet 17(9):404. URL : https://www.mdpi.com/1999-5903/17/9/404
- **Methodologie** : "review of 143 primary studies on current LLM-based and non-LLM-driven agentic systems". Type exact (SLR vs narrative) non determinable depuis abstract.
- **Coverage** : **ADJACENTE** — frameworks generaux d'agents (planning, memory, reflection, goal pursuit). 90%+ des articles dates 2024-2025. Ne couvre pas la comparaison CLI vs SDK.
- **DARE scoring** :
  - D1 = 0.5 (mentions 143 primary studies mais IC/EC non verifiables depuis abstract)
  - D2 = 0.5 (scope multi-etudes mais strategie non detaillee)
  - D3 = 1 (categorisation multi-dimensions)
  - D4 = 0 (quality assessment non mentionne)
  - D5 = 0 (details par etude non confirmes)
  - **Total = 2.0 / 5**
- **Risque de biais global** : Modere-eleve (MDPI = journal open access, qualite variable)
- **Verdict** : **Exclure du corpus SLR** (score < 2.5). Peut etre cite anecdotiquement.

---

### Source #7 — IJSRT 2025 (Systematic Comparison of Agentic AI Frameworks for Scholarly Literature Processing)

- **Citation** : Auteurs non identifies clairement. *Systematic Comparison of Agentic AI Frameworks for Scholarly Literature Processing*. IJSRT Journal. URL : https://www.ijsrtjournal.com/article/Systematic+Comparison+of+Agentic+AI+Frameworks+for+Scholarly+Literature+Processing
- **Methodologie** : "systematic comparison" — scope : traitement de litterature scientifique. Pas un SLR sur le choix de runtime de coding agent.
- **Coverage** : **HORS SCOPE** — compare les frameworks pour traiter de la litterature academique, pas pour developper du code.
- **DARE scoring** :
  - D1 = 0 (non verifiable, journal peu connu)
  - D2 = 0 (non verifiable)
  - D3 = 0.5 (comparaison de frameworks)
  - D4 = 0 (non verifiable)
  - D5 = 0 (non verifiable)
  - **Total = 0.5 / 5**
- **Risque de biais global** : Eleve (journal inconnu, pas de protocole visible)
- **Verdict** : **Exclure**.

---

## Tableau recapitulatif

| # | Source | Annee | Venue | Scope | DARE /5 | Verdict |
|---|--------|:-----:|-------|-------|:-------:|---------|
| 1 | Rombaut — Scaffold Taxonomy | 2026 | arXiv | Directe | **2.5** | Citer (source primaire architecture) |
| 2 | Wang et al. — Developer Practices | 2025 | arXiv | Directe-adjacente | **3.0** | Citer (pain points devs) |
| 3 | Bui — Terminal Coding Agent | 2026 | arXiv | Directe (CLI) | **1.0** | **Exclure corpus SLR** (source primaire) |
| 4 | Hou et al. — LLM4SE | 2024 | ACM TOSEM | Adjacente | **4.5** | Citer (background) |
| 5 | Agentic AI Survey Springer | 2025 | Springer AI Rev | Adjacente | **4.0** | Citer (background) |
| 6 | Rise of Agentic AI MDPI | 2025 | MDPI | Adjacente | **2.0** | **Exclure** |
| 7 | IJSRT Agentic Frameworks | 2025 | IJSRT | Hors scope | **0.5** | **Exclure** |

---

## Conclusion — Phase 1.1 gate

**Aucune SLR existante ne couvre le scope exact de notre question** : quel runtime choisir pour un agent de developpement autonome integrant un guide EBSE externalisé, dans un contexte equipe solo/petite, avec supervision PO minimale ?

**Justifications** :

1. **La source la plus proche topiquement** (Rombaut 2026, Scaffold Taxonomy, DARE 2.5) est une **taxonomie architecturale empirique**, pas une SLR comparative guidee par une question de choix de runtime. Elle documente ce qui existe mais ne repond pas a "que choisir pour mon cas d'usage".

2. **Les SLR rigoureuses disponibles** (Hou LLM4SE 4.5/5, Agentic AI Survey 4.0/5) ont un **scope adjacent** — LLM4SE general ou architectures d'agents generaux — et ne traitent pas du choix CLI vs SDK vs Custom pour un contexte de guide EBSE + supervision PO minimale.

3. **Aucune source** ne compare ces 4 architectures specifiques (CLI+hooks, Agent SDK, Custom/LiteLLM, Hybride) sur les criteres derivés de l'analyse SDMF pertinents pour notre contexte : mécanisation/portabilité/contrôle/conformité EBSE.

4. **L'espace est tres recent** : Claude Code est GA depuis Q3 2024, Claude Agent SDK depuis fin 2025. L'OpenAI Agents SDK date de mars 2025. AWS Strands date de 2025. Google ADK date de 2025. Le domaine est trop recent pour avoir ete couvert par des SLR rigoureuses.

**Decision : Phase 1.1 gate PASSED — nouvelle SLR justifiee** sous Kitchenham & Charters 2007 §5.1.

---

## Sources a citer en background dans la nouvelle SLR

- **#1 Rombaut 2026** — taxonomie source-code des architectures, reference architecturale principale
- **#2 Wang et al. 2025** — pain points developpeurs sur 10 frameworks, contexte adoption
- **#4 Hou LLM4SE 2024** — reference fondatrice LLM4SE, background general
- **#5 Agentic AI Survey 2025** — background architectures generales

## Limites documentees

1. **Acces paywall** : IEEE Xplore et ACM DL non directement accessibles — proxy WebSearch uniquement. Possible qu'une SLR supplementaire sur les frameworks de coding agents existe derriere paywall.

2. **Domaine tres recent** : la majorite des runtimes evalues (Claude Agent SDK, OpenAI Agents SDK, AWS Strands, Google ADK) sont apparus en 2025. Le cycle de publication academique est en retard sur ce domaine — les SLR sur ces outils specifiques n'ont probablement pas encore ete publiees.

3. **Fabrication risque** : en absence de SLR formelles sur ce scope exact, le risque de fabrication de donnees est eleve. La Phase 2.1 s'appuiera exclusivement sur des sources verifiables (docs officielles, arXiv avec URL confirms, experience reports avec auteurs identifies).

## Prochaine etape

Phase 1.2 — Commissioning : definition du scope (case de la matrice ISO 25010 x SWEBOK generant cette question), equipe de review, ressources disponibles.
