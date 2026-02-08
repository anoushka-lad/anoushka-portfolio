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
        <h2 className="cs-tldr-label tracking-wide">
          tl;dr
        </h2>
        <div className="w-full h-px bg-accent" />
        <p className="cs-body pt-2">
          {summary}
        </p>
      </div>
    </motion.section>
  );
};

export default TldrSection;
