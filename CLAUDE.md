# CLAUDE.md — EBSE-Guide

## Role

Ce repo est un **guide de decisions techniques universel** base sur la methodologie EBSE (Evidence-Based Software Engineering). Tu travailles dessus pour : ajouter des decisions, corriger des decisions existantes, mettre a jour les templates.

**Regle absolue** : rien n'est invente. Chaque recommendation doit etre sourcee. Voir [methodology.md](methodology.md).

---

## Quand ajouter une decision au guide

Une decision va dans ce guide si **n'importe quel projet** pourrait se poser la meme question.

Si la question est specifique a un projet → doc de ce projet, pas ici.

---

## Comment ajouter une decision (methodologie obligatoire)

Suivre les 13 etapes de [methodology.md](methodology.md) a 100% :

1. **PICOC** : formuler la question (Population, Intervention, Comparison, Outcome, Context)
2. **Strategie de recherche** : sources primaires (ACM, IEEE, arXiv, SO Survey, JetBrains, State of JS...)
3. **Double extraction** : deux agents independants extraient les donnees separement
4. **Agent C verification** : troisieme agent verifie les claims des deux premiers
5. **GRADE** : coter chaque source (1-7), documenter les facteurs appliques
6. **Synthese** : recommandation = consensus des sources, pas opinion
7. **JSON output** : fichier dans `data/decisions/{domaine}-{sujet}.json`

**Ne jamais sauter le double extraction.** Ne jamais inventer une source.

---

## Structure d'un fichier decision

```
data/decisions/{domaine}-{sujet}.json
```

Champs obligatoires : `id`, `domain`, `question`, `classification`, `universal.principles[]` (avec `grade`, `level`, `sources`), `robustness`, `v3_review`.

Voir un fichier existant comme reference : [ai-agent-autonomy-granularity.json](data/decisions/ai-agent-autonomy-granularity.json).

---

## Ou trouver quoi

| Besoin | Fichier |
|--------|---------|
| Protocole complet EBSE | [methodology.md](methodology.md) |
| Templates CLAUDE.md / settings | [templates/](templates/) |
| Decisions existantes | [data/decisions/](data/decisions/) |
| Matrice decisions | [matrix.md](matrix.md) |
| Plan guide | [PLAN.md](PLAN.md) |

---

## Ce que tu ne fais PAS

- Ne pas modifier une recommendation sans refaire l'extraction (les sources restent la verite)
- Ne pas ajouter de variantes stack-specific sans sources par stack
- Ne pas "simplifier" une decision en supprimant des nuances sourcees
