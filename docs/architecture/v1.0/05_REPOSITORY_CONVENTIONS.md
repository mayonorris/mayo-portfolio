# Repository Conventions

## Public-development principle

The repository is public. Every commit may be reviewed by recruiters, collaborators and technical peers.

Commit history should show clear progression, meaningful decisions, small coherent changes, working builds and professional documentation.

Avoid generated noise, secret files, raw data, large unexplained commits and messages such as `update`, `fix stuff` or `final`.

## Branch naming

```text
feat/localized-layout
feat/design-tokens
feat/quarto-rewrite
fix/mobile-focus
content/financial-inclusion
docs/implementation-blueprint
chore/dependency-update
```

## Commit format

```text
type(scope): imperative summary
```

Allowed types:

- `feat`
- `fix`
- `content`
- `docs`
- `style`
- `refactor`
- `test`
- `perf`
- `ci`
- `chore`

Examples:

```text
feat(i18n): add locale-aware root layout
feat(tokens): generate quarto scss variables
content(profile): add verified education records
fix(routing): preserve locale in work links
test(a11y): cover mobile navigation focus
```

## Pull-request checklist

Every meaningful pull request states:

- purpose;
- routes affected;
- screenshots when visual;
- accessibility impact;
- bilingual impact;
- content verification status;
- confidentiality review;
- tests run.

## File naming

React components use `PascalCase.tsx`. Utilities use `kebab-case.ts`. Hooks use `use-name.ts`. Content slugs use lowercase kebab case.

Good:

```text
decentralization-sampling-design.svg
financial-inclusion-mca-map.webp
mayo-kadanga-portrait-4x5.webp
```

Bad:

```text
image1.png
final_final2.jpg
Screenshot 2026.png
```

## Environment files

Commit `.env.example`. Never commit `.env`, `.env.local` or production secrets.

## Content status

```text
draft
review
approved
published
archived
```

Public builds include only approved and published content.

## Confidentiality status

```text
public
anonymized
limited
internal-only
```

A build check must reject internal-only content referenced by a public route.

## Documentation language

- Architecture documentation may be in French.
- Code identifiers remain English.
- User-facing content is localized.
- No mixed-language interface strings.

## Daily commit standard

A daily commit represents one understandable step, builds successfully, includes documentation when a decision changes and avoids combining unrelated refactors and content work.
