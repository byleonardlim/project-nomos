"use client";

import React from 'react';
import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer
      className="relative flex w-full flex-col justify-between overflow-hidden rounded-t-4xl bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8 backdrop-blur-lg"
    >
      {/* Content Grid */}
      <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
        {/*
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
        */}
      </div>

      {/* Massive Text */}
      <div className="mt-4 w-full text-center lg:text-right">
        <span className="w-full mt-4 text-xs text-muted-foreground">
          {siteContent.footer.slogan}
        </span>
      </div>
      <div className="m-0 p-0 pointer-events-none w-full leading-none">
        <span
          className="block w-full text-center text-[19vw] lg:text-[20vw] font-bold text-foreground/5"
        >
          {siteContent.brand.name}
        </span>
      </div>
    </footer>
  );
}
