# CLAUDE.md — gutachter-koop-website

Public marketing site for gutachter-koop.de. Built with Next.js 14.

> Workspace-level orientation: [`/root/repos/CLAUDE.md`](../CLAUDE.md).

Owner: Andreas Koop.

## Stack

Next.js 14.2 + React 18 + TypeScript + Tailwind CSS 3.4 + Framer Motion. Package manager: pnpm.

## Common commands

- `pnpm dev` — local dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — ESLint

## Deployment

Push to `main` → Vercel auto-deploys to `gutachter-koop.de`.

## Staging environment (Docker)

**Staging URL: http://localhost:8600**

```bash
# Start
docker compose -f docker-compose.staging.yml --project-name staging-gutachter-koop-website up -d --wait

# Stop (frees all resources)
docker compose -f docker-compose.staging.yml --project-name staging-gutachter-koop-website down

# One-time setup (copy and optionally fill in Supabase keys for contact form)
cp .env.staging.example .env.staging
```

The `--wait` flag blocks until the Next.js dev server passes its healthcheck (~20–40 s on first run while pnpm installs; subsequent starts use the node_modules volume cache and take ~5 s).

Test against staging:
```bash
# Basic smoke test
curl -sf http://localhost:8600 | grep -q "Gutachter" && echo OK

# Playwright (set baseURL)
BASE_URL=http://localhost:8600 pnpm exec playwright test
```

## Environment variables

Optional — the site renders fully without them; features degrade gracefully:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (contact form) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (contact form) |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps Embed API key (standort map) |

Copy `.env.staging.example` → `.env.staging` to enable them locally.

## Conventions

- `.env.staging` is gitignored — never commit it.
- No TypeScript strict errors allowed before pushing.
