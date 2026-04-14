# Analytics

**[CHOIX D'EQUIPE]** PostHog (self-hosted, GDPR, events+funnels) ou Plausible (privacy-first, simple) | Score GRADE : 2/7

## Comparaison

| Critere | PostHog | Plausible |
|---------|---------|-----------|
| Hosting | Self-hosted ou cloud | Self-hosted ou cloud |
| RGPD | Conforme (self-hosted) | Conforme par design |
| Features | Events, funnels, cohorts, recordings | Page views, referrers, goals |
| Complexite | Moyenne (setup + infra) | Faible (plug and play) |

## Metriques essentielles

1. **Page views** — quelles pages sont visitees
2. **Feature usage** — quelles fonctionnalites sont utilisees (events custom)
3. **Conversion funnel** — inscription → activation → retention
4. **Bounce rate** — pages a probleme

## Regles

| Regle | Source |
|-------|--------|
| Consentement explicite requis (RGPD) | CNIL guidelines |
| Preferer le self-hosted pour les donnees sensibles | RGPD art. 28 — sous-traitance |
| Tracker les actions, pas juste les pages | PostHog docs — product analytics |

Sources : PostHog docs (niv. 5), Plausible docs (niv. 5), CNIL guidelines analytics (niv. 5)
