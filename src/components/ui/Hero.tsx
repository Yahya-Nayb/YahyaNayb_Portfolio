'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import MagneticButton from './MagneticButton';
import TechTicker from './TechTicker';

/**
 * Hero Section Component.
 * Implements high-end GSAP entrance animations and spotlight effect.
 */
export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Text Splitting & Name Animation
      if (nameRef.current) {
        const split = new SplitType(nameRef.current, { types: 'chars' });

        gsap.from(split.chars, {
          y: 100,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'back.out(1.7)',
        });
      }

      // 2. Sub-headline Animation
      gsap.from(sublineRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });

      // 3. Location Badge & CTA Animation
      gsap.from([badgeRef.current, ctaRef.current], {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8,
      });

      // 4. Spotlight Effect (Mouse Follow)
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        gsap.to(spotlightRef.current, {
          left: clientX,
          top: clientY,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', onMouseMove);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    },
    { scope: container },
  );

  return (
    <section ref={container} className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 pt-4 pb-12">
      {/* Spotlight Backdrop */}
      <div ref={spotlightRef} className="pointer-events-none absolute h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px] z-0" />

      {/* Location Badge */}
      <div ref={badgeRef} className="z-10 mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">Open for freelance projects or full-time work</span>
      </div>

{/* Hero Section Content */}
<div className="z-10 flex flex-col items-center text-center px-4">
  
  {/* Status Badge: Open for Work */}
  <div className="mb-8 flex items-center gap-2 overflow-hidden rounded-full border border-white/5 bg-white/5 px-4 py-1.5 backdrop-blur-md">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
    </span>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
      Open for freelance & Work
    </span>
  </div>

  {/* The Big H1 */}
  <h1 className="max-w-6xl text-[clamp(2.5rem,8vw,9rem)] font-black leading-[0.9] tracking-tighter text-white uppercase italic">
    Building <span className="text-neutral-500 not-italic">robust</span> <br />
    web & data-driven <br />
    <span className="bg-gradient-to-r from-white to-neutral-600 bg-clip-text text-transparent">applications</span> with precision.
  </h1>

  {/* Subline: Identity based on CV [cite: 4, 9] */}
  <div className="mt-12 max-w-2xl">
    <p className="text-sm font-light leading-relaxed text-neutral-500 md:text-xl tracking-wide">
      <span className="text-white font-medium">Yahya Nayb</span> — Full Stack Developer.  
      Transforming complex needs into efficient technical solutions. 
    </p>
  </div>

  {/* CTA Button */}
  <div className="mt-10">
    <MagneticButton strength={0.2} className="h-16 w-52">
      <button className="group relative w-full h-full overflow-hidden rounded-full border border-white/10 bg-white text-black transition-all hover:bg-neutral-200 active:scale-95">
        <span className="relative z-10 text-sm font-bold uppercase tracking-widest">Explore Systems</span>
      </button>
    </MagneticButton>
  </div>
</div>

      {/* Ticker at bottom of hero */}
      <div className="absolute bottom-12 w-full">
        <TechTicker />
      </div>
    </section>
  );
}
