# PRISMA Flow — PICOC Batch 1 - A : ai-agent-custom-subagent-definition

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com/docs, arXiv (cs.AI, cs.MA, cs.SE), GitHub issues anthropics/claude-code, WebSearch general
**Mots-cles Agent A** : "Claude Code subagents custom definition", "AI agent role specialization context isolation", "multi-agent routing Claude Code", "autonomous agent context isolation reusability", "LLM subagent task delegation scope"
**Mots-cles Agent B** : "Claude Code sub-agents .claude/agents definition", "routing reliability subagent description field", "multi-agent task routing unreliability LLM", "agent file definition vs inline Agent() comparison", "context isolation specialist agent patterns"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + verification Agent C (divergence 2 points)

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com/docs (documentation officielle Claude Code) : 4 sources
    - arXiv (cs.AI, cs.MA, cs.SE) : ~12 resultats candidats
    - GitHub issues anthropics/claude-code : ~8 issues identifiees
    - WebSearch general (blog posts, community discussions) : ~6 sources
  Total identifie (brut, combine A+B) : ~30
  Doublons retires (meme source identifiee par A et B) : 3
  Total apres deduplication : ~27

SCREENING (titre + resume)
  Sources screenees : ~27
  Sources exclues au screening : ~18
    - E1 (blog opinion sans donnees, niveau 5) : ~7
    - E2 (hors scope PICOC — multi-agent general, pas Claude Code specifique) : ~5
    - E3 (doublons partiels ou versions anterieures) : ~3
    - E4 (vendeur sans methodologie transparente, auto-promotion) : ~3

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~9
  Sources exclues apres lecture complete : ~4
    - Absence de donnees empiriques primaires (opinion pure) : 2
    - Hors scope (agent routing en general, pas sous-agents Claude Code) : 1
    - Niveau de preuve insuffisant (N < 10, pas de controle) : 1

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 2 (open standard ou meta-analyse) : 0
    - Niveau 3 (etude controllee, SLR) : 4 (sources Anthropic docs L3 selon classification vendor-doc)
    - Niveau 4 (etude empirique primaire) : 1 (arXiv 2503.01935, N=260)
    - Evidence negative incluse : rapports usage empirique routing unreliability (GitHub issues, community)

  Note sur la classification vendor-doc :
    Les sources Anthropic (documentation officielle) sont classifiees L3 (vendor-doc) et non L4,
    car elles ne sont pas des etudes empiriques independantes — elles constituent la specification
    officielle du mecanisme. CoI est documente comme facteur minus dans grade_factors_applied.

  Sources exclues avec raison documentee : 4
    - Rapports usage routing instable sans reproduction documentee : non inclus (evidence anecdotique)
    - Blog posts Anthropic sur multi-agent sans donnees : niveau 5, redondant
    - arXiv generiques sur multi-agent routing sans lien Claude Code : hors scope PICOC strict
    - GitHub issues sans label has-repro (routing) : evidence insuffisante pour qualification negative
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com/docs, arXiv (cs.AI, cs.MA), WebSearch general |
| Mots-cles | "Claude Code subagents custom definition", "multi-agent routing Claude Code", "AI agent role specialization context isolation" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~16 |
| Sources retenues | 5 (docs officielle + arXiv empirique) |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com/docs, GitHub issues anthropics/claude-code, arXiv (cs.SE), community discussions |
| Mots-cles | "Claude Code sub-agents .claude/agents definition", "routing reliability subagent description field", "context isolation specialist agent patterns" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~14 |
| Sources retenues | 5 (dont routing unreliability evidence focalisee) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| Blog posts Anthropic sur multi-agent (sans donnees) | Niveau 5 redondant avec documentation officielle incluse |
| arXiv generiques sur agent routing (multi-vendor) | Hors scope PICOC strict — pas specifique Claude Code subagent definition |
| GitHub issues routing sans label has-repro | Evidence anecdotique insuffisante — non qualifiable comme evidence negative |
| Community discussions Reddit/Discord sur sub-agents | Niveau 5 anecdotique, pas de reproduction documentee |

---

## Note sur la divergence Agent A / Agent B

Agent A a prioritise les preuves empiriques positives (arXiv N=260) et la documentation officielle.
Agent B a prioritise les rapports d'usage empirique negatifs (routing unreliability, GitHub issues).
La divergence de 2 points (A=3 vs B=1) a necessite une resolution par Agent C.
Agent C a conclu au grade 2 : le principe d'isolation contextuelle est valide (arXiv), mais le
mecanisme de routage automatique via description: est document comme peu fiable, et le CoI
Anthropic est fort sur toutes les sources positives principales.
