import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Anoushka Lad",
  description: "Professional background, education, and experience of Anoushka Lad.",
};

export default function ResumePage() {
  return (
    <div className="section-padding py-20 max-w-4xl mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        Resume
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Coming soon. View my complete professional background, education, and
        experience.
      </p>
    </div>
  );
}
