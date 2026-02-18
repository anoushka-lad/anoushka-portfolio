"use client";
import { useState } from "react";
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

const Figure4aRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <ScalingContainer designWidth={700}>
      {/* Top decorative line with icons */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Left line segment */}
        <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(35 18% 45%)' }} />
        {/* Icons in center */}
        <div className="px-4">
          <img 
            src={rotatorIcons} 
            alt="Category icons" 
            className="h-12"
          />
        </div>
        {/* Right line segment */}
        <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(35 18% 45%)' }} />
      </div>

      {/* Main rotator container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 hover:opacity-70 transition-opacity"
          aria-label="Previous slide"
        >
          <svg 
            viewBox="0 0 24 40" 
            className="w-5 h-10"
            style={{ color: 'hsl(35 18% 35%)' }}
          >
            {/* Double chevron left */}
            <path 
              d="M18 4 L6 20 L18 36" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M22 4 L10 20 L22 36" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 hover:opacity-70 transition-opacity"
          aria-label="Next slide"
        >
          <svg 
            viewBox="0 0 24 40" 
            className="w-5 h-10"
            style={{ color: 'hsl(35 18% 35%)' }}
          >
            {/* Double chevron right */}
            <path 
              d="M6 4 L18 20 L6 36" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M2 4 L14 20 L2 36" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Frame with decorative corners */}
        <div 
          className="relative mx-8 p-1"
          style={{ 
            border: '2px solid hsl(35 18% 40%)',
          }}
        >
          {/* Inner frame */}
          <div 
            className="relative p-6"
            style={{ 
              border: '1px solid hsl(35 18% 50%)',
            }}
          >
            {/* Corner decorations - Top Left */}
            <div className="absolute -top-1 -left-1 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full" style={{ color: 'hsl(35 18% 40%)' }}>
                <path d="M14 2 L2 2 L2 14" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            
            {/* Corner decorations - Top Right */}
            <div className="absolute -top-1 -right-1 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full" style={{ color: 'hsl(35 18% 40%)' }}>
                <path d="M2 2 L14 2 L14 14" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            
            {/* Corner decorations - Bottom Left */}
            <div className="absolute -bottom-1 -left-1 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full" style={{ color: 'hsl(35 18% 40%)' }}>
                <path d="M2 2 L2 14 L14 14" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            
            {/* Corner decorations - Bottom Right */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4">
              <svg viewBox="0 0 16 16" className="w-full h-full" style={{ color: 'hsl(35 18% 40%)' }}>
                <path d="M14 2 L14 14 L2 14" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Slide Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-6 min-h-[280px]"
              >
                {/* Left side - Text content */}
                <div className="flex flex-col justify-center">
                  <h4
                    className="font-display text-sm mb-3"
                    style={{ color: '#343434' }}
                  >
                    {currentSlide.category}
                  </h4>
                  <p
                    className="font-display text-sm leading-relaxed mb-4"
                    style={{ color: '#343434' }}
                  >
                    <span>{currentSlide.title}</span>{" "}
                    {currentSlide.description}
                  </p>
                  <p
                    className="font-display text-sm"
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
                    className="max-w-full max-h-[320px] object-contain rounded-sm"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Page number */}
        <div className="flex justify-center mt-4">
          <span
            className="font-display text-sm"
            style={{ color: '#343434' }}
          >
            {currentIndex + 1}
          </span>
        </div>
      </div>
    </ScalingContainer>
  );
};

export default Figure4aRotator;
