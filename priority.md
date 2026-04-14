# Priorisation des pages du guide

**Methode** : nombre de cases ISO qui pointent vers chaque decision.
Plus une decision apparait dans la matrice, plus elle est transversale et prioritaire.

## P1 — Tout projet doit decider ca (apparait dans 4+ cases ISO)

| Page | Cases ISO qui la generent | Nb |
|---|---|---|
| Logging (structure, lib, format) | Analysability, Accountability, Non-repudiation, Faultlessness, Operations | 5 |
| Test unitaire (framework, assertions) | Functional Correctness, Faultlessness, Testability, Coverage | 4 |
| Static analysis / linting (SonarQube, ESLint) | Functional Correctness, Faultlessness, Modifiability, Quality | 4 |
| Input validation (XSS, SQL injection, CSRF) | Integrity, Confidentiality, User Error Protection, Functional Correctness | 4 |
| Authentication (session/JWT/OAuth2) | Authenticity (Architecture + Construction + Security + Testing) | 4 |
| Error handling strategy | Faultlessness, Fault Tolerance, Fail Safe, User Error Protection | 4 |
| Module/package structure | Modularity (Architecture + Design + Construction + Maintenance) | 4 |
| Monitoring (Prometheus, Grafana) | Availability, Analysability, Resource Utilization, Capacity | 4 |
| CI/CD pipeline | Installability, Modifiability, Safe Integration, Faultlessness (quality gates) | 4 |
| Container (Docker) | Installability, Co-existence, Resource Utilization, Adaptability | 4 |
| Database choice | Time Behaviour, Capacity, Scalability, Functional Correctness | 4 |

## P2 — Decision importante (apparait dans 2-3 cases ISO)

| Page | Cases ISO | Nb |
|---|---|---|
| Password hashing | Confidentiality, Authenticity | 2 |
| Encryption (TLS, at-rest) | Confidentiality (Architecture + Construction + Operations) | 3 |
| HTTP security headers | Integrity, Resistance, Confidentiality | 3 |
| Rate limiting | Resistance, Capacity, Availability | 3 |
| Secrets management | Confidentiality (Architecture + Construction + Config Mgmt) | 3 |
| API protocol (REST/GraphQL) | Interoperability (Architecture + Design + Construction) | 3 |
| Caching (Redis, CDN) | Time Behaviour, Scalability, Availability | 3 |
| E2E testing (Playwright) | Operability, Functional Completeness, Safe Integration | 3 |
| Coverage seuils (JaCoCo, Istanbul) | Faultlessness, Testability, Quality | 3 |
| Formatting (Prettier) | Modifiability, Analysability, Construction | 3 |
| Deployment strategy (blue-green, rolling) | Availability, Safe Integration, Fault Tolerance | 3 |
| Backup / disaster recovery | Recoverability (Architecture + Operations + Config Mgmt) | 3 |
| Circuit breaker (Resilience4j) | Fault Tolerance (Architecture + Construction) | 2 |
| Form library (React Hook Form) | Operability, User Error Protection | 2 |
| CSS framework (Tailwind) | Operability, Modifiability | 2 |
| State management (Zustand) | Operability, User Engagement | 2 |
| Component library (shadcn, Radix) | Appropriateness Recognizability, Learnability | 2 |
| Typographie | User Engagement (Design), Inclusivity | 2 |
| Spacing system | User Engagement (Design), Inclusivity | 2 |
| Animations/transitions | User Engagement (Design + Construction) | 2 |
| WCAG / accessibilite | Inclusivity (Design + Construction + Testing) | 3 |
| i18n (react-i18next) | Inclusivity, Learnability | 2 |
| SLOs | Availability (Management), Analysability | 2 |
| Error tracking (Sentry) | Analysability, Availability | 2 |
| Dependency scanning (Dependabot) | Resistance, Integrity | 2 |
| Branching strategy | Modifiability, Adaptability | 2 |
| Performance testing (k6) | Time Behaviour, Capacity | 2 |
| RGPD / privacy | Operational Constraint (Requirements + Construction + Security) | 3 |
| Null safety | Functional Correctness, Faultlessness | 2 |
| TypeScript strict | Functional Correctness, Faultlessness | 2 |
| DB migrations (Flyway) | Recoverability, Availability (Maintenance) | 2 |

## P3 — Decision specifique (apparait dans 1 case ISO)

| Page | Case ISO |
|---|---|
| Shadows / elevation | User Engagement x Design |
| Couleurs / palette | User Engagement x Design |
| Navigation patterns | Appropriateness Recognizability x Design |
| Loading states (skeletons) | User Engagement x Design |
| Empty states | Self-descriptiveness x Design |
| Real-time (WebSocket) | User Engagement x Construction |
| Chart lib (Recharts) | Self-descriptiveness x Construction |
| Search impl (MeiliSearch) | User Assistance x Construction |
| Mutation testing (PIT, Stryker) | Functional Correctness x Testing |
| Contract testing (Pact) | Interoperability x Testing |
| Mocking (Mockito, MSW) | Testability x Construction |
| Test data factories | Testability x Construction |
| OpenAPI / Swagger | Interoperability x Design |
| Connection pooling (HikariCP) | Time Behaviour x Architecture |
| JVM tuning (GC, heap) | Resource Utilization x Architecture |
| Bundle optimization | Time Behaviour x Construction |
| Image optimization | Time Behaviour x Construction |
| Feature flags | Adaptability x Construction |
| Numeric precision (BigDecimal) | Functional Correctness x Computing |
| Date/time handling | Functional Correctness x Computing |
| Encoding (UTF-8) | Functional Correctness x Computing |
| Confirmation destructive actions | Hazard Warning x Design |
| Unsaved changes warning | Hazard Warning x Construction |
| Graceful shutdown | Fail Safe x Operations |
| Threat modeling (STRIDE) | Risk Identification x Security |
| Audit logging | Non-repudiation x Construction |
| Container registry (GHCR) | Installability x Operations |
| Infrastructure as Code | Recoverability x Config Management |
| Alerting / on-call | Availability x Operations |
| Uptime monitoring | Availability x Operations |
| Code review process | Faultlessness x Quality |
| Naming conventions | Modifiability x Construction |
| Commit conventions | Modifiability x Config Management |
| Requirements format | Functional Completeness x Requirements |

---

## Statistiques

| Priorite | Nombre de pages | % du guide |
|---|---|---|
| P1 | 11 | 11% |
| P2 | 31 | 32% |
| P3 | 34 | 35% |
| **Total** | **76 pages uniques** | |

Note : les 159 cases de la matrice se resument en ~76 pages uniques
car beaucoup de cases pointent vers la meme decision (ex: logging apparait 5 fois).

## Ordre de travail recommande

1. Remplir les 11 pages P1 (decisions transversales)
2. Remplir les 31 pages P2 (decisions importantes)
3. Remplir les 34 pages P3 (decisions specifiques)
4. Compiler les profils de stack (Partie 1) a partir des resultats
