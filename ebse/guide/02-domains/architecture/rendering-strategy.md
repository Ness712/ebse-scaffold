# Strategie de rendu

**[RECOMMANDE]** CSR par defaut (Vite), SSR uniquement si SEO critique | Score GRADE : 4/7

## Arbre de decision

```
Application web ?
├── SPA avec API backend (Spring Boot) ?
│   └── OUI → CSR (Vite, defaut React)
│             Zero config, HMR rapide, deploy static
├── SEO critique (blog, landing, e-commerce public) ?
│   └── OUI → SSR (Next.js) ou SSG (Astro)
├── Pages 100% statiques (docs, marketing) ?
│   └── OUI → SSG (Astro, Vite static build)
└── Hybride (dashboard + pages publiques) ?
    └── CSR pour le dashboard, SSG pour les pages publiques
```

## Config Vite (CSR par defaut)

```ts
// vite.config.ts — SPA classique, zero config SSR
export default defineConfig({
  plugins: [react()],
  build: { target: 'es2022' },
});
```

| Strategie | TTFB | SEO | Complexite | Cas d'usage |
|-----------|------|-----|------------|-------------|
| CSR | Rapide | Faible (SPA) | Minimale | Dashboards, apps authentifiees |
| SSR | Moyen | Excellent | Elevee (serveur Node) | E-commerce, contenu public |
| SSG | Tres rapide | Excellent | Faible | Docs, blogs, landing pages |

Sources : Vite docs — SPA mode par defaut (niv. 3), web.dev Core Web Vitals — LCP/FCP metrics (niv. 3), Next.js docs — SSR/SSG tradeoffs (niv. 3), Google Search Central — SPA indexing (niv. 3)
