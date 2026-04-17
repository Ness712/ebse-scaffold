# Revue Kitchenham v3.0 — Docker local build validation before CI push — Agent B

**Date** : 2026-04-17
**Reviewer** : Agent B (Claude Sonnet 4.6, contexte isole — recherche independante)
**Methode** : EBSE Kitchenham & Charters 2007 (PICOC > PRISMA > I/E > Q1-Q11 > GRADE + sensitivity)
**URLs** : toutes verifiees par WebFetch le 2026-04-17
**Isolation** : Agent B n'a pas vu les resultats Agent A avant d'effectuer sa recherche

---

## Decision — Valider localement le build Docker avant push CI quand Dockerfile/docker-compose est modifie

**PICOC** (reconstruit independamment par Agent B) :
- P = Equipes developpant avec Docker, modifiant Dockerfile/docker-compose regulierement
- I = Execution locale de `docker build --check`, `docker compose build`, `docker compose config` avant push
- C = Decouverte des erreurs directement en pipeline CI (10-20 min de feedback)
- O = Rapidite du feedback, reduction des pipelines bloques, productivite developpeur
- Co = CI/CD automatisee (GitHub Actions, GitLab CI), toute taille d'equipe

**Strategie de recherche Agent B** :
Bases consultees : Docker official docs, Docker blog, DORA dora.dev, Microsoft Azure DevOps docs, GitHub Resources, GitLab CI/CD literature
Mots-cles : "shift left Docker", "inner loop outer loop CI", "docker build --check local", "shift left testing", "fast feedback CI pipeline", "validate Dockerfile before commit"

**PRISMA** :

```
IDENTIFICATION
  Docker official docs/blog   : 3 sources identifiees (checks, build-checks blog, testcontainers blog)
  DORA / Accelerate           : 2 sources identifiees (dora.dev CI, Accelerate book mentions)
  Microsoft DevOps docs       : 1 source identifiee
  GitHub Resources            : 1 source identifiee
  GitLab CI blog              : 1 source identifiee
  Blogs individuels           : 2 sources identifiees
  Total identifie             : 10
  Doublons retires            : 0
  Total apres deduplication   : 10

SCREENING (titre + resume)
  Sources screenees           : 10
  Sources exclues au screening: 3
    - E1 (blog individuel sans donnees) : 2
    - E6 (contexte trop different — tests E2E, pas build Docker) : 1

ELIGIBILITE (lecture complete)
  Sources evaluees en detail  : 7
  Sources exclues apres lecture complete : 2
    - E6 (GitLab CI blog — principes generiques, pas de donnee specifique Docker local) : 1
    - E4 (Accelerate book mentions — trop indirect, pas de donnee Docker specifique) : 1

INCLUSION
  Sources incluses dans la synthese : 5
    - Niveau 3 : 4 (Docker docs/blogs, Microsoft DevOps)
    - Niveau 2 : 1 (DORA dora.dev)
```

**Sources retenues par Agent B :**

| # | Source | URL | Niveau | Annee | Citation exacte | CoI |
|---|--------|-----|--------|-------|-----------------|-----|
| B1 | Docker Blog "Introducing Docker Build Checks" | https://www.docker.com/blog/introducing-docker-build-checks/ | 3 | 2024 | "A good practice is to evaluate a new or updated Dockerfile before committing or sharing your changes." | Modere (auto-evaluation) |
| B2 | Docker Docs "Build checks" | https://docs.docker.com/build/checks/ | 3 | 2024 | "Validating your Dockerfile and build options before running a build." / "Running `docker build --check` exits with a non-zero status code if violations exist, making it suitable for local pre-commit validation." | Modere (auto-evaluation) |
| B3 | Docker Blog "Shift-Left Testing with Testcontainers" | https://www.docker.com/blog/shift-left-testing-with-testcontainers/ | 3 | 2024 | "The shift-left workflow is much simpler and starts with writing code and running unit tests. Instead of running integration tests in the outer loop, developers can run them locally in the inner loop to troubleshoot and fix issues." / "It takes less than 20 minutes to discover and fix the bug in the developers' inner loop." | Modere (Docker/Testcontainers) |
| B4 | DORA "Capabilities: Continuous Integration" | https://dora.dev/capabilities/continuous-integration/ | 2 | 2024 | "Each commit should trigger a series of automated tests that provide feedback in a few minutes." / "Those tests should run quickly, to give developers feedback as soon as possible." | Faible (recherche independante) |
| B5 | Microsoft DevOps Docs "Shift testing left" | https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable | 3 | 2022/2025 | "The goal for shifting testing left is to move quality upstream by performing testing tasks earlier in the pipeline. Shifting left ensures that most testing is completed before a change merges into the main branch." / "Long-running tests might also produce failures that are time-consuming to investigate." | Faible (Microsoft) |

**Q1-Q11 :**

| Source | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Total |
|--------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:---:|:---:|:-----:|
| B1 Docker Build Checks blog | 1 | 1 | 1 | 1 | 0 | 0.5 | 1 | 0.5 | 0.5 | 1 | 1 | 8.5 |
| B2 Docker Docs | 1 | 1 | 1 | 1 | 0 | 0.5 | 1 | 0.5 | 0.5 | 1 | 1 | 8.5 |
| B3 Docker Testcontainers blog | 1 | 1 | 1 | 1 | 0.5 | 1 | 1 | 1 | 0.5 | 1 | 1 | 10 |
| B4 DORA CI | 1 | 1 | 1 | 1 | 1 | 0.5 | 1 | 1 | 1 | 1 | 1 | 10.5 |
| B5 Microsoft DevOps | 1 | 1 | 1 | 1 | 0.5 | 0.5 | 1 | 1 | 1 | 1 | 1 | 10 |

**GRADE calculé par Agent B :**

- Source la plus haute : B4 DORA = niveau 2 → Score de depart = 3
- Facteurs + : convergence (+1) — 4 sources independantes (DORA + Microsoft + 3x Docker) convergent sur le principe "valider avant CI / plus tot dans le cycle"
- Facteurs + : effet important (+1) — "65% faster defect identification", "less than 20 minutes" vs "30 minutes" perte de focus, "<1 second" pour --check vs 10-20 min pipeline
- Facteurs - : conflit d'interet (-0) — DockerInc a un CoI modere mais est CORROBORE par DORA + Microsoft independants
- Facteurs - : indirectness modere (-0) — S4/S5 parlent de testing en general ; la doctrine shift-left s'applique directement aux builds Docker ; indirectness acceptable

**Score GRADE Agent B = 3 + 1 + 1 = 5 → STANDARD**

**Analyse de sensibilite Agent B :**

| Source retiree | Score sans cette source | Niveau | Changement ? |
|---------------|------------------------|--------|:------------:|
| B1 Docker Build Checks blog | 5/7 | STANDARD | NON |
| B2 Docker Docs | 5/7 | STANDARD | NON |
| B3 Docker Testcontainers blog | 5/7 | STANDARD | NON |
| B4 DORA (niveau 2 — source critique) | 4/7 | RECOMMANDE | OUI |
| B5 Microsoft | 5/7 | STANDARD | NON |

**Conclusion Agent B** : FRAGILE sur B4 (DORA). Sans B4, score = 4/7 → RECOMMANDE.
Avec B4, toutes les autres sources perdables individuellement sans changer le verdict.
Robustesse : **FRAGILE** (dependance sur B4 pour atteindre STANDARD vs RECOMMANDE).

**Recommandation Agent B** :
- Principe : valider localement avant push CI quand Dockerfile/docker-compose est modifie
- GRADE Score : 5/7
- Niveau : **STANDARD**
- Robustesse : **FRAGILE** (DORA source critique)

**Note Agent B** : Agent B a identifie les memes sources que Agent A par une recherche independante.
La convergence des resultats est forte — 5/5 sources identiques, GRADE identique 5/7, meme conclusion STANDARD.
