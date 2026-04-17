# Double Extraction — docker-local-build-validation

**Date** : 2026-04-17
**Agent A** : claude-sonnet-4-6 session 06b931da (sous-agent EBSE)
**Agent B** : claude-sonnet-4-6 session indépendante (sous-agent reviewer)
**Superviseur** : Gabriel Nicolas-Mille (PO)

## PICOC

- **P** = Tout projet utilisant Docker (Dockerfile / docker-compose.yml), toute taille d'équipe, CI/CD automatisée
- **I** = Validation locale du build Docker (`docker build --check`, `docker compose config`) avant push CI
- **C** = Push direct en CI sans validation locale (découverte des erreurs en pipeline 10-20 min)
- **O** = Réduction du temps de feedback sur erreurs Docker, réduction pipelines échoués, vélocité
- **Co** = Projet avec CI/CD automatisée, pipeline CI de 10-20 min

## Comparaison Agent A vs Agent B

| # | Source | Agent A niveau | Agent B niveau | Accord | Agent A inclusion | Agent B inclusion | Accord |
|---|--------|---------------|---------------|:------:|------------------|------------------|:------:|
| 1 | Docker Blog — Introducing Docker Build Checks | 3 | 3 | ✓ | INCLUS | INCLUS | ✓ |
| 2 | Docker Docs — Build checks (docker build --check) | 3 | 3 | ✓ | INCLUS | INCLUS | ✓ |
| 3 | DORA — Capabilities: Continuous Integration | 2 | 2 | ✓ | INCLUS | INCLUS | ✓ |
| 4 | Docker Blog — Shift-Left Testing with Testcontainers | 3 | 3 | ✓ | INCLUS | INCLUS | ✓ |
| 5 | Microsoft DevOps Docs — Shift testing left | 3 | 3 | ✓ | INCLUS | INCLUS | ✓ |
| 6 | Medium article "5 tips for Dockerfile" | 6 | 6 | ✓ | EXCLU (E1) | EXCLU (E1) | ✓ |
| 7 | YouTube Docker tutorial | 6 | 6 | ✓ | EXCLU (E1) | EXCLU (E1) | ✓ |
| 8 | Generic CI/CD best practices | — | — | ✓ | EXCLU (E6) | EXCLU (E6) | ✓ |

## Résultats

- Accord inclusion/exclusion : 8/8 (100%)
- Accord niveaux pyramide : 8/8 (100%)
- **Kappa de Cohen : 1.00** (accord parfait)
- Pages modifiées suite à la double extraction : aucune (convergence totale)

## GRADE (calcul conjoint)

**Score de départ** : 3 (source la plus haute = DORA niveau 2)

Facteurs positifs :
- +1 convergence : 5 sources indépendantes (Docker blog, Docker docs, DORA, Docker Testcontainers, Microsoft) convergent sur la même recommandation
- +1 effet important : Docker docs cite "typically completes in less than a second" vs 10-20 min pipeline ; Testcontainers cite "65% faster defect identification"

Facteurs négatifs :
- 0 (CoI Docker modéré — 3/5 sources sont Docker-branded — mais corroboré par DORA niveau 2 sans CoI et Microsoft sans CoI)

**Score final : 3 + 1 + 1 = 5/7 → [STANDARD]**

## Analyse de sensibilité

| Source retirée | Score sans cette source | Niveau | Changement ? |
|---------------|------------------------|--------|:------------:|
| DORA (niveau 2) | 2+1+1=4/7 | [RECOMMANDE] | OUI |
| Docker Blog Build Checks | 3+1+1=5/7 | [STANDARD] | NON |
| Docker Docs Build Checks | 3+1+1=5/7 | [STANDARD] | NON |
| Docker Testcontainers | 3+1+0=4/7 (perd effet important) | [RECOMMANDE] | OUI |
| Microsoft DevOps | 3+1+1=5/7 | [STANDARD] | NON |

**Conclusion : FRAGILE** — retrait de DORA ou Docker Testcontainers fait tomber à [RECOMMANDE].
Sources critiques : DORA (seule source niveau 2), Docker Testcontainers (seule source avec chiffre 65%).

## Balance bénéfices/risques

**Bénéfices** :
- Feedback < 1 sec vs 10-20 min de pipeline CI
- Maintien du focus développeur (pas de context switch forcé)
- Réduction du nombre de pipelines échoués
- 65% faster defect identification (Testcontainers/Docker 2024)

**Risques** :
- Surcout opérationnel négligeable (< 1 sec par push)
- `docker build --check` ne garantit pas que le build complet réussira (semantic errors non détectés)
- Nécessite Docker installé localement (standard dans tout contexte Docker)

**Balance** : Bénéfices >> Risques
**Faisabilité** : Haute — Docker déjà installé dans tout projet Docker

## Divergences et résolution

Aucune divergence. Accord parfait entre Agent A et Agent B sur toutes les décisions.
