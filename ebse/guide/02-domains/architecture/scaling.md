# Scalabilite

**[BONNE PRATIQUE]** Monolithe d'abord, scale horizontal via replicas Docker | Score GRADE : 3/7

## Strategie progressive

```
Phase 1 : Monolithe modulaire (1 instance)
    └── Suffisant pour 0-10k utilisateurs
Phase 2 : Replicas horizontaux (2-4 instances)
    └── Load balancer (Caddy/Nginx)
    └── Sessions externalisees (Redis)
    └── Suffisant pour 10k-100k utilisateurs
Phase 3 : Read replicas PostgreSQL
    └── Separer lectures/ecritures
Phase 4 : Microservices (si necessaire)
    └── Rarement justifie avant des centaines de devs
```

## Prerequis : application stateless

```yaml
# docker-compose.yml — scale horizontal
services:
  app:
    image: ghcr.io/org/app:latest
    deploy:
      replicas: 2
    environment:
      SPRING_SESSION_STORE_TYPE: redis
      SPRING_DATA_REDIS_HOST: redis

  redis:
    image: redis:7-alpine
```

```java
// Aucun etat en memoire serveur — sessions dans Redis
@Configuration
@EnableRedisHttpSession
public class SessionConfig { }
```

Sources : Fowler "MonolithFirst" (niv. 5), Twelve-Factor VI — stateless processes (niv. 5), Docker Compose deploy docs — replicas (niv. 3), Spring Session Redis docs (niv. 3)
