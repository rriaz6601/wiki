# Rana Riaz Wiki

BookStack deployment for Dokploy using Docker Compose.

## Files

- `docker-compose.yml` - app and database services
- `.env.example` - required environment variables template

## Dokploy setup

1. Create a project in Dokploy.
2. Create a Docker Compose application from this repository.
3. Set the required environment variables in Dokploy using `.env.example`.
4. Deploy the app.

## Notes

- Do not commit the real `.env` file.
- The app is routed at `https://ranariaz.duckdns.org/wiki`.
- The compose stack expects the external Docker network `dokploy-network`.
