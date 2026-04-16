# Monitoring

## Quoi monitorer

**[RECOMMANDE]** Les **4 golden signals** + logs securite | Score GRADE : 4/7

| Signal | Ce qu'il mesure | Exemple |
|--------|----------------|---------|
| **Latency** | Temps de reponse | P95 < 500ms |
| **Traffic** | Charge sur le systeme | Requetes/seconde |
| **Errors** | Taux d'erreur | HTTP 5xx < 0.1% |
| **Saturation** | Utilisation des ressources | CPU, memoire, connexions DB |
| **Securite** | Evenements suspects | Echecs login, acces non autorises |

## Quel stack

**[RECOMMANDE]** Prometheus + Grafana + Sentry | Score GRADE : 4/7

| Besoin | Outil | Pourquoi |
|--------|-------|---------|
| Metriques + alerting | **Prometheus** | CNCF gradue, #1 adoption open source (67%) |
| Dashboards | **Grafana** | #1 visualisation, 43% adoption (SO Survey) |
| Error tracking | **Sentry** | #1 error tracking (32% adoption), ou GlitchTip (open source) |
| Logs | **Loki** ou **ELK** | Loki = stack Grafana, ELK = standard industriel |
| Instrumentation | **OpenTelemetry** | CNCF gradue, standard vendor-agnostic |

Alternative : **Datadog** ou **New Relic** si budget SaaS et pas d'expertise ops.

## SLOs

**[BONNE PRATIQUE]** Definir des SLOs mesurables | Score GRADE : 2/7

Valeurs de depart (a adapter) :

| SLO | Cible | Mesure |
|-----|-------|--------|
| Disponibilite | 99.9% | Uptime / (Uptime + Downtime) |
| Latence | P95 < 500ms | Temps de reponse au 95e percentile |
| Taux d'erreur | < 0.1% | Requetes 5xx / total requetes |

**[CHOIX D'EQUIPE]** pour les seuils exacts — ils dependent de votre projet.

## Sources

- SWEBOK v4 chap. 6 — monitoring multi-couche obligatoire
- OWASP A09:2021 — logging des evenements securite
- Google SRE Book chap. 6 — four golden signals
- CNCF — Prometheus et OpenTelemetry projets gradues
- SO Survey 2025 — Prometheus+Grafana 43%, Sentry 32%
- Twelve-Factor App — logs as event streams

> Justifications completes : [case-3-availability-operations.md](../../../cases/case-3-availability-operations.md)
