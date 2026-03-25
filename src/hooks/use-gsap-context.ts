"use client";

import { useLayoutEffect, useMemo } from "react";
import gsap from "gsap";

/**
 * Reusable GSAP Context hook to handle scoped animations and cleanups.
 * @param scope The React ref or selector for the animation scope.
 * @returns A GSAP context instance.
 */
export const useGsapContext = (scope?: React.RefObject<Element | null>) => {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);

  useLayoutEffect(() => {
    return () => ctx.revert();
  }, [ctx]);

  return ctx;
};
