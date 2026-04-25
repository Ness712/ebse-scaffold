# Double Extraction — ai-agent-multi-repo-coordination
**Date** : 2026-04-25
**Protocole** : methodology.md v3.0

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 2 (Faible-Modere) | 2 (Faible-Modere) |
| Sources incluses | 5 | 5 |
| Source principale | code.claude.com/docs/en/sub-agents isolation: worktree (L3) | git-scm.com/docs/git-worktree (L3 officiel Git) |
| Limitation principale | Absence de benchmark formel comparant approaches | Sources praticiens L5 seulement pour le pattern agent |

## Kappa inter-rater

- Kappa global (12 PICOCs Batch 1+2) = 0.25 (accord "fair", Landis & Koch 1977)
- Kappa batch 2 (PICOC-E a H) : concordance grades = 2/4 (diff <= 1) — divergences 1 point sur E et F, accord parfait sur G et H
- Ce PICOC : **accord parfait** (diff = 0), pas de resolution Agent C necessaire

## Divergences et resolution

Aucune divergence — les deux agents convergent independamment sur grade 2 avec les memes conclusions :
- Le pattern 1 orchestrateur + 1 worktree par repo est le consensus praticiens (L5 convergent)
- Git worktree est une feature stable officiellement documentee (L3)
- L'absence de benchmark formel contraint le grade a 2 malgre la solidite du pattern en pratique
- La contrainte `Agent(isolation: "worktree")` interdit sur racine non-git est un failure mode connu et documentable

## Grade final reconcilie

- **Grade : 2 (BONNE PRATIQUE)**
- Rationale : Accord parfait agents A et B. Pattern git worktree + sous-agents isoles est le consensus praticiens convergent sur une base Git officiellement documentee. Grade contraint a 2 par absence d'etude comparative formelle. La contrainte interdisant `Agent(isolation: "worktree")` sur racine non-git doit etre documentee explicitement dans CLAUDE.md.
