# Strategie web mobile

## Arbre de decision

```
Ton app web doit fonctionner sur mobile ?
├── Non → responsive design suffit (deja couvert)
├── Oui, acces mobile leger (navigateur) → PWA [RECOMMANDE] 6/7
├── Oui, app store obligatoire → Capacitor [RECOMMANDE] 5/7
└── Oui, mobile = plateforme principale → React Native [BONNE PRATIQUE] 3/7
```

## PWA (Progressive Web App)

**[RECOMMANDE]** PWA pour acces mobile depuis une web app existante | Score GRADE : 6/7

Ajouter un service worker + manifest a l'app React existante. Zero nouvelle codebase.

```bash
pnpm add -D vite-plugin-pwa
```

```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Mon App',
      short_name: 'App',
      theme_color: '#2563eb',
      icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }]
    }
  })]
});
```

| Capacite | Support |
|----------|---------|
| Installation (home screen) | 97%+ navigateurs (Can I Use) |
| Offline | Service Worker (97%+) |
| Push notifications | iOS 16.4+, Android, Chrome |
| App Store | Possible via PWABuilder |

Sources : web.dev PWA docs (niv. 3), Can I Use service worker 97% (niv. 4), vite-plugin-pwa 3M+ dl/sem (niv. 4)

## Capacitor (si app store obligatoire)

**[RECOMMANDE]** Capacitor pour wrapper l'app web en natif | Score GRADE : 5/7

Reutilise 95%+ du code existant. Ajoute un shell natif pour l'app store + acces APIs natives.

```bash
pnpm add @capacitor/core @capacitor/cli
npx cap init
npx cap add android
npx cap add ios
```

Quand utiliser : app store obligatoire OU besoin d'APIs natives (camera, filesystem, push natif).

Sources : Capacitor docs (niv. 3), Ionic blog comparaisons (niv. 5), SO Survey ~5% adoption mobile (niv. 4)

## React Native (si mobile = plateforme principale)

**[BONNE PRATIQUE]** React Native uniquement si mobile est la plateforme principale | Score GRADE : 3/7

Necessite une **codebase separee**. Les composants React web ne sont PAS reutilisables. Cout de dev et maintenance eleve (2 codebases).

Quand utiliser : app mobile-first avec animations complexes, gestures lourdes, performance native critique.

Sources : reactnative.dev docs (niv. 3), State of JS 2024 — haute satisfaction mais haute complexite (niv. 4)

## Strategie recommandee

```
Phase 1 : Responsive design (fait)
Phase 2 : PWA (ajouter service worker + manifest) → mobile leger
Phase 3 : Capacitor (si app store requis) → wrapper le PWA
Phase 4 : React Native (seulement si mobile devient la plateforme principale)
```

Chaque phase s'ajoute a la precedente sans rework.
