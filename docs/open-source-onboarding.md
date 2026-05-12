Open Source Onboarding for Designers
===============================

This project is a designer-friendly open source starter for building a personal portfolio with Sanity as the content backend. It’s designed so non-technical designers can clone, configure their own Sanity account, and run the portfolio locally.

Prerequisites
- Node.js (>= 18) and npm or yarn
- Git
- Sanity CLI (npm install -g @sanity/cli)
- A GitHub account (for forking and pushing your changes)

What you’ll get
- A working Next.js portfolio template with a Sanity-backed content layer
- A minimal, copyable onboarding flow for new users
- Instructions to deploy on Netlify or Vercel
- A path to add more portfolio layouts in the future

Step-by-step quick start (non-technical friendly)
1) Fork the repository on GitHub, then clone it locally
    git clone https://github.com/your-username/portfolio-template.git
2) Install dependencies
   npm install
3) Create a new Sanity project and connect it
   - Install Sanity CLI (if not already): npm i -g @sanity/cli
   - Run: sanity init
   - Follow prompts to create a new Sanity project with a production dataset
   - Note the generated projectId and dataset
4) Configure local environment
   - Copy .env.local.example to .env.local
   - Set:
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
     NEXT_PUBLIC_SANITY_DATASET=production
     NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
5) Run both Next.js app and Sanity Studio
   - For an all-in-one run, you can use:
     npm run dev:all
   - Or run separately:
     npm run dev  (Next.js)
     npm run dev:studio  (Sanity Studio)
6) Deploy locally or to a hosting provider
   - Netlify or Vercel: connect your fork, set the same env vars, and build
   - Build command: npm run build
   - Publish: .next

Common issues and fixes
- If you see port conflicts, stop the other processes or change ports in the Studio config
- If Sanity Studio can’t connect, double-check NEXT_PUBLIC_SANITY_PROJECT_ID and dataset values, and ensure your Sanity project is accessible
- Ensure .env.local is ignored by git (see .gitignore)

Extending the project
- To add more portfolio layouts, implement new layout components under components/ and wire them into new routes/pages
- Document new layouts in ROADMAP.md or a dedicated docs/ folder for contributors

Contributing
- This project welcomes contributions from designers and developers alike
- See CONTRIBUTING.md for how to propose changes, code style, and review process

Roadmap
- Add more portfolio layouts and a layout-switcher in the UI
- Improve onboarding with more visuals and screenshots
- Add an example with a negative test to illustrate offline scenarios

Credits
- MIT license (see LICENSE)
