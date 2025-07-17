# Setting up PostgreSQL Prisma in Next.js

### Installing dependencies first 
```bash
npm install prisma --save-dev
npm install @prisma/client
```
### Initialize Prisma 
```bash
npx prisma init
```
This will create - prisma/schema.prisma and .env (with DATABASE_URL)

### Set PostgreSQL Connection String
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase?schema=public"
```

### Example `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
### Now define the models in your schema file

### Run Prisma Migrate 
```bash
npx prisma migrate dev --name init
```
This will create your tables in Postgresql and will generate prisma client

### Now you can use Prisma client in nextjs 

