"use client";
import React, { useEffect, useState, useRef } from "react";

interface CartoonEyesProps {
  className?: string;
}

export default function CartoonEyes({ className }: CartoonEyesProps) {
  const [offset, setOffset] = useState({ x: 8, y: 0 });
  const eyesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyesRef.current) return;
      const rect = eyesRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      // Limit pupil movement range
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(10, Math.hypot(deltaX, deltaY) / 35);

      setOffset({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      ref={eyesRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 200"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      {/* Eye bases */}
      <ellipse
        cx="65"
        cy="89.5"
        rx="65"
        ry="89.5"
        transform="matrix(-1 0 0 1 260 0)"
        fill="currentColor"
      />
      <ellipse
        cx="55"
        cy="71.5"
        rx="55"
        ry="71.5"
        transform="matrix(-1 0 0 1 246 21)"
        fill="#ffffff"
      />
      <ellipse
        cx="65"
        cy="89.5"
        rx="65"
        ry="89.5"
        transform="matrix(-1 0 0 1 130 0)"
        fill="currentColor"
      />
      <ellipse
        cx="55"
        cy="71.5"
        rx="55"
        ry="71.5"
        transform="matrix(-1 0 0 1 117 21)"
        fill="#ffffff"
      />

      {/* Pupils looking to the right */}
      <g
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <path
          d="M208.5 36C196.303 36 185.308 43.4971 177.558 55.5029L206.5 81.8018L167.632 80.9326C166.57 86.3548 166 92.0804 166 98C166 132.242 185.028 160 208.5 160C231.972 160 251 132.242 251 98C251 63.7583 231.972 36 208.5 36Z"
          fill="currentColor"
        />
        <path
          d="M79.5 36C67.3029 36 56.3082 43.4971 48.5576 55.5029L77.5 81.8018L38.6318 80.9326C37.5698 86.3548 37 92.0804 37 98C37 132.242 56.0279 160 79.5 160C102.972 160 122 132.242 122 98C122 63.7583 102.972 36 79.5 36Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
