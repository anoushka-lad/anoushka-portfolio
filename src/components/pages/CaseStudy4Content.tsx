"use client";

import Footer from "@/components/layout/Footer";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudyHeroUnified from "@/components/case-study/CaseStudyHeroUnified";
import TldrSection from "@/components/case-study/TldrSection";
import SectionDivider from "@/components/case-study/SectionDivider";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";

const CaseStudy4Content = () => {
  const titleParts = [
    { text: "on prototyping a ", style: "normal" as const },
    { text: "speech-affirming", style: "italic" as const },
    { text: "\nvideo conferencing ", style: "normal" as const },
    { text: "software", style: "boldItalic" as const },
  ];

  const tldrSummary =
    "People who stutter face unique challenges in video conferencing. We prototyped a speech-affirming tool that reduces communication anxiety and creates a more inclusive virtual meeting experience.";

  return (
    <div className="min-h-screen bg-background overflow-y-auto case-study-page" style={{ paddingTop: "var(--cs-header-height)" }}>
      <CaseStudyHeader />
      <CaseStudyHeroUnified
        titleParts={titleParts}
        illustrationSrc="/images/cs4-hero-icon.png"
        illustrationAlt="Speech-affirming video conferencing illustration"
      />

      <TldrSection summary={tldrSummary} />

      {/* Coming Soon placeholder */}
      <section className="section-padding py-16">
        <div className="case-column text-center">
          <p className="cs-body text-muted-foreground italic">
            Full case study coming soon.
          </p>
        </div>
      </section>

      <CaseStudyPagination />

      <SectionDivider />

      <Footer />
    </div>
  );
};

export default CaseStudy4Content;
