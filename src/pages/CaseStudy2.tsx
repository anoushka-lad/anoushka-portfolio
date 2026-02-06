import Footer from "@/components/layout/Footer";
import CaseStudyHero2 from "@/components/case-study/CaseStudyHero2";
import TldrSection from "@/components/case-study/TldrSection";
import ProblemSection2 from "@/components/case-study/cs2/ProblemSection2";
import GoalSection2 from "@/components/case-study/cs2/GoalSection2";
import MethodSection2 from "@/components/case-study/cs2/MethodSection2";
import FindingsSection2 from "@/components/case-study/cs2/FindingsSection2";
import RecommendationsSection2 from "@/components/case-study/cs2/RecommendationsSection2";
import ReflectionSection2 from "@/components/case-study/cs2/ReflectionSection2";
import SectionDivider from "@/components/case-study/SectionDivider";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";
import avatarImage from "@/assets/avatar.jpg";

const CaseStudy2 = () => {
  const titleParts = [
    { text: "on building an accessible\n", style: "normal" as const },
    { text: "usability ", style: "normal" as const },
    { text: "benchmarking system", style: "italic" as const },
    { text: " for a ", style: "normal" as const },
    { text: "streaming service", style: "bold" as const },
  ];

  const tldrSummary = "We needed one consistent way to measure how usable the key flows were across multiple apps and sites. We built a repeatable benchmarking system in a shared tracker so teams can identify key areas of interest over time.";

  const goalText = "To create a repeatable usability benchmarking system that identifies the highest-impact problem areas and tracks measurable improvement over time, so limited resources can be allocated to the highest impact work.";

  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      <CaseStudyHero2
        titleParts={titleParts}
        avatarImage={avatarImage}
      />

      <TldrSection summary={tldrSummary} />

      <ProblemSection2 />

      <GoalSection2 goal={goalText} />

      <MethodSection2 />

      <FindingsSection2 />

      <RecommendationsSection2 />

      <ReflectionSection2 />

      <CaseStudyPagination />

      <SectionDivider />

      <Footer />
    </div>
  );
};

export default CaseStudy2;
