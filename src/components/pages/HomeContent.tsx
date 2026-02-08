"use client";

import { motion } from "framer-motion";
import ConstellationDiagram from "@/components/home/ConstellationDiagram";
import NavigationCard from "@/components/home/NavigationCard";
import DecorativeElements from "@/components/home/DecorativeElements";
import ConstellationStar from "@/components/shared/ConstellationStar";

const HomeContent = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative">
      {/* Subtle textured background overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Elegant page frame */}
      <div className="absolute inset-4 pointer-events-none z-10">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* Outer thick frame border */}
          <rect
            x="0" y="0"
            width="100%" height="100%"
            fill="none"
            stroke="hsl(35 18% 35%)"
            strokeWidth="3"
            rx="12"
          />

          {/* Outer dotted border */}
          <rect
            x="6" y="6"
            width="calc(100% - 12px)" height="calc(100% - 12px)"
            fill="none"
            stroke="hsl(35 18% 45%)"
            strokeWidth="1"
            strokeDasharray="6 3"
            rx="10"
          />

          {/* Inner solid frame border */}
          <rect
            x="12" y="12"
            width="calc(100% - 24px)" height="calc(100% - 24px)"
            fill="none"
            stroke="hsl(35 18% 50%)"
            strokeWidth="1"
            rx="8"
          />
        </svg>

        {/* Corner flourishes - positioned relative to the frame */}
        <svg className="absolute top-0 left-0 w-16 h-16" viewBox="0 0 64 64">
          <path d="M 8 28 Q 8 8 28 8" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="2" />
          <path d="M 12 34 Q 12 12 34 12" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2" fill="hsl(35 18% 40%)" />
        </svg>

        <svg className="absolute top-0 right-0 w-16 h-16" viewBox="0 0 64 64">
          <path d="M 36 8 Q 56 8 56 28" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="2" />
          <path d="M 30 12 Q 52 12 52 34" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1.5" />
          <circle cx="56" cy="8" r="2" fill="hsl(35 18% 40%)" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-16 h-16" viewBox="0 0 64 64">
          <path d="M 28 56 Q 8 56 8 36" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="2" />
          <path d="M 34 52 Q 12 52 12 30" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1.5" />
          <circle cx="8" cy="56" r="2" fill="hsl(35 18% 40%)" />
        </svg>

        <svg className="absolute bottom-0 right-0 w-16 h-16" viewBox="0 0 64 64">
          <path d="M 56 36 Q 56 56 36 56" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="2" />
          <path d="M 52 30 Q 52 52 30 52" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1.5" />
          <circle cx="56" cy="56" r="2" fill="hsl(35 18% 40%)" />
        </svg>
      </div>

      {/* Constellation stars in corners */}
      <div className="absolute top-6 left-6 z-20">
        <ConstellationStar />
      </div>
      <div className="absolute top-6 right-6 z-20">
        <ConstellationStar />
      </div>
      <div className="absolute bottom-6 left-6 z-20">
        <ConstellationStar />
      </div>
      <div className="absolute bottom-6 right-6 z-20">
        <ConstellationStar />
      </div>

      <DecorativeElements />

      {/* Main content */}
      <div className="relative h-full w-full flex items-center justify-center px-8 lg:px-16">
        <div className="flex items-center justify-center gap-20 w-full max-w-[1400px]">
          {/* Constellation Diagram */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ConstellationDiagram />
          </motion.div>

          {/* Navigation Card */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <NavigationCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
