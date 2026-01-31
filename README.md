# Enterprise Landing Page

A static, single-page enterprise website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- **Static Export**: Zero server-side dependencies, ready for hosting on any static site provider (Vercel, GitHub Pages, Netlify, AWS S3).
- **Centralized Config**: All text, links, and settings are managed in `src/data/site.ts`.
- **Performance**: Optimized for speed with lightweight animations and minimal dependencies.
- **Responsive**: Fully responsive design with mobile drawer navigation.
- **Animations**: Subtle scroll and hover effects using Framer Motion (respects `prefers-reduced-motion`).

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3. **Build for Production**
   ```bash
   npm run build
   ```
   The static output will be generated in the `out` directory.

## Customization

### Updating Text & Content
All content is located in `src/data/site.ts`. You can modify the following sections without touching the code:
- **Site Config**: Name, description, logo text.
- **Navbar**: Links and CTA.
- **Hero**: Title, subtitle, feature points, and CTAs.
- **Company Overview**: Stats and description.
- **What We Do**: Feature list with icons.
- **Our Vision**: Quote and vision text.
- **Contact**: CTA text and email link.
- **Footer**: Copyright, social links, and legal links.

### Changing Images
- **Hero Image**: 
  1. Place your new image in the `public` directory (e.g., `public/hero-new.jpg`).
  2. Update `src/data/site.ts`:
     ```typescript
     export const hero = {
       // ...
       image: {
         src: "/hero-new.jpg", // Path relative to public folder
         alt: "New Hero Image Description",
       },
     };
     ```

### Changing Icons
Icons are provided by `lucide-react`. To change an icon:
1. Import the desired icon in `src/data/site.ts`:
   ```typescript
   import { YourNewIcon } from "lucide-react";
   ```
2. Replace the icon in the `features` array in `whatWeDo` object.

### Updating Logo
Currently, the logo is text-based (`siteConfig.logoText`). To use an image logo:
1. Open `src/components/Navbar.tsx`.
2. Replace the text span with a `<Image />` component or `<img>` tag pointing to your logo in `public/`.

## Deployment

Since `output: "export"` is enabled in `next.config.ts`, running `npm run build` generates a static HTML/CSS/JS export in the `out/` folder. You can deploy this folder to any static hosting service.
