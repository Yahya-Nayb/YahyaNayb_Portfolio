'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { WorkProject } from '@/data/projects';

export default function WorkDetailView({ project }: { project: WorkProject }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useMotionTemplate`${mx}px`;
  const ty = useMotionTemplate`${my}px`;

  return (
    <div className="bg-black text-white">
      <header className="mx-auto max-w-7xl px-6 pb-10 pt-28 md:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Case Study</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-base text-neutral-300 md:text-lg">{project.summary}</p>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-neutral-950 p-3 md:p-4">
          <div className="h-[65vh] overflow-y-auto rounded-2xl border border-white/10">
            <img src={project.heroMockup} alt={`${project.title} main page mockup`} className="h-auto min-h-[120vh] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:px-10 lg:px-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Image Gallery</h2>
        <div className="mt-8 columns-1 gap-4 md:columns-2">
          {project.gallery.map((item) => (
            <motion.figure key={item.id} whileHover={{ scale: 1.01 }} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-2">
              <img src={item.src} alt={item.alt} className="h-auto w-full rounded-xl object-cover" />
              <figcaption className="px-2 pb-1 pt-3 text-xs uppercase tracking-widest text-neutral-500">{item.viewport} view</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 pb-24 md:px-10 lg:px-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Technical Deep Dive</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500">The Challenge</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">{project.challenge}</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500">The Solution</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">{project.solution}</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500">Key Features</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-300">
              {project.features.map((feature) => (
                <li key={feature} className="border-l border-white/20 pl-3">
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <motion.div
        className="fixed bottom-7 left-7 z-50"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          mx.set(dx * 0.18);
          my.set(dy * 0.18);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        style={{ x: tx, y: ty }}
        transition={{ type: 'spring', stiffness: 240, damping: 18 }}>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white backdrop-blur-xl transition-colors hover:border-white/30">
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>
      </motion.div>
    </div>
  );
}
