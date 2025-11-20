"use client";

import React from 'react';
import { AlertTriangle, Bug, Workflow } from 'lucide-react';
import { whyNowContent } from '@/content/landing/why-now';
import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';

const iconMap = {
  bug: Bug,
  alert: AlertTriangle,
  workflow: Workflow,
} as const;

const struggles = whyNowContent.struggles.map((struggle) => ({
  ...struggle,
  Icon: iconMap[struggle.iconKey],
}));

export function WhyNowSection() {
  return (
    <SectionShell id="why-now">
      <div className="w-full space-y-5">
        <p className="inline-flex items-center rounded-full bg-background/70 px-3 py-1 text-sm font-medium text-muted-foreground ring-1 ring-border/80 backdrop-blur">
          {whyNowContent.tagline}
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {whyNowContent.title}
        </h2>
        <div className="mt-6">
          <ul
            className="grid gap-6 text-sm font-medium text-foreground sm:text-base sm:grid-cols-4 lg:grid-cols-6"
          >
            {struggles.map((struggle, index) => (
              <Card asChild key={index}>
                <li
                  data-struggle-card
                  className={`flex h-full flex-col gap-4 ${
                    index === 0
                      ? 'sm:col-span-2 sm:row-span-2 lg:col-span-3'
                      : index === 1
                        ? 'sm:col-span-2 lg:col-span-2'
                        : 'sm:col-span-4 lg:col-span-3'
                  }`}
                >
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <struggle.Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-semibold uppercase tracking-wide text-muted-foreground">
                    {struggle.label}
                  </h3>
                  <span className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {struggle.text}
                  </span>
                </li>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
