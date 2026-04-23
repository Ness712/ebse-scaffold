# GitHub Actions — Security Hardening (Audit Source)

**Source** : GitHub Docs — Security hardening for GitHub Actions
**Version** : 2024
**Applicable si** : tout projet utilisant GitHub Actions
**Usage** : vérifier chaque workflow `.github/workflows/*.yml` lors d'un audit

---

## Permissions

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | Permissions minimales au niveau workflow (`permissions: read-all`) | ⬜ | |
| 2 | Permissions spécifiques par job (pas héritage global implicite) | ⬜ | |
| 3 | `contents: read` seulement si le job ne pousse pas | ⬜ | |
| 4 | `pull-requests: write` uniquement pour jobs qui commentent les PR | ⬜ | |

---

## Épinglage des actions

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | Actions tierces épinglées par SHA de commit (pas par tag) | ⬜ | Ex: `actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675` |
| 2 | Actions officielles GitHub peuvent utiliser le tag de version | ⬜ | Ex: `actions/checkout@v4` acceptable |
| 3 | Dependabot configuré pour mettre à jour les actions | ⬜ | |

---

## Secrets et variables

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | Secrets sensibles dans GitHub Secrets (pas dans les variables d'environnement claires) | ⬜ | |
| 2 | Secrets non loggés (pas de `echo $SECRET`) | ⬜ | |
| 3 | Pas de secrets dans les noms de branches ou commits | ⬜ | |
| 4 | `GITHUB_TOKEN` permissions restreintes par défaut | ⬜ | |

---

## Sécurité des inputs

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | Inputs de workflow validés avant utilisation dans des commandes shell | ⬜ | |
| 2 | Pas d'interpolation directe de `github.event.inputs.*` dans `run:` | ⬜ | |
| 3 | `pull_request_target` avec accès au code source évité ou sécurisé | ⬜ | |

---

## Concurrency et performance

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | `concurrency:` group défini pour éviter les runs parallèles inutiles | ⬜ | |
| 2 | `cancel-in-progress: true` sur les branches feature | ⬜ | |
| 3 | Cache des dépendances configuré (`actions/cache` ou `cache:` dans setup-node) | ⬜ | |

---

## Triggers

| # | Pratique | Vérifié | Note |
|---|----------|:-------:|------|
| 1 | Workflows à haute consommation RAM (ex: CodeQL) en schedule uniquement si runner limité | ⬜ | |
| 2 | `workflow_dispatch` présent pour déclenchement manuel | ⬜ | |
| 3 | Branches protégées requièrent les checks CI | ⬜ | |

---

## Références

- [GitHub Security Hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [GitHub Actions Best Practices](https://docs.github.com/en/actions/learn-github-actions/best-practices-for-github-actions)
