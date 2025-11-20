"use client";

import React from "react";
import { gsap } from "gsap";
import { siteContent } from "@/content/site";

export function Footer() {
  const footerRef = React.useRef<HTMLDivElement | null>(null);
  const brandRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!footerRef.current) return;

    const footerTween = gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 64 }, // up to 24px slide-up
      { opacity: 1, y: 0, ease: "power3.out", paused: true }
    );

    const brandTween =
      brandRef.current
        ? gsap.fromTo(
            brandRef.current,
            { scale: 1, filter: "blur(12px)" },
            { scale: 1.15, filter: "blur(0px)", ease: "power3.out", paused: true }
          )
        : null;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.body.scrollHeight || 1;

      // Map scroll position to a 0-1 range, starting reveal around 60% and
      // fully revealed near the bottom for a scrub-like effect.
      const start = 0.8;
      const end = 1;
      const raw = (scrollPos / docHeight - start) / (end - start);
      const clamped = Math.min(1, Math.max(0, raw));

      // Simple ease-out for smoother motion
      const eased = 1 - Math.pow(1 - clamped, 3);
      footerTween.progress(eased);
      if (brandTween) {
        brandTween.progress(eased);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      footerTween.kill();
      if (brandTween) {
        brandTween.kill();
      }
    };
  }, []);

  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-10">
      <div
        ref={footerRef}
        className="flex w-full items-center justify-center will-change-transform"
      >
        <span
          ref={brandRef}
          className="text-[5.25rem] lg:text-[23rem] uppercase font-semibold tracking-tight text-muted-foreground"
        >
          {siteContent.brand.name}
        </span>
      </div>
    </footer>
  );
}
