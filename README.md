# RestoPOS — Restaurant Technology Portfolio

A production-quality marketing/portfolio website for a company that builds custom
restaurant technology (ordering apps, multi-branch systems, admin dashboards and
digital operations) for restaurants in Saudi Arabia.

The goal of the site is commercial: help a restaurant owner understand — within
10–15 seconds — what we build, and give them an immediate way to request a demo
or reach us on WhatsApp.

## Repository layout

```
/                     ← built, deployable static site (index.html + assets/)
/db-hero/             ← source project (Vite + React + TypeScript)
  src/
    site.config.ts    ← ALL editable content (brand, contact, projects, features…)
    components/        ← section components + illustrative CSS app mockups
  public/             ← favicon, OG image, robots.txt, sitemap.xml
  .env.example        ← configurable brand / contact / WhatsApp values
```

The root of the repo holds the **built output** (this is what the static host
serves). The source lives in `db-hero/`.

## Develop

```bash
cd db-hero
npm install
npm run dev        # local dev server
```

## Build & deploy

```bash
cd db-hero
npm run build      # outputs to db-hero/dist/
```

Copy the contents of `db-hero/dist/` to the repository root (that is what the
static host serves), then commit. `vite.config.ts` uses `base: './'` so the
build works from the root or any sub-path.

## Configuration

Copy `db-hero/.env.example` to `db-hero/.env` and set:

| Variable | Purpose |
| --- | --- |
| `VITE_BRAND_NAME` | Brand name shown across the site |
| `VITE_CONTACT_EMAIL` | Contact email (footer + contact section) |
| `VITE_CONTACT_PHONE` | Phone number for the "Call" CTA |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number (digits only, no `+`) |
| `VITE_WHATSAPP_MESSAGE` | Pre-filled WhatsApp message |
| `VITE_FORM_ENDPOINT` | Optional POST endpoint for the contact form (falls back to email) |

## Screenshots

The app visuals are **illustrative CSS mockups** — clearly generic restaurant-app
UI, not screenshots of any specific restaurant. To use real screenshots, add an
`image` path to the relevant entry in `src/site.config.ts` (`gallery`) and drop
the file in `public/`; the mockup is used only as a fallback when no image is set.

## Content notes

No fake clients, statistics, testimonials, ratings or partnerships are used. The
single "Sample Restaurant Platform" project is a labelled reference architecture,
and new real projects can be added by appending to `projects` in `site.config.ts`.
