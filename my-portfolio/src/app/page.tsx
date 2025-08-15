'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function Home() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {particlesReady && (
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "repulse" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false },
              },
              resize: { enable: true },
            },
            modes: {
              push: { quantity: 2 },
              repulse: { distance: 140, duration: 0.35 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.9,
              straight: false,
            },
            number: { density: { enable: true }, value: 260 },
            opacity: { value: 0.22 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />)}
      
      <Navbar />
      <div className="relative z-10 w-full">
        <div className="w-full flex flex-col items-center">
          <Hero />
          <div className="py-48 sm:py-60 lg:py-72"></div>
          
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </section>
          <div className="py-48 sm:py-60 lg:py-72"></div>
          
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skills />
          </section>
          <div className="py-48 sm:py-60 lg:py-72"></div>
          
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Education />
          </section>
          <div className="py-48 sm:py-60 lg:py-72"></div>
          
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Experience />
          </section>
          <div className="py-48 sm:py-60 lg:py-72"></div>
          
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </section>
          <div className="py-48 sm:py-60 lg:py-72"></div>
          
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </section>
          <div className="py-32"></div>
        </div>
      </div>
    </div>
  );
}
