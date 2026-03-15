# Rana Riaz Site

Modern dark personal landing page for Dokploy using Docker Compose.

## Files

- `docker-compose.yml` - static site deployment
- `site/` - HTML and CSS for the landing page

## Dokploy setup

1. Create a project in Dokploy.
2. Create a Docker Compose application from this repository.
3. Use branch `main` after merging the PR.
4. Deploy the app.

## Notes

- The site is routed at `https://ranariaz.duckdns.org/wiki`.
- The compose stack expects the external Docker network `dokploy-network`.
- No database or runtime secrets are required.
