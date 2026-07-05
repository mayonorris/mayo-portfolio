# Human review checklist

## Scope

- [ ] Codex completed only the assigned task.
- [ ] No later sprint feature was implemented.
- [ ] No unrelated refactor was introduced.
- [ ] No existing user change was discarded.

## Architecture

- [ ] Next.js and Quarto responsibilities remain separated.
- [ ] Locale paths follow `/en` and `/fr`.
- [ ] Shared values use the intended package.
- [ ] No prototype code was copied mechanically.

## Content

- [ ] No facts or metrics were invented.
- [ ] No confidential data was committed.
- [ ] Placeholders are explicit.
- [ ] French and English content are not silently mixed.

## Code quality

- [ ] TypeScript is strict.
- [ ] No unjustified client component was added.
- [ ] No unnecessary dependency was added.
- [ ] Errors are handled.
- [ ] Generated files were not manually edited.

## Accessibility

- [ ] Navigation semantics are appropriate.
- [ ] Keyboard use remains possible.
- [ ] Focus state is visible.
- [ ] Language and accessible names are correct.
- [ ] Reduced motion is respected when relevant.

## Validation

- [ ] Commands are listed.
- [ ] Results are actual, not assumed.
- [ ] Lint passes.
- [ ] Typecheck passes.
- [ ] Build or render passes.
- [ ] Relevant tests pass.
- [ ] Known warnings are explained.

## Git

- [ ] `git diff` is understandable.
- [ ] `git status` contains no accidental files.
- [ ] No secrets or `.env` files are staged.
- [ ] Suggested commit message matches the change.
- [ ] Commit and push remain under user control.
