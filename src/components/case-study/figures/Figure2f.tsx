"use client";

import { motion } from "framer-motion";

const Figure2f = () => {
  const stages = ["Awareness", "Consider", "Retention", "Advocacy", "Future AWE"];
  
  const journeyRows = [
    {
      dimension: "Thinking",
      isHighlight: false,
      cells: [
        "Would like access to more content",
        "Appreciates the timely releases of content",
        "Wants to continue to watch weekly releases",
        "",
        "Appreciates the convenience of many services on one platform"
      ]
    },
    {
      dimension: "Doing",
      isHighlight: false,
      cells: [
        "Exploring pricing and content on different platforms",
        "Subscribing to BMP without ads",
        "Watches content on BMP alongside other services",
        "",
        "Adding and canceling additional channels/subscriptions while keeping service"
      ]
    },
    {
      dimension: "Feeling",
      isHighlight: true,
      cells: [
        "Interested in BMP's content offerings",
        "Sustained interest because of new and fresh content",
        "Might consider cancelling BMP temporarily to cut costs",
        "Prioritising content and convenience over all else",
        "Happy that there is the ease of multiple platforms and the ability to \"jump around\" within a single space"
      ]
    },
    {
      dimension: "Pain Points",
      isHighlight: false,
      cells: [
        "",
        "",
        "Difficulties keeping track of weekly content releases",
        "",
        "Disorganized content libraries and navigating available content"
      ]
    },
    {
      dimension: "Opportunities",
      isHighlight: false,
      cells: [
        "",
        "",
        "Personalized notifications for new releases",
        "",
        "Enhanced information communication and organization"
      ]
    }
  ];

  return (
    <motion.div 
      className="w-full overflow-x-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <table className="min-w-[700px] w-full border-collapse text-foreground">
        <thead>
          <tr>
            <motion.th 
              className="border border-foreground/40 p-2.5 text-left font-serif font-bold text-sm md:text-base bg-foreground/[0.07] w-[100px]"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Platform Surfer
            </motion.th>
            {stages.map((stage, idx) => (
              <motion.th 
                key={idx} 
                className={`border border-foreground/40 p-2.5 text-center font-serif font-bold text-xs md:text-sm ${
                  stage === "Advocacy" ? "text-red-600" : ""
                }`}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                transition={{ duration: 0.2 }}
              >
                {stage}
              </motion.th>
            ))}
          </tr>
        </thead>
        <tbody>
          {journeyRows.map((row, rowIdx) => (
            <motion.tr 
              key={rowIdx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: rowIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.td 
                className={`border border-foreground/40 p-2.5 font-serif font-bold text-xs md:text-sm align-top bg-foreground/[0.04] ${
                  row.isHighlight ? "text-red-600" : ""
                }`}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.08)" }}
              >
                {row.dimension}
              </motion.td>
              {row.cells.map((cell, cellIdx) => (
                <motion.td 
                  key={cellIdx} 
                  className={`border border-foreground/40 p-2.5 font-serif text-xs md:text-sm align-top leading-relaxed ${
                    row.isHighlight ? "text-red-600 italic" : ""
                  }`}
                  whileHover={{ 
                    backgroundColor: "rgba(0,0,0,0.03)",
                    scale: cell ? 1.02 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {cell}
                </motion.td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Figure2f;