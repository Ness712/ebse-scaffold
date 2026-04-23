# /api-test — Tests API directs exhaustifs

Tests HTTP directs sur le backend. La commande **découvre dynamiquement** tous les endpoints au runtime — elle ne contient aucune liste figée.

---

## Configuration projet (à renseigner avant exécution)

```
BACKEND_URL  : [CONFIGURER: ex. http://localhost:3000/api/v1]
BACKEND_REPO : [CONFIGURER: chemin vers le repo backend]
CREDENTIALS  : [CONFIGURER: voir seed.ts ou équivalent du projet]
```

---

## Étape 1 — Découverte dynamique des endpoints

### 1a. Énumérer tous les controllers

```bash
git -C BACKEND_REPO ls-files | grep "\.controller\.ts$" | sort
```

Pour chaque fichier controller trouvé, lire le fichier en entier et extraire :
- Le décorateur `@Controller('prefix')` → préfixe de route
- Chaque méthode : `@Get/@Post/@Put/@Patch/@Delete` + path + paramètres
- Les guards : noms de tous les `@UseGuards(...)`, `@Public`, `@Roles(...)`
- Le throttling : `@Throttle(...)`
- Les DTOs utilisés en `@Body()`

Le préfixe global (ex. `api/v1`) se trouve dans `main.ts` → `setGlobalPrefix`. Route finale = `BACKEND_URL/{controller-prefix}/{method-path}`.

### 1b. Produire l'inventaire avant tout test

```
ENDPOINTS DÉCOUVERTS :
  Controllers scannés    : N fichiers
  Endpoints publics      : N  (aucun guard d'auth)
  Endpoints JWT requis   : N
  Endpoints guest-denied : N
  Endpoints rôle restreint: N
  Total                  : N endpoints
```

---

## Étape 2 — Obtenir les tokens d'authentification

Identifier dans `BACKEND_REPO/prisma/seed.ts` (ou équivalent) les comptes de test disponibles et leurs credentials.

Pour chaque rôle testé, appeler l'endpoint de login et conserver le token (header Authorization ou cookie selon le projet) :

```bash
curl -s -X POST BACKEND_URL/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"...","password":"..."}' \
  -c /tmp/test-cookies-{role}.txt
```

Si le login échoue → STOP. Signaler : backend non joignable ou base non seedée.

---

## Étape 3 — Protocole de test par endpoint

Pour **chaque endpoint découvert à l'étape 1**, exécuter les cas applicables.

### Endpoint sans auth (public)

| Test | Statut attendu |
|------|---------------|
| Requête valide sans token | 200 / 201 |
| Body invalide (champs manquants) | 400 |
| Throttle dépassé (si configuré) | 429 |

### Endpoint JWT requis

| Test | Statut attendu |
|------|---------------|
| Requête valide avec token valide | 200 / 201 / 204 |
| Sans Authorization header | 401 |
| Token invalide (`Bearer faketoken`) | 401 |
| Body invalide (champs manquants ou types erronés) | 400 |
| ID inexistant (`/:id` → UUIDv4 random) | 404 |

### Endpoint guest-denied

| Test | Statut attendu |
|------|---------------|
| Avec token guest | 403 |
| Avec token utilisateur normal | 200 / 201 / 204 |

### Endpoint rôle restreint (ex. ADMIN)

| Test | Statut attendu |
|------|---------------|
| Avec token utilisateur non-admin | 403 |
| Avec token admin | 200 / 201 / 204 |

### Cas fonctionnels transversaux

**Auth — register** : email déjà existant → 409 ; email invalide → 400.

**Auth — login** : mauvais mot de passe → 401 ; email inexistant → 401.

**Soft delete + restore** : créer → supprimer → vérifier absent du GET / → restaurer → vérifier réapparu.

**Pagination** : GET /paged?page=0&size=5 → vérifier structure `{ content, totalElements, page, size }`.

**Search** : GET /search?query=test → vérifier tableau retourné (peut être vide, pas d'erreur).

**Batch delete** : créer 2 ressources → DELETE /batch?ids=id1,id2 → 204.

**Export CSV** : GET /export avec token → vérifier Content-Type `text/csv` ou `application/octet-stream`.

**SSE** : endpoint stream → vérifier 200 + Content-Type `text/event-stream` (fermer après 2s).

**Routes publiques de partage** (si présentes) : accès sans auth → 200 (pas 401).

---

## Étape 4 — Exécution par agents parallèles

Grouper les endpoints par domaine fonctionnel (auth, users, modules métier, communication, système, etc.) et spawner un agent par groupe. Chaque agent exécute ses tests avec `curl`, collecte les résultats, et retourne un rapport au format standard.

---

## Étape 5 — Rapport

```
BACKEND_URL TESTÉ   : [url]
ENDPOINTS DÉCOUVERTS: N
ENDPOINTS TESTÉS    : N  (doit être égal — 0 skip toléré sauf raison documentée)
CAS TESTÉS AU TOTAL : N

RÉSULTATS PAR ENDPOINT :
  ✅ PASS  POST /auth/login     — 4/4 cas
  ❌ FAIL  GET  /notebooks      — 3/4 cas → [détail]
  ⚠️  SKIP  DELETE /org/:id     — raison documentée

FINDINGS :
  [FAIL] Titre — endpoint — cas — réponse obtenue vs attendue — curl reproductible

STATUT GLOBAL : OK / KO
```

---

## Références

- Controllers : `BACKEND_REPO/src/**/*.controller.ts`
- DTOs        : `BACKEND_REPO/src/**/*.dto.ts`
- Guards      : `BACKEND_REPO/src/common/guards/`
- Credentials : `BACKEND_REPO/prisma/seed.ts` (ou équivalent)
