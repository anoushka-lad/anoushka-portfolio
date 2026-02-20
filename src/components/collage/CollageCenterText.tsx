"use client";

import { motion } from "framer-motion";

export default function CollageCenterText() {
  return (
    <div
      className="absolute z-10 text-center"
      style={{ left: '50%', top: '421px', transform: 'translate(-50%, -50%)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <h1
          className="font-serif font-semibold"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: '#343434',
            lineHeight: 1.1,
          }}
        >
          Anoushka Lad
        </h1>
        <p
          className="font-sans font-light uppercase mt-3"
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)',
            color: '#343434',
            letterSpacing: '0.3em',
          }}
        >
          Product &amp; Research
        </p>
      </motion.div>
    </div>
  );
}
