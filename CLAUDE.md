# CLAUDE.md — ebse-scaffold

## Role

Ce repo contient deux composants distincts :
- **ebse/** : guide de decisions techniques (PICOCs, GRADE, sources) + app web de visualisation
- **scaffold/** : templates operationnels pour configurer un agent Claude Code (CLAUDE.md template, hooks, settings, commandes)

Tu travailles dessus pour : ajouter des decisions, corriger des decisions existantes, mettre a jour le scaffold.

**Methodologie obligatoire** : voir [ebse/guide/methodology.md](ebse/guide/methodology.md) — source unique. **Lire methodology.md en entier avant toute modification.** Suivre a 100%, sans raccourcis.

**Source d'abord, regle ensuite** : toute regle ajoutee au guide ou au scaffold doit avoir sa source identifiee AVANT d'etre ecrite. Si aucune source n'existe → noter le gap, traiter comme tache EBSE dediee.

---

## Ou trouver quoi

| Besoin | Fichier |
|--------|---------|
| Protocole complet (DARE, PICOC, extraction, GRADE, kappa) | [ebse/guide/methodology.md](ebse/guide/methodology.md) |
| Decisions existantes (PICOCs, GRADE, sources) | [ebse/guide/data/decisions/](ebse/guide/data/decisions/) |
| App web (configurateur) | [ebse/app/](ebse/app/) |
| Scaffold CLAUDE.md template | [scaffold/claude-md-autonomous-agent.md](scaffold/claude-md-autonomous-agent.md) |
| Scaffold settings, hooks, commandes | [scaffold/](scaffold/) |
| Matrice decisions | [ebse/guide/matrix.md](ebse/guide/matrix.md) |
