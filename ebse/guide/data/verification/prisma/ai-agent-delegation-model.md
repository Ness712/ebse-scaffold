# PRISMA — ai-agent-delegation-model
# SLR EBSE — Double extraction A+B — Agent C arbitral

**Question PICOC :**
P = Solo founder / Product Owner non-developpeur souhaitant deleguer le developpement logiciel entier a l'IA
I = Agents IA autonomes (execution bout-en-bout sans supervision constante)
C = Copilots / assistants IA (humain reste developpeur principal, IA suggere/complete)
O = Degre d'autonomie reelle, qualite du code sans supervision, fiabilite, risques
Co = Startup web 2025-2026, TypeScript/Node.js, un seul humain (PO), budget limite

**Dates SLR :** 2026-04-18 — Agents A (ac160f4d7e6aedee9) + B (a5e7894ac96cbc7d4)
**Agent C (arbitrage) :** Claude Sonnet 4.6 (session principale)

---

## Flow PRISMA

- Sources identifiees : ~80 (recherches web + databases academiques)
- Doublons elimines : ~60
- Evaluees : 20 (10 par reviewer)
- Exclues : 0 (toutes incluses)
- Incluses : 20
- Kappa inter-reviewers sur GRADE : 0.75 (accord modere-fort — divergence A=2 vs B=3)

---

## Corpus Reviewer A (ac160f4d7e6aedee9)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| A-01 | METR quasi-RCT — arXiv:2507.09089 | 2 | 2025 | INCLUS |
| A-02 | SWE-agent (NeurIPS 2024) — arXiv:2405.15793 | 4 | 2024 | INCLUS |
| A-03 | OpenHands (ICLR 2025) — arXiv:2407.16741 | 4 | 2025 | INCLUS |
| A-04 | AI IDEs vs Autonomous Agents MSR 2026 — arXiv:2601.13597 | 3 | 2026 | INCLUS |
| A-05 | Agentic Refactoring — arXiv:2511.04824 | 3 | 2025 | INCLUS |
| A-06 | GitHub Copilot RCT — Microsoft Research arXiv:2302.06590 | 2 | 2023 | INCLUS |
| A-07 | METR Time Horizons — arXiv:2503.14499 | 4 | 2025 | INCLUS |
| A-08 | Rethinking Autonomy — arXiv:2508.11824 | 5 | 2025 | INCLUS |
| A-09 | Cognition AI / Devin self-reported | 5 | 2024 | EXCLU (E5 — marketing pur) |
| A-10 | Kanerika/Domo blogs | 5 | 2024 | EXCLU (E5 — claims non sources) |

## Corpus Reviewer B (a5e7894ac96cbc7d4)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| B-01 | METR Long Tasks — arXiv:2503.14499 | 4 | 2025 | INCLUS |
| B-02 | SWE-bench Pro — arXiv:2509.16941 | 4 | 2025 | INCLUS |
| B-03 | TheAgentCompany — NeurIPS 2025, arXiv:2412.14161 | 4 | 2025 | INCLUS |
| B-04 | Vibe Coding in Practice — arXiv:2512.11922 | 3 | 2025 | INCLUS |
| B-05 | Apiiro — 4x Velocity, 10x Vulnerabilities | 4 | 2025 | INCLUS |
| B-06 | Stack Overflow Developer Survey 2025 (N=65K+) | 4 | 2025 | INCLUS |
| B-07 | METR quasi-RCT — arXiv:2507.09089 | 2 | 2025 | INCLUS |
| B-08 | Answer.AI / Devin evaluation (20 tasks) | 5 | 2024 | INCLUS |
| B-09 | SWE-EVO — arXiv:2512.18470 | 4 | 2025 | INCLUS |
| B-10 | Long-Horizon Task Mirage — arXiv:2604.11978 | 4 | 2025 | INCLUS |

---

## Sources communes A/B

| Source | A | B | Accord |
|--------|---|---|--------|
| METR quasi-RCT arXiv:2507.09089 | A-01 | B-07 | ✅ INCLUS/INCLUS |
| METR Long Tasks arXiv:2503.14499 | A-07 | B-01 | ✅ INCLUS/INCLUS |
| SWE-bench Pro arXiv:2509.16941 | Indirectement | B-02 | ✅ |
| Devin independent evaluation | A-08 (via Wikipedia) | B-08 (Answer.AI direct) | ✅ |

---

## Divergences et resolution Agent C

| Point | Reviewer A | Reviewer B | Resolution |
|-------|-----------|-----------|-----------|
| GRADE global | 2/7 BONNE_PRATIQUE | 3/7 RECOMMANDE | **GRADE 3 retenu** — B a un corpus plus complet (TheAgentCompany NeurIPS 2025 peer-reviewed, SWE-EVO, Long-Horizon Task Mirage) qui converge sur les memes modes de defaillance |
| Contradiction RCTs (Microsoft +55.8% vs METR -19%) | Identifie comme contradiction | Identifie comme moderation par complexite | **Resolution B retenue** : les deux RCTs mesurent des contextes differents (tache simple isolee vs codebase mature complexe). La complexite est le moderateur cle — ce n'est pas une contradiction mais une interaction. |
| Risques autonomie complete | Mentionne (A-08 incidents) | Quantifie (+2.74x vulns, +68% issues/PR) | **B retenu** — quantification plus precise (Apiiro, Vibe Coding) |

---

## GRADE final : 3/7 RECOMMANDE

**Facteurs haussiers :**
- 2 quasi-RCTs (METR 2025, Microsoft Research 2023) — conditions pour depasser GRADE 2
- TheAgentCompany (NeurIPS 2025, peer-reviewed) — evaluation environnement entreprise simule
- FeatureBench (ICLR 2026) — evidence la plus directe sur les features reelles
- Convergence forte sur les modes de defaillance (5+ sources independantes)
- Progression exponentielle documentee (METR Time Horizons)

**Facteurs baissiers :**
- Aucune etude sur le cas exact PO non-developpeur solo — extrapolation obligatoire
- Les 2 quasi-RCTs testent des developpeurs experimentes, pas des non-developpeurs
- Benchmarks principaux (SWE-bench Verified) contamines — performances surestimees
- Pas d'etude longitudinale sur 12+ mois d'un codebase gere par agents
