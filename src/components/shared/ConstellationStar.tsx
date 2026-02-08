import { r } from "@/lib/trig";

const ConstellationStar = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4">
    <circle cx="8" cy="8" r="2" fill="hsl(35 18% 35%)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={angle}
          x1={r(8 + Math.cos(rad) * 2.5)}
          y1={r(8 + Math.sin(rad) * 2.5)}
          x2={r(8 + Math.cos(rad) * 5)}
          y2={r(8 + Math.sin(rad) * 5)}
          stroke="hsl(35 18% 35%)"
          strokeWidth="0.8"
        />
      );
    })}
  </svg>
);

export default ConstellationStar;
