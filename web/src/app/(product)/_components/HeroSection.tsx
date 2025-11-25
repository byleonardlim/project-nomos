"use client";

import { SectionShell } from '@/components/layout/SectionShell';
import { heroContent } from '@/content/landing/hero';

export function HeroSection() {
  return (
    <SectionShell id="home" className="relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute -top-[20%] left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] md:h-[800px] md:w-[800px] md:blur-[120px]" />

      <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(99,102,241,0.45)] motion-safe:animate-pulse" />
            <span>Coming Soon</span>
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroContent.description}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
