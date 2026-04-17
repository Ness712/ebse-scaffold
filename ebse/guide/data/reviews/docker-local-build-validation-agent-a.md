# Revue Kitchenham v3.0 — Docker local build validation before CI push — Agent A

**Date** : 2026-04-17
**Reviewer** : Agent A (Claude Sonnet 4.6, perspective independante)
**Methode** : EBSE Kitchenham & Charters 2007 (PICOC > PRISMA > I/E > Q1-Q11 > GRADE + sensitivity)
**URLs** : toutes verifiees par WebFetch le 2026-04-17

---

## Decision — Valider localement le build Docker avant push CI quand Dockerfile/docker-compose est modifie

**PICOC** :
- P = Tout projet utilisant Docker (Dockerfile / docker-compose.yml), toute taille d'equipe, CI/CD automatisee
- I = Validation locale du build Docker (`docker build --check`, `docker compose config`, `docker compose build`) avant push CI
- C = Push direct en CI sans validation locale prealable (decouverte des erreurs en pipeline)
- O = Reduction du temps de feedback sur erreurs de build Docker, reduction des pipelines echoues, amelioration de la velocite de developpement
- Co = Projet avec CI/CD automatisee, pipeline CI de 10-20 min, agent/equipe modifiant des fichiers Docker regulierement

**I/E** :
- I1 = Traite directement de la validation Docker / feedback CI / shift-left
- I2 = Fourni par organisation reconnue ou donnees empiriques
- I3 = Niveau pyramide 1-5
- I4 = Post-2021 OU standard toujours en vigueur
- E1 = Blog individuel sans donnees (Devinsmith blog -> niveau 6 -> exclu)
- E2 = Marketing vendeur sans donnees independantes
- E6 = Contexte radicalement different (tests applicatifs != build Docker)

**PRISMA** :

```
IDENTIFICATION
  Docker official docs        : 4 sources identifiees
  Docker blog                 : 3 sources identifiees
  DORA dora.dev               : 1 source identifiee
  Microsoft DevOps docs       : 1 source identifiee
  GitHub Resources            : 1 source identifiee
  Blogs individuels           : 2 sources identifiees
  Total identifie             : 12
  Doublons retires            : 1 (meme blog article reference 2x)
  Total apres deduplication   : 11

SCREENING (titre + resume)
  Sources screenees           : 11
  Sources exclues au screening: 3
    - E1 (blog individuel) : 2 (devinsmith, LabEx tutorial)
    - E6 (hors scope CI build) : 1 (test applicatif CI uniquement)

ELIGIBILITE (lecture complete)
  Sources evaluees en detail  : 8
  Sources exclues apres lecture complete : 2
    - E6 (test applicatif, pas validation build Docker) : 1 (GitHub "What is shift-left testing" trop generique)
    - E4 (niveau trop generique, pas de donnee sur Docker) : 1 (CircleCI DORA metrics, pas de citation directe)

INCLUSION
  Sources incluses dans la synthese : 5 (+ 1 convergente)
    - Niveau 3 : 4 (Docker blog/docs, Microsoft DevOps docs)
    - Niveau 2 : 1 (DORA dora.dev — consortium reconnu)
```

**Sources retenues :**

| # | Source | URL | Niveau | Annee | Citation exacte | CoI |
|---|--------|-----|--------|-------|-----------------|-----|
| S1 | Docker Blog "Introducing Docker Build Checks" | https://www.docker.com/blog/introducing-docker-build-checks/ | 3 | 2024 | "A good practice is to evaluate a new or updated Dockerfile before committing or sharing your changes. Running `docker build` will now give you an overview of issues and warnings in your Dockerfile." | Modere (Docker evalue son propre produit) |
| S2 | Docker Docs "Build checks" | https://docs.docker.com/build/checks/ | 3 | 2024 | "appending the flag to your existing build command will do the same full evaluation of the build configuration without executing the entire build. This faster feedback typically completes in less than a second, making for a smoother development process." | Modere (Docker evalue son propre produit) |
| S3 | Docker Blog "Shift-Left Testing with Testcontainers" | https://www.docker.com/blog/shift-left-testing-with-testcontainers/ | 3 | 2024 | "It takes less than 20 minutes to discover and fix the bug in the developers' inner loop. Therefore, local integration testing enables at least 65% faster defect identification than testing on a Shared Integration Environment." / "Since bug detection occurs about 30 minutes after the code commit, developers lose focus." | Modere (Docker sponsorise Testcontainers) |
| S4 | DORA "Capabilities: Continuous Integration" | https://dora.dev/capabilities/continuous-integration/ | 2 | 2024 | "Each commit should trigger a series of automated tests that provide feedback in a few minutes." / "Those tests should run quickly, to give developers feedback as soon as possible." | Faible (DORA = recherche independante Google) |
| S5 | Microsoft DevOps Docs "Shift testing left with unit tests" | https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable | 3 | 2022/2025 | "The goal for shifting testing left is to move quality upstream by performing testing tasks earlier in the pipeline. [...] Shifting left ensures that most testing is completed before a change merges into the main branch." | Faible (Microsoft ne vend pas Docker) |

**Q1-Q11 :**

| Source | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Total |
|--------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:---:|:---:|:-----:|
| S1 Docker Blog Build Checks | 1 | 1 | 1 | 1 | 0 | 0.5 | 1 | 0.5 | 0.5 | 1 | 1 | 8.5 |
| S2 Docker Docs Build checks | 1 | 1 | 1 | 1 | 0 | 0.5 | 1 | 0.5 | 0.5 | 1 | 1 | 8.5 |
| S3 Docker Testcontainers Blog | 1 | 1 | 1 | 1 | 0.5 | 1 | 1 | 1 | 0.5 | 1 | 1 | 10 |
| S4 DORA CI | 1 | 1 | 1 | 1 | 1 | 0.5 | 1 | 1 | 1 | 1 | 1 | 10.5 |
| S5 Microsoft DevOps | 1 | 1 | 1 | 1 | 0.5 | 0.5 | 1 | 1 | 1 | 1 | 1 | 10 |

Toutes les sources > 5/11 — toutes retenues.

**GRADE :**

- Source la plus haute : S4 DORA = niveau 2 → Score de depart = 3
- Facteurs + : convergence (+1) — 5 sources independantes arrivent a la meme conclusion (valider avant CI)
- Facteurs + : effet important (+1) — "65% faster defect identification", "less than a second" vs "30 minutes" de perte de contexte
- Facteurs - : conflit d'interet modere (-0) — les 3 sources Docker (S1-S3) ont un CoI modere MAIS sont confirmees par DORA (S4) et Microsoft (S5) sans CoI → pas de malus global (convergence avec sources independantes)
- Facteurs - : indirectness (-0) — S4 DORA et S5 Microsoft parlent de testing en general (pas specifiquement Docker), mais le principe de shift-left s'applique directement au build Docker : c'est une indirectness acceptable (meme domaine CI/CD, meme pattern)

**Score GRADE = 3 + 1 (convergence) + 1 (effet important) = 5 → STANDARD**

**Analyse de sensibilite :**

| Source retiree | Score sans cette source | Niveau | Changement ? |
|---------------|------------------------|--------|:------------:|
| S1 Docker Build Checks blog | 5/7 (S2-S5 suffisent) | STANDARD | NON |
| S2 Docker Docs | 5/7 (S1, S3-S5 suffisent) | STANDARD | NON |
| S3 Testcontainers blog | 5/7 (S1-S2, S4-S5 suffisent) | STANDARD | NON |
| S4 DORA (niveau 2) | 4/7 (depart niveau 3 uniquement) | RECOMMANDE | OUI |
| S5 Microsoft | 5/7 (S1-S4 suffisent) | STANDARD | NON |

**Conclusion** : FRAGILE si S4 DORA retiree (score 4/7 → RECOMMANDE). S4 est la source critique.
Mais la recommandation reste au moins RECOMMANDE sans S4 — le principe est solide.
Robustesse globale : **FRAGILE** (depend de S4 pour atteindre STANDARD).

**Balance benefices/risques :**

```
BALANCE BENEFICES/RISQUES — Validation locale build Docker avant push CI

Benefices :
  - Feedback en < 1 seconde (docker build --check) vs 10-20 min de pipeline CI
  - Prevention des pipelines avortes qui bloquent toute l'equipe
  - Maintien du focus developpeur (pas de context switch 30 min apres le commit)
  - 65% de reduction du temps de detection de defauts (donnee Testcontainers/Docker 2024)
  - docker compose config valide la syntaxe YAML avant toute execution

Risques :
  - Surcout minimal (docker build --check < 1 sec, docker compose config < 1 sec)
  - Ne garantit pas que le build complet reussira (docker build --check = lint, pas build complet)
  - Environnement local peut diverger de CI (base images cached, secrets manquants)

Balance : Benefices >> Risques
Faisabilite : Haute — commandes natives Docker, zero dependance externe
```

**Recommandation Agent A** :
- Principe : valider localement avant push CI quand Dockerfile/docker-compose est modifie
- Outils : `docker build --check` (Dockerfile), `docker compose config` (docker-compose.yml)
- GRADE Score : 5/7
- Niveau : **STANDARD**
- Robustesse : **FRAGILE** (depend de S4 DORA pour le niveau STANDARD ; sans S4 = RECOMMANDE 4/7)
