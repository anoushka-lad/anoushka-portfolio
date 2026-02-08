"use client";

import { motion } from "framer-motion";
import { r } from "@/lib/utils";
import {
  AvidViewerIcon, 
  PlatformSurferIcon, 
  BingeWatcherIcon, 
  BackgroundStreamerIcon, 
  RewatcherIcon, 
  SocialStreamerIcon,
  PersonaMedallion,
  FourPointStar,
  SixPointStar,
  EightPointStar,
  SunburstStar,
  DiamondStar
} from "../icons/PersonaIcons";

// Vintage detailed attribute icons
const TimeOfDayIcon = ({ size = 36 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} className="text-foreground">
    <defs>
      <linearGradient id="moonShade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <path 
      d="M28 8 A14 14 0 1 0 28 32 A10 10 0 1 1 28 8" 
      fill="url(#moonShade)" 
      stroke="currentColor" 
      strokeWidth="1"
    />
    <ellipse cx="18" cy="16" rx="2" ry="1.5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <ellipse cx="14" cy="24" rx="1.5" ry="1" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <ellipse cx="20" cy="28" rx="1" ry="0.8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <circle cx="32" cy="12" r="0.8" fill="currentColor" />
    <circle cx="35" cy="20" r="0.5" fill="currentColor" />
    <circle cx="33" cy="28" r="0.6" fill="currentColor" />
  </svg>
);

const ViewingContentIcon = ({ size = 36 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} className="text-foreground">
    <rect x="6" y="14" width="28" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="17" width="16" height="12" rx="2" ry="2" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="0.8" />
    <line x1="10" y1="19" x2="14" y2="19" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <circle cx="29" cy="21" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="29" cy="26" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.8" />
    <line x1="15" y1="14" x2="10" y2="6" stroke="currentColor" strokeWidth="1.2" />
    <line x1="25" y1="14" x2="30" y2="6" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="10" cy="6" r="1.5" fill="currentColor" />
    <circle cx="30" cy="6" r="1.5" fill="currentColor" />
    <line x1="12" y1="34" x2="10" y2="38" stroke="currentColor" strokeWidth="1.2" />
    <line x1="28" y1="34" x2="30" y2="38" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const PrimaryDeviceIcon = ({ size = 36 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} className="text-foreground">
    <rect x="10" y="4" width="20" height="32" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12" y="8" width="16" height="22" rx="1" ry="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.6" />
    <line x1="14" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <line x1="14" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <line x1="14" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <line x1="17" y1="6" x2="23" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <circle cx="20" cy="33" r="2" fill="none" stroke="currentColor" strokeWidth="0.8" />
    <rect x="8" y="12" width="2" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
    <rect x="8" y="18" width="2" height="6" rx="0.5" fill="currentColor" opacity="0.5" />
  </svg>
);

const AdToleranceIcon = ({ size = 36 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} className="text-foreground">
    <path 
      d="M4 20 Q20 6, 36 20 Q20 34, 4 20" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
    <path 
      d="M8 20 Q20 10, 32 20 Q20 30, 8 20" 
      fill="currentColor" 
      opacity="0.1"
    />
    <circle cx="20" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="20" cy="20" r="5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="20" cy="20" r="2.5" fill="currentColor" />
    <circle cx="22" cy="18" r="1" fill="white" opacity="0.8" />
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30) * Math.PI / 180;
      const x1 = r(20 + Math.cos(angle) * 3);
      const y1 = r(20 + Math.sin(angle) * 3);
      const x2 = r(20 + Math.cos(angle) * 6.5);
      const y2 = r(20 + Math.sin(angle) * 6.5);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.3" opacity="0.5" />;
    })}
    <path d="M6 18 Q4 16, 5 14" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    <path d="M10 14 Q9 12, 10 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    <path d="M16 10 Q16 8, 18 7" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    <path d="M24 10 Q24 8, 22 7" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    <path d="M30 14 Q31 12, 30 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    <path d="M34 18 Q36 16, 35 14" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
  </svg>
);

const ContentTypeIcon = ({ size = 36 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} className="text-foreground">
    <defs>
      <linearGradient id="heartShade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path 
      d="M20 35 L8 22 Q2 14, 10 8 Q16 4, 20 12 Q24 4, 30 8 Q38 14, 32 22 Z" 
      fill="url(#heartShade)" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
    <path 
      d="M20 30 L11 21 Q7 15, 12 11 Q16 8, 20 14 Q24 8, 28 11 Q33 15, 29 21 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
      opacity="0.4"
    />
    <path 
      d="M12 14 Q14 10, 16 12" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
      opacity="0.6"
    />
    <line x1="15" y1="18" x2="17" y2="22" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
    <line x1="23" y1="18" x2="25" y2="22" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
  </svg>
);

const Figure2c = () => {
  const personaIcons = [
    { icon: <PlatformSurferIcon size={40} />, name: "Platform Surfer" },
    { icon: <BingeWatcherIcon size={40} />, name: "Binge Watcher" },
    { icon: <AvidViewerIcon size={40} />, name: "Avid Viewer" },
    { icon: <BackgroundStreamerIcon size={40} />, name: "Background Streamer" },
    { icon: <SocialStreamerIcon size={40} />, name: "Social Streamer" },
    { icon: <RewatcherIcon size={40} />, name: "Rewatcher" },
  ];

  const starComponents = {
    fourPoint: FourPointStar,
    sixPoint: SixPointStar,
    eightPoint: EightPointStar,
    sunburst: SunburstStar,
    diamond: DiamondStar,
  };

  const attributeRows = [
    { label: "Time of Day", icon: <TimeOfDayIcon size={32} />, stars: ['fourPoint', 'sunburst', 'eightPoint', 'sixPoint', 'sunburst', 'fourPoint'] as const },
    { label: "Viewing Content", icon: <ViewingContentIcon size={32} />, stars: ['diamond', 'fourPoint', 'sunburst', 'sixPoint', 'fourPoint', 'sunburst'] as const },
    { label: "Primary Device", icon: <PrimaryDeviceIcon size={32} />, stars: ['sunburst', 'sixPoint', 'fourPoint', 'sunburst', 'eightPoint', 'fourPoint'] as const },
    { label: "Ad Tolerance", icon: <AdToleranceIcon size={32} />, stars: ['fourPoint', 'sunburst', 'eightPoint', 'eightPoint', 'sunburst', 'fourPoint'] as const },
    { label: "Content Type", icon: <ContentTypeIcon size={32} />, stars: ['diamond', 'fourPoint', 'sunburst', 'eightPoint', 'fourPoint', 'sunburst'] as const },
  ];

  return (
    <div className="w-full overflow-x-auto py-8">
      <table className="mx-auto text-sm border-collapse">
        <thead>
          <tr>
            <th className="p-3 w-44"></th>
            {personaIcons.map((persona, i) => (
              <th key={i} className="p-3 w-24">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  <PersonaMedallion size={70}>
                    {persona.icon}
                  </PersonaMedallion>
                </motion.div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attributeRows.map((row, rowIndex) => (
            <motion.tr 
              key={rowIndex} 
              className={rowIndex % 2 === 0 ? "bg-muted/40" : ""}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <td className="py-4 px-4">
                <motion.div 
                  className="flex items-center gap-3 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                    {row.icon}
                  </motion.div>
                  <span className="font-serif font-bold text-foreground whitespace-nowrap">
                    {row.label}
                  </span>
                </motion.div>
              </td>
              {row.stars.map((starType, colIndex) => {
                const StarComponent = starComponents[starType];
                return (
                  <td key={colIndex} className="py-4 px-3 text-center">
                    <motion.div 
                      className="flex justify-center cursor-pointer"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <StarComponent size={22} />
                    </motion.div>
                  </td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Figure2c;