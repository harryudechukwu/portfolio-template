# Contributing

Thank you for your interest in contributing to this open source portfolio template.

How to contribute
- Fork the repository and create a feature branch (git checkout -b feature/your-feature).
- Implement your change with minimal, well-scoped edits.
- Run lint and build locally: `npm run lint` and `npm run build`.
- Add or update tests if applicable.
- Open a pull request describing your changes and the motivation behind them.

Project structure overview
- app: Next.js application code
- components: Reusable React components
- sanity: Sanity CMS configuration and schemas
- public/static or static assets
- .env.local: Environment-specific configuration (do not commit this)

Environment setup
- Copy `.env.local.example` to `.env.local` and fill in the required values.
- Required vars are NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_API_VERSION.

Code style and reviews
- Follow the existing code style and conventions.
- PRs should be small, focused, and well-documented.
