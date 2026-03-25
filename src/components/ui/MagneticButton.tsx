"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Magnetic Button component that subtly follows the cursor.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * strength;
      const y = (e.clientY - (top + height / 2)) * strength;

      gsap.to(content, {
        x,
        y,
        duration: 1,
        ease: "power3.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`relative flex items-center justify-center ${className}`}>
      <div ref={contentRef} className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
