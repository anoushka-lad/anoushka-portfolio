"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../ScalingContainer";

const Figure2b = () => {

  const items = [
    {
      label: "Key Moments",
      icon: (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
          <circle cx="32" cy="32" r="6" fill="currentColor" className="text-foreground" />
          <line x1="0" y1="32" x2="8" y2="32" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        </svg>
      ),
    },
    {
      label: "Standardized\nAttributes",
      icon: (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
          <circle cx="32" cy="20" r="5" fill="currentColor" className="text-foreground" />
          <circle cx="32" cy="32" r="5" fill="currentColor" className="text-foreground" />
          <circle cx="32" cy="44" r="5" fill="currentColor" className="text-foreground" />
        </svg>
      ),
    },
    {
      label: "Emerging\nPatterns",
      isGrid: true,
    },
    {
      label: "Provisional\nPersonas",
      isDashed: true,
    },
    {
      label: "Personas",
      isFolded: true,
    },
  ];

  return (
    <ScalingContainer designWidth={700}>
      <div className="flex justify-center items-end gap-20 py-4">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className="flex flex-col items-center gap-5 cursor-pointer"
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {item.isGrid ? (
            <motion.div 
              className="grid grid-cols-4 gap-1.5"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {[...Array(16)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-4 h-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  viewport={{ once: true }}
                >
                  <svg viewBox="0 0 16 16" className="w-full h-full">
                    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
                    <circle cx="8" cy="8" r="4" fill="currentColor" className="text-foreground" />
                  </svg>
                </motion.div>
              ))}
            </motion.div>
          ) : item.isDashed ? (
            <motion.div 
              className="w-14 h-14 border-2 border-dashed border-foreground"
              whileHover={{ borderStyle: "solid", rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
          ) : item.isFolded ? (
            <motion.div 
              className="relative w-14 h-14"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg viewBox="0 0 56 56" className="w-full h-full">
                <polygon 
                  points="0,0 44,0 56,12 56,56 0,56" 
                  fill="currentColor" 
                  className="text-foreground"
                />
                <polygon 
                  points="44,0 44,12 56,12" 
                  fill="hsl(var(--muted))"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div 
              className="relative w-16 h-16"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>
          )}
          <span className="text-sm font-display text-[#343434] text-center leading-tight whitespace-pre-line">
            {item.label}
          </span>
        </motion.div>
      ))}
      </div>
    </ScalingContainer>
  );
};

export default Figure2b;