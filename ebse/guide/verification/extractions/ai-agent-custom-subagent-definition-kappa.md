# Double Extraction — ai-agent-custom-subagent-definition

**Date** : 2026-04-25
**Protocole** : methodology.md v3.0
**PICOC** : Batch 1 - A (sur 4 PICOCs A-D)

---

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 3 (RECOMMANDE) | 1 (BONNE PRATIQUE) |
| Sources incluses | 5 | 5 |
| Source principale | arXiv 2503.01935 N=260 (+150% task completion) | GitHub issues routing unreliability (usage empirique) |
| Limitation principale | CoI Anthropic sur sources primaires | Absence d'etudes comparatives controlees agents custom vs inline |
| Biais identifie | Favorisation evidence positive, sous-ponderation routing unreliability | Favorisation evidence negative, sous-ponderation arXiv empirique |

---

## Kappa inter-rater

- **Kappa batch 1 global** (4 PICOCs A-D) = 0.07 (faible — Landis & Koch 1977 : "slight agreement")
- **Ce PICOC** : DESACCORD — diff = 2 points (A=3 vs B=1)
- **Classification binaire** (>=3 vs <3) : A=positif, B=negatif → desaccord
- **Resolution** : Agent C requis (divergence >= 2 points)

---

## Divergences et resolution

### Divergences identifiees

**Divergence principale : ponderation de l'evidence negative sur le routage**

Agent A a inclus l'arXiv 2503.01935 (N=260, +150% completion) comme preuve centrale et a classe
le vendor CoI comme facteur minus modere. Agent A a juge les rapports de routing unreliability
comme evidence anecdotique insuffisante pour contre-indiquer la pratique.

Agent B a focalise sur les rapports d'usage empirique de routing unreliability (GitHub issues,
community reports) et a estime que l'absence d'etudes comparatives controlees (agents custom vs
inline Agent()) rendait la recommandation non justifiable au-dela de grade 1. Agent B a juge que
le CoI Anthropic etait disqualifiant pour sources 1-4.

**Divergence secondaire : classification des sources Anthropic**

Agent A a classe les docs Anthropic comme L3 (vendor-doc avec valeur factuelle).
Agent B a argue que le CoI etant disqualifiant, les sources Anthropic ne devaient pas contribuer
positivement au grade, et que seul arXiv comptait — mais arXiv N=260 ne test pas specifiquement
les agents custom files vs inline Agent().

### Resolution Agent C

Agent C a retenu :
1. L'arXiv 2503.01935 valide le principe d'isolation contextuelle et le scaling multi-agent.
   C'est une evidence pertinente (principe) mais pas une validation directe du mecanisme
   specifique (fichiers .claude/agents/ vs inline).
2. Le routage automatique via description: est documente comme peu fiable selon des rapports
   empiriques convergents (multiple community sources, GitHub issues) — ce n'est pas seulement
   anecdotique.
3. Le CoI Anthropic est fort sur sources 1-4 — ces sources ne peuvent pas porter seules un
   grade elevee.
4. L'absence d'etudes comparatives controlees specifiques est un facteur limitant reel.

Calcul de reconciliation Agent C :
- Base L3 (vendor-doc, principe valide) : 2
- +1 pour arXiv N=260 (evidence empirique independante, N > 100)
- -1 pour CoI Anthropic fort (sources 1-4 = vendor, sans replication independante)
- -1 pour routing unreliability documentee (evidence negative empirique convergente)
- Final : 2 - 1 + 1 - 1 = 1? Reconsideration Agent C : le principe d'isolation est distinct
  du mecanisme de routage. Le grade s'applique au PRINCIPE d'agents custom files, pas uniquement
  au routage automatique. La limitation routage est documentee comme restriction dans le principe.
- Reconsidered final : 2 (BONNE PRATIQUE)

---

## Grade final reconcilie

- **Grade : 2 (BONNE PRATIQUE)**
- **Niveau** : BONNE PRATIQUE
- **Rationale** : Le principe d'isolation contextuelle via agents custom files est valide (arXiv N=260).
  Cependant : (1) le CoI Anthropic est fort sur toutes les sources primaires positives, (2) le
  routage automatique via description: est documente comme peu fiable en usage reel, (3) il n'existe
  pas d'etude comparative controlee agents custom files vs inline Agent(). Grade 2 = pratique utile
  pour les roles stables et recurrents, sous reserve de validation du routage en staging.
- **Confiance dans le grade** : FAIBLE (kappa batch 0.07, divergence 2 points sur ce PICOC)

---

## Contexte kappa batch

| PICOC | Agent A | Agent B | Diff | Accord binaire |
|-------|---------|---------|------|----------------|
| A (ce PICOC) | 3 | 1 | 2 | Non |
| B | 4 | 2 | 2 | Non |
| C | 1 | 1 | 0 | Oui |
| D | 1 | 2 | 1 | Oui (tous deux <3) |

Kappa batch 1 = 0.07 — divergences principalement sur la ponderation du vendor CoI
vs les preuves academiques independantes. Tendance Agent A : pro-feature (grade plus eleve).
Tendance Agent B : conservateur-critique (grade plus bas, focalisation limitations).
