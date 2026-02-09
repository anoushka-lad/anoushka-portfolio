import SectionHeader from "./SectionHeader";

interface ReflectionItem {
  title: string;
  description: string;
}

const ReflectionSection = () => {
  const reflections: ReflectionItem[] = [
    {
      title: "Qualitative depth does not translate to prevalence",
      description: "This methodology prioritized rich, why-based explanation, but interviews alone cannot establish how common each theme is across the broader user base."
    },
    {
      title: "Mixed moderated and unmoderated inputs",
      description: "Combining formats increases coverage and triangulation, but introduces differences in probing depth and context, which can affect comparability across participants."
    },
    {
      title: "Bilingual interpretation drift",
      description: "Bilingual work expands inclusion and representation, but meaning can shift through translation, making nuance and intent harder to preserve without additional checks."
    },
    {
      title: "Frameworks impose structure on messy reality",
      description: "Standardized attributes and analysis wheels make patterns legible and comparable, but they can oversimplify contradictions and edge cases that don't fit neatly into predefined categories."
    },
    {
      title: "Personas are conceptually limiting",
      description: "Personas intentionally compress fluid, context-dependent behavior into stable archetypes, which risks freezing users into types and encouraging teams to design for caricatures."
    },
    {
      title: "Mode-shifting is underrepresented",
      description: "Viewing behavior often changes by context (time, mood, household, budget), and persona models can miss these shifts unless supplemented with intentional framing."
    },
    {
      title: "Journeys are inferred, not observed longitudinally",
      description: "Journey stages translate interview stories into a lifecycle model, but they can over-assume sequence and causality without diary studies, behavioral logs, or follow-up validation."
    }
  ];

  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Reflection" />

        {/* Reflection Items */}
        <div className="space-y-6">
          {reflections.map((item, index) => (
            <p key={index} className="cs-body">
              <span className="italic">{item.title}</span>
              <br />
              {item.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;
