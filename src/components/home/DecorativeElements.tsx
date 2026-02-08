"use client";

import { motion } from "framer-motion";

const MoonPhases = () => {
  return (
    <motion.div 
      className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* New moon (dark) */}
      <svg width="16" height="16" viewBox="0 0 24 24" className="text-foreground/40">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.3" />
      </svg>
      
      {/* Waxing crescent */}
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-foreground/50">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M12 2a10 10 0 0 1 0 20 8 8 0 0 0 0-20" fill="currentColor" opacity="0.4" />
      </svg>
      
      {/* First quarter */}
      <svg width="20" height="20" viewBox="0 0 24 24" className="text-foreground/60">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M12 2a10 10 0 0 1 0 20V2z" fill="currentColor" opacity="0.5" />
      </svg>
      
      {/* Waxing gibbous */}
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-foreground/70">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M12 2a10 10 0 0 1 0 20 4 4 0 0 1 0-20" fill="currentColor" opacity="0.6" />
      </svg>
      
      {/* Full moon (center, largest) */}
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 24 24" className="text-foreground/80">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15" />
          {/* Moon details/craters */}
          <circle cx="8" cy="10" r="2" fill="currentColor" opacity="0.1" />
          <circle cx="14" cy="8" r="1.5" fill="currentColor" opacity="0.08" />
          <circle cx="15" cy="14" r="2.5" fill="currentColor" opacity="0.1" />
          <circle cx="9" cy="15" r="1.2" fill="currentColor" opacity="0.08" />
        </svg>
        {/* Gold diamond above full moon */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-accent/70" />
      </div>
      
      {/* Waning gibbous */}
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-foreground/70">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M12 2a10 10 0 0 0 0 20 4 4 0 0 0 0-20" fill="currentColor" opacity="0.6" />
      </svg>
      
      {/* Last quarter */}
      <svg width="20" height="20" viewBox="0 0 24 24" className="text-foreground/60">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M12 2a10 10 0 0 0 0 20V2z" fill="currentColor" opacity="0.5" />
      </svg>
      
      {/* Waning crescent */}
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-foreground/50">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M12 2a10 10 0 0 0 0 20 8 8 0 0 1 0-20" fill="currentColor" opacity="0.4" />
      </svg>
      
      {/* New moon (dark) */}
      <svg width="16" height="16" viewBox="0 0 24 24" className="text-foreground/40">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.3" />
      </svg>
    </motion.div>
  );
};

const DecorativeElements = () => {
  return (
    <>
      {/* Moon phases at top */}
      <MoonPhases />

      {/* Corner star decorations */}
      <svg className="absolute top-12 left-12 w-3 h-3 text-foreground/30" viewBox="0 0 12 12">
        <path d="M6 0L6 12M0 6L12 6M1.75 1.75L10.25 10.25M10.25 1.75L1.75 10.25" stroke="currentColor" strokeWidth="1" />
      </svg>
      
      <svg className="absolute bottom-12 right-12 w-3 h-3 text-foreground/30" viewBox="0 0 12 12">
        <path d="M6 0L6 12M0 6L12 6M1.75 1.75L10.25 10.25M10.25 1.75L1.75 10.25" stroke="currentColor" strokeWidth="1" />
      </svg>
    </>
  );
};

export default DecorativeElements;
