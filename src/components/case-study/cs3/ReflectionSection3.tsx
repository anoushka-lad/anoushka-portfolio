import SectionHeader from "../SectionHeader";

const ReflectionSection3 = () => {
  const reflections = [
    {
      title: "Competitor set limited to 3",
      description: "This kept the comparison focused on the most relevant peers, but it can miss patterns that show up in adjacent products (e.g., general news, trading apps)."
    },
    {
      title: "Unmoderated sessions reduce probing",
      description: "Unmoderated testing better reflects real skimming behavior and reduces interviewer influence, but you lose the ability to ask \u201cwhy\u201d in the moment."
    },
    {
      title: "Task set is a proxy for the whole product",
      description: "Home, article, and stock pages cover core entry points, but they won\u2019t capture secondary flows (alerts, watchlists, search, personalization, subscription paywalls)."
    },
    {
      title: "Evaluation criteria are intentionally narrow",
      description: "Focusing on frequency, placement/organization, and load/interaction creates a clean, repeatable rubric, but it can miss qualitative dimensions like comprehension, trust, perceived bias, or decision confidence."
    },
    {
      title: "Context and device variability may be under-captured",
      description: "Reading behavior changes by device, time pressure, and setting, so one test context can understate real-world switching."
    },
    {
      title: "Accessibility and edge cases may be missed",
      description: "Standard tasks often under-sample users with assistive tech needs or atypical settings (low bandwidth, large text, reduced motion)."
    }
  ];

  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Reflection" />

        <p className="cs-body mb-5">
          Ad quality is about timing and stability, not just count. By preloading
          fixed spaces and labeling ads, we can remove most of the friction without
          touching revenue levers. Next time, I&apos;d explicitly test creative repetition
          suppression to isolate how much &ldquo;same ad again&rdquo; drives perceived
          overload.
        </p>

        <p className="cs-body mb-5">
          Below are several pertinent design decisions we made:
        </p>

        {/* Reflection Items */}
        <div className="space-y-5">
          {reflections.map((item, index) => (
            <div key={index}>
              <p className="cs-subheading-l2 mb-2">{item.title}</p>
              <p className="cs-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection3;
