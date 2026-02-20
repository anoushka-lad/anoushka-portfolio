"use client";

import { motion } from "framer-motion";
import type { CollageImageData } from "./collageData";

interface CollageImageProps {
  data: CollageImageData;
}

export default function CollageImage({ data }: CollageImageProps) {
  const { src, alt, top, width, rotation, zIndex } = data;

  const horizontalPos = data.anchor === 'right'
    ? { right: `${data.right}px`, left: 'auto' as const }
    : { left: `${data.left}px`, right: 'auto' as const };

  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      loading={data.id === 'disco-ball' || data.id === 'gold-frame-bunny' ? 'eager' : 'lazy'}
      style={{
        position: 'absolute',
        ...horizontalPos,
        top: `${top}px`,
        width: `${width}px`,
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
