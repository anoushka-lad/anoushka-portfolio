# CLAUDE.md

This file provides context for Claude Code when working on this project.

## Project Overview

UX portfolio for Anoushka Lad. Next.js 16 App Router, deployed on Vercel. Three detailed case studies with interactive Framer Motion animations on a warm parchment design theme.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build (all pages should be statically generated `○`)
- `npm start` — Serve production build
- `npm run lint` — ESLint

## Architecture

- **App Router** with `src/app/` directory. All `@/*` paths resolve to `./src/*`.
- Each route page (`src/app/**/page.tsx`) is a **Server Component** that exports `metadata` and renders a `"use client"` content component from `src/components/pages/`.
- The home page (`/`) is full-screen with no Header/Footer.
- Case study pages (CS1, CS2) have inline headers in their hero component (`CaseStudyHeroUnified`).
- Only placeholder pages (`/about`, `/contact`, `/resume`) share a Header+Footer via the `(pages)` route group layout.
- Framer Motion components must have `"use client"` directive. Any file using `framer-motion`, React hooks (`useState`, `useEffect`), or `usePathname` needs it.

## Styling

- **Tailwind CSS 3** with CSS custom properties for theming (defined in `src/index.css`).
- Font families use CSS variables: `--font-cormorant` (serif) and `--font-inter` (sans), loaded via `next/font/google` in the root layout.
- Design tokens use HSL without the `hsl()` wrapper in CSS vars (e.g., `--background: 38 35% 92%`), consumed as `hsl(var(--background))` in Tailwind config.

## Images

- All static assets live in `public/images/`. Reference them as string paths (`"/images/foo.png"`), NOT as imports.
- Do NOT use `import` for images — the old Vite-style `import img from "@/assets/..."` pattern was removed during migration.
- Use `next/image` for static images where possible, EXCEPT images wrapped in `motion.img` (Framer Motion is incompatible with next/image).
- `rustic-paper-bg.jpg` is a compressed JPEG (178KB) used as background texture in NavigationCard, PersonaCard, PersonaOverlay, and FigureWrapper.

## Key Components

- `CaseStudyHeroUnified` — Shared hero for all 3 case studies. Takes `illustrationSrc`, `illustrationAlt`, `titleParts`, and optional `avatarImage`.
- `ConstellationStar` — Shared decorative SVG star used on home page and NavigationCard.
- `PersonaGrid` / `PersonaCard` / `PersonaOverlay` — Interactive persona system for CS1 findings section.
- Figure components (`Figure1b`, `Figure2a`–`Figure2f`, `Figure4aRotator`, `Figure4bRotator`, etc.) — Animated data visualizations.

## Dependencies

Kept intentionally minimal after migration cleanup:
- **UI:** `framer-motion`, `lucide-react`, Radix UI (dialog, tooltip, toast, slot), `class-variance-authority`, `sonner`
- **Styling:** `tailwindcss`, `tailwindcss-animate`, `tailwind-merge`, `clsx`
- No data fetching libraries, no state management libraries, no form libraries

## Common Gotchas

- Adding a new component that uses `framer-motion` or React hooks? Add `"use client"` as the first line.
- Adding a new page? Create `src/app/<route>/page.tsx` (Server Component with metadata) and `src/components/pages/<Name>Content.tsx` ("use client" component).
- The tailwind config uses `var(--font-cormorant)` / `var(--font-inter)` for fonts, NOT hardcoded font names.
- TypeScript is in strict mode. All types must be explicit where inference doesn't cover them.
