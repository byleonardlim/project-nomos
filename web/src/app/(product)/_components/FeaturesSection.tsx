"use client";

import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';
import { featuresContent } from '@/content/landing/features';

export function FeaturesSection() {
  return (
    <SectionShell id="features" className="py-20">
      <div className="w-full space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {featuresContent.heading}
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            {featuresContent.description}
          </p>
        </div>
        <div className="relative space-y-3">
          {featuresContent.cards.map((card) => (
            <Card
              key={card.title}
              className="min-h-[300px] feature-card space-y-4 rounded-xl border border-white/5 bg-background/40 backdrop-blur-lg p-4 flex flex-col justify-between"
            >
              <h3 className="text-[2.5rem] font-semibold">
                {card.title}
              </h3>
              <p className="w-[73ch]text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

