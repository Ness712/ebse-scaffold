# Documentation

**[BONNE PRATIQUE]** README (setup), ADR (decisions archi), CONVENTIONS.md (regles), inline comments (why not what) | Score GRADE : 3/7

## Types de documentation

| Document | Contenu | Mise a jour |
|----------|---------|-------------|
| README.md | Stack, setup, commandes | A chaque changement de stack |
| CONVENTIONS.md | Regles obligatoires de l'equipe | Quand une regle change |
| ADR (Architecture Decision Records) | Decisions techniques + contexte | A chaque decision structurante |
| Inline comments | Pourquoi (jamais quoi) | Avec le code |

## Single Source of Truth

Chaque information n'existe qu'a un seul endroit. Si un README repete une convention, il divergera. Pointer vers le fichier source plutot que dupliquer.

## Regles

| Regle | Source |
|-------|--------|
| Doc mise a jour dans le meme commit que le code | Google dev docs guide |
| README : "zero to running" en < 30 min | SWEBOK v4 — onboarding |
| ADR : format titre + contexte + decision + consequences | Michael Nygard — ADR template |
| Pas de commentaire "what" — le code doit etre lisible seul | Google dev docs guide |

Sources : SWEBOK v4 ch.11 (niv. 5), Google developer documentation style guide (niv. 5)
