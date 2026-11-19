"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ComponentProps } from "react";
import type P5 from "p5";
import styles from "./ContactWaveLink.module.css";

const barHeights = [4, 8, 13, 8, 4];
const pulseDuration = 480;
const reducedMotion = "(prefers-reduced-motion: reduce)";

type ContactWaveLinkProps = Pick<ComponentProps<typeof Link>, "href" | "className" | "children" | "onClick">;

export default function ContactWaveLink({ href, className, children, onClick }: ContactWaveLinkProps) {
  const canvasHost = useRef<HTMLSpanElement>(null);
  const pulse = useRef<((strength: number) => void) | null>(null);
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    const host = canvasHost.current;
    if (!requested || !host) return;

    const motion = window.matchMedia(reducedMotion);
    let sketch: P5 | undefined;
    let disposed = false;
    let startedAt = 0;
    let strength = 1;

    void import("p5").then(({ default: p5 }) => {
      if (disposed || motion.matches) return;

      sketch = new p5((p) => {
        p.setup = () => {
          p.createCanvas(24, 20);
          p.frameRate(30);
          p.noLoop();
          pulse.current = (nextStrength) => {
            if (motion.matches) return;
            strength = nextStrength;
            startedAt = performance.now();
            p.loop();
          };
          if (host.closest("a")?.matches(":hover, :focus-visible")) {
            pulse.current(1);
          }
        };

        p.draw = () => {
          const progress = Math.min((performance.now() - startedAt) / pulseDuration, 1);
          const envelope = motion.matches ? 0 : Math.sin(Math.PI * progress) * strength;
          p.clear();
          p.stroke(getComputedStyle(host).color);
          p.strokeWeight(1.5);
          p.strokeCap(p.ROUND);

          barHeights.forEach((height, index) => {
            const x = 4 + 4 * index;
            const oscillation = Math.sin(progress * Math.PI * 4 - index * 0.85);
            const halfHeight = Math.max(1, (height + 5 * envelope * oscillation) / 2);
            p.line(x, 10 - halfHeight, x, 10 + halfHeight);
          });

          if (progress === 1 || motion.matches) p.noLoop();
        };
      }, host);
    }).catch(() => {
      // The static icon and contact link remain available if the sketch cannot load.
    });

    return () => {
      disposed = true;
      pulse.current = null;
      sketch?.remove();
    };
  }, [requested]);

  function animate(strength = 1) {
    if (window.matchMedia(reducedMotion).matches) return;
    if (pulse.current) {
      pulse.current(strength);
    } else {
      setRequested(true);
    }
  }

  return (
    <Link
      href={href}
      className={className}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") animate();
      }}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) animate();
      }}
      onPointerDown={(event) => {
        if (event.pointerType === "mouse" && event.button === 0) pulse.current?.(1.35);
      }}
      onClick={onClick}
    >
      {children}
      <span className={styles.wave} aria-hidden="true">
        <span className={styles.fallback}>
          {barHeights.map((height, index) => (
            <span key={index} style={{ height }} />
          ))}
        </span>
        <span ref={canvasHost} className={styles.canvas} />
      </span>
    </Link>
  );
}
