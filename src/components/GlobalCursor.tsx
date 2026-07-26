"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";

interface TouchFlash {
  id: number;
  x: number;
  y: number;
}

export default function GlobalCursor() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);
  const [flashes, setFlashes] = useState<TouchFlash[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handlePointerDown = (e: PointerEvent) => {
      // Generar destello de luz
      const newFlash = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setFlashes(prev => [...prev, newFlash]);
      
      if (e.pointerType === 'touch') {
         setPosition({ x: e.clientX, y: e.clientY });
         setVisible(true);
      }
      
      // Eliminar destello después de 600ms
      setTimeout(() => {
        setFlashes(prev => prev.filter(f => f.id !== newFlash.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <>
      <div
        className={styles.globalCursorEffect}
        style={{
          opacity: visible ? 1 : 0,
          left: `${position.x - 125}px`, 
          top: `${position.y - 40}px`,  
        }}
      />
      {flashes.map(flash => (
        <div 
          key={flash.id}
          className={styles.touchFlash}
          style={{
            left: `${flash.x - 75}px`, // centrar el div de 150px
            top: `${flash.y - 75}px`,
          }}
        />
      ))}
    </>
  );
}
