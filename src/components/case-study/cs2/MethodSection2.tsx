import FigureWrapper from "../FigureWrapper";
import Figure2aCS2 from "./figures/Figure2aCS2";
import Figure2bCS2 from "./figures/Figure2bCS2";
import Figure2cCS2 from "./figures/Figure2cCS2";
import Figure2dCS2 from "./figures/Figure2dCS2";
import SectionHeader from "../SectionHeader";

const MethodSection2 = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Method" />

        {/* Phase 1: Summative Evaluation */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 1: Summative Evaluation</h3>
          <p className="cs-body mb-5">
            We developed a summative usability benchmark for longitudinal tracking using a fixed set 
            of core tasks and metrics that could be repeated periodically to compare performance
          </p>
          <p className="cs-body mb-5">
            First, we identified the core user goals for Crave (streaming service) and defined tasks 
            that would support users in achieving these goals (Figure 2a).
          </p>
          <p className="cs-body mb-5">
            <em className="font-body">Why?</em> To ensure that benchmarking reflects users' needs and that the 
            results translate into clear priorities we can track consistently over time.
          </p>
          
          <FigureWrapper figureNumber="Figure 2a" caption="Overarching goals and their corresponding tasks">
            <Figure2aCS2 />
          </FigureWrapper>

          <p className="cs-body mb-5">
            Next, we documented the ideal path for each task.
          </p>
          <p className="cs-body mb-5">
            <em className="font-body">Why?</em> To score task success and error types against an intended route and 
            make results actionable by flagging the exact step where users diverge from the expected interaction model.
          </p>
        </div>

        {/* Phase 2: Baseline Benchmarking Interviews */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 2: Baseline Benchmarking Interviews</h3>
          <p className="cs-body mb-5">
            We ran baseline benchmarking interviews (n = 5) where participants completed 10 task-based 
            flows on Crave desktop (Figure 2b).
          </p>
          
          <p className="cs-body mb-1.5">
            <em className="font-body">Understanding our evaluation criteria</em>
          </p>
          <ul className="list-disc list-outside ml-6 space-y-1.5 cs-body mb-5">
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
            <Figure2bCS2 />
          </FigureWrapper>

          <p className="cs-body mb-3">
            <em className="font-body">Benchmark score per task</em>
          </p>
          <p className="cs-body mb-5">
            For each task, we averaged the quantitative metrics across participants to produce a single 
            benchmark score per task and captured qualitative notes to explain where and why pain points occurred.
          </p>

          <p className="cs-body mb-3">
            <em className="font-body">Benchmark score per platform</em>
          </p>
          <p className="cs-body mb-5">
            Then, we averaged results across all 10 tasks to produce a single benchmark score per platform.
          </p>
          <p className="cs-body mb-5">
            We repeated the same protocol across devices and across our entertainment brands.
          </p>
        </div>

        {/* Phase 3: Protocol for Assistive Technology Users */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 3: Protocol for Assistive Technology Users</h3>
          <p className="cs-body mb-5">
            1 in 6 people globally have a significant disability and 27% of Canadians over the age of 15 
            report that a disability that limits daily activities. Per Kat Holmes' Mismatch Principle, 
            inclusive design was a business priority, so we reimagined our protocol for assistive-technology (AT) users.
          </p>

          <p className="cs-body mb-3">
            <em className="font-body">Key decisions we made while developing our new protocol</em>
          </p>

          <p className="cs-body mb-1.5">
            <span className="font-bold">Keep tasks the same:</span> To ensure that AT study stayed directly comparable 
            to the baseline and any differences we saw could be attributed to the interaction mode (AT) rather 
            than a different task set.
          </p>
          <p className="cs-body mb-5">
            <span className="font-bold">Test fewer tasks:</span> Because at navigation adds interaction overhead, longer 
            task sets increase fatigue and confound the results, so we focused on a smaller set of high priority tasks.
          </p>
          <p className="cs-body mb-5">
            <span className="font-bold">Use AUS instead of SUS:</span> Because AUS modeled on SUS but written to 
            reflect assistive-technology use, so this improves measurement validity for assistive technology.
          </p>
          <p className="cs-body mb-5">
            <span className="font-bold">Remove time on task and number of errors metrics:</span> Because they're not 
            comparable across AT modes (effort and "extra steps" are inherent to the modality and user setup), 
            these metrics risk measuring AT proficiency/configuration more than product usability.
          </p>
          <p className="cs-body mb-5">
            <span className="font-bold">Choose three AT types:</span> Because W3C identifies screen readers (23%), 
            screen magnification (23%), and keyboard navigation (33.3%) as the three major AT interaction modes.
          </p>
          <p className="cs-body mb-5">
            <span className="font-bold">Use WCAG's POUR principles:</span> Because POUR gives us a clear, shared 
            definition of "accessible usability" and helps us interpret issues consistently.
          </p>

          <p className="cs-body mb-3">
            <em className="font-body">POUR framework for AT users</em>
          </p>
          <p className="cs-body mb-1.5">
            <span className="font-bold">Screen Reader</span> (robust and perceivable): focus on labels, reading order, 
            focus behavior, and UI updates communication
          </p>
          <p className="cs-body mb-1.5">
            <span className="font-bold">Magnification</span> (perceivable and understandable): focus on readability at 
            high zoom, layout reflow, truncation, hierarchy, and keeping context.
          </p>
          <p className="cs-body mb-5">
            <span className="font-bold">Alternate Navigation</span> (operable): focus on full keyboard/remote support, 
            visible focus, predictable focus order, and key action is reachability.
          </p>
        </div>

        {/* Phase 4: Business Priorities and Reproducibility */}
        <div className="cs-content-block">
          <h3 className="cs-subheading-l1 mb-3">Phase 4: Business Priorities and Reproducibility</h3>
          <p className="cs-body mb-5">
            Because priorities shift as releases land and new asks emerge, we operationalized the benchmark 
            into a quarterly cadence so usability signals stayed current and could continuously inform what 
            to prioritize and whether changes were improving the experience.
          </p>
          <p className="cs-body mb-5">
            For each task, we triaged findings using the Desirability-Viability-Feasibility model (Figure 2c) 
            to separate high-impact user pain points from items constrained by effort or business fit. We flagged 
            the overlap areas and handed them off to the relevant design owners to investigate further and decide 
            whether they had enough traction to take forward.
          </p>

          <FigureWrapper figureNumber="Figure 2c" caption="DVF Model representative concept diagram">
            <Figure2cCS2 />
          </FigureWrapper>

          <p className="cs-body mb-5">
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
