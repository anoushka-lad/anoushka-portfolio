import FigureWrapper from "../FigureWrapper";
import Figure2aCS2 from "./figures/Figure2aCS2";
import Figure2dCS2 from "./figures/Figure2dCS2";
import { r } from "@/lib/trig";

const MethodSection2 = () => {
  return (
    <section className="section-padding pt-8 pb-8 md:pt-10 md:pb-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Title with sunburst icon */}
        <div className="flex items-center gap-4 mb-6">
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
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            The Method
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-foreground/30 mb-8" />

        {/* Phase 1: Summative Evaluation */}
        <div className="mb-12">
          <h3 className="font-serif font-bold text-lg mb-4">Phase 1: Summative Evaluation</h3>
          <p className="text-base leading-relaxed mb-6">
            We developed a summative usability benchmark for longitudinal tracking using a fixed set 
            of core tasks and metrics that could be repeated periodically to compare performance
          </p>
          <p className="text-base leading-relaxed mb-6">
            First, we identified the core user goals for Crave (streaming service) and defined tasks 
            that would support users in achieving these goals (Figure 2a).
          </p>
          <p className="text-base leading-relaxed mb-6">
            <em className="font-serif">Why?</em> To ensure that benchmarking reflects users' needs and that the 
            results translate into clear priorities we can track consistently over time.
          </p>
          
          <FigureWrapper figureNumber="Figure 2a" caption="Overarching goals and their corresponding tasks">
            <Figure2aCS2 />
          </FigureWrapper>

          <p className="text-base leading-relaxed mb-6 mt-8">
            Next, we documented the ideal path for each task.
          </p>
          <p className="text-base leading-relaxed mb-6">
            <em className="font-serif">Why?</em> To score task success and error types against an intended route and 
            make results actionable by flagging the exact step where users diverge from the expected interaction model.
          </p>
        </div>

        {/* Phase 2: Baseline Benchmarking Interviews */}
        <div className="mb-12">
          <h3 className="font-serif font-bold text-lg mb-4">Phase 2: Baseline Benchmarking Interviews</h3>
          <p className="text-base leading-relaxed mb-6">
            We ran baseline benchmarking interviews (n = 5) where participants completed 10 task-based 
            flows on Crave desktop (Figure 2b).
          </p>
          
          <p className="text-base leading-relaxed mb-2">
            <em className="font-serif">Understanding our evaluation criteria</em>
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed mb-6">
            <li>
              <strong>Quantitative metrics:</strong> SUS/AUS, completion rate, time on task, and number 
              of errors gave us comparable signals we could track over time and at a glance.
            </li>
            <li>
              <strong>Qualitative metrics:</strong> Supported the quant metrics by explaining why users 
              got stuck and what they expected so fixes were specific and actionable.
            </li>
          </ul>

          <FigureWrapper figureNumber="Figure 2b" caption="Process diagram showing tasks and evaluation criteria">
            {/* Placeholder for Figure 2b */}
            <div className="w-full h-80 md:h-96 flex items-center justify-center border-2 border-dashed border-foreground/30 rounded-lg bg-foreground/5">
              <span className="text-foreground/50 font-serif italic">Figure 2b Placeholder</span>
            </div>
          </FigureWrapper>

          <p className="text-base leading-relaxed mb-4 mt-8">
            <em className="font-serif">Benchmark score per task</em>
          </p>
          <p className="text-base leading-relaxed mb-6">
            For each task, we averaged the quantitative metrics across participants to produce a single 
            benchmark score per task and captured qualitative notes to explain where and why pain points occurred.
          </p>

          <p className="text-base leading-relaxed mb-4">
            <em className="font-serif">Benchmark score per platform</em>
          </p>
          <p className="text-base leading-relaxed mb-6">
            Then, we averaged results across all 10 tasks to produce a single benchmark score per platform.
          </p>
          <p className="text-base leading-relaxed mb-6">
            We repeated the same protocol across devices and across our entertainment brands.
          </p>
        </div>

        {/* Phase 3: Protocol for Assistive Technology Users */}
        <div className="mb-12">
          <h3 className="font-serif font-bold text-lg mb-4">Phase 3: Protocol for Assistive Technology Users</h3>
          <p className="text-base leading-relaxed mb-6">
            1 in 6 people globally have a significant disability and 27% of Canadians over the age of 15 
            report that a disability that limits daily activities. Per Kat Holmes' Mismatch Principle, 
            inclusive design was a business priority, so we reimagined our protocol for assistive-technology (AT) users.
          </p>

          <p className="text-base leading-relaxed mb-4">
            <em className="font-serif">Key decisions we made while developing our new protocol</em>
          </p>

          <p className="text-base leading-relaxed mb-2">
            <span className="underline">Keep tasks the same:</span> To ensure that AT study stayed directly comparable 
            to the baseline and any differences we saw could be attributed to the interaction mode (AT) rather 
            than a different task set.
          </p>
          <p className="text-base leading-relaxed mb-6">
            <span className="underline">Test fewer tasks:</span> Because at navigation adds interaction overhead, longer 
            task sets increase fatigue and confound the results, so we focused on a smaller set of high priority tasks.
          </p>
          <p className="text-base leading-relaxed mb-6">
            <span className="underline">Use AUS instead of SUS:</span> Because AUS modeled on SUS but written to 
            reflect assistive-technology use, so this improves measurement validity for assistive technology.
          </p>
          <p className="text-base leading-relaxed mb-6">
            <span className="underline">Remove time on task and number of errors metrics:</span> Because they're not 
            comparable across AT modes (effort and "extra steps" are inherent to the modality and user setup), 
            these metrics risk measuring AT proficiency/configuration more than product usability.
          </p>
          <p className="text-base leading-relaxed mb-6">
            <span className="underline">Choose three AT types:</span> Because W3C identifies screen readers (23%), 
            screen magnification (23%), and keyboard navigation (33.3%) as the three major AT interaction modes.
          </p>
          <p className="text-base leading-relaxed mb-6">
            <span className="underline">Use WCAG's POUR principles:</span> Because POUR gives us a clear, shared 
            definition of "accessible usability" and helps us interpret issues consistently.
          </p>

          <p className="text-base leading-relaxed mb-4">
            <em className="font-serif">POUR framework for AT users</em>
          </p>
          <p className="text-base leading-relaxed mb-2">
            <span className="underline">Screen Reader</span> (robust and perceivable): focus on labels, reading order, 
            focus behavior, and UI updates communication
          </p>
          <p className="text-base leading-relaxed mb-2">
            <span className="underline">Magnification</span> (perceivable and understandable): focus on readability at 
            high zoom, layout reflow, truncation, hierarchy, and keeping context.
          </p>
          <p className="text-base leading-relaxed mb-6">
            <span className="underline">Alternate Navigation</span> (operable): focus on full keyboard/remote support, 
            visible focus, predictable focus order, and key action is reachability.
          </p>
        </div>

        {/* Phase 4: Business Priorities and Reproducibility */}
        <div className="mb-12">
          <h3 className="font-serif font-bold text-lg mb-4">Phase 4: Business Priorities and Reproducibility</h3>
          <p className="text-base leading-relaxed mb-6">
            Because priorities shift as releases land and new asks emerge, we operationalized the benchmark 
            into a quarterly cadence so usability signals stayed current and could continuously inform what 
            to prioritize and whether changes were improving the experience.
          </p>
          <p className="text-base leading-relaxed mb-6">
            For each task, we triaged findings using the Desirability-Viability-Feasibility model (Figure 2c) 
            to separate high-impact user pain points from items constrained by effort or business fit. We flagged 
            the overlap areas and handed them off to the relevant design owners to investigate further and decide 
            whether they had enough traction to take forward.
          </p>

          <FigureWrapper figureNumber="Figure 2c" caption="DVF Model representative concept diagram">
            {/* Placeholder for Figure 2c */}
            <div className="w-full h-80 md:h-96 flex items-center justify-center border-2 border-dashed border-foreground/30 rounded-lg bg-foreground/5">
              <span className="text-foreground/50 font-serif italic">Figure 2c Placeholder</span>
            </div>
          </FigureWrapper>

          <p className="text-base leading-relaxed mb-6 mt-8">
            Then, we established a regular benchmarking cadence to re-run the same protocol at the start of 
            each quarter (Figure 2d). This created consistent checkpoints to reassess pain points against the 
            evolving roadmap and assess the impact of shipped changes.
          </p>

          <FigureWrapper figureNumber="Figure 2d" caption="Quarterly schedule">
            <Figure2dCS2 />
          </FigureWrapper>
        </div>
      </div>
    </section>
  );
};

export default MethodSection2;
