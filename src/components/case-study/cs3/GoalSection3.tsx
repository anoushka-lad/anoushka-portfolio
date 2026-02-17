import SectionHeader from "../SectionHeader";

interface GoalSection3Props {
  goal: string;
}

const GoalSection3 = ({ goal }: GoalSection3Props) => {
  return (
    <section className="section-padding">
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

export default GoalSection3;
