"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../../ScalingContainer";

const bnnBloomberg = "/images/logos/bnn-bloomberg.png";
const cbcNews = "/images/logos/cbc-news.png";
const cnbc = "/images/logos/cnbc.png";
const cnn = "/images/logos/cnn.png";

const hexPath = "M 50 5 L 92 28 L 92 72 L 50 95 L 8 72 L 8 28 Z";

const HexagonLogo = ({ src, alt, label, sublabel, delay = 0 }: { src: string; alt: string; label?: string; sublabel?: string; delay?: number }) => {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -3 }}
    >
      <motion.div
        className="relative w-44 h-44"
        whileHover={{ rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Hexagon outline with path draw animation */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d={hexPath}
            fill="none"
            stroke="hsl(35 25% 35%)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Logo centered within hexagon */}
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>

      {label && (
        <div className="text-center mt-2">
          <motion.p
            className="font-display text-sm text-foreground"
            whileHover={{ letterSpacing: "0.05em" }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.p>
          {sublabel && (
            <p className="font-display text-xs text-muted-foreground">{sublabel}</p>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Figure1aCS3 = () => {
  return (
    <ScalingContainer designWidth={760} className="py-4">
      <div className="flex items-start justify-center gap-5">
      {/* BNN Bloomberg - rectangular blue logo */}
      <motion.div
        className="flex flex-col items-center cursor-pointer mt-5"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <div className="rounded-md overflow-hidden shadow-sm" style={{ width: 130, height: 115 }}>
          <img
            src={bnnBloomberg}
            alt="BNN Bloomberg"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      <HexagonLogo src={cbcNews} alt="CBC News" label="Competitor #1" sublabel="CBC News" delay={0.1} />
      <HexagonLogo src={cnbc} alt="CNBC" label="Competitor #2" sublabel="CNBC News" delay={0.2} />
      <HexagonLogo src={cnn} alt="CNN" label="Competitor #3" sublabel="CNN" delay={0.3} />
      </div>
    </ScalingContainer>
  );
};

export default Figure1aCS3;
