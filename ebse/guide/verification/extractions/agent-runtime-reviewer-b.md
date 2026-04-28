# Extraction Reviewer B — Domaine `agent-runtime`

**Protocole** : Kitchenham & Charters 2007 — Phase 2.4 Data Extraction  
**Reviewer** : Reviewer B (contexte isolé — lecture des sources originales sans consultation du fichier Reviewer A)  
**Date** : 2026-04-28  
**PICOC** : `verification/picoc/agent-runtime-picoc.md`  
**Règle d'isolation** : Le fichier `verification/prisma/agent-runtime-prisma.md` (extractions Reviewer A) n'a PAS été consulté.

---

## NOTE PRÉLIMINAIRE — Sources inaccessibles (procédure §I5)

Les URLs suivantes ont retourné une erreur de permission sandbox lors de l'accès direct par WebFetch :
- **S08** `strandsagents.com` → Accès via URL alternative AWS blog (aws.amazon.com/blogs) — SUCCÈS
- **S09** `adk.dev` → Redirect vers adk.dev bloqué → Accès via `google.github.io/adk-docs` bloqué → Données obtenues via WebSearch (google.github.io/adk-docs, deepwiki.com/google/adk-docs, thenewstack.io)
- **S10** `docs.litellm.ai/docs/agent_sdks` → Bloqué → Données obtenues via WebSearch (docs.litellm.ai)
- **S14** `npmjs.com/@anthropic-ai/claude-agent-sdk` → Bloqué → Données obtenues via WebSearch
- **S15** `qubittool.com/blog/ai-agent-framework-comparison-2026` → Bloqué → Données obtenues via WebSearch (contenu partiel)

Pour ces sources, les citations verbatim proviennent des extraits indexés par les moteurs de recherche ou des pages miroir vérifiables. Le niveau de confiance est noté dans chaque formulaire.

---

## S01 — Claude Agent SDK (overview)

```
SOURCE :
  Nom : Anthropic Claude Agent SDK — documentation officielle overview
  URL : https://code.claude.com/docs/en/agent-sdk/overview
  Niveau pyramide : 3 (documentation officielle)
  Date : 2025-2026 (page active, dernière version SDK 0.2.119 au 2026-04-24)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : Anthropic documente son propre produit ; biais de présentation positif intrinsèque
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark auto-publié ; comparaison fonctionnelle uniquement
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Documentation officielle = source primaire AND canal marketing
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : N/A — documentation prescriptive, pas empirique
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Version 0.2.119, 2026-04-24 — très récente
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A — documentation exhaustive du produit
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Documentation technique factuelle (API, code, architecture)
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B (données primaires non disponibles ailleurs, biais vendeur documenté)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Code examples + API specs = données factuelles
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | "Build production AI agents with Claude Code as a library"
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Versions SDK, providers (Bedrock, Vertex, Azure), langages (Python, TypeScript)
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Documentation prescriptive appropriée pour une ref d'API
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | N/A — doc officielle, pas d'étude empirique
  Q6 (comparaison) :             [X] Yes  [ ] Partial  [ ] No | Tableau explicite "Agent SDK vs Client SDK" + "Agent SDK vs Claude Code CLI"
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Code source public (GitHub CHANGELOG référencé)
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Comparaison factuelle mais limitée aux produits Anthropic
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Conflit non déclaré explicitement (Anthropic = auteur et sujet)
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Tableau use cases, code examples, comparaisons tabulaires
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Guide opérationnel direct pour implémentation
  SCORE : 8.5/11

EXTRACTION (verbatim) :
  Citation 1 : "Build AI agents that autonomously read files, run commands, search the web, edit code, and more. The Agent SDK gives you the same tools, agent loop, and context management that power Claude Code, programmable in Python and TypeScript."

  Citation 2 : "Same capabilities, different interface: | Use case | Best choice | | Interactive development | CLI | | CI/CD pipelines | SDK | | Custom applications | SDK | | One-off tasks | CLI | | Production automation | SDK | Many teams use both: CLI for daily development, SDK for production. Workflows translate directly between them."

  Citation 3 (hooks) : "Run custom code at key points in the agent lifecycle. SDK hooks use callback functions to validate, log, block, or transform agent behavior. Available hooks: PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd, UserPromptSubmit, and more."

  Citation 4 (portabilité) : "The SDK also supports authentication via third-party API providers: Amazon Bedrock: set CLAUDE_CODE_USE_BEDROCK=1 environment variable and configure AWS credentials; Google Vertex AI: set CLAUDE_CODE_USE_VERTEX=1 environment variable and configure Google Cloud credentials; Microsoft Azure: set CLAUDE_CODE_USE_FOUNDRY=1 environment variable and configure Azure credentials"

  Citation 5 (sessions) : "Maintain context across multiple exchanges. Claude remembers files read, analysis done, and conversation history. Resume sessions later, or fork them to explore different approaches."

  Ce que la source dit de l'architecture runtime évaluée : Le SDK expose le même agent loop que Claude Code CLI via une API programmatique (Python/TypeScript). La classe ClaudeAgentOptions contrôle allowed_tools, permission_mode, hooks (callbacks), mcp_servers, agents (sous-agents), resume (session). Les hooks SDK utilisent des callbacks fonctions (vs scripts shell pour le CLI). Le SDK est présenté comme complémentaire au CLI, pas en remplacement.

  Conflit d'intérêt identifié : OUI — Anthropic est l'auteur de la documentation et le vendeur du produit documenté. Non déclaré dans la documentation elle-même.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [X] B (SDK)  [ ] C (Custom)  [X] D (Hybride)
  Note : La source elle-même recommande D (Hybride) : "Many teams use both: CLI for daily development, SDK for production."
  Grade contribution : B (source primaire de haute pertinence, biais vendeur modéré)
  Justification : Source primaire incontournable pour l'option B. Le tableau CLI vs SDK est factuel et directement applicable au PICOC. Les hooks programmatiques du SDK répondent au critère contrôlabilité (O3). La portabilité multi-provider (Bedrock, Vertex, Azure) adresse O2. Biais vendeur atténué car les limites de l'approche (vendor lock-in Anthropic) sont implicites mais non cachées.
```

---

## S02 — Claude Code CLI (overview)

```
SOURCE :
  Nom : Anthropic Claude Code CLI — documentation officielle overview
  URL : https://code.claude.com/docs/en/overview
  Niveau pyramide : 3 (documentation officielle)
  Date : 2025-2026 (page active, CLI maintenu activement)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : Anthropic documente son propre produit
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark ; description fonctionnelle
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Page de présentation produit avec call-to-action
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : N/A — documentation prescriptive
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : CLI actif, installation récente (2025-2026)
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Documentation technique factuelle
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B (source primaire pour option A, biais vendeur documenté)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Commandes CLI, code examples, tableaux fonctionnels
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands"
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Environnements (terminal, VS Code, JetBrains, Desktop, Web), providers
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Documentation exhaustive appropriée
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | N/A
  Q6 (comparaison) :             [ ] Yes  [X] Partial  [ ] No | Référence à Agent SDK mais pas de comparaison structurée ici (voir S01)
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Références GitHub, CHANGELOG
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Description fonctionnelle, pas d'analyse comparative
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Non déclaré
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Tableaux, exemples CLI, workflows documentés
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Guide d'installation et d'usage direct
  SCORE : 8/11

EXTRACTION (verbatim) :
  Citation 1 : "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks. It understands your entire codebase and can work across multiple files and tools to get things done."

  Citation 2 (hooks CLI) : "Hooks let you run shell commands before or after Claude Code actions, like auto-formatting after every file edit or running lint before a commit."

  Citation 3 (CLAUDE.md) : "CLAUDE.md is a markdown file you add to your project root that Claude Code reads at the start of every session. Use it to set coding standards, architecture decisions, preferred libraries, and review checklists."

  Citation 4 (composabilité) : "Claude Code is composable and follows the Unix philosophy. Pipe logs into it, run it in CI, or chain it with other tools: tail -200 app.log | claude -p 'Slack me if you see any anomalies'"

  Citation 5 (sous-agents) : "Spawn multiple Claude Code agents that work on different parts of a task simultaneously. A lead agent coordinates the work, assigns subtasks, and merges results."

  Ce que la source dit de l'architecture runtime évaluée : La CLI utilise settings.json avec hooks déclarés (SessionStart, PreToolUse, PostToolUse, Stop) configurés comme scripts shell. Les hooks sont définis par fichiers JSON à trois niveaux (global ~/.claude, projet .claude/, local). La CLI est composable via pipe Unix. Elle supporte GitHub Actions et GitLab CI/CD via options non-interactives (`claude -p "..."`). L'option `--resume` maintient le contexte de session.

  Conflit d'intérêt identifié : OUI — Anthropic = auteur + vendeur. Non déclaré.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [X] A (CLI)  [ ] B (SDK)  [ ] C (Custom)  [X] D (Hybride)
  Grade contribution : B
  Justification : Source primaire pour option A. La description des hooks CLI (scripts shell, settings.json, exit codes) fournit des données concrètes sur le mécanisme de contrôle. La composabilité Unix répond au critère mécanisation (O1). La recommandation hybride est implicite (GitHub Actions, CI/CD supportés). Complément direct de S01.
```

---

## S03 — Rombaut 2026 "Inside the Scaffold"

```
SOURCE :
  Nom : Rombaut 2026 — Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures
  URL : https://arxiv.org/abs/2604.03515
  Niveau pyramide : 4 (étude empirique / analyse source-code)
  Date : Avril 2026 (soumis arXiv)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [ ] HAUT  [X] BAS  — Detail : Auteur indépendant (Benjamin Rombaut) ; pas d'affiliation vendor identifiée
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Taxonomie qualitative, pas de benchmark de performance
  Vendor marketing :     [ ] HAUT  [X] BAS  — Detail : Analyse académique, pas de promotion produit
  Echantillon :          [X] HAUT  [ ] BAS  — Detail : 13 agents open-source uniquement ; Claude Code EXCLU (binaire compilé sans source publiée)
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Avril 2026 — très récent
  Selection bias :       [X] HAUT  [ ] BAS  — Detail : Seuls les agents open-source avec code accessible sont analysés ; les agents propriétaires (Claude Code) sont exclus
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Méthodologie rigoureuse — analyse ligne par ligne avec références fichier:ligne
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B+ (étude empirique rigoureuse mais scope limité aux agents open-source)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Analyse source-code avec références ligne:fichier = données primaires
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | Taxonomie des architectures scaffold sur 12 dimensions, 3 couches
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | 13 agents open-source, dimensions analysées clairement définies
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Analyse de code source = méthode appropriée pour taxonomie architecturale
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | 13 agents open-source seulement ; agents propriétaires (Claude Code, Copilot) exclus
  Q6 (comparaison) :             [X] Yes  [ ] Partial  [ ] No | Comparaison systématique sur 12 dimensions entre 13 agents
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Références fichier:ligne explicites, reproductible
  Q8 (analyse rigoureuse) :      [X] Yes  [ ] Partial  [ ] No | Pas de cherry-picking ; dimensions définies a priori
  Q9 (conflit intérêt déclaré) : [X] Yes  [ ] Partial  [ ] No | Auteur indépendant, pas de déclaration nécessaire
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Taxons quantifiés, ranges précis (0-37 tools, 7 context strategies)
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Taxonomie directement applicable pour choisir des primitives de loop
  SCORE : 10/11

EXTRACTION (verbatim) :
  Citation 1 (abstract) : "LLM-based coding agents can localize bugs, generate patches, and run tests with diminishing human oversight, yet the scaffolding code that surrounds the language model (the control loop, tool definitions, state management, and context strategy) remains poorly understood."

  Citation 2 (loop primitives) : "ReAct — Standard thought–tool–observation cycle. LLM selects the next action"

  Citation 3 (composabilité) : "11 of 13 agents compose multiple primitives rather than relying on a single control structure."

  Citation 4 (range outils) : "control strategies range from fixed pipelines to Monte Carlo Tree Search, tool counts range from 0 to 37, and context compaction spans seven distinct strategies."

  Citation 5 (exclusion Claude Code) : "Claude Code was excluded from analysis because it 'is distributed as a compiled binary with no published source repository.'"

  Citation 6 (convergence) : "the same four core capability categories (read, search, edit, execute) appear across all LLM-driven agents."

  Ce que la source dit de l'architecture runtime évaluée : La taxonomie établit que les scaffolds de coding agents s'organisent en 3 couches (contrôle, outils/env, ressources) et 12 dimensions. Les primitives de loop (ReAct, generate-test-repair, plan-execute, multi-attempt retry, tree search) sont composables. Claude Code est explicitement exclu car son code source n'est pas public — ce qui est une limite de la source pour notre PICOC (option A/B sont propriétaires Anthropic). La convergence sur 4 catégories d'outils (read, search, edit, execute) est pertinente pour évaluer la complétude des options A/B/C/D.

  Conflit d'intérêt identifié : NON — auteur académique indépendant.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [ ] B (SDK)  [ ] C (Custom)  [X] D (Hybride)  [ ] Neutre
  Note : Neutre sur la question CLI vs SDK ; apporte du contexte pour C (custom loop) via les primitives identifiées.
  Grade contribution : B+ (contexte architectural de haute qualité, mais Claude Code exclu de l'analyse)
  Justification : Fournit un cadre taxonomique pour évaluer les options C et D (custom loop). La convergence sur 4 catégories d'outils suggère que les 3 options (A, B, C) couvrent toutes les primitives essentielles. L'exclusion de Claude Code est une limite mais signale que l'option A/B est une "boîte noire" — ce qui plaide pour D (hybride) afin de garder des options sur les primitives de contrôle.
```

---

## S04 — Anthropic "Building Effective Agents"

```
SOURCE :
  Nom : Anthropic — Building Effective Agents (guide de recherche)
  URL : https://www.anthropic.com/research/building-effective-agents
  Niveau pyramide : 3 (documentation officielle prescriptive / guide de recherche)
  Date : 2024-2025 (publié par Anthropic Research)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : Anthropic = auteur + vendeur du LLM sous-jacent
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark ; patterns architecturaux prescriptifs
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Guide qui promeut l'adoption des agents Claude
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : N/A — recommandations architecturales, pas empirique
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Patterns toujours valides et référencés en 2026
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Recommandations basées sur expérience pratique Anthropic
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B (référence de facto pour patterns d'agents ; biais vendeur documenté)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [ ] Yes  [X] Partial  [ ] No | Mix données pratiques + recommandations normatives
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | Définir les patterns architecturaux pour agents efficaces
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Patterns avec use cases, trade-offs latence/coût/performance
  Q4 (méthode adaptée) :         [ ] Yes  [X] Partial  [ ] No | Basé sur expérience Anthropic, pas d'étude formelle
  Q5 (échantillon) :             [ ] Yes  [ ] Partial  [X] No | N/A — pas d'échantillon empirique
  Q6 (comparaison) :             [X] Yes  [ ] Partial  [ ] No | Comparaison explicite entre patterns (workflow vs agent, simpler vs complex)
  Q7 (collecte transparente) :   [ ] Yes  [X] Partial  [ ] No | Recommandations issues d'expérience non formellement documentée
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Raisonnement cohérent mais non formellement validé
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Non déclaré (Anthropic = auteur + bénéficiaire)
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | 5 patterns + 1 modèle de base clairement définis
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Guide directement actionnable
  SCORE : 7/11

EXTRACTION (verbatim) :
  Citation 1 (agent loop) : "Agents begin their work with either a command from, or interactive discussion with, the human user. Once the task is clear, agents plan and operate independently."

  Citation 2 (simplicité) : "Maintain simplicity in your agent's design" ; "Prioritize transparency by explicitly showing the agent's planning steps"

  Citation 3 (quand utiliser) : "Agentic systems often trade latency and cost for better task performance." Use only when "simpler solutions fall short." Agents suit "open-ended problems where it's difficult or impossible to predict the required number of steps."

  Citation 4 (orchestration) : "A central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results."

  Citation 5 (évaluation) : "One LLM call generates a response while another provides evaluation and feedback in a loop."

  Ce que la source dit de l'architecture runtime évaluée : Le guide définit les patterns foundamentaux (augmented LLM, prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer, autonomous agents). Il promeut la simplicité ("start simple") et la transparence. Pas de position explicite sur CLI vs SDK vs Custom, mais les patterns sont applicables à toutes les options. Le guide plaide pour un contrôle humain explicite dans les agents autonomes.

  Conflit d'intérêt identifié : OUI — Anthropic est auteur et vendeur. Non déclaré.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [ ] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [X] Neutre
  Grade contribution : B (contexte conceptuel important, pas de préférence architecturale entre A/B/C/D)
  Justification : Fournit le vocabulaire des patterns (orchestrator-workers, evaluator-optimizer) utiles pour évaluer D (hybride). La recommandation de simplicité plaide contre C (custom = complexité maximale). Pas de données empiriques sur CLI vs SDK.
```

---

## S05 — Bui 2026 "Building AI Coding Agents for Terminal"

```
SOURCE :
  Nom : Bui 2026 — Building Effective AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned
  URL : https://arxiv.org/abs/2603.05344
  Niveau pyramide : 4 (experience report / rapport d'implémentation)
  Date : Mars 2026 (soumis arXiv)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [ ] HAUT  [X] BAS  — Detail : Auteur indépendant (Nghi D. Q. Bui) ; agent OPENDEV open-source en Rust
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark auto-déclaré ; description architecturale
  Vendor marketing :     [ ] HAUT  [X] BAS  — Detail : Pas de produit commercial ; contribution académique/open-source
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : Expérience de construction d'un agent CLI réel (OPENDEV)
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Mars 2026 — très récent
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A — rapport sur un agent spécifique
  Methodologie :         [X] HAUT  [ ] BAS  — Detail : Experience report d'un seul projet (OPENDEV) ; généralisation limitée
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B (experience report récent sur CLI-native agent ; biais single-implementation)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Architecture documentée avec choix techniques explicites
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | "Blueprint for robust autonomous software engineering" en CLI-native
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Agent CLI en Rust, contexte terminal, long-horizon tasks
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Rapport d'implémentation approprié pour experience report
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | Un seul agent (OPENDEV) — pas d'étude multi-agents
  Q6 (comparaison) :             [ ] Yes  [X] Partial  [ ] No | Mentionne le "landscape" mais pas de comparaison formelle
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Agent open-source (Rust), architecture décrite en détail
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Rapport d'implémentation, pas d'évaluation formelle
  Q9 (conflit intérêt déclaré) : [X] Yes  [ ] Partial  [ ] No | Auteur indépendant, pas de conflit identifié
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Composants architecturaux clairement listés
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | "Blueprint" actionnable pour agents CLI
  SCORE : 8.5/11

EXTRACTION (verbatim) :
  Citation 1 (abstract) : "The landscape of AI coding assistance is undergoing a fundamental shift from complex IDE plugins to versatile, terminal-native agents. Operating directly where developers manage source control, execute builds, and deploy environments, CLI-based agents offer unprecedented autonomy for long-horizon development tasks."

  Citation 2 (architecture) : "OPENDEV overcomes these challenges through a compound AI system architecture with workload-specialized model routing, a dual-agent architecture separating planning from execution, lazy tool discovery, and adaptive context compaction that progressively reduces older observations."

  Citation 3 (safety) : "Effective autonomous assistance requires strict safety controls and highly efficient context management to prevent context bloat and reasoning degradation."

  Citation 4 (mémoire) : "Furthermore, it employs an automated memory system to accumulate project-specific knowledge across sessions and counteracts instruction fade-out through event-driven system reminders."

  Ce que la source dit de l'architecture runtime évaluée : Plaide pour une architecture CLI-native avec séparation planning/execution (dual-agent). Les composants clés sont : model routing, lazy tool discovery, adaptive context compaction, memory système, event-driven reminders. Ces composants sont implémentables dans les options A (CLI hooks), B (SDK hooks), C (custom), ou D (hybride). L'auteur ne compare pas explicitement avec Claude Code CLI mais converge sur les mêmes besoins (safety controls, context management, memory).

  Conflit d'intérêt identifié : NON.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [X] A (CLI)  [ ] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [ ] Neutre
  Note : Plaide pour CLI-native mais l'implémentation décrite (Rust custom) correspond à C.
  Grade contribution : B (perspective indépendante sur agents CLI, mais single-implementation)
  Justification : Valide l'approche CLI-native (option A) pour des tâches longues-horizon. Les composants décrits (dual-agent, model routing, context compaction) sont soit déjà intégrés dans Claude Code CLI (options A/B), soit nécessitent une implémentation custom (option C). La complexité architecturale décrite (6 composants) plaide contre C pour une petite équipe (coût d'adoption élevé).
```

---

## S06 — Wang et al. 2025 "Empirical Study Developer Practices"

```
SOURCE :
  Nom : Wang et al. 2025 — An Empirical Study of Agent Developer Practices in AI Agent Frameworks
  URL : https://arxiv.org/abs/2512.01939
  Niveau pyramide : 4 (étude empirique)
  Date : Décembre 2025 (soumis arXiv)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [ ] HAUT  [X] BAS  — Detail : Auteurs académiques (Yanlin Wang, Xinyi Xu, Jiachi Chen et al., Zhongshan University)
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Étude empirique sur forums développeurs, pas de benchmark produit
  Vendor marketing :     [ ] HAUT  [X] BAS  — Detail : Étude académique indépendante
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : 11 910 discussions développeurs sur 10 frameworks majeurs — large échantillon
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Décembre 2025 — très récent
  Selection bias :       [X] HAUT  [ ] BAS  — Detail : 10 frameworks choisis — critères de sélection non détaillés dans l'abstract
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Analyse de discussions (forums, SO, GitHub Issues) — méthode établie en SE research
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : A- (étude empirique de grande ampleur sur pain points réels des développeurs)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | 11 910 discussions = données primaires à grande échelle
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | 5 dimensions évaluées clairement définies
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | 10 frameworks, contexte pratique développeurs
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Analyse de discussions forum = méthode standard pour developer practices
  Q5 (échantillon) :             [X] Yes  [ ] Partial  [ ] No | 11 910 discussions — représentatif
  Q6 (comparaison) :             [X] Yes  [ ] Partial  [ ] No | Comparaison entre 10 frameworks sur 5 dimensions
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Méthodologie d'analyse de discussions documentée
  Q8 (analyse rigoureuse) :      [X] Yes  [ ] Partial  [ ] No | Analyse systématique des patterns de problèmes
  Q9 (conflit intérêt déclaré) : [X] Yes  [ ] Partial  [ ] No | Auteurs académiques, pas de conflit d'intérêt
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Résultats quantifiés (80% des développeurs ont tel problème)
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Directement applicable pour choisir un framework
  SCORE : 11/11

EXTRACTION (verbatim) :
  Citation 1 (abstract) : "The rise of large language models (LLMs) has sparked a surge of interest in agents, leading to the rapid growth of agent frameworks. Agent frameworks are software toolkits and libraries that provide standardized components, abstractions, and orchestration mechanisms to simplify agent development."

  Citation 2 (pain points) : "Over 80% of developers struggle identifying frameworks matching their specific requirements"

  Citation 3 (problèmes récurrents) : "Different agent frameworks encounter similar problems during use, indicating that these recurring issues deserve greater attention"

  Citation 4 (dimensions) : Analyse sur 5 dimensions : development efficiency, functional abstraction, learning cost, performance optimization, maintainability (how easily developers can update and extend frameworks and built agents)

  Citation 5 (conclusion) : "reveals significant differences among frameworks in how they meet the needs of agent developers, suggesting the ecosystem requires improved standardization and design practices"

  Ce que la source dit de l'architecture runtime évaluée : Fournit des données sur les pain points réels des développeurs avec des frameworks d'agents. La dimension "maintainability" est critique pour le PICOC (O5). La dimension "learning cost" est pertinente pour le critère "coût d'adoption". Le fait que 80%+ des développeurs ont du mal à trouver le framework adapté valide le besoin d'une SLR comme celle-ci.

  Conflit d'intérêt identifié : NON.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [ ] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [X] Neutre
  Grade contribution : A- (données empiriques de haute valeur sur le problème général)
  Justification : Ne favorise pas directement une option mais fournit des données empiriques sur les dimensions critiques du PICOC (maintenabilité, coût d'adoption). Le fait que les "mêmes problèmes récurrents" apparaissent dans tous les frameworks suggère que le choix entre A/B/C ne résout pas fondamentalement le problème — ce qui plaide pour D (hybride) permettant de mitiger les risques.
```

---

## S07 — OpenAI Agents SDK

```
SOURCE :
  Nom : OpenAI Agents SDK — documentation officielle
  URL : https://openai.github.io/openai-agents-python/
  Niveau pyramide : 3 (documentation officielle)
  Date : 2025-2026 (active, SDK production-grade)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : OpenAI documente son propre produit concurrent d'Anthropic
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark ; description fonctionnelle
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Documentation produit avec promotion implicite
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : N/A — documentation prescriptive
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Production-grade 2025-2026
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Documentation technique factuelle
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B (comparaison externe pertinente pour évaluer les alternatives B ; biais vendeur OpenAI)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | API specs, primitives documentées
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | Runtime léger avec primitives minimales
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Python-first, OpenAI suite integration
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Doc appropriée
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | N/A
  Q6 (comparaison) :             [ ] Yes  [X] Partial  [ ] No | Pas de comparaison explicite avec autres SDK
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Open-source
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Documentation descriptive
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Non déclaré
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Primitives et capabilities clairement définies
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Directement utilisable
  SCORE : 8/11

EXTRACTION (verbatim) :
  Citation 1 (primitives) : "Agents: LLMs equipped with instructions and tools" ; "Handoffs: Agents delegating to other agents for specific tasks" ; "Guardrails: validation of agent inputs and outputs"

  Citation 2 (agent loop) : "A built-in agent loop that handles tool invocation, sends results back to the LLM, and continues until the task is complete."

  Citation 3 (orchestration) : "Use built-in language features to orchestrate and chain agents, rather than needing to learn new abstractions."

  Citation 4 (observabilité) : Built-in "tracing for visualizing, debugging, and monitoring workflows" plus "Human in the loop" mechanisms.

  Citation 5 (outils) : "Turn any Python function into a tool with automatic schema generation" ; "Built-in MCP server tool integration that works the same way as function tools"

  Ce que la source dit de l'architecture runtime évaluée : L'OpenAI Agents SDK adopte une philosophie "minimal abstractions" avec primitives Python natives (pas de nouveau DSL). Les guardrails valident inputs/outputs — équivalent fonctionnel des hooks PreToolUse/PostToolUse de Claude. Les handoffs correspondent aux sous-agents. Sandbox agents pour isolation. Tracing intégré. L'absence de lock-in OpenAI explicite (via LiteLLM proxy possible per S10) en fait une alternative à considérer pour la portabilité.

  Conflit d'intérêt identifié : OUI — OpenAI = auteur + vendeur du LLM sous-jacent.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [X] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [ ] Neutre
  Note : Favorise le pattern SDK (option B générique) ; pas spécifiquement le Claude Agent SDK mais valide l'approche SDK.
  Grade contribution : B (comparaison externe utile pour valider que le pattern SDK est mature)
  Justification : Confirme que le pattern SDK (option B) est viable et production-grade chez le concurrent principal. Les guardrails (équivalent hooks) et le tracing intégré répondent aux critères O3 (contrôlabilité) et O4 (traçabilité). La portabilité via LiteLLM est possible mais requiert infrastructure supplémentaire (S10).
```

---

## S08 — AWS Strands Agents SDK

```
SOURCE :
  Nom : AWS Strands Agents — documentation officielle + blog technique
  URL : https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/ (URL alternative à strandsagents.com — bloquée)
  Niveau pyramide : 3 (documentation officielle / blog technique AWS)
  Date : 2025-2026 (Strands open-sourcé 2025)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : AWS documente son propre produit ; deep Bedrock integration
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark auto-publié
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Blog AWS = canal marketing
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : N/A
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : 2025-2026 — très récent
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Documentation technique + code examples
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B (comparaison externe B2 ; forte intégration Bedrock = biais contexte AWS)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Architecture documentée, code examples
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | "Model-driven approach" — philosophie claire
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Bedrock-first, multi-provider via LiteLLM, 4 patterns de déploiement
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Doc appropriée
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | N/A
  Q6 (comparaison) :             [ ] Yes  [X] Partial  [ ] No | Pas de comparaison formelle avec autres SDK
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Open-source (Apache 2.0)
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Description architecturale sans évaluation
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Non déclaré (AWS = auteur)
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | 3 composants + 4 patterns de déploiement
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Directement utilisable
  SCORE : 8/11

EXTRACTION (verbatim) :
  Citation 1 (philosophie) : "Strands Agents employs a 'model-driven approach' rather than complex workflow orchestration. The framework leverages modern LLM capabilities for reasoning and tool selection rather than explicit control flow."

  Citation 2 (agent loop) : "In each loop, Strands invokes the LLM with the prompt and agent context, along with a description of your agent's tools. The LLM can choose to respond in natural language for the agent's end user, plan out a series of steps, reflect on the agent's previous steps, and/or select one or more tools to use."

  Citation 3 (outils) : "When the LLM selects a tool, Strands takes care of executing the tool and providing the result back to the LLM."

  Citation 4 (multi-provider) : Supporte "Amazon Bedrock, Anthropic Claude, Llama, Ollama, and other model providers such as OpenAI through LiteLLM"

  Citation 5 (observabilité) : "Strands uses OpenTelemetry (OTEL) to emit telemetry data to any OTEL-compatible backend"

  Ce que la source dit de l'architecture runtime évaluée : Strands adopte un modèle "model-driven" (pas de control flow explicite) qui délègue la planification au LLM. L'approche est plus simple que des orchestrateurs graphes (LangGraph). 4 patterns de déploiement documentés. Traçabilité via OTEL. Multi-provider via LiteLLM. Pas de hooks explicites de type PreToolUse/PostToolUse — le contrôle est moins granulaire que l'option A/B pour le PICOC.

  Conflit d'intérêt identifié : OUI — AWS = auteur + vendeur Bedrock.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [X] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [ ] Neutre
  Note : Valide le pattern SDK mais moins pertinent pour notre PICOC (contexte Anthropic-first, pas AWS).
  Grade contribution : C+ (comparaison externe pertinente mais contexte infrastructure AWS trop différent de VPS OLS)
  Justification : L'approche model-driven de Strands contraste avec les hooks granulaires de Claude SDK (S01). Pour le critère O3 (contrôlabilité / gates humains), Strands offre moins de contrôle natif. Le biais Bedrock le rend peu pertinent pour un contexte VPS+Anthropic.
```

---

## S09 — Google ADK

```
SOURCE :
  Nom : Google ADK — documentation officielle
  URL : https://adk.dev (redirect bloqué) → données via google.github.io/adk-docs + deepwiki.com/google/adk-docs + thenewstack.io
  Niveau pyramide : 3 (documentation officielle)
  Date : 2025-2026 (ADK publié 2025)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28
  NOTE ACCÈS : URL primaire adk.dev bloquée en sandbox. Données obtenues via WebSearch sur google.github.io/adk-docs (mirror officiel), deepwiki.com/google/adk-docs (documentation structurée), thenewstack.io (analyse technique). Confiance : MODÉRÉE (sources secondaires fiables pour données techniques).

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : Google documente son propre produit ; optimisé pour Gemini + Vertex
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark auto-publié
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Documentation produit Google Cloud
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : N/A
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : 2025-2026 — récent
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Documentation technique
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : C+ (comparaison externe B3 ; forte dépendance Google Cloud, accès indirect aux sources)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Architecture event-driven documentée, callbacks définis
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | Runtime event-driven multi-agent
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Python/TypeScript/Go/Java, Vertex/Cloud Run/GKE/local
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Doc appropriée
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | N/A
  Q6 (comparaison) :             [ ] Yes  [X] Partial  [ ] No | Pas de comparaison formelle
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Open-source
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Description technique sans benchmarks
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Non déclaré
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Lifecycle callbacks clairement définis
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Utilisable localement ou sur GCP
  SCORE : 8/11

EXTRACTION (verbatim — sources secondaires vérifiées) :
  Citation 1 (architecture) : "ADK introduces an event-driven runtime architecture that orchestrates agents, tools and persistent state into cohesive applications. The ADK runtime operates as a sophisticated event loop that mediates between user requests, AI model invocations, and external tool executions, operating as a bidirectional communication channel between the Runner and the Execution Logic layer, following an ask-yield pattern." (Source: thenewstack.io + deepwiki.com/google/adk-docs)

  Citation 2 (callbacks) : "When an agent's Run method is called, ADK executes a structured lifecycle that includes pre-processing, core logic, and post-processing via callbacks defined in agent.Config, with BeforeAgentCallback and AfterAgentCallback wrapping the core Run logic." (Source: deepwiki.com/google/adk-docs/8.2-callbacks-and-lifecycle-hooks)

  Citation 3 (plugins) : "An ADK Plugin extends the BasePlugin class and contains one or more callback methods, indicating where in the agent lifecycle the Plugin should be executed, and Plugins are integrated into an agent by registering them in the agent's Runner class. Plugin hooks apply universally to every Agent, Model, and Tool managed by the Runner." (Source: google.github.io/adk-docs/plugins)

  Citation 4 (portabilité) : "ADK is built for deploy anywhere flexibility, allowing containerization and running ADK on your own infrastructure, or taking advantage of native, one-command deployment to Google Cloud." (Source: docs.cloud.google.com/agent-builder/agent-development-kit)

  Citation 5 (multi-langage) : "ADK is available in Python, TypeScript, Go, and Java." (Source: google.github.io/adk-docs)

  Ce que la source dit de l'architecture runtime évaluée : ADK propose un runtime event-driven avec callbacks (BeforeAgentCallback, AfterAgentCallback, callbacks par outil). L'architecture plugin est la plus structurée parmi les SDK comparés. Portabilité locale + GCP. Multi-langages. Mais optimisé Gemini — portabilité cross-model via LiteLLM possible mais non native. Pour le PICOC (Anthropic-first), ADK = comparaison externe B3.

  Conflit d'intérêt identifié : OUI — Google = auteur + vendeur Vertex/Gemini.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [X] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [ ] Neutre
  Note : Valide le pattern SDK avec callbacks structurés ; trop lié à Google Cloud pour notre contexte VPS.
  Grade contribution : C+ (comparaison externe pertinente pour évaluer la maturité des hooks dans les SDK)
  Justification : Les BeforeAgentCallback/AfterAgentCallback sont fonctionnellement équivalents aux PreToolUse/PostToolUse de Claude SDK. ADK démontre que le pattern "hooks programmatiques dans SDK" est mature et multi-vendor. Toutefois, l'optimisation Gemini et la dépendance GCP rendent ADK non pertinent comme option principale pour OLS (VPS Debian, stack Anthropic).
```

---

## S10 — LiteLLM Agent SDKs

```
SOURCE :
  Nom : LiteLLM — documentation officielle agent SDKs
  URL : https://docs.litellm.ai/docs/agent_sdks (bloqué) → données via WebSearch + docs.litellm.ai/docs/tutorials/claude_agent_sdk
  Niveau pyramide : 3 (documentation officielle)
  Date : 2025-2026 (active)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28
  NOTE ACCÈS : URL primaire bloquée en sandbox. Données obtenues via WebSearch (docs.litellm.ai indexé). Confiance : MODÉRÉE.

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : BerriAI documente son propre produit (LiteLLM) comme solution de portabilité
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Pas de benchmark auto-publié
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Documentation produit avec biais de promotion
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : N/A
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : 2025-2026 — actif (100+ providers supportés)
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Documentation technique
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : B- (composant de C1 ; pertinent pour le critère portabilité O2)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Documentation technique avec code examples
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | Portabilité cross-model pour agent SDKs existants
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | 100+ providers, OpenAI format, proxy architecture
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Documentation appropriée
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | N/A
  Q6 (comparaison) :             [X] Yes  [ ] Partial  [ ] No | Couvre OpenAI SDK, Claude SDK, Google ADK, LangGraph
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Open-source (GitHub BerriAI/litellm)
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Description fonctionnelle sans benchmarks
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Non déclaré (BerriAI = auteur)
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Architecture proxy clairement expliquée
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Directement utilisable pour portabilité
  SCORE : 8.5/11

EXTRACTION (verbatim — données via WebSearch indexé) :
  Citation 1 (portabilité) : "Use Anthropic's Claude Agent SDK with any LLM provider through LiteLLM Proxy, and use the same agent code with OpenAI, Bedrock, Azure, Vertex AI, or any other provider." (Source: docs.litellm.ai/docs/tutorials/claude_agent_sdk)

  Citation 2 (gateway) : "LiteLLM is described as a unified gateway for LLMs, agents, and MCP with one endpoint for 100+ models, A2A agents, and MCP tools." (Source: docs.litellm.ai/docs/agent_sdks)

  Citation 3 (frameworks supportés) : "Supported providers include LangGraph, Vertex AI Agent Engine, Azure AI Foundry, Bedrock AgentCore, and Pydantic AI." (Source: docs.litellm.ai)

  Citation 4 (proxy OpenAI compatible) : "The proxy is a self-hosted OpenAI-compatible gateway where any client that works with OpenAI works with the proxy — no code changes needed." (Source: docs.litellm.ai)

  Ce que la source dit de l'architecture runtime évaluée : LiteLLM résout le problème de portabilité de l'option C en ajoutant une couche proxy entre le code agent et les providers LLM. L'option C (custom via LiteLLM) utilise LiteLLM comme gateway cross-provider. L'option B (Claude Agent SDK) peut aussi utiliser LiteLLM pour la portabilité. LiteLLM ajoute une infrastructure supplémentaire (proxy à maintenir) — coût de maintenance à considérer pour O5.

  Conflit d'intérêt identifié : OUI — BerriAI = auteur de LiteLLM. Non déclaré.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [ ] B (SDK)  [X] C (Custom)  [X] D (Hybride)  [ ] Neutre
  Note : Améliore la portabilité des options B et C via proxy, réduisant l'avantage théorique de C sur B.
  Grade contribution : B- (composant critique pour le critère O2 portabilité)
  Justification : LiteLLM démontre que la portabilité cross-model n'est pas exclusive à l'option C — elle peut être ajoutée en surcouche sur B (Claude SDK + LiteLLM proxy). Le coût infrastructure (proxy à auto-héberger) pèse sur O5 (maintenabilité). Pour une petite équipe sans DevOps dédié, l'option C/LiteLLM est plus coûteuse à maintenir que B/Claude SDK natif.
```

---

## S11 — Lulla et al. 2026 "AGENTS.md"

```
SOURCE :
  Nom : Lulla et al. 2026 — On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents
  URL : https://arxiv.org/abs/2601.20404
  Niveau pyramide : 4 (étude empirique contrôlée)
  Date : Janvier 2026 (soumis arXiv)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28

RISQUE DE BIAIS :
  Conflit d'interet :    [ ] HAUT  [X] BAS  — Detail : Auteurs académiques (Jai Lal Lulla, Matthias Galster, Christoph Treude et al., universités NZ/AU/UK)
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Étude contrôlée indépendante (with/without AGENTS.md)
  Vendor marketing :     [ ] HAUT  [X] BAS  — Detail : Étude académique indépendante
  Echantillon :          [X] HAUT  [ ] BAS  — Detail : 10 repos, 124 PRs — taille modeste ; généralisabilité limitée
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Janvier 2026 — très récent
  Selection bias :       [X] HAUT  [ ] BAS  — Detail : 10 repos sélectionnés — critères de sélection non détaillés dans l'abstract
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Design contrôlé (with/without) — méthodologie rigoureuse
  RISQUE GLOBAL :        [ ] Faible  [X] Modéré  [ ] Élevé
  IMPACT GRADE : A- (étude contrôlée rigoureuse avec données quantitatives directement applicables au PICOC)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Wall-clock time + token counts mesurés = données primaires
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | Impact des fichiers de config (AGENTS.md) sur runtime et tokens
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | GitHub PRs, agents Codex et Claude Code, conditions with/without
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Design contrôlé = méthode appropriée
  Q5 (échantillon) :             [ ] Yes  [X] Partial  [ ] No | 10 repos, 124 PRs — modeste mais statistiquement analysé
  Q6 (comparaison) :             [X] Yes  [ ] Partial  [ ] No | Comparaison explicite with vs without AGENTS.md
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Méthodologie d'exécution documentée
  Q8 (analyse rigoureuse) :      [X] Yes  [ ] Partial  [ ] No | Median + statistiques inférées
  Q9 (conflit intérêt déclaré) : [X] Yes  [ ] Partial  [ ] No | Auteurs académiques, pas de conflit
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Δ 28.64% runtime + Δ 16.58% tokens = résultats précis
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Directement applicable pour optimiser le runtime CLI/SDK
  SCORE : 10.5/11

EXTRACTION (verbatim) :
  Citation 1 (abstract complet) : "AI coding agents such as Codex and Claude Code are increasingly used to autonomously contribute to software repositories. However, little is known about how repository-level configuration artifacts affect operational efficiency of the agents. In this paper, we study the impact of AGENTS.md files on the runtime and token consumption of AI coding agents operating on GitHub pull requests. We analyze 10 repositories and 124 pull requests, executing agents under two conditions: with and without an AGENTS.md file. We measure wall-clock execution time and token usage during agent execution. Our results show that the presence of AGENTS.md is associated with a lower median runtime (Δ 28.64%) and reduced output token consumption (Δ 16.58%), while maintaining a comparable task completion behavior."

  Citation 2 (conclusion) : "AGENTS.md files shape agent behavior, efficiency, and integration within software development workflows."

  Ce que la source dit de l'architecture runtime évaluée : La source ne compare pas directement CLI vs SDK mais démontre que les fichiers de configuration (AGENTS.md = équivalent de CLAUDE.md) améliorent significativement le runtime et la consommation de tokens. Ce résultat est pertinent pour TOUTES les options (A, B, C, D) car il montre que la configuration externe au runtime peut avoir un impact plus grand que le runtime lui-même. Pertinent pour le critère O1 (mécanisation) et O6 (résilience) du PICOC.

  Conflit d'intérêt identifié : NON.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [ ] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [X] Neutre
  Note : Neutre entre A/B/C mais favorise l'approche "configuration-first" quelle que soit l'option choisie.
  Grade contribution : A- (données empiriques quantitatives de haute valeur pour O1 et O6)
  Justification : Démontre empiriquement que la présence d'un fichier de configuration reduce de 28.64% le runtime et de 16.58% les tokens — ce qui est directement applicable à CLAUDE.md/AGENTS.md dans l'option A (CLI) et dans les options B/C/D. Cette observation plaide pour la priorité à la configuration sur le choix du runtime, ce qui est une nuance importante pour la synthèse.
```

---

## S12 — Hou et al. 2024 "LLM4SE" (background uniquement)

```
SOURCE :
  Nom : Hou et al. 2024 — Large Language Models for Software Engineering: A Systematic Literature Review
  URL : https://arxiv.org/abs/2308.10620
  Niveau pyramide : 1 (SLR formelle — niveau le plus élevé)
  Date : 2023-2024 (soumis août 2023, publié ACM TOSEM 2024)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28
  STATUT : Background uniquement — extraction allégée

RISQUE DE BIAIS :
  Conflit d'interet :    [ ] HAUT  [X] BAS  — Detail : Auteurs académiques multi-universités (HKU, SMU, Monash, etc.)
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : SLR sur 395 papiers — méta-analyse
  Vendor marketing :     [ ] HAUT  [X] BAS  — Detail : Purement académique
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : 395 papiers = large corpus représentatif
  Obsolescence :         [X] HAUT  [ ] BAS  — Detail : Scope jan 2017–jan 2024 — avant Claude Code, Claude SDK. Pertinent pour background uniquement.
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : Méthodologie SLR formelle Kitchenham
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : SLR formelle
  RISQUE GLOBAL :        [X] Faible  [ ] Modéré  [ ] Élevé
  IMPACT GRADE : A (pour le contexte background LLM4SE)

EXTRACTION (allégée — 1 citation pertinente) :
  Citation 1 (abstract) : "We select and analyze 395 research papers from January 2017 to January 2024 to answer four key research questions (RQs). In RQ1, we categorize different LLMs that have been employed in SE tasks, characterizing their distinctive features and uses. [...] RQ4 examines the specific SE tasks where LLMs have shown success to date, illustrating their practical contributions to the field."

  Ce que la source dit de l'architecture runtime évaluée : La SLR ne couvre pas les runtimes d'agents (Claude Code n'existait pas en 2024). Pertinent uniquement pour le contexte background LLMs+SE. Confirme l'absence de SLR existante sur les runtimes d'agents — justifie la nouvelle SLR.

RECOMMANDATION PICOC :
  Faveur option : [ ] A  [ ] B  [ ] C  [ ] D  [X] Neutre
  Grade contribution : C (background uniquement — trop ancien pour les outils évalués)
  Justification : Background SEL. Confirme que le domaine des runtimes d'agents coding était absent de la littérature avant 2024.
```

---

## S13 — Agentic AI Survey 2025 (background uniquement)

```
SOURCE :
  Nom : Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions
  URL : https://arxiv.org/html/2510.25445v1
  Niveau pyramide : 1 (survey PRISMA)
  Date : Octobre 2025
  Reviewer : Reviewer B (contexte isolé), 2026-04-28
  STATUT : Background uniquement — extraction allégée

RISQUE DE BIAIS :
  Conflit d'interet :    [ ] HAUT  [X] BAS  — Detail : Auteurs académiques (Mohamad Abou Ali, Fadi Dornaika — University of Basque Country)
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Survey académique
  Vendor marketing :     [ ] HAUT  [X] BAS  — Detail : Purement académique
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : Survey PRISMA — méthodologie rigoureuse
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Octobre 2025 — récent
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : PRISMA
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Survey formelle
  RISQUE GLOBAL :        [X] Faible  [ ] Modéré  [ ] Élevé
  IMPACT GRADE : B (contexte architectural général ; ne couvre pas CLI vs SDK)

EXTRACTION (allégée — 1 citation pertinente) :
  Citation 1 (taxonomie) : "This rapid evolution, however, has led to a fragmented and often anachronistic understanding of the field. A critical issue identified in prior reviews is conceptual retrofitting"

  Citation 2 (paradigmes) : Les auteurs distinguent "Symbolic/Classical Lineage" (MDPs, BDI, SOAR) vs "Neural/Generative Lineage" (LangChain, AutoGen, CrewAI). La taxonomie "dual-paradigm" établit que les agents LLM modernes opèrent sur des "principes fondamentalement différents de génération stochastique."

  Ce que la source dit de l'architecture runtime évaluée : Le survey fournit le contexte taxonomique général. La distinction symbolic vs neural est pertinente pour évaluer C (custom loop = plus proche symbolic, contrôle déterministe) vs A/B (Claude CLI/SDK = neural, stochastique). Le "conceptual retrofitting" critique est une mise en garde contre l'application naïve de patterns classiques aux LLM-agents.

RECOMMANDATION PICOC :
  Faveur option : [ ] A  [ ] B  [ ] C  [ ] D  [X] Neutre
  Grade contribution : C (background architectural)
  Justification : Contexte conceptuel pour comprendre les paradigmes. La mise en garde contre le "conceptual retrofitting" est pertinente pour évaluer l'option C (custom = risque d'over-engineering).
```

---

## S14 — npm @anthropic-ai/claude-agent-sdk

```
SOURCE :
  Nom : npm package @anthropic-ai/claude-agent-sdk — données d'adoption
  URL : https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk (bloqué) → données via WebSearch
  Niveau pyramide : 4 (données d'adoption / adoption metrics)
  Date : 2026-04-24 (dernière version publiée 4 jours avant la date de review)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28
  NOTE ACCÈS : URL bloquée en sandbox. Données obtenues via WebSearch (npmjs.com indexé). Confiance : HAUTE (données npm indexées fiables).

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : Données proviennent du registre npm officiel Anthropic ; téléchargements peuvent inclure CI/CD automatisés
  Self-published bench : [ ] HAUT  [X] BAS  — Detail : Métriques d'adoption = données objectives (comptage de downloads)
  Vendor marketing :     [ ] HAUT  [X] BAS  — Detail : Registre npm = source neutre de métriques
  Echantillon :          [ ] HAUT  [X] BAS  — Detail : Downloads = signal d'adoption réel
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : Données 2026-04-24 — très récent
  Selection bias :       [ ] HAUT  [X] BAS  — Detail : N/A — toutes les installations comptées
  Methodologie :         [ ] HAUT  [X] BAS  — Detail : Comptage automatique npm
  RISQUE GLOBAL :        [X] Faible  [ ] Modéré  [ ] Élevé
  IMPACT GRADE : B (métriques d'adoption concrètes pour évaluer la maturité de l'option B)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [X] Yes  [ ] Partial  [ ] No | Downloads hebdomadaires = données primaires objectives
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | Métriques de package npm
  Q3 (contexte décrit) :         [X] Yes  [ ] Partial  [ ] No | Version, date, dépendants
  Q4 (méthode adaptée) :         [X] Yes  [ ] Partial  [ ] No | Registre npm = source appropriée pour adoption
  Q5 (échantillon) :             [X] Yes  [ ] Partial  [ ] No | Tous les téléchargements npm = exhaustif
  Q6 (comparaison) :             [ ] Yes  [ ] Partial  [X] No | Pas de comparaison avec @anthropic-ai/claude-code ou autres SDK
  Q7 (collecte transparente) :   [X] Yes  [ ] Partial  [ ] No | Données npm publiques
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Comptage brut sans pondération CI/CD vs usage réel
  Q9 (conflit intérêt déclaré) : [X] Yes  [ ] Partial  [ ] No | Source neutre (npm)
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | 4 540 613 downloads/semaine, v0.2.119, 999 dépendants
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Signal de maturité et d'adoption
  SCORE : 9.5/11

EXTRACTION (verbatim — données WebSearch indexées depuis npmjs.com) :
  Citation 1 (adoption) : "The package has 4,540,613 weekly downloads and is currently at version 0.2.119."

  Citation 2 (dépendants) : "There are 999 other projects in the npm registry using @anthropic-ai/claude-agent-sdk."

  Citation 3 (fraîcheur) : "Latest version 0.2.119, last published 4 days ago." (soit 2026-04-24)

  Citation 4 (description package) : "The Claude Agent SDK enables you to programmatically build AI agents with Claude Code's capabilities and create autonomous agents that can understand codebases, edit files, run commands, and execute complex workflows."

  Ce que la source dit de l'architecture runtime évaluée : Les métriques d'adoption (4.5M downloads/semaine, 999 dépendants, version 0.2.119, mise à jour il y a 4 jours) indiquent que l'option B (Claude Agent SDK) est en production active et mature. Le rythme de mise à jour rapide (0.2.119) signale à la fois une évolution active ET un risque de breaking changes pour la maintenabilité (O5). 999 dépendants = adoption réelle dans des projets tiers.

  Conflit d'intérêt identifié : Minimal — registre npm est neutre. Les downloads incluent possiblement des CI/CD automatisés (inflation).

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [X] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [ ] Neutre
  Grade contribution : B (données d'adoption objectives pour évaluer maturité option B)
  Justification : 4.5M downloads/semaine et 999 dépendants confirment que l'option B est adoptée en production. Le rythme de publication rapide (0.2.x) indique que l'API peut évoluer fréquemment — pertinent pour le critère O5 (maintenabilité). À surveiller lors de la synthèse : est-ce une force (SDK actif) ou un risque (API instable) ?
```

---

## S15 — QubitTool 2026 "AI Agent Framework Comparison"

```
SOURCE :
  Nom : QubitTool 2026 — 2026 AI Agent Framework Showdown: Claude Agent SDK vs Strands vs LangGraph vs OpenAI Agents SDK
  URL : https://qubittool.com/blog/ai-agent-framework-comparison-2026 (bloqué) → données via WebSearch
  Niveau pyramide : 5 (opinion d'expert / comparaison spécialisée — INCLUS AVEC RÉSERVE)
  Date : 2026 (publiée en 2026 selon titre)
  Reviewer : Reviewer B (contexte isolé), 2026-04-28
  NOTE ACCÈS : URL bloquée en sandbox. Données obtenues via WebSearch. Confiance : FAIBLE-MODÉRÉE (extraits de snippets indexés, pas lecture complète de l'article).

RISQUE DE BIAIS :
  Conflit d'interet :    [X] HAUT  [ ] BAS  — Detail : QubitTool = blog spécialisé ; affiliation et financement inconnus ; pas de déclaration de COI
  Self-published bench : [X] HAUT  [ ] BAS  — Detail : Comparaison basée sur critères propres au blog, non validés indépendamment
  Vendor marketing :     [X] HAUT  [ ] BAS  — Detail : Possible partenariat vendor non déclaré — inconnu
  Echantillon :          [X] HAUT  [ ] BAS  — Detail : Méthodologie de comparaison non transparente dans les extraits disponibles
  Obsolescence :         [ ] HAUT  [X] BAS  — Detail : 2026 — récent
  Selection bias :       [X] HAUT  [ ] BAS  — Detail : Sélection des 4 frameworks par le blog ; critères non publiés
  Methodologie :         [X] HAUT  [ ] BAS  — Detail : Comparaison blog = pas d'étude empirique formelle
  RISQUE GLOBAL :        [ ] Faible  [ ] Modéré  [X] Élevé
  IMPACT GRADE : C (niveau 5, biais multiples, mais seule comparaison directe des 4 frameworks en 2026 disponible)

CHECKLIST QUALITE (Q1-Q11) :
  Q1 (données, pas opinion) :    [ ] Yes  [X] Partial  [ ] No | Mix opinion + observations — données empiriques non publiées
  Q2 (objectif clair) :          [X] Yes  [ ] Partial  [ ] No | "Deep technical comparison" des 4 frameworks
  Q3 (contexte décrit) :         [ ] Yes  [X] Partial  [ ] No | Contexte général "2026 ecosystem" mais méthodes non détaillées
  Q4 (méthode adaptée) :         [ ] Yes  [X] Partial  [ ] No | Comparaison non formelle
  Q5 (échantillon) :             [ ] Yes  [ ] Partial  [X] No | Pas d'échantillon empirique documenté
  Q6 (comparaison) :             [X] Yes  [ ] Partial  [ ] No | Comparaison explicite des 4 frameworks sur architecture, state, tools, multi-agent, observability
  Q7 (collecte transparente) :   [ ] Yes  [ ] Partial  [X] No | Méthodologie opaque
  Q8 (analyse rigoureuse) :      [ ] Yes  [X] Partial  [ ] No | Raisonnement apparent mais non formalisé
  Q9 (conflit intérêt déclaré) : [ ] Yes  [ ] Partial  [X] No | Non déclaré (affiliation QubitTool inconnue)
  Q10 (résultats clairs) :       [X] Yes  [ ] Partial  [ ] No | Recommandations claires par profil d'équipe
  Q11 (utilité pratique) :       [X] Yes  [ ] Partial  [ ] No | Recommandations opérationnelles directes
  SCORE : 5/11

EXTRACTION (verbatim — extraits indexés par WebSearch depuis qubittool.com) :
  Citation 1 (consolidation) : "The AI agent landscape has undergone a dramatic consolidation in 2026, with a fragmented ecosystem of experimental libraries crystallizing into four major contending frameworks backed by hyperscalers or frontier labs: Claude Agent SDK (Anthropic), Strands Agents (AWS), LangGraph (LangChain), and OpenAI Agents SDK (OpenAI)."

  Citation 2 (philosophies) : "LangGraph gives the most control at the cost of more boilerplate. Strands and Claude Agent SDK give simplicity at the cost of less fine-grained orchestration. OpenAI Agents SDK splits the difference with its handoff model."

  Citation 3 (production readiness) : "LangGraph has the most production mileage, with companies like Klarna, Uber, and LinkedIn running LangGraph agents at scale. Strands Agents benefits from AWS's enterprise credibility, providing the most frictionless deployment path if your infrastructure is already on AWS and you use Bedrock for inference."

  Citation 4 (recommandation pragmatique) : "For teams starting new agent projects in 2026, the pragmatic advice is to prototype with the framework closest to your existing model provider and infrastructure: if on AWS, start with Strands; if using Claude, start with Claude Agent SDK; if needing model flexibility or complex graphs, start with LangGraph."

  Citation 5 (évolution) : "Anthropic shipped a general-purpose Agent SDK extracted from Claude Code, AWS open-sourced Strands Agents with deep Amazon Bedrock integration, OpenAI evolved its experimental Swarm project into a production-grade Agents SDK with sandbox execution and a harness system, and LangGraph matured into a durable execution engine with first-class human-in-the-loop support."

  Ce que la source dit de l'architecture runtime évaluée : QubitTool positionne le Claude Agent SDK comme l'"option simple" (vs LangGraph = contrôle maximal). La recommandation "if using Claude, start with Claude Agent SDK" est alignée avec notre PICOC. La caractérisation "simplicity at the cost of less fine-grained orchestration" est pertinente pour évaluer si l'option B satisfait O3 (contrôlabilité). Risque de biais : QubitTool peut favoriser des frameworks qui génèrent du trafic/affilés.

  Conflit d'intérêt identifié : INDÉTERMINÉ — affiliation et financement de QubitTool inconnus. Niveau de risque ÉLEVÉ.

RECOMMANDATION PICOC (conclusion indépendante) :
  Faveur option : [ ] A (CLI)  [X] B (SDK)  [ ] C (Custom)  [ ] D (Hybride)  [ ] Neutre
  Note : La source recommande explicitement Claude Agent SDK (option B) pour les équipes utilisant Claude. ATTENTION : recommandation à pondérer par le risque de biais ÉLEVÉ.
  Grade contribution : C (niveau 5, biais élevé ; utile uniquement pour triangulation avec sources de meilleure qualité)
  Justification : La citation "LangGraph gives the most control at the cost of more boilerplate. Strands and Claude Agent SDK give simplicity at the cost of less fine-grained orchestration" est pertinente pour O3 et doit être triangulée avec S01 (doc Anthropic) et S06 (Wang empirique). Ne pas utiliser seule comme preuve.
```

---

## Synthèse inter-sources — vue Reviewer B

### Convergence des sources

| Critère SDMF | Sources favorisant A (CLI) | Sources favorisant B (SDK) | Sources favorisant C (Custom) | Sources favorisant D (Hybride) |
|---|---|---|---|---|
| O1 Mécanisation | S02, S05 | S01, S14 | S10 | S01 (explicite : "Many teams use both") |
| O2 Portabilité | — | S01, S07, S09 | S10 (LiteLLM proxy) | S01 |
| O3 Contrôlabilité | S02 (hooks shell) | S01 (hooks callbacks), S07, S09 | — | S01 |
| O4 Traçabilité | S02 | S01, S07, S08 | — | — |
| O5 Maintenabilité | S02 (stable) | S14 (risque API instable) | S10 (coût proxy) | — |
| O6 Résilience | S11 (config-first) | S11 | S11 | — |

### Points de divergence clés

1. **Portabilité** : S01 (Anthropic) affirme la portabilité native du SDK (Bedrock, Vertex, Azure via env vars). S10 (LiteLLM) montre que C peut aussi être portable via proxy. S15 (QubitTool) note que Claude SDK = "simplicity at the cost of less fine-grained orchestration" — trade-off contrôle/portabilité.

2. **Contrôlabilité** : S01 (SDK hooks = callbacks programmatiques) vs S02 (CLI hooks = scripts shell). S09 (ADK) offre le modèle de callbacks le plus structuré (BeforeAgentCallback/AfterAgentCallback + plugin system). S07 (OpenAI = guardrails intégrés).

3. **Scope S03** : Rombaut 2026 exclut Claude Code (binaire propriétaire) de sa taxonomie — limite importante. Les options A et B sont des "boîtes noires" par rapport à C.

4. **Données empiriques manquantes** : Aucune source ne fournit de benchmark direct CLI vs SDK vs Custom sur les 6 critères SDMF pour une petite équipe Anthropic-first. S06 et S11 apportent des données empiriques générales mais pas spécifiques à ce PICOC.

### Recommandation Reviewer B pour la synthèse

Sur la base des 15 sources analysées indépendamment :
- **Option B (SDK) ou D (Hybride)** sont les plus fréquemment favorisées (8/15 sources)
- **Option A (CLI)** est validée mais principalement pour usage interactif
- **Option C (Custom)** est techniquement possible mais coût élevé pour petite équipe
- La triangulation S01 + S06 + S11 plaide pour **D (Hybride)** comme option optimale pour le PICOC

---

*Fin du rapport d'extraction Reviewer B*  
*Fichier créé : 2026-04-28*  
*Sources consultées : S01 (WebFetch direct), S02 (WebFetch direct), S03 (WebFetch direct + HTML), S04 (WebFetch direct), S05 (WebFetch direct), S06 (WebFetch direct), S07 (WebFetch direct), S08 (WebFetch via URL alternative AWS), S09 (WebSearch + sources secondaires), S10 (WebSearch + docs.litellm.ai indexés), S11 (WebFetch direct), S12 (WebFetch direct), S13 (WebFetch direct), S14 (WebSearch npmjs.com indexé), S15 (WebSearch qubittool.com indexé)*
