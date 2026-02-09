import SectionHeader from "../SectionHeader";

const ReflectionSection2 = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Reflection" />

        {/* Intro */}
        <p className="cs-body mb-6">
          This methodology is intentionally concise, prioritizing sustainable repeatability and 
          diagnostic testing. Several design choices were made to serve this goal.
        </p>

        {/* Reflection items */}
        <div className="space-y-6">
          <div>
            <p className="cs-subheading-l2 mb-3">Small sample size</p>
            <p className="cs-body">
              This methodology prioritized speed and repeatability, allowing for targeted, 
              component-level evaluations as needed.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">Task set as a proxy for the core experience</p>
            <p className="cs-body">
              We needed a fixed set of representative flows to make longitudinal comparisons meaningful, 
              which are supplemented with ad-hoc spot checks quarterly as needed.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">Platform coverage can be incomplete at any given time</p>
            <p className="cs-body">
              Full cross-platform coverage every cycle is expensive and slows the cadence.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">SUS/AUS are high-level indicators</p>
            <p className="cs-body">
              The goal is a consistent diagnostic test that is intended to be supplemented with 
              targeted, component-level evaluations.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">AT protocol simplifies a complex space</p>
            <p className="cs-body">
              AT studies have higher interaction overhead and higher fatigue risk, so scope has to 
              be tighter to stay respectful and methodologically feasible.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">DVF triage is directional and can be subjective</p>
            <p className="cs-body">
              It provides fast way to translate research signals into "what should we look at next," 
              and can be enhanced with a more robust scoring rubric as well as input from cross-functional teams.
            </p>
          </div>

          <div>
            <p className="cs-subheading-l2 mb-3">Quarterly cadence can miss regressions between checkpoints</p>
            <p className="cs-body">
              This cadence is designed to be sustainable, and should be supported by guardrails 
              between quarters (i.e. smoke tests on top 2–3 tasks after major releases, support-ticket 
              tagging, and analytics alerts).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection2;
