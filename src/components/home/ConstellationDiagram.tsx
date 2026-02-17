"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const sunburstImg = "/images/constellation/sunburst.png";
const ellipseDashed = "/images/constellation/ellipse-dashed.png";
const ellipseDotted = "/images/constellation/ellipse-dotted.png";
const arcRing5 = "/images/constellation/arc-ring-5.png";
const arcRing6 = "/images/constellation/arc-ring-6.png";

const CANVAS_W = 720;
const CANVAS_H = 620;
const CX = 340;
const CY = 330;

/* -- Dark engraved color palette -- */
const C = {
  stroke: "hsl(30 20% 22%)",
  fill: "hsl(30 20% 22%)",
  fillLight: "hsl(30 18% 28%)",
  shadow: "hsl(30 15% 12%)",
};

/* -- Unique engraved symbol SVGs for each node -- */
const symbols: Record<string, (size: number, filled: boolean) => React.ReactNode> = {
  star4: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        stroke={C.stroke} strokeWidth="2" fill={filled ? C.fill : "none"}
        filter="url(#engrave)" />
      <defs><filter id="engrave-s4"><feDropShadow dx="0.5" dy="0.5" stdDeviation="0.3" floodColor={C.shadow} floodOpacity="0.6"/></filter></defs>
    </svg>
  ),
  star6: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 1L14 8L20 4L16 10L23 12L16 14L20 20L14 16L12 23L10 16L4 20L8 14L1 12L8 10L4 4L10 8Z"
        stroke={C.stroke} strokeWidth="1.5" fill={filled ? C.fill : "none"} />
    </svg>
  ),
  diamond: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L22 12L12 22L2 12Z"
        stroke={C.stroke} strokeWidth="2" fill={filled ? C.fill : "none"} />
      <path d="M12 6L18 12L12 18L6 12Z"
        stroke={C.fillLight} strokeWidth="0.8" fill="none" />
    </svg>
  ),
  sunCircle: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={C.stroke} strokeWidth="2" fill={filled ? C.fillLight : "none"} />
      <circle cx="12" cy="12" r="4" stroke={C.stroke} strokeWidth="1" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill={C.fill} />
    </svg>
  ),
  cross: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3V21M3 12H21" stroke={C.stroke} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 7V17M7 12H17" stroke={C.fillLight} strokeWidth="0.8" strokeLinecap="round" />
      {filled && <circle cx="12" cy="12" r="2.5" fill={C.fill} />}
    </svg>
  ),
  crescent: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16 4A8 8 0 1016 20 6 6 0 0016 4Z"
        stroke={C.stroke} strokeWidth="2" fill={filled ? C.fillLight : "none"} />
      <path d="M15 6A6.5 6.5 0 1015 18 5 5 0 0015 6Z"
        stroke={C.shadow} strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  ),
  star8: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 1L13.5 9L18 3L15 9.5L23 8L15 11L23 16L15 13L18 21L13.5 15L12 23L10.5 15L6 21L9 13L1 16L9 11L1 8L9 9.5L6 3L10.5 9Z"
        stroke={C.stroke} strokeWidth="1.5" fill={filled ? C.fill : "none"} />
    </svg>
  ),
  triangle: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L22 21H2Z"
        stroke={C.stroke} strokeWidth="2" fill={filled ? C.fillLight : "none"} />
      <path d="M12 8L18 19H6Z"
        stroke={C.shadow} strokeWidth="0.6" fill="none" opacity="0.4" />
    </svg>
  ),
  eye: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M2 12C2 12 6 5 12 5C18 5 22 12 22 12C22 12 18 19 12 19C6 19 2 12 2 12Z"
        stroke={C.stroke} strokeWidth="2" fill={filled ? C.fillLight : "none"} />
      <circle cx="12" cy="12" r="3" stroke={C.stroke} strokeWidth="1.5" fill={C.fill} />
      <circle cx="12" cy="12" r="1" fill={C.shadow} />
    </svg>
  ),
  hexagon: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L21 7V17L12 22L3 17V7Z"
        stroke={C.stroke} strokeWidth="2" fill={filled ? C.fillLight : "none"} />
      <path d="M12 6L17 9V15L12 18L7 15V9Z"
        stroke={C.shadow} strokeWidth="0.6" fill="none" opacity="0.4" />
    </svg>
  ),
  radiantSun: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5" stroke={C.stroke} strokeWidth="2" fill={filled ? C.fillLight : "none"} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 12 + Math.cos(rad) * 6.5;
        const y1 = 12 + Math.sin(rad) * 6.5;
        const x2 = 12 + Math.cos(rad) * 10;
        const y2 = 12 + Math.sin(rad) * 10;
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.stroke} strokeWidth="2" strokeLinecap="round" />;
      })}
    </svg>
  ),
  asterisk: (size, filled) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3V21M4.5 7.5L19.5 16.5M19.5 7.5L4.5 16.5" stroke={C.stroke} strokeWidth="2.2" strokeLinecap="round" />
      {filled && <circle cx="12" cy="12" r="2.5" fill={C.fill} />}
    </svg>
  ),
};

const nodeSymbolMap: Record<string, keyof typeof symbols> = {
  hai: "star8",
  qual: "radiantSun",
  inclusive: "eye",
  ux: "sunCircle",
  quant: "diamond",
  "research-ops": "hexagon",
  digital: "star6",
  ethics: "star4",
  ia: "radiantSun",
  governance: "crescent",
  "design-systems": "asterisk",
  knowledge: "triangle",
};

// Animation variants per symbol type for variety
const iconAnimations: Record<string, Record<string, number[]>> = {
  star8: { rotate: [0, 15, -15, 0] },
  radiantSun: { rotate: [0, 360] },
  crescent: { scale: [1, 1.15, 1] },
  sunCircle: { rotate: [0, 360] },
  diamond: { rotate: [0, 90, 0] },
  hexagon: { scale: [1, 1.12, 1] },
  star6: { rotate: [0, -360] },
  eye: { scaleX: [1, 0.7, 1] },
  triangle: { y: [0, -2, 0] },
  cross: { rotate: [0, 90, 180, 270, 360] },
  asterisk: { rotate: [0, 180, 360] },
  star4: { scale: [1, 1.2, 1], rotate: [0, 45, 0] },
};

const iconTransitions: Record<string, object> = {
  star8: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  radiantSun: { duration: 20, repeat: Infinity, ease: "linear" },
  crescent: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  sunCircle: { duration: 25, repeat: Infinity, ease: "linear" },
  diamond: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  hexagon: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  star6: { duration: 18, repeat: Infinity, ease: "linear" },
  eye: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
  triangle: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  cross: { duration: 12, repeat: Infinity, ease: "linear" },
  asterisk: { duration: 8, repeat: Infinity, ease: "linear" },
  star4: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  isCenter?: boolean;
}

interface Connection {
  from: string;
  to: string;
  dashed?: boolean;
}

const nodes: NodeData[] = [
  { id: "center", label: "Anoushka Lad", x: 0, y: 0, isCenter: true },

  // Top arc
  { id: "hai", label: "Human-AI\nInteraction Research", x: -55, y: -300 },
  { id: "qual", label: "Qualitative\nMethods", x: 200, y: -235 },
  { id: "ux", label: "User Experience\nResearch", x: 130, y: -150 },
  { id: "quant", label: "Quantitative\nMethods", x: 280, y: -95 },

  // Upper-left
  { id: "inclusive", label: "Inclusive Design\nResearch", x: -370, y: -165 },

  // Mid band
  { id: "research-ops", label: "Research\nOperations", x: -160, y: 45 },
  { id: "digital", label: "Digital Product\nStrategy", x: 180, y: 45 },

  // Lower band
  { id: "ethics", label: "Ethics", x: -45, y: 170 },
  { id: "ia", label: "Information\nArchitecture", x: 120, y: 145 },

  // Bottom
  { id: "governance", label: "Governance", x: -220, y: 190 },
  { id: "design-systems", label: "Design Systems\nThinking", x: 280, y: 190 },

  { id: "knowledge", label: "Knowledge\nTranslation", x: -320, y: 65 },
];

const connections: Connection[] = [
  { from: "center", to: "hai", dashed: false },
  { from: "center", to: "qual", dashed: false },
  { from: "center", to: "inclusive", dashed: false },
  { from: "center", to: "ux", dashed: false },
  { from: "center", to: "quant", dashed: false },
  { from: "center", to: "research-ops", dashed: false },
  { from: "center", to: "digital", dashed: false },
  { from: "center", to: "ethics", dashed: false },
  { from: "center", to: "ia", dashed: false },
  { from: "center", to: "governance", dashed: false },
  { from: "center", to: "design-systems", dashed: false },
  { from: "center", to: "knowledge", dashed: false },
  // Node-to-node dotted connections
  { from: "research-ops", to: "knowledge", dashed: true },
  { from: "research-ops", to: "governance", dashed: true },
  { from: "research-ops", to: "ethics", dashed: true },
  { from: "ux", to: "qual", dashed: true },
  { from: "ux", to: "quant", dashed: true },
  { from: "ia", to: "design-systems", dashed: true },
];

/* -- Gap stars between the two arc rings (radius ~180-200) -- */
const GAP_RADIUS = 190;
const GAP_STAR_COUNT = 12;
const gapStars = Array.from({ length: GAP_STAR_COUNT }, (_, i) => {
  const angle = (i / GAP_STAR_COUNT) * Math.PI * 2;
  return {
    x: CX + Math.cos(angle) * GAP_RADIUS,
    y: CY + Math.sin(angle) * GAP_RADIUS,
    delay: i * 0.4,
    type: i % 3, // 0=4pt star, 1=dot, 2=diamond
  };
});

const ConstellationDiagram = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [autoPulse, setAutoPulse] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Auto-pulse: briefly highlight all lines every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredNode) {
        setAutoPulse(true);
        setTimeout(() => setAutoPulse(false), 3000);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredNode]);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const availableWidth = parent.clientWidth;
          // Use viewport height as the primary constraint
          const availableHeight = Math.min(parent.clientHeight, window.innerHeight * 0.85);
          const scaleX = availableWidth / CANVAS_W;
          const scaleY = availableHeight / CANVAS_H;
          setScale(Math.min(scaleX, scaleY, 1));
        }
      }
    };
    // Run on next frame to ensure layout is settled
    requestAnimationFrame(updateScale);
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const isNodeHighlighted = (nodeId: string) => {
    if (!hoveredNode) return false;
    if (nodeId === hoveredNode) return true;
    return connections.some(
      (c) =>
        (c.from === hoveredNode && c.to === nodeId) ||
        (c.to === hoveredNode && c.from === nodeId)
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: CANVAS_W * scale, height: CANVAS_H * scale }}
    >
      <div
        className="absolute inset-0 origin-top-left"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${scale})`,
        }}
      >
        {/* Sunburst - bigger and darker */}
        <motion.img
          src={sunburstImg}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: 460,
            height: 460,
            left: CX - 230,
            top: CY - 230,
            filter: "brightness(0.35) contrast(1.6) sepia(0.5) saturate(3.5) hue-rotate(8deg)",
          }}
          animate={{
            rotate: 360,
            opacity: [0.35, 0.6, 0.35],
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* SVG overlay: dotted boundary, radial lines to gap stars, connection lines to nodes */}
        <svg
          className="absolute pointer-events-none"
          style={{ left: 0, top: 0, width: CANVAS_W, height: CANVAS_H, zIndex: 5 }}
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
        >
          {/* Dotted circle boundary around center diamond */}
          <circle cx={CX} cy={CY} r={30} fill="none" stroke="hsl(30 18% 20%)" strokeWidth="1.2" strokeDasharray="2 3" opacity={0.6} />

          {/* Dotted radial lines from boundary to gap stars */}
          {gapStars.map((star, i) => {
            const angle = Math.atan2(star.y - CY, star.x - CX);
            const sx = CX + Math.cos(angle) * 30;
            const sy = CY + Math.sin(angle) * 30;
            return <line key={`rad-${i}`} x1={sx} y1={sy} x2={star.x} y2={star.y} stroke="hsl(30 16% 18%)" strokeWidth="0.8" strokeDasharray="3 4" opacity={0.4} />;
          })}

          {/* Gap stars - all 4-point stars, bigger and darker */}
          {gapStars.map((star, i) => (
            <g key={`gs-${i}`} transform={`translate(${star.x}, ${star.y})`}>
              <path d="M0 -7L1.8 -1.8L7 0L1.8 1.8L0 7L-1.8 1.8L-7 0L-1.8 -1.8Z" fill="hsl(30 20% 18%)" opacity={hoveredNode === "center" ? 0.9 : 0.7} />
            </g>
          ))}

          {/* Per-node line endpoint tweaks (y offset only, text stays put) */}
          {(() => {
            const lineYTweak: Record<string, number> = {
              "research-ops": 22,
              "knowledge": 8,
              "ux": 20,
              "qual": -5,
            };
            return connections.map((conn) => {
              const fromNode = nodes.find((n) => n.id === conn.from);
              const toNode = nodes.find((n) => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              let sx: number, sy: number, tx: number, ty: number;
              const ICON_OFFSET_Y = -13;

              if (conn.from === "center") {
                const tweakTo = lineYTweak[toNode.id] || 0;
                const iconX = CX + toNode.x;
                const iconY = CY + toNode.y + ICON_OFFSET_Y + tweakTo;
                const angle = Math.atan2(iconY - CY, iconX - CX);
                sx = CX + Math.cos(angle) * 30;
                sy = CY + Math.sin(angle) * 30;
                tx = iconX;
                ty = iconY;
              } else {
                const tweakFrom = lineYTweak[fromNode.id] || 0;
                const tweakTo = lineYTweak[toNode.id] || 0;
                const fromIconX = CX + fromNode.x;
                const fromIconY = CY + fromNode.y + ICON_OFFSET_Y + tweakFrom;
                const toIconX = CX + toNode.x;
                const toIconY = CY + toNode.y + ICON_OFFSET_Y + tweakTo;
                sx = fromIconX;
                sy = fromIconY;
                tx = toIconX;
                ty = toIconY;
              }

              const isHighlighted = hoveredNode === "center" || hoveredNode === conn.from || hoveredNode === conn.to;
              return (
                <line
                  key={`conn-${conn.from}-${conn.to}`}
                  x1={sx}
                  y1={sy}
                  x2={tx}
                  y2={ty}
                  stroke="hsl(30 18% 16%)"
                  strokeWidth={conn.dashed ? "0.8" : "1.2"}
                  strokeDasharray={conn.dashed ? "5 4" : "none"}
                  opacity={hoveredNode ? (isHighlighted ? 0.9 : 0.1) : autoPulse ? 0.85 : 0.35}
                  style={{ transition: "opacity 1s ease" }}
                />
              );
            });
          })()}
        </svg>

        {/* Center sun icon */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: 60,
            height: 60,
            left: CX - 30,
            top: CY - 30,
            zIndex: 11,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
           <motion.svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            animate={{
              filter: [
                "drop-shadow(0 0 8px hsl(40 100% 50% / 0.4))",
                "drop-shadow(0 0 20px hsl(40 100% 50% / 0.8))",
                "drop-shadow(0 0 8px hsl(40 100% 50% / 0.4))",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="30" cy="30" r="9" fill="hsl(38 95% 55%)" />
            <circle cx="30" cy="30" r="9" fill="none" stroke="hsl(30 90% 42%)" strokeWidth="1" />
            <circle cx="30" cy="30" r="15" fill="none" stroke="hsl(38 90% 50%)" strokeWidth="0.8" opacity="0.6" />
            <circle cx="30" cy="30" r="21" fill="none" stroke="hsl(35 80% 45%)" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 30 + Math.cos(rad) * 12;
              const y1 = 30 + Math.sin(rad) * 12;
              const x2 = 30 + Math.cos(rad) * 18;
              const y2 = 30 + Math.sin(rad) * 18;
              return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(38 90% 50%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />;
            })}
          </motion.svg>
        </motion.div>

        {/* Arc rings - much darker */}
        {[
          { src: arcRing5, size: 360, speed: 35, dir: 1, hue: "hue-rotate(270deg) brightness(0.08) contrast(2.2) sepia(0.6) saturate(2)" },
          { src: arcRing6, size: 400, speed: 48, dir: -1, hue: "hue-rotate(320deg) brightness(0.1) contrast(2) sepia(0.8) saturate(2.2)" },
        ].map((ring, i) => (
          <motion.img
            key={i}
            src={ring.src}
            alt=""
            className="absolute pointer-events-none"
            style={{
              width: ring.size,
              height: ring.size,
              left: CX - ring.size / 2,
              top: CY - ring.size / 2,
              opacity: 0.55,
              filter: ring.hue,
            }}
            animate={{ rotate: 360 * ring.dir }}
            transition={{
              duration: ring.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Dashed ellipse ring - much darker */}
        <img
          src={ellipseDashed}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: 420,
            height: 420,
            left: CX - 210,
            top: CY - 210,
            opacity: 0.4,
            filter: "brightness(0.1) contrast(2) sepia(1) saturate(3) hue-rotate(10deg)",
          }}
        />

        {/* Dotted ellipse ring - much darker */}
        <img
          src={ellipseDotted}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: 470,
            height: 470,
            left: CX - 235,
            top: CY - 235,
            opacity: 0.35,
            filter: "brightness(0.08) contrast(2) sepia(1) saturate(2) hue-rotate(340deg)",
          }}
        />

        {/* Nodes with engraved symbols + animations */}
        {nodes.map((node) => {
          const highlighted = isNodeHighlighted(node.id);
          const dimmed = hoveredNode && !highlighted;
          const symbolKey = nodeSymbolMap[node.id];
          const renderSymbol = symbolKey ? symbols[symbolKey] : null;
          const anim = symbolKey ? iconAnimations[symbolKey] : {};
          const trans = symbolKey ? iconTransitions[symbolKey] : {};

          return (
            <motion.div
              key={node.id}
              className="absolute cursor-pointer flex flex-col items-center"
              style={{
                left: CX + node.x,
                top: CY + node.y,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              initial={{ opacity: 1 }}
              animate={{
                opacity: dimmed ? 0.12 : autoPulse && !node.isCenter ? 1 : node.isCenter ? 1 : 0.6,
                scale: highlighted ? 1.12 : autoPulse && !node.isCenter ? 1.08 : 1,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {node.isCenter ? (
                <div className="flex flex-col items-center" style={{ marginTop: 28 }}>
                  <span className="text-base font-bold text-foreground whitespace-nowrap font-serif">
                    {node.label}
                  </span>
                </div>
              ) : (
                <>
                  <motion.div
                    animate={anim}
                    transition={trans}
                    style={{ filter: "drop-shadow(1px 1px 1px hsl(30 15% 12% / 0.5))" }}
                  >
                    {renderSymbol ? renderSymbol(24, false) : null}
                  </motion.div>
                  <span className="mt-1.5 text-xs font-bold text-foreground/80 text-center whitespace-pre-line leading-tight max-w-[100px] font-serif">
                    {node.label}
                  </span>
                </>
              )}
            </motion.div>
          );
        })}

        {/* Scattered decorative stars */}
        {[
          { x: 40, y: 60 },
          { x: 620, y: 50 },
          { x: 25, y: 420 },
          { x: 660, y: 480 },
          { x: 580, y: 130 },
          { x: 80, y: 520 },
          { x: 350, y: 30 },
          { x: 650, y: 300 },
        ].map((pos, i) => (
          <motion.div
            key={`deco-${i}`}
            className="absolute pointer-events-none"
            style={{ left: pos.x, top: pos.y }}
            animate={{ opacity: [0.08, 0.3, 0.08] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          >
            <svg width="6" height="6" viewBox="0 0 12 12">
              <path
                d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5L6 0Z"
                fill="hsl(30 15% 20%)"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConstellationDiagram;
