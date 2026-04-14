# Onboarding utilisateur

**[BONNE PRATIQUE]** Divulgation progressive, aide contextuelle | Score GRADE : 3/7

80% des utilisateurs abandonnent une app apres la premiere utilisation si l'onboarding est absent ou confus.

## Principes

```
Premiere visite ?
├── Empty states = opportunite d'onboarding
│   └── "Aucun exercice. Creez votre premier !"
├── Tooltips contextuels (Shepherd.js / react-joyride)
│   └── 3-5 etapes max, skip toujours possible
├── Divulgation progressive
│   └── Montrer les fonctions avancees au fur et a mesure
└── Reconnaissance > rappel (Nielsen #6)
    └── Labels visibles, pas d'icones seules
```

## Implementation

```tsx
// Tooltip d'onboarding avec Shepherd.js
import Shepherd from 'shepherd.js';

const tour = new Shepherd.Tour({
  defaultStepOptions: { cancelIcon: { enabled: true } },
});
tour.addStep({
  text: 'Commencez par creer un module ici.',
  attachTo: { element: '#btn-creer-module', on: 'bottom' },
  buttons: [{ text: 'Suivant', action: tour.next }],
});
```

Sources : Nielsen Norman Group — "recognition rather than recall" heuristic #6 (niv. 5), Shepherd.js docs (niv. 3), Baymard Institute — empty state onboarding (niv. 4), Pendo 2024 — 80% churn sans onboarding (niv. 4)
