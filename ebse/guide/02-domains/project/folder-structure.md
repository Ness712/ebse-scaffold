# Folder Structure

**[BONNE PRATIQUE]** Feature-based : /backend + /frontend a la racine, chaque partie suit les conventions du framework | Score GRADE : 3/7

## Structure recommandee

```
/project-root
  /backend       → conventions Spring Boot / Express / etc.
  /frontend      → feature-based (pages/, features/, shared/)
  /docs          → documentation projet
  docker-compose.yml
```

## Regles

| Regle | Source |
|-------|--------|
| Grouper par feature, pas par type technique | Bulletproof React — maintenabilite et scalabilite |
| Backend et frontend a la racine | SWEBOK v4 ch.8 — separation claire des responsabilites |
| Suivre les conventions du framework choisi | SWEBOK v4 — reduire la charge cognitive pour les nouveaux |
| Limiter la profondeur a 3-4 niveaux | Bulletproof React — navigabilite du code |

## Pourquoi feature-based

Le groupement par type (`components/`, `hooks/`, `utils/`) ne scale pas : a 50+ fichiers, retrouver le code d'une feature demande de naviguer partout. Feature-based co-localise tout ce qui concerne une fonctionnalite.

Sources : SWEBOK v4 ch.8 modules (niv. 5), Bulletproof React architecture guide (niv. 5)
