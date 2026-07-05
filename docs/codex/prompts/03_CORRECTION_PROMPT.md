# Targeted correction prompt

```text
Correct only the confirmed review findings listed below.

Before editing:
1. restate each accepted finding;
2. identify the files to modify;
3. state the validation commands you will run.

Do not redesign unrelated code.
Do not introduce a new dependency unless specifically approved.
Do not commit or push.

After editing, return:
- finding-by-finding resolution;
- files changed;
- commands run;
- actual results;
- remaining risks;
- suggested Conventional Commit message.
```
