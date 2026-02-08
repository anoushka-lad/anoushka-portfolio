# Anoushka Lad — UX Portfolio

A UX research and design portfolio built with Next.js, featuring 3 interactive case studies with Framer Motion animations on a warm parchment design theme.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3 + CSS custom properties
- **Animations:** Framer Motion
- **UI Primitives:** Radix UI (dialog, tooltip, toast)
- **Fonts:** Cormorant Garamond + Inter (via `next/font`)
- **Deployment:** Vercel

## Getting Started

```sh
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, providers)
│   ├── page.tsx                # Home — constellation diagram
│   ├── case-study-1/           # Persona development case study
│   ├── case-study-2/           # Usability benchmarking case study
│   ├── case-study-3/           # Healthcare analytics case study
│   ├── (pages)/                # Route group with shared Header/Footer
│   │   ├── about/
│   │   ├── contact/
│   │   └── resume/
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── pages/                  # "use client" content components per route
│   ├── case-study/             # Case study sections, figures, findings
│   │   ├── cs2/                # CS2-specific sections & figures
│   │   ├── figures/            # CS1 figure components
│   │   ├── findings/           # Persona cards, grid, overlay
│   │   └── icons/
│   ├── home/                   # Constellation diagram, nav card, decorative
│   ├── layout/                 # Header, Footer
│   ├── shared/                 # ConstellationStar
│   └── ui/                     # shadcn/ui primitives (badge, button, dialog, toast, tooltip)
├── hooks/                      # use-mobile, use-toast
├── lib/                        # utils (cn helper)
└── index.css                   # Tailwind + design system tokens
public/
└── images/                     # All static assets (logos, personas, figures, etc.)
```

## Architecture Notes

- Each `page.tsx` is a **Server Component** that exports metadata and renders a `"use client"` content component
- The home page is a full-screen constellation view — no shared Header/Footer
- CS1 and CS2 have inline headers inside their hero components
- Only `/about`, `/contact`, `/resume` share a Header+Footer via the `(pages)` route group layout
- All pages are **statically generated** at build time
- Images in Framer Motion wrappers (`motion.img`) use plain `<img>` tags; `next/image` is not compatible with motion wrapping
