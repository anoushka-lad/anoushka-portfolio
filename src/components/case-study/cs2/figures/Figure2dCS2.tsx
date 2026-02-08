"use client";

import { motion } from "framer-motion";

const months = [
  ["January", "February", "March"],
  ["April", "May", "June"],
  ["July", "August", "September"],
  ["October", "November", "December"],
];

const quarters = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];

// Months that have the decorative star/sparkle icon (first month of each quarter)
const starMonths = ["January", "April", "July", "October"] as const;

type StarVariant = "sparkle_4" | "sparkle_8" | "burst_12" | "sun_16";

const starByMonth: Record<(typeof starMonths)[number], StarVariant> = {
  January: "sparkle_4",
  April: "sparkle_8",
  July: "burst_12",
  October: "sun_16",
};

const StarIcon = ({ variant }: { variant: StarVariant }) => {
  const stroke = "hsl(35 35% 55%)";
  const fill = "hsl(35 40% 50%)";

  const rays =
    variant === "sparkle_4"
      ? 4
      : variant === "sparkle_8"
        ? 8
        : variant === "burst_12"
          ? 12
          : 16;

  const inner = variant === "sparkle_4" ? 2.75 : variant === "sparkle_8" ? 3 : 3.25;
  const r1 = variant === "sparkle_4" ? 3.5 : variant === "sparkle_8" ? 4 : 4.25;
  const r2 = variant === "sun_16" ? 10 : 9;

  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="w-5 h-5 absolute top-8 right-2"
      animate={{ 
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{ 
        rotate: { duration: 18, repeat: Infinity, ease: "linear" },
        scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Glow effect */}
      <defs>
        <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g filter={`url(#glow-${variant})`}>
        {[...Array(rays)].map((_, i) => {
          const angle = (i * (360 / rays)) * (Math.PI / 180);
          const x1 = 12 + Math.cos(angle) * r1;
          const y1 = 12 + Math.sin(angle) * r1;
          const x2 = 12 + Math.cos(angle) * r2;
          const y2 = 12 + Math.sin(angle) * r2;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={stroke}
              strokeWidth={variant === "sparkle_4" ? 2 : 1.5}
              strokeLinecap="round"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
            />
          );
        })}

        {/* Center with pulse */}
        <motion.circle 
          cx="12" 
          cy="12" 
          r={inner} 
          fill={fill}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>
    </motion.svg>
  );
};

const CalendarCell = ({
  month,
  index,
}: {
  month: string;
  index: number;
}) => {
  const hasStar = (starMonths as readonly string[]).includes(month);

  return (
    <motion.div
      className="relative border border-foreground/30 bg-transparent"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      {/* Month header with shimmer */}
      <motion.div 
        className="bg-[hsl(35_18%_25%)] py-1.5 px-2 overflow-hidden relative"
        whileHover={{ backgroundColor: "hsl(35 18% 30%)" }}
      >
        <p className="font-serif text-xs font-bold text-[hsl(35_25%_90%)] text-center">
          {month}
        </p>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Calendar grid with staggered cell animations */}
      <div className="p-1.5 min-h-[60px]">
        <div className="grid grid-cols-7 gap-px">
          {[...Array(35)].map((_, i) => (
            <motion.div 
              key={i} 
              className="w-2 h-2 border border-foreground/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 + i * 0.008 }}
              whileHover={{ backgroundColor: "hsl(35 25% 75%)", scale: 1.3 }}
            />
          ))}
        </div>
      </div>

      {/* Decorative star (unique per quarter) */}
      {hasStar && (
        <StarIcon variant={starByMonth[month as (typeof starMonths)[number]]} />
      )}
    </motion.div>
  );
};

const Figure2dCS2 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-4">
      <div className="flex gap-4">
        {/* Quarter labels */}
        <div className="flex flex-col justify-around py-2">
          {quarters.map((quarter, qIndex) => (
            <motion.p
              key={quarter}
              className="font-serif text-sm font-bold italic text-foreground/90 whitespace-nowrap"
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -2, 0],
              }}
              transition={{ 
                opacity: { duration: 0.4, delay: qIndex * 0.15 },
                x: { duration: 0.4, delay: qIndex * 0.15 },
                y: { duration: 3, repeat: Infinity, delay: qIndex * 0.4, ease: "easeInOut" },
              }}
            >
              {quarter}
            </motion.p>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="flex-1 grid grid-rows-4 gap-3">
          {months.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-3 gap-3">
              {row.map((month, colIndex) => (
                <CalendarCell
                  key={month}
                  month={month}
                  index={rowIndex * 3 + colIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Figure2dCS2;