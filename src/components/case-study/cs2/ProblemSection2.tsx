import FigureWrapper from "../FigureWrapper";
import Figure1b from "../figures/Figure1b";
import { r } from "@/lib/utils";

const ProblemSection2 = () => {
  return (
    <section className="section-padding pt-8 pb-8 md:pt-12 md:pb-12">
      <div className="max-w-3xl mx-auto">
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
            The Problem
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-foreground/30 mb-8" />

        {/* Intro paragraph */}
        <p className="font-sans text-base leading-relaxed text-foreground mb-8">
          Bell Media owns 183 multilingual (English and French) brands, including 8 primary brands. 
          However, our design and implementation teams are relatively small.
        </p>

        {/* Figure 1a - Streaming brands (reusing Figure1b component) */}
        <div className="mb-12">
          <FigureWrapper
            figureNumber="Figure 1a"
            caption="Bell Media's 8 primary streaming brands across entertainment, news and sports"
          >
            <Figure1b />
          </FigureWrapper>
        </div>

        {/* Roadmap paragraph */}
        <p className="font-sans text-base leading-relaxed text-foreground mb-6">
          Though we have an annual roadmap, priorities shift as work is delivered and new asks emerge.
        </p>

        {/* Primary Challenges */}
        <h3 className="font-serif font-bold text-base mb-4">Primary Challenges</h3>

        <p className="font-sans text-base leading-relaxed text-foreground mb-2">
          <em className="font-serif">Prioritization</em>
        </p>
        <p className="font-sans text-base leading-relaxed text-foreground mb-6">
          We don't have a consistent way to identify the biggest pain points. That means we can't 
          confidently decide what to tackle first across the year as competing priorities arise.
        </p>

        <p className="font-sans text-base leading-relaxed text-foreground mb-2">
          <em className="font-serif">Unclear impact</em>
        </p>
        <p className="font-sans text-base leading-relaxed text-foreground mb-8">
          Even when we make changes, we don't have a reliable way to track whether the experience 
          has actually been improved.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection2;
