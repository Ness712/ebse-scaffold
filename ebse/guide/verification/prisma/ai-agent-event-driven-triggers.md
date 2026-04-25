# PRISMA Flow — PICOC-E : ai-agent-event-driven-triggers

**Date de recherche** : 2026-04-25
**Bases interrogees** : code.claude.com, arXiv (cs.AI, cs.SE, cs.CR), WebSearch securite, CVE databases, GitHub advisories
**Mots-cles Agent A** : "Claude Code GitHub Actions trigger", "claude-code-action CI integration", "prompt injection github actions CVE", "event-driven agent webhook security", "Channels claude code webhook"
**Mots-cles Agent B** : "autonomous agent external trigger security", "LLM agent github actions prompt injection", "webhook agent orchestration security", "claude code channels research preview", "GITHUB_TOKEN agent exfiltration"
**Protocole** : methodology.md v3.0 §2.1 — double extraction independante (Agents A + B, mots-cles differents) + reconciliation Agent C

---

## Flux

```
IDENTIFICATION
  Sources identifiees par base (Agent A + Agent B combines, avant deduplication) :
    - code.claude.com (documentation officielle) : 4 sources
    - arXiv (cs.CR, cs.AI) : ~6 candidats
    - WebSearch securite (CVE databases, SecurityWeek, advisories) : ~8 candidats
    - GitHub (claude-code-action repo, security advisories) : ~5 candidats
    - Snowballing backward : ~2 sources
  Total identifie (brut, combine A+B) : ~25
  Doublons retires : 3 (CVE-2025-54794 identifie par A et B independamment)
  Total apres deduplication : ~22

SCREENING (titre + resume)
  Sources screenees : ~22
  Sources exclues au screening : ~12
    - E1 (blog opinion sans donnees sur injection) : ~4
    - E2 (hors scope — event-driven general, pas specifique LLM/agent) : ~5
    - E3 (doublons partiels) : ~2
    - E4 (vendor sans methodologie transparente) : ~1

ELIGIBILITE (lecture complete)
  Sources evaluees en detail : ~10
  Sources exclues apres lecture complete : ~5
    - Hors scope PICOC strict (webhooks generiques) : 2
    - Niveau de preuve insuffisant (pure opinion sans donnees) : 2
    - Pre-print retracte : 1

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 1 : 0
    - Niveau 2 : 0
    - Niveau 3 : 2 (code.claude.com/docs/en/github-actions ; claude-code-action/docs/security.md)
    - Niveau 4 : 2 (CVE-2025-54794 oddguan.com ; SecurityWeek multi-agent confirmation)
    - Niveau 5 : 1 (code.claude.com/docs/en/channels-reference — research preview, statut instable)

  Sources exclues avec raison documentee : 2
    - arXiv generic webhook injection papers : hors scope specifique Claude Code CI
    - Blog posts non-attribues sur GitHub Actions security : E1 redondant avec CVE
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | code.claude.com, arXiv (cs.CR), CVE databases, GitHub advisories |
| Mots-cles | "Claude Code GitHub Actions trigger", "prompt injection github actions CVE", "event-driven agent webhook security" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~14 |
| Sources retenues | 5 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogees

| Element | Valeur |
|---------|--------|
| Bases | arXiv (cs.AI, cs.SE), WebSearch securite, SecurityWeek, GitHub Security Lab |
| Mots-cles | "autonomous agent github actions prompt injection", "GITHUB_TOKEN exfiltration agent", "claude code channels research preview webhook" |
| Periode couverte | 2024-2026 |
| Sources identifiees | ~11 |
| Sources retenues | 5 (convergence elevee avec A) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentees

| Source | Raison exclusion |
|--------|-----------------|
| arXiv papers sur webhook injection generiques | Hors scope PICOC — traitent webhooks generiques, pas specificite Claude Code/LLM |
| Blog posts non-attribues GitHub Actions security | Niveau 5 redondant, pas de donnees primaires |
| Pre-print retracte (cs.CR 2025) | Retraction apres submission — claims non-repliques |
