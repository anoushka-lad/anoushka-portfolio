import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About — Anoushka Lad",
  description:
    "About Anoushka Lad — UX researcher and designer bridging human-computer interaction, inclusive design research, and digital product strategy.",
  openGraph: {
    title: "About — Anoushka Lad",
    description:
      "About Anoushka Lad — UX researcher and designer bridging human-computer interaction, inclusive design research, and digital product strategy.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
