"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../ScalingContainer";
import { r } from "@/lib/utils";

type IconProps = { className?: string };

const InsightsIcon = ({ className }: IconProps) => (
  <g className={className}>
    <path d="M12 -1 L12 1" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
    <path d="M4 3 L5.5 4.5" stroke="currentColor" strokeWidth="0.35" opacity="0.4" />
    <path d="M20 3 L18.5 4.5" stroke="currentColor" strokeWidth="0.35" opacity="0.4" />
    <path d="M2 10 L4 10" stroke="currentColor" strokeWidth="0.35" opacity="0.4" />
    <path d="M20 10 L22 10" stroke="currentColor" strokeWidth="0.35" opacity="0.4" />
    <path
      d="M12 2 Q6 2.5, 6 9 Q6 12.5, 8.5 15 L8.5 18 L15.5 18 L15.5 15 Q18 12.5, 18 9 Q18 2.5, 12 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4 Q8 4.5, 8 9 Q8 11.5, 9.5 13.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.35"
      opacity="0.4"
    />
    <line x1="8.5" y1="19.5" x2="15.5" y2="19.5" stroke="currentColor" strokeWidth="0.8" />
    <line x1="9.5" y1="21" x2="14.5" y2="21" stroke="currentColor" strokeWidth="0.7" />
    <line x1="10.5" y1="22.3" x2="13.5" y2="22.3" stroke="currentColor" strokeWidth="0.5" />
    <path d="M10 9 Q12 7, 14 9" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    <path d="M10.5 11 Q12 9.5, 13.5 11" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.45" />
    <line x1="12" y1="7" x2="12" y2="12" stroke="currentColor" strokeWidth="0.3" opacity="0.35" />
  </g>
);

const HabitsIcon = ({ className }: IconProps) => (
  <g className={className}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.4" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
      const rad = (deg - 90) * Math.PI / 180;
      const x1 = r(12 + Math.cos(rad) * 6.8);
      const y1 = r(12 + Math.sin(rad) * 6.8);
      const x2 = r(12 + Math.cos(rad) * 8.5);
      const y2 = r(12 + Math.sin(rad) * 8.5);
      const isCardinal = deg % 90 === 0;
      return (
        <line 
          key={deg} 
          x1={x1} y1={y1} x2={x2} y2={y2} 
          stroke="currentColor" 
          strokeWidth={isCardinal ? "0.7" : "0.35"} 
          opacity={isCardinal ? 1 : 0.7}
        />
      );
    })}
    <line x1="12" y1="12" x2="12" y2="5.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" opacity="0.3" className="text-background" />
    <rect x="11" y="1" width="2" height="1.5" rx="0.3" fill="currentColor" opacity="0.8" />
  </g>
);

const GoalsIcon = ({ className }: IconProps) => (
  <g className={className}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="12" cy="12" r="9.3" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
    <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="12" cy="12" r="6.3" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.35" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    <line x1="18" y1="6" x2="13" y2="11" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M18 6 L18 8.5" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M18 6 L15.5 6" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <line x1="19" y1="5" x2="20" y2="4" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
    <line x1="19.5" y1="6" x2="20.5" y2="5.5" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
  </g>
);

const ExperiencesIcon = ({ className }: IconProps) => (
  <g className={className}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.25" />
    <path
      d="M12 2 L13.5 8.5 L20 9 L14.5 12.5 L16 19 L12 14.5 L8 19 L9.5 12.5 L4 9 L10.5 8.5 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M12 5 L13 9 L16.5 9.5 L13.5 11.5 L14.5 15.5 L12 13 L9.5 15.5 L10.5 11.5 L7.5 9.5 L11 9 Z"
      fill="currentColor"
      opacity="0.12"
    />
    <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="12" r="0.7" fill="currentColor" opacity="0.5" />
    <line x1="12" y1="3" x2="12" y2="4.5" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
    <line x1="12" y1="19.5" x2="12" y2="21" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
    <line x1="3" y1="12" x2="4.5" y2="12" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
    <line x1="19.5" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
  </g>
);

const OpportunitiesIcon = ({ className }: IconProps) => (
  <g className={className}>
    <circle cx="7" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="7" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
    <circle cx="7" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="7" cy="12" r="1" fill="currentColor" opacity="0.25" />
    <path d="M5.5 10 Q7 9, 8.5 10" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
    <path d="M5.5 14 Q7 15, 8.5 14" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
    <line x1="12" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="12" y1="11.5" x2="20" y2="11.5" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
    <line x1="16" y1="12" x2="16" y2="15.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="18.5" y1="12" x2="18.5" y2="14" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <line x1="20" y1="12" x2="20" y2="13" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
  </g>
);

const NeedsIcon = ({ className }: IconProps) => (
  <g className={className}>
    <path
      d="M12 21 L12 15
         M7.5 15 L7.5 7 Q7.5 5, 9 5 L9 13
         M9 13 L9 5 Q9 3, 11 3 Q13 3, 13 5 L13 13
         M13 13 L13 6 Q13 4, 14.5 4 Q16 4, 16 6 L16 14
         M7.5 15 Q5.5 15, 5.5 17 L5.5 18.5 Q5.5 20, 7.5 20 L14.5 20 Q16 20, 16 18.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="7.5" y1="9" x2="7.5" y2="9.8" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
    <line x1="9" y1="8" x2="9" y2="8.8" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
    <line x1="13" y1="9" x2="13" y2="9.8" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
    <line x1="16" y1="9.5" x2="16" y2="10.3" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
    <path d="M8 16.5 Q11 17.5, 14 16.5" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.45" />
    <path d="M9 18 Q11 18.5, 13 18" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.35" />
    <line x1="10" y1="20.5" x2="14" y2="20.5" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
  </g>
);

const Figure2d = () => {

  const segments = [
    { label: "Key Insights", icon: InsightsIcon },
    { label: "Viewing Habits", icon: HabitsIcon },
    { label: "Goals", icon: GoalsIcon },
    { label: "Experiences", icon: ExperiencesIcon },
    { label: "Opportunities", icon: OpportunitiesIcon },
    { label: "Needs", icon: NeedsIcon },
  ] as const;

  const centerX = 200;
  const centerY = 200;
  const outerRadius = 165;
  const segmentAngle = 360 / segments.length;

  const polar = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: r(centerX + Math.cos(rad) * radius),
      y: r(centerY + Math.sin(rad) * radius),
    };
  };

  const polygonPoints = segments
    .map((_, i) => {
      const angle = -90 + i * segmentAngle;
      const p = polar(angle, 85 + (i % 2 === 0 ? 6 : -3));
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <ScalingContainer designWidth={700} className="py-4">
      <div className="flex justify-center">
      <motion.div
        className="relative"
        style={{ width: 480, height: 480 }}
        // Subtle whole-figure motion that stays contained (no scaling)
        whileHover={{ rotate: 0.8 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Safety clip: nothing should ever render outside the outer circle */}
            <clipPath id="figure2d-clip">
              <circle cx={centerX} cy={centerY} r={outerRadius} />
            </clipPath>
          </defs>

          {/* Outermost thin decorative ring — outside clip path so it's fully visible */}
          <circle
            cx={centerX}
            cy={centerY}
            r={outerRadius + 8}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
            className="text-foreground"
          />

          <g clipPath="url(#figure2d-clip)">
          {/* Outer ring - thick */}
          <motion.circle
            cx={centerX}
            cy={centerY}
            r={outerRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-foreground"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          {/* Secondary decorative ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={outerRadius - 8}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.45"
            className="text-foreground"
          />
          {/* Dashed inner ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={outerRadius - 16}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeDasharray="2 5"
            opacity="0.6"
            className="text-foreground"
          />

          {/* Section dividers */}
          {segments.map((_, i) => {
            const angle = -90 + i * segmentAngle;
            const pOuter = polar(angle, outerRadius - 2);
            const pInner = polar(angle, 22);
            return (
              <line
                key={`divider-${i}`}
                x1={pInner.x}
                y1={pInner.y}
                x2={pOuter.x}
                y2={pOuter.y}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
                className="text-foreground"
              />
            );
          })}

          {/* Filled inner polygon */}
          <polygon
            points={polygonPoints}
            fill="hsl(35 18% 38%)"
            opacity="0.6"
          />

          {/* Center sunburst - static, no hover to prevent escaping */}
          <g transform={`translate(${centerX}, ${centerY})`}>
            {[...Array(60)].map((_, i) => {
              const angle = (i * 360) / 60;
              const rad = (angle * Math.PI) / 180;
              const inner = 14;
              const outer = i % 2 === 0 ? 78 : 62;
              const x1 = r(Math.cos(rad) * inner);
              const y1 = r(Math.sin(rad) * inner);
              const x2 = r(Math.cos(rad) * outer);
              const y2 = r(Math.sin(rad) * outer);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(35 18% 28%)"
                  strokeWidth={i % 5 === 0 ? 0.55 : 0.3}
                  opacity={i % 5 === 0 ? 0.75 : 0.5}
                />
              );
            })}
            <circle r="14" fill="hsl(35 18% 28%)" />
            <circle r="8" fill="hsl(35 16% 35%)" opacity="0.7" />
            <circle r="4" fill="hsl(35 20% 22%)" />
            <circle r="2" fill="hsl(35 20% 18%)" />
          </g>

          {/* Labels */}
          {segments.map((segment, i) => {
            const midAngle = -90 + i * segmentAngle + segmentAngle / 2;
            const labelRadius = 130;
            const labelPos = polar(midAngle, labelRadius);
            const textRotation = midAngle + 90;
            const flipText = midAngle > 0 && midAngle < 180;
            const finalRotation = flipText ? textRotation + 180 : textRotation;

            return (
              <text
                key={`label-${i}`}
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${finalRotation}, ${labelPos.x}, ${labelPos.y})`}
                className="font-body text-[13px] fill-current text-[#343434]"
                style={{ letterSpacing: '0.02em' }}
              >
                {segment.label}
              </text>
            );
          })}

          {/* Icons with hover - using SVG transform-origin to prevent escaping */}
          {segments.map((segment, i) => {
            const midAngle = -90 + i * segmentAngle + segmentAngle / 2;
            const iconRadius = 105;
            const iconPos = polar(midAngle, iconRadius);
            const Icon = segment.icon;

            return (
              // IMPORTANT: We separate positioning (SVG attribute transform) from animation.
              // CSS transforms on SVG <g> can override the attribute transform and cause "jumping".
              <g key={`icon-${i}`} transform={`translate(${iconPos.x}, ${iconPos.y})`}>
                <motion.g
                  className="text-foreground cursor-pointer"
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  style={{ transformOrigin: "center" }}
                >
                  <g transform="translate(-12, -12)">
                    <Icon />
                  </g>
                </motion.g>
              </g>
            );
          })}
          </g>
        </svg>
      </motion.div>
      </div>
    </ScalingContainer>
  );
};

export default Figure2d;