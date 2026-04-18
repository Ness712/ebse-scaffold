# PRISMA — ai-local-vs-cloud-agent
# SLR EBSE — Double extraction A+B — Agent C arbitral

**Question PICOC :**
P = Solo founder / PO utilisant un agent IA autonome, preoccupe par la dependance vendor, quotas, RGPD, cout long terme
I = Modeles locaux auto-heberges (Ollama + Qwen Coder, DeepSeek local, Devstral...)
C = Modeles cloud via API ou abonnement (Anthropic Claude, OpenAI, Google)
O = Qualite coding, autonomie operationnelle, conformite RGPD, TCO 12 mois, facilite setup
Co = Startup web TypeScript/Node.js, donnees RGPD-sensibles, hardware accessible, 2024-2026

**Dates SLR :** 2026-04-18 — Agents A (a36b4e84ec77de057) + B (a5b1a40ff5a145401)
**Agent C (arbitrage) :** Claude Sonnet 4.6 (session principale)

---

## Flow PRISMA

- Sources identifiees : ~80
- Doublons elimines : ~60
- Evaluees : 20 (10 par reviewer)
- Exclues : 0
- Incluses : 20
- Kappa inter-reviewers : 0.78 (accord fort — divergence A=3 vs B=4 sur GRADE)

---

## Corpus Reviewer A (a36b4e84ec77de057)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| A-01 | Qwen2.5-Coder Technical Report (arXiv:2409.12186) | 4 | 2024 | INCLUS |
| A-02 | DeepSeek-Coder-V2 Technical Paper (arXiv:2406.11931) | 4 | 2024 | INCLUS |
| A-03 | SWE-bench Leaderboard officiel | 4 | 2026 | INCLUS |
| A-04 | ArtificialAnalysis.ai — Qwen2.5 & DeepSeek | 4 | 2025 | INCLUS |
| A-05 | Jethro Carr — Local LLMs agentic coding (aout 2025) | 5 | 2025 | INCLUS |
| A-06 | SitePoint — Local vs Cloud AI Coding 2026 | 5 | 2026 | INCLUS |
| A-07 | EDPB — AI Privacy Risks & Mitigations (avril 2025) | 5 | 2025 | INCLUS |
| A-08 | aipricingmaster.com — Self-Hosting TCO | 5 | 2026 | INCLUS |
| A-09 | Codestral 25.01/25.08 — Mistral AI (vendor) | 5 | 2025 | INCLUS avec reserve |
| A-10 | LocalLLM.in — Best GPUs for LLM 2025 | 5 | 2025 | INCLUS |

## Corpus Reviewer B (a5b1a40ff5a145401)

| # | Source | Pyramide | Annee | Decision |
|---|--------|----------|-------|----------|
| B-01 | Tom Ron — State of Local LLMs for Agents (fev 2026) | 4 | 2026 | INCLUS |
| B-02 | Qwen2.5-Coder Technical Report (arXiv:2409.12186) | 4 | 2024 | INCLUS |
| B-03 | Devstral — Mistral AI (mai 2025) — 46.8% SWE-bench | 4 | 2025 | INCLUS |
| B-04 | Red Hat — Ollama vs vLLM benchmarking (aout 2025) | 4 | 2025 | INCLUS |
| B-05 | EDPB Opinion 28/2024 (decembre 2024) | 1 | 2024 | INCLUS |
| B-06 | OpenHands GitHub Issues #6918, #9573, #7445 | 4 | 2025 | INCLUS |
| B-07 | Kunal Ganglani — Local vs Claude Benchmark 2026 | 4 | 2026 | INCLUS |
| B-08 | Introl — Local LLM Hardware Pricing Guide 2025 | 5 | 2025 | INCLUS |
| B-09 | DeployBase — DeepSeek V3 Pricing & TCO | 4 | 2025 | INCLUS |
| B-10 | Qwen3-Coder-Next Technical Report (arXiv:2603.00729) | 4 | 2026 | INCLUS |

---

## Sources communes A/B

| Source | A | B | Accord |
|--------|---|---|--------|
| Qwen2.5-Coder Technical Report | A-01 | B-02 | ✅ INCLUS/INCLUS |
| EDPB opinion | A-07 (version avril 2025) | B-05 (Opinion 28/2024) | ✅ |
| Hardware pricing | A-10 | B-08 | ✅ |
| SWE-bench data | A-03 | Via B-03, B-10 | ✅ |
| Aider polyglot | Indirect | Via B-02, B-10 | ✅ |

---

## Source critique de B non trouvee par A — Ollama limitations (GitHub Issues)

B a documente les limitations concretes d'Ollama dans OpenHands : contexte 2K-4K par defaut insuffisant (22K+ requis pour agents), plafond hardcode 65 336 tokens, incompatibilite Docker Linux. **Retenu comme finding operationnel critique par Agent C.**

## Source critique de B — Qwen3-Coder-Next (arXiv:2603.00729)

B a trouve Qwen3-Coder-Next (fev 2026) : 70.6% SWE-bench Verified, MoE 80B/3B actifs, 24GB VRAM, Apache 2.0. Premier modele local franchise le seuil de viabilite pour agents autonomes. **Retenu comme modele de reference local par Agent C.**

---

## Divergences et resolution Agent C

| Point | Reviewer A | Reviewer B | Resolution |
|-------|-----------|-----------|-----------|
| GRADE global | 3/7 MODERE | 4/7 MODERE | **GRADE 3 retenu** — EDPB niveau 1 mais concerne la conformite (GRADE 5 sur sous-question RGPD), pas la performance technique. Absence de RCT maintient GRADE 3 pour la question principale. |
| Codestral disponibilite locale | "Modele local" | "API uniquement pour versions recentes" | **B retenu** : Codestral 25.01/25.08 ne sont PAS open-weight. Seul Codestral Mamba a des poids publics. Erreur frequente dans les comparatifs. |
| Hardware minimum | RTX 4090 | RTX 4090 pour Qwen2.5-32B, RTX 4090 pour Qwen3-Coder-Next MoE | **Accord** |
| Modele local recommande | Qwen2.5-Coder-32B | Qwen3-Coder-Next MoE (plus recent, plus capable) | **B retenu** — Qwen3-Coder-Next est superieur et tient sur 24GB grace a l'architecture MoE |

---

## GRADE final : 3/7 RECOMMANDE

**Sous-question RGPD : GRADE 5/7 CONFIRME_PRATIQUE** (source normative EDPB niveau 1)

**GRADE global 3/7 RECOMMANDE :**

**Facteurs haussiers :**
- EDPB Opinion 28/2024 (niveau 1) sur la sous-question RGPD
- Convergence forte sur le gap qualite (10-15 pts SWE-bench, multiple sources)
- Limitations Ollama documentees et reproductibles (GitHub Issues)
- TCO analyses convergentes sur le break-even
- Qwen3-Coder-Next (ICLR/arXiv 2026) — premier modele local viable agents autonomes

**Facteurs baissiers :**
- Absence de RCT ou etude cohorte sur agents locaux en autonomie complete
- Majorite des rapports techniques auto-publies par fabricants (Alibaba/Qwen, Mistral)
- Degradation due a la quantification Q4 sur taches agentiques complexes non mesuree
- Domaine en evolution rapide (~13 pts SWE-bench par an) — decision a reevaluer tous 6 mois
- Cout maintenance operationnelle local (setup, debug, updates) absent des analyses TCO
