# Sprint 1 Backlog - Foundations

Duration target: 5 to 7 focused working sessions
Goal: establish a stable hybrid foundation before building visual pages.

## Epic 1 - Repository and runtime

### S1-01 Create public repository

Acceptance:

- repository name is `mayo-portfolio`;
- visibility is Public;
- README states the hybrid Next.js and Quarto purpose.

Commit:

```text
chore(repo): initialize public portfolio repository
```

### S1-02 Pin runtime

Create `.nvmrc`, the root `packageManager` field and `pnpm-lock.yaml`.

Acceptance: Node 24 and pnpm are pinned and installation is reproducible.

## Epic 2 - Workspace

### S1-03 Create pnpm workspace

Acceptance:

- `apps/*` and `packages/*` are workspace paths;
- root scripts can run web, token and knowledge commands;
- no nested accidental Git repository exists.

### S1-04 Initialize Next.js manually

Requirements:

- App Router;
- TypeScript;
- Tailwind CSS;
- ESLint;
- strict mode;
- alias `@/*`.

Acceptance:

- `pnpm --filter web dev` works;
- default demo content is removed;
- one neutral root redirect exists.

### S1-05 Initialize Quarto projects

Create `apps/knowledge/en` and `apps/knowledge/fr`.

Acceptance:

- each project renders independently;
- each has one index and one sample article;
- each imports shared SCSS tokens;
- no real research claim is published yet.

## Epic 3 - Design tokens

### S1-06 Create token source

Acceptance:

- token JSON contains light and dark values;
- names are semantic;
- primary brand colors are not hardcoded in components.

### S1-07 Generate CSS and SCSS

Acceptance:

- one script generates both outputs;
- output is deterministic;
- web imports CSS;
- Quarto imports SCSS.

## Epic 4 - Internationalization foundation

### S1-08 Add locale routing

Acceptance:

- `/` redirects to `/en`;
- `/en` renders English;
- `/fr` renders French;
- unsupported locale returns not found;
- the real HTML language is correct.

### S1-09 Add typed dictionaries

Acceptance:

- navigation labels exist in EN and FR;
- dictionaries are validated;
- no component contains duplicated bilingual prose.

## Epic 5 - Content schema

### S1-10 Add Zod schemas

Required schemas:

- project;
- experience;
- education;
- certification;
- professional link;
- confidentiality status.

Invalid data fails the build.

### S1-11 Add sample registry

Use one non-sensitive sample project only. No full final case study is required.

## Epic 6 - Hybrid routing proof

### S1-12 Deploy Quarto test origin

Acceptance:

- EN and FR static output is available;
- no confidential content;
- origin URL is recorded as an environment variable.

### S1-13 Add rewrites

Acceptance:

- `/en/research` loads the EN Quarto site;
- `/fr/research` loads the FR Quarto site;
- browser URL remains on the main domain;
- assets and internal links resolve.

## Epic 7 - Quality automation

### S1-14 Configure formatting and linting

Acceptance: ESLint, Prettier and YAML validation pass.

### S1-15 Add CI

Checks:

- install;
- token generation;
- TypeScript;
- lint;
- Next.js build;
- Quarto EN render;
- Quarto FR render.

## Definition of done

- All acceptance criteria pass.
- No homepage sections beyond a minimal localized shell.
- No contact provider selected prematurely.
- No portrait file required yet.
- No confidential project asset committed.
- Architecture documentation matches the repository.
