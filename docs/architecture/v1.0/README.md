# Mayo Portfolio - Technical Implementation Pack

Version: 1.0
Status: Approved implementation blueprint
Design reference: `Mayo Kadanga Portfolio_new.dc.html`
Architecture: Next.js + Quarto
Primary language: English
Secondary language: French
Repository visibility: Public

## Purpose

This pack translates the validated Claude Design V3 prototype into an implementable, maintainable and testable architecture.

The prototype is a visual and functional reference. It must not be copied mechanically into production. Production code will use proper routes, semantic links, reusable components, typed content, shared design tokens, automated tests and separate Next.js and Quarto build pipelines.

## Key decisions

- One public monorepo managed with pnpm workspaces.
- Node.js 24 LTS for the initial implementation.
- Next.js App Router with TypeScript strict mode.
- Tailwind CSS plus shared CSS custom properties.
- English and French routes under `/en` and `/fr`.
- English is the default public language.
- Next.js manages the portfolio experience.
- Quarto manages Research and Writing.
- Research and Writing are published as static Quarto sites and exposed under the main domain through rewrites.
- Design tokens are generated from one JSON source into CSS and SCSS.
- Case studies use structured metadata plus MDX narrative content.
- Research and writing use `.qmd` source files.
- The portrait is used primarily on the About page.
- Internal design-review routes are excluded from production.

## Pack contents

| File | Purpose |
|---|---|
| `01_TECHNICAL_IMPLEMENTATION_BLUEPRINT.md` | Complete architecture and implementation strategy |
| `02_ARCHITECTURE_DECISION_RECORDS.md` | Confirmed technical decisions and trade-offs |
| `03_ROUTE_CONTENT_MATRIX.md` | Routes, ownership, locale and content source |
| `04_SPRINT_1_BACKLOG.md` | First implementation sprint |
| `05_REPOSITORY_CONVENTIONS.md` | Git, branches, commits, naming and quality rules |
| `06_ACCEPTANCE_CHECKLIST.md` | Design-freeze and Sprint 1 quality gates |
| `schemas/content.ts` | Draft TypeScript/Zod content schemas |
| `tokens/tokens.json` | Single source of truth for design tokens |
| `tokens/build-tokens.mjs` | Draft token generator |
| `config/*` | Workspace, Next.js, Quarto and CI drafts |
| `docs/INITIALIZATION_COMMANDS.md` | Manual project initialization sequence |
| `docs/DESIGN_REFERENCE.md` | Rules for interpreting the V3 prototype |

## Immediate next action

Review the blueprint, then initialize the repository manually using `docs/INITIALIZATION_COMMANDS.md`.

The first coding objective is not the homepage. It is a working monorepo with:

- Next.js running;
- two locale routes;
- generated design tokens;
- Quarto English and French sample builds;
- shared header/footer specifications;
- CI checks;
- one external rewrite proof of concept.
