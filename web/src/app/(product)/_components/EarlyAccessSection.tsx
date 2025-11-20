"use client";

import React from 'react';
import { Activity, ExternalLink, MessageSquare, Users } from 'lucide-react';
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
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
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
        <Card className="space-y-4">
          <h4 className="text-sm font-semibold">{earlyAccessContent.panel.heading}</h4>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {earlyAccessContent.panel.description}
          </p>
          <Button asChild className="w-full rounded-md">
            <a
              href={siteContent.urls.tallyInterest}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              {earlyAccessContent.panel.button}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <p className="text-[0.7rem] font-mono text-muted-foreground">
            {earlyAccessContent.panel.footnote}
          </p>
        </Card>
      </div>
    </SectionShell>
  );
}
