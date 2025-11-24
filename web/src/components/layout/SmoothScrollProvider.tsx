"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

// register Observer once in module scope
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Observer);
}

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // On touch devices (mobile/tablet), allow native scrolling to avoid blocking further scroll.
    const hasMaxTouchPoints =
      typeof navigator !== 'undefined' && 'maxTouchPoints' in navigator && typeof navigator.maxTouchPoints === 'number';
    const isTouch = 'ontouchstart' in window || (hasMaxTouchPoints && navigator.maxTouchPoints > 0);
    if (isTouch) {
      return;
    }

    const proxy = { y: window.scrollY };
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const updateMaxScroll = () => {
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    };

    const tweenTo = (y: number) => {
      // keep maxScroll in sync with layout changes (e.g. ScrollTrigger pinning)
      updateMaxScroll();
      const clamped = Math.max(0, Math.min(maxScroll, y));

      gsap.to(proxy, {
        y: clamped,
        duration: 0.06,
        ease: 'power1.out',
        overwrite: 'auto',
        onUpdate: () => {
          window.scrollTo(0, proxy.y);
        },
      });
    };

    const observer = Observer.create({
      target: window,
      type: 'wheel,touch',
      wheelSpeed: 1.25,
      preventDefault: true,
      allowClicks: true,
      onChangeY: (self) => {
        proxy.y = window.scrollY;
        // stronger response per wheel tick so it doesn't feel sluggish
        tweenTo(proxy.y + self.deltaY * 0.9);
      },
    });

    window.addEventListener('resize', updateMaxScroll);

    return () => {
      window.removeEventListener('resize', updateMaxScroll);
      observer.kill();
      gsap.killTweensOf(proxy);
    };
  }, []);

  return <>{children}</>;
}
