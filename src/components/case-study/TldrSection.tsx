"use client";

import { motion } from "framer-motion";

interface TldrSectionProps {
  summary: string;
}

const TldrSection = ({ summary }: TldrSectionProps) => {
  return (
    <motion.section 
      className="section-padding"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="case-column space-y-3">
        <h2 className="cs-section-heading">
          tl;dr
        </h2>
        <div className="w-full h-px" style={{ backgroundColor: '#C1BFBA' }} />
        <p className="cs-body pt-2">
          {summary}
        </p>
      </div>
    </motion.section>
  );
};

export default TldrSection;
