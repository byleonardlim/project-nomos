"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BackgroundEffect() {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blob = blobRef.current;
        if (!blob) return;

        // Initial random movement
        gsap.to(blob, {
            x: "20%",
            y: "20%",
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Scroll interaction
        // We animate the hue and scale based on scroll position
        gsap.to(blob, {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
            rotate: 560,
            scale: 1.5,
            filter: "blur(180px)",
            ease: "none",
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Gradient Blob */}
            <div
                ref={blobRef}
                className="absolute top-[-20%] left-[-20%] h-[100vh] w-[100vh] rounded-full bg-gradient-to-br from-primary/60 via-primary/20 to-transparent blur-[120px]"
            />

            {/* Secondary Blob for more complexity */}
            <div
                className="absolute bottom-[-20%] right-[-20%] h-[60vh] w-[60vh] rounded-full bg-gradient-to-tl from-primary/50 via-primary/10 to-transparent blur-[160px]"
            />
        </div>
    );
}
