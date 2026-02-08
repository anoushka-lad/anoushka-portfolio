"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { r } from "@/lib/trig";

const SparkleIcon = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 24 24"
    className={`w-5 h-5 ${className}`}
    animate={{ 
      scale: [1, 1.3, 1], 
      opacity: [0.6, 1, 0.6],
      rotate: [0, 15, 0, -15, 0],
    }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <path
      d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
      fill="hsl(35 25% 30%)"
    />
  </motion.svg>
);

const useCountUp = (end: number, duration: number = 1.5, delay: number = 0) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.round(start * 10) / 10);
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);
  
  return count;
};

const CircularGauge = ({
  value,
  label,
  suffix = "",
  delay = 0,
  maxValue = 100,
}: {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  maxValue?: number;
}) => {
  const size = 340;
  const center = size / 2;
  const radius = 140;
  const tickCount = 60;
  const strokeWidth = 4;
  
  const circumference = 2 * Math.PI * radius;
  const progressPercent = Math.min(value / maxValue, 1);
  const dashOffset = circumference * (1 - progressPercent);
  
  const displayValue = useCountUp(value, 1.5, delay + 0.3);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, type: "spring" }}
    >
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Outer rotating ring */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius + 18}
            fill="none"
            stroke="hsl(35 18% 75%)"
            strokeWidth="1"
            strokeDasharray="8 6"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          />

          {/* Background circle (faint dashed) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="hsl(35 18% 75%)"
            strokeWidth={strokeWidth}
            strokeDasharray="8 5"
          />

          {/* Progress arc (animated) */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="hsl(35 18% 30%)"
            strokeWidth={strokeWidth + 2}
            strokeDasharray={circumference}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 2, delay: delay + 0.3, ease: "easeOut" }}
            style={{ 
              transformOrigin: `${center}px ${center}px`,
              transform: "rotate(-90deg)",
            }}
          />

          {/* Tick marks with staggered animation */}
          {[...Array(tickCount)].map((_, i) => {
            const angle = (i * (360 / tickCount) - 90) * (Math.PI / 180);
            const x1 = r(center + Math.cos(angle) * (radius - 18));
            const y1 = r(center + Math.sin(angle) * (radius - 18));
            const x2 = r(center + Math.cos(angle) * (radius - 8));
            const y2 = r(center + Math.sin(angle) * (radius - 8));
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(35 18% 45%)"
                strokeWidth="1.5"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 0.3, delay: delay + i * 0.012 }}
              />
            );
          })}

          {/* Inner dashed circle - counter rotating */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius - 25}
            fill="none"
            stroke="hsl(35 18% 55%)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          />
          
          {/* Innermost decorative ring */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius - 35}
            fill="none"
            stroke="hsl(35 18% 65%)"
            strokeWidth="1"
            strokeDasharray="3 3"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          />
        </svg>

        {/* Sparkle decorations - multiple with different animations */}
        <SparkleIcon className="absolute -top-2 left-1/2 -translate-x-1/2" delay={0} />
        <SparkleIcon className="absolute top-4 left-10" delay={0.3} />
        <SparkleIcon className="absolute top-4 right-10" delay={0.6} />
        <SparkleIcon className="absolute top-12 left-4" delay={0.9} />
        <SparkleIcon className="absolute top-12 right-4" delay={1.2} />

        {/* Center value with pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: delay + 0.3, type: "spring", stiffness: 100 }}
        >
          <motion.span 
            className="font-serif text-7xl font-bold text-foreground"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {suffix ? displayValue.toFixed(0) : displayValue.toFixed(1)}
            {suffix}
          </motion.span>
        </motion.div>
      </div>

      {/* Label with fade in */}
      <motion.p
        className="font-serif text-lg font-bold text-foreground mt-8 text-center max-w-[280px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.8 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

const Figure3bCS2 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <div className="flex justify-center gap-20 flex-wrap">
        <CircularGauge
          value={86.6}
          label="Average Accessibility Usability Score"
          delay={0}
        />
        <CircularGauge
          value={91}
          suffix="%"
          label="Average Task Completion Rate"
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default Figure3bCS2;
