# RGPD — Checklist CNIL (Audit Source)

**Source** : CNIL — Guide pratique RGPD pour les développeurs + Articles RGPD (UE 2016/679)
**Version** : 2024
**Applicable si** : tout projet EU traitant des données personnelles
**Usage** : vérifier chaque point lors d'un audit dimension Conformité légale

---

## 1. Données collectées

| # | Point de contrôle | Article RGPD | Vérifié | Note |
|---|-------------------|:------------:|:-------:|------|
| 1.1 | Inventaire des données personnelles collectées (type, source, finalité) | Art. 30 | ⬜ | |
| 1.2 | Données minimales collectées — pas plus que nécessaire (minimisation) | Art. 5(1)(c) | ⬜ | |
| 1.3 | Données sensibles (santé, biométrie, opinions politiques) identifiées | Art. 9 | ⬜ | |
| 1.4 | Base légale définie pour chaque traitement (consentement, contrat, obligation légale, intérêt légitime) | Art. 6 | ⬜ | |
| 1.5 | Consentement explicite et séparé pour données sensibles | Art. 9(2)(a) | ⬜ | |

---

## 2. Registre des traitements (Art. 30)

| # | Point de contrôle | Article RGPD | Vérifié | Note |
|---|-------------------|:------------:|:-------:|------|
| 2.1 | Registre des activités de traitement tenu à jour | Art. 30 | ⬜ | |
| 2.2 | Registre inclut : finalités, catégories données, destinataires, durées de conservation | Art. 30(1) | ⬜ | |
| 2.3 | Durées de conservation définies et respectées pour chaque type de données | Art. 5(1)(e) | ⬜ | |
| 2.4 | Suppression automatique des données en fin de durée de conservation | Art. 5(1)(e) | ⬜ | |

---

## 3. Information et consentement

| # | Point de contrôle | Article RGPD | Vérifié | Note |
|---|-------------------|:------------:|:-------:|------|
| 3.1 | Politique de confidentialité accessible et compréhensible | Art. 13-14 | ⬜ | |
| 3.2 | Politique inclut : identité du responsable, finalités, droits, durées | Art. 13(1-2) | ⬜ | |
| 3.3 | Bandeau cookies conforme (consentement granulaire, refus aussi facile qu'acceptation) | Dir. ePrivacy + Art. 6 | ⬜ | |
| 3.4 | Consentement enregistré avec date, version de la politique, action utilisateur | Art. 7(1) | ⬜ | |
| 3.5 | Retrait du consentement aussi facile que l'octroi | Art. 7(3) | ⬜ | |

---

## 4. Droits des personnes (Art. 15-22)

| # | Point de contrôle | Article RGPD | Vérifié | Note |
|---|-------------------|:------------:|:-------:|------|
| 4.1 | Processus pour exercer le droit d'accès documenté (réponse ≤ 1 mois) | Art. 15 | ⬜ | |
| 4.2 | Processus pour le droit de rectification documenté | Art. 16 | ⬜ | |
| 4.3 | Processus pour le droit à l'effacement ("droit à l'oubli") implémenté | Art. 17 | ⬜ | |
| 4.4 | Processus pour le droit à la portabilité (export données) implémenté | Art. 20 | ⬜ | |
| 4.5 | Processus pour le droit d'opposition documenté | Art. 21 | ⬜ | |
| 4.6 | Point de contact (email ou formulaire) pour exercer les droits publié | Art. 13(2)(b) | ⬜ | |

---

## 5. Sous-traitants et transferts (Art. 28, 44-49)

| # | Point de contrôle | Article RGPD | Vérifié | Note |
|---|-------------------|:------------:|:-------:|------|
| 5.1 | Liste des sous-traitants qui traitent des données personnelles établie | Art. 28 | ⬜ | |
| 5.2 | DPA (Data Processing Agreement) signé avec chaque sous-traitant | Art. 28(3) | ⬜ | |
| 5.3 | Transferts hors UE documentés avec mécanisme adéquat (SCC, adéquation) | Art. 44-49 | ⬜ | |
| 5.4 | Hébergeur identifié comme sous-traitant dans le registre | Art. 28 + 30 | ⬜ | |

---

## 6. Sécurité technique (Art. 32)

| # | Point de contrôle | Article RGPD | Vérifié | Note |
|---|-------------------|:------------:|:-------:|------|
| 6.1 | Chiffrement des données personnelles en transit (TLS) | Art. 32(1)(a) | ⬜ | |
| 6.2 | Chiffrement ou pseudonymisation des données personnelles au repos | Art. 32(1)(a) | ⬜ | |
| 6.3 | Contrôle d'accès strict aux données personnelles (moindre privilège) | Art. 32(1)(b) | ⬜ | |
| 6.4 | Journalisation des accès aux données personnelles sensibles | Art. 32(1)(b) | ⬜ | |
| 6.5 | Procédure de notification de violation de données (≤ 72h à la CNIL) | Art. 33 | ⬜ | |
| 6.6 | Tests de sécurité réguliers | Art. 32(1)(d) | ⬜ | |

---

## 7. Gouvernance

| # | Point de contrôle | Article RGPD | Vérifié | Note |
|---|-------------------|:------------:|:-------:|------|
| 7.1 | DPO désigné si obligatoire (organisme public, traitement grande échelle, données sensibles) | Art. 37 | ⬜ | |
| 7.2 | Privacy by design appliqué dès la conception | Art. 25(1) | ⬜ | |
| 7.3 | Privacy by default : paramètres les plus protecteurs par défaut | Art. 25(2) | ⬜ | |
| 7.4 | Analyse d'impact (AIPD/DPIA) réalisée si traitement à risque élevé | Art. 35 | ⬜ | |
| 7.5 | Mentions légales publiées (éditeur, hébergeur, identité) | Loi LCEN (France) | ⬜ | |

---

## 8. Cookies et traceurs (Directive ePrivacy)

| # | Point de contrôle | Article | Vérifié | Note |
|---|-------------------|:-------:|:-------:|------|
| 8.1 | Cookies non essentiels déposés uniquement après consentement | Dir. ePrivacy Art. 5(3) | ⬜ | |
| 8.2 | Cookies essentiels (session, sécurité) exemptés de consentement et documentés | Dir. ePrivacy | ⬜ | |
| 8.3 | Liste des cookies publiée avec finalité, durée, tiers éventuels | CNIL recommandation | ⬜ | |
| 8.4 | Consentement cookies distinct du consentement CGU/compte | Art. 7 RGPD | ⬜ | |
