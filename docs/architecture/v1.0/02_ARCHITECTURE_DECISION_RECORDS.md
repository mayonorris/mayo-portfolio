# Architecture Decision Records

## ADR-001 - Public monorepo

Status: Accepted

Use one public GitHub repository named `mayo-portfolio` with pnpm workspaces.

Reasons: one visible engineering history, shared tokens and schemas, coordinated pull requests, and avoidance of fragmented repositories during Version 1.

## ADR-002 - Next.js App Router

Status: Accepted

Use the Next.js App Router with TypeScript strict mode.

Reasons: file-system routing, nested layouts, static generation, localized layouts, Metadata API, server components and dynamic case-study routes.

## ADR-003 - Always-prefixed locales

Status: Accepted

Use `/en` and `/fr` for all public pages. Redirect `/` to `/en`.

Reasons: deterministic URLs, explicit SEO alternates, clean language switching and easier Next.js plus Quarto alignment.

## ADR-004 - Native locale routing and dictionaries

Status: Accepted for Version 1

Use the App Router `[locale]` segment, typed dictionaries and route mapping. Do not add an internationalization framework initially.

Revisit when translation volume, localized slugs or formatting rules become substantially more complex.

## ADR-005 - MDX for professional case studies

Status: Accepted

Use MDX with validated front matter for long Next.js case studies.

## ADR-006 - Quarto for Research and Writing

Status: Accepted

Use Quarto for formal research, technical notes and reproducible analysis.

## ADR-007 - Two localized Quarto subprojects

Status: Accepted

Use `apps/knowledge/en` and `apps/knowledge/fr` to keep navigation, search and article availability language-specific.

## ADR-008 - Shared JSON design tokens

Status: Accepted

Use one JSON token source and generate CSS plus SCSS.

## ADR-009 - Tailwind CSS plus CSS variables

Status: Accepted

Use Tailwind for structure and responsive utilities, with CSS variables for brand and theme values.

## ADR-010 - Restrained motion

Status: Accepted

Use CSS transitions and a lightweight React motion library only where necessary. Do not introduce GSAP, Three.js or React Three Fiber in Sprint 1.

## ADR-011 - Static Quarto origin plus Vercel rewrites

Status: Accepted for Version 1

Publish Quarto as static output and expose it through Vercel rewrites.

## ADR-012 - Portrait on About, not hero

Status: Accepted

Use the main profile portrait on the About page. Preserve the analytical interaction as the hero visual.

## ADR-013 - Qualitative analytical readiness

Status: Accepted

The signature interaction uses qualitative stages rather than invented statistical confidence or empirical effects.

## ADR-014 - Static generation first

Status: Accepted

Statically generate the portfolio wherever possible and isolate client-side behavior.

## ADR-015 - Public content safety

Status: Accepted

Every project has a confidentiality status:

- `public`
- `anonymized`
- `limited`
- `internal-only`

Internal-only content must fail the public build if referenced by a public page.
