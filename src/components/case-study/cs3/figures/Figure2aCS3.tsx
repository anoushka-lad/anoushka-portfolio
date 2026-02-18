"use client";

import { motion } from "framer-motion";

const data = [
  {
    category: "Number & frequency",
    bars: [
      { label: "BNN Bloomberg", value: 4.1, color: "hsl(35 10% 25%)" },
      { label: "CBC News", value: 4.4, color: "hsl(35 15% 40%)" },
      { label: "The Globe & Mail", value: 3.7, color: "hsl(35 25% 60%)" },
      { label: "CNBC", value: 3.5, color: "hsl(35 20% 75%)" },
    ],
  },
  {
    category: "Placement & organisation",
    bars: [
      { label: "BNN Bloomberg", value: 2.7, color: "hsl(35 10% 25%)" },
      { label: "CBC News", value: 4.3, color: "hsl(35 15% 40%)" },
      { label: "The Globe & Mail", value: 3.6, color: "hsl(35 25% 60%)" },
      { label: "CNBC", value: 4.6, color: "hsl(35 20% 75%)" },
    ],
  },
  {
    category: "Load time & interaction",
    bars: [
      { label: "BNN Bloomberg", value: 4.1, color: "hsl(35 10% 25%)" },
      { label: "CBC News", value: 3.9, color: "hsl(35 15% 40%)" },
      { label: "The Globe & Mail", value: 4.0, color: "hsl(35 25% 60%)" },
      { label: "CNBC", value: 3.1, color: "hsl(35 20% 75%)" },
    ],
  },
];

const legendItems = [
  { label: "BNN Bloomberg", color: "hsl(35 10% 25%)", symbol: "\u2726" },
  { label: "CBC News", color: "hsl(35 15% 40%)", symbol: "\u2736" },
  { label: "The Globe & Mail", color: "hsl(35 25% 60%)", symbol: "\u2733" },
  { label: "CNBC", color: "hsl(35 20% 75%)", symbol: "\u2726" },
];

const yTicks = [2, 3, 4];
const minVal = 1.5;
const maxVal = 5;
const chartHeight = 260;
const barWidth = 36;
const barGap = 6;
const groupGap = 50;

const Figure2aCS3 = () => {
  const groupWidth = 4 * (barWidth + barGap) - barGap;
  const totalWidth = 3 * groupWidth + 2 * groupGap;
  const leftPad = 40;
  const rightPad = 20;
  const topPad = 10;
  const bottomPad = 40;
  const svgWidth = leftPad + totalWidth + rightPad;
  const baseline = topPad + chartHeight;
  const svgHeight = baseline + bottomPad;

  const yPos = (val: number) => baseline - ((val - minVal) / (maxVal - minVal)) * chartHeight;

  return (
    <div className="w-full">
      {/* Legend */}
      <motion.div
        className="flex items-center justify-center gap-6 md:gap-8 mb-4 flex-wrap"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {legendItems.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <span style={{ color: item.color }} className="text-sm">{item.symbol}</span>
            <span className="font-serif text-xs md:text-sm text-foreground">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto mx-auto">
        {/* Y-axis grid lines and labels */}
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={leftPad}
              y1={yPos(tick)}
              x2={leftPad + totalWidth}
              y2={yPos(tick)}
              stroke="hsl(35 18% 30%)"
              strokeWidth="0.5"
              opacity={0.4}
            />
            <text
              x={leftPad - 10}
              y={yPos(tick) + 5}
              textAnchor="end"
              className="font-serif text-[13px]"
              fill="hsl(35 18% 30%)"
            >
              {tick}
            </text>
          </g>
        ))}

        {/* X-axis baseline */}
        <line
          x1={leftPad}
          y1={baseline}
          x2={leftPad + totalWidth}
          y2={baseline}
          stroke="hsl(35 18% 30%)"
          strokeWidth="1.5"
        />

        {/* Bar groups */}
        {data.map((group, gi) => {
          const groupX = leftPad + gi * (groupWidth + groupGap);

          return (
            <g key={group.category}>
              {/* Category label */}
              <text
                x={groupX + groupWidth / 2}
                y={baseline + 20}
                textAnchor="middle"
                className="font-serif text-[12px]"
                fill="hsl(35 18% 30%)"
              >
                {group.category}
              </text>

              {/* Bars */}
              {group.bars.map((bar, bi) => {
                const barX = groupX + bi * (barWidth + barGap);
                const barH = ((bar.value - minVal) / (maxVal - minVal)) * chartHeight;
                const barY = baseline - barH;
                const delay = gi * 0.2 + bi * 0.1;

                return (
                  <motion.g
                    key={bi}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay, duration: 0.1 }}
                  >
                    {/* Bar - use scaleY from bottom */}
                    <motion.rect
                      x={barX}
                      y={barY}
                      width={barWidth}
                      height={barH}
                      fill={bar.color}
                      rx={1}
                      style={{ transformOrigin: `${barX + barWidth / 2}px ${baseline}px` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="cursor-pointer"
                    />

                    {/* Value label inside bar */}
                    <motion.text
                      x={barX + barWidth / 2}
                      y={barY + 18}
                      textAnchor="middle"
                      className="font-serif text-[11px] pointer-events-none"
                      fill="hsl(35 30% 92%)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: delay + 0.6, duration: 0.3 }}
                    >
                      {bar.value}
                    </motion.text>
                  </motion.g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Figure2aCS3;
