"use client";

import { motion, useAnimation } from "framer-motion";
import type { CollageImageData } from "./collageData";

interface CollageImageProps {
  data: CollageImageData;
}

/* ── Click-to-link mapping ──────────────────────────────────────── */

function getLinkUrl(id: string): string | null {
  switch (id) {
    case 'tiger-stamp':
      return 'https://www.goodreads.com/book/show/1774836.The_Palace_of_Illusions';
    case 'disco-ball':
      return 'https://www.youtube.com/watch?v=hak180tz2B0';
    case 'card-spades':
    case 'card-queen':
      return 'https://fgbradleys.com/wp-content/uploads/rules/Cabo%20(Kaboo)%20-%20rules.pdf?srsltid=AfmBOooGpnx-OBNbvb2GxYTyTfF5p98jtNoBPdnRBNBMrkkUkfb9EyBF';
    case 'f1-car':
      return 'https://www.youtube.com/watch?v=BrtRk7B8pNE';
    case 'gold-frame-bunny':
      return 'https://www.huntslonem.com/paintings';
    case 'cd-disc':
      return 'https://open.spotify.com/playlist/37i9dQZF1DX0AMssoUKCz7?si=01136bfc071a4511';
    case 'concert-ticket':
      return 'https://www.google.com/search?q=concerts+near+me';
    case 'earring-back':
    case 'earring-front':
      return 'https://www.curiocottage.in/collections/earrings?sort_by=created-descending&filter.p.m.my_fields.type=Chandbalis&filter.p.m.my_fields.type=Jhumkis';
    default:
      return null;
  }
}

/* ── Per-image color correction (global glaze pre-baked in) ─────────
 *  Target: warm-neutral, slightly desaturated, soft-contrast vintage.
 *  Global glaze (sepia 0.04 + saturate 0.96) folded into each value
 *  so every filter is a single pass — no duplicate CSS functions.
 *  Images with a hover drop-shadow include a transparent seed in the
 *  base so Framer Motion can interpolate smoothly.                  */

function getBaseFilter(id: string): string {
  switch (id) {
    case 'tiger-stamp':
      return 'sepia(0.04) saturate(0.96) brightness(1.06) contrast(0.96) drop-shadow(0 0 0 rgba(0,0,0,0))';
    case 'disco-ball':
      return 'sepia(0.23) saturate(0.82) contrast(0.88) brightness(1.04)';
    case 'blue-dragon':
      return 'sepia(0.18) saturate(0.75) contrast(0.94) brightness(1.04) drop-shadow(0 0 0 rgba(0,0,0,0))';
    case 'card-spades':
    case 'card-queen':
      return 'sepia(0.04) saturate(0.96) brightness(1.03) contrast(0.97) drop-shadow(0 0 0 rgba(0,0,0,0))';
    case 'bookshelf':
      return 'sepia(0.12) saturate(0.82) contrast(0.9) brightness(1.06)';
    case 'f1-car':
      return 'sepia(0.14) saturate(0.72) contrast(0.94) drop-shadow(0 0 0 rgba(0,0,0,0))';
    case 'gold-frame-bunny':
      return 'sepia(0.16) saturate(0.69) contrast(0.92) brightness(1.02) drop-shadow(0 0 0 rgba(0,0,0,0))';
    case 'cd-disc':
      return 'sepia(0.22) saturate(0.77) contrast(0.92) brightness(0.97)';
    case 'concert-ticket':
      return 'sepia(0.04) saturate(0.96) contrast(0.97) brightness(1.02) drop-shadow(0 0 0 rgba(0,0,0,0))';
    case 'sun-face':
      return 'sepia(0.04) saturate(0.96) brightness(1.03)';
    case 'earring-back':
    case 'earring-front':
      return 'sepia(0.18) saturate(0.96) brightness(1.05) contrast(0.94)';
    case 'coffee-ring':
      return 'sepia(0.04) saturate(0.96) brightness(1.02)';
    case 'peony-back':
    case 'peony-front':
      return 'sepia(0.09) saturate(0.86) contrast(0.96) drop-shadow(0 0 0 rgba(120,60,30,0))';
    default:
      // letter tiles
      return 'sepia(0.1) saturate(0.96) contrast(0.92) brightness(1.02) drop-shadow(0 0 0 rgba(120,60,30,0))';
  }
}

/* ── Per-image hover configs ────────────────────────────────────────
 *  Hover filter strings include the full base correction so Framer
 *  interpolates between matching function signatures — base filters
 *  are preserved, not replaced.                                     */

function getHoverConfig(id: string, rotation: number) {
  switch (id) {
    case 'tiger-stamp':
      return {
        scale: 1.04,
        rotate: rotation + 2,
        filter: 'sepia(0.04) saturate(0.96) brightness(1.06) contrast(0.96) drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
      };
    case 'disco-ball':
      return {
        x: 3,
        filter: 'sepia(0.23) saturate(0.82) contrast(0.88) brightness(1.15)',
      };
    case 'blue-dragon':
      return {
        scale: 1.03,
        y: -5,
        filter: 'sepia(0.18) saturate(0.75) contrast(0.94) brightness(1.04) drop-shadow(0 6px 12px rgba(0,0,0,0.15))',
      };
    case 'card-spades':
    case 'card-queen':
      return {
        scale: 1.03,
        rotate: rotation + 2,
        filter: 'sepia(0.04) saturate(0.96) brightness(1.03) contrast(0.97) drop-shadow(0 3px 6px rgba(0,0,0,0.15))',
      };
    case 'bookshelf':
      return {
        filter: 'sepia(0.12) saturate(0.82) contrast(0.93) brightness(1.14)',
      };
    case 'f1-car':
      return {
        x: 6,
        scale: 1.03,
        filter: 'sepia(0.14) saturate(0.72) contrast(0.94) drop-shadow(0 3px 6px rgba(0,0,0,0.15))',
      };
    case 'gold-frame-bunny':
      return {
        scale: 1.04,
        rotate: 0,
        filter: 'sepia(0.16) saturate(0.69) contrast(0.92) brightness(1.02) drop-shadow(0 6px 14px rgba(0,0,0,0.2))',
      };
    case 'cd-disc':
      return {
        rotate: rotation + 8,
        filter: 'sepia(0.22) saturate(0.77) contrast(0.92) brightness(1.12)',
      };
    case 'concert-ticket':
      return {
        scale: 1.03,
        skewY: 0.5,
        filter: 'sepia(0.04) saturate(0.96) contrast(0.97) brightness(1.02) drop-shadow(0 3px 6px rgba(0,0,0,0.12))',
      };
    case 'sun-face':
      return {
        rotate: rotation + 4,
      };
    case 'coffee-ring':
      return {
        filter: 'sepia(0.04) saturate(0.96) brightness(1.07)',
      };
    case 'peony-back':
    case 'peony-front':
      return {
        scale: 1.04,
        rotate: rotation + 1,
        filter: 'sepia(0.09) saturate(0.86) contrast(0.96) drop-shadow(0 4px 10px rgba(120,60,30,0.2))',
      };
    default:
      // letter tiles
      return {
        scale: 1.04,
        rotate: rotation + 1,
        filter: 'sepia(0.1) saturate(0.96) contrast(0.92) brightness(1.02) drop-shadow(0 4px 10px rgba(120,60,30,0.2))',
      };
  }
}

export default function CollageImage({ data }: CollageImageProps) {
  const { id, src, alt, top, width, rotation, zIndex } = data;
  const controls = useAnimation();
  const isEarring = id === 'earring-back' || id === 'earring-front';
  const baseFilter = getBaseFilter(id);
  const linkUrl = getLinkUrl(id);

  const horizontalPos = data.anchor === 'right'
    ? { right: `${data.right}px`, left: 'auto' as const }
    : { left: `${data.left}px`, right: 'auto' as const };

  const transition = { duration: 0.3, ease: 'easeInOut' as const };
  const handleClick = linkUrl
    ? () => window.open(linkUrl, '_blank', 'noopener,noreferrer')
    : undefined;

  if (isEarring) {
    return (
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
        initial={{ rotate: rotation, filter: baseFilter }}
        animate={controls}
        style={{
          position: 'absolute',
          ...horizontalPos,
          top: `${top}px`,
          width: `${width}px`,
          height: 'auto',
          zIndex,
          transformOrigin: 'top center',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        whileTap={{ scale: 0.97 }}
        onClick={handleClick}
        onHoverStart={() => {
          controls.start({
            rotate: [rotation - 3, rotation + 3],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          });
        }}
        onHoverEnd={() => {
          controls.stop();
          controls.start({
            rotate: rotation,
            filter: baseFilter,
            transition,
          });
        }}
      />
    );
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      loading={id === 'disco-ball' || id === 'gold-frame-bunny' ? 'eager' : 'lazy'}
      initial={{ rotate: rotation, filter: baseFilter }}
      animate={{ rotate: rotation, filter: baseFilter }}
      style={{
        position: 'absolute',
        ...horizontalPos,
        top: `${top}px`,
        width: `${width}px`,
        height: 'auto',
        zIndex,
        cursor: linkUrl ? 'pointer' : 'default',
        userSelect: 'none',
      }}
      whileHover={getHoverConfig(id, rotation)}
      whileTap={linkUrl ? { scale: 0.97 } : undefined}
      onClick={handleClick}
      transition={transition}
    />
  );
}
