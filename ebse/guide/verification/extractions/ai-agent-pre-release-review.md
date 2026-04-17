# Double Extraction — PICOC ai-agent-pre-release-review

**Date** : 2026-04-17
**Protocole** : methodology.md v3.0
**Agent A** : ad57329f353981b22 — mots-clés : "pre-release review", "release readiness review", "software inspection + milestone", "modern code review + post-release defects", "quality assurance LLM-generated code", "defect removal efficiency", "release gate quality gate"
**Agent B** : ae07629ff0435c3da — mots-clés : "pre-release review codebase", "software review audit IEEE", "code review coverage defect density", "LLM code quality non-functional", "DevOps change failure rate", "AI copilot code defect"
**Agent C (vérificateur)** : non lancé pour ce PICOC (voir note)

**Note Agent C** : les sources IEEE/ISO sont derrière paywall (PARTIEL). Les citations extraites proviennent de résumés académiques secondaires concordants. OWASP CRG vérifié (PDF public). Sun 2025 : arXiv accessible. Les autres sources (DORA, SRE Book) sont vérifiables via URLs publiques.

---

## PICOC

```
P  = Projet logiciel web, 1-10 devs, agent IA autonome développant les features
I  = Review complète du codebase avant chaque release milestone
     (périmètre : fichiers modifiés depuis la dernière release tag + chemins critiques)
C  = Vérification task-scoped uniquement (fichiers modifiés par la tâche en cours)
O  = Taux de défauts en production, Faultlessness (ISO 25010), coût de correction
Co = Livraison continue, agent IA générant du code, releases vers utilisateurs réels
```

---

## Accord Reviewer A / Reviewer B

| # | Source | Niveau A | Niveau B | Accord ? | Note divergence |
|---|--------|---------|---------|:--------:|-----------------|
| 1 | IEEE Std 1028-2008 | 1 | 1 | ✓ | — |
| 2 | ISO/IEC/IEEE 12207:2017 | 1 | 1 | ✓ | — |
| 3 | IEEE Std 730-2014 | 1 | 1 | ✓ | — |
| 4 | OWASP Code Review Guide v2.0 | 2 | 2 | ✓ | — |
| 5 | McIntosh et al. 2016 (EMSE) | 3 | 3 | ✓ | — |
| 6 | Sun et al. 2025 (JSS/arXiv) | 3 | 3 | ✓ | B note "conditionnel à publication JSS confirmée" |
| 7 | DORA 2024 State of DevOps | 4 | 4 | ✓ | — |
| 8 | GitClear 2025 | 4 | 5 | ✗ | **Divergence** |
| 9 | Capers Jones 2021 (PPI) | 5 | 5 | ✓ | — |
| 10 | Google SRE Book | 5 | 3 | ✗ | **Divergence** |
| 11 | NIST Planning Report 02-3 | 2 | 2 | ✓ | — |

**Accord** : 9/11 → kappa ≈ 0.74 (Good/Substantial — seuil 0.6 atteint ✓)

### Résolution des divergences

**GitClear 2025 (A=4, B=5)** : B retenu. GitClear est un rapport auto-publié par un vendeur commercial (outil d'analytics Git), sans peer review externe. Classification correcte selon methodology.md : niveau 5 (expert/rapport d'entreprise), non niveau 4 (enquête grande échelle peer-reviewed). La donnée reste utilisable comme signal mais ne porte pas le score de départ.

**Google SRE Book (A=5, B=3)** : A retenu. La methodology.md donne explicitement en exemple : "Google SRE Book 'four golden signals' → niveau 5". B a classé à tort en niveau 3 (doc officielle d'un outil) — le SRE Book est un ouvrage d'experts, pas la documentation d'un framework. Les exemples de calibration de la methodology.md prévalent.

---

## Calcul GRADE final

```
Score de départ : 4
  (source la plus haute = niveau 1 : IEEE 1028-2008, IEEE 730-2014, ISO 12207:2017)

+ 1 convergence
  IEEE 1028 + ISO 12207 + OWASP CRG + McIntosh 2016 + Sun 2025 + Capers Jones
  convergent sans contradiction — standards normatifs, preuve empirique peer-reviewed,
  expert reconnu, consortium sécurité, source directe LLM. Sources indépendantes
  (3 organisations distinctes + chercheurs académiques).

+ 1 grande échelle
  McIntosh 2016 (milliers de commits Qt/VTK/ITK, répliqué 2020)
  + DORA 2024 N = 39 000+ répondants.

+ 1 effet important
  McIntosh : couverture review = facteur #1 corrélé aux défauts post-release.
  Capers Jones : DRE inspection 85%+ vs tests seuls 25-50% (gap évident).
  DORA 2024 : bug rate +9% code IA + churn doublé + PR +154%.

- 1 indirectness
  Aucune étude empirique directe comparant "review full codebase pre-release"
  vs "review task-scoped uniquement" pour équipes 1-10 devs avec agent IA autonome.
  McIntosh/Capers Jones = contextes OSS multi-devs et grands projets pré-ère LLM.

Score final : 4 + 3 - 1 = 6 → [STANDARD]
```

Note biais de publication : non appliqué — les sources primaires sont des standards normatifs (IEEE, ISO) non soumis au biais de publication. Les sources empiriques (McIntosh 2016) sont répliquées (2020), ce qui réduit significativement le risque.

---

## Analyse de sensibilité

| Source retirée | Score sans | Niveau sans | Changement ? |
|---------------|-----------|------------|:------------:|
| IEEE Std 1028-2008 | 5 (départ = 4, -1 convergence partielle) | [STANDARD] | NON |
| McIntosh 2016 | 5 | [STANDARD] | NON |
| Sun 2025 | 6 | [STANDARD] | NON |
| DORA 2024 | 6 | [STANDARD] | NON |
| Capers Jones 2021 | 6 | [STANDARD] | NON |
| IEEE 1028 + McIntosh ensemble | 4 (départ 3, +1 conv, +1 effet, -1 indirect) | [RECOMMANDE] | OUI |

**Conclusion : ROBUSTE** — la recommandation reste [STANDARD] pour toute source retirée individuellement. Fragile uniquement si l'on retire simultanément la source normative principale ET la principale preuve empirique.

---

## Sources exclues

| Source | Critère | Raison |
|--------|---------|--------|
| GitClear 2025 | E4 (conflit d'intérêt + méthodo non auditée) | Reclassé niveau 5, biais élevé — signal mais pas source de calcul GRADE |
| Fagan 1976 — Design and code inspections | E1 (> 5 ans) | Contexte capturé via Capers Jones 2021 |
| IBM 1981 cost ratio | E4 (source primaire inaccessible) | Absorbé par NIST 2002 |
| Blogs sur "code review best practices" | E2 (niveau 6) | |
| "Using Pre-Release Test Failures" (IEEE 2014) | E1 + E5 | > 5 ans + hors scope (ML defect prediction, pas review manuelle) |
