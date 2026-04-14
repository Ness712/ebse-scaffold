# EBSE Guide — Guide de decisions techniques

**Version** : 0.1 (en construction)
**Date** : 2026-04
**Methode** : Evidence-Based Software Engineering (EBSE)

## Comment utiliser ce guide

1. **Tu commences un projet ?** → Va dans [01-stack-profiles/](01-stack-profiles/) pour une stack complete recommandee
2. **Tu cherches une decision specifique ?** → Va dans la section par domaine ci-dessous
3. **Tu veux verifier une recommandation ?** → Chaque recommandation a un lien vers sa justification detaillee dans [justifications/](../cases/)

## Niveaux de confiance

Chaque recommandation porte un badge :

| Badge | Signification | Base sur |
|-------|--------------|----------|
| **[STANDARD]** | Quasi-indiscutable | Standards internationaux (ISO, W3C) + consensus total |
| **[RECOMMANDE]** | Meilleur choix selon les sources | Enquetes + docs + experts convergents |
| **[BONNE PRATIQUE]** | Recommande avec reserves | Experts convergents, peu de donnees quantitatives |
| **[CHOIX D'EQUIPE]** | Pas de consensus | Sources insuffisantes ou contradictoires — a vous de choisir |

## Sommaire

### Partie 1 — Profils de stack
Combinaisons completes et coherentes par type de projet.

- [Web App — Java/React](01-stack-profiles/web-app-java-react.md)
- (autres profils a venir)

### Partie 2 — Recommandations par domaine

#### Securite
- [Hashing des mots de passe](02-domains/security/password-hashing.md)
- [Authentification](02-domains/security/authentication.md)
- [Validation des entrees](02-domains/security/input-validation.md)
- [Headers HTTP](02-domains/security/http-headers.md)
- [Gestion des secrets](02-domains/security/secrets-management.md)
- [Dependances](02-domains/security/dependencies.md)

#### Design & UI
- [Fondamentaux visuels](02-domains/design/visual-fundamentals.md)
- [Spacing](02-domains/design/spacing.md)
- [Typographie](02-domains/design/typography.md)
- [Couleurs](02-domains/design/colors.md)
- [Animations](02-domains/design/animations.md)
- [Shadows & elevation](02-domains/design/shadows.md)
- [Composants](02-domains/design/components.md)
- [Tendances visuelles (date)](02-domains/design/visual-trends.md)

#### Performance
- [Core Web Vitals](02-domains/performance/core-web-vitals.md)
- [Optimisation frontend](02-domains/performance/frontend-optimization.md)
- [Optimisation backend](02-domains/performance/backend-optimization.md)
- [Caching](02-domains/performance/caching.md)

#### Testing
- [Strategie de test](02-domains/testing/strategy.md)
- [Tests unitaires](02-domains/testing/unit-tests.md)
- [Tests d'integration](02-domains/testing/integration-tests.md)
- [Tests E2E](02-domains/testing/e2e-tests.md)
- [Coverage](02-domains/testing/coverage.md)

#### Fiabilite & Operations
- [Monitoring](02-domains/reliability/monitoring.md)
- [SLOs](02-domains/reliability/slos.md)
- [Error tracking](02-domains/reliability/error-tracking.md)
- [Logging](02-domains/reliability/logging.md)
- [Incident response](02-domains/reliability/incident-response.md)

#### Architecture
- [Structure du projet](02-domains/architecture/project-structure.md)
- [Patterns](02-domains/architecture/patterns.md)
- [Base de donnees](02-domains/architecture/database.md)
- [API design](02-domains/architecture/api-design.md)

#### CI/CD & DevOps
- [Pipeline CI](02-domains/cicd/ci-pipeline.md)
- [Deploiement](02-domains/cicd/deployment.md)
- [Containerisation](02-domains/cicd/containerization.md)
- [Infrastructure](02-domains/cicd/infrastructure.md)

#### Accessibilite
- [WCAG essentials](02-domains/accessibility/wcag-essentials.md)
- [Navigation clavier](02-domains/accessibility/keyboard-navigation.md)
- [Screen readers](02-domains/accessibility/screen-readers.md)

#### Qualite de code
- [Linting](02-domains/code-quality/linting.md)
- [Formatting](02-domains/code-quality/formatting.md)
- [Code review](02-domains/code-quality/code-review.md)
- [Documentation](02-domains/code-quality/documentation.md)

#### Gestion de projet
- [Versioning (Git)](02-domains/project/versioning.md)
- [Branching strategy](02-domains/project/branching.md)
- [Conventions de commit](02-domains/project/commit-conventions.md)

### Partie 3 — Justifications
Chaque recommandation est liee a une [case detaillee](../cases/) contenant :
- Question PICO
- Sources consultees avec formulaires d'extraction
- Calcul GRADE
- Double extraction verifiee
