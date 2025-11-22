"use client";

import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full py-2">
      <div className="flex w-full items-center justify-center">
        <span
          className="pointer-events-none block w-screen whitespace-nowrap text-center uppercase font-semibold text-muted-foreground text-[20rem] leading-relaxed"
        >
          {siteContent.brand.name}
        </span>
      </div>
    </footer>
  );
}
