import type Lenis from "lenis";

interface WindowWithLenis extends Window {
  __lenis?: Lenis;
}

/**
 * Smooth scrolling helper that scrolls cleanly to section anchors
 * while keeping the browser URL bar completely free of '#' hashes.
 */
export function scrollToSectionWithoutHash(
  e?: React.MouseEvent | React.TouchEvent | null,
  targetId?: string
) {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }

  if (typeof window === "undefined" || !targetId) return;

  const win = window as WindowWithLenis;
  const cleanTarget = targetId.replace(/^#/, "");

  if (cleanTarget === "home" || cleanTarget === "top") {
    if (win.__lenis) {
      win.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } else {
    const el = document.getElementById(cleanTarget);
    if (el) {
      if (win.__lenis) {
        win.__lenis.scrollTo(el, { offset: -25, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Strip hash from address bar if present
  if (window.location.hash) {
    try {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } catch {
      // Ignore if in restricted context
    }
  }
}
