"use client";

import { useCallback, useEffect, useRef } from "react";
import { Dialog, DialogContentWithOverlay, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { personaData } from "./personaData";

const rusticPaperBg = "/images/rustic-paper-bg.jpg";

interface PersonaOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  personaNumber: number;
}

/* Simple 4-prong compass star */
const CompassStar = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 mb-1.5 flex-shrink-0" style={{ color: '#343434' }}>
    <path
      d="M12 0 L13.5 10.5 L12 9 L10.5 10.5 Z
         M24 12 L13.5 13.5 L15 12 L13.5 10.5 Z
         M12 24 L10.5 13.5 L12 15 L13.5 13.5 Z
         M0 12 L10.5 10.5 L9 12 L10.5 13.5 Z"
      fill="currentColor"
    />
  </svg>
);

const PersonaOverlay = ({ open, onOpenChange, personaNumber }: PersonaOverlayProps) => {
  const persona = personaData.find(p => p.number === personaNumber);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when persona changes
  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [open, personaNumber]);

  const handleClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  if (!persona) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContentWithOverlay
        overlayClassName="bg-black/40"
        hideClose
        className="max-w-[720px] w-[70vw] h-[60vh] max-h-[60vh] p-0 border-0 overflow-hidden rounded-sm
          md:w-[70vw] md:max-w-[720px] md:h-[60vh] md:max-h-[60vh]
          max-md:w-[90vw] max-md:max-w-none max-md:h-[80vh] max-md:max-h-[80vh]"
        style={{
          backgroundImage: `url(${rusticPaperBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label={`${persona.title} persona details`}
      >
        <VisuallyHidden>
          <DialogTitle>{persona.title} Persona</DialogTitle>
        </VisuallyHidden>

        {/* Border frame — static, matching PersonaCard style */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveAspectRatio="none">
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

        {/* Close button — matches nav chevron style */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-30 p-1 transition-opacity duration-200 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-sm"
          style={{ color: '#343434' }}
          aria-label="Close persona details"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 2 L12 10 L20 2 L22 4 L14 12 L22 20 L20 22 L12 14 L4 22 L2 20 L10 12 L2 4 Z" />
          </svg>
        </button>

        {/* Content area — inset from border */}
        <div className="absolute inset-[14px] z-10 flex flex-col md:flex-row overflow-hidden">

          {/* DESKTOP LEFT COLUMN — medallion + name, top-aligned (hidden on mobile) */}
          <div className="hidden md:flex md:w-[26%] flex-shrink-0 flex-col items-center gap-4 pt-8 px-4 pb-5"
            style={{
              backgroundImage: `url(${rusticPaperBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(35 18% 50%)" strokeWidth="0.5" strokeDasharray="2 1.5" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="0.8" />
              </svg>
              <img
                src={persona.icon}
                alt={persona.title}
                className="absolute inset-0 w-full h-full object-contain p-3"
              />
            </div>
            <h3
              className="cs-subheading-l1 text-center uppercase tracking-wide"
              style={{ color: '#343434', fontSize: 'clamp(13px, 1.1vw + 7px, 17px)' }}
            >
              {persona.titleLines.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < persona.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h3>
          </div>

          {/* MOBILE ONLY — stacked sticky header with divider */}
          <div className="md:hidden flex-shrink-0 sticky top-0 z-10 flex flex-col items-center gap-2 pt-4 pb-3 px-5 border-b"
            style={{
              borderColor: '#C1BFBA',
              backgroundImage: `url(${rusticPaperBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(35 18% 50%)" strokeWidth="0.5" strokeDasharray="2 1.5" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="0.8" />
              </svg>
              <img
                src={persona.icon}
                alt={persona.title}
                className="absolute inset-0 w-full h-full object-contain p-2"
              />
            </div>
            <h3
              className="cs-subheading-l1 text-center uppercase tracking-wide whitespace-nowrap"
              style={{ color: '#343434', fontSize: 'clamp(11px, 0.9vw + 6px, 15px)' }}
            >
              {persona.titleLines.join(' ')}
            </h3>
          </div>

          {/* SCROLLABLE CONTENT — right column on desktop, below header on mobile */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-4 md:pl-3 md:pr-5 md:py-5"
            style={{
              WebkitOverflowScrolling: 'touch',
              maskImage: 'linear-gradient(to bottom, transparent 0px, black 12px, black calc(100% - 12px), transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 12px, black calc(100% - 12px), transparent 100%)',
            }}
          >
            <div className="pr-1">
              {/* Description */}
              <p className="cs-body mb-5">
                {persona.description}
              </p>

              {/* Movie Posters — full-width flex */}
              {persona.posters.length > 0 && (
                <div className="flex gap-3 md:gap-4 mb-5">
                  {persona.posters.map((poster, idx) => (
                    <div
                      key={idx}
                      className="flex-1 min-w-0 aspect-[2/3] overflow-hidden rounded-sm shadow-md"
                      style={{ border: '2px solid hsl(35 18% 35%)' }}
                    >
                      <img
                        src={poster}
                        alt="Movie poster"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Poster placeholders */}
              {persona.posters.length === 0 && (
                <div className="flex gap-3 md:gap-4 mb-5">
                  {[1, 2, 3, 4].map((idx) => (
                    <div
                      key={idx}
                      className="flex-1 min-w-0 aspect-[2/3] overflow-hidden rounded-sm shadow-md flex items-center justify-center"
                      style={{
                        border: '2px solid hsl(35 18% 35%)',
                        backgroundColor: 'hsl(35 18% 85%)'
                      }}
                    >
                      <span className="cs-caption text-center px-1">
                        Poster {idx}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Pain Points & Goals — side by side */}
              <div className="flex flex-col md:flex-row gap-5 md:gap-8 mb-5">
                {/* Pain Points */}
                <div className="md:w-1/2">
                  <h4 className="cs-subheading-l1 mb-2">
                    Pain Points
                  </h4>
                  <ul className="cs-body list-disc pl-5 space-y-1">
                    {persona.painPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Goals */}
                <div className="md:w-1/2">
                  <h4 className="cs-subheading-l1 mb-2">
                    Goals
                  </h4>
                  <ul className="cs-body list-disc pl-5 space-y-1">
                    {persona.goals.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* User Journey */}
              <div className="mb-2">
                <h4 className="cs-subheading-l1 mb-3 text-center">
                  User Journey
                </h4>

                {/* Journey Timeline */}
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute top-[9px] md:top-[11px] left-6 right-6 h-px" style={{ backgroundColor: 'hsl(35 18% 30%)' }} />

                  {/* Journey stages */}
                  <div className="flex justify-between items-start relative px-1">
                    {persona.journey.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center" style={{ width: '24%' }}>
                        {/* 4-prong compass star */}
                        <CompassStar />

                        {/* Stage name */}
                        <span
                          className="cs-subheading-l1 mb-0.5"
                          style={{ fontSize: 'clamp(10px, 0.8vw + 6px, 14px)' }}
                        >
                          {item.stage}
                        </span>

                        {/* Description */}
                        <span
                          className="cs-body"
                          style={{
                            fontSize: 'clamp(9px, 0.6vw + 5px, 12px)',
                          }}
                        >
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContentWithOverlay>
    </Dialog>
  );
};

export default PersonaOverlay;
