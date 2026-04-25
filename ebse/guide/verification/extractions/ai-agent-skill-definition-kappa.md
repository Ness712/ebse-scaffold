# Double Extraction — ai-agent-skill-definition

**Date** : 2026-04-25
**Protocole** : methodology.md v3.0
**PICOC** : Batch 1 - B (sur 4 PICOCs A-D)

---

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 4 (RECOMMANDE fort) | 2 (BONNE PRATIQUE) |
| Sources incluses | 5 | 5 |
| Source principale | arXiv 2602.12430 N=42k (-59% tokens lazy loading) | Post-compaction drop limitation (critique operationnelle) |
| Limitation principale | Evidence indirecte (lazy loading general, pas skills Claude Code specifiques) | Absence de RCT direct comparant skills vs CLAUDE.md |
| Biais identifie | Surponderation arXiv N=42k (general → specifique) | Surponderation limitation post-compaction comme contre-indication |

---

## Kappa inter-rater

- **Kappa batch 1 global** (4 PICOCs A-D) = 0.07 (faible — Landis & Koch 1977 : "slight agreement")
- **Ce PICOC** : DESACCORD — diff = 2 points (A=4 vs B=2)
- **Classification binaire** (>=3 vs <3) : A=positif, B=negatif → desaccord
- **Resolution** : Agent C requis (divergence >= 2 points)

---

## Divergences et resolution

### Divergences identifiees

**Divergence principale : generalisation arXiv 2602.12430**

Agent A a juge que l'arXiv 2602.12430 (N=42k, -59% tokens) constituait une preuve empirique
solide justifiant grade 4. L'open standard agentskills.io (multi-vendor) reduisait le CoI
Anthropic. L'ensemble produisait une recommandation forte.

Agent B a conteste la generalisation : arXiv 2602.12430 mesure le lazy loading en general,
pas les skills Claude Code specifiquement. La limitation post-compaction drop est operationnellement
critique (sessions longues = skills perdus). L'absence de RCT comparant skills vs CLAUDE.md
limitait le grade a 2.

**Divergence secondaire : poids de la limitation post-compaction**

Agent A : la limitation post-compaction est reelle mais gérable (re-invocation explicite).
Agent B : pour les sessions longues avec /compact frequent, la limitation est potentiellement
bloquante et contre-indique un grade elevee.

### Resolution Agent C

Agent C a retenu :
1. L'arXiv N=42k (-59% tokens) est une evidence empirique solide sur le principe de lazy loading.
   La generalisation de "lazy loading en general" aux "skills Claude Code" est raisonnable car
   le mecanisme sous-jacent est identique (injection a la demande vs always-loaded).
   Cependant, l'application n'est pas directe — facteur d'incertitude a documenter.
2. L'open standard agentskills.io (35+ outils) reduit effectivement le vendor lock-in concern.
   Ce n'est pas juste un mecanisme proprietaire Anthropic — point valide de Agent A.
3. La limitation post-compaction drop est reelle mais n'invalide pas la pratique —
   elle impose une mitigation (re-invocation explicite). Comparable a d'autres limitations
   connues de LLM agents (context window, hallucination) qui ne contra-indiquent pas l'usage.
4. L'absence de RCT direct skills vs CLAUDE.md est reelle — le transfert depuis arXiv general
   n'est pas un RCT. Cela plafonne le grade.

Calcul de reconciliation Agent C :
- Base L3 (vendor-doc) : 2
- +1 pour arXiv N=42k (L4, N > 1000, principe empiriquement valide)
- +0.5 pour open standard multi-vendor (reduction CoI, arrondi vers +1 en grade entier)
- -1 pour CoI Anthropic sur sources 1, 4, 5
- Net : 2 + 1 + 1 - 1 = 3

Note Agent C : le grade 3 est plus prudent que le grade 4 de A, plus genereux que le 2 de B.
La justification centrale est le N=42k qui est un argument empirique fort pour le principe,
attenue par l'application indirecte aux skills Claude Code specifiques.

---

## Grade final reconcilie

- **Grade : 3 (RECOMMANDE)**
- **Niveau** : RECOMMANDE
- **Rationale** : L'arXiv 2602.12430 (N=42k, -59% tokens) fournit une evidence empirique solide
  pour le principe de lazy context loading. L'open standard agentskills.io (35+ vendors) reduit
  le CoI Anthropic. La limitation post-compaction drop est documentee et gérable avec mitigation
  explicite. L'absence de RCT direct skills vs CLAUDE.md plafonne le grade a 3 plutot que 4.
- **Confiance dans le grade** : MODEREE (kappa batch 0.07, mais convergence sur principe via
  arXiv independant N=42k)

---

## Contexte kappa batch

| PICOC | Agent A | Agent B | Diff | Accord binaire |
|-------|---------|---------|------|----------------|
| A | 3 | 1 | 2 | Non |
| B (ce PICOC) | 4 | 2 | 2 | Non |
| C | 1 | 1 | 0 | Oui |
| D | 1 | 2 | 1 | Oui (tous deux <3) |

Kappa batch 1 = 0.07 — tendance structurelle : Agent A accorde plus de poids aux
evidence positives empiriques (arXiv), Agent B accorde plus de poids aux limitations
operationnelles et a l'absence de comparaison directe.
