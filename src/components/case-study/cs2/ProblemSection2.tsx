import FigureWrapper from "../FigureWrapper";
import Figure1b from "../figures/Figure1b";
import SectionHeader from "../SectionHeader";

const ProblemSection2 = () => {
  return (
    <section className="section-padding pt-8 pb-8 md:pt-12 md:pb-12">
      <div className="case-column">
        <SectionHeader title="The Problem" />

        {/* Intro paragraph */}
        <p className="cs-body mb-8">
          Bell Media owns 183 multilingual (English and French) brands, including 8 primary brands. 
          However, our design and implementation teams are relatively small.
        </p>

        {/* Figure 1a - Streaming brands (reusing Figure1b component) */}
        <div className="mb-12">
          <FigureWrapper
            figureNumber="Figure 1a"
            caption="Bell Media's 8 primary streaming brands across entertainment, news and sports"
          >
            <Figure1b />
          </FigureWrapper>
        </div>

        {/* Roadmap paragraph */}
        <p className="cs-body mb-6">
          Though we have an annual roadmap, priorities shift as work is delivered and new asks emerge.
        </p>

        {/* Primary Challenges */}
        <h3 className="cs-subheading-l1 mb-4">Primary Challenges</h3>

        <p className="cs-body mb-2">
          <em className="font-body">Prioritization</em>
        </p>
        <p className="cs-body mb-6">
          We don't have a consistent way to identify the biggest pain points. That means we can't 
          confidently decide what to tackle first across the year as competing priorities arise.
        </p>

        <p className="cs-body mb-2">
          <em className="font-body">Unclear impact</em>
        </p>
        <p className="cs-body mb-8">
          Even when we make changes, we don't have a reliable way to track whether the experience 
          has actually been improved.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection2;
