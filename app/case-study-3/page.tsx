import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudyImage from "@/components/case-study/CaseStudyImage";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";

const heroImage = "/assets/case-study-3-hero.jpg";
const case1Hero = "/assets/case-study-1-hero.jpg";

export default function CaseStudy3Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <CaseStudyHero
        title="Designing Clarity in Healthcare Analytics"
        subtitle="A comprehensive dashboard redesign that helps healthcare professionals make faster, more informed decisions."
        tags={["Dashboard", "Healthcare"]}
        year="2023"
        heroImage={heroImage}
        bgColor="bg-[hsl(200_30%_92%)]"
      />

      <CaseStudySection title="The Problem">
        <div className="space-y-6 prose-portfolio">
          <p className="text-lg leading-relaxed">
            Healthcare professionals were drowning in data. The existing dashboard
            presented too much information without clear hierarchy, making it
            difficult to identify critical insights quickly.
          </p>
          <p className="text-lg leading-relaxed">
            In a field where time is literally life-saving, we needed to design an
            interface that surfaces the right information at the right moment.
          </p>
        </div>
      </CaseStudySection>

      <div className="bg-secondary py-16">
        <CaseStudyImage
          src={heroImage}
          alt="Healthcare dashboard interface"
          caption="The redesigned dashboard prioritizes actionable insights"
          fullWidth
        />
      </div>

      <CaseStudySection title="Research Approach">
        <div className="space-y-6 prose-portfolio">
          <p className="text-lg leading-relaxed">
            We spent three weeks embedded in clinical environments, shadowing
            doctors, nurses, and administrators to understand their daily workflows
            and pain points.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-card p-8 rounded-xl">
              <span className="font-serif text-3xl text-foreground block mb-3">
                3 weeks
              </span>
              <span className="text-muted-foreground">
                Field research in clinical settings
              </span>
            </div>
            <div className="bg-card p-8 rounded-xl">
              <span className="font-serif text-3xl text-foreground block mb-3">
                47 users
              </span>
              <span className="text-muted-foreground">
                Interviewed across 6 departments
              </span>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Design Principles">
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <span className="font-serif text-2xl text-accent">01</span>
            <div>
              <h4 className="font-serif text-xl mb-2 text-foreground">
                Clarity Over Density
              </h4>
              <p className="text-muted-foreground">
                Less data on screen, but the right data. Every element earns its
                place.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="font-serif text-2xl text-accent">02</span>
            <div>
              <h4 className="font-serif text-xl mb-2 text-foreground">
                Progressive Disclosure
              </h4>
              <p className="text-muted-foreground">
                Details available on demand, keeping the primary view focused.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="font-serif text-2xl text-accent">03</span>
            <div>
              <h4 className="font-serif text-xl mb-2 text-foreground">
                Accessibility First
              </h4>
              <p className="text-muted-foreground">
                Color choices and contrast ratios designed for clinical lighting
                conditions.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Impact">
        <div className="space-y-6 prose-portfolio">
          <p className="text-lg leading-relaxed">
            The redesigned dashboard has been deployed across 12 healthcare
            facilities, with measurable improvements in workflow efficiency and user
            satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card p-8 rounded-xl">
              <span className="font-serif text-5xl text-accent block mb-2">
                40%
              </span>
              <span className="text-muted-foreground">
                Faster time to insight
              </span>
            </div>
            <div className="bg-card p-8 rounded-xl">
              <span className="font-serif text-5xl text-accent block mb-2">
                92%
              </span>
              <span className="text-muted-foreground">
                User satisfaction score
              </span>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <NextCaseStudy
        title="Mobile Banking Reimagined"
        href="/case-study-1"
        image={case1Hero}
      />

      <Footer />
    </div>
  );
}
