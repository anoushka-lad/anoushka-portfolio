"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../ScalingContainer";
import {
  AvidViewerIcon,
  PlatformSurferIcon,
  BingeWatcherIcon,
  BackgroundStreamerIcon,
  RewatcherIcon,
  SocialStreamerIcon,
  PersonaMedallion
} from "../icons/PersonaIcons";

// Usage levels: 0 = Little to No Use, 1 = Infrequent, 2 = Moderate, 3 = Frequent
type UsageLevel = 0 | 1 | 2 | 3;

const Figure3b = () => {
  const devices = ["Phone", "Laptop", "10-ft"] as const;
  
  const personas = [
    { Icon: PlatformSurferIcon },
    { Icon: BingeWatcherIcon },
    { Icon: AvidViewerIcon },
    { Icon: BackgroundStreamerIcon },
    { Icon: SocialStreamerIcon },
    { Icon: RewatcherIcon },
  ];
  
  // Grid data: [Phone, Laptop, 10-ft] for each persona (columns)
  // Based on reference image - corrected Phone and Laptop placements
  const usageData: UsageLevel[][] = [
    // Platform Surfer: Phone=Moderate, Laptop=Frequent, 10-ft=Infrequent
    [2, 3, 1],
    // Binge Watcher: Phone=None, Laptop=Moderate, 10-ft=Frequent
    [0, 2, 3],
    // Avid Viewer: Phone=Infrequent, Laptop=Infrequent, 10-ft=Frequent
    [1, 1, 3],
    // Background Streamer: Phone=Moderate, Laptop=Frequent, 10-ft=Infrequent
    [2, 3, 1],
    // Social Streamer: Phone=Infrequent, Laptop=Moderate, 10-ft=Frequent
    [1, 2, 3],
    // Rewatcher: Phone=None, Laptop=Infrequent, 10-ft=Frequent
    [0, 1, 3],
  ];
  
  const getColor = (level: UsageLevel) => {
    switch(level) {
      case 0: return "transparent"; // Little to No Use
      case 1: return "hsl(40 25% 78% / 0.5)"; // Infrequent Use
      case 2: return "hsl(40 30% 70% / 0.7)"; // Moderate Use
      case 3: return "hsl(40 35% 62%)"; // Frequent Use
      default: return "transparent";
    }
  };

  const legend = [
    { label: "Little to No Use", level: 0 as UsageLevel },
    { label: "Infrequent Use", level: 1 as UsageLevel },
    { label: "Moderate Use", level: 2 as UsageLevel },
    { label: "Frequent Use", level: 3 as UsageLevel },
  ];

  return (
    <ScalingContainer designWidth={700} className="py-4">
      <div className="flex flex-row gap-10">
        {/* Main grid */}
        <div className="flex-1">
          {/* Header row with persona icons */}
          <div className="flex mb-2">
            <div className="w-16 shrink-0" /> {/* Spacer for device labels */}
            {personas.map((persona, i) => (
              <motion.div 
                key={i} 
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <PersonaMedallion size={56}>
                  <persona.Icon size={34} animate={false} />
                </PersonaMedallion>
              </motion.div>
            ))}
          </div>
          
          {/* Horizontal line separator */}
          <div 
            className="ml-16 mb-2"
            style={{ borderTop: '2px solid hsl(35 18% 30% / 0.7)' }}
          />
          
          {/* Grid rows */}
          <div className="flex flex-col gap-2">
            {devices.map((device, dIndex) => (
              <div key={dIndex} className="flex items-center">
                {/* Device label - bold */}
                <div 
                  className="w-16 shrink-0 font-display text-sm pr-2"
                  style={{ color: '#343434' }}
                >
                  {device}
                </div>
                
                {/* Cells for each persona */}
                {usageData.map((personaData, pIndex) => (
                  <motion.div 
                    key={pIndex} 
                    className="flex-1 h-12 mx-0.5"
                    style={{ 
                      backgroundColor: getColor(personaData[dIndex]),
                      border: personaData[dIndex] === 0 ? '1px solid hsl(35 18% 70% / 0.3)' : 'none'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: dIndex * 0.1 + pIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <motion.div 
          className="flex flex-col justify-start gap-2 text-sm pt-14"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {legend.map((item, i) => (
            <motion.div 
              key={i} 
              className="flex items-center gap-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {/* Dashed line connector */}
              <div 
                className="w-8"
                style={{ borderTop: '1.5px dashed hsl(35 20% 45% / 0.5)' }}
              />
              
              {/* Color swatch */}
              <div 
                className="w-6 h-5 shrink-0"
                style={{ 
                  backgroundColor: getColor(item.level),
                  border: item.level === 0 ? '1px solid hsl(35 18% 70% / 0.4)' : 'none'
                }}
              />
              
              {/* Label - bold */}
              <span 
                className="font-display text-sm whitespace-nowrap"
                style={{ color: '#343434' }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScalingContainer>
  );
};

export default Figure3b;