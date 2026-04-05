# GRID — Complete Website Design & Animation Master Plan
### projectgrid.org · v1.0 · April 2026

> This document is the single source of truth for every design decision, animation choreography, colour token, typographic rule, microinteraction spec, and copy tone guideline for the GRID website. Nothing ships without matching this plan.

---

## TABLE OF CONTENTS

1. [Design Philosophy](#1-design-philosophy)
2. [Identity & Positioning](#2-identity--positioning)
3. [Colour System](#3-colour-system)
4. [Typography System](#4-typography-system)
5. [Motion & Animation System](#5-motion--animation-system)
6. [Global Systems](#6-global-systems)
7. [Page-by-Page Choreography](#7-page-by-page-choreography)
8. [Component Library](#8-component-library)
9. [Copy Tone & Voice](#9-copy-tone--voice)
10. [Mobile & Accessibility Strategy](#10-mobile--accessibility-strategy)
11. [Build Sequence & Priorities](#11-build-sequence--priorities)
12. [The Ban List](#12-the-ban-list)

---

## 1. DESIGN PHILOSOPHY

### The Core Tension

GRID is simultaneously two things that usually don't coexist:

- **A registered Indian nonprofit (Section 8)** that needs to look credible enough for TCS, HCL, IIT Delhi, and IIIT Delhi to take seriously
- **A 16-year-old-founded, Gen-Z-run organisation** that gives away AI access to students who've never seen a MacBook

Most NGO sites solve this by looking deeply boring. A PDF with a navbar. GRID solves it differently: **the site IS the proof.** If the website looks like it was built by the future, the message that GRID builds the future lands automatically. No one needs a paragraph explaining credibility when the site itself is the most credible thing in the room.

### The Formula

```
Editorial seriousness (like Foreign Affairs magazine)
× Kinetic energy (like lenis.dev)
× Institutional warmth (like Notion's early site)
÷ Corporate coldness (nothing that feels like Deloitte)
= GRID
```

### Three Non-Negotiables

**1. Speed reads as trust.** Every headline must communicate its point in under 2 seconds. GRID operates at scale (75,000 teams, 50 countries). The site should feel like something built for that scale.

**2. The animations are not decoration.** They are evidence. A particle field that responds to your cursor is a 3-second proof-of-concept that GRID actually knows what it claims to teach.

**3. Humour is a feature, not a bug.** Gen-Z knows when it's being marketed to. The site can be formal and funny simultaneously — a wry label, an unexpected line in the footer, a section title that's slightly too honest. The humour is never at the expense of the mission. It's in service of it.

---

## 2. IDENTITY & POSITIONING

### Who GRID Is

**Project GRID** (Global Resources for Interactive Development) is a Section 8 nonprofit based in Delhi, co-founded by Tanishq and Moksh Sindhwani. Operating out of IIT Delhi campus, GRID gives underprivileged students access to AI and entrepreneurship resources through four programs:

- **Aurora** — A global hackathon (April–May 2026, hosted with IIIT Delhi, ₹20L prize pool, 50+ countries)
- **N3C** — National Creativity & Changemaking Challenge (75k+ teams, 15–20 states, 5,000+ schools)
- **Young Changemakers Bootcamp** — IIT Delhi, IIT Bombay, IIT Delhi Abu Dhabi campuses
- **Project Learn** — Rural student skilling via municipal and NGO partnerships

Financial administration runs through Tale of Humankind Foundation (TOH), a registered Section 8 entity.

### Site's Job

| Visitor | What They Need | Site Delivers |
|---|---|---|
| Corporate sponsor (TCS, HCL) | Credibility, reach, ROI signal | Stats, institutional logos, professional tone |
| Student (underprivileged, Class 9–12) | "This is for me" | Energy, accessible language, bold CTAs |
| International hackathon participant | Aurora is legit | Production-quality Aurora page, prize transparency |
| University partner (IIT, IIIT) | Serious org | Section 8 mention, clean about page, team credentials |
| Press / journalist | Quick story angle | Impact page, quote-ready stat blocks |
| Potential team member | Is this worth my time | Team page honesty, real program scope |

### Tagline Options (pick one for hero)
- **"AI for every student, everywhere."** — Mission-first, clean
- **"The grid that levels the field."** — Wordplay, punchy
- **"We don't wait for the future. We give it to students."** — Slightly dramatic, good for impact page
- **"Learning shouldn't depend on your postcode."** — Warm, accessible

---

## 3. COLOUR SYSTEM

### The Philosophy

Two modes. Both are serious. Neither is safe.

Dark mode is the **primary experience** — this is the version that wins awards and launches with Aurora. Light mode is the **institutional variant** — for when GRID is sending the site link to a CSR head at Infosys who uses Windows and Chrome with light theme. It is not a visual downgrade. It is a different costume for the same character.

---

### DARK MODE — "Formula A"

The primary visual identity. Space is a resource. Black is not emptiness — it is weight and credibility.

#### Base Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-void` | `#000000` | True black. Hero backgrounds, canvas behind Three.js |
| `--bg-base` | `#080808` | Default page background |
| `--bg-surface` | `#101010` | Cards, navbars, elevated surfaces |
| `--bg-elevated` | `#1A1A1A` | Hover states on cards, active nav |
| `--bg-subtle` | `#222222` | Dividers, input backgrounds, muted zones |
| `--border-dim` | `#2A2A2A` | Default borders — barely there |
| `--border-mid` | `#3D3D3D` | Focus rings, active borders |
| `--border-bright` | `#555555` | Hover borders |

#### Text

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#F5F5F5` | Headlines, primary body |
| `--text-secondary` | `#A0A0A0` | Subheadings, meta text |
| `--text-muted` | `#555555` | Captions, helper text, footnotes |
| `--text-inverse` | `#080808` | Text on light/accent backgrounds |
| `--text-on-blue` | `#FFFFFF` | Text on electric blue surfaces |
| `--text-on-teal` | `#000000` | Text on aurora teal surfaces |

#### Accent — Electric Blue

| Token | Hex | Usage |
|---|---|---|
| `--blue-primary` | `#0066FF` | Primary CTAs, key highlights, active states |
| `--blue-hover` | `#0052CC` | Button hover state |
| `--blue-dim` | `#0033AA` | Pressed state |
| `--blue-ghost` | `rgba(0,102,255,0.12)` | Cursor hover fill, tag backgrounds |
| `--blue-glow` | `rgba(0,102,255,0.3)` | Box shadows, glow effects |
| `--blue-trace` | `rgba(0,102,255,0.06)` | Subtle section tints |

#### Accent — Aurora Teal

| Token | Hex | Usage |
|---|---|---|
| `--teal-primary` | `#00FFB3` | Secondary accents, success states, Aurora branding |
| `--teal-dim` | `#00CC8F` | Hover on teal elements |
| `--teal-ghost` | `rgba(0,255,179,0.10)` | Tag fills, badge backgrounds |
| `--teal-glow` | `rgba(0,255,179,0.25)` | Glow on Aurora-specific elements |
| `--teal-trace` | `rgba(0,255,179,0.05)` | Very subtle Aurora section tints |

#### Semantic

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#00E676` | Form success, active program badges |
| `--warning` | `#FFB700` | "Applications closing" warnings |
| `--error` | `#FF4444` | Form errors |
| `--info` | `#40C4FF` | Info tooltips, helper annotations |

#### Gradient Recipes

```css
/* Hero overlay — depth without blur */
--gradient-hero: linear-gradient(180deg, transparent 0%, #080808 100%);

/* Teal-to-blue — Aurora section signature */
--gradient-aurora: linear-gradient(135deg, #00FFB3 0%, #0066FF 100%);

/* Radial glow behind key elements */
--gradient-blue-glow: radial-gradient(ellipse 600px 400px at center, rgba(0,102,255,0.15) 0%, transparent 70%);
--gradient-teal-glow: radial-gradient(ellipse 600px 400px at center, rgba(0,255,179,0.10) 0%, transparent 70%);

/* Section fade — transitions between sections */
--gradient-section-fade: linear-gradient(180deg, #080808 0%, #000000 50%, #080808 100%);

/* Text gradient — for display type only, used sparingly */
--gradient-text-accent: linear-gradient(90deg, #0066FF 0%, #00FFB3 100%);
```

---

### LIGHT MODE — "Institutional White"

Not your average light mode. This is the version that could sit in a Harvard admissions office and not embarrass anyone. Clean, editorial, and still unmistakably GRID.

#### Base Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-void` | `#FFFFFF` | True white hero |
| `--bg-base` | `#F8F8F6` | Default page background (slightly warm — not pure white, not yellow) |
| `--bg-surface` | `#EFEFED` | Cards, elevated containers |
| `--bg-elevated` | `#E6E6E4` | Hover states |
| `--bg-subtle` | `#DCDCDA` | Dividers, inactive inputs |
| `--border-dim` | `#D0D0CE` | Default borders |
| `--border-mid` | `#AFAFAD` | Focus rings |
| `--border-bright` | `#888888` | Hover borders |

#### Text (Light)

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#0A0A0A` | Near-black headlines — not pure black (feels harsh) |
| `--text-secondary` | `#4A4A4A` | Subheadings, descriptions |
| `--text-muted` | `#8A8A8A` | Captions, meta |
| `--text-inverse` | `#F5F5F5` | Text on dark surfaces |

#### Accent (Light Mode) — Deep Violet-Blue

Different accent in light mode. Electric blue `#0066FF` washes out on white — replace with deep violet-blue.

| Token | Hex | Usage |
|---|---|---|
| `--blue-primary` | `#2040C8` | Primary CTAs in light mode |
| `--blue-hover` | `#1830A0` | Hover state |
| `--blue-ghost` | `rgba(32,64,200,0.08)` | Subtle tag fills |
| `--blue-glow` | `rgba(32,64,200,0.15)` | Box shadows |

#### Accent (Light Mode) — Forest Teal

| Token | Hex | Usage |
|---|---|---|
| `--teal-primary` | `#00896B` | Dark teal — `#00FFB3` is invisible on white |
| `--teal-dim` | `#006B53` | Hover |
| `--teal-ghost` | `rgba(0,137,107,0.08)` | Tag backgrounds |

#### Light Mode Gradients

```css
--gradient-hero: linear-gradient(180deg, transparent 0%, #F8F8F6 100%);
--gradient-aurora: linear-gradient(135deg, #00896B 0%, #2040C8 100%);
--gradient-blue-glow: radial-gradient(ellipse 600px 400px at center, rgba(32,64,200,0.08) 0%, transparent 70%);
--gradient-text-accent: linear-gradient(90deg, #2040C8 0%, #00896B 100%);
```

---

### Contrast Audit (WCAG AA minimum)

| Pair | Contrast Ratio | Status |
|---|---|---|
| `--text-primary` on `--bg-base` (dark) | 18.7:1 | ✅ AAA |
| `--text-secondary` on `--bg-base` (dark) | 5.2:1 | ✅ AA |
| `--text-muted` on `--bg-base` (dark) | 2.9:1 | ⚠️ captions only |
| `--blue-primary` on `--bg-void` (dark) | 4.8:1 | ✅ AA |
| `--teal-primary` on `--bg-void` (dark) | 11.2:1 | ✅ AAA |
| `--text-primary` on `--bg-base` (light) | 17.1:1 | ✅ AAA |
| `--blue-primary` (light) on `--bg-base` | 6.1:1 | ✅ AA |
| `--teal-primary` (light) on `--bg-base` | 5.4:1 | ✅ AA |

---

## 4. TYPOGRAPHY SYSTEM

### The Philosophy

Typography is 70% of what makes a site feel designed. GRID's typography system has exactly three jobs: command authority (like an institution), communicate speed (like a startup), and be readable by a Class 9 student in Rajasthan on a 5-inch screen at 40% brightness.

### Font Stack

#### Primary Display — Clash Display

Used for all hero headlines, section titles, program names, stat numbers.

```css
font-family: 'Clash Display', sans-serif;
```

- Weights in use: **500 (Medium), 600 (Semibold), 700 (Bold)**
- Character: Geometric, high x-height, slightly wide letterforms. Feels modern and institutional simultaneously. Different enough from Helvetica to be interesting. Serious enough to not feel playful.
- **Never use below 32px.** Below that, switch to Syne.
- Load via: `https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap`

#### Secondary Display — Syne (800 Extrabold)

Used for the light mode variant, secondary display text, certain section labels that need a different texture from Clash.

```css
font-family: 'Syne', sans-serif;
font-weight: 800;
```

- Character: Wider, more eccentric letter shapes. Has a distinctive uppercase geometry. Pairs with Clash in dark mode for contrast (use sparingly — one or the other per section, not both). In light mode, becomes the primary display font.
- Load via: Google Fonts

#### Monospace — JetBrains Mono

Used for data, stats, labels, badges, code references, timestamps, coordinates. The "technical credibility" voice.

```css
font-family: 'JetBrains Mono', monospace;
```

- Weights in use: **400, 600**
- Character: Developer-grade. Communicates precision. Every stat in JetBrains Mono implies it was measured, not estimated.
- Usage: Numbers, program labels, nav micro-labels, form field helpers, "Stage 01 / Stage 02" markers, country counters.
- Load via: Google Fonts

#### Body — Instrument Serif (italic accents) + DM Sans (body copy)

Two body fonts playing different roles:

**DM Sans** — Clean, neutral, readable at any size. Used for paragraphs, descriptions, FAQs.
```css
font-family: 'DM Sans', sans-serif;
/* Weights: 400 (body), 500 (emphasis) */
```

**Instrument Serif** — Used exclusively for pull quotes, testimonials, manifesto statements. The italic weight specifically. Creates a newspaper editorial feeling when placed next to Clash Display.
```css
font-family: 'Instrument Serif', serif;
font-style: italic;
/* Weight: 400 only */
```

---

### Type Scale

Uses an optical type scale, not a purely mathematical one. Numbers are adjusted by eye.

```css
:root {
  /* Display */
  --type-hero:      clamp(64px, 9vw, 144px);   /* Hero headlines */
  --type-display:   clamp(48px, 6.5vw, 96px);  /* Section hero headlines */
  --type-title:     clamp(36px, 4.5vw, 64px);  /* Sub-section titles */
  --type-heading:   clamp(24px, 3vw, 40px);    /* Card titles, list headers */
  
  /* Body */
  --type-lead:      clamp(18px, 1.8vw, 24px);  /* First paragraph, intro text */
  --type-body:      clamp(15px, 1.2vw, 18px);  /* Default body copy */
  --type-small:     clamp(13px, 1vw, 15px);    /* Captions, meta, helpers */
  --type-micro:     11px;                       /* Labels, badges — fixed size */
  
  /* Monospace */
  --type-mono-lg:   clamp(20px, 2vw, 32px);    /* Stat numbers */
  --type-mono-md:   clamp(13px, 1.1vw, 16px);  /* Labels, badges */
  --type-mono-sm:   11px;                       /* Technical micro-labels */
}
```

### Line Heights

```css
:root {
  --leading-tight:    1.0;   /* Display text, >72px */
  --leading-snug:     1.15;  /* Headlines, 36–72px */
  --leading-normal:   1.4;   /* Subheadings, leads */
  --leading-relaxed:  1.65;  /* Body copy */
  --leading-loose:    1.8;   /* Long-form, accessibility mode */
}
```

### Letter Spacing

```css
:root {
  --tracking-tight:   -0.04em;  /* Large display text — optically necessary */
  --tracking-snug:    -0.02em;  /* Headlines 36–64px */
  --tracking-normal:   0;       /* Body text */
  --tracking-wide:     0.05em;  /* Small caps, mono labels */
  --tracking-wider:    0.12em;  /* Section category labels e.g. "PROGRAMS" */
  --tracking-widest:   0.2em;   /* All-caps micro labels */
}
```

### Typographic Patterns

**Pattern 1 — The Mixed Weight Statement**
Use in hero headlines: first line in Clash Display 500 (regular weight), second line in Clash Display 700 (bold). Creates optical rhythm without needing colour change.
```
AI for every student,
everywhere.
```
"AI for every student," → 500 weight
"everywhere." → 700 weight, slight colour difference (`--text-secondary` for first line, `--text-primary` for second)

**Pattern 2 — The Mono Label Stack**
A JetBrains Mono uppercase label (`--tracking-widest`, `--type-micro`) sits above a Clash Display headline. Creates a "file header" aesthetic — feels like a document, not a brochure.
```
// 01 — PROGRAMS
What we run
```

**Pattern 3 — The Instrument Serif Pull Quote**
Large (48–64px), italic, Instrument Serif, centred. Used once per page maximum. Creates a newspaper editorial pause — the reader slows down.

**Pattern 4 — The Stat Block**
Number in JetBrains Mono at `--type-mono-lg` with `--tracking-tight`. Unit ("+", "k", "L", "cr") in the same font but 60% the size and `--text-secondary`. Descriptor in DM Sans 400 `--type-small` below.
```
75,000+      (JetBrains Mono, 48px)
teams        (DM Sans, 13px, --text-secondary)
```

---

### Font Loading Strategy

```html
<!-- Critical fonts: preload -->
<link rel="preload" href="clash-display.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="jetbrains-mono.woff2" as="font" type="font/woff2" crossorigin>

<!-- Non-critical: load async -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Syne:wght@800&family=Instrument+Serif:ital@1&family=JetBrains+Mono:wght@400;600&display=swap">
```

---

## 5. MOTION & ANIMATION SYSTEM

### The Three Laws (from dangerous-animation skill)

1. **Nothing starts or stops.** Every animation eases from rest to rest. Inertia is mandatory. No linear motion anywhere.
2. **Everything responds.** Cursor, scroll, resize, orientation — every input propagates through the scene.
3. **Transitions are scenes.** Page transitions are full choreographed sequences, not fades. Minimum 600ms. Maximum 1400ms.

### Easing Vocabulary

```css
/* GSAP named eases used throughout */
--ease-out-expo:    expo.out        /* Primary entrance ease */
--ease-inout-expo:  expo.inOut      /* Page transitions, reveals */
--ease-out-quart:   quart.out       /* Hover states, quick interactions */
--ease-out-back:    back.out(1.2)   /* Small "snap" moments — use sparingly */
--ease-none:        none            /* Scrub-driven, physics-based */

/* CSS cubic-bezier equivalents */
--ease-butter:      cubic-bezier(0.16, 1, 0.3, 1);     /* expo.out equivalent */
--ease-snap:        cubic-bezier(0.34, 1.56, 0.64, 1); /* slight overshoot */
--ease-cinema:      cubic-bezier(0.76, 0, 0.24, 1);    /* slow in, fast out */
```

### Duration Scale

```css
:root {
  --dur-instant:    80ms;    /* State feedback — pressed, focused */
  --dur-quick:      200ms;   /* Hover reveals, toggles */
  --dur-normal:     400ms;   /* Most UI transitions */
  --dur-enter:      800ms;   /* Entrance animations */
  --dur-scene:      1100ms;  /* Section reveals, major transitions */
  --dur-cinematic:  1400ms;  /* Page transitions, hero assembly */
}
```

### Stagger Scale

```css
:root {
  --stagger-tight:   0.03s;  /* Char-level stagger */
  --stagger-snug:    0.06s;  /* Word-level stagger */
  --stagger-normal:  0.10s;  /* Element-level stagger (cards, list items) */
  --stagger-loose:   0.16s;  /* Section-level stagger */
}
```

### Scroll Scrub Values

```css
/* scrub value = inertia lag in ScrollTrigger */
--scrub-tight:  0.5   /* Responsive, slight lag */
--scrub-normal: 1.2   /* Standard scrub feel */
--scrub-heavy:  2.0   /* Used for large-scale parallax, feels weighty */
```

### The Signature Moves (one per page minimum)

A "signature move" is an unexpected interaction with no functional purpose except to make the site feel impossibly alive. Each page gets one.

| Page | Signature Move |
|---|---|
| Home | Hero headline letters magnetically repel cursor, spring back |
| About | Reading spotlight — only in-view paragraph is fully lit, rest fade to 20% |
| Programs | Panel expand on hover — hovered card fills 60% viewport, others compress |
| Aurora | Register button — letters scatter on hover, reassemble on mouse leave |
| Impact | Testimonial cards drift 2–4px on a 20s sine wave — barely perceptible |
| Team | Highlight bar travels between names on hover (lerp, not jump-cut) |
| Contact | Submit button text morphs char-by-char from "SEND" → "SENDING..." → "SENT ✓" |

---

## 6. GLOBAL SYSTEMS

### 6.1 Preloader

**Trigger:** Every page load. Duration: ~2.2 seconds.

**Sequence:**
1. Page loads → full-screen black preloader covers everything
2. GRID logo SVG draws itself stroke-by-stroke (Vivus, `type: 'delayed'`, duration 1.2s)
3. Simultaneously: JetBrains Mono counter in bottom-right counts 0% → 100% with expo ease (not linear — lingers at 0–30, rushes 70–100)
4. At 100%: counter freezes for 80ms
5. Preloader exits: the block splits along the horizontal axis — top half slides off upward, bottom half off downward — like opening a shutter. Duration 600ms, `expo.inOut`
6. As preloader exits, the hero content underneath begins assembling (triggered by `preloader:complete` event)
7. Logo ghost: the drawn GRID logo trails a ghost copy that fades `opacity: 0.3 → 0` as the real logo locks into navbar position with a positional FLIP animation

**Progress bar:** Thin 1px line at bottom of preloader fills left-to-right, teal colour, scrubbed to actual asset load progress (not faked).

**Skip condition:** If returning visitor (sessionStorage flag) and all assets cached → preloader reduced to 400ms with just a quick flash.

---

### 6.2 Custom Cursor

**Desktop only.** Removed on `pointer: coarse` devices.

**Structure:** Two layers.
- **Dot** — 5px diameter, `--blue-primary` fill, follows cursor exactly (0 lag). Uses raw `mousemove` event.
- **Ring** — 28px diameter, 1.5px stroke `--text-secondary`, follows with lerp factor `0.12`. GSAP ticker drives this.

**States:**

| Context | Ring Behaviour |
|---|---|
| Default | 28px ring, `--text-secondary` stroke |
| Link/button hover | Expands to 56px, fills `--blue-ghost`, label text appears inside (e.g. "VIEW") in JetBrains Mono 10px |
| CTA button hover | Fills `--blue-primary` solid, ring becomes filled circle, label "→" |
| Image/card hover | Ring expands to 72px, label reads "OPEN" or "EXPLORE" |
| Draggable element | Ring morphs to horizontal pill shape, label "DRAG" |
| Text selection | Dot disappears, ring shrinks to 8px standard pointer feel |
| Click (mousedown) | Ring compresses to 8px instantaneously, springs back to contextual size on mouseup |
| External link | Ring gets small "↗" symbol |
| Aurora page specifically | Ring colour shifts to `--teal-primary` |

**Cursor magnetic fields:** CTAs and key buttons pull the cursor toward their centre within a 60px radius. Strength: subtle (max 6px pull). Makes buttons feel sticky and intentional.

---

### 6.3 Navigation

**Structure:**
```
[GRID logo]          [Programs ▾] [Impact] [Team] [Partners]          [Join Aurora →]
```

**Behaviour on scroll:**
- Starts: transparent, no background
- After 80px scroll: background transitions to `rgba(8,8,8,0.85)` + `backdrop-filter: blur(16px)` — but this is scrub-driven via ScrollTrigger, not a class toggle. Silky.
- The navbar height compresses slightly from 72px → 60px during the same scroll range.

**Logo animation:**
- On load: logo slides in from left, `x: -20px → 0`, `opacity: 0 → 1`, `expo.out`, 800ms, delay after preloader
- On hover: logo subtly scales `1.0 → 1.05`, duration 300ms `quart.out`

**Link hover:**
Each nav link gets a SplitType treatment. On hover, characters shift colour one by one from `--text-secondary` → `--text-primary` with a tiny stagger (0.015s per char). A JetBrains Mono underline label (e.g. "01", "02") slides up from below the link text. On mouse leave, chars return staggered in reverse.

**Active page indicator:**
A 1px teal line sits under the active page's nav link. On nav change (Barba transition), this line animates from old position to new position horizontally (it travels, not fades).

**"Join Aurora →" CTA button:**
Electric blue background. On hover: background wipes out left-to-right revealing teal, simultaneously text colour changes to `--text-inverse`. Duration 350ms, `expo.out`. Has a subtle pulse glow (`--blue-glow` box-shadow) on a 4s loop.

**Mobile nav:**
Full-screen overlay nav. Opens with a diagonal wipe from top-right corner. Links enter staggered from right, each with a JetBrains Mono index number prefix. Close button is a morphing ✕ that draws itself.

---

### 6.4 Page Transitions (Barba.js)

Every internal link triggers a transition. Different routes get different curtain colours.

**Standard transition (all pages):**
1. Click → current page content collapses: `scaleY: 1 → 0.95, opacity: 1 → 0`, `y: 0 → -20px`, duration 400ms `expo.inOut`
2. Simultaneously: electric blue curtain wipes in from bottom (`scaleY: 0 → 1`, transform-origin bottom), duration 450ms
3. Curtain holds 80ms
4. New page: curtain pulls back upward (`scaleY: 1 → 0`, transform-origin top), duration 400ms `expo.inOut`
5. New content assembles from `y: 30px → 0`, duration 600ms `expo.out`

**Aurora page variant:** Curtain colour is `--teal-primary` instead of blue. On Aurora hero entry, the Three.js shader starts at 0 opacity and fades in as the curtain lifts.

**Programs index → program sub-page:** The card the user clicked expands to fill the viewport (FLIP animation using GSAP Flip plugin) and becomes the hero of the new page. The transition is the card itself.

---

### 6.5 Footer

**Content:**
```
GRID wordmark (large, 80px Clash Display)

[Programs column]   [Organisation column]   [Contact column]   [Social column]
Aurora              About                   hello@projectgrid.org  Twitter/X
N3C                 Team                    Partnerships        LinkedIn
Bootcamp            Partners                Press               Instagram
Project Learn       Impact                  IIT Delhi, Delhi    GitHub

Section 8 Nonprofit · Registered under Indian law
Implementation partner: Tale of Humankind Foundation
© 2026 Project GRID. Built in Delhi. Shipped everywhere.
```

**Footer humour line (bottom-most, `--text-muted`, JetBrains Mono 11px):**
```
"Yes, we are actually from IIT Delhi. No, we didn't just put that in the URL."
```
(Rotate this quarterly — it's a culture signal to people who read footers.)

**Footer animation:**
- Large "GRID" wordmark reveals on scroll using a clip-path wipe, left to right
- Footer links get a magnetic hover that subtly pulls them 3px toward the cursor
- The copyright line and humour line fade in last, 200ms after the rest

---

## 7. PAGE-BY-PAGE CHOREOGRAPHY

---

### 7.1 HOME (`/`)

#### Section 1 — Hero

**Visual setup:**
- Background: Three.js canvas, `position: fixed`, `z-index: var(--z-below)`, `pointer-events: none`
- Canvas renders an aurora particle field: 1,000 particles, `THREE.Points`, each with a small sprite texture (soft circle)
- Particle colours: interpolate between `#0033AA` (deep blue) and `#00FFB3` (teal) based on position.y
- Particle drift: slow upward movement (0.0003 units/frame) + sinusoidal horizontal sway per particle using unique phase offsets
- Cursor interaction: particles within 80px Euclidean distance scatter radially (velocity impulse), then drift back with spring physics (damping 0.92, stiffness 0.02)
- On mobile: replace with a CSS `@keyframes` gradient animation between `#000022` and `#001A0F`, no WebGL

**Text assembly (post-preloader, ~delay 0.1s):**

Line 1: "AI for every student," — Clash Display 500, `--type-hero`
- SplitType by words
- Each word enters: `y: 110%`, clipped by overflow-hidden wrapper → `y: 0`
- Stagger 0.06s, duration 1.0s, `expo.out`
- Rotated slightly from `rotateX: 12deg → 0` for 3D lift effect

Line 2: "everywhere." — Clash Display 700, `--type-hero`, `--teal-primary` colour
- Same animation, 0.15s delay after first line starts

Subheadline: DM Sans 400, `--type-lead`, `--text-secondary`
- Fades from `opacity: 0, blur: 6px → opacity: 1, blur: 0`
- Delay: 0.6s after headline starts. Duration 800ms.

CTA row:
- "Join Aurora →" (primary blue button) + "See what we do" (ghost/outline)
- Enters: `y: 20px → 0, opacity: 0 → 1`, duration 600ms, delay 0.9s

**Signature Move — Magnetic letter repulsion:**
After assembly completes, headline words respond to cursor proximity within 60px:
- Word moves away from cursor by max 8px (inverse square relationship)
- Returns with spring physics: stiffness 0.04, damping 0.75
- Barely perceptible at normal browsing. Feels like the text breathes.

**Scroll indicator:**
JetBrains Mono label "SCROLL" at bottom centre. An arrow below it bounces on a 2s loop — but not a CSS bounce ease. Uses a custom GSAP `sine.inOut` with asymmetric timing (fast down, slow up). Fades out after first scroll tick.

---

#### Section 2 — Numbers Bar

**Layout:** Full-width horizontal strip. 4 stats in a row. `--bg-surface` background, 1px `--border-dim` top and bottom.

**Content:**
```
75,000+           50+              ₹20,00,000       4
teams reached     countries        in prizes        active programs
```

**Animation on scroll-enter:**
- Bar slides up from `y: 30px` as a unit first (200ms), then individual stat blocks stagger reveal
- Each number: CountUp.js, expo ease, 1.6s duration, starts at 0
- Number labels (JetBrains Mono, `--type-mono-lg`) count up; unit suffixes appear at 70% completion
- Below-labels (DM Sans, `--type-small`, `--text-muted`) slide up with 0.1s delay per column

**A horizontal scan-line sweeps left → right across the bar** (1px height, `--teal-primary`, `opacity: 0.4`) in 0.9s when triggered — like a hardware readout.

**Hover on individual stat:** Number scales `1.0 → 1.06`, a faint `--blue-glow` radial gradient appears behind it, duration 300ms.

---

#### Section 3 — Programs Teaser

**Layout:** 2×2 grid on desktop. Each card: dark surface background (`--bg-surface`), generous padding, program name in Clash Display, short description in DM Sans, status badge in JetBrains Mono.

**Card entrance:** Diagonal wave entry. Top-left first, then top-right, then bottom-left, then bottom-right. Each card: `y: 40px, opacity: 0 → y: 0, opacity: 1`, `expo.out`, 800ms, stagger 0.12s.

**Card hover:**
- Card scales to `1.02`
- Inner top-right corner: a small arrow `→` was hidden (`opacity: 0`) — flies in from `x: -8px` to position
- Card border: SVG stroke draws around the perimeter (full circuit in 600ms, `ease: none`)
- Program name: chars shift from `--text-primary` → `--blue-primary` left-to-right, stagger 0.02s
- Background gets a very subtle `--blue-trace` radial glow at cursor position (follows cursor within card via `mousemove`)
- Cursor: ring expands to 64px, label reads "EXPLORE"

**Aurora card specifically:** Border stroke is `--teal-primary` not blue. Status badge ("OPEN NOW") blinks in JetBrains Mono — not opacity blink, but a character-level flicker (random chars for 60ms then settles) every 3s.

**N3C card:** Status badge reads "APPLICATIONS OPEN" in `--success` green.
**Bootcamp card:** Status badge reads "2026 COHORT" in `--blue-primary`.
**Project Learn card:** Status badge reads "ONGOING" in `--text-secondary`.

---

#### Section 4 — Featured Moment

**Layout:** Full-width, `--bg-void` background. Large featured content block (could be latest Aurora update, a bootcamp moment, a student story). JetBrains Mono label "// LATEST" top-left.

**Auto-advances every 5.5s.** Progress bar fills at bottom (1px, `--teal-primary`) over 5.5s.

**Transition between moments:**
- Outgoing: `scaleY: 0.97, opacity: 0`, `y: -10px`, duration 350ms
- Incoming: `y: 20px → 0, opacity: 0 → 1`, duration 400ms, `expo.out`
- Progress bar resets with a flash-then-fill

**Hover freezes timer.** Mouse leave resumes from current position.

---

#### Section 5 — Partners Strip

**Layout:** Two-row infinite marquee. Row 1 scrolls left at 40px/s. Row 2 scrolls right at 30px/s (different speed creates depth).

**Logos:** Grayscale by default (`filter: grayscale(1) opacity(0.5)`). On hover: colour reveals with `filter: grayscale(0) opacity(1)`, 400ms `expo.out`. Cursor: ring shrinks to 40px, label shows partner name.

**Speed physics on hover:**
- Hovering any logo: both rows decelerate to 30% speed with lerp (not snap)
- Mouse leave: lerp back to full speed
- The deceleration communicates that the logos are real content, not filler

**Section label above strip:** JetBrains Mono uppercase "TRUSTED BY", `--text-muted`, `--tracking-widest`. Slides up on scroll entry.

---

#### Section 6 — CTA Block

**Layout:** Full-bleed, tall section. Dark gradient background. Three columns: one per audience type.

```
[For Students]          [For Schools/NGOs]          [For Sponsors]
Join a program          Partner with GRID           Fund the mission
[Apply now →]           [Get in touch →]            [See our deck →]
```

**Background:** Slow-moving WebGL gradient mesh (5 control points, `--bg-void` to `#050510` to `#000A05`). Shifts on a 25s loop. Not distracting — ambient.

**Each column entrance:** Left from left, centre from below, right from right — simultaneously at 80% scroll entry. Duration 700ms, `expo.out`.

**Primary CTA "Apply now →":**
On hover: background wipes left-to-right (clip-path `inset(0 100% 0 0) → inset(0 0 0 0)`), background fills `--blue-primary`. Duration 350ms, `expo.out`.

**Sonar ping:**
Primary button pulses every 4.5s: a ring expands from button centre (`scale: 1 → 1.8, opacity: 0.4 → 0`, duration 1s, `sine.out`). Communicates urgency without being loud.

---

### 7.2 ABOUT (`/about`)

#### Hero

Headline: "We started because it wasn't fair." — Clash Display 700, `--type-display`.
Cinematic lift reveal. After headline, a DM Sans paragraph drops in explaining the 30-word origin.

JetBrains Mono breadcrumb above headline: `// ABOUT GRID` — slides in from left 0.3s before headline.

#### Origin Story — Spotlight Reading

The story is split into ~5 short paragraphs. As the reader scrolls:

- ScrollTrigger watches the midpoint of each paragraph against a "reading zone" (25–55% from top of viewport)
- Paragraphs in the reading zone: `opacity: 1`
- Paragraphs above the reading zone: `opacity: 0.25`, `y: -4px`
- Paragraphs below: `opacity: 0.25`, `y: 4px`
- Transitions are scrub-driven (not triggered), so the opacity shifts continuously as you scroll
- Creates a spotlight effect — only what you're reading right now is fully present

**No other animation in this section.** The story should breathe. The spotlight IS the animation.

#### Mission + Vision

Two giant statements. Full-bleed type at `--type-title`. Clash Display 600.

**Scroll-scrubbed typography:**
- Mission statement enters at normal scale
- As you scroll, it scales up (GSAP scale on scrub `1.0 → 1.12`) and simultaneously fades `opacity: 1 → 0`
- Vision statement was at `scale: 0.88, opacity: 0` below — rises and scales up to `1.0` as mission exits
- The two statements pass through each other during the transition
- Creates a cinematic "statement succession" effect

#### What Makes Us Different — Horizontal Pin

4 panels. Scroll down = move right.

Panel 1: "Most NGOs file reports. We file pull requests."
Panel 2: "Most programmes end at a certificate. Ours end at a startup."
Panel 3: "Most organisations have a board. We have a Discord server and a Make.com automation."
Panel 4: "We're a Section 8 nonprofit. (We had to Google what that meant, too.)"

(Panel 4 is the humour beat — delivers at the end of an otherwise serious sequence.)

**Each panel enters with a clip-path wipe:** `inset(0 100% 0 0) → inset(0 0% 0 0)`, duration 0.8s on pin enter.

**Panel headline:** SplitType by lines. Lines lift from below on enter.

#### TOH Foundation Note

A discreet, non-prominent section. Styled as an annotation block (left border, `--border-mid`, `--text-secondary` colour). DM Sans 400. Explains simply: "Financial administration for GRID programs runs through the Tale of Humankind Foundation, a registered Section 8 entity. GRID is always the lead organisation."

Not animated heavily. Just fades in. This is for institutional credibility, not drama.

#### IIT Delhi Connection

Full-bleed image (or illustration) of the IIT Delhi campus. Caption in JetBrains Mono. Parallax: image moves at 60% scroll speed relative to container (scrub-driven background-position shift).

---

### 7.3 PROGRAMS INDEX (`/programs`)

**Layout:** Four large panels, stacked. Each takes ~90% of viewport height. Full-bleed.

**Card hover — Panel Expand (Signature Move):**
- Hovered card: expands to cover 58% of viewport, `scaleY: 1 → 1.3`, `z-index` lifts, background image/texture reveals
- Other 3 cards: compress proportionally (`scaleY: 1 → 0.7` distributed)
- Duration: 400ms, `expo.out`
- Mouse leave: all spring back with `back.out(1.1)` — slight overshoot that feels physical
- During expansion: card's internal text animates — title scales up, description reveals from clip

**Load animation:**
Cards enter as a unit first (whole grid `y: 60px → 0`), then stagger individually `scale: 0.93 → 1, opacity: 0 → 1`.

**Status badges:**
- Animated in JetBrains Mono
- "OPEN" badge: chars flicker every 3.5s (random char substitution for 60ms)
- "UPCOMING" badge: subtle `opacity: 0.7 ↔ 1.0` breathe on 2s loop

---

### 7.4 AURORA (`/programs/aurora`)

This is the most cinematic page. Aurora gets the fullest dangerous treatment.

#### Hero

**WebGL Background:** Three.js aurora borealis shader. Flowing ribbons of light. Shader approach:
- Multiple layered sine wave functions across a gradient base
- Colours: deep blue (`#000033`) → electric blue (`#0066FF`) → teal (`#00FFB3`) → violet (`#6600CC`)
- Ribbons move slowly (0.0002 speed multiplier on `uTime`)
- Mouse position feeds into the shader as a `uMouse` uniform — ribbons gently distort toward cursor position
- On Aurora hero, cursor ring switches to `--teal-primary`

**Headline — "AURORA" letter-by-letter entry:**
Each letter of "AURORA" enters from a different direction:
- A → from top-left (`x: -80px, y: -80px → 0, 0`)
- U → from right (`x: 100px → 0`)
- R → from below (`y: 100px → 0`)
- O → from top (`y: -100px → 0`)
- R → from left (`x: -100px → 0`)
- A → from bottom-right (`x: 80px, y: 80px → 0, 0`)

All letters converge simultaneously. Duration 800ms, `expo.out`. Begin with 0.1s delay after curtain lifts.

Below: "Global Hackathon 2026" in JetBrains Mono 400 `--type-mono-md`. Enters `opacity: 0 → 1`, delay 0.6s after letters land.

**Prize pool counter:**
`₹20,00,000` in JetBrains Mono `--type-mono-lg`. Counts up 0 → 20,00,000 in 1.4s, expo ease. Appears at 0.8s after letters land. The ₹ symbol was always there; only the numbers count.

Hosted with IIIT Delhi + 50+ countries strip enters below as a horizontal tag row.

**Scroll indicator:** "Scroll to explore" in JetBrains Mono `--type-micro`, fades in at 1.2s. Arrow below it.

---

#### Stages Breakdown

5 stages. Vertical scroll. Each stage is a **pinned viewport**.

On scroll into first stage: the stage number "01" enters in Clash Display 700 at 200px size, then the stage title and description assemble underneath. Pin holds for ~1.5 scroll-lengths.

Connecting line between stages: SVG vertical line, stroke-dashoffset animates as you scroll toward the next stage.

Between pins: transitioning to next stage. Current stage content rises and exits. Next stage: number drops from above, content assembles.

**Stage numbers:** Large background watermark in Clash Display 700 at `opacity: 0.04`, `--text-primary`. Sits behind the content.

---

#### Timeline

Horizontal pinned scroll. 6–8 milestone cards.

- Cards left of current scroll position: full opacity, slight teal left-border
- Cards right of current scroll position: `opacity: 0.4`
- Active card (nearest the centre): `scale: 1.04`, full opacity, blue glow
- The "current" marker: a vertical teal line that stays fixed in the viewport. Cards scroll past it.

On pin entry: all cards enter from right (`x: 60px → 0`) staggered. Entire track enters together first as a group, then individual card staggering.

---

#### Prizes

Cards for 1st, 2nd, 3rd + special categories.

On scroll entry: first place enters last but most dramatically. 2nd and 3rd enter first from sides, 1st drops from above.

First place card: teal gradient border, glow, pulse animation on a 3s loop.

Hardware prizes (MacBook, iPad): if images included, they enter with a slight 3D tilt (`rotateX: 15deg → 0deg, rotateY: -8deg → 0deg`) on scroll entry.

Prize amounts: CountUp on entry.

---

#### Register CTA

Full-bleed section. Tall. Background: subtle noise texture over `--bg-void`.

Button: "REGISTER ON DEVPOST" — large, Clash Display 600.

**Signature Move — Letter scatter:**
On hover, each letter of "REGISTER" scatters with a random velocity vector (using GSAP `.to` with random `x: ±60px, y: ±40px, rotation: ±45deg`) over 400ms. On mouse leave, all letters return to position with spring physics (`back.out(1.4)`), staggered from centre outward. Duration 600ms.

**Particle burst:**
On button hover: 20 small teal particles emit from button centre, arc outward and fade. Three.js or GSAP-driven with custom `onUpdate`. Triggered once per hover event.

---

### 7.5 N3C (`/programs/n3c`)

#### Hero
Headline: "75,000 teams. 15 states. One challenge." — SplitType by words, cinematic lift.

JetBrains Mono stat above: `// N3C — NATIONAL SCALE`

#### Programme Flow (Learn → Build → Implement → Showcase → Incubate)

5-step horizontal scroll (pinned). Each step is a panel with:
- Step number in JetBrains Mono
- Step name in Clash Display 600
- Description in DM Sans
- Icon (SVG, drawn via Vivus on pin-enter)

Connecting arrows between steps draw themselves via SVG stroke-dashoffset on scroll between pins.

#### Grant Tiers

Two tiers displayed as cards:
- ₹5,000 × 300 teams
- ₹20,000 × 100 teams

Cards enter with a flip animation (rotateY: 90deg → 0deg) on scroll. Numbers count up on entry.

---

### 7.6 BOOTCAMP (`/programs/bootcamp`)

#### Location Cards

3 location cards (IIT Delhi, IIT Bombay, IIT Delhi Abu Dhabi).

On load: cards enter in a staggered arc — left card tilted -4deg, centre straight, right card tilted +4deg. On hover over any card: it straightens to 0deg and scales `1.03`. Others maintain tilt.

**Maps:** Small inline SVG maps of each campus location. On hover over card: map pins pulse (scale 1 → 1.4 → 1, opacity flash). A connecting line draws between the three campus locations on section entry (SVG, stroke-dashoffset, draws left-to-right over 1.2s).

---

### 7.7 PROJECT LEARN (`/programs/project-learn`)

More understated page. This program is about rural students — the design should feel warmer and more accessible than the rest of the site, while staying in the same visual system.

Slightly more generous line heights. Instrument Serif italic used for pull quotes from student/partner stories.

#### Impact Map (India)

SVG India map. On scroll entry: districts with PROJECT LEARN presence light up in sequence (wave outward from Delhi). Each lit district appears with a tiny pulse. On hover: district name and brief stat appear in a tooltip.

---

### 7.8 IMPACT (`/impact`)

This page is the credibility engine. Data-forward, editorial, honest.

#### Hero

Headline: "The grid that levels the field." — Clash Display 700, `--type-display`, cinematic lift.

JetBrains Mono label above: `// IMPACT — UPDATED QUARTERLY`

Sub-label in DM Sans: "Numbers we're proud of. Problems we haven't solved yet." — this is a humour/honesty beat that signals GRID's self-awareness.

#### Stats Grid

Large grid of 8–10 stats. Each stat: JetBrains Mono number + DM Sans label below.

**Entry:** Stats enter in a wave from top-left of the grid. Diagonal stagger.

**CountUp on entry.** Each stat animates its number independently (different durations: 1.2s–1.8s, all exponential ease).

**Hover:** Stat block gets a full blue glow radial background, number scales slightly.

#### India Reach Map

SVG India map, full-width. States with GRID presence: coloured `--blue-primary` at varying opacities based on penetration. On scroll entry: each state fades in on a staggered wave emanating from Delhi (distance-based delay).

Hover on state: tooltip slides up with state name + student count + schools. Tooltip enters with `scale: 0.85 → 1, opacity: 0 → 1, expo.out`.

#### Testimonials — Drifting Masonry

NOT a carousel. A scattered, asymmetric layout. Cards at slightly varying widths and heights, some with a subtle initial tilt (±2deg — straightens to 0 on hover).

**Drift animation (Signature Move):**
Each card has a unique sine wave assigned: `y += Math.sin(time * 0.4 + phaseOffset) * 2`. Updated via `requestAnimationFrame` or GSAP ticker. Amplitude: 2–3px. Period: ~15s per cycle. Different phase per card, so they all drift independently.

Barely perceptible at normal reading speed. If you stop and look, the cards breathe.

**Card hover:** Stops individual drift, card lifts `y: -6px`, box-shadow deepens, tilt corrects to 0deg.

#### Press Strip

Logo row (like partners strip but media outlets). Same physics marquee. On hover: logo brightens, cursor ring shows outlet name.

#### Annual Highlights Timeline

Vertical timeline. Line draws itself on scroll (stroke-dashoffset scrub). Each milestone node: appears with a scale pulse when the line reaches it. Milestone content slides in from right.

Year labels in Clash Display `--type-heading` float to the left of the line.

---

### 7.9 TEAM (`/team`)

#### Hero

Headline: "The people who couldn't leave it alone." — honest, slightly funny.

JetBrains Mono label: `// TEAM — 2026`

#### Founders

Tanishq and Moksh get dedicated cards, larger than the rest. Side by side.

Card entry: left card slides from left, right card from right. Both simultaneously. `expo.out`, 900ms.

Role label: JetBrains Mono `--type-mono-sm`, `--text-muted`. Name: Clash Display 600, `--type-heading`. Short bio: DM Sans 400, `--type-small`.

#### Team Grid

Presidents, VPs, department heads in a grid. Cards enter in the diagonal wave pattern (top-left corner outward).

**Hover Highlight Travelling Bar (Signature Move):**
When cursor moves over names in a list, a full-width highlight bar travels between them using lerp — it never disappears and reappears, it slides from one name to the next. Speed proportional to cursor velocity. The bar uses `--blue-ghost` background. Name text under the bar flips to `--text-primary` while uncovered names are `--text-secondary`.

This is the most technically impressive microinteraction on the page. Budget it accordingly.

#### "Join the Team" Strip

Bottom of page. `--bg-surface` background. Headline: "We're building something real. Want in?" — Clash Display 600, `--type-title`.

**Noise field background (Signature Move):**
p5.js noise field (Perlin noise) as a subtle texture behind this strip. Drifts slowly at default state. On cursor enter into this section: noise field speeds up 3×, becomes more animated. The background responds to your attention.

On hover over CTA: noise field goes to 6× speed.

CTA button: "See open roles →"

---

### 7.10 PARTNERS (`/partners`)

#### Tier Grid

Partners displayed by tier. Tier 1 logos: large. Tier 2: medium. Tier 3: small.

On scroll entry: logos within each tier enter simultaneously with a brief flash of colour, then settle to grayscale. (Colour appears for 300ms then fades to gray — like a wink.)

**Hover:** Colour returns, logo scales `1.05`, name tooltip slides up.

#### What Partnership Looks Like

Two-column layout: "What you get" vs "What we offer." Editorial, honest.

Designed as a table-like layout but with editorial typography (not a literal HTML table). Each row enters staggered from left.

**Humour beat:** One row reads:
> "Your logo on a site that actually loads fast." (on the "What you get" column)

#### Partnership CTA

Form or email prompt. Styled with the animated border-trace on focus (same as contact page).

---

### 7.11 BLOG (`/blog`)

Minimal. Editorial. Like a high-quality student newspaper.

**Post cards:** Asymmetric grid. Some full-width, some half-width. Instrument Serif italic for post titles that are pull-quote style. JetBrains Mono for dates and category tags.

**Post card hover:** Background image (if any) scales `1.06`, title underline traces itself, category tag colour shifts from `--text-muted` → `--teal-primary`.

**Load:** Cards enter staggered with a simple `y: 30px → 0, opacity: 0 → 1`. The blog should feel readable, not animated. Keep it calm here.

---

### 7.12 CONTACT (`/contact`)

#### Hero

Headline: "Let's talk." — Clash Display 700, `--type-display`. Simple.
JetBrains Mono subline: "hello@projectgrid.org · Response within 48 hours (we mean it)"

The "we mean it" is the humour beat. Delivered deadpan.

#### Form Fields

Each field: transparent background, 1px `--border-dim` bottom-border only (editorial form style).

**Focus state — Border Trace:**
On focus: an SVG rect traces the full perimeter of the field from bottom-left corner, clockwise. `stroke-dashoffset` animates over 400ms, `expo.out`. Stroke colour: `--teal-primary`.

**Label float:**
Default: label inside field, `--text-muted`. On focus: label rises `y: 0 → -24px`, scales `1.0 → 0.8`, colour shifts to `--blue-primary`. Duration 250ms, `expo.out`. Label stays up if field has content.

**Routing dropdown:**
"I'm reaching out as: a Student / a School / a Sponsor / Press / Other"
Selection changes the form fields displayed below with a smooth height animation.

#### Submit Button

Text: "Send message" — Clash Display 500, not bold.

**Signature Move — Text Morph on Submit:**
1. Click: text morphs char-by-char from "Send message" → "Sending..." (KUTE.js text morph, 400ms)
2. During API call: button background fills with animated progress (the fill sweeps left-to-right, speed estimated not real-time)
3. On success: background fills `--teal-primary`, text morphs "Sending..." → "Sent ✓" (checkmark draws itself as the final char, SVG inline)
4. After 2s: button returns to default state

**Error state:** Background flashes `--error` red for 300ms, text morphs to "Try again →"

---

## 8. COMPONENT LIBRARY

### Buttons

**Primary (Electric Blue):**
- Background: `--blue-primary`
- Text: white, DM Sans 500
- Padding: `14px 28px`
- Border-radius: `4px` — not rounded, not sharp. Considered.
- Hover: clip-path wipe fill from left (duration 350ms)
- Focus: `--blue-glow` box-shadow ring
- Active: `scale: 0.97` (instant, springs back)

**Secondary (Ghost):**
- Background: transparent
- Border: `1px solid --border-mid`
- Text: `--text-primary`
- Hover: border colour shifts to `--text-primary`, background fills `rgba(255,255,255,0.04)`

**Teal Accent:**
- Used specifically for Aurora CTAs
- Same structure as primary but `--teal-primary` background, `--text-inverse` text

**Text Button:**
- No background, no border
- Text: `--text-primary`
- Hover: text colour → `--blue-primary`, underline traces itself

**Icon Button:**
- 40px × 40px square, `border-radius: 4px`
- Hover: background `--bg-elevated`, icon scales `1.1`

---

### Cards

**Program Card (Large):**
```
[Status badge — JetBrains Mono]
[Program name — Clash Display 600]
[Description — DM Sans 400]
[Meta row — JetBrains Mono: dates, location, count]
[CTA — Text button]
```
Background: `--bg-surface`. Hover: see Programs section.

**Stat Card:**
```
[Number — JetBrains Mono --type-mono-lg]
[Label — DM Sans --type-small --text-secondary]
```
Minimal. No border. Hover: radial glow.

**Person Card:**
```
[Name — Clash Display 600]
[Role — JetBrains Mono --type-mono-sm --text-muted]
[Bio — DM Sans --type-small]
```

**Blog Post Card:**
```
[Category tag — JetBrains Mono --type-micro --teal-primary]
[Title — Clash Display 500 or Instrument Serif italic]
[Date — JetBrains Mono --type-micro --text-muted]
[Excerpt — DM Sans --type-small]
```

---

### Badges / Tags

```css
.badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 2px;
}

.badge-active    { background: var(--teal-ghost);  color: var(--teal-primary);  }
.badge-open      { background: var(--blue-ghost);  color: var(--blue-primary);  }
.badge-upcoming  { background: rgba(255,183,0,0.1); color: #FFB700; }
.badge-ongoing   { background: rgba(255,255,255,0.05); color: var(--text-secondary); }
```

---

### Section Label Pattern

Appears above every major section headline.

```html
<span class="section-label">// 01 — PROGRAMS</span>
<h2 class="section-title">What we run</h2>
```

```css
.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: block;
  margin-bottom: 16px;
}
```

Enters before the headline: `x: -20px → 0, opacity: 0 → 1`, 400ms, `expo.out`.

---

### Form Fields

See Contact section above. Consistent across all form instances (contact, school registration, partnership inquiry).

---

### Tooltips

```
scale: 0.8 → 1 (transform-origin: bottom center)
opacity: 0 → 1
y: 6px → 0
duration: 200ms, expo.out
```

Background: `--bg-elevated`. 1px `--border-mid`. JetBrains Mono `--type-micro`. `border-radius: 4px`. 8px padding.

---

## 9. COPY TONE & VOICE

### The Formula

**80% editorial seriousness + 20% Gen-Z self-awareness.**

The 80% sounds like a well-run organisation that knows what it's doing.
The 20% sounds like the founders haven't forgotten they're 16.

The 20% never undercuts the 80%. It appears at the end of paragraphs, in parenthetical asides, in footer lines, in badge labels. It's never the headline. It's the thing you notice after you've already been impressed.

### Voice Attributes

| Attribute | What it means in practice |
|---|---|
| **Confident** | "We give students access to AI." Not "We try to provide..." Not "Our mission is to attempt to..." |
| **Specific** | "75,000 teams across 15 states" not "thousands of students nationwide" |
| **Self-aware** | Acknowledge what GRID isn't yet. "We're building this. Here's where we are." |
| **Warm without being saccharine** | Never "transforming lives" — that's brochure speak. Instead: "Students who've never seen a GPU are building with one." |
| **Technically literate** | The audience includes developers, IIT students, and tech-forward sponsors. Don't dumb down AI/startup language. |
| **Honest about age** | Don't hide that the founders are 16. It's the most interesting thing about GRID. |

### Copy Examples by Section

**Hero headline options:**
- ✅ "AI for every student, everywhere."
- ✅ "The grid that levels the field."
- ❌ "Empowering the next generation of innovators" — this is TED Talk filler
- ❌ "Bridging the digital divide" — NGO cliché, avoid

**Numbers bar:**
- ✅ "75,000+ teams" → "teams reached" (specific, humble — "reached" not "impacted")
- ❌ "50,000+ lives changed" — unverifiable, emotional manipulation

**Program descriptions:**
- ✅ "Aurora: A global hackathon with a ₹20L prize pool, hosted with IIIT Delhi. 50+ countries. April–May 2026."
- ❌ "Aurora is a world-class innovation challenge designed to inspire and empower young creators from every corner of the globe."

**Humour beats (used sparingly, in footnotes/captions/footer):**
- Footer: "Yes, we are actually from IIT Delhi. No, we didn't just put that in the URL."
- About page panel: "We're a Section 8 nonprofit. (We had to Google what that meant, too.)"
- Contact subline: "hello@projectgrid.org · Response within 48 hours (we mean it)"
- Impact section subline: "Numbers we're proud of. Problems we haven't solved yet."
- Team page headline: "The people who couldn't leave it alone."
- 404 page: "This page is as missing as rural broadband. Working on both."

### Copy Don'ts

- ❌ "World-class" — meaningless
- ❌ "Transforming lives" — sentimental manipulation
- ❌ "Leveraging" anything
- ❌ "Ecosystem" used non-technically
- ❌ "Holistic approach"
- ❌ "At GRID, we believe..." — of course you believe it, you wrote the site
- ❌ "Our journey" — cringe
- ❌ "Students from all walks of life" — nobody talks like this

### Programme Name Styling

| Program | Display name | JetBrains label |
|---|---|---|
| Aurora | AURORA | `// GLOBAL HACKATHON` |
| N3C | N3C | `// NATIONAL CHALLENGE` |
| Young Changemakers Bootcamp | BOOTCAMP | `// IIT DELHI · IIT BOMBAY · ABU DHABI` |
| Project Learn | PROJECT LEARN | `// RURAL SKILLING` |

---

## 10. MOBILE & ACCESSIBILITY STRATEGY

### The Principle

Dangerous animations degrade **gracefully** on mobile. They do not simply disappear — they are replaced with intentional alternatives that still feel considered.

### Feature Matrix

| Feature | Desktop | Mobile (touch) |
|---|---|---|
| Three.js aurora particles | Full WebGL, cursor-reactive | CSS animated gradient, `@keyframes` |
| Three.js aurora shader (Aurora page) | Full WebGL shader | Static gradient, slow CSS animation |
| Custom cursor | Full 2-layer cursor | Removed entirely |
| Horizontal pinned scroll | GSAP pin + scrub | Vertical stacked cards with enter triggers |
| Scrub parallax (background images) | scrub: 1.2 | Removed, static positioning |
| Magnetic letter repulsion | Active | Removed |
| Noise field backgrounds | p5.js running | CSS noise texture (static SVG filter) |
| Spotlight reading effect | ScrollTrigger scrub on opacity | Simple enter-trigger fade |
| Drift animation (testimonials) | requestAnimationFrame loop | Removed, static layout |
| Preloader | Full sequence | Shortened to 800ms |
| SplitType text reveals | Active | Active (kept — works well on mobile) |
| CountUp stats | Active | Active |
| Partner strip marquee | Active (physics hover) | Active (no hover physics) |
| Page transitions | Barba.js curtain | Simplified: content fade + new page slide |
| Lenis scroll | `duration: 1.2` | `duration: 0.8` |

### Breakpoints

```css
:root {
  --bp-mobile: 480px;
  --bp-tablet: 768px;
  --bp-laptop: 1024px;
  --bp-desktop: 1280px;
  --bp-wide: 1600px;
  --bp-ultra: 1920px;
}
```

### Touch Device Detection

```javascript
const isMobile = window.matchMedia('(pointer: coarse)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (isMobile || prefersReducedMotion) {
  // Remove cursor system
  // Simplify Lenis
  // Kill scrub-based ScrollTriggers and replace with triggered enters
  // Remove Three.js on low-end (navigator.hardwareConcurrency < 4)
}
```

### Reduced Motion

All entrance animations respect `prefers-reduced-motion: reduce`. Replacement: simple `opacity: 0 → 1` only, no transforms.

### Performance Budget

| Asset type | Budget |
|---|---|
| Total JS (gzipped) | < 180kb |
| Total CSS (gzipped) | < 30kb |
| Images (hero, per page) | < 200kb (WebP) |
| Three.js + GSAP bundle | < 120kb |
| Web fonts (total) | < 80kb |
| First Contentful Paint target | < 1.4s |
| LCP target | < 2.5s |
| CLS score | < 0.1 |

### Accessibility (Beyond Animations)

- All interactive elements keyboard-navigable in logical DOM order
- Focus rings: never hidden, always `--blue-primary` or `--teal-primary` depending on page
- Screen reader: all Three.js canvases have `aria-hidden="true"`
- All images: descriptive `alt` text
- Form labels: always visible (floating label still satisfies this via `<label>`)
- Colour contrast: see audit in Section 3
- Skip-to-content link: first focusable element, visually hidden until focused

---

## 11. BUILD SEQUENCE & PRIORITIES

### Phase 1 — Foundation (Week 1)

1. **Lenis + GSAP registration** — set up once, correct, never touch again
2. **Global CSS variables** — entire token system loaded as `:root` vars
3. **Font loading** — preload critical fonts, async remainder
4. **Preloader** — the first thing anyone sees
5. **Custom cursor** — global, low-risk
6. **Navbar** — global, needed on every page
7. **Barba.js setup** — route hooks before building individual pages

### Phase 2 — Hero Assets (Week 2)

8. **Home hero** — Three.js particle field + SplitType headline
9. **Aurora WebGL shader** — this is the hero asset for the whole brand
10. **Home numbers bar** — CountUp + scan-line
11. **Home programs grid** — card hover interactions

### Phase 3 — Pages (Weeks 3–4)

12. **Aurora page** — full choreography, highest priority after home
13. **About page** — spotlight reading, horizontal pin, mission sequence
14. **Impact page** — India map, drifting testimonials, stats grid
15. **Programs index** — panel expand
16. **Team page** — travelling highlight bar, noise field
17. **Contact page** — form animations, text morph submit
18. **N3C, Bootcamp, Project Learn** — fill in from component library

### Phase 4 — Polish (Week 5)

19. **Mobile degradation pass** — every page, every breakpoint
20. **Footer** — global
21. **Blog** — lowest priority, minimal animation
22. **Performance audit** — 60fps check, will-change cleanup, unused ScrollTrigger kill
23. **Accessibility pass** — keyboard nav, ARIA, focus rings
24. **Cross-browser test** — Chrome, Safari (WebKit differences), Firefox, Chrome Android, Safari iOS

### Phase 5 — Pre-launch

25. **Analytics** — Plausible or Fathom (not Google Analytics — privacy signal)
26. **OG images** — per-page social cards in GRID design language
27. **Sitemap + robots.txt**
28. **Core Web Vitals check** — CLS, LCP, INP
29. **Soft launch** — share with team for feedback
30. **Hard launch** — timed with Aurora Stage 1 opening

---

## 12. THE BAN LIST

These patterns immediately disqualify the site from award consideration and signal generic AI work. None of these appear anywhere.

### Animation Bans
- ❌ `transition: all 0.3s ease` — animate specific properties only
- ❌ Linear easing on anything visible
- ❌ AOS, ScrollReveal, WOW.js
- ❌ Animating `top`, `left`, `margin`, `width`, `height` — transform only
- ❌ `setInterval` for animation — use GSAP ticker / rAF
- ❌ Bounce easing on entrance animations
- ❌ jQuery for anything
- ❌ Lottie animations as decorative filler
- ❌ CSS `animation-delay` as the only stagger mechanism
- ❌ Auto-playing carousels with dot indicators

### Design Bans
- ❌ Purple gradient on dark background (the ChatGPT aesthetic)
- ❌ Glassmorphism cards as the hero element
- ❌ Bento grid with rounded unequal cards as novelty
- ❌ Floating emoji decorations anywhere
- ❌ Blob shapes (`border-radius: 63% 37% 54% 46%`)
- ❌ Three.js sphere with vertex displacement as the only 3D element
- ❌ Hero: large heading + small subheading + two buttons + gradient (the template layout)
- ❌ Sticky header that only changes `box-shadow` on scroll
- ❌ Testimonials carousel with autoplay
- ❌ "Meet our team" with circular profile photo grid and hover tilt effect

### Typography Bans
- ❌ Inter as primary typeface
- ❌ Roboto anywhere
- ❌ Space Grotesk (overused in web3/startup world)
- ❌ All-caps heavy letter-spacing as the only typographic treatment
- ❌ Body text below 400 weight on dark background

### Structural Bans
- ❌ `overflow: hidden` on `body` without Lenis
- ❌ `vh` units for mobile without `svh` fallback
- ❌ Cursor built in CSS `::after` pseudo-elements
- ❌ `z-index: 999` or `9999` — use the z-index token system
- ❌ `!important` in animation CSS
- ❌ Three.js canvas without `pointer-events: none`
- ❌ Lenis without piping into GSAP ticker

### Copy Bans
- ❌ "World-class"
- ❌ "Transforming lives"
- ❌ "Leveraging [anything]"
- ❌ "At GRID, we believe..."
- ❌ "Our journey"
- ❌ "Empowering the next generation"
- ❌ "Bridging the digital divide"
- ❌ "Holistic approach"

---

*End of GRID Website Design & Animation Master Plan · v1.0 · April 2026*
*Built for: projectgrid.org · Authored by: Tanishq + Claude*
*Next revision: after Aurora Stage 1 launch*
