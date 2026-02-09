import SectionHeader from "../SectionHeader";

interface GoalSection2Props {
  goal: string;
}

const GoalSection2 = ({ goal }: GoalSection2Props) => {
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

export default GoalSection2;
