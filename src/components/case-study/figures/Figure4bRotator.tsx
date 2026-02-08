"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const Figure4bRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full">
      {/* Top decorative line with icons */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Left line segment */}
        <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(35 18% 45%)' }} />
        {/* Icons in center */}
        <div className="px-4">
          <img 
            src={rotatorIcons} 
            alt="Category icons" 
            className="h-10 md:h-12"
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 p-2 hover:opacity-70 transition-opacity"
          aria-label="Previous slide"
        >
          <svg 
            viewBox="0 0 24 40" 
            className="w-4 h-8 md:w-5 md:h-10"
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
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 p-2 hover:opacity-70 transition-opacity"
          aria-label="Next slide"
        >
          <svg 
            viewBox="0 0 24 40" 
            className="w-4 h-8 md:w-5 md:h-10"
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
          className="relative mx-4 md:mx-8 p-1"
          style={{ 
            border: '2px solid hsl(35 18% 40%)',
          }}
        >
          {/* Inner frame */}
          <div 
            className="relative p-4 md:p-6"
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
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-[200px] md:min-h-[280px]"
              >
                {/* Left side - Text content */}
                <div className="flex flex-col justify-center">
                  <h4 
                    className="font-serif font-bold italic text-base md:text-lg mb-3"
                    style={{ color: 'hsl(35 18% 25%)' }}
                  >
                    {currentSlide.category}
                  </h4>
                  
                  {currentSlide.bullets ? (
                    <>
                      <p 
                        className="font-sans text-sm md:text-base leading-relaxed mb-2"
                        style={{ color: 'hsl(35 18% 30%)' }}
                      >
                        <span className="font-semibold">{currentSlide.title}</span>{" "}
                        {currentSlide.description}
                      </p>
                      <ul className="font-sans text-sm md:text-base leading-relaxed mb-4 ml-4 space-y-1" style={{ color: 'hsl(35 18% 30%)' }}>
                        {currentSlide.bullets.map((bullet, idx) => (
                          <li key={idx} className="list-disc">{bullet}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p 
                      className="font-sans text-sm md:text-base leading-relaxed mb-4"
                      style={{ color: 'hsl(35 18% 30%)' }}
                    >
                      <span className="font-semibold">{currentSlide.title}</span>{" "}
                      {currentSlide.description}
                    </p>
                  )}
                  
                  <p 
                    className="font-serif italic text-xs md:text-sm"
                    style={{ color: 'hsl(35 18% 45%)' }}
                  >
                    Source: {currentSlide.source}
                  </p>
                </div>

                {/* Right side - Image */}
                <div className="flex items-center justify-center rounded-sm">
                  <img 
                    src={currentSlide.image} 
                    alt={currentSlide.title}
                    className="max-w-full max-h-[280px] md:max-h-[320px] object-contain rounded-sm"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Page number */}
        <div className="flex justify-center mt-4">
          <span 
            className="font-serif text-lg md:text-xl"
            style={{ color: 'hsl(35 18% 35%)' }}
          >
            {currentIndex + 1}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Figure4bRotator;
