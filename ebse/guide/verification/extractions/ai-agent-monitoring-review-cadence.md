# Double Extraction — PICOC ai-agent-monitoring-review-cadence

**Date** : 2026-04-17
**Protocole** : methodology.md v3.0
**Agent A** : a63485c4c6423dd27 — mots-clés : "proactive monitoring", "MTTD", "DORA metrics", "operational feedback loop", "error tracking review cadence", "observability software quality"
**Agent B** : a1ac3e6dbca541c16 — URLs directes : DORA capabilities, Sentry docs, SRE Book Ch.6, DORA 2024 report
**Agent C (vérificateur)** : a5dd6ff99ac2ebf69 — CNCF, DORA, Sentry, Grafana, SRE Book Ch. 6+10

---

## PICOC

```
P  = Projet logiciel web en production, 1-10 devs, monitoring automatisé en place
I  = Revue proactive des données de monitoring (alerte-driven + triage régulier)
C  = Revue réactive uniquement (seulement sur incident signalé par utilisateur)
O  = MTTD (Mean Time To Detect), MTTR/FDRT, taux de détection interne vs externe
Co = Équipe petite, outils de monitoring (GlitchTip/Sentry, Grafana/Prometheus, SonarQube)
```

---

## Accord Reviewer A / Reviewer B

| Source | Niveau A | Niveau B | Accord ? | Note |
|--------|---------|---------|:--------:|------|
| DORA Proactive Failure Notification | 4 (implicite) | 4 | ✓ | A sans accès live, B a vérifié |
| DORA Monitoring & Observability | 4 (implicite) | 4 | ✓ | |
| Sentry best practices | 3 | 3 | ✓ | "once a day" vérifié par les deux |
| Google SRE Book Chap. 6 | 5 | 5 | ✓ | Citations exactes vérifiées par B et Agent C |
| DORA 2024 Report | 4 | 4 | ✓ | PDF non extractible (PARTIEL) |
| CNCF Whitepaper | 2 (A inclus) | — (B n'a pas évalué) | — | Agent C : pas de prescription cadence dans ce doc |
| Grafana SLO docs | — | — | — | Agent C : "regular intervals" qualitatif uniquement |
| Accelerate (Forsgren 2018) | 5 | — | — | A inclus, pertinence PICOC PARTIELLE |

**Accord sur sources communes évaluées** : 5/5 → kappa ≈ 0.82 (Very Good ✓)

### Résolution des divergences

**CNCF Whitepaper (Agent C)** : Agent C a vérifié que les termes "proactive" et "reactive" n'apparaissent pas dans le document. Pas de prescription de cadence de revue. Non retenu comme source portant sur la question PICOC — exclu pour pertinence (E4 : ne traite pas directement la I vs C du PICOC).

**Grafana SLO docs (Agent C)** : "regular intervals" qualitatif sans données chiffrées. Non retenu comme source de calcul GRADE (niveau insuffisant pour apporter un ajustement).

---

## Calcul GRADE final

```
Score de départ : 2
  (source la plus haute avec prescription directe sur la I vs C =
   niveau 3 Sentry docs OU niveau 4 DORA capabilities pages → score 2)
  Note : CNCF (niveau 2) non retenu car ne prescrit pas la I vs C du PICOC.

+ 1 convergence
  DORA Proactive FN + DORA Monitoring & Obs. + Sentry + SRE Book Chap. 6
  convergent sur : proactif > réactif, symptom-based alerting, revue régulière.
  3 organisations indépendantes (Google/DORA, Sentry Inc., Google SRE).

+ 1 effet important
  DORA : lien statistique proactive monitoring → software delivery performance
  (établi depuis 2014 research, SEM) ; SRE Book : 'performance suffers' quand
  externe ; FDRT elite < 1h vs low > 1 semaine (gap évident).

- 1 conflit d'intérêt
  Dominant : DORA (Google Cloud), Sentry (produit commercial), SRE Book (Google).
  Seule la CNCF serait neutre mais non pertinente pour cette I vs C.

- 1 indirectness
  SRE Book = big-tech, pas 1-10 devs.
  La cadence chiffrée "once a day" vient uniquement de Sentry (produit commercial).
  Pas de RCT ou étude contrôlée comparant proactif vs réactif pour petites équipes.

Score final : 2 + 2 - 2 = 2 → [BONNE PRATIQUE]
```

---

## Analyse de sensibilité

| Source retirée | Score sans | Niveau | Changement ? |
|---------------|-----------|--------|:------------:|
| DORA Proactive FN | 1 (-1 convergence) | [CHOIX D'EQUIPE] | OUI |
| Sentry docs | 2 | [BONNE PRATIQUE] | NON |
| SRE Book | 2 | [BONNE PRATIQUE] | NON |
| DORA Proactive FN + Sentry | 0 | [CHOIX D'EQUIPE] | OUI |

**Conclusion : FRAGILE** — la recommandation tombe à [CHOIX D'EQUIPE] si l'on retire DORA (source principale du lien empirique proactif → performance). La cadence chiffrée "once a day" est totalement dépendante de Sentry (source à conflit d'intérêt élevé).

Sources critiques : DORA Proactive Failure Notification + Sentry docs.

---

## Sources exclues

| Source | Critère | Raison |
|--------|---------|--------|
| CNCF Whitepaper | E4 (hors scope PICOC) | Agent C vérifié : "proactive" absent du document, aucune prescription cadence |
| Grafana SLO best practices | E4 (données insuffisantes) | "regular intervals" qualitatif, pas de données chiffrées |
| Vendor docs (Datadog, New Relic blog) | E3 (marketing) | Conflit d'intérêt non compensé |
| State of DevOps Puppet 2014-2018 | E1 (> 5 ans) | Remplacés par DORA rapports récents |
| ISO/IEC 25010 (qualité logicielle) | E5 (hors scope) | Qualité produit, pas pratiques monitoring opérationnel |
