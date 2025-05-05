**Creating a GitHub repository description**

The user is asking for a description for an ecommerce app built with Next.js 15, Tailwind, TypeScript, MongoDB, Prisma, and other relevant technologies. The app is a multi-tenant ecommerce platform, allowing multiple shops to share a single interface. It’s important to avoid underscores and hyphens in the description, likely meaning to avoid snake\_case or kebab-case naming conventions. I'll structure the description with sections like Title, Overview, Features, Tech Stack, Getting Started, Deployment, Contributing, and License, in Markdown format of course.

**Designing the description**

I’m focusing on keeping the description short, sweet, and clear, as the user prefers. I’ll highlight features like Next.js 15, React Server Components, Tailwind CSS, MongoDB with Prisma, payment via Stripe, and hosting on Vercel. I’ll make sure to avoid any hyphenated words, so I’ll use "multi tenant" instead of "multi-tenant" and "ecommerce" without a hyphen. For bullet points, I’ll switch to asterisks instead of hyphens. All jargon will be adjusted accordingly while ensuring spelling remains correct!

**Creating the description**

I need to avoid any hyphen, dash, and underscore throughout the description while making sure it’s still friendly and structured. The title will be "Next.js 15 Multi Tenant Ecommerce Platform," and for the features and tech stack, I'll use asterisks instead of hyphens. The sentences should flow naturally, expressing the amazing scalability and features of the app, like multi-tenant capabilities and using Next.js 15, React, and Stripe. I'll craft a clean list and instructions while sticking to the no-hyphen rule and balancing readability!

**Scanning for hyphens**

I’m checking for potential hyphens that might conflict with the user’s request to avoid them. The `.env.example` file is fine since it uses dots, not hyphens. “Shadcn ui” uses a space, which is fine, and “role management” is also good. Terms like “out of the box” and "Docker and Kubernetes ready" don’t use hyphens, which works. I should be careful with “edge streaming” and check if any hyphens appear there. Let me double-check everything!


**Reviewing bullet points**

I’m double-checking that bullet points are properly formatted with asterisks, which is good. I also want to make sure there aren't any en dashes or other unwanted characters appearing in the lists. I can use the asterisk for clean, consistent bullet points and avoid any confusing punctuation marks that could sneak in. My next move is to confirm everything is following the guidelines properly!

**Checking for dashes**

I found some potential issues in the earlier text. There’s an EN dash ('–') between "shops" and "every store," as well as a non-breaking hyphen ('‑') in "ready‑made." Those might seem like hyphens, so I should remove or replace them. Switching "shops – every store" to "shops and every store" seems good, and "ready‑made" will become "ready made." Time to revise and avoid any unwanted hyphens!


Thought for 55 seconds


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
