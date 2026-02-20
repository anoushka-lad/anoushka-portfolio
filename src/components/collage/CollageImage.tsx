"use client";

import { motion, useAnimation } from "framer-motion";
import type { CollageImageData } from "./collageData";

interface CollageImageProps {
  data: CollageImageData;
}

function getHoverConfig(id: string, rotation: number) {
  switch (id) {
    case 'tiger-stamp':
      return {
        scale: 1.04,
        rotate: rotation + 2,
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
      };
    case 'disco-ball':
      return {
        x: 3,
        filter: 'brightness(1.15)',
      };
    case 'blue-dragon':
      return {
        scale: 1.03,
        y: -5,
        filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15))',
      };
    case 'card-spades':
    case 'card-queen':
      return {
        scale: 1.03,
        rotate: rotation + 2,
        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.15))',
      };
    case 'bookshelf':
      return {
        filter: 'brightness(1.08) contrast(1.03)',
      };
    case 'f1-car':
      return {
        x: 6,
        scale: 1.03,
        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.15))',
      };
    case 'gold-frame-bunny':
      return {
        scale: 1.04,
        rotate: 0,
        filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.2))',
      };
    case 'cd-disc':
      return {
        rotate: rotation + 8,
        filter: 'brightness(1.12)',
      };
    case 'concert-ticket':
      return {
        scale: 1.03,
        skewY: 0.5,
        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.12))',
      };
    case 'sun-face':
      return {
        rotate: rotation + 4,
      };
    case 'coffee-ring':
      return {
        filter: 'brightness(1.05)',
      };
    default:
      // "THAT'S HOT" letters + peonies
      return {
        scale: 1.04,
        rotate: rotation + 1,
        filter: 'drop-shadow(0 4px 10px rgba(120, 60, 30, 0.2))',
      };
  }
}

export default function CollageImage({ data }: CollageImageProps) {
  const { id, src, alt, top, width, rotation, zIndex } = data;
  const controls = useAnimation();
  const isEarring = id === 'earring-back' || id === 'earring-front';

  const horizontalPos = data.anchor === 'right'
    ? { right: `${data.right}px`, left: 'auto' as const }
    : { left: `${data.left}px`, right: 'auto' as const };

  const transition = { duration: 0.3, ease: 'easeInOut' as const };

  if (isEarring) {
    return (
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
        initial={{ rotate: rotation }}
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
      initial={{ rotate: rotation }}
      animate={{ rotate: rotation }}
      style={{
        position: 'absolute',
        ...horizontalPos,
        top: `${top}px`,
        width: `${width}px`,
        height: 'auto',
        zIndex,
        cursor: 'pointer',
        userSelect: 'none',
      }}
      whileHover={getHoverConfig(id, rotation)}
      transition={transition}
    />
  );
}
