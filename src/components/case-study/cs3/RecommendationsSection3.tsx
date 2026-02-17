import SectionHeader from "../SectionHeader";

const fig3a = "/images/cs3-fig-3a.png";
const fig3b = "/images/cs3-fig-3b.png";
const fig3c = "/images/cs3-fig-3c.png";
const fig3d = "/images/cs3-fig-3d.png";

const RecommendationsSection3 = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Recommendations" />

        {/* Recommendation 1: Start ads later */}
        <div className="cs-content-block">
          <p className="cs-subheading-l2 mb-3">
            Start ads later (Figure 3a)
          </p>
          <p className="cs-body mb-6">
            Early ads break focus. Keep the first paragraph visible to respect the
            story.
          </p>

          {/* Figure 3a */}
          <div className="my-8">
            <div className="flex justify-center">
              <img
                src={fig3a}
                alt="CNBC only surfaces ads after several scrolls"
                className="max-w-xs w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <p className="cs-caption text-center mt-4">
              <strong>Figure 3a:</strong> CNBC only surfaces ads after several scrolls
            </p>
          </div>
        </div>

        {/* Recommendation 2: Preload boxes */}
        <div className="cs-content-block">
          <p className="cs-subheading-l2 mb-3">
            Preload boxes (Figure 3b)
          </p>
          <p className="cs-body mb-6">
            Fixed-height containers prevents pages from jumping when ads load.
          </p>

          {/* Figure 3b */}
          <div className="my-8">
            <div className="flex justify-center">
              <img
                src={fig3b}
                alt="CBC News preloaded grey boxes so that content does not shift on delayed loads"
                className="max-w-xs w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <p className="cs-caption text-center mt-4">
              <strong>Figure 3b:</strong> CBC News news preloaded grey boxes so that content does not shift on delayed loads
            </p>
          </div>
        </div>

        {/* Recommendation 3: Label ads */}
        <div className="cs-content-block">
          <p className="cs-subheading-l2 mb-3">
            Label ads (Figure 3c)
          </p>
          <p className="cs-body mb-6">
            Accessibility and clarity, to easily identify sponsored content.
          </p>

          {/* Figure 3c */}
          <div className="my-8">
            <div className="flex justify-center">
              <img
                src={fig3c}
                alt="CBC News labels advertisements"
                className="max-w-xs w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <p className="cs-caption text-center mt-4">
              <strong>Figure 3c:</strong> CBC News labels advertisements
            </p>
          </div>
        </div>

        {/* Recommendation 4: Limit repeats */}
        <div className="cs-content-block">
          <p className="cs-subheading-l2 mb-3">
            Limit repeats (Figure 3d)
          </p>
          <p className="cs-body mb-6">
            Frequent or identical ads make page feel more cluttered than it is.
          </p>

          {/* Figure 3d */}
          <div className="my-8">
            <div className="flex justify-center">
              <img
                src={fig3d}
                alt="BNN Bloomberg only populates a single, full-page advertisement"
                className="max-w-xs w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <p className="cs-caption text-center mt-4">
              <strong>Figure 3d:</strong> BNN Bloomberg only populates a single, full-page advertisement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection3;
