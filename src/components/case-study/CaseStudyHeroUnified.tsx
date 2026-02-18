"use client";

import { motion } from "framer-motion";

interface TitlePart {
  text: string;
  style: "normal" | "italic" | "bold" | "boldItalic";
}

interface CaseStudyHeroUnifiedProps {
  titleParts: TitlePart[];
  illustrationSrc: string;
  illustrationAlt: string;
}

const CaseStudyHeroUnified = ({
  titleParts,
  illustrationSrc,
  illustrationAlt,
}: CaseStudyHeroUnifiedProps) => {
  return (
    <section className="overflow-hidden">
      {/* Main Content */}
      <div className="section-padding pt-16 pb-8 flex flex-col items-center">
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

        {/* Title */}
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
      </div>
    </section>
  );
};

export default CaseStudyHeroUnified;
