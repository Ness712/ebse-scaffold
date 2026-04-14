# Hashing des mots de passe

## Recommandation

**[RECOMMANDE]** Utiliser **Argon2id** | Score GRADE : 4/7

### Configuration

| Parametre | Valeur minimum |
|-----------|---------------|
| Memory | 19 MiB (19456 KiB) |
| Iterations | 2 |
| Parallelism | 1 |
| Salt | 16 bytes (genere aleatoirement) |
| Hash length | 32 bytes |

### Implementation

**Spring Boot :**
```java
@Bean
public PasswordEncoder passwordEncoder() {
    return Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();
}
```

**Node.js :**
```javascript
import argon2 from 'argon2';

const hash = await argon2.hash(password, {
  type: argon2.argon2id,
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1
});
```

### Fallback

Si Argon2id n'est pas disponible, utiliser **bcrypt** avec un work factor >= 12.

### Pourquoi pas les autres ?

| Alternative | Verdict |
|-------------|---------|
| bcrypt | Acceptable mais Argon2id est superieur (memory-hard) |
| scrypt | Acceptable, moins recommande que Argon2id par OWASP |
| PBKDF2 | Seulement si contrainte FIPS-140. Iterations >= 600 000 |
| SHA-256 / MD5 | **JAMAIS** — pas de work factor, crackable instantanement |

### Sources

- OWASP Password Storage Cheat Sheet — Argon2id en 1ere position
- NIST SP 800-63B — approuve les fonctions memory-hard
- Password Hashing Competition — Argon2 vainqueur (24 soumissions)
- Spring Security — Argon2PasswordEncoder disponible nativement

> Justification complete : [case-1-security-confidentiality-construction.md](../../../cases/case-1-security-confidentiality-construction.md)
