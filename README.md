# CookieGeek website

Marketing site for CookieGeek, deployed as a fully static export to
[cookiegeek.online](https://cookiegeek.online) via GitHub Pages.

- **Framework:** Next.js 16 (App Router, `output: "export"`)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`, no config file)
- **Icons:** lucide-react
- **Runtime JS:** one client component (`Navbar`); every content section is a
  server component

## Requirements

Node.js 22 or newer (CI pins 22).

## Scripts

| Script              | Purpose                                                                               |
| ------------------- | ------------------------------------------------------------------------------------- |
| `npm run dev`       | Local dev server                                                                      |
| `npm run build`     | Production build into `out/`, then strips source maps                                 |
| `npm run verify`    | Validates the exported `out/` — run after `build`                                     |
| `npm run lint`      | ESLint                                                                                |
| `npm run typecheck` | `tsc --noEmit`                                                                        |
| `npm run format`    | Prettier (`format:check` for CI)                                                      |
| `npm run deploy`    | Builds first via the `predeploy` hook, then publishes `out/` to the `gh-pages` branch |

## Deployment

The site is published from the **`gh-pages` branch**, which GitHub Pages serves at
`cookiegeek.online` (the custom domain comes from `public/CNAME`).

Two paths publish it, and both run the same command:

- **Automatically** — `.github/workflows/ci.yml` runs on every push to `main`. The
  `verify` job (lint, type-check, format check, build, `verify`) has to pass first,
  and only then does the `deploy` job run `npm run deploy`. Pull requests run
  `verify` only, and deploys are serialised rather than cancelled mid-push.
- **Manually** — `npm run deploy` from a local checkout.

The `predeploy` hook builds before publishing, so a stale `out/` can never be
uploaded. If automatic deploys stop working, check that **Settings → Pages →
Source** is still set to the `gh-pages` branch.

Every deploy adds a commit to `gh-pages`, so that branch grows by roughly the size
of the site each time. Adding `-n` (`--no-history`) to the `deploy` script turns it
into a single force-pushed commit instead, if the growth becomes a problem.

## Content

All copy lives in [`src/data/site.ts`](src/data/site.ts): navigation, hero, stats,
features, vision, contact and the footer columns. The canonical origin is
`siteConfig.url`.

## Images

`src/app/` uses the Next.js file conventions for `favicon.ico`, `icon.png`,
`apple-icon.png` and `opengraph-image.png`, so the icon links and the social-card
metadata are derived from those files automatically.

The hero art is served as pre-encoded WebP widths through a `<picture>` element in
[`src/components/Hero.tsx`](src/components/Hero.tsx). `next/image` cannot emit a
`srcSet` while `images.unoptimized` is set — which static export requires — so the
widths are committed under `public/`:

| File                         | Width |
| ---------------------------- | ----- |
| `cookiegeekvision-640.webp`  | 640   |
| `cookiegeekvision-960.webp`  | 960   |
| `cookiegeekvision-1280.webp` | 1280  |
| `cookiegeekvision-1536.webp` | 1536  |

`public/cookiegeekvision.png` remains as the fallback for browsers without WebP. If
the artwork changes, re-encode at those four widths and update `hero.image.webp` in
`src/data/site.ts` if the widths change.

## Notes for future changes

- **Colour palette.** The `@theme` block in `src/app/globals.css` deliberately pins
  the Tailwind **v3** slate and blue ramps. Tailwind v4 ships different values — its
  blue-600 is `#155dfc` where this one is `#2563eb`. Change or remove the block as a
  single unit.
- **Motion is CSS-only.** Scroll reveals use `animation-timeline: view()` behind an
  `@supports` guard, and the hidden start state lives in a keyframe rather than an
  inline style. That keeps the page fully readable when JavaScript never runs, and
  `prefers-reduced-motion` disables the motion entirely. Browsers without
  scroll-driven animations simply render the sections in place.
- **Focus styling.** `Button` depends on the `--color-ring` and `--color-background`
  tokens. Without them the focus ring falls back to `currentcolor` and becomes
  invisible on the dark and blue buttons.
- **`tsconfig.json` is owned by Next.js.** `next build` re-adds `allowJs` and reflows
  the file, which is why it is excluded from Prettier.
- **`cn()` is server-only.** It wraps `tailwind-merge`, whose class-conflict table
  costs roughly 8 kB gzip. Importing it from a client component ships that table to
  the browser, so client components should use `clsx` from `"clsx"` directly.
- **There is no `next/link`.** The site has a single route, so `<Link>` could not
  enable any client-side navigation while costing about 3.8 kB gzip. All navigation
  is plain anchors, including the logo; `Navbar.tsx` carries a scoped
  eslint-disable for `@next/next/no-html-link-for-pages` that explains the
  trade-off.
- **Icons.** Server-rendered icons come from lucide-react. The two drawn inside the
  client `Navbar` are inlined in `src/components/ui/icons.tsx`, and the feature icons
  are referenced by key in `site.ts` and resolved in `WhatWeDo.tsx` — a data module
  imported by a client component must not hold icon components.
