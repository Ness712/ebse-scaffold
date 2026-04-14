# Typographie

## Recommandations

### Taille du body text

**[STANDARD]** Body text : **16px** | Score GRADE : 6/7

C'est le minimum recommande par ISO 9241-125 et le consensus de toutes les sources.
Ne jamais descendre en dessous de 14px pour du texte de contenu.

### Line height

**[STANDARD]** Line-height : **1.5** | Score GRADE : 6/7

| Usage | Line-height |
|-------|-------------|
| Body text | 1.5 |
| Headings | 1.2 - 1.3 |
| UI labels / boutons | 1.2 |

### Largeur de ligne

**[STANDARD]** Maximum **75 caracteres** par ligne | Score GRADE : 6/7

```css
.content {
  max-width: 65ch; /* ~65-75 caracteres selon la police */
}
```

### Echelle typographique

**[RECOMMANDE]** Ratio 1.25 (major third) ou 1.333 (perfect fourth) | Score GRADE : 3/7

| Role | Taille (ratio 1.25) | Taille (ratio 1.333) |
|------|--------------------|--------------------|
| Small / Caption | 12px | 12px |
| Body | 16px | 16px |
| H4 | 20px | 21px |
| H3 | 25px | 28px |
| H2 | 31px | 38px |
| H1 | 39px | 50px |

### Nombre de polices

**[RECOMMANDE]** Maximum **2 familles** de polices | Score GRADE : 3/7

1 pour les titres, 1 pour le body (ou 1 seule pour tout).

### Sources

- ISO 9241-125:2017 — taille minimum, line-height, longueur de ligne
- WCAG 2.2 criterion 1.4.8 (AAA) — line-height >= 1.5, max 80 chars
- Material Design 3 — Body Large 16sp, line-height 1.5
- Apple HIG — Body 17pt
- Web Almanac 2024 — median 16px, line-height 1.5 (8M sites)
- Nielsen Norman Group — line-height 1.4-1.65
- Ling & Van Schaik 2006 — 50-75 chars optimal (peer-reviewed)

> Justification complete : [case-2-user-engagement-design.md](../../../cases/case-2-user-engagement-design.md)
