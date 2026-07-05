# Repository instructions

## Mission

Implement the bilingual professional portfolio of Mayo T. N. Kadanga from the approved technical blueprint and Design Reference 1.0.

Before changing code, read:

1. the technical implementation blueprint;
2. the architecture decision records;
3. the design-reference rules;
4. the task explicitly assigned by the user.

Do not attempt to build the whole portfolio in one task.

## Architecture boundaries

- `apps/web` is the Next.js portfolio application.
- `apps/knowledge` contains the English and French Quarto sites.
- `packages/design-tokens` is the only source of brand tokens.
- `packages/content-schema` owns shared content validation.
- Next.js owns Home, Work, case studies, About, Experience, CV and Contact.
- Quarto owns Research, Writing and reproducible articles.
- Public routes are locale-prefixed under `/en` and `/fr`.

Do not move Research or Writing into Next.js without an approved architecture decision.

## Design rules

- Treat `Mayo Kadanga Portfolio_new.dc.html` as a visual and UX reference only.
- Do not copy its state routing, inline styles, hardcoded bilingual strings or internal prototype pages.
- Preserve the Editorial Intelligence direction.
- Preserve the typography roles: Hanken Grotesk, Source Serif 4 and IBM Plex Mono.
- Preserve the warm paper, graphite and burnt-orange direction.
- Do not add heavy 3D, glassmorphism, fake terminals, particle effects or decorative dashboards.
- Do not use em dashes in public-facing prose.

## Content integrity

- Never invent dates, employers, institutions, metrics, publications, collaborators, impacts or research results.
- Keep unresolved facts and assets as explicit placeholders.
- Never commit raw confidential data.
- Every public project must declare a confidentiality status.
- Do not expose `internal-only` content in public builds.
- Distinguish Mayo's personal contribution from team, institutional or source-study contributions.

## Engineering rules

- Use TypeScript strict mode.
- Prefer server components; use client components only for actual browser interaction.
- Use semantic links for navigation.
- Keep long content outside React components.
- Use typed dictionaries for interface text.
- Use locale-specific MDX or QMD for long-form content.
- Use shared semantic design tokens instead of hardcoded brand values.
- Ask before adding a new production dependency.
- Do not weaken lint, type, test, security or accessibility checks to make a task pass.
- Do not edit generated files by hand when a generator exists.

## Accessibility and quality

For every UI change, consider semantic landmarks, keyboard access, visible focus, reduced motion, contrast, localized accessible names, responsive behavior and mobile target sizes.

Run the checks relevant to the changed scope. Report actual results, never assumed results.

## Git safety

- Do not commit, push, force-push, rebase, reset, delete branches or modify remotes unless the user explicitly asks.
- Do not discard existing user changes.
- Keep changes scoped to the assigned task.
- Propose a Conventional Commit message, but do not execute it without permission.

## Final response format

End each task with:

1. Summary
2. Files changed
3. Commands run
4. Validation results
5. Remaining risks or decisions
6. Suggested commit message
