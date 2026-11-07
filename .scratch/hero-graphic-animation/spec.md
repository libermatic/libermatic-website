Status: ready-for-agent

## Problem Statement

The hero section of the libermatic website is visually effective but static. The brutalist aesthetic — bold typography, grid overlay, hard shadows — communicates engineering rigor, but lacks a moving element that reinforces the core message: "we build fast, unbreakable web systems." A subtle animated graphic would add depth and energy without compromising the raw, no-nonsense tone.

## Solution

Add a small, slow-rotating wireframe isometric cube as a decorative accent in the hero section. It sits in the bottom-right corner on desktop and repositions behind the headline block on mobile where space is tight. The animation is pure CSS — no JavaScript, no performance cost, no dependency. It respects `prefers-reduced-motion` and stays ghosted at low opacity so it's felt more than noticed.

## User Stories

1. As a visitor landing on the homepage, I want to see a subtle animated element in the hero, so that the page feels alive without being distracting.
2. As a potential client scanning the headline, I want the animated cube to reinforce the "we build systems" message, so that the brand identity is deeper than just typography.
3. As a desktop user with a wide viewport, I want the cube to sit in the bottom-right corner, so that it frames the content without overlapping anything important.
4. As a mobile user with a cramped viewport, I want the cube to move behind the headline text, so that it doesn't crowd or obscure the message.
5. As a user who prefers reduced motion (due to vestibular disorders or personal preference), I want the animation to stop, so that the page remains comfortable to experience.
6. As a performance-conscious visitor, I want the animation to be pure CSS with zero JavaScript overhead, so that page load is not impacted.
7. As an SEO analyst checking Core Web Vitals, I want the animation to not contribute to layout shifts or paint jank, so that LCP and INP scores remain healthy.
8. As a developer maintaining this codebase, I want the animation to live inside the existing Hero.astro component and use Tailwind utility classes, so that there's no new file to manage or bundle to worry about.
9. As a screen reader user, I want the animated element to be invisible to assistive technology, so that it doesn't inject noise into the reading order.
10. As a designer evaluating the brutalist aesthetic, I want the cube to use the existing color tokens (`brutal-white`, `brutal-black`), so that it integrates seamlessly with the design system.
11. As a curious technical visitor, I want the cube to look like a wireframe (outlined faces, not filled), so that it reads as an engineering artifact, not a stock icon.
12. As a casual browser, I want the rotation to be slow and smooth (~10 seconds per revolution), so that it reads as ambient rather than attention-grabbing.
13. As a user on a low-power device, I want the animation to be GPU-composited (transform-only), so that it doesn't trigger layout or paint on every frame.
14. As a future maintainer, I want the cube's size, color, and rotation speed to be adjustable via CSS variables or Tailwind classes, so that tweaking doesn't require editing keyframe definitions.

## Implementation Decisions

- **Shape**: Wireframe isometric cube — three visible faces drawn as outlined polygons, no fill.
- **Animation**: CSS `@keyframes` with `rotate` on the `transform` property only. Duration: ~10 seconds, linear, infinite.
- **Size**: Approximately 30×30px rendered (defined via SVG viewBox).
- **Color**: White (`var(--color-brutal-white)`) at ~40% opacity on the hero's black background.
- **Desktop layout**: Positioned absolutely in the bottom-right corner of the hero, inside the existing grid structure.
- **Mobile layout**: At small breakpoints (≤768px or similar), repositioned behind the headline block using z-index stacking. The headline gets a higher z-index; the cube stays as a background layer.
- **No JavaScript**: The entire animation is CSS-only. No `<script>`, no `requestAnimationFrame`, no intersection observer.
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` disables the animation entirely.
- **Accessibility**: `aria-hidden="true"` on the animated element so screen readers skip it.
- **GPU compositing**: Only `transform` is animated (no `top`, `left`, `width`, `height` changes), ensuring the browser can promote the element to its own compositor layer.
- **Scope**: The change lives entirely within `Hero.astro`. No new files, no new CSS modules, no new dependencies. The animation keyframes go into `global.css` (already the home for custom Tailwind `@keyframes`).
- **Tailwind integration**: The `@keyframes` and animation utility follow the existing pattern in `global.css` (matching `--animate-marquee` and `--animate-blink` conventions).

## Testing Decisions

**What makes a good test:**
- The test should verify external, observable behavior: the cube is present in the DOM, has `aria-hidden="true"`, the animation applies on desktop viewports, and stops when `prefers-reduced-motion: reduce` is active.
- Visual regression (screenshot) tests should confirm no layout shift is introduced and the cube renders correctly at both desktop and mobile breakpoints.

**Modules to test:**
- `Hero.astro` — component renders the cube element with correct attributes.
- `global.css` — keyframe animation applies correctly and media query for reduced motion works.

**Prior art:**
- The existing `--animate-blink` animation in `global.css` and its usage via `.cursor-blink::after` in the codebase provides a pattern for CSS-only animations in this project.
- The `.grid-lines` background pattern shows how custom CSS layers coexist with Tailwind utilities.

## Out of Scope

- Interactive behavior on hover or click (the cube is ambient, not interactive).
- JavaScript-driven animation (e.g., canvas, WebGL, or `requestAnimationFrame`).
- Multiple animated elements (this is a single cube, not a suite of decorations).
- Animation triggered on scroll or user interaction beyond passive display.
- Dark/light theme toggle (the site is dark-only).
- Animation on other pages beyond the hero section (this is a homepage-only feature).

## Further Notes

- The isometric cube should be drawn as an SVG with three visible faces as strokes (no fill). The wireframe aesthetic matches the brutalist "raw blueprint" feel.
- The same SVG element is reused at both desktop and mobile positions — only CSS positioning and z-index change. No conditional rendering needed.
- The hero section already uses `relative` positioning and `grid-lines` background, so the cube can be absolutely positioned without layout changes.
