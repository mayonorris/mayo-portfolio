# Design Reference 1.0

Reference file: `Mayo Kadanga Portfolio_new.dc.html`

## Interpretation rule

The Claude Design file defines visual hierarchy, page families, color direction, typography, spacing rhythm, interaction intent, responsive intent, bilingual intent, case-study structure and portrait placement.

It does not define production architecture.

## Do not copy directly

Do not copy state-based route simulation, navigation buttons used as links, large inline style blocks, hardcoded bilingual strings, internal design-review routes, prototype form simulation, placeholder article claims or synthetic figures presented as real evidence.

## Preserve

Preserve:

- Editorial Intelligence direction;
- Hanken Grotesk, Source Serif 4 and IBM Plex Mono roles;
- warm paper, graphite and burnt-orange palette;
- restrained dark theme;
- analytical hero;
- selected-work hierarchy;
- separate Research and Writing;
- detailed case-study framework;
- About-page portrait placement;
- qualitative analytical readiness;
- mobile menu composition.

## Production mapping

| Prototype element | Production implementation |
|---|---|
| route state | Next.js route or Quarto static route |
| inline dictionaries | typed locale files |
| inline project arrays | validated project registry |
| inline styles | Tailwind plus shared tokens |
| simulated article | real `.qmd` |
| simulated downloads | verified public assets |
| monogram portrait | optimized real image |
| internal footer links | documentation only |
