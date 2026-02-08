import { r } from "@/lib/utils";

interface GoalSection2Props {
  goal: string;
}

const GoalSection2 = ({ goal }: GoalSection2Props) => {
  return (
    <section className="section-padding pt-4 pb-4 md:pt-6 md:pb-6">
      <div className="case-column">
        {/* Section Title with sunburst icon */}
        <div className="flex items-center gap-4 mb-6">
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * Math.PI / 180;
              const x1 = r(20 + Math.cos(angle) * 8);
              const y1 = r(20 + Math.sin(angle) * 8);
              const x2 = r(20 + Math.cos(angle) * 16);
              const y2 = r(20 + Math.sin(angle) * 16);
              return (
                <line 
                  key={i} 
                  x1={x1} y1={y1} x2={x2} y2={y2} 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  className="text-foreground" 
                />
              );
            })}
            <circle cx="20" cy="20" r="6" fill="currentColor" className="text-foreground" />
          </svg>
          <h2 className="cs-section-heading">
            The Goal
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px cs-divider mb-8" />

        {/* Dark quote box */}
        <div className="p-8 md:p-12" style={{ backgroundColor: '#343434' }}>
          <p className="cs-callout italic text-center">
            {goal}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalSection2;
