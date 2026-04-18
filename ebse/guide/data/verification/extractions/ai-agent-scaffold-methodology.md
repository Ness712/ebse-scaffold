# Extractions — ai-agent-scaffold-methodology
# Comparaison Reviewer A vs Reviewer B

**SLR EBSE du 2026-04-17**
**PICOC :** Methodologie formelle scaffold agents IA codeurs

---

## Convergences (6 points — accord fort)

1. **Metrique unique insuffisante** : Sources 1, 2, 3, 6 convergent — un seul KPI de succes masque les defaillances operationnelles critiques. (A=Sources 2,3,5,9 | B=Sources 1,2,3,6)
2. **Scaffold = confounder majeur** : Sources 6, 9, 10 convergent — la configuration du scaffold est le facteur principal de non-reproductibilite dans l'evaluation d'agents. (B explicite, A implicite)
3. **Capacite != Fiabilite** : Sources 2, 3 convergent — les gains de performance des modeles ne se traduisent pas automatiquement en gains de fiabilite. (A et B)
4. **Wording critique** : Source 5 + Sources 9, 10 — des variations subtiles du wording des instructions degradent la performance de -61,8%. Test de robustesse obligatoire pour les scaffolds. (A et B)
5. **Deterministe > Advisory** : Sources 4, 10 — les mecanismes deterministes (hooks, regles runtime) sont plus fiables que les instructions en langage naturel seules. (A et B)
6. **Auditabilite = prerequis** : Sources 1, 8, 9 — l'auditabilite requiert des enregistrements structures et proteges par integrite par defaut. (A et B)

## Divergences (4 points — resolues par Agent C)

1. **Granularite methodo** : A = AgentSpec DSL formel | B = tension DSL formel vs langage naturel concis (Best Practices). **Resolution** : les deux niveaux sont complementaires — hooks deterministes (formel) + CLAUDE.md advisory (naturel). Inclus dans principe.
2. **Niveau d'intervention** : Source 1 (post-hoc) vs Source 4 (runtime prevention) vs Source 9 (ex ante testing). **Resolution** : approches complementaires, non substituables — les 3 sont dans la methodologie en 4 couches.
3. **Reproductibilite** : Source 6 identifie le non-determinisme fondamental comme obstacle ; Sources 9/10 recommandent l'isolation comme solution suffisante. **Resolution** : les deux ont raison a des niveaux differents — isolation reduit mais n'elimine pas le non-determinisme.
4. **GRADE** : A=B-/MODERE | B=C+. **Resolution Agent C** : Grade 3 RECOMMANDE (C+) — facteurs baissiers NIST inaccessible, auto-validation Sources 1/3/4, absence etude end-to-end sur population PICOC exacte sont plus significatifs.

## Analyse de sensibilite

**Si Sources Anthropic (9, 10) exclues** (biais vendor) :
- Convergences 4 et 5 restent couvertes par Sources 2, 3, 5 (academiques independantes)
- La distinction advisory/deterministe reste validee par Source 4 (AgentSpec, independante)
- Grade maintenu : 3 RECOMMANDE

**Si Source 8 (NIST) exclue** (inaccessible directement) :
- Convergence 6 (auditabilite) reste couverte par Sources 1 et 9
- Grade baisse vers 2 BONNE PRATIQUE — standard niveau 1 a haute valeur normative
- Recommandation : acceder directement a NIST AI 600-1 pour valider les quotes

**Si Source 4 (AgentSpec) exclue** (auto-validation) :
- Le precedent le plus proche de methodologie formelle disparait
- Convergence 5 toujours couverte par Source 10
- Gap methodologique encore plus large — confirme le diagnostic principal

**Conclusion sensibilite** : le diagnostic central (absence de methodologie formelle) est robuste a l'exclusion de tout sous-ensemble de sources. Le GRADE 3 est maintenu dans tous les scenarios.

## Gap specifique identifie — nouveau (non couvert par aucune source)

**Tracabilite des decisions de CONFIGURATION** : aucune source ne traite de la documentation des choix de scaffold eux-memes (pourquoi telle regle dans CLAUDE.md, quelle evidence EBSE l'a motivee). Ce gap est distinct de :
- L'auditabilite des ACTIONS d'execution (couverte par Source 1)
- Les logs de workflow (PICOC #22 agentic security)

Ce gap motive : annoter chaque regle de scaffold avec sa source EBSE explicite (`Source: PICOC #XX`), comme pratique new-minimum-viable.

---

## Phase 3 — Comparaison Reviewer A'' vs B'' (kappa Agent C)

**SLR EBSE du 2026-04-17**
**PICOC Phase 3 :** Comment identifier EXHAUSTIVEMENT les dimensions d'un scaffold a couvrir ?
**Agents :** A'' (a227d0a986efc966d) + B'' (ad797e90584e0c66d)

### Kappa sur source commune : 1.0 (STRIDE)

STRIDE etait dans les deux corpus : A'' (Naik 2024 comparative analysis) et B'' (Kohnfelder & Garg 1999). Decision identique : INCLUS. Accord parfait.

### Divergences Phase 3 (resolues par Agent C)

| Source | A'' | B'' | Resolution |
|--------|-----|-----|------------|
| Constitutional AI | EXCLU/structurel | INCLUS (cas negatif) | INCLUS — cas negatif le plus fort (arXiv:2510.07686 : 70 000+ divergences sur 12 modeles frontier) |
| STPA/CAST | Non dans corpus | INCLUS ★ | Retenu (deja dans Phase 2 ; Mylius 2025 confirme applicabilite directe) |

### Convergences Phase 3 (accord A''+B'')

1. **Approche ad hoc documentairement insuffisante** : A'' (Constitutional AI confirme par l'absence), B'' (stress-test empirique 70 000+ divergences). Accord fort.
2. **STRIDE = mecanisme d'exhaustivite catégoriel robuste** : A'' et B'' inclus. kappa=1.0. Le pattern MECE est directement transposable.
3. **Methode unifiee native absente** : A'' (F1 : "aucune methode unique repond completement") et B'' ("aucune source ne propose de methode unifiee"). Accord parfait.
4. **FMEA (A'') et CAST/STPA (B'') sont complementaires** : l'un decompose fonctionnellement, l'autre par structure de controle systemique. Pas de conflit — les deux retenus.
5. **Kassab 2025 RE completeness** : B'' inclus comme source prioritaire. A'' couvre le meme terrain via KAOS + NFR Framework. Non contradiction — dimensions complementaires.

### 5 patterns convergents Phase 3 (sur 15+ sources)

1. Definir les frontieres du systeme avant de specifier les regles (FMEA Boundary Diagram, ODD taxonomique)
2. Appliquer un critere formel de completude (KAOS domain-completeness) ou structurel (STRIDE MECE, 4 UCAs STPA)
3. Couvrir les comportements interdits par inversion systematique use→misuse (Misuse Cases, UCAs)
4. Valider la completude selon plusieurs dimensions orthogonales : syntaxique + semantique + comportementale + couverture (Kassab)
5. Effectuer une meta-synthese comparative pour identifier les angles morts (AI Risk Repository : couverture moyenne des frameworks ad hoc = 34%)

### Analyse de sensibilite Phase 3

**Si KAOS exclu** (formalisation lourde, impopulaire en pratique) :
- Les patterns 2-5 restent couverts par FMEA + STRIDE + Kassab
- On perd le seul critere formel de completude — les autres sont structurels ou heuristiques
- GRADE baisse vers 4 — le point d'appui mathematique disparait

**Si FMEA exclu** (domaine industriel, pas natif pour agents logiciels) :
- STPA couvre la decomposition systemique
- Pattern 1 reste couvert par ODD
- GRADE maintenu : 5

**Si Constitutional AI stress-test exclu** (source Anthropic, potentiellement biaisee) :
- La preuve empirique la plus forte disparait
- Reste : AI Risk Repository (34% couverture ad hoc) comme preuve de l'insuffisance
- GRADE baisse vers 4 — perte de l'evidence empirique directe

**Conclusion sensibilite** : le diagnostic central (approche ad hoc insuffisante, methodes formelles existent) est robuste. Le GRADE 5 est maintenu si KAOS + Constitutional AI stress-test restent inclus. GRADE 4 dans le scenario pessimiste (exclusion des 2).

### Nouvelles contributions Phase 3 vs Phase 2

- Phase 2 repondait : COMMENT valider/auditer un scaffold une fois concu (BSAF)
- Phase 3 repond : COMMENT identifier EXHAUSTIVEMENT ce qu'un scaffold doit couvrir (SDMF)
- Les deux frameworks sont complementaires : SDMF (conception) → BSAF (validation/audit)
- Gap Phase 2 non resolu : tracabilite runtime des decisions de configuration — Phase 3 ne l'adresse pas directement mais KAOS + Compliance Matrix (NASA NPR 7150.2) constituent le mecanisme combine
