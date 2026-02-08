import type { Metadata } from "next";
import CaseStudy3Content from "@/components/pages/CaseStudy3Content";

export const metadata: Metadata = {
  title: "Case Study: Healthcare Analytics Dashboard — Anoushka Lad",
  description:
    "Designing clarity in healthcare analytics — a dashboard redesign helping professionals make faster, more informed decisions.",
  openGraph: {
    title: "Healthcare Analytics Dashboard Redesign",
    description:
      "Designing clarity in healthcare analytics — a dashboard redesign helping professionals make faster, more informed decisions.",
    type: "article",
    images: ["/images/case-study-3-hero.jpg"],
  },
};

export default function CaseStudy3Page() {
  return <CaseStudy3Content />;
}
