const BehavioralTraitTable = () => {
  const leftColumn = [
    {
      trait: "Media Consumption Habits",
      items: ["Watching after work and on the weekend"]
    },
    {
      trait: "Frequency of Using Streaming Services",
      items: [
        "Free time, daily",
        "Weekend-like binge tendencies",
        "Watching alone",
        "Following release dates/schedules, planning their watching around new content"
      ]
    },
    {
      trait: "Preferred Devices for Streaming",
      items: [
        "Laptop",
        "Some individuals keep notes on the specific schedule they watch their content on"
      ]
    },
    {
      trait: "Attitude Towards Ads",
      items: ["Willing to have free content with ads, more likely to splurge on an ad-free plan"]
    },
    {
      trait: "Needs and Goals",
      isHeader: true
    },
    {
      trait: "Desire for Streaming Experience",
      items: [
        "New content clearly displayed",
        "Clean organization of \"saved\" content",
        "Content tags of new content",
        "Differentiation of different kinds of content (TV show versus movie content)"
      ]
    },
    {
      trait: "Convenience in Accessing Multiple Services in One Platform",
      items: [
        "Hyper convenient",
        "Do not have to switch from platform to platform; all of their content is in one place"
      ]
    },
    {
      trait: "Budget Considerations",
      items: ["It is great to have all of your content in one place, but if the price too high, you can only watch so much content in one month"]
    },
    {
      trait: "Challenges and Pain Points",
      isHeader: true
    },
    {
      trait: "Frustration with Streaming Services",
      items: [
        "If the saved content section is not intuitive, it is quite frustrating",
        "Disorganization of content, they want their content in the same place so they know how to access it"
      ]
    },
    {
      trait: "Problems with an Aggregated Watch Experience (Prime Video)",
      items: ["Not understand what content is and is not available to them"]
    },
    {
      trait: "Challenges with Navigating an",
      items: ["Difficulties with understanding what they have access to when searching for new content to watch"]
    }
  ];

  const rightColumn = [
    {
      section: "Aggregated Watch Experience (Prime Video)",
      isTitle: true
    },
    {
      trait: "Key Insights",
      isHeader: true
    },
    {
      trait: "Key Findings",
      items: ["There is a clear desire for information communication; many users really liked the idea of Prime video and this aggregated watch experience, they were left confused with the content they could and could not access"]
    },
    {
      trait: "Goals for the Aggregated Watch Experience",
      isHeader: true
    },
    {
      trait: "Goals",
      items: [
        "Being able to filter the packages that they do have access to, to see all of the content that is included with the package",
        "Notifications for scheduled/new release content"
      ]
    },
    {
      trait: "Opportunities for Improvement",
      isHeader: true
    },
    {
      trait: "Opportunities",
      items: [
        "Clear information delivery about packages",
        "Clean organization of content",
        "Personalization for notifications"
      ]
    },
    {
      trait: "Summary",
      isHeader: true
    },
    {
      trait: "Summary",
      content: "An entertainment-oriented consumer who avidly engages with streaming services to unwind after work and during leisure time, often binge-watching alone. They prioritize convenience and accessibility, preferring to stream content on their laptop. While they are open to advertisements for free content, they are more inclined to opt for ad-free plans for a seamless viewing experience. Their streaming habits are characterized by a desire for new and well-organized content, with a preference for platforms that offer clear displays of available shows and movies, easy content tagging, and a unified interface that consolidates multiple services. Frustrations arise from disorganized content libraries and difficulties navigating aggregated platforms like Prime Video, where confusion persists regarding available content and filtering options. Key insights reveal a strong desire for improved communication regarding available packages and features, along with personalized notifications for new releases."
    }
  ];

  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Table */}
        <table className="flex-1 text-sm border-collapse border border-foreground/30">
          <thead>
            <tr className="border-b border-foreground/30">
              <th className="p-2 text-left font-bold border-r border-foreground/30 w-1/3">Behavioral Trait</th>
              <th className="p-2 text-left font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {leftColumn.map((row, i) => (
              <tr key={i} className="border-b border-foreground/30">
                <td className={`p-2 border-r border-foreground/30 align-top ${row.isHeader ? "font-bold" : "font-medium"}`}>
                  {row.trait}
                </td>
                <td className="p-2 text-xs">
                  {row.items && (
                    <ul className="list-disc list-inside space-y-1">
                      {row.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Right Table */}
        <table className="flex-1 text-sm border-collapse border border-foreground/30">
          <tbody>
            {rightColumn.map((row, i) => (
              <tr key={i} className="border-b border-foreground/30">
                <td className={`p-2 border-r border-foreground/30 align-top w-1/3 ${row.isHeader || row.isTitle ? "font-bold" : "font-medium"}`}>
                  {row.trait || row.section}
                </td>
                <td className="p-2 text-xs">
                  {row.items && (
                    <ul className="list-disc list-inside space-y-1">
                      {row.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {row.content && <p className="leading-relaxed">{row.content}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BehavioralTraitTable;
