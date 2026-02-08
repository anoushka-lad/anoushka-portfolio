import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Anoushka Lad",
  description: "About Anoushka Lad — UX researcher and designer.",
};

export default function AboutPage() {
  return (
    <div className="section-padding py-20 max-w-4xl mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        About
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Coming soon. Anoushka Lad is a UX researcher and designer bridging
        human-computer interaction, inclusive design research, and digital
        product strategy.
      </p>
    </div>
  );
}
