# Portfolio Template

A portfolio website you can set up and customize — no coding required.

---

**Never coded before?** Start with the **[Complete Beginner's Guide →](docs/open-source-onboarding.md)**\
It walks you through everything: getting a GitHub account, installing the right software, connecting to Sanity CMS, and putting your site live on the internet.

**Already comfortable with the basics?** Jump straight to [Quick Start](#quick-start) below.

---

## What is this?

This is a **ready-made personal portfolio website**. Think of it like a website template (similar to a Squarespace or Wix template), except:

- **You own all the code** — it lives on your GitHub account
- **Your content lives in Sanity CMS** — a dashboard where you type in your name, bio, projects, etc., and the website automatically shows them
- **It's free to host** — you can put it on the internet using Netlify's free plan

### What you get

| Feature | Description |
|---------|-------------|
| Homepage | Your name, job title, bio, avatar, and a grid of your projects |
| Project pages | Full case studies for each project with images, video embeds, Figma prototypes |
| Sanity Studio | A private dashboard at `/studio` where you add/edit all your content |
| Contact section | Email link and social media links |
| Responsive design | Looks great on phones, tablets, and desktops |

---

## Quick Start

For people who know their way around a terminal:

1. **Fork** this repository (click the Fork button at the top of this page)
2. **Clone** your fork to your computer:
   ```
   git clone https://github.com/YOUR_USERNAME/portfolio-template.git
   ```
3. **Install dependencies:**
   ```
   npm install --legacy-peer-deps
   ```
4. **Create a Sanity project** at [sanity.io](https://www.sanity.io) and grab your Project ID
5. **Create a `.env.local` file** in the project folder with:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
6. **Start the dev server:**
   ```
   npm run dev
   ```
7. Open **http://localhost:3000** to see your site, and **http://localhost:3000/studio** to add content
8. **Deploy to Netlify** — connect your GitHub repo, set the same env vars, and you're live

---

## Deployment

### Deploy to Netlify (recommended, free)

1. Create an account at [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select your forked repository
4. Under "Environment variables", add the same three values from your `.env.local`
5. Click "Deploy" — Netlify will build and publish your site automatically
6. Every time you push changes to GitHub, Netlify redeploys automatically

A `netlify.toml` file is already included with the correct settings.

### Deploy to Vercel

Alternative hosting — create an account at [vercel.com](https://www.vercel.com), import your repo, and add the same environment variables.

---

## Customizing without code

You can customize **content** entirely through the Sanity Studio dashboard — no code needed:

- **Homepage content** (name, bio, avatar, social links) → Settings in Sanity Studio
- **Projects** (title, description, images, case study content) → Projects in Sanity Studio
- **Order of projects** → Each project has a "Display Order" field (lower numbers appear first)

To change the **visual design** (colors, fonts, layout), you'll need to edit the code files. The [Beginner's Guide](docs/open-source-onboarding.md#-customizing-how-your-portfolio-looks) has pointers on which files to edit for simple visual changes.

---

## Project structure explained simply

```
portfolio-template/
├── app/                    # The website pages
│   ├── page.tsx           # Homepage
│   └── work/[slug]/       # Individual project/case study pages
├── components/            # Building blocks (Hero, ProjectCard, Contact, etc.)
├── sanity/
│   ├── schemaTypes/       # Content structure definitions
│   ├── lib/               # Sanity connection and data queries
│   └── env.ts             # Environment variable setup
├── sanity.config.ts       # Sanity Studio configuration
├── netlify.toml           # Netlify deployment settings
└── .env.local.example     # Template for your environment variables
```

---

## License

MIT — use it freely for personal or commercial projects.

---

*Built with [Next.js](https://nextjs.org/) + [Sanity CMS](https://www.sanity.io/)*
