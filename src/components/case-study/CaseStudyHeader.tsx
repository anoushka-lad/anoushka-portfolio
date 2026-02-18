"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const caseStudies = [
  { path: "/case-study-1" },
  { path: "/case-study-2" },
  { path: "/case-study-3" },
  { path: "/case-study-4" },
];

/* Scroll-hide threshold — use the minimum (mobile) height */
const HEADER_HEIGHT_MIN = 42;

const CaseStudyHeader = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const pathname = usePathname();

  const currentIndex = caseStudies.findIndex((cs) => cs.path === pathname);
  const prev = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  const lastScrollY = useRef(0);
  const cumulativeDown = useRef(0);
  const cumulativeUp = useRef(0);
  const lastToggleTime = useRef(0);
  const isVisible = useRef(true);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = 0;
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;
        const now = performance.now();
        const cooldown = now - lastToggleTime.current < 120;

        // Top zone: always visible
        if (currentY <= 16) {
          if (!isVisible.current) {
            isVisible.current = true;
            setHeaderVisible(true);
            lastToggleTime.current = now;
          }
          cumulativeDown.current = 0;
          cumulativeUp.current = 0;
          lastScrollY.current = currentY;
          return;
        }

        // Accumulate in current direction, reset opposite
        if (delta > 0) {
          cumulativeDown.current += delta;
          cumulativeUp.current = 0;
        } else if (delta < 0) {
          cumulativeUp.current += Math.abs(delta);
          cumulativeDown.current = 0;
        }

        // Hide rule (scrolling down) — don't hide until past header + 16px
        if (
          isVisible.current &&
          currentY > HEADER_HEIGHT_MIN + 16 &&
          cumulativeDown.current >= 24 &&
          !cooldown
        ) {
          isVisible.current = false;
          setHeaderVisible(false);
          lastToggleTime.current = now;
          cumulativeDown.current = 0;
          cumulativeUp.current = 0;
        }

        // Show rule (scrolling up)
        if (
          !isVisible.current &&
          cumulativeUp.current >= 8 &&
          !cooldown
        ) {
          isVisible.current = true;
          setHeaderVisible(true);
          lastToggleTime.current = now;
          cumulativeDown.current = 0;
          cumulativeUp.current = 0;
        }

        lastScrollY.current = currentY;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center border-b"
      style={{
        height: "clamp(42px, 31px + 3.4vw, 66px)",
        backgroundColor: "hsl(var(--background))",
        borderColor: "#C1BFBA",
        transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 200ms ease",
      }}
    >
      <div className="flex items-center" style={{ gap: "clamp(32px, 28px + 1.2vw, 48px)" }}>
        {/* Previous case study */}
        <Link
          href={prev.path}
          className="flex items-center justify-center
            transition-opacity duration-200 ease-out
            hover:opacity-50"
          style={{ color: "#343434" }}
          aria-label="Previous case study"
        >
          <svg
            style={{
              width: "clamp(12px, 10px + 0.5vw, 16px)",
              height: "clamp(12px, 10px + 0.5vw, 16px)",
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2 L6 12 L16 22 L14 22 L4 12 L14 2 Z" />
          </svg>
        </Link>

        {/* Home */}
        <Link
          href="/"
          className="flex items-center justify-center text-[#343434]
            transition-all duration-200 ease-out
            hover:text-[#4f4f4f]
            active:scale-[0.97]"
        >
          <svg
            style={{
              width: "clamp(20px, 17px + 0.85vw, 26px)",
              height: "clamp(20px, 17px + 0.85vw, 26px)",
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 12 L12 2.5 L23 12 L20 12 L20 20.5 Q20 22 18.5 22 L15 22 L15 16 Q15 15 14 15 L10 15 Q9 15 9 16 L9 22 L5.5 22 Q4 22 4 20.5 L4 12 Z" />
          </svg>
        </Link>

        {/* Next case study */}
        <Link
          href={next.path}
          className="flex items-center justify-center
            transition-opacity duration-200 ease-out
            hover:opacity-50"
          style={{ color: "#343434" }}
          aria-label="Next case study"
        >
          <svg
            style={{
              width: "clamp(12px, 10px + 0.5vw, 16px)",
              height: "clamp(12px, 10px + 0.5vw, 16px)",
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 2 L18 12 L8 22 L10 22 L20 12 L10 2 Z" />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default CaseStudyHeader;
