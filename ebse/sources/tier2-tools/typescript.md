# TypeScript — Configuration recommandée (Audit Source)

**Source** : TypeScript Handbook — TSConfig Reference
**Version** : TypeScript 5.x
**Applicable si** : tout projet TypeScript
**Usage** : comparer `tsconfig.json` réel contre cette référence lors d'un audit

---

## Compiler Options — Vérifications obligatoires

| Option | Valeur recommandée | Vérifié | Note |
|--------|--------------------|:-------:|------|
| `strict` | `true` | ⬜ | Active strict null checks, noImplicitAny, strictFunctionTypes, etc. |
| `noImplicitAny` | `true` (inclus dans strict) | ⬜ | |
| `strictNullChecks` | `true` (inclus dans strict) | ⬜ | |
| `noImplicitReturns` | `true` | ⬜ | Toutes les branches doivent retourner une valeur |
| `noFallthroughCasesInSwitch` | `true` | ⬜ | |
| `noUnusedLocals` | `true` | ⬜ | |
| `noUnusedParameters` | `true` | ⬜ | |
| `exactOptionalPropertyTypes` | `true` | ⬜ | |
| `noUncheckedIndexedAccess` | `true` | ⬜ | Indexing returns T | undefined |
| `target` | `ES2022` ou supérieur | ⬜ | |
| `module` | `NodeNext` (backend) / `ESNext` (frontend) | ⬜ | |
| `moduleResolution` | `NodeNext` ou `bundler` | ⬜ | |
| `esModuleInterop` | `true` | ⬜ | |
| `skipLibCheck` | `true` | ⬜ | Performance uniquement |
| `forceConsistentCasingInFileNames` | `true` | ⬜ | |
| `resolveJsonModule` | `true` (si imports JSON) | ⬜ | |
| `declaration` | `true` (si bibliothèque publiée) | ⬜ | |
| `sourceMap` | `true` (dev) | ⬜ | |

---

## Path aliases

| Vérification | Attendu | Vérifié | Note |
|-------------|---------|:-------:|------|
| `paths` configuré pour `@/` → `src/` (frontend) | `{"@/*": ["./src/*"]}` | ⬜ | |
| `baseUrl` défini si `paths` utilisé | `"."` ou `"./src"` | ⬜ | |

---

## Patterns interdits (vérifier via grep dans le code)

| Pattern | Règle | Vérifié | Note |
|---------|-------|:-------:|------|
| `as unknown as X` | Interdit sauf cast documenté | ⬜ | Voir CONVENTIONS.md |
| `@ts-ignore` | Interdit — utiliser `@ts-expect-error` avec justification | ⬜ | |
| `any` explicite | À éviter — préférer `unknown` | ⬜ | |
| `!` non-null assertion | Accepté uniquement si null impossible prouvé | ⬜ | |

---

## Références

- [TypeScript TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [TypeScript Strict Mode](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness)
