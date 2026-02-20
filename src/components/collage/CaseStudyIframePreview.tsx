"use client";

import { motion } from "framer-motion";
import type { CaseStudyCardItem } from "./caseStudyCardData";

const IFRAME_NATIVE_W = 960;
const IFRAME_NATIVE_H = 2000;
const PREVIEW_W = 520;
const PREVIEW_H = 400;
const SCALE = PREVIEW_W / IFRAME_NATIVE_W;

interface CaseStudyIframePreviewProps {
  hoveredStudyId: number | null;
  mountedIds: Set<number>;
  studies: CaseStudyCardItem[];
  leftOffset: number;
}

export default function CaseStudyIframePreview({
  hoveredStudyId,
  mountedIds,
  studies,
  leftOffset,
}: CaseStudyIframePreviewProps) {
  const isVisible = hoveredStudyId !== null;

  return (
    <div
      style={{
        position: "fixed",
        left: leftOffset,
        top: "50%",
        transform: "translateY(-50%)",
        width: PREVIEW_W,
        height: PREVIEW_H,
        zIndex: 50,
        pointerEvents: "none",
        visibility: isVisible ? "visible" : "hidden",
      }}
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
          width: PREVIEW_W,
          height: PREVIEW_H,
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

        {/* One iframe layer per mounted study */}
        {studies
          .filter((s) => mountedIds.has(s.id))
          .map((study) => (
            <div
              key={study.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: hoveredStudyId === study.id ? 1 : 0,
                transition: "opacity 150ms ease",
                overflow: "hidden",
              }}
            >
              <iframe
                src={study.path}
                title={`Preview of ${study.title}`}
                tabIndex={-1}
                scrolling="no"
                style={{
                  width: IFRAME_NATIVE_W,
                  height: IFRAME_NATIVE_H,
                  border: "none",
                  transformOrigin: "top left",
                  transform: `scale(${SCALE}) translateY(-${study.previewScrollY}px)`,
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
      </motion.div>
    </div>
  );
}
