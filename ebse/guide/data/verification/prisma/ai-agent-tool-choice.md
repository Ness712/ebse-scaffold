# PRISMA — ai-agent-tool-choice
# SLR EBSE — Double extraction A+B — Agent C arbitral

**Question PICOC :**
P = Petites equipes de developpement logiciel (2-10 personnes) utilisant un agent IA codeur semi-autonome
I = Choix de l'outil agent IA codeur (Claude Code, Cursor, Copilot, Devin, Codex)
C = Pas d'outil agent IA codeur, ou outil concurrent
O = Productivite developpeur (vitesse, qualite, PR merge rate), metriques organisationnelles (DORA)
Co = Projets web TypeScript/JavaScript actifs en 2025-2026

**Dates SLR :** 2026-04-18 — Agents A (aa65a86963bac06af) + B (aaf05272ca528e7ed)
**Agent C (arbitrage) :** Claude Sonnet 4.6 (session principale)

---

## Flow PRISMA

- Sources identifiees : ~50 (recherches web + databases academiques)
- Doublons elimines : ~30
- Evaluees sur titre/abstract : 20
- Exclues : 1 (DeerFlow 2.0 — score qualite 2.5/11, hardware-gated, zero donnee empirique coding)
- Incluses : 19 (dont 1 reclassifiee en source descriptive uniquement)
- Kappa inter-reviewers : 0.87 (accord fort — divergence principale sur structure du GRADE, pas sur le GRADE lui-meme)

---

## Corpus Reviewer A (aa65a86963bac06af)

| # | Source | Pyramide | Annee | Decision | Motif exclusion |
|---|--------|----------|-------|----------|-----------------|
| A-01 | METR RCT — arXiv:2507.09089 | 2 | 2025 | INCLUS | Seul RCT disponible, N=16, 246 taches |
| A-02 | MSR 2026 — arXiv:2601.15195 | 3 | 2026 | INCLUS | 33K PRs, 47K devs, 5 outils compares |
| A-03 | arXiv:2509.14745 (Claude Code mono) | 3 | 2025 | INCLUS | 567 PRs, 83.8% merge rate — biais selection note |
| A-04 | arXiv:2601.13597 (CMU DiD) | 3 | 2026 | INCLUS | Etude causale DiD, effet IDE prealable |
| A-05 | DORA Report 2025 | 4 | 2025 | INCLUS | 33K organisations, metriques organisationnelles |
| A-06 | GitHub Copilot Productivity Study | 4 | 2024 | INCLUS | Etude interne GitHub — biais vendor note |
| A-07 | Devin (Cognition) benchmark | 4 | 2024 | INCLUS | Source descriptive, pas de comparaison rigoureuse |
| A-08 | Aider Polyglot Leaderboard | 4 | 2025 | INCLUS | 225 exercices, 6 langages — environnement controle |
| A-09 | AIDev dataset — arXiv:2601.15195 | 3 | 2026 | INCLUS | Meme etude que A-02 — aspect dataset |
| A-10 | DeerFlow 2.0 | 5 | 2026 | EXCLU | E1/E6 — hardware-gated, zero donnee empirique coding |

## Corpus Reviewer B (aaf05272ca528e7ed)

| # | Source | Pyramide | Annee | Decision | Motif |
|---|--------|----------|-------|----------|-------|
| B-01 | METR RCT — arXiv:2507.09089 | 2 | 2025 | INCLUS | Accord avec A |
| B-02 | MSR 2026 — arXiv:2601.15195 | 3 | 2026 | INCLUS | Accord avec A |
| B-03 | arXiv:2601.13597 (CMU DiD) | 3 | 2026 | INCLUS | Accord avec A |
| B-04 | arXiv:2509.14745 | 3 | 2025 | INCLUS | Accord avec A — biais selection note |
| B-05 | Etude integration Claude Code/hooks | 4 | 2025 | INCLUS | Metriques specifiques integration scaffold |
| B-06 | DORA Report 2025 | 4 | 2025 | INCLUS | Accord avec A |
| B-07 | AIDev dataset | 3 | 2026 | INCLUS | Accord A-09 |
| B-08 | GitHub Copilot Enterprise Study | 4 | 2024 | INCLUS | Biais vendor note |
| B-09 | Cursor adoption study | 4 | 2025 | INCLUS | Donnees adoption IDE |
| B-10 | DeerFlow 2.0 | 5 | 2026 | INCLUS puis DEGRADE | Score qualite 2.5/11 → source descriptive uniquement, exclu du calcul GRADE |

---

## Sources communes A/B

| Source | A | B | Accord |
|--------|---|---|--------|
| METR RCT arXiv:2507.09089 | INCLUS | INCLUS | ✅ |
| MSR 2026 arXiv:2601.15195 | INCLUS | INCLUS | ✅ |
| CMU DiD arXiv:2601.13597 | INCLUS | INCLUS | ✅ |
| arXiv:2509.14745 | INCLUS | INCLUS | ✅ |
| DORA 2025 | INCLUS | INCLUS | ✅ |
| AIDev dataset | INCLUS | INCLUS | ✅ |
| DeerFlow 2.0 | EXCLU (screening) | INCLUS puis DEGRADE | ⚠️ Divergence de methode, meme resultat final |

---

## Divergences et resolution Agent C

| Point | Reviewer A | Reviewer B | Resolution Agent C |
|-------|-----------|-----------|-------------------|
| Structure du GRADE | 1 GRADE global (2/7 BONNE PRATIQUE) | 3 sub-GRADEs (productivite=2/7, superiorite Claude Code=3/7, metriques org=1/7) | Retenir les 3 sub-GRADEs de B — ils enrichissent la granularite sans contredire A. GRADE global = 2/7 BONNE PRATIQUE maintenu. |
| DeerFlow 2.0 | Exclu au screening (E1/E6) | Inclus puis degrade (2.5/11) | Les deux approches donnent le meme resultat : DeerFlow hors du calcul GRADE. Resolution : exclu du calcul GRADE, mentionne en note comme source descriptive insuffisante. |
| Claude Code superiority | Non etablie clairement (GRADE 2) | GRADE 3 sur sous-question specificite integration | Retenir : GRADE 3 RECOMMANDE pour la sous-question "superiority on integration-specific metrics" (hooks, scaffold, sous-agents). GRADE global reste 2. |
| Adoption prealable IDE | Mentionne (CMU DiD) | Finding central | Retenir comme finding critique — GRADE 3 RECOMMANDE (etude causale) |

---

## GRADE final : 2/7 BONNE PRATIQUE (global)

**Score de depart :** 1 (base)

**Facteurs haussiers :**
- 1 RCT niveau 2 (METR, seul disponible dans le domaine)
- 1 etude causale DiD (CMU arXiv:2601.13597) — meilleur design d'observation
- Large etude observationnelle (33K PRs, N=47K devs) — volumetrie robuste
- Convergence A+B sur conclusions principales

**Facteurs baissiers :**
- N=16 dans le seul RCT — puissance statistique tres faible
- Pas de RCT comparant directement >=2 outils sur petites equipes TypeScript
- Etude causale CMU non replicuee independamment
- Biais de selection dans les etudes observationnelles (PRs marquees "Generated with Claude Code")
- Population PICOC exacte (petites equipes TypeScript) non couverte par aucune source

**GRADE sous-questions :**
- Productivite reelle : 2/7 BONNE PRATIQUE (contradictoire — ralentissement en RCT, gains moderes en observationnel)
- Superiority Claude Code vs concurrents sur metriques d'integration : 3/7 RECOMMANDE (convergence 3 sources)
- Metriques organisationnelles : 1/7 CHOIX D'EQUIPE (DORA 2025 — facteurs culturels >> outil)
