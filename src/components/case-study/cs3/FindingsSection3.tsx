import FigureWrapper from "../FigureWrapper";
import Figure2aCS3 from "./figures/Figure2aCS3";
import SectionHeader from "../SectionHeader";

const FindingsSection3 = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Findings" />

        {/* Key Takeaways */}
        <div className="cs-content-block">
          <p className="cs-subheading-l1 mb-4">Key Takeaways</p>
          <p className="cs-body">
            Our data shows that intrusiveness heavily compounds negative
            perception around ads (Figure 2a).
          </p>
        </div>

        {/* Sub-findings */}
        <div className="space-y-6 mb-6">
          <div>
            <p className="cs-subheading-l2 mb-3">Number and Frequency</p>
            <p className="cs-body">
              Fewer ads feel lighter, but repetition amplifies the &ldquo;too many&rdquo; feeling
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">Placement and Organisation</p>
            <p className="cs-body">
              Top-heavy full-screens knock readers out of the flow too quickly
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">Load Time and Interaction</p>
            <p className="cs-body">
              Preloaded spaces and &ldquo;advertisment&rdquo; labels increase clarity and page
              interactions
            </p>
          </div>
        </div>

        {/* Figure 2a - Bar chart */}
        <FigureWrapper
          figureNumber="Figure 2a"
          caption="Relative impact of ad factors by outlet"
        >
          <Figure2aCS3 />
        </FigureWrapper>

        {/* Per-outlet breakdowns */}
        <div className="space-y-6">
          <div>
            <p className="cs-subheading-l2 mb-3">BNN Bloomberg</p>
            <p className="cs-body">
              Scored low when ads loaded without reserved space, causing noticeable
              shift.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">CBC News</p>
            <p className="cs-body">
              Consistently nominated best for balanced frequency and low shift.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">The Globe and Mail</p>
            <p className="cs-body">
              Mixed reactions on repetition and sizing but benefited from preloaded
              spaces.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">CNBC</p>
            <p className="cs-body">
              High scores were a overstated because ads often didn&apos;t load.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindingsSection3;
