import React from 'react';

export default function Metrics() {
  return (
    <section id="metrics" className="border-bottom-subtle">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-4 reveal">
          <div className="w-10 h-[1px] bg-white/30"></div>
          <span className="text-[11px] font-mono uppercase tracking-[.2em] text-neutral-500">04</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white mb-16 reveal d1">METRICS</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/10 reveal-scale d2">
          <div className="bg-[#050505] p-10 lg:p-14 flex flex-col items-center justify-center text-center">
            <h3 className="text-[10px] font-mono uppercase tracking-[.2em] text-neutral-500 mb-8">Wakatime Coding Activity</h3>
            <a href="https://wakatime.com/@c1d2f93e-d295-42dd-aff2-c934d76f77f7" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <img src="https://wakatime.com/badge/user/c1d2f93e-d295-42dd-aff2-c934d76f77f7.svg" alt="Wakatime Hours" loading="lazy" className="h-10 opacity-70 grayscale hover:grayscale-0 transition-all" />
            </a>
          </div>
          <div className="bg-[#050505] p-10 lg:p-14 flex flex-col items-center justify-center text-center">
            <h3 className="text-[10px] font-mono uppercase tracking-[.2em] text-neutral-500 mb-4">Version Control</h3>
            <a href="https://github.com/KaideN0703" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
              <img src="/assets/icons/github_dark.svg" alt="GitHub" className="w-5 h-5 opacity-80" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">GitHub @KaideN0703</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
