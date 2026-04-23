# Docker — Best Practices Node.js (Audit Source)

**Source** : Docker official documentation — Node.js best practices
**Version** : Docker Engine 26.x / Compose v2
**Applicable si** : tout projet containerisé avec Node.js
**Usage** : comparer Dockerfile et docker-compose.yml réels contre cette référence lors d'un audit

---

## Dockerfile — Vérifications

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | Image de base officielle Node.js LTS (ex: `node:20-alpine`) | ⬜ | |
| 2 | Image `alpine` ou `slim` pour réduire la surface d'attaque | ⬜ | |
| 3 | Utilisateur non-root (`USER node` ou `RUN adduser`) | ⬜ | |
| 4 | Multi-stage build : stage build séparé du stage production | ⬜ | |
| 5 | `COPY package*.json ./` avant `COPY . .` (cache des couches) | ⬜ | |
| 6 | `npm ci --only=production` en production (pas `npm install`) | ⬜ | |
| 7 | `.dockerignore` présent avec `node_modules`, `.git`, `.env` | ⬜ | |
| 8 | `HEALTHCHECK` défini | ⬜ | |
| 9 | Port exposé via `EXPOSE` | ⬜ | |
| 10 | Pas de secrets dans les ARG ou ENV de build | ⬜ | |
| 11 | Image épinglée (`node:20.18.0-alpine` pas `node:latest`) | ⬜ | |

---

## Docker Compose — Vérifications

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | `restart: unless-stopped` ou `always` sur les services prod | ⬜ | |
| 2 | `healthcheck` défini par service | ⬜ | |
| 3 | `stop_grace_period` défini (ex: `30s`) pour graceful shutdown | ⬜ | |
| 4 | Limites de ressources (`deploy.resources.limits`) définies | ⬜ | |
| 5 | Réseau explicite (`networks:`) isolant les services | ⬜ | |
| 6 | Volumes nommés pour les données persistantes | ⬜ | |
| 7 | Secrets via `secrets:` ou env file — pas de valeurs en dur | ⬜ | |
| 8 | `depends_on` avec `condition: service_healthy` | ⬜ | |
| 9 | Pas de `build:` en production (images pré-buildées en CI) | ⬜ | |

---

## Sécurité

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | `read_only: true` sur les containers qui n'écrivent pas sur le FS | ⬜ | |
| 2 | `cap_drop: [ALL]` + `cap_add` uniquement pour ce qui est nécessaire | ⬜ | |
| 3 | `security_opt: no-new-privileges:true` | ⬜ | |
| 4 | Ports non exposés publiquement sauf nécessaire | ⬜ | |

---

## Références

- [Docker Node.js Best Practices](https://docs.docker.com/language/nodejs/)
- [Node.js Docker Best Practices (GitHub)](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)
- [Docker Compose reference](https://docs.docker.com/compose/compose-file/)
