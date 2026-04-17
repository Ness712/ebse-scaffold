# PRISMA Flow — docker-local-build-validation

**Date de recherche** : 2026-04-17
**Question PICOC** : Faut-il valider localement le build Docker avant chaque push CI quand Dockerfile/docker-compose est modifié ?
**Bases interrogées** : Docker Blog, Docker Docs, dora.dev, Microsoft DevOps Docs, GitHub Resources, blogs individuels (filtrés E1)
**Mots-clés** : "docker build check", "local docker validation", "shift left docker", "dockerfile lint before push", "CI feedback loop docker"

## Flux PRISMA

### IDENTIFICATION
Sources identifiées par base :
- Docker Blog : 3 articles pertinents
- Docker Docs : 2 pages (build checks, best practices)
- dora.dev : 1 page (Continuous Integration capability)
- Microsoft DevOps Docs : 1 page (shift-left testing)
- GitHub Resources / blogs : 5 (filtrés E1/E6)

Total identifié : 12
Doublons retirés : 1
Total après déduplication : 11

### SCREENING (titre + résumé)
Sources screenées : 11
Sources exclues au screening : 3
- E1 (blogs individuels sans données) : 2 (Medium articles, tutoriels sans auteur identifiable)
- E6 (hors contexte — shift-left général sans mention Docker) : 1

Total après screening : 8

### ELIGIBILITÉ (lecture complète)
Sources évaluées en détail : 8
Sources exclues après lecture complète : 3
- E4/E6 (trop génériques, données non spécifiques à Docker build local) : 2
- E2 (obsolète > 5 ans sans être un standard en vigueur) : 1

### INCLUSION
Sources incluses dans la synthèse : 5
- Niveau 2 : 1 (DORA)
- Niveau 3 : 4 (Docker Blog ×2, Docker Docs, Microsoft DevOps)

## Documentation recherche (Table 2 Kitchenham)

| Base | Stratégie | Années | Date | Résultats | Retenus |
|------|-----------|--------|------|-----------|---------|
| Docker Blog (docker.com/blog) | "docker build check" + "local validation" | 2022-2026 | 2026-04-17 | 3 | 2 |
| Docker Docs (docs.docker.com) | "build checks" + "best practices" | 2023-2026 | 2026-04-17 | 2 | 2 |
| dora.dev | "continuous integration" + "fast feedback" | 2020-2026 | 2026-04-17 | 1 | 1 |
| Microsoft DevOps | "shift left testing" + "docker" | 2022-2026 | 2026-04-17 | 1 | 1 |
| Blogs/GitHub | "dockerfile lint before push" | 2022-2026 | 2026-04-17 | 5 | 0 (E1/E6) |

## Sources exclues avec raisons

| # | Source | Critère | Raison |
|---|--------|---------|--------|
| 1 | Medium article "5 tips for Dockerfile" | E1 | Blog individuel, pas d'auteur identifiable, pas de données |
| 2 | YouTube "Docker tutorial" | E1 | Vidéo sans données chiffrées |
| 3 | "CI/CD best practices" générique | E6 | Ne mentionne pas spécifiquement la validation locale Docker |
| 4 | Hadolint GitHub README | E6 | Couvre le lint Dockerfile mais pas la validation build locale en général |
| 5 | Docker doc page (ancienne) | E2 | Datée 2018, remplacée par la page Build Checks 2024 |
