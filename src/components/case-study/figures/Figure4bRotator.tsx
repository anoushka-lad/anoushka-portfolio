"use client";
import { motion, AnimatePresence } from "framer-motion";
import ScalingContainer from "../ScalingContainer";
const rotatorIcons = "/images/rotator-icons.png";
const slide1 = "/images/rotator-4b-slide-1.png";
const slide2 = "/images/rotator-4b-slide-2.png";
const slide3 = "/images/rotator-4b-slide-3.png";
const slide4 = "/images/rotator-4b-slide-4.png";
const slide5 = "/images/rotator-4b-slide-5.png";
const slide6 = "/images/rotator-4b-slide-6.png";
const slide7 = "/images/rotator-4b-slide-7.png";
const slide8 = "/images/rotator-4b-slide-8.png";
const slide9 = "/images/rotator-4b-slide-9.png";

interface SlideData {
  category: string;
  title: string;
  description: string;
  bullets?: string[];
  source: string;
  image: string;
}

const slides: SlideData[] = [
  {
    category: "Custom content engagement",
    title: "Notification options:",
    description: "ability to opt in for new releases of content previously watched or currently being watched",
    source: "Netflix promo teaser with \"Remind Me\" button",
    image: slide1
  },
  {
    category: "Custom content engagement",
    title: "Intelligent watch histories:",
    description: "promotion of new releases of watched content and easy access to watched content",
    source: "Netflix \"Continued Watching\" rotator",
    image: slide2
  },
  {
    category: "Custom content engagement",
    title: "Content badges:",
    description: "option to categorise content with additional labels (e.g. interested, already watched)",
    source: "Hulu badges",
    image: slide3
  },
  {
    category: "Custom content engagement",
    title: "Advanced saved content features:",
    description: "improved organisation capabilities for content of interest",
    source: "Hulu \"My Stuff\" page",
    image: slide4
  },
  {
    category: "Custom content engagement",
    title: "Advanced saved content features:",
    description: "improved organisation capabilities for content of interest",
    source: "Hulu \"My Stuff\" page",
    image: slide5
  },
  {
    category: "Custom content engagement",
    title: "Language toggle option:",
    description: "easy and accessible toggle for switching between language-specific experiences",
    source: "Netflix navigation bar option to \"Browse by Language\"",
    image: slide6
  },
  {
    category: "Enhanced account management",
    title: "Personalised recommendations:",
    description: "tailored suggestions based on individual viewing tendencies and preferences",
    source: "Netflix personalised rotators",
    image: slide7
  },
  {
    category: "Enhanced account management",
    title: "Language-specific customisation:",
    description: "features that supports language-specific viewing preferences",
    source: "Netflix language settings",
    image: slide8
  },
  {
    category: "Enhanced account management",
    title: "Children's profile:",
    description: "designated profile option with additional restrictions and management features:",
    bullets: [
      "Content restrictions: age-appropriate recommendations",
      "Purchasing restrictions: limited access to \"store\"",
      "Family-friendly ads: limited exposure to inappropriate subject matter",
      "Simplified navigation: kid-tailored and easy layout"
    ],
    source: "Disney+ Junior Mode",
    image: slide9
  }
];

export const SLIDE_COUNT_4B = slides.length;

interface Figure4bRotatorProps {
  currentIndex: number;
}

const Figure4bRotator = ({ currentIndex }: Figure4bRotatorProps) => {
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

                {currentSlide.bullets ? (
                  <>
                    <p
                      className="font-display text-[16px] leading-[1.1] mb-2"
                      style={{ color: '#343434' }}
                    >
                      <span>{currentSlide.title}</span>{" "}
                      {currentSlide.description}
                    </p>
                    <ul className="font-display text-[16px] leading-[1.1] mb-4 ml-4 space-y-1" style={{ color: '#343434' }}>
                      {currentSlide.bullets.map((bullet, idx) => (
                        <li key={idx} className="list-disc">{bullet}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p
                    className="font-display text-[16px] leading-[1.1] mb-4"
                    style={{ color: '#343434' }}
                  >
                    <span>{currentSlide.title}</span>{" "}
                    {currentSlide.description}
                  </p>
                )}

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

export default Figure4bRotator;
