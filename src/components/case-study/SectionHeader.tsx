interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div className="mb-8">
    <h2 className="cs-section-heading">{title}</h2>
    {/* Rule — flush with the text column */}
    <div className="h-px mt-4" style={{ backgroundColor: '#C1BFBA' }} />
  </div>
);

export default SectionHeader;
