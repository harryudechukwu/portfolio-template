# Complete Beginner's Guide: Setting Up Your Portfolio Website

> **If you've never done any coding before, you're in the right place.**\
> This guide assumes zero prior knowledge and walks you through every single step.

---

## Table of Contents

1. [What are we building?](#-what-are-we-building)
2. [What you'll need](#-what-youll-need)
3. [Step 1: Create a GitHub account](#-step-1-create-a-github-account)
4. [Step 2: Install Node.js](#-step-2-install-nodejs)
5. [Step 3: Fork this repository](#-step-3-fork-this-repository)
6. [Step 4: Clone your fork to your computer](#-step-4-clone-your-fork-to-your-computer)
7. [Step 5: Open a terminal / command prompt](#-step-5-open-a-terminal--command-prompt)
8. [Step 6: Navigate to the project folder](#-step-6-navigate-to-the-project-folder)
9. [Step 7: Install the project dependencies](#-step-7-install-the-project-dependencies)
10. [Step 8: Create a Sanity account and project](#-step-8-create-a-sanity-account-and-project)
11. [Step 9: Connect Sanity to your project (environment variables)](#-step-9-connect-sanity-to-your-project-environment-variables)
12. [Step 10: Run your website locally](#-step-10-run-your-website-locally)
13. [Step 11: Add your content in Sanity Studio](#-step-11-add-your-content-in-sanity-studio)
14. [Step 12: Put your website on the internet (deploy to Netlify)](#-step-12-put-your-website-on-the-internet-deploy-to-netlify)
15. [Customizing how your portfolio looks](#-customizing-how-your-portfolio-looks)
16. [Troubleshooting](#-troubleshooting)

---

## 🧐 What are we building?

You're building a **personal portfolio website** — a place on the internet where you can show your work, introduce yourself, and let people contact you.

Here's how it works:

```
You type content in  ──→  Sanity CMS (a dashboard)  ──→  Your website displays it
     Sanity Studio                                           automatically
```

- **Sanity CMS** is where you'll type your name, bio, project descriptions, upload images, etc.
- **This template** is the website itself — it knows how to take the content from Sanity and display it as a beautiful portfolio page.
- **Netlify** is the service that puts your website on the real internet so anyone can visit it.

You DON'T need to write any code to add or change your content. You only need to follow these steps once to get everything connected, and after that you just log into Sanity Studio to update your portfolio.

---

## 📋 What you'll need

Before starting, make sure you have these things:

1. **A computer** (Mac or Windows — both work fine)
2. **Internet connection**
3. **An email address** (for creating accounts)
4. **About 30–60 minutes** for the initial setup (it's faster once you've done it once)

---

## 👤 Step 1: Create a GitHub account

GitHub is a website that stores code. Your portfolio code will live here.

1. Go to **[https://github.com/signup](https://github.com/signup)**
2. Enter your email address and create a password
3. Pick a username (this will be part of your GitHub profile URL, like `github.com/your-username`)
4. Verify your email address (GitHub will send you a confirmation email)
5. That's it — you now have a GitHub account

> **What is GitHub used for here?** Think of it like Google Drive for code. Your portfolio files are stored on GitHub, and when you want to update them, you "push" the changes from your computer to GitHub. Then Netlify (your hosting service) automatically picks up those changes and updates your live website.

---

## ⚡ Step 2: Install Node.js

Node.js is a program that lets your computer run this website. You need to install it before anything else will work.

### What to download

1. Go to **[https://nodejs.org](https://nodejs.org)**
2. You'll see two versions — download the one labeled **"LTS"** (this stands for "Long Term Support" and is the stable version). The LTS button is on the left side of the page.
3. The download will start automatically. It's a file called something like `node-v22.x.x.pkg` (Mac) or `node-v22.x.x.msi` (Windows).

### How to install on Mac

1. Open the downloaded `.pkg` file
2. Click "Continue" through the installer screens
3. Click "Install" (you may need to enter your computer's password)
4. Once done, click "Close"

### How to install on Windows

1. Open the downloaded `.msi` file
2. Click "Next" through the installer screens
3. Check the box that says "I accept the terms in the License Agreement" and click "Next"
4. Keep clicking "Next" until you see "Install", then click "Install"
5. Click "Finish" when done

### Verify it worked

After installing, we need to check that Node.js was installed correctly. You'll do this in Step 5 after we learn how to use the terminal.

---

## 🍴 Step 3: Fork this repository

"Forking" means making your own copy of this template on GitHub. You'll have your own version that you can customize.

1. Make sure you're logged into your GitHub account
2. Go to the portfolio template page: **[https://github.com/harryudechukwu/portfolio-template](https://github.com/harryudechukwu/portfolio-template)**
3. Look near the top-right corner of the page for a button that says **"Fork"** (it looks like a fork icon ⋔)
4. Click it
5. On the next page, leave everything as-is and click the green **"Create fork"** button
6. Wait a few seconds — GitHub is copying all the files to your account
7. You'll be taken to your new copy. The URL will be something like: `https://github.com/YOUR_USERNAME/portfolio-template`

> **What just happened?** You now have your very own copy of this portfolio template stored on GitHub. Next, you'll download a copy to your computer so you can work with it.

---

## 📥 Step 4: Clone your fork to your computer

"Cloning" means downloading the files from GitHub to your computer.

1. Go to your forked repository on GitHub (the URL from Step 3)
2. Click the green **"Code"** button (near the top of the page, above the file list)
3. Make sure **"HTTPS"** is selected (it should say "Clone with HTTPS")
4. Click the copy icon (two overlapping squares) next to the URL that appears. It should look something like: `https://github.com/YOUR_USERNAME/portfolio-template.git`
5. Now you need to choose where to save the project on your computer:
   - **Mac:** Open **Finder**, go to your Documents folder (or create a folder called "Projects" inside Documents)
   - **Windows:** Open **File Explorer**, go to your Documents folder (or create a folder called "Projects" inside Documents)
6. Keep this folder window open — you'll need the folder path in Step 6

Now we need to use a **terminal** to actually clone the files. Let's learn how to use a terminal first.

---

## 💻 Step 5: Open a terminal / command prompt

A terminal (also called "command prompt" or "command line") is a text-based way to talk to your computer. Instead of clicking buttons, you type commands.

### On a Mac

1. Press **Command + Space** to open Spotlight Search
2. Type **"Terminal"** and press Enter
3. A white (or black) window will appear with a blinking cursor — this is the terminal
4. Keep this window open; we'll use it throughout this guide

### On Windows

1. Press the **Windows key** (or click the Start menu)
2. Type **"PowerShell"**
3. Click **"Windows PowerShell"** (NOT "Windows PowerShell ISE" — just the regular one)
4. A blue-backed window will appear — this is your terminal
5. Keep it open

> **What does a terminal look like?**
> ```
> Mac:  YourComputerName:~ YourUsername$
> Win:  PS C:\Users\YourUsername>
> ```
> The `$` or `>` is called the "prompt" — it's waiting for you to type a command. Don't type the `$` or `>` — that's just the prompt.

### Verify Node.js installed correctly

Now let's check that Node.js installed properly. In your terminal, type this command and press Enter:

```
node --version
```

You should see something like:
```
v22.x.x
```

(The exact numbers don't matter — the fact that you see a version number means it worked.)

If you see a message like "command not found" or "node is not recognized", try restarting your computer and running the Node.js installer again.

---

## 📂 Step 6: Navigate to the project folder

Now you need to tell the terminal where your project files are. This is called "changing directories" or "navigating" to a folder.

### Find your folder path

1. Go to the **Finder** (Mac) or **File Explorer** (Windows) window where you decided to save the project
2. Right-click on the folder you want to save it in (like "Documents" or "Projects") and select **"Copy"** or **"Copy as path"** (the wording varies)

Wait — actually we haven't cloned yet. Let me re-think the order. You need to:

1. Open the terminal
2. Use the `cd` command to navigate to where you want the project to live
3. Then use the `git clone` command to download the files

Let me write this clearly:

### Navigate to where you want the project

In the terminal, type `cd` followed by a space, then drag the folder (like "Documents" or "Projects") from Finder/File Explorer into the terminal window and drop it. Then press Enter.

Alternatively, you can type the path manually. Here are common locations:

**Mac:**
```
cd ~/Documents
```

**Windows:**
```
cd C:\Users\YourUsername\Documents
```

(Replace "YourUsername" with your actual Windows username)

### Clone the files

Now that you're in the right folder, type this command and press Enter:

```
git clone https://github.com/YOUR_USERNAME/portfolio-template.git
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username (the one you created in Step 1).

For example, if your GitHub username is `janesmith`, you'd type:
```
git clone https://github.com/janesmith/portfolio-template.git
```

After you press Enter, you'll see something like:
```
Cloning into 'portfolio-template'...
remote: Enumerating objects: ...
Receiving objects: ... done.
```

This means the files are downloading to your computer.

### Move into the project folder

Now type this command:

```
cd portfolio-template
```

This tells the terminal "go inside the portfolio-template folder." Your terminal prompt should now show something like:

```
Mac:  YourComputerName:portfolio-template YourUsername$
Win:  PS C:\Users\YourUsername\Documents\portfolio-template>
```

> **Tip:** If you ever get lost and don't know what folder you're in, type `pwd` (Mac) or `Get-Location` (Windows) and press Enter — it will show your current folder path.

---

## 📦 Step 7: Install the project dependencies

The project needs some helper programs (called "dependencies" or "packages") to run. The `npm install` command downloads them all.

In your terminal (make sure you're still in the `portfolio-template` folder), type this and press Enter:

```
npm install --legacy-peer-deps
```

**What does this do?** It tells npm (Node Package Manager, which came with Node.js) to download all the necessary packages listed in the `package.json` file.

**How long does it take?** Usually 30 seconds to 2 minutes, depending on your internet speed.

**What should you see?** The terminal will show a lot of text scrolling by — that's normal. It might show some warnings in yellow or red — that's also normal and you can ignore them. When it's done, you'll see your terminal prompt again (`$` or `>`).

If everything worked, you should now see a new folder called `node_modules` in your project folder. Don't open or touch this folder — it's just for the computer.

> **Why `--legacy-peer-deps`?** Some of the packages in this project are newer than others and don't perfectly agree with each other. This flag tells npm "just install them anyway, I know what I'm doing." It's a safe workaround.

---

## 🔌 Step 8: Create a Sanity account and project

Sanity is the "Content Management System" (CMS) — it's where you'll write and manage all your portfolio content.

### Create an account

1. Go to **[https://www.sanity.io](https://www.sanity.io)**
2. Click **"Start free"** or **"Get started"** (top-right corner)
3. Sign up using your Google account, GitHub account, or email
4. Follow the steps to complete your account creation

### Create a project

1. After logging in, you'll see a Sanity dashboard — click **"Create project"**
2. Name your project (e.g., "My Portfolio")
3. Select a region closest to you (usually "US West" or "EU")
4. Leave the dataset name as **"production"** (this is the standard name)
5. Click **"Create project"**

### Find your project credentials

After creating the project, you'll be taken to the project dashboard. You need two important pieces of information:

1. **Project ID** — This is a short string like `abc123xy`. You'll find it:
   - On the project dashboard page, or
   - In the URL: `sanity.io/manage/project/abc123xy`
2. **Dataset name** — Usually `production` (the default)

Write these down or leave this page open — you'll need them in the next step.

---

## 🔐 Step 9: Connect Sanity to your project (environment variables)

Now you need to tell the portfolio template how to find your Sanity project. You do this using something called "environment variables" — they're like configuration settings stored in a file called `.env.local`.

### Create the `.env.local` file

1. Open your `portfolio-template` folder in Finder/File Explorer
2. Look for a file called **`.env.local.example`** (it's in the main folder)
3. Right-click it and select **"Duplicate"** or **"Copy"**
4. The copy will be named `.env.local.example copy` — rename it to **`.env.local`**
   
   > **Important:** The file is named ".env.local" with NO other extension. Make sure it's not ".env.local.txt" or ".env.local.example". On Windows, you might need to enable "File name extensions" in File Explorer (View → Show → File name extensions).

5. Open the new `.env.local` file with any text editor (Notepad on Windows, TextEdit on Mac, or VS Code if you have it)

### Fill in the values

The file should look like this when you open it:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Edit it to look like this (replacing the placeholder with your actual Project ID):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xy
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

(Replace `abc123xy` with the Project ID you found in Step 8)

> **What does "production" mean?** Sanity lets you have multiple "datasets" (like separate databases). "Production" is the default name for your real, live dataset. You could create a "staging" or "test" dataset if you wanted, but for now, "production" is all you need.

### Save and close

1. **Mac (TextEdit):** Press `Command + S` to save, then close the window
2. **Windows (Notepad):** Press `Ctrl + S` to save, then close the window

---

## 🚀 Step 10: Run your website locally

"Running locally" means the website runs on your own computer so you can see it in your browser before putting it on the real internet.

### Start the development server

In your terminal (make sure you're still in the `portfolio-template` folder), type:

```
npm run dev
```

Press Enter. You'll see something like:

```
> portfolio-template@0.1.0 dev
> next dev

  ▲ Next.js 16.x.x
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.3s
```

> **What does "localhost:3000" mean?** It means your website is running on YOUR computer at a specific address. "localhost" means "this computer" and "3000" is like a channel number. Only you can see it right now.

### Open your website

1. Open your web browser (Chrome, Safari, Firefox, Edge — any of them)
2. Type **`http://localhost:3000`** into the address bar and press Enter
3. You should see your portfolio homepage!

It'll have placeholder content for now — we'll add your real content in the next step.

### Open Sanity Studio

While the dev server is still running, open a new tab in your browser and go to:

```
http://localhost:3000/studio
```

This is **Sanity Studio** — the dashboard where you'll manage your content. It should load and look like a clean editor interface.

> **Don't close the terminal!** As long as the terminal is running the dev server, your website is accessible at localhost:3000. To stop it, click in the terminal and press `Ctrl + C` (both keys at once). When you want to view your site again, run `npm run dev` again.

---

## ✍️ Step 11: Add your content in Sanity Studio

Now for the fun part — making the site yours!

### Open Sanity Studio

If you closed it, make sure your dev server is running (`npm run dev`) and go to:

```
http://localhost:3000/studio
```

### Update your personal information

1. In the Sanity Studio sidebar, click **"Site Settings"**
2. You'll see a form with these fields:
   - **Full Name** — Your name (e.g., "Jane Smith")
   - **Job Title** — What you do (e.g., "UX Designer" or "Product Designer")
   - **Avatar** — Click to upload your profile photo
   - **Bio** — A short description about yourself. You can use the editor to make text bold, italic, or add links.
   - **Email** — Your email address (it'll appear as a contact link)
   - **Resume URL** — A link to your resume (you can put a Google Drive or Dropbox link here)
   - **Social Links** — Click "Add item" to add social media links (e.g., LinkedIn, Twitter, Dribbble, etc.)
     - Each social link needs: Platform name, Display label, and URL
3. Click **"Publish"** (blue button in the top bar) to save your changes
4. Go back to your website at `http://localhost:3000` and refresh — you should see your name and info!

### Add your first project

1. In the Sanity Studio sidebar, click **"Projects"**
2. Click the **"Create new project"** button (top-right)
3. Fill in the fields:
   - **Title** — Your project name (e.g., "Redesigned Banking App")
   - **Slug** — This automatically generates from the title. It's used in the URL (e.g., `your-site.com/work/redesigned-banking-app`). You can leave it as-is or customize it.
   - **Short Description** — A brief description for the project card on the homepage
   - **Cover Image** — The main image for the project card
   - **Display Order** — A number that controls the order projects appear (1 = first, 2 = second, etc.)
   - **Tags** — Add "WIP" or "Featured" tags if you want
   - **My Role** — Your role in the project (e.g., "Lead Designer")
   - **Timeline** — When this project happened (e.g., "Jan 2025 – Mar 2025")
   - **Tools Used** — Tools you used (e.g., "Figma", "Adobe XD", "After Effects")
   - **Live URL** — A link to the live project if it exists
4. Scroll down to **"Case Study Content"** — this is where you write the full story of your project
   - Click the **"Add block"** button to start adding content
   - You can write paragraphs, add headings, insert images, embed videos, embed Figma prototypes, and create image galleries
   - Each piece of content is a "block" — you can add multiple blocks and reorder them by dragging the `⋮⋮` handle
5. Click **"Publish"** to save your project
6. Refresh your website at `http://localhost:3000` — your project should appear!

### How to add different types of content to a case study

When you click "Add block" in the case study editor, you can choose from:

| Block type | What it does |
|------------|-------------|
| **Text (normal)** | Regular paragraph text |
| **Heading 2** | A section heading (large) |
| **Heading 3** | A subsection heading (medium) |
| **Blockquote** | A quote or highlighted text |
| **Image** | Upload or select an image from your library. You can add a caption and alt text. |
| **Video Embed** | Paste a YouTube, Vimeo, or direct video URL |
| **Figma Prototype** | Paste a Figma share link to embed a prototype |
| **Image Gallery** | Add multiple images that display in a 2-column grid |

To reorder blocks, hover over the `⋮⋮` icon on the left of a block, click and drag it up or down.

---

## 🌐 Step 12: Put your website on the internet (deploy to Netlify)

Right now your website only exists on your computer. To make it accessible to anyone on the internet, you'll use Netlify — a free hosting service.

### Push your code to GitHub first

Before deploying, you need to upload your code (with the .env.local created earlier... wait, don't upload .env.local!).

Actually, **do NOT** upload your `.env.local` file to GitHub — it contains your Sanity Project ID and should stay private. The `.gitignore` file already tells Git to ignore `.env.local`, so it won't be uploaded.

Let's push your code:

1. Open your terminal (in the `portfolio-template` folder)
2. Type these commands one at a time, pressing Enter after each:

```
git add .
git commit -m "Initial setup with my content"
git push
```

3. The terminal will ask for your GitHub username and password (or a "Personal Access Token"). If you have two-factor authentication enabled on GitHub, you'll need to create a "Personal Access Token" at [https://github.com/settings/tokens](https://github.com/settings/tokens) and use that as your password.

### Deploy to Netlify

1. Go to **[https://app.netlify.com](https://app.netlify.com)** and create an account (you can sign up with your GitHub account)
2. Click the **"Add new site"** button (it might be a big "+" or "Add new site" dropdown) and select **"Import an existing project"**
3. You'll see a list of Git providers — click **"GitHub"**
4. Netlify might ask you to authorize access to your GitHub account. Click "Authorize" or "Install" as needed.
5. Find and select your `portfolio-template` repository from the list
6. **Configure your settings:**

   The `netlify.toml` file already in your project will auto-fill most settings. But you need to add your **environment variables**:

   1. Expand the **"Environment variables"** section (click "Show advanced" or find it in the settings)
   2. Click **"Add variable"**
   3. Add these three variables (same values as your `.env.local` file):

      | Key | Value |
      |-----|-------|
      | `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID (e.g., `abc123xy`) |
      | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
      | `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |

   4. Click **"Deploy portfolio-template"** (or similar button)

7. Netlify will start building your site. You'll see a progress log scrolling by — this is normal. The first build might take 2–3 minutes.
8. When it's done, you'll see a success message and a **🌐 Live site URL** — something like `https://random-words-123abc.netlify.app`
9. Click that URL — your portfolio is now live on the internet!

### Set up a custom domain (optional but nice)

Your site has a Netlify subdomain (`random-words-123abc.netlify.app`). You can use a custom domain (like `yoursite.com`) if you own one.

1. Buy a domain from a registrar like [Namecheap](https://www.namecheap.com), [Google Domains](https://domains.google), or [Cloudflare](https://www.cloudflare.com)
2. In your Netlify dashboard, go to **Site settings → Domain management → Custom domains**
3. Click **"Add custom domain"** and enter your domain
4. Follow Netlify's instructions to update your domain's DNS settings (this varies by registrar)

> **Note:** Custom domains cost money (usually $10–15/year). You can use the free `netlify.app` subdomain forever — your portfolio will still look professional.

### Auto-updates

The best part: any time you make changes in Sanity Studio, the content updates on your live site within a minute or two (due to revalidation).

If you ever want to change the code itself (like colors or fonts), you'd edit the files on your computer, then run:
```
git add .
git commit -m "Describe what you changed"
git push
```
Netlify will automatically rebuild and update your live site.

---

## 🎨 Customizing how your portfolio looks

All content (text, images, links) can be managed through Sanity Studio without touching code. But if you want to change the **visual design**, here are the files to look at:

### Colors and fonts

**`app/globals.css`** — This is where the main styles live. You can change colors by modifying the CSS variables or Tailwind CSS classes.

For simple color changes, search for color values like `neutral-900`, `gray-50`, `#6B6B6B` in the code files and replace them with colors you prefer.

### Layout and spacing

**`app/page.tsx`** — The homepage layout\
**`components/`** — Individual components:

| File | What it controls |
|------|-----------------|
| `Hero.tsx` | The top section with your name, title, and bio |
| `ProjectGrid.tsx` | The grid of project cards |
| `ProjectCard.tsx` | Individual project card design |
| `CaseStudy.tsx` | Individual project page layout |
| `Contact.tsx` | The contact section |
| `Header.tsx` | (if present) Navigation header |

### Adding or removing sections

To add or remove sections from the homepage, edit `app/page.tsx`. Each section is a component imported at the top of the file.

### Changing the font

The font is set in `app/layout.tsx`. It currently uses **Inter** (a clean, modern font from Google Fonts). To change it:

1. Find `import { Inter } from "next/font/google";` in `app/layout.tsx`
2. Replace `Inter` with a different Google Font name (e.g., `Roboto`, `Playfair Display`)
3. Search for "Google Fonts" to find one you like
4. Update the variable name throughout the file

### Note about code changes

Making visual changes requires editing code. If you've never done this before, start small — change a color, change a font weight — and see the result. You can always undo your changes.

---

## 🔧 Troubleshooting

### "node is not recognized" / "command not found"

**Problem:** Node.js isn't installed or wasn't added to your PATH.\
**Fix:** Restart your computer, then try running `node --version` again. If it still doesn't work, reinstall Node.js from [nodejs.org](https://nodejs.org) and make sure to check any option that says "Add to PATH" during installation.

### "npm is not recognized" / "command not found"

**Problem:** npm should come with Node.js, but something went wrong.\
**Fix:** Reinstall Node.js from [nodejs.org](https://nodejs.org).

### "git is not recognized" / "command not found"

**Problem:** Git isn't installed.\
**Fix:** Download and install Git from [git-scm.com](https://git-scm.com/downloads). After installing, restart your terminal and try again.

### "npm install" fails with errors

**Problem:** Sometimes packages have conflicting versions.\
**Fix:** Make sure you're using the `--legacy-peer-deps` flag:
```
npm install --legacy-peer-deps
```

### "Something went wrong" when loading the website

**Problem:** The website can't connect to Sanity.\
**Fix:** 
1. Check that your `.env.local` file has the correct Project ID
2. Make sure your terminal is in the `portfolio-template` folder
3. Run `npm run dev` again

### Sanity Studio shows an error or won't load

**Problem:** Sanity can't connect to your project.\
**Fix:**
1. Go to `http://localhost:3000/studio` — don't use the standalone Sanity Studio URL
2. Check that your `.env.local` file has the correct Project ID and dataset name
3. Make sure your Sanity project exists (log in to sanity.io to check)

### Netlify deployment fails

**Problem:** The build fails on Netlify.\
**Fix:**
1. Go to your Netlify dashboard → select your site → "Deploys" tab
2. Click the failed deployment to see the error log
3. Common issues:
   - **Environment variables not set:** Go to Site settings → Environment variables and add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION`
   - **Node version:** The `netlify.toml` file sets Node 20. If you see a version-related error, make sure the file exists
   - **Build command:** Should be `npm install --legacy-peer-deps && npm run build` (already in `netlify.toml`)

### "Port 3000 is already in use"

**Problem:** Another program is using port 3000.\
**Fix:** Either close the other program, or run the dev server on a different port:
```
npx next dev -p 3001
```
Then access your site at `http://localhost:3001`.

### I accidentally deleted something

**Fix (if you haven't pushed to GitHub yet):**
You can restore the original file from this template:
```
git checkout -- filename
```
(Replace `filename` with the actual file name, like `app/page.tsx`)

**Fix (if you need the original template files):**
You can always return to [github.com/harryudechukwu/portfolio-template](https://github.com/harryudechukwu/portfolio-template) and re-download or compare files.

---

## 📚 Where to go from here

- **More about Sanity:** Visit the [Sanity documentation](https://www.sanity.io/docs)
- **More about Next.js:** Visit the [Next.js documentation](https://nextjs.org/docs)
- **More about Netlify:** Visit the [Netlify documentation](https://docs.netlify.com)
- **Need help?** Open an issue on the [GitHub repository](https://github.com/harryudechukwu/portfolio-template/issues)

---

*Happy building! 🎉*
