"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const iconAbout = "/images/icon-about.png";
const iconCaseStudies = "/images/icon-case-studies.png";
const iconContact = "/images/icon-contact.png";
const iconResumeNav = "/images/icon-resume-nav.png";

interface NavSection {
  id: string;
  label: string;
  icon: string;
  content?: string;
  href?: string;
}

const caseStudies = [
  {
    title: "On developing personas for a multi-brand hub",
    tags: "moderated interviews, personas, journeys, comparative analysis",
    href: "/case-study-1",
  },
  {
    title: "On building an accessible usability benchmarking system for a streaming service",
    tags: "usability testing, accessible design",
    href: "/case-study-2",
  },
  {
    title: "On redesigning ad experiences for business news",
    tags: "unmoderated interviews, competitor analysis",
    href: "/case-study-3",
  },
  {
    title: "On prototyping a speech-affirming video conferencing software for people who stutter",
    tags: "co-design interviews, thematic analysis, prototyping",
    href: "/case-study-4",
  },
];

const navSections: NavSection[] = [
  {
    id: "about",
    label: "ABOUT",
    icon: iconAbout,
    content: `Hi! My name is Anoushka Lad, and among other things, I'm a User Experience Researcher.\n\nAs a bona fide research enthusiast, I'm always on the lookout for opportunities to understand user behaviors and create digital experiences that balance business priorities with real human needs.`,
    href: "/about",
  },
  {
    id: "case-studies",
    label: "CASE STUDIES",
    icon: iconCaseStudies,
  },
  {
    id: "contact",
    label: "CONTACT",
    icon: iconContact,
    content: "Get in touch for collaborations, research opportunities, or just to say hello.",
    href: "/contact",
  },
  {
    id: "resume",
    label: "RESUME",
    icon: iconResumeNav,
    content: "View my complete professional background, education, and experience.",
    href: "/resume",
  },
];

const NavigationCard = () => {
  const [expandedId, setExpandedId] = useState<string>("about");

  const toggleSection = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <div className="group relative w-72 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Vintage double-line frame with architectural corner accents */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
        {/* Outer thin line */}
        <rect
          x="4" y="4"
          width="calc(100% - 8px)" height="calc(100% - 8px)"
          fill="none"
          stroke="hsl(30 15% 28%)"
          strokeWidth="1"
        />

        {/* Inner thin line */}
        <rect
          x="10" y="10"
          width="calc(100% - 20px)" height="calc(100% - 20px)"
          fill="none"
          stroke="hsl(30 15% 28%)"
          strokeWidth="0.75"
        />
      </svg>

      {/* Corner accents - architectural, engraved style */}
      {/* Top-left */}
      <svg className="absolute top-0 left-0 w-8 h-8 pointer-events-none z-10" viewBox="0 0 32 32">
        <line x1="4" y1="4" x2="14" y2="4" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="4" y1="4" x2="4" y2="14" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="16" y2="10" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <line x1="10" y1="10" x2="10" y2="16" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <rect x="3" y="3" width="3" height="3" fill="hsl(30 15% 28%)" opacity="0.4" />
      </svg>

      {/* Top-right */}
      <svg className="absolute top-0 right-0 w-8 h-8 pointer-events-none z-10" viewBox="0 0 32 32">
        <line x1="28" y1="4" x2="18" y2="4" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="28" y1="4" x2="28" y2="14" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="22" y1="10" x2="16" y2="10" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <line x1="22" y1="10" x2="22" y2="16" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <rect x="26" y="3" width="3" height="3" fill="hsl(30 15% 28%)" opacity="0.4" />
      </svg>

      {/* Bottom-left */}
      <svg className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none z-10" viewBox="0 0 32 32">
        <line x1="4" y1="28" x2="14" y2="28" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="4" y1="28" x2="4" y2="18" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="10" y1="22" x2="16" y2="22" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <line x1="10" y1="22" x2="10" y2="16" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <rect x="3" y="26" width="3" height="3" fill="hsl(30 15% 28%)" opacity="0.4" />
      </svg>

      {/* Bottom-right */}
      <svg className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none z-10" viewBox="0 0 32 32">
        <line x1="28" y1="28" x2="18" y2="28" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="28" y1="28" x2="28" y2="18" stroke="hsl(30 15% 28%)" strokeWidth="1.5" />
        <line x1="22" y1="22" x2="16" y2="22" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <line x1="22" y1="22" x2="22" y2="16" stroke="hsl(30 15% 28%)" strokeWidth="1" />
        <rect x="26" y="26" width="3" height="3" fill="hsl(30 15% 28%)" opacity="0.4" />
      </svg>

      {/* Content container */}
      <div className="relative z-10 py-5 px-2">
        {navSections.map((section, index) => (
          <div key={section.id}>
            {index > 0 && (
              <div
                className="mx-6 my-0"
                style={{
                  borderBottom: '1px dotted hsl(30 15% 55%)',
                }}
              />
            )}

            {/* Header */}
            <motion.div
              className="flex items-center justify-between py-3 px-4 cursor-pointer select-none"
              onClick={() => toggleSection(section.id)}
              whileHover={{ backgroundColor: "hsl(38 30% 88% / 0.3)" }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center">
                  <img src={section.icon} alt={section.label} className="w-7 h-7 object-contain" />
                </div>
                <span
                  className="text-sm font-sans font-medium tracking-widest"
                  style={{ color: 'hsl(30 15% 22%)' }}
                >
                  {section.label}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedId === section.id ? 0 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {expandedId === section.id ? (
                  <Minus className="w-4 h-4" style={{ color: 'hsl(30 15% 40%)' }} />
                ) : (
                  <Plus className="w-4 h-4" style={{ color: 'hsl(30 15% 40%)' }} />
                )}
              </motion.div>
            </motion.div>

            {/* Content */}
            <AnimatePresence initial={false}>
              {expandedId === section.id && (section.content || section.id === "case-studies") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-1">
                    {section.id === "about" && section.content && (
                      <div className="space-y-3">
                        {section.content.split('\n\n').map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-sm leading-relaxed font-serif"
                            style={{ color: 'hsl(30 15% 35%)' }}
                          >
                            {paragraph}
                          </p>
                        ))}
                        {section.href && (
                          <Link
                            href={section.href}
                            className="text-sm underline underline-offset-4 hover:text-accent transition-colors font-serif italic mt-1 inline-block"
                            style={{ color: 'hsl(30 15% 30%)' }}
                          >
                            Know more about me →
                          </Link>
                        )}
                      </div>
                    )}
                    {section.id === "case-studies" && (
                      <div className="space-y-4">
                        {caseStudies.map((cs, i) => (
                          <Link key={i} href={cs.href} className="block group/cs">
                            <div className="flex items-start gap-2">
                              <span
                                className="mt-1.5 text-xs"
                                style={{ color: 'hsl(30 15% 35%)' }}
                              >✦</span>
                              <div>
                                <p
                                  className="text-sm leading-relaxed font-serif group-hover/cs:underline"
                                  style={{ color: 'hsl(30 15% 30%)' }}
                                >
                                  {cs.title}
                                </p>
                                <p
                                  className="text-xs italic font-serif mt-0.5"
                                  style={{ color: 'hsl(30 15% 50%)' }}
                                >
                                  {cs.tags}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    {section.id !== "about" && section.id !== "case-studies" && section.content && (
                      <p
                        className="text-sm leading-relaxed mb-3 font-serif italic"
                        style={{ color: 'hsl(30 15% 35%)' }}
                      >
                        {section.content}
                      </p>
                    )}
                    {section.id !== "about" && section.id !== "case-studies" && section.href && (
                      <Link
                        href={section.href}
                        className="text-sm underline underline-offset-4 hover:text-accent transition-colors font-sans"
                        style={{ color: 'hsl(30 15% 30%)' }}
                      >
                        more information →
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationCard;
