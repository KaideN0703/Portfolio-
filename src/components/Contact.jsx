import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(showCopiedNotice);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        showCopiedNotice();
      } catch (err) {
        console.error('Copy failed', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const showCopiedNotice = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-bottom-subtle py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="w-10 h-[1px] bg-white/30"></div>
            <span className="text-[11px] font-mono uppercase tracking-[.2em] text-neutral-500">05</span>
            <div className="w-10 h-[1px] bg-white/30"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white mb-4 reveal d1">LET'S CONNECT</h2>
          <p className="text-neutral-400 text-sm reveal d2">Have a project in mind? Let's build something great together.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 max-w-5xl mx-auto reveal-scale d3">
          <a href="https://www.facebook.com/yasser.angkay.casim" target="_blank" rel="noopener noreferrer" className="bg-[#050505] p-8 text-center group mag">
            <p className="text-lg font-black tracking-tight text-white mb-1">Facebook</p>
            <p className="text-[10px] font-mono text-neutral-500 tracking-widest">@yasser.casim</p>
            <div className="w-6 h-[1px] bg-white/0 group-hover:bg-white mx-auto mt-4 transition-all duration-500"></div>
          </a>
          <a href="https://github.com/KaideN0703" target="_blank" rel="noopener noreferrer" className="bg-[#050505] p-8 text-center group mag">
            <p className="text-lg font-black tracking-tight text-white mb-1">GitHub</p>
            <p className="text-[10px] font-mono text-neutral-500 tracking-widest">@KaideN0703</p>
            <div className="w-6 h-[1px] bg-white/0 group-hover:bg-white mx-auto mt-4 transition-all duration-500"></div>
          </a>
          <a href="https://linkedin.com/in/yassercasim" target="_blank" rel="noopener noreferrer" className="bg-[#050505] p-8 text-center group mag">
            <p className="text-lg font-black tracking-tight text-white mb-1">LinkedIn</p>
            <p className="text-[10px] font-mono text-neutral-500 tracking-widest">Yasser Casim</p>
            <div className="w-6 h-[1px] bg-white/0 group-hover:bg-white mx-auto mt-4 transition-all duration-500"></div>
          </a>
          <div
            onClick={() => handleCopyEmail('yassercasim@gmail.com')}
            className="bg-[#050505] p-8 text-center group mag cursor-pointer"
          >
            <p className="text-lg font-black tracking-tight text-white mb-1">Email</p>
            <p className="text-[10px] font-mono text-neutral-500 tracking-widest">
              {copied ? 'Copied to clipboard!' : 'Copy to clipboard'}
            </p>
            <div className="w-6 h-[1px] bg-white/0 group-hover:bg-white mx-auto mt-4 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
