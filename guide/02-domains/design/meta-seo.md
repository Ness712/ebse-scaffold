# Meta tags et SEO

**[BONNE PRATIQUE]** OpenGraph, HTML semantique, donnees structurees | Score GRADE : 3/7

## Meta tags essentiels

```tsx
// React — react-helmet-async
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Bacteriologie — Exercices | OLS</title>
  <meta name="description" content="Exercices interactifs de bacteriologie" />
  <meta property="og:title" content="Bacteriologie — Exercices" />
  <meta property="og:description" content="Exercices interactifs de bacteriologie" />
  <meta property="og:image" content="https://odinlascience.fr/og-bacterio.png" />
  <meta property="og:type" content="website" />
</Helmet>
```

## HTML semantique

```html
<!-- Bon : structure semantique -->
<header><nav>...</nav></header>
<main>
  <article>
    <h1>Titre principal (1 seul par page)</h1>
    <section><h2>Sous-section</h2></section>
  </article>
</main>
<footer>...</footer>

<!-- Mauvais : div soup -->
<div class="header"><div class="nav">...</div></div>
```

## Donnees structurees (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bacteriologie",
  "provider": { "@type": "Organization", "name": "Odin La Science" }
}
</script>
```

Sources : Google Search Central — SEO starter guide (niv. 3), schema.org — Course type (niv. 2), MDN — HTML semantics (niv. 3), OpenGraph protocol — og:tags (niv. 3)
