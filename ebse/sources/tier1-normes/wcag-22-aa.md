# WCAG 2.2 AA — Critères de succès (Audit Source)

**Source** : Web Content Accessibility Guidelines 2.2
**Version** : 2.2 (W3C Recommendation, octobre 2023)
**Applicable si** : tout projet avec interface utilisateur publique
**Usage** : vérifier chaque critère AA contre l'interface lors d'un audit dimension Accessibilité

---

## Principe 1 — Perceptible

### 1.1 Alternatives textuelles

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 1.1.1 | Contenu non textuel : alternative textuelle pour images, graphiques, boutons icône | A | ⬜ | |

### 1.2 Médias temporels

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 1.2.1 | Contenu audio/vidéo seul pré-enregistré : alternative ou transcription | A | ⬜ | |
| 1.2.2 | Sous-titres pour vidéos pré-enregistrées | A | ⬜ | |
| 1.2.4 | Sous-titres pour vidéos en direct | AA | ⬜ | |
| 1.2.5 | Audiodescription pour vidéos pré-enregistrées | AA | ⬜ | |

### 1.3 Adaptable

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 1.3.1 | Information et relations : structure transmise programmatiquement (rôles ARIA, headings, listes) | A | ⬜ | |
| 1.3.2 | Séquence significative : ordre de lecture logique dans le DOM | A | ⬜ | |
| 1.3.3 | Caractéristiques sensorielles : instructions pas uniquement basées sur couleur/forme/position | A | ⬜ | |
| 1.3.4 | Orientation : contenu pas restreint à une orientation d'écran | AA | ⬜ | |
| 1.3.5 | Identification de l'objectif des champs : autocomplete sur champs identité | AA | ⬜ | |

### 1.4 Distinguable

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 1.4.1 | Utilisation de la couleur : couleur pas seul vecteur d'information | A | ⬜ | |
| 1.4.2 | Contrôle du son : son auto-démarré stoppable | A | ⬜ | |
| 1.4.3 | Contraste (minimum) : ratio 4.5:1 pour texte normal, 3:1 pour grand texte | AA | ⬜ | |
| 1.4.4 | Redimensionnement du texte : 200% sans perte de contenu | AA | ⬜ | |
| 1.4.5 | Texte sous forme d'image : texte réel préféré aux images de texte | AA | ⬜ | |
| 1.4.10 | Reflow : contenu lisible à 320px sans scroll horizontal | AA | ⬜ | |
| 1.4.11 | Contraste des composants non textuels : ratio 3:1 pour UI et graphiques | AA | ⬜ | |
| 1.4.12 | Espacement du texte : ajustable sans perte de contenu | AA | ⬜ | |
| 1.4.13 | Contenu au survol ou au focus : dismissable, hoverable, persistent | AA | ⬜ | |

---

## Principe 2 — Utilisable

### 2.1 Accessible au clavier

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 2.1.1 | Clavier : toutes les fonctionnalités accessibles au clavier | A | ⬜ | |
| 2.1.2 | Pas de piège clavier : focus libérable au clavier | A | ⬜ | |
| 2.1.4 | Raccourcis clavier d'un seul caractère : désactivables ou remappables | A | ⬜ | |

### 2.2 Délai suffisant

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 2.2.1 | Délai ajustable : temporisation extensible (×10 minimum) | A | ⬜ | |
| 2.2.2 | Pause, arrêt, masquage : contrôle des contenus animés | A | ⬜ | |

### 2.3 Convulsions et réactions physiques

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 2.3.1 | Pas plus de 3 flashes par seconde | A | ⬜ | |

### 2.4 Navigable

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 2.4.1 | Contournement de blocs : lien d'évitement (skip to main) | A | ⬜ | |
| 2.4.2 | Titre de page : titre descriptif unique par page | A | ⬜ | |
| 2.4.3 | Ordre de focus : ordre de tabulation logique | A | ⬜ | |
| 2.4.4 | Objet du lien en contexte : texte du lien compréhensible | A | ⬜ | |
| 2.4.5 | Accès multiple : plusieurs moyens d'accéder à une page | AA | ⬜ | |
| 2.4.6 | En-têtes et étiquettes : descriptifs | AA | ⬜ | |
| 2.4.7 | Visibilité du focus : indicateur de focus visible | AA | ⬜ | |
| 2.4.11 | Apparence du focus (minimum) : ratio 3:1, surface ≥ périmètre × 2 | AA | ⬜ | |

### 2.5 Modalités d'entrée

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 2.5.1 | Gestes pointeur : gestes complexes remplaçables par action simple | A | ⬜ | |
| 2.5.2 | Annulation du pointeur : action sur up-event ou annulable | A | ⬜ | |
| 2.5.3 | Étiquette dans le nom accessible : nom accessible contient l'étiquette visible | A | ⬜ | |
| 2.5.4 | Activation par mouvement : fonctionnalité désactivable | A | ⬜ | |
| 2.5.7 | Glisser : alternative au drag sans glisser | AA | ⬜ | |
| 2.5.8 | Taille de la cible (minimum) : 24×24px ou espacement compensatoire | AA | ⬜ | |

---

## Principe 3 — Compréhensible

### 3.1 Lisible

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 3.1.1 | Langue de la page : `lang` sur `<html>` | A | ⬜ | |
| 3.1.2 | Langue d'un passage : `lang` sur les passages en langue différente | AA | ⬜ | |

### 3.2 Prévisible

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 3.2.1 | Au focus : pas de changement de contexte automatique | A | ⬜ | |
| 3.2.2 | À la saisie : pas de changement de contexte automatique | A | ⬜ | |
| 3.2.3 | Navigation cohérente : navigation répétée dans le même ordre | AA | ⬜ | |
| 3.2.4 | Identification cohérente : composants identiques identifiés de façon cohérente | AA | ⬜ | |
| 3.2.6 | Navigation cohérente : même position de navigation dans le même ordre | AA | ⬜ | |

### 3.3 Assistance à la saisie

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 3.3.1 | Identification des erreurs : erreur décrite textuellement | A | ⬜ | |
| 3.3.2 | Étiquettes ou instructions : labels sur les champs de saisie | A | ⬜ | |
| 3.3.3 | Suggestion d'erreur : suggestion de correction si possible | AA | ⬜ | |
| 3.3.4 | Prévention des erreurs : vérification, possibilité d'annuler pour données juridiques/financières | AA | ⬜ | |
| 3.3.7 | Authentification accessible : pas de test cognitif obligatoire (CAPTCHA) sans alternative | AA | ⬜ | |
| 3.3.8 | Authentification accessible (minimum) : alternative si test cognitif requis | AA | ⬜ | |

---

## Principe 4 — Robuste

### 4.1 Compatible

| SC | Critère | Niveau | Vérifié | Note |
|----|---------|:------:|:-------:|------|
| 4.1.2 | Nom, rôle, valeur : composants UI avec nom/rôle/état programmatiques | A | ⬜ | |
| 4.1.3 | Messages d'état : annonces de statut programmatiques (role="status", aria-live) | AA | ⬜ | |
