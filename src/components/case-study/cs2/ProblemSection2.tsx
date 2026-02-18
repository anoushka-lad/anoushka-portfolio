import FigureWrapper from "../FigureWrapper";
import Figure1b from "../figures/Figure1b";
import SectionHeader from "../SectionHeader";

const ProblemSection2 = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Problem" />

        {/* Intro paragraph */}
        <p className="cs-body mb-5">
          Bell Media owns 183 multilingual (English and French) brands, including 8 primary brands. 
          However, our design and implementation teams are relatively small.
        </p>

        {/* Figure 1a - Streaming brands (reusing Figure1b component) */}
        <FigureWrapper
          figureNumber="Figure 1a"
          caption="Bell Media's 8 primary streaming brands across entertainment, news and sports"
        >
          <Figure1b />
        </FigureWrapper>

        {/* Roadmap paragraph */}
        <p className="cs-body mb-5">
          Though we have an annual roadmap, priorities shift as work is delivered and new asks emerge.
        </p>

        {/* Primary Challenges */}
        <h3 className="cs-subheading-l1 mb-3">Primary Challenges</h3>

        <p className="cs-body mb-1.5">
          <em className="font-body">Prioritization</em>
        </p>
        <p className="cs-body mb-5">
          We don't have a consistent way to identify the biggest pain points. That means we can't 
          confidently decide what to tackle first across the year as competing priorities arise.
        </p>

        <p className="cs-body mb-1.5">
          <em className="font-body">Unclear impact</em>
        </p>
        <p className="cs-body mb-5">
          Even when we make changes, we don't have a reliable way to track whether the experience
          has actually been improved.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection2;
