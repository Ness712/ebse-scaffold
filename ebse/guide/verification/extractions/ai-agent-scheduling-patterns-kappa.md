# Double Extraction — ai-agent-scheduling-patterns

**Date** : 2026-04-25
**Protocole** : methodology.md v3.0
**PICOC** : Batch 1 - D (sur 4 PICOCs A-D)

---

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 1 (BONNE PRATIQUE) | 2 (BONNE PRATIQUE high) |
| Sources incluses | 5 | 5 |
| Source principale | Documentation officielle Anthropic (matrice scheduling) | Documentation officielle Anthropic (memes sources) |
| Limitation principale | Cloud Routines research preview instable — composante critique de la matrice | Caps 5-25 runs/jour + CoI 100% vendor pour tous les mecanismes specifiques |
| Biais identifie | Vision ultra-conservative (preview = disqualification partielle) | Vision pragmatique (matrice valide meme avec une composante preview) |

---

## Kappa inter-rater

- **Kappa batch 1 global** (4 PICOCs A-D) = 0.07 (faible — Landis & Koch 1977)
- **Ce PICOC** : ACCORD PARTIEL — diff = 1 point (A=1 vs B=2)
- **Classification binaire** (>=3 vs <3) : A=negatif, B=negatif → accord binaire
- **Resolution** : Divergence < 2 points — resolution par moyenne arrondie, pas d'Agent C requis

---

## Divergences et resolution

### Divergences identifiees

**Divergence unique : poids de l'instabilite Cloud Routines sur le grade global**

Agent A a juge que Cloud Routines en research preview impacte suffisamment le grade global
pour rester a grade 1. Raisonnement : si une composante de la matrice est instable, la matrice
entiere est moins fiable. Le CoI 100% vendor (toutes sources = Anthropic) aggrave le conservatisme.

Agent B a juge que la matrice reste valide et actionnable meme avec une composante preview.
Les deux autres mecanismes (/loop et Desktop Tasks) sont stables et bien documentes. La matrice
de decision est differenciee et utile. Le marquage explicite [RESEARCH PREVIEW] pour Cloud
Routines suffit a informer l'utilisateur. Grade 2 est justifie.

### Resolution par moyenne

Divergence de 1 point uniquement → resolution par moyenne :
(1 + 2) / 2 = 1.5 → arrondi a 2 (vers le haut car la matrice fonctionnelle pour 2/3 composantes).

Logique de l'arrondi vers 2 : la matrice de decision est valide et actionnable pour les cas
/loop et Desktop Tasks (stables). Cloud Routines est correctement marque [RESEARCH PREVIEW].
Un utilisateur peut appliquer la recommandation en ignorant la composante preview — valeur
concrete de la matrice reste positive. Grade 2 avec marquage obligatoire.

---

## Grade final reconcilie

- **Grade : 2 (BONNE PRATIQUE)**
- **Niveau** : BONNE PRATIQUE
- **Rationale** : La matrice de decision Anthropic (/loop vs Desktop Tasks vs Cloud Routines)
  est differenciee et actionnable. Les deux mecanismes stables (/loop, Desktop Tasks) couvrent
  la majorite des cas d'usage. Cloud Routines est marque [RESEARCH PREVIEW] — ne pas utiliser
  en production critique sans test de stabilite. Le CoI 100% vendor sur ce PICOC plafonne le
  grade. Aucune etude independante ne compare les 3 mecanismes. Grade 2 = bonne pratique a
  appliquer avec vigilance sur la composante preview.
- **Confiance dans le grade** : MODEREE (accord binaire, mais CoI 100% limitant —
  aucune source independante sur ce sujet specifique)

---

## Contexte kappa batch

| PICOC | Agent A | Agent B | Diff | Accord binaire |
|-------|---------|---------|------|----------------|
| A | 3 | 1 | 2 | Non |
| B | 4 | 2 | 2 | Non |
| C | 1 | 1 | 0 | Oui |
| D (ce PICOC) | 1 | 2 | 1 | Oui (tous deux <3) |

Kappa batch 1 = 0.07 — pour ce PICOC, les deux agents s'accordent sur la classification
binaire (<3) mais divergent sur le sous-grade. Divergence typique du pattern observe dans
le batch : Agent A ultra-conservateur sur les features en preview, Agent B pragmatique.
La resolution par moyenne produit un grade 2 refletant la position intermediaire.

---

## Note methodologique sur le kappa batch 1

Le kappa global batch 1 de 0.07 (accord "slight" selon Landis & Koch 1977) reflete une
divergence structurelle entre les deux extracteurs sur deux axes :

1. **Ponderation du vendor CoI** : Agent A pondere le CoI Anthropic comme facteur disqualifiant
   fort ; Agent B le pondere comme facteur minus modere compensable par d'autres preuves.

2. **Seuil pour preuves positives** : Agent A exige des etudes controlees directes (RCT ou
   quasi-experimental comparatif) ; Agent B accepte les preuves empiriques a large echelle
   (N > 1000) meme si indirectes.

Ces divergences sont documentees pour calibrer les futurs batches. Recommandation pour Batch 2 :
aligner explicitement les criteres de ponderation CoI avant l'extraction pour reduire le kappa.
