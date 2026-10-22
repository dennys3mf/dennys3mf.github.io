"use client";
import React, { useEffect, useRef } from "react";

interface PencilRibbonProps {
  d: string;
  viewBox: string;
  stroke: string;
  strokeWidth: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PencilRibbon({
  d,
  viewBox,
  stroke,
  strokeWidth,
  className,
  style,
}: PencilRibbonProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      path.style.strokeDashoffset = "0";
      return;
    }

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    let ticking = false;

    const updateStroke = () => {
      if (!path || !svg) return;
      const rect = svg.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing when top of SVG reaches bottom of viewport
      // Complete drawing when bottom of SVG is comfortably in viewport
      const start = windowHeight;
      const end = windowHeight * 0.15;
      const current = rect.top;

      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateStroke);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateStroke(); // initial trigger

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 0.12s ease-out",
          willChange: "stroke-dashoffset",
        }}
      />
    </svg>
  );
}
