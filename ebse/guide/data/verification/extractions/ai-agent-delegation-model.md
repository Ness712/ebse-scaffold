# Extractions — ai-agent-delegation-model
# Comparaison Reviewer A vs Reviewer B + Synthese Agent C

**SLR EBSE du 2026-04-18**
**PICOC :** Copilot vs Agent Autonome — delegation PO solo

---

## Convergences (accord fort A+B)

1. **Autonomie complete non viable aujourd'hui** : A (METR Long Tasks, SWE-EVO, OpenHands paper) et B (TheAgentCompany NeurIPS 2025, FeatureBench ICLR 2026, SWE-EVO) convergent sur le meme constat. Chiffres convergents : 50% succes sur taches < 1h, < 25% sur taches multi-fichiers longues, 21-30% en environnement entreprise simule.

2. **La qualite du code autonome se degrade sur la duree** : A (MSR 2026 DiD : +39% complexite cognitive, +18% avertissements static) et B (Vibe Coding : 10.83 issues/PR vs 6.45 humain, +75% misconfigurations) mesurent independamment la meme degradation avec des methodes differentes.

3. **Les vulnerabilites de securite augmentent avec l'autonomie** : A (Rethinking Autonomy : incidents irreversibles documentes) et B (Apiiro : +322% privilege escalation, 10x plus de vulns ; Vibe Coding : +2.74x) convergent. Les magnitudes different (B est plus precis) mais la direction est identique.

4. **La trajectoire de progression est reelle mais insuffisante pour 2025-2026** : A-07 (METR Time Horizons) et B-01 (meme papier) citent la meme source. Doublement des capacites tous les 7 mois. Consensus : taches multi-jours fiables dans 1-2 ans.

5. **La delegation partielle structuree est viable avec des conditions** : convergence sur les 4 conditions (decomposition atomique, CI/CD, gates securite, PO capable de review PR). Les deux reviewers identifient ces memes pre-requis bien qu'avec des formulations differentes.

---

## Divergences et resolution Agent C

### 1. GRADE : A=2/7 vs B=3/7

**Reviewer A :** Deux RCTs contradictoires (Microsoft +55.8% vs METR -19%) rendent l'evidence ambigue. Absence d'etude sur PO non-dev. GRADE 2.

**Reviewer B :** Corpus plus large (TheAgentCompany NeurIPS 2025 peer-reviewed, SWE-EVO, Long-Horizon Task Mirage). La contradiction des RCTs est resolue par le facteur moderateur "complexite". GRADE 3.

**Resolution Agent C :** GRADE 3 retenu. La reconciliation des RCTs de B est correcte — Microsoft mesure une tache simple isolee (HTTP server en JS), METR mesure des codebases matures avec taches complexes. Ce ne sont pas des mesures contradictoires du meme phenomene, mais des mesures coherentes de phenomenes differents (tache simple vs complexe). Avec ce moderateur, le corpus de B converge suffisamment pour GRADE 3. La lacune sur PO non-dev reste documentee comme gap residuel.

### 2. Apiiro (biais vendeur) — inclure ou pas ?

**Reviewer A :** N'a pas utilise Apiiro.
**Reviewer B :** Inclus avec note "biais vendeur partiel mais donnees empiriques sur 10 000+ depots".

**Resolution Agent C :** Retenu avec reserve. Les ordres de grandeur Apiiro (10x vulnerabilites, +322% privilege escalation) convergent avec Vibe Coding (arXiv, sans biais vendeur) sur la direction. La magnitude exacte est a prendre avec precaution mais la direction est fiable.

### 3. Stack Overflow Survey 2025 (N=65K)

**Reviewer A :** Non utilise.
**Reviewer B :** Inclus — 52% des devs percoivent un gain de productivite, mais seulement 17% voient une amelioration de collaboration d'equipe. Contraste avec METR (-19% objectif).

**Resolution Agent C :** Illustration classique de l'effet Dunning-Kruger en productivite IA : les gains percus divergent des gains mesures objectivement. Retenu comme contexte du gap perception/mesure.

---

## Analyse de sensibilite commune A+B

**Si METR quasi-RCT exclu** (N=16, population restreinte) :
- Perte du seul design quasi-experimental sur developpeurs reels avec codebase mature
- Le Microsoft RCT (tache simple) reste mais mesure un contexte tres different du PO solo
- TheAgentCompany (NeurIPS 2025) maintient l'evidence sur l'autonomie bornee
- GRADE descend de 3 a 2 mais les conclusions principales restent valides

**Si TheAgentCompany exclu** (environnement simule, pas de codebase reel) :
- GRADE maintenu a 3 — FeatureBench (ICLR 2026) + SWE-EVO suffisent
- Perte du seul benchmark en "environnement entreprise simule" (le plus proche du PICOC)

**Si FeatureBench exclu** (Python uniquement, pas TypeScript) :
- GRADE maintenu a 3 — SWE-bench Pro + SWE-EVO + METR suffisent
- Perte de la donnee "ratio 7:1" — qui est le finding le plus frappant du corpus

---

## Gaps specifiques identifies (non couverts par aucune source)

**Gap 1 — Population PO non-developpeur** : Toutes les etudes evaluent des developpeurs experimentes. Le cas "PO non-technique supervisant un agent autonome" n'a jamais ete mesure. Les risques specifiques (incapacite a detecter les erreurs silencieuses du code) ne sont pas quantifies.

**Gap 2 — Longitudinal > 6 mois** : Aucune etude ne suit l'evolution de la qualite d'un codebase gere par agents sur une annee complete. La dette technique cumulee, la derivation architecturale, la maintenance de dependances — aucun chiffre empirique.

**Gap 3 — Codebase TypeScript/NestJS specifiquement** : Tous les benchmarks sont principalement Python. Le "TypeScript overestimation" (+53.8%) suggere que les resultats sur TypeScript sont moins fiables que sur Python.

**Gap 4 — Benchmark sur specs ambigues** : SWE-bench et tous ses derives partent de specs precisement definies (issues GitHub detaillees). Le workflow reel PO→agent part de specs haute-niveau ambigues. Ce gap de specification n'est mesure par aucune source.
