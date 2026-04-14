# EBSE Guide — Guide de decisions techniques

**Version** : 0.1 (en construction)
**Date** : 2026-04
**Methode** : Evidence-Based Software Engineering (EBSE)
**Couverture** : 159 decisions techniques identifiees par croisement ISO 25010:2023 x SWEBOK v4

## Comment utiliser ce guide

1. **Tu commences un projet ?** → Va dans [01-stack-profiles/](01-stack-profiles/) pour une stack complete recommandee
2. **Tu cherches une decision specifique ?** → Va dans la section par domaine ci-dessous
3. **Tu veux verifier une recommandation ?** → Chaque recommandation a un lien vers sa justification detaillee dans [justifications/](../cases/)

## Niveaux de confiance

| Badge | Signification | Base sur |
|-------|--------------|----------|
| **[STANDARD]** | Quasi-indiscutable | Standards internationaux (ISO, W3C) + consensus total |
| **[RECOMMANDE]** | Meilleur choix selon les sources | Enquetes + docs + experts convergents |
| **[BONNE PRATIQUE]** | Recommande avec reserves | Experts convergents, peu de donnees quantitatives |
| **[CHOIX D'EQUIPE]** | Pas de consensus | Sources insuffisantes ou contradictoires |

---

## Partie 1 — Profils de stack

Combinaisons completes, coherentes et validees par type de projet.

- [Web App — Java/React](01-stack-profiles/web-app-java-react.md)
- (autres profils a venir : Python/Django, Node/React, etc.)

---

## Partie 2 — Recommandations par domaine

Structure derivee de la matrice ISO 25010:2023 x SWEBOK v4 (159 cases actives).
Les decisions qui apparaissent dans plusieurs cases ISO sont regroupees ici par theme.

### A. Architecture & Stack
*Derive de : Functional Suitability, Compatibility, Flexibility, Performance Efficiency (x Architecture)*

- [Protocole API (REST/GraphQL/gRPC)](02-domains/architecture/api-protocol.md)
- [Versioning d'API](02-domains/architecture/api-versioning.md)
- [Structure monolithe vs microservices](02-domains/architecture/monolith-vs-micro.md)
- [Structure des modules/packages](02-domains/architecture/module-structure.md)
- [Rendu frontend (SSR/CSR/SSG)](02-domains/architecture/rendering-strategy.md)
- [Caching (Redis, CDN)](02-domains/architecture/caching.md)
- [Message queue / async](02-domains/architecture/async-messaging.md)
- [Base de donnees](02-domains/architecture/database.md)
- [Abstraction et replaceabilite (ports-adapters)](02-domains/architecture/abstraction-layers.md)
- [Scalabilite (stateless, replicas, sharding)](02-domains/architecture/scalability.md)

### B. Securite
*Derive de : Security (x Construction, Architecture, Security, Testing, Operations, Config Management)*

- [Authentification (session/JWT/OAuth2)](02-domains/security/authentication.md)
- [Hashing des mots de passe](02-domains/security/password-hashing.md)
- [Encryption (at-rest, in-transit, TLS)](02-domains/security/encryption.md)
- [Validation des entrees (XSS, SQL injection, CSRF)](02-domains/security/input-validation.md)
- [HTTP security headers (CSP, HSTS, Helmet)](02-domains/security/http-headers.md)
- [Gestion des secrets (env vars, Vault)](02-domains/security/secrets-management.md)
- [Scanning de dependances (Dependabot, Snyk)](02-domains/security/dependency-scanning.md)
- [Rate limiting et protection DDoS](02-domains/security/rate-limiting.md)
- [Audit logging et non-repudiation](02-domains/security/audit-logging.md)
- [Threat modeling (STRIDE)](02-domains/security/threat-modeling.md)
- [Conformite RGPD / privacy](02-domains/security/gdpr-privacy.md)

### C. Design & Interface
*Derive de : Interaction Capability (x Design, Construction)*

- [Fondamentaux visuels ("ce qui fait pro")](02-domains/design/visual-fundamentals.md)
- [Systeme de spacing](02-domains/design/spacing.md)
- [Typographie](02-domains/design/typography.md)
- [Palette de couleurs et contraste](02-domains/design/colors.md)
- [Animations et transitions](02-domains/design/animations.md)
- [Shadows et elevation](02-domains/design/shadows.md)
- [Composant library (shadcn, Radix)](02-domains/design/component-library.md)
- [Navigation et information architecture](02-domains/design/navigation.md)
- [Formulaires (patterns, validation, libs)](02-domains/design/forms.md)
- [Responsive design et breakpoints](02-domains/design/responsive.md)
- [Loading states (skeletons, spinners)](02-domains/design/loading-states.md)
- [Messages d'erreur et feedback utilisateur](02-domains/design/error-messages.md)
- [Empty states et self-descriptiveness](02-domains/design/empty-states.md)
- [Real-time (WebSocket, SSE, notifications)](02-domains/design/realtime.md)
- [Tendances visuelles actuelles (date)](02-domains/design/visual-trends.md)

### D. Accessibilite & Inclusivite
*Derive de : Interaction Capability > Inclusivity (x Design, Construction, Testing)*

- [Niveau WCAG cible (AA/AAA)](02-domains/accessibility/wcag-level.md)
- [Contraste et couleurs accessibles](02-domains/accessibility/contrast.md)
- [HTML semantique et ARIA](02-domains/accessibility/semantic-html.md)
- [Navigation clavier](02-domains/accessibility/keyboard-navigation.md)
- [Screen readers](02-domains/accessibility/screen-readers.md)
- [Internationalisation (i18n)](02-domains/accessibility/i18n.md)
- [Tests accessibilite automatises (axe-core)](02-domains/accessibility/automated-testing.md)

### E. Performance
*Derive de : Performance Efficiency (x Architecture, Design, Construction, Testing, Operations, Computing)*

- [Core Web Vitals (LCP, CLS, INP)](02-domains/performance/core-web-vitals.md)
- [Bundle optimization (code splitting, tree shaking)](02-domains/performance/bundle-optimization.md)
- [Images (format, lazy loading, responsive)](02-domains/performance/images.md)
- [Query optimization (indexes, N+1, pagination)](02-domains/performance/query-optimization.md)
- [Connection pooling (HikariCP)](02-domains/performance/connection-pooling.md)
- [JVM tuning (GC, heap)](02-domains/performance/jvm-tuning.md)
- [Container resource limits](02-domains/performance/container-resources.md)
- [Performance testing (k6, Lighthouse CI)](02-domains/performance/performance-testing.md)
- [Stress testing et capacity planning](02-domains/performance/stress-testing.md)

### F. Testing
*Derive de : Functional Correctness, Faultlessness, Testability (x Testing, Construction, Quality)*

- [Strategie de test (pyramide, ratio)](02-domains/testing/strategy.md)
- [Tests unitaires (JUnit, Vitest)](02-domains/testing/unit-tests.md)
- [Tests d'integration (Testcontainers, WireMock)](02-domains/testing/integration-tests.md)
- [Tests E2E (Playwright)](02-domains/testing/e2e-tests.md)
- [Tests de contrat (Pact)](02-domains/testing/contract-tests.md)
- [Tests de securite (OWASP ZAP, SAST)](02-domains/testing/security-tests.md)
- [Coverage (JaCoCo, Istanbul, seuils)](02-domains/testing/coverage.md)
- [Mutation testing (PIT, Stryker)](02-domains/testing/mutation-testing.md)
- [Test data (factories, builders, fixtures)](02-domains/testing/test-data.md)
- [Mocking (Mockito, MSW, vi.mock)](02-domains/testing/mocking.md)

### G. Fiabilite & Resilience
*Derive de : Reliability (x Architecture, Construction, Operations, Design)*

- [Circuit breaker (Resilience4j)](02-domains/reliability/circuit-breaker.md)
- [Retry et backoff](02-domains/reliability/retry-backoff.md)
- [Graceful degradation et fallbacks](02-domains/reliability/graceful-degradation.md)
- [Health checks](02-domains/reliability/health-checks.md)
- [Graceful shutdown](02-domains/reliability/graceful-shutdown.md)
- [Backup et disaster recovery (RPO/RTO)](02-domains/reliability/backup-recovery.md)
- [Database migrations (Flyway)](02-domains/reliability/database-migrations.md)
- [Transactions et idempotency](02-domains/reliability/transactions.md)

### H. Operations & Monitoring
*Derive de : Availability, Analysability, Accountability (x Operations, Management)*

- [Monitoring (Prometheus + Grafana)](02-domains/operations/monitoring.md)
- [Error tracking (Sentry, GlitchTip)](02-domains/operations/error-tracking.md)
- [Logging structure (SLF4J, Pino, format JSON)](02-domains/operations/logging.md)
- [Distributed tracing (OpenTelemetry)](02-domains/operations/tracing.md)
- [SLOs et error budgets](02-domains/operations/slos.md)
- [Alerting et on-call](02-domains/operations/alerting.md)
- [Uptime monitoring](02-domains/operations/uptime.md)
- [Log aggregation et retention](02-domains/operations/log-aggregation.md)

### I. CI/CD & Deploiement
*Derive de : Installability, Modifiability, Safe Integration (x Operations, Config Management)*

- [CI tool (GitHub Actions)](02-domains/cicd/ci-tool.md)
- [Containerisation (Dockerfile, multi-stage)](02-domains/cicd/containerization.md)
- [Container registry (GHCR)](02-domains/cicd/container-registry.md)
- [Deploiement (blue-green, rolling, canary)](02-domains/cicd/deployment-strategy.md)
- [Infrastructure as Code (Docker Compose, Terraform)](02-domains/cicd/infrastructure.md)
- [Rollback et smoke tests](02-domains/cicd/rollback.md)

### J. Qualite de code
*Derive de : Maintainability, Faultlessness (x Construction, Quality, Config Management)*

- [Linting (ESLint, Checkstyle)](02-domains/code-quality/linting.md)
- [Formatting (Prettier, google-java-format)](02-domains/code-quality/formatting.md)
- [Static analysis (SonarQube)](02-domains/code-quality/static-analysis.md)
- [TypeScript strictness](02-domains/code-quality/typescript-strict.md)
- [Null safety (Optional, nullish coalescing)](02-domains/code-quality/null-safety.md)
- [Code review process](02-domains/code-quality/code-review.md)
- [Naming conventions](02-domains/code-quality/naming.md)

### K. Gestion de projet & Configuration
*Derive de : Modifiability, Adaptability (x Config Management, Requirements)*

- [Branching strategy (GitFlow, trunk-based)](02-domains/project/branching.md)
- [Conventions de commit](02-domains/project/commit-conventions.md)
- [Dependency management (lockfiles, updates)](02-domains/project/dependencies.md)
- [Feature flags](02-domains/project/feature-flags.md)
- [Configuration par environnement](02-domains/project/env-config.md)
- [Format des requirements (user stories)](02-domains/project/requirements-format.md)

### L. Donnees & Precision
*Derive de : Functional Correctness (x Computing Foundations)*

- [Encoding (UTF-8)](02-domains/data/encoding.md)
- [Date/time handling (java.time, dayjs)](02-domains/data/datetime.md)
- [Precision numerique (BigDecimal, integer cents)](02-domains/data/numeric-precision.md)
- [Serialization (Jackson, JSON config)](02-domains/data/serialization.md)

### M. Safety & Conformite
*Derive de : Safety (x Requirements, Design, Construction, Operations, Security)*

- [Confirmation actions destructives](02-domains/safety/destructive-actions.md)
- [Unsaved changes warning](02-domains/safety/unsaved-changes.md)
- [Safe defaults (deny-by-default)](02-domains/safety/safe-defaults.md)
- [RGPD / data retention / consent](02-domains/safety/gdpr.md)
- [Error responses en prod (pas de stack traces)](02-domains/safety/error-responses.md)

---

## Partie 3 — Justifications

Chaque recommandation est liee a une [case detaillee](../cases/) contenant :
- Question PICO
- Sources consultees avec formulaires d'extraction
- Calcul GRADE
- Double extraction verifiee

---

## Tracabilite

Cette structure est derivee mecaniquement de la [matrice ISO 25010 x SWEBOK](../matrix.md).
Chaque section indique de quelles cases ISO elle est derivee.
Aucune section n'a ete ajoutee sans correspondance dans la matrice.
