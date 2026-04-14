# Dette technique

**[BONNE PRATIQUE]** Mesurer (SonarQube), allouer du temps, boy scout rule | Score GRADE : 3/7

## Strategie

```
Gestion de la dette technique
├── Mesurer — SonarQube "Technical Debt" metric
│   └── Ratio dette = temps de remediation / temps de dev
│   └── Seuil : < 5% (Quality Gate par defaut SonarQube)
├── Prioriser — Impact x Frequence de contact
│   └── Code touche souvent + dette = priorite haute
├── Allouer — 20% du temps sprint pour la dette
│   └── Integrer dans le backlog, pas "quand on a le temps"
└── Prevenir — Boy scout rule
    └── "Laisser le code plus propre qu'on ne l'a trouve"
```

## SonarQube Quality Gate

```
# Conditions Quality Gate recommandees
- New code coverage >= 80%
- New duplicated lines < 3%
- New maintainability rating = A
- Technical debt ratio on new code < 5%
```

## Boy scout rule en pratique

```java
// Avant : on touche ce fichier pour un fix
public void traiterCommande(Map data) { ... }

// Apres : on en profite pour typer correctement
public void traiterCommande(CommandeDto commande) { ... }
// Le refactor est dans le meme commit que le fix
```

Sources : Fowler "TechnicalDebt" (niv. 5), SonarQube docs — technical debt metric (niv. 3), Martin "Clean Code" — boy scout rule (niv. 5), SWEBOK v4 — Software Maintenance KA (niv. 1)
