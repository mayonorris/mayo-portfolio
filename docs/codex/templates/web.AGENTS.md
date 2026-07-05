# Next.js application instructions

These instructions extend the repository-level `AGENTS.md`.

## Scope

This directory implements localized Home, Work, case studies, About, Experience, online CV, Contact, theme and locale controls, portrait, analytical-readiness interaction, SEO and structured data.

Research and Writing remain Quarto responsibilities.

## Conventions

- Use the App Router.
- Use `[locale]` as the locale segment.
- Redirect `/` to `/en`.
- Support only `en` and `fr`.
- Set the real document language through localized layouts.
- Use static generation by default.
- Use the Metadata API for localized title, description, canonical and alternates.
- Keep route components thin.
- Use `next/link` for internal navigation and `next/image` for approved raster images.

## Styling

- Use Tailwind for layout and responsive behavior.
- Use generated CSS custom properties for brand and themes.
- Do not copy inline styles from the prototype.
- Avoid arbitrary values when a semantic token exists.
- Keep motion restrained and compatible with `prefers-reduced-motion`.

## Content

- Interface labels: typed locale dictionaries.
- Structured facts: validated registries.
- Long case studies: localized MDX.
- Do not place complete bilingual prose in component files.
- Preserve equivalent routes when the visitor changes language.

## Client components

Client components are permitted only for theme toggle, language preference persistence, mobile menu, contact form state, analytical-readiness interaction and necessary progressive enhancement.

## Validation

Run the relevant lint, typecheck, build, tests and accessibility checks. Never claim a check passed if it was not executed.
