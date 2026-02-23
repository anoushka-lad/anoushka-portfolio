"use client";
import { motion, AnimatePresence } from "framer-motion";
import ScalingContainer from "../ScalingContainer";
const rotatorIcons = "/images/rotator-icons.png";
const slide1 = "/images/rotator-slide-1.png";
const slide2 = "/images/rotator-slide-2.png";
const slide3 = "/images/rotator-slide-3.png";
const slide4 = "/images/rotator-slide-4.png";
const slide5 = "/images/rotator-slide-5.png";
const slide6 = "/images/rotator-slide-6.png";
const slide7 = "/images/rotator-slide-7.png";
const slide8 = "/images/rotator-slide-8.png";
const slide9 = "/images/rotator-slide-9.png";

interface SlideData {
  category: string;
  title: string;
  description: string;
  source: string;
  image: string;
}

const slides: SlideData[] = [
  {
    category: "Clear information communication",
    title: "Content distinction:",
    description: "clear use of visual and textual cues to indicate content require additional subscription",
    source: "PrimeVideo homepage showing included and pay-per-view content",
    image: slide1
  },
  {
    category: "Clear information communication",
    title: "Subscription clarity:",
    description: "detailed and comparative breakdowns of subscription tiers and plans.",
    source: "Netflix FAQ",
    image: slide2
  },
  {
    category: "Clear information communication",
    title: "Content information:",
    description: "essential details (e.g. original language, year of release, genre, etc)",
    source: "Tubi content card preview",
    image: slide3
  },
  {
    category: "Intuitive content organization",
    title: "Intuitive navigation:",
    description: "clear organisation and layout for easy navigation and distinction between brands and channels",
    source: "AppleTV sidebar navigation",
    image: slide4
  },
  {
    category: "Intuitive content organization",
    title: "Language-specific collections:",
    description: "rotators and pages to support the distinction and discovery of French-language content",
    source: "Netflix French language-specific collection",
    image: slide5
  },
  {
    category: "Intuitive content organization",
    title: "Specialty content curation:",
    description: "curated rotators and sections to cater to different viewing experiences (e.g. bingeable content)",
    source: "PrimeVideo categories page",
    image: slide6
  },
  {
    category: "Robust search experience",
    title: "Filter categories:",
    description: "abilities to filter search results by varied and simultaneous categories (e.g. brand, language)",
    source: "JustWatch filters",
    image: slide7
  },
  {
    category: "Robust search experience",
    title: "Varied search capabilities:",
    description: "support for searching by categories beyond content title (e.g. genre, language)",
    source: "Netflix search bar",
    image: slide8
  },
  {
    category: "Robust search experience",
    title: "Sorting options:",
    description: "ability to sort search results by different priorities (e.g. chronological, alphabetical)",
    source: "Reelgood \"sort by\" options",
    image: slide9
  }
];

export const SLIDE_COUNT = slides.length;

interface Figure4aRotatorProps {
  currentIndex: number;
}

const Figure4aRotator = ({ currentIndex }: Figure4aRotatorProps) => {
  const currentSlide = slides[currentIndex];

  return (
    <ScalingContainer designWidth={700}>
      {/* Frame with triple-border (matching PersonaOverlay style) */}
      <div className="relative">
        {/* Border frame SVG overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
          {/* Outer thick frame */}
          <rect
            x="3" y="3"
            width="calc(100% - 6px)" height="calc(100% - 6px)"
            fill="none"
            stroke="hsl(35 18% 35%)"
            strokeWidth="3"
            rx="4"
          />
          {/* Inner dotted border */}
          <rect
            x="8" y="8"
            width="calc(100% - 16px)" height="calc(100% - 16px)"
            fill="none"
            stroke="hsl(35 18% 45%)"
            strokeWidth="1"
            strokeDasharray="4 2"
            rx="3"
          />
          {/* Innermost solid border */}
          <rect
            x="12" y="12"
            width="calc(100% - 24px)" height="calc(100% - 24px)"
            fill="none"
            stroke="hsl(35 18% 50%)"
            strokeWidth="1"
            rx="2"
          />
        </svg>

        {/* Content inset from borders */}
        <div className="relative p-6">
          {/* Top decorative line with icons */}
          <div className="relative flex items-center justify-center mt-[2%] mb-5 mx-[5%]">
            {/* Left line segment */}
            <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(35 18% 45%)' }} />
            {/* Icons in center */}
            <div className="px-4">
              <img
                src={rotatorIcons}
                alt="Category icons"
                className="h-[43px]"
              />
            </div>
            {/* Right line segment */}
            <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(35 18% 45%)' }} />
          </div>

          {/* Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-[2fr_3fr] gap-6 min-h-[280px]"
            >
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center">
                <h4
                  className="font-display text-[16px] leading-[1.1] mb-3"
                  style={{ color: '#343434' }}
                >
                  {currentSlide.category}
                </h4>
                <p
                  className="font-display text-[16px] leading-[1.1] mb-4"
                  style={{ color: '#343434' }}
                >
                  <span>{currentSlide.title}</span>{" "}
                  {currentSlide.description}
                </p>
                <p
                  className="font-display text-[16px] leading-[1.1]"
                  style={{ color: 'rgba(52, 52, 52, 0.55)' }}
                >
                  Source: {currentSlide.source}
                </p>
              </div>

              {/* Right side - Image */}
              <div className="flex items-center justify-center rounded-sm">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="max-w-full max-h-[384px] object-contain rounded-sm"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </ScalingContainer>
  );
};

export default Figure4aRotator;
