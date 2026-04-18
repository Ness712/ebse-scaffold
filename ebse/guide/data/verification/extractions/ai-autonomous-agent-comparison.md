# Extractions — ai-autonomous-agent-comparison
# Comparaison Reviewer A vs Reviewer B + Synthese Agent C

**SLR EBSE du 2026-04-18**
**PICOC :** Comparaison agents autonomes de coding

---

## Convergences (accord fort A+B)

1. **SWE-bench Verified est compromis** : A (analyse The Register, contamination mentionnee) et B (Runloop/CodeAnt : 32.67% leakage, 3.97% strict vs 12.47% brut) convergent. OpenAI a cesse de rapporter sur Verified. Accord parfait : ne pas utiliser SWE-bench Verified seul pour comparer des agents.

2. **FeatureBench (ICLR 2026) est le finding le plus important** : B a trouve cette source, A ne l'a pas trouvee. Agent C la retient comme centrale. Claude Opus 4.5 : 74.4% SWE-bench Verified → 11% FeatureBench. Ratio 7:1. C'est la quantification empirique la plus rigoureuse du gap benchmark/realite sur features reelles.

3. **Devin : 15% success rate en evaluation independante** : A (Answer.AI : 3/20) et B (Trickle/Techpoint : 15% sur 20 taches complexes) convergent sur le meme chiffre via des sources differentes. La revendication vendor de 67% merge rate est auto-rapportee et concerne uniquement les PRs effectivement soumises (les taches abandonnees sont exclues).

4. **Claude Code : agent recommande pour taches complexes avec jugement** : Convergence A+B sur la superiority de Claude Code pour les taches necessitant architecture, refactoring, decisions de design. 46% "most loved" (SO Survey/morphllm). 5.5x moins de tokens que Cursor sur benchmarks internes.

5. **Pas de benchmark TypeScript brownfield independant** : A et B identifient le meme gap. Surrestimation TypeScript confirmee (+53.8%). Toutes les comparaisons entre agents sur TypeScript sont des extrapolations.

6. **Pricing reel ≠ pricing affiche** : A (Devin ACU model, cout intensif $200-1000+/mois) et B (Claude Code Max 20x = $200/mois usage reel, Devin Core $20/mois = 9 ACUs seulement) convergent. Aucun agent autonome n'est vraiment flat-rate illimite.

---

## Divergences et resolution Agent C

### 1. Bifurcation fonctionnelle Devin / Claude Code

**Reviewer A :** Claude Code recommande uniquement. Devin a eviter pour profil PO solo TypeScript.

**Reviewer B :** Bifurcation : Devin pour taches async bien definies (bug fixes documentes, dependency updates, docs), Claude Code pour taches necessitant du jugement (refactoring, architecture, securite).

**Resolution Agent C :** B retenu. La bifurcation est empiriquement supportee :
- Devin : 67% merge rate (vendor, taches bien definies selectionnees) — montre une utilite reelle sur ce perimetre specifique
- Claude Code : superieur sur taches avec jugement (confirmation Render Blog, morphllm, SO Survey)
- Les deux roles sont complementaires, pas substituables
Recommandation finale : Claude Code comme agent principal, Devin optionnel pour un perimetre tres restreint de taches asynchrones repetitives.

### 2. OpenHands — auto-evaluation 60.6%

**Reviewer A :** Inclus avec reserve. Note : "better than Claude Code, Cursor, Codex" est une affirmation non supportee par les donnees comparatives tierces.

**Reviewer B :** Inclus (OpenHands Index jan 2026) — note que Claude Opus est le meilleur modele dans OpenHands, pas OpenHands lui-meme.

**Resolution Agent C :** Accord. OpenHands est une plateforme (scaffold), pas un modele. Ses performances dependent du modele sous-jacent. "60.6% SWE-bench Verified" = OpenHands + un modele non specifie. Non comparable directement aux scores Claude Code qui utilisent Claude comme backbone. Recommande pour les utilisateurs souhaitant self-hoster avec modele local (voir ai-local-vs-cloud-agent).

### 3. Anthropic Agentic Coding Trends 2026 (vendor report)

**Reviewer A :** Non utilise.
**Reviewer B :** Inclus avec reserves. Case studies Rakuten (99.9% precision, 7h) cites comme "brownfield" — mais la tache (extraction de vecteurs d'activation dans vLLM) est analytique/isolee, pas une feature NestJS multi-module.

**Resolution Agent C :** Inclus mais avec annotation forte : generaliser depuis Rakuten vers un PO solo TypeScript serait une surextension de la source. Retenu uniquement pour les donnees d'adoption globales (51% code GitHub AI-assisted en 2025).

---

## Analyse de sensibilite commune A+B

**Si FeatureBench exclu** (Python uniquement, pas TypeScript) :
- GRADE maintenu a 4 — SWE-bench Pro + SWE-EVO + evaluations terrain convergent
- Perte du ratio 7:1 — finding le plus frappant mais pas le seul

**Si Devin evaluation independante exclue** (n=20, une seule equipe, jan 2025) :
- Les donnees vendor (67% merge rate) resteraient seules
- GRADE baisse vers 3 — sans evidence independante, les comparaisons Devin/Claude Code reposent trop sur les vendors
- Conclusion : l'evaluation independante Devin est critique pour maintenir GRADE 4

**Si SWE-bench Verified exclu** (contamination) :
- SWE-bench Pro (Scale AI) + FeatureBench (ICLR 2026) + Aider Polyglot restent
- GRADE maintenu a 4 mais avec moins de points de comparaison

---

## Gaps specifiques

**Gap 1 — TypeScript/Node.js brownfield benchmark** : Lacune majeure partagee par A et B. Aucun benchmark independant n'evalue les agents sur une stack NestJS/Prisma/React en codebase existante. La surrestimation TypeScript (+53.8%) est confirmee mais dans le sens oppose a ce qu'on voudrait (agents performent mieux qu'en realite sur les benchmarks TypeScript actuels).

**Gap 2 — PO non-developpeur comme seul superviseur** : Tous les case studies (Rakuten, Stripe) impliquent des equipes d'ingenieurs supervisant les agents. L'hypothese "delegation totale sans dev humain" n'a pas d'evidence base solide.

**Gap 3 — Metriques long-terme** : Evaluations sur taches isolees (heures/jours). Aucune donnee sur maintenance d'une codebase par agents sur 6-12 mois.

**Gap 4 — Opacite des scaffoldings proprietaires** : Claude Code, Devin, Copilot Coding Agent ne publient pas leurs architectures de scaffolding. Les scores benchmarks sont attribuables au modele + scaffolding combines — impossible de separer les contributions.
