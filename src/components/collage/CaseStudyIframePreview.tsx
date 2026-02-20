"use client";

import { useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { CaseStudyCardItem } from "./caseStudyCardData";

const IFRAME_NATIVE_W = 960;
const IFRAME_NATIVE_H = 3000;

interface CaseStudyIframePreviewProps {
  hoveredStudyId: number | null;
  mountedIds: Set<number>;
  studies: CaseStudyCardItem[];
  leftOffset: number;
  previewW: number;
  previewH: number;
  scale: number;
  onPreviewEnter: () => void;
  onPreviewLeave: () => void;
}

export default function CaseStudyIframePreview({
  hoveredStudyId,
  mountedIds,
  studies,
  leftOffset,
  previewW,
  previewH,
  scale,
  onPreviewEnter,
  onPreviewLeave,
}: CaseStudyIframePreviewProps) {
  const isVisible = hoveredStudyId !== null;
  const router = useRouter();
  const mouseDownYRef = useRef(0);
  const scrollRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Reset scroll position for inactive containers when hovered study changes
  useEffect(() => {
    scrollRefs.current.forEach((el, id) => {
      if (id !== hoveredStudyId) {
        el.scrollTop = 0;
      }
    });
  }, [hoveredStudyId]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    mouseDownYRef.current = e.clientY;
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      // Only navigate if this was a click, not a scroll drag
      if (Math.abs(e.clientY - mouseDownYRef.current) > 5) return;
      const study = studies.find((s) => s.id === hoveredStudyId);
      if (study) router.push(study.path);
    },
    [hoveredStudyId, studies, router]
  );

  return (
    <div
      style={{
        position: "fixed",
        left: leftOffset,
        top: "50%",
        transform: "translateY(-50%)",
        width: previewW,
        height: previewH,
        zIndex: 50,
        pointerEvents: isVisible ? "auto" : "none",
        visibility: isVisible ? "visible" : "hidden",
        cursor: isVisible ? "pointer" : undefined,
      }}
      onMouseEnter={onPreviewEnter}
      onMouseLeave={onPreviewLeave}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <motion.div
        animate={
          isVisible
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -12 }
        }
        transition={
          isVisible
            ? { duration: 0.2, ease: "easeOut" }
            : { duration: 0.12, ease: "easeIn" }
        }
        style={{
          width: previewW,
          height: previewH,
          borderRadius: 6,
          border: "1px solid hsl(35 25% 82%)",
          boxShadow:
            "0 4px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Parchment loading placeholder */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#FFFCF6",
          }}
        />

        {/* One scrollable iframe layer per mounted study */}
        {studies
          .filter((s) => mountedIds.has(s.id))
          .map((study) => {
            const isActive = hoveredStudyId === study.id;
            const contentH = (IFRAME_NATIVE_H - study.previewScrollY) * scale;

            return (
              <div
                key={study.id}
                ref={(el) => {
                  if (el) scrollRefs.current.set(study.id, el);
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 150ms ease",
                  overflowY: isActive ? "auto" : "hidden",
                  overflowX: "hidden",
                  overscrollBehavior: "contain",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div
                  style={{
                    width: previewW,
                    height: contentH,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={study.path}
                    title={`Preview of ${study.title}`}
                    tabIndex={-1}
                    scrolling="no"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: IFRAME_NATIVE_W,
                      height: IFRAME_NATIVE_H,
                      border: "none",
                      transformOrigin: "top left",
                      transform: `scale(${scale}) translateY(-${study.previewScrollY}px)`,
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
}
