# PRISMA Flow — ai-agent-pre-release-review

**Date de recherche** : 2026-04-17
**Agents** : Reviewer A (ad57329f353981b22) + Reviewer B (ae07629ff0435c3da) — contextes indépendants
**Bases interrogées** : IEEE Xplore, ACM DL, arXiv, Google Scholar, DORA, SmartBear, GitClear, NIST, OWASP, ISO/IEEE, Google SRE, ThoughtWorks, PPI/Capers Jones
**Mots-clés** : "pre-release review", "release readiness review", "software inspection + milestone", "modern code review + post-release defects", "quality assurance LLM-generated code", "defect removal efficiency", "release gate quality gate", "code review coverage defect density", "AI copilot code defect", "software audit IEEE"

---

## Flux PRISMA

```
IDENTIFICATION
  Sources identifiées par base :
    - IEEE Xplore          : ~20 sources candidates
    - ACM Digital Library  : ~8 sources candidates
    - arXiv (cs.SE, cs.AI) : ~15 sources candidates
    - Google Scholar       : ~19 sources candidates
    - DORA / Google Cloud  : 2 rapports
    - SmartBear surveys    : 2 sources
    - GitClear             : 1 rapport
    - NIST                 : 1 rapport
    - OWASP                : 1 guide
    - ISO/IEEE standards   : 4 normes
    - Expert books (SRE, Fowler, Forsgren) : 3 sources
    - PPI/Capers Jones     : 2 sources
    - Snowballing          : ~5 sources additionnelles
  Total identifié : ~83
  Doublons retirés : -18
  Total après déduplication : ~65

SCREENING (titre + résumé)
  Sources screenées : 65
  Sources exclues au screening : -40
    - E1 (> 5 ans ET non-standard) : -12
    - E2 (blog individuel)         : -15
    - E3 (marketing vendeur)       : -8
    - E5 (hors périmètre hardware/medical) : -5

ÉLIGIBILITÉ (lecture complète)
  Sources évaluées en détail : 25
  Sources exclues après lecture : -8 (raisons dans extraction file)

INCLUSION
  Sources incluses dans la synthèse : 17 (Reviewer A) / 11 évaluées par Reviewer B
    - Niveau 1 (IEEE/ISO standards) : 3
    - Niveau 2 (gouvernemental + consortium) : 2
    - Niveau 3 (peer-reviewed empirique + doc officielle) : 2
    - Niveau 4 (enquête grande échelle) : 2
    - Niveau 5 (experts reconnus) : 3-4
```

---

## Documentation recherche (Table 2 Kitchenham) — sélection

| Base | Termes utilisés | Date | Retenus |
|------|----------------|------|---------|
| IEEE Xplore | "pre-release review" + "defect detection" | 2026-04-17 | 2 (IEEE 1028, IEEE 730) |
| ISO | "12207", "25010" | 2026-04-17 | 2 |
| OWASP | "code review guide" | 2026-04-17 | 1 |
| Google Scholar / EMSE | "modern code review" + "software quality" | 2026-04-17 | 1 (McIntosh 2016) |
| arXiv | "LLM-generated code quality" + "non-functional" | 2026-04-17 | 1 (Sun 2025) |
| DORA | "State of DevOps" 2024 | 2026-04-17 | 1 |
| PPI | "defect removal efficiency" + Capers Jones | 2026-04-17 | 1 |
| NIST | "economic impacts software testing" | 2026-04-17 | 1 |
