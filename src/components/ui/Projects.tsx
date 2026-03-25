'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { WORK_PROJECTS } from '@/data/projects';

/**
 * Projects Section Component.
 * Interactive spotlight bento grid linked to dynamic work pages.
 */
export default function Projects() {
  return (
    <section id="work" className="relative bg-black px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Selected Works</p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl">
            Spotlight <span className="font-semibold italic">Grid</span>
          </h2>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[240px]">
          {WORK_PROJECTS.map((project) => (
            <SpotlightCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ project }: { project: (typeof WORK_PROJECTS)[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 70%)`;

  return (
    <motion.div whileHover={{ scale: 1.015 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }} className={project.gridClassName}>
      <Link
        href={`/work/${project.id}`}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set(event.clientX - rect.left);
          y.set(event.clientY - rect.top);
        }}
        className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-6 md:p-7">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
            <ArrowUpRight className="h-5 w-5 text-neutral-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <p className="mt-3 max-w-md text-sm text-neutral-300">{project.tagline}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-neutral-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
