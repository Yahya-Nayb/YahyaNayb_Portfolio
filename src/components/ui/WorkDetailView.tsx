'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { WorkProject } from '@/data/projects';
import { X } from 'lucide-react';

export default function WorkDetailView({ project }: { project: WorkProject }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useMotionTemplate`${mx}px`;
  const ty = useMotionTemplate`${my}px`;
  const [galleryView, setGalleryView] = useState<'all' | 'desktop' | 'mobile'>('all');

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = galleryView === 'all' ? project.gallery : project.gallery.filter((item) => item.viewport === galleryView);

  return (
    <div className="bg-black text-white">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out">
            <motion.button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedImage(null)}>
              <X className="h-8 w-8" />
            </motion.button>

            <motion.img
              layoutId={selectedImage}
              src={selectedImage}
              className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="fixed top-7 left-7 z-50"
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
          Back
        </Link>
      </motion.div>
      <motion.header layout className="mx-auto max-w-7xl px-6 pb-10 pt-28 md:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Case Study</p>
          <div className="flex flex-wrap gap-4 mt-8">
            {/* زر الـ Live Demo */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105 active:scale-95">
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}

            {/* زر الـ GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10">
                <Github size={14} />
                Source Code
              </a>
            )}
          </div>
        </div>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-base text-neutral-300 md:text-lg">{project.summary}</p>
      </motion.header>

      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-neutral-950 p-3 md:p-4">
          <div className="relative h-[65vh] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
            <motion.img
              src={project.heroMockup}
              alt={project.title}
              className="h-full w-full object-cover"
              initial={{ objectPosition: 'top' }}
              animate={{
                objectPosition: ['0% 0%', '0% 100%', '0% 0%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Image Gallery</h2>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950/80 p-1">
            {(['all', 'desktop', 'mobile'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setGalleryView(view)}
                className={`rounded-full px-4 cursor-pointer py-1.5 text-xs uppercase tracking-wider transition ${galleryView === view ? 'bg-white text-black' : 'text-neutral-300 hover:bg-white/10'}`}>
                {view}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={galleryView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            /* التعديل هنا: استخدمنا grid بدلاً من columns لضمان تساوي الارتفاع في كل صف */
            className={`mt-8 ${galleryItems.length > 0 ? 'grid grid-cols-1 gap-4 md:grid-cols-2' : 'flex flex-col items-center justify-center w-full'}`}>
            {galleryItems.length > 0 ? (
              galleryItems.map((item) => (
                <motion.figure
                  key={item.id}
                  layout
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setSelectedImage(item.src)}
                  className="overflow-hidden cursor-pointer rounded-2xl border border-white/10 bg-neutral-950 p-2">
                  {/* التعديل هنا: حاوية تثبت الحجم (4/3) وتستخدم object-cover لملء الفراغ */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900">
                    <motion.img src={item.src} layoutId={item.src} alt={item.alt} className="h-full w-full object-cover object-top" />
                  </div>

                  <figcaption className="px-2 pb-1 pt-3 text-xs uppercase tracking-widest text-neutral-500">{item.viewport} view</figcaption>
                </motion.figure>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center w-full col-span-full">
                <h2 className="text-xl font-small tracking-tight text-neutral-500 md:text-md">No {galleryView} images available for this project.</h2>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
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
    </div>
  );
}
