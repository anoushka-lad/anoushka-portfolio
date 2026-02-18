"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* Scroll-hide threshold — use the minimum (mobile) height */
const HEADER_HEIGHT_MIN = 42;

const CaseStudyHeader = () => {
  const [headerVisible, setHeaderVisible] = useState(true);

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
    </header>
  );
};

export default CaseStudyHeader;
