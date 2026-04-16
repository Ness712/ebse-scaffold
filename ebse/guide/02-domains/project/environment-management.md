# Environment Management

**[RECOMMANDE]** 3 environnements : dev (local Docker), staging (auto-deploy), prod (CI/CD uniquement) | Score GRADE : 4/7

## Environnements

| Env | Deploiement | Usage |
|-----|-------------|-------|
| **Dev** | Local via Docker Compose | Developpement quotidien |
| **Staging** | Auto-deploy sur merge vers staging | Validation pre-prod, tests d'acceptation |
| **Prod** | CI/CD uniquement, jamais manuel | Utilisateurs finaux |

## Regles

| Regle | Source |
|-------|--------|
| Staging = miroir exact de prod (meme images, meme config) | DORA — reduce change failure rate |
| Zero deploy manuel en prod | DORA/Accelerate — predictor of elite performance |
| Variables d'env separees par environnement | Twelve-Factor App factor III |
| Dev local reproductible via containers | Twelve-Factor X — dev/prod parity |

## Pourquoi staging miroir prod

DORA montre que les equipes elite ont un change failure rate < 5%. La cause principale d'echec en prod : les differences entre staging et prod. Memes images Docker, meme infra, seules les variables d'env changent.

Sources : SWEBOK v4 ch.8 (niv. 5), DORA/Accelerate (niv. 4), Twelve-Factor App (niv. 5)
