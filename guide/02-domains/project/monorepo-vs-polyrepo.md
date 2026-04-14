# Monorepo vs Polyrepo

**[CHOIX D'EQUIPE]** Monorepo si code partage important, polyrepo si equipes independantes. Pas de consensus scientifique | Score GRADE : 2/7

## Comparaison

| Critere | Monorepo | Polyrepo |
|---------|----------|----------|
| Code partage | Facile (imports directs) | Packages publies |
| CI/CD | Plus complexe (builds cibles) | Simple (1 repo = 1 pipeline) |
| Autonomie equipes | Moindre | Totale |
| Outils | Turborepo, Nx, npm workspaces | Git standard |

## Quand choisir quoi

- **Monorepo** : petite equipe, types partages front/back, libs internes communes
- **Polyrepo** : equipes separees, cycles de release differents, stack heterogene

## Point cle

Google utilise un monorepo massif, mais avec des outils sur mesure (Bazel, CitC). Sans outillage adapte, un monorepo peut devenir un frein. Le choix depend du contexte, pas d'une regle universelle.

Sources : Google monorepo paper — Potvin & Levenberg 2016 (niv. 5), Fowler "MonolithFirst" (niv. 5)
