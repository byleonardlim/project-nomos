"use client";

import { useState, useEffect, useRef } from "react";
import { SectionShell } from '@/components/layout/SectionShell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { earlyAccessContent } from '@/content/landing/early-access';
import gsap from 'gsap';

export function EarlyAccessSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  const waitlistId = process.env.NEXT_PUBLIC_FREEWAITLIST_ID;
  const waitlistBaseUrl = process.env.NEXT_PUBLIC_FREEWAITLIST_BASE_URL;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(contentRef.current!.children, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
      );

      tl.fromTo(formRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      gsap.to(blobRef.current, {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX - innerWidth / 2) / 40;
        const y = (clientY - innerHeight / 2) / 40;

        gsap.to(formRef.current, {
          x: x,
          y: y,
          duration: 1,
          ease: "power2.out"
        });
        
        gsap.to(blobRef.current, {
          x: -x * 2,
          y: -y * 2,
          duration: 1.5,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
      
      gsap.fromTo(formRef.current, 
        { scale: 0.98 },
        { scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );

    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <SectionShell id="early-access">
      <div ref={containerRef} className="relative w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              {earlyAccessContent.heading}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground/90 max-w-xl">
              {earlyAccessContent.description}
            </p>
          </div>

          <div className="relative isolate lg:pl-10">
            <div 
              ref={blobRef}
              className="absolute -inset-4 -z-10 rounded-full bg-primary/20 blur-3xl"
            />
            
            <div ref={formRef}>
              <Card className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 sm:p-8 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                
                <form onSubmit={handleSubmit} className="relative space-y-4">
                  {error && (
                    <p className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span>{error}</span>
                    </p>
                  )}

                  <div className="space-y-3">
                    <div className="group relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your full name"
                        className="peer h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 transition-opacity duration-300 peer-focus:opacity-100 blur-sm" />
                    </div>

                    <div className="group relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Your email address"
                        className="peer h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 transition-opacity duration-300 peer-focus:opacity-100 blur-sm" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative h-11 w-full overflow-hidden rounded-xl bg-primary text-sm font-semibold text-white transition-all hover:bg-primary/90 disabled:opacity-70"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative flex items-center justify-center gap-2">
                      {status === "loading" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        earlyAccessContent.panel.button
                      )}
                    </span>
                  </Button>

                  {status === "success" && (
                    <div className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                        <svg className="h-3 w-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>You&apos;re on the list. We&apos;ll be in touch soon.</span>
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
