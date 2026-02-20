import type { Metadata } from "next";
import CollageHomeContent from "@/components/collage/CollageHomeContent";

export const metadata: Metadata = {
  title: "Anoushka Lad — Product & Research",
  description:
    "Portfolio of Anoushka Lad, a UX researcher and designer bridging human-computer interaction, inclusive design research, and digital product strategy.",
  openGraph: {
    title: "Anoushka Lad — Product & Research",
    description:
      "Portfolio of Anoushka Lad, a UX researcher and designer bridging human-computer interaction, inclusive design research, and digital product strategy.",
    type: "website",
    images: ["/images/case-study-1-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anoushka Lad — Product & Research",
    description:
      "Portfolio of Anoushka Lad, a UX researcher and designer.",
    images: ["/images/case-study-1-hero.jpg"],
  },
};

export default function HomePage() {
  return <CollageHomeContent />;
}
