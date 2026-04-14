# Plan de construction du guide EBSE

## Historique

- v0.1 (2026-04-14) : 94 pages, methode EBSE complete, profil Java/React uniquement
- **Probleme identifie** : le guide presuppose Spring Boot + React au lieu de guider le choix.
  Les agents independants recommandent NestJS ou Django, pas Spring Boot, pour petites equipes.
- **v1.0 (en cours)** : restructuration en configurateur adaptatif multi-stack

---

## Nouvelle architecture du guide

```
ENTREE : "Je veux creer une web app"
    │
    ▼
ETAPE 1 — Choix d'approche
    ├── "Je veux le MIEUX, je m'adapte" → chemin OPTIMAL
    │     Le guide determine LA meilleure stack selon les sources pures
    │     L'utilisateur adapte son equipe, ses competences, son budget
    │
    └── "J'ai des CONTRAINTES" → chemin CONTEXTUEL
          Questions : langage maitrise ? taille equipe ? budget ? type d'app ?
          Le guide s'adapte au contexte
    │
    ▼
ETAPE 2 — Arbres de decision (framework)
    Le guide recommande : backend + frontend + BDD + CSS
    Chaque choix est source (EBSE, double extraction)
    │
    ▼
ETAPE 3 — Recommandations universelles
    Pages valables QUELLE QUE SOIT la stack :
    Design, accessibilite, git, Docker, monitoring principes, securite principes
    │
    ▼
ETAPE 4 — Recommandations adaptees a la stack
    Chaque page montre les outils POUR TA STACK :
    "Tu as choisi Spring Boot → JUnit 5, Logback, @ControllerAdvice"
    "Tu as choisi NestJS → Jest/Vitest, Pino, ExceptionFilter"
    "Tu as choisi Django → pytest, structlog, middleware"
```

---

## Phases de travail

### Phase A — Trier les 94 pages existantes (universel vs stack-specific)

Pour chaque page : est-elle valable pour toute stack, ou specifique a Java/React ?

Livrable : liste "universel" vs "stack-specific" pour les 94 pages.

### Phase B — Chemin OPTIMAL (sans contrainte)

PICO : P=web app, aucune contrainte, I=meilleure stack, C=toutes, O=qualite maximale
Double extraction reelle (2 agents separes) pour determiner :
- Meilleur framework backend (sans contrainte de langage)
- Meilleur framework frontend
- Meilleure BDD
- Meilleur CSS framework
- Meilleur bundler
- etc.

Livrable : profil OPTIMAL source et verifie.

### Phase C — Chemin CONTEXTUEL (avec contraintes)

Arbres de decision avec questions :
1. Langage maitrise par l'equipe ?
2. Taille d'equipe ?
3. Budget (SaaS autorise ou self-hosted only) ?
4. Type d'app (SPA, SSR, mobile, API only) ?

Chaque branche mene a un profil de stack recommande.

Livrable : arbres de decision sources.

### Phase D — Pages multi-stack

Pour chaque page stack-specific, ajouter les variantes :
```
## Si backend Java (Spring Boot)
  JUnit 5, @ControllerAdvice, HikariCP, Logback...

## Si backend TypeScript (NestJS)
  Vitest/Jest, ExceptionFilter, Pino, pg pool...

## Si backend Python (Django)
  pytest, middleware, structlog, psycopg2...
```

Livrable : pages adaptatives couvrant les 3-4 stacks principales.

### Phase E — Verification (meme methode que v0.1)

- Double extraction 2 vrais agents separes sur chaque nouvelle page
- Formulaires d'extraction standardises
- Traces avec identifiants agents
- Kappa calcule
- Audit matrice → guide (couverture complete)

### Phase F — Format final

Decider si le guide reste un document markdown (option A) ou devient un outil interactif (option B — site web/CLI qui pose les questions et genere un guide personnalise).

---

## Ce qui est deja fait (reutilisable)

- Methodologie EBSE complete (methodology.md) — parfaite, ne change pas
- Matrice ISO 25010 x SWEBOK (matrix.md) — valide, ne change pas
- ~40-50 pages universelles — a identifier et garder telles quelles
- Infrastructure de verification (traces, formulaires, kappa) — reutilisable
- 15 exemples de calibration GRADE — valides
