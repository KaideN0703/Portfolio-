import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { usePortfolioEffects } from './hooks/usePortfolioEffects';

export default function App() {
  usePortfolioEffects();

  return (
    <div id="top" className="min-h-screen flex flex-col relative">
      {/* Top Scroll Progress Indicator */}
      <div id="scroll-progress"></div>

      {/* Interactive Cursor Spotlight Glow */}
      <div className="cursor-spotlight"></div>

      <Header />

      <main className="flex-grow pt-[72px]">
        <Hero />
        <Marquee />
        <Capabilities />
        <Experience />
        <Projects />
        <Metrics />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
