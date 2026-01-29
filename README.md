# Fix2Sell Landing Page

A React + Vite landing page converted from a **Figma to Cursor** plugin export. It mirrors the Fix2Sell “Landing Page- 1” design with responsive layout, design tokens from Figma, and scroll/entrance animations.

## Tech stack

- **React 18** + **Vite 5**
- **Framer Motion** for scroll-triggered and UI animations
- **CSS** with variables derived from Figma (colors, shadows, radii)

## Design source

The structure and styles are based on the Figma frame “Landing Page- 1” (1728×8817), including:

- **Colors:** Navy `#142952`, orange accent `#F98C1F`, cream background `#FFFCF1`, gray text `#626D84`
- **Sections:** Header, Hero + Inquire form, banner CTA, See The Transformation, Why Sell Below Market, Smart Way to Sell, How Fix2Sell Works (4 steps), Reno-Grader, FAQ accordion, CTA, Footer
- **Effects:** Card shadows, blur on header, rounded corners and buttons as in Figma

## Animations

- **Header:** Fade-in on load
- **Hero:** Staggered fade/slide for badge, title, description, list, and form card
- **Sections:** Fade-in and slide-up when entering the viewport (via `AnimatedSection` + Framer Motion `useInView`)
- **Lists & cards:** Staggered item animations where applicable
- **FAQ:** Accordion open/close with height and opacity animation
- **Buttons:** Hover/tap scale on primary CTAs

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── main.jsx          # Entry point
├── App.jsx           # Page composition
├── App.css
├── index.css         # Global styles & design tokens
├── components/
│   ├── AnimatedSection.jsx  # Scroll-triggered section wrapper
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── BannerStrip.jsx
│   ├── Transformation.jsx
│   ├── WhySell.jsx
│   ├── SmartWay.jsx
│   ├── HowItWorks.jsx
│   ├── RenoGrader.jsx
│   ├── FAQ.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
```

Images in the Figma export use `imageHash` references; placeholder blocks (gradients/divs) are used in place of real assets. Replace them with your own images as needed.
