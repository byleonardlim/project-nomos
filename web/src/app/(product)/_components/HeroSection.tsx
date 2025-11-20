"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroContent } from '@/content/landing/hero';
import { siteContent } from '@/content/site';
import { SectionShell } from '@/components/layout/SectionShell';

export function HeroSection() {
  return (
    <SectionShell id="home">
      <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <h1 className="text-balance text-5xl lg:text-6xl font-semibold tracking-tight">
            {heroContent.title}
          </h1>
          <p className="max-w-xl text-balance leading-relaxed text-muted-foreground">
            {heroContent.description}
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              className="w-full rounded-md px-5 backdrop-blur-md sm:w-auto"
            >
              <a
                href={siteContent.urls.tallyInterest}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                {heroContent.ctaLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <p className="max-w-xs text-xs font-mono text-muted-foreground">
              {heroContent.ctaFootnote}
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
