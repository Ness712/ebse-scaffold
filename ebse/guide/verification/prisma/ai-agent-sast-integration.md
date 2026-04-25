# PRISMA Flow — PICOC-J : ai-agent-sast-integration

**Date de recherche** : 2026-04-25
**Bases interrogées** : arXiv (cs.SE, cs.CR), Springer DIMVA proceedings, ACM ISSTA, semgrep.dev, konvu.com, owasp.org
**Mots-clés Agent A** : "Semgrep OWASP Top 10 evaluation", "SAST local pre-commit agent workflow", "CodeQL vs Semgrep latency comparison", "SonarLint offline capabilities", "autonomous agent SAST integration security"
**Mots-clés Agent B** : "static analysis tool comparison NestJS TypeScript", "Semgrep precision recall OWASP benchmark", "CodeQL local analysis resource requirements", "SAST pre-commit hook performance", "AI agent code security scanning workflow"
**Protocole** : methodology.md v3.0 §2.1 — double extraction indépendante (Agents A + B, mots-clés différents)

---

## Flux

```
IDENTIFICATION
  Sources identifiées par base (Agent A + Agent B combinés, avant déduplication) :
    - arXiv (cs.SE, cs.CR) : ~12 résultats candidats
    - Springer DIMVA proceedings (via WebSearch) : ~4 sources
    - ACM ISSTA proceedings (via WebSearch) : ~6 sources
    - Vendor documentation (semgrep.dev, codeql.github.com) : ~8 sources
    - WebSearch général (konvu.com, practitioner comparisons) : ~10 sources
    - Snowballing backward (références surveys SAST) : ~6 sources
  Total identifié (brut, combiné A+B) : ~46
  Doublons retirés (convergence A+B sur sources principales) : 10
  Total après déduplication : ~36

SCREENING (titre + résumé)
  Sources screenées : ~36
  Sources exclues au screening : ~25
    - E1 (SAST général sans contexte agentique ou pré-commit) : ~10
    - E2 (benchmarks propriétaires sans méthodologie transparente) : ~6
    - E3 (hors scope PICOC — focus Java/non-TypeScript uniquement) : ~5
    - E4 (antérieurs à 2022, OWASP Top 10 non-actuel) : ~4

ELIGIBILITÉ (lecture complète)
  Sources évaluées en détail : ~11
  Sources exclues après lecture complète : 0
    - Toutes les 11 sources évaluées retenues

INCLUSION
  Sources incluses dans la synthèse : 11 (dont 1 niveau 2, 2 niveaux 3, 2 niveaux 4, 1 niveau 5)
    - Niveau 1 : 0
    - Niveau 2 : 1 (OWASP Top Ten — référence normative)
    - Niveau 3 : 3 (Semgrep ruleset p/owasp-top-ten ; Semgrep pre-commit docs ; Anthropic Claude Code hooks)
    - Niveau 4 : 4 (Springer DIMVA 2024 N=300 ; ACM ISSTA Semgrep* ; CodeQL GitHub docs ressources ; comparaison benchmark indépendant)
    - Niveau 5 : 3 (konvu.com comparaison données ; practitioner latency measurements ; SonarLint online-only limitation)

  Note méthodologique importante :
    - ACCORD PARFAIT A+B : les deux agents indépendants convergent sur grade 3 RECOMMANDE
    - Divergence principale : Agent A appuyait plus sur DIMVA 2024 empirique (grade 3 via OWASP + données)
    - Agent B appuyait plus sur convergence ACM ISSTA + OWASP + praticiens (grade 3 via consensus)
    - Résultat : accord parfait, pas de résolution Agent C nécessaire
```

---

## Documentation recherche (Table 2 Kitchenham)

### Agent A — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | arXiv (cs.SE, cs.CR), Springer DIMVA, owasp.org, semgrep.dev |
| Mots-clés | "Semgrep OWASP Top 10 evaluation", "SAST local pre-commit agent workflow", "CodeQL vs Semgrep latency comparison" |
| Période couverte | 2022-2026 |
| Sources identifiées | ~22 |
| Sources retenues | 6 |
| Date d'extraction | 2026-04-25 |

### Agent B — bases interrogées

| Élément | Valeur |
|---------|--------|
| Bases | ACM ISSTA, arXiv (cs.SE), WebSearch, konvu.com, codeql.github.com |
| Mots-clés | "Semgrep precision recall OWASP benchmark", "CodeQL local analysis resource requirements", "SAST pre-commit hook performance" |
| Période couverte | 2022-2026 |
| Sources identifiées | ~24 |
| Sources retenues | 5 (convergence élevée avec A) |
| Date d'extraction | 2026-04-25 |

---

## Sources exclues — raisons documentées

| Source | Raison exclusion |
|--------|-----------------|
| Benchmarks SAST sur Java uniquement | Hors scope — non applicable TypeScript/NestJS |
| Trivy vulnerability scanner | Hors scope SAST code — couverture dépendances, pas analyse statique code source |
| SonarCloud (cloud-based) | Hors scope — online-only, pas applicable pre-commit agent offline |
| Études SAST antérieures à OWASP Top 10 2021 | Données périmées — OWASP Top 10 actualisé en 2021 |
