import FigureWrapper from "./FigureWrapper";
import Figure1b from "./figures/Figure1b";
import { r } from "@/lib/trig";

const figure1a = "/images/figure-1a.png";

const ProblemSection = () => {
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
          More than 50% of North American households pay for at least 4 streaming services. 
          Users were feeling streaming service over-saturation so platforms like Disney and 
          PrimeVideo started pulling multiple brands under a single roof (Figure 1a).
        </p>

        {/* Figure 1a - Streaming bundles */}
        <div className="mb-12">
          <FigureWrapper
            figureNumber="Figure 1a"
            caption="Examples of aggregated watch experiences on PrimeVideo and Disney+"
          >
            <img
              src={figure1a}
              alt="Examples of aggregated watch experiences on PrimeVideo and Disney+"
              className="w-full h-auto rounded-lg"
            />
          </FigureWrapper>
        </div>

        {/* Bell Media paragraph */}
        <p className="font-sans text-base leading-relaxed text-foreground mb-6">
          Bell Media (Figure 1b) owns 183 multilingual (English and French) brands, including 
          8 primary streaming brands with their own apps, identities, and loyal audiences. 
          Aligned with market trends, we wanted to bring them into a single home to cross-promote 
          and grow engagement, while staying true to each brand and designing a cohesive, 
          user-first experience.
        </p>

        {/* But this is complicated */}
        <p className="font-sans text-base leading-relaxed text-foreground mb-4">
          But this is complicated because we didn't understand:
        </p>

        {/* Bullet list */}
        <ul className="list-disc list-outside ml-6 space-y-2 font-sans text-base leading-relaxed text-foreground mb-12">
          <li>
            Different kinds of viewers across brands, so any "one home" risks a generic 
            experience that fits no one
          </li>
          <li>
            Which journeys and features mattered most to which users, making it hard to 
            prioritise design decisions
          </li>
          <li>
            How language and viewing habits changed user expectations so the same flow 
            could feel vastly different for different users
          </li>
        </ul>

        {/* Figure 1b - Brand diagram */}
        <FigureWrapper
          figureNumber="Figure 1b"
          caption="Bell Media's 8 primary streaming brands across entertainment, news and sports"
        >
          <Figure1b />
        </FigureWrapper>
      </div>
    </section>
  );
};

export default ProblemSection;
