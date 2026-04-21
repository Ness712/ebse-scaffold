# PRISMA Flow — contributor-attribution

**Date de recherche** : 2026-04-21
**Bases interrogées** : npm registry docs, GitHub docs, WebSearch (ASF JIRA, Gradle GitHub, Open Source Guides, Apache Tomcat mailing list)
**Mots-clés** : "contributors package.json npm", "CONTRIBUTORS file AUTHORS best practice", "@author tag discouraged policy", "Apache Software Foundation @author policy", "Gradle remove @author", "opensource.guide contributors file"
**Protocole** : methodology.md v3.0 §2.1
**Note déviation** : recherche conduite par un seul agent (voir PICOC déviation). Validation humaine requise.

---

## Flux

```
IDENTIFICATION
  Sources identifiées par base :
    - npm official docs (docs.npmjs.com) : 1 source (spec contributors/AUTHORS)
    - GitHub docs (docs.github.com) : 2 sources (community health files, CONTRIBUTING guidelines)
    - Open Source Guides (opensource.guide) : 1 source (building-community)
    - ASF JIRA (issues.apache.org) : 3 sources (ARTEMIS-87, RIVER-409, FUNCTOR-17)
    - Apache mailing list (tomcat, commons) : 1 source (thread @author removal)
    - Gradle GitHub (github.com/gradle) : 1 source (commit a1b9612)
    - WebSearch général : ~12 résultats candidats (blogs, stackoverflow, etc.)
    - Snowballing : 0 source additionnelle (sources officielles sont les racines)
  Total identifié : ~21
  Doublons retirés : 2 (RIVER-409 et ARTEMIS-87 citent le même board decision 2004)
  Total après déduplication : ~19

SCREENING (titre + résumé)
  Sources screenées : ~19
  Sources exclues au screening : ~12
    - E1 (blog individuel sans données) : 6 (vojtechruzicka.com, mikemybytes.com, Medium posts)
    - E4 (tutoriels sans fondement empirique) : 2 (GeeksForGeeks, tutorialspoint)
    - E6 (hors contexte — Java/Maven spécifique, hors npm/Node.js) : 2 (pom.xml developers field)
    - Redondance documentée avec source principale retenue : 2

ELIGIBILITÉ (lecture complète)
  Sources évaluées en détail : ~7
  Sources exclues après lecture complète : 2
    - GitHub docs CONTRIBUTING guidelines : traite du processus de contribution (CONTRIBUTING.md)
      et non du crédit des contributeurs (CONTRIBUTORS.md) — hors scope I1
    - ASF JIRA FUNCTOR-17 (pom.xml developers) : alternative Maven hors écosystème npm/Node.js (E6)

INCLUSION
  Sources incluses dans la synthèse : 5
    - Niveau 2 : 1 (ASF Board policy 2004 — via ASF JIRA ARTEMIS-87 + Tomcat mailing list)
    - Niveau 3 : 2 (npm docs contributors field ; Open Source Guides/GitHub)
    - Niveau 3/5 : 1 (Gradle commit + CONTRIBUTING.md — doc officielle d'un outil majeur)
    - Niveau 5 : 1 (ASF JIRA RIVER-409 — implémentation convergente multi-projets ASF)
```

---

## Documentation recherche (Table 2 Kitchenham)

### Base 1 — npm official docs

| Élément | Valeur |
|---------|--------|
| Base | docs.npmjs.com — package.json reference |
| Mots-clés | "contributors", "AUTHORS file npm" |
| URL accédée | https://docs.npmjs.com/cli/v11/configuring-npm/package-json#contributors |
| Date d'accès | 2026-04-21 |
| Sources identifiées | 1 |
| Sources retenues | 1 (spec officielle contributors + AUTHORS) |
| Statut accès | VÉRIFIÉ (WebFetch — contenu confirmé) |

### Base 2 — Open Source Guides (GitHub)

| Élément | Valeur |
|---------|--------|
| Base | opensource.guide — building-community |
| Mots-clés | "contributors file", "acknowledge contributors" |
| URL accédée | https://opensource.guide/building-community/ |
| Date d'accès | 2026-04-21 |
| Sources identifiées | 1 |
| Sources retenues | 1 (recommandation CONTRIBUTORS/AUTHORS file) |
| Statut accès | VÉRIFIÉ (WebFetch — quote exacte extraite) |

### Base 3 — ASF JIRA + mailing list

| Élément | Valeur |
|---------|--------|
| Base | issues.apache.org, mail-archive.com (Apache) |
| Mots-clés | "@author tags removal ASF", "Apache @author policy" |
| URLs accédées | ARTEMIS-87, RIVER-409, Tomcat mailing list |
| Date d'accès | 2026-04-21 |
| Sources identifiées | 3 |
| Sources retenues | 1 (ASF Board Feb 2004 policy, cité par les 3) |
| Statut accès | PARTIEL (WebSearch confirmé, accès direct aux board minutes non tenté — policy bien documentée dans JIRA) |

### Base 4 — Gradle GitHub

| Élément | Valeur |
|---------|--------|
| Base | github.com/gradle/gradle |
| URL accédée | commit a1b9612fa06f90f20b115cede557e22287501034 |
| Date d'accès | 2026-04-21 |
| Sources identifiées | 1 |
| Sources retenues | 1 (implémentation concrète + CONTRIBUTING.md policy) |
| Statut accès | VÉRIFIÉ (WebFetch — contenu confirmé) |

---

## Sources exclues — raisons documentées

| Source | Critère | Raison |
|--------|---------|--------|
| vojtechruzicka.com — "Stop using @author" | E1 | Blog individuel, arguments sans données primaires propres — redondant avec ASF JIRA qui documente la même position avec autorité |
| mikemybytes.com — "Still using @author?" | E1 | Blog individuel, même raison |
| Medium articles (3+) sur @author | E1 | Blogs individuels |
| GitHub docs — CONTRIBUTING guidelines | I1 non satisfait | Traite du processus de contribution (CONTRIBUTING.md = comment contribuer), pas du crédit aux contributeurs (CONTRIBUTORS.md = qui a contribué) |
| ASF JIRA FUNCTOR-17 (pom.xml developers) | E6 | Alternative Maven/Java spécifique, hors écosystème npm/Node.js — contexte P différent |
| all-contributors spec (allcontributors.org) | E6 | Spécification outillée avancée hors scope de la décision de base |
| OpenRewrite recipe (removeJavadocAuthorTag) | Redondance | Implémente la politique ASF/Gradle déjà couverte par sources retenues |

---

## Biais de publication (§2.5)

**Sources négatives recherchées** : aucune source trouvée défendant activement l'usage des @author tags dans le code source comme meilleure pratique. Les rares articles en faveur de @author (StackOverflow discussions) sont de niveau 6 (opinions individuelles) — exclus. Biais de publication possible (les partisans de @author ne publient pas de guides officiels) mais non significatif pour la synthèse : la convergence vers "ne pas utiliser @author" est issue de grandes organisations (ASF, Gradle) et non uniquement de sources positives isolées.

**Conclusion biais** : non significatif — la convergence est bien documentée et multi-sources indépendantes.
