# Release Management

**[BONNE PRATIQUE]** semantic-release + conventional commits + auto changelog + git tags on merge to main | Score GRADE : 3/7

## Pipeline de release

```
commit conventionnel → merge staging → auto-deploy staging
                     → merge main   → semantic-release → tag + changelog + deploy prod
```

## Semantic Versioning

| Increment | Quand | Exemple |
|-----------|-------|---------|
| MAJOR | Breaking change | `feat!: remove v1 API` |
| MINOR | Nouvelle feature | `feat: add export CSV` |
| PATCH | Bug fix | `fix: correct date format` |

## Regles

| Regle | Source |
|-------|--------|
| Versionning semantique strict | semver.org — standard universel |
| Conventional commits pour auto-version | semantic-release — automation fiable |
| Changelog auto-genere, jamais manuel | Humble & Farley — Continuous Delivery |
| Tag git immutable sur chaque release | semver.org — tracabilite |
| Jamais de deploy manuel en prod | Humble & Farley — reproducibilite |

Sources : semver.org (niv. 5), Humble & Farley "Continuous Delivery" (niv. 3), semantic-release docs (niv. 5)
