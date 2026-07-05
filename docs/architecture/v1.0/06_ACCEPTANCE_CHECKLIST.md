# Acceptance Checklist

## Design reference

- [ ] V3 prototype is archived as Design Reference 1.0.
- [ ] Production does not mechanically copy prototype state navigation.
- [ ] Editorial Intelligence direction is preserved.
- [ ] Internal review pages are excluded from production.

## Repository

- [ ] Repository is public.
- [ ] Root README is complete.
- [ ] Node is pinned.
- [ ] pnpm is pinned.
- [ ] Lockfile is committed.
- [ ] No secrets are committed.
- [ ] No raw confidential data is committed.

## Next.js foundation

- [ ] App Router is used.
- [ ] TypeScript strict mode passes.
- [ ] Tailwind is configured.
- [ ] `/` redirects to `/en`.
- [ ] `/en` and `/fr` render.
- [ ] HTML language is correct.
- [ ] Unsupported locale returns 404.
- [ ] Metadata is localized.
- [ ] Navigation uses links, not generic buttons.

## Tokens

- [ ] JSON is the source of truth.
- [ ] CSS output is generated.
- [ ] SCSS output is generated.
- [ ] Light theme matches V3.
- [ ] Dark theme matches V3.
- [ ] Token generation is deterministic.

## Quarto

- [ ] English project renders.
- [ ] French project renders.
- [ ] Shared SCSS is imported.
- [ ] Search is language-specific.
- [ ] No false publication claim appears.
- [ ] Execution policy is documented.
- [ ] Frozen output strategy is documented.

## Hybrid integration

- [ ] `QUARTO_ORIGIN` is documented.
- [ ] English Research rewrite works.
- [ ] French Research rewrite works.
- [ ] English Writing rewrite works.
- [ ] French Writing rewrite works.
- [ ] Assets resolve under rewritten paths.
- [ ] Browser URL remains on primary domain.
- [ ] Next.js and Quarto headers are visually coherent.

## Content system

- [ ] Project schema exists.
- [ ] Experience schema exists.
- [ ] Education schema exists.
- [ ] Confidentiality schema exists.
- [ ] Invalid content fails validation.
- [ ] Long prose is outside UI components.
- [ ] English and French case-study files are mapped.

## Quality

- [ ] Lint passes.
- [ ] Typecheck passes.
- [ ] Next.js build passes.
- [ ] Quarto EN render passes.
- [ ] Quarto FR render passes.
- [ ] Reduced-motion foundation exists.
- [ ] Skip link exists.
- [ ] Focus styles exist.
- [ ] Core colors pass contrast review.

## Sprint 1 final gate

- [ ] Architecture documentation matches implementation.
- [ ] No unnecessary visual page was built early.
- [ ] The next sprint can focus exclusively on the global shell.
