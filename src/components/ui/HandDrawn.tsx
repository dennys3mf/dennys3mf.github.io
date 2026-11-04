"use client";

import React from "react";
import styles from "./HandDrawn.module.css";

export type HandDrawnVariant = "highlight" | "underline" | "circle" | "box";

interface HandDrawnProps {
  children: React.ReactNode;
  variant?: HandDrawnVariant;
  color?: string;
  className?: string;
  delay?: number;
}

export default function HandDrawn({
  children,
  variant = "highlight",
  color,
  className = "",
}: HandDrawnProps) {
  const customColorStyle = color
    ? ({ "--handdrawn-color": color } as React.CSSProperties)
    : undefined;

  if (variant === "highlight") {
    return (
      <span
        className={`${styles.highlightWrapper} ${className}`}
        style={customColorStyle}
      >
        <span className={styles.highlightText}>{children}</span>
        <svg
          className={styles.highlightSvg}
          viewBox="0 0 160 38"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Organic double-pass marker stroke */}
          <path
            d="M 3,19 C 28,15 62,13 154,16 C 158,19 157,25 152,28 C 114,31 46,32 5,29 C 1,27 1,21 3,19 Z"
            fill="currentColor"
            className={styles.markerFill}
          />
        </svg>
      </span>
    );
  }

  if (variant === "underline") {
    return (
      <span
        className={`${styles.underlineWrapper} ${className}`}
        style={customColorStyle}
      >
        <span className={styles.textRel}>{children}</span>
        <svg
          className={styles.underlineSvg}
          viewBox="0 0 180 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Organic hand-drawn curved wave stroke */}
          <path
            d="M 3,11 C 45,4 125,5 177,10 C 130,14 65,16 28,14"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.pathStroke}
          />
        </svg>
      </span>
    );
  }

  if (variant === "circle") {
    return (
      <span
        className={`${styles.circleWrapper} ${className}`}
        style={customColorStyle}
      >
        <span className={styles.textRel}>{children}</span>
        <svg
          className={styles.circleSvg}
          viewBox="0 0 160 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Loose organic loop */}
          <path
            d="M 22,42 C 20,20 48,9 85,9 C 128,9 152,24 150,45 C 148,65 118,74 78,74 C 38,74 9,62 11,38 C 12,25 24,18 36,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.pathStroke}
          />
        </svg>
      </span>
    );
  }

  // Box variant
  return (
    <span
      className={`${styles.boxWrapper} ${className}`}
      style={customColorStyle}
    >
      <span className={styles.textRel}>{children}</span>
      <svg
        className={styles.boxSvg}
        viewBox="0 0 160 50"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 6,10 C 45,6 115,7 154,9 C 157,18 156,36 153,44 C 112,47 48,46 7,43 C 4,35 4,18 6,10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.pathStroke}
        />
      </svg>
    </span>
  );
}
