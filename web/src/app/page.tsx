"use client";

import React from 'react';
import { HeroSection } from '@/app/(product)/_components/HeroSection';
import { WhyNowSection } from '@/app/(product)/_components/WhyNowSection';
import { ProductSection } from '@/app/(product)/_components/ProductSection';
import { EarlyAccessSection } from '@/app/(product)/_components/EarlyAccessSection';

export default function HomePage() {
  const strugglesRef = React.useRef<HTMLUListElement>(null!);
  
  return (
    <div className="overflow-hidden">
      {/* 2. Landing hero: automation made easy + CTA */}
      <HeroSection />

      {/* 1. Struggles & challenges with existing automation tools */}
      <WhyNowSection />

      {/* 3. Killer features that make Nomologi unique */}
      <ProductSection />

      {/* 4. How to be part of the early stage + CTA */}
      <EarlyAccessSection />
    </div>
  );
}
