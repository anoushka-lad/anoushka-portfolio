"use client";

import { motion } from "framer-motion";
import FigureWrapper from "./FigureWrapper";
import SectionHeader from "./SectionHeader";
import Figure4aRotator from "./figures/Figure4aRotator";
import Figure4bRotator from "./figures/Figure4bRotator";

const RecommendationsSection = () => {
  return (
    <section className="section-padding">
      <div className="case-column">
        <SectionHeader title="The Recommendations" />

        {/* Intro Text */}
        <motion.p
          className="cs-body mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Recommendations for our aggregated watch experience were sorted into three categories:
        </motion.p>

        {/* Recommendation 1 */}
        <motion.div
          className="cs-content-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="cs-subheading-l1 mb-3">
            1. Making content discoverability and findability seamless
          </h3>
          <p className="cs-body mb-5">
            Content discovery works best when the service reduces decision friction, the catalogue is legible at a glance and lets users either browse intentionally or find precisely (Rotator 4a).
          </p>

          {/* Figure 4a Rotator */}
          <FigureWrapper caption="Potential features to address personas' pain points related to content discoverability and findability" figureNumber="Rotator 4a">
            <Figure4aRotator />
          </FigureWrapper>
        </motion.div>

        {/* Recommendation 2 */}
        <motion.div
          className="cs-content-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="cs-subheading-l1 mb-3">
            2. Creating a meaningful bilingual experience
          </h3>
          <p className="cs-body mb-5">
            Unilingual and bilingual users have different preferences and discovery priorities so clear language labeling and language-specific browsing becomes essential for finding the right titles fast.
          </p>

          {/* Unilingual users */}
          <div className="mb-5">
            <p className="cs-subheading-l2 mb-2 text-foreground">Unilingual users</p>
            <ul className="cs-body space-y-1.5 ml-6">
              <li className="list-disc">
                <span className="font-bold">English-only content:</span> Dominant English speakers tend not to seek content in French.
              </li>
              <li className="list-disc">
                <span className="font-bold">Language-specific features:</span> Dominant French speakers may watch English content, but prefer a dubbed or closed captions experience.
              </li>
              <li className="list-disc">
                <span className="font-bold">Single language experience:</span> Interested in curating single language specific profiles.
              </li>
            </ul>
          </div>

          {/* Bilingual users */}
          <div className="mb-5">
            <p className="cs-subheading-l2 mb-2 text-foreground">Bilingual users</p>
            <ul className="cs-body space-y-1.5 ml-6">
              <li className="list-disc">
                <span className="font-bold">Separate language-specific experiences:</span> Seek language content within language-specific experiences.
              </li>
              <li className="list-disc">
                <span className="font-bold">Language-specific features:</span> Values language specific features such as closed captions.
              </li>
              <li className="list-disc">
                <span className="font-bold">Content language information:</span> Clear indication of content's original language.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Recommendation 3 */}
        <motion.div
          className="cs-content-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h3 className="cs-subheading-l1 mb-3">
            3. Elevating personalization and curation
          </h3>
          <p className="cs-body mb-5">
            Personalization adds value when it turns viewing history and preferences into usable shortcuts without adding complexity (Rotator 4b).
          </p>

          {/* Figure 4b Rotator */}
          <FigureWrapper caption="Potential features to address personas' pain points related to personalization and curation" figureNumber="Rotator 4b">
            <Figure4bRotator />
          </FigureWrapper>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
