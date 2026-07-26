"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";

export default function GlobalCursor() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <div
      className={styles.globalCursorEffect}
      style={{
        opacity: visible ? 1 : 0,
        left: `${position.x - 125}px`, // Centrado (ancho 250px)
        top: `${position.y - 40}px`,  // Centrado (alto 80px)
      }}
    />
  );
}
