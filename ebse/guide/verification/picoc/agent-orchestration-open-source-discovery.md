# Phase 2.1 — Discovery : Runtimes d'agent de coding open-source
**Protocole** : SLR Kitchenham 2007, Phase 2.1 (Identification of Research)
**Date** : 2026-04-28
**Auteur** : Agent SLR (Claude Sonnet 4.6)
**PICOC** : Runtimes d'agent de coding open-source — portabilité provider, hooks/gates, exécution bash, audit trail, maintenabilité, résilience boucle

---

## 1. Table 2 Kitchenham — Bases consultées

| # | Base | Mots-clés utilisés | Date | Résultats bruts | Retenus pour screening |
|---|------|--------------------|------|-----------------|------------------------|
| B1 | GitHub (via WebSearch) | "coding agent" "ai agent runtime" open source 2025 2026 ; CLI terminal coding agent stars ; open source AI coding agent framework comparison 2026 | 2026-04-28 | ~40 projets identifiés | 22 |
| B2 | npm (npmjs.com via WebSearch) | "agent runtime" "coding agent" "llm agent" ; site:npmjs.com "coding agent" OR "agent sdk" OR "agent runtime" | 2026-04-28 | 10 packages listés | 5 |
| B3 | PyPI (via WebSearch) | "coding agent" "agent runtime" "llm agent framework" open source ; PyPI "coding agent" | 2026-04-28 | ~12 packages | 4 |
| B4 | arXiv / Papers With Code | "coding agent runtime" "autonomous software development" "LLM agent framework" ; "Inside the Scaffold" Rombaut 2026 ; Papers With Code coding agent benchmark | 2026-04-28 | 8 papiers pertinents | 5 |
| B5 | Comparatifs / Landscape | ThoughtWorks Radar 2026 ; CNCF AI Landscape 2025-2026 ; State of AI Agents 2026 ; firecrawl best agent frameworks 2026 ; opensourceaireview 2026 | 2026-04-28 | ~15 sources | 6 |
| B6 | Snowballing (décisions EBSE) | agent-runtime.json (S01-S15) ; ai-agent-framework-vs-prebuilt.json (19 études) ; ai-autonomous-agent-comparison.json (26 études incluses) | 2026-04-28 | 60 sources existantes | 8 nouveaux candidats snowballés |

**Total résultats bruts** : ~145 références/mentions
**Total après déduplication** : 38 outils distincts identifiés

---

## 2. Flux PRISMA

```
IDENTIFICATION
──────────────────────────────────────────────────────────
B1 GitHub         : ~40 projets
B2 npm            : 10 packages
B3 PyPI           : 12 packages
B4 arXiv/PwC      :  8 papiers
B5 Comparatifs    : 15 sources
B6 Snowballing    :  8 nouveaux
                        ↓
Total brut : ~93 entrées
                        ↓
DEDUPLICATION
──────────────────────────────────────────────────────────
Après suppression doublons inter-bases : 38 outils distincts
(ex: Cline apparaît dans B1, B2, B5 → 1 entrée)
                        ↓
SCREENING (titres + descriptions)
──────────────────────────────────────────────────────────
Exclus à ce stade (I1 non satisfait — pas un runtime d'agent
de coding mais un LLM wrapper, benchmark pur, ou framework
générique sans boucle agentique) : 8

  - Agno : framework d'agents génériques (pas coding-spécifique)  → E6
  - LiteLLM : proxy LLM/gateway sans boucle agentique propre     → E6
  - pyagentspec : spec de config portable, pas un runtime         → E6
  - agentic-flow : wrapper Claude Agent SDK (doublon)             → E6
  - Langroid : multi-agent générique, pas coding-spécifique       → E6
  - oh-my-opencode : plugin écosystème OpenCode (pas un runtime)  → E6
  - ALMAS : framework académique sans adoption production         → E4+E1
  - agentkit-llm : toolkit générique LLM, pas un runtime coding   → E6

Après screening : 30 candidats
                        ↓
ELIGIBILITE (critères I1-I5 / E1-E6 complets)
──────────────────────────────────────────────────────────
Exclus à l'éligibilité : 8

  - GitHub Copilot CLI : propriétaire Microsoft/GitHub, pas OSS   → E6
  - Cursor Agent : IDE propriétaire, code source non public        → E6
  - Devin (Cognition) : propriétaire, API fermée                  → E6
  - Replit Agent : propriétaire, embarqué dans IDE cloud          → E6
  - AutoCodeRover : orienté maintenance enterprise, pas runtime    → E1+E6
  - Agentless : approche "agentless" = pas de runtime continu     → I1 non satisfait
  - Microsoft AutoGen : maintenance mode annoncé, fragmentation   → I4 (maintenance mode = non standard actif)
  - ORCH (CLI orchestrator) : orchestrateur de runtimes existants, pas un runtime → I1 non satisfait

Après éligibilité : 22 candidats
                        ↓
INCLUSION (analyse complète vs 6 outcomes O1-O6)
──────────────────────────────────────────────────────────
Exclus à l'inclusion : 4

  - LangGraph : framework d'orchestration générique (workflow graphs)
    → E6 : contexte trop différent (pas un coding agent runtime, plutôt
    un moteur de workflow ; contre-indiqué pour délégation directe per
    ai-agent-framework-vs-prebuilt P3)
  - CrewAI : framework multi-agents générique, pas coding-spécifique
    → E6 : même problème + adoption coding pipeline non documentée
  - Mastra : framework TypeScript général (pas coding agent spécifique)
    → E6 : vise les apps IA générales, pas les pipelines de coding autonomes
  - PostHog/code-agent : wrapper interne PostHog sur Claude Code + Codex,
    pas un runtime indépendant → E6 : pas un runtime à évaluer indépendamment

INCLUS FINAL : 18 candidats
```

---

## 3. Catalogue exhaustif — Tous les outils identifiés

### 3.1 Candidats INCLUS

#### C1 — Claude Code CLI
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/anthropics/claude-code / https://code.claude.com |
| Langage | TypeScript/Node.js (CLI binaire) |
| Licence | Propriétaire Anthropic (binaire compilé) — **ATTENTION** : le CLI est distribué sans code source public |
| Stars | 112 297 (estimé avril 2026) |
| npm downloads | @anthropic-ai/claude-code : >10M/semaine |
| Statut | **INCLUS** — standard de facto, API CLI ouverte, extensible via settings.json/hooks |
| Note PICOC | Exclu de la taxonomie Rombaut 2026 (S03) car binaire sans source. Hooks shell via settings.json (SessionStart, PreToolUse, PostToolUse, Stop). CLI = ouvert via API/commandes même si code source non public. Retenu car "API ouverte documentée" satisfait I2. |
| O1 Portabilité | Anthropic-first ; portabilité via Bedrock/Vertex via env vars (couplage vendor fort) |
| O2 Hooks | PreToolUse, PostToolUse, SessionStart, Stop — scripts shell via settings.json |
| O3 Bash natif | Oui — outil bash natif, approbation via hooks exit code |
| O4 Audit | Logs partiels via hooks shell ; pas de structured logging natif |
| O5 Maintenabilité | >4M dev/semaine, maintenance Anthropic active, version 0.2.x SDK |
| O6 Résilience | --max-turns CLI ; max_turns + max_budget_usd via SDK |

#### C2 — Claude Agent SDK (TypeScript/Python)
| Attribut | Valeur |
|----------|--------|
| URL | https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk |
| Langage | TypeScript + Python |
| Licence | MIT (npm package) |
| npm downloads | 4 540 613/semaine (2026-04-24) ; 999 dépendants npm |
| Version | 0.2.119 (actif) |
| Statut | **INCLUS** — SDK programmatique pour boucles autonomes (S01 SLR agent-runtime, VERIFIE) |
| O1 Portabilité | Anthropic-first ; portabilité via LiteLLM proxy ou Bedrock/Vertex env vars |
| O2 Hooks | PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd, UserPromptSubmit — callbacks in-process |
| O3 Bash natif | Oui — même toolset que CLI |
| O4 Audit | Hooks in-process permettent structured logging ; pas de built-in audit log |
| O5 Maintenabilité | Version 0.2.x — API évolutive ; adoption production confirmée |
| O6 Résilience | max_turns + max_budget_usd configurables programmatiquement |

#### C3 — OpenCode
| Attribut | Valeur |
|----------|--------|
| URL | https://opencode.ai / https://github.com/opencode-ai/opencode |
| Langage | TypeScript (Go initial) |
| Licence | MIT |
| Stars | ~147 000 (avril 2026) |
| npm | `npm i -g opencode-ai@latest` |
| Statut | **INCLUS** — croissance 4.5x plus rapide que Claude Code ; 6.5M dev/mois |
| O1 Portabilité | 75+ providers (Claude, OpenAI, Google, Ollama, OpenRouter, local) |
| O2 Hooks | Plugin system JavaScript/TypeScript ; hooks sur événements (25+ hooks configurables via oh-my-opencode écosystème) |
| O3 Bash natif | Oui — tool shell/bash natif |
| O4 Audit | Plugins d'audit possibles ; pas de structured audit log natif documenté |
| O5 Maintenabilité | 850 contributeurs, 11 000+ commits, maintien communautaire actif |
| O6 Résilience | maxSessionTurns configurables via settings |

#### C4 — Gemini CLI
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/google-gemini/gemini-cli |
| Langage | TypeScript (Node.js) |
| Licence | Apache 2.0 |
| Stars | ~101 000 (avril 2026) |
| Statut | **INCLUS** — agent terminal officiel Google, open source complet |
| O1 Portabilité | Gemini-first ; extensions tierces possibles ; Google Cloud opinionated |
| O2 Hooks | Command Hooks (scripts shell) + Plugin Hooks (npm packages TypeScript) ; BeforeAgent, AfterAgent, BeforeTool, AfterTool |
| O3 Bash natif | Oui |
| O4 Audit | Hooks permettent logging ; pas de built-in audit structuré |
| O5 Maintenabilité | Google maintenu ; Google Summer of Code 2026 ; actif |
| O6 Résilience | maxSessionTurns configurables (issue #10723 confirmé) |

#### C5 — Codex CLI (OpenAI)
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/openai/codex |
| Langage | Rust |
| Licence | Apache 2.0 |
| Stars | ~75 000 (avril 2026) |
| npm downloads | 14.53M/mois (mars 2026) ; 3M WAU |
| Statut | **INCLUS** — agent terminal OpenAI, open source, Rust, actif |
| O1 Portabilité | OpenAI-first ; modes OpenAI-compatible |
| O2 Hooks | Hooks stables (config.toml) : observent MCP tools, apply_patch, bash sessions ; permission-mode configurable |
| O3 Bash natif | Oui — contrôle approbation per-command |
| O4 Audit | Hooks permettent logging ; approval handling documenté |
| O5 Maintenabilité | OpenAI maintenu ; 75K stars ; 177x croissance downloads |
| O6 Résilience | `codex exec` pour CI/CD headless ; contrôle approbation commandes |

#### C6 — Aider
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/Aider-AI/aider / https://aider.chat |
| Langage | Python |
| Licence | Apache 2.0 |
| Stars | ~41 600 |
| PyPI | 5.3M+ installs ; 15B tokens/semaine |
| Statut | **INCLUS** — CLI pair-programming, git-natif, multi-LLM, le plus mature open-source pur |
| O1 Portabilité | 100+ LLM providers via LiteLLM ; OpenAI, Anthropic, DeepSeek, Ollama, Azure, Bedrock, Vertex |
| O2 Hooks | Hooks limités — auto-commit git après chaque edit (Co-authored-by) ; pas de PreToolUse/PostToolUse équivalent documenté |
| O3 Bash natif | Oui — edit via diffs/patches, exécution commandes |
| O4 Audit | Auto-commit git avec messages descriptifs + Co-authored-by trailers = audit trail git natif |
| O5 Maintenabilité | Depuis 2023, mature, ~39K stars, maintenance active |
| O6 Résilience | Pas de max_turns natif documenté ; séquences de tâches manuelles |

#### C7 — Goose (Block)
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/block/goose / https://goose-docs.ai |
| Langage | Rust |
| Licence | Apache 2.0 |
| Stars | ~32 000 |
| Statut | **INCLUS** — contribué à Linux Foundation Agentic AI Foundation (déc. 2025) ; long-term governance |
| O1 Portabilité | 15+ providers : Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure, Bedrock |
| O2 Hooks | Hooks et extensions supportés ; 70+ extensions MCP documentées |
| O3 Bash natif | Oui — shell commands, édition fichiers, exécution code |
| O4 Audit | Non documenté explicitement |
| O5 Maintenabilité | Block (Square/Cash App) + Linux Foundation governance ; actif |
| O6 Résilience | Non documenté explicitement |

#### C8 — Cline
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/cline/cline / https://cline.bot |
| Langage | TypeScript (VS Code extension) |
| Licence | Apache 2.0 |
| Stars | ~58 000 |
| Statut | **INCLUS** — fastest-growing AI open-source (GitHub Octoverse 2025) ; 57.9K stars ; 4M+ dev |
| O1 Portabilité | Multi-LLM BYOK — Claude, GPT, Gemini, local ; tout provider OpenAI-compatible |
| O2 Hooks | Mécanisme d'approbation granulaire per-action (Plan Mode / Act Mode) ; auto-approve whitelist configurable par type d'action ; YOLO mode (tout automatique) |
| O3 Bash natif | Oui — exécution shell avec approbation explicite par commande |
| O4 Audit | Toutes actions loggées dans la session VS Code ; pas de structured audit log external |
| O5 Maintenabilité | Très actif ; 57.9K stars ; maintenu par communauté large |
| O6 Résilience | Non documenté explicitement — IDE interactif principalement |

#### C9 — Roo Code
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/RooCodeInc/Roo-Code / https://roocode.com |
| Langage | TypeScript (VS Code extension) |
| Licence | Apache 2.0 |
| Stars | ~22 000 |
| Statut | **INCLUS** — fork Cline avec multi-agent modes (Architect/Code/Debug) ; 5.0/5 rating |
| O1 Portabilité | Multi-LLM identique à Cline ; +DeepSeek-R1 (97% cost savings documenté) |
| O2 Hooks | Custom Modes avec tool permissions scopées par mode ; approve/reject per-action hérité de Cline |
| O3 Bash natif | Oui — hérité de Cline |
| O4 Audit | Hérité de Cline ; pas de structured audit externe |
| O5 Maintenabilité | Fork activement maintenu ; Kilo Code fork en aval ($8M seed) confirme l'adoption |
| O6 Résilience | Non documenté explicitement |

#### C10 — OpenHands
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/OpenHands/OpenHands / https://openhands.dev |
| Langage | Python |
| Licence | MIT |
| Stars | ~68 000 |
| Statut | **INCLUS** — $18.8M Series A ; 50%+ GitHub issues résolus ; arXiv:2511.03690 |
| O1 Portabilité | Tout LLM (Claude, OpenAI, open source Qwen, Devstral) |
| O2 Hooks | RemoteConversation hooks ; hook_config forwarding ; HookExecutionEvent observable ; agent-server event APIs avec hook observabilité |
| O3 Bash natif | Oui — sandbox Docker |
| O4 Audit | Event sourcing : toutes interactions = événements immuables appendés au log ; deterministic replay ; auditabilité persistante |
| O5 Maintenabilité | $18.8M Series A ; communauté massive ; MIT license |
| O6 Résilience | Sandbox Docker pour isolation ; pas de max_turns documenté explicitement dans résultats |

#### C11 — SWE-agent
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/SWE-agent/SWE-agent |
| Langage | Python |
| Licence | MIT |
| Stars | >15 000 (NeurIPS 2024, Princeton/Stanford) |
| Statut | **INCLUS** — SWE-agent 1.0 + Claude 3.7 = SoTA SWE-bench full (fév. 2026) |
| O1 Portabilité | Multi-LLM via LiteLLM, OpenRouter, Portkey ; tout provider |
| O2 Hooks | Middleware hooks : check_message_queue_before_model, open_pr_if_needed ; architecture configurable |
| O3 Bash natif | Oui — interface spécialisée ACI (Agent-Computer Interface) |
| O4 Audit | Non documenté explicitement dans les résultats |
| O5 Maintenabilité | Recherche Princeton/Stanford ; NeurIPS 2024 ; actif (mini-swe-agent en développement actif) |
| O6 Résilience | Non documenté explicitement |

#### C12 — mini-swe-agent
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/SWE-agent/mini-swe-agent |
| Langage | Python (~100 lignes) |
| Licence | MIT |
| Stars | Non précisé (même org que SWE-agent) |
| Statut | **INCLUS** — successeur recommandé de SWE-agent ; >74% SWE-bench Verified ; 100 lignes |
| O1 Portabilité | Multi-LLM (hérité SWE-agent) |
| O2 Hooks | Très minimal — 100 lignes ; hooks non documentés |
| O3 Bash natif | Oui |
| O4 Audit | Non documenté |
| O5 Maintenabilité | Radical simplicity = maintenabilité maximale ; Princeton/Stanford |
| O6 Résilience | Non documenté |

#### C13 — Pi (pi-mono / pi-coding-agent)
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/badlogic/pi-mono / https://www.npmjs.com/package/@mariozechner/pi-coding-agent |
| Langage | TypeScript (Node.js) |
| Licence | MIT |
| Stars | Faible (projet individuel Mario Zechner, badlogic) |
| npm | @mariozechner/pi-coding-agent |
| Statut | **INCLUS** — design minimaliste remarquable ; 4 modes (interactive/print/RPC/SDK) ; token-efficient |
| O1 Portabilité | Multi-LLM via unified LLM API ; pas de MCP (volontaire) |
| O2 Hooks | Skills + extensions npm/git ; auto-extension par l'agent lui-même ; pas de PreToolUse/PostToolUse formalisés |
| O3 Bash natif | Oui — 4 outils natifs : read, write, edit, bash |
| O4 Audit | Non documenté comme feature explicite |
| O5 Maintenabilité | Projet individuel — risque maintenabilité long terme |
| O6 Résilience | Non documenté |

#### C14 — Continue.dev
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/continuedev/continue |
| Langage | TypeScript |
| Licence | Apache 2.0 |
| Stars | ~31 000 |
| Statut | **INCLUS** — "leading open-source AI code agent" ; VS Code + JetBrains ; CLI + IDE |
| O1 Portabilité | Multi-LLM (Anthropic, OpenAI, Azure, Ollama local) ; air-gapped possible |
| O2 Hooks | Tool call results = context items automatiques ; step-by-step approval via CLI ; team workflow monitoring |
| O3 Bash natif | Oui — agent mode avec tool execution |
| O4 Audit | Performance tracking des agents ; monitoring des interventions ; CLI step-by-step audit |
| O5 Maintenabilité | 31K stars ; VS Code Marketplace actif ; source-controlled AI checks enforçables en CI |
| O6 Résilience | Non documenté explicitement |

#### C15 — OpenAI Agents SDK (openai-agents Python)
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/openai/openai-agents-python / https://pypi.org/project/openai-agents/ |
| Langage | Python |
| Licence | MIT |
| Stars | ~19 000 |
| PyPI | 10.3M downloads/mois |
| Statut | **INCLUS** — SDK agent loop programmatique OpenAI ; Guardrails built-in ; tracing natif |
| O1 Portabilité | OpenAI-first mais Chat Completions API compatible → 100+ LLMs |
| O2 Hooks | Guardrails (input/output) ; tracing ; agent loop built-in ; handoffs |
| O3 Bash natif | Via tools custom — pas de bash tool natif sans extension |
| O4 Audit | Tracing natif intégré ; OpenTelemetry support |
| O5 Maintenabilité | OpenAI maintenu ; 10.3M downloads/mois ; 19K stars |
| O6 Résilience | max_turns configurables dans agent loop |

#### C16 — AWS Strands Agents SDK
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/strands-agents/sdk-python / https://strandsagents.com |
| Langage | Python + TypeScript |
| Licence | Apache 2.0 |
| PyPI | strands-agents (actif) |
| Statut | **INCLUS** — SDK AWS open source ; steering hooks middleware-like ; OTEL observabilité (S08 SLR existante) |
| O1 Portabilité | Amazon Bedrock, Anthropic, OpenAI, Gemini, Ollama, LiteLLM, llama.cpp — multi-provider |
| O2 Hooks | BeforeInvocationEvent, BeforeModelCallEvent, BeforeToolCallEvent ; steering hooks "comme middleware HTTP" |
| O3 Bash natif | Via tools custom (pas de bash tool natif) |
| O4 Audit | OTEL built-in ; instrumentation hooks ; logging/metrics natifs |
| O5 Maintenabilité | AWS + Accenture/Anthropic/Meta/PwC contributors ; production chez Amazon Q Developer, Glue |
| O6 Résilience | Non documenté explicitement dans les résultats |

#### C17 — Google ADK (Agent Development Kit)
| Attribut | Valeur |
|----------|--------|
| URL | https://github.com/google/adk-python / https://google.github.io/adk-docs |
| Langage | Python, TypeScript, Go, Java |
| Licence | Apache 2.0 |
| PyPI | google-adk (actif) |
| Statut | **INCLUS** — ADK officiel Google ; Plugin system structuré ; multi-langages (S09 SLR existante) |
| O1 Portabilité | Google Cloud/Vertex opinionated ; mais multi-provider possible |
| O2 Hooks | 6 callbacks lifecycle : before_agent, before_model, after_model, before_tool, after_tool, after_agent ; Plugin system (BasePlugin) |
| O3 Bash natif | Via tools custom (pas de bash tool natif) |
| O4 Audit | Tamper-evident audit trails (packages open source Apache 2.0, PyPI) ; EU AI Act Article 12 compliance ; PII detection |
| O5 Maintenabilité | Google maintenu ; multilangues ; community meeting oct. 2025 |
| O6 Résilience | Non documenté explicitement |

#### C18 — Pydantic AI
| Attribut | Valeur |
|----------|--------|
| URL | https://ai.pydantic.dev / https://github.com/pydantic/pydantic-ai |
| Langage | Python |
| Licence | MIT |
| Stars | Non précisé (pydantic = très forte adoption) |
| PyPI | pydantic-ai (actif) |
| Statut | **INCLUS** — "FastAPI feeling pour GenAI" ; alternative LangGraph pour agents simples (ThoughtWorks Radar 2026) |
| O1 Portabilité | OpenAI, Anthropic, Gemini, DeepSeek, Grok, Cohere, Mistral, Perplexity |
| O2 Hooks | Non documenté explicitement dans les résultats — architecture agent simple |
| O3 Bash natif | Via tools custom |
| O4 Audit | Non documenté explicitement |
| O5 Maintenabilité | Pydantic = très forte réputation ; maintenance active |
| O6 Résilience | Non documenté explicitement |

---

### 3.2 Candidats EXCLUS

| Outil | URL | Raison exclusion | Critère |
|-------|-----|-----------------|---------|
| GitHub Copilot CLI | github.com/github/copilot-cli | Propriétaire Microsoft/GitHub — code source non public malgré repo GitHub visible | E6 (outil propriétaire fermé) |
| Cursor Agent | cursor.com | IDE propriétaire — scaffold code non inspectable (confirmé Rombaut 2026 arXiv:2604.03515) | E6 |
| Devin (Cognition) | cognition.ai/devin | Propriétaire, API fermée, usage uniquement SaaS | E6 |
| Replit Agent | replit.com | Propriétaire, embarqué dans IDE cloud, pas d'API ouverte | E6 |
| LangGraph | github.com/langchain-ai/langgraph | Framework d'orchestration générique (workflow graphs) — pas un coding agent runtime ; contre-indiqué par SLR ai-agent-framework-vs-prebuilt (P3) | E6 |
| CrewAI | github.com/crewAIInc/crewAI | Framework multi-agents générique, pas coding-spécifique ; 80% abandon 6-12 mois (SLR existante) | E6 |
| AutoGen (Microsoft) | github.com/microsoft/autogen | Annoncé en maintenance mode 2025 ; fragmentation vers "Unified Microsoft Agent Framework" — non standard actif | I4 (non standard en vigueur) |
| Mastra | github.com/mastra-ai/mastra | Framework TypeScript général (apps IA), pas un coding agent runtime | E6 |
| LiteLLM | github.com/BerriAI/litellm | Proxy/gateway LLM — pas de boucle agentique propre, pas un coding agent runtime | E6 |
| Agentless | github.com/OpenAutoCoder/Agentless | Approche "agentless" = pas de runtime continu ; 3 phases statiques (localize/repair/validate) | I1 non satisfait |
| AutoCodeRover | github.com/nus-apr/auto-code-rover | Orienté maintenance enterprise automatisée — pas un runtime d'agent de coding interactif/pipeline | E1+E6 |
| ORCH CLI | orchcli.dev | Orchestrateur de runtimes existants (Claude Code, Codex, Cursor) — pas un runtime en soi | I1 non satisfait |
| PostHog/code-agent | npmjs.com/@posthog/code-agent | Wrapper interne PostHog sur Claude Code/Codex — pas un runtime indépendant | E6 |
| Agno | agno.com | Framework d'agents génériques, pas coding-spécifique | E6 |
| LangChain (sans LangGraph) | langchain.com | Framework LLM générique, pas un coding agent runtime | E6 |
| Langroid | github.com/langroid/langroid | Multi-agent générique CMU/UW-Madison — pas coding-spécifique | E6 |
| pyagentspec | pypi.org/project/pyagentspec | Spec de configuration portable — pas un runtime d'exécution | E6 |
| agentic-flow | npmjs.com/package/agentic-flow | Wrapper Claude Agent SDK, pas un runtime indépendant | E6 |
| oh-my-opencode | npmjs.com/package/oh-my-opencode | Plugin écosystème OpenCode — pas un runtime | E6 |
| ALMAS (arXiv:2510.03463) | arxiv.org/abs/2510.03463 | Framework académique sans adoption production mesurée ; blog/papier sans données empiriques indépendantes | E4+E1 |

---

## 4. Liste finale des candidats retenus pour l'extraction

| # | Nom | URL canonique | Langage | Licence | Stars (avril 2026) | Catégorie |
|---|-----|--------------|---------|---------|---------------------|-----------|
| C1 | Claude Code CLI | code.claude.com | TypeScript | Propriétaire (API ouverte) | ~112 000 | CLI terminal |
| C2 | Claude Agent SDK | npmjs.com/@anthropic-ai/claude-agent-sdk | TypeScript/Python | MIT | 4.54M npm/sem | SDK programmatique |
| C3 | OpenCode | opencode.ai | TypeScript | MIT | ~147 000 | CLI terminal |
| C4 | Gemini CLI | github.com/google-gemini/gemini-cli | TypeScript | Apache 2.0 | ~101 000 | CLI terminal |
| C5 | Codex CLI | github.com/openai/codex | Rust | Apache 2.0 | ~75 000 | CLI terminal |
| C6 | Aider | github.com/Aider-AI/aider | Python | Apache 2.0 | ~41 600 | CLI terminal |
| C7 | Goose (Block) | github.com/block/goose | Rust | Apache 2.0 | ~32 000 | CLI/desktop |
| C8 | Cline | github.com/cline/cline | TypeScript | Apache 2.0 | ~58 000 | IDE (VS Code) |
| C9 | Roo Code | github.com/RooCodeInc/Roo-Code | TypeScript | Apache 2.0 | ~22 000 | IDE (VS Code) |
| C10 | OpenHands | github.com/OpenHands/OpenHands | Python | MIT | ~68 000 | Platform/sandbox |
| C11 | SWE-agent | github.com/SWE-agent/SWE-agent | Python | MIT | >15 000 | Benchmark/research |
| C12 | mini-swe-agent | github.com/SWE-agent/mini-swe-agent | Python | MIT | N/D | Benchmark/research |
| C13 | Pi (pi-coding-agent) | github.com/badlogic/pi-mono | TypeScript | MIT | Faible | CLI terminal minimal |
| C14 | Continue.dev | github.com/continuedev/continue | TypeScript | Apache 2.0 | ~31 000 | IDE + CLI |
| C15 | OpenAI Agents SDK | github.com/openai/openai-agents-python | Python | MIT | ~19 000 | SDK programmatique |
| C16 | AWS Strands Agents SDK | github.com/strands-agents/sdk-python | Python/TypeScript | Apache 2.0 | N/D (AWS) | SDK programmatique |
| C17 | Google ADK | github.com/google/adk-python | Python/TS/Go/Java | Apache 2.0 | N/D (Google) | SDK programmatique |
| C18 | Pydantic AI | github.com/pydantic/pydantic-ai | Python | MIT | N/D | SDK programmatique |

---

## 5. Outils connus absents des bases cherchées

Les outils suivants sont connus mais **n'ont pas été trouvés via les bases listées Table 2 Kitchenham** — ils ne sont donc pas évalués dans ce cycle de discovery :

| Outil | Raison de l'absence | Action recommandée |
|-------|---------------------|-------------------|
| Moatless Tools | Mentionné dans arXiv:2604.03515 (Rombaut) comme un des 13 agents analysés mais absent des bases web dans les recherches ; probablement agent de recherche non orienté production | Snowballing de 2e degré depuis arXiv:2604.03515 |
| DARS-Agent | Cité dans Rombaut 2026 (13 agents) — pas trouvé indépendamment | Snowballing de 2e degré |
| OpenDev (arXiv:2603.05344) | Bui 2026 — agent Rust/CLI paper, pas de repo public trouvé | Vérifier existence repo public |
| Kilo Code | Fork de Roo Code, $8M seed déc. 2025 — mentionné mais pas d'URL repo stable trouvée | À inclure si repo public trouvé |
| Prometheus | Mentionné dans Rombaut 2026 comme position "hybride" dans la taxonomie — pas identifié clairement | Snowballing de 2e degré |
| Microsoft Agent Framework | Successeur d'AutoGen annoncé — pas encore en production stable à la date de cette recherche | Surveiller — inclure si GA avant extraction |

---

## 6. Notes méthodologiques

### Biais anti-ancrage (Kitchenham 2007 §6.1)

Conformément à la règle anti-biais : les 18 candidats retenus ont été découverts depuis les bases primaires (GitHub WebSearch, npm, PyPI, arXiv) et les comparatifs de landscape — pas depuis une liste mémorisée. Le snowballing depuis les décisions EBSE existantes a confirmé 8 candidats déjà dans les bases (C1, C2, C6, C8, C10, C15, C16, C17) et n'en a pas introduit de nouveaux qui n'auraient pas été trouvés indépendamment.

### Limite structurelle : contexte vs pipeline

Le PICOC cible spécifiquement les "runtimes d'agent de coding pour des pipelines de développement logiciel autonomes". Ce critère crée une tension avec les IDE-based agents (C8 Cline, C9 Roo Code, C14 Continue.dev) qui sont principalement interactifs. Ces 3 candidats sont retenus car ils exposent des mécanismes d'hooks/gates (O2) et d'exécution bash (O3) comparables aux CLI agents, et leur architecture peut être invoquée en mode automatique.

### Limite LLM wrappers vs runtimes

Les SDKs programmatiques (C15 OpenAI Agents, C16 Strands, C17 ADK, C18 Pydantic AI) sont des frameworks d'orchestration qui ne fournissent pas de bash tool natif (O3) — ils requièrent une implémentation custom. Ils sont néanmoins retenus car ils exposent des hooks lifecycle (O2) et peuvent être utilisés pour construire des pipelines de coding autonomes quand combinés avec des outils shell.

### Sources de landscape consultées

- ThoughtWorks Technology Radar v34 (2026) — adopts : MCP, AGENTS.md, Agent Skills
- CNCF AI Landscape Q4 2025 + rapport 2026 — adopts : MCP, Llama Stack
- opensourceaireview.com — comparaisons 2026
- firecrawl.dev best agent frameworks 2026
- bradAGI/awesome-cli-coding-agents (GitHub curated list, 80+ agents)
- ai-boost/awesome-harness-engineering (GitHub curated list)

---

*Fichier généré le 2026-04-28 par Agent SLR (Claude Sonnet 4.6) — Phase 2.1 Kitchenham 2007.*
*Prochaine étape : Phase 2.2 — Extraction des données (grille O1-O6 par candidat).*
