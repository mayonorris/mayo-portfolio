# Sprint 1 Codex Prompt Book

Use one task at a time. Before every task, require Codex to inspect the repository and provide a short plan. After every task, require the standard report defined in `AGENTS.md`.

## S1-01 - Repository foundation

```text
Implement Sprint 1 task S1-01: establish the public repository foundation.

Read all applicable AGENTS.md files and the technical blueprint first.

Do only the following:
- confirm the Git repository and remote state;
- create or refine the root README;
- add `.gitignore`, `.editorconfig`, `.nvmrc` and `.env.example`;
- place the architecture, design-reference and Codex documentation in their intended directories;
- do not initialize Next.js or Quarto yet.

Acceptance:
- the repository structure is understandable;
- README explains the hybrid Next.js + Quarto architecture;
- no secret or real `.env` file exists;
- Node major is pinned;
- Git status contains only intended files.

Do not commit or push.
Suggested commit: `chore(repo): establish portfolio repository foundation`
```

## S1-02 - Pin Node and pnpm

```text
Implement Sprint 1 task S1-02: pin Node and pnpm.

Use Node.js 24 LTS. Pin pnpm through the root `packageManager` field. Do not initialize frameworks. Report the effective versions and validate the configuration.

Acceptance:
- `.nvmrc` contains the expected Node major;
- root package metadata pins pnpm;
- Node and pnpm versions are reported;
- no application framework is initialized.

Do not commit or push.
Suggested commit: `chore(tooling): pin node and pnpm versions`
```

## S1-03 - Configure pnpm workspace

```text
Implement Sprint 1 task S1-03: configure the pnpm monorepo.

Add `pnpm-workspace.yaml`, create the intended workspace directories where necessary, and add coherent root scripts from the blueprint. Do not add scripts that falsely claim working applications.

Acceptance:
- `apps/*` and `packages/*` are workspace patterns;
- the root package is private;
- pnpm discovers the workspace without error;
- no nested Git repository exists.

Do not commit or push.
Suggested commit: `chore(workspace): configure pnpm monorepo`
```

## S1-04 - Initialize Next.js

```text
Implement Sprint 1 task S1-04: initialize the minimal Next.js application in `apps/web`.

Requirements:
- App Router;
- TypeScript strict mode;
- Tailwind CSS;
- ESLint;
- import alias `@/*`;
- remove generic demo content;
- keep only a minimal neutral page.

Do not implement the portfolio design, navigation or final locale structure.

Acceptance:
- the web app builds;
- lint and typecheck pass;
- no generic Next.js demo remains;
- no portfolio section is implemented.

Do not commit or push.
Suggested commit: `feat(web): initialize nextjs app router application`
```

## S1-05 - Initialize Quarto EN and FR

```text
Implement Sprint 1 task S1-05: initialize localized Quarto projects.

Create `apps/knowledge/en` and `apps/knowledge/fr`. Each must have a minimal configuration, index and one clearly labelled prototype article. Do not make real publication, code-execution or reproducibility claims.

Acceptance:
- both projects render independently;
- each declares the correct language;
- output directories are separated;
- warnings are reported;
- no confidential data is present.

Do not publish, commit or push.
Suggested commit: `feat(knowledge): initialize localized quarto projects`
```

## S1-06 - Design-token source

```text
Implement Sprint 1 task S1-06: create the semantic design-token source.

Add `packages/design-tokens/src/tokens.json` based on Design Reference 1.0. Include light and dark colors, typography, widths, radii, spacing and motion. Use semantic names, not component names.

Acceptance:
- JSON validates;
- light and dark sets exist;
- values are traceable to the design reference;
- no duplicated application-specific color source is introduced.

Do not commit or push.
Suggested commit: `feat(tokens): add shared design token source`
```

## S1-07 - Token generation

```text
Implement Sprint 1 task S1-07: generate CSS and SCSS tokens.

Create one deterministic generator from the token JSON. Generate CSS custom properties and SCSS variables. Add a check for stale generated output. Do not manually maintain duplicated token values.

Acceptance:
- generation succeeds;
- a second generation produces no diff;
- CSS and SCSS outputs are valid;
- intended consumers can import them.

Do not commit or push.
Suggested commit: `feat(tokens): generate css and scss outputs`
```

## S1-08 - Locale routing

```text
Implement Sprint 1 task S1-08: add the Next.js locale-routing foundation.

Add `[locale]`, redirect `/` to `/en`, support only `en` and `fr`, reject unsupported locales, set the actual document language and add minimal localized metadata. Do not build final navigation or homepage sections.

Acceptance:
- `/en` renders English;
- `/fr` renders French;
- `/` redirects to `/en`;
- unsupported locale is rejected;
- document language and metadata are correct;
- build passes.

Do not commit or push.
Suggested commit: `feat(i18n): add english and french route layouts`
```

## S1-09 - Typed dictionaries

```text
Implement Sprint 1 task S1-09: add typed interface dictionaries.

Add only the interface labels required by the current minimal shell. Validate key parity between English and French. Keep long prose outside dictionaries. Add a type-level or test safeguard for missing keys.

Acceptance:
- dictionaries have equivalent keys;
- consumers are typed;
- no silent mixed-language fallback exists;
- checks pass.

Do not commit or push.
Suggested commit: `feat(i18n): add typed interface dictionaries`
```

## S1-10 - Content schemas

```text
Implement Sprint 1 task S1-10: create shared Zod content schemas.

Cover locale, content status, confidentiality, project, experience, education, certification and professional links. Add a public-build guard against `internal-only` content and focused tests. Do not add final portfolio content.

Acceptance:
- valid fixtures pass;
- invalid fixtures fail;
- internal-only public content fails validation;
- typecheck and tests pass.

Do not commit or push.
Suggested commit: `feat(content): add validated portfolio content schemas`
```

## S1-11 - Sample project registry

```text
Implement Sprint 1 task S1-11: prove the typed project registry with one non-sensitive record.

Use one clearly approved or explicitly marked sample project. Include English and French metadata, validate it through the shared schema, and declare confidentiality. Do not add a complete MDX case study or invent results.

Acceptance:
- the registry loads and validates;
- English and French values are present;
- confidentiality is explicit;
- no unverified claim is introduced.

Do not commit or push.
Suggested commit: `content(work): add initial typed project registry`
```

## S1-12 - Quarto preview CI

```text
Implement Sprint 1 task S1-12: create a CI-ready Quarto preview build.

Use official Quarto GitHub Actions. Render English and French and assemble locale-specific static artifacts. Do not deploy until the user explicitly authorizes deployment. Keep any deployment job disabled or clearly gated.

Acceptance:
- workflow syntax is valid;
- local renders pass;
- artifact structure is correct;
- no unauthorized deployment occurs.

Do not commit or push.
Suggested commit: `ci(knowledge): add localized quarto preview build`
```

## S1-13 - Quarto rewrite proof

```text
Implement Sprint 1 task S1-13: prove localized Quarto rewrites.

Use `QUARTO_ORIGIN`. Add rewrite families for English and French Research and Writing. Preserve browser-facing paths. Verify assets and internal links with a controlled test origin. Do not commit a personal preview URL.

Acceptance:
- four rewrite families exist;
- missing `QUARTO_ORIGIN` behaves predictably;
- paths and assets are tested;
- the implementation uses rewrites, not user-visible redirects.

Do not commit or push.
Suggested commit: `feat(routing): proxy localized quarto paths`
```

## S1-14 - Lint and formatting

```text
Implement Sprint 1 task S1-14: configure repository linting and formatting.

Configure ESLint and Prettier. Include Markdown, JSON and YAML where practical. Add check and write scripts. Do not reformat unrelated files without need.

Acceptance:
- lint passes;
- formatting check passes;
- commands run from the root;
- changed files are limited and understandable.

Do not commit or push.
Suggested commit: `chore(quality): configure lint and formatting checks`
```

## S1-15 - Validation CI

```text
Implement Sprint 1 task S1-15: add the validation CI quality gate.

The workflow must install dependencies, generate and verify tokens, run lint, run typecheck, build Next.js, render Quarto English and render Quarto French. Use caching when straightforward. Do not deploy.

Acceptance:
- workflow syntax is valid;
- every Sprint 1 check is represented;
- local equivalents are documented;
- no deployment job exists;
- failure output identifies the failing stage.

Do not commit or push.
Suggested commit: `ci: add web and quarto validation workflow`
```
