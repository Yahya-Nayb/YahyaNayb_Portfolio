'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { WORK_PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';

/**
 * Projects Section Component.
 * Interactive spotlight bento grid linked to dynamic work pages.
 */
export default function Projects() {
  return (
    <section id="work" className="relative bg-black px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">Selected Works</h2>
          <p className="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl">
            The Work <span className="font-semibold text-white/90">Grid</span>
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[240px]">
            {WORK_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
