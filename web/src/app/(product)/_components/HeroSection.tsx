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
        </div>
      </div>
    </SectionShell>
  );
}
