'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { WorkProject } from '@/data/projects';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: WorkProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 72%)`;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Target the specific elements for the sequential reveal
      const elements = ['.project-title', '.project-tagline', '.project-tech-stack'];

      gsap.from(elements, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <motion.div ref={containerRef} layout whileHover={{ scale: 1.015 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }} className={project.gridClassName}>
      <Link
        href={`/work/${project.id}`}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set(event.clientX - rect.left);
          y.set(event.clientY - rect.top);
        }}
        className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition-colors duration-500 hover:border-white/20">
        {/* Spotlight Effect Overlay */}
        {/* <motion.div className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: spotlight }} /> */}

        <div className="absolute inset-0">
          <img
            src={project.heroMockup}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/35" />
        </div>

        <div ref={cardContentRef} className="relative z-20 flex h-full flex-col p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="project-title text-2xl font-semibold tracking-tight text-white md:text-3xl">{project.title}</h3>
            <ArrowUpRight className="mt-1 h-5 w-5 text-neutral-200 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>

          <p className="project-tagline mt-2 line-clamp-2 max-w-xl text-sm text-neutral-200 md:text-base">{project.tagline}</p>

          <div className="project-tech-stack mt-auto flex flex-wrap gap-2 pt-6">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="whitespace-nowrap rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[9px] md:text-[11px] uppercase tracking-[0.14em] text-neutral-100 backdrop-blur-md transition-colors duration-300 group-hover:border-white/40">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
