# CI/CD Pipeline

## Outil

**[RECOMMANDE]** **GitHub Actions** | Score GRADE : 4/7

| Critere | GitHub Actions | Jenkins | GitLab CI |
|---------|---------------|---------|-----------|
| Adoption | 53% (SO 2024), 61% equipes 2-10 devs (JB) | 32% (en baisse) | 24% |
| Integration GitHub | Native (zero config) | Webhooks + plugins | Migration necessaire |
| Free tier | 2 000 min/mois | Self-hosted (infra a gerer) | 400 min/mois |
| Maintenance | Zero | Serveur + plugins + MAJ secu | Zero (SaaS) |
| Onboarding | < 1 jour (YAML dans le repo) | Jours (serveur + plugins) | < 1 jour |

```
"Teams that can onboard a new developer to the pipeline in under 1 day
 deploy 3x more frequently."
 — DORA State of DevOps 2024
```

```
"Build times under 10 minutes correlate with 4x higher deployment frequency."
 — DORA State of DevOps 2024
```

Sources : SWEBOK v4 (niv. 1), DORA/Accelerate (niv. 4 — 30 000+ devs), SO Survey 2024 (niv. 4), JetBrains 2024 (niv. 4)

---

## Stages du pipeline

**[RECOMMANDE]** Pipeline en 3 phases | Score GRADE : 4/7

```
PR Pipeline (sur chaque pull request) :
  1. LINT & FORMAT  — ESLint + Prettier (front), Checkstyle (back)
  2. BUILD          — mvn compile + npm run build
  3. UNIT TEST      — JUnit 5 + Vitest (parallelises)
  4. INTEGRATION    — @SpringBootTest + Testcontainers
  5. STATIC ANALYSIS — SonarQube quality gate
  6. SECURITY SCAN  — dependency audit (Dependabot / trivy)

Merge staging :
  7. BUILD ARTIFACT — Docker multi-stage (OCI image)
  8. PUSH REGISTRY  — GHCR (GitHub Container Registry)
  9. DEPLOY STAGING — avec environment protection rules
  10. SMOKE TEST    — /actuator/health + frontend 200

Merge main (staging → production) :
  11. DEPLOY PROD   — approbation requise (environment gate)
  12. SMOKE TEST    — production health check
  13. TAG & RELEASE — auto-tag version
```

Sources : SWEBOK v4 "automated build should include compilation, testing, static analysis, packaging" (niv. 1), Twelve-Factor Factor V "build, release, run" (niv. 5), DORA "quality gates at PR level = strongest predictor of low change failure rate" (niv. 4)

---

## Quality gates

**[RECOMMANDE]** Blocage automatique si un gate echoue | Score GRADE : 4/7

| Gate | Seuil | Stage |
|------|-------|-------|
| Lint + format | Zero violations | 1 |
| Tests unitaires | 100% pass | 3 |
| Tests integration | 100% pass | 4 |
| SonarQube quality gate | Coverage >= 80% new code, 0 new bugs, duplication <= 3% | 5 |
| Vulnerabilites critiques | Zero critical/high CVE | 6 |
| Smoke test staging | HTTP 200 | 10 |
| Approbation humaine | >= 1 reviewer | 11 |

Sources : DORA 2024 "quality gates = strongest predictor" (niv. 4), SonarQube Sonar way defaults (niv. 3)

---

## Optimisation

| Pratique | Impact | Source |
|----------|--------|--------|
| Build < 10 min | 4x deployment frequency | DORA 2024 |
| Paralleliser lint/build/test | Reduit lead time | DORA/Accelerate |
| Cache Maven (.m2) + npm (node_modules) | -50% build time | GitHub Actions docs |
| Fail fast (lint avant tests lourds) | Feedback rapide | DORA 2024 |
| Trunk-based development | -50% change failure rate | DORA/Accelerate |

---

## Sources

- [niv. 1] SWEBOK v4 — CI/CD, automated build pipeline, regression testing in CI
- [niv. 4] DORA/Accelerate (30k+ devs) — 4 metrics, quality gates, build time targets
- [niv. 4] DORA State of DevOps 2023-2024 — pipeline optimization, trunk-based dev
- [niv. 4] SO Survey 2024 — GitHub Actions 53%, Jenkins 32%
- [niv. 4] JetBrains 2024 — GitHub Actions 52%, 61% in 2-10 dev teams
- [niv. 5] Twelve-Factor Factor V — build/release/run separation
