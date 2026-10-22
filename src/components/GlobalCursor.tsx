"use client";
import React, { useEffect, useRef } from "react";
import styles from "../app/page.module.css";

export default function GlobalCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerPos = useRef({ x: -1000, y: -1000 });
  const lastPos = useRef({ x: -1000, y: -1000 });
  const isDrawing = useRef(false);
  const idleFrames = useRef(0);
  const isRunning = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;

    const colors = [
      { main: "rgba(39, 53, 206, 0.85)", glow: "rgba(39, 53, 206, 0.45)" }, // Moddo Cobalt
      { main: "rgba(255, 0, 140, 0.85)", glow: "rgba(255, 0, 140, 0.45)" }, // Moddo Pink
      { main: "rgba(245, 106, 0, 0.85)", glow: "rgba(245, 106, 0, 0.45)" }, // Moddo Orange
      { main: "rgba(40, 155, 48, 0.85)", glow: "rgba(40, 155, 48, 0.45)" }, // Moddo Green
      { main: "rgba(20, 98, 223, 0.85)", glow: "rgba(20, 98, 223, 0.45)" }, // Moddo Azure
    ];

    const startLoop = () => {
      if (isRunning.current) return;
      isRunning.current = true;
      idleFrames.current = 0;
      render();
    };

    const render = () => {
      // Fade out smoothly with destination-out
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.shadowBlur = 0;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "source-over";

      if (isDrawing.current && lastPos.current.x !== -1000) {
        idleFrames.current = 0;
        const colorIndex = Math.floor((Date.now() / 320) % colors.length);
        const { main, glow } = colors[colorIndex];

        ctx.beginPath();
        ctx.shadowBlur = 14;
        ctx.shadowColor = glow;

        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = main;

        ctx.moveTo(lastPos.current.x, lastPos.current.y);
        ctx.lineTo(pointerPos.current.x, pointerPos.current.y);
        ctx.stroke();

        lastPos.current = { ...pointerPos.current };
      } else {
        idleFrames.current += 1;
      }

      // If idle for ~30 frames after trail has faded out, stop RAF to save 100% CPU
      if (idleFrames.current > 35) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isRunning.current = false;
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const updatePointer = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if ("touches" in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      lastPos.current = { ...pointerPos.current };
      pointerPos.current = { x: clientX, y: clientY };

      if (
        Math.abs(lastPos.current.x - pointerPos.current.x) > 120 ||
        Math.abs(lastPos.current.y - pointerPos.current.y) > 120
      ) {
        lastPos.current = { ...pointerPos.current };
      }
      isDrawing.current = true;
      startLoop();
    };

    const stopDrawing = () => {
      isDrawing.current = false;
      pointerPos.current = { x: -1000, y: -1000 };
      lastPos.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", updatePointer, { passive: true });
    window.addEventListener("touchmove", updatePointer, { passive: true });
    window.addEventListener("pointerdown", updatePointer, { passive: true });
    document.addEventListener("mouseleave", stopDrawing);
    document.addEventListener("touchend", stopDrawing);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", updatePointer);
      window.removeEventListener("touchmove", updatePointer);
      window.removeEventListener("pointerdown", updatePointer);
      document.removeEventListener("mouseleave", stopDrawing);
      document.removeEventListener("touchend", stopDrawing);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.globalCanvas} aria-hidden="true" />;
}
