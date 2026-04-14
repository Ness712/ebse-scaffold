# Definition of Done

**[RECOMMANDE]** Checklist stricte avant merge : code review + tests + lint + staging + docs + criteres d'acceptation | Score GRADE : 4/7

## Checklist

- [ ] Code reviewed par au moins 1 pair
- [ ] Tests passent (unit + integration)
- [ ] Zero erreur lint/format
- [ ] Deploye sur staging et verifie
- [ ] Documentation mise a jour (si applicable)
- [ ] Criteres d'acceptation de l'issue remplis

## Enforcement

Utiliser un **PR template** GitHub pour forcer la checklist. Les checks CI (tests, lint) bloquent le merge si echoue. La review humaine valide la logique metier.

## Regles

| Regle | Source |
|-------|--------|
| DoD explicite et partagee par l'equipe | Scrum Guide 2020 — transparence |
| Pas de merge sans CI vert | DORA — predictor of elite performance |
| Review obligatoire (pas d'auto-merge) | SWEBOK v4 ch.10 — quality gate |
| Staging valide avant prod | DORA — reduce change failure rate |

Sources : Scrum Guide 2020 (niv. 5), SWEBOK v4 ch.10 (niv. 5), DORA/Accelerate (niv. 4)
