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

# Feature Porting Guide

There is a reference codebase (older Vite + React Router version) at:

```
~/Desktop/remix-of-anoushka-s-portfolio/
```

It contains new features that have not yet been ported to this Next.js project. This section is a catalog of those features so they can be selectively ported on request.

**How this works:** You (Anoushka) pick a feature from the catalog below, describe any tweaks you want, and Claude will handle the technical porting. You don't need to think about framework differences, file conventions, or code patterns — just say what you want and how you want it to look/behave.

---

## Porting Rules (for Claude)

Every time you port code from the reference codebase, follow these rules mechanically:

### File structure
1. **New pages** need two files: `src/app/<route>/page.tsx` (Server Component exporting `metadata`) and `src/components/pages/<Name>Content.tsx` (`"use client"` component with the actual UI).
2. **New case study sections** go in `src/components/case-study/cs<N>/` matching the existing pattern for CS1 and CS2.
3. **New figure components** go in `src/components/case-study/cs<N>/figures/`.

### Code translation
4. Convert every `import foo from "@/assets/..."` → `const foo = "/images/..."` (string path constant).
5. Convert `<Link to=...>` → `<Link href=...>` using `import Link from "next/link"`.
6. Convert `useLocation()` → `usePathname()` using `import { usePathname } from "next/navigation"`.
7. Add `"use client"` as the very first line of any file that uses `framer-motion`, React hooks (`useState`, `useEffect`, `useRef`), or `usePathname`.
8. Remove any `react-router-dom` imports entirely.

### Assets
9. Copy required image files from `~/Desktop/remix-of-anoushka-s-portfolio/src/assets/` → `public/images/` in this project.
10. Large PNGs used as backgrounds (like paper textures) should be compressed to JPEG where possible.

### Reuse existing components — do NOT duplicate
11. **Do NOT create new hero components.** The reference repo has `CaseStudyHero3.tsx` and `CaseStudyHero4.tsx` — these are near-identical to `CaseStudyHeroUnified` which already exists here. Just pass different props (`illustrationSrc`, `illustrationAlt`, `titleParts`, `avatarImage`) to `CaseStudyHeroUnified`.
12. **Do NOT create a new CaseStudyPagination.** The one in this repo already works. If new case study pages are added, just update the `pages` array inside `CaseStudyPagination.tsx` to include the new routes.
13. Reuse `FigureWrapper`, `SectionDivider`, `TldrSection`, and `SectionHeader` rather than inlining equivalents.
14. The sunburst SVG icon used at the top of every section in the reference codebase should use the existing `SectionHeader` component or the pattern established in this repo, not be copy-pasted inline.

### Quality checks
15. After porting, run `npm run build` — every page must statically generate (marked `○` in output). Fix any errors.
16. Run `npm run lint` and fix any warnings.
17. Do NOT add new npm dependencies. Everything needed is already installed.
18. Keep TypeScript strict — no `any` types, no `@ts-ignore`.

---

## Feature Catalog

Features are grouped by area. Each has an ID you can reference (e.g., "I want F3" or "port the About page").

### New Pages

#### F1 — About Page (`/about`)

A standalone full page with your bio, project showcase, and social links. Three sections:

- **Dark hero** at the top with a slowly rotating zodiac/celestial wheel illustration and your name in large serif text.
- **My Projects** grid showing all case studies as ornamental cards with rustic-paper backgrounds, SVG frames, floating illustrations that bob up and down, and numbered labels.
- **My Story** section with your circular avatar photo on the left with social icon links (LinkedIn, Resume, Email), and biographical paragraphs on the right.
- **Custom footer** with decorative divider and navigation links.

This page does NOT use the shared Header/Footer — it's self-contained like the home page.

**Source files:**
- `src/pages/About.tsx`
- Assets: `about-avatar.png`, `about-project-{1,2,3}.png`, `icon-linkedin.png`, `icon-resume.png`, `icon-email.png`, `white-paper-bg.jpg`, `zodiac-wheel-light.png`

---

#### F2 — Case Study 3: Redesigning Ad Experiences for Business News (`/case-study-3`)

Full case study about redesigning ad experiences for BNN Bloomberg. Topic: balancing reader experience against ad revenue.

**Sections:** Problem, Goal, Method, Findings, Recommendations (4 recommendations with screenshot figures), Next Steps, Reflection.

**Animated figures:**
- Hexagonal competitor logo display (BNN Bloomberg, CBC News, CNBC, CNN) with animated path-draw borders
- Complex orbital user diagram with 5 rotating user medallions, task cards, and evaluation criteria
- Grouped bar chart showing scores across 3 categories for 4 outlets

**Source files:**
- `src/pages/CaseStudy3.tsx`
- `src/components/case-study/CaseStudyHero3.tsx` (do NOT port — use `CaseStudyHeroUnified` instead)
- `src/components/case-study/cs3/` (all section and figure files)
- Assets: `case-study-3-illustration.png`, `logos/cbc-news.png`, `logos/cnbc.png`, `logos/cnn.png`, `user-medallion-{1-5}.png`, `cs3-fig-3{a-d}.png`

---

#### F3 — Case Study 4: Speech-Affirming Video Conferencing (`/case-study-4`)

Case study about prototyping a speech-affirming video conferencing tool for people who stutter. This is **partially complete** — the Method section is fully built with 10 animated figures, but Findings, Recommendations, Next Steps, and Reflection are placeholder stubs ("coming soon").

**Sections:** Context (unique — academic definitions/citations), Problem, Goal, Method (4 phases), Findings (stub), Recommendations (stub), Next Steps (stub), Reflection (stub).

**Animated figures (10):**
- Triangle constellation diagram
- Market landscape bubbles
- Segmented analysis wheel with 7 hand-drawn icons (308 lines)
- Stamurai audit note cards
- Comparative matrix with persona icons
- Experience mapping grid (Before/During/After)
- Solution synthesis flow
- Coded transcript with color-coded codebook
- Bipartite diagram (themes → sub-categories → large-categories)
- Pain points to design opportunities flow

**Source files:**
- `src/pages/CaseStudy4.tsx`
- `src/components/case-study/CaseStudyHero4.tsx` (do NOT port — use `CaseStudyHeroUnified` instead)
- `src/components/case-study/cs4/` (all section and figure files)
- Assets: `cs4-hero-icon.png`, `case-study-4-illustration.png`

**Note:** `Figure2jCS4` is just a re-export of `Figure1aCS3` from CS3. If porting CS4 without CS3, that figure needs to be moved or the dependency resolved.

---

### Additions to Existing Pages

#### F4 — Case Study 2: New Method Figures

Two new animated figures added to CS2's Method section, plus expanded written content covering 4 phases:

- **Figure2bCS2** — Orbital user diagram showing users → 10 task icons in a grid → evaluation criteria (quantitative + qualitative). 368 lines.
- **Figure2cCS2** — Venn diagram of Desirability-Viability-Feasibility with task icons positioned in the overlap zones.
- **MethodSection2** content expanded with Phase 3 (assistive technology protocol) and Phase 4 (business priorities/reproducibility).

**Source files:**
- `src/components/case-study/cs2/figures/Figure2bCS2.tsx`
- `src/components/case-study/cs2/figures/Figure2cCS2.tsx`
- `src/components/case-study/cs2/MethodSection2.tsx` (diff against existing version in this repo)

---

#### F5 — Home Page: Redesigned Constellation Diagram

Major visual upgrade to the constellation diagram on the home page. Changes from pure SVG to a hybrid approach using PNG ring assets with CSS filters for an engraved dark aesthetic.

- 12 unique SVG node icons (star, diamond, crescent, eye, hexagon, etc.) each with unique animations
- Auto-pulse feature: connection lines brighten every 5 seconds when idle
- PNG constellation assets (sunburst, dashed/dotted ellipses, arc rings)
- Responsive scaling with container dimension tracking

**Source files:**
- `src/components/home/ConstellationDiagram.tsx`
- Assets: `constellation/sunburst.png`, `constellation/ellipse-dashed.png`, `constellation/ellipse-dotted.png`, `constellation/arc-ring-{1-6}.png`, `center-star.png`

---

#### F6 — Home Page: Moon Phases Decoration

Updated decorative elements with a moon phases illustration and animated sparkle SVGs.

**Source files:**
- `src/components/home/DecorativeElements.tsx`
- Assets: `moon-phases.png`

---

#### F7 — Home Page: Background & Layout Tweaks

Home page now uses rustic paper as a full-screen background image (CSS `backgroundImage`) instead of just the plain background color. Layout positioning adjusted with negative margins to shift content left.

**Source files:**
- `src/pages/Index.tsx` (diff against `src/components/pages/HomeContent.tsx` in this repo)

---

#### F8 — Navigation Card: Expanded to 4 Case Studies + About

Navigation card updated to show all 4 case studies (was 2) and an About section. Uses custom PNG icons for section headers instead of lucide-react icons.

**Source files:**
- `src/components/home/NavigationCard.tsx`
- Assets: `icon-about.png`, `icon-case-studies.png`, `icon-contact.png`, `icon-resume-nav.png`

---

#### F9 — Header: About Link

Simple addition of an "About" navigation link in the site header.

**Source files:**
- `src/components/layout/Header.tsx`

---

## Feature Dependencies

Some features depend on others. If you request one, Claude may need to port its dependency first.

| Feature | Depends on |
|---------|-----------|
| F2 (CS3) | None |
| F3 (CS4) | F2 partially (Figure2jCS4 re-exports Figure1aCS3) |
| F4 (CS2 figures) | None |
| F5 (Constellation) | None |
| F6 (Moon phases) | None |
| F7 (Home background) | None |
| F8 (Nav card expanded) | Whichever case studies are being added (for the links to work) |
| F9 (Header about link) | About page should exist at `/about` (F1 or current placeholder) |
| F1 (About page) | F9 if you want header nav to link to it |
