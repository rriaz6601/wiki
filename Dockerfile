FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY astro.config.mjs tsconfig.json ./
COPY src ./src
RUN npm run build

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv
