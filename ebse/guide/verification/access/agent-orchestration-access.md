# Agent C — Vérification Sources
## agent-orchestration-open-source

**Date** : 2026-04-28

---

## Claims vérifiés

### Claim 1 : OpenAI Agents SDK ShellTool ajouté avril 2026
- **Reviewer** : A et B (consensus)
- **Candidat** : C15 OpenAI Agents SDK
- **Claim** : "ShellTool natif ajouté (local + hosted sandbox) en avril 2026. O3 passe de PARTIEL à OUI." (Reviewer A) / "ShellTool natif introduit avril 2026 — avant cette date O3 aurait été PARTIEL." (Reviewer B)
- **Source citée** : https://openai.com/index/the-next-evolution-of-the-agents-sdk/ ; https://developers.openai.com/api/docs/guides/tools-shell
- **Vérification** : Annonce officielle OpenAI datée du 15 avril 2026 confirmée. L'article "The next evolution of the Agents SDK" mentionne explicitement le shell tool pour exécution locale et containers sandbox. La page developer docs `tools-shell` existe. Sandboxes E2B, Modal, Daytona, Vercel, Runloop, Blaxel, Cloudflare confirmés. Lancement Python first, TypeScript prévu.
- **Statut** : VERIFIE
- **Note** : Source officielle OpenAI (openai.com/index), date 15 avril 2026. Le changement de classement C15 Tier 2 → Tier 1 est fondé.

---

### Claim 2 : Cline CLI 2.0 headless mode pour CI/CD (février 2026)
- **Reviewer** : A et B (consensus)
- **Candidat** : C8 Cline
- **Claim** : "CLI 2.0 (fév. 2026) avec mode headless sans IDE pour CI/CD (`npm install -g cline`). O3 confirmé headless." (Reviewer A) / "CLI 2.0 (fev. 2026) : headless mode explicitement documenté, CI/CD sans IDE." (Reviewer B)
- **Source citée** : https://cline.bot/blog/announcing-cline-cli-2-0 ; https://docs.cline.bot/cline-cli/three-core-flows
- **Vérification** : Cline CLI 2.0 lancé le 13 février 2026, confirmé par le blog officiel cline.bot et Product Hunt (2026-02-14). Headless mode documenté officiellement sur docs.cline.bot/cline-cli/three-core-flows. Mode `-y / --yolo` stream vers stdout. `--json` pour output structuré CI/CD. GitHub Actions, GitLab CI, Jenkins confirmés dans la documentation. DeepWiki Cline confirme le headless mode.
- **Statut** : VERIFIE
- **Note** : Source officielle (cline.bot/blog + docs.cline.bot). Date 13 février 2026 confirmée. Le reclassement C8 Tier 2 → Tier 1 (Reviewer B) est fondé sur O3 OUI headless. Reviewer A maintient Tier 2 pour absence O6 — les deux positions sont défendables selon la pondération des critères.

---

### Claim 3 : Goose GOOSE_MAX_TURNS documenté (O6 OUI)
- **Reviewer** : A et B (consensus)
- **Candidat** : C7 Goose (Block)
- **Claim** : "`GOOSE_MAX_TURNS` (défaut : 1000) configuré dans `config.yaml`. Override runtime : `goose session --max-turns`, `goose run --max-turns`. Subagents : `GOOSE_SUBAGENT_MAX_TURNS` (défaut : 25)." (Reviewer A) / "Max Turns limit : maximum nombre de turns consécutifs sans user input (défaut : 1000). GOOSE_MAX_TURNS env var. --max-turns CLI override per-session." (Reviewer B)
- **Source citée** : https://block.github.io/goose/docs/guides/smart-context-management/ ; GitHub issue #6198
- **Vérification** : GitHub issue #6198 "feat: Add max_turns to recipe and subagent settings" confirmé sur github.com/block/goose. CLI docs confirment `--max-turns <NUMBER>` flag (défaut 1000). Release v1.30.0 (8 avril 2026) ajoute per-delegate max_turns override. `GOOSE_SUBAGENT_MAX_TURNS` confirmé (défaut 25). Recipe Reference Guide documentation confirmée sur block.github.io/goose.
- **Statut** : VERIFIE
- **Note** : Source officielle GitHub/docs Goose. Claim entièrement validé. Le défaut de 1000 turns est confirmé.

---

### Claim 4 : Roo Code shutdown officiel 15 mai 2026
- **Reviewer** : A et B (consensus)
- **Candidat** : C9 Roo Code
- **Claim** : "Shutdown annoncé le 21 avril 2026. Tous les produits Roo Code ferment le 15 mai 2026. Repo archivé." (Reviewer A) / "Shutdown annoncé le 15 mai 2026 — critère I4 non satisfait." (Reviewer B)
- **Source citée** : https://docs.roocode.com/sunset ; https://roocode.com/blog/sunsetting-roo-code-extension-cloud-and-router
- **Vérification** : docs.roocode.com/sunset confirmé accessible. Blog officiel roocode.com/blog/sunsetting confirmé. Date 15 mai 2026 pour fermeture de Roo Code Extension, Cloud et Router confirmée. Migration vers Kilo Code recommandée par l'équipe (blog.kilo.ai). The New Stack et d'autres sources tierces confirment.
- **Statut** : VERIFIE
- **Note** : Sources officielles (docs.roocode.com + roocode.com/blog). Exclusion/non-recommandation de C9 entièrement fondée.

---

### Claim 5 : OpenCode plugin hooks tool.execute.before / maxSessionTurns
- **Reviewer** : A et B (consensus)
- **Candidat** : C3 OpenCode
- **Claim (hooks)** : "Plugin system JavaScript/TypeScript avec hooks tool.execute.before (PreToolUse) et tool.execute.after (PostToolUse). Les hooks peuvent bloquer des opérations." (Reviewer B) / "Écosystème oh-my-opencode : 25+ hooks configurables." (Reviewer A)
- **Claim (maxSessionTurns)** : "`maxSessionTurns` configurables via settings." (Reviewer A + B)
- **Source citée** : https://opencode.ai/docs/plugins/ ; Docs OpenCode settings
- **Vérification hooks** : opencode.ai/docs/plugins/ confirmé. Hooks `tool.execute.before` et `tool.execute.after` confirmés dans la documentation officielle (GitHub gist johnlindquist, DEV Community). Bloquage possible via `throw` dans before hook confirmé. Oh-my-opencode (github.com/opensoft/oh-my-opencode) existe et inclut "40+ lifecycle hooks" (pas 25+ comme Reviewer A — chiffre sous-estimé). Ecosystem page officielle OpenCode confirmée.
- **Vérification maxSessionTurns** : Aucune mention de `maxSessionTurns` trouvée dans la documentation officielle opencode.ai/docs/config/. Les résultats de recherche ne retournent pas cette clé dans les docs officiels. La configuration opencode.ai/config.json n'est pas accessible directement. Le claim sur maxSessionTurns n'est pas corroboré par les sources officielles indexées.
- **Statut** : PARTIEL
- **Note** : Hooks tool.execute.before/after VERIFIE (source officielle). `maxSessionTurns` non trouvé dans la documentation officielle indexée — possible que le paramètre existe dans le schéma JSON de config mais non documenté publiquement ou nommé différemment. Ce claim affecte O6 pour C3 mais pas le classement Tier 1 (O6 non discriminant pour la définition stricte Tier 1).

---

### Claim 6 : Pydantic AI hooks before_tool_execute (O2 OUI)
- **Reviewer** : A et B (consensus)
- **Candidat** : C18 Pydantic AI
- **Claim** : "Hooks lifecycle complets : `before_model_request`, `before_tool_execute(tools=[...])`, `after_model_response`, `on_*_error`." (Reviewer A) / "Hooks instance avec @hooks.on.* decorators : before_tool_execute, after_tool_execute, on_tool_error." (Reviewer B)
- **Source citée** : https://pydantic.dev/docs/ai/core-concepts/hooks/
- **Vérification** : pydantic.dev/docs/ai/core-concepts/hooks/ confirmé accessible. `before_tool_execute` documenté officiellement avec paramètre `tools=[...]` pour filtrage par nom d'outil. `SkipToolExecution(result)` peut être levé depuis `before_tool_execute` pour bloquer l'exécution. Décorateurs `@hooks.on.*` confirmés. Error hooks confirmés.
- **Statut** : VERIFIE
- **Note** : Source officielle Pydantic. O2 OUI pour C18 est fondé.

---

### Claim 7 : Pydantic AI UsageLimits request_limit + tool_calls_limit (O6 OUI)
- **Reviewer** : B
- **Candidat** : C18 Pydantic AI
- **Claim** : "`request_limit` : borne le nombre de turns modèle. `tool_calls_limit` : cap le nombre d'exécutions d'outils. `UsageLimits` class." / "Double circuit-breaker (turns + tool calls)."
- **Source citée** : https://ai.pydantic.dev/api/agent/ ; https://ai.pydantic.dev/api/run/
- **Vérification** : ai.pydantic.dev/api/usage/ confirmé. `UsageLimits(request_limit=N, tool_calls_limit=M)` confirmé dans la documentation officielle. `UsageLimitExceeded` exception levée confirmée. Les deux paramètres sont bien documentés officiellement. Issue #843 et #2593 sur GitHub confirment l'existence de ces mécanismes.
- **Statut** : VERIFIE
- **Note** : Source officielle Pydantic AI. O6 OUI pour C18 (Reviewer B) est fondé — Reviewer A avait mis NON, ce qui est incorrect selon la documentation officielle.

---

### Claim 8 : SWE-agent trajectoires .traj JSON (O4 OUI — Reviewer B)
- **Reviewer** : B (diverge de Reviewer A qui met O4 NON)
- **Candidat** : C11 SWE-agent
- **Claim** : "Fichier .traj (JSON) : (thought, action, observation) turns. config.yaml généré. Inspector via `sweagent inspector`. Format v1.1.0 mis à jour." (Reviewer B)
- **Source citée** : https://swe-agent.com/latest/usage/trajectories/
- **Vérification** : swe-agent.com/latest/usage/trajectories/ confirmé accessible. Format `.traj` = fichier JSON documenté officiellement contenant les turns (thought, action, observation). `config.yaml` généré automatiquement avec chaque run. Commandes `swe-agent inspect` et `swe-agent inspector` (web) confirmées. GitHub SWE-agent/SWE-agent docs confirment. Format structuré natif documenté officiellement.
- **Statut** : VERIFIE
- **Note** : Source officielle (swe-agent.com). Reviewer B a raison : O4 = OUI (audit trail structuré natif JSON). Reviewer A qui mettait O4 NON est incorrect — les trajectoires .traj constituent bien un audit trail structuré documenté. Cette divergence impacte le classement C11 : Reviewer B Tier 1 est mieux fondé que Reviewer A Tier 2 sur ce point.

---

### Claim 9 : mini-swe-agent step_limit / cost_limit YAML (O6 OUI)
- **Reviewer** : A et B (consensus)
- **Candidat** : C12 mini-swe-agent
- **Claim** : "`step_limit : Maximum number of steps the agent can take. cost_limit : Stop after this cost is exceeded.` Configurables via YAML." (Reviewer B) / "Token budget + wall-clock timeout documentés." (Reviewer A)
- **Source citée** : https://mini-swe-agent.com/latest/advanced/yaml_configuration/ ; swebench.yaml
- **Vérification** : mini-swe-agent.com/latest/advanced/yaml_configuration/ confirmé. swebench.yaml dans le repo GitHub (SWE-agent/mini-swe-agent) confirmé avec `step_limit: 250` et `cost_limit: 3.`. CLI override `-c agent.step_limit=100` documenté. `MSWEA_GLOBAL_CALL_LIMIT` et `MSWEA_GLOBAL_COST_LIMIT` env vars confirmées. Paramètres dans section `agent:` du YAML confirmés.
- **Statut** : VERIFIE
- **Note** : Source officielle (mini-swe-agent.com + GitHub). O6 OUI confirmé. Note : Reviewer A citait "wall-clock timeout" — ce mécanisme existe bien dans l'arXiv (arxiv.org/html/2511.02230v1) mais les docs officielles actuelles documentent step_limit + cost_limit. Les deux mécanismes coexistent.

---

### Claim 10 : Codex CLI hooks config.toml PreToolUse/PostToolUse (O2 OUI)
- **Reviewer** : A et B (consensus)
- **Candidat** : C5 Codex CLI
- **Claim** : "Hooks configurables via `config.toml` : observent MCP tools, `apply_patch`, bash sessions. `--ask-for-approval` flag avec granularité per-command." (Reviewer A) / "Lifecycle hooks dans config.toml : PreToolUse, PostToolUse, PermissionRequest, SessionStart, UserPromptSubmit, Stop. PreToolUse peut intercepter Bash, apply_patch, et MCP tool calls." (Reviewer B)
- **Source citée** : https://developers.openai.com/codex/hooks ; https://developers.openai.com/codex/config-reference
- **Vérification** : developers.openai.com/codex/hooks confirmé accessible. Hooks `PreToolUse`, `PostToolUse`, `PermissionRequest`, `SessionStart`, `UserPromptSubmit`, `Stop` documentés officiellement. Interception `Bash`, `apply_patch`, et MCP tools par PreToolUse confirmée. Configuration via `[hooks]` section du `config.toml` ou `hooks.json` confirmée. Matcher regex (ex: `"^Bash$"`) confirmé.
- **Statut** : VERIFIE
- **Note** : Source officielle OpenAI (developers.openai.com/codex/hooks). O2 OUI pour C5 entièrement fondé. Reviewer B citait https://developers.openai.com/codex/hooks — URL confirmée.

---

### Claim 11 : Google ADK LoopAgent max_iterations + escalate=True (O6 OUI)
- **Reviewer** : A et B (consensus)
- **Candidat** : C17 Google ADK
- **Claim** : "`LoopAgent` avec `max_iterations` (ex : `LoopAgent(sub_agents=[...], max_iterations=5)`). Double mécanisme : hard limit `max_iterations` + early exit via `escalate=True` dans EventActions." (Reviewer A) / "LoopAgent : max_iterations configurables. Loop stoppe si max_iterations atteint OU si sub-agent retourne escalate=True." (Reviewer B)
- **Source citée** : https://google.github.io/adk-docs/agents/workflow-agents/loop-agents/
- **Vérification** : google.github.io/adk-docs/agents/workflow-agents/loop-agents/ confirmé accessible. `max_iterations` documenté officiellement. Terminaison si `max_iterations` atteint OU si un sub-agent retourne `escalate=True` via EventActions confirmé. Documentation prescrit "always include a maxIterations limit" — verbatim confirmé dans les sources indexées. GitHub adk-python source confirme le paramètre.
- **Statut** : VERIFIE
- **Note** : Source officielle Google ADK (google.github.io/adk-docs). O6 OUI confirmé pour C17.

---

### Claim 12 : Gemini CLI maxSessionTurns via settings.json (O6 OUI)
- **Reviewer** : A et B (consensus)
- **Candidat** : C4 Gemini CLI
- **Claim** : "`maxSessionTurns` configurable dans settings. Terminaison garantie." (Reviewer A) / "maxSessionTurns configurables documentés. GitHub issue #10723 confirmé." (Reviewer B)
- **Source citée** : Docs Gemini CLI, issue #10723
- **Vérification** : geminicli.com/docs/cli/settings/ confirmé. PR #3507 "Add support for specifying maxSessionTurns via the settings configuration" sur github.com/google-gemini/gemini-cli confirmé. Schéma JSON settings.schema.json référence le paramètre. Documentation geminicli.com/docs/reference/configuration/ confirmée. Comportement distinct en mode interactif (50 turns) vs non-interactif (unlimited par défaut). Gemini CLI configuration guide part 3 (Medium) confirme.
- **Statut** : VERIFIE
- **Note** : Source officielle (geminicli.com/docs + github.com/google-gemini/gemini-cli PR #3507). O6 OUI pour C4 fondé. L'issue citée est #10723 — non trouvé directement mais PR #3507 confirme la fonctionnalité. Reviewer B cite #10723 comme source GitHub issue — possible divergence de numérotation entre l'issue de demande et la PR d'implémentation.

---

## Résumé

| Statut | Nombre |
|--------|--------|
| VERIFIE | 11 |
| PARTIEL | 1 |
| INACCESSIBLE | 0 |
| FABRICATION | 0 |

---

## Fabrications détectées

**Aucune fabrication détectée** parmi les 12 claims vérifiés.

Le seul claim PARTIEL concerne `maxSessionTurns` d'OpenCode (Claim 5) : les hooks OpenCode sont vérifiés, mais le paramètre `maxSessionTurns` n'a pas pu être corroboré dans la documentation officielle indexée. Ce claim est suspect mais non réfuté — il pourrait être documenté dans le schéma JSON de configuration non indexé. Impact sur le classement : nul (O6 non discriminant pour Tier 1 sous la définition stricte O1+O2+O3).

---

## Divergences inter-reviewers notables

### C8 Cline : Tier 2 (A) vs Tier 1 (B)
- Reviewer A maintient Tier 2 pour absence O6 (pas de max_turns headless documenté)
- Reviewer B monte à Tier 1 car O1+O2+O3 satisfaits (définition stricte)
- **Agent C** : CLI 2.0 headless VERIFIE. O6 effectivement non documenté pour headless. Les deux positions sont défendables. La définition Tier 1 = O1+O2+O3 favorise Reviewer B.

### C11 SWE-agent : Tier 2 (A) vs Tier 1 (B)
- Reviewer A : O4 NON (pas de structured audit log documenté officiellement)
- Reviewer B : O4 OUI (trajectoires .traj JSON constituant un audit trail)
- **Agent C** : Trajectoires .traj VERIFIE sur swe-agent.com/latest/usage/trajectories/. Reviewer B a raison — O4 = OUI. Reviewer A est incorrect sur ce point.

### C18 Pydantic AI : O6 NON (A) vs O6 OUI (B)
- Reviewer A : "Pas de max_turns documenté dans les sources officielles."
- Reviewer B : UsageLimits avec request_limit + tool_calls_limit
- **Agent C** : UsageLimits VERIFIE sur ai.pydantic.dev. Reviewer B a raison — O6 = OUI via UsageLimits. Reviewer A est incorrect.

### C3 OpenCode : maxSessionTurns (O6)
- Les deux reviewers citent `maxSessionTurns` mais la source officielle n'a pas pu être confirmée par Agent C.
- **Impact** : Nul sur le classement (C3 est Tier 1 grâce à O1+O2+O3, O6 n'est pas discriminant).

---

## Recommandations pour le JSON final

Les claims suivants sont vérifiés avec sources officielles et peuvent être utilisés directement :

1. **C15 ShellTool avril 2026** → Source : openai.com/index/the-next-evolution-of-the-agents-sdk/ (15 avril 2026). O3 = OUI confirmé. Tier 1 justifié.

2. **C8 Cline CLI 2.0** → Source : cline.bot/blog/announcing-cline-cli-2-0 + docs.cline.bot/cline-cli/three-core-flows (13 février 2026). O3 headless = OUI confirmé.

3. **C7 Goose GOOSE_MAX_TURNS** → Source : github.com/block/goose issue #6198 + block.github.io/goose/docs. O6 = OUI confirmé (défaut 1000 turns).

4. **C9 Roo Code shutdown** → Source : docs.roocode.com/sunset + roocode.com/blog. Non-recommandation justifiée.

5. **C18 Pydantic AI UsageLimits** → Source : ai.pydantic.dev/api/usage/. O6 = OUI (Reviewer B correct, Reviewer A incorrect).

6. **C11 SWE-agent .traj** → Source : swe-agent.com/latest/usage/trajectories/. O4 = OUI (Reviewer B correct, Reviewer A incorrect).

7. **C5 Codex CLI hooks** → Source : developers.openai.com/codex/hooks. O2 = OUI confirmé avec PreToolUse/PostToolUse/PermissionRequest.

8. **C17 Google ADK LoopAgent** → Source : google.github.io/adk-docs/agents/workflow-agents/loop-agents/. O6 = OUI confirmé.

9. **C4 Gemini CLI maxSessionTurns** → Source : geminicli.com/docs/reference/configuration/ + PR #3507. O6 = OUI confirmé.

10. **C12 mini-swe-agent step_limit** → Source : mini-swe-agent.com/latest/advanced/yaml_configuration/ + swebench.yaml. O6 = OUI confirmé.

11. **C6 Pydantic AI before_tool_execute** → Source : pydantic.dev/docs/ai/core-concepts/hooks/. O2 = OUI confirmé.

**Claim à traiter avec précaution** :
- **C3 OpenCode maxSessionTurns** : Non corroboré dans la documentation officielle indexée. Utiliser avec réserve pour O6. N'affecte pas le classement Tier 1.

---

*Vérification réalisée le 2026-04-28 par Agent C — Kitchenham 2007 §6.4*
*12 claims vérifiés — 11 VERIFIE, 1 PARTIEL, 0 INACCESSIBLE, 0 FABRICATION*
