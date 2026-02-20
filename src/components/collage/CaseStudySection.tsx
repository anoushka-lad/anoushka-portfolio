"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import SectionHeader from "@/components/case-study/SectionHeader";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyIframePreview from "./CaseStudyIframePreview";
import { caseStudies } from "./caseStudyCardData";

const SHOW_DELAY = 100;
const HIDE_GRACE = 100;
const IFRAME_NATIVE_W = 960;

interface PreviewTier {
  w: number;
  h: number;
  scale: number;
}

function getPreviewTier(viewportWidth: number): PreviewTier | null {
  if (viewportWidth >= 1200) return { w: 520, h: 400, scale: 520 / IFRAME_NATIVE_W };
  if (viewportWidth >= 1024) return { w: 400, h: 320, scale: 400 / IFRAME_NATIVE_W };
  if (viewportWidth >= 768) return { w: 340, h: 280, scale: 340 / IFRAME_NATIVE_W };
  return null;
}

export default function CaseStudySection() {
  const [hoveredStudyId, setHoveredStudyId] = useState<number | null>(null);
  const [previewTier, setPreviewTier] = useState<PreviewTier | null>(null);
  const [previewLeft, setPreviewLeft] = useState(0);
  const [mountedIds, setMountedIds] = useState<Set<number>>(new Set());

  const caseColumnRef = useRef<HTMLDivElement>(null);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentIdRef = useRef<number | null>(null);

  // Compute preview tier from viewport width
  useEffect(() => {
    const update = () => setPreviewTier(getPreviewTier(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Recalculate preview position based on case-column right edge
  const updatePreviewPosition = useCallback(() => {
    if (caseColumnRef.current && previewTier) {
      const rect = caseColumnRef.current.getBoundingClientRect();
      setPreviewLeft(Math.max(8, rect.right - previewTier.w));
    }
  }, [previewTier]);

  useEffect(() => {
    if (!previewTier || hoveredStudyId === null) return;
    updatePreviewPosition();
    window.addEventListener("resize", updatePreviewPosition);
    return () => {
      window.removeEventListener("resize", updatePreviewPosition);
    };
  }, [previewTier, hoveredStudyId, updatePreviewPosition]);

  // Dismiss preview immediately on any page scroll
  const dismissPreview = useCallback(() => {
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    currentIdRef.current = null;
    setHoveredStudyId(null);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", dismissPreview, { passive: true });
    return () => window.removeEventListener("scroll", dismissPreview);
  }, [dismissPreview]);

  const handleHover = useCallback(
    (id: number) => {
      if (!previewTier) return;

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
    [previewTier, updatePreviewPosition]
  );

  // Cancel pending hide when mouse enters the preview panel
  const handlePreviewEnter = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

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
      {previewTier && (
        <CaseStudyIframePreview
          hoveredStudyId={hoveredStudyId}
          mountedIds={mountedIds}
          studies={caseStudies}
          leftOffset={previewLeft}
          previewW={previewTier.w}
          previewH={previewTier.h}
          scale={previewTier.scale}
          onPreviewEnter={handlePreviewEnter}
          onPreviewLeave={handleLeave}
        />
      )}
    </section>
  );
}
