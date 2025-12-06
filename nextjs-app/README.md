## - Prisma

#### Root path

```
cd nextjs-app
```

### Run pnpm install

```bash
pnpm install
```

### 🔄 Pull Schema from Database

```bash
npx prisma db pull
```

### Generate the Prisma Client

```bash
npx prisma generate
```

### Create first migration to set up the database tables

```bash
npx prisma migrate dev --name init
```
