# Portfolio improvement instructions

Paste this into your IDE AI (Cursor, Copilot Chat, Claude Code, etc.) along with `index.html`. Work through it in order — the first section is blocking issues, the second is polish.

**Preserve the existing design system while making these changes:** monochrome dark aesthetic (`#050505` background, `#fafafa` text, `rgba(255,255,255,.1)` borders), Outfit for body texc JetBrains Mono for labels/code, the `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale` scroll-animation classes, and the `.mag` hover-scale utility. Don't introduce a new framework or component library — this stays a single-file, vanilla HTML/Tailwind v4 build.

---

## Part 1 — Critical fixes (do these first)

### 1. Replace the placeholder email
The contact section currently has `data-copy="yassercasim@example.com"` — that's a fake/example address. Find this block and replace it with my real email:
```html
<div data-copy="yassercasim@exmple.com" ...>
```
Ask me for my real email before making this change if it's not already in the file.

### 2. Add a résumé download
Add a prominent "Download Resume" or "View Resume" button in the hero section, next to the existing "SEE MY WORK" button. It should link to a PDF (e.g. `assets/resume.pdf`) and use `download` attribute so it downloads directly:
```html
<a href="assets/resume.pdf" download class="...">Download Resume</a>
```
Match the existing button styling pattern used for "SEE MY WORK" (white bg / black text, inverts on hover). Ask me to supply the actual PDF file — don't fabricate content.

### 3. Add LinkedIn and GitHub links
Right now the only social link is Facebook. Add LinkedIn and GitHub:
- In the header (as icon links, near the Contact button), OR
- In the footer, OR
- As additional cards in the `#contact` section grid (currently 2 cards: Facebook, Email — expand to include LinkedIn and GitHub as a 4-card grid)

Ask me for my LinkedIn and GitHub URLs if they're not already in the file. Use simple inline SVG icons or text labels consistent with the existing minimalist style — no icon font dependency needs to be added for just two icons.

### 4. Make project cards actually clickable
The "Mini-HRIS" and "POS System" cards in `#projects` have hover effects (grayscale-to-color, scale) that imply interactivity, but the outer `<div class="group ...">` has no `href`. Wrap each project block in an `<a>` tag pointing to either:
- A live demo URL, or
- The GitHub repo for that specific project

Ask me for the demo/repo URLs for HRIS and POS if I haven't provided them. If a project genuinely has no public link yet, keep it as a `<div>` but say so explicitly in the UI (e.g. a small "Private repository" label) rather than leaving a silent dead click.

### 5. Fix the "10+ Projects" stat mismatch
The stats counter strip claims `10+` projects, but only 2 are shown in Selected Projects. Either:
- Add more project cards to match the claim, or
- Change the stat to the accurate number

Ask me which projects I want added if going the first route — don't invent fictional projects.

### 6. Add a real Experience/Education section
Currently "3rd Year BS-IT" is just a stat badge — there's no actual text describing education, coursework, internships, or certifications. Add a new section (after Capabilities, before Selected Projects) with real, crawlable text content — this also matters for SEO/ATS parsing, since none of the current page content describes my background in prose form. Follow the existing section pattern (numbered label like "01", "02", heading in the black/white type scale, `reveal` classes on entry).

Ask me for the actual content: school name, expected graduation, relevant coursework, any internships/OJT, certifications. Do not invent placeholder achievements or dates.

---

## Part 2 — Polish (after Part 1 is done)

### 7. Fix the Metrics section
It's currently a nearly-empty full-width block with just a WakaTime badge. Either expand it with more real signal (GitHub contribution graph embed, certification badges) or fold the WakaTime badge into another section and remove Metrics as a standalone block. Ask me which direction I prefer.

### 8. Replace "∞ Dedication" stat
This stat card reads as informal for a hiring audience. Replace it with something concrete and verifiable (e.g. a certification count, years of experience, or GitHub contributions) — ask me what real number to use.

### 9. Add Open Graph meta tags
Add to `<head>` so the link shows a proper preview when shared via LinkedIn/email/Slack:
```html
<meta property="og:title" content="Yasser Casim — Full-Stack Developer">
<meta property="og:description" content="[same as existing meta description]">
<meta property="og:image" content="[absolute URL to a preview image, e.g. profile.png or a custom social card]">
<meta property="og:type" content="website">
```

### 10. Clean up `.border-top-subtle`
The footer uses an inline `style="border-top:1px solid rgba(255,255,255,.1);"` instead of a defined utility, unlike `.border-bottom-subtle` which is a proper class in `<style>`. Add a matching `.border-top-subtle` class next to the existing `.border-bottom-subtle` definition and use the class instead of the inline style.

### 11. Fix the mobile nav flex bug
`#mobileNav` has class `flex-col` without the base `flex` class, so `flex-direction` is being set on an element that isn't actually a flex container. It currently renders correctly by accident (each link is separately `block`), but should be fixed for correctness:
```html
<nav id="mobileNav" class="hidden lg:hidden flex flex-col gap-1 pb-6 pt-2 border-bottom-subtle">
```

---

## Notes for the IDE AI

- Don't remove or restyle the existing animation/reveal system — extend it to new elements you add (give new sections the same `reveal`/`reveal-scale` + delay classes used elsewhere).
- Where content is needed (email, links, résumé, education details, project URLs), stop and ask rather than inventing placeholder data — a portfolio with fabricated credentials is worse than one with gaps.
- Test the mobile nav toggle and copy-to-clipboard button after any changes, since both depend on the vanilla JS at the bottom of the file working against the exact element IDs/classes used.
