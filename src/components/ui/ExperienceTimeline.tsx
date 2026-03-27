'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { EXPERIENCE_DATA, ExperienceItem } from '@/data/experience';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mobileProgressLineRef = useRef<HTMLDivElement>(null);
  const mobileDotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop: Central Line
    mm.add("(min-width: 768px)", () => {
      // Progress Line Growth
      gsap.to(progressLineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });

      // Progress Dot Movement
      gsap.to(dotRef.current, {
        top: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });

      // Cards Animation
      EXPERIENCE_DATA.forEach((_, index) => {
        const isLeft = index % 2 === 0;
        const card = `.card-${index}`;
        const milestoneDot = `.milestone-dot-${index}`;

        // Card Entrance
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            x: isLeft ? -100 : 100 
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );

        // Milestone Dot Pulse
        gsap.to(milestoneDot, {
          scale: 1.5,
          backgroundColor: '#06b6d4', // cyan-500
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            toggleActions: 'play none none reverse',
            onEnter: () => gsap.to(milestoneDot, { scale: 1.5, duration: 0.3 }),
            onLeaveBack: () => gsap.to(milestoneDot, { scale: 1, duration: 0.3 }),
          }
        });
      });
    });

    // Mobile: Line on Left
    mm.add("(max-width: 767px)", () => {
      gsap.to(mobileProgressLineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });

      gsap.to(mobileDotRef.current, {
        top: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });

      EXPERIENCE_DATA.forEach((_, index) => {
        const card = `.card-${index}`;
        const milestoneDot = `.milestone-dot-${index}`;

        gsap.fromTo(card, 
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            }
          }
        );

        gsap.to(milestoneDot, {
          backgroundColor: '#06b6d4',
          boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)',
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            toggleActions: 'play none none reverse',
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="relative py-24 px-4 md:px-0 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          A journey through my professional path, from technical foundations in Agadir to building modern full-stack applications.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Central Path */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
          <div 
            ref={progressLineRef}
            className="absolute top-0 w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] origin-top"
            style={{ height: '0%' }}
          />
          <div 
            ref={dotRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)] z-20 -mt-2"
          />
        </div>

        {/* Mobile Left Path */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-white/5">
          <div 
            ref={mobileProgressLineRef}
            className="absolute top-0 w-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] origin-top"
            style={{ height: '0%' }}
          />
          <div 
            ref={mobileDotRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)] z-20 -mt-1.5"
          />
        </div>

        <div className="space-y-24">
          {EXPERIENCE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
                {/* Milestone Dot */}
                <div className={`
                  absolute z-10 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white/20 bg-black
                  milestone-dot-${index}
                `} />

                {/* Left Side Content (Desktop) */}
                <div className={`hidden md:flex justify-end px-12 ${isLeft ? '' : 'invisible'}`}>
                  {isLeft && <ExperienceCard item={item} index={index} isLeft={true} />}
                </div>

                {/* Right Side Content (Desktop) */}
                <div className={`px-12 ${isLeft ? 'md:invisible' : ''}`}>
                   <div className="md:hidden pl-4">
                     <ExperienceCard item={item} index={index} isLeft={false} />
                   </div>
                   <div className="hidden md:block">
                     {!isLeft && <ExperienceCard item={item} index={index} isLeft={false} />}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item, index, isLeft }: { item: ExperienceItem, index: number, isLeft: boolean }) {
  return (
    <div className={`
      card-${index} relative p-8 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm 
      hover:border-white/10 transition-colors group
    `}>
      {/* Background Year */}
      <span className={`
        absolute -top-10 ${isLeft ? '-right-4' : '-left-4'} 
        text-7xl md:text-8xl font-black text-white/[0.03] pointer-events-none select-none
        group-hover:text-white/[0.05] transition-colors
      `}>
        {item.year}
      </span>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-cyan-500/80 font-medium mb-4 flex items-center gap-2">
          {item.company} 
          <span className="w-1 h-1 rounded-full bg-neutral-700" />
          <span className="text-neutral-400 text-sm">{item.location}</span>
        </p>
        
        <p className="text-neutral-400 leading-relaxed mb-6">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech: string) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
