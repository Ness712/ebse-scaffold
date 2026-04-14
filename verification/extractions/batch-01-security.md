# Double Extraction — Batch 1 : Security (10 pages)

**Date** : 2026-04-14
**Agent A** : agent aa0d1e9812cb09c33
**Agent B** : agent a7feacb9667ec44f4

## Comparaison

| # | Page | Agent A reco | Agent B reco | Accord reco | GRADE A | GRADE B | Accord GRADE |
|---|------|-------------|-------------|:-----------:|---------|---------|:------------:|
| 1 | password-hashing | BCrypt defaut, Argon2id prefere | BCrypt defaut, Argon2id superieur | ✓ | 6/7 | 6/7 | ✓ |
| 2 | encryption | TLS 1.3 + AES-256-GCM | TLS 1.3 + AES-256-GCM | ✓ | 7/7 | 6/7 | ±1 |
| 3 | http-headers | Suite complete via Spring Security | Suite complete via Spring Security | ✓ | 6/7 | 6/7 | ✓ |
| 4 | rate-limiting | Bucket4j | Bucket4j | ✓ | 5/7 | 5/7 | ✓ |
| 5 | secrets-management | Env vars + gitleaks | Env vars + GitHub Secrets | ✓ | 5/7 | 5/7 | ✓ |
| 6 | dependency-scanning | OWASP DC + npm audit + Snyk | OWASP DC + npm audit + Dependabot | ✓ | 6/7 | 6/7 | ✓ |
| 7 | audit-logging | Spring AOP + dedicated table | Spring AOP + dedicated table | ✓ | 5/7 | 5/7 | ✓ |
| 8 | threat-modeling | STRIDE | STRIDE | ✓ | 5/7 | 5/7 | ✓ |
| 9 | input-validation | Whitelist + parameterized + output encoding | Whitelist + parameterized + output encoding | ✓ | 7/7 | 6/7 | ±1 |
| 10 | authentication | OAuth2/OIDC + JWT HttpOnly cookies | JWT HttpOnly + OAuth2 RS | ✓ | 6/7 | 6/7 | ✓ |

## Resultats

- **Accord sur les recommandations : 10/10 (100%)**
- **Accord sur les GRADE : 8/10 (80%)** — 2 divergences de ±1 point
- **Resolution divergences** : scores conservatifs retenus (6/7 pour encryption et input-validation, coherent avec les pages existantes)
- **Aucune page a modifier** — les recommandations actuelles sont confirmees

## Divergences notees

1. **#1 Password hashing** : les 2 agents mentionnent BCrypt comme defaut Spring mais reconnaissent Argon2id comme superieur. Notre page recommande Argon2id directement (suit OWASP qui met Argon2id #1). Pas de changement.
2. **#2 Encryption GRADE** : A donne 7/7 (NIST = standard formel), B donne 6/7. Score conservatif 6/7 retenu.
3. **#9 Input validation GRADE** : A donne 7/7, B donne 6/7. Score conservatif 6/7 retenu.
