# PICOC — contributor-attribution

**Date** : 2026-04-21
**Protocole** : methodology.md v3.0 §1.3
**Reviewer** : Agent IA (Claude Sonnet 4.6)
**Superviseur** : Gabriel Mille (PO)

---

## Besoin de la revue (§1.1)

**Lacune identifiée** : le guide ne couvre pas la question du crédit aux contributeurs d'un projet logiciel. La question est posée lors de l'ajout d'un fichier CONTRIBUTORS.md au projet OLS — aucune décision EBSE ne guide ce choix. La décision `repo-standard-files` mentionne uniquement README, CONTRIBUTING, CONVENTIONS, LICENSE.

**Revues existantes consultées** : aucune SLR académique identifiée sur ce sujet spécifique (IEEE Xplore, ACM DL — hors scope habituel de la recherche empirique en SE). Pas de benchmark indépendant pertinent (TechEmpower, CNCF Landscape hors scope).

**Justification nouvelle revue** : lacune documentée dans le guide, décision pratique non couverte par les SLR existantes.

---

## PICOC

```
P  = Équipes de développement logiciel travaillant sur des projets avec plusieurs contributeurs
     (projets open source ou internes, mono ou multi-repo, écosystème npm/Node.js)

I  = Méthodes de crédit aux contributeurs :
       (a) Commentaires @author par fichier source
       (b) Champ contributors dans package.json (standard npm)
       (c) Fichier CONTRIBUTORS ou AUTHORS à la racine du repo
       (d) Confier la source de vérité au seul git history (pas de fichier dédié)

C  = (a) vs. (b), (c), (d)
     (b) vs. (c), (d)
     (c) vs. (d)

O  = Exactitude de l'attribution au fil du temps, lisibilité humaine,
     conformité aux standards de l'écosystème, facilité de maintenance,
     santé de la communauté projet

Co = Projets logiciels avec > 1 contributeur, hébergés sur GitHub,
     écosystème npm/Node.js, équipes mixtes (juniors/seniors), projets actifs
```

**Question formulée** :
> Pour des projets logiciels avec plusieurs contributeurs hébergés sur GitHub/npm, quelle méthode de crédit aux contributeurs — commentaires @author par fichier, champ contributors dans package.json, fichier CONTRIBUTORS/AUTHORS, ou git history seul — offre la meilleure exactitude au fil du temps, la meilleure lisibilité humaine et la meilleure conformité aux standards de l'écosystème ?

---

## Découverte des alternatives (§1.3 sous-procedure)

| Base | Mots-clés | Résultats pertinents |
|------|-----------|---------------------|
| npm registry | "contributors", "AUTHORS", "package.json" | npm docs officielles — spec contributors |
| GitHub docs | "community health files", "CONTRIBUTORS", "authors" | CONTRIBUTING.md recommandé |
| WebSearch | "@author tag discouraged", "CONTRIBUTORS file best practice" | ASF policy 2004, Gradle commit |
| Open Source Guides (github.com) | "contributors file", "acknowledge contributors" | Recommandation AUTHORS/CONTRIBUTORS |
| ASF JIRA | "@author tags removal" | Politique ASF 2004 + multi-projets |

**Alternatives identifiées** : (a) @author par fichier, (b) package.json contributors, (c) CONTRIBUTORS/AUTHORS file, (d) git history seul, (e) pom.xml developers (Java/Maven — hors scope OLS), (f) .all-contributorsrc (all-contributors spec — trouvé mais hors scope décision principale).

---

## Critères inclusion/exclusion appliqués

**Inclusion** : I1 (traite de l'intervention), I2 (données factuelles ou prescriptions normatives), I3 (niveau 1-5), I4 (< 5 ans ou standard en vigueur), I5 (accessible).

**Exclusion** : E1 (blog sans données), E2 (obsolète), E4 (marketing vendeur), E6 (hors contexte).

---

## Note de déviation protocole

Le protocole standard requiert 2 agents indépendants (Agent A, Agent B) pour la double extraction. Cette revue est conduite par un seul agent IA. **Déviation documentée** : impact sur le kappa inter-reviewers (non calculable). Mitigation : validation superviseur humain (PO) avant merge. Niveau de confiance GRADE plafonné à [RECOMMANDE] maximum (pas [STANDARD]) en l'absence de double extraction indépendante.
