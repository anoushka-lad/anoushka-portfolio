"use client";

import { useState } from "react";
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

// ========== MAIN FIGURE 3D COMPONENT ==========
const Figure3d = () => {
  const [hoveredPersona, setHoveredPersona] = useState<string | null>(null);

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
      <div className="flex flex-row items-center gap-14">
        
        {/* ===== AD TOLERANCE SCALE ===== */}
        <div className="flex-1 w-full max-w-2xl">
          {/**
           * Reference positions (5-part scale with 4 divisions):
           * - Avid Viewer: before 1st division (Intolerant, first half)
           * - Social Streamer: between 1st and 2nd divisions (Intolerant, second half)
           * - Binge Watcher: right after 2nd division (Neutral)
           * - Platform Surfer: after Binge Watcher (Neutral)
           * - Rewatcher: after 3rd division (Neutral)
           * - Background Streamer: after 4th division near end (Tolerant)
           */}
          {(() => {
            const scaleIcons = [
              { key: "avid", name: "Avid Viewer", Icon: AvidViewerIcon, pos: 4 },
              { key: "social", name: "Social Streamer", Icon: SocialStreamerIcon, pos: 18 },
              { key: "binge", name: "Binge Watcher", Icon: BingeWatcherIcon, pos: 34 },
              { key: "platform", name: "Platform Surfer", Icon: PlatformSurferIcon, pos: 48 },
              { key: "rewatcher", name: "Rewatcher", Icon: RewatcherIcon, pos: 62 },
              { key: "background", name: "Background Streamer", Icon: BackgroundStreamerIcon, pos: 82 },
            ] as const;

            const divisions = [20, 40, 60, 80] as const;

            return (
              <div className="relative" style={{ height: "200px" }}>
                {/* ===== ICONS ABOVE LINE + LONGER DOTTED CONNECTORS ===== */}
                {scaleIcons.map((item, i) => (
                  <motion.div
                    key={item.key}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${item.pos}%`, top: "4%", transform: "translateX(-50%)" }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredPersona(item.name)}
                    onMouseLeave={() => setHoveredPersona(null)}
                  >
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ scale: 1.06, filter: "drop-shadow(0 0 8px hsl(35 35% 50% / 0.4))" }}
                      transition={{ duration: 0.25 }}
                    >
                      <PersonaMedallion size={52}>
                        <item.Icon size={30} animate={false} />
                      </PersonaMedallion>
                    </motion.div>
                    {/* Longer dotted connector down to line - stops at line, doesn't go below */}
                    <motion.div
                      className="mt-1"
                      style={{
                        height: "58px",
                        borderLeft: "2px dashed hsl(35 18% 35% / 0.6)",
                        transformOrigin: "top",
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ delay: 0.35 + i * 0.06, duration: 0.25 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                ))}

                {/* ===== HORIZONTAL SCALE LINE (with 4 division ticks) ===== */}
                <div
                  className="absolute left-0 right-0"
                  style={{ top: "62%", transform: "translateY(-50%)" }}
                >
                  {/* Outer thin decorative line above */}
                  <motion.div
                    className="absolute left-4 right-4 md:left-8 md:right-8"
                    style={{
                      top: "-10px",
                      height: "1.5px",
                      borderTop: "1.5px dashed hsl(35 18% 30% / 0.45)",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  />

                  {/* Main thick horizontal line */}
                  <motion.div
                    className="mx-4 md:mx-8"
                    style={{
                      height: "5px",
                      background: "hsl(35 18% 28% / 0.9)",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* 4 division ticks to create 5 parts */}
                    {divisions.map((d) => (
                      <div
                        key={d}
                        className="absolute"
                        style={{
                          left: `${d}%`,
                          top: "50%",
                          width: "3px",
                          height: "18px",
                          background: "hsl(35 18% 28% / 0.85)",
                          transform: "translate(-50%, -50%)",
                          borderRadius: "2px",
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Outer thin decorative line below */}
                  <motion.div
                    className="absolute left-4 right-4 md:left-8 md:right-8"
                    style={{
                      bottom: "-10px",
                      height: "1.5px",
                      borderTop: "1.5px dashed hsl(35 18% 30% / 0.45)",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* ===== LABELS ===== */}
                <div className="absolute left-0 right-0" style={{ bottom: 0 }}>
                  <div className="flex justify-between px-2 md:px-4">
                    <motion.span
                      className="font-display text-[16px] leading-[1.1] text-center"
                      style={{ color: "#343434", width: "25%" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.55 }}
                      viewport={{ once: true }}
                    >
                      Intolerant
                    </motion.span>
                    <motion.span
                      className="font-display text-[16px] leading-[1.1] text-center"
                      style={{ color: "#343434", width: "50%" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Neutral
                    </motion.span>
                    <motion.span
                      className="font-display text-[16px] leading-[1.1] text-center"
                      style={{ color: "#343434", width: "25%" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.65 }}
                      viewport={{ once: true }}
                    >
                      Tolerant
                    </motion.span>
                  </div>
                </div>
              </div>
            );
          })()}
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
              style={{
                opacity: hoveredPersona && hoveredPersona !== item.name ? 0.35 : 1,
                transition: 'opacity 200ms ease',
              }}
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

              {/* Label text */}
              <span
                className="font-display text-[16px] leading-[1.1] whitespace-nowrap"
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

export default Figure3d;