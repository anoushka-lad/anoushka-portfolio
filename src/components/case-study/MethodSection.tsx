import { r } from "@/lib/utils";
import FigureWrapper from "./FigureWrapper";
import Figure2a from "./figures/Figure2a";
import Figure2b from "./figures/Figure2b";
import Figure2c from "./figures/Figure2c";
import Figure2d from "./figures/Figure2d";
import Figure2e from "./figures/Figure2e";
import Figure2f from "./figures/Figure2f";

const MethodSection = () => {
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
          <h2 className="cs-section-heading">
            The Method
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px cs-divider mb-8" />

        {/* Phase 1 */}
        <div className="mb-12">
          <h3 className="cs-subheading-l1 mb-4">Phase 1: Interview Protocol</h3>
          <p className="cs-body mb-6">
            We decided that moderated interviews were the best fit because they would give us rich, in-context stories and the ability to ask follow-up questions so we could understand the "why" behind feature expectations.
          </p>
        </div>

        {/* Phase 2 */}
        <div className="mb-12">
          <h3 className="cs-subheading-l1 mb-4">Phase 2: Interviews</h3>
          <p className="cs-body mb-6">
            We ran moderated (n = 15) and unmoderated (n = 10) bilingual interviews, across our 3 primary entertainment brands focusing on three key areas of interest (Figure 2a).
          </p>
          
          <FigureWrapper figureNumber="Figure 2a" caption="Areas of inquiry for moderated interviews">
            <Figure2a />
          </FigureWrapper>
        </div>

        {/* Phase 3 */}
        <div className="mb-12">
          <h3 className="cs-subheading-l1 mb-4">Phase 3: Persona Development Workshop</h3>
          <p className="cs-body mb-4">
            With my co-researcher, we ran a persona creation workshop. We adapted the the atomic design framework (Figure 2b) to structure the session.
          </p>
          
          <FigureWrapper figureNumber="Figure 2b" caption="Adapted atomic design framework">
            <Figure2b />
          </FigureWrapper>
          
          <p className="cs-body mb-4">
            First, we presented our key takeaways from each interview to ensure we were aligned and working from the same understanding of our users.
          </p>
          <p className="cs-body mb-4">
            Then, we identified and debated recurring patterns to pull related trends into clear themes that showed up across participants.
          </p>
          <p className="cs-body mb-6">
            After that, we defined six provisional personas (Diagram 2c) based on a set of standardised attributes to have a shared lens for interpreting interviews without fixing assumptions too early.
          </p>
          
          <FigureWrapper figureNumber="Figure 2c" caption="Standardized attributes for personas">
            <Figure2c />
          </FigureWrapper>
        </div>

        {/* Phase 4 */}
        <div className="mb-12">
          <p className="cs-body mb-4">
            Lastly, we developed a simple analysis framework (Diagram 2d) to pull evidence from interviews to identify differences that emerge through patterns.
          </p>
          
          <FigureWrapper figureNumber="Figure 2d" caption="Analysis framework">
            <Figure2d />
          </FigureWrapper>

          <h3 className="cs-subheading-l1 mb-4">Phase 4: Persona Outline</h3>
          <p className="cs-body mb-6">
            We translated interview insights into structured persona summaries (Figure 2e) based on the analysis framework to expand on and validate our emerging 6 personas.
          </p>
          
          <FigureWrapper figureNumber="Figure 2e" caption="Example of completed analysis using framework from Figure 2d for Avid Viewer Persona">
            <Figure2e />
          </FigureWrapper>
        </div>

        {/* Phase 5 */}
        <div className="mb-8">
          <h3 className="cs-subheading-l1 mb-4">Phase 5: User Journeys</h3>
          <p className="cs-body mb-6">
            We modeled each persona as a lifecycle grid, with stages across the top and layers for thinking, doing, feeling, pain points, and opportunities (Figure 2f). This helped us link interview insights to specific moments and identify where design changes would have the most impact.
          </p>
          
          <FigureWrapper figureNumber="Figure 2f" caption="Example of first iteration of user journey developed from the persona outline for Platform Surfer persona">
            <Figure2f />
          </FigureWrapper>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;