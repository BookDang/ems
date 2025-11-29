FROM node:20.19.6-alpine

ENV NODE_ENV development
ENV PORT 3000

WORKDIR /app

COPY ./nextjs-app/package.json ./nextjs-app/pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN apk update && \
    apk add vim && \
    rm -rf /var/cache/apk/*

RUN pnpm install --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
