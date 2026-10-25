"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroller() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // WCAG: Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for buttery-smooth momentum / video-scrub scroll
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis requestAnimationFrame
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Global scrubbed scroll kinematics (video-like inertia)
    const ctx = gsap.context(() => {
      // 1. Scrubbed Parallax for Hero background elements
      const heroDecor = document.querySelector("[data-scrub='hero-bg']");
      if (heroDecor) {
        gsap.to(heroDecor, {
          y: 140,
          scale: 0.95,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 2. Cinematic scrub reveal for project cards
      const projectCards = document.querySelectorAll("[data-gsap='project-card']");
      projectCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.65, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 65%",
              scrub: 1.2,
            },
          }
        );
      });

      // 3. Cinematic scrub reveal for About accounting cards
      const featureCards = document.querySelectorAll("[data-gsap='feature-card']");
      featureCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.7, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 70%",
              scrub: 1.2,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return null;
}
