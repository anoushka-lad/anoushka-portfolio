"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import SectionHeader from "@/components/case-study/SectionHeader";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyIframePreview from "./CaseStudyIframePreview";
import { caseStudies } from "./caseStudyCardData";

const DESKTOP_BREAKPOINT = 1080;
const SHOW_DELAY = 100;
const HIDE_GRACE = 100;
const PREVIEW_W = 520;

export default function CaseStudySection() {
  const [hoveredStudyId, setHoveredStudyId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [previewLeft, setPreviewLeft] = useState(0);
  const [mountedIds, setMountedIds] = useState<Set<number>>(new Set());

  const caseColumnRef = useRef<HTMLDivElement>(null);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentIdRef = useRef<number | null>(null);

  // Desktop media query
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const onChange = () => setIsDesktop(mql.matches);
    mql.addEventListener("change", onChange);
    setIsDesktop(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Recalculate preview position based on case-column right edge
  const updatePreviewPosition = useCallback(() => {
    if (caseColumnRef.current) {
      const rect = caseColumnRef.current.getBoundingClientRect();
      setPreviewLeft(Math.max(8, rect.right - PREVIEW_W));
    }
  }, []);

  useEffect(() => {
    if (!isDesktop || hoveredStudyId === null) return;
    updatePreviewPosition();
    window.addEventListener("scroll", updatePreviewPosition, { passive: true });
    window.addEventListener("resize", updatePreviewPosition);
    return () => {
      window.removeEventListener("scroll", updatePreviewPosition);
      window.removeEventListener("resize", updatePreviewPosition);
    };
  }, [isDesktop, hoveredStudyId, updatePreviewPosition]);

  const handleHover = useCallback(
    (id: number) => {
      if (!isDesktop) return;

      // Lazily mount iframe on first hover
      setMountedIds((prev) => {
        if (prev.has(id)) return prev;
        const next = new Set(prev);
        next.add(id);
        return next;
      });

      // Cancel any pending hide
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }

      // If already showing a card, switch instantly
      if (currentIdRef.current !== null) {
        if (showTimerRef.current) {
          clearTimeout(showTimerRef.current);
          showTimerRef.current = null;
        }
        currentIdRef.current = id;
        setHoveredStudyId(id);
        updatePreviewPosition();
        return;
      }

      // First show: 100ms delay
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current);
      }
      showTimerRef.current = setTimeout(() => {
        currentIdRef.current = id;
        setHoveredStudyId(id);
        updatePreviewPosition();
        showTimerRef.current = null;
      }, SHOW_DELAY);
    },
    [isDesktop, updatePreviewPosition]
  );

  const handleLeave = useCallback(() => {
    // Cancel any pending show
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }

    // Grace period before hiding
    hideTimerRef.current = setTimeout(() => {
      currentIdRef.current = null;
      setHoveredStudyId(null);
      hideTimerRef.current = null;
    }, HIDE_GRACE);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <section className="section-padding">
      <div className="case-column" ref={caseColumnRef}>
        <SectionHeader title="My Case Studies" />
        <div className="w-full md:w-[58%]">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                onMouseEnter={() => handleHover(study.id)}
                onMouseLeave={handleLeave}
              >
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isDesktop && (
        <CaseStudyIframePreview
          hoveredStudyId={hoveredStudyId}
          mountedIds={mountedIds}
          studies={caseStudies}
          leftOffset={previewLeft}
        />
      )}
    </section>
  );
}
