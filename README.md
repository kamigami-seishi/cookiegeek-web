# CookieGeek website

Marketing site for CookieGeek, deployed as a fully static export to
[cookiegeek.online](https://cookiegeek.online) via GitHub Pages.

- **Framework:** Next.js 16 (App Router, `output: "export"`)
- **Styling:** Tailwind CSS v4 with custom CSS variables and component styles
- **Icons:** inline SVG menu controls and the CookieGeek brand artwork
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

Most section copy and links live in [`src/data/site.ts`](src/data/site.ts):
navigation, hero, overview principles, work groups, vision, contact and footer
columns. The canonical origin is `siteConfig.url`.

## Images

`src/app/` uses the Next.js file conventions for `favicon.ico`, `icon.png`,
`apple-icon.png` and `opengraph-image.png`. These now use the cookie mascot brand
identity for browser icons and social sharing.

The site serves the new brand illustrations from `public/brand/`:

| File                   | Use                                                           |
| ---------------------- | ------------------------------------------------------------- |
| `cookie-mark.webp`     | Small brand mark in the navigation, vision section and footer |
| `cookie-mascot.webp`   | Hero illustration of the cookie character with a laptop       |
| `feature-create.webp`  | Create capability illustration                                |
| `feature-refine.webp`  | Refine capability illustration                                |
| `feature-connect.webp` | Connect capability illustration                               |

The source PNGs and generation briefs are documented in
[`assets/brand/README.md`](assets/brand/README.md). The older
`public/cookiegeekvision*` files are retained in the repository but are no longer
used as the page's main artwork.

## Notes for future changes

- **Colour palette.** `src/app/globals.css` defines the brand colours as CSS
  variables in `:root`: night, cocoa, gold, cyan and paper. Keep the focus colours
  legible when changing either dark or light surfaces.
- **Motion is CSS-only.** The hero entrance, glowing nodes and hover feedback use
  CSS animations and transitions. `prefers-reduced-motion` disables the hero and
  node animations and the main hover transforms.
- **Focus styling.** A global `:focus-visible` outline is adjusted for dark and
  light sections in `src/app/globals.css`.
- **`tsconfig.json` is owned by Next.js.** `next build` re-adds `allowJs` and reflows
  the file, which is why it is excluded from Prettier.
- **`cn()` is server-only.** It wraps `tailwind-merge`; importing it from a client
  component ships the class-conflict table to the browser, so client components
  should use `clsx` from `"clsx"` directly.
- **There is no `next/link`.** The site has a single route, so `<Link>` could not
  enable any client-side navigation while costing about 3.8 kB gzip. All navigation
  is plain anchors, including the logo; `Navbar.tsx` carries a scoped
  eslint-disable for `@next/next/no-html-link-for-pages` that explains the
  trade-off.
- **Icons.** The menu and close controls are inlined in
  `src/components/ui/icons.tsx`. The feature sections use the brand illustrations
  listed above.
