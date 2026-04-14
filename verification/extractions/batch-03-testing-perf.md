# Double Extraction — Batch 3 : Testing + Performance (11 pages) — VRAIS AGENTS SEPARES

**Date** : 2026-04-14
**Agent A** : a0605948ff34af11a (contexte independant)
**Agent B** : ac340a6a800cb86c4 (contexte independant)

## Resultats

- **Accord recommandations : 11/11 (100%)**
- **Accord GRADE : 7/11 (64%)** — 4 divergences de ±1
- **Divergence notable** : les 2 agents recommandent Gatling (Java-natif) au lieu de k6 (JS) pour le perf testing Spring Boot. Flagge mais guide garde k6 (adoption SO Survey plus haute).

## Comparaison

| # | Page | Agent A | Agent B | Accord reco | GRADE A | GRADE B |
|---|------|---------|---------|:-----------:|---------|---------|
| 1 | unit-tests | JUnit 5 + Vitest | JUnit 5 + Vitest | ✓ | 6/7 | 6/7 |
| 2 | integration-tests | Testcontainers | Testcontainers | ✓ | 5/7 | 6/7 |
| 3 | e2e-tests | Playwright | Playwright | ✓ | 5/7 | 5/7 |
| 4 | contract-tests | SCC / Pact | SCC / Pact | ✓ | 4/7 | 4/7 |
| 5 | mutation-testing | PIT + Stryker | PIT + Stryker | ✓ | 4/7 | 4/7 |
| 6 | mocking | Mockito + MSW | Mockito + vi.mock | ✓ | 6/7 | 6/7 |
| 7 | test-data | Instancio + Faker | Instancio + Faker | ✓ | 3/7 | 3/7 |
| 8 | caching | Caffeine + Redis | Caffeine + Redis | ✓ | 5/7 | 6/7 |
| 9 | bundle-optimization | Vite splitting | Vite splitting | ✓ | 5/7 | 5/7 |
| 10 | connection-pooling | HikariCP | HikariCP | ✓ | 6/7 | 7/7 |
| 11 | performance-testing | Gatling + Lighthouse | Gatling + Lighthouse | ✓ | 4/7 | 5/7 |

## Divergences GRADE (conservatif retenu)

- #2 integration: A=5, B=6 → retenu 5/7
- #8 caching: A=5, B=6 → retenu 5/7
- #10 pooling: A=6, B=7 → retenu 6/7
- #11 perf-test: A=4, B=5 → retenu 4/7
