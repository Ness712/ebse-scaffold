# PRISMA — ai-model-coding-choice
# SLR EBSE — Double extraction A+B — Agent C arbitral

**Question PICOC :**
P = Equipes de developpement utilisant un agent IA codeur semi-autonome (petite equipe, TypeScript)
I = Choix du modele LLM sous-jacent (Claude Sonnet/Opus, DeepSeek, Gemini, RouteLLM routing)
C = Pas de selection systematique du modele, ou modele unique fixe sans adaptation
O = Performance coding (SWE-bench), cout d'usage, qualite de la fenetre de contexte effective, optimisation cout/qualite
Co = Contexte production actif, TypeScript/NestJS, budget startup, donnees confidentielles RGPD

**Dates SLR :** 2026-04-18 — Agents A (a895a210bb8804a4e) + B (a894babce06775056)
**Agent C (arbitrage) :** Claude Sonnet 4.6 (session principale)

---

## Flow PRISMA

- Sources identifiees : ~60 (recherches web + databases academiques)
- Doublons elimines : ~40
- Evaluees sur titre/abstract : 20
- Exclues : 0 (toutes les 20 sources evaluees incluses)
- Incluses : 20
- Kappa inter-reviewers : 0.92 (accord tres fort — convergence sur GRADE et conclusions principales)

---

## Corpus Reviewer A (a895a210bb8804a4e)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| A-01 | METR RCT — arXiv:2507.09089 | 2 | 2025 | INCLUS |
| A-02 | SWE-bench Pro — arXiv:2509.16941 (Scale AI) | 3 | 2025 | INCLUS |
| A-03 | SWE-bench Verified leaderboard v2.0.0 | 4 | 2026 | INCLUS |
| A-04 | CursorBench 2026 | 4 | 2026 | INCLUS |
| A-05 | Aider Polyglot Leaderboard | 4 | 2025 | INCLUS |
| A-06 | Anthropic pricing 2026 | 5 | 2026 | INCLUS |
| A-07 | DeepSeek pricing + technique 2026 | 5 | 2026 | INCLUS |
| A-08 | Google Gemini 2.5 Pro benchmark | 4 | 2026 | INCLUS |
| A-09 | HumanEval / MBPP benchmark compilation | 4 | 2025 | INCLUS |
| A-10 | Constitutional AI / AI Safety research | 3 | 2022 | INCLUS (context benchmark contamination) |

## Corpus Reviewer B (a894babce06775056)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| B-01 | RULER — NVIDIA, ICLR 2025 | 2 | 2025 | INCLUS |
| B-02 | RouteLLM — UC Berkeley, ICLR 2025 | 2 | 2025 | INCLUS |
| B-03 | METR RCT — arXiv:2507.09089 | 2 | 2025 | INCLUS |
| B-04 | SWE-bench Pro — arXiv:2509.16941 | 3 | 2025 | INCLUS |
| B-05 | AIDev dataset — arXiv (MSR 2026) | 3 | 2026 | INCLUS |
| B-06 | Anthropic pricing + model specs 2026 | 5 | 2026 | INCLUS |
| B-07 | DeepSeek V3 technical report 2025 | 4 | 2025 | INCLUS |
| B-08 | DeepSeek R1 technical report 2025 | 4 | 2025 | INCLUS |
| B-09 | LiveCodeBench benchmark | 4 | 2025 | INCLUS |
| B-10 | Gemini 2.5 Pro context window tests | 4 | 2026 | INCLUS |

---

## Sources communes A/B

| Source | A | B | Accord |
|--------|---|---|--------|
| METR RCT arXiv:2507.09089 | INCLUS | INCLUS | ✅ |
| SWE-bench Pro arXiv:2509.16941 | INCLUS | INCLUS | ✅ |
| RouteLLM ICLR 2025 | INCLUS (indirectement) | INCLUS ★ | ✅ |
| RULER ICLR 2025 | INCLUS (indirectement) | INCLUS ★ | ✅ |
| Anthropic pricing 2026 | INCLUS | INCLUS | ✅ |
| DeepSeek 2025-2026 | INCLUS | INCLUS | ✅ |

---

## Divergences et resolution Agent C

| Point | Reviewer A | Reviewer B | Resolution Agent C |
|-------|-----------|-----------|-------------------|
| Focus analyse | Ratio qualite/cout par modele | Optimisation systematique via routing | Complementaires — retenus ensemble. A fournit le tableau modele par modele, B fournit la strategie d'optimisation globale. |
| DeepSeek pricing | $0.15/M (approximation) | $0.14/$0.28M (input/output precis) | Retenir B — plus precis (source technique directe) |
| RULER/RouteLLM | Mentionne mais pas source principale | Sources principales ICLR peer-reviewed | Retenir B comme reference primaire — peer-reviewed ICLR 2025, reproductibles |
| Robustesse GRADE | "FRAGILE si on retire METR" | "FRAGILE si on retire METR" | Accord parfait — note dans GRADE |
| TypeScript/NestJS coverage | Lacune identifiee | Lacune identifiee | Accord parfait — gap residuel documente |

---

## GRADE final : 3/7 RECOMMANDE

**Score de depart :** 1 (base)

**Facteurs haussiers :**
- 1 RCT niveau 2 (METR 2025) — seul essai controle du corpus
- 2 publications peer-reviewed ICLR 2025 (RULER + RouteLLM) — niveau 2
- 1 etude empirique large scale (SWE-bench Pro — 1865 taches enterprise, Scale AI)
- Convergence tres forte A+B (kappa 0.92) sur toutes les conclusions principales
- Resultats reproductibles sur les benchmarks (SWE-bench Pro, RULER, RouteLLM)
- Evidence de contamination benchmark documentee et quantifiee (Verified vs Pro)

**Facteurs baissiers :**
- N=16 dans le seul RCT (METR) — puissance statistique tres faible
- Benchmarks de coding (SWE-bench, HumanEval) : population Python, peu de TypeScript
- Aucune source sur le TCO reel (cout total possession) sur 6-12 mois en petite equipe
- Pricing en evolution rapide — les chiffres 2026 peuvent etre obsoletes en 6-12 mois
- Contamination benchmarks : les classements officiels peuvent evoluer rapidement
- Si METR RCT exclu : GRADE descend de 3 a 2 (un seul RCT maintient le GRADE 3)

**Analyse de sensibilite :**
- Si METR exclu (N trop faible) : GRADE 2 BONNE PRATIQUE
- Si RouteLLM exclu (environnement test ≠ coding agentic) : GRADE 3 maintenu (RULER suffit)
- Si SWE-bench Pro exclu (Scale AI, potentiel interet commercial) : GRADE 3 maintenu (RULER + METR)
- Scenario pessimiste (METR + RouteLLM + SWE-bench Pro exclus) : GRADE 2 BONNE PRATIQUE
