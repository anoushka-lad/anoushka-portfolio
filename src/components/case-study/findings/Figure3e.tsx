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
  hasDashedRing?: boolean;
}

const VennIcon = ({ children, hasDashedRing = false }: VennIconProps) => (
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

// ========== MAIN FIGURE 3E COMPONENT ==========
const Figure3e = () => {
  const legendItems = [
    { name: "Platform Surfer", Icon: PlatformSurferIcon, hasDashedRing: true },
    { name: "Binge Watcher", Icon: BingeWatcherIcon, hasDashedRing: false },
    { name: "Avid Viewer", Icon: AvidViewerIcon, hasDashedRing: false },
    { name: "Background Streamer", Icon: BackgroundStreamerIcon, hasDashedRing: true },
    { name: "Social Streamer", Icon: SocialStreamerIcon, hasDashedRing: true },
    { name: "Rewatcher", Icon: RewatcherIcon, hasDashedRing: false },
  ];

  return (
    <ScalingContainer designWidth={700} className="py-4">
      <div className="flex flex-row items-center gap-12">
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
            {/* Left Circle - TV Shows (main solid) */}
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
            {/* Right Circle - Movies (main solid) */}
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

            {/* TV Shows Label - below left circle */}
            <motion.span
              className="absolute font-display text-[18px]"
              style={{ 
                left: '14%', 
                bottom: '0%',
                color: '#343434'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              TV Shows
            </motion.span>

            {/* Movies Label - below right circle */}
            <motion.span
              className="absolute font-display text-[18px]"
              style={{ 
                right: '18%', 
                bottom: '0%',
                color: '#343434'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Movies
            </motion.span>

            {/* ===== TV SHOWS ICONS (Left Circle Only) ===== */}
            
            {/* Platform Surfer - left circle, aligned with Background Streamer */}
            <motion.div 
              className="absolute"
              style={{ left: '16%', top: '28%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <PlatformSurferIcon size={38} animate={false} />
              </VennIcon>
            </motion.div>

            {/* Background Streamer - left circle, same line as Platform Surfer */}
            <motion.div 
              className="absolute"
              style={{ left: '16%', top: '52%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <BackgroundStreamerIcon size={38} animate={false} />
              </VennIcon>
            </motion.div>

            {/* ===== OVERLAP ICONS (Center - Where Circles Collide) ===== */}
            
            {/* Binge Watcher - top of overlap, closer to center */}
            <motion.div 
              className="absolute"
              style={{ left: '44%', top: '28%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <BingeWatcherIcon size={32} animate={false} />
              </VennIcon>
            </motion.div>

            {/* Rewatcher - bottom of overlap, closer to Binge Watcher */}
            <motion.div 
              className="absolute"
              style={{ left: '44%', top: '46%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <RewatcherIcon size={32} animate={false} />
              </VennIcon>
            </motion.div>

            {/* ===== MOVIES ICONS (Right Circle Only) ===== */}
            
            {/* Avid Viewer - right circle */}
            <motion.div 
              className="absolute"
              style={{ right: '14%', top: '28%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <AvidViewerIcon size={38} animate={false} />
              </VennIcon>
            </motion.div>

            {/* Social Streamer - right circle, aligned with Avid Viewer */}
            <motion.div 
              className="absolute"
              style={{ right: '14%', top: '52%' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              viewport={{ once: true }}
            >
              <VennIcon>
                <SocialStreamerIcon size={38} animate={false} />
              </VennIcon>
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

export default Figure3e;