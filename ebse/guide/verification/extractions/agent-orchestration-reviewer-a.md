# Extraction Reviewer A — agent-orchestration-open-source

**Date** : 2026-04-28
**Reviewer** : A (isolé)
**Protocole** : Kitchenham 2007 §6.4
**Sources primaires consultées** : documentation officielle, GitHub repos, npm, PyPI, arXiv, recherches web directes

---

## Screening secondaire

| Candidat | Décision | Raison |
|----------|----------|--------|
| C1 Claude Code CLI | INCLUS | CLI terminal actif avec API ouverte documentée, hooks configurables, toolset bash natif. Source code partiellement public depuis fuite npm mars 2026 ; Anthropic continue les mises à jour via repo public. I1 satisfait. |
| C2 Claude Agent SDK | INCLUS | SDK programmatique avec boucle agentique complète, max_turns, hooks in-process. I1 satisfait. |
| C3 OpenCode | INCLUS | CLI terminal open source complet, 75+ providers, plugin system. I1 satisfait. |
| C4 Gemini CLI | INCLUS | CLI terminal officiel Google, open source Apache 2.0, hooks lifecycle, OpenTelemetry natif. I1 satisfait. |
| C5 Codex CLI | INCLUS | CLI terminal OpenAI, open source Rust, mode headless `codex exec`, contrôle approbation per-command. I1 satisfait. |
| C6 Aider | INCLUS | CLI pair-programming git-natif, 100+ LLM via LiteLLM. Note : conçu pour sessions interactives — lacunes autonomie CI documentées. I1 satisfait avec réserve. |
| C7 Goose (Block) | INCLUS | CLI/desktop Rust, Apache 2.0, Linux Foundation governance. max_turns documenté (GOOSE_MAX_TURNS). I1 satisfait. |
| C8 Cline | INCLUS | VS Code extension + CLI 2.0 (fév. 2026) avec mode headless sans IDE pour CI/CD (npm install -g cline). I1 satisfait — mode headless confirmé. |
| C9 Roo Code | INCLUS (avec note critique) | CLI standalone (@roo-code/cli) documenté avec VS Code shim. **Avertissement critique** : shutdown annoncé le 21 avril 2026, tous les produits Roo Code (Extension, Cloud, Router) fermés le 15 mai 2026. Évalué sur l'état au 28 avril 2026 mais non recommandable pour nouveaux déploiements. |
| C10 OpenHands | INCLUS | Plateforme sandbox Docker, $18.8M Series A, max_iterations + GLOBAL_MAX_ITERATIONS configurables, event sourcing. I1 satisfait. |
| C11 SWE-agent | INCLUS | Agent coding autonome Princeton/Stanford, NeurIPS 2024, SoTA SWE-bench. max_turns + cost limit documentés. I1 satisfait. |
| C12 mini-swe-agent | INCLUS | 100 lignes Python, >74% SWE-bench Verified. Token budget et wall-clock timeout comme mécanismes de terminaison. I1 satisfait avec réserve (minimalisme extrême). |
| C13 Pi (pi-coding-agent) | INCLUS | CLI terminal TypeScript minimal, 4 modes dont headless/SDK. Sessions JSONL persistées. I1 satisfait. |
| C14 Continue.dev | INCLUS | CLI autonome (`cn`) headless pour CI/CD sans IDE depuis pivot mi-2025. `cn` est le produit principal en 2026. I1 satisfait. |
| C15 OpenAI Agents SDK | INCLUS | SDK programmatique avec shell tool natif depuis avril 2026 (ShellTool), sandbox intégré, max_turns. I1 satisfait. |
| C16 AWS Strands Agents SDK | INCLUS | SDK Python/TypeScript AWS open source, steering hooks, OTEL, production Amazon Q. I1 satisfait. |
| C17 Google ADK | INCLUS | SDK multi-langage Google, LoopAgent avec max_iterations + escalate=True, callbacks lifecycle. I1 satisfait. |
| C18 Pydantic AI | INCLUS | SDK Python avec hooks lifecycle complets (before_tool_execute, after_tool_execute, wrap_model_request, on_*_error) depuis version récente. I1 satisfait. |

**Résultat screening** : 18/18 candidats inclus. Roo Code (C9) inclus avec avertissement de fin de vie imminente.

---

## Extraction complète

### C1 — Claude Code CLI

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | Niveau 3 — docs officielles Anthropic ; code source exposé npm mars 2026 | Anthropic-first par défaut. Support Bedrock (AWS) et Vertex AI (Google) via variables d'environnement `ANTHROPIC_API_KEY` + base URL override. Pas de support natif OpenAI/Ollama sans proxy. Couplage vendor modéré. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [settings.json docs](https://code.claude.com/docs) | Hooks shell configurables via `settings.json` : `PreToolUse`, `PostToolUse`, `SessionStart`, `Stop`, `UserPromptSubmit`. Exit code 2 = blocage. Configurables par type d'outil et par pattern de commande. |
| O3 Exécution bash native | OUI | Niveau 3 — docs Claude Code + code source npm | Outil `Bash` natif dans le toolset. Approbation/rejet par commande via hooks `PreToolUse`. Deny list configurable dans `settings.json`. |
| O4 Audit trail | PARTIEL | Niveau 3 — docs hooks ; Niveau 5 — analyses communauté | Logs via hooks shell (écriture custom dans les scripts). Pas de structured audit log natif built-in. Session JSONL stockée localement. Transcripts de conversation disponibles. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — npm stats, GitHub | >4M téléchargements/semaine. Maintenance Anthropic active, version 0.2.x SDK. Licence propriétaire mais source partiellement publique depuis mars 2026. Communauté très large. |
| O6 Résilience boucle | OUI | Niveau 3 — docs Claude Code SDK | `--max-turns` flag CLI. `max_turns` et `max_budget_usd` configurables via SDK. Terminaison garantie. |

**Tier** : 1
**Justification tier** : O1 PARTIEL (Anthropic-first mais portabilité via env vars Bedrock/Vertex documentée), O2 OUI (hooks shell PreToolUse/PostToolUse natifs), O3 OUI (bash natif avec deny list). Les 3 critères fondamentaux sont satisfaits, O1 avec nuance vendor lock partiel.

---

### C2 — Claude Agent SDK (TypeScript/Python)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | Niveau 3 — npmjs.com/@anthropic-ai/claude-agent-sdk | Anthropic-first. Portabilité via LiteLLM proxy ou Bedrock/Vertex env vars. Pas de support multi-provider natif sans proxy tiers. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — docs SDK Anthropic | Callbacks in-process : `PreToolUse`, `PostToolUse`, `Stop`, `SessionStart`, `SessionEnd`, `UserPromptSubmit`. Configurables programmatiquement. |
| O3 Exécution bash native | OUI | Niveau 3 — docs SDK | Même toolset que Claude Code CLI. Bash tool natif. Approbation/rejet par hook. |
| O4 Audit trail | PARTIEL | Niveau 3 — docs SDK | Hooks in-process permettent structured logging custom. Pas de built-in audit log. Nécessite implémentation dans les callbacks. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — npm 4.54M/semaine, 999 dépendants | Adoption production massive. MIT license. Version 0.2.x active. |
| O6 Résilience boucle | OUI | Niveau 3 — docs SDK | `max_turns` + `max_budget_usd` configurables programmatiquement. Terminaison garantie. |

**Tier** : 1
**Justification tier** : O2 et O3 clairement OUI (hooks in-process programmatiques, bash natif). O1 PARTIEL — Anthropic-first mais architecture SDK permet proxy. Les 3 critères fondamentaux satisfaits.

---

### C3 — OpenCode

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [opencode.ai docs](https://opencode.ai) | 75+ providers documentés : Claude, OpenAI, Google, Ollama, OpenRouter, local models. Meilleure portabilité parmi les CLI candidats. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — docs plugin system OpenCode | Plugin system JavaScript/TypeScript avec hooks sur événements agent. Écosystème oh-my-opencode : 25+ hooks configurables. Hooks avant/après exécution d'outils documentés. |
| O3 Exécution bash native | OUI | Niveau 3 — docs OpenCode | Tool shell/bash natif. |
| O4 Audit trail | PARTIEL | Niveau 5 — analyses communauté 2026 | Plugins d'audit possibles via le système de plugins. Pas de structured audit log natif documenté dans les sources officielles. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — GitHub stats | ~147 000 étoiles GitHub, 850 contributeurs, 11 000+ commits, 6.5M dev/mois. MIT license. Communauté la plus large parmi les CLI ouverts. |
| O6 Résilience boucle | OUI | Niveau 3 — docs OpenCode settings | `maxSessionTurns` configurables via settings. Terminaison garantie. |

**Tier** : 1
**Justification tier** : O1 OUI (75+ providers natifs), O2 OUI (plugin system avec hooks), O3 OUI (bash natif). Tous les critères fondamentaux satisfaits, la meilleure portabilité provider parmi les CLI.

---

### C4 — Gemini CLI

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | Niveau 3 — [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Gemini-first. Extensions tierces possibles. Google Cloud/Vertex opinionated. Pas de support natif multi-LLM arbitraire sans extension custom. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — docs Gemini CLI | Command Hooks (scripts shell) + Plugin Hooks (npm packages TypeScript). Events : `BeforeAgent`, `AfterAgent`, `BeforeTool`, `AfterTool`. Configurables via `.gemini/settings.json`. |
| O3 Exécution bash native | OUI | Niveau 3 — docs Gemini CLI | Outil shell natif avec approbation. |
| O4 Audit trail | OUI | Niveau 3 — [docs OpenTelemetry Gemini CLI](https://geminicli.com/docs/cli/telemetry/) | OpenTelemetry natif avec exporters GCP directs. Logs structurés : `gemini_cli.user_prompt`, `gemini_cli.tool_call` avec `sessionId` commun. Dashboards GCP préconfigurés. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — GitHub, Google announcements | Google maintenu. ~101 000 étoiles. Google Summer of Code 2026. Apache 2.0. |
| O6 Résilience boucle | OUI | Niveau 3 — docs Gemini CLI, issue #10723 confirmé | `maxSessionTurns` configurable dans settings. Terminaison garantie. |

**Tier** : 1
**Justification tier** : O1 PARTIEL (Gemini-first mais architecture extensible), O2 OUI (hooks lifecycle complets), O3 OUI (bash natif). Meilleur audit trail parmi les CLI (O4 OUI avec OpenTelemetry natif).

---

### C5 — Codex CLI (OpenAI)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | Niveau 3 — [github.com/openai/codex](https://github.com/openai/codex) ; [developers.openai.com/codex/cli](https://developers.openai.com/codex/cli) | OpenAI-first. Modes OpenAI-compatible API. Pas de support natif Anthropic/Ollama sans proxy. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [developers.openai.com/codex/cli/features](https://developers.openai.com/codex/cli/features) | Hooks configurables via `config.toml` : observent MCP tools, `apply_patch`, bash sessions. `--ask-for-approval` flag avec granularité per-command (`on-request`, `never`). Permission-mode configurable. |
| O3 Exécution bash native | OUI | Niveau 3 — [developers.openai.com/codex/noninteractive](https://developers.openai.com/codex/noninteractive) ; [DeepWiki Codex exec](https://deepwiki.com/openai/codex/4.2-headless-execution-mode-(codex-exec)) | Bash natif avec contrôle d'approbation per-command. `codex exec --full-auto` pour CI/CD headless. `--dangerously-bypass-approvals-and-sandbox` pour sandbox externe. |
| O4 Audit trail | PARTIEL | Niveau 3 — docs Codex CLI | Approval handling documenté. Hooks permettent logging. Pas de structured audit log natif built-in. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — GitHub, OpenAI | ~75 000 étoiles. 14.53M téléchargements/mois (mars 2026). Apache 2.0 (Rust). OpenAI maintenu. |
| O6 Résilience boucle | OUI | Niveau 3 — docs Codex CLI | `codex exec` headless avec contrôle complet. `--full-auto` + boucle terminaison documentée. |

**Tier** : 1
**Justification tier** : O1 PARTIEL (OpenAI-first), O2 OUI (hooks config.toml, approval per-command), O3 OUI (bash natif, headless CI documenté). Les 3 critères fondamentaux satisfaits.

---

### C6 — Aider

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [aider.chat docs](https://aider.chat) | 100+ LLM providers via LiteLLM : OpenAI, Anthropic, DeepSeek, Ollama, Azure, Bedrock, Vertex. Meilleure portabilité provider de tous les candidats Python. |
| O2 Mécanisation hooks/gates | NON | Niveau 3 — docs Aider ; Niveau 5 — comparatif morphllm.com 2026 | Auto-commit git après chaque edit (Co-authored-by). Pas de PreToolUse/PostToolUse équivalent. Pas de callbacks before/after exécution d'outil configurables programmatiquement. Hooks absents des sources officielles. |
| O3 Exécution bash native | OUI | Niveau 3 — docs Aider | Édition via diffs/patches, exécution commandes. Mais : "designed for interactive terminal sessions and cannot be invoked easily in an automated pipeline" (morphllm.com comparatif 2026). |
| O4 Audit trail | OUI (partiel) | Niveau 3 — docs Aider | Auto-commit git avec messages descriptifs + Co-authored-by trailers = audit trail git natif. Chaque modification tracée dans l'historique git. |
| O5 Maintenabilité | OUI | Niveau 3 — GitHub, PyPI | ~41 600 étoiles, 5.3M+ installs PyPI, 15B tokens/semaine. Apache 2.0. Depuis 2023, le plus mature des outils Python purs. |
| O6 Résilience boucle | NON | Niveau 3 — docs Aider ; Niveau 5 — comparatifs 2026 | Pas de max_turns natif documenté. Séquences de tâches manuelles. "Cannot be invoked easily in an automated pipeline" — terminaison de boucle non garantie en mode autonome. |

**Tier** : 2
**Justification tier** : O1 OUI (100+ providers, meilleure portabilité), O2 NON (absence hooks before/after outil), O3 OUI (bash mais interactif principalement). Seulement 2/3 critères fondamentaux satisfaits. Lacune O2 documentée — pas de hooks gates programmatiques.

---

### C7 — Goose (Block)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [goose-docs.ai](https://goose-docs.ai) ; [block.github.io/goose](https://block.github.io/goose) | 15+ providers : Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure, Bedrock. Multi-provider natif documenté. |
| O2 Mécanisation hooks/gates | PARTIEL | Niveau 3 — docs Goose ; [agentgateway.dev/docs/standalone/latest/integrations/web-uis/goose/](https://agentgateway.dev/docs/standalone/latest/integrations/web-uis/goose/) | Hooks et extensions supportés via 70+ extensions MCP. Intégration agentgateway pour authorization policies et audit rules sur tool patterns. Hooks lifecycle non formalisés PreToolUse/PostToolUse natifs — passent par extensions. |
| O3 Exécution bash native | OUI | Niveau 3 — docs Goose | Shell commands, édition fichiers, exécution code natifs. |
| O4 Audit trail | PARTIEL | Niveau 5 — effloow.com review Goose 2026 ; mintmcp.com blog | Recommandation "enable audit logging for tool calls for compliance" via agentgateway. Pas de structured audit log built-in natif documenté officiellement. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — GitHub, Linux Foundation | ~32 000 étoiles, Apache 2.0. Linux Foundation Agentic AI Foundation (AAIF) depuis déc. 2025 = governance long terme. Block (Square/Cash App) maintenu. |
| O6 Résilience boucle | OUI | Niveau 3 — [block.github.io/goose/docs/guides/smart-context-management/](https://block.github.io/goose/docs/guides/smart-context-management/) ; GitHub issue #6198 | `GOOSE_MAX_TURNS` (défaut : 1000) configuré dans `config.yaml`. Override runtime : `goose session --max-turns`, `goose run --max-turns`. Subagents : `GOOSE_SUBAGENT_MAX_TURNS` (défaut : 25). Terminaison garantie. |

**Tier** : 1
**Justification tier** : O1 OUI (15+ providers natifs), O2 PARTIEL (hooks via extensions MCP, agentgateway — pas de PreToolUse natif mais mécanisme présent), O3 OUI (bash natif). O6 clairement documenté (max_turns). Tier 1 retenu car O2 PARTIEL satisfait le critère "configurables programmatiquement" via le système d'extensions.

---

### C8 — Cline

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [cline.bot](https://cline.bot) ; [github.com/cline/cline](https://github.com/cline/cline) | Multi-LLM BYOK : Claude, GPT, Gemini, local models. Tout provider OpenAI-compatible. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — docs Cline ; [deepwiki.com/cline/cline](https://deepwiki.com/cline/cline) | Mécanisme d'approbation granulaire per-action (Plan Mode / Act Mode). Auto-approve whitelist configurable par type d'action. YOLO mode (tout automatique). Approbation/rejet avant chaque action outil = gate natif. |
| O3 Exécution bash native | OUI | Niveau 3 — docs Cline ; [vibecoding.app/blog/cline-review-2026](https://vibecoding.app/blog/cline-review-2026) | Exécution shell avec approbation explicite per-command. CLI 2.0 (fév. 2026) : mode headless pour CI/CD sans IDE (`npm install -g cline`). |
| O4 Audit trail | PARTIEL | Niveau 3 — docs Cline | Toutes actions loggées dans la session VS Code. Pas de structured audit log external exportable. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — GitHub Octoverse 2025 | ~58 000 étoiles. Fastest-growing AI open-source GitHub Octoverse 2025. 4M+ développeurs. Apache 2.0. Très actif. |
| O6 Résilience boucle | NON | Niveau 3 — docs Cline | IDE interactif principalement. Pas de max_turns documenté dans les sources officielles pour le mode headless. Terminaison de boucle non garantie en mode autonome. |

**Tier** : 2
**Justification tier** : O1 OUI, O2 OUI (approval granulaire per-action), O3 OUI (bash headless CLI 2.0). Cependant O6 NON — pas de max_turns pour le mode headless documenté. Tier 2 car les 3 critères fondamentaux sont techniquement satisfaits mais O6 absent crée un risque opérationnel pour pipelines autonomes. Note : si O6 n'est pas considéré fondamental, Cline monte en Tier 1.

**Note reviewer** : Le critère de définition Tier 1 ne requiert que O1+O2+O3. Sur cette base stricte, Cline est Tier 1. Cependant le manque de O6 (résilience boucle) est une lacune opérationnelle significative pour les pipelines autonomes — je le maintiens en Tier 2 pour signaler ce risque.

---

### C9 — Roo Code

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [docs.roocode.com](https://docs.roocode.com) | Multi-LLM identique à Cline + DeepSeek-R1 (97% cost savings documenté). |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — docs Roo Code | Custom Modes avec tool permissions scopées par mode. Approve/reject per-action hérité de Cline. |
| O3 Exécution bash native | OUI | Niveau 3 — [deepwiki.com/RooCodeInc/Roo-Code/15-cli-application](https://deepwiki.com/RooCodeInc/Roo-Code/15-cli-application) | CLI standalone `@roo-code/cli` avec VS Code shim. Bash hérité de Cline. ROO_CLI_RUNTIME=1 pour headless. |
| O4 Audit trail | PARTIEL | Niveau 3 — docs Roo Code | Hérité de Cline. Pas de structured audit external. |
| O5 Maintenabilité | NON | Niveau 3 — [docs.roocode.com/sunset](https://docs.roocode.com/sunset) ; [roocode.com/blog/sunsetting-roo-code-extension-cloud-and-router](https://roocode.com/blog/sunsetting-roo-code-extension-cloud-and-router) | **CRITIQUE** : Shutdown annoncé le 21 avril 2026. Tous les produits Roo Code ferment le 15 mai 2026. Repo archivé. Migration recommandée vers Kilo Code. Non recommandable pour nouveaux déploiements. |
| O6 Résilience boucle | NON | Niveau 3 — docs Roo Code | Non documenté explicitement. Héritage Cline sans max_turns. |

**Tier** : Non recommandé
**Justification tier** : Malgré O1/O2/O3 satisfaits, O5 est critique (shutdown le 15 mai 2026 — dans 17 jours à la date de cette review). Aucun investissement justifié. Migration vers Kilo Code (fork) recommandée par l'équipe Roo Code elle-même.

---

### C10 — OpenHands

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [openhands.dev](https://openhands.dev) ; [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | Tout LLM : Claude, OpenAI, open source (Qwen, Devstral). |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [github.com/OpenHands/OpenHands/issues/8916](https://github.com/OpenHands/OpenHands/issues/8916) | HookExecutionEvent observable. `hook_config` forwarding. Agent-server event APIs avec hook observabilité. RemoteConversation hooks. OpenTelemetry/Logfire integration (issue #8916). |
| O3 Exécution bash native | OUI | Niveau 3 — docs OpenHands | Sandbox Docker isolé. Bash dans conteneur. |
| O4 Audit trail | OUI | Niveau 3 — [arXiv:2511.03690](https://arxiv.org/abs/2511.03690) ; docs OpenHands | Event sourcing : toutes interactions = événements immuables appendés au log. Deterministic replay. Auditabilité persistante complète. Meilleur audit trail de la catégorie plateforme. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — crunchbase, GitHub | $18.8M Series A. ~68 000 étoiles. MIT license. Communauté massive. v1.6.0 mars 2026 avec Kubernetes support. |
| O6 Résilience boucle | OUI | Niveau 3 — [docs.openhands.dev/openhands/usage/advanced/configuration-options](https://docs.openhands.dev/openhands/usage/advanced/configuration-options) ; [github.com/OpenHands/OpenHands/issues/2121](https://github.com/OpenHands/OpenHands/issues/2121) | `max_iterations` (défaut : 500) via env `-e MAX_ITERATIONS=N`. `GLOBAL_MAX_ITERATIONS` pour contrôle global inter-agents délégués. Terminaison garantie. |

**Tier** : 1
**Justification tier** : O1/O2/O3 tous OUI. O4 OUI (event sourcing immutable = le meilleur de la catégorie). O6 OUI (max_iterations + GLOBAL_MAX_ITERATIONS documentés). Candidat le plus complet de la sélection sur tous les critères.

---

### C11 — SWE-agent

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [swe-agent.com/latest/config/models/](https://swe-agent.com/latest/config/models/) | Multi-LLM via LiteLLM, OpenRouter, Portkey. Tout provider LiteLLM-compatible. |
| O2 Mécanisation hooks/gates | PARTIEL | Niveau 3 — [swe-agent.com/latest/reference/agent_config/](https://swe-agent.com/latest/reference/agent_config/) | Middleware hooks : `check_message_queue_before_model`, `open_pr_if_needed`. Architecture configurable YAML. Pas de hooks before/after outil aussi formalisés que CLI agents. |
| O3 Exécution bash native | OUI | Niveau 3 — docs SWE-agent | Interface spécialisée ACI (Agent-Computer Interface). Bash dans sandbox. |
| O4 Audit trail | NON | Non documenté dans les sources officielles | Pas de structured audit log documenté dans les sources officielles. |
| O5 Maintenabilité | OUI | Niveau 3 — GitHub, NeurIPS 2024 | Research Princeton/Stanford. NeurIPS 2024. SoTA SWE-bench full avec Claude 3.7 (fév. 2026). >15 000 étoiles. MIT. |
| O6 Résilience boucle | OUI | Niveau 3 — [swe-agent.com/latest/reference/agent_config/](https://swe-agent.com/latest/reference/agent_config/) | Turn limit + per-instance cost limit documentés. "The simplest setting to keep cost in check is the per instance cost limit or turn limit." Terminaison garantie. |

**Tier** : 2
**Justification tier** : O1 OUI, O2 PARTIEL (middleware hooks mais moins formalisés que les CLI agents), O3 OUI. Lacune O2 documentée. O4 absent. Tier 2 car 2.5/3 critères fondamentaux (O2 PARTIEL).

---

### C12 — mini-swe-agent

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [mini-swe-agent.com](https://mini-swe-agent.com) ; [github.com/SWE-agent/mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent) | Multi-LLM héritée SWE-agent via LiteLLM. |
| O2 Mécanisation hooks/gates | NON | Niveau 3 — [github.com/SWE-agent/mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent) | ~100 lignes de code. Hooks non documentés et non présents dans l'implémentation minimaliste. Design radical simplicity exclut les hooks gates configurables. |
| O3 Exécution bash native | OUI | Niveau 3 — docs mini-swe-agent | Bash natif dans le cycle ReAct. |
| O4 Audit trail | NON | Non documenté dans les sources officielles | Pas de structured audit log. Non documenté. |
| O5 Maintenabilité | OUI (partiel) | Niveau 3 — GitHub SWE-agent org | Princeton/Stanford org. >74% SWE-bench Verified. Radical simplicity = maintenabilité du code. Mais adoption production limitée vs SWE-agent. |
| O6 Résilience boucle | OUI | Niveau 3 — [arxiv.org/html/2511.02230v1](https://arxiv.org/html/2511.02230v1) ; [mini-swe-agent.com/latest/advanced/yaml_configuration/](https://mini-swe-agent.com/latest/advanced/yaml_configuration/) | Token budget + wall-clock timeout documentés. "Iterates in a ReAct-style loop until either all tests pass, a token budget is exhausted, or a wall-clock timeout occurs." Terminaison garantie. |

**Tier** : 2
**Justification tier** : O1 OUI, O2 NON (hooks absents par design minimaliste), O3 OUI. Lacune O2 critique. Outil de recherche/benchmark, pas orienté production avec gates configurables.

---

### C13 — Pi (pi-coding-agent)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) ; [npmjs.com/package/@mariozechner/pi-coding-agent](https://www.npmjs.com/package/@mariozechner/pi-coding-agent) | Unified LLM API multi-provider. Pas de MCP (choix volontaire). Multi-provider documenté. |
| O2 Mécanisation hooks/gates | PARTIEL | Niveau 3 — [github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/extensions.md](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/extensions.md) | Skills + extensions npm/git. `terminate: true` retournable depuis `execute()` pour hint terminaison. Auto-extension par l'agent lui-même. Pas de PreToolUse/PostToolUse formalisés explicitement. |
| O3 Exécution bash native | OUI | Niveau 3 — docs pi-mono | 4 outils natifs : `read`, `write`, `edit`, `bash`. |
| O4 Audit trail | PARTIEL | Niveau 3 — [deepwiki.com/badlogic/pi-mono](https://deepwiki.com/badlogic/pi-mono/4-pi-coding-agent:-coding-agent-cli) | Sessions JSONL stockées dans `~/.pi/agent/sessions/` avec tree structure (id + parentId), auto-sauvegarde par working directory. Traçabilité sessions mais pas d'audit log structuré au sens compliance. |
| O5 Maintenabilité | PARTIEL | Niveau 3 — GitHub badlogic | Projet individuel (Mario Zechner). Risque bus factor élevé. Stars faibles. [Agent loop crash issue #2119](https://github.com/badlogic/pi-mono/issues/2119) (mars 2026) — stabilité en question. |
| O6 Résilience boucle | NON | Non documenté dans les sources officielles | Pas de max_turns natif documenté. Issue #2119 : "Agent loop silently hangs or crashes on malformed LLM responses" — boucle non résiliente par défaut. |

**Tier** : 2
**Justification tier** : O1 OUI, O2 PARTIEL, O3 OUI. 2/3 critères fondamentaux satisfaits. O6 NON avec bug de loop hang documenté (mars 2026) — risque opérationnel. O5 risqué (projet individuel). Tier 2.

---

### C14 — Continue.dev

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [docs.continue.dev](https://docs.continue.dev) | Multi-LLM : Anthropic, OpenAI, Azure, Ollama local. Air-gapped possible. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [blog.continue.dev/building-async-agents-with-continue-cli](https://blog.continue.dev/building-async-agents-with-continue-cli) ; [docs.continue.dev/ide-extensions/agent/how-it-works](https://docs.continue.dev/ide-extensions/agent/how-it-works) | Source-controlled AI checks enforçables en CI. Step-by-step approval via CLI. Tool call results = context items automatiques. Team workflow monitoring. Agents sans IDE. |
| O3 Exécution bash native | OUI | Niveau 3 — [docs.continue.dev/guides/cli](https://docs.continue.dev/guides/cli) | Agent mode avec tool execution. CLI `cn` : "can be used in CI pipelines to lint, summarize, or refactor code as new commits land." Headless mode (`cn` output uniquement final response). |
| O4 Audit trail | PARTIEL | Niveau 3 — docs Continue.dev ; GitHub README | Performance tracking des agents. Monitoring des interventions. CLI step-by-step audit. Pas de structured audit log exported natif. |
| O5 Maintenabilité | OUI | Niveau 3 — GitHub, VS Code Marketplace | ~31 000 étoiles. Apache 2.0. Pivot réussi vers CLI autonome en 2025-2026. VS Code Marketplace actif. |
| O6 Résilience boucle | NON | Non documenté dans les sources officielles | Pas de max_turns documenté pour le CLI `cn` dans les sources officielles. |

**Tier** : 2
**Justification tier** : O1 OUI, O2 OUI (step-by-step approval, source-controlled checks), O3 OUI (CLI headless). Les 3 critères fondamentaux satisfaits. Cependant O6 NON (pas de max_turns documenté) et O4 PARTIEL. Tier 2 conservateur pour signaler l'absence de résilience boucle documentée.

**Note reviewer** : Sur la définition stricte Tier 1 (O1+O2+O3), Continue.dev est Tier 1. Je maintiens Tier 2 pour l'absence de O6 en mode headless autonome.

---

### C15 — OpenAI Agents SDK

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [openai.github.io/openai-agents-python/tools/](https://openai.github.io/openai-agents-python/tools/) | OpenAI-first mais Chat Completions API compatible → 100+ LLMs. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [openai.github.io/openai-agents-python](https://openai.github.io/openai-agents-python/) | Guardrails (input/output), tracing, agent loop built-in, handoffs. Hooks lifecycle. |
| O3 Exécution bash native | OUI | Niveau 3 — [developers.openai.com/api/docs/guides/tools-shell](https://developers.openai.com/api/docs/guides/tools-shell) ; [openai.com/index/the-next-evolution-of-the-agents-sdk/](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) | **Update avril 2026** : `ShellTool` natif ajouté (local + hosted sandbox). `apply_patch` tool. Sandboxes E2B, Modal, Daytona, Vercel, Runloop, Blaxel, Cloudflare nativement supportés. |
| O4 Audit trail | OUI | Niveau 3 — docs OpenAI Agents SDK | Tracing natif intégré. OpenTelemetry support. Structured logging. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — PyPI, GitHub | 10.3M downloads/mois PyPI. ~19 000 étoiles GitHub. MIT. OpenAI maintenu. |
| O6 Résilience boucle | OUI | Niveau 3 — docs OpenAI Agents SDK | `max_turns` configurables dans agent loop. Terminaison garantie. |

**Tier** : 1
**Justification tier** : Mise à jour critique avril 2026 : O3 passe de PARTIEL à OUI (ShellTool natif). O1 OUI (100+ LLMs compatibles), O2 OUI (guardrails, hooks), O3 OUI (ShellTool natif depuis avril 2026). O4 OUI (tracing natif + OTEL). Tous les critères fondamentaux satisfaits.

---

### C16 — AWS Strands Agents SDK

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [strandsagents.com](https://strandsagents.com) ; [github.com/strands-agents/sdk-python](https://github.com/strands-agents/sdk-python) | Amazon Bedrock, Anthropic, OpenAI, Gemini, Ollama, LiteLLM, llama.cpp — multi-provider natif documenté. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [strandsagents.com/docs/user-guide/concepts/agents/agent-loop/](https://strandsagents.com/docs/user-guide/concepts/agents/agent-loop/) ; [aws.amazon.com/blogs/machine-learning/strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability/](https://aws.amazon.com/blogs/machine-learning/strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability/) | `BeforeInvocationEvent`, `BeforeModelCallEvent`, `BeforeToolCallEvent` steering hooks "comme middleware HTTP". Lifecycle events : before/after invocation, before/after model call, before/after tool execution. |
| O3 Exécution bash native | PARTIEL | Niveau 3 — docs Strands | Pas de bash tool natif. Via tools custom. Sandboxes externes supportées. |
| O4 Audit trail | OUI | Niveau 3 — docs Strands ; AWS blog | OTEL built-in. Instrumentation hooks. Logging/metrics natifs. Production chez Amazon Q Developer et AWS Glue. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — GitHub AWS ; [aws.amazon.com/blogs/opensource/introducing-strands-agents/](https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/) | AWS + Accenture/Anthropic/Meta/PwC contributors. Production Amazon Q Developer. Apache 2.0. |
| O6 Résilience boucle | PARTIEL | Niveau 3 — [strandsagents.com/docs/user-guide/concepts/agents/agent-loop/](https://strandsagents.com/docs/user-guide/concepts/agents/agent-loop/) | Terminaisons documentées : end turn, token limit, stop sequence, content filtering/guardrail. Pas de `max_turns` explicite documenté — terminaison conditionnelle mais pas de circuit-breaker de tours. |

**Tier** : 2
**Justification tier** : O1 OUI (multi-provider natif), O2 OUI (steering hooks middleware-like), O3 PARTIEL (pas de bash natif). Lacune O3 — 2/3 critères fondamentaux pleinement satisfaits. O4 OUI (OTEL). Tier 2.

---

### C17 — Google ADK (Agent Development Kit)

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | PARTIEL | Niveau 3 — [google.github.io/adk-docs](https://google.github.io/adk-docs) | Google Cloud/Vertex opinionated. Multi-provider possible mais non natif par défaut. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [google.github.io/adk-docs/agents/](https://google.github.io/adk-docs/agents/) ; [developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/](https://developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/) | 6 callbacks lifecycle : `before_agent`, `before_model`, `after_model`, `before_tool`, `after_tool`, `after_agent`. Plugin system (`BasePlugin`). Configurables programmatiquement. |
| O3 Exécution bash native | PARTIEL | Niveau 3 — docs ADK | Via tools custom. Pas de bash tool natif. |
| O4 Audit trail | OUI | Niveau 3 — [google.github.io/adk-docs](https://google.github.io/adk-docs) | Tamper-evident audit trails (documentation officielle). EU AI Act Article 12 compliance. PII detection. Apache 2.0. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — GitHub Google | Google maintenu. Multilangues (Python, TypeScript, Go, Java). Community meeting oct. 2025. Apache 2.0. |
| O6 Résilience boucle | OUI | Niveau 3 — [google.github.io/adk-docs/agents/workflow-agents/loop-agents/](https://google.github.io/adk-docs/agents/workflow-agents/loop-agents/) | `LoopAgent` avec `max_iterations` (ex : `LoopAgent(sub_agents=[...], max_iterations=5)`). Double mécanisme : hard limit `max_iterations` + early exit via `escalate=True` dans EventActions. Terminaison garantie — "always include a maxIterations limit" dans la documentation. |

**Tier** : 2
**Justification tier** : O1 PARTIEL (Vertex opinionated), O2 OUI (6 callbacks lifecycle + BasePlugin), O3 PARTIEL (pas de bash natif). 1/3 critères fondamentaux pleinement OUI (O2). O1 et O3 PARTIEL. Tier 2.

---

### C18 — Pydantic AI

| Critère | Score | Source | Citation / Justification |
|---------|-------|--------|--------------------------|
| O1 Portabilité provider | OUI | Niveau 3 — [ai.pydantic.dev](https://ai.pydantic.dev) ; [ai.pydantic.dev/capabilities/](https://ai.pydantic.dev/capabilities/) | OpenAI, Anthropic, Gemini, DeepSeek, Grok, Cohere, Mistral, Perplexity. Multi-provider natif. |
| O2 Mécanisation hooks/gates | OUI | Niveau 3 — [pydantic.dev/docs/ai/core-concepts/hooks/](https://pydantic.dev/docs/ai/core-concepts/hooks/) ; [github.com/pydantic/pydantic-ai/issues/4082](https://github.com/pydantic/pydantic-ai/issues/4082) | Hooks lifecycle complets : `before_model_request`, `before_tool_execute(tools=[...])`, `after_model_response`, `on_*_error`. Wrap hooks (`model_request` = setup/teardown). Composition multi-hooks. Error hooks raise-to-propagate/return-to-recover. |
| O3 Exécution bash native | PARTIEL | Niveau 3 — docs Pydantic AI | Via tools custom. Pas de bash tool natif. `pydantic-ai-harness` (GitHub) pour batteries. |
| O4 Audit trail | PARTIEL | Niveau 5 — [vstorm.co Pydantic Deep Agents](https://vstorm.co/open-source/pydantic-deep-agents-vs-langchain-deep-agents-which-python-ai-agent-framework-should-you-choose/) | Lifecycle hooks permettent logging custom. Pas de structured audit log natif built-in documenté officiellement. |
| O5 Maintenabilité | OUI (fort) | Niveau 3 — PyPI, GitHub pydantic | Pydantic = adoption massive (millions de projets Python). Maintenance active. MIT license. |
| O6 Résilience boucle | NON | Non documenté dans les sources officielles | Pas de max_turns documenté dans les sources officielles. Non documenté explicitement. |

**Tier** : 2
**Justification tier** : O1 OUI (8 providers natifs), O2 OUI (hooks lifecycle complets avec before_tool_execute spécifique par tool), O3 PARTIEL (pas de bash natif). 2/3 critères fondamentaux satisfaits. O3 lacune. Tier 2.

---

## Classement final Reviewer A

| Tier 1 | Tier 2 | Non recommandé |
|--------|--------|----------------|
| C1 Claude Code CLI | C6 Aider | C9 Roo Code (shutdown 15 mai 2026) |
| C2 Claude Agent SDK | C7 Goose (Block)* | |
| C3 OpenCode | C8 Cline* | |
| C4 Gemini CLI | C11 SWE-agent | |
| C5 Codex CLI | C12 mini-swe-agent | |
| C10 OpenHands | C13 Pi (pi-coding-agent) | |
| C15 OpenAI Agents SDK | C14 Continue.dev* | |
| | C16 AWS Strands | |
| | C17 Google ADK | |
| | C18 Pydantic AI | |

*Note : C7 Goose, C8 Cline, C14 Continue.dev satisfont les 3 critères fondamentaux (O1+O2+O3) mais présentent des lacunes sur O6 (résilience boucle) qui justifient le Tier 2 pour usage en pipeline autonome. Goose est Tier 2 car O2 passe par extensions MCP et non par hooks natifs intégrés. Si O6 n'est pas considéré discriminant pour le classement Tier 1/2, ces 3 candidats monteraient en Tier 1.

---

## Observations transversales Reviewer A

### Pattern 1 — CLI agents vs SDK frameworks
Les CLI agents (C1-C8, C13) satisfont systématiquement O3 (bash natif) mais varient sur O2 (hooks). Les SDK frameworks (C15-C18) excellent sur O2 mais manquent O3 natif — nécessitent implémentation custom.

### Pattern 2 — Portabilité provider
Meilleure portabilité : C3 OpenCode (75+ providers), C6 Aider (100+ via LiteLLM), C15 OpenAI Agents SDK (Chat Completions compatible). Couplage fort : C1/C2 (Anthropic), C4 (Google), C5 (OpenAI), C17 (Google Vertex).

### Pattern 3 — Audit trail
Seuls C4 (Gemini CLI avec OpenTelemetry natif), C10 (OpenHands event sourcing), C15 (OpenAI Agents SDK tracing natif), C17 (Google ADK EU AI Act compliance) ont un audit trail OUI complet. Les autres ont des approches partielles (hooks permettant logging custom mais sans built-in structuré).

### Pattern 4 — Résilience boucle
max_turns ou équivalent documenté : C1, C2, C3, C4, C5, C7, C10, C11, C12, C15, C17. Non documenté : C6, C8, C9, C13, C14, C16, C18. Lacune systématique sur les IDE-based agents et plusieurs SDK frameworks.

### Avertissement critique
C9 Roo Code est techniquement complet mais **non recommandable** : shutdown officiel confirmé le 15 mai 2026 (dans 17 jours). Toute évaluation positive serait trompeuse pour un déploiement.

---

*Extraction réalisée le 2026-04-28 par Reviewer A (isolé) — Kitchenham 2007 §6.4*
*Sources vérifiées : documentation officielle (Niveau 3), arXiv (Niveau 4), comparatifs structurés 2026 (Niveau 5)*
*WebSearch utilisé pour vérifier les lacunes identifiées dans le fichier de discovery*
