"use client";
import React, { useEffect, useRef } from "react";
import styles from "../app/page.module.css";

export default function GlobalCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerPos = useRef({ x: -1000, y: -1000 });
  const lastPos = useRef({ x: -1000, y: -1000 });
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Eventos de puntero
    const updatePointer = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      
      lastPos.current = { ...pointerPos.current };
      pointerPos.current = { x: clientX, y: clientY };
      
      // Si el salto es muy grande (ej. acaba de entrar a la pantalla), no dibujamos línea
      if (Math.abs(lastPos.current.x - pointerPos.current.x) > 100 || 
          Math.abs(lastPos.current.y - pointerPos.current.y) > 100) {
        lastPos.current = { ...pointerPos.current };
      }
      isDrawing.current = true;
    };

    const stopDrawing = () => {
      isDrawing.current = false;
      // Reseteamos posición para que no haya un trazo fantasma al volver
      pointerPos.current = { x: -1000, y: -1000 };
      lastPos.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", updatePointer as EventListener);
    window.addEventListener("touchmove", updatePointer as EventListener, { passive: true });
    window.addEventListener("pointerdown", updatePointer as EventListener);
    document.addEventListener("mouseleave", stopDrawing);
    document.addEventListener("touchend", stopDrawing);

    // Bucle de animación (Efecto Xiaomi Fluido)
    let animationFrameId: number;
    let hue = 200; // Iniciar en tonos azules estilo Xiaomi

    const render = () => {
      // Desteñir gradualmente usando destination-out para no pintar encima de la web
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.shadowBlur = 0; // Desactivar sombra para el borrado
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Restaurar modo normal para dibujar el trazo
      ctx.globalCompositeOperation = "source-over";

      if (isDrawing.current && lastPos.current.x !== -1000) {
        hue = (hue + 1) % 360; // Cambiar color sutilmente
        
        ctx.beginPath();
        // Sombra de neón
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsl(${hue}, 100%, 60%)`;
        
        // Propiedades de la línea
        ctx.lineWidth = 12; // Línea gruesa y suave
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = `hsl(${hue}, 100%, 70%)`; // Trazos de color suave/neón

        ctx.moveTo(lastPos.current.x, lastPos.current.y);
        ctx.lineTo(pointerPos.current.x, pointerPos.current.y);
        ctx.stroke();

        // Actualizar último punto al actual para el siguiente frame
        lastPos.current = { ...pointerPos.current };
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", updatePointer as EventListener);
      window.removeEventListener("touchmove", updatePointer as EventListener);
      window.removeEventListener("pointerdown", updatePointer as EventListener);
      document.removeEventListener("mouseleave", stopDrawing);
      document.removeEventListener("touchend", stopDrawing);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.globalCanvas}
    />
  );
}
