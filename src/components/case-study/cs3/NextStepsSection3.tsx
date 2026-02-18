import SectionHeader from "../SectionHeader";

const NextStepsSection3 = () => {
  const steps = [
    { title: "Design", description: "50/50 A/B per page type for 2 weeks; stratify by device." },
    { title: "Metrics", description: "CLS, reach to first paragraph, 50% scroll, article completion." },
    { title: "Guardrails", description: "Ad viewability & revenue/session must be flat to +2%." },
    { title: "Success", description: "If CLS decreases and scroll increases with non-negative revenue." },
  ];

  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Next Steps" />

        <div className="space-y-5">
          {steps.map((step, index) => (
            <div key={index}>
              <p className="cs-subheading-l2 mb-2">{step.title}</p>
              <p className="cs-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection3;
