import SectionHeader from "./SectionHeader";

interface GoalSectionProps {
  goal: string;
}

const GoalSection = ({ goal }: GoalSectionProps) => {
  return (
    <section className="section-padding pt-4 pb-4 md:pt-6 md:pb-6">
      <div className="case-column">
        <SectionHeader title="The Goal" />

        {/* Dark quote box */}
        <div className="p-8 md:p-12" style={{ backgroundColor: '#343434' }}>
          <p className="cs-callout">
            {goal}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
