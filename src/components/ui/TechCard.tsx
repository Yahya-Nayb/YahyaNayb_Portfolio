"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  level: string;
  className?: string;
  speed?: number;
}

/**
 * TechCard Component for the Bento Grid.
 * Handles GSAP hover scaling, glow effects, and parallax motion.
 */
export default function TechCard({
  title,
  items,
  icon: Icon,
  level,
  className = "",
  speed = 0.05,
}: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Initial Reveal State (for ScrollTrigger to animate from)
    gsap.set(cardRef.current, { opacity: 0, scale: 0.9, y: 30 });
  }, { scope: cardRef });

  // 2. Hover Interaction Logic
  const onMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      borderColor: "rgba(255, 255, 255, 0.2)",
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.2,
      duration: 0.6,
    });
    gsap.to(iconRef.current, {
      rotate: 12,
      scale: 1.2,
      filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      borderColor: "rgba(255, 255, 255, 0.05)",
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap.to(glowRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.6,
    });
    gsap.to(iconRef.current, {
      rotate: 0,
      scale: 1,
      filter: "drop-shadow(0 0 0px rgba(255,255,255,0))",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-speed={speed}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-colors hover:bg-white/[0.06] ${className}`}
    >
      {/* Background Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity"
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div
          ref={iconRef}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white"
        >
          <Icon size={24} />
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="rounded-lg bg-white/5 px-3 py-1 text-xs font-light text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Tooltip simulation */}
      <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
          Tech Level: Advanced
        </span>
      </div>
    </div>
  );
}
