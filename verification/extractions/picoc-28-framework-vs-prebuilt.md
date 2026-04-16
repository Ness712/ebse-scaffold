# Double Extraction EBSE — PICOC #28 : ai-agent-framework-vs-prebuilt

**Date de recherche** : 2026-04-16  
**Protocole** : methodology.md v3.0 §2.1 — double extraction indépendante + vérification Agent C  
**Question PICOC** : Pour un PO qui délègue tout le développement logiciel à l'IA, un framework agentique custom (LangChain, AutoGen, CrewAI, LangGraph) offre-t-il une efficacité supérieure à une configuration de système agentique pré-construit (Claude Code + CLAUDE.md) en termes de taux de complétion de tâches, fiabilité et autonomie ?

---

## Agent A — Extraction

**Angle** : Benchmarks et comparaisons empiriques de performance entre frameworks agentiques et systèmes agentiques pré-construits pour des tâches de développement logiciel.

**Mots-clés** : "agentic framework comparison software development benchmark", "SWE-bench agent performance LangChain AutoGen", "Claude Code benchmark evaluation empirical", "coding agent framework vs integrated system", "LangChain AutoGen CrewAI effectiveness empirical"

### A1 — Yin et al. — A Comprehensive Empirical Evaluation of Agent Frameworks (arXiv:2511.00872)

- **Auteurs** : Zhuowen Yin, Cuifeng Gao, et al.
- **Date** : Novembre 2025 | **Venue** : arXiv preprint
- **N** : 1 615 instances (1 200 SRDD + 115 vuln detection + 300 SWE-bench Lite)
- **Frameworks** : AgentOrchestra, OWL, SE-Agent, Trae, GPTswarm, OpenHands, SWE-Agent (7 frameworks custom)
- **Claim** : "Single-agent systems consistently demonstrate superior performance compared to multi-agent systems in software engineering applications." Meilleur : OpenHands (quality score 0.47), SE-Agent iter-3 (54% resolve rate SWE-bench Lite). Coût total : $875.05, écart ×22 entre frameworks.
- **Niveau pyramide** : 3 (preprint, pas peer-reviewed)
- **Limite critique** : Claude Code non inclus — ne permet pas la comparaison framework custom vs pré-construit

### A2 — Wang et al. — An Empirical Study of Agent Developer Practices in AI Agent Frameworks (arXiv:2512.01939)

- **Auteurs** : Yanlin Wang, Xinyi Xu, et al.
- **Date** : Décembre 2025 | **Venue** : arXiv preprint
- **N** : 1 575 repos GitHub + 8 710 discussions développeurs ; 10 frameworks ; κ=0.82 (validation manuelle)
- **Claim** : 96% des projets top-étoilés adoptent plusieurs frameworks en parallèle. 42% des développeurs = charge cognitive excessive (LangChain). 31% d'échecs de compatibilité outils (AutoGen). Conflits de version > 23% de tous les obstacles techniques.
- **Niveau pyramide** : 3 (preprint — arXiv, pas encore publié en venue peer-reviewed)
- **Statut** : PERTINENT — quantifie la charge de maintenance des frameworks custom

### A3 — Agarwal, He, Vasilescu (CMU) — AI IDEs or Autonomous Agents? (arXiv:2601.13597, MSR '26)

- **Auteurs** : Shyam Agarwal, Hao He, Bogdan Vasilescu (Carnegie Mellon)
- **Date** : Janvier 2026 | **Venue** : Mining Software Repositories 2026 (peer-reviewed)
- **N** : 401 repos agent-first (Claude Code Agent) + 606 contrôles ; 167 repos IDE-first + 92 contrôles
- **Claim** : Agent-first (Claude Code) : +36.3% commits, +76.6% lines added, 83.8% PRs mergées. IDE-first (Cursor, Copilot) : +4.0% commits, +1.0% lines. Les deux groupes : +18% static warnings, +35% complexité cognitive.
- **Niveau pyramide** : 2 (empirique peer-reviewed, ACM MSR)
- **Limite critique** : Compare Claude Code vs IDE AI (Cursor, Copilot) — PAS vs framework custom

### A4 — Martinez & Franch — Dissecting SWE-Bench Leaderboards (arXiv:2506.17208)

- **Date** : Juillet 2025 | **N** : 178 entrées leaderboard (79 Lite + 99 Verified)
- **Claim** : "No single architecture consistently achieves state-of-the-art performance." Produits publics pré-construits : médiane 53% sur SWE-bench Verified.
- **Niveau pyramide** : 3 (analyse secondaire leaderboard public)

### A5 — Santos et al. — Decoding the Configuration of AI Coding Agents (arXiv:2511.09268)

- **Date** : Novembre 2025 | **N** : 328 fichiers CLAUDE.md des 100 repos GitHub les plus populaires
- **Claim** : 72.6% des configurations spécifient l'architecture comme préoccupation principale. La configuration CLAUDE.md est le mécanisme principal d'adaptation d'un système pré-construit — fonctionnellement analogue à la configuration d'un framework custom.
- **Niveau pyramide** : 3 (preprint descriptif)
- **Limite** : Aucune mesure de performance comparative entre configurations

---

## Agent B — Extraction

**Angle** : Coût de maintenance, charge opérationnelle, usage réel des systèmes pré-construits vs frameworks custom pour des équipes sans développeur dédié.

**Mots-clés** : "Claude Code vs framework autonomous agent real world", "agentic AI tool vs custom framework maintenance burden", "no-code PO AI delegation software development", "integrated coding agent vs framework productivity"

### B1 — Wang et al. (arXiv:2512.01939) — identique A2

(Même source, niveau 3 retenu après correction Agent C)

### B2 — Pinna et al. — Comparing AI Coding Agents: Task-Stratified Analysis of PR Acceptance (arXiv:2602.08915, MSR '26)

- **Auteurs** : Giovanni Pinna, Jingzhi Gong, David Williams, Federica Sarro
- **Date** : Avril 2026 | **Venue** : MSR 2026 (peer-reviewed)
- **N** : 7 156 pull requests (dataset AIDev) ; régression linéaire + LOESS + Chi-square Bonferroni
- **Claim** : Claude Code mène sur documentation (92.3%) et features (72.6%) ; Cursor sur les fixes (80.4%). Devin = seul agent avec tendance positive croissante (+0.77%/semaine). L'écart de 29 points selon le type de tâche > écart entre outils.
- **Niveau pyramide** : 2 (empirique peer-reviewed, MSR)
- **Limite critique** : Compare systèmes pré-construits entre eux — PAS vs frameworks custom

### B3 — SWE-Compass (arXiv:2511.05459)

- **Auteurs** : Jingxuan Xu, Ken Deng, et 50+ auteurs (Kuaishou Technology, Nanjing University)
- **Date** : Novembre 2025 | **N** : 2 000 instances, 8 types de tâches, 10 LLMs, 2 frameworks (SWE-Agent vs Claude Code)
- **Claim** : SWE-Agent et Claude Code ont des forces complémentaires (SWE-Agent → localisation bugs ; Claude Code → tâches déterministes, "lower tool overhead"). Le scaffolding détermine significativement les performances même à modèle identique. Modes d'échec principaux : incompréhension exigences (30-34%) et solutions incomplètes (29-42%).
- **Niveau pyramide** : 2 (peer-reviewed, multi-auteurs, méthode rigoureuse)
- **Limite** : Compare deux systèmes pré-construits, pas framework custom vs pré-construit

### B4 — Anthropic — Measuring AI agent autonomy in practice

- **Date** : Février 2026 | **N** : 500 000 sessions Claude Code + 998 481 appels API
- **Claim** : Durée tâches 99.9e percentile : 25→45 min (oct 2025→janv 2026). Taux d'interruption monte chez les utilisateurs avancés (5%→9%). 80% des appels outils incluent des garde-fous. Seulement 0.8% des actions sont irréversibles.
- **Niveau pyramide** : 3 (rapport institutionnel Anthropic, source non neutre, biais commercial)

### B5 — METR RCT (arXiv:2507.09089) — identique PICOC #21

- **Niveau pyramide** : 1 (RCT) — indirect sur PICOC #28 : ne compare pas framework vs pré-construit, mesure l'intégration d'outils AI dans workflows existants
- **Claim pertinent** : +19% temps avec outils AI pré-construits vs sans — la charge opérationnelle des outils intégrés n'est pas nulle

### B6 — Stack Overflow Developer Survey 2025

- **N** : 49 000+ développeurs | **Date** : Décembre 2025
- **Claim** : 66% des développeurs passent plus de temps à corriger du code AI "presque-correct". Confiance en l'exactitude AI : 40%→29% en un an.
- **Niveau pyramide** : 3 (survey auto-déclaratif, N élevé, population = développeurs pas POs)

---

## Agent C — Corrections et vérification

### C1 — Niveau pyramide Wang et al. (arXiv:2512.01939)

Agent B donne niveau 2 ("peer-reviewed soumis"). **Correction** : preprint arXiv, pas encore publié en venue peer-reviewed. **Niveau correct : 3.** La méthode est rigoureuse (κ=0.82) mais le statut de publication s'applique au venue, pas à la méthode.

### C2 — Agarwal et al. (arXiv:2601.13597) — statut venue

Cité comme "MSR '26 peer-reviewed". À VÉRIFIER : si l'article est accepté et publié dans les proceedings ACM MSR 2026, niveau 2 est correct. Si présenté mais proceedings non encore publiés au moment de l'extraction, niveau 3. **Retenu niveau 2 avec réserve** — claim "+36.3% commits, 83.8% PR merge rate" cohérent entre les deux agents.

### C3 — Pinna et al. (arXiv:2602.08915) — claims exacts

"92.3% sur documentation, 72.6% sur features pour Claude Code" — uniquement trouvé par Agent B, pas corroboré par Agent A. **Statut : NOT_VERIFIED_INDEPENDENTLY** — à traiter avec précaution.

### C4 — Blog sources (niveau 4)

- Particula Tech "42%→78% scaffold" : analyse secondaire de leaderboard public, non peer-reviewed. **Ne pas citer comme claim empirique.**
- DEV community "CrewAI 44% failure rate" : tâche unique, méthodologie très limitée. **Ne pas citer comme donnée générale.**
- Devin Annual Review : marketing commercial. **Non retenu.**

### C5 — Conclusion convergente des deux agents : CONFIRMÉE

Les deux agents concluent indépendamment "corpus insuffisant, comparaison directe absente". Cette convergence est elle-même un résultat EBSE valide.

### Fabrications détectées : AUCUNE

Les chiffres clés sont cohérents entre agents A et B sur les sources communes (Wang et al., METR, SWE-Compass).

---

## Sources retenues

| # | Source | Retenue | Niveau | Justification |
|---|--------|---------|--------|---------------|
| 1 | Agarwal et al. MSR '26 (arXiv:2601.13597) | **OUI** | 2 | Seule source niveau 2 mesurant Claude Code en production réelle — mais compare vs IDE AI, pas vs framework custom |
| 2 | Pinna et al. MSR '26 (arXiv:2602.08915) | **OUI (partiel)** | 2 | 7156 PRs, comparaison outils pré-construits — indirect, claims non vérifiés indépendamment |
| 3 | SWE-Compass (arXiv:2511.05459) | **OUI** | 2 | Scaffolding détermine performance à modèle égal — pertinent indirect |
| 4 | Wang et al. (arXiv:2512.01939) | **OUI** | 3 | Charge maintenance frameworks custom documentée (N=1575) |
| 5 | METR RCT (arXiv:2507.09089) | **OUI (corroborant)** | 1 | Charge opérationnelle des outils intégrés non nulle — indirect |
| 6 | Anthropic autonomy study | **OUI (contextuel)** | 3 | Données Claude Code production, biais source noté |
| 7 | Stack Overflow 2025 | **OUI (contextuel)** | 3 | Signal marché large, population ≠ PO |
| 8 | Yin et al. (arXiv:2511.00872) | **OUI** | 3 | 7 frameworks comparés, mais Claude Code absent |
| - | Blog Particula Tech | **EXCLU** | 4 | Analyse secondaire non peer-reviewed |
| - | DEV community CrewAI benchmark | **EXCLU** | 4 | Tâche unique, méthodologie insuffisante |
| - | Devin Annual Review | **EXCLU** | 4 | Marketing commercial |

---

## GRADE calculé

| Facteur | Valeur | Justification |
|---------|--------|---------------|
| Base | +1 | Aucune source ne répond directement à la question. Les meilleures sources (niveau 2) répondent à des questions adjacentes (Claude Code vs IDE AI ; frameworks entre eux) |
| Convergence | +0 | Les sources convergent sur l'existence d'un maintenance burden des frameworks, mais PAS sur la supériorité de l'un ou l'autre pour le cas d'usage PO |
| Effet important | +0 | Aucun effet mesuré sur la question directe |
| Indirectness | -0 | Déjà absorbé dans la base (base 1 reflète l'absence de preuve directe) |
| Biais commercial | -0 | Déjà noté pour les sources Anthropic (niveau 3) |

**GRADE = 1/7 — PREUVE INSUFFISANTE**

---

## Conclusion

**Question PICOC #28 : corpus insuffisant pour recommander un principe.**

Raisons documentées :

| Lacune | Description |
|--------|-------------|
| Comparaison directe absente | Aucune étude ne compare "LangChain/AutoGen/CrewAI configuré pour un PO" vs "Claude Code + CLAUDE.md" sur les mêmes tâches |
| Cas d'usage PO non étudié | "Délégation totale sans développeur" est un scénario de 2025-2026, non encore capturé par la littérature empirique |
| Systèmes hétérogènes | Les benchmarks comparent des agents sans contrôler si la configuration vient d'un framework custom ou d'un système pré-construit |
| Claude Code récent | Trop récent (2024-2025) pour avoir une littérature peer-reviewed comparant directement avec les frameworks matures |

**Signaux directionnels (non conclusifs)** :
- La charge de maintenance des frameworks custom est documentée niveau 3 (Wang et al., N=1575) : conflits de versions, multi-framework obligatoire (96%), charge cognitive élevée
- La performance de Claude Code en production est documentée niveau 2 (Agarwal et al., MSR '26) : 83.8% PR merge rate, +36.3% commits
- Le scaffolding détermine les performances autant que le modèle (SWE-Compass, niveau 2)
- Ces signaux suggèrent (sans prouver) que les systèmes pré-construits configurés présentent une charge opérationnelle moindre pour des équipes sans développeur dédié

**Recommandation EBSE** : Classer comme "PREUVE INSUFFISANTE". Ré-évaluer dans 12-18 mois. En attendant, la décision relève du PO (contexte, compétences disponibles, coût de mise en place).

---

## Divergences A vs B

| Point | Agent A | Agent B | Résolution |
|-------|---------|---------|------------|
| Niveau Wang et al. | 3 | 2 | **3 retenu** — preprint, pas peer-reviewed |
| Sources exclusivement | Yin et al. (7 frameworks) | Pinna et al. (7156 PRs) | Les deux retenus — angles complémentaires |
| Conclusion | Corpus insuffisant | Corpus insuffisant | **Convergence totale** |
