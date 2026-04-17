# Double Extraction v3.0 — Docker local build validation before CI push
Date : 2026-04-17
Agent A : Claude Sonnet 4.6 (perspective independante)
Agent B : Claude Sonnet 4.6 (contexte isole, recherche independante)

## Resultats
- Accord sources : 5/5 (100%) — memes sources identifiees independamment
- Accord recommandation : 1/1 (100%) — les deux recommandent "valider localement avant push CI"
- Accord GRADE : 1/1 (100%) — les deux calculent 5/7 STANDARD
- Accord robustesse : 1/1 (100%) — les deux concluent FRAGILE (DORA source critique)

## Kappa de Cohen (inter-rater agreement)

Calcul sur les decisions binaires (source incluse/exclue et niveau GRADE) :

Sources identifiees communes aux deux agents :
- Docker Blog Build Checks (S1/B1) : A=INCLUS, B=INCLUS → accord
- Docker Docs Build checks (S2/B2) : A=INCLUS, B=INCLUS → accord
- Docker Testcontainers blog (S3/B3) : A=INCLUS, B=INCLUS → accord
- DORA dora.dev CI (S4/B4) : A=INCLUS, B=INCLUS → accord
- Microsoft DevOps Docs (S5/B5) : A=INCLUS, B=INCLUS → accord
- Devinsmith blog : A=EXCLU (E1), B=EXCLU (E1) → accord
- LabEx tutorial : A=EXCLU (E1), B=EXCLU similaire → accord
- GitLab CI blog generique : A=EXCLU (E6), B=EXCLU (E6) → accord
- GitHub "shift-left" article generique : A=EXCLU (E6/E4), B=EXCLU (E4) → accord

Total decisions : 9
Accord observe (Po) : 9/9 = 1.00
Accord attendu par hasard (Pe) : ~0.50 (50/50 inclus/exclus)
Kappa = (Po - Pe) / (1 - Pe) = (1.00 - 0.50) / (1 - 0.50) = **1.00**

Kappa = 1.00 → Accord parfait (Kitchenham : kappa > 0.8 = "Very good/Almost perfect")

## Decision reconciliee

| # | Decision | Reco | GRADE conservatif | Robustesse |
|---|----------|------|-------------------|------------|
| 1 | Validation locale build Docker avant push CI | **`docker build --check` + `docker compose config`** avant push si Dockerfile/docker-compose modifie | STANDARD (5/7) | FRAGILE (DORA source critique) |

## Notes de reconciliation

**Accord total** : Les deux agents ont identifie independamment les memes 5 sources, attribue les memes scores GRADE, et arrive a la meme conclusion.

**Sources Docker (S1-S3 / B1-B3)** : Accord sur le conflit d'interet modere (Docker evalue son propre produit). Les deux agents maintiennent ces sources car elles sont corroborees par DORA (source independante niveau 2) et Microsoft (niveau 3 sans CoI sur Docker).

**DORA (S4/B4)** : Source critique identifiee de maniere independante par les deux agents. Son retrait fait basculer le GRADE de STANDARD (5/7) vers RECOMMANDE (4/7). Les deux agents concluent FRAGILE.

**Ajustement conflit d'interet** : Aucun malus applique (-0) car les sources Docker avec CoI modere sont confirmees par 2 sources independantes (DORA niveau 2 + Microsoft niveau 3). Conforme a la methodologie : "convergence avec sources independantes = malus annule".

**Indirectness** : Les deux agents identifient que S4/B4 et S5/B5 parlent de shift-left testing en general, pas specifiquement de validation build Docker. Les deux jugent l'indirectness acceptable (meme domaine CI/CD, meme pattern "valider localement avant CI"). Pas de malus.

**Scores Q1-Q11** : Divergence maximale de 0.5 points sur Q9 (conflit d'interet) pour les sources Docker — negligeable, ne change pas le score total ni les conclusions.

## Analyse de sensibilite reconciliee

| Source retiree | Score A | Score B | Niveau | Changement ? |
|---------------|---------|---------|--------|:------------:|
| S1/B1 Docker Build Checks blog | 5/7 | 5/7 | STANDARD | NON |
| S2/B2 Docker Docs | 5/7 | 5/7 | STANDARD | NON |
| S3/B3 Docker Testcontainers blog | 5/7 | 5/7 | STANDARD | NON |
| **S4/B4 DORA (source critique)** | **4/7** | **4/7** | **RECOMMANDE** | **OUI** |
| S5/B5 Microsoft DevOps | 5/7 | 5/7 | STANDARD | NON |

**Robustesse finale : FRAGILE** — dependante de S4/B4 (DORA) pour atteindre STANDARD.
Si DORA devient inaccessible ou change de position, le niveau tombe a RECOMMANDE (4/7).
La recommandation reste positive dans tous les cas (minimum RECOMMANDE = 4/7).

## Biais de publication

- Sources negatives recherchees : aucune source de niveau 1-5 ne recommande de NE PAS valider localement
- Les seules "contre-arguments" sont des frictions operationnelles (surcout < 1 seconde) — pas des contre-indications
- Biais de publication non detecte — le principe est universellement positif dans la litterature disponible
- Asymetrie constatee : toutes les sources sont positives → possible biais de publication pour les cas ou la validation locale est contre-productive (ex: bases images tres lourdes, >10 min de build local). Note dans la recommandation.
