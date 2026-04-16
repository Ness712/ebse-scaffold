# Reponse aux incidents

**[BONNE PRATIQUE]** Runbooks, postmortems, culture blameless | Score GRADE : 3/7

## Processus

```
Alerte declenchee (GlitchTip / Grafana)
├── 1. Identifier — Quel service ? Quel impact ?
├── 2. Contenir — Rollback, feature flag off, scale up
├── 3. Resoudre — Fix + deploy
├── 4. Communiquer — Status page, equipe informee
└── 5. Postmortem — Dans les 48h, blameless
```

## Template runbook (par alerte)

```markdown
# Runbook : API response time > 2s
## Symptomes : alertes Grafana, erreurs 504
## Diagnostic :
1. Verifier /actuator/health
2. Verifier les logs : docker logs app --tail 100
3. Verifier CPU/RAM : Grafana dashboard
4. Verifier les connexions DB : pg_stat_activity
## Actions :
- Si DB lente → EXPLAIN les requetes recentes
- Si memoire → restart + investiguer leak
- Si pic de trafic → scale replicas
```

## Template postmortem

```markdown
# Postmortem — [Date] [Titre]
## Impact : X utilisateurs, Y minutes d'indisponibilite
## Chronologie : detection → containment → resolution
## Cause racine : [description technique]
## Actions correctives : [liste avec responsable et deadline]
## Lecons apprises : [ce qu'on ameliore dans le process]
```

Sources : Google SRE Book ch.15 — postmortem culture (niv. 5), PagerDuty Incident Response guide (niv. 3), Etsy "blameless postmortems" (niv. 4)
