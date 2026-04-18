# PRISMA — ai-agent-scaffold-methodology
# SLR EBSE en deux phases — Double extraction A+B puis A'+B' — Agent C arbitral

**Question PICOC (phase 2 etendue) :**
P = Equipes developpant des systemes autonomes ou semi-autonomes (agents IA codeurs, systemes critiques embarques)
I = Methodologie formelle pour (1) specifier des regles de comportement, (2) valider leur application, (3) auditer les deviations, (4) tracer les decisions de configuration
C = Approche ad-hoc sans methodologie formelle
O = Fiabilite, completude, auditabilite, tracabilite des decisions de configuration/comportement
Co = Systemes en production necessitant une validation formelle

**Dates SLR :**
- Phase 1 (litterature IA/agentique) : 2026-04-17 — Agents A (ab0ad4d51ce5ba819) + B (abeb3cf4762047c73)
- Phase 2 etendue (domaines safety-critical) : 2026-04-17 — Agents A' (a85e27cabc5d71b8e) + B' (ae2dce79416f6badc)
**Agent C (arbitrage) :** Claude Sonnet 4.6 (session principale)

---

## Phase 1 — Litterature IA/agentique

- Sources identifiees : 36
- Evaluees : 10
- Incluses : 10, Exclues : 0
- Kappa A/B : 1.0
- Conclusion phase 1 : PAS de methodologie Kitchenham-equivalente dans la litterature agentique. GRADE 3.

## Phase 2 — Domaines safety-critical

### Corpus A' (10 sources)
IEC 61508-3, DO-178C, ASPICE v4.0, ISO 26262-6, NASA-GB-8719.13, Bloomfield & Rushby (Assurance 2.0), Adaptation DO-178C/IEC 61508 a l'IA, MISRA Guidelines, MIL-STD-882E, ECSS-E-ST-40C

### Corpus B' (10 sources)
IEC 61508, DO-178C, Assurance Cases (Bloomfield & Rushby), STPA (Leveson/MIT), Methodes formelles agents IA (ABC, AgentSpec, VeriGuard, Agent Contracts), ISO/PAS 8800, UL 4600, SOTIF (ISO 21448), NASA NPR 7150.2, IEEE 1012

### Sources communes A'+B'
IEC 61508, DO-178C, Bloomfield & Rushby : INCLUS/INCLUS (kappa=1.0 sur corpus commun)

### Divergences resolues par Agent C

| Point | A' | B' | Resolution |
|-------|----|----|------------|
| STPA | Non dans corpus | INCLUS | Retenu : STPA tres pertinent (UCAs pour agents LLM, arXiv:2506.01782) |
| UL 4600 | Non dans corpus | INCLUS | Retenu : audit outcomes-based directement applicable |
| MISRA Compliance | INCLUS | Non dans corpus | Retenu : classification Mandatory/Required/Advisory est le candidat le plus directement transposable |
| NASA | NASA-GB-8719.13 (guidebook) | NASA NPR 7150.2 (standard) | Les deux retenus — roles complementaires |
| SOTIF ISO 21448 | Non dans corpus | EXCLU (X2) | Exclu confirme : trop specifique automobile/perceptuel |

### Inclusions finales synthese
17 sources incluses au total (10 phase 1 + 7 nouvelles phase 2 non dupliquees)

## Conclusion finale

La methodologie **EXISTE** dans les domaines safety-critical. Pas sous la forme d'un standard unique cle-en-main pour les scaffolds NLP, mais sous la forme d'un ensemble de methodes convergentes qu'on peut synthetiser en BSAF (Behavioral Specification and Assurance Framework).

5 patterns metho convergents sur 15+ sources :
1. Niveaux de criticite grades (MISRA Mandatory/Required/Advisory, IEC SIL, DO-178C DAL)
2. Specification comportementale formalisee + tracabilite bidirectionnelle
3. Processus de deviation documente (Deviation Records/Permits)
4. Audit independant (IV&V, Configuration Audit, SQA)
5. Safety Case / Assurance Case comme artefact central

## GRADE Phase 2 : 4 RECOMMANDE

Score depart : 3
Facteurs haussiers : kappa=1.0, 6+ standards niveau 1-2 convergents, litterature de transition peer-reviewed (AgentSpec ICSE 2026, Assurance 2.0), MISRA directement transposable
Facteurs baissiers : aucun standard natif pour scaffolds NLP, standards payants partiellement accessibles, corpus emergeant 2025-2026 pas encore replique

---

## Phase 3 — Methodologie de conception exhaustive (SDMF)

- Sources identifiees : 20 (10 par agent)
- Evaluees : 20
- Incluses : 15 (dont 3 partielles), Exclues : 5
- Kappa A''/B'' sur source commune (STRIDE) : 1.0
- Divergence resolue par Agent C : Constitutional AI (A''=EXCLU comme mecanisme, B''=INCLUS comme cas negatif) → Resolution : INCLUS (cas negatif + preuve empirique d'insuffisance ad hoc, arXiv:2510.07686)

### Corpus A'' (10 sources)
KAOS/GORE (van Lamsweerde IEEE TSE 2000), NFR Framework (Chung et al. Springer 2000), STRIDE/Threat Modeling (Naik TechRxiv 2024), FMEA/FMECA (MIL-STD-1629A + IEC 60812:2018), Misuse Cases (Sindre & Opdahl RE Journal 2005), Business Rules BRMS, Security Policy Models (Bell-LaPadula/Clark-Wilson), ODD/SOTIF (IEEE ICCVE 2024 + ISO 21448:2022), Checklists WHO/Aviation (PMC 2024), Constitutional AI (Anthropic arXiv:2212.08073)

### Corpus B'' (10 sources)
MIT AI Risk Repository (Slattery et al. arXiv:2408.12622), STRIDE/Threat Modeling (Kohnfelder & Garg 1999), CAST/STAMP (Leveson MIT + Mylius arXiv:2506.01782), Requirements Completeness (Kassab & AbdElhameed SEAA 2025), Policy Design (Howlett 2000), Constitutional AI (Zhang et al. arXiv:2510.07686 stress-test), BDI/AOSE (Wooldridge 2000), NIST AI RMF (NIST AI 100-1 2023), RFC/IETF, Agile DoD/Story Mapping

### Sources communes A''/B''
STRIDE : INCLUS A'' et B'' (kappa=1.0)
Constitutional AI : divergence resolue (cf. ci-dessus)

### Divergences resolues par Agent C

| Point | A'' | B'' | Resolution |
|-------|-----|-----|------------|
| Constitutional AI | EXCLU/structurel | INCLUS (cas negatif) | Retenu : cas negatif le plus puissant du corpus (70 000+ divergences, arXiv:2510.07686) |
| STPA | Absent du corpus | INCLUS (CAST/STAMP) | Retenu : deja dans Phase 2 + Mylius 2025 confirme application LLM frontier |
| Business Rules BRMS | EXCLU | Absent | Exclu confirme : pas de mecanisme d'identification exhaustive |
| Security Policy Models | EXCLU/template | Absent | Exclu comme mecanisme principal ; pattern structurel CDI/UDI retenu comme note |
| Agile DoD | Absent | EXCLU | Exclu confirme |

### Inclusions finales Phase 3 (sources nouvelles par rapport Phase 1+2)
KAOS/GORE, FMEA/FMECA, Misuse Cases, ODD/SOTIF, Requirements Completeness (Kassab 2025), MIT AI Risk Repository, Constitutional AI stress-test (arXiv:2510.07686), NFR Framework (partiel), Checklists WHO (partiel), BDI/AOSE, NIST AI RMF, Policy Design (Howlett)

### 4 classes de mecanismes d'exhaustivite identifies (synthese Agent C)
1. **Partition theorique MECE** — STRIDE (6 categories de violations) + BDI (Beliefs/Desires/Intentions) : exhaustivite par construction si partition est valide
2. **Decomposition systemique** — STPA/CAST : 4 types d'UCA par noeud de controle, exhaustivite conditionnelle a la completude de la structure
3. **Decomposition fonctionnelle** — FMEA : Boundary Diagram + P-Diagram + modes de defaillance, exhaustivite structurelle par composant
4. **Validation multi-dimensionnelle** — Requirements Completeness (Kassab) : syntaxique + semantique + comportemental + couverture

Criterium formel unique du corpus : **KAOS domain-completeness** (van Lamsweerde & Letier IEEE TSE 2000) — seul critere mathematiquement testable : Dom UNION {O} |= NOT G pour chaque obstacle O de l'objectif G.

## GRADE final : 5 CONFIRME

Score depart : 4 (Phase 2)
Facteurs haussiers Phase 3 : KAOS domain-completeness (seul critere formel de completude du corpus), FMEA standard militaire directement transposable (MIL-STD-1629A 1949 / IEC 60812:2018), 3 revues systematiques (Horkoff 2019 PMC GORE, Kassab 2025 SEAA RE completeness, AI Risk Repository MIT 43 frameworks), preuve empirique d'insuffisance ad hoc sur 12 modeles frontier (70 000+ divergences arXiv:2510.07686), kappa=1.0 STRIDE
Facteurs baissiers Phase 3 : transposition ODD (vehicules autonomes → agents logiciels) non encore validee empiriquement ; integration KAOS+FMEA+STRIDE proposee pour la premiere fois — non encore replicuee independamment
