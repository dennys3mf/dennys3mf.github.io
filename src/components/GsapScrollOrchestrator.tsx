"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapScrollOrchestrator() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Context ensures clean teardown of GSAP animations in React
    const ctx = gsap.context(() => {
      // 1. Heading reveals
      const headings = document.querySelectorAll("[data-gsap='heading']");
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 35, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Feature Cards Stagger (Sobre mí 4 cards)
      const cardGrids = document.querySelectorAll("[data-gsap='card-grid']");
      cardGrids.forEach((grid) => {
        const items = grid.children;
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // 3. Project Cards Parallax Tilt Reveal
      const projectCards = document.querySelectorAll("[data-gsap='project-card']");
      projectCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
