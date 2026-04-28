# Orchestration d'agent IA open-source

## Recommandation principale

**[BONNE_PRATIQUE]** Pour les projets avec contrainte d'independance provider stricte : **OpenCode, Cline ou OpenHands** (Tier 1, vraiment multi-provider). Pour les projets sans contrainte provider : le choix depend de la stack cible (Python vs TypeScript) et des besoins en gouvernance (hooks, audit trail). | Score GRADE : 2/7

| Critere principal | Solution recommandee |
|-------------------|---------------------|
| Independance provider absolue (BYOK, multi-LLM) | OpenCode (C3) ou Cline (C8) |
| Pipeline Python robuste + event sourcing | OpenHands (C10) |
| Stack OpenAI-first + OTEL natif | OpenAI Agents SDK (C15) |
| Projet Anthropic-first, CLI deja en place | Claude Code CLI (C1) ou Claude Agent SDK (C2) |
| Experimentation minimale, lisibilite maximale | Pydantic AI (C18) ou mini-swe-agent (C12) |

**Note critique sur O1 (portabilite provider)** : la distinction entre "vraiment multi-provider" et "vendor-first" est structurelle, pas de configuration. OpenCode (75+ providers), Cline (multi-LLM BYOK) et OpenHands (abstraction provider) sont les seuls Tier 1 sans dependance structurelle a un vendor. Les autres (C1, C2, C4, C5, C15) nomment un provider dans leur identite ou leur architecture de base — la portabilite existe mais reste secondaire.

**AVERTISSEMENT** : le domaine evolue tres rapidement (tous les candidats ont connu des changements majeurs en 2025-2026). Reevaluer dans 6 mois. kappa = 0.559 (Moderate) — certitudes plus faibles qu'en agent-runtime (kappa 0.811).

Sources : evaluations directes 18 candidats, NeurIPS 2024 (SWE-agent), Series A OpenHands $18.8M (signal adoption marche), npm weekly downloads (C1 >4M, C2 4.54M), GitHub stars (verifies avril 2026)

---

## Tier 1 — 8 candidats evalues

### C3 — OpenCode

**[BONNE_PRATIQUE]** Runtime CLI TypeScript, 75+ providers, 147 000 stars | Score : 2/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | OUI | 75+ providers natifs, aucune dependance vendor structurelle |
| O2 Hooks before/after outil | OUI | Hooks declaratifs avant/apres chaque appel outil |
| O3 Bash natif + approve/deny | OUI | Bash integre, politique approve/deny par commande configurable |
| O4 Audit trail | OUI | Logging des sessions et des actions outil |
| O5 Maintenabilite | OUI | TypeScript, MIT, communaute active (147k stars) |
| O6 Resilience boucle | OUI | Gestion native des boucles infinies |

**Points de vigilance** : popularite recente — surveiller la stabilite des APIs internes avant adoption en production. Ecosysteme plugins encore emergent.

Sources : depot GitHub OpenCode (VERIFIE), documentations officielles (niv. 3)

---

### C8 — Cline

**[BONNE_PRATIQUE]** Runtime CLI TypeScript, multi-LLM BYOK, headless CLI 2.0, 58 000 stars | Score : 2/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | OUI | BYOK multi-LLM, aucun vendor impose |
| O2 Hooks before/after outil | OUI | Hooks before/after outil documentes |
| O3 Bash natif + approve/deny | OUI | Bash integre, approve/deny configurable |
| O4 Audit trail | OUI | Logging des actions |
| O5 Maintenabilite | OUI | Apache 2.0, TypeScript, 58k stars |
| O6 Resilience boucle | LACUNE | Comportement en boucle infinie moins documente que C3/C10 |

**Points de vigilance** : lacune O6 documentee — tester le comportement sous charge avant adoption pour des pipelines longs. Le mode headless CLI 2.0 (sorti 2025) reste moins mature que le mode IDE.

Sources : depot GitHub Cline, documentation headless CLI 2.0 (niv. 3)

---

### C10 — OpenHands

**[BONNE_PRATIQUE]** Agent Python, event sourcing, MIT, 68 000 stars, $18.8M Series A | Score : 2/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | OUI | Abstraction provider explicite, multi-LLM |
| O2 Hooks before/after outil | OUI | Architecture event sourcing — tous les evenements sont observables |
| O3 Bash natif + approve/deny | OUI | Bash integre, sandbox configurable |
| O4 Audit trail | OUI | Event sourcing natif = trace complete de toutes les actions |
| O5 Maintenabilite | OUI | Python, MIT, organisation Structure avec financement |
| O6 Resilience boucle | OUI | Gestion des boucles via evenements systeme |

**Architecture event sourcing** : chaque action agent produit un evenement serialisable — avantage majeur pour l'audit et le replay de sessions. Le plus robuste des Tier 1 sur ce critere.

```python
from openhands.core.main import create_runtime, run_agent_pipeline

runtime = create_runtime(config)
for event in run_agent_pipeline(runtime, task="..."):
    if event.type == "action":
        audit_log.append(event.serialize())
```

**Points de vigilance** : stack Python uniquement — incompatible avec les projets TypeScript-only. Complexite operationnelle plus elevee que les solutions CLI pures (daemon, sandbox Docker).

Sources : depot GitHub OpenHands, arXiv (niv. 4), annonce Series A (niv. 4)

---

### C15 — OpenAI Agents SDK

**[BONNE_PRATIQUE]** SDK Python, MIT, ShellTool ajout avril 2026, OTEL natif | Score : 2/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | PARTIEL | OpenAI-first structurellement — autres providers via configuration mais non prioritaires |
| O2 Hooks before/after outil | OUI | Guardrails input/output, hooks lifecycle |
| O3 Bash natif + approve/deny | OUI | ShellTool ajoute avril 2026 |
| O4 Audit trail | OUI | OTEL natif — integration Grafana/Prometheus directe |
| O5 Maintenabilite | OUI | MIT, Python, support OpenAI |
| O6 Resilience boucle | OUI | Gestion max_turns, timeouts |

**Avantage differentiel** : OTEL natif est le seul Tier 1 avec cette integration sans code additionnel. Pertinent pour les projets avec stack observabilite existante (Grafana, Jaeger).

```python
from agents import Agent, Runner, trace

with trace("pipeline-audit"):
    result = await Runner.run(
        agent,
        "Analyser les changements et generer un rapport",
        max_turns=50
    )
```

**Points de vigilance** : O1 PARTIEL — la portabilite provider est possible mais l'architecture reste OpenAI-first. ShellTool ajoute en avril 2026 : historique de maturite court.

Sources : documentation OpenAI Agents SDK (niv. 3), changelog avril 2026 (niv. 3)

---

### C4 — Gemini CLI

**[CHOIX_EQUIPE]** CLI TypeScript, Apache 2.0, hooks BeforeTool/AfterTool, 101 000 stars | Score : 1/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | PARTIEL | Google-first structurellement |
| O2 Hooks before/after outil | OUI | BeforeTool/AfterTool natifs |
| O3 Bash natif + approve/deny | OUI | Bash integre |
| O4 Audit trail | OUI | Logging configurable |
| O5 Maintenabilite | OUI | Apache 2.0, TypeScript, Google |
| O6 Resilience boucle | OUI | Gestion des boucles |

**Verdict** : recommande uniquement pour les projets deja investis dans l'ecosysteme Google (Vertex AI, GCP). O1 PARTIEL = disqualifiant pour les projets avec contrainte d'independance provider.

Sources : depot GitHub Gemini CLI (niv. 3)

---

### C5 — Codex CLI

**[CHOIX_EQUIPE]** CLI Rust, Apache 2.0, hooks config.toml formalises, 75 000 stars | Score : 1/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | PARTIEL | OpenAI-first structurellement |
| O2 Hooks before/after outil | OUI | config.toml hooks — les plus formalises syntaxiquement de tous les candidats |
| O3 Bash natif + approve/deny | OUI | Bash integre, approve/deny par commande |
| O4 Audit trail | OUI | Logging des sessions |
| O5 Maintenabilite | OUI | Apache 2.0, Rust |
| O6 Resilience boucle | OUI | Gestion des boucles |

**Avantage differentiel** : la formalisation des hooks via `config.toml` est la plus structuree de tous les candidats evalues — avantage pour les equipes qui valorisent la lisibilite de la configuration.

```toml
[hooks]
before_tool = "scripts/pre-tool-check.sh"
after_tool = "scripts/post-tool-log.sh"
on_stop = "scripts/session-end.sh"
```

**Points de vigilance** : O1 PARTIEL disqualifiant pour les projets avec contrainte d'independance provider. Rust = barriere a contribution si l'equipe est TypeScript/Python.

Sources : depot GitHub Codex CLI (niv. 3)

---

### C1 — Claude Code CLI

**[BONNE_PRATIQUE]** CLI TypeScript proprietaire Anthropic, 112 000 stars, >4M npm/semaine | Score : 2/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | PARTIEL | Anthropic-first structurellement (Bedrock, Vertex via env vars) |
| O2 Hooks before/after outil | OUI | PreToolUse, PostToolUse dans settings.json |
| O3 Bash natif + approve/deny | OUI | Bash integre, approve/deny par commande |
| O4 Audit trail | OUI | Logging des sessions |
| O5 Maintenabilite | OUI | TypeScript, adoption >4M/semaine |
| O6 Resilience boucle | OUI | Gestion des boucles |

**Note** : licence proprietaire Anthropic — non open-source. Inclus dans cette evaluation car largement utilise comme composant dans des pipelines open-source, et parce que les projets OLS l'utilisent comme runtime principal.

**Points de vigilance** : licence proprietaire = risque de changement de conditions. Pour les projets avec contrainte open-source stricte, preferer C3, C8 ou C10.

Sources : documentation Claude Code CLI (niv. 3), npm @anthropic-ai/claude-code (niv. 4)

---

### C2 — Claude Agent SDK

**[BONNE_PRATIQUE]** SDK TypeScript/Python MIT, 4.54M npm/semaine | Score : 2/7

| Critere | Statut | Detail |
|---------|--------|--------|
| O1 Portabilite provider | PARTIEL | Anthropic-first structurellement (Bedrock, Vertex via env vars) |
| O2 Hooks before/after outil | OUI | PreToolUse, PostToolUse in-process |
| O3 Bash natif + approve/deny | OUI | Bash via tool, approve/deny configurable |
| O4 Audit trail | OUI | Hooks in-process — logging granulaire |
| O5 Maintenabilite | OUI | MIT, TypeScript/Python, support Anthropic |
| O6 Resilience boucle | OUI | max_turns, max_budget_usd programmatiques |

**Points de vigilance** : O1 PARTIEL. API en version 0.2.x — surveiller les breaking changes. Voir la decision `agent-runtime` pour l'usage combine CLI + SDK.

Sources : documentation Claude Agent SDK (niv. 3), npm @anthropic-ai/claude-agent-sdk (niv. 4)

---

## Tier 2 — 8 candidats evalues

| Candidat | O1 | O2 | O3 | Verdict | Raison principale |
|----------|----|----|-----|---------|-----------------|
| C6 Aider | OUI fort (LiteLLM 100+) | NON | OUI | Tier 2 | Absence de hooks before/after outil — O2 disqualifiant pour pipelines avec gates |
| C7 Goose (Block, Apache 2.0, Rust, 32k stars) | OUI | PARTIEL (MCP indirect) | OUI | Tier 2 | Hooks indirects via MCP — pas de hooks natifs before/after outil |
| C11 SWE-agent (MIT, Python, NeurIPS 2024) | OUI | PARTIEL | OUI | Tier 2 | O4 fort (trajectoires .traj JSON, NeurIPS 2024) — O2 partiel seulement |
| C14 Continue.dev (Apache 2.0, TypeScript, 31k stars) | OUI | OUI | OUI | Tier 2 | O6 non documente — comportement boucle infinie non specifie |
| C16 AWS Strands (Apache 2.0, Python) | OUI | OUI (BeforeToolCallEvent le plus type) | PARTIEL | Tier 2 | O3 partiel — pas de Bash natif, shell via custom tool |
| C17 Google ADK (Apache 2.0, Python/TS/Go/Java) | PARTIEL | OUI (6 callbacks lifecycle) | PARTIEL | Tier 2 | O1 et O3 tous deux partiels |
| C18 Pydantic AI (MIT, Python) | OUI | OUI (before_tool_execute) | PARTIEL | Tier 2 | O3 partiel — Bash via custom tool, pas natif |
| C12 mini-swe-agent (MIT, Python, ~100 lignes) | OUI | NON | PARTIEL | Tier 2 | Maximalisme de simplicite — absence deliberee de hooks |

**Notes Tier 2** :

- **C11 SWE-agent** : le format `.traj JSON` (trajectoires d'execution) est le mecanisme d'audit trail le plus structure de tous les candidats evalues — avantage pour la recherche reproductible. A considerer si O4 est le critere dominant.
- **C16 AWS Strands** : `BeforeToolCallEvent` est syntaxiquement le plus type (schema valide) — avantage pour les equipes qui privilegient la validation statique des hooks.
- **C17 Google ADK** : seul candidat multi-langage natif (Python, TypeScript, Go, Java) — avantage pour les projets polyglotes.
- **C18 Pydantic AI** : `UsageLimits` est le mecanisme de controle des couts le plus explicite — pertinent pour les pipelines avec contrainte budgetaire stricte.
- **C12 mini-swe-agent** : ~100 lignes — utile comme reference pedagogique ou comme base pour un custom minimal. Pas pour la production.

---

## Non recommandes

| Candidat | Raison |
|----------|--------|
| C9 Roo Code | Shutdown officiel annonce le 15/05/2026 — ne pas adopter |
| C13 Pi | Projet individuel, bus factor critique (1 mainteneur), bug boucle infinie non resolu (issue GitHub #2119) |

---

## Pourquoi pas les autres ?

| Option | Verdict | Raison principale |
|--------|---------|------------------|
| C9 Roo Code | Elimine | Shutdown officiel 15/05/2026 |
| C13 Pi | Elimine | Bus factor 1, bug boucle infinie (issue #2119) non resolu |
| C6 Aider | Tier 2 uniquement | O2 absent — pas de hooks before/after outil natifs, disqualifiant pour pipelines avec gates de securite |
| C7 Goose | Tier 2 uniquement | Hooks uniquement via MCP (indirect) — pas de hooks natifs in-process |
| C12 mini-swe-agent | Tier 2 uniquement | Absence deliberee de hooks et d'audit — pedagogique, pas production |
| C14 Continue.dev | Tier 2 uniquement | O6 non documente — comportement sous charge de boucle non specifie |
| LangGraph, CrewAI | Hors scope PICOC | Frameworks d'orchestration generiques — overhead similaire a "custom from scratch" pour equipes < 5 (voir decision ai-agent-framework-vs-prebuilt) |

---

## Principe transversal — O1 : vraiment multi-provider vs vendor-first

La portabilite provider (O1) est le critere le plus ambigu de cette SLR. Tous les candidats Tier 1 supportent techniquement plusieurs providers. La distinction pertinente est architecturale :

| Type | Definition | Candidats |
|------|-----------|-----------|
| Vraiment multi-provider | Aucun vendor dans l'identite ou l'architecture de base. BYOK comme principe fondateur. | C3 OpenCode, C8 Cline, C10 OpenHands, C6 Aider |
| Vendor-first avec portabilite | Provider principal nomme dans l'identite. Multi-provider possible via configuration mais secondaire. | C1, C2 (Anthropic), C4 (Google), C5, C15 (OpenAI) |

**Consequence pratique** : si la contrainte d'independance provider est contractuelle ou reglementaire, choisir uniquement dans la colonne "vraiment multi-provider". Si la contrainte est de convenance (changer de vendor si necessaire), les solutions vendor-first sont acceptables.

---

## Limites de cette recommandation

1. **Domaine < 2 ans** : la majorite des candidats ont subi des changements architecturaux majeurs en 2025-2026 (ShellTool OpenAI ajout avril 2026, headless CLI Cline 2.0, renommage Claude Agent SDK). Les evaluations refletent l'etat d'avril 2026 — reevaluer dans 6 mois.
2. **kappa modere (0.559)** : 4 divergences resolues par discussion entre reviewers. Certitudes plus faibles que pour la decision agent-runtime (kappa 0.811). Les verdicts Tier 1 vs Tier 2 sur C4, C5, C7 et C14 sont les moins consensuels.
3. **Biais GitHub stars** : les stars sont un indicateur d'adoption percu, pas de qualite. C4 (101k stars) et C1 (112k stars) ont plus de stars que C10 (68k stars) qui est techniquement plus robuste sur les criteres PICOC.
4. **Absence d'etudes longitudinales comparatives** : aucune etude empirique controlee ne compare directement ces 18 candidats sur les 6 criteres PICOC en conditions de production. Les evaluations reposent sur la documentation officielle et les depots GitHub — niveau de preuve 3-4 uniquement.
5. **Shutdown risk** : C9 (Roo Code) illustre la fragilite du domaine. Preference pour les candidats avec financement (C10 Series A $18.8M) ou support grand groupe (C4 Google, C5/C15 OpenAI, C1/C2 Anthropic).

---

*Domaine : ai-collaboration*
*Decision : agent-orchestration-open-source*
*GRADE : 2/7 (BONNE_PRATIQUE)*
*Kappa inter-reviewers : 0.559 (Moderate, N=17, 4 divergences resolues)*
*Sources : 18 evaluees, 17 incluses, 0 fabrication detectee par Agent C*
*SLR Kitchenham 2007 — Phases 1-3 completes — 2026-04-28*
