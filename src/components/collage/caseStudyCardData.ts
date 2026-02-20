export interface CaseStudyCardItem {
  id: number;
  title: string;
  path: string;
  heroImage: string;
  heroAlt: string;
  tldr: string;
  problem: string;
  goal: string;
  previewScrollY: number;
}

export const caseStudies: CaseStudyCardItem[] = [
  {
    id: 1,
    title: "On developing personas for a multi-brand hub",
    path: "/case-study-1",
    heroImage: "/images/compass-illustration.png",
    heroAlt: "Compass illustration",
    tldr: "Our streaming services lived in separate apps with separate audiences. We built 6 behavioural personas to guide how we design an aggregated watch experience (AWE) that feels like one home without oversimplifying beloved, legacy brands.",
    problem:
      "More than 50% of North American households pay for at least 4 streaming services. Users were feeling streaming service over-saturation so platforms like Disney and PrimeVideo started pulling multiple brands under a single roof.",
    goal: "To understand our users\u2019 viewing behaviours and turn them into actionable design priorities and decisions, so AWE feels simple, intuitive, and easy to navigate.",
    previewScrollY: 528,
  },
  {
    id: 2,
    title: "On building an accessible usability benchmarking system for a streaming service",
    path: "/case-study-2",
    heroImage: "/images/case-study-2-illustration.png",
    heroAlt: "Protractor illustration",
    tldr: "We needed one consistent way to measure how usable the key flows were across multiple apps and sites. We built a repeatable benchmarking system in a shared tracker so teams can identify key areas of interest over time.",
    problem:
      "Bell Media owns 183 multilingual (English and French) brands, including 8 primary brands. However, our design and implementation teams are relatively small.",
    goal: "To create a repeatable usability benchmarking system that identifies the highest-impact problem areas and tracks measurable improvement over time, so limited resources can be allocated to the highest impact work.",
    previewScrollY: 577,
  },
  {
    id: 3,
    title: "On redesigning ad experiences for business news",
    path: "/case-study-3",
    heroImage: "/images/case-study-3-illustration.png",
    heroAlt: "Case study 3 illustration",
    tldr: "Our newsroom was caught between reader experience and business demands. We redesigned our ad experiences while very much keeping the lights on.",
    problem:
      "BNN Bloomberg\u2019s estimated annual advertising revenue is around $11.1 million. Ads are an essential part of the newsroom business model so we wanted to investigate how our ad experience compared to our competitors.",
    goal: "To identify ad patterns that protect reading flow and revenue, then turn them into testable design changes.",
    previewScrollY: 528,
  },
];
