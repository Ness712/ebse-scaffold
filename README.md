# EBSE Guide Tool

Outil interactif de decisions techniques pour le developpement logiciel, base sur l'Evidence-Based Software Engineering (EBSE).

## Qu'est-ce que c'est ?

Un configurateur qui :
1. Te pose des questions sur ton projet (langage, equipe, budget, type d'app)
2. Determine la stack optimale selon des sources verifiables (pas d'opinion, pas d'invention)
3. Genere un guide personnalise avec TOUTES les recommandations adaptees a ta stack
4. Chaque recommandation a un score de confiance (GRADE) et des sources verifiables

## Methode

Adaptation de l'Evidence-Based Medicine au genie logiciel (EBSE, Kitchenham et al. 2004).

- **PICO** : chaque decision formulee comme une question structuree
- **Pyramide des preuves** : chaque source classee par fiabilite (ISO > OWASP > docs > enquetes > experts)
- **GRADE** : score de confiance mecanique (pas de jugement humain)
- **Double extraction** : 2 agents IA independants pour chaque recommandation
- **Kappa de Cohen** : taux d'accord mesure et documente
- **Tracabilite** : chaque recommandation a un fichier de preuve

Voir [methodology.md](methodology.md) pour le protocole complet.

## Utilisation

### Humain (web UI)
```bash
cd app
pnpm install
pnpm dev
# Ouvrir http://localhost:5173
```

### Machine / IA (API JSON)
```bash
# Envoyer le contexte, recevoir les recommandations
curl -X POST http://localhost:5173/api/guide \
  -H "Content-Type: application/json" \
  -d '{"backend": "java-spring-boot", "frontend": "react", "database": "postgresql"}'
```

### Donnees brutes
Les recommandations sont dans `data/decisions/*.json` (lisibles par humain et machine).

## Structure du projet

```
EBSE-guide/
├── methodology.md          ← Methode EBSE (PICO, GRADE, double extraction)
├── matrix.md               ← Matrice ISO 25010 x SWEBOK (scope)
├── data/                   ← Base de donnees de recommandations (JSON)
│   ├── decisions/          ← 1 fichier par decision
│   ├── decision-tree.json  ← Arbre de decision (questions)
│   └── stacks/             ← Profils pre-calcules
├── app/                    ← Application web (React + Vite + TypeScript)
├── guide/                  ← Pages markdown (source, reference)
└── verification/           ← Traces de double extraction + formulaires
```

## Stacks couvertes

- Java / Spring Boot + React
- TypeScript / NestJS + React
- Python / Django + React
- (C# / ASP.NET — prevu)

## Statut

En construction. Voir [PLAN.md](PLAN.md) pour l'avancement.
