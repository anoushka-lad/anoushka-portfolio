"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../../ScalingContainer";

const userMedallion1 = "/images/user-medallion-1.png";
const userMedallion2 = "/images/user-medallion-2.png";
const userMedallion3 = "/images/user-medallion-3.png";
const userMedallion4 = "/images/user-medallion-4.png";
const userMedallion5 = "/images/user-medallion-5.png";

const users = [
  { img: userMedallion1, label: "User 1", angle: -90 },
  { img: userMedallion2, label: "User 2", angle: -18 },
  { img: userMedallion3, label: "User 3", angle: 54 },
  { img: userMedallion4, label: "User 4", angle: 126 },
  { img: userMedallion5, label: "User 5", angle: 198 },
];

const tasks = [
  "Choose any stock you are interested in and tell me it's current price.",
  "Choose any stock you are interested in and tell me it's current price.",
  "Choose any stock you are interested in and tell me it's current price.",
];

const criteria = [
  { label: "Number &\nfrequency", points: "M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" },
  { label: "Placement &\norganisation", points: "12,0 14,8 22,4 16,12 22,20 14,16 12,24 10,16 2,20 8,12 2,4 10,8" },
  { label: "Load time &\ninteraction", sunburst: true },
];

const Figure1bCS3 = () => {
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
      <div className="flex flex-row items-center justify-center gap-4">
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
                className="absolute text-[13px] leading-[1.1] font-display text-foreground whitespace-nowrap"
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

      {/* ===== ARROWS: Users -> Tasks (3 arrows fanning out) ===== */}
      <motion.svg
        viewBox="0 0 60 200"
        width={50}
        height={200}
        className="shrink-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <defs>
          <marker id="fig1b-arrow-r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="currentColor" className="text-foreground" />
          </marker>
        </defs>
        {[40, 100, 160].map((ty, i) => (
          <motion.line
            key={i}
            x1="2" y1="100" x2="52" y2={ty}
            stroke="currentColor" strokeWidth="2" className="text-foreground"
            markerEnd="url(#fig1b-arrow-r)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.svg>

      {/* ===== CENTER: 3 Task Cards ===== */}
      <div className="flex flex-col items-center gap-4 shrink-0">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.03, y: -2 }}
          >
            <p className="font-display text-foreground text-[13px] leading-[1.1] text-center mb-1.5">
              Task {i + 1}
            </p>
            <div
              className="rounded-lg px-5 py-4 flex items-center justify-center text-center"
              style={{
                backgroundColor: "hsl(35 10% 20%)",
                width: 220,
                minHeight: 80,
              }}
            >
              <p className="font-display text-[13px] leading-[1.1]" style={{ color: "hsl(35 30% 85%)" }}>
                {task}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== ARROWS: Tasks -> Evaluation Criteria ===== */}
      <motion.svg
        viewBox="0 0 60 200"
        width={50}
        height={200}
        className="shrink-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <defs>
          <marker id="fig1b-arrow-r2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="currentColor" className="text-foreground" />
          </marker>
        </defs>
        {[[40, 60], [100, 100], [160, 140]].map(([sy, ty], i) => (
          <motion.line
            key={i}
            x1="2" y1={sy} x2="52" y2={ty}
            stroke="currentColor" strokeWidth="2" className="text-foreground"
            markerEnd="url(#fig1b-arrow-r2)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.svg>

      {/* ===== RIGHT: Evaluation Criteria ===== */}
      <motion.div
        className="border-[3px] border-foreground/60 rounded-sm px-5 py-5 shrink-0"
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 150 }}
      >
        <motion.h4
          className="font-display text-foreground text-[13px] leading-[1.1] mb-5 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Evaluation Criteria
        </motion.h4>
        <div className="flex flex-col gap-4">
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ x: 4 }}
            >
              {item.sunburst ? (
                <motion.svg
                  viewBox="0 0 24 24" width={22} height={22}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ filter: "drop-shadow(0 0 3px rgba(120,100,60,0.4))" }}
                >
                  {[...Array(12)].map((_, j) => {
                    const angle = (j * 30) * Math.PI / 180;
                    return (
                      <line
                        key={j}
                        x1={12 + Math.cos(angle) * 5}
                        y1={12 + Math.sin(angle) * 5}
                        x2={12 + Math.cos(angle) * 11}
                        y2={12 + Math.sin(angle) * 11}
                        stroke="currentColor" strokeWidth="1.5" className="text-foreground"
                      />
                    );
                  })}
                  <circle cx={12} cy={12} r={4} fill="currentColor" className="text-foreground" />
                </motion.svg>
              ) : (
                <motion.svg
                  viewBox="0 0 24 24" width={22} height={22}
                  animate={i === 0 ? { rotate: [0, 360] } : { scale: [1, 1.2, 1], rotate: [0, -360] }}
                  transition={{ duration: i === 0 ? 8 : 6, repeat: Infinity, ease: i === 0 ? "linear" : "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 3px rgba(120,100,60,0.4))" }}
                >
                  {item.points?.includes(",") ? (
                    <polygon points={item.points} fill="currentColor" className="text-foreground" />
                  ) : (
                    <path d={item.points!} fill="currentColor" className="text-foreground" />
                  )}
                </motion.svg>
              )}
              <span className="text-[13px] leading-[1.1] font-display text-foreground whitespace-pre-line">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </ScalingContainer>
  );
};

export default Figure1bCS3;
