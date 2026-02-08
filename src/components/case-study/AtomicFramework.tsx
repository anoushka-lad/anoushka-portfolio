const AtomicFramework = () => {
  return (
    <div className="flex flex-wrap justify-center items-end gap-8 md:gap-12 py-8">
      {/* Key Moments - Single circle with dot */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-foreground" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground" />
          <div className="absolute top-[45%] right-[25%] w-1.5 h-1.5 rounded-full bg-background" />
        </div>
        <span className="text-sm font-body text-[#343434] text-center">Key Moments</span>
      </div>

      {/* Standardized Attributes - 3 overlapping circles */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-20 h-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-foreground" />
          <div className="absolute bottom-0 left-[25%] w-8 h-8 rounded-full border-2 border-foreground bg-background" />
          <div className="absolute bottom-0 right-[25%] w-8 h-8 rounded-full bg-foreground" />
          <div className="absolute bottom-1 left-[32%] w-1 h-1 rounded-full bg-foreground" />
        </div>
        <span className="text-sm font-body text-[#343434] text-center">Standardized<br/>Attributes</span>
      </div>

      {/* Emerging Patterns - Grid of circles */}
      <div className="flex flex-col items-center gap-3">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="relative w-4 h-4">
              <div className="absolute inset-0 rounded-full border border-foreground" />
              <div className="absolute inset-[3px] rounded-full bg-foreground" />
            </div>
          ))}
        </div>
        <span className="text-sm font-body text-[#343434] text-center">Emerging<br/>Patterns</span>
      </div>

      {/* Provisional Personas - Dashed square */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 border-2 border-dashed border-foreground" />
        <span className="text-sm font-body text-[#343434] text-center">Provisional<br/>Personas</span>
      </div>

      {/* Personas - Solid square */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 bg-foreground" />
        <span className="text-sm font-body text-[#343434] text-center">Personas</span>
      </div>
    </div>
  );
};

export default AtomicFramework;
