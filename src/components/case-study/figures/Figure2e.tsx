"use client";

import { motion } from "framer-motion";
import ScalingContainer from "../ScalingContainer";

const Figure2e = () => {
  const behavioralTraits = [
    {
      category: "Media Consumption Habits",
      content: ["Watching after work and on the weekend"]
    },
    {
      category: "Frequency of Using Streaming Services",
      content: [
        "Free time, daily",
        "Weekend-like binge tendencies", 
        "Watching alone",
        "Following release dates/schedules, planning their watching around new content"
      ]
    },
    {
      category: "Preferred Devices for Streaming",
      content: [
        "Laptop",
        "Some individuals keep notes on the specific schedule they watch their content on"
      ]
    },
    {
      category: "Attitude Towards Ads",
      content: ["Willing to have free content with ads, more likely to splurge on an ad-free plan"]
    }
  ];

  const needsAndGoals = [
    {
      category: "Desire for Streaming Experience",
      content: [
        "New content clearly displayed",
        "Clean organization of \"saved\" content",
        "Content tags of new content",
        "Differentiation of different kinds of content (TV show versus movie content)"
      ]
    },
    {
      category: "Convenience in Accessing Multiple Services in One Platform",
      content: [
        "Hyper convenient",
        "Do not have to switch from platform to platform; all of their content is in one place"
      ]
    },
    {
      category: "Budget Considerations",
      content: ["It is great to have all of your content in one place, but if the price too high, you can only watch so much content in one month"]
    }
  ];

  const challengesAndPainPoints = [
    {
      category: "Frustration with Streaming Services",
      content: [
        "If the saved content section is not intuitive, it is quite frustrating",
        "Disorganization of content, they want their content in the same place so they know how to access it"
      ]
    },
    {
      category: "Problems with an Aggregated Watch Experience (Prime Video)",
      content: ["Not understand what content is and is not available to them"]
    },
    {
      category: "Challenges with Navigating an",
      content: ["Difficulties with understanding what they have access to when searching for new content to watch"]
    }
  ];

  const rightColumnData = {
    keyFindings: [
      "There is a clear desire for information communication; many users really liked the idea of Prime video and this aggregated watch experience, they were left confused with the content they could and could not access"
    ],
    goals: [
      "Being able to filter the packages that they do have access to, to see all of the content that is included with the package",
      "Notifications for scheduled/new release content"
    ],
    opportunities: [
      "Clear information delivery about packages",
      "Clean organization of content",
      "Personalization for notifications"
    ],
    summary: "An entertainment-oriented consumer who avidly engages with streaming services to unwind after work and during leisure time, often binge-watching alone. They prioritize convenience and accessibility, preferring to stream content on their laptop. While they are open to advertisements for free content, they are more inclined to opt for ad-free plans for a seamless viewing experience. Their streaming habits are characterized by a desire for new and well-organized content, with a preference for platforms that offer clear displays of available shows and movies, easy content tagging, and a unified interface that consolidates multiple services. Frustrations arise from disorganized content libraries and difficulties navigating aggregated platforms like Prime Video, where confusion persists regarding available content and filtering options. Key insights reveal a strong desire for improved communication regarding available packages and features, along with personalized notifications for new releases."
  };

  const TableRow = ({ category, content, index }: { category: string; content: string[]; index: number }) => (
    <motion.tr
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
    >
      <td className="border border-foreground/40 p-2 font-display text-sm align-top w-[35%] leading-tight">
        {category}
      </td>
      <td className="border border-foreground/40 p-2 text-sm align-top">
        <ul className="list-disc list-outside ml-4 space-y-0.5">
          {content.map((item, i) => (
            <li key={i} className="font-display leading-tight">{item}</li>
          ))}
        </ul>
      </td>
    </motion.tr>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <motion.tr
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <td colSpan={2} className="border border-foreground/40 p-2 font-display text-sm bg-foreground/[0.07]">
        {title}
      </td>
    </motion.tr>
  );

  return (
    <ScalingContainer designWidth={720}>
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-0">
        {/* Left Column - Behavioral Traits */}
        <div>
          <table className="w-full border-collapse text-[#343434]">
            <tbody>
              <SectionHeader title="Behavioral Trait" />
              {behavioralTraits.map((trait, idx) => (
                <TableRow key={idx} category={trait.category} content={trait.content} index={idx} />
              ))}
              <SectionHeader title="Needs and Goals" />
              {needsAndGoals.map((item, idx) => (
                <TableRow key={idx} category={item.category} content={item.content} index={idx + 4} />
              ))}
              <SectionHeader title="Challenges and Pain Points" />
              {challengesAndPainPoints.map((item, idx) => (
                <TableRow key={idx} category={item.category} content={item.content} index={idx + 7} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column - Aggregated Watch Experience */}
        <div>
          <table className="w-full border-collapse text-[#343434] h-full">
            <tbody>
              <motion.tr whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <td colSpan={2} className="border border-foreground/40 p-2 font-display text-sm bg-foreground/[0.07]">
                  Aggregated Watch Experience (Prime Video)
                </td>
              </motion.tr>
              
              <motion.tr whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                <td colSpan={2} className="border border-foreground/40 p-2 font-display text-sm bg-foreground/[0.04]">
                  Key Insights
                </td>
              </motion.tr>
              <motion.tr whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                <td className="border border-foreground/40 p-2 font-display text-sm align-top w-[30%]">
                  Key Findings
                </td>
                <td className="border border-foreground/40 p-2 text-sm align-top">
                  <ul className="list-disc list-outside ml-4 space-y-0.5">
                    {rightColumnData.keyFindings.map((item, i) => (
                      <li key={i} className="font-display leading-tight">{item}</li>
                    ))}
                  </ul>
                </td>
              </motion.tr>

              <motion.tr whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                <td colSpan={2} className="border border-foreground/40 p-2 font-display text-sm bg-foreground/[0.04]">
                  Goals for the Aggregated Watch Experience
                </td>
              </motion.tr>
              <motion.tr whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                <td className="border border-foreground/40 p-2 font-display text-sm align-top">
                  Goals
                </td>
                <td className="border border-foreground/40 p-2 text-sm align-top">
                  <ul className="list-disc list-outside ml-4 space-y-0.5">
                    {rightColumnData.goals.map((item, i) => (
                      <li key={i} className="font-display leading-tight">{item}</li>
                    ))}
                  </ul>
                </td>
              </motion.tr>

              <motion.tr whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                <td colSpan={2} className="border border-foreground/40 p-2 font-display text-sm bg-foreground/[0.04]">
                  Opportunities for Improvement
                </td>
              </motion.tr>
              <motion.tr whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                <td className="border border-foreground/40 p-2 font-display text-sm align-top">
                  Opportunities
                </td>
                <td className="border border-foreground/40 p-2 text-sm align-top">
                  <ul className="list-disc list-outside ml-4 space-y-0.5">
                    {rightColumnData.opportunities.map((item, i) => (
                      <li key={i} className="font-display leading-tight">{item}</li>
                    ))}
                  </ul>
                </td>
              </motion.tr>

              <motion.tr whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                <td className="border border-foreground/40 p-2 font-display text-sm align-top bg-foreground/[0.04]">
                  Summary
                </td>
                <td className="border border-foreground/40 p-2 text-sm align-top">
                  <p className="font-display leading-relaxed">{rightColumnData.summary}</p>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>
          </div>
      </motion.div>
    </ScalingContainer>
  );
};

export default Figure2e;