'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { LayoutGrid, Server, Database, Settings } from 'lucide-react';
import TechCard from './TechCard';

const TECH_GROUPS = [
  {
    title: 'Frontend Engineering',
    items: ['Html', 'Css', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'React JS', 'Next JS'],
    icon: LayoutGrid,
    level: 'Advanced',
    className: 'md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2',
    speed: 0.1,
  },
  {
    title: 'Backend Development',
    items: ['PHP/Laravel', 'Node.js (Express)', 'Nest JS'],
    icon: Server,
    level: 'Expert',
    className: 'md:col-span-2 md:row-span-1 lg:col-span-4 lg:row-span-1',
    speed: 0.08,
  },
  {
    title: 'Database Management',
    items: ['MySQL', 'MongoDB', 'SQLite'],
    icon: Database,
    level: 'Intermediate',
    className: 'md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1',
    speed: 0.12,
  },
  {
    title: 'Dev Tools & Workflow',
    items: ['Git', 'GitHub', 'Docker', 'Linux'],
    icon: Settings,
    level: 'Advanced',
    className: 'md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1',
    speed: 0.05,
  },
];

/**
 * TechStack Section Component.
 * Features an interactive Bento Grid with ScrollTrigger reveals and mouse-parallax.
 */
export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Reveal Animation (ScrollTrigger)
      const cards = gsap.utils.toArray<HTMLElement>('[data-speed]');

      gsap.to(cards, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      // 2. Mouse Parallax Interaction
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = (clientX - centerX) / centerX;
        const y = (clientY - centerY) / centerY;

        cards.forEach((card) => {
          const speed = parseFloat(card.getAttribute('data-speed') || '0');
          gsap.to(card, {
            x: x * 20 * speed,
            y: y * 20 * speed,
            rotateX: -y * 10 * speed,
            rotateY: x * 10 * speed,
            duration: 1,
            ease: 'power2.out',
          });
        });
      };

      window.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="about" className="relative flex w-full flex-col items-center py-32 px-6 lg:px-24">
      {/* Background Decor */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.01] blur-3xl" />

      {/* Section Header */}
      <div className="mb-20 text-center">
        <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">Tech Stack & Expertise</h2>
        <p className="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl">
          Building with <span className="font-semibold text-white/90">modern</span> technologies.
        </p>
      </div>

      {/* Bento Grid */}
      <div ref={gridRef} className="grid w-full max-w-7xl auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {TECH_GROUPS.map((group, idx) => (
          <TechCard key={idx} title={group.title} items={group.items} icon={group.icon} level={group.level} className={group.className} speed={group.speed} />
        ))}
      </div>
    </section>
  );
}
