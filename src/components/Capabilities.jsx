import React from 'react';

const CAPABILITIES = [
  { id: '01', title: 'HTML5', category: 'MARKUP', icon: '/assets/icons/html5.svg', delay: '' },
  { id: '02', title: 'CSS3', category: 'STYLING', icon: '/assets/icons/css.svg', delay: 'd1' },
  { id: '03', title: 'JavaScript', category: 'LOGIC', icon: '/assets/icons/javascript.svg', delay: 'd2' },
  { id: '04', title: 'TypeScript', category: 'TYPED JS', icon: '/assets/icons/typescript.svg', delay: '' },
  { id: '05', title: 'React.js', category: 'FRONTEND', icon: '/assets/icons/react_dark.svg', delay: 'd1' },
  { id: '06', title: 'PHP', category: 'BACKEND', icon: '/assets/icons/php_dark.svg', delay: 'd2' },
  { id: '07', title: 'Laravel', category: 'FRAMEWORK', icon: '/assets/icons/laravel.svg', delay: '' },
  { id: '08', title: 'MySQL', category: 'DATABASE', icon: '/assets/icons/mysql-icon-dark.svg', delay: 'd1' },
  { id: '09', title: 'Tailwind', category: 'UTILITY CSS', icon: '/assets/icons/tailwindcss.svg', delay: 'd2' },
  { id: '10', title: 'Git', category: 'VERSION CTRL', icon: '/assets/icons/git.svg', delay: '' },
  { id: '11', title: 'VS Code', category: 'ENVIRONMENT', icon: '/assets/icons/vscode.svg', delay: 'd1' },
  { id: '12', title: 'Figma', category: 'DESIGN', icon: '/assets/icons/figma.svg', delay: 'd2' },
];

export default function Capabilities() {
  return (
    <section id="skills" className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Sticky Label */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-white/30"></div>
            <span className="text-[11px] font-mono uppercase tracking-[.2em] text-neutral-500">01</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4">CAPABILITIES</h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            Technologies and tools I use to build modern, performant web experiences.
          </p>
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1px] bg-white/10">
            {CAPABILITIES.map((item) => (
              <div
                key={item.id}
                className={`bg-[#050505] p-8 group mag reveal shine-card ${item.delay} flex flex-col justify-between min-h-[160px]`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black tracking-tighter text-white/80 group-hover:text-white transition-colors">
                    {item.id}
                  </span>
                  <img
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    className="w-7 h-7 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold mt-4 text-white">{item.title}</p>
                  <p className="text-[11px] text-neutral-500 mt-1 font-mono">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
