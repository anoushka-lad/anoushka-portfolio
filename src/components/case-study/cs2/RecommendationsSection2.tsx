import SectionHeader from "../SectionHeader";

const RecommendationsSection2 = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Recommendations" />

        {/* Content */}
        <p className="cs-body">
          These results were handed off to the Crave product team, UX/design, web engineering, 
          search/metadata owners, and accessibility/inclusive design, so the benchmark informed 
          planning and prioritization for the quarter.
        </p>
      </div>
    </section>
  );
};

export default RecommendationsSection2;
