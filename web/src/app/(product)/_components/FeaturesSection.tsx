"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Layers, MessageSquare } from 'lucide-react';
import { featuresContent } from '@/content/landing/features';
import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.features-card');

      if (!cards.length) return;

      const tl = gsap.timeline({
        smoothChildTiming: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          // begin when the features stack is around the middle of the viewport
          start: 'center 85%',
          // keep the pin around one viewport height for a controlled scroll distance
          end: '+=100%',
          // use a scrub value to ease the link between scroll and animation
          scrub: 0.5,
          pin: true,
          // don't insert extra spacer height (avoids a blank gap after stacking)
          pinSpacing: false,
          anticipatePin: 0,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        cards,
        {
          y: (index: number) => index * 200, // Add 200px extra visual spacing per card
          rotation: 0,
          zIndex: (index: number) => index + 1,
          transformOrigin: 'center center',
        },
        {
          y: (index: number, target: HTMLElement) => {
            // Move to top of the first card to overlap fully
            // (negate the layout distance from the first card)
            const offset = target.offsetTop - cards[0].offsetTop;
            return -offset;
          },
          rotation: (index: number) => {
            if (index === 0) return 0;
            const base = (index % 2 === 0 ? 1 : -1) * 1.25;
            return base;
          },
          duration: 1,
          // keep the tween itself linear; the scrub handles perceived easing
          ease: 'none',
          stagger: {
            each: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <SectionShell id="features" className="py-24 md:py-32 mb-24 md:mb-32">
      <div className="space-y-10 md:space-y-16">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {featuresContent.heading}
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:mx-0">
            {featuresContent.description}
          </p>
        </div>
        <div
          ref={sectionRef}
          className="relative flex flex-col items-center justify-center gap-6 overflow-visible"
        >
          {featuresContent.cards.map((card, index) => {
            const Icon = [Layers, MessageSquare, Eye][index] ?? Layers;

            return (
              <Card
                key={card.title}
                className="features-card relative flex flex-col gap-3 overflow-hidden rounded-xl border border-black/10 bg-background/85 p-4 shadow-[0_0_24px_0_rgba(255,255,255,0.5)_inset] backdrop-blur-xl"
              >
                <div className="features-card-header flex items-center gap-2 text-sm font-semibold">
                  <Icon className="h-4 w-4 text-primary" />
                  <h4 className='text-6xl'>{card.title}</h4>
                </div>
                <p className="features-card-body text-base leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
