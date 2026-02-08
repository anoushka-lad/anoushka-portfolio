"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="flex items-center justify-center gap-4">
          {/* Left line */}
          <div 
            className="flex-1 max-w-[120px] h-[1px]"
            style={{ backgroundColor: 'hsl(35 18% 30%)' }}
          />
          
          {/* Center star/sunburst */}
          <span 
            className="text-xl"
            style={{ color: 'hsl(35 18% 25%)' }}
          >
            ✺
          </span>
          
          {/* Right line */}
          <div 
            className="flex-1 max-w-[120px] h-[1px]"
            style={{ backgroundColor: 'hsl(35 18% 30%)' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SectionDivider;
