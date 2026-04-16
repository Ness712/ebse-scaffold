# Format des exigences

**[BONNE PRATIQUE]** User stories + criteres d'acceptation Given/When/Then | Score GRADE : 3/7

## User story

```
En tant que [role],
je veux [action],
afin de [benefice].
```

## Criteres d'acceptation (Gherkin)

```gherkin
Scenario: Creer un exercice de bacteriologie
  Given un enseignant authentifie
  When il remplit le formulaire avec un titre et une description
  And il clique sur "Creer"
  Then l'exercice apparait dans la liste
  And un message de confirmation s'affiche
```

## GitHub Issue template

```markdown
## User story
En tant que **etudiant**, je veux **filtrer les exercices par difficulte**
afin de **trouver rapidement un exercice adapte a mon niveau**.

## Criteres d'acceptation
- [ ] Un select "Difficulte" apparait au-dessus de la liste
- [ ] Les options sont : Tous, Facile, Moyen, Difficile
- [ ] Le filtre s'applique cote serveur (query param)
- [ ] L'URL reflète le filtre (?difficulty=EASY)

## Notes techniques
Ajouter un enum Difficulty + filtre Spring Data Specification.
```

Sources : SWEBOK v4 — Software Requirements Knowledge Area (niv. 1), Cohn "User Stories Applied" (niv. 5), Cucumber — Gherkin syntax reference (niv. 3), GitHub Issues docs (niv. 3)
