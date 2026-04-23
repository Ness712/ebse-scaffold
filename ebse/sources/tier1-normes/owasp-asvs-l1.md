# OWASP ASVS 4.0.3 — Contrôles Level 1 (Audit Source)

**Source** : OWASP Application Security Verification Standard 4.0.3
**Version** : 4.0.3 (2021)
**Applicable si** : tout projet web avec authentification utilisateur
**Usage** : vérifier chaque contrôle contre le code lors d'un audit dimension Sécurité

---

## V2 — Authentication

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 2.1.1 | Mot de passe minimum 12 caractères | ⬜ | |
| 2.1.2 | Mot de passe maximum ≥ 64 caractères autorisé | ⬜ | |
| 2.1.3 | Troncature de mot de passe interdite | ⬜ | |
| 2.1.7 | Mots de passe vérifiés contre liste des mots de passe compromis | ⬜ | |
| 2.1.9 | Pas de règles de composition arbitraires | ⬜ | |
| 2.2.1 | Contrôles anti-automatisation (credential stuffing) | ⬜ | |
| 2.2.3 | Notifications pour resets de MDP, changement email/phone, login nouveaux lieux | ⬜ | |
| 2.3.1 | Mots de passe temporaires changés à la première utilisation | ⬜ | |
| 2.5.2 | Questions de sécurité absentes (pratique obsolète) | ⬜ | |
| 2.5.4 | Comptes partagés absents | ⬜ | |
| 2.5.6 | Récupération de mot de passe sécurisée (OTP/TOTP) | ⬜ | |
| 2.10.1 | Identifiants de service non stockés dans le code source | ⬜ | |

---

## V3 — Session Management

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 3.1.1 | Identifiants de session jamais exposés dans URLs | ⬜ | |
| 3.2.1 | Nouveau token de session généré à chaque authentification | ⬜ | |
| 3.2.2 | Tokens de session ≥ 64 bits d'entropie | ⬜ | |
| 3.3.1 | Déconnexion invalide le token côté serveur | ⬜ | |
| 3.3.2 | Expiration de session après inactivité | ⬜ | |
| 3.4.1 | Cookies avec attribut Secure | ⬜ | |
| 3.4.2 | Cookies avec attribut HttpOnly | ⬜ | |
| 3.4.3 | Cookies avec attribut SameSite | ⬜ | |
| 3.5.3 | Tokens stateless (JWT) avec signature validée côté serveur | ⬜ | |
| 3.7.1 | Ré-authentification requise pour les actions sensibles | ⬜ | |

---

## V4 — Access Control

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 4.1.1 | Principe du moindre privilège appliqué | ⬜ | |
| 4.1.3 | Principe du refus par défaut (deny by default) | ⬜ | |
| 4.1.5 | Contrôle d'accès échoue de façon sécurisée | ⬜ | |
| 4.2.1 | Données sensibles et API protégées contre IDOR | ⬜ | |
| 4.2.2 | CSRF protection sur API state-changing | ⬜ | |
| 4.3.1 | Interfaces admin avec authentification renforcée | ⬜ | |
| 4.3.2 | Directory listing désactivé | ⬜ | |

---

## V5 — Validation, Sanitization and Encoding

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 5.1.3 | Toutes les entrées validées (positive validation, allowlist) | ⬜ | |
| 5.1.4 | Données structurées (JSON) validées contre schéma | ⬜ | |
| 5.2.1 | Toutes les sorties encodées pour le contexte (HTML, JS, URL) | ⬜ | |
| 5.2.2 | Validation des noms de fichiers uploadés (path traversal) | ⬜ | |
| 5.2.3 | Pas d'exécution dynamique de code non sécurisée côté serveur | ⬜ | |
| 5.3.4 | Sélection de données via requêtes paramétrées (pas de concaténation SQL) | ⬜ | |
| 5.5.1 | Données sérialisées signées/chiffrées si transmises au client | ⬜ | |

---

## V6 — Stored Cryptography

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 6.2.1 | Modules cryptographiques validés (pas d'implémentations custom) | ⬜ | |
| 6.2.2 | Algorithmes approuvés (pas MD5, SHA-1, DES, RC4) | ⬜ | |
| 6.3.1 | Générateur de nombres aléatoires cryptographiques (CSPRNG) | ⬜ | |
| 6.4.1 | Gestion des clés avec key vault ou équivalent | ⬜ | |

---

## V7 — Error Handling and Logging

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 7.1.1 | Application ne log pas les credentials ou tokens | ⬜ | |
| 7.1.2 | Application ne log pas les données personnelles sans protection | ⬜ | |
| 7.2.1 | Application log les tentatives d'authentification échouées | ⬜ | |
| 7.2.2 | Application log les escalades de privilèges | ⬜ | |
| 7.4.1 | Message d'erreur générique en production (pas de stack trace) | ⬜ | |

---

## V8 — Data Protection

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 8.2.1 | Données sensibles côté client protégées (pas de stockage non chiffré) | ⬜ | |
| 8.3.1 | Données sensibles dans le corps HTTP, pas dans l'URL | ⬜ | |
| 8.3.4 | Toutes les données personnelles identifiées et documentées | ⬜ | |

---

## V9 — Communication

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 9.1.1 | TLS pour toutes les communications client-serveur | ⬜ | |
| 9.1.2 | Versions TLS obsolètes (SSL, TLS 1.0, TLS 1.1) désactivées | ⬜ | |

---

## V13 — API and Web Service

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 13.1.2 | Requêtes avec Content-Type inattendu rejetées | ⬜ | |
| 13.2.1 | Méthodes HTTP autorisées déclarées explicitement | ⬜ | |
| 13.2.3 | Protection CSRF sur API RESTful utilisant des cookies | ⬜ | |

---

## V14 — Configuration

| ID | Contrôle | Vérifié | Note |
|----|----------|:-------:|------|
| 14.2.1 | Toutes les dépendances à jour | ⬜ | |
| 14.3.2 | En-têtes de sécurité HTTP configurés (HSTS, CSP, X-Content-Type-Options, X-Frame-Options) | ⬜ | |
| 14.3.3 | CORS configuré strictement (pas de wildcard *) | ⬜ | |
| 14.4.1 | Pas de secrets codés en dur dans le code source | ⬜ | |
| 14.4.2 | Secrets non commités dans le contrôle de source | ⬜ | |
| 14.5.1 | Dépendances scannées pour vulnérabilités connues (npm audit, Dependabot) | ⬜ | |
