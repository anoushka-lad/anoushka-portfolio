"use client";

import Footer from "@/components/layout/Footer";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudyHeroUnified from "@/components/case-study/CaseStudyHeroUnified";
import TldrSection from "@/components/case-study/TldrSection";
import ProblemSection from "@/components/case-study/ProblemSection";
import GoalSection from "@/components/case-study/GoalSection";
import MethodSection from "@/components/case-study/MethodSection";
import FindingsSection from "@/components/case-study/FindingsSection";
import RecommendationsSection from "@/components/case-study/RecommendationsSection";
import NextStepsSection from "@/components/case-study/NextStepsSection";
import ReflectionSection from "@/components/case-study/ReflectionSection";
import SectionDivider from "@/components/case-study/SectionDivider";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";

const avatarImage = "/images/avatar.jpg";

const CaseStudy1Content = () => {
  const titleParts = [
    { text: "on developing ", style: "normal" as const },
    { text: "personas", style: "italic" as const },
    { text: " for a\n", style: "normal" as const },
    { text: "multi-brand hub", style: "boldItalic" as const },
  ];

  const tldrSummary = "Our streaming services lived in separate apps with separate audiences. We built 6 behavioural personas to guide how we design an aggregated watch experience (AWE) that feels like one home without oversimplifying beloved, legacy brands.";

  const goalText = "To understand our users' viewing behaviours and turn them into actionable design priorities and decisions, so AWE feels simple, intuitive, and easy to navigate.";

  return (
    <div className="min-h-screen bg-background overflow-y-auto case-study-page pt-14 md:pt-[88px]">
      <CaseStudyHeader />
      <CaseStudyHeroUnified
        titleParts={titleParts}
        avatarImage={avatarImage}
        illustrationSrc="/images/compass-illustration.png"
        illustrationAlt="Compass illustration"
      />

      <TldrSection summary={tldrSummary} />

      <ProblemSection />

      <GoalSection goal={goalText} />

      <MethodSection />

      <FindingsSection />

      <RecommendationsSection />

      <NextStepsSection />

      <ReflectionSection />

      <CaseStudyPagination />

      <SectionDivider />

      <Footer />
    </div>
  );
};

export default CaseStudy1Content;
