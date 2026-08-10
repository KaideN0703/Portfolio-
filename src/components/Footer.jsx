import React from 'react';

export default function Footer() {
  return (
    <footer className="border-top-subtle">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-white border border-white/30 w-8 h-8 flex items-center justify-center text-xs">YC</span>
          <span className="font-semibold text-sm tracking-widest uppercase text-white">Yasser Casim</span>
        </div>
        <div className="text-[10px] font-mono text-neutral-500 text-center sm:text-right space-y-1">
          <p>&copy; 2025 — 2026 Yasser Casim. All Rights Reserved.</p>
          <p>Built with React, Vite, Tailwind CSS & JavaScript</p>
        </div>
      </div>
    </footer>
  );
}
