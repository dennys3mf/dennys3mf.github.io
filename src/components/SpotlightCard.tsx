"use client";
import React, { useRef, useState } from "react";
import styles from "../app/page.module.css";

export default function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.glowCard} ${className}`}
    >
      <div
        className={styles.spotlightEffect}
        style={{
          opacity,
          background: `rgba(255, 255, 255, 0.1)`,
          width: '250px',
          height: '80px',
          left: `${position.x - 125}px`,
          top: `${position.y - 40}px`,
          filter: 'blur(25px)',
        }}
      />
      {children}
    </div>
  );
}
