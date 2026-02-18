"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../../ScalingContainer";

const iconRotator = "/images/cs2-icons/icon-rotator.png";
const iconSaveFavorite = "/images/cs2-icons/icon-save-favorite.png";
const iconGenre = "/images/cs2-icons/icon-genre.png";
const iconSeasonEpisode = "/images/cs2-icons/icon-season-episode.png";
const iconFindShow = "/images/cs2-icons/icon-find-show.png";
const iconOnAir = "/images/cs2-icons/icon-on-air.png";
const iconFilter = "/images/cs2-icons/icon-filter.png";
const iconPromoTeaser = "/images/cs2-icons/icon-promo-teaser.png";
const iconGiftCard = "/images/cs2-icons/icon-gift-card.png";
const iconAccount = "/images/cs2-icons/icon-account.png";

const ICON_SIZE = 44;
const MEDALLION_SIZE = 56;

const IconMedallion = ({
  src,
  alt,
  x,
  y,
  delay,
}: {
  src: string;
  alt: string;
  x: number;
  y: number;
  delay: number;
}) => (
  <motion.div
    className="absolute flex items-center justify-center"
    style={{
      left: x - MEDALLION_SIZE / 2,
      top: y - MEDALLION_SIZE / 2,
      width: MEDALLION_SIZE,
      height: MEDALLION_SIZE,
    }}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 14 }}
    whileHover={{ scale: 1.15, rotate: 6 }}
  >
    {/* Bobbing wrapper — separated from visibility animation */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-[2.5px] border-foreground/70" />
        <div className="absolute inset-[4px] rounded-full border-[1.5px] border-dashed border-foreground/40" />
      </motion.div>
      <img
        src={src}
        alt={alt}
        className="relative z-10 object-contain"
        style={{ width: ICON_SIZE, height: ICON_SIZE, filter: "contrast(1.3)" }}
      />
    </motion.div>
  </motion.div>
);

// Design dimensions
const W = 620;
const H = 530;

const Figure2cCS2 = () => {
  const r = 170;
  const topCx = W / 2;
  const topCy = 195;
  const leftCx = W / 2 - 75;
  const leftCy = 300;
  const rightCx = W / 2 + 75;
  const rightCy = 300;

  const centerX = W / 2;
  const centerY = 270;

  const circles = [
    { cx: topCx, cy: topCy, delay: 0 },
    { cx: leftCx, cy: leftCy, delay: 0.15 },
    { cx: rightCx, cy: rightCy, delay: 0.3 },
  ];

  return (
    <ScalingContainer designWidth={W} className="py-6">
      <div className="flex justify-center">
        <div className="relative" style={{ width: W, height: H }}>
          {/* Labels */}
          <motion.span
            className="absolute font-serif text-foreground text-sm"
            style={{ left: W / 2 - 40, top: 4, transform: "translateX(-50%)" }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Desirability
          </motion.span>
          <motion.span
            className="absolute font-serif text-foreground text-sm"
            style={{ left: 20, bottom: 30 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Viability
          </motion.span>
          <motion.span
            className="absolute font-serif text-foreground text-sm"
            style={{ right: 20, bottom: 30 }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Feasibility
          </motion.span>

          {/* SVG Circles */}
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width={W}
            height={H}
            className="absolute inset-0"
          >
            {circles.map((c, i) => (
              <g key={i}>
                <motion.circle
                  cx={c.cx} cy={c.cy} r={r}
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-foreground/60"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: c.delay + 0.1 }}
                />
              </g>
            ))}
          </svg>

          {/* Rotating dashed rings — outer */}
          {circles.map((c, i) => (
            <motion.div
              key={`rot-outer-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: (r + 6) * 2,
                height: (r + 6) * 2,
                left: c.cx - r - 6,
                top: c.cy - r - 6,
                border: "2.5px dotted",
                borderColor: "hsl(var(--foreground) / 0.3)",
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 50 + i * 15, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {/* Rotating dashed rings — inner */}
          {circles.map((c, i) => (
            <motion.div
              key={`rot-inner-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: (r - 6) * 2,
                height: (r - 6) * 2,
                left: c.cx - (r - 6),
                top: c.cy - (r - 6),
                border: "2.5px dotted",
                borderColor: "hsl(var(--foreground) / 0.25)",
              }}
              animate={{ rotate: i % 2 === 0 ? -360 : 360 }}
              transition={{ duration: 40 + i * 12, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {/* Icons */}
          <IconMedallion src={iconAccount} alt="Account" x={topCx} y={topCy - 105} delay={0.5} />
          <IconMedallion src={iconOnAir} alt="On Air" x={centerX - 120} y={centerY - 65} delay={0.6} />
          <IconMedallion src={iconFindShow} alt="Find Show" x={centerX + 135} y={centerY - 55} delay={0.65} />
          <IconMedallion src={iconPromoTeaser} alt="Promo Teaser" x={leftCx - 70} y={leftCy + 65} delay={0.7} />
          <IconMedallion src={iconRotator} alt="Rotator" x={centerX} y={leftCy + 100} delay={0.75} />
          <IconMedallion src={iconGiftCard} alt="Gift Card" x={rightCx + 60} y={rightCy + 65} delay={0.8} />
          <IconMedallion src={iconGenre} alt="Genre" x={centerX - 34} y={centerY - 34} delay={0.85} />
          <IconMedallion src={iconSaveFavorite} alt="Save Favorite" x={centerX + 34} y={centerY - 34} delay={0.9} />
          <IconMedallion src={iconSeasonEpisode} alt="Season Episode" x={centerX - 34} y={centerY + 34} delay={0.95} />
          <IconMedallion src={iconFilter} alt="Filter" x={centerX + 34} y={centerY + 34} delay={1.0} />
        </div>
      </div>
    </ScalingContainer>
  );
};

export default Figure2cCS2;
