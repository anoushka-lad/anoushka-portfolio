"use client";

import Footer from "@/components/layout/Footer";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudyHeroUnified from "@/components/case-study/CaseStudyHeroUnified";
import TldrSection from "@/components/case-study/TldrSection";
import SectionDivider from "@/components/case-study/SectionDivider";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";
import SectionHeader from "@/components/case-study/SectionHeader";

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
    <div className="min-h-screen bg-background overflow-y-auto case-study-page pt-14 md:pt-[88px]">
      <CaseStudyHeader />
      <CaseStudyHeroUnified
        titleParts={titleParts}
        illustrationSrc="/images/compass-illustration.png"
        illustrationAlt="Compass illustration"
      />

      <TldrSection summary={tldrSummary} />

      {/* The Problem */}
      <section className="section-padding py-20">
        <div className="case-column">
          <SectionHeader title="The Problem" />
          <div className="space-y-6 cs-body">
            <p className="cs-body">
              Healthcare professionals were drowning in data. The existing dashboard
              presented too much information without clear hierarchy, making it difficult
              to identify critical insights quickly.
            </p>
            <p className="cs-body">
              In a field where time is literally life-saving, we needed to design
              an interface that surfaces the right information at the right moment.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Image */}
      <div className="bg-secondary py-16">
        <div className="section-padding">
          <div className="case-column">
            <img
              src={heroImage}
              alt="Healthcare dashboard interface"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <p className="cs-caption mt-4 text-center">
              The redesigned dashboard prioritizes actionable insights
            </p>
          </div>
        </div>
      </div>

      {/* Research Approach */}
      <section className="section-padding py-20">
        <div className="case-column">
          <SectionHeader title="Research Approach" />
          <div className="space-y-6 cs-body">
            <p className="cs-body">
              We spent three weeks embedded in clinical environments, shadowing
              doctors, nurses, and administrators to understand their daily workflows
              and pain points.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-card p-8 rounded-xl">
                <span className="font-display text-3xl text-[#343434] block mb-3">3 weeks</span>
                <span className="cs-body">Field research in clinical settings</span>
              </div>
              <div className="bg-card p-8 rounded-xl">
                <span className="font-display text-3xl text-[#343434] block mb-3">47 users</span>
                <span className="cs-body">Interviewed across 6 departments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="section-padding py-20">
        <div className="case-column">
          <SectionHeader title="Design Principles" />
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="font-display text-2xl text-accent">01</span>
              <div>
                <h4 className="cs-subheading-l1 mb-2">Clarity Over Density</h4>
                <p className="cs-body">
                  Less data on screen, but the right data. Every element earns its place.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="font-display text-2xl text-accent">02</span>
              <div>
                <h4 className="cs-subheading-l1 mb-2">Progressive Disclosure</h4>
                <p className="cs-body">
                  Details available on demand, keeping the primary view focused.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="font-display text-2xl text-accent">03</span>
              <div>
                <h4 className="cs-subheading-l1 mb-2">Accessibility First</h4>
                <p className="cs-body">
                  Color choices and contrast ratios designed for clinical lighting conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding py-20">
        <div className="case-column">
          <SectionHeader title="Impact" />
          <div className="space-y-6 cs-body">
            <p className="cs-body">
              The redesigned dashboard has been deployed across 12 healthcare facilities,
              with measurable improvements in workflow efficiency and user satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-8 rounded-xl">
                <span className="font-display text-5xl text-accent block mb-2">40%</span>
                <span className="cs-body">Faster time to insight</span>
              </div>
              <div className="bg-card p-8 rounded-xl">
                <span className="font-display text-5xl text-accent block mb-2">92%</span>
                <span className="cs-body">User satisfaction score</span>
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

export default CaseStudy3Content;
