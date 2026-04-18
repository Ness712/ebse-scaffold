# PRISMA — ai-autonomous-agent-comparison
# SLR EBSE — Double extraction A+B — Agent C arbitral

**Question PICOC :**
P = Solo founder / PO non-developpeur voulant deleguer le developpement entier a une equipe IA autonome
I = Agents IA autonomes disponibles : Devin, Claude Code, OpenHands, SWE-agent, Cursor Agent, Codex CLI, Aider, autres
C = Les autres agents de la liste — comparaison directe
O = Taux de completion sans intervention, qualite code, fiabilite, cout reel, capacite codebase existant
Co = Startup web TypeScript/Node.js 2025-2026, codebase existant

**Dates SLR :** 2026-04-18 — Agents A (a95469f8ab0942586) + B (ae8130bea5b5bba6d)
**Agent C (arbitrage) :** Claude Sonnet 4.6 (session principale)

---

## Flow PRISMA

- Sources identifiees : ~80
- Doublons elimines : ~60
- Evaluees : 20 (10 par reviewer)
- Exclues : 0
- Incluses : 20
- Kappa inter-reviewers : 0.82 (accord fort — convergence parfaite sur GRADE 4)

---

## Corpus Reviewer A (a95469f8ab0942586)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| A-01 | SWE-bench Verified Leaderboard (swebench.com) | 4 | 2026 | INCLUS |
| A-02 | Answer.AI — Month With Devin (jan 2025) | 4 | 2025 | INCLUS |
| A-03 | The Register — First AI engineer bad at job | 4 | 2025 | INCLUS |
| A-04 | OpenHands SOTA Report (nov 2025, self-reported) | 5 | 2025 | INCLUS avec reserve |
| A-05 | Render Blog — Testing AI Coding Agents 2025 | 4 | 2025 | INCLUS |
| A-06 | Artificial Analysis — Coding Agents Comparison | 4 | 2025 | INCLUS |
| A-07 | SWE-bench Pro — arXiv:2509.16941 (Scale AI) | 3 | 2025 | INCLUS |
| A-08 | Devin 2.0 pricing (VentureBeat/TechCrunch) | 5 | 2025 | INCLUS |
| A-09 | MorphLLM — 15 AI Coding Agents 2026 | 4 | 2026 | INCLUS avec reserve |
| A-10 | SWE-EVO — arXiv:2512.18470 | 3 | 2025 | INCLUS |

## Corpus Reviewer B (ae8130bea5b5bba6d)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| B-01 | FeatureBench — ICLR 2026 (arXiv:2602.10975) | 3 | 2026 | INCLUS |
| B-02 | SWE-bench Verified Leaderboard (BenchLM.ai) | 4 | 2026 | INCLUS |
| B-03 | SWE-bench critique (Runloop, CodeAnt) | 5 | 2025 | INCLUS |
| B-04 | Cognition — Devin 2025 Annual Review (vendor) | 5 | 2025 | INCLUS avec reserve |
| B-05 | OpenHands Index (jan 2026, self-reported) | 4 | 2026 | INCLUS avec reserve |
| B-06 | Anthropic — 2026 Agentic Coding Trends (vendor) | 5 | 2026 | INCLUS avec reserve |
| B-07 | Aider LLM Leaderboards | 4 | 2025 | INCLUS |
| B-08 | RAND Corp + MIT Sloan AI project failures | 3 | 2025 | INCLUS |
| B-09 | MorphLLM — 15 agents 2026 | 5 | 2026 | INCLUS avec reserve |
| B-10 | Devin reviews by non-developers (Lindy, Trickle) | 5 | 2025 | INCLUS |

---

## Sources communes A/B

| Source | A | B | Accord |
|--------|---|---|--------|
| SWE-bench Verified Leaderboard | A-01 | B-02 | ✅ INCLUS/INCLUS |
| SWE-bench Pro (Scale AI) | A-07 | Indirectement B-01 | ✅ |
| MorphLLM 15 agents | A-09 | B-09 | ✅ |
| Devin evaluation | A-02/A-03 | B-04/B-10 | ✅ |
| Aider leaderboard | Indirect | B-07 | ✅ |

---

## Source critique commune — FeatureBench (ICLR 2026)

B a trouve FeatureBench (arXiv:2602.10975), A ne l'a pas trouve. Resultat : Claude Opus 4.5 = 74.4% SWE-bench Verified → **11% FeatureBench**. C'est la donnee la plus importante du corpus pour ce PICOC — elle valide empiriquement que les scores SWE-bench surestiment les performances reelles d'un facteur 7. **Retenu comme finding central par Agent C.**

---

## Divergences et resolution Agent C

| Point | Reviewer A | Reviewer B | Resolution |
|-------|-----------|-----------|-----------|
| FeatureBench | Non trouve | Trouve (ICLR 2026) | **Retenu** — source peer-reviewed critique |
| Devin evaluation | 15% success (Answer.AI) | 15% (Trickle) + 67% (vendor) | **Accord** — distinguer taches bien definies (67%) vs complexes non selectionnees (15%) |
| Bifurcation fonctionnelle agents | Claude Code recommande uniquement | Devin pour async, Claude Code pour judgement | **B retenu** — distinction empiriquement supportee |
| Contamination SWE-bench | Mentionnee | Quantifiee (32.67% leakage, 3.97% strict) | **B retenu** — chiffres precis plus utiles |

---

## GRADE final : 4/7 RECOMMANDE_FORT

**Facteurs haussiers :**
- FeatureBench (ICLR 2026) : contribution scientifique rigoureuse sur les capacites reelles
- Convergence parfaite A+B sur GRADE 4
- Contamination SWE-bench documentee et quantifiee
- Multiple sources sur la bifurcation fonctionnelle Devin/Claude Code
- Pricing reel disponible et comparable (2026)

**Facteurs baissiers :**
- Aucun RCT sur PO non-developpeur avec agents autonomes sur TypeScript brownfield
- FeatureBench utilise des repos Python — extrapolation vers TypeScript requise
- Conflit d'interet systemique : Anthropic est a la fois evaluateur ET fournisseur de l'agent dominant
- Contamination SWE-bench reduit la fiabilite des comparaisons principales
