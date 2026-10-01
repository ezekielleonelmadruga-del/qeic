# QEIC website

Website for the Queen's Entrepreneurship and Innovation Committee, deployed at
[qeic.vercel.app](https://qeic.vercel.app) / [qeic.ca](https://qeic.ca).

Built with Next.js 16 (App Router), Tailwind CSS v4, and framer-motion.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to edit things

| What | File |
| --- | --- |
| Team members & portfolios | `lib/data/team.ts` (photos go in `public/team/`) |
| Upcoming events, featured events, past speakers | `lib/data/events.ts` (speaker photos in `public/speakers/`) |
| Email, socials, sign-up form link, nav links | `lib/site-config.ts` |
| Page copy | `app/<page>/page.tsx` |
| Colours, fonts, `.eyebrow` / `.font-display` styles | `app/globals.css` |
| Header / mobile menu / footer | `components/layout/` |

Team members can optionally have a `bio` and `linkedin` URL; they show up
automatically when set. A member with an empty `image` shows their initials.

## Project layout

```
app/                 routes (/, /about, /events, /team, /contact, /signup) + sitemap/robots
components/
  layout/            navbar, mobile menu, footer, logo
  motion/            Reveal (scroll fade-in) and PageTransition
  team/              team accordion with hover photo preview
  contact/           contact form (opens the visitor's email app; no backend)
  ui/button.tsx      button + buttonVariants
lib/                 site config, content data, motion presets, utils
public/              logo, hero image, team and speaker photos
```
