# CLAUDE.md

This file provides context for Claude Code when working on this project.

## Project Overview

UX portfolio for Anoushka Lad. Next.js 16 App Router, deployed on Vercel. Case studies with interactive Framer Motion animations on a warm parchment design theme.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build (all pages should be statically generated `○`)
- `npm start` — Serve production build
- `npm run lint` — ESLint

## Architecture

- **App Router** with `src/app/` directory. All `@/*` paths resolve to `./src/*`.
- Each route page (`src/app/**/page.tsx`) is a **Server Component** that exports `metadata` and renders a `"use client"` content component from `src/components/pages/`.
- The home page (`/`) is full-screen with no Header/Footer.
- Case study pages have inline headers in their hero component (`CaseStudyHeroUnified`).
- The About page (`/about`) is self-contained (no shared Header/Footer) with its own dark hero, project grid, and bio section.
- Only placeholder pages (`/contact`, `/resume`) share a Header+Footer via the `(pages)` route group layout.
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

- `CaseStudyHeroUnified` — Shared hero for all case studies. Takes `illustrationSrc`, `illustrationAlt`, `titleParts`, and optional `avatarImage`.
- `ConstellationStar` — Shared decorative SVG star used on home page and NavigationCard.
- `PersonaGrid` / `PersonaCard` / `PersonaOverlay` — Interactive persona system for CS1 findings section.
- Figure components (`Figure1b`, `Figure2a`–`Figure2f`, `Figure4aRotator`, `Figure4bRotator`, etc.) — Animated data visualizations.
- `SectionHeader` — Reusable section heading with gutter-positioned star and rule line.

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

---

# Feature Porting Guide — COMPLETE

All features from the reference codebase (`~/Desktop/remix-of-anoushka-s-portfolio/`) have been reviewed and either ported or intentionally scrapped. The porting process is finished.

## Status

| ID | Feature | Status |
|----|---------|--------|
| F1 | About Page (`/about`) | Ported |
| F2 | Case Study 3: BNN Bloomberg Ad Experiences (`/case-study-3`) | Ported |
| F3 | Case Study 4: Speech-Affirming Video Conferencing (`/case-study-4`) | Scrapped — placeholder stub kept |
| F4 | Case Study 2: Method Figures (Figure2bCS2, Figure2cCS2) | Ported |
| F5 | Home Page: Constellation Diagram | Already matched — no changes needed |
| F6 | Home Page: Moon Phases Decoration | Already matched — no changes needed |
| F7 | Home Page: Background & Layout | Already matched — no changes needed |
| F8 | Navigation Card: Expanded to 4 CS + About | Scrapped |
| F9 | Header: About Link | Already matched — no changes needed |

## Porting Rules (preserved for future reference)

If new features are added to the remix codebase later:

1. **Pages**: `src/app/<route>/page.tsx` (Server Component with metadata) + `src/components/pages/<Name>Content.tsx` (`"use client"`).
2. **Case study sections**: `src/components/case-study/cs<N>/`, figures in `cs<N>/figures/`.
3. **Images**: `import` → `const foo = "/images/..."`. Copy assets to `public/images/`.
4. **Links**: `<Link to=...>` → `<Link href=...>`. `useLocation()` → `usePathname()`.
5. **Directives**: Add `"use client"` for any file using `framer-motion`, hooks, or `usePathname`.
6. **Reuse**: `CaseStudyHeroUnified`, `FigureWrapper`, `SectionHeader`, `SectionDivider`, `TldrSection`.
7. **Quality**: `npm run build` (all `○`), `npm run lint`, no new deps, strict TypeScript.
