# Session Replay

**[CHOIX D'EQUIPE]** PostHog recordings si deja PostHog, Hotjar pour UX pure. Sampler 10-20% | Score GRADE : 2/7

## Comparaison

| Critere | PostHog Recordings | Hotjar |
|---------|-------------------|--------|
| Integration | Native si PostHog deja en place | Standalone, simple |
| Focus | Product analytics + replay | UX research (heatmaps + replay) |
| Prix | Inclus dans PostHog | Gratuit (limites) / payant |

## Regles RGPD

| Regle | Raison |
|-------|--------|
| Masquer tous les inputs (emails, mots de passe) | Donnees personnelles — RGPD art. 5 |
| Consentement explicite avant enregistrement | RGPD art. 6 — base legale |
| Sampler 10-20% des sessions max | Minimisation des donnees — RGPD art. 5 |
| Retention limitee (30-90 jours) | Limitation de conservation — RGPD art. 5 |

## Quand utiliser

- **Debugging UX** : comprendre ou les utilisateurs bloquent
- **Validation feature** : verifier qu'une feature est utilisee comme prevu
- **Pas pour** : surveillance, metriques de performance (utiliser APM)

Sources : PostHog session replay docs (niv. 5), Hotjar docs (niv. 5), RGPD/CNIL (niv. 5)
