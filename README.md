This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

you need to set up a prisma database so this program can work properly to do that i recomend to use the following comand if you use bun 

```bash
bun add prisma -D
```
Every configuration is already in the docment schema.prisma for that reason the only real thing you have to do is set up the .env for the Database url for that create a .env and paste the following line of code

```bash
DATABASE_URL="file:./dev.db"
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
