# Haute disponibilite

**[BONNE PRATIQUE]** Multi-instance, health checks, DB replication | Score GRADE : 3/7

## Architecture minimale HA

```
                    ┌──────────┐
  Internet ────────>│  Caddy   │ (reverse proxy + TLS)
                    └────┬─────┘
                    ┌────┴─────┐
               ┌────┤   LB     ├────┐
               │    └──────────┘    │
          ┌────┴───┐          ┌─────┴──┐
          │ App :1 │          │ App :2 │  (replicas stateless)
          └────┬───┘          └────┬───┘
               └──────┬───────────┘
               ┌──────┴──────┐
               │ PostgreSQL  │ (+ streaming replication)
               └─────────────┘
```

## Docker Compose

```yaml
services:
  app:
    image: ghcr.io/org/app:latest
    deploy:
      replicas: 2
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 30s
      retries: 3
```

## Health checks Spring Boot

```yaml
# application.yml
management:
  endpoint.health.show-details: when_authorized
  health.db.enabled: true
  health.redis.enabled: true
```

Sources : Docker Compose deploy docs — replicas, healthcheck (niv. 3), Spring Boot Actuator docs — health endpoint (niv. 3), PostgreSQL docs — streaming replication (niv. 3), Google SRE Book ch.3 — embracing risk (niv. 5)
