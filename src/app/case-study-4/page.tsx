import type { Metadata } from "next";
import CaseStudy4Content from "@/components/pages/CaseStudy4Content";

export const metadata: Metadata = {
  title: "Case Study: Speech-Affirming Video Conferencing — Anoushka Lad",
  description:
    "Prototyping a speech-affirming video conferencing software for people who stutter.",
  openGraph: {
    title: "Speech-Affirming Video Conferencing",
    description:
      "Prototyping a speech-affirming video conferencing software for people who stutter.",
    type: "article",
    images: ["/images/cs4-hero-icon.png"],
  },
};

export default function CaseStudy4Page() {
  return <CaseStudy4Content />;
}
