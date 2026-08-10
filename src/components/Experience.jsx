import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="border-bottom-subtle">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Sticky Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-white/30"></div>
              <span className="text-[11px] font-mono uppercase tracking-[.2em] text-neutral-500">02</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4">EXPERIENCE & EDUCATION</h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">Academic background, technical coursework, and ongoing engineering experience.</p>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-[#050505] p-8 sm:p-10 border border-white/10 group mag reveal shine-card d1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">BS in Information Technology</h3>
                  <p className="text-sm text-neutral-400 font-mono">3rd Year Student • Full-Stack Track</p>
                </div>
                <span className="text-xs font-mono text-neutral-500 bg-white/5 border border-white/10 px-3 py-1 self-start sm:self-center">2022 — PRESENT</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Pursuing a Bachelor of Science in Information Technology with a focus on web application architecture, database management, backend engineering, and modern software development practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 border border-white/5 uppercase">Web Development</span>
                <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 border border-white/5 uppercase">Database Systems</span>
                <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 border border-white/5 uppercase">Software Architecture</span>
                <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 border border-white/5 uppercase">OOP & DS</span>
              </div>
            </div>

            <div className="bg-[#050505] p-8 sm:p-10 border border-white/10 group mag reveal shine-card d2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Full-Stack Web Developer</h3>
                  <p className="text-sm text-neutral-400 font-mono">Independent & System Development</p>
                </div>
                <span className="text-xs font-mono text-neutral-500 bg-white/5 border border-white/10 px-3 py-1 self-start sm:self-center">2023 — PRESENT</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Designing and building full-stack web applications, employee records management systems (HRIS), point-of-sale platforms (POS), and custom software tools prioritizing clean design and optimized performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
