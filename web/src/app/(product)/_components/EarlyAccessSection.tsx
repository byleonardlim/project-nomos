"use client";

import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { earlyAccessContent } from '@/content/landing/early-access';

export function EarlyAccessSection() {
  return (
    <SectionShell id="early-access">
      <div className="grid gap-8 md:grid-cols-[2fr,1.4fr] md:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {earlyAccessContent.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {earlyAccessContent.description}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {earlyAccessContent.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <Card className="space-y-4 rounded-xl border border-black/10 bg-primary/10 backdrop-blur-lg p-4">
          <h3 className="text-sm font-semibold uppercase">
            {earlyAccessContent.panel.heading}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {earlyAccessContent.panel.description}
          </p>
          <div className="flex items-center gap-3 text-xs font-medium uppercase">
            <Button asChild className="button-glow h-9 rounded-lg bg-primary px-4 text-[0.7rem] font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90">
              <a href="#early-access">
                {earlyAccessContent.panel.button}
              </a>
            </Button>
        </div>
        </Card>
      </div>
    </SectionShell>
  );
}
