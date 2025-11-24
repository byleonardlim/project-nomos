"use client";

import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function EarlyAccessSection() {
  return (
    <SectionShell id="early-access">
      <div className="grid gap-8 md:grid-cols-[2fr,1.4fr] md:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Help shape the first version.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Were inviting a small group of teams to experiment with Nomos as we refine the builder, the review loop, and integrations.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Share the workflows you struggle to automate today.</li>
            <li>Try early flows and tell us what actually feels simpler.</li>
            <li>Get priority access to new capabilities as we ship them.</li>
          </ul>
        </div>
        <Card className="space-y-4 rounded-xl border border-black/10 bg-primary/10 backdrop-blur-lg p-4">
          <h3 className="text-sm font-semibold uppercase">
            Request early access
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Leave an email and a short note about how your team uses automation today. We’ll reach out as soon as new spots open.
          </p>
          <div className="flex items-center gap-3 text-xs font-medium uppercase">
            <Button asChild className="button-glow h-9 rounded-lg bg-primary px-4 text-[0.7rem] font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90">
              <a href="#early-access">
                Join Nomologi Waitlist
              </a>
            </Button>
        </div>
        </Card>
      </div>
    </SectionShell>
  );
}
