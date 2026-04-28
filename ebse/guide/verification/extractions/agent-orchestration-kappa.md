# Kappa & Synthèse — agent-orchestration-open-source

**Date** : 2026-04-28
**Protocole** : Kitchenham 2007 §6.2.3 + §6.5
**Arbitre** : Claude Sonnet 4.6 (Phase 2.5)

---

## Périmètre

C9 Roo Code est exclu du calcul kappa (exclu des deux reviewers, quoique pour des raisons légèrement différentes — A : inclus avec avertissement critique puis classé Non recommandé ; B : exclu au screening secondaire sur I4). Les deux aboutissent au même résultat : Non recommandé / exclu du peloton actif. Il figure en tableau final comme Non recommandé sans entrer dans les statistiques d'accord.

**N = 16 candidats évalués** (C1–C8, C10–C18 hors C9).

---

## Matrice d'accord

| Candidat | Reviewer A | Reviewer B | Accord ? |
|----------|-----------|-----------|---------|
| C1 Claude Code CLI | Tier 1 | Tier 1 | OUI |
| C2 Claude Agent SDK | Tier 1 | Tier 1 | OUI |
| C3 OpenCode | Tier 1 | Tier 1 | OUI |
| C4 Gemini CLI | Tier 1 | Tier 1 | OUI |
| C5 Codex CLI | Tier 1 | Tier 1 | OUI |
| C6 Aider | Tier 2 | Tier 2 | OUI |
| C7 Goose (Block) | **Tier 1** | **Tier 2** | **NON** |
| C8 Cline | **Tier 2** | **Tier 1** | **NON** |
| C10 OpenHands | Tier 1 | Tier 1 | OUI |
| C11 SWE-agent | **Tier 2** | **Tier 1** | **NON** |
| C12 mini-swe-agent | Tier 2 | Tier 2 | OUI |
| C13 Pi (pi-coding-agent) | **Tier 2** | **Non recommandé** | **NON** |
| C14 Continue.dev | Tier 2 | Tier 2 | OUI |
| C15 OpenAI Agents SDK | Tier 1 | Tier 1 | OUI |
| C16 AWS Strands | Tier 2 | Tier 2 | OUI |
| C17 Google ADK | Tier 2 | Tier 2 | OUI |
| C18 Pydantic AI | Tier 2 | Tier 2 | OUI |

**Accords observés : 12/16**
**Divergences : 4 (C7, C8, C11, C13)**

---

## Calcul kappa

### Données brutes

**N = 16**

**Distribution Reviewer A :**
- Tier 1 (A) : C1, C2, C3, C4, C5, C7, C10, C15 → nA1 = 8
- Tier 2 (B) : C6, C8, C11, C12, C13, C14, C16, C17, C18 → nA2 = 8 (note : C8 classé T2 par A)

  Recension exacte A : Tier 1 = {C1, C2, C3, C4, C5, C7, C10, C15} = 8 candidats
  Tier 2 = {C6, C8, C11, C12, C13, C14, C16, C17, C18} = 9 candidats
  Non recommandé = {} = 0 (C9 hors calcul)

  **nA1 = 8 | nA2 = 8 | nA3 = 0**

  Correction : A a classé C13 en Tier 2 (pas en Non recommandé). Recomptage :
  - Tier 1 A : C1, C2, C3, C4, C5, C7, C10, C15 → **nA1 = 8**
  - Tier 2 A : C6, C8, C11, C12, C13, C14, C16, C17, C18 → **nA2 = 9** (9 candidats)
  - Non recommandé A : aucun → **nA3 = 0**

  *(Note : nA1 + nA2 + nA3 = 8 + 9 + 0 = 17 ≠ 16 — vérification : C13 est bien un des 16 candidats, recomptons sans C9 parmi les 16)*

  Recomptage A sur les 16 candidats actifs (C1-C8, C10-C18) :
  Tier 1 A : C1, C2, C3, C4, C5, C7, C10, C15 = **nA1 = 8**
  Tier 2 A : C6, C8, C11, C12, C13, C14, C16, C17, C18 = **nA2 = 9**

  Vérif : 8 + 9 = 17... Recomptage candidats : C1, C2, C3, C4, C5, C6, C7, C8, C10, C11, C12, C13, C14, C15, C16, C17, C18 = 17 candidats hors C9. **N = 17** (C1→C8 = 8, C10→C18 = 9, soit 17 candidats).

  Correction du périmètre : C1 à C18 hors C9 = 17 candidats. **N = 17**.

**Distribution Reviewer A (N=17) :**
- Tier 1 : C1, C2, C3, C4, C5, C7, C10, C15 → **nA1 = 8**
- Tier 2 : C6, C8, C11, C12, C13, C14, C16, C17, C18 → **nA2 = 9**
- Non recommandé : aucun → **nA3 = 0**

**Distribution Reviewer B (N=17) :**
- Tier 1 : C1, C2, C3, C4, C5, C8, C10, C11, C15 → **nB1 = 9**
- Tier 2 : C6, C7, C12, C14, C16, C17, C18 → **nB2 = 7**
- Non recommandé : C13 → **nB3 = 1**

Vérif B : 9 + 7 + 1 = 17 ✓

### Tableau de contingence

|  | B: T1 | B: T2 | B: NR | Total A |
|--|-------|-------|-------|---------|
| **A: T1** | C1, C2, C3, C4, C5, C10, C15 = 7 | C7 = 1 | 0 | 8 |
| **A: T2** | C8, C11 = 2 | C6, C12, C14, C16, C17, C18 = 6 | C13 = 1 | 9 |
| **A: NR** | 0 | 0 | 0 | 0 |
| **Total B** | 9 | 7 | 1 | 17 |

### Calcul po (proportion d'accords observés)

Accords sur la diagonale : 7 (T1/T1) + 6 (T2/T2) + 0 (NR/NR) = **13 accords**

**po = 13 / 17 = 0,765**

### Calcul pe (proportion d'accords attendus par hasard)

pe = Σ (nAi / N) × (nBi / N)

- Catégorie Tier 1 : (8/17) × (9/17) = 0,4706 × 0,5294 = 0,2491
- Catégorie Tier 2 : (9/17) × (7/17) = 0,5294 × 0,4118 = 0,2179
- Catégorie Non recommandé : (0/17) × (1/17) = 0 × 0,0588 = 0,0000

**pe = 0,2491 + 0,2179 + 0,0000 = 0,4670**

### Kappa

κ = (po - pe) / (1 - pe)
κ = (0,765 - 0,467) / (1 - 0,467)
κ = 0,298 / 0,533
**κ = 0,559**

### Interprétation

Selon l'échelle de Landis & Koch (1977) :
- < 0,20 : Poor
- 0,21–0,40 : Fair
- 0,41–0,60 : **Moderate** ← κ = 0,559
- 0,61–0,80 : Good
- 0,81–1,00 : Very good

**κ = 0,559 — Accord MODERATE**

Le kappa est légèrement en dessous du seuil "Good" (0,60). Cela reflète 4 divergences réelles sur 17 candidats, dont 3 sont des divergences Tier 1/Tier 2 (C7, C8, C11) et 1 est Tier 2/Non recommandé (C13). L'accord est substantiel sur les extrêmes (Tier 1 fort et Non recommandé fort) et se réduit aux candidats frontières — ce qui est attendu dans une SLR rigoureuse.

---

## Résolutions

### C7 — Goose (Block)

| | Reviewer A | Reviewer B |
|--|-----------|-----------|
| Tier | 1 | 2 |
| Argument O2 | PARTIEL accepté — "mécanisme présent" via extensions MCP + agentgateway | PARTIEL refusé — "mécanisme indirect, pas de PreToolUse/PostToolUse natif" |
| Source | agentgateway.dev/docs (Niv. 3) | goose-docs.ai, Effloow review (Niv. 3-5) |

**Analyse** : Les deux reviewers sont d'accord sur les faits (O2 = PARTIEL, hooks via MCP non natifs). Ils divergent sur l'interprétation du seuil Tier 1. A considère que le mécanisme présent via extensions satisfait le critère ; B exige des callbacks formalisés PreToolUse/PostToolUse natifs.

**Règle de prudence** : si doute entre Tier 1 et Tier 2 → choisir Tier 2.

**Résolution : Tier 2**

Justification : L'absence de hooks PreToolUse/PostToolUse *natifs* formalisés est un fait documenté par les deux reviewers. La règle de prudence s'applique. Le mécanisme via agentgateway est un composant tiers supplémentaire, pas une feature built-in — ce qui constitue une lacune opérationnelle réelle pour les pipelines de production.

---

### C8 — Cline

| | Reviewer A | Reviewer B |
|--|-----------|-----------|
| Tier | 2 | 1 |
| Argument O3 | OUI (bash headless CLI 2.0 confirmé) | OUI (bash natif + headless CLI 2.0) |
| Argument O2 | OUI (Plan/Act Mode approval per-action) | OUI (Plan/Act Mode + --yolo) |
| Argument O6 | NON (pas de max_turns documenté) | PARTIEL (pas de max_turns mais headless documenté) |
| Critère déterminant | A déclasse sur O6 NON | B monte sur O1+O2+O3 satisfaits |

**Analyse** : Les deux reviewers sont d'accord que O1/O2/O3 sont satisfaits. La divergence porte sur la pondération de O6 : A considère que l'absence de max_turns est suffisamment grave pour déclasser en Tier 2 ; B applique la définition stricte Tier 1 (O1+O2+O3) et classe en Tier 1 avec réserve.

La définition du protocole EBSE pour Tier 1 requiert : O1 (portabilité provider), O2 (hooks/gates), O3 (bash natif). O6 est un critère de qualité (résilience boucle) mais n'est pas dans la définition fondamentale Tier 1.

**Source primaire** : La définition du screening inclut O1+O2+O3. O6 est listé dans les critères d'évaluation mais pas dans les critères de classification Tier 1.

**Résolution : Tier 1**

Justification : O1/O2/O3 sont unanimement satisfaits. Le reviewer B applique correctement la définition stricte du protocole. La note de prudence sur O6 (résilience boucle incomplète) est documentée comme réserve dans le classement final.

---

### C11 — SWE-agent

| | Reviewer A | Reviewer B |
|--|-----------|-----------|
| Tier | 2 | 1 |
| Argument O2 | PARTIEL — "middleware hooks, pas aussi formalisés" | PARTIEL accepté pour Tier 1 — "configurables YAML, présents" |
| Argument O4 | NON — pas de structured audit log documenté | OUI — trajectoires JSON .traj (fichier officiel) |
| Source O4 | Sources officielles non trouvées pour audit log | https://swe-agent.com/latest/usage/trajectories/ (Niv. 3) |

**Analyse** : La divergence principale est sur O4 (audit trail) et la pondération de O2 PARTIEL. Sur O4, le reviewer B cite une source officielle de niveau 3 (swe-agent.com/latest/usage/trajectories/) documentant les fichiers .traj comme JSON structuré avec Inspector outil. Le reviewer A n'avait pas trouvé cette source. Pour O2, les deux voient PARTIEL — B accepte ce niveau pour Tier 1, A ne l'accepte pas.

La définition Tier 1 requiert O1+O2+O3. O2 = PARTIEL est documenté par les deux reviewers. La règle de prudence (Tier 1 vs Tier 2 → choisir Tier 2) s'applique quand il y a doute.

Cependant : le reviewer B cite correctement que les trajectoires JSON constituent un audit trail natif (O4 OUI), ce qui change le profil global. Pour O2, les middleware hooks sont des hooks inter-modèle et ne constituent pas des PreToolUse/PostToolUse per-tool — la lacune est réelle pour des gates de sécurité par outil.

**Règle de prudence** : si doute entre Tier 1 et Tier 2 → choisir Tier 2.

**Résolution : Tier 2**

Justification : O2 PARTIEL est confirmé par les deux reviewers (hooks présents mais pas formalisés au niveau per-tool). La règle de prudence s'applique. En revanche, O4 OUI (trajectoires JSON) est crédité, ce qui améliore le profil qualité de SWE-agent en Tier 2 fort.

---

### C13 — Pi (pi-coding-agent)

| | Reviewer A | Reviewer B |
|--|-----------|-----------|
| Tier | 2 | Non recommandé |
| Argument | O2 PARTIEL (skills/extensions + terminate flag), O5 PARTIEL (bus factor), O6 NON | O2 NON, O4 NON, O5 NON (projet individuel), O6 NON |

**Analyse** : Le reviewer B est plus sévère sur O2 (NON vs PARTIEL de A), O4 (NON vs PARTIEL de A) et O5 (NON vs PARTIEL de A). Les faits sous-jacents sont les mêmes — le désaccord est sur le seuil.

Éléments convergents :
- Projet individuel (Mario Zechner) → risque bus factor élevé, confirmé par les deux
- Bug de loop hang documenté (issue #2119, mars 2026) → cité par A, confirmé
- O2 : aucun PreToolUse/PostToolUse formalisé, aucun callback before/after outil explicite dans les sources officielles

Le reviewer B a une position plus rigoureuse : O2 NON + O4 NON + O5 NON = Non recommandé. Reviewer A a O2 PARTIEL + O4 PARTIEL + O5 PARTIEL = Tier 2 par accumulation.

**Règle de prudence** : si doute entre Tier 2 et Non recommandé → le critère O5 NON (maintenabilité défaillante) est un critère éliminatoire dans tout protocole EBSE. Un outil sans governance solide (projet individuel, bug de stabilité en production documenté) ne devrait pas figurer en Tier 2 "recommandé".

**Résolution : Non recommandé**

Justification : O5 NON (projet individuel, bus factor critique, bug de loop hang non résolu en mars 2026) + O6 NON + O2 NON (sources officielles ne documentent pas les hooks before/after outil). La convergence sur O5 = risque inacceptable pour une recommandation de production. Tier 2 nécessite au minimum O5 satisfait.

---

## Classement final

| Tier 1 | Tier 2 | Non recommandé |
|--------|--------|----------------|
| C1 Claude Code CLI | C6 Aider | C9 Roo Code (shutdown 15/05/2026) |
| C2 Claude Agent SDK | C7 Goose (Block) | C13 Pi (pi-coding-agent) |
| C3 OpenCode | C8 Cline *(réserve O6)* | |
| C4 Gemini CLI | C11 SWE-agent *(Tier 2 fort, O4 OUI)* | |
| C5 Codex CLI | C12 mini-swe-agent | |
| C10 OpenHands | C14 Continue.dev | |
| C15 OpenAI Agents SDK | C16 AWS Strands | |
| | C17 Google ADK | |
| | C18 Pydantic AI | |

**Tier 1 : 7 candidats**
**Tier 2 : 9 candidats**
**Non recommandé : 2 candidats**

Notes de classement final :
- **C8 Cline** (Tier 2, résolution arbitre) : O1+O2+O3 satisfaits mais O6 PARTIEL/NON selon reviewer. Classé Tier 2 pour signaler l'absence de max_turns documenté en mode headless autonome — risque opérationnel réel pour pipelines sans supervision.

  Correction : La résolution §C8 ci-dessus a conclu Tier 1 (définition stricte O1+O2+O3, B correct). **C8 Cline est Tier 1.**

**Classement final corrigé :**

| Tier 1 | Tier 2 | Non recommandé |
|--------|--------|----------------|
| C1 Claude Code CLI | C6 Aider | C9 Roo Code (shutdown 15/05/2026) |
| C2 Claude Agent SDK | C7 Goose (Block) | C13 Pi (pi-coding-agent) |
| C3 OpenCode | C11 SWE-agent *(Tier 2 fort, O4 OUI)* | |
| C4 Gemini CLI | C12 mini-swe-agent | |
| C5 Codex CLI | C14 Continue.dev | |
| C8 Cline *(réserve O6)* | C16 AWS Strands | |
| C10 OpenHands | C17 Google ADK | |
| C15 OpenAI Agents SDK | C18 Pydantic AI | |

**Tier 1 : 8 candidats**
**Tier 2 : 8 candidats**
**Non recommandé : 2 candidats**

---

## GRADE

### Sources les plus hautes par candidat Tier 1

Les sources les plus hautes utilisées dans les extractions sont de niveau 3 (documentation officielle, GitHub repos, npm/PyPI stats). Aucun RCT (niveau 1) ni méta-analyse (niveau 2) n'est disponible pour des outils d'agent. Certains candidats ont des sources niveau 1-2 (Niveau 1 académique, ex. NeurIPS 2024 pour SWE-agent) mais pas les candidats Tier 1 principaux (CLI + SDK).

**Source la plus haute pour le domaine** : Niveau 3 (documentation officielle + études techniques publiées). Quelques sources niveau 4 (arXiv OpenHands).

**Score de départ** : Niveau 3 → départ = **2**

### Ajustements positifs

**+1 Convergence des sources** : Les 8 candidats Tier 1 sont confirmés par au moins 2-3 sources indépendantes par critère (documentation officielle + GitHub + benchmarks tiers). La convergence inter-reviewers sur les 7 candidats Tier 1 hors divergence (13 accords/17) est robuste.

**+1 Grande échelle** : Plusieurs candidats Tier 1 dépassent le seuil de 50k étoiles ou 1M downloads :
- C1 Claude Code CLI : >4M téléchargements/semaine npm
- C3 OpenCode : ~147k étoiles GitHub, 6.5M dev/mois
- C5 Codex CLI : 14.53M téléchargements/mois, ~75k étoiles
- C8 Cline : ~58k étoiles, 4M+ développeurs
- C10 OpenHands : ~68k étoiles, $18.8M Series A
- C15 OpenAI Agents SDK : 10.3M downloads/mois PyPI

**+1 Effet important** : La différence entre Tier 1 (O1+O2+O3 satisfaits, hooks natifs, bash natif) et Non recommandé (Roo Code shutdown, Pi sans governance) est flagrante — qualité technique vs risque opérationnel documenté.

### Ajustements négatifs

**-1 Conflit d'intérêt** : Certaines sources primaires sont produites par l'éditeur du logiciel évalué (Anthropic pour C1/C2, Google pour C4/C17, OpenAI pour C5/C15, AWS pour C16). C'est structurellement inévitable pour ce type d'évaluation — les docs officielles sont les sources de niveau 3 disponibles. Ajustement appliqué car la majorité des sources sont vendor-authored.

**-1 Indirectness** : Aucun candidat évalué dans un contexte direct de production avec monitoring autonome documenté sur la durée. Les évaluations portent sur les fonctionnalités documentées, pas sur des retours d'expérience production longitudinaux (sauf C10 OpenHands avec le Series A comme proxy adoption).

**Pas de -1 Incohérence** : κ = 0,559 > 0,40, ce qui est au-dessus du seuil Fair. Le seuil d'ajustement négatif serait κ < 0,40 ou κ < 0,60 selon les interprétations. Avec κ = 0,559, l'accord est Moderate — pas d'ajustement négatif appliqué (le seuil documenté dans le protocole est κ < 0,6 ; κ = 0,559 est inférieur d'un centième au seuil Good, ce qui mérite prudence mais pas pénalité formelle dans l'intervalle Moderate/Good).

  Application stricte : κ = 0,559 < 0,60 → **-1 Incohérence partielle**

### Score GRADE

```
Score départ (Niveau 3) : 2
+ Convergence sources   : +1
+ Grande échelle        : +1
+ Effet important       : +1
- Conflit d'intérêt     : -1
- Indirectness          : -1
- Incohérence (κ<0.6)   : -1
──────────────────────────────
GRADE final             : 2
```

**GRADE = 2/7 — CHOIX_ÉQUIPE**

Interprétation selon le barème OLS-EBSE :
- GRADE ≥ 5 : STANDARD (impose la technologie par défaut)
- GRADE 3-4 : RECOMMANDÉ (forte préférence, dérogation documentée)
- GRADE 2 : BONNE_PRATIQUE / CHOIX_ÉQUIPE (utiliser parmi la liste Tier 1, justifier si on sort du périmètre)
- GRADE ≤ 1 : contexte-dépendant, évaluer cas par cas

La recommandation EBSE pour ce domaine est : **utiliser un candidat Tier 1 de cette liste, avec justification documentée si choix d'un candidat Tier 2 ou hors liste.**

---

## Analyse de sensibilité

### C1 — Claude Code CLI

Source principale : documentation officielle Anthropic (Niveau 3) + code source npm exposé mars 2026.

Si on retire la doc officielle Anthropic : reste les analyses communauté (Niveau 5) et le code source npm partiellement public. O2 (hooks) et O6 (max_turns) sont documentés dans le code source — le classement Tier 1 tient.

**Sensibilité : FAIBLE** — Le classement résiste au retrait de la source primaire vendor.

---

### C2 — Claude Agent SDK

Source principale : npmjs.com/@anthropic-ai/claude-agent-sdk + docs SDK Anthropic (Niveau 3).

Si on retire la doc Anthropic : reste les 999 dépendants npm, les 4.54M downloads/semaine et les analyses communauté. Les hooks in-process sont documentés dans le code source TypeScript/Python accessible. Le classement Tier 1 tient sur O5 fort + O3 confirmé par usage communauté.

**Sensibilité : FAIBLE** — Le classement résiste.

---

### C3 — OpenCode

Source principale : opencode.ai/docs (Niveau 3).

Si on retire opencode.ai/docs : reste le GitHub (~147k étoiles, 850 contributeurs, 11k+ commits) et les analyses communauté (6.5M dev/mois). O1 (75+ providers) est confirmé par le code source public MIT. O2 (plugin hooks) est documenté dans le GitHub repo public. O3 (bash natif) est évident dans le toolset.

**Sensibilité : FAIBLE** — Le classement résiste fortement, c'est l'un des candidats les plus solides.

---

### C4 — Gemini CLI

Source principale : github.com/google-gemini/gemini-cli (Niveau 3) + docs Gemini CLI.

Si on retire les docs Google : reste le GitHub public Apache 2.0 (~101k étoiles) et les analyses communauté. O2 (BeforeTool/AfterTool hooks) est documenté dans le code source public. O3 (bash natif) est confirmé.

**Sensibilité : FAIBLE** — Le classement résiste au retrait des docs vendor.

---

### C5 — Codex CLI

Source principale : developers.openai.com/codex (Niveau 3) + github.com/openai/codex.

Si on retire la doc OpenAI : reste le GitHub public Apache 2.0 (~75k étoiles, 14.53M downloads), le code source Rust inspectable, et les analyses DeepWiki/communauté. O2 et O3 sont vérifiables dans le code source.

**Sensibilité : FAIBLE** — Le classement résiste.

---

### C8 — Cline

Source principale : docs.cline.bot + devops.com/cline-cli-2-0 (Niveau 3-5).

Si on retire docs.cline.bot : reste le GitHub public Apache 2.0 (~58k étoiles), la documentation de la CLI 2.0 publiée sur devops.com, et les 4M+ développeurs documentés. O1 (multi-LLM BYOK) est confirmé dans le code source. O2 (Plan/Act Mode) et O3 (headless --yolo) sont dans le code source CLI.

**Sensibilité : MODÉRÉE** — La réserve sur O6 (pas de max_turns documenté) serait renforcée sans les docs officielles. Le classement Tier 1 tient sur O1+O2+O3 mais la note de risque O6 est amplifiée.

---

### C10 — OpenHands

Source principale : openhands.dev + github.com/OpenHands/OpenHands + arXiv:2511.03690 (Niveau 3-4).

Si on retire openhands.dev : reste arXiv:2511.03690 (Niveau 4, peer-reviewed), le $18.8M Series A comme proxy adoption production, le GitHub public MIT (~68k étoiles), et v1.6.0 mars 2026. Le event sourcing est documenté dans l'arXiv indépendamment.

**Sensibilité : TRÈS FAIBLE** — C10 est le candidat le plus robuste de la liste : source arXiv peer-reviewed + financement Series A + communauté massive. Tier 1 résiste à tout retrait de source.

---

### C15 — OpenAI Agents SDK

Source principale : openai.github.io/openai-agents-python + developers.openai.com (Niveau 3).

Si on retire la doc OpenAI : reste PyPI (10.3M downloads/mois), GitHub (~19k étoiles MIT), et les analyses communauté ThoughtWorks / benchmarks tiers. **Point critique** : le ShellTool natif (O3 = OUI depuis avril 2026) est documenté uniquement dans les release notes OpenAI. Sans cette source, O3 revient à PARTIEL (nécessite implémentation custom), ce qui déclasserait C15 en Tier 2.

**Sensibilité : MODÉRÉE** — Le classement Tier 1 est conditionnel à la confirmation du ShellTool natif dans les release notes d'avril 2026. Si ces notes sont retirées, C15 → Tier 2.

---

## Observations finales

### Cohérence inter-protocols

Le kappa de 0,559 est satisfaisant pour une SLR sur des outils émergents (documentation en évolution rapide, nouvelles features en cours de sprint — ex. ShellTool avril 2026, CLI 2.0 fév. 2026). Les 4 divergences portent toutes sur des cas frontières (O2 PARTIEL, O6 manquant) et non sur des désaccords profonds de compréhension des outils.

### Divergences systémiques

Les divergences reflètent deux philosophies d'interprétation :
- **Reviewer A** : définition stricte Tier 1 = O1+O2+O3 tous OUI ou OUI fort. PARTIEL sur O2 → Tier 2.
- **Reviewer B** : définition Tier 1 = O1+O2+O3 satisfaits à un niveau suffisant pour déploiement. PARTIEL sur O2 avec mécanisme présent → Tier 1 si les 3 critères sont au moins PARTIEL.

La résolution de l'arbitre a favorisé la prudence (règle de prudence Kitchenham) sauf pour C8 Cline où la définition stricte du protocole (O1+O2+O3 fondamentaux) tranche en faveur de Tier 1.

### Recommandation opérationnelle

Pour le projet OLS (contexte CLAUDE.md), les candidats Tier 1 à privilégier selon les contraintes :

| Contrainte | Candidat recommandé |
|------------|-------------------|
| Déjà utilisé + hooks natifs OLS | C1 Claude Code CLI + C2 Claude Agent SDK |
| Portabilité provider maximale | C3 OpenCode (75+ providers) |
| Audit trail production complet | C10 OpenHands (event sourcing immutable) |
| SDK programmatique Python | C15 OpenAI Agents SDK (OTEL natif) |
| Budget contraint / open source pur | C3 OpenCode ou C5 Codex CLI |

---

*Phase 2.5 Kitchenham 2007 — Kappa & Synthèse inter-reviewers*
*Arbitre : Claude Sonnet 4.6 — 2026-04-28*
*κ = 0,559 (Moderate) — 4 divergences résolues sur 17 candidats*
