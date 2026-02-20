"use client";

import { motion } from "framer-motion";
import type { CollageImageData } from "./collageData";

interface CollageImageProps {
  data: CollageImageData;
}

export default function CollageImage({ data }: CollageImageProps) {
  const { id, src, alt, position, anchor, size, rotation, zIndex } = data;

  return (
    <motion.img
      src={`/images/collage/${src}`}
      alt={alt}
      draggable={false}
      loading={id === 'disco-ball' || id === 'gold-frame-bunny' ? 'eager' : 'lazy'}
      style={{
        position: 'absolute',
        ...(anchor === 'right'
          ? { right: `${position.x}vw` }
          : { left: `${position.x}vw` }),
        top: `${position.y}vw`,
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
