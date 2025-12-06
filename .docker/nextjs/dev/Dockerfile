FROM node:20.19.6-alpine

ENV NODE_ENV development
ENV PORT 3000

WORKDIR /app

RUN npm install -g pnpm

RUN pnpm config set store-dir .pnpm-store

COPY ./nextjs-app/package.json ./nextjs-app/pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN apk update && \
    apk add vim && \
    rm -rf /var/cache/apk/*

RUN pnpm install --frozen-lockfile

COPY ./nextjs-app/ .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
