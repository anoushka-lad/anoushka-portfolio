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

// ========== VENN ICON WRAPPER COMPONENT ==========
interface VennIconProps {
  children: React.ReactNode;
}

const VennIcon = ({ children }: VennIconProps) => (
  <motion.div
    className="relative flex items-center justify-center cursor-pointer"
    whileHover={{ scale: 1.06 }}
    transition={{ duration: 0.25 }}
  >
    <motion.div 
      className="relative"
      whileHover={{
        filter: "drop-shadow(0 0 10px hsl(35 35% 50% / 0.4))"
      }}
      transition={{ duration: 0.3 }}
    >
      <PersonaMedallion size={56}>
        {children}
      </PersonaMedallion>
    </motion.div>
  </motion.div>
);

// ========== MAIN FIGURE 3C COMPONENT ==========
const Figure3c = () => {
  const legendItems = [
    { name: "Platform Surfer", Icon: PlatformSurferIcon },
    { name: "Binge Watcher", Icon: BingeWatcherIcon },
    { name: "Avid Viewer", Icon: AvidViewerIcon },
    { name: "Background Streamer", Icon: BackgroundStreamerIcon },
    { name: "Social Streamer", Icon: SocialStreamerIcon },
    { name: "Rewatcher", Icon: RewatcherIcon },
  ];

  return (
    <ScalingContainer designWidth={700} className="py-4">
      <div className="flex flex-row items-center gap-12 px-2">
        {/* ===== VENN DIAGRAM ===== */}
        <div className="flex-1 flex justify-center relative w-full">
          <div className="relative w-full max-w-lg" style={{ aspectRatio: '1.35/1' }}>
            
            {/* Left Circle - Outer dotted border */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: '-1.5%',
                top: '0%',
                width: '65%',
                height: '86%',
                border: '1.5px dashed hsl(35 18% 30% / 0.5)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            {/* Left Circle - Prefers to watch alone (main solid) */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: '0%',
                top: '2%',
                width: '62%',
                height: '82%',
                border: '4px solid hsl(35 18% 30% / 0.85)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
            />
            {/* Left Circle - Inner dotted border */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: '1.5%',
                top: '4%',
                width: '59%',
                height: '78%',
                border: '1.5px dashed hsl(35 18% 30% / 0.6)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            />
            
            {/* Right Circle - Outer dotted border */}
            <motion.div
              className="absolute rounded-full"
              style={{
                right: '-1.5%',
                top: '0%',
                width: '65%',
                height: '86%',
                border: '1.5px dashed hsl(35 18% 30% / 0.5)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            />
            {/* Right Circle - Prefers to watch with others (main solid) */}
            <motion.div
              className="absolute rounded-full"
              style={{
                right: '0%',
                top: '2%',
                width: '62%',
                height: '82%',
                border: '4px solid hsl(35 18% 30% / 0.85)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            {/* Right Circle - Inner dotted border */}
            <motion.div
              className="absolute rounded-full"
              style={{
                right: '1.5%',
                top: '4%',
                width: '59%',
                height: '78%',
                border: '1.5px dashed hsl(35 18% 30% / 0.6)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            />

            {/* "Prefers to watch alone" Label - below left circle */}
            <motion.span
              className="absolute font-display text-[18px]"
              style={{ 
                left: '4%', 
                bottom: '0%',
                color: '#343434'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Prefers to watch alone
            </motion.span>

            {/* "Prefers to watch with others" Label - below right circle */}
            <motion.span
              className="absolute font-display text-[18px]"
              style={{ 
                right: '0%', 
                bottom: '0%',
                color: '#343434'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Prefers to watch with others
            </motion.span>

            {/* ===== LEFT CIRCLE ICONS (Prefers to watch alone) ===== */}
            
            {/* Platform Surfer - top left */}
            <motion.div 
              className="absolute"
              style={{ left: '14%', top: '20%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <PlatformSurferIcon size={32} animate={false} />
              </VennIcon>
            </motion.div>

            {/* Background Streamer - bottom left */}
            <motion.div 
              className="absolute"
              style={{ left: '14%', top: '50%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <BackgroundStreamerIcon size={32} animate={false} />
              </VennIcon>
            </motion.div>

            {/* Rewatcher - middle left */}
            <motion.div 
              className="absolute"
              style={{ left: '24%', top: '35%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <RewatcherIcon size={32} animate={false} />
              </VennIcon>
            </motion.div>

            {/* ===== OVERLAP ICONS (Center - Where Circles Collide) ===== */}
            
            {/* Binge Watcher - top of overlap */}
            <motion.div 
              className="absolute"
              style={{ left: '44%', top: '26%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <BingeWatcherIcon size={32} animate={false} />
              </VennIcon>
            </motion.div>

            {/* Avid Viewer - closer to Binge Watcher */}
            <motion.div 
              className="absolute"
              style={{ left: '44%', top: '42%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <AvidViewerIcon size={32} animate={false} />
              </VennIcon>
            </motion.div>

            {/* ===== RIGHT CIRCLE ICON (Prefers to watch with others) ===== */}
            
            {/* Social Streamer - centered and larger in right circle */}
            <motion.div 
              className="absolute"
              style={{ right: '14%', top: '34%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{
                    filter: "drop-shadow(0 0 10px hsl(35 35% 50% / 0.4))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <PersonaMedallion size={72}>
                    <SocialStreamerIcon size={42} animate={false} />
                  </PersonaMedallion>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* ===== LEGEND ===== */}
        <motion.div 
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          viewport={{ once: true }}
        >
          {legendItems.map((item, i) => (
            <motion.div 
              key={i} 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {/* Legend icon with medallion */}
              <PersonaMedallion size={36}>
                <item.Icon size={20} animate={false} />
              </PersonaMedallion>
              
              {/* Dashed connector line */}
              <div 
                className="w-10"
                style={{ borderTop: '1.5px dashed hsl(35 20% 45% / 0.5)' }}
              />
              
              {/* Label text - bold and bigger */}
              <span 
                className="font-display text-[18px] whitespace-nowrap"
                style={{ color: '#343434' }}
              >
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScalingContainer>
  );
};

export default Figure3c;