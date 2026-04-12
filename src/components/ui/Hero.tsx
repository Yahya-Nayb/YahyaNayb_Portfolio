'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Link } from 'lucide-react';
import TechTicker from './TechTicker';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-line', {
        y: 100,
        skewY: 5,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1,
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to('.parallax-text', {
          x: xPos,
          y: yPos,
          duration: 0.8,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#080808] overflow-hidden flex items-center px-[5%] my-4 md:px-[6%]">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Status Tag */}
        <div className="mb-8 flex items-center gap-3 overflow-hidden">
          <span className="h-[1px] w-12 bg-neutral-700" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">Open for freelance or full-time work</span>
        </div>

        {/* Main Typography Header */}
        <div className="flex flex-col gap-0 leading-[0.8] tracking-tighter">
          <div className="overflow-hidden">
            <h1 className="reveal-line text-[clamp(4rem,15vw,12rem)] font-black text-white uppercase italic">Crafting</h1>
          </div>

          <div className="reveal-line overflow-hidden mt-[-2vw] relative flex flex-col items-center">
            <h1
              className="parallax-text text-[clamp(4rem,15vw,12rem)] font-black uppercase text-transparent mb-[-12vw] md:mb-[-9vw] clip-path-top"
              style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.73)' }}>
              Digital
            </h1>
            <h1
              className="parallax-text text-[clamp(4rem,15vw,12rem)] font-black uppercase select-none ml-2 md:ml-4"
              style={{
                clipPath: 'inset(50% 0 0 0)',
                color: '#e7e7e7ff',
                WebkitTextStroke: '1px rgba(115, 115, 115, 0.2)',
                filter: 'blur(0.5px) drop-shadow(0 0 5px rgba(255,255,255,0.02))',
              }}>
              Digital
            </h1>
          </div>
          <div className="overflow-hidden mt-[-2vw] flex flex-col md:flex-row md:items-end gap-8">
            <h1 className="reveal-line text-[clamp(4rem,15vw,12rem)] font-black text-white uppercase">Systems</h1>

            {/* Job Title / Subheading */}
            <div className="reveal-line mb-[2vw] max-w-sm">
              <p className="font-mono text-[12px] leading-relaxed text-neutral-400 uppercase tracking-widest">
                [ Full Stack Architect ] <br />
                Specialized in High-Performance <br />
                Next.js & Node JS & Laravel Ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex items-center gap-12 overflow-hidden">
          <a href="/#work" className="reveal-line group relative flex items-center gap-4 cursor-pointer text-white hover:text-neutral-400 transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest">View My Work</span>
            <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowUpRight size={20} />
            </div>
          </a>
        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="absolute right-10 bottom-45 hidden md:block rotate-90 origin-right">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[1em]">Yahya Nayb Full stack</span>
      </div>
    </section>
  );
};

export default Hero;
