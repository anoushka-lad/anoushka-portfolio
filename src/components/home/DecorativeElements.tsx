"use client";

import { motion } from "framer-motion";

const moonPhasesImg = "/images/moon-phases.png";

const sparkleVariants = {
  animate: {
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const Sparkle = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className}`}
    variants={sparkleVariants}
    animate="animate"
    style={{ animationDelay: `${delay}s` }}
    initial={{ opacity: 0 }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path d="M4 0L4.5 3.5L8 4L4.5 4.5L4 8L3.5 4.5L0 4L3.5 3.5L4 0Z" fill="hsl(30 15% 40%)" opacity="0.6" />
    </svg>
  </motion.div>
);

const MoonPhases = () => {
  return (
    <motion.div
      className="absolute top-1 left-0 right-0 flex justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="relative">
        <img
          src={moonPhasesImg}
          alt="Moon phases"
          className="h-12 w-auto object-contain"
          style={{ filter: 'brightness(0.6) contrast(1.3)' }}
        />
        <Sparkle className="-top-2 -left-3" delay={0} />
        <Sparkle className="-top-1 right-4" delay={0.8} />
        <Sparkle className="bottom-0 -left-1" delay={1.6} />
        <Sparkle className="top-2 -right-2" delay={2.0} />
        <Sparkle className="bottom-1 right-8" delay={1.2} />
      </div>
    </motion.div>
  );
};

const DecorativeElements = () => {
  return (
    <>
      <MoonPhases />
    </>
  );
};

export default DecorativeElements;
