import { r } from "@/lib/utils";

const AnalysisWheel = () => {
  const labels = [
    { text: "Key Insights", angle: -60 },
    { text: "Viewing Habits", angle: -20 },
    { text: "Goals", angle: 20 },
    { text: "Experiences", angle: 60 },
    { text: "Opportunities", angle: 100 },
    { text: "Needs", angle: 140 },
    { text: "Challenges and Pain Points", angle: 200 },
  ];

  return (
    <div className="flex justify-center py-4">
      <div className="relative w-80 h-80">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {/* Outer circle */}
          <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          
          {/* Inner dashed circle */}
          <circle cx="150" cy="150" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-foreground" />
          
          {/* Center polygon (heptagon) */}
          <polygon 
            points="150,70 195,95 210,145 190,195 150,210 110,195 90,145 105,95"
            fill="hsl(var(--muted-foreground))"
            opacity="0.6"
          />
          
          {/* Radial lines from center to edge */}
          {[0, 51, 102, 154, 205, 257, 308].map((angle, i) => {
            const rad = (angle - 90) * Math.PI / 180;
            const x2 = r(150 + Math.cos(rad) * 120);
            const y2 = r(150 + Math.sin(rad) * 120);
            return (
              <line key={i} x1="150" y1="150" x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-foreground" />
            );
          })}
          
          {/* Center point with radiating lines */}
          <circle cx="150" cy="150" r="8" fill="currentColor" className="text-foreground" />
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const x1 = r(150 + Math.cos(angle) * 10);
            const y1 = r(150 + Math.sin(angle) * 10);
            const x2 = r(150 + Math.cos(angle) * 50);
            const y2 = r(150 + Math.sin(angle) * 50);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" className="text-foreground" />;
          })}
        </svg>
        
        {/* Labels positioned around the wheel */}
        <span className="absolute top-[8%] left-[22%] font-display text-sm text-[#343434] -rotate-45">Key Insights</span>
        <span className="absolute top-[8%] right-[18%] font-display text-sm text-[#343434] rotate-45">Viewing Habits</span>
        <span className="absolute top-[35%] right-[2%] font-display text-sm text-[#343434] rotate-[70deg]">Goals</span>
        <span className="absolute bottom-[25%] right-[2%] font-display text-sm text-[#343434] rotate-[110deg]">Experiences</span>
        <span className="absolute bottom-[8%] right-[25%] font-display text-sm text-[#343434] rotate-[150deg]">Opportunities</span>
        <span className="absolute bottom-[8%] left-[32%] font-display text-sm text-[#343434] -rotate-[150deg]">Needs</span>
        <span className="absolute top-[35%] left-[-8%] font-display text-sm text-[#343434] -rotate-[70deg] w-20 text-center leading-tight">Challenges and Pain Points</span>
      </div>
    </div>
  );
};

export default AnalysisWheel;
