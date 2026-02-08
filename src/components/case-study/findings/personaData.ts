// Persona icon imports
const platformSurferIcon = "/images/persona-platform-surfer.png";
const bingeWatcherIcon = "/images/persona-binge-watcher.png";
const avidViewerIcon = "/images/persona-avid-viewer.png";
const backgroundStreamerIcon = "/images/persona-background-streamer.png";
const socialStreamerIcon = "/images/persona-social-streamer.png";
const rewatcherIcon = "/images/persona-rewatcher.png";

// Movie poster imports - Platform Surfer
const posterBarbie = "/images/persona-poster-barbie.jpg";
const posterBillions = "/images/persona-poster-billions.jpg";
const posterTokyoVice = "/images/persona-poster-tokyo-vice.jpg";
const posterColorPurple = "/images/persona-poster-color-purple.jpg";

// Movie poster imports - Binge Watcher
const posterEuphoria = "/images/persona-poster-euphoria.jpg";
const posterGOT = "/images/persona-poster-got.jpg";
const posterSuccession = "/images/persona-poster-succession.jpg";
const posterBigLittleLies = "/images/persona-poster-big-little-lies.jpg";

// Movie poster imports - Avid Viewer
const posterBanshees = "/images/persona-poster-banshees.jpg";
const posterInception = "/images/persona-poster-inception.jpg";
const posterLadybird = "/images/persona-poster-ladybird.jpg";
const posterNope = "/images/persona-poster-nope.jpg";

// Movie poster imports - Background Streamer
const posterFriends = "/images/persona-poster-friends.webp";
const posterBigBangTheory = "/images/persona-poster-big-bang-theory.jpg";
const posterTraitors = "/images/persona-poster-traitors.jpg";
const posterDragRace = "/images/persona-poster-drag-race.webp";

// Movie poster imports - Social Streamer
const posterHarryPotter = "/images/persona-poster-harry-potter.jpg";
const posterLOTR = "/images/persona-poster-lotr.jpg";
const posterAquaman = "/images/persona-poster-aquaman.jpg";
const posterGhostbusters = "/images/persona-poster-ghostbusters.jpg";

// Movie poster imports - Rewatcher
const posterHangover = "/images/persona-poster-hangover.jpg";
const posterDevilWearsPrada = "/images/persona-poster-devil-wears-prada.jpg";
const posterWire = "/images/persona-poster-wire.jpg";
const posterTheOC = "/images/persona-poster-the-oc.webp";

export interface PersonaData {
  number: number;
  title: string;
  titleLines: string[];
  icon: string;
  description: string;
  posters: string[];
  painPoints: string[];
  goals: string[];
  journey: {
    stage: string;
    description: string;
  }[];
}

export const personaData: PersonaData[] = [
  {
    number: 1,
    title: "The Platform Surfer",
    titleLines: ["THE PLATFORM", "SURFER"],
    icon: platformSurferIcon,
    description: "An entertainment-oriented consumer who avidly engages with streaming services to unwind after work and during leisure time, often binge-watching alone. They prioritize convenience and accessibility, preferring to stream content on their laptop. While they are open to advertisements for free content, they are more inclined to opt for ad-free plans for a seamless viewing experience. Their streaming habits are characterized by a desire for new and well-organized content, with a preference for platforms that offer clear displays of available shows and movies, easy content tagging, and a unified interface that consolidates multiple services. Key insights reveal a strong desire for improved communication regarding available packages and features, along with personalized notifications.",
    posters: [posterBarbie, posterBillions, posterTokyoVice, posterColorPurple],
    painPoints: [
      "Frustrations arise from disorganized content libraries and difficulties navigating aggregated available content and filtering options.",
      "Difficulty keeping up with weekly, new releases."
    ],
    goals: [
      "Clear and improved information communication about available content. Ability to filter packages.",
      "Notifications for new content releases and scheduled releases."
    ],
    journey: [
      { stage: "Awareness", description: "Would like access to more content" },
      { stage: "Consider", description: "Appreciates the timely releases of content" },
      { stage: "Retention", description: "Wants to continue to watch weekly releases" },
      { stage: "Future", description: "Appreciates the convenience of AWE" },
    ]
  },
  {
    number: 2,
    title: "The Binge Watcher",
    titleLines: ["THE BINGE", "WATCHER"],
    icon: bingeWatcherIcon,
    description: "A devoted binge-watcher who engages in extended periods of watching, sometimes with a designated partner. They use streaming services daily, in their free time, preferring to watch on their television for comfort during extended periods of watching. Their ideal streaming experience includes specialty categories, personalized watching history, and a clear display of new and recommended content (that distinguishes between what they have or have not viewed). While interested in the convenience of accessing multiple services in one platform, their loyalty lies with streaming services that provide comprehensive content for binge-watching. Opportunities for improvement involve recommending related content and enhancing the \"watch next\" feature.",
    posters: [posterEuphoria, posterGOT, posterSuccession, posterBigLittleLies],
    painPoints: [
      "Detests ads, disorganized content libraries, and any other inconveniences that might disrupt or take them out of the immersiveness of the binge-watching experience."
    ],
    goals: [
      "Create a clean, seamless, and user-friendly interface that allows easy access to content and the ability to pick up where they left off and visibility of new content."
    ],
    journey: [
      { stage: "Awareness", description: "Would like to discover new, bingeable content" },
      { stage: "Consider", description: "Inspired by the bingeable shows category" },
      { stage: "Retention", description: "Continues to discover and start new bingeable content" },
      { stage: "Future", description: "Appreciates the variety of content options and brands" },
    ]
  },
  {
    number: 3,
    title: "The Avid Viewer",
    titleLines: ["THE AVID", "VIEWER"],
    icon: avidViewerIcon,
    description: "This selective viewer values a focused and intentional watching experience, primarily after work and during limited durations on the weekend. They engage in controlled watching without adhering to a strict streaming schedule or service loyalty, prioritising content quality and relevance. Their ideal streaming experience revolves around content discovery and new recommendations during their viewing experience. They value multiple pathways for finding new content, including a robust search experience, well-organised categories and dynamic content rotators. Sports fans within this group express a desire for a comprehensive sports package that consolidates various sports streaming networks.",
    posters: [posterBanshees, posterInception, posterLadybird, posterNope],
    painPoints: [
      "Finding new content that is not included within their base subscription and not being able to easily distinguish between content they do and do not have access to."
    ],
    goals: [
      "Personalized features for sports subscribers, such as customized rotators, game reminders, and personalized content recommendations."
    ],
    journey: [
      { stage: "Awareness", description: "Wants quality content to watch in controlled periods" },
      { stage: "Consider", description: "Intrigued by the number of quality options on Crave" },
      { stage: "Retention", description: "Wants easy and convenient access to discovering content" },
      { stage: "Future", description: "Appreciates being able to explore multiple brands" },
    ]
  },
  {
    number: 4,
    title: "The Background Streamer",
    titleLines: ["THE BACKGROUND", "STREAMER"],
    icon: backgroundStreamerIcon,
    description: "This individual uses streaming services as a constant background accompaniment during all their daily activities, often not actively engaging with what they are watching. Their streaming habits are characterized by a preference for TV shows and other low-maintenance content, such as sitcoms with episodic plots that do not require continuous attention. They are less bothered by ads than the average user and are more likely to watch ad-supported content, prioritizing access to a wide range of content over ad-free experiences. Their ideal streaming experience allows them to easily pick up where they left off, access content they can watch immediately, and easily filter for content that fits their unique needs. They value the convenience of accessing multiple services in one platform, as it provides them with even more content to play with minimal effort.",
    posters: [posterFriends, posterBigBangTheory, posterTraitors, posterDragRace],
    painPoints: [
      "Frustration with content recommendations that are not included in subscription.",
      "Dislikes overly-complicated interfaces with too more information."
    ],
    goals: [
      "Immediate and clear access to watchable content.",
      "Simple filtering options to discover content fitting their unique needs.",
      "Seamless automatic play or watch next feature."
    ],
    journey: [
      { stage: "Awareness", description: "Wants background noise television" },
      { stage: "Consider", description: "Discovers that interesting content is available on Crave" },
      { stage: "Retention", description: "Wants cost-effective access to content" },
      { stage: "Future", description: "Appreciates the convenience of a single platform" },
    ]
  },
  {
    number: 5,
    title: "The Social Streamer",
    titleLines: ["THE SOCIAL", "STREAMER"],
    icon: socialStreamerIcon,
    description: "This viewer's habits are unique in that they involve active coordination with different schedules and depend on whether they are watching with a partner, their family or alone. As such, they often watch on the weekends (sometimes after school/work) and treat streaming as a group activity. This watcher is not interested in ads, particularly with children involved, as they want to view content without distractions and prefer a greater control over all aspects over the content their children watch to ensure that no inappropriate ads are shown. An aggregated experience is extremely advantageous to this watcher as it allows for single-time account set up, one-time platform navigation training for their children, and easy content exploration for a large and diverse variety of content.",
    posters: [posterHarryPotter, posterLOTR, posterAquaman, posterGhostbusters],
    painPoints: [
      "Desire for content separation between family, kid and partner content.",
      "Kid content needs to be managed with very specific limitations and functions.",
      "Account management is very important in this experience."
    ],
    goals: [
      "Opportunities for improvement involve creating tailored experiences for kids and adults."
    ],
    journey: [
      { stage: "Awareness", description: "Would like to watch content with partner/family" },
      { stage: "Consider", description: "Wants separately personalised viewing experiences" },
      { stage: "Retention", description: "Navigating multiple schedules to find time to watch" },
      { stage: "Future", description: "Appreciates convenience and ease of use" },
    ]
  },
  {
    number: 6,
    title: "The Rewatcher",
    titleLines: ["THE", "REWATCHER"],
    icon: rewatcherIcon,
    description: "This viewer enjoys rewatching content, often engaging in daily watching sessions, but are versatile in their viewing habits, capable of intentional watching, listening in the background, and binge-watching. Unlike the average viewer, they are not seeking new content but are focused on revisiting familiar favorites. These viewers tend to be neutral about ads, making decisions about their ad-free experiences based on their perceived frequency of use of a given service. Their ideal streaming experience centers around easy access to previously watched content, with management features being key. They value the ability to mark content they like, pick up where they left off, save content they are interested in, and have a history of content that they enjoy. As such, they want a streamlined experience and are uninterested in paying a high price for extra features. Opportunities for improvement involve providing a personalized experience of watch history.",
    posters: [posterHangover, posterDevilWearsPrada, posterWire, posterTheOC],
    painPoints: [
      "Frustrated by not being able to easily find content they want to watch.",
      "Confused by unclear information communication about availability and watch/unwatched content."
    ],
    goals: [
      "Enhanced and personalised watch history management.",
      "Ability to mark content they like and save content they are interested in."
    ],
    journey: [
      { stage: "Awareness", description: "Seeking specific content they want to rewatch" },
      { stage: "Consider", description: "Determines that Crave has the best offerings" },
      { stage: "Retention", description: "Wants to rewatch content easily" },
      { stage: "Future", description: "Appreciates potential for vast content offerings" },
    ]
  }
];
