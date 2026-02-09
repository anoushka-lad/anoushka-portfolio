import FigureWrapper from "./FigureWrapper";
import Figure1b from "./figures/Figure1b";
import SectionHeader from "./SectionHeader";

const figure1a = "/images/figure-1a.png";

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Problem" />

        {/* Intro paragraph */}
        <p className="cs-body mb-6">
          More than 50% of North American households pay for at least 4 streaming services. 
          Users were feeling streaming service over-saturation so platforms like Disney and 
          PrimeVideo started pulling multiple brands under a single roof (Figure 1a).
        </p>

        {/* Figure 1a - Streaming bundles */}
        <FigureWrapper
          figureNumber="Figure 1a"
          caption="Examples of aggregated watch experiences on PrimeVideo and Disney+"
        >
          <img
            src={figure1a}
            alt="Examples of aggregated watch experiences on PrimeVideo and Disney+"
            className="w-full h-auto rounded-lg"
          />
        </FigureWrapper>

        {/* Bell Media paragraph */}
        <p className="cs-body mb-6">
          Bell Media (Figure 1b) owns 183 multilingual (English and French) brands, including 
          8 primary streaming brands with their own apps, identities, and loyal audiences. 
          Aligned with market trends, we wanted to bring them into a single home to cross-promote 
          and grow engagement, while staying true to each brand and designing a cohesive, 
          user-first experience.
        </p>

        {/* But this is complicated */}
        <p className="cs-body mb-4">
          But this is complicated because we didn't understand:
        </p>

        {/* Bullet list */}
        <ul className="list-disc list-outside ml-6 space-y-2 cs-body mb-6">
          <li>
            Different kinds of viewers across brands, so any "one home" risks a generic 
            experience that fits no one
          </li>
          <li>
            Which journeys and features mattered most to which users, making it hard to 
            prioritise design decisions
          </li>
          <li>
            How language and viewing habits changed user expectations so the same flow 
            could feel vastly different for different users
          </li>
        </ul>

        {/* Figure 1b - Brand diagram */}
        <FigureWrapper
          figureNumber="Figure 1b"
          caption="Bell Media's 8 primary streaming brands across entertainment, news and sports"
        >
          <Figure1b />
        </FigureWrapper>
      </div>
    </section>
  );
};

export default ProblemSection;
