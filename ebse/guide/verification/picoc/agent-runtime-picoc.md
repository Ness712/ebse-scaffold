# Phase 1.3 + 1.4 — PICOC et protocole : domaine `agent-runtime`

**Protocole** : `methodology.md` v3.0, sections 1.3 + 1.4 (Kitchenham & Charters 2007 §5.3 + §5.4)
**Date** : 2026-04-28
**Lien DARE** : [`verification/dare/agent-runtime-dare.md`](../dare/agent-runtime-dare.md)
**Lien Commissioning** : [`verification/commissioning/agent-runtime-scope.md`](../commissioning/agent-runtime-scope.md)

---

## DARE conclusions (rappel)

Aucune SLR existante ne couvre le scope exact. Nouvelle SLR justifiee (DARE gate PASSED 2026-04-28).

Sources a citer en background : Rombaut 2026 (scaffold taxonomy), Wang et al. 2025 (developer practices), Hou 2024 (LLM4SE), Agentic AI Survey 2025.

---

## 1. PICOC formel

| Element | Valeur |
|---------|--------|
| **P — Population** | Equipes solo/petites (1-5 personnes) delegant le developpement logiciel a un agent IA configurable, dont les decisions techniques sont externalisees dans un guide EBSE structure (fichiers JSON + Markdown). Pas de DevOps dédié. Supervision PO minimale (1-3 interventions/jour). |
| **I — Intervention** | Architecture de runtime d'agent : (A) **CLI + hooks** — Claude Code CLI avec `settings.json` hooks (`SessionStart`, `PreToolUse`, `PostToolUse`, `Stop`) ; (B) **Agent SDK + orchestrateur** — Claude Agent SDK ou equivalent (Python/TypeScript `query()` + hooks callbacks + `ClaudeAgentOptions`) ; (C) **Custom via LiteLLM** — implementation maison du tool-loop via Anthropic Client SDK ou LiteLLM (while-loop + tool_executor custom) ; (D) **Hybride** — CLI pour sessions interactives + SDK pour CI/CD + custom pour cas specifiques |
| **C — Comparaison** | Entre les 4 options (A), (B), (C), (D) sur les criteres : mécanisation du workflow, portabilité cross-modèle, contrôle granulaire (hooks/gates), conformite EBSE (audit trail, approbation PO), cout d'adoption et de maintenance, resilience (max_turns, boucles, pannes) |
| **O — Outcome** | Conformite aux exigences derivees de l'analyse SDMF 6 phases : (1) mécanisation SDMF-adequat (agent peut executer les 6 phases autonomement), (2) portabilite (runtime fonctionne sans rewriting si modele ou provider change), (3) controlabilite (gates humains implementables proprement), (4) tracabilite (audit trail complet par commit/session), (5) maintenabilite (cout de mise a jour du runtime quand l'API evolue), (6) resilience (agent ne boucle pas indefiniment, max_turns respecte) |
| **Co — Context** | Production 2024-2026. Equipe < 5 personnes. Codebase TypeScript/NestJS + React. Guide EBSE externalisé (JSON). Infrastructure VPS 8 GB. Supervision PO minimale. Claude (Anthropic) comme LLM principal. |

**Question formulee** : *"Pour une equipe solo/petite (1-5 personnes) utilisant un guide EBSE externalisé et une supervision PO minimale, quelle architecture de runtime d'agent IA (CLI+hooks, Agent SDK, Custom/LiteLLM, ou Hybride) offre la meilleure conformite aux 6 criteres SDMF : mécanisation, portabilite, controle, tracabilite, maintenabilite, resilience ?"*

---

## 2. Decouverte exhaustive des alternatives (procedure §1.3)

### 2.1 — Bases interrogees

| Base | Mots-cles utilises | Date | Resultats retenus |
|------|-------------------|------|-------------------|
| **WebSearch (arXiv)** | "coding agent scaffold taxonomy", "agent loop max_turns", "agent runtime architecture coding" | 2026-04-28 | 3 (Rombaut 2026, Bui 2026, Wang 2025) |
| **WebSearch (docs Anthropic)** | "Claude Code CLI", "Claude Agent SDK overview", "hooks agent lifecycle" | 2026-04-28 | 2 (Claude Code CLI docs, Claude Agent SDK docs) |
| **WebSearch (docs OpenAI)** | "OpenAI Agents SDK runtime", "coding agent sandbox" | 2026-04-28 | 1 (OpenAI Agents SDK) |
| **WebSearch (docs AWS)** | "Strands Agents SDK runtime hooks", "AWS Strands architecture" | 2026-04-28 | 1 (AWS Strands) |
| **WebSearch (docs Google)** | "Google ADK agent runtime", "Agent Development Kit" | 2026-04-28 | 1 (Google ADK) |
| **npm registry** | "@anthropic-ai/claude-agent-sdk", "agent-sdk coding", "agent-loop" | 2026-04-28 | 3 (Claude Agent SDK npm, LiteLLM ADK npm, Mastra) |
| **GitHub** | "agentic-framework" topic, "ai-agents-framework" topic, awesome-ai-agents-2026 | 2026-04-28 | 8 (Claude Code, OpenHands, SWE-agent, LangGraph, CrewAI, AutoGPT, Strands, Mastra) |
| **WebSearch (grey literature)** | "agent framework comparison 2026", "coding agent runtime comparison" | 2026-04-28 | 2 (QubitTool comparison, Langfuse comparison) |
| **Snowballing** | References dans Rombaut 2026 et Wang 2025 | 2026-04-28 | 0 (pas de sources additionnelles pertinentes non deja identifiees) |

**Total identifie** : 21 sources candidates
**Doublons retires** : 3
**Total apres deduplication** : 18 sources

### 2.2 — Catalogue exhaustif des runtimes identifies

Le tableau suivant liste TOUS les runtimes/frameworks identifies, avec decision d'inclusion ou d'exclusion dans les alternatives PICOC evaluees.

| # | Runtime / Framework | Type | Couverture PICOC | Decision |
|---|--------------------|----|-----------------|---------|
| **A1** | **Claude Code CLI** | CLI (Node.js, binaire) | DIRECTE — option A | **INCLUS dans I** |
| **A2** | **Claude Agent SDK** (Python + TypeScript) | SDK library | DIRECTE — option B | **INCLUS dans I** |
| **C1** | **Custom / LiteLLM** (implementation maison tool-loop) | Custom code | DIRECTE — option C | **INCLUS dans I** |
| **D1** | **Hybride** (CLI + SDK + Custom selon usage) | Pattern architectural | DIRECTE — option D | **INCLUS dans I** |
| B1 | **OpenAI Agents SDK** | SDK library (Python) | DIRECTE-ADJACENTE — non Anthropic-first | Candidat comparaison externe |
| B2 | **AWS Strands Agents SDK** | SDK library (Python) | DIRECTE-ADJACENTE — AWS-opinionated | Candidat comparaison externe |
| B3 | **Google ADK** | SDK library (Python/TS/Go/Java) | DIRECTE-ADJACENTE — Vertex-opinionated | Candidat comparaison externe |
| B4 | **LangGraph** | Orchestration framework (Python/JS) | ADJACENTE — graph state machines | Candidat comparaison externe |
| B5 | **CrewAI** | Multi-agent framework (Python) | ADJACENTE — role-based multi-agent | Hors scope principal |
| B6 | **OpenHands (ex-OpenDevin)** | Platform + SDK (Python) | ADJACENTE — platform complet, non library | Hors scope principal |
| B7 | **SWE-agent** | Research agent (Python) | ADJACENTE — benchmarks, pas production | Hors scope principal |
| B8 | **AutoGPT** | Platform (Python) | ADJACENTE — pas coding-first | Hors scope principal |
| B9 | **Mastra** | TypeScript framework | ADJACENTE — general-purpose agents | Hors scope principal |
| B10 | **Anthropic Client SDK (raw API)** | API client (pas un runtime) | SOUS-JACENT — ce que Custom/LiteLLM utilise | Composant de C1 |
| B11 | **LiteLLM ADK** (`litellm-adk` PyPI) | SDK library (Python) | DIRECTE — sous-option de C | Composant de C1 |
| B12 | **Cloudflare Agents** | Serverless runtime | HORS SCOPE (infra cloudflare-specific) | Exclu |
| B13 | **n8n** | Workflow automation | HORS SCOPE (no-code, pas coding agent) | Exclu |
| B14 | **AgentScope (Alibaba)** | Research framework | ADJACENTE — recherche, pas production-ready | Hors scope principal |

**Note sur la classification DIRECTE vs ADJACENTE** : la question PICOC porte sur l'integration avec Claude Code CLI/SDK dans un contexte Anthropic-first. Les alternatives B1-B4 (OpenAI, AWS, Google, LangGraph) sont evaluees comme COMPARAISON externe (pour contextualiser le marche et les trade-offs portabilite) mais ne sont pas les options primaires d'intervention.

### 2.3 — Justification de l'exhaustivite

- **npm** : `@anthropic-ai/claude-agent-sdk` est disponible et activement maintenu (mis a jour il y a 4 jours selon npm, 2026-04-24). `litellm-adk` est disponible sur PyPI.
- **GitHub topics** : `agentic-framework` et `ai-agents-framework` ont ete consultes. Les projets stars + recent (Claude Code, LangGraph, CrewAI, OpenHands, AutoGPT, Strands, Mastra) ont ete identifies.
- **Docs officielles** : Anthropic (code.claude.com), OpenAI (openai.github.io/openai-agents-python), AWS (strandsagents.com + aws.amazon.com), Google (adk.dev) ont ete consultes.
- **awesome-ai-agents-2026** (GitHub, caramaschiHG) : catalogue de 300+ ressources consulte — aucun runtime supplementaire pertinent identifie au-dela des listes ci-dessus.

**Conclusion** : les 4 options A/B/C/D du PICOC sont exhaustives au regard des runtimes disponibles en 2025-2026 pour un agent Anthropic-first. Les alternatives B1-B4 sont documentees comme contexte de marche.

---

## 3. Criteres d'inclusion et d'exclusion (Phase 1.4)

### 3.1 — Criteres d'inclusion (I1-I5)

Une source est INCLUSE si elle remplit TOUS les criteres suivants :

| # | Critere | Justification specifique `agent-runtime` |
|---|---------|------------------------------------------|
| **I1** | La source traite directement d'une des architectures de runtime evaluees (CLI+hooks, SDK, Custom, Hybride, ou alternatives B1-B4) | Pertinence au PICOC |
| **I2** | La source fournit des donnees factuelles (specifications, benchmarks, cas d'usage documentes, critiques documentees) sur le comportement du runtime | Objectivite — pas d'opinion pure |
| **I3** | La source est de niveau 1 a 5 dans la pyramide des preuves (standard, doc officielle, enquete, expert reconnu) | Fiabilite minimale |
| **I4** | La source est datee de moins de 3 ans (2023-2026) OU est la documentation officielle en vigueur de l'outil | Actualite — domaine tres recent, les outils de > 3 ans sont generalement obsoletes |
| **I5** | La source est accessible (URL valide, contenu verifiable) | Verifiabilite |

**Note sur I4** : le seuil est reduit a 3 ans (vs 5 dans le protocole general) en raison de l'extreme rapidite d'evolution du domaine. Claude Code n'existait pas avant mi-2024. Claude Agent SDK n'existait pas avant fin 2025.

### 3.2 — Criteres d'exclusion (E1-E6)

Une source est EXCLUE si elle remplit AU MOINS UN des criteres suivants :

| # | Critere | Justification specifique `agent-runtime` |
|---|---------|------------------------------------------|
| **E1** | Source de niveau 6 (blog individuel sans affiliation identifiee, tutoriel YouTube sans donnees) | Fiabilite insuffisante |
| **E2** | Source datee de plus de 3 ans ET ne correspond pas a la documentation officielle en vigueur | Obsolescence — les runtimes evaluees n'existaient pas avant 2024 |
| **E3** | Source dans une langue non verifiable par les reviewers | Impossibilite de verification |
| **E4** | Source exclusivement marketing (page de vente, white paper vendeur sans donnees independantes) | Conflit d'interet majeur |
| **E5** | Source sans auteur identifiable ni organisation reconnue | Tracabilite impossible |
| **E6** | Source traitant d'un runtime hors des 4 options evaluees ET hors des alternatives B1-B4 documentees, sans explication des implications pour notre PICOC | Indirectness trop forte |

**Precision sur E4** : les blogs officiels de vendeurs (AWS blog, Google Developers Blog, Anthropic Engineering blog) sont admis car ils documentent le comportement de leurs propres outils (conflit d'interet = HAUT, mais information primaire non disponible ailleurs). Le biais est documente dans le formulaire de risque de biais.

---

## 4. Strategie de recherche — mots-cles et bases

### 4.1 — Mots-cles primaires (derives du PICOC)

Vocabulaire derive de P, I, C, O, Co :

| Dimension PICOC | Mots-cles primaires | Synonymes / variantes |
|-----------------|--------------------|-----------------------|
| **I (intervention)** | "agent runtime", "coding agent", "agent scaffold" | "agent harness", "agent loop", "agent SDK" |
| **I (options specifiques)** | "Claude Code CLI", "Claude Agent SDK", "LiteLLM agent", "custom tool loop" | "agent hooks", "PreToolUse", "PostToolUse", "max_turns" |
| **C (comparaison)** | "agent framework comparison", "Claude Code vs SDK" | "OpenAI Agents SDK", "Strands Agents", "LangGraph", "Google ADK" |
| **O (outcome)** | "agent control", "human-in-the-loop", "audit trail agent" | "agent permissions", "tool execution control", "agent portability" |
| **Co (contexte)** | "solo developer agent", "small team AI coding" | "autonomous coding", "EBSE", "guide-driven agent" |

### 4.2 — Chaines de recherche par base

**arXiv (cs.SE, cs.AI)** :
- `("agent runtime" OR "agent scaffold" OR "agent loop") AND ("coding" OR "software engineering") AND ("tool execution" OR "hooks" OR "max_turns")`
- `"Claude Code" OR "coding agent architecture" AND "taxonomy"`
- `"AGENTS.md" OR "CLAUDE.md" AND "coding agent"`

**Google Scholar (via WebSearch)** :
- `"autonomous coding agent runtime architecture" systematic review`
- `"agent SDK comparison" coding agent`
- `"hook-based agent" software development`

**GitHub** :
- Topic : `agentic-framework` + filtre langues Python/TypeScript
- Topic : `ai-agents-framework` + filtre 2024-2026
- Repos cles : `anthropics/claude-agent-sdk-python`, `anthropics/claude-agent-sdk-typescript`, `openai/openai-agents-python`, `strands-agents/sdk-python`, `google/adk-python`

**Docs officielles** :
- `code.claude.com/docs/en/agent-sdk/overview`
- `code.claude.com/docs/en/overview`
- `openai.github.io/openai-agents-python/`
- `strandsagents.com/`
- `adk.dev` / `google.github.io/adk-docs/`
- `docs.litellm.ai/docs/agent_sdks`

**Grey literature** :
- `anthropic.com/research/building-effective-agents` (Anthropic)
- QubitTool 2026 comparison
- Langfuse 2025 open-source agent frameworks comparison

---

## 5. Protocole complet (resume des composants Kitchenham)

Conformement a `methodology.md` section 1.4, ce document constitue le protocole de review. Les composants requis sont :

| Composant Kitchenham | Ou dans ce document |
|----------------------|---------------------|
| Background | Section "DARE conclusions" + fichiers DARE et Commissioning |
| Research questions | Section 1 (PICOC formel) |
| Search strategy | Section 4 (mots-cles et bases) |
| Study selection criteria | Section 3 (I1-I5 + E1-E6) |
| Quality assessment | Pyramide preuves + grille risque de biais (methodology.md §2.3) |
| Data extraction strategy | Formulaire standard (methodology.md §2.4) |
| Synthesis strategy | Narrative synthesis + tableau comparatif sur 6 criteres SDMF (Phase 2.5) |
| Timetable | Fichier commissioning, section 5 |

**Statut protocole** : PROVISOIRE — en attente de review par Reviewer B (double extraction, a planifier).

---

## 6. Liste FINALE des sources a extraire (apres screening Phase 2.1)

Voici les sources retenues apres screening titre+resume (criteres E1-E6 appliques). La liste sera mise a jour dans le fichier PRISMA (`prisma/agent-runtime-prisma.md`) apres lecture complete.

### Sources INCLUSES — a extraire en Phase 2.4

| # | Source | URL | Niveau pyramide | Statut screening |
|---|--------|-----|:---------------:|:-----------------|
| S01 | Anthropic Claude Agent SDK — doc officielle overview | https://code.claude.com/docs/en/agent-sdk/overview | **3** (doc officielle) | INCLUS — I1 OK, I2 OK, I3 OK, I4 OK (2025-2026), I5 VERIFIE |
| S02 | Anthropic Claude Code CLI — doc officielle overview | https://code.claude.com/docs/en/overview | **3** (doc officielle) | INCLUS — idem S01 |
| S03 | Rombaut 2026 — Inside the Scaffold (arXiv:2604.03515) | https://arxiv.org/abs/2604.03515 | **4** (etude empirique) | INCLUS — DARE 2.5, taxonomie directe |
| S04 | Anthropic — Building Effective Agents guide | https://www.anthropic.com/research/building-effective-agents | **3** (doc officielle prescriptive) | INCLUS — 5 patterns + agent loop definition |
| S05 | Bui 2026 — Building AI Coding Agents for Terminal (arXiv:2603.05344) | https://arxiv.org/abs/2603.05344 | **4** (experience report) | INCLUS (source primaire architecture CLI) |
| S06 | Wang et al. 2025 — Empirical Study Developer Practices (arXiv:2512.01939) | https://arxiv.org/abs/2512.01939 | **4** (etude empirique) | INCLUS — pain points frameworks |
| S07 | OpenAI Agents SDK — doc officielle | https://openai.github.io/openai-agents-python/ | **3** (doc officielle) | INCLUS — comparaison externe B1 |
| S08 | AWS Strands Agents — doc officielle + blog technique | https://strandsagents.com/ + https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/ | **3** (doc officielle) | INCLUS — comparaison externe B2 |
| S09 | Google ADK — doc officielle | https://adk.dev + https://google.github.io/adk-docs/ | **3** (doc officielle) | INCLUS — comparaison externe B3 |
| S10 | LiteLLM — doc officielle agent SDKs | https://docs.litellm.ai/docs/agent_sdks | **3** (doc officielle) | INCLUS — composant de C1 |
| S11 | Lulla et al. 2026 — AGENTS.md impact on coding agents (arXiv:2601.20404) | https://arxiv.org/abs/2601.20404 | **4** (etude empirique) | INCLUS — impact fichiers config sur runtime (delta -28.64% temps, -16.58% tokens) |
| S12 | Hou et al. 2024 — LLM4SE SLR (ACM TOSEM) | https://arxiv.org/abs/2308.10620 | **1** (SLR formelle) | INCLUS (background) |
| S13 | Agentic AI Survey Springer 2025 (arXiv:2510.25445) | https://arxiv.org/html/2510.25445v1 | **1** (survey PRISMA) | INCLUS (background architectures generales) |
| S14 | Anthropic Agent SDK npm (@anthropic-ai/claude-agent-sdk) | https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk | **4** (adoption data) | INCLUS — donnees adoption/activite package |
| S15 | QubitTool 2026 — AI Agent Framework Comparison | https://qubittool.com/blog/ai-agent-framework-comparison-2026 | **5** (expert/comparaison) | INCLUS AVEC RESERVE — blog specialise, biais potentiel, niveau 5 |

### Sources EXCLUES au screening

| # | Source | Critere | Raison |
|---|--------|---------|--------|
| X01 | IJSRT Systematic Comparison Agentic Frameworks | E5 + E6 | Journal inconnu, scope traitement litterature academique — hors PICOC |
| X02 | Rise of Agentic AI MDPI (2.0/5 DARE) | E4 (partiel) + DARE < 2.5 | Quality insuffisante pour etre utilisee comme SLR de reference |
| X03 | Blog Medium/Substack articles generiques sur agents | E1 | Blogs individuels sans affiliation identifiee |
| X04 | n8n, Zapier agents | E6 | Workflow automation — hors scope coding agent |
| X05 | Cloudflare Agents | E6 | Infra Cloudflare-specific — hors contexte VPS/Docker |
| X06 | AgentScope Alibaba | E6 | Framework recherche, pas production-ready sur notre stack |

---

## 7. Note methodologique sur les limites

1. **Conflit d'interet documenteur** : les sources S01-S04 (Anthropic) et S07-S09 (OpenAI, AWS, Google) sont produites par les vendeurs eux-memes. Risque de biais HAUT (vendor documentation). Chaque source recevra un risque de biais "HAUT" sur la dimension "Conflit d'interet" dans le formulaire §2.3. L'information n'est cependant pas disponible ailleurs — ces docs sont la source primaire la plus fiable sur les capacites techniques de leurs propres outils.

2. **Absence de benchmarks independants** : aucune etude independante a grande echelle (SO Survey niveau, CNCF Landscape) ne compare CLI vs SDK vs Custom pour des coding agents en 2025-2026. Le domaine est trop recent. La synthese devra s'appuyer sur une triangulation de sources de niveau 3-4.

3. **Single-reviewer Phase 1** : ce PICOC est produit par Reviewer A seul. La validation par Reviewer B est requise avant d'avancer en Phase 2.3 (quality assessment) et Phase 2.4 (data extraction). La Phase 2.1 (search) peut avancer en parallele.
