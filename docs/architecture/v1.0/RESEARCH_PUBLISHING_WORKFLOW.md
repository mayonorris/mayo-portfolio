# Research Publishing Workflow

Status: active foundation for the first public Research deployment.

## Responsibilities

Next.js owns the bilingual portfolio shell and the public Research indexes at /en/research and /fr/recherche. These pages organize research entries, search and filter the public registry, and link only to article routes that actually exist.

Quarto owns long-form research articles that need equations, code blocks, tables, figures, citations and reproducibility notes. The .qmd files are the source of truth for article content.

## Source and Output Directories

| Layer | English | French |
|---|---|---|
| Quarto source | apps/research-en/ | apps/research-fr/ |
| Article source | apps/research-en/articles/financial-inclusion-mobile-money/index.qmd | apps/research-fr/articles/inclusion-financiere-mobile-money/index.qmd |
| Generated output | apps/web/public/research/en/ | apps/web/public/research/fr/ |

Generated HTML and support assets in apps/web/public/research/ are deployment output. Do not edit them by hand when a .qmd source exists.

## Local Render Commands

Use the installed Quarto CLI from a shell where Quarto is available:

~~~powershell
quarto check
quarto render apps/research-en
quarto render apps/research-fr
~~~

If Quarto is installed but not visible in the current Windows PATH, use the installed executable path temporarily instead of changing PowerShell execution policy:

~~~powershell
& "C:\Program Files\Quarto\bin\quarto.exe" check
& "C:\Program Files\Quarto\bin\quarto.exe" render apps/research-en
& "C:\Program Files\Quarto\bin\quarto.exe" render apps/research-fr
~~~

Rerun the relevant render command after every .qmd, Quarto config or Quarto style change. Quarto may warn that the output directory sits outside the Quarto project directory; this is expected for the current pre-rendered deployment model.

## Routing Mechanism

The first deployment commits pre-rendered Quarto output into apps/web/public/research/. Next.js rewrites the clean article routes to that static output:

| Public route | Static destination |
|---|---|
| /en/research/financial-inclusion-mobile-money | /research/en/articles/financial-inclusion-mobile-money/index.html |
| /fr/recherche/inclusion-financiere-mobile-money | /research/fr/articles/inclusion-financiere-mobile-money/index.html |

Visitors keep the clean localized URL. Raw public asset paths are an implementation detail. Supporting Quarto assets are additionally mapped from /site_libs/:path*, /styles/:path*, and locale-prefixed asset variants to the pre-rendered public output.

## Bilingual Article Workflow

1. Add or update the English .qmd source.
2. Add or update the French .qmd source with equivalent structure.
3. Keep only verified metadata in front matter.
4. Render both projects locally.
5. Verify the clean Next.js routes and the static destination paths.
6. Commit source and generated output together for this pre-rendered deployment model.

## Vercel Constraint

Vercel currently builds only the Next.js app. It does not run Quarto during deployment. Quarto output must therefore be rendered locally and committed before deployment.

This can be revisited after a CI workflow builds Quarto artifacts and publishes them to a stable static origin.

## Adding a New Article

1. Create the article source under the relevant apps/research-*/articles/<slug>/index.qmd directory.
2. Add a typed Research registry item in apps/web/content/research.ts only after the article route exists.
3. Add a clean localized rewrite in apps/web/next.config.ts.
4. Render Quarto and verify the generated output.
5. Verify that no route returns 404 in production build.

## Publication Safety Checklist

Before publishing a research article, verify that it contains no unsupported claims:

- no invented result, coefficient, chart or empirical conclusion;
- no unverified publication date, DOI, venue or status;
- no private dataset, credential, token or local file path;
- no personally identifiable information;
- no internal bracketed confirmation marker;
- every figure or table is either verified output or explicitly a non-empirical framework element;
- references are real and source-checked before display.

## Temporary Theme Boundary

The Quarto article theme respects prefers-color-scheme and includes a compact local theme toggle. It does not yet share the Next.js theme state. This boundary is acceptable for the first pre-rendered Research deployment and should be revisited when a shared Quarto static origin is introduced.
