# Base de donnees

## Choix

**[STANDARD]** **PostgreSQL** pour les donnees relationnelles | Score GRADE : 5/7

```
"PostgreSQL edges MySQL out as the most popular database."
 — JetBrains Developer Ecosystem 2025
```

| Enquete | PostgreSQL | MySQL | Ecart |
|---------|-----------|-------|-------|
| SO Survey 2025 — adoption | **55.6%** (#1) | 40.5% (#2) | +15pts |
| SO Survey 2025 — admiration | **65.5%** (#1) | 59% | +6.5pts |
| SO Survey 2024 — admiration | **74.5%** (#1) | 62.7% | +12pts |
| JetBrains 2025 | **#1** (depasse MySQL) | #2 | Inversion |
| JetBrains 2024 | 45% (hausse) | 52% (baisse) | Convergence |
| DB-Engines 2026 | #4 (croissance forte) | #2 (stable) | PG dynamique |
| CNCF | CloudNativePG (seul operateur SGBD) | Aucun projet | PG |

Performance empirique (MDPI 2024, peer-reviewed) :
- SELECT 1M records : PostgreSQL **13x plus rapide** que MySQL
- Charge concurrente : PostgreSQL stable, MySQL degrade

Sources : SO Survey 2024-2025 (niv. 4, 65k+ devs), JetBrains 2024-2025 (niv. 4, 24k devs), DB-Engines (niv. 4), CNCF CloudNativePG (niv. 2), MDPI benchmark 2024 (niv. 4)

---

## Arbre de decision

```
Donnees relationnelles ?
├── NON → hors scope
└── OUI
    ├── Environnement dev/test uniquement ?
    │   └── OUI → H2 embedded (auto-configure par Spring Boot, zero config)
    ├── Contrainte legacy MySQL existante ?
    │   └── OUI → rester MySQL (cout migration > benefice)
    │             planifier migration PostgreSQL a moyen terme
    ├── Contrainte enterprise (Oracle, SQL Server impose) ?
    │   └── OUI → respecter la contrainte
    ├── Besoin embarque sans serveur (mobile, CLI) ?
    │   └── OUI → SQLite
    └── Nouveau projet ?
        └── PostgreSQL
```

---

## Configuration Spring Boot

```yaml
# application.yml — Production
spring:
  datasource:
    url: jdbc:postgresql://${DB_HOST:localhost}:${DB_PORT:5432}/${DB_NAME}
    username: ${DB_USER}
    password: ${DB_PASSWORD}
    hikari:
      maximum-pool-size: 10
      minimum-idle: 2
      connection-timeout: 20000
      idle-timeout: 300000
  jpa:
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    hibernate:
      ddl-auto: validate    # Flyway gere le schema
  flyway:
    enabled: true
```

```yaml
# application-test.yml — Tests
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
```

Conformite Twelve-Factor (Factor IV) : config 100% externalisee via variables d'environnement. Le SGBD est un attached resource interchangeable sans changement de code.

---

## Pourquoi pas les autres ?

| Alternative | Verdict |
|---|---|
| MySQL | #2 en adoption et satisfaction, en baisse. Performance inferieure sous charge. Oracle le controle (risque licence). Acceptable pour le legacy. |
| MariaDB | Fork open-source de MySQL. Plus libre mais moins d'adoption que PostgreSQL. |
| SQLite | Embarque, fichier local. Pas de serveur = pas adapte au multi-user web. |
| H2 | Embedded, dev/test uniquement. Spring Boot le dit : "You need not provide any connection URLs" (auto-configure). |
| Oracle | Enterprise, licences couteuses, hors scope equipes 1-10 devs. |
| SQL Server | Microsoft, licences. Pertinent si ecosysteme .NET. |

---

## Sources

- [niv. 1] SWEBOK v4 — Computing Foundations s12 "Database Basics and Data Management"
- [niv. 2] CNCF — CloudNativePG = seul operateur SGBD cloud-native (PostgreSQL)
- [niv. 3] Spring Boot docs — support egal PostgreSQL/MySQL, H2 pour dev, HikariCP par defaut
- [niv. 3] PostgreSQL docs — "ACID-compliant since 2001, highly scalable"
- [niv. 4] SO Survey 2024 — PostgreSQL 48.7% popular, 74.5% admired (#1 les deux)
- [niv. 4] SO Survey 2025 — PostgreSQL 55.6% popular (#1), +15pts vs MySQL
- [niv. 4] JetBrains 2025 — PostgreSQL depasse MySQL pour la premiere fois
- [niv. 4] DB-Engines 2026 — PostgreSQL #4, DBMS of the Year 2023
- [niv. 4] MDPI 2024 — PostgreSQL 13x plus rapide SELECT, stable sous charge
- [niv. 5] Twelve-Factor IV — SGBD = attached resource interchangeable
