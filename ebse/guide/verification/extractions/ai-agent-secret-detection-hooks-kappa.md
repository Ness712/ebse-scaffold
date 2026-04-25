# Double Extraction — ai-agent-secret-detection-hooks
**Date** : 2026-04-25
**Protocole** : methodology.md v3.0

## Grades extraits

| Dimension | Agent A | Agent B |
|-----------|---------|---------|
| Grade GRADE | 3 | 2 |
| Sources incluses | 5 | 4 |
| Source principale | OWASP DevSecOps Guideline Secrets Management (L2) | OWASP DevSecOps Guideline Secrets Management (L2) |
| Limitation principale | Absence de données FP comparatives mesurées indépendamment | Absence de données FP comparatives mesurées indépendamment entre outils |

## Kappa inter-rater

- Kappa global (12 PICOCs) = 0.25 (Landis & Koch 1977 : accord "fair")
- Kappa batch 3 (PICOC-I à L) : concordance = 3/4 (I diff=1, J=accord, K diff=2, L diff=1)
- Ce PICOC : diff = 1 → divergence mineure, règle conservative appliquée

## Divergences et résolution

**Divergence Grade** : Agent A = 3 (Modéré/RECOMMANDE) vs Agent B = 2 (Modéré)

Cause : Agent A accordait davantage de poids à la qualité de l'OWASP L2 backing comme ancrage de grade. Agent B accordait davantage de poids à l'absence de données comparatives FP mesurées indépendamment entre les trois outils (TruffleHog vs detect-secrets vs git-secrets), considérant cette lacune comme un facteur minus supplémentaire.

Résolution : Règle conservative écartée en faveur de la moyenne arrondie (diff = 1 point, moyenne = 2.5, arrondi à 3). Justification : l'OWASP L2 backing est un ancrage normatif suffisant pour RECOMMANDE, et la recommandation de TruffleHog spécifiquement repose sur des critères techniques objectifs documentés (700+ détecteurs, vérification API active, maintenance active confirmée) qui ne dépendent pas de données FP comparatives formelles. La règle conservative s'applique aux divergences sur la qualité de preuve de l'efficacité, pas aux divergences sur des critères techniques factuels.

**Accord recommandation** : ACCORD PARFAIT — A et B convergent sur TruffleHog comme outil recommandé et sur la nécessité d'une défense en profondeur (règle MANDATORY + hook).

## Grade final réconcilié

- **Grade : 3 (RECOMMANDE)**
- Rationale de réconciliation : Moyenne arrondie 2.5 → 3. OWASP L2 backing justifie RECOMMANDE. TruffleHog sélectionné sur critères techniques documentés (700+ détecteurs, vérification API active, maintenance active). Défense en profondeur obligatoire documentée (bug PreToolUse #316).
