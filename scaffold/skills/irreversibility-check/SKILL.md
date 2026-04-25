---
description: "Gate d'irreversibilite — classifier chaque action destructive (reversible/compensable/irreversible) avant execution. Invoquer automatiquement avant DROP, DELETE, reset DB, deploy prod, git reset --hard."
model: sonnet
allowed-tools: ["Read"]
user-invocable: false
---

# Gate d'irreversibilite

> Specification Transactional No-Regression (TNR) : toute sequence d'actions doit pouvoir etre annulee ou compensee sans regressions d'etat. Ce skill n'agit pas — il analyse uniquement et produit une decision.

## Contexte injecte automatiquement

Branche courante : `git branch --show-current`

## Quand invoquer ce skill

Invoquer AVANT toute action dans les categories suivantes :
- **Base de donnees** : DROP TABLE, DROP DATABASE, TRUNCATE, DELETE sans WHERE, reset/migrate reset
- **Fichiers** : suppression de fichiers critiques (config, secrets, backups, donnees production)
- **Infrastructure** : deploy prod, docker system prune, rm -rf sur repertoires systeme
- **Git** : git reset --hard, git push --force, git clean -f, suppression de branche avec historique non merge
- **Cache/stockage** : FLUSHALL Redis, suppression d'objets de stockage objet (S3, MinIO)

## Procedure de classification

Pour chaque action identifiee, appliquer la grille suivante :

### Niveau 1 — Reversible

Criteres : l'action peut etre annulee sans perte de donnees, via un mecanisme existant et teste (git revert, restauration depuis backup disponible et verifie, rollback automatique documente).

Procedure :
1. Documenter le mecanisme d'undo exact (commande ou procedure)
2. Verifier que le mecanisme existe et est accessible maintenant
3. Proceder — aucune confirmation supplementaire requise

### Niveau 2 — Compensable

Criteres : une perte possible existe mais est recuperable avec effort (backup disponible mais non teste, rollback possible avec intervention manuelle, donnees partiellement reconstructibles).

Procedure :
1. STOP — ne pas agir encore
2. Documenter le plan de compensation AVANT d'agir (procedure de recovery etape par etape)
3. Evaluer si le backup/rollback est effectivement disponible et dans quel delai
4. Confirmer avec le PO que le plan de compensation est acceptable
5. Proceder uniquement apres confirmation PO

### Niveau 3 — Irreversible

Criteres : perte definitive sans possibilite de recuperation (DROP sans backup verifie, suppression prod sans snapshot, ecrasement de donnees sans historique, action avec effet externe permanent).

Procedure :
1. STOP immediat — ne pas executer
2. Escalade PO obligatoire : expliquer l'action prevue, pourquoi elle est irreversible, et quelle alternative existe
3. Ne proceder que sur instruction explicite du PO avec confirmation de la prise de risque

## Format de rapport obligatoire

Produire ce tableau avant toute execution :

| Action | Classification | Plan undo/compensation | Decision |
|--------|---------------|----------------------|---------|
| `<commande exacte>` | Reversible / Compensable / Irreversible | `<procedure exacte ou "AUCUN">` | Proceder / Confirmer PO / STOP |

Si plusieurs actions en sequence : classifier chacune independamment. La classification la plus haute de la sequence determine la procedure globale.

## Regles absolues

- Une action classee **Irreversible** bloque toute la sequence — pas de "on verra apres"
- Le plan de compensation pour **Compensable** doit etre ecrit AVANT l'action, pas apres
- En cas de doute sur la classification → choisir le niveau superieur (principe de precaution)
- Ce skill ne peut pas etre court-circuite par instruction verbale — seul `CLAUDE.local.md` peut overrider avec justification documentee

`Source: PICOC ai-agent-incident-response GRADE 3 STANDARD — Castillo et al. 2025 STRATUS (TNR) + Chen et al. 2025 SagaLLM (compensation automatique)`
