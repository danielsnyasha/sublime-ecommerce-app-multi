# Next.js 15 Multi Tenant Ecommerce Platform

A modern, instant‑scale ecommerce solution built with the latest Next.js 15 app router and React server components. One code base, many shops, and every store gets its own isolated experience while sharing a single admin and infrastructure.

## Why you will love it

* lightning fast page loads thanks to edge streaming and smart caching
* one dashboard to create, theme and manage unlimited stores
* automatic sub domain routing that sends each visitor to the right shop
* secure sign in, organisation and role management out of the box
* ready made product, cart and checkout flows powered by Stripe
* responsive design with Tailwind CSS and shadcn ui
* image upload and transformation with Cloudinary
* built for international sales with i18n, multi currency and tax rules
* extendable API layer through trpc and Zod validation
* first class developer experience with TypeScript, ESLint and Prettier
* instant previews, branch deployments and CI via GitHub Actions

## Core stack

* Next.js 15, React 19, TypeScript
* Tailwind CSS and shadcn ui
* Prisma ORM with MongoDB Atlas
* Redis cache
* Clerk authentication
* Stripe payments
* Cloudinary storage
* Docker and Kubernetes ready
* Vercel for production hosting

## Quick start

1. Clone this repository
2. Copy `.env.example` to `.env.local` and fill the secrets
3. Run `pnpm install`
4. Run database migration with `pnpm prisma db push`
5. Fire up the dev server with `pnpm dev`
6. Visit `localhost:3000` and create your first shop

## Deploy

Push to the main branch and Vercel will build and ship automatically.

## Contributing

Pull requests are welcome. Open an issue for discussion before any change that is big.

## License

MIT
