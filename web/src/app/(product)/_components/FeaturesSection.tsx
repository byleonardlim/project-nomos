"use client";

import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';

const FEATURES = [
  {
    title: 'Plain-language flows',
    body: 'Sketch automations in short, readable steps instead of wiring complex node graphs.',
  },
  {
    title: 'LLM-native actions',
    body: 'Describe intent, plug in your tools, and let Nomos handle the boilerplate glue code.',
  },
  {
    title: 'Safe to ship',
    body: 'Review, tweak, and version changes before they touch production systems.',
  },
];

export function FeaturesSection() {
  return (
    <SectionShell id="features" className="py-20">
      <div className="w-full space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Designed for real teams, not demo videos.
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Three simple ideas: keep flows readable, keep integrations flexible, and keep you in control of what ships.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="flex h-full flex-col gap-3 rounded-xl border border-black/10 bg-background p-4"
            >
              <h3 className="text-sm font-semibold uppercase">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

