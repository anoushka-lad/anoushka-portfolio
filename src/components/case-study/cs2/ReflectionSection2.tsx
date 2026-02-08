import { r } from "@/lib/utils";

const ReflectionSection2 = () => {
  return (
    <section className="section-padding pt-8 pb-8 md:pt-10 md:pb-10">
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
            The Reflection
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-foreground/30 mb-8" />

        {/* Intro */}
        <p className="text-base leading-relaxed text-foreground mb-8">
          This methodology is intentionally concise, prioritizing sustainable repeatability and 
          diagnostic testing. Several design choices were made to serve this goal.
        </p>

        {/* Reflection items */}
        <div className="space-y-6">
          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Small sample size</p>
            <p className="text-base leading-relaxed text-foreground">
              This methodology prioritized speed and repeatability, allowing for targeted, 
              component-level evaluations as needed.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Task set as a proxy for the core experience</p>
            <p className="text-base leading-relaxed text-foreground">
              We needed a fixed set of representative flows to make longitudinal comparisons meaningful, 
              which are supplemented with ad-hoc spot checks quarterly as needed.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Platform coverage can be incomplete at any given time</p>
            <p className="text-base leading-relaxed text-foreground">
              Full cross-platform coverage every cycle is expensive and slows the cadence.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">SUS/AUS are high-level indicators</p>
            <p className="text-base leading-relaxed text-foreground">
              The goal is a consistent diagnostic test that is intended to be supplemented with 
              targeted, component-level evaluations.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">AT protocol simplifies a complex space</p>
            <p className="text-base leading-relaxed text-foreground">
              AT studies have higher interaction overhead and higher fatigue risk, so scope has to 
              be tighter to stay respectful and methodologically feasible.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">DVF triage is directional and can be subjective</p>
            <p className="text-base leading-relaxed text-foreground">
              It provides fast way to translate research signals into "what should we look at next," 
              and can be enhanced with a more robust scoring rubric as well as input from cross-functional teams.
            </p>
          </div>

          <div>
            <p className="font-serif italic text-base text-foreground mb-1">Quarterly cadence can miss regressions between checkpoints</p>
            <p className="text-base leading-relaxed text-foreground">
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
