---
description: "Monitoring post-deploy — verifier error tracking, quality gate CI, metriques infra, alertes actives. Invoquer apres chaque deploy staging ou prod."
model: sonnet
context: fork
allowed-tools: ["Bash(curl *)", "Bash(gh run*)"]
user-invocable: true
---

# Monitoring post-deploy

> Workflow post-deploy structure — distinct de l'audit pre-release. L'audit verifie le code avant merge ; ce skill verifie l'etat du systeme apres deploy.

**Quand invoquer** :
- Apres chaque deploy en staging ou production
- Apres un incident (post-mortem immediate)
- Quotidiennement si l'agent est en mode surveillance continue

## Contexte injecte automatiquement

Branche courante : `git branch --show-current`

## Procedure de monitoring

Executer les 4 etapes dans l'ordre. Ne pas s'arreter a la premiere anomalie — completer toutes les etapes puis consolider.

### Etape 1 — Error tracking

Objectif : detecter les nouvelles erreurs runtime introduites par le deploy.

```bash
# [CONFIGURER: adapter selon stack — GlitchTip / Sentry / Datadog]
# Exemple GlitchTip :
# curl -H "Authorization: Bearer $GLITCHTIP_TOKEN" \
#   "https://[VOTRE-INSTANCE]/api/0/organizations/[ORG]/issues/?query=is:unresolved"
```

Evaluer :
- Nouvelles erreurs apparues depuis l'heure du deploy
- Erreurs deja connues (statut non-resolu pre-existant)
- Frequence et criticite (nombre d'occurrences, utilisateurs impactes)

### Etape 2 — Quality gate CI

Objectif : verifier que le pipeline CI du dernier deploy est vert.

```bash
# [CONFIGURER: adapter selon l'organisation et le repo]
# Exemple GitHub Actions :
# gh run list --repo [ORG]/[REPO] --limit 5
# gh run view [RUN_ID] --repo [ORG]/[REPO]
```

Evaluer :
- Statut du dernier run (success / failure / in_progress)
- Duree par rapport a la normale (spike de duree = signal d'alerte)
- Nombre de runs consecutifs en echec

### Etape 3 — Metriques infra

Objectif : detecter les anomalies de performance ou de ressources.

```bash
# [CONFIGURER: adapter selon stack — Grafana / Prometheus / CloudWatch]
# Exemple Grafana :
# curl -H "Authorization: Bearer $GRAFANA_TOKEN" \
#   "[VOTRE-INSTANCE]/api/dashboards/home"
```

Evaluer :
- CPU / RAM / disk : pics anormaux post-deploy
- Latence applicative : degradation par rapport au baseline
- Conteneurs / services : tous up et healthy

### Etape 4 — Alertes actives

Objectif : verifier qu'aucune alerte P1/P2 n'est active en silence.

```bash
# [CONFIGURER: adapter selon stack — alertmanager / PagerDuty / Opsgenie]
# Exemple alertmanager :
# curl "[VOTRE-INSTANCE]/api/v1/alerts?active=true&silenced=false"
```

Evaluer :
- Alertes P1 actives (service down, perte de donnees)
- Alertes P2 actives (degradation de performance, erreur rate elevee)
- Alertes silenciees manuellement (pourquoi ? depuis quand ?)

## Regles d'escalade

Escalade PO obligatoire si l'une des conditions suivantes est vraie :
- **Erreurs critiques non-resolues** : erreurs P1 dans l'error tracker sans action de remediation en cours
- **CI en echec consecutif** : le pipeline echoue depuis 2 runs ou plus sur la branche principale
- **Alertes P1 actives** : au moins une alerte P1 presente et non silenciee intentionnellement
- **Degradation de performance** : latence ou error rate double ou plus par rapport au baseline pre-deploy

Format d'escalade : creer une GitHub issue `[SEV1] Incident YYYY-MM-DD` + documenter dans `.claude/audit.log`.

## Format de rapport

```
DEPLOY : [branche / commit / timestamp]

| Source | Statut | Alertes actives | Action requise |
|--------|--------|----------------|---------------|
| Error tracking | OK / WARNING / CRITICAL | [liste ou "aucune"] | [action ou "rien"] |
| CI pipeline | OK / WARNING / CRITICAL | [details run] | [action ou "rien"] |
| Metriques infra | OK / WARNING / CRITICAL | [anomalies ou "aucune"] | [action ou "rien"] |
| Alertes systeme | OK / WARNING / CRITICAL | [liste ou "aucune"] | [action ou "rien"] |

STATUT GLOBAL : OK / WARNING / CRITICAL
ESCALADE PO : Oui / Non — [raison si Oui]
```

`Source: PICOC ai-agent-monitoring-review-cadence GRADE 2 BONNE PRATIQUE — DORA 2024 (monitoring proactif predicateur de performance) + Google SRE Book Chap.6 (symptom-based alerting) + Sentry docs (cadence quotidienne Review List)`
