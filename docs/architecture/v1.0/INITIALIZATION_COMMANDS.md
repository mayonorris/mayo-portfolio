# Manual Initialization Commands

These commands initialize the project step by step so that the architecture remains understandable.

## 1. Create the repository directory

```powershell
mkdir mayo-portfolio
cd mayo-portfolio
git init
```

Create the GitHub repository as Public, then connect it:

```powershell
git remote add origin https://github.com/mayonorris/mayo-portfolio.git
```

## 2. Pin Node and pnpm

Create `.nvmrc`:

```text
24
```

Enable pnpm:

```powershell
corepack enable
corepack prepare pnpm@11.2.0 --activate
pnpm --version
node --version
```

## 3. Create workspace folders

```powershell
mkdir apps
mkdir packages
mkdir docs
mkdir scripts
```

Create `pnpm-workspace.yaml` from the blueprint.

## 4. Initialize Next.js manually

From the repository root:

```powershell
pnpm create next-app@latest apps/web
```

Select:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
Use src directory: No
App Router: Yes
Turbopack: Yes
Import alias: @/*
```

Do not start copying the Claude prototype yet.

## 5. Create Quarto projects

```powershell
mkdir apps\knowledge
mkdir apps\knowledge\en
mkdir apps\knowledge\fr
mkdir apps\knowledge\shared
```

From each locale folder:

```powershell
quarto create project website .
```

Create one minimal index and one minimal article per locale.

## 6. Create shared packages

```powershell
mkdir packages\design-tokens
mkdir packages\content-schema
mkdir packages\shared-assets
```

Move the draft token files and schemas into the final structure.

## 7. Install root development tooling

```powershell
pnpm add -Dw prettier prettier-plugin-tailwindcss
pnpm --filter web add zod
```

Add MDX only in Sprint 4, not during initial setup.

## 8. First checks

```powershell
pnpm install
pnpm dev:web
```

In separate terminals:

```powershell
quarto preview apps/knowledge/en
```

```powershell
quarto preview apps/knowledge/fr
```

## 9. First commits

```powershell
git add .
git commit -m "chore(repo): initialize public portfolio repository"
git push -u origin main
```

Then make separate commits for workspace, web, Quarto and tokens rather than one oversized commit.
