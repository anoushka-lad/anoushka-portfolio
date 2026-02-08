"use client";

import { r } from "@/lib/trig";
import Footer from "@/components/layout/Footer";
import CaseStudyHeroUnified from "@/components/case-study/CaseStudyHeroUnified";
import TldrSection from "@/components/case-study/TldrSection";
import SectionDivider from "@/components/case-study/SectionDivider";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";

const heroImage = "/images/case-study-3-hero.jpg";

const CaseStudy3Content = () => {
  const titleParts = [
    { text: "Designing ", style: "normal" as const },
    { text: "Clarity", style: "italic" as const },
    { text: " in\n", style: "normal" as const },
    { text: "Healthcare Analytics", style: "bold" as const },
  ];

  const tldrSummary =
    "Healthcare professionals were drowning in data. We redesigned a dashboard to surface the right information at the right moment, resulting in 40% faster time to insight and 92% user satisfaction.";

  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      <CaseStudyHeroUnified
        titleParts={titleParts}
        illustrationSrc="/images/compass-illustration.png"
        illustrationAlt="Compass illustration"
      />

      <TldrSection summary={tldrSummary} />

      {/* The Problem */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <SunburstIcon />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              The Problem
            </h2>
          </div>
          <div className="space-y-6 prose-portfolio">
            <p className="text-lg leading-relaxed">
              Healthcare professionals were drowning in data. The existing dashboard
              presented too much information without clear hierarchy, making it difficult
              to identify critical insights quickly.
            </p>
            <p className="text-lg leading-relaxed">
              In a field where time is literally life-saving, we needed to design
              an interface that surfaces the right information at the right moment.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Image */}
      <div className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto section-padding">
          <img
            src={heroImage}
            alt="Healthcare dashboard interface"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <p className="text-sm text-muted-foreground mt-4 text-center">
            The redesigned dashboard prioritizes actionable insights
          </p>
        </div>
      </div>

      {/* Research Approach */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <SunburstIcon />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Research Approach
            </h2>
          </div>
          <div className="space-y-6 prose-portfolio">
            <p className="text-lg leading-relaxed">
              We spent three weeks embedded in clinical environments, shadowing
              doctors, nurses, and administrators to understand their daily workflows
              and pain points.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-card p-8 rounded-xl">
                <span className="font-serif text-3xl text-foreground block mb-3">3 weeks</span>
                <span className="text-muted-foreground">Field research in clinical settings</span>
              </div>
              <div className="bg-card p-8 rounded-xl">
                <span className="font-serif text-3xl text-foreground block mb-3">47 users</span>
                <span className="text-muted-foreground">Interviewed across 6 departments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <SunburstIcon />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Design Principles
            </h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="font-serif text-2xl text-accent">01</span>
              <div>
                <h4 className="font-serif text-xl mb-2 text-foreground">Clarity Over Density</h4>
                <p className="text-muted-foreground">
                  Less data on screen, but the right data. Every element earns its place.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="font-serif text-2xl text-accent">02</span>
              <div>
                <h4 className="font-serif text-xl mb-2 text-foreground">Progressive Disclosure</h4>
                <p className="text-muted-foreground">
                  Details available on demand, keeping the primary view focused.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="font-serif text-2xl text-accent">03</span>
              <div>
                <h4 className="font-serif text-xl mb-2 text-foreground">Accessibility First</h4>
                <p className="text-muted-foreground">
                  Color choices and contrast ratios designed for clinical lighting conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <SunburstIcon />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Impact
            </h2>
          </div>
          <div className="space-y-6 prose-portfolio">
            <p className="text-lg leading-relaxed">
              The redesigned dashboard has been deployed across 12 healthcare facilities,
              with measurable improvements in workflow efficiency and user satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-8 rounded-xl">
                <span className="font-serif text-5xl text-accent block mb-2">40%</span>
                <span className="text-muted-foreground">Faster time to insight</span>
              </div>
              <div className="bg-card p-8 rounded-xl">
                <span className="font-serif text-5xl text-accent block mb-2">92%</span>
                <span className="text-muted-foreground">User satisfaction score</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyPagination />

      <SectionDivider />

      <Footer />
    </div>
  );
};

const SunburstIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 text-accent" fill="none">
    <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.3" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={r(16 + Math.cos(rad) * 6)}
          y1={r(16 + Math.sin(rad) * 6)}
          x2={r(16 + Math.cos(rad) * 12)}
          y2={r(16 + Math.sin(rad) * 12)}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
      );
    })}
  </svg>
);

export default CaseStudy3Content;
