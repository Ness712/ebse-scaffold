# Double Extraction — ai-agent-extended-hook-lifecycle
**Date** : 2026-04-25
**Protocole** : methodology.md v3.0

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 3 (Modere/RECOMMANDE) | 2 (Faible-Modere) |
| Sources incluses | 5 | 5 |
| Source principale | code.claude.com/docs/en/hooks (L3 documentation complete) | arXiv 2509.14744 hook-as-guardrail (L4) |
| Limitation principale | Absence d'etude comparative avec/sans advanced hooks | Exit code 2 vs 1 confusion documentee dans certains guides tiers |

## Kappa inter-rater

- Kappa global (12 PICOCs Batch 1+2) = 0.25 (accord "fair", Landis & Koch 1977)
- Kappa batch 2 (PICOC-E a H) : concordance grades = 2/4 (diff <= 1) — divergences 1 point sur E et F, accord parfait sur G et H
- Ce PICOC : **desaccord** (diff = 1), resolution Agent C

## Divergences et resolution

**Agent A (grade 3)** : Documentation officielle complete et exhaustive (tous les events, format stdin/stdout, exit codes). PermissionRequest est non-bypassable par instruction-text → force une implementation reelle, justifie RECOMMANDE. CVE-2025-54794 + arXiv 2509.14744 valident UserPromptSubmit comme garde obligatoire.

**Agent B (grade 2)** : Documentation solide mais pas d'etude comparative "avec advanced hooks vs sans" — on mesure seulement l'effet global des hooks (Poskitt 2026), pas l'effet differentiel de chaque type avance. Exit code 2 vs 1 confusion dans sources tiers seme le doute sur la fiabilite pratique. Grade 2 plus prudent.

**Resolution Agent C** : Moyenne 2.5 → arrondi a 3. Justification : la documentation Anthropic est suffisamment precise sur les exit codes (L3 authoritatif) pour ecarter la confusion tiers. PermissionRequest etant non-bypassable et UserPromptSubmit etant necessaire post-CVE-2025-54794, le niveau RECOMMANDE est justifie. Matrice de decision incluse pour guider l'activation selective.

## Grade final reconcilie

- **Grade : 3 (RECOMMANDE)**
- Rationale : Hooks avances documentés officiellement avec exit codes précis (exit 2 = bloquant, exit 0 = continuer). PermissionRequest non-contournable par texte d'instruction et UserPromptSubmit necessaire pour mitigation CVE-2025-54794 justifient RECOMMANDE. Activation selective par scenario — ne pas tout activer par defaut.
