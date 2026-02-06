import { motion } from "framer-motion";
import FigureWrapper from "./FigureWrapper";
import Figure4aRotator from "./figures/Figure4aRotator";
import Figure4bRotator from "./figures/Figure4bRotator";

const RecommendationsSection = () => {
  return (
    <section className="section-padding pt-8 pb-8 md:pt-10 md:pb-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Title with sunburst icon */}
        <div className="flex items-center gap-4 mb-6">
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * Math.PI / 180;
              const x1 = 20 + Math.cos(angle) * 8;
              const y1 = 20 + Math.sin(angle) * 8;
              const x2 = 20 + Math.cos(angle) * 16;
              const y2 = 20 + Math.sin(angle) * 16;
              return (
                <line 
                  key={i} 
                  x1={x1} y1={y1} x2={x2} y2={y2} 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  className="text-foreground" 
                />
              );
            })}
            <circle cx="20" cy="20" r="6" fill="currentColor" className="text-foreground" />
          </svg>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            The Recommendations
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-foreground/30 mb-8" />

        {/* Intro Text */}
        <motion.p
          className="font-sans text-base leading-relaxed text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Recommendations for our aggregated watch experience were sorted into three categories:
        </motion.p>

        {/* Recommendation 1 */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="font-serif font-bold text-lg mb-4">
            1. Making content discoverability and findability seamless
          </h3>
          <p className="font-sans text-base leading-relaxed text-foreground mb-6">
            Content discovery works best when the service reduces decision friction, the catalogue is legible at a glance and lets users either browse intentionally or find precisely (Rotator 4a).
          </p>

          {/* Figure 4a Rotator */}
          <FigureWrapper caption="Potential features to address personas' pain points related to content discoverability and findability" figureNumber="Rotator 4a">
            <Figure4aRotator />
          </FigureWrapper>
        </motion.div>

        {/* Recommendation 2 */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-serif font-bold text-lg mb-4">
            2. Creating a meaningful bilingual experience
          </h3>
          <p className="font-sans text-base leading-relaxed text-foreground mb-6">
            Unilingual and bilingual users have different preferences and discovery priorities so clear language labeling and language-specific browsing becomes essential for finding the right titles fast.
          </p>

          {/* Unilingual users */}
          <div className="mb-6">
            <p className="font-serif italic text-base mb-3 text-foreground">Unilingual users</p>
            <ul className="font-sans text-base leading-relaxed text-foreground space-y-2 ml-6">
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
          <div className="mb-6">
            <p className="font-serif italic text-base mb-3 text-foreground">Bilingual users</p>
            <ul className="font-sans text-base leading-relaxed text-foreground space-y-2 ml-6">
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
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h3 className="font-serif font-bold text-lg mb-4">
            3. Elevating personalization and curation
          </h3>
          <p className="font-sans text-base leading-relaxed text-foreground mb-6">
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
