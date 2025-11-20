import { siteContent } from '@/content/site';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed inset-x-0 mx-2 lg:mx-8 bottom-2 lg:bottom-4 z-60">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-xl bg-background/60 px-4 py-2 shadow-lg backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-lg lg:text-base font-semibold tracking-tight uppercase">
            {siteContent.brand.name}
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-4 text-xs font-medium text-muted-foreground sm:flex sm:text-sm">
            <a href="#product" className="transition-colors hover:text-foreground">
              Product
            </a>
            <a href="#why-now" className="transition-colors hover:text-foreground">
              Why now
            </a>
            <a href="#early-access" className="transition-colors hover:text-foreground">
              Early access
            </a>
          </nav>
          <Button asChild className="hidden h-9 rounded-md px-4 text-xs font-medium sm:inline-flex sm:text-sm">
            <a
              href={siteContent.urls.tallyInterest}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              Join waitlist
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
