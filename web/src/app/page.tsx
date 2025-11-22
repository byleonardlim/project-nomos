"use client";

import React from 'react';
import { HeroSection } from '@/app/(product)/_components/HeroSection';
import { WhatIsNomologiSection } from '@/app/(product)/_components/WhatIsNomologiSection';
import { FeaturesSection } from '@/app/(product)/_components/FeaturesSection';
import { EarlyAccessSection } from '@/app/(product)/_components/EarlyAccessSection';

export default function HomePage() {
  const strugglesRef = React.useRef<HTMLUListElement>(null!);
  
  return (
    <div className="overflow-hidden">
      {/* 2. Landing hero: automation made easy + CTA */}
      <HeroSection />

      {/* 1. Struggles & challenges with existing automation tools */}
      <WhatIsNomologiSection />

      {/* 3. Killer features that make Nomologi unique */}
      <FeaturesSection />

      {/* 4. How to be part of the early stage + CTA */}
      <EarlyAccessSection />
    </div>
  );
}
