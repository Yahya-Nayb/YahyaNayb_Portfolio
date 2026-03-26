'use client';

import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import TechStack from '@/components/ui/TechStack';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';
import Projects from '@/components/ui/Projects';
import NoiseOverlay from '@/components/ui/NoiseOverlay';

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main className="flex flex-col bg-black">
        <Hero />
        <TechStack />
        <ExperienceTimeline />
        <Projects />
      </main>
    </>
  );
}
