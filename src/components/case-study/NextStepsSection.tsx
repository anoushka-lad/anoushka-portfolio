import { r } from "@/lib/trig";

const NextStepsSection = () => {
  return (
    <section className="section-padding pt-8 pb-8 md:pt-10 md:pb-10">
      <div className="max-w-4xl mx-auto">
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
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            The Next Steps
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-foreground/30 mb-8" />

        {/* Content */}
        <p className="font-sans text-base leading-relaxed text-foreground">
          Arguably, every recommendation is a testable hypothesis. Each one can be scoped into a small project with a clear question, a prototype to test, and measurable signals of success before investing in build.
        </p>
      </div>
    </section>
  );
};

export default NextStepsSection;
