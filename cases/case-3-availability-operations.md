# Case 3 : Reliability > Availability x Operations

**Matrice** : ISO 25010 "Availability" x SWEBOK "Software Engineering Operations"
**Date** : 2026-04

---

## Etape 0 — Scope

- ISO 25010:2023 "Availability" : "degree to which a system, product or component is operational and accessible when required for use"
- ISO 25023:2016 : "Availability = Uptime / (Uptime + Downtime) x 100" — ne prescrit PAS de seuil
- SWEBOK v4 "Operations" section 4.3 : "engineers should be informed about system quality and operational health with evidence"
- **Case active** : oui

---

## Sous-question 1 : Quoi monitorer

### PICO

| | |
|---|---|
| **P** | Web app en production, equipe 1-10 devs |
| **I** | Les "four golden signals" (latency, traffic, errors, saturation) |
| **C** | Monitoring ad hoc, monitoring uniquement des erreurs, pas de monitoring |
| **O** | Detection des problemes, disponibilite, temps de reaction |

### Sources

**Source 1 — SWEBOK v4, chapitre 6 "Operations"**
```
Nom      : SWEBOK v4, Section 4.3 et 6.4
Niveau   : 1 (reference IEEE)
Date     : 2024
Citation : "Data collected at all layers of the product stack (application layer,
           operating system layer and infrastructure layer) must be collected
           and analyzed."
           KPIs : production system monitoring, product telemetry, end-user
           activity, resource use, configuration changes, security performance
Conflit  : Non
```

**Source 2 — Google SRE Book, chapitre 6**
```
Nom      : Site Reliability Engineering (O'Reilly, 2016), chapitre 6
URL      : https://sre.google/sre-book/monitoring-distributed-systems/
Niveau   : 5 (expert reconnu — Google, publie, libre d'acces)
Date     : 2016
Citation : "The four golden signals of monitoring:
           1. Latency — time to service a request
           2. Traffic — demand on the system (requests/sec)
           3. Errors — rate of failed requests
           4. Saturation — how full the service is"
           "If you can only measure four metrics of your user-facing system,
           focus on these four."
Conflit  : Non
```

**Source 3 — OWASP Top 10 A09:2021**
```
Nom      : OWASP Top 10 A09 — Security Logging and Monitoring Failures
URL      : https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/
Niveau   : 2 (consortium ouvert)
Date     : 2021
Citation : "Auditable events such as logins, failed logins, and high-value
           transactions are not logged" = defaillance de securite.
           "Logs of applications and APIs are not monitored for suspicious
           activity" = defaillance.
Conflit  : Non — complementaire (ajoute la dimension securite au monitoring)
```

**Source 4 — Twelve-Factor App, facteur XI**
```
Nom      : The Twelve-Factor App, Factor XI "Logs"
URL      : https://12factor.net/logs
Niveau   : 5 (expert reconnu)
Date     : 2011
Citation : "Treat logs as event streams."
           "A twelve-factor app never concerns itself with routing or storage
           of its output stream." L'application ecrit sur stdout, l'environnement
           capture et route.
Conflit  : Non
```

### GRADE

```
Score de depart : 3 (OWASP niveau 2 + SWEBOK niveau 1 convergent sur "il faut monitorer")

Note : SWEBOK (niveau 1) prescrit le monitoring multi-couche.
       OWASP (niveau 2) prescrit le logging securite.
       Google SRE (niveau 5) donne le framework concret (four golden signals).

Facteurs positifs :
  + Convergence : SWEBOK + OWASP + Google SRE + Twelve-Factor convergent           → +1
  + Grande echelle : Google SRE prouve a l'echelle de Google                        → +1

Facteurs negatifs :
  - Le framework concret (4 golden signals) vient de Google seul (niveau 5)         → -1

Score final : 3 + 2 - 1 = 4
Niveau : MOYENNE-HAUTE → [RECOMMANDE]
```

### Recommandation

```
[RECOMMANDE] Monitorer les 4 golden signals : latency, traffic, errors, saturation

Contexte (P)  : Web app en production
Score GRADE   : 4 / 7
Sources :
  - [niv. 1] SWEBOK v4 : monitoring multi-couche obligatoire ("must be collected and analyzed")
  - [niv. 2] OWASP A09 : logging des evenements securite obligatoire
  - [niv. 5] Google SRE Book : "if you can only measure four metrics, focus on these four"
  - [niv. 5] Twelve-Factor : logs comme event streams, routes par l'environnement
Facteurs GRADE :
  + convergence (4 sources)
  + prouve a grande echelle (Google)
  - framework concret vient d'un seul expert (Google)

Metriques concretes :
  1. Latency — temps de reponse des requetes (P50, P95, P99)
  2. Traffic — requetes/seconde
  3. Errors — taux de requetes en erreur (HTTP 5xx)
  4. Saturation — CPU, memoire, disque, connexions DB
  + Securite : echecs de login, acces non autorises (OWASP)
Date : 2026-04
```

---

## Sous-question 2 : Quel stack de monitoring

### PICO

| | |
|---|---|
| **P** | Web app, equipe 1-10 devs, budget limite, self-hosted ou SaaS |
| **I** | Prometheus + Grafana (metriques) + Sentry/GlitchTip (erreurs) |
| **C** | Datadog, New Relic, stack ELK, pas de monitoring |
| **O** | Couverture des 4 golden signals, cout, satisfaction dev |

### Sources

**Source 1 — CNCF Landscape (projets gradues)**
```
Nom      : CNCF Graduated Projects
URL      : https://www.cncf.io/projects/
Niveau   : 2 (consortium ouvert — Linux Foundation)
Date     : 2024
Citation : Projets GRADUES (maturite maximale) pour le monitoring :
           - Prometheus (metriques + alerting)
           - Fluentd (collecte de logs)
           - Jaeger (distributed tracing)
           - OpenTelemetry (instrumentation standard)
Conflit  : Non (CNCF est vendor-neutral)
```

**Source 2 — Stack Overflow Developer Survey 2025**
```
Nom      : Stack Overflow Developer Survey 2025
URL      : https://survey.stackoverflow.co/2025/
Niveau   : 4 (enquete, ~70k devs)
Date     : 2025
Citation : Grafana + Prometheus : 43% d'adoption
           Sentry : 32%
           New Relic : 13%
Conflit  : Non
```

**Source 3 — Grafana Labs Observability Survey 2025**
```
Nom      : Grafana Labs Observability Survey
URL      : https://grafana.com/observability-survey/2025/
Niveau   : 4 (enquete, 1255 repondants)
Date     : 2025
Citation : Prometheus : 67% en production, 19% en POC
           OpenTelemetry : 41% en production (forte croissance)
           76% utilisent de l'open source pour l'observabilite
Conflit  : Oui — Grafana Labs est editeur de Grafana (conflit d'interet)
```

**Source 4 — Documentation Prometheus**
```
Nom      : Prometheus documentation
URL      : https://prometheus.io/docs/introduction/overview/
Niveau   : 3 (doc officielle)
Date     : 2024
Citation : "Open-source systems monitoring and alerting toolkit."
           Pull model, stockage time-series, PromQL, Alertmanager.
Conflit  : Oui — auto-description
```

**Source 5 — Documentation Sentry**
```
Nom      : Sentry documentation
URL      : https://docs.sentry.io/
Niveau   : 3 (doc officielle)
Date     : 2024
Citation : "Developer-first error tracking and performance monitoring."
           Capture automatique des exceptions, groupement en issues,
           performance monitoring, session replay.
Conflit  : Oui — auto-description
```

**Source 6 — Donnees de marche**
```
Nom      : Donnees marche observabilite
Niveau   : 4 (donnees empiriques)
Date     : 2025
Citation : Datadog : ~51.8% part de marche (data center management), $3.3B revenu
           New Relic : leader Gartner Magic Quadrant 13 ans
           Marche global : $2.9B en 2025, projection $6.93B en 2031
           Open source (Prometheus/Grafana) vs SaaS (Datadog/New Relic) :
           76% des entreprises utilisent de l'open source
Conflit  : Non
```

### GRADE

```
Score de depart : 3 (CNCF niveau 2 — Prometheus est un projet gradue)

Facteurs positifs :
  + Convergence : CNCF + SO Survey + Grafana Survey convergent sur Prometheus/Grafana  → +1
  + Grande echelle : SO Survey 70k devs, Grafana Survey 1255, 67% adoption Prometheus  → +1

Facteurs negatifs :
  - Conflit d'interet : Grafana Survey par Grafana Labs                                 → -1
  - Les outils commerciaux (Datadog, New Relic) sont aussi leaders du marche            → -1
    (pas de consensus clair open source vs commercial)

Score final : 3 + 2 - 2 = 3
Niveau : MOYENNE-HAUTE → [RECOMMANDE]
```

### Recommandation

```
[RECOMMANDE] Prometheus + Grafana pour les metriques, Sentry (ou GlitchTip) pour le error tracking

Contexte (P)  : Web app, equipe 1-10 devs
Score GRADE   : 3 / 7
Sources :
  - [niv. 2] CNCF : Prometheus = projet gradue (maturite maximale)
  - [niv. 4] SO Survey 2025 : Prometheus+Grafana 43%, Sentry 32% (#1 et #2)
  - [niv. 4] Grafana Survey : Prometheus 67% en production
  - [niv. 3] Docs Prometheus et Sentry : descriptions fonctionnelles
Facteurs GRADE :
  + convergence (CNCF + 2 enquetes)
  + grande echelle
  - conflit d'interet (Grafana Survey)
  - Datadog/New Relic aussi leaders (pas de consensus absolu)

Stack recommandee :
  Metriques/alerting  : Prometheus + Grafana (CNCF gradue, #1 adoption open source)
  Error tracking      : Sentry (#1 adoption) ou GlitchTip (alternative open source)
  Logs                : stdout → collecteur (Twelve-Factor) → Loki ou ELK
  Instrumentation     : OpenTelemetry (CNCF gradue, standard vendor-agnostic)

Alternative evaluee :
  Datadog / New Relic : leaders commerciaux, plus complets mais payants.
  Recommandes si budget > $100/mois et equipe sans expertise ops.
Date : 2026-04
```

---

## Sous-question 3 : Definir des SLOs

### PICO

| | |
|---|---|
| **P** | Web app, equipe 1-10 devs |
| **I** | Definir des SLOs (ex: 99.9% availability, P95 latency < 500ms) |
| **C** | Pas de SLO, SLA contractuel uniquement, monitoring sans objectifs |
| **O** | Fiabilite mesuree, decisions basees sur les donnees |

### Sources

**Source 1 — ISO 25023**
```
Nom      : ISO/IEC 25023:2016
Niveau   : 1 (standard international)
Date     : 2016
Citation : Definit la formule Availability = Uptime / (Uptime + Downtime) x 100
           Ne prescrit PAS de seuil — explicitement : les seuils dependent
           "of the nature of the system and users' needs"
Conflit  : Non
```

**Source 2 — SWEBOK v4**
```
Nom      : SWEBOK v4, Section 2.3
Niveau   : 1 (reference IEEE)
Date     : 2024
Citation : "Defining, agreeing to and documenting service-level agreements (SLAs)
           can help clarify the full range of operations services obligations."
           "Service reports produce availability and continuity indicators
           of operations services against service-level targets."
Conflit  : Non
```

**Source 3 — Google SRE Book, chapitre 4**
```
Nom      : Site Reliability Engineering, chapitre 4
URL      : https://sre.google/sre-book/service-level-objectives/
Niveau   : 5 (expert reconnu)
Date     : 2016
Citation : "SLO: a target value or range of values for a service level
           that is measured by an SLI."
           Exemples : "99% of Get RPC calls will complete in less than 100 ms"
           Error budget = 100% - SLO. Si depasse → gel des releases.
Conflit  : Non
```

**Source 4 — Recherche academique (Hauer et al. 2020, NSDI)**
```
Nom      : "Meaningful Availability" (Google Research, NSDI '20)
URL      : https://www.usenix.org/system/files/nsdi20-paper-hauer.pdf
Niveau   : 4 (etude empirique, peer-reviewed)
Date     : 2020
Citation : Trois criteres d'une bonne metrique de disponibilite :
           1. Meaningful — capture ce que les utilisateurs vivent
           2. Proportional — proportionnelle a l'impact
           3. Actionable — donne des insights sur les causes
           Propose "windowed user-uptime" comme metrique superieure au simple
           uptime/downtime.
Conflit  : Non (mais etude Google — possible biais en faveur de leur approche)
```

### GRADE

```
Score de depart : 1 (la pratique SLO vient de Google SRE, niveau 5)

Note : ISO 25023 (niveau 1) et SWEBOK (niveau 1) prescrivent de MESURER la
disponibilite et de definir des objectifs. Le framework SLI/SLO/SLA vient
de Google mais est coherent avec les standards internationaux.

Facteurs positifs :
  + Convergence : ISO 25023 + SWEBOK + Google SRE convergent sur
    "mesurer et definir des objectifs de disponibilite"                      → +1
  + Grande echelle : prouve chez Google, adopte largement dans l'industrie   → +1

Facteurs negatifs :
  - Le framework concret (SLI/SLO/error budget) vient d'un seul expert      → -1

Score final : 1 + 2 - 1 = 2
Niveau : MOYENNE → [BONNE PRATIQUE]
```

### Recommandation

```
[BONNE PRATIQUE] Definir des SLOs mesurables pour chaque service critique

Contexte (P)  : Web app en production
Score GRADE   : 2 / 7
Sources :
  - [niv. 1] ISO 25023 : mesurer Availability = Uptime / (Uptime + Downtime)
  - [niv. 1] SWEBOK v4 : "defining SLAs can help clarify operations obligations"
  - [niv. 5] Google SRE : framework SLI/SLO/SLA, error budgets
  - [niv. 4] Hauer 2020 : metriques meaningful, proportional, actionable
Facteurs GRADE :
  + convergence (ISO + SWEBOK + Google)
  + prouve a grande echelle
  - framework concret = un seul expert

Valeurs de reference (NON prescrites, a adapter au contexte P) :
  Web app standard :
  - Availability SLO : 99.9% (8h45 de downtime/an) — point de depart raisonnable
  - Latency SLO : P95 < 500ms, P99 < 1000ms
  - Error rate SLO : < 0.1% des requetes
  
  Note : ces valeurs viennent du Google SRE Book comme exemples.
  ISO 25023 dit explicitement que les seuils dependent du projet.
  [CHOIX D'EQUIPE] pour les seuils exacts.
Date : 2026-04
```

---

## Synthese Case 3

| Sous-question | Recommandation | Niveau | Score |
|---|---|---|---|
| Quoi monitorer | 4 golden signals + logs securite | [RECOMMANDE] | 4/7 |
| Quel stack | Prometheus+Grafana + Sentry/GlitchTip + OpenTelemetry | [RECOMMANDE] | 3/7 |
| SLOs | Definir des SLOs mesurables, seuils = choix d'equipe | [BONNE PRATIQUE] | 2/7 |
