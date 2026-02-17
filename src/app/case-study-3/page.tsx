import type { Metadata } from "next";
import CaseStudy3Content from "@/components/pages/CaseStudy3Content";

export const metadata: Metadata = {
  title: "Case Study: Redesigning Ad Experiences for Business News — Anoushka Lad",
  description:
    "Redesigning ad experiences for BNN Bloomberg — balancing reader experience against ad revenue through competitive analysis and user research.",
  openGraph: {
    title: "Redesigning Ad Experiences for Business News",
    description:
      "Redesigning ad experiences for BNN Bloomberg — balancing reader experience against ad revenue through competitive analysis and user research.",
    type: "article",
    images: ["/images/case-study-3-illustration.png"],
  },
};

export default function CaseStudy3Page() {
  return <CaseStudy3Content />;
}
