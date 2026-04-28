# /autofix — Boucle autonome complète

Cycle complet : audit + tests → issues GitHub → corrections → vérification → boucle jusqu'à zéro finding.

---

## Configuration projet (à renseigner dans CLAUDE.md projet)

```
REPOS        : [CONFIGURER: liste des repos]
ORG          : [CONFIGURER: ex. Odin-La-Science]
BACKEND_URL  : [CONFIGURER: ex. http://localhost:8081/api/v1]
FRONTEND_URL : [CONFIGURER: ex. http://localhost:5173]
```

---

## Principe de fonctionnement

La commande tourne en boucle. Chaque itération est : **découvrir → tracer → corriger → vérifier**. Elle s'arrête uniquement quand les trois commandes d'audit (`/full-audit`, `/api-test`, `/browser-test`) reviennent toutes avec zéro finding.

**Gates qui restent actifs** (ces actions ne sont JAMAIS autonomes) :
- Merge vers main → gate PO obligatoire
- Actions destructives prod (DROP, FLUSHALL, rm -rf) → gate PO obligatoire
- Rotation de secrets → gate PO obligatoire

Tout le reste est autonome.

---

## Itération N — Schéma d'exécution

### Phase 1 — Audit et tests (parallèle)

Lancer simultanément via agents en parallèle :

- **Agent A** → `/full-audit` complet sur tous les REPOS
- **Agent B** → `/api-test` sur BACKEND_URL
- **Agent C** → `/browser-test` sur FRONTEND_URL

Attendre que les trois soient terminés. Collecter tous les findings.

**Critère de fin de boucle** : si les trois agents reviennent avec zéro finding → afficher le rapport final et **STOP**.

### Phase 2 — Déduplication et triage

Consolider les findings des trois agents :

1. Regrouper par repo cible (quel repo doit recevoir le fix ?)
2. Dédupliquer les doublons inter-agents (même fichier:ligne signalé par plusieurs agents)
3. Classer par priorité : CRITIQUE → MAJEUR → MINEUR (INFO ignoré)

```
TRIAGE ITÉRATION N :
  CRITIQUE : N findings → N issues à créer
  MAJEUR   : N findings → N issues à créer
  MINEUR   : N findings → 1 issue lot
  INFO     : N findings → ignorés (rapport seulement)
  Total actionnable : N
```

### Phase 3 — Création automatique des issues

Pour chaque finding actionnable (CRITIQUE / MAJEUR / lot MINEUR) :

1. Vérifier : `gh issue list --repo <ORG>/<repo> --state open --search "<titre>"`
2. Si absente → créer sans validation PO (voir template dans chaque commande source)
3. Consigner l'issue number créée pour la fermer après fix

### Phase 4 — Corrections autonomes (par sévérité décroissante)

Pour chaque issue créée, dans l'ordre CRITIQUE → MAJEUR → MINEUR :

1. **Analyser** : lire le finding, identifier le fichier:ligne à corriger
2. **Brancher** : `git checkout staging && git pull && git checkout -b autofix/<issue-number>-<slug>`  
   (depuis le repo concerné)
3. **Corriger** : appliquer la correction minimale décrite dans le finding
4. **Vérifier localement** : relancer uniquement les tests du domaine touché
5. **Commiter** : format `fix(<scope>): <description> — closes #<issue-number>`  
   + `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
6. **Pousser + PR vers staging** : `gh pr create` avec body structuré
7. **Fermer l'issue** : `gh issue close <number> --repo <ORG>/<repo> --comment "Corrigé par PR #<pr>"`

Si la correction est impossible de manière autonome (décision d'architecture, secret requis, chemin critique) → laisser l'issue ouverte et ajouter le label `needs-po` — ne pas bloquer le reste.

### Phase 5 — Vérification ciblée

Relancer les tests des domaines touchés par les corrections de la Phase 4 :
- Si une correction touche l'API → relancer `/api-test` sur les endpoints concernés
- Si une correction touche le frontend → relancer `/browser-test` sur les routes concernées
- Si une correction touche du code partagé → relancer les deux

Si de nouveaux findings apparaissent → les ajouter à la liste, repartir en Phase 3.

### Phase 6 — Retour en Phase 1

Relancer une itération complète. La Phase 1 est le seul critère de "done" officiel — les phases 2-5 peuvent manquer des cas apparus pendant l'exécution.

---

## Rapport final (émis quand Phase 1 revient vide)

```
AUTOFIX — RAPPORT FINAL
Itérations effectuées  : N
Issues créées          : N (CRITIQUE: N, MAJEUR: N, MINEUR: N lots)
Issues fermées         : N
Issues needs-po        : N (lister)
PRs créées             : N (lister)
Durée totale estimée   : Nh

ÉTAT FINAL :
  /full-audit    → 0 finding
  /api-test      → 0 FAIL
  /browser-test  → 0 FAIL

STATUT : DONE ✓
```

---

## Références

- Source `/full-audit`    : `ebse-scaffold/scaffold/commands/full-audit.md`
- Source `/api-test`      : `ebse-scaffold/scaffold/commands/api-test.md`
- Source `/browser-test`  : `ebse-scaffold/scaffold/commands/browser-test.md`
- Source `/sweep`         : `ebse-scaffold/scaffold/commands/sweep.md`
