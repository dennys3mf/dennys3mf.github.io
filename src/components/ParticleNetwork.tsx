"use client";
import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Ajustar resolución en redimensionamiento
    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    });

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });
    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > w || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > h || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Colisión interactiva (Algoritmo de distancia euclidiana)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < w - this.size * 10) {
              this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 10;
            }
            if (mouse.y < this.y && this.y < h - this.size * 10) {
              this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 10;
            }
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (h * w) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = "rgba(100, 150, 255, 0.5)"; // Azul tecnológico
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Algoritmo de conexión matemática: O(n^2) optimizado
    function connect() {
      if (!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
          if (distance < (w / 7) * (h / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        zIndex: -1,
      }}
    />
  );
}
