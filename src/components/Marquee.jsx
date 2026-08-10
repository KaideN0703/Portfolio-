import React from 'react';

const SKILLS = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js',
  'PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Git', 'Figma'
];

export default function Marquee() {
  return (
    <section className="border-bottom-subtle py-5 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {SKILLS.map((skill, idx) => (
          <React.Fragment key={`orig-${idx}`}>
            <span className="text-[11px] font-mono uppercase tracking-[.25em] text-white/20 mx-8">{skill}</span>
            <span className="text-white/10">✦</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {SKILLS.map((skill, idx) => (
          <React.Fragment key={`dup-${idx}`}>
            <span className="text-[11px] font-mono uppercase tracking-[.25em] text-white/20 mx-8">{skill}</span>
            <span className="text-white/10">✦</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
