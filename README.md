# GOUB

This repository now contains a report-driven starter scaffold for the GOUB product described in [deep-research-report.md](/C:/temp_private/goub/deep-research-report.md:1).

## What is implemented

- Next.js App Router structure with route groups for marketing, auth, and protected app surfaces
- Compare-first UI shell with workspace, documents, compare, tasks, exports, usage, and settings pages
- Demo auth route plus middleware-protected application routes
- API route contracts for upload init, upload complete, ask streaming, compare, and exports
- Supabase migration that mirrors the report's core multi-tenant data model and initial RLS policies
- Vitest coverage-driven tests for request contracts, upload init, ask SSE, and the document action rail

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`, then use `/login` to enter the protected workspace shell.

## Local environment

`/.env.local` is prepared with placeholder keys for:

- Supabase public URL and anon key
- Supabase service role key
- Anthropic and OpenAI keys
- Google Document AI settings

You can fill the Supabase values later without changing the code structure.

## Coolify

Coolify deployment is prepared with:

- root `Dockerfile`
- `output: "standalone"` in [next.config.ts](/C:/temp_private/goub/next.config.ts:1)
- `/health` endpoint for health checks
- deployment notes in [docs/deployment/coolify.md](/C:/temp_private/goub/docs/deployment/coolify.md:1)

## Verification

```bash
pnpm lint
pnpm test
pnpm build
```

## Next implementation steps

1. Wire the placeholder routes to real Supabase Auth, Storage, and database writes.
2. Replace mock workspace data with server-side loaders and streaming Route Handler integrations.
3. Add the Cloud Run worker package for OCR, parsing, embeddings, compare execution, and export generation.
