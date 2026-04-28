# Phase 1.2 — Commissioning : domaine `agent-runtime`

**Protocole** : `methodology.md` v3.0, section 1.2 (Kitchenham & Charters 2007 §5.2, Commissioning a review)
**Date** : 2026-04-28
**Lien DARE** : [`verification/dare/agent-runtime-dare.md`](../dare/agent-runtime-dare.md)

---

## 1. Rationale — Pourquoi cette question ?

Le guide EBSE a ete concu pour externaliser les decisions techniques dans des fichiers JSON structures, consommes par un agent de developpement autonome. La question `agent-runtime` est **meta** : elle porte sur le runtime qui fait tourner l'agent qui consomme le guide.

Cette question n'est couverte par aucune case de la matrice ISO 25010 x SWEBOK existante dans le guide — c'est une decision d'infrastructure de l'agent, pas une decision d'engineering logicielle classique. Elle est cependant generee par l'intersection suivante :

---

## 2. Lien avec la matrice ISO 25010 x SWEBOK

### Case generatrice principale

| Dimension | Valeur |
|-----------|--------|
| **ISO/IEC 25010:2023 — sous-caracteristique** | **Flexibility > Adaptability** (le systeme peut-il etre adapte a differents contextes d'utilisation ?) et **Flexibility > Replaceability** (le composant peut-il etre remplace par un autre ?) |
| **SWEBOK v4 — Knowledge Area** | **Software Engineering Process** (KA 10), sous-topic : AI-assisted software processes, agent-based automation |
| **Case** | `[Adaptability + Replaceability] x [AI-assisted software processes]` |
| **Verdict** | OUI — genere une decision : quelle architecture de runtime pour un agent IA dans un processus SE automatise ? |

### Cases secondaires

| ISO sous-caracteristique | SWEBOK sous-topic | Pertinence |
|--------------------------|-------------------|------------|
| **Maintainability > Modifiability** | Software Engineering Process > Automation | Jusqu'a quel point peut-on modifier le comportement de l'agent sans changer le runtime ? |
| **Reliability > Fault tolerance** | SE Operations > Incident response | Le runtime resiste-t-il aux pannes de l'agent (boucles infinies, max_turns) ? |
| **Security > Accountability** | SE Management > Audit trails | Le runtime produit-il des traces d'audit exploitables ? |
| **Performance Efficiency > Resource utilization** | Computing Foundations > Resource management | Le runtime est-il efficient en tokens / appels API ? |

---

## 3. Scope de la review

### 3.1 — Ce qui EST dans le scope

- Architectures de runtime pour agents de coding IA autonomes
- Comparaison CLI + hooks vs SDK vs Custom vs Hybride
- Criteres de choix : mécanisation, portabilité, contrôle, conformite EBSE, cout d'adoption
- Contexte : equipe solo/petite (1-5 personnes), supervision PO minimale, guide EBSE externalisé
- Frameworks couverts : Claude Code CLI, Claude Agent SDK, OpenAI Agents SDK, AWS Strands, Google ADK, LangGraph, LiteLLM-based custom, OpenHands

### 3.2 — Ce qui N'EST PAS dans le scope

- Evaluation des capacites du modele LLM sous-jacent (Claude 4 vs GPT-4o vs Gemini)
- Comparaison des interfaces utilisateur (Claude Code desktop app vs VS Code extension)
- Evaluation des plateformes cloud (Bedrock vs Vertex AI vs Azure AI Foundry) pour l'inference
- Architectures multi-agents de type agent-a-agent (couverts dans le domaine `ai-collaboration`)
- Frameworks de workflow generaux non orientes coding (n8n, Zapier, etc.)

---

## 4. Equipe de recherche

Conformement a `methodology.md` section 1.2 :

| Role | Identifiant | Responsabilite |
|------|-------------|----------------|
| **Reviewer A** | Agent IA (claude-sonnet-4-6, session 2026-04-28) | Recherche, screening, extraction initiale |
| **Reviewer B** | Agent IA (contexte isole — session separee recommandee) | Double extraction independante — *a planifier pour Phase 2.3* |
| **Agent C verificateur** | Agent IA (contexte isole) | Verification URL et contenu des sources — *a planifier pour Phase 2.4* |
| **Superviseur humain** | Gabriel (Product Owner) | Resolution des divergences, approbation du protocole, gate vers main |

**Note** : pour la Phase 1 (Planning), Reviewer A seul produit les documents. Le double screening (Phase 2.2) et la double extraction (Phase 2.4) seront executes par Reviewer B et Agent C dans des sessions separees avant la synthese finale.

---

## 5. Timeline

| Phase | Livrable | Echeance estimee |
|-------|----------|------------------|
| Phase 1.1 DARE | `dare/agent-runtime-dare.md` | 2026-04-28 (complete) |
| Phase 1.2 Commissioning | `commissioning/agent-runtime-scope.md` | 2026-04-28 (complete) |
| Phase 1.3 PICOC + alternatives | `picoc/agent-runtime-picoc.md` | 2026-04-28 |
| Phase 1.4 Criteres | Integre dans picoc.md | 2026-04-28 |
| Phase 2.1 PRISMA search | `prisma/agent-runtime-prisma.md` | 2026-04-28 |
| Phase 2.2 Selection | Double screening (Reviewer B) | A planifier |
| Phase 2.3 Quality assessment | Grilles risque de biais | A planifier |
| Phase 2.4 Data extraction | Formulaires d'extraction | A planifier |
| Phase 2.5 Synthesis | Recommandation JSON | A planifier |

---

## 6. Ressources disponibles

| Ressource | Disponibilite |
|-----------|---------------|
| Acces WebSearch | Disponible (session courante) |
| Acces docs officielles (Anthropic, OpenAI, AWS, Google) | Disponible via WebFetch |
| Acces arXiv | Disponible |
| Acces IEEE Xplore / ACM DL | Non disponible directement (paywall) — proxy WebSearch |
| Acces npm registry | Disponible |
| Acces GitHub | Disponible |

---

## 7. Parties prenantes

| Partie prenante | Role | Interet dans les resultats |
|-----------------|------|-----------------------------|
| **Gabriel (PO)** | Commanditaire, superviseur | Choisir le bon runtime pour le scaffold EBSE d'OLS — impact sur l'autonomie de l'agent et la maintenabilite |
| **Utilisateurs du guide EBSE** | Beneficiaires indirects | Les recommandations s'appliquent a tout projet utilisant le guide EBSE |
| **Communaute open-source** | Beneficiaires indirects | La decision sera documentee dans le guide EBSE public |

---

## 8. Contraintes documentees

1. **Contrainte RAM** : le guide EBSE tourne sur un VPS 8 GB (OLS). Les runtimes necessitant des containers lourds (Docker-in-Docker, sandbox VM complete) ont un cout infrastructure non negligeable a documenter.

2. **Contrainte mono-modele** : le guide EBSE utilise Claude (Anthropic) exclusivement. La portabilite vers d'autres LLM est un critere secondaire (nice-to-have, pas bloquant).

3. **Contrainte intégration hooks** : les hooks `SessionStart`, `PreToolUse`, `PostToolUse`, `Stop` du scaffold OLS actuel (`settings.json`) sont implementes via Claude Code CLI. La migration vers un autre runtime devrait preserver ces points d'extension.

4. **Contrainte audit trail** : le scaffold EBSE a des regles d'audit obligatoires (PICOC #17 — Co-Authored-By, audit.log). Le runtime doit supporter la tracabilite.

---

## 9. Standards de niveau 1 pertinents a investiguer

Conformement a `methodology.md` section 1.2 (scope niveau 3 — operationnalisation), les standards suivants sont candidats :

| Standard | Pertinence |
|----------|-----------|
| **ISO/IEC 5338:2023** (AI life cycle) | Gouverne le cycle de vie des systemes IA — applicable au runtime |
| **ISO/IEC 42001:2023** (AI management) | §8 Operation controls — applicable aux permissions et gates du runtime |
| **NIST AI RMF 1.0** (AI Risk Management Framework) | MANAGE-2.3 — applicable aux garde-fous du runtime |
| **OpenAPI/MCP spec** | Protocole d'extension des outils — applicable a la comparaison portabilite |

Ces standards seront recherches en Phase 2.1 pour determiner leurs mentions explicites des architectures de runtime.
