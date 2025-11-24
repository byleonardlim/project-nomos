"use client";

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/ui/button';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const earlyAccessSection = document.getElementById('early-access');
      const header = headerRef.current;

      if (!earlyAccessSection || !header) return;

      ScrollTrigger.create({
        trigger: earlyAccessSection,
        // Start when the top of the early-access section is near the bottom of the viewport
        start: "top 85%",
        onEnter: () =>
          gsap.to(header, {
            yPercent: 200,
            duration: 0.5,
            ease: "power2.inOut",
            overwrite: true,
          }),
        onLeaveBack: () =>
          gsap.to(header, {
            yPercent: 0,
            duration: 0.5,
            ease: "power2.inOut",
            overwrite: true,
          }),
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 bottom-8 z-50 mx-4 md:mx-8"
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4 rounded-xl border border-white/10 bg-background/60 p-2 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-background/70 hover:shadow-[0_0_20px_-10px_rgba(79,70,229,0.5)]">
        <div className="flex items-center gap-2">
          <span className="px-2 text-base font-semibold tracking-wider text-foreground">
            Nomologi
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-medium">
          <Button asChild className="button-glow h-9 rounded-lg bg-primary px-4 text-[0.7rem] font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90">
            <a href="#early-access">
              Join Nomologi Waitlist
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
