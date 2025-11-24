"use client";

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { gsap } from 'gsap';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, onMouseEnter, onMouseLeave, onTouchStart, onTouchEnd, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const elRef = React.useRef<HTMLButtonElement | null>(null);

    const runGlow = () => {
      if (!elRef.current) return;
      gsap.killTweensOf(elRef.current);
      gsap.fromTo(
        elRef.current,
        { backgroundPositionX: '-120%' },
        { backgroundPositionX: '120%', duration: 0.6, ease: 'power2.out' },
      );
    };

    const fadeGlow = () => {
      if (!elRef.current) return;
      gsap.killTweensOf(elRef.current);
      gsap.to(elRef.current, { backgroundPositionX: '0%', duration: 0.2 });
    };

    const handleMouseEnter: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      onMouseEnter?.(event);
      runGlow();
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      onMouseLeave?.(event);
      fadeGlow();
    };

    const handleTouchStart: React.TouchEventHandler<HTMLButtonElement> = (event) => {
      onTouchStart?.(event);
      runGlow();
    };

    const handleTouchEnd: React.TouchEventHandler<HTMLButtonElement> = (event) => {
      onTouchEnd?.(event);
      fadeGlow();
    };

    return (
      <Comp
        ref={elRef as React.Ref<any>}
        className={cn(
          'relative inline-flex h-10 items-center justify-center overflow-hidden whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [background-image:linear-gradient(90deg,transparent,rgba(56,46,254,0.9),transparent)] bg-[length:220%_100%] bg-[position:0%_0%]',
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...rest}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button };
