"use client";

import { motion } from "framer-motion";
import ConstellationDiagram from "@/components/home/ConstellationDiagram";
import NavigationCard from "@/components/home/NavigationCard";
import DecorativeElements from "@/components/home/DecorativeElements";

const rusticPaperBg = "/images/rustic-paper-bg.jpg";

const HomeContent = () => {
  return (
    <div
      className="h-screen w-screen overflow-hidden relative"
      style={{
        backgroundImage: `url(${rusticPaperBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <DecorativeElements />

      {/* Main content */}
      <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-center gap-0 lg:gap-2 xl:gap-4 w-full max-w-[1400px] -ml-16 lg:-ml-24">
          {/* Constellation Diagram - scales to fit */}
          <motion.div
            className="hidden md:flex items-center justify-center flex-1 min-w-0"
            style={{ maxHeight: '85vh' }}
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
