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
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const measure = () => {
      const cw = container.clientWidth;
      const newScale = Math.min(1, cw / designWidth);
      setScale(newScale);
      setContainerWidth(cw);
      setContentHeight(content.scrollHeight);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(container);
    ro.observe(content);

    return () => ro.disconnect();
  }, [designWidth]);

  // Center content horizontally when it's narrower than the container
  const offsetX = scale >= 1 ? Math.max(0, (containerWidth - designWidth) / 2) : 0;

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
            transform: `translateX(${offsetX}px) scale(${scale})`,
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
