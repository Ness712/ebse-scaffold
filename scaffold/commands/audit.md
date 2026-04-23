# /audit — Audit complet de projet

Audit systématique fondé sur toutes les sources de vérité applicables.
Méthodologie : `audit-sources.md` (GRADE 5/9) + `project-health-audit.md` (GRADE 3/7).

---

## Configuration projet (à renseigner avant exécution)

```
RECOMMENDATIONS : [CONFIGURER: chemin vers <project>-recommendations.json]
CATALOG         : [CONFIGURER: chemin vers ebse-scaffold/ebse/guide/data/sources-catalog.json]
MANIFEST        : [CONFIGURER: chemin vers audit-sources-manifest.md du projet]
REPOS           : [CONFIGURER: liste des repos à auditer]
```

---

## Étape 1 — Charger les sources (AVANT d'ouvrir le projet)

1. Lire `RECOMMENDATIONS → applicable_sources` → liste des IDs Tier 1 (normes) et Tier 2 (outils)
2. Pour chaque ID Tier 1 : lire `CATALOG` → URL officielle (référence directe pour critères non couverts par les recos)
3. Pour chaque ID Tier 2 : lire `CATALOG → what_to_check` → ce qu'on vérifie concrètement
4. Lire `MANIFEST` → chemins Tier 3 (CONVENTIONS.md) + Tier 4 (architecture docs)
5. Documenter l'inventaire complet avant de continuer

```
INVENTAIRE SOURCES :
  Recos EBSE     : <project>-recommendations.json — N critères
  Tier 1 normes  : [IDs + URLs]
  Tier 2 outils  : [IDs + what_to_check]
  Tier 3         : [chemins CONVENTIONS.md]
  Tier 4         : [chemins docs architecture]
```

---

## Étape 2 — Inventaire projet (fichiers par source)

Mapper chaque source vers les fichiers du projet avant d'auditer.

### Tier 1 — Normes → fichiers projet

| Source ID | Glob patterns projet |
|-----------|---------------------|
| `owasp-asvs` | `src/**/auth/**`, `*.guard.ts`, `*.middleware.ts`, `main.ts`, `.env*`, `src/**/*jwt*`, `src/**/*session*`, `src/**/*throttl*` |
| `owasp-api` | `src/**/*.controller.ts`, `src/**/*.resolver.ts`, `main.ts` (CORS, helmet) |
| `wcag-22-aa` | `src/**/*.tsx`, `src/**/*.jsx`, `tailwind.config.*`, `*.css`, `index.html` |
| `rgpd-cnil` | `prisma/schema.prisma`, `src/**/*log*`, `src/**/*audit*`, `src/**/*cookie*`, `src/**/*consent*`, `src/**/*gdpr*` |
| `lcen` | `src/**/legal*`, `src/**/mentions*`, `src/**/footer*`, `public/legal*` |

### Tier 2 — Outils → fichiers config

| Source ID | Fichiers à lire |
|-----------|----------------|
| `typescript` | `tsconfig*.json` (tous repos) |
| `eslint` | `eslint.config.*`, `.eslintrc*` (tous repos) |
| `nestjs` | `src/**/*.module.ts`, `src/**/*.guard.ts`, `src/**/*.pipe.ts`, `src/**/*.interceptor.ts`, `src/**/*.filter.ts`, `main.ts` |
| `prisma` | `prisma/schema.prisma`, `prisma/migrations/` |
| `react` | `src/main.tsx`, `src/App.tsx`, `src/**/*.tsx` |
| `vite` | `vite.config.*` |
| `tailwind` | `tailwind.config.*` |
| `shadcn-ui` | `src/components/ui/**`, `components.json` |
| `docker` | `Dockerfile*`, `.dockerignore` (tous repos) |
| `docker-compose` | `docker-compose*.yml` |
| `github-actions` | `.github/workflows/*.yml` |
| `caddy` | `Caddyfile`, `*.Caddyfile` |
| `postgresql` | `prisma/schema.prisma`, `docker-compose*.yml` (section postgres), `.env*` (DATABASE_URL) |
| `redis` | `docker-compose*.yml` (section redis), `.env*` (REDIS_*) |
| `minio` | `docker-compose*.yml` (section minio), `.env*` (MINIO_*) |
| `pnpm` | `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `package.json` |
| `playwright` | `playwright.config.*`, `e2e/**/*.spec.ts`, `tests/e2e/**` |
| `vitest` | `vitest.config.*`, `src/**/*.test.ts`, `src/**/*.spec.ts` |
| `jest` | `jest.config.*`, `test/**/*.spec.ts` |
| `sonarqube` | `sonar-project.properties`, `.github/workflows/*sonar*` |
| `dependabot` | `.github/dependabot.yml` |
| `codeql` | `.github/workflows/*codeql*`, `.github/workflows/*codescan*` |

### Tier 3 — Conventions → extraire les règles

Pour chaque `CONVENTIONS.md` listé dans le manifest : lire en entier, extraire la liste des règles vérifiables.

### Tier 4 — Architecture → extraire les contraintes

Pour chaque doc architecture listé dans le manifest : lire, extraire les contraintes auditables (schéma modules, contrats API, décisions de structure).

---

## Étape 3 — Audit par dimension (agents spécialisés en parallèle)

Spawner des agents spécialisés par dimension ISO 25010. Chaque agent reçoit :
- Les fichiers identifiés à l'étape 2 pour sa dimension
- Les recommandations EBSE pertinentes (filtrer `<project>-recommendations.json` par domaine)
- Le `what_to_check` des outils Tier 2 de sa dimension
- Les critères Tier 1 directs applicables (pour complétude)

| Agent | Dimension | Sources principales |
|-------|-----------|---------------------|
| `[SEC]` Sécurité | Security | owasp-asvs, owasp-api, recos domaine security |
| `[A11Y]` Accessibilité | Interaction Capability | wcag-22-aa, recos domaine design/accessibilité |
| `[RGPD]` Conformité | Safety | rgpd-cnil, lcen, recos domaine conformité |
| `[CONV]` Maintenabilité | Maintainability | typescript, eslint, Tier 3 CONVENTIONS.md |
| `[ARCH]` Architecture | Flexibility | nestjs, prisma, Tier 4 modules/openapi |
| `[INFRA]` Infrastructure | Reliability | docker, docker-compose, github-actions, caddy, redis, minio |
| `[TEST]` Tests | Reliability | playwright, vitest, jest, recos domaine testing |

Prompt de chaque agent :
```
Audit [dimension] — contexte frais, aucun biais de construction.
1. Lire les fichiers : [liste issue de l'étape 2]
2. Vérifier contre : [recos EBSE filtrées] + [what_to_check Tier 2] + [critères Tier 1 directs]
3. Pour chaque écart : produire un finding au format standard.
4. Règle de sourcé obligatoire : chaque finding cite sa source explicite.
```

---

## Étape 4 — Consolidation et findings

### Format finding standard

```
**[LABEL] Titre court**
- Sévérité : CRITIQUE | MAJEUR | MINEUR | INFO
- Fichier : chemin/vers/fichier.ts:42
- Source : OWASP ASVS 2.1.1 | WCAG 2.2 SC 1.4.3 | reco#<id> | CONVENTIONS.md §X | modules.md
- Problème : description précise
- Correction : action applicable immédiatement
```

### Classement et issues

- **CRITIQUE** : issue GitHub individuelle, bloquant release
- **MAJEUR** : issue GitHub individuelle, à traiter dans le sprint
- **MINEUR** : groupés en une issue "Lot MINEUR [date]"
- **INFO** : rapport uniquement, pas d'issue

### Rapport final

```
REPOS AUDITÉS : [liste]
SOURCES VÉRIFIÉES :
  Recos EBSE : N vérifiées
  Tier 1 : [normes] — couverture estimée
  Tier 2 : [outils] — configs vérifiées
  Tier 3 : [CONVENTIONS.md] — N règles
  Tier 4 : [docs] — contraintes vérifiées
FINDINGS : N CRITIQUE, N MAJEUR, N MINEUR, N INFO
CORRECTIONS AUTONOMES : [fichier:ligne]
À TRAITER PAR PO : [findings nécessitant décision humaine]
STATUT GLOBAL : OK / KO
```

---

## Références

- Guide sources : `ebse-scaffold/ebse/guide/02-domains/project/audit-sources.md`
- Guide structure : `ebse-scaffold/ebse/guide/02-domains/project/project-health-audit.md`
- Catalogue sources : `ebse-scaffold/ebse/guide/data/sources-catalog.json`
