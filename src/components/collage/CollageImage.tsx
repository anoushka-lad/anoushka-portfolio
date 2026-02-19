"use client";

import { motion } from "framer-motion";
import type { CollageImageData } from "./collageData";

const EAGER_IDS = new Set([
  'coffee-ring',    // zIndex 9
  'concert-ticket', // zIndex 8
  'earring-front',  // zIndex 8
  'disco-ball',     // zIndex 7
  'earring-back',   // zIndex 7
]);

interface CollageImageProps {
  data: CollageImageData;
}

export default function CollageImage({ data }: CollageImageProps) {
  const { id, src, alt, position, size, rotation, zIndex } = data;

  return (
    <motion.img
      src={`/images/collage/${src}`}
      alt={alt}
      draggable={false}
      loading={EAGER_IDS.has(id) ? 'eager' : 'lazy'}
      style={{
        position: 'absolute',
        left: `${position.x}vw`,
        top: `${position.y}vh`,
        width: `${size}vw`,
        height: 'auto',
        rotate: `${rotation}deg`,
        zIndex,
        willChange: 'transform',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      whileHover={{
        scale: 1.05,
        rotate: rotation + 2,
        y: -4,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
}
