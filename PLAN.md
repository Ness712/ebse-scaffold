# Plan — EBSE Guide Tool

## Vision

Un outil (web app + API) qui :
1. Pose des questions sur ton projet (taille equipe, langage, budget, type d'app...)
2. Determine la stack optimale selon les sources EBSE
3. Genere un guide personnalise avec TOUTES les recommandations adaptees a TA stack
4. Chaque recommandation est sourcee, avec GRADE, verifiable
5. Utilisable par humain (web UI) ET par IA/machine (API JSON)

## Architecture

```
ebse-data/                    ← Base de donnees de recommandations
  decisions/                  ← Chaque decision = 1 fichier JSON
    backend-framework.json
    frontend-framework.json
    database.json
    unit-testing.json
    logging.json
    ...
  decision-tree.json          ← Arbre de decision (questions → branches)
  stacks.json                 ← Profils de stack pre-calcules

ebse-app/                     ← Application web (React + Vite)
  src/
    configurator/             ← Questionnaire interactif
    guide/                    ← Affichage du guide personnalise
    api/                      ← Export JSON pour machines

ebse-docs/                    ← Methodologie + verification (ce qui existe deja)
  methodology.md
  matrix.md
  verification/
```

## Format des donnees (chaque decision)

```json
{
  "id": "unit-testing",
  "domain": "testing",
  "question": "Quel framework de test unitaire ?",
  "universal_principles": [
    {
      "principle": "Suivre la pyramide de tests 70/20/10",
      "grade": 5,
      "level": "STANDARD",
      "sources": [
        {"name": "SWEBOK v4", "level": 1, "quote": "..."},
        {"name": "Google Testing Blog", "level": 5, "quote": "70/20/10"}
      ]
    }
  ],
  "stack_specific": {
    "java-spring-boot": {
      "recommendation": "JUnit 5 + AssertJ + Mockito",
      "grade": 5,
      "level": "RECOMMANDE",
      "config": "Inclus dans spring-boot-starter-test",
      "sources": [...]
    },
    "typescript-nestjs": {
      "recommendation": "Jest ou Vitest + supertest",
      "grade": 4,
      "level": "RECOMMANDE",
      "sources": [...]
    },
    "python-django": {
      "recommendation": "pytest + pytest-django + factory-boy",
      "grade": 4,
      "level": "RECOMMANDE",
      "sources": [...]
    }
  },
  "depends_on": ["backend-framework"],
  "tags": ["testing", "quality", "ci"]
}
```

## Format arbre de decision

```json
{
  "entry": {
    "question": "Quelle approche ?",
    "options": [
      {
        "label": "Je veux le MIEUX, je m'adapte",
        "sets": { "approach": "optimal" },
        "next": "optimal-stack"
      },
      {
        "label": "J'ai des contraintes",
        "next": "team-size"
      }
    ]
  },
  "team-size": {
    "question": "Taille de ton equipe ?",
    "options": [
      { "label": "1-5 devs", "sets": { "team": "small" }, "next": "language" },
      { "label": "5-20 devs", "sets": { "team": "medium" }, "next": "language" },
      { "label": "20+ devs", "sets": { "team": "large" }, "next": "language" }
    ]
  },
  "language": {
    "question": "Quel langage maitrise ton equipe ?",
    "options": [
      { "label": "Java", "sets": { "backend": "spring-boot" }, "next": "frontend" },
      { "label": "TypeScript/JavaScript", "sets": { "backend": "nestjs" }, "next": "frontend" },
      { "label": "Python", "sets": { "backend": "django" }, "next": "frontend" },
      { "label": "C#", "sets": { "backend": "aspnet" }, "next": "frontend" },
      { "label": "Aucun / je veux le mieux", "sets": { "approach": "optimal" }, "next": "optimal-stack" }
    ]
  }
}
```

## Phases de construction

### Phase 1 — Data (convertir les 94 pages en JSON structure)
- Trier chaque page : universel vs stack-specific vs mixte
- Convertir en format JSON avec metadonnees (GRADE, sources, conditions)
- Ajouter les variantes multi-stack pour chaque page stack-specific
- Double extraction sur les nouvelles variantes (NestJS, Django, ASP.NET)

### Phase 2 — Arbres de decision
- Construire decision-tree.json avec toutes les questions
- Chemin "optimal" : double extraction pour determiner LA meilleure stack sans contrainte
- Chemin "contextuel" : branches selon equipe/langage/budget/type
- Chaque branche source (EBSE)

### Phase 3 — Application web
- React + Vite + TypeScript + Tailwind (on applique notre propre guide)
- Configurateur : questionnaire step-by-step
- Guide : affichage des recommandations filtrees par les choix
- Mode humain (pages lisibles) + mode machine (JSON export)

### Phase 4 — API
- Endpoint : POST /api/guide { choices: { backend: "spring-boot", frontend: "react", ... } }
- Reponse : JSON avec toutes les recommandations adaptees
- Utilisable par IA comme contexte/instructions

### Phase 5 — Verification
- Double extraction sur TOUTES les nouvelles recommandations (variantes multi-stack)
- Kappa sur les variantes
- Audit couverture matrice

### Phase 6 — Deploiement
- Repo public quand pret
- Deploiement web (Vercel ou self-hosted)
- Documentation API
