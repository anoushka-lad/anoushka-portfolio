import type { Metadata } from "next";
import CaseStudy2Content from "@/components/pages/CaseStudy2Content";

export const metadata: Metadata = {
  title: "Case Study: Usability Benchmarking System — Anoushka Lad",
  description:
    "Building a repeatable usability benchmarking system to identify high-impact problem areas and track measurable improvement over time for a streaming service.",
  openGraph: {
    title: "Usability Benchmarking System for a Streaming Service",
    description:
      "Building a repeatable usability benchmarking system to identify high-impact problem areas.",
    type: "article",
    images: ["/images/case-study-2-hero.jpg"],
  },
};

export default function CaseStudy2Page() {
  return <CaseStudy2Content />;
}
