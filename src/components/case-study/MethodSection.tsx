import FigureWrapper from "./FigureWrapper";
import SectionHeader from "./SectionHeader";
import Figure2a from "./figures/Figure2a";
import Figure2b from "./figures/Figure2b";
import Figure2c from "./figures/Figure2c";
import Figure2d from "./figures/Figure2d";
import Figure2e from "./figures/Figure2e";
import Figure2f from "./figures/Figure2f";

const MethodSection = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Method" />

        {/* Phase 1 */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 1: Interview Protocol</h3>
          <p className="cs-body mb-5">
            We decided that moderated interviews were the best fit because they would give us rich, in-context stories and the ability to ask follow-up questions so we could understand the "why" behind feature expectations.
          </p>
        </div>

        {/* Phase 2 */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 2: Interviews</h3>
          <p className="cs-body mb-5">
            We ran moderated (n = 15) and unmoderated (n = 10) bilingual interviews, across our 3 primary entertainment brands focusing on three key areas of interest (Figure 2a).
          </p>
          
          <FigureWrapper figureNumber="Figure 2a" caption="Areas of inquiry for moderated interviews">
            <Figure2a />
          </FigureWrapper>
        </div>

        {/* Phase 3 */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 3: Persona Development Workshop</h3>
          <p className="cs-body mb-3">
            With my co-researcher, we ran a persona creation workshop. We adapted the the atomic design framework (Figure 2b) to structure the session.
          </p>
          
          <FigureWrapper figureNumber="Figure 2b" caption="Adapted atomic design framework">
            <Figure2b />
          </FigureWrapper>
          
          <p className="cs-body mb-3">
            First, we presented our key takeaways from each interview to ensure we were aligned and working from the same understanding of our users.
          </p>
          <p className="cs-body mb-3">
            Then, we identified and debated recurring patterns to pull related trends into clear themes that showed up across participants.
          </p>
          <p className="cs-body mb-5">
            After that, we defined six provisional personas (Diagram 2c) based on a set of standardised attributes to have a shared lens for interpreting interviews without fixing assumptions too early.
          </p>
          
          <FigureWrapper figureNumber="Figure 2c" caption="Standardized attributes for personas">
            <Figure2c />
          </FigureWrapper>
        </div>

        {/* Phase 4 */}
        <div className="cs-content-block">
          <p className="cs-body mb-3">
            Lastly, we developed a simple analysis framework (Diagram 2d) to pull evidence from interviews to identify differences that emerge through patterns.
          </p>
          
          <FigureWrapper figureNumber="Figure 2d" caption="Analysis framework" frameClassName="py-2 md:py-4">
            <Figure2d />
          </FigureWrapper>

          <h3 className="cs-subheading-l1 mb-3">Phase 4: Persona Outline</h3>
          <p className="cs-body mb-5">
            We translated interview insights into structured persona summaries (Figure 2e) based on the analysis framework to expand on and validate our emerging 6 personas.
          </p>
          
          <FigureWrapper figureNumber="Figure 2e" caption="Example of completed analysis using framework from Figure 2d for Avid Viewer persona">
            <Figure2e />
          </FigureWrapper>
        </div>

        {/* Phase 5 */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 5: User Journeys</h3>
          <p className="cs-body mb-5">
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