import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Anoushka Lad",
  description: "Get in touch with Anoushka Lad for collaborations and research opportunities.",
};

export default function ContactPage() {
  return (
    <div className="section-padding py-20 max-w-4xl mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        Contact
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Get in touch for collaborations, research opportunities, or just to say hello.
      </p>
      <a
        href="mailto:hello@anoushka.design"
        className="text-lg text-foreground hover:text-accent transition-colors font-medium underline underline-offset-4"
      >
        hello@anoushka.design
      </a>
    </div>
  );
}
