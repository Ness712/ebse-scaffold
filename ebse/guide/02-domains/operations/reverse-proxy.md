# Reverse Proxy

**[RECOMMANDE]** **Caddy** (auto-HTTPS, zero config TLS) | Score GRADE : 4/7

Auto-provision Let's Encrypt, HTTP/2 par defaut, config minimale. Alternative : Nginx (plus de controle, plus verbeux).

## Caddyfile

```caddyfile
# Caddyfile — auto-HTTPS, reverse proxy vers Spring Boot
app.odinlascience.fr {
    reverse_proxy app:8080 {
        health_uri /actuator/health
        health_interval 30s
    }
    encode gzip zstd
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options nosniff
    }
}
```

## Docker Compose

```yaml
services:
  caddy:
    image: caddy:2-alpine
    ports: ["80:80", "443:443"]
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data    # certificats Let's Encrypt persistes
```

| Critere | Caddy | Nginx |
|---------|-------|-------|
| HTTPS auto | Oui (Let's Encrypt integre) | Non (certbot externe) |
| Config | Declarative, minimale | Verbose, imperative |
| Performance | Excellente | Legerement superieure a tres haute charge |
| Cas d'usage | Petites-moyennes equipes | Grande echelle, config avancee |

Sources : Caddy docs — automatic HTTPS (niv. 3), Let's Encrypt stats — 300M+ certificats actifs (niv. 3), Nginx docs (niv. 3), OWASP TLS guidelines (niv. 2)
