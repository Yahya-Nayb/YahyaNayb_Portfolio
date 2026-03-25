"use client";

/**
 * NoiseOverlay Component for adding a subtle grain texture to the background.
 */
export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] h-full w-full overflow-hidden">
      <div className="absolute inset-[-200%] h-[400%] w-[400%] animate-noise bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
    </div>
  );
}
