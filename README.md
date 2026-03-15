# Rana Riaz Site

Modern personal site built with Astro + Tailwind for deployment through Dokploy.

## Files

- `docker-compose.yml` - minimal Compose app definition
- `Dockerfile` - builds the static site and serves it with nginx
- `src/` - Astro pages, layouts, and styles

## Dokploy setup

1. Create a Docker Compose app from this repo.
2. In Dokploy UI, bind the domain/hostname there.
3. Point Dokploy to service `site` on port `80`.
4. Deploy.

## Notes

- The repo does not contain domain or Traefik routing config.
- The service joins `dokploy-network` so Dokploy can route to it.
- No runtime secrets are required.
