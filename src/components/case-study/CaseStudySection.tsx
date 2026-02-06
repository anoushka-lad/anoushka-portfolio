interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const CaseStudySection = ({ title, children, className = "" }: CaseStudySectionProps) => {
  return (
    <section className={`section-padding py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground sticky top-32">
              {title}
            </h2>
          </div>
          <div className="md:col-span-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
