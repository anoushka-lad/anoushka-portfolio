"use client";

import { useRef, useState, useEffect } from "react";

interface ScalingContainerProps {
  designWidth: number;
  className?: string;
  children: React.ReactNode;
}

const ScalingContainer = ({ designWidth, className, children }: ScalingContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      const newScale = Math.min(1, containerWidth / designWidth);
      setScale(newScale);
      setContentHeight(content.scrollHeight);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(container);
    ro.observe(content);

    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        style={contentHeight !== null ? { height: contentHeight * scale } : undefined}
      >
        <div
          ref={contentRef}
          style={{
            width: designWidth,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScalingContainer;
