---
name: dangerous-animation
description: >
  Build award-winning, animation-first frontend experiences that feel dangerous,
  alive, and physically impossible by ordinary standards. Use this skill whenever
  anyone asks for a site, landing page, portfolio, or interactive experience that
  should feel like lenis.dev, GT6, Locomotive Scroll demos, Awwwards SOTD winners,
  or "next-level" / "award-winning" / "crazy animated" anything. Trigger on phrases
  like "make it dangerous", "super animated", "GSAP", "scroll-driven", "award winning
  site", "Awwwards", "crazy transitions", "WebGL", "Three.js hero", "smooth scroll",
  "pinned scroll", "horizontal scroll", "immersive", "cinematic web", or any request
  for a frontend that should feel premium, physical, and impossible.
version: 3.0.0
---

# DANGEROUS ANIMATION SKILL
## Building Sites That Win Awards and Break Brains

---

## WHAT THIS SKILL IS FOR

This skill encodes the complete production philosophy for building animation-first,
award-level web experiences. It is NOT about adding animations to a normal site.
It is about building a site where **animation IS the architecture** — where every
scroll tick, every cursor move, every page transition is choreographed as part of
a single, continuous performance.

Reference tier: lenis.dev · GT3/GT6 · Locomotive Scroll · Resn · Active Theory ·
Aristide Benoist · Garage · Semplice · Awwwards SOTD/SOTM winners.

---

## ⚠️ CRITICAL ERROR PATTERNS — READ BEFORE WRITING A SINGLE LINE

These are the exact bugs that cause blank screens, locked scrolls, and broken
animations in production. Every one of these has been observed repeatedly.
Memorize them. Do not reproduce them.

---

### ERROR 1 — Missing `lenis.css` → Scroll Locks Completely

**Symptom:** Page loads but scroll is completely frozen. No movement at all.

Lenis requires its own CSS stylesheet to function. Without it, the scroll
wrapper dimensions are broken and the whole system stalls.

```html
<!-- REQUIRED — load this in <head> BEFORE any other styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.css">
```

This is the single most common cause of the "scroll just doesn't work" blank-page
scenario. It is not optional. It is not covered by reset CSS.

---

### ERROR 2 — Missing `lenis.on('scroll', ScrollTrigger.update)` → ScrollTrigger Drifts

**Symptom:** Scroll works, but ScrollTrigger animations fire at wrong positions,
drift out of sync, or snap violently when Lenis inertia finishes.

The GSAP ticker call keeps Lenis running, but ScrollTrigger also needs to be
notified on every scroll event independently.

```javascript
// WRONG — only half the connection
gsap.ticker.add((time) => { lenis.raf(time * 1000); });

// CORRECT — both lines are mandatory
lenis.on('scroll', ScrollTrigger.update);           // ← the missing line
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

---

### ERROR 3 — `autoRaf: true` Conflicts with GSAP Ticker → Double RAF Loop

**Symptom:** Janky scroll, doubled animation speed, or stutter because two
requestAnimationFrame loops are running simultaneously.

When using GSAP's ticker to drive Lenis (the correct pattern for ScrollTrigger
sync), you must NOT also use `autoRaf: true` — it creates a second RAF loop.

```javascript
// WRONG — autoRaf conflicts with gsap.ticker
const lenis = new Lenis({ autoRaf: true });
gsap.ticker.add((time) => { lenis.raf(time * 1000); }); // now two loops

// CORRECT — let GSAP's ticker be the only loop
const lenis = new Lenis({ autoRaf: false }); // or just omit it (defaults to false)
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

---

### ERROR 4 — Deprecated Lenis API Options → Silent Failures

**Symptom:** Smooth scroll doesn't feel smooth; config options are silently ignored.

Lenis renamed several options between major versions. Using old names causes them
to be ignored without throwing any error.

```javascript
// WRONG — old API (v0.x / studio-freight era)
const lenis = new Lenis({
  direction: 'vertical',       // ← removed
  gestureDirection: 'vertical',// ← removed
  smooth: true,                // ← removed
  mouseMultiplier: 1,          // ← removed
});

// CORRECT — current Lenis 1.x API
const lenis = new Lenis({
  orientation: 'vertical',         // was: direction
  gestureOrientation: 'vertical',  // was: gestureDirection
  smoothWheel: true,               // was: smooth
  wheelMultiplier: 1,              // was: mouseMultiplier
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false,
  touchMultiplier: 2,
});
```

Also: the old npm package `@studio-freight/lenis` is deprecated. Use `lenis`.

---

### ERROR 5 — SplitType Before Fonts Load → Wrong Line Breaks / Collapsed Text

**Symptom:** Text reveals work but lines break at wrong positions. Characters
are crammed together or overflow. On refresh it looks different.

SplitType measures character widths to calculate line breaks. If the custom font
hasn't loaded yet, it uses fallback font metrics — calculating breaks based on
Arial/system font — then the real font loads and everything is wrong.

```javascript
// WRONG — runs before fonts are loaded
const split = new SplitType('.hero-title', { types: 'lines,words,chars' });
gsap.from(split.lines, { y: '110%', duration: 1.1, stagger: 0.08 });

// CORRECT — wait for fonts, then split
document.fonts.ready.then(() => {
  const split = new SplitType('.hero-title', { types: 'lines,words,chars' });

  split.lines.forEach(line => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  gsap.from(split.lines, {
    y: '110%',
    rotateX: 15,
    opacity: 0,
    duration: 1.1,
    stagger: 0.08,
    ease: 'expo.out',
    delay: 0.4,
  });

  // Refresh ScrollTrigger AFTER SplitType runs — heights changed
  ScrollTrigger.refresh();
});
```

---

### ERROR 6 — Pin Spacer Blank Space After Animation

**Symptom:** After a pinned scrollTrigger section completes, a huge empty white/
blank area appears where the pin spacer used to be. The next section is pushed
way down the page.

This happens when using `once: true` + `pin: true` + `scrub: true` together.
The pin spacer height is added for the scrub travel distance, but `once: true`
removes the trigger before it can clean up.

```javascript
// WRONG — leaves a ghost blank section
gsap.to('.panel', {
  xPercent: -300,
  ease: 'none',
  scrollTrigger: {
    trigger: '.pin-wrapper',
    pin: true,
    scrub: true,
    once: true,     // ← causes the blank space
    end: '+=3000',
  }
});

// CORRECT — use toggleActions instead of once, or kill the spacer manually
gsap.to('.panel', {
  xPercent: -300,
  ease: 'none',
  scrollTrigger: {
    trigger: '.pin-wrapper',
    pin: true,
    scrub: true,
    // no "once" — let it stay alive
    end: '+=3000',
    onLeave: (self) => self.disable(),  // freeze at end instead
  }
});

// OR: if you must use once, kill the spacer height on completion
scrollTrigger: {
  pin: true,
  scrub: true,
  once: true,
  onScrubComplete: (self) => {
    if (self.spacer) self.spacer.style.height = '0px';
  }
}
```

---

### ERROR 7 — ScrollTrigger Creation Order with Pinned Sections → Wrong Trigger Positions

**Symptom:** Animations trigger too early — they fire before the element even
enters the viewport. Elements below a pinned section fire at completely wrong
scroll positions.

When a section is pinned, GSAP adds a spacer element to compensate for the
pinned travel distance. Any ScrollTrigger created **before** it will not account
for that extra space — unless they're created in page order.

```javascript
// WRONG — section3 is created before section1's pin spacer is accounted for
initSection3Animations();  // fires too early — doesn't know about pin below
initSection1Pin();         // creates the spacer AFTER section3 was measured

// CORRECT — always create ScrollTriggers in DOM order (top to bottom)
initSection1Pin();         // pin spacer created first
initSection3Animations();  // now measures correct offset including spacer

// OR: use refreshPriority to force correct calculation order
ScrollTrigger.create({
  trigger: '.section-1',
  pin: true,
  refreshPriority: 10,   // higher = calculated first
  // ...
});
ScrollTrigger.create({
  trigger: '.section-3',
  refreshPriority: 5,    // lower = waits for section-1 to calculate
  // ...
});
```

---

### ERROR 8 — ScrollTrigger on Tweens Nested Inside a Timeline → Ignored/Broken

**Symptom:** Scroll-driven tweens inside a timeline just play on page load or
don't respond to scroll at all.

You cannot put `scrollTrigger` on individual tweens that are nested inside a
`gsap.timeline()`. The parent timeline owns the playhead — the ScrollTrigger
has no way to control it.

```javascript
// WRONG — scrollTrigger inside nested tweens of a timeline
const tl = gsap.timeline();
tl.from('.title', {
  y: 80,
  scrollTrigger: { trigger: '.section', scrub: true }  // ← ignored
});
tl.from('.subtitle', {
  opacity: 0,
  scrollTrigger: { trigger: '.section', scrub: true }  // ← ignored
});

// CORRECT — put scrollTrigger on the timeline itself
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true,
  }
});
tl.from('.title', { y: 80 });
tl.from('.subtitle', { opacity: 0 });
```

---

### ERROR 9 — Animating the Same Property Twice on Same Element → Jumps to 0

**Symptom:** Element smoothly animates to position A, then jumps back to 0
before animating to position B.

Two separate ScrollTriggers targeting the same property on the same element
conflict. When the second one starts, GSAP resets to its own "from" state.

```javascript
// WRONG — second tween jumps back to x:0 at start
gsap.to('h1', { x: 100, scrollTrigger: { start: 'top bottom', end: 'center center', scrub: true }});
gsap.to('h1', { x: 200, scrollTrigger: { start: 'center center', end: 'bottom top', scrub: true }});

// CORRECT — use a single timeline with the full sequence
const tl = gsap.timeline({ scrollTrigger: { trigger: 'h1', start: 'top bottom', end: 'bottom top', scrub: true }});
tl.to('h1', { x: 100 })
  .to('h1', { x: 200 });
```

---

### ERROR 10 — Non-Function `end` Values with `invalidateOnRefresh` → Breaks on Resize

**Symptom:** Animations work perfectly on first load but completely break after
resizing the viewport. Pinned sections travel too far or stop too early.

Static string values like `end: '+=${someVar}'` are computed once at creation.
If the layout changes (viewport resize, font load, dynamic content), those cached
values are wrong. The fix is function-based values.

```javascript
// WRONG — cached at creation, wrong after resize
gsap.to(gallery, {
  x: -galleryWidth,   // galleryWidth was captured once
  scrollTrigger: {
    end: `+=${galleryWidth}`,     // ← static, never updates
  }
});

// CORRECT — function recalculates on every ScrollTrigger.refresh()
gsap.to(gallery, {
  x: () => -(gallery.scrollWidth - window.innerWidth),  // ← function
  scrollTrigger: {
    end: () => `+=${gallery.scrollWidth - window.innerWidth}`,  // ← function
    invalidateOnRefresh: true,    // ← forces recalculation of animation values too
  }
});
```

---

### ERROR 11 — Targeting Multiple Elements in One Tween for ScrollTrigger → All Fire at Once

**Symptom:** You have 6 cards. You want each to animate when it enters the viewport.
Instead, all 6 animate simultaneously when the first one enters.

One ScrollTrigger tween with multiple targets uses one trigger for all elements.

```javascript
// WRONG — all cards animate when .card:first-child enters viewport
gsap.from('.card', {
  y: 80,
  opacity: 0,
  scrollTrigger: { trigger: '.card', start: 'top 75%' }
});

// CORRECT — loop so each element gets its own ScrollTrigger
gsap.utils.toArray('.card').forEach((card) => {
  gsap.from(card, {
    y: 80,
    opacity: 0,
    duration: 0.9,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: card,    // ← each card is its own trigger
      start: 'top 80%',
    }
  });
});
```

---

### ERROR 12 — `overflow: hidden` on `<body>` Without Lenis → Native Scroll Killed

**Symptom:** Page renders but is completely unscrollable. Nothing responds to
wheel events or touch.

`overflow: hidden` on `body` kills the native scroll container that Lenis
intercepts. Lenis needs to see native scroll events — it doesn't work if the
container is already clipped.

```css
/* WRONG */
body { overflow: hidden; } /* kills scroll entirely */

/* CORRECT — let the body scroll naturally, Lenis intercepts it */
html { scroll-behavior: auto; } /* disable native smooth scroll, Lenis owns this */
body { /* NO overflow: hidden */ }

/* If you need to lock scroll temporarily (e.g. during a modal) */
/* use lenis.stop() and lenis.start() instead */
```

---

### ERROR 13 — Missing `ScrollTrigger.refresh()` After Dynamic Content → Wrong Positions

**Symptom:** Animations trigger at completely wrong positions when the page has
images, fonts, or any content that loads asynchronously.

```javascript
// After any of these: images loading, fonts loading, dynamic content injection
// ALWAYS call:
ScrollTrigger.refresh();

// For images specifically:
const images = document.querySelectorAll('img');
let loaded = 0;
images.forEach(img => {
  if (img.complete) {
    if (++loaded === images.length) ScrollTrigger.refresh();
  } else {
    img.addEventListener('load', () => {
      if (++loaded === images.length) ScrollTrigger.refresh();
    });
  }
});

// Or use imagesLoaded library:
imagesLoaded(document.body, () => ScrollTrigger.refresh());
```

---

### ERROR 14 — Horizontal Scroll `wheel` Override Conflicts with Lenis

**Symptom:** Horizontal scroll section works but regular page scroll fights
against it; scroll feels sticky or double-fires.

The skill's old horizontal full-site pattern used a raw `wheel` event override
that conflicts with Lenis' own event handling.

```javascript
// WRONG — fights Lenis's own wheel handling
window.addEventListener('wheel', (e) => {
  e.preventDefault();
  lenis.scrollTo(lenis.scroll + e.deltaY, { immediate: false });
}, { passive: false });

// CORRECT — use Lenis native horizontal orientation instead
const lenis = new Lenis({
  orientation: 'horizontal',
  gestureOrientation: 'both',  // lets vertical trackpad gesture trigger horizontal scroll
});
// Do NOT add a separate wheel listener — Lenis handles it
```

---

### ERROR 15 — GSAP Plugin Not Registered → Animations Silently Fail

**Symptom:** ScrollTrigger or other plugin features do nothing. No error in console.

```javascript
// WRONG — using ScrollTrigger without registering it
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.to('.el', { scrollTrigger: { trigger: '.el' } }); // silent fail

// CORRECT — always register plugins before use
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);  // ← one call, all plugins
```

---

### ERROR 16 — Preloader Blocks `preloader:complete` Event → Nothing Initializes

**Symptom:** Blank page. No animations. Console is clean. Preloader exits but
nothing else starts.

The skeleton fires `document.dispatchEvent(new Event('preloader:complete'))` to
trigger all init functions. If the preloader has a bug (e.g. image count is 0
and the fallback path is never hit), this event never fires.

```javascript
// DEFENSIVE Preloader — always completes even with zero images
class Preloader {
  constructor() {
    this.counter = document.querySelector('.preloader-counter');
    this.bar = document.querySelector('.preloader-bar');
    this.overlay = document.querySelector('.preloader');
    this.images = Array.from(document.images);
    this.total = this.images.length;
    this.loaded = 0;
  }

  init() {
    // ← CRITICAL: if no images, complete immediately
    if (this.total === 0) {
      this.complete();
      return;
    }

    this.images.forEach(img => {
      if (img.complete) {
        this.update();
      } else {
        img.addEventListener('load', () => this.update());
        img.addEventListener('error', () => this.update()); // ← don't hang on broken images
      }
    });

    // ← SAFETY NET: force complete after 5s regardless
    setTimeout(() => {
      if (this.loaded < this.total) this.complete();
    }, 5000);
  }

  update() {
    this.loaded++;
    const pct = Math.round((this.loaded / this.total) * 100);
    if (this.counter) this.counter.textContent = `${pct}%`;
    if (this.bar) gsap.to(this.bar, { scaleX: pct / 100, ease: 'none', duration: 0.3 });
    if (this.loaded >= this.total) this.complete();
  }

  async complete() {
    // ← Guard against calling complete() twice (timeout + natural completion)
    if (this._completed) return;
    this._completed = true;

    await gsap.timeline()
      .to(this.counter, { y: -40, opacity: 0, duration: 0.5, ease: 'expo.in' })
      .to(this.overlay, { yPercent: -100, duration: 1, ease: 'expo.inOut' })
      .call(() => {
        this.overlay?.remove();
        document.dispatchEvent(new Event('preloader:complete'));
      });
  }
}
```

---

## THE PHYSICS-FIRST MANDATE

Every animation must feel **physically grounded**. The web is a 2D medium faking
3D reality. Your job is to make it feel real.

### The Three Laws of Dangerous Animation

**Law 1 — Nothing starts or stops.** Everything eases in from rest and eases back
to rest. No linear motion. No snap-to. Cubic-bezier curves must mimic spring
physics or viscous fluid drag. Inertia is mandatory.

**Law 2 — Everything responds.** The cursor, the scroll, the viewport resize, the
device orientation — every input event should propagate through the scene. A page
that sits inert until you click it is dead.

**Law 3 — Transitions are scenes.** Page transitions are not fades. They are full
choreographed sequences: outgoing content collapses, a transition element takes
over the screen, incoming content assembles. Minimum 600ms. Maximum 1400ms.

---

## THE FULL LIBRARY STACK

Load what the project needs. Never load what it doesn't. But know ALL of these.

### Tier 1 — The Non-Negotiables (Always Available)

```html
<!-- Lenis CSS — MANDATORY, load FIRST in <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.css">

<!-- Lenis — smooth scroll with lerp inertia. The foundation of everything. -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js"></script>

<!-- GSAP Core + Premium Plugins (always load together) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"></script>

<!-- Three.js — WebGL scenes, shader heroes, particle systems -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

### Tier 2 — Situational Power Tools

```html
<!-- Splitting.js — chars/words/lines for staggered text reveals -->
<script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css">

<!-- anime.js — SVG morphing, timeline sequences, spring physics -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

<!-- Matter.js — 2D physics engine, falling elements, gravity interactions -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>

<!-- Pixi.js — 2D WebGL renderer for canvas-heavy effects, filter stacks -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.3.2/pixi.min.js"></script>

<!-- Barba.js — SPA-style page transitions with hooks -->
<script src="https://unpkg.com/@barba/core"></script>

<!-- Motion One — lightweight Web Animations API wrapper for micro-interactions -->
<script src="https://cdn.jsdelivr.net/npm/motion@10.18.0/dist/motion.js"></script>

<!-- SplitType — more control than Splitting.js, no CSS required -->
<script src="https://unpkg.com/split-type"></script>

<!-- KUTE.js — morphSVG, text morphing, complex attribute tweening -->
<script src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/kute.min.js"></script>
```

### Tier 3 — Specialty Weapons

```html
<!-- p5.js — generative art, noise fields, creative canvas -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js"></script>

<!-- Typed.js — typewriter effects with cursor blinking -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.16/typed.umd.js"></script>

<!-- CountUp.js — animated number counting with easing -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.umd.js"></script>

<!-- Vivus — SVG draw-on-scroll animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.6/vivus.min.js"></script>

<!-- Swiper — but make it dangerous (full custom transitions) -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

---

## LENIS — THE CORRECT SETUP

This is the single source of truth for Lenis initialization. Do not deviate.

```javascript
// STEP 1: Register GSAP plugins first — always before Lenis init
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// STEP 2: Initialize Lenis with CURRENT API (v1.x)
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease
  orientation: 'vertical',        // NOT "direction" (old API)
  gestureOrientation: 'vertical', // NOT "gestureDirection" (old API)
  smoothWheel: true,              // NOT "smooth" (old API)
  wheelMultiplier: 1,             // NOT "mouseMultiplier" (old API)
  smoothTouch: false,             // false for mobile battery life
  touchMultiplier: 2,
  autoRaf: false,                 // CRITICAL: must be false when using GSAP ticker
});

// STEP 3: Connect Lenis to ScrollTrigger — BOTH lines are required
lenis.on('scroll', ScrollTrigger.update);    // ← keeps ScrollTrigger positions synced
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);                    // ← drives Lenis from GSAP's loop
});
gsap.ticker.lagSmoothing(0);                 // ← prevents lag compensation from breaking scrub

// STEP 4: Expose for transitions and external use
window.lenis = lenis;
```

For **horizontal scroll sections**, use a separate pinned container — do NOT
reinitialize Lenis with a different orientation:

```javascript
// Horizontal section: vertical scroll drives horizontal movement (safest pattern)
const sections = gsap.utils.toArray('.h-section');
const totalWidth = sections.reduce((acc, el) => acc + el.offsetWidth, 0);

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.h-scroll-container',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // ALWAYS use function-based end for resize safety
    end: () => `+=${document.querySelector('.h-scroll-container').offsetWidth * (sections.length - 1)}`,
    invalidateOnRefresh: true,  // recalculate on viewport resize
  }
});
```

---

## GSAP — THE DANGEROUS PATTERNS

### Pattern 1 — Text Reveal (The Cinematic Lift)

The standard for hero headlines on award sites. Each line clips from below.
**Must run inside `document.fonts.ready` — see Error 5.**

```javascript
document.fonts.ready.then(() => {
  const split = new SplitType('.hero-title', { types: 'lines,words,chars' });

  // Wrap lines in a clip container
  split.lines.forEach(line => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  // The reveal
  gsap.from(split.lines, {
    y: '110%',
    rotateX: 15,
    opacity: 0,
    duration: 1.1,
    stagger: 0.08,
    ease: 'expo.out',
    delay: 0.4,
  });

  ScrollTrigger.refresh(); // recalculate positions after DOM mutation
});
```

### Pattern 2 — Scrub-Driven Scale (The GT6 Effect)

An element grows from small to full viewport as you scroll through it.

```javascript
gsap.fromTo('.feature-image',
  { scale: 0.6, borderRadius: '24px' },
  {
    scale: 1,
    borderRadius: '0px',
    ease: 'none',
    scrollTrigger: {
      trigger: '.feature-section',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      invalidateOnRefresh: true,  // ← always on scrub animations
    }
  }
);
```

### Pattern 3 — Horizontal Pinned Gallery

Scroll down = move sideways. This is the single most effective "whoa" pattern.

```javascript
const gallery = document.querySelector('.gallery-track');

gsap.to(gallery, {
  // function-based so it recalculates on resize
  x: () => -(gallery.scrollWidth - window.innerWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.gallery-wrapper',
    pin: true,
    scrub: 1.5,
    end: () => `+=${gallery.scrollWidth - window.innerWidth}`,
    invalidateOnRefresh: true,  // ← required for resize safety
  }
});
```

### Pattern 4 — Staggered Card Stack Reveal

Each card gets its own ScrollTrigger — not one tween targeting all of them.

```javascript
// CORRECT — individual triggers per card
gsap.utils.toArray('.card').forEach((card) => {
  gsap.from(card, {
    y: 80,
    opacity: 0,
    scale: 0.92,
    rotation: gsap.utils.random(-4, 4),
    duration: 0.9,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: card,
      start: 'top 75%',
    }
  });
});
```

### Pattern 5 — Parallax Depth Stack

Multiple layers move at different speeds. Creates depth with zero WebGL.

```javascript
const layers = [
  { el: '.layer-bg', speed: 0.15 },
  { el: '.layer-mid', speed: 0.35 },
  { el: '.layer-fg', speed: 0.6 },
];

layers.forEach(({ el, speed }) => {
  gsap.to(el, {
    // function-based so it handles resize correctly
    y: () => -(ScrollTrigger.maxScroll(window) * speed),
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0,
      invalidateOnRefresh: true,
    }
  });
});
```

### Pattern 6 — Magnetic Button (The Hover Gravity Pull)

The button physically pulls toward the cursor within its radius.

```javascript
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power2.out' });
    gsap.to(btn.querySelector('.btn-label'), { x: x * 0.15, y: y * 0.15, duration: 0.4 });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    gsap.to(btn.querySelector('.btn-label'), { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
  });
});
```

### Pattern 7 — Counter Roll (Number Slot Machine)

Numbers roll upward into place like a slot machine reel.

```javascript
function rollNumber(el, start, end, duration = 1.5) {
  const obj = { val: start };
  gsap.to(obj, {
    val: end,
    duration,
    ease: 'expo.out',
    onUpdate: () => {
      el.textContent = Math.round(obj.val).toLocaleString();
    },
    scrollTrigger: { trigger: el, start: 'top 85%', once: true }
  });
}
```

### Pattern 8 — Clip-Path Wipe Reveal

Content reveals behind a sliding mask. Cinematic, editorial.

```javascript
gsap.from('.wipe-reveal', {
  clipPath: 'inset(0 100% 0 0)',
  duration: 1.2,
  ease: 'expo.inOut',
  scrollTrigger: {
    trigger: '.wipe-reveal',
    start: 'top 70%',
  }
});

// Diagonal variant
gsap.fromTo('.wipe-diagonal',
  { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
  {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    duration: 1.4,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.wipe-diagonal', start: 'top 70%' }
  }
);
```

### Pattern 9 — Cursor Follower System (The Blob)

```javascript
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });
});

gsap.ticker.add(() => {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  gsap.set(cursor, { x: curX, y: curY });
});

document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('is-hovering');
    const label = el.getAttribute('data-cursor');
    if (label) cursor.setAttribute('data-label', label);
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-hovering');
  });
});
```

CSS for the cursor:
```css
.cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid currentColor;
  pointer-events: none;
  z-index: var(--z-cursor);        /* use z-index system, NOT 9999 */
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: width 0.3s, height 0.3s, border-radius 0.3s;
}
.cursor.is-hovering {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.cursor-dot {
  position: fixed;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  pointer-events: none;
  z-index: var(--z-cursor);
  transform: translate(-50%, -50%);
}
```

### Pattern 10 — Page Transition (The Curtain)

```javascript
barba.init({
  transitions: [{
    name: 'curtain',
    async leave(data) {
      lenis.stop();   // ← stop smooth scroll during transition
      await gsap.timeline()
        .to('.curtain', { scaleY: 1, duration: 0.6, ease: 'expo.inOut', transformOrigin: 'bottom' })
        .to(data.current.container, { opacity: 0, duration: 0.1 });
    },
    async enter(data) {
      await gsap.timeline()
        .from(data.next.container, { opacity: 0, duration: 0.1 })
        .to('.curtain', { scaleY: 0, duration: 0.7, ease: 'expo.inOut', transformOrigin: 'top' });
      
      // ← after transition: refresh and restart
      ScrollTrigger.refresh();
      lenis.start();
    },
    after() {
      // ← always scroll to top on new page
      lenis.scrollTo(0, { immediate: true });
    }
  }]
});
```

### Pattern 11 — Scroll Velocity Skew

Elements skew based on scroll speed, snapping back when still.

```javascript
let currentVelocity = 0;
const MAX_SKEW = 8;
const LERP_FACTOR = 0.08;

lenis.on('scroll', ({ velocity }) => {
  currentVelocity = velocity;
});

gsap.ticker.add(() => {
  const skew = Math.max(-MAX_SKEW, Math.min(MAX_SKEW, currentVelocity * 0.4));
  document.querySelectorAll('.skew-on-scroll').forEach(el => {
    const current = parseFloat(el.style.transform?.match(/skewY\((.+)deg\)/)?.[1] || 0);
    const next = current + (skew - current) * LERP_FACTOR;
    el.style.transform = `skewY(${next}deg)`;
  });
});
```

### Pattern 12 — Infinite Marquee with Hover Pause

```javascript
function initMarquee(el, speed = 1) {
  const inner = el.querySelector('.marquee-inner');
  const clone = inner.cloneNode(true);
  el.appendChild(clone);

  const animation = gsap.to([inner, clone], {
    xPercent: -100,
    repeat: -1,
    duration: 20 / speed,
    ease: 'none',
  });

  el.addEventListener('mouseenter', () => animation.timeScale(0.3));
  el.addEventListener('mouseleave', () => animation.timeScale(1));
}
```

---

## THREE.JS — SHADER HERO PATTERNS

### Aurora / Noise Displacement Hero

```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#hero-canvas'), alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.PlaneGeometry(4, 4, 128, 128);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uColor1: { value: new THREE.Color('#0a0a0f') },
    uColor2: { value: new THREE.Color('#00f5ff') },
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec3 pos = position;
      float elevation = sin(pos.x * 3.0 + uTime * 0.5) * 0.1
                      + cos(pos.y * 2.0 + uTime * 0.3) * 0.1;
      elevation += (uMouse.x - 0.5) * pos.x * 0.3;
      pos.z += elevation;
      vElevation = elevation;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float mix_strength = (vElevation + 0.2) * 2.5;
      vec3 color = mix(uColor1, uColor2, mix_strength);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 2;

document.addEventListener('mousemove', (e) => {
  material.uniforms.uMouse.value.set(
    e.clientX / window.innerWidth,
    1.0 - e.clientY / window.innerHeight
  );
});

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.016;
  renderer.render(scene, camera);
}
animate();
```

### Particle Field (Floating Dots That Respond to Scroll)

```javascript
const particleCount = 800;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 0.015,
  color: 0x00f5ff,
  transparent: true,
  opacity: 0.7,
  sizeAttenuation: true,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

lenis.on('scroll', ({ progress }) => {
  particles.rotation.y = progress * Math.PI * 2;
  particles.rotation.x = progress * Math.PI * 0.5;
});
```

---

## TRANSITION SYSTEMS — THE FULL VOCABULARY

| Transition Name | Description | Metaphor |
|---|---|---|
| **Curtain Rise** | A solid panel rises/descends between pages | Theater stage |
| **Liquid Wipe** | SVG blob morphs across the screen | Liquid metal |
| **Zoom Portal** | Clicked element expands to full screen | Alice in Wonderland |
| **Shatter** | Outgoing page breaks into shards | Glass breaking |
| **Typewriter Erase** | Text on screen deletes itself, new page types in | Terminal |
| **Gravity Drop** | Content falls off screen; new content drops in | Gravity |
| **Ink Bleed** | A radial ink stain expands from click point | Ink on paper |
| **Grid Dissolve** | Page divides into grid; each cell fades at different delay | Mosaic |
| **Horizontal Slide** | Entire page slides sideways like a slide reel | Film projector |
| **Flip Book** | Z-axis flip, like turning a physical card | Card flip |
| **Channel Split** | RGB channels separate before realigning on new page | VHS glitch |

### Implementing the Zoom Portal

```javascript
function portalTransition(trigger) {
  const rect = trigger.getBoundingClientRect();
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: ${rect.top}px;
    left: ${rect.left}px;
    width: ${rect.width}px;
    height: ${rect.height}px;
    background: var(--accent);
    z-index: var(--z-overlay);
    border-radius: ${getComputedStyle(trigger).borderRadius};
  `;
  document.body.appendChild(overlay);

  gsap.timeline()
    .to(overlay, {
      top: 0, left: 0, width: '100vw', height: '100vh',
      borderRadius: 0, duration: 0.7, ease: 'expo.inOut',
    })
    .call(() => {
      loadNextPage().then(() => {
        gsap.to(overlay, { opacity: 0, duration: 0.4, onComplete: () => overlay.remove() });
      });
    });
}
```

### Implementing Channel Split (RGB Glitch Transition)

```css
.channel-r, .channel-g, .channel-b {
  position: fixed; inset: 0;
  pointer-events: none; z-index: var(--z-overlay);
  mix-blend-mode: screen;
}
.channel-r { background: red; opacity: 0; }
.channel-g { background: lime; opacity: 0; }
.channel-b { background: blue; opacity: 0; }
```

```javascript
async function glitchTransition() {
  const tl = gsap.timeline();
  tl.to('.channel-r', { opacity: 0.6, x: -10, duration: 0.08, ease: 'none' })
    .to('.channel-b', { opacity: 0.6, x: 10, duration: 0.08, ease: 'none' }, '<')
    .to('.channel-r', { x: 12, duration: 0.06 })
    .to('.channel-b', { x: -12, duration: 0.06 }, '<')
    .to(['.channel-r', '.channel-b'], { opacity: 0, x: 0, duration: 0.12 })
    .call(loadNextPage)
    .from('.page-content', { opacity: 0, duration: 0.4 });
}
```

---

## NON-STANDARD SCROLL BEHAVIORS

### Side Scroll (Full Horizontal Site)

```javascript
// Use Lenis native horizontal orientation (NOT a wheel event override)
const lenis = new Lenis({
  orientation: 'horizontal',
  gestureOrientation: 'both', // vertical trackpad gesture → horizontal scroll
  autoRaf: false,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

### Infinite Scroll Loop

```javascript
lenis.on('scroll', ({ scroll, limit }) => {
  if (scroll >= limit - 10) {
    lenis.scrollTo(0, { immediate: true });
  }
});
```

### Accordion Sections (Fullscreen Snap)

```javascript
const sections = gsap.utils.toArray('.fullscreen-section');

// Create ScrollTriggers in DOM order — required for pinned sections
sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false,
    snap: { snapTo: 1 / (sections.length - 1), duration: 0.6, ease: 'expo.inOut' },
    refreshPriority: sections.length - i,  // higher = calculated first (top to bottom)
  });
});
```

### Z-Depth Scroll (Fake 3D Tunnel)

```javascript
gsap.utils.toArray('.z-item').forEach((el, i) => {
  gsap.fromTo(el,
    { scale: 0.3, opacity: 0, z: -500, filter: 'blur(12px)' },
    {
      scale: 1, opacity: 1, z: 0, filter: 'blur(0px)',
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'center center',
        scrub: true,
        invalidateOnRefresh: true,
      }
    }
  );
});
```

---

## THE PRELOADER — FIRST IMPRESSIONS

See the defensive Preloader implementation in **Error 16** above.
The key additions vs. the naive version:
- Handles `img.onerror` (broken images no longer hang the loader)
- Guards against calling `complete()` twice
- Safety timeout after 5 seconds as absolute fallback
- Dispatches `preloader:complete` only once

---

## SCROLL-TRIGGERED TEXT SYSTEMS

### The Char Scramble (Matrix Hover)

```javascript
const CHARS = '!<>-_\\/[]{}—=+*^?#@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function scrambleText(el, finalText, duration = 1000) {
  let iteration = 0;
  const interval = setInterval(() => {
    el.textContent = finalText
      .split('')
      .map((char, idx) => {
        if (idx < iteration) return finalText[idx];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');
    if (iteration >= finalText.length) clearInterval(interval);
    iteration += 1 / 3;
  }, 30);
}
```

### Char-by-Char Scroll Reveal

```javascript
// MUST be inside document.fonts.ready (see Error 5)
document.fonts.ready.then(() => {
  const split = new SplitType('.scroll-text', { types: 'chars' });

  gsap.fromTo(split.chars,
    { opacity: 0.15, color: 'rgba(255,255,255,0.15)' },
    {
      opacity: 1,
      color: 'rgba(255,255,255,1)',
      stagger: 0.03,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-text',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      }
    }
  );

  ScrollTrigger.refresh();
});
```

### Kinetic Typography (Size Wave)

```javascript
document.fonts.ready.then(() => {
  const split = new SplitType('.kinetic', { types: 'chars' });

  split.chars.forEach((char, i) => {
    gsap.to(char, {
      fontSize: () => `${gsap.utils.random(0.6, 2)}em`,
      ease: 'none',
      scrollTrigger: {
        trigger: '.kinetic',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });

  ScrollTrigger.refresh();
});
```

---

## WHAT MAKES SITES WIN AWARDS — RESEARCH SYNTHESIS

### 1. Cohesive World-Building
Award sites feel like entering a universe, not visiting a webpage. Every element —
cursor, background noise, font tracking, transition timing — shares a single
invisible logic. The aesthetic is airtight. Nothing is default. Nothing is borrowed.

### 2. Physicality
Scroll feels like weight. Hovers feel like magnetism. Clicks feel like impact.
This is achieved through spring physics (elastic.out easing), momentum (Lenis lerp),
and velocity-responsive deformation (skew on scroll, blur on transition).

### 3. The Unexpected Camera
Award sites play with perspective, depth, and the metaphor of a camera moving
through space. Parallax is not just "slower movement" — it is the simulation of
a physical camera with lens distortion and depth of field.

### 4. Typography as Architecture
Text is not content displayed in a font. Text IS the layout. Large display type
at 100vw+ creates structure. Characters become graphic elements. Line breaks are
choreographed. Tracking expands on scroll.

### 5. Transitions That Have Narrative
Going from "About" to "Work" should feel directionally appropriate. Curtains pull
back. Portals open. Gravity shifts. The transition is a scene change, not a gap.

### 6. A Detail That Makes No Functional Sense
Every top-tier award site has one thing nobody asked for — but everybody remembers.
A particle trail on the cursor. Background that responds to sound. A text element
that glitches for exactly 0.3 seconds after load. Include one in every build.

### 7. Speed That Feels Impossible
60fps, always. No jank. GSAP `will-change` and `transform` only. Perception of
speed is part of the design.

---

## PERFORMANCE — NON-NEGOTIABLE RULES

### What to Do

- **Always animate `transform` and `opacity`.** These are GPU-composited.
- Use `will-change: transform` on elements that animate frequently.
- Use `gsap.set()` for instant state changes (no tween overhead).
- Use `ScrollTrigger.batch()` for many similar elements.
- Debounce window resize handlers (150ms minimum).
- Use `requestAnimationFrame` for any custom loop, not `setInterval`.
- Kill ScrollTrigger instances on SPA navigation with `ScrollTrigger.kill()`.
- Three.js: use `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))`.
- Always add `invalidateOnRefresh: true` to any ScrollTrigger using dynamic measurements.

### CSS Isolation for Animated Elements

```css
.animated-element {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0); /* Force GPU layer */
}
```

---

## MOBILE STRATEGY

Dangerous animations degrade gracefully. They do not just disappear.

```javascript
const isMobile = window.matchMedia('(pointer: coarse)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (isMobile || prefersReducedMotion) {
  // Disable cursor system
  document.querySelector('.cursor')?.remove();
  document.querySelector('.cursor-dot')?.remove();

  // Use lenis.options (v1.x API)
  lenis.options.duration = 0.8;

  // Replace scrub animations with simple triggered ones
  ScrollTrigger.getAll().forEach(st => {
    if (st.vars.scrub) {
      st.kill();
      // Re-create as non-scrub triggered animation
    }
  });

  // Disable Three.js on low-end devices
  if (navigator.hardwareConcurrency < 4) {
    document.querySelector('#hero-canvas')?.remove();
  }
}
```

---

## REFERENCE ARCHITECTURE — FULL SITE SKELETON

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Site Name</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- LENIS CSS — MUST be first, before any other styles -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.css">

  <style>
    /* Z-index system — use these, never raw numbers */
    :root {
      --z-below: -1;
      --z-base: 0;
      --z-float: 10;
      --z-overlay: 50;
      --z-modal: 100;
      --z-cursor: 200;
      --z-preloader: 300;
    }

    /* Disable native smooth scroll — Lenis owns this */
    html { scroll-behavior: auto; }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    /* Hide cursor on desktop; show on touch devices */
    body { cursor: none; }
    @media (pointer: coarse) { body { cursor: auto; } }

    .will-animate {
      will-change: transform;
      backface-visibility: hidden;
    }

    .preloader {
      position: fixed;
      inset: 0;
      z-index: var(--z-preloader);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cursor, .cursor-dot {
      position: fixed;
      pointer-events: none;
      z-index: var(--z-cursor);
      transform: translate(-50%, -50%);
    }

    .curtain {
      position: fixed;
      inset: 0;
      z-index: var(--z-overlay);
      transform: scaleY(0);
      transform-origin: bottom;
    }
  </style>
</head>
<body>

  <!-- Preloader -->
  <div class="preloader">
    <div class="preloader-counter">0%</div>
    <div class="preloader-bar"></div>
  </div>

  <!-- Custom cursor -->
  <div class="cursor"></div>
  <div class="cursor-dot"></div>

  <!-- Page transition curtain -->
  <div class="curtain"></div>

  <!-- Three.js canvas — behind content -->
  <canvas id="hero-canvas" style="position:fixed;inset:0;z-index:var(--z-below);pointer-events:none;"></canvas>

  <!-- Main content -->
  <main id="main-content">
    <!-- Your sections here -->
  </main>

  <!-- Scripts: load order matters -->
  <script src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://unpkg.com/split-type"></script>

  <script>
    // 1. Register ALL plugins before anything else
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // 2. Lenis — current v1.x API
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      autoRaf: false,  // GSAP ticker drives the loop
    });

    // 3. Connect Lenis ↔ ScrollTrigger — BOTH lines required
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    window.lenis = lenis;

    // 4. Boot sequence on preloader complete
    document.addEventListener('preloader:complete', () => {
      document.fonts.ready.then(() => {
        initCursor();
        initHeroAnimations();   // SplitType calls go inside here
        initScrollAnimations(); // create ScrollTriggers in DOM order
        initPageTransitions();
        ScrollTrigger.refresh(); // final refresh after everything is set up
      });
    });
  </script>
</body>
</html>
```

---

## THE BAN LIST — NEVER DO THESE

### Animation Bans

- ❌ `transition: all 0.3s ease` — animate specific properties only
- ❌ Linear easing on anything visible — use cubic-bezier or GSAP eases always
- ❌ Animating `top`, `left`, `margin`, `width`, `height` — use `transform` only
- ❌ `setInterval` for animation loops — use `requestAnimationFrame` or GSAP ticker
- ❌ Bounce easing on entrance animations — bouncy is playful, not premium
- ❌ CSS `animation-delay` as the only stagger mechanism — use GSAP stagger
- ❌ AOS (Animate On Scroll) library — for beginners, visible on inspection
- ❌ ScrollReveal.js — same problem as AOS
- ❌ WOW.js — outdated, no scrub support, janky
- ❌ jQuery for animations — zero GPU compositing
- ❌ Animating page load with nothing on screen first — always show something instantly

### Lenis / ScrollTrigger Bans

- ❌ `autoRaf: true` when using GSAP ticker — double RAF loop, jank city
- ❌ Skipping `lenis.on('scroll', ScrollTrigger.update)` — ScrollTrigger drifts
- ❌ Forgetting `lenis.css` — scroll locks completely
- ❌ Using old Lenis API (`direction`, `gestureDirection`, `smooth`, `mouseMultiplier`)
- ❌ SplitType before `document.fonts.ready` — wrong line breaks
- ❌ `once: true` + `pin: true` + `scrub: true` together — leaves blank spacer
- ❌ Creating ScrollTriggers out of DOM order with pinned sections — wrong positions
- ❌ ScrollTrigger on nested timeline tweens — it will be silently ignored
- ❌ Same property animated by two separate ScrollTriggers — element jumps to 0
- ❌ Static end values without `invalidateOnRefresh: true` — breaks on resize
- ❌ Raw `wheel` event override while Lenis is active — conflicts with Lenis handling
- ❌ Not calling `ScrollTrigger.refresh()` after `SplitType`, images, or dynamic content

### Design Bans

- ❌ Purple gradient on dark background (the ChatGPT aesthetic)
- ❌ Glassmorphism cards as hero element
- ❌ "Bento grid" layouts as a novelty
- ❌ Floating emoji decorations
- ❌ Blob shapes (`border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%`)
- ❌ Three.js sphere with vertex displacement as the only 3D element
- ❌ Hero: large heading + small subheading + two buttons + gradient (template layout)
- ❌ Sticky header that just changes `box-shadow` on scroll
- ❌ Testimonials carousel with auto-play and dot indicators

### Typography Bans

- ❌ Inter as the primary typeface
- ❌ Roboto anywhere
- ❌ Space Grotesk (overused in web3/startup world)
- ❌ All-caps with heavy letter-spacing as the only typographic treatment
- ❌ Long-form body text in anything lighter than 400 weight on dark bg

### Structural Bans

- ❌ `overflow: hidden` on `body` without Lenis — kills native scroll, helps nothing
- ❌ Using `vh` units for mobile heights without the `svh` fallback
- ❌ Building the cursor in CSS `::after` pseudo-elements
- ❌ z-index values of 99, 999, 9999 without a z-index system
- ❌ `!important` anywhere in animation-related CSS
- ❌ Three.js canvas without `pointer-events: none` on the overlay

---

## OUTPUT EXPECTATIONS

When this skill is active, every output must:

1. Load `lenis.css` in `<head>` before any other stylesheet
2. Register all GSAP plugins before any other JS runs
3. Initialize Lenis with current v1.x API — no deprecated options
4. Include BOTH `lenis.on('scroll', ScrollTrigger.update)` AND the gsap.ticker line
5. Wrap all SplitType calls in `document.fonts.ready.then(...)`
6. Create all ScrollTriggers in DOM order (top to bottom)
7. Use function-based `end` values with `invalidateOnRefresh: true` on any scrub animation
8. Call `ScrollTrigger.refresh()` at the end of the init sequence
9. Use a defensive Preloader with error handling and a safety timeout
10. Include at least one scroll-driven animation using `scrub`
11. Include at least one entrance animation using `expo.out` or `expo.inOut`
12. Include a custom cursor (desktop only)
13. Feature at least one signature move — an unexpected interaction for aliveness
14. Pass the 60fps test: no `top`/`left`/`width`/`height` animations
15. Contain zero items from the Ban List

The measure of success is not "does it work." It is "does it feel impossible."
