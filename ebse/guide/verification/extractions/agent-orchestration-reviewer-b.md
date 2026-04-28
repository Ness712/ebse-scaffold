# Extraction Reviewer B — agent-orchestration-open-source

**Date** : 2026-04-28
**Reviewer** : B (isolé)
**Protocole** : Kitchenham 2007 §6.4
**Modele** : Claude Sonnet 4.6

---

## Screening secondaire

| Candidat | Décision | Raison |
|----------|----------|--------|
| C1 Claude Code CLI | INCLUS | CLI terminal autonome avec hooks shell documentés, boucle agentique native |
| C2 Claude Agent SDK | INCLUS | SDK programmatique pour boucles autonomes, usage production confirmé |
| C3 OpenCode | INCLUS | CLI terminal autonome, plugin system JavaScript/TypeScript, 75+ providers |
| C4 Gemini CLI | INCLUS | Agent terminal officiel Google, open source complet, hooks documentés |
| C5 Codex CLI | INCLUS | Agent terminal OpenAI en Rust, hooks config.toml documentés, open source |
| C6 Aider | INCLUS | CLI pair-programming headless scriptable, multi-LLM, 100+ providers |
| C7 Goose (Block) | INCLUS | CLI/desktop autonome, multi-LLM, extensible, Linux Foundation governance |
| C8 Cline | INCLUS | CLI 2.0 (fev. 2026) : headless mode explicitement documenté, CI/CD sans IDE |
| C9 Roo Code | EXCLU | Shutdown annoncé le 15 mai 2026 (annonce officielle 21 avril 2026) — outil abandonné, non standard actif au sens Kitchenham. Critère I4 (maintenance active) non satisfait. |
| C10 OpenHands | INCLUS | Plateforme sandbox complète, event sourcing, $18.8M Series A, production |
| C11 SWE-agent | INCLUS | Agent de recherche NeurIPS 2024, trajectoires JSON structurées, production-ready |
| C12 mini-swe-agent | INCLUS | Successeur recommandé SWE-agent, step_limit + cost_limit documentés |
| C13 Pi (pi-coding-agent) | INCLUS | Design minimaliste remarquable, 4 modes dont SDK, retenu malgré adoption faible |
| C14 Continue.dev | INCLUS | CLI headless documenté (cn --headless), pivot 2025 vers "Continuous AI" |
| C15 OpenAI Agents SDK | INCLUS | SDK programmatique, ShellTool natif (avril 2026), max_turns documenté |
| C16 AWS Strands Agents SDK | INCLUS | SDK AWS multi-provider, hooks middleware, OTEL natif |
| C17 Google ADK | INCLUS | ADK officiel Google, 6 callbacks lifecycle, max_iterations documenté |
| C18 Pydantic AI | INCLUS | SDK Python, hooks lifecycle documentés (before_tool_execute), UsageLimits natif |

**Note C9 Roo Code** : La décision d'exclusion est prise sur la base du critère I4 (outil en standard d'utilisation active). L'annonce de shutdown au 15 mai 2026, confirmée par la documentation officielle (docs.roocode.com/sunset), disqualifie Roo Code pour une recommandation de déploiement. Un candidat exclu au screening secondaire n'est pas évalué sur O1-O6 mais figure en tableau final comme "Non recommandé (exclusion I4)".

---

## Extraction complète

### C1 — Claude Code CLI

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | https://code.claude.com/docs / CLAUDE.md OLS | Anthropic-first nativement. Portabilité via Bedrock/Vertex via variables d'environnement (ANTHROPIC_API_URL). Pas de multi-provider zero-config. Niveau 3. |
| O2 Hooks/gates | OUI | https://code.claude.com/docs/en/agent-sdk/hooks (Niv. 3) | "PreToolUse, PostToolUse, SessionStart, Stop — scripts shell configurés via settings.json. Exit code 2 = blocage avec feedback stderr." |
| O3 Exécution bash native | OUI | Documentation officielle Claude Code (Niv. 3) | Outil Bash natif. Approbation per-command via hooks PreToolUse (exit code contrôle allow/block). Deny list configurable dans settings.json. |
| O4 Audit trail | PARTIEL | settings.json hooks, CLAUDE.md OLS | Logging structuré possible via scripts shell dans hooks (PostToolUse → append log). Pas de built-in structured audit log. L'audit trail repose entièrement sur les hooks shell custom. Niveau 3. |
| O5 Maintenabilité | OUI | npm @anthropic-ai/claude-code >10M/semaine (Niv. 3-5) | >112K stars GitHub estimés. Maintenance Anthropic active. Version 0.2.x SDK. Standard de facto industrie. Licence propriétaire (binaire compilé) : risque de vendor lock-in. |
| O6 Résilience boucle | OUI | https://code.claude.com/docs/en/agent-sdk/agent-loop (Niv. 3) | --max-turns CLI ; max_turns + max_budget_usd configurables via SDK. Terminaison garantie documentée. |

**Tier** : 1
**Justification tier** : O1 (PARTIEL mais satisfait via Bedrock/Vertex) + O2 (OUI, PreToolUse/PostToolUse natifs) + O3 (OUI, bash natif + approbation per-command). Les 3 critères fondamentaux sont satisfaits. Réserve : couplage Anthropic fort (O1 PARTIEL) et licence propriétaire (pas de code source inspectable).

---

### C2 — Claude Agent SDK (TypeScript/Python)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | npmjs.com/@anthropic-ai/claude-agent-sdk (Niv. 3) | Anthropic-first. Portabilité via LiteLLM proxy ou Bedrock/Vertex env vars. Pas de multi-provider natif zero-config. |
| O2 Hooks/gates | OUI | https://code.claude.com/docs/en/agent-sdk/hooks (Niv. 3) | "PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd, UserPromptSubmit — callbacks in-process programmatiques." Configurables par code, pas uniquement par scripts shell. |
| O3 Exécution bash native | OUI | Documentation SDK Claude (Niv. 3) | Même toolset que CLI. Outil Bash natif disponible. Approbation via hooks in-process. |
| O4 Audit trail | PARTIEL | Documentation SDK (Niv. 3) | Hooks in-process permettent structured logging custom. Pas de built-in audit log. Meilleur que CLI car hooks en TypeScript/Python avec accès complet au contexte d'exécution. |
| O5 Maintenabilité | OUI | npm 4.54M downloads/semaine, 999 dépendants (Niv. 3) | Version 0.2.119 active. Licence MIT. Adoption production massive confirmée. Maintenance Anthropic. |
| O6 Résilience boucle | OUI | https://code.claude.com/docs/en/agent-sdk/agent-loop (Niv. 3) | max_turns + max_budget_usd configurables programmatiquement. MaxTurnsExceeded exception levée. |

**Tier** : 1
**Justification tier** : O1 (PARTIEL via env vars) + O2 (OUI, hooks in-process complets) + O3 (OUI, bash natif). Tier 1 confirmé. Avantage sur C1 : hooks programmatiques in-process (TypeScript/Python) plus puissants que scripts shell externes.

---

### C3 — OpenCode

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | https://opencode.ai/docs/providers (Niv. 3) | "75+ providers supportés : Claude, OpenAI, Google, Ollama, OpenRouter, local models." Multi-provider natif zero-config. |
| O2 Hooks/gates | OUI | https://opencode.ai/docs/plugins/ (Niv. 3) | "Plugin system JavaScript/TypeScript avec hooks tool.execute.before (PreToolUse) et tool.execute.after (PostToolUse). Les hooks peuvent bloquer des opérations." Confirmation GitHub issue #12472 : hooks Claude Code non nativement compatibles mais plugin system équivalent documenté. |
| O3 Exécution bash native | OUI | Docs OpenCode (Niv. 3) | Shell/bash tool natif. Plugins peuvent intercepter avant exécution. |
| O4 Audit trail | PARTIEL | opencode.ai/docs (Niv. 3) | Plugins d'audit possibles via tool.execute.after. Pas de structured audit log built-in documenté dans les sources officielles. |
| O5 Maintenabilité | OUI | GitHub ~147K stars (estimé), 850 contributeurs (Niv. 5) | 11 000+ commits. 6.5M dev/mois. Licence MIT. Croissance 4.5x plus rapide que Claude Code. Communauté très active. |
| O6 Résilience boucle | OUI | Docs OpenCode settings (Niv. 3) | maxSessionTurns configurables via settings. Terminaison garantie documentée. |

**Tier** : 1
**Justification tier** : O1 (OUI, 75+ providers natifs) + O2 (OUI, plugin hooks documentés) + O3 (OUI, bash natif). Meilleur candidat sur O1 parmi les CLI tools.

---

### C4 — Gemini CLI

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | github.com/google-gemini/gemini-cli (Niv. 3) | Gemini-first. Extensions tierces possibles. Google Cloud opinionated. Pas de multi-provider natif aussi large que OpenCode. |
| O2 Hooks/gates | OUI | Docs Gemini CLI officielle (Niv. 3) | "Command Hooks (scripts shell) + Plugin Hooks (npm packages TypeScript) ; BeforeAgent, AfterAgent, BeforeTool, AfterTool documentés." |
| O3 Exécution bash native | OUI | Docs Gemini CLI (Niv. 3) | Shell execution native. Hooks BeforeTool permettent interception per-command. |
| O4 Audit trail | PARTIEL | Docs Gemini CLI (Niv. 3) | Hooks permettent logging custom. Pas de built-in structured audit log natif documenté dans sources officielles. |
| O5 Maintenabilité | OUI | GitHub ~101K stars, Google maintenu, Google Summer of Code 2026 (Niv. 3-5) | Open source Apache 2.0. Maintenance Google. Actif. |
| O6 Résilience boucle | OUI | GitHub issue #10723 confirmé (Niv. 3) | maxSessionTurns configurables documentés. |

**Tier** : 1
**Justification tier** : O1 (PARTIEL, couplage Google mais satisfait via extensions) + O2 (OUI, hooks BeforeTool/AfterTool natifs) + O3 (OUI, bash natif). Tier 1 satisfait avec réserve O1.

---

### C5 — Codex CLI (OpenAI)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | github.com/openai/codex (Niv. 3) | OpenAI-first. Modes OpenAI-compatible API permettent d'autres providers. Pas de multi-provider natif aussi large que OpenCode. |
| O2 Hooks/gates | OUI | https://developers.openai.com/codex/hooks (Niv. 3) | "Lifecycle hooks dans config.toml : PreToolUse, PostToolUse, PermissionRequest, SessionStart, UserPromptSubmit, Stop. PreToolUse peut intercepter Bash, apply_patch, MCP tool calls." Per-command approval documenté. |
| O3 Exécution bash native | OUI | developers.openai.com/codex/config-reference (Niv. 3) | Bash tool natif. "PreToolUse peut intercepter Bash" — contrôle approbation per-command confirmé. `codex exec` pour CI/CD headless. |
| O4 Audit trail | PARTIEL | developers.openai.com/codex/hooks (Niv. 3) | PostToolUse hooks permettent logging. Pas de built-in structured audit log natif. Approval handling documenté comme mécanisme d'approbation. |
| O5 Maintenabilité | OUI | ~75K stars, 14.53M downloads/mois (Niv. 3-5) | OpenAI maintenu. Apache 2.0. 3M WAU. Croissance 177x documentée. |
| O6 Résilience boucle | OUI | developers.openai.com/codex/cli/reference (Niv. 3) | `codex exec` pour exécution headless contrôlée. Permission-mode configurable (auto/ask/full). Terminaison via timeout et contrôle d'approbation. |

**Tier** : 1
**Justification tier** : O1 (PARTIEL mais satisfait via API-compatible) + O2 (OUI, hooks config.toml les plus complets parmi tous les candidats) + O3 (OUI, bash natif + approbation per-command). Tier 1. Codex CLI présente la documentation de hooks la plus exhaustive de la liste.

---

### C6 — Aider

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | https://aider.chat/docs/llms.html (Niv. 3) | "100+ LLM providers via LiteLLM : OpenAI, Anthropic, DeepSeek, Ollama, Azure, Bedrock, Vertex." Multi-provider natif le plus complet. |
| O2 Hooks/gates | PARTIEL | aider.chat/docs/config/options.html (Niv. 3) | Auto-commit git natif avec Co-authored-by trailers = audit trail git. Pas de PreToolUse/PostToolUse formalisés per-tool. --message/-m : mode headless one-shot. Scriptable mais sans hooks callbacks before/after tool execution. |
| O3 Exécution bash native | OUI | aider.chat/docs/scripting.html (Niv. 3) | Edition via diffs/patches, exécution commandes. --yes pour mode headless sans confirmation. Scriptable en CI via --message et --no-auto-commits. |
| O4 Audit trail | OUI | github.com/Aider-AI/aider (Niv. 3) | "Auto-commit git après chaque edit avec messages descriptifs + Co-authored-by trailers = audit trail git natif." Audit trail structuré via git log — format différent mais complet et auditable. |
| O5 Maintenabilité | OUI | ~41.6K stars, 5.3M+ installs PyPI, 15B tokens/semaine (Niv. 3-5) | Depuis 2023. Plus mature des outils open-source purs. Apache 2.0. Maintenance active. |
| O6 Résilience boucle | NON | aider.chat/docs/config/options.html (Niv. 3) | Pas de max_turns natif documenté dans sources officielles. Séquences de tâches via --message one-shot mais pas de boucle multi-tours contrôlée par limit. |

**Tier** : 2
**Justification tier** : O1 (OUI, 100+ providers) + O2 (PARTIEL, pas de hooks callbacks per-tool) + O3 (OUI). Seulement 2 des 3 critères fondamentaux satisfaits. Lacune documentée sur O2 : absence de callbacks PreToolUse/PostToolUse. Aider est le meilleur sur O1 et O4 (audit trail git natif) mais ne passe pas Tier 1 sur O2.

---

### C7 — Goose (Block)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | goose-docs.ai (Niv. 3) | "15+ providers : Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure, Bedrock." Multi-provider natif. |
| O2 Hooks/gates | PARTIEL | goose-docs.ai, Effloow review 2026 (Niv. 3-5) | "Extensions et hooks supportés ; 70+ extensions MCP documentées." Documentation telemetry/observability via extensions CloudWatch. Pas de PreToolUse/PostToolUse callbacks formalisés dans sources officielles. Extensions MCP = mécanisme indirect. |
| O3 Exécution bash native | OUI | goose-docs.ai (Niv. 3) | "Shell commands, édition fichiers, exécution code" documentés. Contrôle approbation via configuration autonomie. |
| O4 Audit trail | PARTIEL | goose-docs.ai/docs/guides/smart-context-management (Niv. 3) | "Telemetry & Observability" section documentée. Sessions persistantes SQLite (sessions.db) avec historique conversation et token usage. Pas de structured audit log tamper-evident natif. |
| O5 Maintenabilité | OUI | ~32K stars, Linux Foundation AAIF (déc. 2025) (Niv. 3-5) | Block (Square/Cash App). Apache 2.0. Linux Foundation Agentic AI Foundation = governance long-terme. Actif. |
| O6 Résilience boucle | OUI | block.github.io/goose/docs/guides/smart-context-management (Niv. 3) | "Max Turns limit : maximum nombre de turns consécutifs sans user input (défaut : 1000). GOOSE_MAX_TURNS env var. --max-turns CLI override per-session." Terminaison garantie avec prompt utilisateur. |

**Tier** : 2
**Justification tier** : O1 (OUI) + O2 (PARTIEL, hooks MCP indirects, pas de PreToolUse/PostToolUse formalisés) + O3 (OUI). 2 des 3 critères fondamentaux pleinement satisfaits. Lacune O2 documentée : mécanisme hooks via extensions MCP mais pas de callbacks programmables before/after par outil.

---

### C8 — Cline

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | docs.cline.bot (Niv. 3) | "Multi-LLM BYOK — Claude, GPT, Gemini, local ; tout provider OpenAI-compatible." |
| O2 Hooks/gates | OUI | docs.cline.bot/cline-cli/three-core-flows (Niv. 3) | "Plan Mode / Act Mode avec approbation granulaire per-action. Auto-approve whitelist configurable par type d'action. YOLO mode (-y/--yolo) = tout automatique." En mode headless : --json pour output machine-readable. |
| O3 Exécution bash native | OUI | devops.com/cline-cli-2-0 (Niv. 3-5) | "Exécution shell avec approbation explicite par commande (CLI 2.0, fev. 2026). -y flag = autonomous. --json = CI/CD structured output." Headless mode documenté officiellement. |
| O4 Audit trail | PARTIEL | docs.cline.bot (Niv. 3) | "Toutes actions loggées dans la session." --json flag pour output JSON structuré en CI. Pas de built-in external structured audit log persistant. |
| O5 Maintenabilité | OUI | ~58K stars, GitHub Octoverse 2025 fastest-growing, 4M+ dev (Niv. 3-5) | Apache 2.0. Communauté très active. CLI 2.0 = engagement plateforme cross-IDE. Roo Code l'a recommandé à ses utilisateurs lors du shutdown. |
| O6 Résilience boucle | PARTIEL | docs.cline.bot/cline-cli (Niv. 3) | Headless mode documenté (--yolo + --json). Pas de max_turns/max_iterations documenté explicitement dans sources officielles pour limiter la boucle. |

**Tier** : 1
**Justification tier** : O1 (OUI) + O2 (OUI, Plan/Act Mode + approbation per-action) + O3 (OUI, bash natif + headless CLI 2.0). Tier 1 confirmé. Réserve : O6 PARTIEL (pas de max_turns documenté). Historiquement IDE-only, mais CLI 2.0 (fev. 2026) satisfait pleinement O3 en mode headless.

---

### C9 — Roo Code

**EXCLU** au screening secondaire (critère I4 — outil non en maintenance active au sens Kitchenham). Shutdown annoncé le 21 avril 2026, effectif 15 mai 2026. Source officielle : docs.roocode.com/sunset. Pas d'évaluation O1-O6.

---

### C10 — OpenHands

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | openhands.dev, github.com/OpenHands/OpenHands (Niv. 3) | "Tout LLM : Claude, OpenAI, Qwen, Devstral open source." Multi-provider natif. |
| O2 Hooks/gates | OUI | github.com/OpenHands/OpenHands docs (Niv. 3) | "RemoteConversation hooks ; HookExecutionEvent observable ; agent-server event APIs ; hook_config forwarding." Architecture événementielle complète. |
| O3 Exécution bash native | OUI | openhands.dev docs (Niv. 3) | "Sandbox Docker pour isolation." Exécution bash native dans sandbox isolé. Séparation complète du host. |
| O4 Audit trail | OUI | github.com/OpenHands/OpenHands (Niv. 3) | "Event sourcing : toutes interactions = événements immuables appendés au log ; deterministic replay ; auditabilité persistante." Audit trail structuré natif le plus complet parmi tous les candidats. |
| O5 Maintenabilité | OUI | $18.8M Series A, ~68K stars, MIT (Niv. 3-5) | Communauté massive. MIT license. v1.6.0 mars 2026 (Kubernetes, Planning Mode beta). Actif. |
| O6 Résilience boucle | OUI | github.com/OpenHands/OpenHands/pull/2296, issues #2121 (Niv. 3) | "GLOBAL_MAX_ITERATIONS configuration : MAX_ITERATIONS limite le nombre de turns/steps. StuckDetector pour loop detection." Note : implémentation signalée comme incomplète dans certains cas (issue #6857) mais mécanisme documenté. |

**Tier** : 1
**Justification tier** : O1 (OUI) + O2 (OUI, hooks événementiels complets) + O3 (OUI, sandbox Docker). Tier 1. Meilleur candidat sur O4 (event sourcing natif). Réserve O6 : implémentation max_iterations imparfaite rapportée mais mécanisme documenté.

---

### C11 — SWE-agent

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | swe-agent.com (Niv. 3) | "Multi-LLM via LiteLLM, OpenRouter, Portkey ; tout provider." |
| O2 Hooks/gates | PARTIEL | swe-agent.com docs, github.com/SWE-agent/SWE-agent (Niv. 3) | "Middleware hooks : check_message_queue_before_model, open_pr_if_needed ; architecture configurable." Hooks présents mais pas aussi formalisés que PreToolUse/PostToolUse des CLI tools. Configurables par YAML. |
| O3 Exécution bash native | OUI | swe-agent.com docs (Niv. 3) | "Interface ACI (Agent-Computer Interface) spécialisée." Bash execution native via ACI. |
| O4 Audit trail | OUI | https://swe-agent.com/latest/usage/trajectories/ (Niv. 3) | "Fichier .traj (JSON) : (thought, action, observation) turns. config.yaml généré. Inspector via `sweagent inspector`. Format v1.1.0 mis à jour." Audit trail structuré JSON natif et complet. |
| O5 Maintenabilité | OUI | >15K stars, NeurIPS 2024, Princeton/Stanford (Niv. 1-3) | Recherche académique de haut niveau. MIT. SoTA SWE-bench (fev. 2026). Actif. |
| O6 Résilience boucle | OUI | github.com/SWE-agent/SWE-agent/issues/1262 (Niv. 3) | "step_limit dans AgentConfig : contrôle maximum steps. cost_limit en complément." Config YAML. Terminaison garantie documentée. |

**Tier** : 1
**Justification tier** : O1 (OUI) + O2 (PARTIEL mais satisfait via middleware hooks configurables) + O3 (OUI, ACI bash natif). Tier 1 avec réserve sur O2 (hooks moins formalisés que les CLI tools). Excellent sur O4 (trajectoires JSON standardisées).

---

### C12 — mini-swe-agent

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | mini-swe-agent.com (Niv. 3) | Multi-LLM hérité de SWE-agent. LiteLLM backend. |
| O2 Hooks/gates | NON | mini-swe-agent.com/latest/, github.com/SWE-agent/mini-swe-agent (Niv. 3) | "~100 lignes de code." Pas de hooks callbacks before/after tool execution documentés dans sources officielles. Architecture radicalement minimale = pas de place pour hooks formalisés. |
| O3 Exécution bash native | OUI | mini-swe-agent.com docs (Niv. 3) | Bash execution native (hérité SWE-agent). |
| O4 Audit trail | PARTIEL | mini-swe-agent.com/latest/usage/ (Niv. 3) | Trajectoires JSON possibles (héritage SWE-agent). Pas de documentation explicite d'audit trail built-in pour mini-swe-agent spécifiquement. |
| O5 Maintenabilité | OUI | github.com/SWE-agent/mini-swe-agent (Niv. 3-4) | "Radical simplicity = maintenabilité maximale." 100 lignes. >74% SWE-bench Verified. Princeton/Stanford. MIT. Actif. |
| O6 Résilience boucle | OUI | mini-swe-agent.com/latest/usage/mini/, swebench.yaml (Niv. 3) | "step_limit : Maximum number of steps the agent can take. cost_limit : Stop after this cost is exceeded." Configurables via YAML. |

**Tier** : 2
**Justification tier** : O1 (OUI) + O2 (NON, pas de hooks documentés) + O3 (OUI). 2 des 3 critères fondamentaux satisfaits. Lacune O2 documentée : design intentionnellement minimal excluant les hooks de gate. Non recommandé pour pipelines nécessitant des gates de sécurité.

---

### C13 — Pi (pi-coding-agent)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | npmjs.com/@mariozechner/pi-coding-agent (Niv. 3) | "Multi-LLM via unified LLM API." Multi-provider documenté. |
| O2 Hooks/gates | NON | github.com/badlogic/pi-mono (Niv. 3) | "Skills + extensions npm/git ; auto-extension par l'agent lui-même." Pas de PreToolUse/PostToolUse formalisés documentés. Pas de hooks before/after tool execution dans sources officielles. |
| O3 Exécution bash native | OUI | github.com/badlogic/pi-mono (Niv. 3) | "4 outils natifs : read, write, edit, bash." Bash natif confirmé. |
| O4 Audit trail | NON | github.com/badlogic/pi-mono (Niv. 3) | Non documenté comme feature explicite dans sources officielles. Projet individuel minimaliste. |
| O5 Maintenabilité | NON | npm @mariozechner/pi-coding-agent (Niv. 3-5) | Projet individuel (Mario Zechner). Stars faibles. Risque maintenabilité long terme élevé. |
| O6 Résilience boucle | NON | github.com/badlogic/pi-mono (Niv. 3) | Non documenté dans sources officielles. |

**Tier** : Non recommandé
**Justification tier** : O1 (OUI) + O2 (NON) + O3 (OUI). 2 des 3 critères fondamentaux satisfaits, mais O2 non satisfait. Classé "Non recommandé" en raison de : O2 NON + O4 NON + O5 NON (projet individuel sans gouvernance) + O6 NON. Design remarquable mais inadapté aux pipelines autonomes nécessitant des gates de sécurité et un audit trail.

---

### C14 — Continue.dev

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | docs.continue.dev (Niv. 3) | "Multi-LLM : Anthropic, OpenAI, Azure, Ollama local. Air-gapped possible." |
| O2 Hooks/gates | PARTIEL | blog.continue.dev/building-async-agents-with-continue-cli (Niv. 3) | "Step-by-step approval via CLI ; source-controlled AI checks enforçables en CI." Mécanisme d'approbation documenté mais pas de PreToolUse/PostToolUse callbacks programmables formalisés. |
| O3 Exécution bash native | OUI | docs.continue.dev/guides/cli (Niv. 3) | "CLI headless mode (cn --headless). Agent mode : lit/écrit fichiers, exécute terminal commands, search codebase." Headless mode explicitement documenté. |
| O4 Audit trail | PARTIEL | docs.continue.dev (Niv. 3) | "Performance tracking agents ; monitoring interventions ; CLI step-by-step audit." Audit partiel, pas de structured audit log tamper-evident natif. |
| O5 Maintenabilité | OUI | ~31K stars, npm @continuedev/cli actif, GitHub (Niv. 3-5) | Apache 2.0. VS Code Marketplace actif. Pivot "Continuous AI" 2025. CI enforcement documenté. |
| O6 Résilience boucle | NON | docs.continue.dev (Niv. 3) | Pas de max_turns/max_iterations documenté dans sources officielles. Architecture async mais pas de circuit-breaker explicite. |

**Tier** : 2
**Justification tier** : O1 (OUI) + O2 (PARTIEL, pas de callbacks hooks formalisés) + O3 (OUI, headless CLI documenté). 2 des 3 critères fondamentaux pleinement satisfaits. Lacune O2 documentée (approbation step-by-step mais pas de PreToolUse/PostToolUse programmables) + O6 NON.

---

### C15 — OpenAI Agents SDK

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | openai.github.io/openai-agents-python (Niv. 3) | "OpenAI-first mais Chat Completions API compatible → 100+ LLMs via LiteLLM." Portabilité via API-compatible mais pas native. |
| O2 Hooks/gates | OUI | openai.github.io/openai-agents-python/running_agents (Niv. 3) | "Guardrails (input/output) ; tracing natif ; agent loop built-in ; handoffs." Hooks lifecycle documentés. Guardrails = mécanisme de gate natif. |
| O3 Exécution bash native | OUI | developers.openai.com/api/docs/guides/tools-shell (Niv. 3) | "ShellTool : shell tool pour exécution locale et hosted container. Harness (avril 2026) inclut filesystem tools + apply_patch tool." Natif depuis mise à jour avril 2026. |
| O4 Audit trail | OUI | openai.github.io/openai-agents-python (Niv. 3) | "Tracing natif intégré ; OpenTelemetry support." Structured logging et tracing built-in. Meilleur que les CLI tools sur O4. |
| O5 Maintenabilité | OUI | ~19K stars, 10.3M downloads/mois PyPI, MIT (Niv. 3-5) | OpenAI maintenu. Très actif (harness avril 2026). |
| O6 Résilience boucle | OUI | openai.github.io/openai-agents-python/running_agents (Niv. 3) | "max_turns parameter : limite le nombre de fois que l'agent loop s'exécute. MaxTurnsExceeded exception levée. error_handlers configurables." |

**Tier** : 1
**Justification tier** : O1 (PARTIEL via API-compatible) + O2 (OUI, Guardrails + hooks) + O3 (OUI, ShellTool natif depuis avril 2026). Tier 1. Évolution importante : ShellTool natif ajouté avril 2026 — avant cette date O3 aurait été PARTIEL. Fort sur O4 (tracing OTEL) et O6 (MaxTurnsExceeded).

---

### C16 — AWS Strands Agents SDK

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | strandsagents.com, aws.amazon.com/blogs/opensource (Niv. 3) | "Amazon Bedrock, Anthropic, OpenAI, Gemini, Ollama, LiteLLM, llama.cpp — multi-provider natif." |
| O2 Hooks/gates | OUI | aws.amazon.com/blogs/machine-learning/strands-agents-sdk (Niv. 3) | "BeforeInvocationEvent, BeforeModelCallEvent, BeforeToolCallEvent ; steering hooks 'comme middleware HTTP'." Hooks before/after tool formalisés. |
| O3 Exécution bash native | PARTIEL | github.com/strands-agents/tools (Niv. 3) | "Shell tool disponible via strands_tools library." Pas de bash tool built-in zero-config — requiert import explicite depuis strands_tools. AgentCore Runtime support commandes (après mars 2026). |
| O4 Audit trail | OUI | aws.amazon.com/blogs/machine-learning/strands-agents-sdk (Niv. 3) | "OTEL built-in ; instrumentation hooks ; logging/metrics natifs." OpenTelemetry intégré nativement. |
| O5 Maintenabilité | OUI | AWS + Accenture/Anthropic/Meta/PwC contributors (Niv. 3-5) | Apache 2.0. Utilisé en production chez Amazon Q Developer, AWS Glue. Actif. |
| O6 Résilience boucle | PARTIEL | strandsagents.com (Niv. 3) | "Resilience decorator avec RetryConfig (max_attempts, backoff_multiplier)." Pas de max_turns explicite documenté dans sources officielles. RetryConfig = resilience infra, pas loop termination agent. |

**Tier** : 2
**Justification tier** : O1 (OUI) + O2 (OUI, BeforeToolCallEvent natif) + O3 (PARTIEL, shell via import strands_tools). 2.5 des 3 critères fondamentaux satisfaits — O3 PARTIEL déclasse vers Tier 2. Fort sur O1, O2, O4. Convient mieux aux pipelines AWS qu'aux pipelines coding génériques autonomes.

---

### C17 — Google ADK (Agent Development Kit)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | google.github.io/adk-docs (Niv. 3) | "Google Cloud/Vertex opinionated mais multi-provider possible." Portabilité possible mais pas native zero-config. |
| O2 Hooks/gates | OUI | google.github.io/adk-docs/agents/workflow-agents/loop-agents/ (Niv. 3) | "6 callbacks lifecycle : before_agent, before_model, after_model, before_tool, after_tool, after_agent ; Plugin system BasePlugin." Callbacks before/after tool formalisés et documentés. |
| O3 Exécution bash native | PARTIEL | google.github.io/adk-docs (Niv. 3) | "Via tools custom." Pas de bash tool built-in zero-config. Requiert implémentation custom. |
| O4 Audit trail | OUI | docs.cloud.google.com/stackdriver/docs/instrumentation/ai-agent-adk (Niv. 3) | "OpenTelemetry intégré (ADK v1.17.0+, mise à jour 22 avril 2026). Observability pour agents : reasoning traces, tool calls, outputs. EU AI Act Article 12 compliance documentée." |
| O5 Maintenabilité | OUI | google.github.io/adk-docs (Niv. 3) | Google maintenu. Apache 2.0. Multi-langages (Python, TypeScript, Go, Java). Actif. |
| O6 Résilience boucle | OUI | google.github.io/adk-docs/agents/workflow-agents/loop-agents/ (Niv. 3) | "LoopAgent : max_iterations configurables. Loop stoppe si max_iterations atteint OU si sub-agent retourne escalate=True." Terminaison garantie documentée explicitement. |

**Tier** : 2
**Justification tier** : O1 (PARTIEL, Google Cloud opinionated) + O2 (OUI, 6 callbacks lifecycle) + O3 (PARTIEL, pas de bash natif). 1.5 des 3 critères fondamentaux pleinement satisfaits — O1 PARTIEL + O3 PARTIEL déclasse vers Tier 2. Fort sur O2, O4 (OTEL + EU AI Act), O6. SDK framework généraliste : excellent pour construction d'agents mais nécessite implémentation bash custom.

---

### C18 — Pydantic AI

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | ai.pydantic.dev (Niv. 3) | "OpenAI, Anthropic, Gemini, DeepSeek, Grok, Cohere, Mistral, Perplexity." Multi-provider natif. |
| O2 Hooks/gates | OUI | pydantic.dev/docs/ai/core-concepts/hooks/ (Niv. 3) | "Hooks instance avec @hooks.on.* decorators : before_tool_execute, after_tool_execute, on_tool_error. Wrap hooks pour setup/teardown. Timeout support. Filtrage par nom d'outil." PreToolUse/PostToolUse équivalents natifs documentés. |
| O3 Exécution bash native | PARTIEL | ai.pydantic.dev/toolsets/ (Niv. 3) | "Via tools custom." Pas de bash tool built-in zero-config. Requiert implémentation custom. Architecture "FastAPI pour GenAI" = framework généraliste. |
| O4 Audit trail | PARTIEL | ai.pydantic.dev (Niv. 3) | Non documenté comme feature explicite dans sources officielles. Les hooks permettent logging custom mais pas de built-in structured audit log. |
| O5 Maintenabilité | OUI | pypi.org/project/pydantic-ai, ThoughtWorks Radar 2026 (Niv. 3-5) | Pydantic = très forte réputation. MIT. ThoughtWorks Radar 2026 recommandé. Maintenance active. |
| O6 Résilience boucle | OUI | ai.pydantic.dev/api/agent/, ai.pydantic.dev/api/run/ (Niv. 3) | "request_limit : borne le nombre de turns modèle. tool_calls_limit : cap le nombre d'exécutions d'outils. UsageLimits class." Double circuit-breaker (turns + tool calls). |

**Tier** : 2
**Justification tier** : O1 (OUI) + O2 (OUI, before_tool_execute hooks natifs) + O3 (PARTIEL, bash custom). 2 des 3 critères fondamentaux satisfaits. Lacune O3 documentée : pas de bash tool natif — nécessite implémentation. Fort sur O2 (hooks les mieux documentés des SDKs généralistes) et O6 (double circuit-breaker).

---

## Classement final Reviewer B

| Tier 1 | Tier 2 | Non recommandé |
|--------|--------|----------------|
| C1 Claude Code CLI | C6 Aider | C9 Roo Code (exclusion I4 — shutdown 15/05/2026) |
| C2 Claude Agent SDK | C7 Goose (Block) | C13 Pi (pi-coding-agent) |
| C3 OpenCode | C12 mini-swe-agent | |
| C4 Gemini CLI | C14 Continue.dev | |
| C5 Codex CLI | C16 AWS Strands | |
| C8 Cline | C17 Google ADK | |
| C10 OpenHands | C18 Pydantic AI | |
| C11 SWE-agent | | |
| C15 OpenAI Agents SDK | | |

### Résumé des lacunes par critère

| Critère | Candidats avec NON ou PARTIEL documenté |
|---------|----------------------------------------|
| O1 Portabilité | C1, C2, C4, C5, C15 (PARTIEL — couplage vendor natif) ; C17 (PARTIEL Google) |
| O2 Hooks/gates | C6 (PARTIEL), C7 (PARTIEL), C12 (NON), C13 (NON), C14 (PARTIEL) |
| O3 Bash natif | C15 (OUI depuis avr. 2026 — ShellTool), C16 (PARTIEL — strands_tools), C17 (PARTIEL custom), C18 (PARTIEL custom), C13 (NON hooks) |
| O4 Audit trail | C1, C2, C3, C4, C5, C7, C8, C12, C13, C14, C18 (PARTIEL — hooks custom) ; C13 (NON) |
| O5 Maintenabilité | C13 (NON — projet individuel) ; C9 (exclus — shutdown) |
| O6 Résilience boucle | C6 (NON — pas de max_turns natif) ; C8, C16 (PARTIEL) ; C13 (NON) |

### Observations majeures Reviewer B

1. **C9 Roo Code exclus** : Shutdown confirmé 15 mai 2026. Toute décision basée sur ce candidat est caduque.

2. **C8 Cline reclassé Tier 1** : CLI 2.0 (fev. 2026) introduit un headless mode et CI/CD sans IDE qui satisfait pleinement O3. Non documenté dans le fichier discovery.

3. **C15 OpenAI Agents SDK reclassé Tier 1** : ShellTool natif introduit avril 2026. O3 = OUI depuis cette date.

4. **C11 SWE-agent Tier 1** : Les trajectoires JSON (.traj) constituent un audit trail structuré natif (O4 OUI) non crédité pleinement dans le discovery.

5. **C6 Aider** : Seul outil avec O1 OUI (100+ providers via LiteLLM) + O4 OUI (git audit trail natif) mais déclassé Tier 2 sur O2 (pas de hooks callbacks per-tool).

6. **Lacune O4 systémique** : La majorité des candidats (9/17) n'ont pas de built-in structured audit log — ils délèguent l'audit aux hooks custom. Seuls C10 (event sourcing), C11 (trajectoires JSON), C15 (OTEL), C16 (OTEL), C17 (OTEL), C6 (git log) ont un audit trail natif.

---

*Fichier généré le 2026-04-28 par Reviewer B (Claude Sonnet 4.6) — Phase 2.2 Kitchenham 2007.*
*Sources primaires vérifiées via WebSearch. Isolation totale respectée — aucun contact avec Reviewer A ou études précédentes.*
