## - Run project

#### Copy .env.dev to nextjs-app/.env

```bash
cp .env.dev nextjs-app/.env
```

### Build without cache

```bash
docker compose -f docker-compose.dev.yml build --no-cache
```

### Run project on the production environment

```bash
docker compose -f docker-compose.prod.yml up
```

### Run project on the development environment

```bash
docker compose -f docker-compose.dev.yml up
```
