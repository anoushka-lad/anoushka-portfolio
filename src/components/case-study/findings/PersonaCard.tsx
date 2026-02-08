"use client";

import { motion } from "framer-motion";

const rusticPaperBg = "/images/rustic-paper-bg.jpg";
const platformSurferIcon = "/images/persona-platform-surfer.png";
const bingeWatcherIcon = "/images/persona-binge-watcher.png";
const avidViewerIcon = "/images/persona-avid-viewer.png";
const backgroundStreamerIcon = "/images/persona-background-streamer.png";
const socialStreamerIcon = "/images/persona-social-streamer.png";
const rewatcherIcon = "/images/persona-rewatcher.png";

interface PersonaCardProps {
  title: string;
  number: number;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const personaIcons: Record<number, string> = {
  1: platformSurferIcon,
  2: bingeWatcherIcon,
  3: avidViewerIcon,
  4: backgroundStreamerIcon,
  5: socialStreamerIcon,
  6: rewatcherIcon,
};

const personaTitles: Record<number, { line1: string; line2: string }> = {
  1: { line1: "THE PLATFORM", line2: "SURFER" },
  2: { line1: "THE BINGE", line2: "WATCHER" },
  3: { line1: "THE AVID", line2: "VIEWER" },
  4: { line1: "THE BACKGROUND", line2: "STREAMER" },
  5: { line1: "THE SOCIAL", line2: "STREAMER" },
  6: { line1: "THE", line2: "REWATCHER" },
};

const ConstellationStar = () => (
  <svg viewBox="0 0 16 16" className="w-3 h-3">
    <circle cx="8" cy="8" r="2" fill="hsl(35 18% 35%)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={angle}
          x1={8 + Math.cos(rad) * 2.5}
          y1={8 + Math.sin(rad) * 2.5}
          x2={8 + Math.cos(rad) * 5}
          y2={8 + Math.sin(rad) * 5}
          stroke="hsl(35 18% 35%)"
          strokeWidth="0.8"
        />
      );
    })}
  </svg>
);

const PersonaCard = ({ title, number, onClick }: PersonaCardProps) => {
  const iconSrc = personaIcons[number];
  const titleLines = personaTitles[number];

  return (
    <motion.div 
      className="group relative overflow-hidden aspect-[3/4] flex flex-col cursor-pointer"
      style={{
        backgroundImage: `url(${rusticPaperBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
    >
      {/* SVG Frame decorations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 270" preserveAspectRatio="none">
        {/* Outer thick frame border */}
        <rect 
          x="3" y="3" 
          width="194" height="264" 
          fill="none" 
          stroke="hsl(35 18% 35%)" 
          strokeWidth="3"
          rx="4"
        />
        
        {/* Outer dotted border */}
        <rect 
          x="8" y="8" 
          width="184" height="254" 
          fill="none" 
          stroke="hsl(35 18% 45%)" 
          strokeWidth="1"
          strokeDasharray="4 2"
          rx="3"
        />
        
        {/* Inner solid frame border */}
        <rect 
          x="12" y="12" 
          width="176" height="246" 
          fill="none" 
          stroke="hsl(35 18% 50%)" 
          strokeWidth="1"
          rx="2"
        />
        
        {/* Top-left corner flourish - elegant double curve */}
        <path d="M 18 34 Q 18 18 34 18" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 22 40 Q 22 22 40 22" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
        
        {/* Top-right corner flourish */}
        <path d="M 166 18 Q 182 18 182 34" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 160 22 Q 178 22 178 40" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
        
        {/* Bottom-left corner flourish */}
        <path d="M 34 252 Q 18 252 18 236" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 40 248 Q 22 248 22 230" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
        
        {/* Bottom-right corner flourish */}
        <path d="M 182 236 Q 182 252 166 252" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 178 230 Q 178 248 160 248" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
      </svg>
      
      {/* Constellation star corners with hover glow */}
      <div className="absolute top-2 left-2 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>
      <div className="absolute top-2 right-2 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>
      <div className="absolute bottom-2 left-2 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>
      <div className="absolute bottom-2 right-2 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center px-4 py-4 h-full">
        {/* Title - BOLD */}
        <h3 
          className="font-serif text-[11px] md:text-sm font-black text-center tracking-wide uppercase leading-tight mb-2"
          style={{ color: 'hsl(35 18% 18%)' }}
        >
          {titleLines.line1}<br />{titleLines.line2}
        </h3>
        
        {/* Decorative divider with sunburst - THICKER LINE */}
        <div className="flex items-center justify-center w-full mb-2">
          <div className="flex-1 h-[2px] mx-1" style={{ backgroundColor: 'hsl(35 18% 35%)' }} />
          <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(35 18% 22%)' }}>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x1 = 10 + Math.cos(angle) * 3;
              const y1 = 10 + Math.sin(angle) * 3;
              const x2 = 10 + Math.cos(angle) * 7;
              const y2 = 10 + Math.sin(angle) * 7;
              return (
                <line 
                  key={i} 
                  x1={x1} y1={y1} x2={x2} y2={y2} 
                  stroke="currentColor" 
                  strokeWidth="1.2" 
                />
              );
            })}
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
          <div className="flex-1 h-[2px] mx-1" style={{ backgroundColor: 'hsl(35 18% 35%)' }} />
        </div>
        
        {/* Main icon area with circular frame - LARGE ICON */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="relative w-36 h-36 md:w-48 md:h-48">
            {/* Outer dashed circle */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="48" 
                fill="none" 
                stroke="hsl(35 18% 50%)" 
                strokeWidth="0.5" 
                strokeDasharray="2 1.5"
              />
              {/* Inner solid circle */}
              <circle 
                cx="50" cy="50" r="44" 
                fill="none" 
                stroke="hsl(35 18% 35%)" 
                strokeWidth="0.8"
              />
            </svg>
            
            {/* Icon image - LARGE, filling most of the circle */}
            <img 
              src={iconSrc} 
              alt={title}
              className="absolute inset-0 w-full h-full object-contain p-2"
            />
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default PersonaCard;
