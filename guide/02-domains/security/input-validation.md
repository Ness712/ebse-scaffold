# Validation des entrees

## Pourquoi c'est critique

**[STANDARD]** La validation des entrees est la **premiere ligne de defense** | Score GRADE : 6/7

```
"Validate input" — #1 dans le CERT/CC Top 10 (cite par SWEBOK v4)
```

| Faiblesse | Rang mondial CWE 2025 | Score |
|-----------|----------------------|-------|
| XSS (CWE-79) | **#1** | 60.38 |
| SQL Injection (CWE-89) | **#2** | 28.72 |
| CSRF (CWE-352) | **#3** | 13.64 |
| Input Validation (CWE-20) | **#18** | 4.09 |

```
"Properly implemented input validation controls, using positive allow lists
 and strong data typing, can eliminate more than 90% of all injection attacks."
 — OWASP ASVS v4.0
```

Sources : SWEBOK v4 (niv. 1), NIST SP 800-53 SI-10 (niv. 1), OWASP Top 10 A03 (niv. 2), CWE Top 25 (niv. 2), Veracode SoSS 2024 (niv. 4)

---

## SQL Injection

**[STANDARD]** Utiliser des **requetes parametrees** (JPA) — JAMAIS de concatenation | Score GRADE : 6/7

```java
// BON — parametre lie, injection impossible
@Query("SELECT u FROM User u WHERE u.email = :email")
Optional<User> findByEmail(@Param("email") String email);

// BON — Spring Data derived query (parametree automatiquement)
Optional<User> findByEmail(String email);

// MAUVAIS — concatenation = injection SQL possible
// @Query("SELECT u FROM User u WHERE u.email = '" + email + "'")
```

```
"The preferred option is to use a safe API, which avoids using the interpreter
 entirely, provides a parameterized interface, or migrates to ORMs."
 — OWASP Top 10 A03
```

Les requetes parametrees bloquent **>99%** des attaques SQL injection (etudes empiriques). Les `@Query` natives avec concatenation restent vulnerables meme avec JPA.

Sources : OWASP Top 10 + SQLi Cheat Sheet (niv. 2), OWASP ASVS V5.3.4 (niv. 2), NIST SI-10 (niv. 1), JPA/Hibernate docs (niv. 3), recherche academique (niv. 5)

---

## XSS (Cross-Site Scripting)

**[STANDARD]** S'appuyer sur l'**auto-escaping de React** + ne JAMAIS injecter du HTML non sanitise | Score GRADE : 6/7

```tsx
// BON — React echappe automatiquement les valeurs dans JSX
<p>{userInput}</p>

// DANGEREUX — ne jamais utiliser avec des donnees utilisateur non sanitisees
// Si absolument necessaire, TOUJOURS sanitiser avec DOMPurify :
import DOMPurify from 'dompurify';
const safeHtml = DOMPurify.sanitize(richContent);
```

```
"By default, React DOM escapes any values embedded in JSX before rendering them.
 Everything is converted to a string before being rendered. This helps prevent
 XSS attacks."
 — React docs
```

Sources : OWASP XSS Cheat Sheet (niv. 2), React docs (niv. 3), CWE-79 #1 mondial (niv. 2)

---

## CSRF (Cross-Site Request Forgery)

**[RECOMMANDE]** Spring Security CSRF (active par defaut) + **SameSite cookies** | Score GRADE : 4/7

```
"Spring Security provides CSRF protection by default for unsafe HTTP methods,
 such as a POST request, so no additional code is needed."
 — Spring Security docs
```

| Architecture | Protection CSRF |
|---|---|
| SPA + cookies HttpOnly | Spring Security CSRF (Synchronizer Token) + SameSite=Lax |
| API stateless + JWT dans Authorization header | CSRF non necessaire (le token doit etre explicitement inclus) |

```java
// SPA avec cookies — config Spring Security
http.csrf(csrf -> csrf
    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
);
```

Sources : OWASP CSRF Cheat Sheet (niv. 2), Spring Security docs (niv. 3), CWE-352 #3 mondial (niv. 2)

---

## CSP (Content Security Policy)

**[RECOMMANDE]** Configurer les **headers CSP** comme defense-en-profondeur | Score GRADE : 4/7

```java
// Spring Security
http.headers(headers -> headers
    .contentSecurityPolicy(csp -> csp
        .policyDirectives("default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'")
    )
);
```

```
"CSP is a defense-in-depth mitigation against XSS. It is not a replacement
 for secure coding practices."
 — OWASP XSS Prevention Cheat Sheet
```

Sources : W3C CSP Level 3 (niv. 1), OWASP XSS Cheat Sheet (niv. 2), Spring Security docs (niv. 3)

---

## Validation serveur — Java (Bean Validation)

**[RECOMMANDE]** **Bean Validation** (JSR 380) + Hibernate Validator | Score GRADE : 4/7

Auto-configure par Spring Boot. Zero configuration necessaire.

```java
public record CreateUserRequest(
    @NotBlank @Size(max = 100) String nom,
    @NotBlank @Email String email,
    @NotBlank @Size(min = 12) String motDePasse
) {}

@PostMapping("/users")
public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserRequest request) {
    // Si validation echoue → 400 Bad Request automatique
}
```

| Annotation | Usage |
|------------|-------|
| `@NotBlank` | Champ requis, non vide |
| `@Size(min, max)` | Longueur de chaine |
| `@Email` | Format email |
| `@Pattern(regexp)` | Regex custom |
| `@Min` / `@Max` | Bornes numeriques |
| `@Valid` | Validation recursive d'objets imbriques |

Custom validator pour regles metier :
```java
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail { ... }
```

```
"Input validation must be implemented on the server-side before any data is processed.
 Client-side validation can be used for UX but must never be trusted for security."
 — OWASP Input Validation Cheat Sheet
```

Sources : OWASP Input Validation Cheat Sheet (niv. 2), Spring Boot docs (niv. 3), Hibernate Validator docs (niv. 3)

---

## Validation client — TypeScript (Zod)

**[RECOMMANDE]** **Zod** pour la validation client (UX uniquement, PAS pour la securite) | Score GRADE : 3/7

```typescript
import { z } from 'zod';

const createUserSchema = z.object({
  nom: z.string().min(1).max(100),
  email: z.string().email(),
  motDePasse: z.string().min(12),
});

type CreateUserRequest = z.infer<typeof createUserSchema>;
// TypeScript infere le type automatiquement
```

| Alternative | Verdict |
|-------------|---------|
| Yup | ~10M dl/sem, moins TypeScript-natif que Zod |
| Joi | ~18M dl/sem, oriente Node.js, plus lourd |
| Valibot | 98% plus petit (1kb), plus recent, ecosysteme plus petit |

La validation client est **uniquement pour l'UX** (feedback instantane). Elle est contournee dans **100%** des tests de penetration. La securite repose TOUJOURS sur le serveur.

Sources : Zod docs (niv. 3), npm trends — Zod #1 en stars (42k) (niv. 4), OWASP : client = UX only (niv. 2)

---

## Defense en profondeur

**[STANDARD]** Aucune technique seule ne suffit. Empiler les couches | Score GRADE : 6/7

```
Requete utilisateur
  → Validation client (Zod) — UX, feedback instantane
  → Validation serveur (Bean Validation) — data integrity
  → Requetes parametrees (JPA) — SQL injection
  → Auto-escaping (React JSX) — XSS
  → Headers securite (CSP, HSTS) — defense en profondeur
  → CSRF token (Spring Security) — CSRF
```

```
"Practice defense in depth." — CERT/CC Top 10 (cite par SWEBOK v4)
"No single technique will solve XSS." — OWASP XSS Prevention Cheat Sheet
```

---

## Sources

- [niv. 1] SWEBOK v4 Section 3.5 — "Validate input" #1 CERT/CC, parameterized queries, output encoding
- [niv. 1] NIST SP 800-53 SI-10 — input validation mandatory for moderate-impact systems
- [niv. 1] W3C CSP Level 3 — Content Security Policy standard
- [niv. 2] OWASP Top 10 A03 — Injection, 274k occurrences, 94% apps testees
- [niv. 2] OWASP ASVS V5 — 36 requirements, >90% injections eliminated by allow-list
- [niv. 2] OWASP Cheat Sheets — Input Validation, SQLi, XSS, CSRF Prevention
- [niv. 2] CWE Top 25 2025 — XSS #1, SQLi #2, CSRF #3
- [niv. 3] Spring Security docs — CSRF default, CSP config, security headers
- [niv. 3] Spring Boot docs — Bean Validation auto-configured
- [niv. 3] React docs — auto-escaping default
- [niv. 3] Zod docs — TypeScript-first, 2kb, zero dependencies
- [niv. 4] Veracode SoSS 2024 — XSS in 49% apps, SQLi in 28%
- [niv. 5] Recherche academique — parameterized queries >99% effective
