"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const HEADER_HEIGHT = 88;

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
          currentY > HEADER_HEIGHT + 16 &&
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
    <>
      {/* Desktop header (≥768px) */}
      <header
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center border-b"
        style={{
          height: `${HEADER_HEIGHT}px`,
          backgroundColor: "hsl(var(--background))",
          borderColor: "#C1BFBA",
          transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 200ms ease",
        }}
      >
        <div
          className="relative flex items-center justify-between w-full mx-auto"
          style={{
            maxWidth: "1150px",
            paddingInline: "var(--case-gutter-x)",
          }}
        >
          <Link
            href="/#contact"
            className="cs-body hover:text-accent transition-colors"
            style={{ color: "#343434" }}
          >
            Anoushka Lad
          </Link>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-foreground/10"
            style={{
              color: "#343434",
              width: "44px",
              height: "44px",
            }}
          >
            <Home size={23} strokeWidth={1.5} />
          </Link>

          <span
            className="cs-body tracking-wider"
            style={{ color: "#343434" }}
          >
            EST 2018
          </span>
        </div>
      </header>

      {/* Mobile header (<768px) */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-center h-14 border-b"
        style={{
          backgroundColor: "hsl(var(--background))",
          borderColor: "#C1BFBA",
        }}
      >
        <Link
          href="/"
          className="flex items-center justify-center rounded-full transition-all duration-300 hover:bg-foreground/10"
          style={{
            color: "#343434",
            width: "44px",
            height: "44px",
          }}
        >
          <Home size={20} strokeWidth={1.5} />
        </Link>
      </header>
    </>
  );
};

export default CaseStudyHeader;
