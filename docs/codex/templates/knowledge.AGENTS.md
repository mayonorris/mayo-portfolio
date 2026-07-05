# Quarto knowledge-site instructions

These instructions extend the repository-level `AGENTS.md`.

## Scope

This directory owns Research, Writing, reproducible R and Python articles, citations, bibliography, equations, code output, listings, search, RSS and public analytical assets.

Do not implement professional case-study pages here.

## Localization

- English and French are separate Quarto subprojects.
- Do not create mixed-language search indexes.
- Each document declares its actual language.
- A French navigation shell must not silently display an English article.
- When a translation is missing, use an explicit approved language state.

## Reproducibility

- Use `.qmd` as the source.
- Use `execute.freeze: auto` unless an approved article needs a different policy.
- Never claim reproducibility when code, data or environment cannot reproduce output.
- Lock R and Python environments when execution is required.
- Never commit confidential microdata.
- Use synthetic or approved public data for public demonstrations.
- Do not invent coefficients, citations, publication dates or model results.

## Styling and routes

- Import generated Quarto SCSS tokens.
- Match the shared header, footer, typography and color system.
- Research uses `/[locale]/research`.
- Writing uses `/[locale]/writing`.
- Verify links and assets under the final rewritten subpaths.

## Validation

Render English and French, inspect warnings, verify links and assets, and report whether code execution or frozen output was used.

Do not publish or deploy unless the user explicitly asks.
