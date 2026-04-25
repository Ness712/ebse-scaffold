# PRISMA Flow — PICOC-I : ai-agent-secret-detection-hooks

**Date de recherche** : 2026-04-25
**Bases interrogées** : arXiv (cs.CR, cs.SE), WebSearch général, OWASP (owasp.org), trufflesecurity.com, jit.io, rafter.so
**Mots-clés Agent A** : "pre-commit secret detection hooks AI agent", "TruffleHog vs detect-secrets comparison", "git-secrets alternatives 2024", "credential scanning autonomous agent", "OWASP DevSecOps secrets management pre-commit"
**Mots-clés Agent B** : "secret scanning tools comparison false positive rate", "TruffleHog verified detection enterprise", "detect-secrets entropy false positives", "git-secrets maintenance status", "pre-commit hooks secret leakage prevention LLM agent"
**Protocole** : methodology.md v3.0 §2.1 — double extraction indépendante (Agents A + B, mots-clés différents)

---

## Flux

```
IDENTIFICATION
  Sources identifiées par base (Agent A + Agent B combinés, avant déduplication) :
    - arXiv (cs.CR, cs.SE) : ~8 résultats candidats
    - WebSearch général (OWASP, vendor docs, practitioner blogs) : ~14 résultats candidats
    - OWASP DevSecOps Guideline : 2 sources
    - Documentation officielle outils (TruffleHog, detect-secrets, git-secrets) : ~6 sources
    - Snowballing backward (références citées) : ~4 sources
  Total identifié (brut, combiné A+B) : ~34
  Doublons retirés (même source identifiée par A et B) : 8
  Total après déduplication : ~26

SCREENING (titre + résumé)
  Sources screenées : ~26
  Sources exclues au screening : ~17
    - E1 (niveau 5 / blog opinion sans données comparatives) : ~8
    - E2 (hors scope PICOC — secrets management en général, pas pre-commit hooks) : ~5
    - E3 (doublons partiels) : ~2
    - E4 (vendeur sans méthodologie transparente, auto-promotion) : ~2

ELIGIBILITÉ (lecture complète)
  Sources évaluées en détail : ~9
  Sources exclues après lecture complète : 0
    - Toutes les sources screenées retenues (niveau de preuve suffisant)

INCLUSION
  Sources incluses dans la synthèse : 9 (dont 2 niveau 2, 3 niveau 3, 2 niveau 5)
    - Niveau 1 : 0
    - Niveau 2 : 1 (OWASP DevSecOps Guideline — Secrets Management)
    - Niveau 3 : 3 (TruffleHog docs vérification active ; TruffleHog pre-commit hooks ; bug report anthropics/claude-agent-sdk-python #316)
    - Niveau 4 : 1 (comparaison données FP — Rafter)
    - Niveau 5 : 4 (Jit.io comparaison ; Rafter FP analysis ; git-secrets GitHub activity ; detect-secrets GitHub issues FP)

  Note sur bug documenté :
    - GitHub issue anthropics/claude-agent-sdk-python #316 : hook PreToolUse non-déclenché si fichier cible n'existe pas encore
    - Impact PICOC : justifie défense en profondeur (règle MANDATORY + hook, pas uniquement hook)
    - Cette évidence négative mécanique est cruciale pour la recommandation finale

  Sources exclues avec raison documentée : 0 (toutes les sources candidates après screening ont été retenues)
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | arXiv (cs.CR, cs.SE), WebSearch général, owasp.org, trufflesecurity.com |
| Mots-clés | "pre-commit secret detection hooks AI agent", "TruffleHog vs detect-secrets comparison", "OWASP DevSecOps secrets management" |
| Période couverte | 2020-2026 |
| Sources identifiées | ~18 |
| Sources retenues | 5 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | arXiv (cs.CR), WebSearch, jit.io, rafter.so, GitHub |
| Mots-clés | "secret scanning tools comparison false positive rate", "TruffleHog verified detection enterprise", "detect-secrets entropy false positives" |
| Période couverte | 2020-2026 |
| Sources identifiées | ~16 |
| Sources retenues | 4 (convergence partielle avec A) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentées

| Source | Raison exclusion |
|--------|-----------------|
| Blog posts promotion TruffleHog sans données | Niveau 5 redondant avec sources vendor officielles |
| git-secrets comparaisons antérieures à 2020 | Antérieur au gel de maintenance — données non pertinentes |
| Études secret scanning en contexte non-agentique | Hors scope PICOC strict — not applicable aux hooks Claude Code |
