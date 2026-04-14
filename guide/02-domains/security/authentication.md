# Authentification

## Architecture recommandee

**[RECOMMANDE]** Spring Security + JWT (access token en HttpOnly cookie) + refresh token serveur | Score GRADE : 4/7

```
React SPA ──(login)──> POST /api/auth/login
                    → Set-Cookie: access_token=<JWT>; HttpOnly; Secure; SameSite=Lax; Max-Age=900
                    → Set-Cookie: refresh_token=<opaque>; HttpOnly; Secure; SameSite=Lax; Max-Age=604800

React SPA ──(API)──> GET /api/resources
                    Cookie: access_token (automatique)
                    X-CSRF-TOKEN: <token> (manuel)
                    → Spring Security valide JWT + CSRF

React SPA ──(401)──> POST /api/auth/refresh
                    → Nouveau access_token + nouveau refresh_token (rotation)
                    → Ancien refresh token invalide
```

Sources : OWASP JWT Cheat Sheet (niv. 2), OWASP ASVS V3 (niv. 2), NIST SP 800-63B (niv. 1), Spring Security docs (niv. 3)

---

## Stockage des tokens

**[STANDARD]** Tokens dans des **HttpOnly + Secure + SameSite cookies** — JAMAIS localStorage | Score GRADE : 6/7

| Stockage | XSS accessible ? | CSRF vulnerable ? | Verdict |
|----------|:-:|:-:|---|
| localStorage | OUI | Non | **INTERDIT** — tout JS peut lire le token |
| sessionStorage | OUI | Non | **INTERDIT** |
| HttpOnly cookie | NON | Oui | **RECOMMANDE** avec protection CSRF |
| HttpOnly + SameSite=Lax | NON | Attenue | **OPTIMAL** |

```
"Store tokens in HttpOnly, Secure, SameSite cookies — not in localStorage
 or sessionStorage, which are vulnerable to XSS."
 — OWASP JWT Cheat Sheet for Java
```

Sources : OWASP ASVS V3.4.1-V3.4.3 (niv. 2), OWASP JWT Cheat Sheet (niv. 2), NIST 800-63B (niv. 1). Consensus total, aucune source dissidente.

---

## Durees de vie des tokens

**[RECOMMANDE]** Access 15 min, refresh 7 jours avec rotation | Score GRADE : 4/7

| Token | Duree | Stockage | Rotation |
|-------|-------|----------|----------|
| Access (JWT) | 5-15 min | HttpOnly cookie | Non (expire naturellement) |
| Refresh (opaque) | 7-30 jours | HttpOnly cookie + hash en BDD | OUI — nouveau a chaque usage |

```
"Access token lifetime: 5-15 minutes maximum.
 Implement refresh token rotation: issue a new refresh token with each
 access token refresh, and invalidate the old one.
 Detect reuse of old refresh tokens as a potential theft indicator."
 — OWASP JWT Cheat Sheet
```

Sources : OWASP JWT Cheat Sheet (niv. 2), NIST 800-63B (niv. 1) — 30 min idle timeout AAL2, 12h max absolu

---

## Validation du JWT

**[STANDARD]** Valider signature + exp + iss + aud. Rejeter `alg: none` | Score GRADE : 6/7

```java
// Spring Boot — configuration minimale
spring.security.oauth2.resourceserver.jwt.issuer-uri=https://your-issuer.com

// Ou configuration manuelle
@Bean
public JwtDecoder jwtDecoder() {
    NimbusJwtDecoder decoder = NimbusJwtDecoder.withSecretKey(key).build();
    // Valide automatiquement : signature, exp, iss, aud
    return decoder;
}
```

| Claim | Validation | Source |
|-------|-----------|--------|
| `alg` | Whitelist explicite (RS256 ou ES256). JAMAIS `none` | OWASP JWT CS, RFC 7519 |
| `exp` | Rejeter si expire | RFC 7519 Section 4.1.4 |
| `iss` | Verifier l'emetteur attendu | RFC 7519 |
| `aud` | Verifier l'audience attendue | RFC 7519 |
| `jti` | Optionnel — anti-replay | OWASP JWT CS |

Sources : RFC 7519 (niv. 1), OWASP JWT Cheat Sheet (niv. 2), Spring Security docs (niv. 3)

---

## Politique de mots de passe

**[STANDARD]** Suivre NIST SP 800-63B | Score GRADE : 6/7

| Regle | Valeur | Source |
|-------|--------|--------|
| Longueur minimum | 8 (NIST) / 12 (OWASP) | NIST 800-63B, OWASP |
| Longueur maximum | >= 64 caracteres | NIST 800-63B |
| Regles de composition | **INTERDITES** (pas de "1 majuscule + 1 chiffre") | NIST 800-63B |
| Rotation periodique | **INTERDITE** (sauf si compromission) | NIST 800-63B |
| Verification breach list | **OBLIGATOIRE** (HaveIBeenPwned ou liste locale) | NIST 800-63B, OWASP |
| Hashing | Argon2id (voir [password-hashing.md](password-hashing.md)) | OWASP |

```
"Verifiers SHALL NOT impose composition rules for memorized secrets."
"Verifiers SHALL NOT require memorized secrets to be changed arbitrarily."
"Verifiers SHALL compare prospective secrets against a list of compromised values."
 — NIST SP 800-63B Rev. 4
```

---

## OAuth2 / OIDC

**[RECOMMANDE]** Authorization Code + **PKCE** obligatoire pour les SPA | Score GRADE : 5/7

```
"PKCE is an extension to OAuth 2.0 that mitigates the authorization code
 interception attack for public clients."
 — RFC 7636
```

| Grant type | Statut |
|---|---|
| Authorization Code + PKCE | **SEUL autorise** pour les SPA |
| Implicit | **INTERDIT** (tokens exposes dans l'URL, deprecie par OAuth 2.1) |
| Resource Owner Password | **INTERDIT** (deprecated) |
| Client Credentials | Machine-to-machine uniquement |

Spring Security supporte PKCE nativement via `oauth2Login()`.

Sources : RFC 7636 PKCE (niv. 1), RFC 6749 OAuth2 (niv. 1), OWASP (niv. 2)

---

## Choix du provider

**[CHOIX D'EQUIPE]** Spring Security vs Keycloak vs Auth0 — depend du contexte | Score GRADE : 1/7

| Critere | Spring Security | Keycloak | Auth0 |
|---------|----------------|----------|-------|
| Cout | Gratuit (dev time) | Gratuit + serveur (~512MB RAM) | $240+/mois apres 25K MAU |
| Complexite setup | Moyenne | Moyenne-haute | Basse |
| Data sovereignty | Totale | Totale | Cloud US/EU |
| SSO / SAML / LDAP | Non natif | Oui | Oui |
| Lock-in | Aucun | Faible | Eleve |
| Maintenance | Code a maintenir | Serveur a maintenir | Zero |

**Pour une equipe de 1-10 devs** : commencer avec Spring Security. Ajouter Keycloak si besoin de SSO/SAML/LDAP. Auth0 si besoin de compliance (SOC2, HIPAA) ou si pas d'expertise securite.

Sources : pas de consensus entre sources → [CHOIX D'EQUIPE]. Spring Security 68-80% adoption Java (JetBrains), Keycloak CNCF incubating, Auth0 vendor docs (conflit d'interet eleve).

---

## Anti-patterns (a ne JAMAIS faire)

| Anti-pattern | Source |
|---|---|
| JWT dans localStorage | OWASP ASVS V3.4.2, OWASP JWT CS |
| Algorithme `none` | OWASP JWT CS, RFC 7519 |
| Implicit grant pour SPA | RFC 7636, OAuth 2.1 draft |
| Regles de composition de mot de passe | NIST 800-63B |
| Rotation periodique de mot de passe | NIST 800-63B |
| Crypto custom (au lieu de Spring Security) | SWEBOK v4 |
| Token dans les parametres d'URL | OWASP ASVS V3.1.1 |
| Messages d'erreur revelant username/password | OWASP Auth Cheat Sheet |

---

## Sources

- [niv. 1] NIST SP 800-63B Rev. 4 — AAL levels, password rules, session timeouts
- [niv. 1] RFC 7519 (JWT), RFC 6749 (OAuth2), RFC 7636 (PKCE) — standards Internet
- [niv. 1] SWEBOK v4 — "use well-tested frameworks, defense in depth"
- [niv. 2] OWASP ASVS V2 (auth) + V3 (session) — ~80 requirements
- [niv. 2] OWASP Authentication Cheat Sheet — best practices
- [niv. 2] OWASP JWT Cheat Sheet — token storage, rotation, validation
- [niv. 2] OWASP Session Management Cheat Sheet — timeouts, cookie attributes
- [niv. 3] Spring Security docs — architecture, JWT resource server, OAuth2
- [niv. 4] JetBrains 2024 — JWT 52% adoption, OAuth2 49%, Spring Security 68-80%
