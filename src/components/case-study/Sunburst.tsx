import { motion } from "framer-motion";

const Sunburst = () => {
  const numRays = 16;
  const rays = Array.from({ length: numRays }, (_, i) => i);

  return (
    <motion.div
      className="cursor-pointer"
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 120 120"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-accent"
        style={{ filter: "drop-shadow(0 0 0px hsl(var(--accent)))" }}
        variants={{
          initial: { filter: "drop-shadow(0 0 0px hsl(var(--accent)))" },
          animate: { filter: "drop-shadow(0 0 0px hsl(var(--accent)))" },
          hover: { 
            filter: "drop-shadow(0 0 12px hsl(var(--accent) / 0.5))",
            scale: 1.05
          }
        }}
      >
        {rays.map((i) => {
          const angle = (i * 360) / numRays;
          const isMainRay = i % 2 === 0;
          const outerRadius = isMainRay ? 55 : 42;
          const innerRadius = 12;
          
          const angleRad = (angle * Math.PI) / 180;
          const nextAngleRad = ((angle + 360 / numRays) * Math.PI) / 180;
          const midAngleRad = ((angle + 180 / numRays) * Math.PI) / 180;
          
          const x1 = 60 + innerRadius * Math.cos(angleRad);
          const y1 = 60 + innerRadius * Math.sin(angleRad);
          const x2 = 60 + outerRadius * Math.cos(midAngleRad);
          const y2 = 60 + outerRadius * Math.sin(midAngleRad);
          const x3 = 60 + innerRadius * Math.cos(nextAngleRad);
          const y3 = 60 + innerRadius * Math.sin(nextAngleRad);
          
          return (
            <motion.polygon
              key={i}
              points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
              fill="currentColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
            />
          );
        })}
        <circle cx="60" cy="60" r="10" fill="currentColor" />
      </motion.svg>
    </motion.div>
  );
};

export default Sunburst;
