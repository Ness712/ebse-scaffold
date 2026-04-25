# Double Extraction — ai-agent-path-scoped-context

**Date** : 2026-04-25
**Protocole** : methodology.md v3.0
**PICOC** : Batch 1 - C (sur 4 PICOCs A-D)

---

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 1 (BONNE PRATIQUE) | 1 (BONNE PRATIQUE) |
| Sources incluses | 4 | 4 |
| Source principale | Documentation officielle Anthropic (paths: spec) | GitHub issues has-repro (evidence negative confirmee) |
| Limitation principale | Feature underdocumentee, donnees directes manquantes | 3 bugs confirmes has-repro, dont 1 tagged not-planned |
| Biais identifie | Approche conservative coherente | Approche conservative coherente (biais minimal) |

---

## Kappa inter-rater

- **Kappa batch 1 global** (4 PICOCs A-D) = 0.07 (faible — Landis & Koch 1977)
- **Ce PICOC** : ACCORD PARFAIT — diff = 0 (A=1 vs B=1)
- **Classification binaire** (>=3 vs <3) : A=negatif, B=negatif → accord
- **Resolution** : Accord direct — Agent C non requis

---

## Divergences et resolution

### Divergences identifiees

Aucune divergence sur le grade final. Les deux agents ont converge vers grade 1 par des
chemins differents :

- **Agent A** : raisonnement par absence de donnees positives. La feature est documentee dans
  les specs Anthropic mais les donnees empiriques directes sur son fonctionnement fiable sont
  absentes. En l'absence de validation empirique, grade conservateur 1.

- **Agent B** : raisonnement par evidence negative active. Trois bugs confirmed has-repro dans
  le tracker officiel Anthropic, dont issue #16853 tagged `not-planned`. Cette evidence negative
  convergente et documentee justifie grade 1 independamment de l'absence de preuves positives.

Les deux raisonnements aboutissent a la meme conclusion mais Agent B dispose d'une evidence
negative plus forte — cela renforce la solidite du grade 1.

### Note sur la complementarite des evidences

L'accord Agent A / Agent B sur grade 1 est renforcé par le fait que les deux bases de raisonnement
sont complementaires et independantes :
- Agent A raisonne depuis les specs (manque de preuves positives)
- Agent B raisonne depuis les bugs reports (evidence negative active)
La convergence de deux approches independantes augmente la confiance dans le grade 1.

---

## Grade final reconcilie

- **Grade : 1 (BONNE PRATIQUE)**
- **Niveau** : BONNE PRATIQUE
- **Rationale** : Accord parfait entre Agent A et Agent B. La fonctionnalite paths: est documentee
  dans les specs officielles mais presente un comportement impredictible en production confirme par
  3 bugs has-repro (issues #16299, #16853, #23478). L'issue #16853 est tagged `not-planned`,
  indiquant l'absence de correction prevue a court terme. Ne pas dependre de cette fonctionnalite
  pour la conformite a des regles critiques. Alternatives robustes : imports @fichier explicites,
  skills context:fork.
- **Confiance dans le grade** : ELEVEE pour ce PICOC specifique (accord parfait, double evidence
  convergente positive et negative)

---

## Contexte kappa batch

| PICOC | Agent A | Agent B | Diff | Accord binaire |
|-------|---------|---------|------|----------------|
| A | 3 | 1 | 2 | Non |
| B | 4 | 2 | 2 | Non |
| C (ce PICOC) | 1 | 1 | 0 | Oui |
| D | 1 | 2 | 1 | Oui (tous deux <3) |

Kappa batch 1 = 0.07 — ce PICOC est le seul avec accord parfait et constitue l'ancrage
le plus fiable du batch. Le grade 1 sur PICOC-C est le plus robuste des 4.
