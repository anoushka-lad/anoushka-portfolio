"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/utils";
const iconFindShow = "/images/cs2-icons/icon-find-show.png";
const iconGiftCard = "/images/cs2-icons/icon-gift-card.png";
const iconSaveFavorite = "/images/cs2-icons/icon-save-favorite.png";
const iconAccount = "/images/cs2-icons/icon-account.png";
const iconFilter = "/images/cs2-icons/icon-filter.png";
const iconSeasonEpisode = "/images/cs2-icons/icon-season-episode.png";
const iconPromoTeaser = "/images/cs2-icons/icon-promo-teaser.png";
const iconGenre = "/images/cs2-icons/icon-genre.png";
const iconRotator = "/images/cs2-icons/icon-rotator.png";
const iconOnAir = "/images/cs2-icons/icon-on-air.png";

type Figure2aTask = {
  id: number;
  label: string;
  angle: number;
  icon: string;
  labelPosition: "left" | "right";
  labelYOffset?: number;
};

// Task data with angular positions (clockwise from top)
const tasks: Figure2aTask[] = [
  {
    id: 1,
    label: 'Explore "recently added"\nrotator',
    angle: -90,
    icon: iconRotator,
    labelPosition: "right",
    labelYOffset: -14,
  },
  {
    id: 2,
    label: "Find a specific show\nwithin a provider section",
    angle: -54,
    icon: iconFindShow,
    labelPosition: "right",
  },
  {
    id: 3,
    label: "Buy a gift card and explain\nredemption to a friend",
    angle: -18,
    icon: iconGiftCard,
    labelPosition: "right",
  },
  {
    id: 4,
    label: "Save a favorite movie/TV\nshow, then find it later",
    angle: 18,
    icon: iconSaveFavorite,
    labelPosition: "right",
  },
  {
    id: 5,
    label: "Navigate to account\ninformation",
    angle: 54,
    icon: iconAccount,
    labelPosition: "right",
  },
  {
    id: 6,
    label: "Use On Air Now to find what's\nplaying at a specific time",
    angle: 90,
    icon: iconOnAir,
    labelPosition: "left",
    labelYOffset: 22,
  },
  {
    id: 7,
    label: "Filter within a section",
    angle: 126,
    icon: iconFilter,
    labelPosition: "left",
  },
  {
    id: 8,
    label: "Find a specific season and\nepisode of a show",
    angle: 162,
    icon: iconSeasonEpisode,
    labelPosition: "left",
  },
  {
    id: 9,
    label: "Get more info about a new\nrelease in promo teasers",
    angle: 198,
    icon: iconPromoTeaser,
    labelPosition: "left",
  },
  {
    id: 10,
    label: "Find a genre's list of\nshows/movies",
    angle: -126,
    icon: iconGenre,
    labelPosition: "left",
  },
];

const Figure2aCS2 = () => {
  const centerX = 300;
  const centerY = 220;
  const innerSunRadius = 35;
  const iconRadius = 120;
  const iconCircleRadius = 20; // Bigger icons
  const textBoundaryRadius = 160; // Between icons and text
  const outerRingRadius = 185; // Outer decorative ring

  return (
    <div className="relative w-full max-w-3xl mx-auto py-2">
      {/* Goal 1 - Top */}
      <div className="text-center mb-1">
        <p className="font-serif text-xl font-bold text-foreground">Goal 1</p>
        <p className="font-serif text-sm font-semibold italic text-foreground/90">
          Start watching content (discovery &amp; findability)
        </p>
      </div>

      <svg viewBox="0 0 600 440" className="w-full h-auto">
        <defs>
          {/* Glow filter for center sun */}
          <filter id="sunGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Mask: hides the text-boundary stroke behind labels (no visible label "box") */}
          <mask id="labelCutoutMask">
            <rect x="0" y="0" width="600" height="440" fill="white" />
            {tasks.map((task) => {
              const rad = (task.angle * Math.PI) / 180;
              const labelOffset = task.labelPosition === "left" ? -32 : 32;
              const baseX = r(centerX + Math.cos(rad) * iconRadius + labelOffset);
              const baseY = r(centerY + Math.sin(rad) * iconRadius + (task.labelYOffset ?? 0));

              const lines = task.label.split("\n");
              const textWidth = 140;
              const textHeight = lines.length * 12 + 6;
              const rectX = task.labelPosition === "left" ? baseX - textWidth - 6 : baseX - 6;
              const rectY = baseY - textHeight / 2;

              return (
                <rect
                  key={`mask-${task.id}`}
                  x={rectX}
                  y={rectY}
                  width={textWidth + 12}
                  height={textHeight}
                  fill="black"
                  rx="2"
                />
              );
            })}
          </mask>
        </defs>

        {/* Outer decorative rings - rotating opposite direction, masked behind labels */}
        <motion.circle 
          cx={centerX} 
          cy={centerY} 
          r={outerRingRadius + 8} 
          fill="none" 
          stroke="hsl(35 18% 45%)" 
          strokeWidth="1"
          strokeDasharray="8 4"
          mask="url(#labelCutoutMask)"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
        />
        <motion.circle 
          cx={centerX} 
          cy={centerY} 
          r={outerRingRadius + 4} 
          fill="none" 
          stroke="hsl(35 18% 50%)" 
          strokeWidth="0.75"
          strokeDasharray="4 3"
          mask="url(#labelCutoutMask)"
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
        />
        
        {/* Main outer solid ring - masked behind labels */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={outerRingRadius} 
          fill="none" 
          stroke="hsl(35 18% 35%)" 
          strokeWidth="2"
          mask="url(#labelCutoutMask)"
        />

        {/* Text boundary dashed circle - thicker, between icons and text (masked behind labels) */}
        <motion.circle 
          cx={centerX} 
          cy={centerY} 
          r={textBoundaryRadius} 
          fill="none" 
          stroke="hsl(35 18% 40%)" 
          strokeWidth="2.75"
          strokeDasharray="6 4"
          mask="url(#labelCutoutMask)"
          animate={{ strokeDashoffset: [0, -60] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Icon boundary dashed circle - thinner */}
        <motion.circle 
          cx={centerX} 
          cy={centerY} 
          r={iconRadius - iconCircleRadius - 8} 
          fill="none" 
          stroke="hsl(35 18% 40%)" 
          strokeWidth="1.5"
          strokeDasharray="4 3"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Central hub - darker background */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={innerSunRadius} 
          fill="hsl(35 18% 22%)" 
        />

        {/* Dashed lines from sun center to each icon (attached to icon center) */}
        {tasks.map((task) => {
          const rad = (task.angle) * Math.PI / 180;
          const x2 = r(centerX + Math.cos(rad) * iconRadius);
          const y2 = r(centerY + Math.sin(rad) * iconRadius);
          return (
            <motion.line
              key={`line-${task.id}`}
              x1={centerX}
              y1={centerY}
              x2={x2}
              y2={y2} 
              stroke="hsl(35 18% 45%)" 
              strokeWidth="1.5" 
              strokeDasharray="4 3"
              animate={{ opacity: [0.35, 0.85, 0.35] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: task.id * 0.08, ease: "easeInOut" }}
            />
          );
        })}

        {/* Animated rotating sunburst with glow */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
          filter="url(#sunGlow)"
        >
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const x1 = r(centerX + Math.cos(angle) * 10);
            const y1 = r(centerY + Math.sin(angle) * 10);
            const x2 = r(centerX + Math.cos(angle) * 30);
            const y2 = r(centerY + Math.sin(angle) * 30);
            return (
              <line 
                key={i} 
                x1={x1} y1={y1} 
                x2={x2} y2={y2} 
                stroke="hsl(35 35% 55%)" 
                strokeWidth="2" 
              />
            );
          })}
        </motion.g>
        
        {/* Center dot with glow */}
        <motion.circle 
          cx={centerX} 
          cy={centerY} 
          r={7} 
          fill="hsl(35 40% 60%)"
          filter="url(#sunGlow)"
          animate={{ 
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Icon circles with dashed borders - bigger + subtle hover */}
        {tasks.map((task) => {
          const rad = (task.angle) * Math.PI / 180;
          const x = r(centerX + Math.cos(rad) * iconRadius);
          const y = r(centerY + Math.sin(rad) * iconRadius);
          
          return (
            <motion.g
              key={task.id}
              whileHover={{ scale: 1.05, rotate: task.labelPosition === "left" ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              {/* Outer dashed circle around icon - thicker */}
              <circle 
                cx={x} 
                cy={y} 
                r={iconCircleRadius + 5}
                fill="none" 
                stroke="hsl(35 18% 40%)" 
                strokeWidth="1.75" 
                strokeDasharray="3 2"
              />
              {/* Inner icon container - bigger */}
              <circle 
                cx={x} 
                cy={y} 
                r={iconCircleRadius + 2}
                fill="hsl(35 18% 94%)" 
                stroke="hsl(35 18% 45%)" 
                strokeWidth="1.5"
              />
              {/* Icon image (bigger) */}
              <image 
                href={task.icon} 
                x={x - 16} 
                y={y - 16} 
                width={32} 
                height={32}
                preserveAspectRatio="xMidYMid meet"
              />
            </motion.g>
          );
        })}

        {/* Labels positioned very close to icons (no visible boxes; boundary is masked behind) */}
        {tasks.map((task) => {
          const rad = (task.angle) * Math.PI / 180;
          const textAnchor = task.labelPosition === "left" ? "end" : "start";
          const lines = task.label.split("\n");

          const labelOffset = task.labelPosition === "left" ? -32 : 32;
          const labelX = r(centerX + Math.cos(rad) * iconRadius + labelOffset);
          const labelY = r(centerY + Math.sin(rad) * iconRadius + (task.labelYOffset ?? 0));

          return (
            <text 
              key={`label-${task.id}`}
              x={labelX} 
              y={labelY}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              className="font-serif text-[9px] font-bold fill-foreground"
            >
              {lines.map((line, i) => (
                <tspan 
                  key={i} 
                  x={labelX} 
                  dy={i === 0 ? (lines.length > 1 ? -5 : 0) : 11}
                >
                  {line}
                </tspan>
              ))}
            </text>
          );
        })}
      </svg>

      {/* Goal 2 - Bottom */}
      <div className="text-center mt-1">
        <p className="font-serif text-xl font-bold text-foreground">Goal 2</p>
        <p className="font-serif text-sm font-semibold italic text-foreground/90">
          Manage and use non-browsing service features
        </p>
      </div>
    </div>
  );
};

export default Figure2aCS2;
