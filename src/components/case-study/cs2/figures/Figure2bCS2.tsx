"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../../ScalingContainer";

// User medallion images
const userMedallion1 = "/images/user-medallion-1.png";
const userMedallion2 = "/images/user-medallion-2.png";
const userMedallion3 = "/images/user-medallion-3.png";
const userMedallion4 = "/images/user-medallion-4.png";
const userMedallion5 = "/images/user-medallion-5.png";

// Task icons
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

const users = [
  { img: userMedallion1, label: "User 1", angle: -90 },
  { img: userMedallion2, label: "User 2", angle: -18 },
  { img: userMedallion3, label: "User 3", angle: 54 },
  { img: userMedallion4, label: "User 4", angle: 126 },
  { img: userMedallion5, label: "User 5", angle: 198 },
];

const taskIcons = [
  [iconRotator, iconSaveFavorite],
  [iconGenre, iconSeasonEpisode],
  [iconFindShow, iconOnAir],
  [iconFilter, iconPromoTeaser],
  [iconGiftCard, iconAccount],
];

const ConvergingArrow = ({ id, delay }: { id: string; delay: number }) => (
  <motion.svg
    viewBox="0 0 50 50"
    width={40}
    height={40}
    className="shrink-0"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4, type: "spring", stiffness: 200 }}
  >
    <defs>
      <marker id={`${id}-head`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="currentColor" className="text-foreground" />
      </marker>
    </defs>
    <line x1="2" y1="8" x2="40" y2="22" stroke="currentColor" strokeWidth="2.5" className="text-foreground" markerEnd={`url(#${id}-head)`} />
    <line x1="2" y1="42" x2="40" y2="28" stroke="currentColor" strokeWidth="2.5" className="text-foreground" markerEnd={`url(#${id}-head)`} />
  </motion.svg>
);

const Figure2bCS2 = () => {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const orbitR = 110;
  const innerR = orbitR - 32;
  const sunburstR = innerR - 4;
  const sunburstSize = sunburstR * 2;
  const userSize = 62;

  const labelNudge: Record<number, [number, number]> = {
    0: [0, -12],
    1: [20, 0],
    2: [0, 14],
    3: [0, 14],
    4: [12, 8],
  };

  return (
    <ScalingContainer designWidth={880} className="py-6">
      <div className="flex flex-row items-center justify-center gap-2">
      {/* ===== LEFT: Users Circle ===== */}
      <motion.div
        className="relative shrink-0"
        style={{ width: size, height: size }}
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="absolute inset-0">
          {/* Outer dashed orbit */}
          <motion.circle
            cx={cx} cy={cy} r={orbitR + 24}
            fill="none" stroke="currentColor"
            strokeWidth="1.5" strokeDasharray="5 4"
            className="text-foreground/30"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          {/* Main orbit */}
          <motion.circle
            cx={cx} cy={cy} r={orbitR}
            fill="none" stroke="currentColor"
            strokeWidth="2.5"
            className="text-foreground/70"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
          {/* Inner boundary */}
          <motion.circle
            cx={cx} cy={cy} r={innerR}
            fill="none" stroke="currentColor"
            strokeWidth="1" strokeDasharray="3 3"
            className="text-foreground/25"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />

          {/* Dotted lines from center to each user */}
          {users.map((user, i) => {
            const rad = (user.angle * Math.PI) / 180;
            const x2 = cx + Math.cos(rad) * (orbitR - userSize / 2 - 2);
            const y2 = cy + Math.sin(rad) * (orbitR - userSize / 2 - 2);
            return (
              <motion.line
                key={`line-${i}`}
                x1={cx} y1={cy}
                x2={x2} y2={y2}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="text-foreground/40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
              />
            );
          })}
        </svg>

        {/* Thick rotating dotted boundary 1 */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: (orbitR + 10) * 2,
            height: (orbitR + 10) * 2,
            left: cx - orbitR - 10,
            top: cy - orbitR - 10,
            border: "3px dotted",
            borderColor: "hsl(var(--foreground) / 0.2)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Thick rotating dotted boundary 2 (counter) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: (innerR + 14) * 2,
            height: (innerR + 14) * 2,
            left: cx - innerR - 14,
            top: cy - innerR - 14,
            border: "3px dotted",
            borderColor: "hsl(var(--foreground) / 0.15)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />

        {/* Central sunburst */}
        <motion.div
          className="absolute"
          style={{
            left: cx - sunburstSize / 2,
            top: cy - sunburstSize / 2,
            width: sunburstSize,
            height: sunburstSize,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.svg
            viewBox={`0 0 ${sunburstSize} ${sunburstSize}`}
            width={sunburstSize}
            height={sunburstSize}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 10px rgba(120, 100, 60, 0.6))" }}
          >
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15) * Math.PI / 180;
              const half = sunburstSize / 2;
              return (
                <line
                  key={i}
                  x1={half + Math.cos(angle) * 10}
                  y1={half + Math.sin(angle) * 10}
                  x2={half + Math.cos(angle) * (half - 2)}
                  y2={half + Math.sin(angle) * (half - 2)}
                  stroke="currentColor" strokeWidth="1.8"
                  className="text-foreground"
                />
              );
            })}
            <circle cx={sunburstSize / 2} cy={sunburstSize / 2} r={8} fill="currentColor" className="text-foreground" />
          </motion.svg>
        </motion.div>

        {/* User medallions */}
        {users.map((user, i) => {
          const rad = (user.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * orbitR - userSize / 2;
          const y = cy + Math.sin(rad) * orbitR - userSize / 2;
          const baseLabelX = Math.cos(rad) * 40;
          const baseLabelY = Math.sin(rad) * 38;
          const [nudgeX, nudgeY] = labelNudge[i] || [0, 0];

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: x, top: y, width: userSize, height: userSize }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 180, damping: 14 }}
              whileHover={{ scale: 1.18 }}
            >
              <motion.div
                className="w-full h-full rounded-full border-2 border-foreground/60 overflow-hidden"
                animate={{ boxShadow: ["0 0 0px rgba(120,100,60,0)", "0 0 8px rgba(120,100,60,0.3)", "0 0 0px rgba(120,100,60,0)"] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                <img src={user.img} alt={user.label} className="w-full h-full rounded-full object-cover" />
              </motion.div>
              <div className="absolute -inset-[4px] rounded-full border border-dashed border-foreground/30" />
              <span
                className="absolute text-[11px] font-serif font-bold text-foreground whitespace-nowrap"
                style={{
                  left: userSize / 2 + baseLabelX + nudgeX,
                  top: userSize / 2 + baseLabelY + nudgeY,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {user.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ===== ARROW 1 ===== */}
      <ConvergingArrow id="fig2b-a1" delay={0.5} />

      {/* ===== CENTER: Tasks Grid ===== */}
      <motion.div
        className="flex flex-col items-center gap-1.5 shrink-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.h4
          className="font-serif font-bold text-foreground text-base mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Tasks
        </motion.h4>
        <div className="flex flex-col gap-4">
          {taskIcons.map((row, ri) => (
            <div key={ri} className="flex gap-5 justify-center">
              {row.map((icon, ci) => (
                <motion.div
                  key={ci}
                  className="relative rounded-full border-[3.5px] border-foreground/90 bg-background/40 flex items-center justify-center"
                  style={{ width: 70, height: 70 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + ri * 0.1 + ci * 0.08,
                    type: "spring", stiffness: 220, damping: 16,
                  }}
                  whileHover={{ scale: 1.14, rotate: 6 }}
                >
                  <div className="absolute inset-[4px] rounded-full border-[2px] border-dashed border-foreground/45" />
                  <img src={icon} alt="task icon" className="w-10 h-10 object-contain relative z-10" style={{ filter: "contrast(1.3)" }} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ===== ARROW 2 ===== */}
      <ConvergingArrow id="fig2b-a2" delay={0.7} />

      {/* ===== RIGHT: Evaluation Criteria ===== */}
      <motion.div
        className="border-[3px] border-foreground/60 rounded-sm px-5 py-5 shrink-0"
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 150 }}
      >
        <motion.h4
          className="font-serif font-bold text-foreground text-sm mb-5 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Evaluation Criteria
        </motion.h4>
        <div className="flex flex-col gap-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            whileHover={{ x: 4 }}
          >
            <motion.svg
              viewBox="0 0 24 24" width={22} height={22}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0 0 3px rgba(120,100,60,0.4))" }}
            >
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" className="text-foreground" />
            </motion.svg>
            <span className="text-sm font-serif text-foreground">Quantitative<br />metrics</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            whileHover={{ x: 4 }}
          >
            <motion.svg
              viewBox="0 0 24 24" width={22} height={22}
              animate={{ scale: [1, 1.2, 1], rotate: [0, -360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 3px rgba(120,100,60,0.4))" }}
            >
              <polygon points="12,0 14,8 22,4 16,12 22,20 14,16 12,24 10,16 2,20 8,12 2,4 10,8" fill="currentColor" className="text-foreground" />
            </motion.svg>
            <span className="text-sm font-serif text-foreground">Qualitative<br />metrics</span>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </ScalingContainer>
  );
};

export default Figure2bCS2;
