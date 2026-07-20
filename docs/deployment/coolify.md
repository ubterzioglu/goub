# Coolify Deployment

This project is prepared for Coolify with a Dockerfile-based deployment.

## App Type

- Build Pack: `Dockerfile`
- Dockerfile location: `./Dockerfile`
- Exposed port: `3000`
- Health check path: `/health`
- Persistent storage: not required for the web app

The application is stateless. Files should live in Supabase Storage, not on the Coolify container filesystem.

## Environment Variables

### Main web app

Set these in the main Coolify application before the first production deploy:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_DB_URL`
- `SUPABASE_PROJECT_REF`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SECRET_KEY`

### Optional web app providers

These are not required for the current scaffold to boot, but should live on the main app if/when those features are enabled:

- `ANTHROPIC_API_KEY`
- `OPENAI_API_KEY`
- `GEMINI_API_KEY`
- `RESEND_API_KEY`
- `MAIL_FROM`
- `MAIL_TO_ADMIN`
- `MAIL_REPLY_TO`
- `MAIL_SEND_CONFIRMATION`
- `RAG_API_SECRET`
- `GOOGLE_DOCUMENT_AI_PROJECT_ID`
- `GOOGLE_DOCUMENT_AI_LOCATION`
- `GOOGLE_APPLICATION_CREDENTIALS_JSON`
- `SUPABASE_ADMIN_EMAIL`
- `SUPABASE_ADMIN_PASSWORD`

### Separate worker app

If `workers/service-finder` is deployed as its own Coolify service, put these there instead of the main web app:

- `TAVILY_API_KEY`
- `SERPAPI_API_KEY`
- `SERVICE_FINDER_WORKER_ID`
- `SERVICE_FINDER_POLL_MS`
- `SERVICE_FINDER_HEARTBEAT_MS`
- `SERVICE_FINDER_ENABLE_SERPAPI_FALLBACK`

## Recommended Coolify Settings

- Port: `3000`
- Health check path: `/health`
- Health check scheme: `http` on the internal app port
- Auto deploy: enabled after the first successful manual deploy
- Build command: handled by Dockerfile
- Start command: handled by Dockerfile

## Notes

- `next.config.ts` uses `output: "standalone"` so the runtime image stays smaller.
- The container starts with `node server.js` from Next.js standalone output.
- If you later add Redis, workers, or background consumers, keep them as separate Coolify services.
- The repo pins `pnpm@10.28.1` and sets `minimumReleaseAge: 0` in `pnpm-workspace.yaml` to avoid Coolify/Corepack pulling `pnpm 11` defaults that can block fresh transitive packages during Docker builds.

## Cloudflare SSL Fix

If Cloudflare shows `526 Invalid SSL certificate`, the issue is at the origin proxy layer, not in the app container.

Use this order:

1. In Coolify, keep the application health check on `http://<internal-service>:3000/health`.
2. In Cloudflare DNS, temporarily switch the `goub.net` record from `Proxied` to `DNS only`.
3. In Coolify, redeploy and wait for the domain to receive a valid Let's Encrypt certificate.
4. Confirm the origin works directly over HTTPS and that `https://goub.net/health` returns `200`.
5. Switch Cloudflare back to `Proxied`.
6. Set Cloudflare SSL mode to `Full (strict)` after the origin certificate is valid.

If Let's Encrypt cannot be issued while Cloudflare stays in front, install a Cloudflare Origin CA certificate on the Coolify proxy and then keep Cloudflare in `Full (strict)`.
