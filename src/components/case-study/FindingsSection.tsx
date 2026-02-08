import { r } from "@/lib/utils";
import PersonaGrid from "./findings/PersonaGrid";
import Figure3a from "./findings/Figure3a";
import Figure3b from "./findings/Figure3b";
import Figure3c from "./findings/Figure3c";
import Figure3d from "./findings/Figure3d";
import Figure3e from "./findings/Figure3e";
import FigureWrapper from "./FigureWrapper";

const FindingsSection = () => {
  return (
    <section className="section-padding pt-8 pb-12 md:pt-10 md:pb-16 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          {/* Sunburst icon */}
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * Math.PI / 180;
              const x1 = r(20 + Math.cos(angle) * 8);
              const y1 = r(20 + Math.sin(angle) * 8);
              const x2 = r(20 + Math.cos(angle) * 16);
              const y2 = r(20 + Math.sin(angle) * 16);
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
          <h2 className="cs-section-heading">
            The Findings
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px cs-divider mb-8" />

        {/* 1. Personas */}
        <div className="mb-16">
          <h3 className="cs-subheading-l1 mb-4">
            1. Personas
          </h3>
          <p className="cs-body mb-8">
            We developed six personas that reflect recurring patterns across participants' goals, contexts, and habits.
          </p>
          
          <PersonaGrid />
        </div>

        {/* 2. Comparative Analysis */}
        <div>
          <h3 className="cs-subheading-l1 mb-4">
            2. Comparative Analysis
          </h3>
          <p className="cs-body mb-8">
            What people watch and how they watch are tightly linked. Across personas, content preferences show up alongside viewing context (device + co-watching + time of day), and those habits impact each other.
          </p>

          {/* Figure 3a - General watch schedule - PLACEHOLDER */}
          <div className="mb-12">
            <p className="cs-body mb-2">
              <em className="font-body">When do personas prefer to watch their content?</em> (Figure 3a)
            </p>
            <p className="cs-body mb-4">
              Time of day is mostly set by routine and availability. Shared viewing clusters into evening/weekend blocks, while solo viewing fills shorter, more flexible weekday windows.
            </p>
            <FigureWrapper figureNumber="Figure 3a" caption="General watch schedule">
              <Figure3a />
            </FigureWrapper>
          </div>

          {/* Figure 3b - Preferred device - PLACEHOLDER */}
          <div className="mb-12">
            <p className="cs-body mb-2">
              <em className="font-body">What devices to personas prefer to watch on?</em> (Figure 3b)
            </p>
            <p className="cs-body mb-4">
              TV was preferred for personas who engage in long, "lean-back" sessions (often shared or comfort-driven), while laptop/phone was preferred for more solo, flexible, or multi-tasking (browsing, filling time, background).
            </p>
            <FigureWrapper figureNumber="Figure 3b" caption="Preferred device to watch content">
              <Figure3b />
            </FigureWrapper>
          </div>

          {/* Figure 3c - Preferred viewing company */}
          <div className="mb-12">
            <p className="cs-body mb-2">
              <em className="font-body">Who do personas generally watch content with?</em> (Figure 3c)
            </p>
            <p className="cs-body mb-4">
              Who someone watches with is mostly driven by routine and household dynamics. However, this has downstream effects, impacting other viewing habits.
            </p>
            <FigureWrapper figureNumber="Figure 3c" caption="Preferred viewing company">
              <Figure3c />
            </FigureWrapper>
          </div>

          {/* Figure 3d - Ad tolerance */}
          <div className="mb-12">
            <p className="cs-body mb-2">
              <em className="font-body">How tolerant are personas to ads?</em> (Figure 3d)
            </p>
            <p className="cs-body mb-4">
              Ad tolerance tracks viewing intensity. When someone's locked in, ads are disruptive; when they're casual or multitasking, ads are easier to accept as the tradeoff for "free".
            </p>
            <FigureWrapper figureNumber="Figure 3d" caption="Ad tolerance">
              <Figure3d />
            </FigureWrapper>
          </div>

          {/* Figure 3e - Media type preference */}
          <div className="mb-12">
            <p className="cs-body mb-2">
              <em className="font-body">What media type do personas prefer to watch?</em> (Figure 3e)
            </p>
            <p className="cs-body mb-4">
              Preferred media type is mostly about session shape. Movies tend to be a planned, longer sit-down (often TV + evenings/weekends, sometimes co-watching), while TV shows fit routine and flexibility (episodic, easier to start/stop, more solo viewing, and more frequent sessions).
            </p>
            <FigureWrapper figureNumber="Figure 3e" caption="Media type preference">
              <Figure3e />
            </FigureWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindingsSection;