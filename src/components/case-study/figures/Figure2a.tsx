import { motion } from "framer-motion";

const Figure2a = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto py-8 px-4">
      <svg viewBox="0 0 700 280" className="w-full h-auto">
        {/* Node 1 - 8-pointed star (left top) */}
        <g transform="translate(140, 100)">
          {/* Label above */}
          <text x="0" y="-55" textAnchor="middle" className="font-serif text-[15px] font-bold fill-foreground">
            User Demographics and
          </text>
          <text x="0" y="-38" textAnchor="middle" className="font-serif text-[15px] font-bold fill-foreground">
            Viewing Habits
          </text>
          
          {/* 8-pointed star with hover */}
          <motion.polygon 
            points="0,-28 6,-10 24,-18 12,0 28,12 10,8 0,28 -10,8 -28,12 -12,0 -24,-18 -6,-10"
            fill="currentColor"
            className="text-foreground cursor-pointer"
            style={{ transformOrigin: "center" }}
            whileHover={{ scale: 1.15, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <text y="5" textAnchor="middle" className="text-[11px] font-bold fill-background pointer-events-none">1</text>
        </g>

        {/* Node 2 - Multi-pointed star (center bottom) */}
        <g transform="translate(350, 200)">
          {/* 12-pointed star with hover */}
          <motion.polygon 
            points="0,-22 4,-9 14,-16 8,-4 22,0 8,4 14,16 4,9 0,22 -4,9 -14,16 -8,4 -22,0 -8,-4 -14,-16 -4,-9"
            fill="currentColor"
            className="text-foreground cursor-pointer"
            style={{ transformOrigin: "center" }}
            whileHover={{ scale: 1.15, rotate: -15 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <text y="4" textAnchor="middle" className="text-[10px] font-bold fill-background pointer-events-none">2</text>
          
          {/* Label below */}
          <text x="0" y="42" textAnchor="middle" className="font-serif text-[15px] font-bold fill-foreground">
            Engaging in Content
          </text>
        </g>

        {/* Node 3 - Sunburst with rays (right top) */}
        <g transform="translate(560, 100)">
          {/* Label above */}
          <text x="0" y="-55" textAnchor="middle" className="font-serif text-[15px] font-bold fill-foreground">
            Aggregated Watch
          </text>
          <text x="0" y="-38" textAnchor="middle" className="font-serif text-[15px] font-bold fill-foreground">
            Experiences
          </text>
          
          {/* Sunburst with many rays - hover on the group */}
          <motion.g
            style={{ transformOrigin: "center" }}
            whileHover={{ rotate: 30, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="cursor-pointer"
          >
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15) * Math.PI / 180;
              const x1 = Math.cos(angle) * 8;
              const y1 = Math.sin(angle) * 8;
              const x2 = Math.cos(angle) * 20;
              const y2 = Math.sin(angle) * 20;
              return (
                <line 
                  key={i} 
                  x1={x1} 
                  y1={y1} 
                  x2={x2} 
                  y2={y2} 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  className="text-foreground" 
                />
              );
            })}
            <circle r="8" fill="currentColor" className="text-foreground" />
          </motion.g>
          <text y="3" textAnchor="middle" className="text-[9px] font-bold fill-background pointer-events-none">3</text>
        </g>

        {/* Connection line from node 1 to node 2 */}
        <motion.line 
          x1="168" y1="115" 
          x2="322" y2="185" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        {/* Arrow on line 1→2 */}
        <g transform="translate(245, 150) rotate(24)">
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
          x1="378" y1="185" 
          x2="532" y2="115" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-foreground"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
        {/* Arrow on line 2→3 */}
        <g transform="translate(455, 150) rotate(-24)">
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
