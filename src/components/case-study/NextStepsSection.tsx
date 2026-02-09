import SectionHeader from "./SectionHeader";

const NextStepsSection = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Next Steps" />

        {/* Content */}
        <p className="cs-body">
          Arguably, every recommendation is a testable hypothesis. Each one can be scoped into a small project with a clear question, a prototype to test, and measurable signals of success before investing in build.
        </p>
      </div>
    </section>
  );
};

export default NextStepsSection;
