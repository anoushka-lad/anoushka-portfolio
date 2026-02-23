"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FigureWrapper from "./FigureWrapper";
import SectionHeader from "./SectionHeader";
import Figure4aRotator, { SLIDE_COUNT as SLIDE_COUNT_4A } from "./figures/Figure4aRotator";
import Figure4bRotator, { SLIDE_COUNT_4B } from "./figures/Figure4bRotator";

const RotatorPagination = ({
  currentIndex,
  slideCount,
  onPrev,
  onNext,
  onDotClick,
}: {
  currentIndex: number;
  slideCount: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (idx: number) => void;
}) => (
  <div className="flex items-center justify-center gap-3 mt-3">
    <button
      onClick={onPrev}
      className="p-1 hover:opacity-70 transition-opacity"
      aria-label="Previous slide"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" style={{ color: 'hsl(35 18% 35%)' }}>
        <path d="M15 4 L7 12 L15 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <div className="flex items-center gap-2">
      {Array.from({ length: slideCount }, (_, idx) => (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          aria-label={`Go to slide ${idx + 1}`}
          className="transition-opacity hover:opacity-70"
        >
          <svg width="9" height="9" viewBox="0 0 9 9">
            <circle
              cx="4.5" cy="4.5" r="3.5"
              fill={idx === currentIndex ? 'hsl(35 18% 35%)' : 'none'}
              stroke="hsl(35 18% 35%)"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      ))}
    </div>
    <button
      onClick={onNext}
      className="p-1 hover:opacity-70 transition-opacity"
      aria-label="Next slide"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" style={{ color: 'hsl(35 18% 35%)' }}>
        <path d="M9 4 L17 12 L9 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
);

const RecommendationsSection = () => {
  const [rotator4aIndex, setRotator4aIndex] = useState(0);
  const prev4a = () => setRotator4aIndex((i) => (i === 0 ? SLIDE_COUNT_4A - 1 : i - 1));
  const next4a = () => setRotator4aIndex((i) => (i === SLIDE_COUNT_4A - 1 ? 0 : i + 1));

  const [rotator4bIndex, setRotator4bIndex] = useState(0);
  const prev4b = () => setRotator4bIndex((i) => (i === 0 ? SLIDE_COUNT_4B - 1 : i - 1));
  const next4b = () => setRotator4bIndex((i) => (i === SLIDE_COUNT_4B - 1 ? 0 : i + 1));
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
            1. Making Content Discoverability and Findability Seamless
          </h3>
          <p className="cs-body mb-5">
            Content discovery works best when the service reduces decision friction, the catalogue is legible at a glance and lets users either browse intentionally or find precisely (Rotator 4a).
          </p>

          {/* Figure 4a Rotator */}
          <FigureWrapper
            caption="Potential features to address personas' pain points related to content discoverability and findability"
            figureNumber="Rotator 4a"
            belowContent={
              <RotatorPagination
                currentIndex={rotator4aIndex}
                slideCount={SLIDE_COUNT_4A}
                onPrev={prev4a}
                onNext={next4a}
                onDotClick={setRotator4aIndex}
              />
            }
          >
            <Figure4aRotator currentIndex={rotator4aIndex} />
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
            2. Creating a Meaningful Bilingual Experience
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
            3. Elevating Personalization and Curation
          </h3>
          <p className="cs-body mb-5">
            Personalization adds value when it turns viewing history and preferences into usable shortcuts without adding complexity (Rotator 4b).
          </p>

          {/* Figure 4b Rotator */}
          <FigureWrapper
            caption="Potential features to address personas' pain points related to personalization and curation"
            figureNumber="Rotator 4b"
            belowContent={
              <RotatorPagination
                currentIndex={rotator4bIndex}
                slideCount={SLIDE_COUNT_4B}
                onPrev={prev4b}
                onNext={next4b}
                onDotClick={setRotator4bIndex}
              />
            }
          >
            <Figure4bRotator currentIndex={rotator4bIndex} />
          </FigureWrapper>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
