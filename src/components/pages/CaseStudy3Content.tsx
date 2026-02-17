"use client";

import Footer from "@/components/layout/Footer";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudyHeroUnified from "@/components/case-study/CaseStudyHeroUnified";
import TldrSection from "@/components/case-study/TldrSection";
import ProblemSection3 from "@/components/case-study/cs3/ProblemSection3";
import GoalSection3 from "@/components/case-study/cs3/GoalSection3";
import MethodSection3 from "@/components/case-study/cs3/MethodSection3";
import FindingsSection3 from "@/components/case-study/cs3/FindingsSection3";
import RecommendationsSection3 from "@/components/case-study/cs3/RecommendationsSection3";
import NextStepsSection3 from "@/components/case-study/cs3/NextStepsSection3";
import ReflectionSection3 from "@/components/case-study/cs3/ReflectionSection3";
import SectionDivider from "@/components/case-study/SectionDivider";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";

const avatarImage = "/images/avatar.jpg";

const CaseStudy3Content = () => {
  const titleParts = [
    { text: "on redesigning ", style: "normal" as const },
    { text: "ad\n", style: "bold" as const },
    { text: "experiences", style: "italic" as const },
    { text: " for ", style: "normal" as const },
    { text: "business\nnews", style: "bold" as const },
  ];

  const tldrSummary = "Our newsroom was caught between reader experience and business demands. We redesigned our ad experiences while very much keeping the lights on.";

  const goalText = "To identify ad patterns that protect reading flow and revenue, then turn them into testable design changes";

  return (
    <div className="min-h-screen bg-background overflow-y-auto case-study-page pt-14 md:pt-[88px]">
      <CaseStudyHeader />
      <CaseStudyHeroUnified
        titleParts={titleParts}
        avatarImage={avatarImage}
        illustrationSrc="/images/case-study-3-illustration.png"
        illustrationAlt="Case study 3 illustration"
      />

      <TldrSection summary={tldrSummary} />

      <ProblemSection3 />

      <GoalSection3 goal={goalText} />

      <MethodSection3 />

      <FindingsSection3 />

      <RecommendationsSection3 />

      <NextStepsSection3 />

      <ReflectionSection3 />

      <CaseStudyPagination />

      <SectionDivider />

      <Footer />
    </div>
  );
};

export default CaseStudy3Content;
