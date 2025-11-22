"use client";

import React from 'react';
import { Activity, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { earlyAccessContent } from '@/content/landing/early-access';
import { siteContent } from '@/content/site';
import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';

const bulletIcons = [Users, Activity, MessageSquare];

export function EarlyAccessSection() {
  return (
    <SectionShell id="early-access">
      <div className="grid gap-8 md:grid-cols-[2fr,1.4fr] md:items-center">
        <div className="space-y-4">
          <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {earlyAccessContent.heading}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {earlyAccessContent.description}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {earlyAccessContent.bullets.map((bullet, index) => {
              const Icon = bulletIcons[index] ?? Users;
              return (
                <li key={index} className="flex items-start gap-2">
                  <Icon className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{bullet}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <Card
          className="space-y-4 rounded-xl bg-background/85 shadow-[0_0_24px_0_rgba(255,255,255,0.5)_inset] backdrop-blur-[20px] border border-black/10"
        >
          <h4 className="text-sm font-semibold">{earlyAccessContent.panel.heading}</h4>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {earlyAccessContent.panel.description}
          </p>
          <Button asChild className="rounded-md">
            <a
              href={siteContent.urls.tallyInterest}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              {earlyAccessContent.panel.button}
            </a>
          </Button>
        </Card>
      </div>
    </SectionShell>
  );
}
