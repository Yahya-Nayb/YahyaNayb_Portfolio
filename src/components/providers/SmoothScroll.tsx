"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered before any component uses it.
gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll Provider to integrate Lenis with Next.js and GSAP.
 * Ensures cinematic scrolling feel and synchronizes GSAP animations.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);

    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger configuration for markers
    if (process.env.NODE_ENV !== "development") {
      ScrollTrigger.config({ limitCallbacks: true });
      // To hide markers, you don't need a specific config, 
      // but users typically want to know if they're enabled.
    }

    // Recompute trigger positions after Lenis/GSAP tick wiring.
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
