
FROM node:20.19.6-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY ./nextjs-app/package.json ./nextjs-app/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY ./nextjs-app/ .

RUN pnpm run build

#---
FROM node:20.19.6-alpine AS runner

ENV NODE_ENV production
ENV PORT 3000

RUN addgroup --system nextjs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --prod

RUN chown -R nextjs:nextjs /app
USER nextjs

EXPOSE 3000

CMD ["pnpm", "start"]