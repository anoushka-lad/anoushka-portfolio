import Footer from "@/components/layout/Footer";
import CaseStudyHeroNew from "@/components/case-study/CaseStudyHeroNew";
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
import avatarImage from "@/assets/avatar.jpg";

const CaseStudy1 = () => {
  const titleParts = [
    { text: "On Developing ", style: "normal" as const },
    { text: "Personas", style: "italic" as const },
    { text: " for a", style: "normal" as const },
    { text: "\nMulti-Brand Hub", style: "bold" as const },
  ];

  const tldrSummary = "Our streaming services lived in separate apps with separate audiences. We built 6 behavioural personas to guide how we design an aggregated watch experience (AWE) that feels like one home without oversimplifying beloved, legacy brands.";

  const goalText = "To understand our users' viewing behaviours and turn them into actionable design priorities and decisions, so AWE feels simple, intuitive, and easy to navigate.";

  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      <CaseStudyHeroNew
        titleParts={titleParts}
        avatarImage={avatarImage}
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

export default CaseStudy1;
