"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { siteContent } from '@/content/site';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = document.getElementById('early-access');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtBottom(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.to(headerRef.current, {
      opacity: isAtBottom ? 0 : 1,
      y: isAtBottom ? 16 : 0,
      duration: 0.4,
      ease: 'power2.out',
      pointerEvents: isAtBottom ? 'none' : 'auto',
    });
  }, [isAtBottom]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 mx-8 bottom-8 z-60">
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4 rounded-lg border border-black/10 bg-background/85 shadow-[0_0_24px_0_rgba(255,255,255,0.5)_inset] p-1 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="text-lg lg:text-base font-semibold uppercase px-2">
            {siteContent.brand.name}
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Button asChild className="hidden h-9 rounded-md px-4 text-xs font-medium sm:inline-flex sm:text-sm">
            <a
              href={siteContent.urls.tallyInterest}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              Join Nomologi Waitlist
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
