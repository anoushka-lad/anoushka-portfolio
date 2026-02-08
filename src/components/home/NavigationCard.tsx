"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { r } from "@/lib/utils";

const rusticPaperBg = "/images/rustic-paper-bg.jpg";

interface NavSection {
  id: string;
  label: string;
  icon: React.FC<{ className?: string }>;
  content?: string;
  href?: string;
}

// Detailed vintage-style icons
const AboutIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="8" r="4" />
    <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
    <path d="M12 4v-2M8 6l-1-1M16 6l1-1" strokeWidth="0.75" opacity="0.5" />
    <circle cx="12" cy="8" r="6" strokeDasharray="1 2" opacity="0.3" />
  </svg>
);

const CaseStudiesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <line x1="6.5" y1="5" x2="6.5" y2="8" strokeWidth="0.75" />
    <line x1="17.5" y1="5" x2="17.5" y2="8" strokeWidth="0.75" />
    <line x1="5" y1="17.5" x2="8" y2="17.5" strokeWidth="0.75" />
    <line x1="16" y1="17.5" x2="19" y2="17.5" strokeWidth="0.75" />
    <circle cx="12" cy="12" r="2" strokeDasharray="1 1" opacity="0.4" />
  </svg>
);

const ContactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="3" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="21" />
    <line x1="3" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="21" y2="12" />
    <line x1="5.6" y1="5.6" x2="7.8" y2="7.8" strokeWidth="0.75" />
    <line x1="16.2" y1="16.2" x2="18.4" y2="18.4" strokeWidth="0.75" />
    <line x1="5.6" y1="18.4" x2="7.8" y2="16.2" strokeWidth="0.75" />
    <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" strokeWidth="0.75" />
  </svg>
);

const ResumeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M12 3v1M12 20v1M3 12h1M20 12h1" strokeWidth="0.75" />
    <path d="M5.6 5.6l0.7 0.7M17.7 17.7l0.7 0.7M5.6 18.4l0.7-0.7M17.7 6.3l0.7-0.7" strokeWidth="0.5" opacity="0.6" />
  </svg>
);

const navSections: NavSection[] = [
  {
    id: "about",
    label: "ABOUT",
    icon: AboutIcon,
    content: "Anoushka Lad is a UX researcher and designer bridging human-computer interaction, inclusive design research, and digital product strategy.",
    href: "/about",
  },
  {
    id: "case-studies",
    label: "CASE STUDIES",
    icon: CaseStudiesIcon,
    content: "Explore selected projects spanning mobile banking, e-commerce experiences, and healthcare dashboards.",
    href: "/case-study-1",
  },
  {
    id: "contact",
    label: "CONTACT",
    icon: ContactIcon,
    content: "Get in touch for collaborations, research opportunities, or just to say hello.",
    href: "/contact",
  },
  {
    id: "resume",
    label: "RESUME",
    icon: ResumeIcon,
    content: "View my complete professional background, education, and experience.",
    href: "/resume",
  },
];

const ConstellationStar = () => (
  <svg viewBox="0 0 16 16" className="w-3 h-3">
    <circle cx="8" cy="8" r="2" fill="hsl(35 18% 35%)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={angle}
          x1={r(8 + Math.cos(rad) * 2.5)}
          y1={r(8 + Math.sin(rad) * 2.5)}
          x2={r(8 + Math.cos(rad) * 5)}
          y2={r(8 + Math.sin(rad) * 5)}
          stroke="hsl(35 18% 35%)"
          strokeWidth="0.8"
        />
      );
    })}
  </svg>
);

const NavigationCard = () => {
  const [expandedId, setExpandedId] = useState<string>("about");

  const toggleSection = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <div
      className="group relative w-72 overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(${rusticPaperBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* SVG Frame decorations - matching persona cards */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 288 400" preserveAspectRatio="none">
        {/* Outer thick frame border */}
        <rect
          x="3" y="3"
          width="282" height="394"
          fill="none"
          stroke="hsl(35 18% 35%)"
          strokeWidth="3"
          rx="8"
        />

        {/* Outer dotted border */}
        <rect
          x="8" y="8"
          width="272" height="384"
          fill="none"
          stroke="hsl(35 18% 45%)"
          strokeWidth="1"
          strokeDasharray="4 2"
          rx="6"
        />

        {/* Inner solid frame border */}
        <rect
          x="12" y="12"
          width="264" height="376"
          fill="none"
          stroke="hsl(35 18% 50%)"
          strokeWidth="1"
          rx="4"
        />

        {/* Top-left corner flourish - elegant double curve */}
        <path d="M 18 34 Q 18 18 34 18" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 22 40 Q 22 22 40 22" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />

        {/* Top-right corner flourish */}
        <path d="M 254 18 Q 270 18 270 34" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 248 22 Q 266 22 266 40" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />

        {/* Bottom-left corner flourish */}
        <path d="M 34 382 Q 18 382 18 366" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 40 378 Q 22 378 22 360" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />

        {/* Bottom-right corner flourish */}
        <path d="M 270 366 Q 270 382 254 382" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
        <path d="M 266 360 Q 266 378 248 378" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
      </svg>

      {/* Constellation star corners with hover glow */}
      <div className="absolute top-2 left-2 z-20 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>
      <div className="absolute top-2 right-2 z-20 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>
      <div className="absolute bottom-2 left-2 z-20 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>
      <div className="absolute bottom-2 right-2 z-20 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(180,160,120,0.8)]">
        <ConstellationStar />
      </div>

      {/* Content container */}
      <div className="relative z-10 py-2">
        {navSections.map((section, index) => (
          <div key={section.id}>
            {index > 0 && <div className="h-px mx-6" style={{ backgroundColor: 'hsl(35 18% 45%)' }} />}

            {/* Header */}
            <motion.div
              className="flex items-center justify-between py-3 px-6 cursor-pointer select-none"
              onClick={() => toggleSection(section.id)}
              whileHover={{ backgroundColor: "hsl(38 30% 88% / 0.3)" }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    border: '1.5px solid hsl(35 18% 35%)',
                    backgroundColor: 'hsl(38 35% 92% / 0.6)',
                    color: 'hsl(35 18% 30%)'
                  }}
                >
                  <section.icon className="w-4 h-4" />
                </div>
                <span
                  className="text-sm font-sans font-medium tracking-widest"
                  style={{ color: 'hsl(35 18% 22%)' }}
                >
                  {section.label}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedId === section.id ? 0 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {expandedId === section.id ? (
                  <Minus className="w-4 h-4" style={{ color: 'hsl(35 18% 40%)' }} />
                ) : (
                  <Plus className="w-4 h-4" style={{ color: 'hsl(35 18% 40%)' }} />
                )}
              </motion.div>
            </motion.div>

            {/* Content */}
            <AnimatePresence initial={false}>
              {expandedId === section.id && section.content && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-1">
                    <p
                      className="text-sm leading-relaxed mb-3 font-serif italic"
                      style={{ color: 'hsl(35 18% 35%)' }}
                    >
                      {section.content}
                    </p>
                    {section.href && (
                      <Link
                        href={section.href}
                        className="text-sm underline underline-offset-4 hover:text-accent transition-colors font-sans"
                        style={{ color: 'hsl(35 18% 30%)' }}
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
