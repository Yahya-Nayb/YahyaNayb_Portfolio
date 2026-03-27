'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Navbar Component with slide-down entrance animation.
 */
export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.8,
      });
    },
    { scope: navRef },
  );

  return (
    <nav ref={navRef} className="fixed top-0 z-50 flex w-full items-center justify-between md:px-8 py-6 backdrop-blur-md">
      <div className="text-xl font-bold tracking-tighter cursor-pointer">YN.</div>
      <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
        <a href="#work" className="transition-colors hover:text-white">
          Work
        </a>
        <a href="#about" className="transition-colors hover:text-white">
          About
        </a>
        <a href="#contact" className="transition-colors hover:text-white">
          Contact
        </a>
      </div>
      <div className="hidden md:block">
        <a
          href="mailto:yahyanayb08@gmail.com"
          className="text-xs font-medium uppercase tracking-widest text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white">
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
