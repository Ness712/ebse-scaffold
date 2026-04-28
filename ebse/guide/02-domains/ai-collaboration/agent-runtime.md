# Runtime d'agent de coding

## Architecture recommandee

**[BONNE_PRATIQUE]** Architecture **Hybride CLI + SDK** (option D) : CLI pour les sessions interactives PO, Agent SDK pour les pipelines autonomes (CI/CD, autofix, audits) | Score GRADE : 2/7

| Contexte d'usage | Option recommandee |
|-----------------|-------------------|
| Session interactive developpeur/PO | Claude Code CLI + hooks shell |
| Pipelines CI/CD autonomes | Claude Agent SDK + orchestrateur |
| Taches > 50 turns ou > 30 minutes | Claude Agent SDK (max_turns programmatique) |
| Petite equipe < 5 personnes (tout usage) | Option C (Custom) CONTRE-INDIQUE |

Sources : Anthropic Claude Agent SDK docs (niv. 3, VERIFIE), Lulla et al. 2026 arXiv:2601.20404 (niv. 4), Wang et al. 2025 arXiv:2512.01939 (niv. 4)

**AVERTISSEMENT sensibilite** : le GRADE repose de maniere critique sur S01 (Claude Agent SDK doc officielle, conflit d'interet Anthropic). Son retrait ferait descendre le GRADE a 0. S01 est verifie verbatim par Agent C.

---

## Les 4 options evaluees

**[BONNE_PRATIQUE]** **Option A — Claude Code CLI + hooks shell** | Score : 2/7

Hooks declares dans `settings.json` (SessionStart, PreToolUse, PostToolUse, Stop). Integre nativement CLAUDE.md. Composabilite Unix (pipe, CI/CD). Zéro code a maintenir pour l'agent loop.

**Limite principale** : couplage structurel runtime + provider Anthropic (E-ARCH-01). Hooks = scripts shell uniquement — pas de callbacks in-process pour les pipelines complexes.

```json
{
  "hooks": {
    "PreToolUse": [{"matcher": "Bash", "hooks": [{"type": "command", "command": "pre-tool-check.sh"}]}],
    "PostToolUse": [{"matcher": "*", "hooks": [{"type": "command", "command": "post-tool-log.sh"}]}]
  }
}
```

Sources : Claude Code CLI docs niv. 3 (PARTIEL Agent C), Lulla 2026 niv. 4 (PARTIEL Agent C)

---

**[BONNE_PRATIQUE]** **Option B — Claude Agent SDK + orchestrateur** | Score : 2/7

Hooks programmatiques in-process (Python ou TypeScript) : PreToolUse, PostToolUse, Stop, SessionStart. `max_turns` et `max_budget_usd` configurables. Session management (resume, fork). 4 540 613 downloads/semaine (adoption production confirmee).

```typescript
import { query, ClaudeAgentOptions } from "@anthropic-ai/claude-agent-sdk";

const options: ClaudeAgentOptions = {
  max_turns: 50,
  hooks: {
    preToolUse: async (tool) => { /* validation, logging */ },
    postToolUse: async (tool, result) => { /* audit trail */ }
  }
};
```

Portabilite provider : Bedrock, Vertex AI, Azure via env vars (`CLAUDE_CODE_USE_BEDROCK`, etc.)

Sources : Claude Agent SDK docs niv. 3 (VERIFIE Agent C), npm @anthropic-ai/claude-agent-sdk niv. 4 (PARTIEL Agent C)

---

**[CHOIX_EQUIPE]** **Option C — Custom via LiteLLM / raw API** | Score : 1/7

**FORTEMENT DECONSEILLE pour equipes < 5 ingenieurs IA dedies.**

| Metrique | Valeur |
|---------|--------|
| Taux d'abandon a 6-12 mois | 80% (19 etudes convergentes) |
| Temps equipe sur orchestration | 60-80% (vs developpement reel) |
| Budget minimum pour parite fonctionnelle | 3 mois-ingenieur |

LiteLLM est utile comme proxy provider uniquement (100+ LLMs), pas comme base de runtime. Si contrainte d'equipe : utiliser Claude Agent SDK comme base + LiteLLM comme proxy.

Sources : ai-agent-framework-vs-prebuilt (GRADE 3, kappa 0.79, 19 etudes), Wang et al. 2025 niv. 4

---

**[BONNE_PRATIQUE]** **Option D — Hybride CLI + SDK** (RECOMMANDEE) | Score : 2/7

La documentation officielle (S01, VERIFIE Agent C) recommande explicitement cette approche :
> "Many teams use both: CLI for daily development, SDK for production. Workflows translate directly between them."

**Plan d'implementation en 3 phases :**

**Phase 1 (immediat)** : consolider les hooks CLI dans `settings.json`. Investir en `CLAUDE.md` / rules — retour mesurable immédiat (-28.64% runtime, -16.58% tokens selon Lulla et al. 2026).

**Phase 2 (< 2 semaines)** : orchestrateur SDK minimal pour `/autofix` et `/full-audit` (pipelines depassant 50 turns) :

```python
# orchestrateur-sdk.py (~500 LOC)
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions

async def run_pipeline(prompt: str, max_turns: int = 50):
    options = ClaudeAgentOptions(
        max_turns=max_turns,
        max_budget_usd=5.0,
        hooks={"preToolUse": validate_tool, "stop": log_session}
    )
    async for message in query(prompt=prompt, options=options):
        if message.type == "result" and message.subtype == "max_turns_reached":
            notify_po(f"Pipeline stopped at {max_turns} turns")
```

**Phase 3 (< 1 mois)** : benchmark prive OLS (5-10 taches historiques). Si parite SDK >= CLI : migrer progressivement les autres pipelines autonomes.

**Triggers de migration complète vers SDK standalone :**
- Independance provider devient contrainte contractuelle ou reglementaire
- Coût CLI depasse seuil defini par PO dans `CLAUDE.local.md`
- Besoin observabilite OpenTelemetry natif pour Grafana

Sources : Claude Agent SDK docs niv. 3 (VERIFIE), QubitTool 2026 niv. 5 (PARTIEL, biais eleve — triangulation uniquement)

---

## Principe transversal — Configuration explicite

**[BONNE_PRATIQUE]** La configuration explicite (`CLAUDE.md` / `AGENTS.md`) est le levier d'efficacite le plus actionnable, independamment du runtime choisi | Score : 2/7

Etude empirique controlee (Lulla et al. 2026, 10 repos, 124 pull requests, agents Codex et Claude Code) :

| Metrique | Sans fichier config | Avec fichier config | Delta |
|---------|--------------------|--------------------|-------|
| Runtime median | reference | -28.64% | -28.64% |
| Tokens output | reference | -16.58% | -16.58% |
| Completion behavior | reference | comparable | ~0% |

> "AGENTS.md files shape agent behavior, efficiency, and integration within software development workflows."

Ce resultat s'applique aux options A, B, C et D. Consequence : avant de migrer le runtime, optimiser la configuration existante.

Source : Lulla et al. 2026 arXiv:2601.20404 (niv. 4, PARTIEL Agent C)

---

## Pourquoi pas les autres ?

| Option | Verdict | Raison principale |
|--------|---------|------------------|
| Option C (Custom/LiteLLM) seule | Non recommandee pour equipes < 5 | 80% abandon a 6-12 mois, 60-80% temps sur orchestration (2 SLRs EBSE convergentes) |
| Option A (CLI) seule sans SDK | Insuffisante pour pipelines autonomes | max_turns moins programmatique, pas de session management pour taches > 50 turns |
| Option B (SDK) seule sans CLI | Manque le mode interactif PO | SDK = programmatique uniquement, pas d'interface interactive native |
| LangGraph, CrewAI, OpenHands | Hors scope PICOC | Non Anthropic-first, overhead custom similaire a option C |

Sources : ai-agent-framework-vs-prebuilt (GRADE 3), Wang et al. 2025 niv. 4, Claude Agent SDK docs niv. 3

---

## Convergence multi-vendor sur le pattern SDK

Cinq sources independantes (Anthropic, OpenAI, AWS, Google, QubitTool) documentent des SDKs avec hooks programmatiques in-process. Cette convergence multi-vendor etablit le pattern comme standard de facto pour les pipelines agents autonomes en 2025-2026 :

| Vendor | Mecanisme de hooks | Similarite avec Claude SDK |
|--------|-------------------|--------------------------|
| Anthropic (Claude Agent SDK) | PreToolUse, PostToolUse, Stop, SessionStart | Reference |
| OpenAI (Agents SDK) | Guardrails (input/output validation) | Equivalent fonctionnel |
| AWS (Strands) | Steering hooks (middleware pattern) | Equivalent fonctionnel |
| Google (ADK) | BeforeAgentCallback, AfterAgentCallback, Plugin system | Le plus structure |

Sources : S01 Claude Agent SDK (niv. 3), S07 OpenAI SDK (niv. 3), S08 AWS Strands (niv. 3), S09 Google ADK (niv. 3)

---

## Limites de cette recommandation

1. **Domaine < 2 ans** : Claude Agent SDK a ete renomme fin 2025. Peu d'etudes longitudinales disponibles. Reevaluer dans 6 mois.
2. **FRAGILE sur S01** : la recommandation D repose de maniere critique sur la documentation officielle Anthropic (conflit d'interet vendeur). Aucune source independante ne compare directement les 4 options sur les 6 criteres SDMF.
3. **Biais open-source** : la recherche academique analyse surtout les agents open-source (S03 exclut Claude Code car binaire proprietaire). Les options A et B sont des "boites noires" pour la recherche.
4. **API en version 0.2.x** : le SDK evolue rapidement — surveiller les breaking changes avant chaque mise a jour.

---

*Domaine : ai-collaboration*
*Decision : agent-runtime*
*GRADE : 2/7 (BONNE_PRATIQUE)*
*Kappa inter-reviewers : 0.811 (tres bon)*
*Sources : 15 sources (S01-S15), 0 fabrication detectee par Agent C*
*SLR Kitchenham 2007 — Phases 1-3 completes — 2026-04-28*
