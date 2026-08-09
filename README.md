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

## CI/CD and Cloudflare Pages (psiv.dev)

The GitHub Actions workflow in [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml):

- runs a clean install and production build for every pull request;
- repeats that check for pushes to `main`; and
- deploys successful `main` builds to the `psiv-dev` Cloudflare Pages project.

### GitHub setup

1. In Cloudflare, create an API token with **Account → Cloudflare Pages → Edit**
   permission for the account that owns the Pages project.
2. In GitHub, open **Settings → Secrets and variables → Actions** and add these
   repository secrets:
   - `CLOUDFLARE_API_TOKEN` — the token created above
   - `CLOUDFLARE_ACCOUNT_ID` — the account ID shown in the Cloudflare dashboard
3. Push to `main`. The workflow builds the site and uploads `dist` to Cloudflare Pages.
4. Open the Pages project → **Custom domains → Set up a custom domain** → enter `psiv.dev`,
   then repeat for `www.psiv.dev`. Because the domain is already on Cloudflare,
   the required DNS records (`CNAME` to your Pages project) are added automatically.

Do not also connect this repository through Cloudflare's Git integration unless you
want two deployments for every push to `main`.

### Manual deployment with Wrangler

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

> Do **not** add a `wrangler.toml` at the repo root — if Pages sees it, it tries
> to run `wrangler deploy` (Workers flow) and the build fails. Pages reads its
> build command and output directory from the dashboard.

### DNS notes

If `psiv.dev` is already proxied through Cloudflare, you don't need to touch DNS
manually — the **Custom domains** screen will create/replace the right records.
If you previously had A records pointing elsewhere, Cloudflare will prompt you
to remove them.
