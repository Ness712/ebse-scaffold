# PRISMA Flow — ai-agent-monitoring-review-cadence

**Date de recherche** : 2026-04-17
**Agents** : Reviewer A (a63485c4c6423dd27) + Reviewer B (a1ac3e6dbca541c16) + Agent C (a5dd6ff99ac2ebf69)
**Bases interrogées** : dora.dev, sre.google, docs.sentry.io, grafana.com/docs, github.com/cncf/tag-observability, IEEE Xplore (non accessible), ACM DL (non accessible)
**Mots-clés** : "proactive monitoring" + software, "MTTD" + deployment, "DORA metrics" + monitoring, "operational feedback loop" + deployment, "error tracking review cadence", "observability" + "software quality", "proactive failure notification", "alert fatigue" + software, "FDRT" + elite performers

---

## Flux PRISMA

```
IDENTIFICATION
  Sources identifiées :
    - dora.dev capabilities         : 2 pages pertinentes
    - sre.google (SRE Book)        : 2 chapitres (6 + 10)
    - docs.sentry.io               : 1 page best practices
    - grafana.com/docs             : 1 page SLO best practices
    - github.com/cncf/tag-obs      : 1 whitepaper
    - DORA reports annuels 2023-24 : 2 rapports
    - SO Survey 2024               : 1 source (adoption monitoring tools)
    - Accelerate / Forsgren 2018   : 1 ouvrage
    - IEEE Xplore (non accessible) : 0 sources extraites
    - ACM DL (non accessible)      : 0 sources extraites
  Total identifié : ~12
  Doublons retirés : 0
  Total après déduplication : 12

SCREENING (titre + résumé)
  Sources screenées : 12
  Sources exclues au screening : -5
    - E3 (vendor docs marketing sans données) : -2 (Datadog, New Relic)
    - E1 (> 5 ans) : -2 (State of DevOps Puppet 2014-2018)
    - E5 (hors scope PICOC) : -1 (ISO 25010 qualité produit)

ÉLIGIBILITÉ (lecture complète, Agent C)
  Sources évaluées en détail : 7
  Sources exclues après lecture : -2
    - CNCF Whitepaper : "proactive" absent, aucune prescription cadence (E4)
    - Grafana SLO docs : "regular intervals" qualitatif, pas de données (E4)

INCLUSION
  Sources incluses dans la synthèse : 5
    - Niveau 4 (DORA empirique) : 3 (Proactive FN, Monitoring & Obs., 2024 report)
    - Niveau 3 (doc outil officielle) : 1 (Sentry)
    - Niveau 5 (expert reconnu) : 1 (SRE Book)
```

---

## Lacunes documentées (Kitchenham §5.4)

1. **IEEE Xplore / ACM DL non accessibles** : pas de recherche dans les bases académiques primaires — les termes "proactive monitoring + MTTD + small team" n'ont pas pu être cherchés formellement.

2. **Absence de RCT ou étude contrôlée** : aucune étude expérimentale comparant directement "proactive review cadence" vs "reactive only" pour des équipes de 1-10 devs avec agent IA n'a été identifiée. Le lien empirique repose sur des enquêtes observationnelles (DORA).

3. **Cadence chiffrée limitée à Sentry** : la prescription "once a day" est spécifique à la Review List Sentry. Aucune autre source ne fournit une cadence numérique pour la revue des données de monitoring. Cette fragilité est documentée dans l'analyse de sensibilité.

4. **Littérature non-anglophone non couverte** : recherche limitée aux sources en anglais.
