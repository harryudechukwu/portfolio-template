# Portfolio Template (Open Source)

This repository is a Next.js-based portfolio template that uses Sanity as the content backend. It’s designed to be forked and adapted by others to quickly set up their own portfolio sites.

## Quick start
- Install dependencies: `npm install` or `yarn install`
- Start local dev: `npm run dev` (Next.js dev server)
- Sanity Studio: navigate to the `sanity` folder and run the studio locally (see Sanity setup below)

## Open Source Onboarding (for Designers)
- This project is designer-friendly and intended for cloning and using with their own Sanity account.
- See the onboarding guide: [docs/open-source-onboarding.md](docs/open-source-onboarding.md)

## Sanity integration
- The app reads Sanity configuration from environment variables:
  - NEXT_PUBLIC_SANITY_PROJECT_ID
  - NEXT_PUBLIC_SANITY_DATASET
  - NEXT_PUBLIC_SANITY_API_VERSION
- Create a Sanity project, then set the variables in your local environment:
  - Create a `.env.local` file (see .env.local.example)
  - Example values are provided in `sanity/env.ts` (defaults are overwritten by env vars)
- The code uses the Sanity client to fetch content for the site pages (projects, settings, etc.).

## Local setup with Sanity Studio
- Go to the `sanity` directory: `cd sanity`
- Install dependencies: `npm install` (or `yarn install`)
- Start Studio: `npm run dev` (or `sanity start` if you configured scripts differently)
- Point your Next.js app to your Sanity project by setting the environment variables mentioned above.

## Customizing
- Update content schemas in `sanity/schemaTypes` to add or modify content models.
- Edit Next.js pages under `app/` and components under `components/` to reflect your design and data needs.
- To refresh content in the Studio, deploy updates in Sanity and ensure Next.js fetches the latest data at runtime.

## Deployment
- Netlify or Vercel are common choices for hosting Next.js apps.
- Ensure your production environment variables are set in the hosting provider (SANITY vars and any others).
- Build command: `npm run build`.
- Publish directory: Next.js outputs (Netlify often handles this with its Next.js plugin).

## Contributing
- This is an open-source template. Please follow the CONTRIBUTING guidelines when proposing changes.
- Adopt the project’s coding standards and add tests where feasible.

## License
- MIT License (see LICENSE)
