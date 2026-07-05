# Codex working workflow

## 1. Start with inspection

Open the repository and use `00_START_PROMPT.md`. For planning-only work, use read-only permissions where available.

Codex should understand the task, applicable instructions, architecture, Git state and validation commands before editing.

## 2. Assign one bounded task

Use one task from `04_SPRINT_1_PROMPT_BOOK.md` at a time.

Do not combine repository setup, locale architecture, Quarto deployment and visual implementation into one request.

## 3. Require a plan before edits

For tasks involving several files, require:

- assumptions;
- files expected to change;
- commands expected to run;
- acceptance criteria;
- risks and user decisions.

## 4. Use conservative permissions

Recommended defaults:

```toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"
```

Approve network access only when dependency installation or current documentation access is genuinely needed.

## 5. Inspect the implementation report

Require:

- summary;
- files changed;
- commands run;
- actual results;
- unresolved points;
- suggested commit message.

Reject wording such as “tests should pass” when no test was run.

## 6. Run a separate review

Use `02_REVIEW_PROMPT.md` or Codex `/review` against uncommitted changes.

The review must cover task scope, architecture drift, security, accessibility, localization, content integrity, regressions and tests.

## 7. Request targeted corrections

Use `03_CORRECTION_PROMPT.md`. Correct only confirmed findings.

## 8. Commit only after approval

Codex must not commit or push automatically. Review:

```text
git diff
git status
```

Then authorize one specific Conventional Commit message.

## 9. Update AGENTS.md only after recurring friction

Keep durable instructions concise. When the same error recurs, add one precise rule to the nearest applicable `AGENTS.md` and keep detailed workflows in `docs/`.
