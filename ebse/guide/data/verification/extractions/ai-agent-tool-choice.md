# Extractions — ai-agent-tool-choice
# Comparaison Reviewer A vs Reviewer B + Synthese Agent C

**SLR EBSE du 2026-04-18**
**PICOC :** Choix outil agent IA codeur pour petite equipe TypeScript

---

## Convergences (accord fort A+B)

1. **METR RCT : ralentissement contre-intuitif** — Les deux reviewers ont inclus METR arXiv:2507.09089 et accordent le meme poids a ce finding : +19% temps de completion pour les developpeurs experimentes avec agents IA. Seul RCT disponible — finding robuste malgre N=16. (A=source principale, B=source principale)

2. **PR merge rate comparatif MSR 2026** — Les deux reviewers ont inclus arXiv:2601.15195 (33K PRs, 47K devs). Classement identique : Codex 82.59% > Cursor 65.22% > Claude Code 59.04% > Devin 53.76% > Copilot 43.04%. Biais de selection note par les deux (selection positive des PRs les mieux reussies).

3. **Biais de selection etude mono-outil Claude Code** — A et B ont note que les 83.8% (arXiv:2509.14745, 567 PRs) surestiment la performance reelle en contexte comparatif — ces PRs sont selectionnees positivement ("Generated with Claude Code" = meilleurs projets). Explication de la divergence 83.8% vs 59%.

4. **Effet causal IDE prealable (CMU DiD)** — Les deux ont inclus arXiv:2601.13597 : l'adoption prealable de Cursor ou Copilot reduit causalement les gains marginaux d'un agent autonome ulterieur. Finding important pour la strategie d'adoption.

5. **DeerFlow 2.0 hors du calcul GRADE** — A exclu au screening (E1/E6), B inclus puis degrade (score qualite 2.5/11). Methodes differentes, meme resultat : DeerFlow n'entre pas dans le calcul GRADE.

6. **Metriques organisationnelles : facteurs culturels dominent** — A et B convergent sur DORA 2025 : le choix de l'outil IA est un facteur mineur par rapport aux facteurs culturels et de process pour les metriques DORA. GRADE 1 CHOIX_EQUIPE sur cette sous-question.

---

## Divergences (resolues par Agent C)

### 1. Structure du GRADE

**Reviewer A :** 1 GRADE global = 2/7 BONNE PRATIQUE (toutes sous-questions confondues)

**Reviewer B :** 3 sub-GRADEs distincts :
- Productivite reelle : 2/7 BONNE PRATIQUE (gains faibles ou absents en RCT)
- Superiority Claude Code vs concurrents sur metriques d'integration : 3/7 RECOMMANDE (convergence B-04, B-05, B-07 sur hooks/scaffold specifiques)
- Metriques organisationnelles : 1/7 CHOIX_EQUIPE (DORA 2025)

**Resolution Agent C :** Les 3 sub-GRADEs de B enrichissent la granularite de la decision sans contredire A. Le GRADE global reste 2/7 BONNE PRATIQUE. Les 3 sub-GRADEs sont retenus dans la decision finale car ils permettent des recommandations plus precisesselon le contexte specifique. Justification : un agent qui veut savoir "est-ce que Claude Code est superieur aux concurrents sur les metriques d'integration de scaffold ?" reçoit une reponse de GRADE 3 (plus de confiance), tandis que "les agents IA augmentent-ils la productivite globale ?" reste GRADE 2 (contradictoire).

### 2. DeerFlow 2.0 — methode d'exclusion

**Reviewer A :** Exclusion au screening (criteres E1 — hardware-gated inaccessible, E6 — zero donnee empirique coding). Ne rentre pas dans le corpus.

**Reviewer B :** Inclusion initiale puis degrade : score qualite 2.5/11 (seuil d'inclusion = 5/11). Source reclassifiee en "source descriptive uniquement".

**Resolution Agent C :** Les deux protocoles sont valides. Resultat identique : DeerFlow hors GRADE. Retenu comme note : DeerFlow 2.0 est un framework agent multi-LLM avec architecture DeerGraph et DeepSearch, mais sans donnees empiriques de coding publiees et accessible uniquement sur hardware haute gamme. Ne pas le recommander dans le contexte OLS.

---

## Analyse de sensibilite commune A+B

**Si METR RCT exclu** (N=16, population restreinte) :
- Plus aucun RCT dans le corpus
- GRADE descend de 2 a 1 (CHOIX_EQUIPE)
- Les etudes observationnelles restantes (MSR 2026, CMU DiD) sont trop heterogenes pour dépasser le GRADE 1
- Conclusion : le finding de ralentissement +19% est critique pour maintenir le GRADE 2

**Si MSR 2026 exclu** (biais possible — etude academique non peer-reviewed) :
- Perte du seul dataset comparatif multi-outils (5 outils, 33K PRs)
- GRADE baisse vers 1 — plus de base de comparaison objective entre outils
- Conclusion : MSR 2026 est indispensable pour tout classement entre outils

**Si CMU DiD exclu** (une seule etude causale) :
- Le finding "IDE prealable reduit les gains agents autonomes" n'a plus de support causal
- Retrogradation vers observation correlationnelle
- GRADE global inchange (2) mais recommendation strategique affaiblie

---

## Gap specifique identifie — non couvert par aucune source

**Contexte TypeScript/NestJS/petite equipe 2-5 personnes** : aucune source du corpus ne couvre specifiquement ce profil. Les etudes utilisent des populations de freelancers (METR), de grandes organisations (DORA), ou des repositories open-source multi-langages (MSR 2026). La recommendation OLS est une extrapolation — gap residuel documente.

**TCO (cout total de possession) de l'outil** : aucune etude sur le cout reel d'un abonnement Claude Code Max sur 6-12 mois incluant les iterations infructueuses, le context overflow, le temps de review. Les PR merge rates sont des metriques de sortie, pas de cout d'entree.
