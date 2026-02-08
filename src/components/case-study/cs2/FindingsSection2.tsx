import FigureWrapper from "../FigureWrapper";
import Figure3aCS2 from "./figures/Figure3aCS2";
import Figure3bCS2 from "./figures/Figure3bCS2";
import Figure3cCS2 from "./figures/Figure3cCS2";
import { r } from "@/lib/trig";

const FindingsSection2 = () => {
  return (
    <section className="section-padding pt-8 pb-12 md:pt-10 md:pb-16 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          {/* Sunburst icon */}
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
            The Findings
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-foreground/30 mb-8" />

        {/* Main findings intro */}
        <p className="text-base leading-relaxed text-foreground mb-8">
          Crave's baseline benchmark shows good-but-not-great usability, meaning most core flows work 
          but there are still a few friction points that reliably slow users down (Figure 3a).
        </p>

        {/* Figure 3a - Quantitative metrics */}
        <FigureWrapper figureNumber="Figure 3a" caption="Average quantitative metrics from usability benchmarking for Crave">
          <Figure3aCS2 />
        </FigureWrapper>

        <p className="text-base leading-relaxed text-foreground mb-8 mt-8">
          Similarly, Crave's accessibility baseline benchmark shows excellent usability. Per qualitative 
          metrics, lower AUS scores were the result of technical issues or were anomalous (Figure 3b).
        </p>

        {/* Figure 3b - Accessibility metrics */}
        <FigureWrapper figureNumber="Figure 3b" caption="Average quantitative metrics from accessible usability benchmarking for Crave">
          <Figure3bCS2 />
        </FigureWrapper>

        <p className="text-base leading-relaxed text-foreground mb-4 mt-8">
          Based on the DVF Model triage, four tasks were identified as high priority (Figure 3c).
        </p>
        <p className="text-base leading-relaxed text-foreground mb-8">
          For the quarter, a focus on high-leverage navigation and findability fixes is recommended, 
          while leaving already-strong flows alone and using the next benchmark run to confirm measurable improvement.
        </p>

        {/* Figure 3c - Priority wheel */}
        <FigureWrapper figureNumber="Figure 3c" caption="4/10 identified as high priority items">
          <Figure3cCS2 />
        </FigureWrapper>

        {/* High priority items breakdown */}
        <div className="mt-8 space-y-6">
          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Find a show by a provider</p>
            <p className="text-base leading-relaxed text-foreground">
              Known-item discovery is brittle because Search does not reliably support the expected path, 
              forcing users into workaround navigation through provider hubs.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Save to favorites</p>
            <p className="text-base leading-relaxed text-foreground">
              The save-and-return workflow has unnecessary friction and interaction cost, suggesting an 
              opportunity to streamline the personal library experience.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Choose a genre</p>
            <p className="text-base leading-relaxed text-foreground">
              Filter entry points are low-findability and the flow contains redundant navigation steps, 
              indicating an information architecture and wayfinding issue worth investigating.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Filter within a section</p>
            <p className="text-base leading-relaxed text-foreground">
              Labeling and navigation taxonomy are misaligned with user mental models (e.g., "Collections" 
              vs Genres), creating avoidable discovery friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindingsSection2;
