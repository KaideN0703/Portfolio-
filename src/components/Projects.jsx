import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="border-bottom-subtle">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-4 reveal">
          <div className="w-10 h-[1px] bg-white/30"></div>
          <span className="text-[11px] font-mono uppercase tracking-[.2em] text-neutral-500">03</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white mb-16 reveal d1">SELECTED PROJECTS</h2>

        {/* Project 1: HRIS — Full Width */}
        <a href="https://github.com/KaideN0703" target="_blank" rel="noopener noreferrer" className="block group mb-20 reveal-scale">
          <div className="block relative overflow-hidden aspect-[16/7]">
            <img src="/assets/images/HRIS.png" alt="HRIS System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex justify-between items-end">
              <div>
                <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-2">Mini-HRIS</h3>
                <p className="text-neutral-300 text-sm max-w-md">Employee records, attendance management, department mapping, and administrative controls.</p>
              </div>
              <span className="hidden sm:flex items-center gap-2 bg-white text-black font-bold text-xs px-6 py-3 uppercase tracking-widest border border-white shrink-0 group-hover:bg-transparent group-hover:text-white transition-all duration-300">
                View Repository
              </span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">PHP</span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">MySQL</span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Tailwind</span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">JavaScript</span>
          </div>
        </a>

        {/* Project 2: POS — Full Width */}
        <a href="https://github.com/KaideN0703" target="_blank" rel="noopener noreferrer" className="block group reveal-scale d2">
          <div className="block relative overflow-hidden aspect-[16/7]">
            <img src="/assets/images/POS.png" alt="POS System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex justify-between items-end">
              <div>
                <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-2">POS System</h3>
                <p className="text-neutral-300 text-sm max-w-md">Modern Point of Sale interface for fast transactions, dynamic cart, and receipt generation.</p>
              </div>
              <span className="hidden sm:flex items-center gap-2 bg-white text-black font-bold text-xs px-6 py-3 uppercase tracking-widest border border-white shrink-0 group-hover:bg-transparent group-hover:text-white transition-all duration-300">
                View Repository
              </span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">JavaScript ES6</span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">HTML / CSS</span>
          </div>
        </a>

      </div>
    </section>
  );
}
