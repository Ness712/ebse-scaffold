# DARE Analysis — agent-orchestration-open-source

**Date** : 2026-04-28
**Analyste** : DARE Agent
**Protocole** : Kitchenham 2007 §5.1

---

## PICOC de référence

| Element | Valeur |
|---------|--------|
| P | Tout projet nécessitant un runtime d'agent IA autonome pour des pipelines de développement logiciel (génération de code, tests, refactoring, CI/CD). Taille d'équipe variable, stack variable. |
| I | Runtimes d'agent open-source ou à API ouverte |
| C | Entre les candidats retenus |
| O1 | Portabilité provider — support multi-LLM sans couplage vendor |
| O2 | Mécanisation hooks/gates — callbacks before/after exécution d'outil, configurables programmatiquement |
| O3 | Exécution native de commandes (bash/shell/fichiers) avec mécanisme d'approbation/rejet par commande individuelle |
| O4 | Audit trail — logging structuré des actions agent |
| O5 | Maintenabilité — adoption communautaire, licence, coût opérationnel |
| O6 | Résilience boucle — terminaison garantie (max_turns / circuit-breaker) |
| Co | Production 2024-2026, pipelines autonomes de développement logiciel |

---

## Décisions évaluées

### 1. agent-runtime

**Fichier** : `decisions/agent-runtime.json`
**Question** : Pour une équipe solo/petite (1-5 personnes) utilisant un guide EBSE externalisé et une supervision PO minimale, quelle architecture de runtime d'agent IA (CLI+hooks, Agent SDK, Custom/LiteLLM, ou Hybride) offre la meilleure conformité aux 6 critères SDMF ?

| Critère | Score | Justification |
|---------|-------|---------------|
| D1 | 0.5/1 | Critères de sélection des 15 sources non formalisés en IC/EC explicites. Les exclusions ne sont pas documentées (sources_excluded = 0 — aucune exclusion, ce qui est anormalement bas pour un corpus de 15 sources sans filtre déclaré). Les critères PICOC définissent la population mais les règles d'inclusion/exclusion au sens bibliométrique sont absentes. |
| D2 | 0.5/1 | Bases consultées partiellement documentées dans le DARE agent-runtime (WebSearch proxy arXiv, docs officielles Anthropic/OpenAI/AWS/Google ADK). npm comme source de métriques d'adoption (S14). Pas de trace d'interrogation IEEE/ACM, PyPI, ou bases de données académiques formelles. La fenêtre 2024-2026 est déclarée mais la stratégie de mots-clés n'apparaît pas dans le JSON de décision lui-même. |
| D3 | 1/1 | Synthèse complète : 5 principes universels documentés (P1-P5) avec sources, niveaux de preuve et grades. Tableau comparatif CLI/SDK/Custom/Hybride avec `variants`. Convergence inter-sources explicitement analysée (9/15 sources favorisent B ou D). |
| D4 | 0.5/1 | Évaluation qualité présente : chaque source a `pyramid_level`, `bias_risk`, `quality_score`, `agent_c_status` (VERIFIE/PARTIEL). Kappa inter-reviewers documenté (0.811). Cependant l'application de la pyramide des preuves est hétérogène — 7/15 sources sont des docs fournisseur niveau 3 avec conflit d'intérêt reconnu mais score pyramid identique aux sources académiques indépendantes. |
| D5 | 1/1 | Détails individuels complets pour chacune des 15 sources : auteur, URL, année, pyramid_level, bias_risk, quality_score, agent_c_status, key_finding, notes de vérification. Citations verbatim horodatées. |
| **Total** | **3.5/5** | |

**Couvre le PICOC ?** : PARTIEL

- **Contrainte open-source** : NON couverte. La décision porte sur CLI/SDK/Custom/Hybride mais la dimension "open-source ou à API ouverte" n'est pas un critère d'inclusion explicite. Claude Code CLI et Claude Agent SDK sont des outils propriétaires. Les alternatives open-source comparables (OpenHands, Aider, Goose, Continue) sont absentes du comparatif. Le JSON cite OpenAI Agents SDK, AWS Strands, Google ADK uniquement comme "comparaisons externes B1/B2/B3", non comme options primaires du PICOC.
- **O1 (portabilité provider)** : PARTIEL. Traitée via LiteLLM (option C) et Bedrock/Vertex/Azure pour le SDK (option B), mais sous l'angle "peut-on y ajouter de la portabilité" plutôt que "quelle solution est la plus portable par conception". Les runtimes véritablement multi-provider (Aider, OpenHands, Continue) ne sont pas dans la comparaison.
- **O2 (hooks/gates before/after outil)** : OUI, critère central du comparatif (SDMF mécanisation). Les hooks PreToolUse/PostToolUse/Stop/SessionStart sont documentés et comparés entre options. P1 en fait un principe de niveau BONNE_PRATIQUE.
- **O3 (shell + approve/deny par commande)** : PARTIEL. Le mécanisme d'exécution bash est mentionné (critère O1 mécanisation SDMF) mais l'approbation/rejet **par commande individuelle** n'est pas traité comme outcome distinct. La décision traite l'approbation comme un hook de contrôle global, pas comme une granularité commande-par-commande avec allow-list/deny-list configurable programmatiquement.
- **O4 (audit trail)** : OUI, traçabilité = critère O4 SDMF, mentionné dans le PICOC interne.
- **O5 (maintenabilité)** : OUI, critère O5 SDMF, documenté avec données adoption npm (S14 : 4 540 613 dl/semaine) et analyse de maintenabilité option par option.
- **O6 (résilience boucle)** : OUI, critère O6 SDMF, documenté (max_turns, max_budget_usd, canal d'interruption).
- **Population** : NON universelle. Contrainte explicite "équipes solo/petites (1-5 personnes)" dans le PICOC interne. Notre PICOC cible "taille d'équipe variable, stack variable" — périmètre plus large.

---

### 2. ai-agent-framework-vs-prebuilt

**Fichier** : `decisions/ai-agent-framework-vs-prebuilt.json`
**Question** : Pour une équipe qui délègue tout ou partie du développement logiciel à l'IA, quel type d'outil agentique maximise l'autonomie d'exécution : framework d'orchestration custom, système pré-construit autonome, ou système pré-construit configurable ?

| Critère | Score | Justification |
|---------|-------|---------------|
| D1 | 1/1 | Critères d'exclusion explicitement documentés dans `methodology.exclusion_criteria` avec justification par source (Stack Overflow Survey exclu pour biais auto-déclaratif non contrôlé ; Humbatova exclu pour pertinence uniquement méthodologique). sources_excluded = 2 sur 21 évalués. Critères d'inclusion implicites mais reconstructibles depuis le PICOC. |
| D2 | 0.5/1 | Aucune stratégie de recherche formelle documentée dans le JSON (absence de champs `search_strategy`, `databases`, `keywords`). Les 19 sources incluses couvrent arXiv et IEEE/ACM mais la méthode de découverte n'est pas traçable. Pas de trace de recherche sur npm, PyPI, GitHub. |
| D3 | 1/1 | Synthèse structurée en 7 principes universels (P1-P7) avec level et confidence par principe. Tableau variants (3 catégories). Méta-analyse qualitative sur direction et magnitude (23-31% vs 12-18% vs 16-22%). Convergence inter-reviewers documentée (kappa 0.79). |
| D4 | 0.5/1 | Chaque source a un `pyramid_level` explicite. Mention du seul niveau 2 avec protocole pré-enregistré (METR). Conflits d'intérêt documentés (Anthropic, METR). Contamination SWE-bench identifiée et quantifiée (15-25% d'inflation). Cependant pas de grille d'évaluation formelle par source — la qualité est évaluée narrativement dans `grade_rationale`, pas dans un tableau structuré source par source. |
| D5 | 1/1 | Détails individuels complets pour 19 sources incluses et 2 exclues : auteur, année, pyramid_level, inclus/exclu, key_finding, notes de divergence inter-reviewers. Sources exclues documentées avec motif. |
| **Total** | **4/5** | |

**Couvre le PICOC ?** : NON pour notre PICOC spécifique

- **Contrainte open-source** : NON couverte. La décision compare les catégories fonctionnelles (custom/autonome/configurable) sans critère d'ouverture de la licence ou de l'API. Les outils cités comme "configurables" (Claude Code, Cursor) sont propriétaires. Les outils "autonomes" incluent OpenHands (open-source) mais sans que l'open-source soit un axe d'analyse.
- **O1 (portabilité provider)** : NON. La portabilité multi-LLM n'est pas un outcome de cette décision. La question est "quelle catégorie d'outil" pas "quelle portabilité provider". Le lock-in fournisseur est mentionné dans les tradeoffs mais n'est pas évalué systématiquement entre catégories.
- **O2 (hooks/gates before/after outil)** : PARTIEL. Les hooks sont mentionnés comme mécanisme d'optimisation des systèmes configurables (P2 : "hooks de workflow") mais ne sont pas évalués en tant qu'outcome distinct. La granularité before/after par outil individuel vs hooks globaux n'est pas traitée.
- **O3 (shell + approve/deny par commande)** : NON. L'exécution de commandes shell avec approbation granulaire par commande n'est pas un outcome de cette décision. La "contrôlabilité" est mesurée via le "contrôle perçu" (P6 : 4.1/5 vs 2.8/5) sans détail sur les mécanismes techniques.
- **O4 (audit trail)** : NON. Le logging structuré des actions agent n'est pas un outcome évalué.
- **O5 (maintenabilité)** : OUI. La maintenabilité opérationnelle est l'outcome central de P3 (60-80% temps, 80% abandon frameworks custom).
- **O6 (résilience boucle)** : NON. max_turns et circuit-breaker ne sont pas des outcomes de cette décision.
- **Population** : PARTIELLE. "Solo founders à grandes organisations" — plus universelle que agent-runtime, mais centrée sur le contexte de délégation. La taille d'équipe variable est couverte, mais la stack variable et les pipelines CI/CD autonomes spécifiques ne sont pas dans le scope.

---

### 3. ai-autonomous-agent-comparison

**Fichier** : `decisions/ai-autonomous-agent-comparison.json`
**Question** : Parmi les agents IA autonomes disponibles, lesquels offrent le meilleur rapport performance/fiabilité pour un usage en production ?

| Critère | Score | Justification |
|---------|-------|---------------|
| D1 | 0.5/1 | Les critères d'exclusion sont documentés dans `slr.notes` (sources exclues : "niveau pyramide 5 non corroboré ou doublons", 8 sources exclues sur 34 évaluées). La liste des exclusions est mentionnée mais les critères formels d'inclusion ne sont pas dans un champ structuré dédié. La granularité "doublon" est un critère opérationnel mais pas un IC/EC bibliométrique formel au sens Kitchenham. |
| D2 | 0.5/1 | Aucun champ `search_strategy` ni `databases` dans le JSON. Le `slr.notes` mentionne WebSearch et arXiv mais sans mots-clés documentés. 34 sources évaluées suggèrent une recherche étendue, mais la traçabilité est insuffisante (domaine AI-tooling, pas ai-collaboration — possible gap de couverture sur les bases spécialisées génie logiciel). |
| D3 | 1/1 | Synthèse structurée en 7 principes universels avec grade, sources et robustness par principe. Résolution de divergences inter-reviewers documentée (Agent C). Bifurcation fonctionnelle par type de tâche retenue sur base empirique (Task-Stratified, arXiv:2602.08915). |
| D4 | 0.5/1 | Chaque principe a un `grade_factors_applied` avec plus/minus explicites. Kappa documenté (0.72). Divergence systématique A/B sur la pyramide résolue par Agent C avec justification. Les sources individuelles ont `pyramid` et `quote` mais pas de champ `bias_risk` ni `quality_score` structurés comme dans agent-runtime — évaluation qualité moins formalisée au niveau source. |
| D5 | 0.5/1 | Quotes verbatim par source dans les principes et variants. Cependant la liste complète des 26 sources incluses n'est pas dans un tableau dédié avec métadonnées individuelles — les détails sont dispersés dans les principes et variants, non centralisés. Les 8 sources exclues ne sont pas listées avec motif individuel (seulement mentionnées en bloc dans `slr.notes`). |
| **Total** | **3/5** | |

**Couvre le PICOC ?** : NON pour notre PICOC spécifique

- **Contrainte open-source** : PARTIEL. OpenHands est identifié comme "open-source, self-hosted" dans son variant. Aider est "CLI open-source, git-natif". Mais le critère open-source n'est pas un axe de comparaison transversal — c'est une caractéristique mentionnée par agent, pas un outcome évalué. Claude Code et Devin (propriétaires) sont dans le même comparatif sans que la licence soit évaluée comme critère.
- **O1 (portabilité provider)** : NON. La portabilité multi-LLM n'est pas un outcome de cette décision. Aider est mentionné comme "compatible tous modèles cloud et locaux" mais sans évaluation systématique inter-agents sur ce critère.
- **O2 (hooks/gates before/after outil)** : NON. Aider est explicitement qualifié de "pas d'équivalent natif au système de hooks" mais la comparaison des mécanismes de hooks inter-agents n'est pas un outcome. La décision mesure la performance (merge rate, benchmark scores) pas la mécanisation des workflows.
- **O3 (shell + approve/deny par commande)** : NON. L'exécution bash avec approbation granulaire par commande n'est pas évaluée. Les mécanismes de contrôle sont évoqués (sandbox pour OpenHands) mais sans scoring systématique.
- **O4 (audit trail)** : NON. Le logging structuré des actions n'est pas un outcome.
- **O5 (maintenabilité)** : PARTIEL. La maintenabilité est indirectement couverte via adoption/merge rate, mais le coût opérationnel, la licence et l'adoption communautaire au sens maintenance long terme ne sont pas des outcomes formels.
- **O6 (résilience boucle)** : PARTIEL. La terminaison garantie est indirectement traitée — le pattern d'échec "pursues impossible solutions for days" (Devin) est documenté, et CooperBench documente la terminaison prématurée avec faux positif. Mais max_turns et circuit-breaker comme mécanismes configurables ne sont pas évalués.
- **Population** : Plus universelle (pas de contrainte de taille d'équipe explicite dans le PICOC interne), mais centrée sur la performance des agents individuels en production open-source — pas sur les pipelines CI/CD autonomes ni sur les exigences d'intégration programmatique.

---

## Verdict

| Décision | Score DARE | Score le plus élevé |
|----------|:----------:|:-----------:|
| agent-runtime | 3.5/5 | — |
| ai-agent-framework-vs-prebuilt | 4.0/5 | **OUI** |
| ai-autonomous-agent-comparison | 3.0/5 | — |

**Score le plus élevé** : 4.0/5 (décision `ai-agent-framework-vs-prebuilt`)
**Seuil DARE** : 2.5/5
**Nouvelle SLR justifiée** : **OUI**

Le score le plus élevé (4.0/5) dépasse le seuil DARE de 2.5/5 en rigueur méthodologique — mais ce seuil ne porte que sur la qualité formelle de la décision existante. Il ne dit pas si cette décision couvre notre PICOC. Or les 3 décisions évaluées sont toutes **NON ou PARTIEL** sur la couverture du PICOC spécifique. La règle d'application est : score DARE >= 2.5 **ET** couverture PICOC = OUI/PARTIEL sur les outcomes critiques. Aucune décision ne remplit les deux conditions simultanément.

---

## Gaps structurels communs non couverts par les décisions existantes

1. **Contrainte open-source absente des 3 décisions** : aucune ne compare les runtimes selon leur licence (open-source vs propriétaire) ou l'ouverture de leur API comme critère d'inclusion. Les candidats open-source pertinents (OpenHands, Aider, Goose, Continue.dev, Smol-developer, SuperAGI) ne font pas l'objet d'une évaluation systématique sur les outcomes O1-O6.

2. **O3 (approve/deny par commande individuelle) non évalué** : aucune décision ne mesure la granularité du mécanisme d'approbation — la distinction entre "hook global pre/post-tool" et "approve/deny par commande shell individuelle avec allow-list/deny-list configurable" n'est pas traitée comme outcome distinct. C'est pourtant un critère différenciant fort entre Claude Code (settings.json deny-list), OpenHands (Docker sandbox), Aider (mode --auto vs interactif), etc.

3. **Population contrainte à Anthropic-first ou small teams** : `agent-runtime` est explicitement borné à "équipes solo/petites (1-5) + Claude comme LLM principal". Notre PICOC est universel (taille variable, stack variable). Une SLR couvrant des contextes multi-LLM, multi-stack, multi-taille d'équipe n'existe pas dans le corpus EBSE.

4. **O1 (portabilité provider) non comparé inter-runtimes** : la capacité multi-LLM est traitée comme feature de LiteLLM/option C uniquement, jamais comme axe de comparaison transversal entre candidats open-source (OpenHands supporte 10+ providers, Aider supporte 20+ via API, Continue.dev est provider-agnostique). Aucune décision ne quantifie le couplage vendor par runtime.

5. **O4 (audit trail structuré) absent des 3 décisions** : le logging des actions agent (format, complétude, intégration avec outils tiers comme OpenTelemetry, GlitchTip, Grafana) n'est pas évalué comme outcome dans aucune décision existante.
