"use client";

import { motion } from "framer-motion";
import { r } from "@/lib/utils";

interface IconProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

// Avid Viewer - Eye with star pupil and radiating rays
export const AvidViewerIcon = ({ className = "", size = 60, animate = true }: IconProps) => (
  <motion.svg 
    viewBox="0 0 100 80" 
    width={size} 
    height={size * 0.8}
    className={className}
    whileHover={animate ? { scale: 1.1 } : {}}
    transition={{ duration: 0.2 }}
  >
    {/* Radiating rays */}
    {[...Array(13)].map((_, i) => {
      const angle = -90 + (i - 6) * 12;
      const rad = angle * Math.PI / 180;
      const x1 = r(50 + Math.cos(rad) * 28);
      const y1 = r(40 + Math.sin(rad) * 22);
      const x2 = r(50 + Math.cos(rad) * 38);
      const y2 = r(40 + Math.sin(rad) * 30);
      return (
        <line 
          key={i} 
          x1={x1} y1={y1} x2={x2} y2={y2} 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-foreground"
        />
      );
    })}
    
    {/* Eye outer shape */}
    <path 
      d="M10 40 Q50 5 90 40 Q50 75 10 40 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className="text-foreground"
    />
    
    {/* Eye inner outline */}
    <path 
      d="M18 40 Q50 15 82 40 Q50 65 18 40 Z" 
      fill="currentColor" 
      className="text-foreground"
    />
    
    {/* White inner eye */}
    <ellipse cx="50" cy="40" rx="18" ry="14" fill="white" />
    
    {/* Star pupil - 4 point star */}
    <path 
      d="M50 28 L53 37 L62 40 L53 43 L50 52 L47 43 L38 40 L47 37 Z" 
      fill="currentColor" 
      className="text-foreground"
    />
  </motion.svg>
);

// Platform Surfer - Moon with waves
export const PlatformSurferIcon = ({ className = "", size = 60, animate = true }: IconProps) => (
  <motion.svg 
    viewBox="0 0 80 80" 
    width={size} 
    height={size}
    className={className}
    whileHover={animate ? { scale: 1.1 } : {}}
    transition={{ duration: 0.2 }}
  >
    {/* Crescent moon */}
    <path 
      d="M45 10 C70 20, 70 50, 45 60 C55 50, 55 20, 45 10 Z" 
      fill="currentColor" 
      className="text-foreground"
    />
    
    {/* Small dots near moon */}
    <circle cx="30" cy="35" r="2" fill="currentColor" className="text-foreground/40" />
    <circle cx="25" cy="45" r="1.5" fill="currentColor" className="text-foreground/30" />
    
    {/* Waves - 3 wavy lines */}
    <path 
      d="M12 58 Q20 52, 28 58 Q36 64, 44 58 Q52 52, 60 58 Q68 64, 72 60" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className="text-foreground"
    />
    <path 
      d="M8 66 Q18 60, 28 66 Q38 72, 48 66 Q58 60, 68 66 Q74 70, 78 68" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className="text-foreground"
    />
    <path 
      d="M4 74 Q16 68, 28 74 Q40 80, 52 74 Q64 68, 76 74" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      className="text-foreground"
    />
  </motion.svg>
);

// Binge Watcher - Stacked screens with stand
export const BingeWatcherIcon = ({ className = "", size = 60, animate = true }: IconProps) => (
  <motion.svg 
    viewBox="0 0 80 90" 
    width={size} 
    height={size * 1.125}
    className={className}
    whileHover={animate ? { scale: 1.1 } : {}}
    transition={{ duration: 0.2 }}
  >
    {/* Top bar - hatched */}
    <rect x="10" y="5" width="60" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
    <line x1="12" y1="8" x2="68" y2="8" stroke="currentColor" strokeWidth="0.5" className="text-foreground/50" />
    <line x1="12" y1="11" x2="68" y2="11" stroke="currentColor" strokeWidth="0.5" className="text-foreground/50" />
    <line x1="12" y1="14" x2="68" y2="14" stroke="currentColor" strokeWidth="0.5" className="text-foreground/50" />
    
    {/* Middle bar - solid fill */}
    <rect x="15" y="23" width="50" height="12" fill="currentColor" className="text-foreground" />
    
    {/* Bottom bar - darker/filled */}
    <rect x="10" y="39" width="60" height="14" fill="currentColor" className="text-foreground" />
    
    {/* Small dot/button */}
    <circle cx="40" cy="60" r="3" fill="currentColor" className="text-foreground" />
    
    {/* Stand neck */}
    <rect x="32" y="66" width="16" height="10" fill="currentColor" className="text-foreground" />
    
    {/* Stand base */}
    <rect x="22" y="78" width="36" height="6" rx="2" fill="currentColor" className="text-foreground" />
  </motion.svg>
);

// Background Streamer - Coffee cup with steam
export const BackgroundStreamerIcon = ({ className = "", size = 60, animate = true }: IconProps) => (
  <motion.svg 
    viewBox="0 0 80 60" 
    width={size} 
    height={size * 0.75}
    className={className}
    whileHover={animate ? { scale: 1.1 } : {}}
    transition={{ duration: 0.2 }}
  >
    {/* Steam wisps */}
    <path 
      d="M30 20 Q28 12, 32 5 Q36 -2, 32 -8" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      className="text-foreground"
    />
    <path 
      d="M50 18 Q48 10, 52 3 Q56 -4, 52 -10" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      className="text-foreground"
    />
    
    {/* Cup rim - double ellipse */}
    <ellipse cx="40" cy="28" rx="28" ry="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
    <ellipse cx="40" cy="28" rx="22" ry="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
    
    {/* Cup plate/saucer - dashed */}
    <ellipse cx="40" cy="52" rx="35" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" className="text-foreground" />
  </motion.svg>
);

// Rewatcher - Circular arrow
export const RewatcherIcon = ({ className = "", size = 60, animate = true }: IconProps) => (
  <motion.svg 
    viewBox="0 0 80 80" 
    width={size} 
    height={size}
    className={className}
    whileHover={animate ? { rotate: 15 } : {}}
    transition={{ duration: 0.2 }}
  >
    {/* Main circular arc */}
    <circle 
      cx="40" cy="40" r="28" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      className="text-foreground"
    />
    
    {/* Inner arc for depth */}
    <path 
      d="M40 16 A24 24 0 1 1 16 40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className="text-foreground"
    />
    
    {/* Arrow head at bottom */}
    <polygon 
      points="20,58 32,52 26,64" 
      fill="currentColor" 
      className="text-foreground"
    />
    
    {/* Small decorative arrow notch */}
    <path 
      d="M28 55 L22 60 L28 65" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      className="text-foreground"
    />
  </motion.svg>
);

// Social Streamer - Two overlapping circles with star
export const SocialStreamerIcon = ({ className = "", size = 60, animate = true }: IconProps) => (
  <motion.svg 
    viewBox="0 0 100 80" 
    width={size} 
    height={size * 0.8}
    className={className}
    whileHover={animate ? { scale: 1.1 } : {}}
    transition={{ duration: 0.2 }}
  >
    {/* Left circle */}
    <circle 
      cx="35" cy="40" r="26" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className="text-foreground"
    />
    
    {/* Right circle */}
    <circle 
      cx="65" cy="40" r="26" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className="text-foreground"
    />
    
    {/* Center 4-point star */}
    <path 
      d="M50 28 L53 37 L62 40 L53 43 L50 52 L47 43 L38 40 L47 37 Z" 
      fill="currentColor" 
      className="text-foreground"
    />
    
    {/* Small crosshair lines through star */}
    <line x1="50" y1="24" x2="50" y2="32" stroke="currentColor" strokeWidth="1" className="text-foreground" />
    <line x1="50" y1="48" x2="50" y2="56" stroke="currentColor" strokeWidth="1" className="text-foreground" />
    <line x1="34" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="1" className="text-foreground" />
    <line x1="58" y1="40" x2="66" y2="40" stroke="currentColor" strokeWidth="1" className="text-foreground" />
  </motion.svg>
);

// Medallion wrapper for persona icons
interface MedallionProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

export const PersonaMedallion = ({ children, className = "", size = 80 }: MedallionProps) => (
  <div 
    className={`relative flex items-center justify-center ${className}`}
    style={{ width: size, height: size, color: 'hsl(35 18% 22%)' }}
  >
    {/* Outer solid circle */}
    <svg 
      viewBox="0 0 100 100" 
      className="absolute inset-0 w-full h-full"
    >
      <circle 
        cx="50" cy="50" r="46" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
      />
      {/* Inner dashed circle - smaller/tighter */}
      <circle 
        cx="50" cy="50" r="36" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeDasharray="3 2"
        opacity="0.7"
      />
    </svg>
    
    {/* Icon content */}
    <div className="relative z-10 flex items-center justify-center" style={{ color: 'hsl(35 18% 22%)' }}>
      {children}
    </div>
  </div>
);

// Star variants for the matrix
export const FourPointStar = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <path 
      d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" 
      fill="currentColor" 
      className="text-foreground"
    />
  </svg>
);

export const SixPointStar = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <polygon 
      points="12,0 14,8 22,4 16,12 22,20 14,16 12,24 10,16 2,20 8,12 2,4 10,8" 
      fill="currentColor" 
      className="text-foreground"
    />
  </svg>
);

export const EightPointStar = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <polygon 
      points="12,0 14,7 20,2 16,9 24,12 16,15 20,22 14,17 12,24 10,17 4,22 8,15 0,12 8,9 4,2 10,7" 
      fill="currentColor" 
      className="text-foreground"
    />
  </svg>
);

export const SunburstStar = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    {[...Array(16)].map((_, i) => {
      const angle = (i * 22.5) * Math.PI / 180;
      const x1 = r(12 + Math.cos(angle) * 4);
      const y1 = r(12 + Math.sin(angle) * 4);
      const x2 = r(12 + Math.cos(angle) * 11);
      const y2 = r(12 + Math.sin(angle) * 11);
      return (
        <line 
          key={i} 
          x1={x1} y1={y1} x2={x2} y2={y2} 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-foreground"
        />
      );
    })}
    <circle cx="12" cy="12" r="3" fill="currentColor" className="text-foreground" />
  </svg>
);

export const DiamondStar = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <path 
      d="M12 2 L14 11 L22 12 L14 13 L12 22 L10 13 L2 12 L10 11 Z" 
      fill="currentColor" 
      className="text-foreground"
    />
  </svg>
);

// Export all icons as a map for easy access
export const personaIconMap = {
  avidViewer: AvidViewerIcon,
  platformSurfer: PlatformSurferIcon,
  bingeWatcher: BingeWatcherIcon,
  backgroundStreamer: BackgroundStreamerIcon,
  rewatcher: RewatcherIcon,
  socialStreamer: SocialStreamerIcon,
};

export const starVariantMap = {
  fourPoint: FourPointStar,
  sixPoint: SixPointStar,
  eightPoint: EightPointStar,
  sunburst: SunburstStar,
  diamond: DiamondStar,
};