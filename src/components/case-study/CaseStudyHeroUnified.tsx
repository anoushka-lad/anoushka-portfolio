"use client";

import { motion } from "framer-motion";

interface TitlePart {
  text: string;
  style: "normal" | "italic" | "bold" | "boldItalic";
}

interface CaseStudyHeroUnifiedProps {
  titleParts: TitlePart[];
  avatarImage?: string;
  illustrationSrc: string;
  illustrationAlt: string;
}

const CaseStudyHeroUnified = ({
  titleParts,
  avatarImage,
  illustrationSrc,
  illustrationAlt,
}: CaseStudyHeroUnifiedProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 section-padding pt-16 pb-8 flex flex-col items-center">
        {/* Illustration */}
        <motion.div
          initial={{ y: -20, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <motion.img
            src={illustrationSrc}
            alt={illustrationAlt}
            className="w-40 h-auto md:w-52 lg:w-60"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Title with Avatar */}
        <div className="relative w-full flex justify-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cs-display-title text-center case-hero-column"
          >
            {titleParts.map((part, index) => {
              let className = "";
              if (part.style === "italic") {
                className = "italic";
              } else if (part.style === "bold") {
                className = "font-bold";
              } else if (part.style === "boldItalic") {
                className = "font-bold italic";
              }
              return (
                <span key={index} className={className}>
                  {part.text}
                </span>
              );
            })}
          </motion.h1>

          {/* Avatar - positioned to the right of title */}
          {avatarImage && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute right-0 md:right-[5%] lg:right-[10%] bottom-0"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full ring-[3px] ring-[hsl(var(--decorative-blue))] overflow-hidden shadow-lg">
                <img
                  src={avatarImage}
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeroUnified;
