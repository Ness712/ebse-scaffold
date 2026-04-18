# Extractions — ai-model-coding-choice
# Comparaison Reviewer A vs Reviewer B + Synthese Agent C

**SLR EBSE du 2026-04-18**
**PICOC :** Choix modele LLM pour coding agent IA semi-autonome

---

## Convergences (accord fort A+B)

1. **SWE-bench Verified surestime les performances** — A et B ont inclus SWE-bench Pro (arXiv:2509.16941, Scale AI) et convergent : contamination des donnees d'entrainement confirmee. Opus 4.5 : 80.9% Verified vs 45.9% Pro (1865 taches enterprise). Les deux recommandent de ne pas se fier a SWE-bench Verified seul pour la selection de modele. (A et B)

2. **METR RCT : calibration des attentes** — Les deux ont inclus METR arXiv:2507.09089. Finding commun : +19% temps de completion avec agents IA pour developpeurs experimentes. Implication : les gains de vitesse sont surestimes, les gains de qualite sont a privilegier dans la justification. (A et B)

3. **Claude Sonnet 4.6 = meilleur ratio qualite/cout** — A et B convergent sur ce point, bien qu'avec des formulations differentes. A : tableau prix/SWE-bench par modele avec Sonnet en tete du ratio. B : comparaison systematique pricing tiers avec Sonnet comme reference. Accord parfait sur la recommendation. (A et B)

4. **Claude Opus 4.7 : escalade uniquement, pas par defaut** — A cite CursorBench (70% Opus 4.7 vs 58% Opus 4.6 = +12 points sur taches difficiles). B corrobore avec le ratio cout/performance ($5/$25M vs $3/$15M = x1.67 input, x1.67 output). Les deux recommandent Opus uniquement pour les taches bloquantes. (A et B)

5. **DeepSeek V3 : alternative ultra-economique viable** — A et B ont inclus DeepSeek V3 ($0.14/$0.28M, 66% SWE-bench). Accord : viable pour taches non-confidentielles, non recommande pour donnees RGPD. B precise DeepSeek R1 ($0.55/$2.19M) pour les taches de raisonnement. (A et B)

6. **Lacune TypeScript/NestJS** — A et B identifient le meme gap : aucune source ne couvre specifiquement TypeScript/NestJS. Les benchmarks utilisent principalement Python. La recommendation OLS est une extrapolation. (A et B)

---

## Divergences (resolues par Agent C)

### 1. Focus de l'analyse

**Reviewer A :** Approche modele par modele — tableau comparatif prix/performance pour chaque modele candidat (Sonnet, Opus, DeepSeek, Gemini). Emphasis sur le ratio qualite/cout par unite de tache.

**Reviewer B :** Approche systeme — optimisation globale via routing intelligent (RouteLLM) et gestion de la fenetre de contexte effective (RULER). Emphasis sur les strategies transversales applicables a tout modele de base.

**Resolution Agent C :** Les deux approches sont orthogonales et complementaires. La decision finale integre les deux : (1) tableau de selection de modele de base (approche A), (2) strategie d'optimisation routing + context management (approche B). L'agent OLS utilise Sonnet comme base ET applique les principes RULER et routing-like (Haiku pour taches simples).

### 2. DeepSeek pricing

**Reviewer A :** $0.15/M (approximation arrondie)

**Reviewer B :** $0.14/$0.28M (input/output precis, source technique directe)

**Resolution Agent C :** Retenir B ($0.14/$0.28M) — plus precis. Note : les prix DeepSeek varient selon la longueur du contexte et l'heure de la requete (pricing dynamique). Utiliser comme ordre de grandeur, verifier en temps reel.

### 3. RouteLLM et RULER — niveau de reference

**Reviewer A :** Mentionne RouteLLM et RULER comme findings pertinents mais ne les met pas en sources principales (pyramide implicite 3-4).

**Reviewer B :** RouteLLM et RULER sont des sources ICLR 2025 peer-reviewed — niveau 2 dans la pyramide EBSE. Les traite comme references primaires.

**Resolution Agent C :** Retenir la classification de B — ICLR 2025 est un peer-review rigoureux. RouteLLM (UC Berkeley) et RULER (NVIDIA) sont des references primaires de niveau 2. Cela renforce le GRADE 3 (deux sources niveau 2 en plus du RCT METR).

### 4. Robustesse GRADE (convergence totale)

**Reviewer A :** "FRAGILE si on retire METR RCT — grade passe de 3 a 2"
**Reviewer B :** "FRAGILE si on retire METR RCT — grade passe de 3 a 2"

**Resolution Agent C :** Accord parfait. Note conservee dans la decision finale. La fragilite est documentes dans le champ `robustness` de chaque principe.

---

## Analyse de sensibilite commune A+B

**Si METR RCT exclu** (N=16, population restreinte) :
- RouteLLM + RULER (niveau 2) maintiennent une base, mais sur des dimensions differentes (cout, contexte — pas productivite)
- SWE-bench Pro reste comme evidence de niveau 3
- GRADE descend de 3 a 2 BONNE PRATIQUE
- Conclusion : le RCT METR est le pivot du GRADE 3

**Si RouteLLM exclu** (environnement test MT Bench ≠ coding agentic reel) :
- RULER (ICLR 2025) reste source niveau 2
- GRADE 3 maintenu
- Recommendation routing moins robuste mais GRADE inchange

**Si SWE-bench Pro exclu** (Scale AI, potentiel interet commercial dans les benchmarks) :
- RULER + RouteLLM + METR maintiennent GRADE 3
- Perte de la preuve de contamination — mais le phenomene est documente dans d'autres sources
- GRADE 3 maintenu

**Scenario pessimiste** (METR + RouteLLM + SWE-bench Pro tous exclus) :
- Reste : RULER (ICLR 2025), pricing sources, benchmarks observationnels
- GRADE descend a 2 BONNE PRATIQUE

---

## Gap specifique identifie — non couvert par aucune source

**TCO (cout total de possession) reel sur 6-12 mois** : aucune etude ne mesure le cout reel d'un agent semi-autonome en production sur une petite equipe. Les etudes de pricing sont des couts par token, pas des couts reels incluant : iterations infructueuses, context overflow, re-runs de hooks, sessions de debug. Gap identifie par A et B — necessite un nouveau PICOC ou une mesure empirique interne OLS.

**TypeScript/NestJS sur benchmarks** : SWE-bench Pro et Aider Polyglot couvrent principalement Python. Aucune source ne valide les classements de modeles specifiquement sur TypeScript/NestJS. La recommendation de Sonnet 4.6 est robuste sur les benchmarks generaux mais pas validee specifiquement pour le contexte OLS.
