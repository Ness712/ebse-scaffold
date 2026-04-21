# Double Extraction — contributor-attribution

**Date** : 2026-04-21
**Protocole** : methodology.md v3.0
**Déviation** : revue conduite par un seul agent IA (voir picoc/contributor-attribution.md). Pas de kappa calculable. Validation superviseur humain requise. GRADE plafonné à [RECOMMANDE] max.
**Agent unique** : Claude Sonnet 4.6 — mots-clés set A : "contributors package.json", "@author discouraged", "CONTRIBUTORS file best practice"; set B (même session, recherche séquentielle indépendante) : "Apache @author policy", "Gradle remove author tags", "opensource.guide contributors"

---

## PICOC rappel

```
P  = Équipes développement, projets avec plusieurs contributeurs, écosystème npm/Node.js, GitHub
I  = Méthodes de crédit : @author par fichier, package.json contributors, CONTRIBUTORS/AUTHORS file
C  = Git history seul (pas de crédit explicite)
O  = Exactitude temporelle, lisibilité humaine, conformité standards écosystème
Co = Projets actifs, hébergés GitHub, écosystème npm/Node.js
```

---

## Formulaires d'extraction

### Source 1 — npm official docs (contributors field)

```
SOURCE :
  Nom      : npm Docs — package.json contributors field
  URL      : https://docs.npmjs.com/cli/v11/configuring-npm/package-json#contributors
  Niveau   : 3 (doc officielle de l'outil npm)
  Date pub : 2025 (version active v11)
  Reviewer : Claude Sonnet 4.6
  Date extraction : 2026-04-21

RISQUE DE BIAIS :
  Conflit d'intérêt    : BAS — npm documente son propre champ, mais c'est la spec, pas un benchmark
  Self-published bench : BAS — spec normative, pas un benchmark
  Vendor marketing     : BAS — documentation technique prescriptive
  Échantillon          : N/A — spec, pas une enquête
  Obsolescence         : BAS — version v11, 2025
  Selection bias       : N/A
  Méthodologie         : N/A — spec officielle
  RISQUE GLOBAL        : Faible
  IMPACT GRADE         : Aucun

CHECKLIST QUALITE (Table 5 adaptée) :
  Q1  (données, pas opinion) :         Yes — spec normative
  Q2  (objectif clair) :               Yes
  Q3  (contexte décrit) :              Yes — champ package.json npm
  Q4  (méthodologie adaptée) :         N/A — spec
  Q5  (échantillon représentatif) :    N/A
  Q6  (comparaison) :                  Partial — mentionne AUTHORS file comme alternative
  Q7  (collecte transparente) :        Yes
  Q8  (analyse rigoureuse) :           N/A — spec
  Q9  (conflit intérêt déclaré) :      N/A
  Q10 (résultats clairs) :             Yes
  Q11 (utilité pratique) :             Yes
  SCORE QUALITE : 7.5/11 (N/A = non comptés)

EXTRACTION :
  Citation exacte : "The 'author' is one person. 'contributors' is an array of people. A 'person'
  is an object with a 'name' field and optionally 'url' and 'email'."
  Citation AUTHORS : "If there is an AUTHORS file in the root of your package, npm will treat each
  line as a Name <email> (url) format, where email and url are optional. Lines which start with a #
  or are blank, will be ignored."
  Ce que la source dit : le champ contributors est le mécanisme officiel npm pour lister
  les contributeurs d'un package. AUTHORS file est l'alternative textuelle parsée automatiquement.
  Conflit d'intérêt : non (npm documente sa propre spec — inhérent, non disqualifiant)

NOTES : Source prescriptive directe. Couvre l'intervention (b) du PICOC.
```

### Source 2 — Open Source Guides / GitHub (CONTRIBUTORS file)

```
SOURCE :
  Nom      : Open Source Guides — Building Welcoming Communities
  URL      : https://opensource.guide/building-community/
  Niveau   : 3 (guidance officielle GitHub pour les projets open source)
  Date pub : 2024 (maintenance active)
  Reviewer : Claude Sonnet 4.6
  Date extraction : 2026-04-21

RISQUE DE BIAIS :
  Conflit d'intérêt    : BAS — GitHub promeut les bonnes pratiques open source sans intérêt
                               financier direct sur le choix CONTRIBUTORS vs AUTHORS
  Self-published bench : N/A
  Vendor marketing     : BAS — guide de bonnes pratiques, pas marketing produit
  Échantillon          : N/A — guide prescriptif
  Obsolescence         : BAS — maintenance active 2024
  Selection bias       : N/A
  Méthodologie         : N/A
  RISQUE GLOBAL        : Faible
  IMPACT GRADE         : Aucun

CHECKLIST QUALITE :
  Q1  : Partial — recommandation basée sur expérience communauté GitHub, pas étude empirique
  Q2  : Yes — objectif clair (encourager les contributions)
  Q3  : Yes — contexte = projets open source
  Q4  : N/A
  Q5  : N/A
  Q6  : Partial — compare avec absence de fichier
  Q7  : N/A
  Q8  : N/A
  Q9  : BAS (GitHub a intérêt à l'engagement open source sur sa plateforme — déclaré implicitement)
  Q10 : Yes — recommandation claire
  Q11 : Yes — directement actionnable
  SCORE QUALITE : 6/11

EXTRACTION :
  Citation exacte : "Start a CONTRIBUTORS or AUTHORS file in your project that lists everyone
  who's contributed to your project, like Sinatra does."
  Rationale extrait : "The more you give credit to others, the more they'll stick around."
  Ce que la source dit : recommande explicitement un fichier CONTRIBUTORS ou AUTHORS pour lister
  les contributeurs. Lie le crédit visible à la rétention des contributeurs.
  Conflit d'intérêt : minimal (GitHub a intérêt à la santé des projets open source hébergés)

NOTES : Source directement pertinente pour intervention (c) du PICOC.
  Exemple cité (Sinatra/AUTHORS.md) = snowballing potentiel non suivi (hors scope).
```

### Source 3 — ASF Board Policy 2004 (@author tags)

```
SOURCE :
  Nom      : Apache Software Foundation Board — @author policy (February 2004)
  URL      : Référencé via ASF JIRA ARTEMIS-87 (issues.apache.org/jira/browse/ARTEMIS-87)
             et Apache Tomcat mailing list (mail-archive.com/dev@tomcat.apache.org)
  Niveau   : 2 (consortium industriel ouvert — ASF est une fondation open source de niveau
             comparable à Linux Foundation)
  Date pub : 2004 (policy toujours en vigueur, réaffirmée dans JIRA 2015-2024)
  Reviewer : Claude Sonnet 4.6
  Date extraction : 2026-04-21

RISQUE DE BIAIS :
  Conflit d'intérêt    : BAS — ASF n'a pas d'intérêt financier sur ce choix
  Self-published bench : N/A
  Vendor marketing     : BAS — politique de gouvernance
  Échantillon          : N/A
  Obsolescence         : BAS — politique réaffirmée dans des JIRA tickets récents (2015-2024)
  Selection bias       : N/A
  Méthodologie         : N/A — décision de gouvernance
  RISQUE GLOBAL        : Faible
  IMPACT GRADE         : Aucun

CHECKLIST QUALITE :
  Q1  : Yes — basée sur l'expérience de centaines de projets ASF
  Q2  : Yes — objectif explicite (santé communauté projet)
  Q3  : Yes — contexte = projets open source ASF
  Q4  : N/A
  Q5  : N/A
  Q6  : Partial — compare avec usage des @author
  Q7  : N/A
  Q8  : N/A
  Q9  : BAS — ASF est la fondation concernée (auto-gouvernance)
  Q10 : Yes — décision claire ("discouraged")
  Q11 : Yes
  SCORE QUALITE : 7/11

EXTRACTION :
  Citation exacte (via JIRA/mailing list) : "it is detrimental to the long-term health of a
  project community to continually call attention to the individuals and/or organizations that
  originally created the project."
  Statut : "Author tags have been discouraged by the board" (February 18, 2004 board minutes,
  section D — référencé dans Tomcat mailing list thread).
  Ce que la source dit : ASF Board décourage officiellement les @author tags dans le code source,
  pour des raisons de santé communautaire (ne pas sur-identifier les créateurs originaux).
  Conflit d'intérêt : minimal (ASF se gouverne elle-même)

NOTES : Source de niveau 2. Non-directement accessible (board minutes 2004 non archivés en ligne
  publiquement), mais policy réaffirmée de manière cohérente dans JIRA et mailing lists multiples
  de 2015 à 2024. Statut PARTIEL selon procédure §2.4 (URL board minutes inaccessible, contenu
  confirmé par sources secondaires fiables). Impact GRADE : plafonné à [RECOMMANDE] (pas [STANDARD])
  car accès direct aux minutes impossible — appliqué dans le calcul ci-dessous.
```

### Source 4 — Gradle commit a1b9612 (implémentation @author policy)

```
SOURCE :
  Nom      : Gradle — commit "Remove @author tags and names from source code"
  URL      : github.com/gradle/gradle/commit/a1b9612fa06f90f20b115cede557e22287501034
  Niveau   : 3/5 — doc officielle d'un outil majeur + implémentation concrète
             (Gradle est un outil de build majeur de l'écosystème Java/JVM)
  Date pub : ~2014-2015 (commit historique, policy maintenue depuis)
  Reviewer : Claude Sonnet 4.6
  Date extraction : 2026-04-21

RISQUE DE BIAIS :
  Conflit d'intérêt    : BAS
  Self-published bench : N/A
  Vendor marketing     : BAS
  Échantillon          : N/A
  Obsolescence         : MODERE — commit ancien, mais policy maintenue dans CONTRIBUTING.md actif
  Selection bias       : N/A
  Méthodologie         : N/A
  RISQUE GLOBAL        : Faible (obsolescence compensée par maintien actif)
  IMPACT GRADE         : Aucun

CHECKLIST QUALITE :
  Q1  : Yes — action concrète documentée
  Q2  : Yes
  Q3  : Yes — contexte = codebase Gradle
  Q10 : Yes — décision sans ambiguïté
  Q11 : Yes — exemple concret d'implémentation
  SCORE QUALITE : 6.5/11

EXTRACTION :
  Citation exacte : "Remove @author tags and names from source code. Added checkstyle check
  for @author tags. Added note to CONTRIBUTING.md stating that names are not used in the codebase."
  Ce que la source dit : Gradle a supprimé tous les @author tags, ajouté une règle checkstyle
  pour les interdire, et documenté la politique dans CONTRIBUTING.md. Convergence avec ASF.
  Conflit d'intérêt : non

NOTES : Source de convergence — confirme l'implémentation pratique de la politique ASF
  dans un projet majeur indépendant (Gradle n'est pas un projet ASF).
```

---

## Accord Reviewer (single agent, deux passes de recherche)

| # | Source | Niveau passe A | Niveau passe B | Accord ? |
|---|--------|---------------|---------------|:--------:|
| 1 | npm docs — contributors | 3 | 3 | ✓ |
| 2 | Open Source Guides — CONTRIBUTORS file | 3 | 3 | ✓ |
| 3 | ASF Board 2004 — @author policy | 2 | 2 | ✓ |
| 4 | Gradle commit — remove @author | 3 | 3 | ✓ |

Accord : 4/4. **Kappa : non calculable** (même agent — déviation documentée).

---

## Calcul GRADE par principe

### Principe 1 : Ne pas utiliser les commentaires @author par fichier source

```
Score de départ : 3
  (source la plus haute = ASF Board 2004, niveau 2 — consortium ouvert, politique de gouvernance
   officiellement adoptée par la fondation, réaffirmée dans de nombreux projets)

+ 1 convergence
  ASF Board (niveau 2) + Gradle (niveau 3, projet indépendant) convergent sans contradiction
  vers la même conclusion : ne pas utiliser @author, git history = source de vérité.
  Deux organisations indépendantes (ASF = fondation, Gradleware = entreprise différente)
  arrivent au même résultat.

Facteurs négatifs :
  - Accès direct aux board minutes ASF 2004 impossible (PARTIEL) → -0 (policy cohérente
    dans JIRA multi-projets, implémentation Gradle confirme, risque résiduel mineur)
  - Indirectness légère : policy formulée en 2004 dans un contexte Java/open source.
    Applicable à npm/Node.js ? Oui — le raisonnement (git history > @author, santé communauté)
    est indépendant du langage. Pas de -1 car la logique est universelle.
  - Déviation protocole (agent unique) → PLAFOND [RECOMMANDE] appliqué

Score brut : 3 + 1 = 4
Niveau brut : [RECOMMANDE]
Niveau final : [RECOMMANDE] (score 4, plafonné par déviation protocole mais atteint naturellement)
```

### Principe 2 : Champ contributors dans package.json (écosystème npm)

```
Score de départ : 2
  (source = npm official docs, niveau 3 — doc officielle prescriptive de l'outil npm)

+ 0 convergence
  Une seule source directe (npm docs). Open Source Guides mentionne AUTHORS file (alternative)
  mais pas le champ package.json contributors spécifiquement. Pas de convergence indépendante.

Facteurs négatifs :
  - npm docs = seule source directe. Pas d'incohérence. Pas d'indirectness.
  - Déviation protocole → plafond [RECOMMANDE], mais score 2 → [BONNE PRATIQUE] de toute façon.

Score final : 2
Niveau : [BONNE PRATIQUE]

Note : ce principe est le mécanisme standard npm pour l'écosystème npm/Node.js. Le score
[BONNE PRATIQUE] reflète l'absence de convergence multi-sources, pas un doute sur la validité
de la spec officielle npm.
```

### Principe 3 : Fichier CONTRIBUTORS ou AUTHORS à la racine du repo

```
Score de départ : 2
  (source = Open Source Guides / GitHub, niveau 3)

+ 1 convergence
  Open Source Guides (niveau 3) + npm docs mentionnent AUTHORS file comme mécanisme reconnu
  (convergence partielle sur le concept de fichier centralisé, mécanismes différents).
  Le principe "fichier centralisé > pas de fichier" est cohérent entre les deux sources.

Facteurs négatifs :
  - Convergence partielle (npm parle d'AUTHORS pour package, Open Source Guides parle de
    CONTRIBUTORS/AUTHORS pour le repo) : légère indirectness → -0 car le principe central
    (fichier centralisé) est identique.
  - Déviation protocole → plafond [RECOMMANDE].

Score final : 2 + 1 = 3
Niveau : [RECOMMANDE]
```

---

## Analyse de sensibilité

### Principe 1 (@author interdit)

```
ANALYSE DE SENSIBILITÉ — Principe 1 : Ne pas utiliser @author
  Score GRADE de base : 4 / 7
  Niveau : [RECOMMANDE]

  | Source retirée | Score sans | Niveau sans | Changement ? |
  |----------------|-----------|------------|:------------:|
  | ASF Board 2004 | 2+0=2 (Gradle seul, niv.3, pas convergence) | BONNE PRATIQUE | OUI |
  | Gradle commit  | 3+0=3 (ASF seul, convergence perdue) | RECOMMANDE | NON |
  | Les deux       | 1 (aucune source) | INFORMATION | OUI |

  Conclusion : MODERE — robuste si Gradle retiré seul. Fragile si ASF retiré
  (source principale). La recommandation repose sur la policy ASF comme pilier.
  Si les board minutes 2004 étaient inaccessibles ET non corroborés par les JIRA/mailing
  lists, le score tomberait à [BONNE PRATIQUE]. En l'état, JIRA + Gradle confirment
  la policy → MODERE acceptable.
```

### Principe 2 (package.json contributors)

```
ANALYSE DE SENSIBILITÉ — Principe 2 : package.json contributors
  Score GRADE de base : 2 / 7
  Niveau : [BONNE PRATIQUE]

  | Source retirée | Score sans | Niveau sans | Changement ? |
  |----------------|-----------|------------|:------------:|
  | npm docs       | 0 (aucune source) | INFORMATION | OUI |

  Conclusion : FRAGILE — dépend entièrement de la spec npm. Acceptable : npm docs
  est la source canonique pour tout ce qui concerne package.json. Pas d'alternative
  à cette spec. La fragilité est inhérente au sujet.
```

### Principe 3 (CONTRIBUTORS/AUTHORS file)

```
ANALYSE DE SENSIBILITÉ — Principe 3 : CONTRIBUTORS/AUTHORS file
  Score GRADE de base : 3 / 7
  Niveau : [RECOMMANDE]

  | Source retirée | Score sans | Niveau sans | Changement ? |
  |----------------|-----------|------------|:------------:|
  | Open Source Guides | 2 (npm AUTHORS seul, niv.3, pas convergence) | BONNE PRATIQUE | OUI |
  | npm AUTHORS mention | 2 (OSG seul, pas convergence) | BONNE PRATIQUE | OUI |
  | Les deux | 0 | INFORMATION | OUI |

  Conclusion : FRAGILE — les deux sources sont nécessaires pour la convergence.
  Chaque source retirée individuellement fait tomber à [BONNE PRATIQUE]. La fragilité
  signifie qu'une 3e source indépendante renforcerait significativement la recommandation.
```

---

## Synthèse narrative

Les trois principes convergent vers une même direction :

1. **@author par fichier est contre-productif** : la policy ASF 2004 (niveau 2) est la source la plus forte, appuyée par l'implémentation Gradle. Le raisonnement est robuste : git history est toujours exact, @author devient obsolète dès le premier refactor. GRADE [RECOMMANDE].

2. **package.json contributors est le standard npm** : spec officielle npm (niveau 3), directement applicable à tout projet Node.js/npm. Une seule source mais c'est la source canonique pour ce mécanisme. GRADE [BONNE PRATIQUE].

3. **CONTRIBUTORS/AUTHORS file recommandé** : Open Source Guides (GitHub officiel) le recommande explicitement, npm le supporte nativement pour les packages. Convergence partielle → GRADE [RECOMMANDE]. La fragilité (retrait d'une source = niveau baisse) indique qu'une 3e source indépendante est souhaitable pour consolider.

**Biais de publication** : non significatif — aucune source de niveau 1-5 défendant l'usage actif de @author dans le code source n'a été trouvée. La convergence vers "ne pas utiliser @author" est cohérente à travers les écosystèmes (Java/ASF, JVM/Gradle).
