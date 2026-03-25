'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    id: 'ghayth',
    title: 'GhaythApp',
    story: 'Streamlining property management by transforming manual processes into a unified, real-time financial tracking ecosystem.',
    tech: ['Next.js', 'Node.js (Express)', 'MongoDB'],
    coreValue: 'Optimized decision-making through transparent, live budgeting and transaction monitoring.',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'freelance',
    title: 'Freelance Hub',
    story: 'Architecting a seamless bridge between freelancers and clients, focused on trust and instant communication.',
    tech: ['React', 'Laravel', 'Socket.io', 'MySQL'],
    coreValue: 'Solved the latency gap in service-based interactions with an event-driven architecture.',
    color: 'from-purple-600 to-pink-500',
  },
  {
    id: 'velostream',
    title: 'VeloStream',
    story: 'Engineering a minimalist and rapid media processing engine designed for high-speed video streaming and downloading.',
    tech: ['Next.js', 'yt-dlp', 'Node.js'],
    coreValue: 'Demonstrates the ability to manage server-side processes and external CLI tools at scale.',
    color: 'from-red-600 to-orange-500',
  },
  {
    id: 'domainhunt',
    title: 'DomainHunt',
    story: "A specialized tool for the modern domainer, utilizing AI to analyze, filter, and 'hunt' for high-value digital real estate.",
    tech: ['Next.js', 'Tailwind CSS', 'AI APIs'],
    coreValue: 'Bridges Full Stack Development and the Domaining industry with intelligent data analysis.',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    id: 'gescanner',
    title: 'GeScanner',
    story: 'An advanced scanning solution designed to automate data extraction and provide structured insights from complex inputs.',
    tech: ['Next.js', 'Node.js', 'AI Workflows'],
    coreValue: 'Showcases Vibe Coding efficiency—building complex utility tools rapidly using AI-enhanced workflows.',
    color: 'from-neutral-600 to-neutral-400',
  },
];

/**
 * Projects Section Component.
 * Implements a horizontal scroll gallery for desktop and vertical stack for mobile.
 */
export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const trigger = triggerRef.current;

      if (!section || !trigger) return;

      // Only horizontal scroll on desktop (md and up)
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const pin = gsap.to(section, {
          x: () => -(section.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: trigger,
            start: 'top top',
            end: () => `+=${section.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => pin.kill();
      });

      // Character Reveal "Scramble" Logic (Global listener for the projects)
      const projectTitles = gsap.utils.toArray<HTMLElement>('h3');
      projectTitles.forEach((title) => {
        const originalText = title.innerText;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        ScrollTrigger.create({
          trigger: title,
          containerAnimation: window.innerWidth > 768 ? (gsap.globalTimeline as any) : undefined,
          start: 'left 80%',
          onEnter: () => {
            let iterations = 0;
            const interval = setInterval(() => {
              title.innerText = originalText
                .split('')
                .map((char, index) => {
                  if (index < iterations) return originalText[index];
                  return chars[Math.floor(Math.random() * 26)];
                })
                .join('');

              if (iterations >= originalText.length) {
                clearInterval(interval);
                title.innerText = originalText;
              }
              iterations += 1 / 3;
            }, 30);
          },
        });
      });
    },
    { scope: triggerRef },
  );

  return (
    <div ref={triggerRef} id="work" className="overflow-hidden bg-black">
      {/* Horizontal Container */}
      <div ref={sectionRef} className="flex h-screen w-fit flex-nowrap">
        {/* Section Intro Card */}
        <div className="flex h-screen w-screen shrink-0 flex-col items-center justify-center bg-black px-8 text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-neutral-500">Selected Works</h2>
          <p className="mt-6 text-4xl font-light tracking-tight text-white md:text-7xl lg:text-8xl">
            Technical <span className="font-semibold italic">Storytelling</span>.
          </p>
          <div className="mt-12 flex items-center gap-4 text-neutral-500">
            <span className="h-px w-12 bg-neutral-800"></span>
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <span className="h-px w-12 bg-neutral-800"></span>
          </div>
        </div>

        {/* Project Cards */}
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}

        {/* Closing Card */}
        <div className="flex h-screen w-screen shrink-0 flex-col items-center justify-center bg-black px-8 text-center">
          <p className="text-2xl font-light text-neutral-400 md:text-4xl">Want to see more?</p>
          <a href="https://github.com/yahya-nayb" target="_blank" rel="noopener noreferrer" className="group mt-8 text-4xl font-bold tracking-tighter text-white md:text-6xl">
            Check GitHub <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
