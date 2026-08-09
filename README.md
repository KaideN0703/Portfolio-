# ⚡ Yasser Casim — Developer Portfolio

[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20JS-050505?style=for-the-badge&labelColor=050505&color=fafafa)](https://github.com/KaideN0703/Portfolio-)
[![Developer](https://img.shields.io/badge/Developer-Yasser%20Casim-050505?style=for-the-badge&labelColor=050505&color=fafafa)](https://github.com/KaideN0703)

A high-performance, dark-mode minimalist personal portfolio designed for **Yasser Casim**, Full-Stack Developer and 3rd Year BS-IT student. Built with semantic HTML5, modern Tailwind CSS v4, custom CSS keyframe animations, and zero-dependency Vanilla JavaScript.

---

## 🎯 AI Assistant Context & Prompting Guide (For Claude / LLMs)

> **Attention AI Assistants (Claude, ChatGPT, Gemini, Antigravity):**
> When asked to maintain, refactor, or add features to this repository, strictly adhere to the following design system, code conventions, and architectural patterns.

### 🎨 Design System & Aesthetic Principles
1. **Monochrome Dark Aesthetic:** Background `#050505`, primary text `#fafafa`, subtle borders `rgba(255,255,255,.1)`. Avoid unnecessary bright rainbow background colors unless explicitly requested.
2. **Typography:** Primary sans-serif font is **Outfit**; code & technical text font is **JetBrains Mono**.
3. **Animations & Micro-interactions:**
   - Use `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` utility classes driven by `IntersectionObserver`.
   - Magnetic hover scaling is applied via `.mag` (`transform: scale(1.02)`).
   - Ticker marquee animations use `.marquee-track` with CSS `@keyframes marquee`.
4. **No Heavy Framework Overhead:** Keep this project lightweight and dependency-free. Do not add React, Vue, or heavy npm bundles unless requested by the user.

---

## 📁 Repository Structure

```text
Portfolio/
├── assets/
│   ├── icons/                  # SVG & PNG Tech Stack Icons
│   │   ├── html5.svg
│   │   ├── css.svg
│   │   ├── javascript.svg
│   │   ├── react_dark.svg
│   │   ├── php_dark.svg
│   │   ├── mysql-icon-dark.svg
│   │   ├── tailwindcss.svg
│   │   ├── git.svg
│   │   ├── figma.svg
│   │   ├── typescript.svg
│   │   ├── vscode.svg
│   │   ├── bash_dark.svg
│   │   └── ... (additional tool icons)
│   └── images/                 # Project Case Studies & Profile Media
│       ├── profile.png         # Main profile hero photo (1000x1000px optimized)
│       ├── HRIS.png            # Mini-HRIS project preview
│       └── POS.png             # POS System project preview
├── index.html                  # Core application file (HTML, CSS Tokens, JS logic)
└── README.md                   # Repository documentation & AI Context
```

---

## 🛠️ Tech Stack & Features

- **Frontend Core:** HTML5, Tailwind CSS v4 Browser JIT (`@tailwindcss/browser@4`), Custom CSS Variables.
- **Typography:** Google Fonts (`Outfit` & `JetBrains Mono`).
- **Icons & Graphics:** Native SVG icons with responsive hover scaling.
- **Interactivity:**
  - Responsive mobile drawer menu (`#mobileNav`) with auto-closing link handlers.
  - Smooth-scrolling section anchor navigation (`#about`, `#skills`, `#projects`, `#contact`).
  - Asynchronous clipboard copy API with fallback for non-secure HTTP environments.
  - Real-time `IntersectionObserver` scroll animation triggers.

---

## 💡 Prompting Claude AI for Improvements

When sharing this project with **Claude AI**, you can copy and paste prompt templates like these:

### 🌟 Example Prompt 1: Adding a New Project Case Study
> *"Read the `README.md` and `index.html`. I want to add a 3rd featured project called 'iRepairShop System' (built with PHP, MySQL, and Tailwind). Follow the existing `.reveal-scale` design pattern in the Selected Projects section."*

### 🌟 Example Prompt 2: Integrating a Working Contact Form
> *"Review `index.html` contact section. Replace the static email copy card with a functional AJAX contact form using Web3Forms or Formspree while maintaining the existing `#050505` dark minimalist style."*

### 🌟 Example Prompt 3: Adding a Light/Dark Theme Switcher
> *"Using the design tokens in `index.html`, write a clean JavaScript toggle button in the sticky header to switch between Dark Mode (`#050505`) and Light Mode (`#f5f5f5`) while persisting choice in `localStorage`."*

---

## 🚀 Local Development Setup

To run and preview the portfolio locally:

```bash
# Using Python 3 built-in HTTP server
python3 -m http.server 8000

# Or using Node.js serve
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

© 2025 – 2026 **Yasser Casim**. Built with HTML5, Tailwind CSS & JavaScript.
