"use client";

import { SectionShell } from '@/components/layout/SectionShell';

export function HeroSection() {
  return (
    <SectionShell id="home" className="relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute -top-[20%] left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] md:h-[800px] md:w-[800px] md:blur-[120px]" />

      <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground lg:text-6xl">
            Build automations <br className="hidden md:block" />
            <span className="text-primary">without the busywork.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nomos is a minimal workspace for sketching, testing, and shipping the workflows your team actually uses without complex builders or noisy dashboards.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
