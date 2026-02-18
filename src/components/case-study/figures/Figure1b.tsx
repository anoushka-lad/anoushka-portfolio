"use client";
import { motion } from "framer-motion";
import ScalingContainer from "../ScalingContainer";
const craveLogo = "/images/logos/crave.png";
const ctvLogo = "/images/logos/ctv.png";
const noovoLogo = "/images/logos/noovo.png";
const bnnBloombergLogo = "/images/logos/bnn-bloomberg.png";
const cp24Logo = "/images/logos/cp24.png";
const ctvNewsLogo = "/images/logos/ctv-news.png";
const tsnRdsLogo = "/images/logos/tsn-rds-combined.png";

interface HexagonProps {
  logos: { src: string; alt: string; className?: string }[];
  label: string;
  variant: "left" | "center" | "right";
}

const Hexagon = ({ logos, label }: HexagonProps) => {
  // Same hexagon shape for all - pointed top and bottom
  const hexPath = "M 50 5 L 92 28 L 92 72 L 50 95 L 8 72 L 8 28 Z";

  return (
    <motion.div 
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div 
        className="relative w-56 h-56"
        whileHover={{ rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Hexagon outline */}
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
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        
        {/* Logos container - centered within hexagon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`h-auto object-contain ${logo.className || ""}`}
              style={{
                maxWidth: logos.length === 1 ? "80%" : "70%",
                maxHeight: logos.length === 1 ? "65%" : "30%"
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Label */}
      <motion.span 
        className="mt-4 font-display text-sm text-[#343434]/90"
        whileHover={{ letterSpacing: "0.05em" }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

const Figure1b = () => {

  const entertainmentLogos = [
    { src: craveLogo, alt: "Crave" },
    { src: ctvLogo, alt: "CTV" },
    { src: noovoLogo, alt: "Noovo" },
  ];

  const newsLogos = [
    { src: bnnBloombergLogo, alt: "BNN Bloomberg" },
    { src: cp24Logo, alt: "CP24" },
    { src: ctvNewsLogo, alt: "CTV News" },
  ];

  const sportsLogos = [
    { src: tsnRdsLogo, alt: "TSN and RDS" },
  ];

  return (
    <ScalingContainer designWidth={780} className="py-4">
      <div className="flex flex-row items-center justify-center gap-8">
        <Hexagon logos={entertainmentLogos} label="Entertainment" variant="left" />
        <Hexagon logos={newsLogos} label="News" variant="center" />
        <Hexagon logos={sportsLogos} label="Sports" variant="right" />
      </div>
    </ScalingContainer>
  );
};

export default Figure1b;
