"use client";

import { useState } from "react";
import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { earlyAccessContent } from '@/content/landing/early-access';

export function EarlyAccessSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const waitlistId = process.env.NEXT_PUBLIC_FREEWAITLIST_ID;
  const waitlistBaseUrl = process.env.NEXT_PUBLIC_FREEWAITLIST_BASE_URL;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() && !email.trim()) {
      setError("Please fill in your name and email address.");
      setStatus("error");
      return;
    }

    if (!name.trim()) {
      setError("Please tell us your name.");
      setStatus("error");
      return;
    }

    if (!email.trim()) {
      setError("Email is required.");
      setStatus("error");
      return;
    }

    if (!waitlistId || !waitlistBaseUrl) {
      setError("Waitlist configuration is missing.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      setError(null);

      const baseUrl = waitlistBaseUrl.replace(/\/$/, "");

      const response = await fetch(`${baseUrl}/waitlists/${waitlistId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          meta: {
            name: name || undefined,
            source: "product-landing-page",
          },
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const message = data?.error || data?.message || "Something went wrong. Please try again.";
        setError(message);
        setStatus("error");
        return;
      }

      setStatus("success");
      setError(null);
      setName("");
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <SectionShell id="early-access">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(99,102,241,0.45)] motion-safe:animate-pulse" />
            <span>Coming Soon</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {earlyAccessContent.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {earlyAccessContent.description}
          </p>
        </div>
        <Card className="space-y-4 rounded-xl border border-white/5 bg-background/60 p-5 text-base shadow-[0_0_40px_rgba(99,102,241,0.35)] backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-3">
            {error && (
              <p className="mt-2 flex items-center gap-4 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-base font-medium text-red-600">
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.45)] animate-pulse" />
                <span>{error}</span>
              </p>
            )}
            <div className="space-y-2">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                className="h-9 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-base text-foreground placeholder:text-base placeholder:text-muted-foreground/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-0 focus-visible:border-primary/90 focus-visible:bg-white/10 focus-visible:shadow-[0_0_18px_rgba(99,102,241,0.35)]"
              />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="h-9 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-base text-foreground placeholder:text-base placeholder:text-muted-foreground/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-0 focus-visible:border-primary/90 focus-visible:bg-white/10 focus-visible:shadow-[0_0_18px_rgba(99,102,241,0.35)]"
              />
            </div>
            <div className="flex items-center justify-end gap-3 text-base">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="button-glow h-9 rounded-lg bg-primary px-4 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-70 disabled:hover:bg-primary"
              >
                {status === "loading" ? "Joining..." : earlyAccessContent.panel.button}
              </Button>
            </div>
            {status === "success" && (
              <p className="mt-2 flex items-start gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-base font-medium text-emerald-600">
                <span className="mt-[2px] h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
                <span>
                  You&apos;re on the list. We&apos;ll be in touch soon.
                </span>
              </p>
            )}
          </form>
        </Card>
      </div>
    </SectionShell>
  );
}
