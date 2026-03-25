"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Lenis",
  "Laravel",
  "PHP",
  "MySQL",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Lenis",
  "Laravel",
  "PHP",
  "MySQL",
  "Node.js",
  "Express",
  "MongoDB",
];

/**
 * Tech Ticker Component for a scrolling marquee effect.
 */
export default function TechTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const totalWidth = ticker.scrollWidth;

    gsap.to(ticker, {
      x: -totalWidth / 2,
      duration: 30,
      repeat: -1,
      ease: "none",
    });
  }, { scope: tickerRef });

  return (
    <div className="w-full overflow-hidden border-y border-white/5 py-4 backdrop-blur-sm">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap"
      >
        {techs.map((tech, idx) => (
          <span
            key={idx}
            className="mx-8 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
