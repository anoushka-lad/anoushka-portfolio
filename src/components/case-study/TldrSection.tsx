"use client";

import { motion } from "framer-motion";

interface TldrSectionProps {
  summary: string;
}

const TldrSection = ({ summary }: TldrSectionProps) => {
  return (
    <motion.section 
      className="section-padding py-16 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <h2 className="font-sans text-base font-semibold text-foreground tracking-wide">
          tl;dr
        </h2>
        <div className="w-full h-px bg-accent" />
        <p className="font-sans text-sm leading-relaxed text-muted-foreground pt-2">
          {summary}
        </p>
      </div>
    </motion.section>
  );
};

export default TldrSection;
