'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar Component with slide-down entrance animation.
 */
export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
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

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
    <nav ref={navRef} className="fixed top-0 z-50 flex w-full items-center justify-between px-6 md:px-12 py-6 backdrop-blur-md">
      <div className="text-xl font-bold tracking-tighter cursor-pointer">YN.</div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] text-white uppercase text-[10px] font-black tracking-[0.3em]"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="transition-colors hover:text-white">{link.name}</a>
          ))}
        </div>
      <div className="hidden md:block">
        <a
          href="mailto:yahyanayb08@gmail.com"
          className="text-xs font-medium uppercase tracking-widest text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white">
          Let&apos;s talk
        </a>
      </div>
    </nav>
    <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black px-6"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="text-5xl font-black uppercase tracking-tighter text-white hover:text-neutral-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
  );
}
