# Route and Content Matrix

## Public routes

| Route | Engine | Source | Rendering | Locale |
|---|---|---|---|---|
| `/` | Next.js | redirect | redirect | neutral |
| `/en` | Next.js | page + dictionary | static | EN |
| `/fr` | Next.js | page + dictionary | static | FR |
| `/[locale]/work` | Next.js | project registry | static | EN/FR |
| `/[locale]/work/[slug]` | Next.js | MDX + registry | static | EN/FR |
| `/[locale]/about` | Next.js | profile registry | static | EN/FR |
| `/[locale]/experience` | Next.js | experience registry | static | EN/FR |
| `/[locale]/cv` | Next.js | CV registry | static | EN/FR |
| `/[locale]/contact` | Next.js | page + server action later | hybrid | EN/FR |
| `/en/research` | Quarto | EN `.qmd` | static | EN |
| `/fr/research` | Quarto | FR `.qmd` | static | FR |
| `/en/writing` | Quarto | EN `.qmd` | static | EN |
| `/fr/writing` | Quarto | FR `.qmd` | static | FR |
| `/[locale]/privacy` | Next.js | MDX | static | EN/FR |
| `/sitemap.xml` | Next.js | generated + Quarto manifest | generated | all |
| `/robots.txt` | Next.js | generated | static | neutral |

## Internal-only design routes

The positioning review, portrait placement review, interaction storyboard, content-gap register and design changelog are not public routes. They belong in `docs/design-reference/` or a development-only component environment.

## Locale equivalence map

```ts
const routeMap = {
  home: { en: "/en", fr: "/fr" },
  work: { en: "/en/work", fr: "/fr/work" },
  about: { en: "/en/about", fr: "/fr/about" },
  experience: { en: "/en/experience", fr: "/fr/experience" },
  cv: { en: "/en/cv", fr: "/fr/cv" },
  contact: { en: "/en/contact", fr: "/fr/contact" },
  research: { en: "/en/research", fr: "/fr/research" },
  writing: { en: "/en/writing", fr: "/fr/writing" }
} as const;
```

## Content ownership

| Content | Source of truth |
|---|---|
| Name and professional links | profile registry |
| Interface labels | locale dictionary |
| Project metadata | project registry |
| Case-study narrative | locale MDX file |
| Experience | experience registry |
| Education and certifications | profile registry |
| CV PDF paths | asset registry |
| Research metadata | Quarto front matter |
| Research prose and code | Quarto `.qmd` |
| Colors and spacing | token JSON |
| Navigation structure | shared route registry |
