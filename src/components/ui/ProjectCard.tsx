"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ChevronDown, ChevronUp, Code2 } from "lucide-react";
import MagneticButton from "./MagneticButton";

// Ensure ScrollTrigger is registered.
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  story: string;
  tech: string[];
  coreValue: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  containerAnimation?: gsap.core.Tween | null;
}

/**
 * ProjectCard Component.
 * Features character-reveal titles, parallax mockups, and expandable technical breakdowns.
 */
export default function ProjectCard({ project, index, containerAnimation }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    const isHorizontal = !!containerAnimation;
    const start = isHorizontal ? "left center" : "top 80%";
    const end = isHorizontal ? "right center" : "bottom center";

    gsap.to(imageRef.current, {
      x: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        containerAnimation: containerAnimation ?? undefined,
        start,
        end,
        scrub: true,
      },
    });
  }, { scope: containerRef, dependencies: [containerAnimation] });

  // 3. Technical Breakdown Expansion
  const toggleDetails = () => {
    const details = detailsRef.current;
    if (!details) return;

    if (!isExpanded) {
      gsap.fromTo(details, 
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(details, { height: 0, opacity: 0, duration: 0.4, ease: "power3.in" });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen w-screen shrink-0 items-center justify-center bg-black px-8 md:px-24"
    >
      <div className="grid h-full w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        
        {/* Left: Narrative Content */}
        <div className="z-10 flex flex-col justify-center order-2 md:order-1">
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
            Project 0{index + 1}
          </span>
          
          <h3
            ref={titleRef}
            className="text-5xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl"
          >
            {project.title}
          </h3>

          <p className="mt-8 text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
            {project.story}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-neutral-300">
                {t}
              </span>
            ))}
          </div>

          {/* Technical Reveal Toggle */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
            <button 
              onClick={toggleDetails}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <Code2 size={20} className="text-neutral-500" />
                <span className="text-sm font-semibold uppercase tracking-widest text-neutral-300">
                  Technical Breakdown
                </span>
              </div>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            <div ref={detailsRef} className="h-0 overflow-hidden opacity-0">
              <div className="p-6 pt-0 border-t border-white/5">
                <p className="text-sm leading-relaxed text-neutral-500">
                  {project.coreValue}
                </p>
              </div>
            </div>
          </div>

          {/* Magnetic CTA Buttons */}
          <div className="mt-12 flex gap-6">
            <MagneticButton strength={0.15} className="h-12 w-40">
              <a href="#" className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-white text-xs font-bold uppercase tracking-widest text-black transition-transform active:scale-95">
                Live Demo <ExternalLink size={14} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.15} className="h-12 w-40">
              <a href="#" className="flex h-full w-full items-center justify-center gap-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:bg-white/5 active:scale-95">
                GitHub <Github size={14} />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right: Mockup/Visual */}
        <div className="relative flex items-center justify-center order-1 md:order-2 h-[40vh] md:h-full">
          <div
            ref={imageRef}
            className={`relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.color} p-1 shadow-2xl transition-transform duration-700 hover:scale-[1.02]`}
          >
            <div className="h-full w-full rounded-[1.4rem] bg-black/40 backdrop-blur-3xl flex items-center justify-center">
              <div className="text-center opacity-20">
                <div className="text-8xl font-black italic tracking-tighter text-white uppercase select-none">
                  {project.title.split(' ')[0]}
                </div>
              </div>
            </div>
            
            {/* Gloss Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
          </div>
          
          {/* Subtle Background Glow for the mockup */}
          <div className={`absolute -z-10 h-64 w-64 rounded-full blur-[120px] opacity-20 ${project.color.split(' ')[1]}`} />
        </div>
      </div>
    </div>
  );
}
