# Containerisation (Docker)

## Outil

**[STANDARD]** **Docker** pour la conteneurisation | Score GRADE : 6/7

```
"Docker has moved from a popular tool to a near-universal one.
 +17 point jump in usage from 2024 to 2025, the largest single-year
 increase of any technology surveyed."
 — Stack Overflow Developer Survey 2025
```

| Donnee | Valeur | Source |
|--------|--------|--------|
| Adoption pro | 73.8% | SO Survey 2025 (niv. 4) |
| Runtime | containerd (CNCF gradue) | CNCF (niv. 2) |
| Format | OCI standard (interchangeable) | OCI (niv. 2) |
| Support Spring | Natif (layered JARs + Buildpacks) | Spring Boot docs (niv. 3) |

| Alternative | Verdict |
|---|---|
| Podman | OCI-compatible, rootless par defaut, startup 20-50% plus rapide. Mais ~5% adoption vs Docker 74%. [CHOIX D'EQUIPE] si securite rootless est un hard requirement. |
| Pas de conteneurisation | Contraire a SWEBOK s2.2 (IaC) et Twelve-Factor X (parite dev/prod). |

Sources : SWEBOK v4 s6.1 "container technologies to standardize deployment" (niv. 1), OCI (niv. 2), CNCF containerd (niv. 2), SO Survey 2025 73.8% (niv. 4), Twelve-Factor X (niv. 5)

---

## Dockerfile — best practices

**[RECOMMANDE]** Multi-stage builds + layered JARs + non-root | Score GRADE : 5/7

### Spring Boot (backend)

```dockerfile
# Stage 1 — Build
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /build
COPY pom.xml mvnw ./
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline
COPY src src
RUN ./mvnw package -DskipTests
RUN java -Djarmode=tools -jar target/*.jar extract --layers

# Stage 2 — Runtime
FROM eclipse-temurin:21-jre
WORKDIR /app
RUN addgroup --system app && adduser --system --ingroup app app
COPY --from=builder /build/extracted/dependencies/ ./
COPY --from=builder /build/extracted/spring-boot-loader/ ./
COPY --from=builder /build/extracted/snapshot-dependencies/ ./
COPY --from=builder /build/extracted/application/ ./
USER app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### React (frontend)

```dockerfile
# Stage 1 — Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Stage 2 — Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### Checklist (Docker docs)

| Pratique | Raison |
|----------|--------|
| Multi-stage build | Image finale sans outils de build (~200MB vs ~800MB) |
| Base minimale (JRE, pas JDK ; alpine) | Moins de surface d'attaque, plus petit |
| USER non-root | Securite — "use USER to change to a non-root user" |
| .dockerignore | Exclure target/, node_modules/, .git/ |
| Combiner RUN apt-get | Layer caching optimal |
| Layered JARs (Spring Boot) | Cache Docker par couche (dependencies changent rarement) |

Sources : Docker best practices docs (niv. 3), Spring Boot Container Images docs (niv. 3)

---

## Orchestration

**[STANDARD]** Docker Compose pour equipes 1-10 devs | Score GRADE : 5/7

```
Equipe 1-10 devs, 1-3 serveurs ?
├── OUI → Docker Compose [STANDARD]
└── NON — besoin scaling multi-node, auto-scaling ?
    └── OUI → Kubernetes [RECOMMANDE pour ce contexte]
```

```
"For applications under 10GB, Kubernetes overhead can exceed
 your actual application footprint."
 — convergence experts
```

K8s a 30% d'adoption (SO 2025) vs Docker 74%. K8s est pertinent pour le multi-node et l'auto-scaling, pas pour une equipe de 1-10 devs sur 1-3 serveurs.

Sources : SWEBOK v4 s6.1 "orchestrators to improve scalability" (niv. 1), SO Survey 2025 (niv. 4), convergence experts (niv. 5)

---

## Sources

- [niv. 1] SWEBOK v4 s6.1 — containers for standardized deployment, s2.2 — IaC
- [niv. 2] OCI — standard ouvert container formats/runtimes
- [niv. 2] CNCF — containerd (runtime Docker) = projet gradue
- [niv. 3] Docker docs — multi-stage builds, best practices, non-root
- [niv. 3] Spring Boot docs — layered JARs, Buildpacks, Dockerfile reference
- [niv. 4] SO Survey 2025 — Docker 73.8%, K8s 30%
- [niv. 5] Twelve-Factor X — dev/prod parity, Factor VI — stateless processes
