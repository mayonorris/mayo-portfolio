# Codex setup on Windows

## Recommended mode

Use Codex natively on Windows with:

```toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[windows]
sandbox = "elevated"
```

Use the unelevated fallback only when administrator-approved setup is unavailable.

## Suggested project location

```text
C:\Users\Mayo\code\mayo-portfolio
```

Avoid synchronized folders that frequently lock files.

## Tool checks

```powershell
git --version
node --version
pnpm --version
quarto --version
```

## Supported working surfaces

- Codex app
- Codex IDE extension
- Codex CLI

The repository instructions apply across these surfaces.

## Safety

- Review `.codex/config.toml` before trusting the project.
- Keep unrestricted full-access modes disabled for normal work.
- Approve network access only when required.
- Do not grant access to unrelated personal folders.
