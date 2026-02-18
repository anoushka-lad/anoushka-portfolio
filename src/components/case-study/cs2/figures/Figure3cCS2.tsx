"use client";
import { motion } from "framer-motion";
import ScalingContainer from "../../ScalingContainer";
import { r } from "@/lib/utils";

// Icon path constants
const iconAccount = "/images/cs2-icons/icon-account.png";
const iconFilter = "/images/cs2-icons/icon-filter.png";
const iconFindShow = "/images/cs2-icons/icon-find-show.png";
const iconGenre = "/images/cs2-icons/icon-genre.png";
const iconGiftCard = "/images/cs2-icons/icon-gift-card.png";
const iconOnAir = "/images/cs2-icons/icon-on-air.png";
const iconPromoTeaser = "/images/cs2-icons/icon-promo-teaser.png";
const iconRotator = "/images/cs2-icons/icon-rotator.png";
const iconSaveFavorite = "/images/cs2-icons/icon-save-favorite.png";
const iconSeasonEpisode = "/images/cs2-icons/icon-season-episode.png";

const icons = [
  { src: iconGenre },
  { src: iconAccount },
  { src: iconFindShow },
  { src: iconRotator },
  { src: iconGiftCard },
  { src: iconSaveFavorite },
  { src: iconSeasonEpisode },
  { src: iconOnAir },
  { src: iconFilter },
  { src: iconPromoTeaser },
];

// Label configurations with star connectors
const labelConfigs = [
  { iconIndex: 0, text: "Choose a genre", position: "above" },
  { iconIndex: 5, text: "Save to favourites", position: "below" },
  { iconIndex: 8, text: "Filter within a section", position: "left" },
  { iconIndex: 2, text: "Find a show by provider", position: "right" },
];

// Star/bling connector component - BIGGER
const StarConnector = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.7, 1, 0.7],
      scale: [0.9, 1.2, 0.9],
      rotate: [0, 15, 0, -15, 0]
    }}
    transition={{ 
      duration: 2.5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{ transformOrigin: `${x}px ${y}px` }}
  >
    {/* 4-point star - BIGGER */}
    <motion.path
      d={`M ${x} ${y-12} L ${x+4} ${y-4} L ${x+12} ${y} L ${x+4} ${y+4} L ${x} ${y+12} L ${x-4} ${y+4} L ${x-12} ${y} L ${x-4} ${y-4} Z`}
      fill="hsl(35 35% 50%)"
      stroke="hsl(35 45% 60%)"
      strokeWidth="1"
    />
    {/* Center glow - BIGGER */}
    <circle cx={x} cy={y} r="4" fill="hsl(35 55% 75%)" />
  </motion.g>
);

const Figure3cCS2 = () => {
  const size = 520;
  const center = size / 2;
  const padX = 90; // horizontal padding so curved text labels aren't clipped
  const totalWidth = size + padX * 2;
  
  // Tighter spacing
  const outerDottedRadius = 200;
  const innerDottedRadius = 110;
  const iconRadius = 155;
  const polygonRadius = 90;

  const iconSize = 40;
  const iconCount = icons.length;

  // Generate polygon points for dark center
  const polygonPoints = icons.map((_, i) => {
    const angle = (i * (360 / iconCount) - 90) * (Math.PI / 180);
    const x = r(center + Math.cos(angle) * polygonRadius);
    const y = r(center + Math.sin(angle) * polygonRadius);
    return `${x},${y}`;
  }).join(" ");

  // Get icon position by index
  const getIconPosition = (index: number) => {
    const angle = (index * (360 / iconCount) - 90) * (Math.PI / 180);
    return {
      x: r(center + Math.cos(angle) * iconRadius),
      y: r(center + Math.sin(angle) * iconRadius),
      angle
    };
  };

  // Get label position - always outside outer boundary with a safe margin (no collisions)
  const getLabelPosition = (config: typeof labelConfigs[0]) => {
    const iconPos = getIconPosition(config.iconIndex);
    const margin = 28; // distance from outer boundary

    const outerLeft = center - outerDottedRadius;
    const outerRight = center + outerDottedRadius;
    const outerTop = center - outerDottedRadius;
    const outerBottom = center + outerDottedRadius;

    switch (config.position) {
      case "above":
        return {
          x: iconPos.x,
          y: outerTop - margin,
          anchor: "middle" as const,
          starX: iconPos.x,
          starY: outerTop - 10,
        };
      case "below":
        return {
          x: iconPos.x,
          y: outerBottom + margin,
          anchor: "middle" as const,
          starX: iconPos.x,
          starY: outerBottom + 10,
        };
      case "left":
        return {
          x: outerLeft - margin,
          y: iconPos.y,
          anchor: "end" as const,
          starX: outerLeft - 10,
          starY: iconPos.y,
        };
      case "right":
        return {
          x: outerRight + margin,
          y: iconPos.y,
          anchor: "start" as const,
          starX: outerRight + 10,
          starY: iconPos.y,
        };
      default:
        return {
          x: iconPos.x,
          y: iconPos.y,
          anchor: "middle" as const,
          starX: iconPos.x,
          starY: iconPos.y,
        };
    }
  };

  return (
    <ScalingContainer designWidth={700} className="py-4">
      <div className="flex justify-center">
      <div className="relative" style={{ width: totalWidth, height: size }}>
        <svg width={totalWidth} height={size} viewBox={`${-padX} 0 ${totalWidth} ${size}`}>
          
          {/* ===== OUTER ROTATING BOUNDARY ===== */}
          <g style={{ transformOrigin: `${center}px ${center}px` }}>
            <motion.circle
              cx={center}
              cy={center}
              r={outerDottedRadius}
              fill="none"
              stroke="hsl(35 18% 28%)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${center}px ${center}px` }}
            />
          </g>

          {/* ===== INNER ROTATING BOUNDARY (opposite) ===== */}
          <g style={{ transformOrigin: `${center}px ${center}px` }}>
            <motion.circle
              cx={center}
              cy={center}
              r={innerDottedRadius}
              fill="none"
              stroke="hsl(35 18% 28%)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${center}px ${center}px` }}
            />
          </g>

          {/* ===== DARK POLYGON CENTER ===== */}
          <motion.polygon
            points={polygonPoints}
            fill="hsl(35 12% 30%)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.95, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          />

          {/* ===== DOTTED LINES FROM SUN AROUND EACH ICON ===== */}
          {icons.map((_, i) => {
            const angle = (i * (360 / iconCount) - 90) * (Math.PI / 180);
            const nextAngle = ((i + 1) * (360 / iconCount) - 90) * (Math.PI / 180);
            
            // Line from center to before icon
            const x1 = r(center + Math.cos(angle) * 30);
            const y1 = r(center + Math.sin(angle) * 30);
            const x2 = r(center + Math.cos(angle) * (iconRadius - 35));
            const y2 = r(center + Math.sin(angle) * (iconRadius - 35));

            // Arc around icon - start and end points
            const arcStartX = r(center + Math.cos(angle) * (iconRadius - 35));
            const arcStartY = r(center + Math.sin(angle) * (iconRadius - 35));
            const arcEndX = r(center + Math.cos(nextAngle) * (iconRadius - 35));
            const arcEndY = r(center + Math.sin(nextAngle) * (iconRadius - 35));

            // Outer arc path
            const outerArcStartX = r(center + Math.cos(angle) * (iconRadius + 35));
            const outerArcStartY = r(center + Math.sin(angle) * (iconRadius + 35));
            const outerArcEndX = r(center + Math.cos(nextAngle) * (iconRadius + 35));
            const outerArcEndY = r(center + Math.sin(nextAngle) * (iconRadius + 35));

            return (
              <g key={`radial-group-${i}`}>
                {/* Radial line from center */}
                <motion.line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(35 18% 22%)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                />
                
                {/* Inner arc segment around icon */}
                <motion.path
                  d={`M ${arcStartX} ${arcStartY} A ${iconRadius - 35} ${iconRadius - 35} 0 0 1 ${arcEndX} ${arcEndY}`}
                  fill="none"
                  stroke="hsl(35 18% 25%)"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
                />
                
                {/* Outer arc segment around icon */}
                <motion.path
                  d={`M ${outerArcStartX} ${outerArcStartY} A ${iconRadius + 35} ${iconRadius + 35} 0 0 1 ${outerArcEndX} ${outerArcEndY}`}
                  fill="none"
                  stroke="hsl(35 18% 25%)"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.04 }}
                />

                {/* Connecting lines from inner arc to outer arc */}
                <motion.line
                  x1={arcStartX}
                  y1={arcStartY}
                  x2={outerArcStartX}
                  y2={outerArcStartY}
                  stroke="hsl(35 18% 25%)"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                />
              </g>
            );
          })}

          {/* ===== ANIMATED SHINY SUNBURST ===== */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          >
            {[...Array(36)].map((_, i) => {
              const angle = (i * 10) * (Math.PI / 180);
              const innerR = 5;
              const outerR = i % 2 === 0 ? 28 : 18;
              const x1 = r(center + Math.cos(angle) * innerR);
              const y1 = r(center + Math.sin(angle) * innerR);
              const x2 = r(center + Math.cos(angle) * outerR);
              const y2 = r(center + Math.sin(angle) * outerR);
              return (
                <motion.line
                  key={`sunburst-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(35 20% 18%)"
                  strokeWidth={i % 2 === 0 ? 2 : 1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.01 }}
                />
              );
            })}
          </motion.g>

          {/* ===== CENTER DOT WITH GLOW ===== */}
          <motion.circle
            cx={center}
            cy={center}
            r={6}
            fill="hsl(35 20% 15%)"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.15, 1],
              filter: [
                "drop-shadow(0 0 2px hsl(35 30% 40%))",
                "drop-shadow(0 0 8px hsl(35 40% 50%))",
                "drop-shadow(0 0 2px hsl(35 30% 40%))"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          {/* ===== ICON CIRCLES WITH DOTTED BORDERS ===== */}
          {icons.map((icon, i) => {
            const angle = (i * (360 / iconCount) - 90) * (Math.PI / 180);
            const x = r(center + Math.cos(angle) * iconRadius);
            const y = r(center + Math.sin(angle) * iconRadius);

            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.06, type: "spring" }}
                style={{ cursor: "pointer" }}
              >
                {/* Outer dotted ring */}
                <circle
                  cx={x}
                  cy={y}
                  r={iconSize / 2 + 12}
                  fill="none"
                  stroke="hsl(35 18% 35%)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                {/* Inner solid ring */}
                <circle
                  cx={x}
                  cy={y}
                  r={iconSize / 2 + 5}
                  fill="hsl(35 22% 92%)"
                  stroke="hsl(35 18% 28%)"
                  strokeWidth="2"
                />
                
                {/* Icon image */}
                <image
                  href={icon.src}
                  x={x - iconSize / 2}
                  y={y - iconSize / 2}
                  width={iconSize}
                  height={iconSize}
                  style={{ filter: "grayscale(20%)" }}
                />
              </motion.g>
            );
          })}

          {/* ===== CURVED TEXT PATHS FOR LEFT/RIGHT (larger radius for full visibility) ===== */}
          <defs>
            {/* Left arc path - offset outward by 88px from outer ring */}
            <path
              id="leftTextPath"
              d={`M ${center - outerDottedRadius - 88} ${center + 110} A ${outerDottedRadius + 88} ${outerDottedRadius + 88} 0 0 1 ${center - outerDottedRadius - 88} ${center - 110}`}
              fill="none"
            />
            {/* Right arc path - offset outward by 118px from outer ring (extra room for full text) */}
            <path
              id="rightTextPath"
              d={`M ${center + outerDottedRadius + 118} ${center - 110} A ${outerDottedRadius + 118} ${outerDottedRadius + 118} 0 0 1 ${center + outerDottedRadius + 118} ${center + 110}`}
              fill="none"
            />
          </defs>

          {/* ===== TEXT LABELS WITH STAR CONNECTORS ===== */}
          {labelConfigs.map((config, i) => {
            const pos = getLabelPosition(config);
            
            // For left/right, use curved textPath
            if (config.position === "left" || config.position === "right") {
              const pathId = config.position === "left" ? "leftTextPath" : "rightTextPath";
              
              return (
                <motion.g
                  key={`label-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.15 }}
                >
                  {/* Star connector */}
                  <StarConnector x={pos.starX} y={pos.starY} delay={1.4 + i * 0.15} />
                  
                  {/* Curved text label */}
                  <motion.text
                    className="font-body text-sm"
                    fill="#343434"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
                    style={{ letterSpacing: "0.5px" }}
                  >
                    <textPath
                      href={`#${pathId}`}
                      startOffset={config.position === "left" ? "66%" : "18%"}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {config.text}
                    </textPath>
                  </motion.text>
                </motion.g>
              );
            }
            
            // For top/bottom, keep straight text
            return (
              <motion.g
                key={`label-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.15 }}
              >
                {/* Star connector */}
                <StarConnector x={pos.starX} y={pos.starY} delay={1.4 + i * 0.15} />
                
                {/* Straight text label */}
                <motion.text
                  x={pos.x}
                  y={pos.y}
                  textAnchor={pos.anchor}
                  dominantBaseline="middle"
                  className="font-body text-sm"
                  fill="#343434"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
                >
                  {config.text}
                </motion.text>
              </motion.g>
            );
          })}

          {/* ===== FLOATING PARTICLES ===== */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const radius = 190 + (i % 3) * 15;
            const x = r(center + Math.cos(angle) * radius);
            const y = r(center + Math.sin(angle) * radius);
            
            return (
              <motion.circle
                key={`particle-${i}`}
                cx={x}
                cy={y}
                r={1.5}
                fill="hsl(35 30% 50%)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </svg>
      </div>
      </div>
    </ScalingContainer>
  );
};

export default Figure3cCS2;
