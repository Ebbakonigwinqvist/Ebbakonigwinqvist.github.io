
## Fix: GitHub Actions Workflow Build Failure

### Root Cause

The GitHub Actions workflow runs `npm ci` to install dependencies. `npm ci` is strict — it requires the `package-lock.json` to be perfectly in sync with `package.json`. Lovable uses **bun** internally (`bun.lockb` is the real lockfile), so the `package-lock.json` in the repo is likely stale or inconsistent. This causes `npm ci` to fail with exit code 1 before the build even starts.

### The Fix

Update `.github/workflows/deploy.yml` to use **bun** instead of npm, which matches how Lovable manages dependencies:

- Replace `actions/setup-node` with `oven-sh/setup-bun` (the official bun setup action)
- Replace `npm ci` with `bun install`
- Replace `npm run build` with `bun run build`

This ensures the CI environment uses the same package manager as the project, reading from `bun.lockb` instead of the outdated `package-lock.json`.

### Technical Details

**Current workflow (broken):**
```text
- uses: actions/setup-node@v4
  with:
    node-version: 20
- run: npm ci          ← fails: package-lock.json out of sync
- run: npm run build
```

**Updated workflow (fixed):**
```text
- uses: oven-sh/setup-bun@v1
  with:
    bun-version: latest
- run: bun install     ← uses bun.lockb, always in sync
- run: bun run build
```

### Files to Change

1. `.github/workflows/deploy.yml` — switch from npm to bun for setup, install, and build steps
