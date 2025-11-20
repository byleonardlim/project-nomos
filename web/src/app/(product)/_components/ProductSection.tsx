"use client";

import React from 'react';
import { Eye, Layers, MessageSquare } from 'lucide-react';
import { productContent } from '@/content/landing/product';
import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';

export function ProductSection() {
  return (
    <SectionShell id="product">
      <div className="space-y-8">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {productContent.heading}
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:mx-0">
            {productContent.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Layers className="h-4 w-4 text-primary" />
              <h4>{productContent.cards[0].title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {productContent.cards[0].body}
            </p>
          </Card>
          <Card className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <MessageSquare className="h-4 w-4 text-primary" />
              <h4>{productContent.cards[1].title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {productContent.cards[1].body}
            </p>
          </Card>
          <Card className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Eye className="h-4 w-4 text-primary" />
              <h4>{productContent.cards[2].title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {productContent.cards[2].body}
            </p>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}
