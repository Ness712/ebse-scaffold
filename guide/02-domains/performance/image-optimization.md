# Optimisation des images

**[RECOMMANDE]** WebP/AVIF, lazy loading, responsive srcset | Score GRADE : 4/7

Les images representent ~50% du poids des pages web (HTTP Archive 2025).

## Implementation

```html
<!-- Lazy loading natif + responsive -->
<img
  src="photo.webp"
  srcset="photo-400.webp 400w, photo-800.webp 800w, photo-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  decoding="async"
  alt="Description accessible"
/>

<!-- Format moderne avec fallback -->
<picture>
  <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="Description" loading="lazy" />
</picture>
```

```ts
// vite.config.ts — optimisation build-time
import { imagetools } from 'vite-imagetools';
export default defineConfig({
  plugins: [react(), imagetools()],
});
```

| Format | Compression vs JPEG | Support navigateurs |
|--------|---------------------|---------------------|
| WebP | -25 a -35% | 97%+ (2026) |
| AVIF | -40 a -50% | 92%+ (2026) |

Sources : web.dev — image optimization guide (niv. 3), HTTP Archive 2025 — images = 50% page weight (niv. 4), MDN — loading="lazy" (niv. 3), Can I Use — WebP 97%, AVIF 92% (niv. 4)
