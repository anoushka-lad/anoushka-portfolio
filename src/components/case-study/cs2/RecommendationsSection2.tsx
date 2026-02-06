const RecommendationsSection2 = () => {
  return (
    <section className="section-padding pt-8 pb-8 md:pt-10 md:pb-10">
      <div className="max-w-3xl mx-auto">
        {/* Section Title with sunburst icon */}
        <div className="flex items-center gap-4 mb-6">
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * Math.PI / 180;
              const x1 = 20 + Math.cos(angle) * 8;
              const y1 = 20 + Math.sin(angle) * 8;
              const x2 = 20 + Math.cos(angle) * 16;
              const y2 = 20 + Math.sin(angle) * 16;
              return (
                <line 
                  key={i} 
                  x1={x1} y1={y1} x2={x2} y2={y2} 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  className="text-foreground" 
                />
              );
            })}
            <circle cx="20" cy="20" r="6" fill="currentColor" className="text-foreground" />
          </svg>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            The Recommendations
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-foreground/30 mb-8" />

        {/* Content */}
        <p className="text-base leading-relaxed text-foreground">
          These results were handed off to the Crave product team, UX/design, web engineering, 
          search/metadata owners, and accessibility/inclusive design, so the benchmark informed 
          planning and prioritization for the quarter.
        </p>
      </div>
    </section>
  );
};

export default RecommendationsSection2;
