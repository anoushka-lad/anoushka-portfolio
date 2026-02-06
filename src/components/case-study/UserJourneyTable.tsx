interface UserJourneyTableProps {
  personaName?: string;
}

const UserJourneyTable = ({ personaName = "Platform Surfer" }: UserJourneyTableProps) => {
  const stages = ["Awareness", "Consider", "Retention", "Advocacy", "Future AWE"];
  const rows = [
    {
      label: "Thinking",
      cells: [
        "Would like access to more content",
        "Appreciates the timely releases of content",
        "Wants to continue to watch weekly releases",
        null,
        "Appreciates the convenience of many services on one platform"
      ]
    },
    {
      label: "Doing",
      cells: [
        "Exploring pricing and content on different platforms",
        "Subscribing to BMP without ads",
        "Watches content on BMP alongside other services",
        null,
        "Adding and canceling additional channels/subscriptions while keeping service"
      ]
    },
    {
      label: "Feeling",
      highlight: true,
      cells: [
        "Interested in BMP's content offerings",
        "Sustained interest because of new and fresh content",
        "Might consider cancelling BMP temporarily to cut costs",
        "Prioritising content and convenience over all else",
        "Happy that there is the ease of multiple platforms and the ability to \"jump around\" within a single space"
      ]
    },
    {
      label: "Pain Points",
      cells: [
        null,
        null,
        "Difficulties keeping track of weekly content releases",
        null,
        "Disorganized content libraries and navigating available content"
      ]
    },
    {
      label: "Opportunities",
      cells: [
        null,
        null,
        "Personalized notifications for new releases",
        null,
        "Enhanced information communication and organization"
      ]
    }
  ];

  return (
    <div className="w-full overflow-x-auto py-4">
      <table className="w-full text-sm border-collapse border border-foreground/30">
        <thead>
          <tr className="border-b border-foreground/30">
            <th className="p-2 text-left font-bold border-r border-foreground/30 min-w-[100px]">{personaName}</th>
            {stages.map((stage, i) => (
              <th 
                key={stage} 
                className={`p-2 text-left font-normal border-r border-foreground/30 min-w-[120px] ${
                  stage === "Advocacy" ? "text-red-600" : ""
                }`}
              >
                {stage}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-foreground/30">
              <td className={`p-2 border-r border-foreground/30 font-medium ${row.highlight ? "text-red-600" : ""}`}>
                {row.label}
              </td>
              {row.cells.map((cell, i) => (
                <td 
                  key={i} 
                  className={`p-2 border-r border-foreground/30 text-xs leading-relaxed ${
                    row.highlight ? "text-red-600" : ""
                  }`}
                >
                  {cell || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserJourneyTable;
