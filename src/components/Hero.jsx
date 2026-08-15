import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="hero-gradient relative min-h-[90vh] flex items-center">
      {/* Giant Background Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[30vw] font-black text-white/[.02] leading-none tracking-tighter hero-bg-yc">YC</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          {/* Left: Text */}
          <div className="space-y-8 lg:pr-16">
            <div className="flex items-center gap-3 reveal" data-aos="fade-right" data-aos-delay="0">
              <div className="w-10 h-[1px]" style={{ backgroundColor: 'var(--teal-accent)', opacity: 0.7 }}></div>
              <span className="text-[11px] font-mono uppercase tracking-[.2em]" style={{ color: 'var(--teal-accent)' }}>Full-Stack Developer</span>
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[.88] tracking-tighter text-white reveal d1" data-aos="fade-up" data-aos-delay="100">
              YASSER<br />CASIM
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-md reveal d2" data-aos="fade-up" data-aos-delay="200">
              I craft digital experiences with a focus on clean architecture, pixel-perfect design, and absolute performance.
            </p>

            <div className="flex flex-wrap items-center gap-4 reveal d3" data-aos="fade-up" data-aos-delay="300">
              <a href="#projects" className="group inline-flex items-center gap-3 font-bold text-sm px-8 py-4 border transition-all duration-300"
                style={{ background: 'var(--teal-accent)', color: '#050505', borderColor: 'var(--teal-accent)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--teal-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal-accent)'; e.currentTarget.style.color = '#050505'; }}>
                <span>SEE MY WORK</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="group inline-flex items-center gap-3 bg-transparent text-white font-bold text-sm px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300">
                <span>GET IN TOUCH</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative reveal-scale d2" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative aspect-[3/4] max-w-[480px] mx-auto lg:ml-auto overflow-hidden teal-glow">
              <img src="/assets/images/profile.png" alt="Yasser Casim" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
