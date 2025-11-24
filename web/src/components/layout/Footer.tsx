"use client";

import React from 'react';
import { siteContent } from "@/content/site";
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className="relative flex w-full flex-col justify-between overflow-hidden rounded-t-3xl bg-primary/10 px-4 py-12 text-primary-foreground sm:px-6 lg:px-8 backdrop-blur-lg"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-5 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content Grid */}
      <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-primary-foreground">
            {siteContent.brand.name}
          </h3>
          <p className="mt-4 text-sm text-primary-foreground/80">
            {siteContent.footer.slogan}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Product</h4>
          <ul className="mt-4 space-y-2">
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Features</Link></li>
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Pricing</Link></li>
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Changelog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Company</h4>
          <ul className="mt-4 space-y-2">
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">About</Link></li>
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Careers</Link></li>
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Legal</h4>
          <ul className="mt-4 space-y-2">
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Privacy</Link></li>
            <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* Massive Text */}
      <div className="m-0 p-0 pointer-events-none w-full leading-none">
        <span
          className="block w-full text-center text-[10vw] lg:text-[20vw] font-bold uppercase text-primary-foreground"
        >
          {siteContent.brand.name}
        </span>
      </div>
    </footer>
  );
}
