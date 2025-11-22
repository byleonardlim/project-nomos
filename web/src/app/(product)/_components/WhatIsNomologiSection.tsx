"use client";

import React from 'react';
import { whatIsNomologiContent } from '@/content/landing/what-is-nomologi';
import { SectionShell } from '@/components/layout/SectionShell';

export function WhatIsNomologiSection() {
  return (
    <SectionShell id="what-is-nomologi">
      <div className="w-full space-y-5">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-muted-foreground border border-black/10 backdrop-blur">
          {whatIsNomologiContent.tagline}
        </span>
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {whatIsNomologiContent.title}
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          {whatIsNomologiContent.description}
        </p>
      </div>
    </SectionShell>
  );
}
