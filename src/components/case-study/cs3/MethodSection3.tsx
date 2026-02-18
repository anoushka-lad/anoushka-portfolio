import FigureWrapper from "../FigureWrapper";
import Figure1aCS3 from "./figures/Figure1aCS3";
import Figure1bCS3 from "./figures/Figure1bCS3";
import SectionHeader from "../SectionHeader";

const MethodSection3 = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Method" />

        <p className="cs-body mb-5">
          We selected 3 peers based on overlapping readership and a strong
          business-news focus (Figure 1a).
        </p>

        <FigureWrapper
          figureNumber="Figure 1a"
          caption="Competitors chosen for comparative analysis"
        >
          <Figure1aCS3 />
        </FigureWrapper>

        <p className="cs-body mb-5">
          Then we ran task-based, unmoderated interviews (n = 15) across our
          home brand and competitors using a standardized evaluation criteria
          (Figure 1b).
        </p>
      </div>

      {/* Figure 1b — full width */}
      <div className="max-w-5xl mx-auto">
        <FigureWrapper
          figureNumber="Figure 1b"
          caption="Process diagram showing tasks and evaluation criteria"
        >
          <Figure1bCS3 />
        </FigureWrapper>
      </div>

      <div className="case-column">
        {/* Why questions */}
        <div className="space-y-5">
          <div>
            <p className="cs-subheading-l2 mb-2">Why unmoderated interviews?</p>
            <p className="cs-body">
              It more closely mimics how people actually scroll (that is, skimmable
              and attention fragile), while also being more cost efficient.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-2">Why these tasks?</p>
            <p className="cs-body">
              Home, article, and stock pages represent the main entry points for
              business-news readers
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-2">Why these metrics?</p>
            <p className="cs-body">
              Quantitative data shows where pain points occurred, while qual data
              reveals why.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection3;
