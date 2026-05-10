# Siva P · Portfolio

A minimal, elegant personal portfolio built with **React + Vite** and a touch of
**Framer Motion**. Content is sourced from [`src/data/content.js`](src/data/content.js) — edit that single
file to refresh the site.

## Quick start

```powershell
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to ./dist
npm run preview  # locally preview the production build
```

## Project structure

```
src/
  App.jsx                # Layout + section composition
  main.jsx               # React entry
  data/content.js        # All editable content (profile, skills, experience, ...)
  components/
    Navbar.jsx           # Sticky nav with mobile menu
    Hero.jsx             # Landing hero
    About.jsx            # "What I do" highlights
    Skills.jsx           # Skill grid + proficiency bars
    Experience.jsx       # Vertical timeline
    Education.jsx        # Education cards
    Contact.jsx          # Contact CTA
    Footer.jsx
    SectionHeading.jsx   # Reusable section header
  styles/index.css       # All styles (single CSS file)
```

## Customising

- **Personal info, socials, resume link** → `src/data/content.js` → `profile`
- **About bullets** → `highlights`
- **Skill grid icons** → `skills` (uses [Devicon](https://devicon.dev/) classes)
- **Proficiency bars** → `proficiencies`
- **Work experience** → `experiences`
- **Education** → `education`
- **Theme tokens (colours, radii, fonts)** → CSS variables at the top of
  `src/styles/index.css`

## Deploy to Cloudflare Pages (psiv.dev)

This project is set up for Cloudflare Pages. There are two flows — pick one.

### Option A — Git-based deploy (recommended)

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use these build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (set `NODE_VERSION=20` in Environment variables if needed)
4. Click **Save and Deploy**. You'll get a temporary `*.pages.dev` URL.
5. Open the project → **Custom domains → Set up a custom domain** → enter `psiv.dev`,
   then repeat for `www.psiv.dev`. Because the domain is already on Cloudflare,
   the required DNS records (`CNAME` to your Pages project) are added automatically.
6. Every push to your default branch redeploys; PRs get preview URLs for free.

### Option B — Direct upload with Wrangler

```powershell
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name psiv-dev
```

Then in the dashboard add the custom domain (`psiv.dev` and `www.psiv.dev`) the same way.

### Files included for Pages

- [public/_headers](public/_headers) — security headers + immutable cache for hashed assets
- [public/_redirects](public/_redirects) — SPA fallback (`/* → /index.html 200`)
- [wrangler.toml](wrangler.toml) — only needed if you deploy via the Wrangler CLI

### DNS notes

If `psiv.dev` is already proxied through Cloudflare, you don't need to touch DNS
manually — the **Custom domains** screen will create/replace the right records.
If you previously had A records pointing elsewhere, Cloudflare will prompt you
to remove them.
