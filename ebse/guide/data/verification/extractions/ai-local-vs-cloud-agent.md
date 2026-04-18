# Extractions — ai-local-vs-cloud-agent
# Comparaison Reviewer A vs Reviewer B + Synthese Agent C

**SLR EBSE du 2026-04-18**
**PICOC :** Modeles locaux vs Cloud pour agent autonome de coding

---

## Convergences (accord fort A+B)

1. **Gap qualite local vs cloud : 10-15 points SWE-bench, en reduction rapide** : A (Qwen2.5-Coder : 73.7% Aider vs GPT-4o ~70% — parite sur benchmarks fonction) et B (Qwen3-Coder-Next : 70.6% SWE-bench Verified vs Claude Opus 4.6 : 80.9% — gap 10 points sur autonomie) mesurent le meme phenomene de deux angles complementaires. Le gap etait de 30-40 points il y a 18 mois — reduction de ~13 points absolus par an.

2. **Architecture hybride est la strategie dominant en 2026** : A (Jethro Carr : local pour taches simples, cloud pour multi-fichiers) et B (Tom Ron fev 2026 : "hybrid approach validated: 70-80% local, 20-30% cloud") convergent sur la meme architecture pratique.

3. **RGPD : avantage structurel du local pour les donnees sensibles** : A (EDPB avril 2025) et B (EDPB Opinion 28/2024, niveau 1) citent la meme autorite reglementaire. Accord parfait : le local elimine le risque de transfert de donnees personnelles hors UE qui existe avec les APIs cloud US-based.

4. **Hardware minimum viable : RTX 4090 24GB pour usage agentic serieux** : A et B convergent sur ce seuil. En dessous (12-16GB), seuls les 7B-13B modeles tournent — insuffisant pour une delegation autonome serieuse sur codebase entiere.

5. **TCO favorable au local des 150-300 $/mois d'API** : A (break-even mois 2-6 pour usage intensif) et B (break-even mois 6-18 selon intensite) convergent sur la plage 6-18 mois. A faible usage (< 50K tokens/jour), le cloud reste plus econom

6. **Limitations concretes d'Ollama pour agents autonomes** : B a documente les limitations specifiques (contexte 2K-4K par defaut, plafond OpenHands 65 336, incompatibilite Docker Linux). A n'a pas trouve ces details mais les limitations de throughput (41 TPS) et de qualite sur taches complexes convergent. Accord : Ollama fonctionnel pour usage solo sequentiel, limitations a configurer explicitement.

---

## Divergences et resolution Agent C

### 1. GRADE : A=3 vs B=4

**Reviewer A :** Absence de RCT, benchmarks partiellement auto-publies, domaine en evolution rapide. GRADE 3.

**Reviewer B :** EDPB Opinion 28/2024 est source normative niveau 1 (pyramide). GRADE 4.

**Resolution Agent C :** GRADE 3 retenu pour le PICOC global (performance technique). GRADE 5 sur la sous-question RGPD specifiquement (EDPB niveau 1 = standard). La distinction est importante : la question "local est-il meilleur en qualite pour un agent autonome ?" reste GRADE 3 (pas de RCT). La question "local est-il meilleur pour la conformite RGPD ?" est GRADE 5 (source normative niveau 1, directement applicable).

### 2. Codestral — disponibilite locale

**Reviewer A :** Inclut Codestral comme modele local potentiel.

**Reviewer B :** Clarification critique — Codestral 25.01 et 25.08 ne sont PAS open-weight. Seul Codestral Mamba a des poids publics. Les versions recentes sont uniquement disponibles via l'API Mistral.

**Resolution Agent C :** B retenu. Codestral exclu des recommandations modeles locaux pour les versions recentes. A corriger dans tous les comparatifs qui le mentionnent en "modele local".

### 3. Modele local recommande

**Reviewer A :** Qwen2.5-Coder-32B (principal, deja documente).

**Reviewer B :** Qwen3-Coder-Next (80B MoE, 3B actifs, fev 2026) — superieur, meme contrainte hardware (24GB).

**Resolution Agent C :** Qwen3-Coder-Next retenu comme premier choix (70.6% SWE-bench vs Qwen2.5-Coder-32B qui n'a pas de score SWE-bench publie). Qwen2.5-Coder-32B reste l'alternative si Qwen3-Coder-Next n'est pas disponible. Les deux tournent sur RTX 4090 24GB en Q4.

### 4. DeepSeek-Coder-V2 full model

**Reviewer A :** Inclus comme option mais note hardware inaccessible consumer (8x80GB).

**Reviewer B :** Non recommande pour solo founder (> 10K EUR hardware).

**Resolution Agent C :** Exclu des recommandations solo founder. Le modele Lite (2.4B actifs) sacrifie trop de qualite. Le full (21B actifs sur 236B) necessite infrastructure multi-GPU inaccessible.

---

## Analyse de sensibilite commune A+B

**Si EDPB exclu** (document reglementaire, pas etude empirique) :
- La sous-question RGPD reste supportee par la logique du droit UE (Art. 46 GDPR) meme sans la citation EDPB
- GRADE sous-question RGPD baisse de 5 a 3 (raisonnement juridique vs standard normatif)
- GRADE global inchange (3)

**Si Qwen3-Coder-Next exclu** (rapport technique recent, non peer-reviewed independamment) :
- Qwen2.5-Coder-32B reste la reference locale
- GRADE inchange mais la recommandation sur la parite avec frontier cloud affaiblie
- Les 10-15 points de gap deviennent 20-25 points (retour a Qwen2.5 : ~73% Aider vs 80%+ SWE-bench Verified)

**Si benchmarks locaux auto-publies exclus** (biais fabricant Alibaba/Mistral) :
- Seules les evaluations tierces (ArtificialAnalysis, Aider Polyglot via scores indirects) restent
- GRADE baisse vers 2 — les evaluations tierces des modeles locaux sont rares et peu nombreuses
- Recommandation hybride maintenue mais avec moins de confiance sur le gap precis

---

## Gaps specifiques identifies

**Gap 1 — Quantification de la degradation Q4 sur taches agentiques** : Tous les benchmarks officiels (SWE-bench, HumanEval) sont realises en FP16/BF16. La degradation due a la quantification Q4_K_M sur des taches multi-etapes complexes n'est pas mesuree. Les praticiens rapportent des degradations, mais sans chiffres rigoureux.

**Gap 2 — TCO avec maintenance operationnelle** : Les analyses TCO disponibles comptent le hardware et l'electricite mais pas le temps de setup initial, de debug des limitations Ollama, de mise a jour des modeles. Ce cout est non-trivial pour un solo founder (estimation : 10-40h/an, non chiffree empiriquement).

**Gap 3 — Benchmarks TypeScript/NestJS** : Meme lacune que sur PICOC 2. Tous les benchmarks locaux (HumanEval, Aider Polyglot) incluent du JavaScript mais pas specifiquement TypeScript/NestJS/Prisma en codebase existante.

**Gap 4 — Fiabilite long terme des agents locaux** : Combien de sessions agentiques de >2h un modele local complete-t-il sans degradation (hallucination outil, perte de contexte, repetition) ? Aucune etude empirique publiee sur ce point specifique.

**Gap 5 — Evolution rapide** : Qwen3-Coder-Next (fev 2026) n'existait pas il y a 6 mois. Cette decision doit etre reevaluee tous les 6 mois — l'open-weight progresse de ~13 points SWE-bench par an.
