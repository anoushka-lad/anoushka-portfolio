"use client";

import CollageLayout from "./CollageLayout";
import SectionHeader from "@/components/case-study/SectionHeader";
import SectionDivider from "@/components/case-study/SectionDivider";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudyCardData";

export default function CollageHomeContent() {
  return (
    <div>
      {/* Hero — unchanged */}
      <CollageLayout />

      {/* Below-the-fold content */}
      <div
        className="case-study-page"
        style={{
          backgroundColor: '#FFFCF6',
          backgroundImage: "url('/images/paper-texture-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'luminosity',
        }}
      >
        {/* Section 1: My Current Side Quests */}
        <section className="section-padding" style={{ paddingTop: '64px' }}>
          <div className="case-column">
            <SectionHeader title="My Current Side Quests" />
            <p className="cs-body mb-5">
              I&rsquo;m learning about how people interact with AI systems &mdash; what
              makes conversational interfaces feel intuitive and genuinely useful.
            </p>
            <p className="cs-body mb-5">
              I&rsquo;m building a voice-enabled AI app that coaches engineering
              students through difficult conversations
            </p>
            <p className="cs-body">
              Next, I will explore how multimodal AI can read tone, hesitation,
              and body language to give multi-dimensional feedback
            </p>
          </div>
        </section>

        {/* Section 2: My Case Studies */}
        <section className="section-padding">
          <div className="case-column">
            <SectionHeader title="My Case Studies" />
            <div className="w-full md:w-[44%]">
              <div className="space-y-12">
                {caseStudies.map((study) => (
                  <CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: My Story */}
        <section className="section-padding">
          <div className="case-column">
            <SectionHeader title="My Story" />
            <p className="cs-body mb-5">
              Hi! My name is Anoushka Lad, and among other things, I&rsquo;m a
              Product Researcher.
            </p>
            <p className="cs-body mb-5">
              As a bona fide research enthusiast, I&rsquo;m always on the lookout
              for opportunities to understand user behaviors and create digital
              experiences that balance business priorities with real human needs.
              Outside of this, you can find me neck deep in pop culture. From music
              and movies to TV shows and books, I am always consuming the latest
              and greatest.
            </p>
            <p className="cs-body">
              If you&rsquo;d like to learn more about my work or just want to chat,
              feel free to reach out. I&rsquo;m excited about product research roles
              where I can combine qualitative depth with strategic thinking, helping
              teams build experiences that feel intuitive and worth coming back to.
            </p>
          </div>
        </section>

        {/* Star-line-star footer divider */}
        <SectionDivider />
      </div>
    </div>
  );
}
