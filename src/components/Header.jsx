import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-bottom-subtle">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="font-mono font-bold text-lg text-white border border-white/30 w-10 h-10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              YC
            </span>
            <span className="hidden sm:block font-semibold tracking-tight text-white">Yasser Casim</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
            <a href="#top" className="text-white hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:block text-[13px] font-semibold bg-white text-black px-5 py-2.5 hover:bg-transparent hover:text-white border border-white transition-all duration-300">
              Contact
            </a>
            <button
              id="menuBtn"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-10 h-10 border-subtle flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobileNav"
          className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col gap-1 pb-6 pt-2 border-bottom-subtle`}
        >
          <a href="#top" onClick={closeMobileMenu} className="block px-4 py-2.5 text-sm text-white font-semibold">Home</a>
          <a href="#about" onClick={closeMobileMenu} className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">About</a>
          <a href="#skills" onClick={closeMobileMenu} className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">Skills</a>
          <a href="#experience" onClick={closeMobileMenu} className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">Experience</a>
          <a href="#projects" onClick={closeMobileMenu} className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">Projects</a>
          <a href="#metrics" onClick={closeMobileMenu} className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">Metrics</a>
          <a href="#contact" onClick={closeMobileMenu} className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">Contact</a>
        </nav>
      </div>
    </header>
  );
}
