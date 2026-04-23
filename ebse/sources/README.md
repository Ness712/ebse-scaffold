# Sources de vérité universelles — ebse-scaffold/ebse/sources/

Ce dossier contient les **checklists et référentiels de vérification universels** utilisés pendant les audits de santé projet.

**Ces fichiers sont les documents contre lesquels on vérifie le code**, pas des sources bibliographiques.

## Rôle

Pendant un audit (voir `ebse/guide/02-domains/project/audit-sources.md`), les agents chargent ces fichiers comme sources de vérité (Tier 1 et Tier 2). Chaque finding doit référencer un item d'une de ces sources.

## Organisation

```
sources/
├── tier1-normes/          → Standards universels (applicabilité selon profil projet)
│   ├── owasp-asvs-l1.md   → OWASP ASVS 4.0.3 — contrôles L1 (web avec auth)
│   ├── wcag-22-aa.md       → WCAG 2.2 AA — critères (tout projet UI public)
│   ├── rgpd-cnil.md        → RGPD checklist CNIL (tout projet EU avec données perso)
│   ├── rgaa-4.1.md         → RGAA 4.1 (France + clients publics)
│   └── hds.md              → HDS (données de santé)
└── tier2-tools/           → Configs officielles des outils
    ├── typescript.md       → tsconfig.json recommandé
    ├── eslint-nestjs.md    → ESLint config NestJS
    ├── eslint-react.md     → ESLint config React
    ├── vite.md             → Vite config optimisations
    ├── prisma.md           → Prisma best practices
    ├── docker-nodejs.md    → Docker best practices Node.js
    └── github-actions.md   → GitHub Actions security hardening
```

## Applicabilité selon profil projet

| Source | Applicable si |
|--------|--------------|
| `owasp-asvs-l1.md` | Projet web avec authentification |
| `wcag-22-aa.md` | Interface utilisateur publique |
| `rgpd-cnil.md` | Projet EU traitant données personnelles |
| `rgaa-4.1.md` | France + clients publics ou choix volontaire |
| `hds.md` | Données de santé (Art. 9 RGPD) |
| `tier2-tools/*` | Selon les outils effectivement utilisés |

> L'applicabilité est déterminée par l'arbre de décisions (`ebse/guide/data/decision-tree.json`) et le profil projet (`ebse/guide/data/stacks/*.json`).

## Convention de versionnement

Chaque fichier indique en en-tête la version du référentiel source :
- `OWASP ASVS 4.0.3` → version figée, mettre à jour si nouvelle version majeure
- `WCAG 2.2` → version figée
- `RGPD / CNIL` → pas de version numérotée, date de dernière mise à jour

Quand une source évolue (ex: OWASP ASVS 5.0), créer un nouveau fichier versionné et mettre à jour ce README.
