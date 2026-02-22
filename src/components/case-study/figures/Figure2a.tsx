"use client";

import { motion } from "framer-motion";
import { r } from "@/lib/utils";

const starPoints = (n: number, outerR: number, innerR: number): string => {
  return Array.from({ length: n * 2 }, (_, i) => {
    const angle = (i * 180 / n - 90) * Math.PI / 180;
    const radius = i % 2 === 0 ? outerR : innerR;
    return `${r(Math.cos(angle) * radius)},${r(Math.sin(angle) * radius)}`;
  }).join(" ");
};

const Figure2a = () => {
  return (
    <div className="w-full py-4">
      <svg viewBox="0 0 700 280" className="w-full h-auto">
        {/* Node 1 - 6-pointed star (left top) */}
        <g transform="translate(140, 100)">
          {/* Label above */}
          <text x="0" y="-55" textAnchor="middle" className="font-display text-[16px] leading-[1.1] fill-[#343434]">
            User Demographics and
          </text>
          <text x="0" y="-38" textAnchor="middle" className="font-display text-[16px] leading-[1.1] fill-[#343434]">
            Viewing Habits
          </text>
          
          {/* 6-pointed star with hover */}
          <motion.polygon
            points={starPoints(6, 25, 10)}
            fill="currentColor"
            className="text-foreground cursor-pointer"
            style={{ transformOrigin: "center" }}
            whileHover={{ scale: 1.15, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <text y="5" textAnchor="middle" className="text-[11px] fill-background pointer-events-none">1</text>
        </g>

        {/* Node 2 - Multi-pointed star (center bottom) */}
        <g transform="translate(350, 200)">
          {/* 9-pointed star with hover */}
          <motion.polygon
            points={starPoints(9, 25, 10)}
            fill="currentColor"
            className="text-foreground cursor-pointer"
            style={{ transformOrigin: "center" }}
            whileHover={{ scale: 1.15, rotate: -15 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <text y="4" textAnchor="middle" className="text-[10px] fill-background pointer-events-none">2</text>
          
          {/* Label below */}
          <text x="0" y="42" textAnchor="middle" className="font-display text-[16px] leading-[1.1] fill-[#343434]">
            Engaging in Content
          </text>
        </g>

        {/* Node 3 - Sunburst with rays (right top) */}
        <g transform="translate(560, 100)">
          {/* Label above */}
          <text x="0" y="-55" textAnchor="middle" className="font-display text-[16px] leading-[1.1] fill-[#343434]">
            Aggregated Watch
          </text>
          <text x="0" y="-38" textAnchor="middle" className="font-display text-[16px] leading-[1.1] fill-[#343434]">
            Experiences
          </text>
          
          {/* Sunburst with many rays - hover on the group */}
          <motion.g
            style={{ transformOrigin: "center" }}
            whileHover={{ rotate: 30, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="cursor-pointer"
          >
            {[...Array(15)].map((_, i) => {
              const angle = i * 24 * Math.PI / 180;
              const spread = 9 * Math.PI / 180;
              // Triangle: two base points at inner radius, one tip at outer radius
              const bx1 = r(Math.cos(angle - spread) * 8);
              const by1 = r(Math.sin(angle - spread) * 8);
              const bx2 = r(Math.cos(angle + spread) * 8);
              const by2 = r(Math.sin(angle + spread) * 8);
              const tx = r(Math.cos(angle) * 25);
              const ty = r(Math.sin(angle) * 25);
              return (
                <polygon
                  key={i}
                  points={`${bx1},${by1} ${tx},${ty} ${bx2},${by2}`}
                  fill="currentColor"
                  className="text-foreground"
                />
              );
            })}
            <circle r="8" fill="currentColor" className="text-foreground" />
          </motion.g>
          <text y="3" textAnchor="middle" className="text-[9px] fill-background pointer-events-none">3</text>
        </g>

        {/* Connection line from node 1 to node 2 */}
        <motion.line 
          x1="163" y1="111"
          x2="327" y2="189" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        {/* Arrow on line 1→2 */}
        <g transform="translate(245, 150) rotate(25)">
          <polyline 
            points="-6,-4 0,0 -6,4" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-foreground" 
          />
        </g>
        
        {/* Connection line from node 2 to node 3 */}
        <motion.line 
          x1="373" y1="189"
          x2="537" y2="111" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
        {/* Arrow on line 2→3 */}
        <g transform="translate(455, 150) rotate(-25)">
          <polyline 
            points="-6,-4 0,0 -6,4" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-foreground" 
          />
        </g>
      </svg>
    </div>
  );
};

export default Figure2a;