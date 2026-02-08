import type { Metadata } from "next";
import CaseStudy1Content from "@/components/pages/CaseStudy1Content";

export const metadata: Metadata = {
  title: "Case Study: Developing Personas for a Multi-Brand Hub — Anoushka Lad",
  description:
    "Building 6 behavioural personas to guide how we design an aggregated watch experience that feels like one home without oversimplifying beloved, legacy brands.",
  openGraph: {
    title: "Developing Personas for a Multi-Brand Hub",
    description:
      "Building 6 behavioural personas to guide how we design an aggregated watch experience.",
    type: "article",
    images: ["/images/case-study-1-hero.jpg"],
  },
};

export default function CaseStudy1Page() {
  return <CaseStudy1Content />;
}
