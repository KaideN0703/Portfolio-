import { useEffect } from 'react';

export function usePortfolioEffects() {
  useEffect(() => {
    // Mouse Spotlight Position
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    // Scroll Progress Bar
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active Section Observer
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    let navObserver;
    if ('IntersectionObserver' in window && sections.length) {
      navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach((link) => {
                if (link.getAttribute('href') === `#${id}`) {
                  link.classList.add('nav-active');
                } else {
                  link.classList.remove('nav-active');
                }
              });
            }
          });
        },
        { threshold: 0.3 }
      );
      sections.forEach((sec) => navObserver.observe(sec));
    }

    // Scroll Reveal Intersection Observer
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur');
    let revealObserver;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('show'));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('show');
              revealObserver.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      els.forEach((el) => revealObserver.observe(el));
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (navObserver) navObserver.disconnect();
      if (revealObserver) revealObserver.disconnect();
    };
  }, []);
}
