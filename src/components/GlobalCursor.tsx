"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";

interface Point {
  id: number;
  x: number;
  y: number;
}

export default function GlobalCursor() {
  const [trail, setTrail] = useState<Point[]>([]);
  const [flashes, setFlashes] = useState<Point[]>([]);

  useEffect(() => {
    // Función para manejar el movimiento del ratón/dedo
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const id = Date.now() + Math.random();
      const point = { x: clientX, y: clientY, id };
      
      setTrail(prev => [...prev, point]);
      
      // El rastro desaparece automáticamente después de 500ms
      setTimeout(() => {
        setTrail(prev => prev.filter(p => p.id !== id));
      }, 500);
    };

    const handlePointerDown = (e: PointerEvent) => {
      const newFlash = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setFlashes(prev => [...prev, newFlash]);
      
      if (e.pointerType === 'touch') {
        const id = Date.now() + Math.random();
        setTrail(prev => [...prev, { x: e.clientX, y: e.clientY, id }]);
        setTimeout(() => {
          setTrail(prev => prev.filter(p => p.id !== id));
        }, 500);
      }
      
      // Eliminar destello después de 600ms
      setTimeout(() => {
        setFlashes(prev => prev.filter(f => f.id !== newFlash.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove as EventListener);
    window.addEventListener("touchmove", handleMouseMove as EventListener, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as EventListener);
      window.removeEventListener("touchmove", handleMouseMove as EventListener);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <>
      {trail.map(point => (
        <div
          key={point.id}
          className={styles.trailPoint}
          style={{
            left: `${point.x - 10}px`, // Centrar el círculo de 20px
            top: `${point.y - 10}px`,
          }}
        />
      ))}
      {flashes.map(flash => (
        <div 
          key={flash.id}
          className={styles.touchFlash}
          style={{
            left: `${flash.x - 75}px`, // Centrar el círculo de 150px
            top: `${flash.y - 75}px`,
          }}
        />
      ))}
    </>
  );
}
