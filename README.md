This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

you need to set up a prisma database so this program can work properly to do that i recomend to use the following comand if you use bun 

```bash
bun add prisma -D
```
after that run the following comand so the schema base for sqlite works properly
```bash
bunx prisma init --datasource-provider sqlite
```
with that you must see inside the project folder a new folder called "prisma" and a document called "schema.prisma"

inside that folder add a new tabel though the model with

```bash
model Task {
  id       Int   @id @default(autoincrement())
  name     String
  description  String?
  priority String    @default("low")
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
}
```
and then run the migrations

```bash
bunx prisma migrate dev --name init
```

with this simple configuration the database is ready to work 

Therefore, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
