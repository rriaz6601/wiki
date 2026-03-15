# Rana Riaz Site

Modern dark personal landing page built with Astro + Tailwind and deployed through Dokploy.

## Files

- `docker-compose.yml` - Dokploy deployment entrypoint
- `Dockerfile` - multi-stage build for Astro + Caddy
- `src/` - Astro pages, layouts, and styles
- `Caddyfile` - serves the static build at the site root

## Dokploy setup

1. Create a project in Dokploy.
2. Create a Docker Compose application from this repository.
3. Use branch `main`.
4. Deploy the app.

## Notes

- The site is routed at `https://wiki-ranariaz.duckdns.org`.
- The compose stack expects the external Docker network `dokploy-network`.
- No database or runtime secrets are required.
- The Astro build targets the dedicated wiki hostname directly.
