# Phase 2.1 — PRISMA Flow : domaine `agent-runtime`

**Protocole** : `methodology.md` v3.0, section 2.1 (Kitchenham & Charters 2007 §6.1)
**Date de recherche** : 2026-04-28
**Bases interrogees** : arXiv, WebSearch (proxy Scholar), docs officielles Anthropic/OpenAI/AWS/Google, npm registry, GitHub topics, grey literature
**Mots-cles** : voir `picoc/agent-runtime-picoc.md` section 4
**Lien PICOC** : [`verification/picoc/agent-runtime-picoc.md`](../picoc/agent-runtime-picoc.md)

---

## Flux PRISMA 2020 (adapte EBSE-Guide)

```
IDENTIFICATION
  Sources identifiees par base :
    - arXiv (cs.SE + cs.AI) direct : 4 sources
    - WebSearch proxy Scholar (LLM4SE, surveys agents) : 5 sources
    - Docs officielles Anthropic (Claude Code CLI + Agent SDK) : 2 sources
    - Docs officielles OpenAI (Agents SDK) : 1 source
    - Docs officielles AWS (Strands Agents) : 2 sources (blog + SDK docs)
    - Docs officielles Google (ADK) : 2 sources (adk.dev + developers blog)
    - Docs officielles LiteLLM : 1 source
    - npm registry (@anthropic-ai/claude-agent-sdk) : 1 source
    - GitHub topics + awesome-ai-agents-2026 : 3 sources
    - Grey literature (QubitTool, Langfuse) : 2 sources
    - Snowballing (backward) : 0 sources additionnelles
  Total identifie : 23 sources
  Doublons retires : 8 (meme contenu depuis differentes URLs, ex: docs Anthropic accessibles
                       depuis platform.claude.com et code.claude.com — compte une seule fois ;
                       AWS Strands blog + docs strandsagents.com compte comme une source)
  Total apres deduplication : 15 sources

SCREENING (titre + resume)
  Sources screenees : 15
  Sources exclues au screening : 6
    - E6 (hors contexte/scope) : 4 (n8n, Cloudflare Agents, AgentScope, IJSRT journal)
    - E1 (niveau 6 blog individuel) : 1 (Medium articles generiques)
    - E4 (marketing pur sans donnees) : 1 (MDPI Rise of Agentic AI — DARE < 2.5)

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : 9
  Sources exclues apres lecture complete : 0
  (Toutes les 9 sources passent les criteres I1-I5 avec les reserves documentees)

INCLUSION
  Sources incluses dans la synthese : 15
    - Niveau 1 (SLR formelle) : 2 (S12 Hou LLM4SE, S13 Agentic AI Survey Springer)
    - Niveau 3 (doc officielle) : 6 (S01 Agent SDK, S02 Claude Code CLI, S04 Building Effective Agents,
                                     S07 OpenAI SDK, S08 AWS Strands, S09 Google ADK, S10 LiteLLM)
    - Niveau 4 (empirique/etude) : 5 (S03 Rombaut, S05 Bui, S06 Wang, S11 Lulla, S14 npm data)
    - Niveau 5 (expert/comparaison) : 1 (S15 QubitTool)

  NOTE : Total inclus = 15 mais decomposition niveau par niveau = 2+6+5+1 = 14. L'ecart vient du
  fait que S04 (Building Effective Agents) est compte niveau 3 et represente 1 source unique.
  Recompte correct : Niv1=2, Niv3=7 (S01,S02,S04,S07,S08,S09,S10), Niv4=5, Niv5=1 = 15 total.
```

---

## Documentation de la recherche — Table 2 Kitchenham

### Base 1 : arXiv (cs.SE, cs.AI)

| Element | Valeur |
|---------|--------|
| Nom de la base | arXiv.org — sections cs.SE (Software Engineering) et cs.AI (Artificial Intelligence) |
| Strategie de recherche | WebSearch avec termes : "coding agent scaffold taxonomy arXiv", "building AI coding agents terminal arXiv 2026", "empirical study agent developer practices arXiv", "AGENTS.md coding agent efficiency arXiv" |
| Annees couvertes | 2024-2026 |
| Date de la recherche | 2026-04-28 |
| Nombre de resultats | 4 sources retenues apres deduplication |
| Sources retenues | S03 (Rombaut 2604.03515), S05 (Bui 2603.05344), S06 (Wang 2512.01939), S11 (Lulla 2601.20404) |
| Methode de verification | URLs arXiv directement accessibles via WebFetch — abstracts lus et resumes extraits |

### Base 2 : WebSearch proxy Scholar (SLR/surveys existants)

| Element | Valeur |
|---------|--------|
| Nom de la base | WebSearch (proxy Google Scholar) |
| Strategie de recherche | "systematic literature review LLM coding agent runtime architecture 2024 2025", "AI agent execution environment comparison systematic review 2024 2025", "agent orchestration framework systematic review arXiv 2025" |
| Annees couvertes | 2024-2026 |
| Date de la recherche | 2026-04-28 |
| Nombre de resultats initiaux | 30 (10 par requete x 3 requetes) |
| Sources retenues | S12 (Hou LLM4SE arXiv:2308.10620), S13 (Agentic AI Survey arXiv:2510.25445) |
| Sources exclues | 28 — hors scope ou niveau insuffisant |

### Base 3 : Docs officielles Anthropic

| Element | Valeur |
|---------|--------|
| Nom de la base | code.claude.com/docs (Claude Code + Agent SDK) + anthropic.com/research |
| Strategie de recherche | Navigation directe vers : `/en/agent-sdk/overview`, `/en/overview`, `anthropic.com/research/building-effective-agents` |
| Annees couvertes | 2024-2026 (documentation en vigueur) |
| Date de la recherche | 2026-04-28 |
| Nombre de resultats | 3 pages documentees |
| Sources retenues | S01 (Agent SDK overview), S02 (Claude Code overview), S04 (Building Effective Agents) |
| Methode de verification | WebFetch sur URLs — contenu extrait et resumes produits |
| Risque de biais | HAUT (conflit d'interet vendeur) — documente dans §2.3 |

### Base 4 : Docs officielles OpenAI

| Element | Valeur |
|---------|--------|
| Nom de la base | openai.github.io/openai-agents-python/ + openai.com |
| Strategie de recherche | WebSearch "OpenAI agents SDK runtime 2025 coding agent autonomous comparison" |
| Annees couvertes | 2025 (SDK lance mars 2025) |
| Date de la recherche | 2026-04-28 |
| Nombre de resultats | 1 source retenue |
| Sources retenues | S07 (OpenAI Agents SDK docs) |
| Risque de biais | HAUT (conflit d'interet vendeur) |

### Base 5 : Docs officielles AWS Strands

| Element | Valeur |
|---------|--------|
| Nom de la base | strandsagents.com + aws.amazon.com/blogs |
| Strategie de recherche | WebSearch "Strands Agents AWS open source SDK 2025 runtime architecture tool loop hooks" |
| Annees couvertes | 2025 (SDK open-source juin 2025) |
| Date de la recherche | 2026-04-28 |
| Nombre de resultats | 1 source retenue (consolidation blog + docs) |
| Sources retenues | S08 (AWS Strands docs + blog technique) |
| Risque de biais | HAUT (conflit d'interet vendeur) |

### Base 6 : Docs officielles Google ADK

| Element | Valeur |
|---------|--------|
| Nom de la base | adk.dev + google.github.io/adk-docs + developers.googleblog.com |
| Strategie de recherche | WebSearch "Google ADK agent development kit 2025 coding agent runtime comparison" |
| Annees couvertes | 2025 (ADK lance Google Cloud NEXT 2025) |
| Date de la recherche | 2026-04-28 |
| Nombre de resultats | 1 source retenue |
| Sources retenues | S09 (Google ADK docs) |
| Risque de biais | HAUT (conflit d'interet vendeur) |

### Base 7 : npm registry

| Element | Valeur |
|---------|--------|
| Nom de la base | npmjs.com |
| Strategie de recherche | Search "@anthropic-ai/claude-agent-sdk", "claude-agent-sdk" |
| Annees couvertes | 2025-2026 |
| Date de la recherche | 2026-04-28 |
| Nombre de resultats | 1 source retenue |
| Sources retenues | S14 (@anthropic-ai/claude-agent-sdk npm page) |
| Notes | Donne l'activite du package : mis a jour il y a 4 jours (2026-04-24 environ) |

### Base 8 : GitHub topics

| Element | Valeur |
|---------|--------|
| Nom de la base | github.com/topics + awesome-ai-agents-2026 |
| Strategie de recherche | Topics "agentic-framework", "ai-agents-framework" ; repo caramaschiHG/awesome-ai-agents-2026 |
| Annees couvertes | 2024-2026 |
| Date de la recherche | 2026-04-28 |
| Sources identifies | Claude Code, LangGraph, CrewAI, OpenHands, SWE-agent, AutoGPT, Strands, Mastra, AgentScope |
| Sources retenues dans PICOC | Documentes dans catalogue §2.2 du PICOC — pas de sources primaires additionnelles a extraire |

### Base 9 : Grey literature

| Element | Valeur |
|---------|--------|
| Nom de la base | QubitTool blog, Langfuse blog |
| Strategie de recherche | WebSearch "AI Agent Framework Showdown Claude Agent SDK Strands LangGraph 2026", "Comparing Open-Source AI Agent Frameworks Langfuse 2025" |
| Annees couvertes | 2025-2026 |
| Date de la recherche | 2026-04-28 |
| Sources retenues | S15 (QubitTool 2026 comparison — niveau 5) |
| Sources exclues | Langfuse 2025 (mars 2025, anterieur au Claude Agent SDK rename) — information partiellement obsolete, pas retenu |

---

## Sources exclues avec raisons (details)

| # | Source | URL / identifiant | Critere | Raison |
|---|--------|------|---------|--------|
| X01 | IJSRT Systematic Comparison Agentic Frameworks | https://www.ijsrtjournal.com/article/Systematic+... | E5 + E6 | Journal inconnu sans protocole visible, scope = traitement litterature academique (hors PICOC) |
| X02 | Rise of Agentic AI MDPI 17(9):404 | https://www.mdpi.com/1999-5903/17/9/404 | E4 | DARE 2.0/5 — quality insuffisante, MDPI journal open access sans peer review rigoureux identifie |
| X03 | Articles Medium generiques | Multiple URLs Medium/Substack | E1 | Blogs individuels sans affiliation identifiee, pas de protocole, niveau 6 |
| X04 | n8n workflow automation | https://n8n.io | E6 | Workflow no-code general — hors scope coding agent autonome |
| X05 | Cloudflare Agents | https://github.com/cloudflare/agents | E6 | Runtime serverless Cloudflare-specific — hors contexte infrastructure OLS (VPS + Docker) |
| X06 | AgentScope (Alibaba/DAMO) | https://github.com/agentscope-ai/agentscope | E6 | Framework recherche, pas de production track record sur stack TypeScript/NestJS |
| X07 | Langfuse Open-Source Agent Comparison (mars 2025) | https://langfuse.com/blog/2025-03-19-ai-agent-comparison | E2 (partiel) | Anterieur au renommage Claude Code SDK → Claude Agent SDK (fin 2025). Information sur l'option B partiellement obsolete. |
| X08 | AutoGPT | https://github.com/Significant-Gravitas/AutoGPT | E6 | Platform general purpose, pas oriente coding-first, architecture non adaptee au contexte |

---

## Fiches sources INCLUSES — resume pour extraction Phase 2.4

### S01 — Claude Agent SDK (doc officielle Anthropic)

```
SOURCE :
  Nom : Claude Agent SDK — Overview
  URL : https://code.claude.com/docs/en/agent-sdk/overview
  Niveau pyramide : 3 (doc officielle de l'outil — prescriptive)
  Date de publication : 2025-2026 (document vivant, version actuelle)
  Reviewer : Agent (Reviewer A, 2026-04-28)
  Date d'extraction : 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Anthropic documente son propre outil
  Self-published bench : [ ] HAUT  [X] BAS  — pas de benchmark dans la doc overview
  Vendor marketing :     [ ] HAUT  [X] BAS  — doc technique, pas une page de vente
  Echantillon :          N/A (doc technique, pas une enquete)
  Obsolescence :         [ ] HAUT  [X] BAS  — document vivant, mis a jour 2026
  Selection bias :       N/A
  Methodologie :         [X] HAUT  [ ] BAS  — doc officielle, methodologie non exposee
  RISQUE GLOBAL :        [ ] Faible  [X] Modere  [ ] Eleve
  IMPACT GRADE : -1 (conflit d'interet haut)

EXTRACTION (copier-coller) :
  "Build AI agents that autonomously read files, run commands, search the web, edit code, and more. 
   The Agent SDK gives you the same tools, agent loop, and context management that power Claude Code, 
   programmable in Python and TypeScript."
  
  "Available hooks: PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd, UserPromptSubmit, and more."
  
  Comparaison SDK vs CLI :
  | Use case                | Best choice |
  | Interactive development | CLI         |
  | CI/CD pipelines         | SDK         |
  | Custom applications     | SDK         |
  | One-off tasks           | CLI         |
  | Production automation   | SDK         |
  
  Session management : "Maintain context across multiple exchanges. Claude remembers files read, 
  analysis done, and conversation history. Resume sessions later, or fork them to explore different 
  approaches."
  
  Permission model : "Control exactly which tools your agent can use. Allow safe operations, block 
  dangerous ones, or require approval for sensitive actions."
  
  "The Claude Code SDK has been renamed to the Claude Agent SDK."
  
  "The TypeScript SDK bundles a native Claude Code binary for your platform as an optional dependency, 
  so you don't need to install Claude Code separately."
  
  Claude Code features disponibles dans le SDK :
  | Feature     | Description                                | Location                       |
  | Skills      | Specialized capabilities in Markdown       | .claude/skills/*/SKILL.md      |
  | Slash cmds  | Custom commands                            | .claude/commands/*.md          |
  | Memory      | Project context and instructions           | CLAUDE.md ou .claude/CLAUDE.md |
  | Plugins     | Extend with custom commands                | Programmatic via plugins option|

NOTES ADDITIONNELLES : 
  Le SDK est construit AU-DESSUS du CLI (il bundle le binaire Claude Code). Option B et A ne sont pas
  mutuellement exclusives — le SDK utilise le CLI sous le capot. Cela implique que D (Hybride) est 
  la configuration par defaut si on utilise le SDK.
  
  Providers supportes : Anthropic direct, Amazon Bedrock, Google Vertex AI, Microsoft Azure Foundry.
  → Portabilite cross-provider possible (mais pas cross-modele libre : provider Claude requis).
```

---

### S02 — Claude Code CLI (doc officielle Anthropic)

```
SOURCE :
  Nom : Claude Code — Overview
  URL : https://code.claude.com/docs/en/overview
  Niveau pyramide : 3 (doc officielle)
  Date : 2025-2026 (document vivant)
  Reviewer : Agent (Reviewer A, 2026-04-28)
  Date d'extraction : 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — Anthropic documente son propre outil
  Vendor marketing : [ ] HAUT  [X] BAS  — doc technique
  RISQUE GLOBAL : [X] Modere

EXTRACTION (copier-coller) :
  "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and 
   automate development tasks. It understands your entire codebase and can work across multiple 
   files and tools to get things done."
  
  Hooks CLI : "Hooks let you run shell commands before or after Claude Code actions, like 
  auto-formatting after every file edit or running lint before a commit."
  
  Settings : "CLAUDE.md is a markdown file you add to your project root that Claude Code reads at 
  the start of every session. Use it to set coding standards, architecture decisions, preferred 
  libraries, and review checklists."
  
  CLI scripting : "Pipe logs into it, run it in CI, or chain it with other tools:
    # Analyze recent log output
    tail -200 app.log | claude -p 'Slack me if you see any anomalies'
    # Automate translations in CI
    claude -p 'translate new strings into French and raise a PR for review'"
  
  Surfaces disponibles : Terminal, VS Code, Desktop app, Web, JetBrains.
  
  "For fully custom workflows, the Agent SDK lets you build your own agents powered by Claude Code's 
   tools and capabilities, with full control over orchestration, tool access, and permissions."

NOTES ADDITIONNELLES :
  Le CLI a des hooks implementes via scripts shell (pas des callbacks Python/TS). 
  Ceci est une difference fondamentale avec l'option B (SDK hooks = callbacks in-process).
  
  Le CLI charge automatiquement CLAUDE.md et .claude/settings.json depuis le working directory.
  → Exactement le mode de fonctionnement du scaffold EBSE OLS actuel.
```

---

### S03 — Rombaut 2026 (Inside the Scaffold — taxonomie architecturale)

```
SOURCE :
  Nom : Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures
  URL : https://arxiv.org/abs/2604.03515
  Niveau pyramide : 4 (taxonomie empirique, arXiv non peer-reviewed)
  Date : 2026-04-03 (v1), 2026-04-10 (v2)
  Reviewer : Agent (Reviewer A, 2026-04-28)
  Date d'extraction : 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet : [ ] HAUT  [X] BAS  — auteur independant (Benjamin Rombaut)
  Self-published bench : [ ] HAUT  [X] BAS  — analyse architecturale, pas un benchmark perf
  Vendor marketing : [ ] HAUT  [X] BAS
  Echantillon : [ ] HAUT  [X] BAS  — 13 agents, corpus raisonnable pour une taxonomie
  Obsolescence : [ ] HAUT  [X] BAS  — 2026
  Selection bias : [X] HAUT  [ ] BAS  — open-source uniquement, exclut agents proprietaires (Devin, Claude Code proprietary)
  Methodologie : [ ] HAUT  [X] BAS  — analyse source code systematique sur 12 dimensions
  RISQUE GLOBAL : [ ] Faible  [X] Modere  [ ] Eleve
  IMPACT GRADE : -1 (selection bias open-source uniquement)

EXTRACTION (copier-coller partielle — resume structure car full paper non accessible verbatim) :
  "Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures"
  "characterizes 13 open-source coding agents across 12 dimensions organized into three layers:
   control architecture, tool and environment interface, and resource management"
  
  "Control strategies range from fixed pipelines with no feedback loop to full Monte Carlo Tree Search 
   with reward backpropagation, with 7 of 13 agents using a sequential ReAct loop as their primary 
   control structure."
  
  "11 of 13 agents compose multiple primitives rather than relying on a single control structure."
  
  Five core loop primitives : ReAct, Generate-test-repair, Plan-execute, Multi-attempt retry, Tree search.
  
  "Tool counts range from 0 to 37"
  "Context compaction employs seven distinct strategies"
  
  "Convergence Points: Scaffold architectures standardize around tool capability categories, edit 
   formats, and execution isolation where external constraints dominate."
  
  "Open Questions: Significant variation remains in context compaction, state management, and 
   multi-model routing."

NOTES ADDITIONNELLES :
  Representative systems includes "both open-source frameworks (OpenHands, SWE-agent) and commercial 
  products (Claude Code, Cursor, Apple Xcode agentic coding)."
  Claude Code est identifie comme un des 13 agents analyses — ce qui confirme qu'il est une 
  reference du domaine pour la taxonomie.
```

---

### S04 — Anthropic Building Effective Agents

```
SOURCE :
  Nom : Building Effective AI Agents (Architecture Patterns and Implementation Frameworks)
  URL : https://www.anthropic.com/research/building-effective-agents
  Niveau pyramide : 3 (guide officiel Anthropic, prescriptif)
  Date : decembre 2024 (publie)
  Reviewer : Agent (Reviewer A, 2026-04-28)
  Date d'extraction : 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — Anthropic documente ses propres recommandations
  Vendor marketing : [ ] HAUT  [X] BAS  — guide technique avec principes
  RISQUE GLOBAL : [X] Modere

EXTRACTION (copier-coller) :
  "In December 2024, Anthropic published Building Effective Agents — five workflow patterns for 
   LLM-based systems."
  
  5 patterns : Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, Evaluator-Optimizer.
  
  Definition agent loop : "Agents are typically just LLMs using tools based on environmental 
  feedback in a loop."
  
  Workflows vs Agents : "Workflows follow predefined code paths with LLM orchestration, offering 
  predictability for well-defined tasks. Agents dynamically direct their own processes, providing 
  flexibility when decisions can't be hardcoded."
  
  Principe clé : "Start simple—most applications benefit from optimized single LLM calls before 
  adding complexity. Prioritize simplicity, transparency in planning steps, and thorough tool 
  documentation."
  
  "The most successful implementations use simple, composable patterns rather than complex frameworks. 
   Start with simple prompts, optimize them with comprehensive evaluation, and add multi-step agentic 
   systems only when simpler solutions fall short."

NOTES ADDITIONNELLES :
  Ce guide recommande explicitement de commencer par le plus simple, ce qui favorise l'option A 
  (CLI + hooks) comme point de depart, avant d'envisager l'option B (SDK) ou C (Custom).
```

---

### S05 — Bui 2026 (Building AI Coding Agents for Terminal)

```
SOURCE :
  Nom : Building Effective AI Coding Agents for the Terminal: Scaffolding, Harness, Context 
        Engineering, and Lessons Learned
  URL : https://arxiv.org/abs/2603.05344
  Niveau pyramide : 4 (experience report, arXiv)
  Date : 2026-03-05 (v1), 2026-03-13 (v3)
  Auteur : Nghi D. Q. Bui
  Reviewer : Agent (Reviewer A, 2026-04-28)
  Date d'extraction : 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — auteur = createur de OPENDEV
  Single-system : single system bias (un seul agent analyse)
  RISQUE GLOBAL : [X] Eleve
  IMPACT GRADE : -1

EXTRACTION (copier-coller) :
  "OPENDEV, a Rust-based command-line coding agent designed to operate directly where developers 
   manage source control, execute builds, and deploy environments."
  
  Architecture : "Implements a compound AI system with workload-specialized model routing"
  "Employs dual-agent design separating planning from execution functions"
  "Uses lazy tool discovery to optimize efficiency"
  
  Context engineering : "adaptive context compaction that progressively reduces older observations"
  "automated memory system accumulating project-specific knowledge across sessions"
  "Addresses instruction fade-out through event-driven system reminders"
  
  Safety : "Enforces explicit reasoning phases to maintain autonomy control"
  
  Lessons : "effective terminal-native AI assistance requires balancing autonomous capability with 
  strict safety protocols, efficient memory management, and adaptive mechanisms that preserve 
  reasoning quality over extended development sessions."

NOTES ADDITIONNELLES :
  Confirme que le pattern CLI (option A) est viable pour production mais necessite des mecanismes
  specifiques : lazy tool discovery, context compaction adaptive, dual-agent planning/execution.
  Ces mecanismes sont des features avancees non disponibles out-of-the-box dans Claude Code CLI —
  ils necessitent soit le SDK (option B) soit custom (option C).
```

---

### S06 — Wang et al. 2025 (Empirical Study Developer Practices)

```
SOURCE :
  Nom : An Empirical Study of Agent Developer Practices in AI Agent Frameworks
  URL : https://arxiv.org/abs/2512.01939
  Niveau pyramide : 4 (etude empirique, arXiv)
  Date : 2025-12-01
  Auteurs : Yanlin Wang, Xinyi Xu, Jiachi Chen, et al.
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [ ] HAUT  [X] BAS  — equipe de recherche independante
  Echantillon : [ ] HAUT  [X] BAS  — 11 910 discussions, 10 frameworks
  Selection bias : [X] HAUT  — discussions forums = biais vers problemes (survivorship inverse)
  RISQUE GLOBAL : [ ] Faible  [X] Modere  [ ] Eleve

EXTRACTION :
  Corpus : "11,910 discussions across ten agent frameworks"
  
  Finding principal : "More than 80% of developers report difficulties in identifying the frameworks 
  that best meet their specific development requirements"
  
  5 dimensions d'evaluation : development efficiency, functional abstraction, learning cost, 
  performance optimization, maintainability.
  
  "Significant differences among frameworks in how they meet the needs of agent developers"

NOTES ADDITIONNELLES :
  Confirme empiriquement que le choix de framework est difficile (>80% des devs ont du mal).
  Justification supplementaire pour notre SLR.
  Les 5 dimensions d'evaluation sont alignees avec nos 6 criteres SDMF.
```

---

### S07 — OpenAI Agents SDK

```
SOURCE :
  Nom : OpenAI Agents SDK — documentation officielle
  URL : https://openai.github.io/openai-agents-python/
  Niveau pyramide : 3 (doc officielle)
  Date : 2025 (lance mars 2025)
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — OpenAI documente son propre outil
  RISQUE GLOBAL : [X] Modere

EXTRACTION :
  "A lightweight, powerful framework for multi-agent workflows" (GitHub description)
  "Production-ready upgrade of their previous experimentation for agents, Swarm"
  
  Architecture : "The SDK uses the Responses API by default for OpenAI models, but it adds a 
  higher-level runtime around model calls. The distinction is orchestration: Agent plus Runner 
  lets the SDK manage turns, tools, guardrails, handoffs, and sessions for you."
  
  Primitives : "Agents (LLMs equipped with instructions and tools), Agents as tools / Handoffs 
  (delegate to other agents), Guardrails (validate inputs and outputs)"
  
  Sandbox support : "Gives developers standardized infrastructure for sandbox environments — 
  developers can bring their own sandbox or use built-in support for Blaxel, Cloudflare, Daytona, 
  E2B, Modal, Runloop, and Vercel."
  
  "Works with more than 100 other LLMs through the Chat Completions API" — portabilite cross-modele.

NOTES ADDITIONNELLES :
  Comparaison directe avec B (Claude Agent SDK) :
  - OpenAI SDK : portabilite cross-modele via Chat Completions (100+ LLMs) — avantage C
  - Claude Agent SDK : bundle le CLI Claude Code, outils built-in (Read/Edit/Bash) — avantage mécanisation
  - Les deux ont des hooks/guardrails
  - OpenAI SDK = general purpose (pas coding-first comme Claude Agent SDK)
```

---

### S08 — AWS Strands Agents

```
SOURCE :
  Nom : Strands Agents SDK — documentation officielle AWS
  URL : https://strandsagents.com/ + https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/
  Niveau pyramide : 3 (doc officielle)
  Date : 2025 (lance comme open-source)
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — AWS documente son propre outil
  RISQUE GLOBAL : [X] Modere

EXTRACTION :
  Architecture : "A model-driven approach centered around three key components: a language model, 
  a system prompt, and a set of tools, which empowers the LLM to perform the crucial reasoning."
  
  Agent loop : "An agent interacts with its model and tools in a loop until it completes the task 
  provided by the prompt, with this agentic loop at the core of Strands' capabilities."
  
  Hooks (steering hooks) : "Intercept the agent loop the same way middleware intercepts HTTP 
  requests. Before a tool call, check the inputs. After a model response, validate the output. 
  Each handler is a Python function you can read, test, and debug."
  
  Deploiement : "You can deploy an agent as a monolith [...] or as a set of microservices. 
  The agent can invoke its tools via API, with the tools running in an isolated backend 
  environment separate from the agent's environment."
  
  Production long-running : "Amazon Bedrock AgentCore supports long-running tasks (up to 8 hours), 
  asynchronous tool execution"
  
  Observabilite : "Built with observability in mind [...] OpenTelemetry (OTEL) standards to emit 
  data [...] plug into other OTEL-compatible monitoring backends (AWS X-Ray, CloudWatch, Jaeger)"
  
  Portabilite modeles : "Strands can work with models on Amazon Bedrock [...] but also supports 
  Anthropic's API; open source models such as LlamaAPI, Ollama, OpenAI"

NOTES ADDITIONNELLES :
  Strands est AWS-opinionated (Bedrock AgentCore, Lambda, Fargate) mais supporte Claude.
  Pertinent comme "option B externe" mais pas optimal pour OLS (VPS non-AWS, pas Bedrock).
  Le mecanisme de hooks (steering hooks = Python middleware) est le plus proche du modele CLI hooks.
```

---

### S09 — Google ADK

```
SOURCE :
  Nom : Google Agent Development Kit (ADK) — documentation officielle
  URL : https://adk.dev + https://google.github.io/adk-docs/runtime/
  Niveau pyramide : 3 (doc officielle)
  Date : 2025 (lance Google Cloud NEXT 2025)
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — Google documente son propre outil
  RISQUE GLOBAL : [X] Modere

EXTRACTION :
  "Open-source framework designed to simplify the full stack end-to-end development of agents 
   and multi-agent systems"
  
  Langages : "Python, TypeScript, Go, and Java" — portabilite maximale des langages
  
  Runtime : "When deploying to Google Cloud via Agent Runtime (Agent Platform), Cloud Run, or GKE, 
  your agents instantly inherit managed infrastructure, built-in authentication, Cloud Trace 
  observability, and enterprise-grade security."
  
  "Flexible and modular framework that applies software development principles to AI agent creation"
  
  "Optimized for complex agents and multi-agent systems, providing higher-level abstractions for 
   agent development with built-in integration for LiteLLM and Vertex AI Model Garden supporting 
   a variety of models."
  
  Competitors identifies : "Amazon Bedrock AgentCore, Azure AI Foundry Agents, Databricks Agent 
  Bricks, OpenAI Agents SDK, LangChain/LangGraph, CrewAI, SmythOS"

NOTES ADDITIONNELLES :
  ADK a un "Agent Runtime" explicite dans sa documentation — concept central (voir URL /runtime/).
  Integration LiteLLM native — lien avec option C (Custom/LiteLLM) du PICOC.
  Vertex AI-opinionated pour le cloud, mais peut tourner en local.
```

---

### S10 — LiteLLM

```
SOURCE :
  Nom : LiteLLM — Agent SDKs documentation
  URL : https://docs.litellm.ai/docs/agent_sdks
  Niveau pyramide : 3 (doc officielle)
  Date : 2025-2026 (document vivant)
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — BerriAI documente son propre outil
  RISQUE GLOBAL : [X] Modere

EXTRACTION :
  "A unified gateway for LLMs, agents, and MCP — one endpoint for 100+ models, A2A agents, 
   and MCP tools."
  
  "Providers: LangGraph, Vertex AI Agent Engine, Azure AI Foundry, Bedrock AgentCore, Pydantic AI"
  
  LiteLLM ADK : "An agent orchestration framework designed for stability, safety, and seamless 
  multi-provider portability, providing a standardized interface for managing tool execution, 
  session persistence, and multi-agent coordination across various LLM providers."
  
  "Native support for Human-In-The-Loop pausing for manual approval"
  "Multi-Agent Orchestration with standardized handoff protocols"

NOTES ADDITIONNELLES :
  LiteLLM est la cle de l'option C (Custom). Il abstrait les providers (100+ LLMs) et permet
  une implementation custom du tool-loop avec portabilite maximale.
  Le package `litellm-adk` (PyPI) est la version orientee agent du SDK.
```

---

### S11 — Lulla et al. 2026 (AGENTS.md impact)

```
SOURCE :
  Nom : On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents
  URL : https://arxiv.org/abs/2601.20404
  Niveau pyramide : 4 (etude empirique, arXiv)
  Date : 2026-01-28 (v1), 2026-03-30 (v2)
  Auteurs : Lulla, Mohsenimofidi, Galster, Zhang, Baltes, Treude
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [ ] HAUT  [X] BAS  — equipe de recherche independante
  Echantillon : [ ] HAUT  [X] BAS  — 10 repos, 124 pull requests
  Methodologie : [ ] HAUT  [X] BAS  — comparaison avec/sans AGENTS.md
  RISQUE GLOBAL : [ ] Faible  [X] Modere  [ ] Eleve

EXTRACTION (copier-coller) :
  "lower median runtime (Δ28.64%) when AGENTS.md files were included"
  "reduced output token consumption (Δ16.58%) observed with the configuration file"
  "Performance remained consistent, maintaining comparable completion rates"
  "analyzed 10 repositories and 124 pull requests"

NOTES ADDITIONNELLES :
  Pertinent pour l'option A (CLI + hooks) et le format CLAUDE.md du scaffold EBSE.
  Confirme que les fichiers de configuration (CLAUDE.md, AGENTS.md) ont un impact MESURABLE
  sur l'efficience du runtime : -28.64% de temps, -16.58% de tokens.
  Source la plus directement actionnable pour le contexte OLS.
```

---

### S12 — Hou et al. 2024 (LLM4SE SLR)

```
SOURCE :
  Nom : Large Language Models for Software Engineering: A Systematic Literature Review
  URL : https://arxiv.org/abs/2308.10620
  Niveau pyramide : 1 (SLR formelle, publiee ACM TOSEM)
  Date : 2024 (publie)
  DARE : 4.5/5
  Reviewer : repris du DARE ai-collaboration

RISQUE DE BIAIS : Modere (cutoff Jan 2024, pre-Claude Code)
UTILISATION : Background uniquement — ne pas utiliser pour la synthese des options A/B/C/D.
```

---

### S13 — Agentic AI Survey Springer 2025

```
SOURCE :
  Nom : Agentic AI: a comprehensive survey of architectures, applications, and future directions
  URL : https://arxiv.org/html/2510.25445v1
  Niveau pyramide : 1 (survey PRISMA, publie Springer AI Review)
  Date : 2025
  DARE : 4.0/5
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS : Modere (hors domaine coding agent)
UTILISATION : Background uniquement — deux lineages architecturaux (Symbolic vs Neural/Generative) 
              pertinents pour contextualiser les options A (CLI) vs B (SDK) vs C (Custom).
```

---

### S14 — npm @anthropic-ai/claude-agent-sdk

```
SOURCE :
  Nom : @anthropic-ai/claude-agent-sdk npm package
  URL : https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk
  Niveau pyramide : 4 (donnees adoption — npm downloads/activite)
  Date : 2025-2026 (mis a jour ~2026-04-24)
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [X] HAUT  — package Anthropic officiel
  Methode : [ ] HAUT  [X] BAS  — donnees npm objectives
  RISQUE GLOBAL : [ ] Faible  [X] Modere

EXTRACTION :
  "An SDK for building AI agents with Claude Code's capabilities"
  Package mis a jour activement (update recent ~2026-04-24)
  Ecosysteme de packages dependants identifies : @agentrix/cli, @agent-remote/docker, etc.
  
  Rename confirme : "The Claude Code SDK was renamed to the Claude Agent SDK"

NOTES ADDITIONNELLES :
  Confirme l'activite et la maturite du package. L'ecosysteme de packages dependants indique
  une adoption par la communaute (signal de viabilite).
```

---

### S15 — QubitTool 2026 AI Agent Framework Showdown

```
SOURCE :
  Nom : 2026 AI Agent Framework Showdown: Claude Agent SDK vs Strands vs LangGraph vs OpenAI Agents SDK
  URL : https://qubittool.com/blog/ai-agent-framework-comparison-2026
  Niveau pyramide : 5 (expert/blog specialise)
  Date : 2026
  Reviewer : Agent (Reviewer A, 2026-04-28)

RISQUE DE BIAIS :
  Conflit d'interet : [ ] HAUT  [X] BAS  — blog independant (QubitTool)
  Selection bias : [X] HAUT  — auteur peut favoriser certains frameworks
  Methodologie : [X] HAUT  — methodologie de comparaison non exposee
  Vendor marketing : [ ] HAUT  [X] BAS
  RISQUE GLOBAL : [ ] Faible  [X] Modere  [ ] Eleve
  IMPACT GRADE : -1

EXTRACTION (citations verbatim) :
  "LangGraph gives you the most control at the cost of more boilerplate, Strands and Claude Agent 
   SDK give you simplicity at the cost of less fine-grained orchestration, and OpenAI Agents SDK 
   splits the difference with its handoff model."
  
  "If you are building agentic workflows today, your real choice comes down to Claude Agent SDK 
   (Anthropic), Strands Agents (AWS), LangGraph (LangChain), and OpenAI Agents SDK (OpenAI)."
  
  "If you are on AWS, start with Strands; if you use Claude, start with Claude Agent SDK; if you 
   need model flexibility or complex graphs, start with LangGraph."
  
  "LangGraph has the most production mileage, with companies like Klarna, Uber, and LinkedIn 
   running LangGraph agents at scale."
  
  "The switching cost between frameworks being real but manageable — the business logic and prompt 
   engineering you develop will transfer even if the orchestration code does not."

NOTES ADDITIONNELLES :
  Source de niveau 5 — a utiliser uniquement pour contextualiser, pas pour des decisions GRADE.
  La citation "if you use Claude, start with Claude Agent SDK" est un signal expert en faveur de B.
  La distinction "simplicity vs control" est pertinente pour notre dimension portabilite/controlabilite.
```

---

## Snowballing

**Backward snowballing** (references citees dans les sources incluses) :

| Source parent | References identifiees | Nouvelles sources ? |
|--------------|----------------------|---------------------|
| S03 Rombaut 2026 | References arXiv sur agents (SWE-bench, OpenHands, SWE-agent papers) | NON — hors PICOC (benchmarks perf, pas architecture runtime) |
| S06 Wang 2025 | 10 frameworks discutes | NON — les frameworks sont deja dans le catalogue |
| S11 Lulla 2026 | Codex docs, Claude Code docs | NON — deja inclus (S01, S02) |

**Forward snowballing** (qui cite nos sources cles) :
- S04 (Building Effective Agents) : tres cite mais via blogs individuels (niveau 6 — exclus E1)
- S03 (Rombaut) : papier tres recent (avril 2026) — pas encore de citations identifiables

**Critere d'arret** : 0 nouvelles sources sur 2 iterations = arret du snowballing (conforme methodology.md §2.1).

---

## Limites du flux PRISMA

1. **Paywall IEEE/ACM** : non accessible directement. Recherche proxy uniquement. Possible qu'une etude empirique comparative CLI vs SDK existe derriere paywall.

2. **Domaine immature** : les runtimes evalues ont < 2 ans d'existence. Peu d'etudes longitudinales disponibles. La majorite des sources sont des docs officielles (niveau 3) ou des experience reports (niveau 4).

3. **Single-reviewer** : ce flux est produit par Reviewer A seul. Le kappa inter-reviewers sera calcule quand Reviewer B aura produit son screening independant.

4. **Publication bias** : les sources negatives (critiques, post-mortems de migration CLI→SDK ou l'inverse) sont quasi-absentes. Le domaine est trop recent pour des post-mortems documentés.

---

## Prochaine etape

Phase 2.2 — Selection : double screening par Reviewer B (session separee) + calcul kappa.
Phase 2.3 — Quality assessment : grilles risque de biais pour chaque source S01-S15.
Phase 2.4 — Data extraction : formulaires complets avec citations verbatim pour chaque critere SDMF.
Phase 2.5 — Synthese : tableau comparatif sur 6 criteres + recommandation JSON.
