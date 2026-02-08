"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Node {
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

const ConstellationDiagram = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: Node[] = [
    { id: "center", label: "Anoushka Lad", x: 0, y: 0, isCenter: true },
    { id: "hai", label: "Human-AI\nInteraction Research", x: -80, y: -140 },
    { id: "qual", label: "Qualitative\nMethods", x: 120, y: -110 },
    { id: "inclusive", label: "Inclusive Design\nResearch", x: -200, y: -50 },
    { id: "ux", label: "User Experience\nResearch", x: 50, y: -50 },
    { id: "quant", label: "Quantitative\nMethods", x: 180, y: 10 },
    { id: "research-ops", label: "Research\nOperations", x: -120, y: 50 },
    { id: "digital", label: "Digital Product\nStrategy", x: 100, y: 100 },
    { id: "ethics", label: "Ethics", x: -50, y: 130 },
    { id: "ia", label: "Information\nArchitecture", x: 50, y: 170 },
    { id: "governance", label: "Governance", x: -180, y: 180 },
    { id: "design-systems", label: "Design Systems Thinking", x: 120, y: 200 },
    { id: "knowledge", label: "Knowledge\nTranslation", x: -280, y: 30 },
  ];

  const connections: Connection[] = [
    { from: "center", to: "hai", dashed: true },
    { from: "center", to: "qual", dashed: false },
    { from: "center", to: "inclusive", dashed: true },
    { from: "center", to: "ux", dashed: false },
    { from: "center", to: "quant", dashed: true },
    { from: "center", to: "research-ops", dashed: false },
    { from: "center", to: "digital", dashed: false },
    { from: "center", to: "ethics", dashed: false },
    { from: "center", to: "ia", dashed: false },
    { from: "center", to: "governance", dashed: false },
    { from: "center", to: "design-systems", dashed: true },
    { from: "center", to: "knowledge", dashed: true },
    { from: "hai", to: "ux", dashed: true },
    { from: "ux", to: "qual", dashed: true },
    { from: "ux", to: "quant", dashed: true },
    { from: "research-ops", to: "digital", dashed: true },
    { from: "digital", to: "ia", dashed: true },
    { from: "ethics", to: "ia", dashed: true },
    { from: "governance", to: "ethics", dashed: true },
    { from: "inclusive", to: "knowledge", dashed: true },
    { from: "inclusive", to: "research-ops", dashed: true },
  ];

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  const isConnectionHighlighted = (conn: Connection) => {
    if (!hoveredNode) return false;
    return conn.from === hoveredNode || conn.to === hoveredNode;
  };

  const isNodeHighlighted = (nodeId: string) => {
    if (!hoveredNode) return false;
    if (nodeId === hoveredNode) return true;
    return connections.some(
      (c) =>
        (c.from === hoveredNode && c.to === nodeId) ||
        (c.to === hoveredNode && c.from === nodeId)
    );
  };

  const centerX = 320;
  const centerY = 240;

  return (
    <div className="relative w-[640px] h-[480px]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Elegant orbital circles */}
        <circle
          cx={centerX}
          cy={centerY}
          r="80"
          fill="none"
          stroke="hsl(var(--foreground) / 0.08)"
          strokeWidth="0.5"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r="160"
          fill="none"
          stroke="hsl(var(--foreground) / 0.05)"
          strokeWidth="0.5"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r="240"
          fill="none"
          stroke="hsl(var(--foreground) / 0.03)"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />

        {/* Draw connections with elegant styling */}
        {connections.map((conn, i) => {
          const from = getNodeById(conn.from);
          const to = getNodeById(conn.to);
          if (!from || !to) return null;

          const highlighted = isConnectionHighlighted(conn);

          return (
            <motion.line
              key={i}
              x1={centerX + from.x}
              y1={centerY + from.y}
              x2={centerX + to.x}
              y2={centerY + to.y}
              stroke="hsl(var(--foreground))"
              initial={{ strokeWidth: 0.5, opacity: 0.25 }}
              animate={{
                strokeWidth: highlighted ? 1 : 0.5,
                opacity: hoveredNode ? (highlighted ? 0.8 : 0.1) : 0.25,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              strokeDasharray={conn.dashed ? "3 6" : undefined}
            />
          );
        })}
      </svg>

      {/* Draw nodes as HTML for better text rendering */}
      {nodes.map((node) => {
        const highlighted = isNodeHighlighted(node.id);
        const dimmed = hoveredNode && !highlighted;

        return (
          <motion.div
            key={node.id}
            className={`absolute cursor-pointer ${
              node.isCenter ? "" : "flex flex-col items-center"
            }`}
            style={{
              left: centerX + node.x,
              top: centerY + node.y,
              transform: node.isCenter ? "translate(0, 0)" : "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            initial={{ opacity: 1 }}
            animate={{
              opacity: dimmed ? 0.25 : 1,
              scale: highlighted ? 1.05 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {node.isCenter ? (
              <>
                {/* Glowing diamond shape */}
                <motion.div
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    boxShadow: highlighted
                      ? "0 0 30px 8px hsl(var(--accent) / 0.4)"
                      : "0 0 15px 4px hsl(var(--accent) / 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 20,
                    height: 20,
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    background: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(30 80% 45%) 100%)",
                    boxShadow: "0 0 15px 4px hsl(var(--accent) / 0.2)",
                  }}
                />
                <span className="absolute left-0 top-7 -translate-x-1/2 text-sm font-medium text-foreground whitespace-nowrap font-serif">
                  {node.label}
                </span>
              </>
            ) : (
              <>
                <motion.div
                  animate={{
                    scale: highlighted ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ElegantStarIcon highlighted={highlighted} />
                </motion.div>
                <span className="mt-1.5 text-xs text-muted-foreground text-center whitespace-pre-line leading-tight max-w-[100px] font-serif">
                  {node.label}
                </span>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

const ElegantStarIcon = ({ highlighted }: { highlighted: boolean }) => (
  <motion.svg
    className="w-2.5 h-2.5"
    viewBox="0 0 12 12"
    animate={{
      color: highlighted ? "hsl(var(--accent))" : "hsl(var(--foreground) / 0.5)",
    }}
    transition={{ duration: 0.2 }}
  >
    {/* Diamond shape for elegance */}
    <path
      d="M6 1L11 6L6 11L1 6Z"
      stroke="currentColor"
      strokeWidth="1"
      fill={highlighted ? "currentColor" : "none"}
      opacity={highlighted ? 0.3 : 1}
    />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
  </motion.svg>
);

export default ConstellationDiagram;
