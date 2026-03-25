'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { WorkProject } from '@/data/projects';

interface ProjectCardProps {
  project: WorkProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 72%)`;

  return (
    <motion.div layout whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }} className={project.gridClassName}>
      <Link
        href={`/work/${project.id}`}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set(event.clientX - rect.left);
          y.set(event.clientY - rect.top);
        }}
        className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />

        <div className="absolute inset-0">
          <img src={project.heroMockup} alt={`${project.title} preview`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-110" />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-20 flex h-full flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{project.title}</h3>
            <ArrowUpRight className="mt-1 h-5 w-5 text-neutral-200 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <p className="mt-3 max-w-xl text-sm text-neutral-200 md:text-base">{project.tagline}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.tech.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-neutral-100">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
