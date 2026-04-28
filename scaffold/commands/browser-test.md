# /browser-test — Tests navigateur exhaustifs (Playwright MCP)

Tests E2E via Playwright MCP sur le frontend. La commande **découvre dynamiquement** toutes les routes au runtime — elle ne contient aucune liste figée.

---

## Configuration projet (à renseigner avant exécution)

```
FRONTEND_URL     : [CONFIGURER: ex. http://localhost:5173]
FRONTEND_REPO    : [CONFIGURER: chemin vers le repo frontend]
ROUTER_FILE      : [CONFIGURER: chemin vers le fichier de routing principal]
MODULE_REGISTRY  : [CONFIGURER: chemin vers la registry de modules dynamiques (si applicable)]
CREDENTIALS      : [CONFIGURER: voir seed.ts ou équivalent du projet]
```

**Règle Playwright** : ne jamais fermer le navigateur entre les étapes. Une seule session navigateur pour tout le run.

---

## Étape 1 — Découverte dynamique des routes

### 1a. Routes statiques

Lire en entier `ROUTER_FILE`. Extraire chaque `path:` défini dans le router (React Router, Vue Router, Next.js pages, etc.) avec :
- Chemin de la route
- Type : public / protégée (auth required) / erreur
- Composant associé (pour identifier les features à tester)

### 1b. Routes dynamiques (si applicable)

Si le projet utilise une registry de modules ou un système de routes générées dynamiquement, lire `MODULE_REGISTRY`. Pour chaque module enregistré, lire son fichier de définition et extraire :
- Chemin de la route
- Plateforme / groupe (pour construire l'URL complète)
- Droits d'accès : accès invité, admin uniquement, etc.
- Présence d'une vue alternative (ex. vue admin)

### 1c. Produire l'inventaire avant tout test

```
ROUTES DÉCOUVERTES :
  Statiques publiques  : N
  Statiques protégées  : N
  Modules dynamiques   : N
  Routes erreur        : N
  Total                : N routes
```

---

## Étape 2 — Setup navigateur

```
1. browser_navigate → FRONTEND_URL
2. Vérifier que la page d'accueil charge (browser_snapshot)
3. browser_navigate → FRONTEND_URL/login (ou équivalent)
4. browser_fill_form → credentials admin
5. Soumettre → attendre redirection vers la page d'accueil authentifiée
6. Vérifier : snapshot OK, aucune erreur console (browser_console_messages)
```

Si le login échoue → STOP. Signaler : frontend non joignable ou backend indisponible.

---

## Étape 3 — Protocole de test par route

Pour **chaque route découverte à l'étape 1**, exécuter le protocole applicable.

### Routes publiques (sans session)

| Étape | Action |
|-------|--------|
| Naviguer | `browser_navigate → URL` |
| Snapshot | `browser_snapshot` |
| Console | `browser_console_messages` → aucune erreur JavaScript |
| Réseau | `browser_network_requests` → aucune requête 5xx |
| Structure | La page contient un contenu visible (pas de page blanche) |

### Routes protégées (avec session admin)

| Étape | Action |
|-------|--------|
| Naviguer | `browser_navigate → URL` |
| Attendre | Que le loader initial disparaisse |
| Snapshot | `browser_snapshot` |
| Console | `browser_console_messages` → aucune erreur JavaScript |
| Vérifier | Pas de redirect non voulu vers /login |
| Vérifier | Pas de message "404" ou "Erreur" dans le contenu |
| Réseau | `browser_network_requests` → aucune requête 5xx |

### Cas supplémentaires selon les droits d'accès détectés

**Vue admin** (si module a une vue alternative) : vérifier que la vue admin charge ; si un toggle "vue utilisateur" existe → cliquer → vérifier que la vue change.

**Accès invité autorisé** (si module opt-in guest) : se connecter en tant qu'invité → naviguer → vérifier que l'accès est accordé.

**Accès invité refusé** (modules standard) : en session invité → naviguer → vérifier redirect vers la page hub (pas de crash).

---

## Étape 4 — Flows critiques (ordre fixe, session admin)

Ces flows testent des interactions réelles, pas uniquement le rendu.

### Flow 1 — Cycle d'authentification

```
1. Se déconnecter
2. Tenter login avec mauvais mot de passe → vérifier message d'erreur affiché
3. Login avec bons credentials → vérifier redirection et état authentifié
4. Accéder au profil utilisateur → vérifier affichage nom + email
5. Accéder aux settings → vérifier page chargée
```

### Flow 2 — Navigation globale

```
1. Naviguer vers chaque point d'entrée principal (home, workspace, plateformes)
2. Vérifier que les liens de navigation sont présents et cliquables
3. Snapshot à chaque étape
```

### Flow 3 — Module de communication (chat / messagerie si présent)

```
1. Naviguer vers le module
2. Snapshot de la liste des conversations
3. Si une conversation existe → cliquer → snapshot de la fenêtre
4. Vérifier : aucune erreur console
```

### Flow 4 — Module avec CRUD (choisir le module le plus représentatif)

```
1. Naviguer vers le module
2. Snapshot de la liste
3. Chercher un bouton de création → cliquer → snapshot du formulaire
4. Vérifier que le formulaire s'ouvre sans erreur console
5. Fermer sans sauvegarder
```

### Flow 5 — Responsive

```
1. browser_resize → 375×812 (mobile)
2. Naviguer vers la page d'accueil → snapshot
3. Naviguer vers la page de login → snapshot
4. browser_resize → 1280×800 (desktop) → rétablir
```

### Flow 6 — Gestion des erreurs

```
1. browser_navigate → /route-qui-nexiste-vraiment-pas
2. Vérifier : page 404 du projet affichée (pas de page blanche)
3. browser_navigate → /module-inexistant (si applicable)
4. Vérifier : error boundary ou redirect géré (pas de crash React blanc)
```

---

## Étape 5 — Rapport

```
FRONTEND_URL TESTÉ   : [url]
ROUTES DÉCOUVERTES   : N
ROUTES TESTÉES       : N  (doit être égal — 0 skip toléré sauf raison documentée)
FLOWS CRITIQUES      : 6/6 exécutés

RÉSULTATS PAR ROUTE :
  ✅ /login           — snapshot OK, no console errors
  ✅ /lab/notebook    — snapshot OK, loader OK, admin view OK
  ❌ /atlas/mycology  — console error: "TypeError: ..."
  ⚠️  /lab/biotools   — SKIP: module non déployé en dev (raison)

FLOWS :
  ✅ Flow 1 — Authentification
  ❌ Flow 3 — Chat : 500 sur GET /messages

FINDINGS :
  [FAIL] Titre — route — description — browser_take_screenshot joint

STATUT GLOBAL : OK / KO
```

---

---

## Étape 6 — Création automatique des issues

Pour chaque FAIL dans le rapport de l'étape 5 :

1. Vérifier si une issue similaire existe déjà :
   ```bash
   gh issue list --repo <org>/<repo> --state open --search "<route-ou-titre>"
   ```
2. Si absente → créer immédiatement (pas de validation PO) :
   ```bash
   gh issue create \
     --repo <org>/<repo> \
     --title "[BROWSER-FAIL] <route> — <description courte>" \
     --body "$(cat <<'EOF'
   ## Finding navigateur

   **Route** : /chemin/de/la/route
   **Rôle testé** : admin | student | guest
   **Problème** : <description> (console error, page blanche, 5xx, etc.)

   ## Détails

   <coller le snapshot ou l'erreur console>
   EOF
   )" \
     --label "browser-test,bug"
   ```

---

## Références

- Router        : `FRONTEND_REPO/ROUTER_FILE`
- Registry      : `FRONTEND_REPO/MODULE_REGISTRY`
- Definitions   : `FRONTEND_REPO/src/features/*/definition.ts` (ou équivalent)
- Credentials   : voir configuration seed du projet
