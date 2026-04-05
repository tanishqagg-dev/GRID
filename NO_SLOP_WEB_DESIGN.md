# No Slop. A Web Design Rulebook.

*Everything you must never do if you want your website to look like it was made by a person with taste.*

---

## The Problem With Most Websites Today

AI tools defaulted to the same aesthetic stack: purple gradient, glassmorphism card, Inter font, centered layout, three emoji bullet points. Developers shipped it. Clients accepted it. The internet homogenized into a single aesthetic language nobody chose and everyone copied.

This document is a list of everything that created that problem. Not guidelines. Rules.

---

## Part 1: Typography

### 1.1 Font Size

Small fonts ruin websites. Not in a "minor issue" way — in a "I closed the tab" way.

- **Body text minimum: 16px.** Anything below this is unreadable on most screens in normal viewing conditions. 17–18px is better.
- **Mobile minimum: 15px.** Phones are held at arm's length, screens vary wildly in density.
- **Line-height on body copy: 1.5–1.7.** Dense leading at small sizes is physically uncomfortable to read.
- **Captions, footnotes, metadata:** 13px floor. Never lower. If the information deserves to be on the page, it deserves to be legible.

### 1.2 ALL CAPS

Never use all-caps for anything longer than four words. There is no exception.

All-caps text forces the eye to read character-by-character instead of scanning word shapes. For labels, navigation items, and short badges it can work. For headings, body text, CTAs, or paragraphs it is always wrong. It looks like a design student discovering Futura for the first time.

All-caps paired with light font weight is worse. It almost disappears on screens.

### 1.3 Font Choices

Stop using these fonts as your primary typeface:

- Inter
- Roboto
- Open Sans
- Lato
- Nunito
- Poppins
- DM Sans
- Plus Jakarta Sans
- Space Grotesk ← this one in particular needs to retire

Every Webflow template built in 2023 uses one of these. They are not bad fonts. They are overused to the point of meaning nothing. A font choice should communicate something about the product. "I picked the most common font" communicates nothing.

**What to do instead:** Look at type foundries. Commit to a display font that has a specific character. Pair it with a body font that has high legibility at small sizes. Klim, Grilli Type, Pangram Pangram, Sharp Type, Mass-Driver — these exist.

### 1.4 Font Weight Distribution

Websites that use only `font-weight: 400` everywhere look flat and undifferentiated. Websites that bold everything look anxious. The contrast between weights creates visual hierarchy.

A functional weight scale for most sites:
- Display / hero headline: 700–900
- Section headers: 600–700
- Body: 400–450 (some optical sizes read better at 450)
- Supporting text, metadata: 300–400 (with size compensation — don't go 300 at 12px)

### 1.5 Measure (Line Length)

Optimal reading measure: 55–75 characters per line. Research on this is consistent across decades. Long lines fatigue the eye during saccadic return (the jump from end of one line to start of next). Short lines feel choppy and interrupt natural reading rhythm.

On wide screens, resist the urge to span full container width. Max-width on text blocks: 65ch is a solid default.

---

## Part 2: Color

### 2.1 The Only Valid Themes Are Light and Dark

This is not about limiting creativity. It is about respecting context.

Light mode: high contrast, works in bright environments, default for most reading-heavy products, expected by users who haven't opted out.

Dark mode: reduces eye strain in dim environments, works well for developer tools and media-heavy products, genuine use case.

Every other theme — "warm beige mode," "sepia," "ocean blue," "high contrast orange" — should be an accessibility override for users who request it, not your primary design direction. It is nearly always a distraction.

### 2.2 The Purple Gradient Problem

Stop. There is no version of purple-to-blue gradient on a white background that does not look like a SaaS landing page from 2021. You have seen it thousands of times. Your users have seen it thousands of times. It signals nothing except that someone used an AI tool to generate the design.

These color moves are banned:

- Purple-to-blue, blue-to-cyan, pink-to-purple: gradient clichés
- Orange-to-yellow on black: "tech startup energy" cliché
- Teal on dark navy: crypto project cliché
- Lime green on black: "growth hacker" cliché

**The actual rule:** Pick one or two accent colors with intention. Know why you picked them. If your answer is "it looked nice" or "AI suggested it," pick different ones.

### 2.3 Color Contrast

WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold). This is not a design preference. It is access. Light gray text on white background, dark gray on black, muted colors on muted backgrounds — these fail real users.

Test everything. Figma's contrast checker, Stark, browser DevTools accessibility panel. Check on both your calibrated design monitor and a regular laptop screen. They are different.

### 2.4 Glassmorphism

The effect: a semi-transparent frosted-glass card floating over a blurred background gradient.

This was novel in 2020 when Apple introduced it in macOS Big Sur. By 2022 it was on every Dribbble shot. By 2024 it was on every generated design. It is now a visual shorthand for "no design decisions were made here."

It is also frequently inaccessible. Text over blurred, semi-transparent backgrounds creates unpredictable contrast depending on what is behind the element. The effect that looks fine in your Figma mock looks unreadable when the scroll position changes.

### 2.5 Semantic Color Usage

Colors carry meaning in context. Red near form fields means error. Green near metrics means positive. Yellow means warning. Assign these meanings early and do not break them. Using red as a decorative accent color and also as a form validation color creates genuine confusion.

---

## Part 3: Layout

### 3.1 Centered Everything

This is the most common layout failure on AI-generated pages. Everything is centered. The hero text is centered. The feature cards are centered. The testimonials are centered. The footer is centered.

Centered layouts are appropriate for:
- Short, singular statements (hero headlines)
- Login / authentication forms
- Modals and dialogs
- Confirmation states

Centered layouts are not appropriate for:
- Body copy longer than two lines
- Feature lists
- Blog posts
- Navigation
- Anything the user needs to read in sequence

Left-aligned text is faster to read in languages that read left to right. The eye returns to the same left margin. With centered text, every line ends in a different place and starts in a different place. The eye works harder.

### 3.2 Whitespace: Not Enough and Too Much

Too little whitespace: elements collide, hierarchy collapses, reading becomes effortful, the page feels anxious.

Too much whitespace: the page feels empty, content-poor, like the designer had nothing to say and spread it thin. This is common in "premium minimal" aesthetics that prioritize the look of spaciousness over actual information density.

The balance: whitespace should reflect the relationship between elements. Tight spacing signals belonging. Wide spacing signals separation. Use it consistently and with meaning, not as decoration.

### 3.3 Cards Everywhere

Card-based layouts are default in every component library. They are also frequently the wrong choice.

Cards imply comparability — that all items within them are the same type and can be evaluated against each other. Putting everything in a card regardless of type creates visual noise. Features, testimonials, pricing, blog posts, team members, FAQs — giving all of them the same card treatment destroys the hierarchy that tells users what to pay attention to.

### 3.4 Mobile as Afterthought

If you design for desktop and then "make it responsive" afterward, the mobile version will always feel like a collapsed desktop layout rather than a designed mobile experience. These are different contexts. Design both deliberately.

---

## Part 4: UI Patterns

### 4.1 Code-Style Text in UI Copy

Never put `snake_case`, `camelCase`, `auth_token=True`, or `--flag-names` in user-facing interface copy outside of technical documentation.

This includes:
- Button labels
- Form labels
- Error messages
- Navigation items
- Onboarding flows
- Tooltip text

If your product has technical internals, the UI layer should translate those to human language. `api_key_invalid` is a technical error state. The UI copy is "Your API key is invalid. Check your settings." These are different layers. Do not confuse them.

The only exception is documentation and developer-facing tooling where the audience expects and needs the technical syntax.

### 4.2 Emoji in Web Design

Emojis are not icons. They are not decorative elements. They are not bullet points.

The problems with emoji in design:
- Rendering is inconsistent across operating systems and browsers. The 🚀 on macOS and the 🚀 on Windows are different images. Your design never looks the same on both.
- They break with system font settings on some accessibility configurations.
- They signal informality in contexts that require trust. A fintech product using 💸 in its interface is undermining its own credibility.
- In bullet lists, leading with emoji instead of visual hierarchy is a substitute for actual typographic structure. It is a crutch.

Emoji are appropriate in: chat interfaces, social products, informal feedback states, marketing emails where playfulness is intentional.

Emoji are not appropriate in: navigation, feature lists, pricing, headlines, form labels, error states, onboarding, professional and enterprise products.

### 4.3 Three-Part Feature Sections

The pattern: icon, bold label, one sentence description. Three of them. In a row. On every SaaS homepage.

This pattern exists because it is easy to generate, easy to lay out, and easy to fill with content that sounds meaningful but says nothing. "Fast. Reliable. Secure." is not communication. It is placeholder copy that no user reads and no competitor can be disproven by.

If you are going to use this pattern, the descriptions need to say something specific. Not "built for scale" but "handles 10,000 concurrent users without configuration changes." Not "easy to use" but "our median time-to-first-result is under 4 minutes." Specificity is the test.

### 4.4 Hero Sections

The AI-generated hero:
- Full-width gradient background
- Centered headline in Inter or Poppins Bold
- Two-line subheading that says nothing specific
- Two buttons: one filled "primary" and one outlined "secondary"
- A mockup screenshot floating below with a drop shadow

This is not a design. It is a template. It communicates that no thought was invested in what this product is or who it is for.

A hero section should establish: what this is, who it is for, and why it matters — in that order, in specific language. The visual treatment should reinforce the identity of the product, not slot it into a generic "software product" category.

### 4.5 Infinite Scroll

Almost always wrong for content that requires reading and retention. Good for feeds, social timelines, and content you are expected to skim. Bad for portfolios, documentation, marketing pages, and anywhere the user needs to orient themselves within a structure.

Pagination is not old-fashioned. It gives users a sense of position and progress. Infinite scroll removes that. Use based on actual user behavior, not trend.

---

## Part 5: Visual Decoration

### 5.1 Blob Shapes

Organic multi-blob shapes, typically filled with gradient and placed behind sections as backgrounds. This is one of the most reliably generated design choices — AI tools produce them constantly, they require no skill, and they signal "someone tried to add visual interest without knowing how."

They are also inconsistent with almost every real product aesthetic. They are too soft for utility products, too generic for brand-driven products, and too busy for minimal products. They exist nowhere.

### 5.2 Stock Photography

People shaking hands. Teams laughing at a laptop. Diverse group around a conference table. A hand holding a phone showing your product. These images are in every free stock library, used by thousands of other sites, and recognized as such by most users.

Stock photography communicates one thing: "we did not invest in real visual assets." For early products this is sometimes unavoidable, but treat it as a temporary state, not a design decision.

When stock photography is necessary: choose images that are specific rather than generic (a particular city, a real process, an actual object) rather than symbolic (success, teamwork, growth).

### 5.3 Icon Overload

Every single list item does not need an icon. Icons work as wayfinding devices when the interface is large enough to need navigation aids. They do not add meaning to already-labeled text items; they just add visual noise and require the user to process two signals (the icon and the label) instead of one.

Use icons for: navigation items, toolbars, action buttons with no text label, status indicators.

Do not use icons for: feature bullet points where the text already conveys the meaning, testimonial sections, section headings.

### 5.4 Decorative Gradients on Text

CSS gradient text on large headings was genuinely interesting for a brief period. It is now one of the most recognizable AI-generated design signatures. If your heading has a diagonal gradient going through it, it looks AI-generated. There is no way around this right now.

If you need visual emphasis on a headline: try weight contrast, size, a single well-chosen color, or typographic treatments that are less commonly generated.

---

## Part 6: Copy and Microcopy

### 6.1 The Adjective Problem

"Powerful," "seamless," "intuitive," "delightful," "robust," "blazing-fast," "next-generation," "cutting-edge," "world-class" — these words have been used to describe every product and therefore describe no product. A user reading "powerful and intuitive" learns nothing. A user reading "processes 1 million rows in under 3 seconds" learns something real.

Every adjective in your UI copy should be challenged. If you cannot replace it with a specific fact, remove it.

### 6.2 Capitalized Every Word in Headings

This Is A Heading That Capitalizes Every Word. It Reads Like A Legal Document Title Or A Real Estate Listing. It Does Not Read Like A Product Or A Person.

Sentence case is correct for most modern products. Title case is appropriate for some formal contexts. All-title-case-everywhere is a holdover from publication styles that do not translate well to UI.

### 6.3 CTA Button Copy

"Learn More" tells the user nothing about what happens when they click. "Get Started" is on every SaaS product that has ever existed. "Sign Up" is accurate but uncompelling.

Button copy should describe the action and its result. "Start your free trial," "See the demo," "Download for Mac," "Join 10,000 teams" — these tell the user what they are doing and what they get.

### 6.4 Error Messages Written for Developers

`Error 422: Unprocessable entity`  
`Validation failed: email field does not match required pattern`  
`null is not an object (evaluating 'response.data.user')`

These are system messages. They are not user messages. The UI layer translates them. An error message in a product should tell the user: what went wrong, whether it was their fault, and what they can do next. "Something went wrong — please try again" is better than a status code. "Your email looks incorrect — check for typos" is better than a regex failure message.

---

## Part 7: Interaction and Motion

### 7.1 Animation for Its Own Sake

Animations that do not carry meaning delay the user. If a card fades and slides up when it enters the viewport, the user waits for it to complete before reading. If an icon spins for 400ms when clicked, the user is watching the animation when they want to see the result.

The rule: every animation should communicate something. A spinner communicates loading. A check mark animation communicates success. A slide transition communicates direction within a navigational hierarchy. An element fading in for visual interest communicates nothing.

### 7.2 Hover States

Every interactive element needs a visible hover state. This is not optional. The hover state tells the user the element is clickable before they click it. Removing it or making it too subtle (a 5% opacity change on an already-subtle element) breaks affordance.

### 7.3 Loading States

If your product does any asynchronous work, every state needs to be accounted for: loading, success, error, empty. Designs that only spec the success state create products that feel broken when anything else happens.

Empty state in particular is overlooked constantly. A user who has just signed up and sees an empty dashboard with no guidance on what to do next has a bad first experience regardless of how good the product is.

---

## Part 8: Accessibility That Is Not Optional

### 8.1 Focus States

Removing the default browser focus ring (`outline: none`) without replacing it with a custom visible focus indicator is a choice that makes your product unusable for keyboard and assistive technology users. It is also increasingly something that surfaces in accessibility audits and litigation.

Your focus state should be more visible than the default, not less. High contrast, clear offset, works on both light and dark backgrounds.

### 8.2 Tap Target Size

Mobile tap targets should be at least 44×44px (Apple's guideline) or 48×48dp (Google's guideline). Small text links, icon buttons without padding, and tightly-packed list items regularly fail this. The cost of failure is misclicks and user frustration on every mobile interaction.

### 8.3 Motion Sensitivity

Not all users can tolerate high-motion interfaces. Vestibular disorders, migraines, and other conditions make heavy animation physically uncomfortable or disorienting. `prefers-reduced-motion` is a media query that has been supported by all major browsers since 2019. Use it. Default to no non-essential motion when it is set.

---

## Part 9: Performance as Design

### 9.1 Web Fonts

Loading four font weights from two families at page load adds HTTP requests and delays first contentful paint. Variable fonts exist. Use them. One variable font file covers a full weight range and loads once.

### 9.2 Image Sizing

Full-width JPEG hero image served at 3200px width to a user on a 390px phone screen. This is common. It is wrong. Responsive images with `srcset` and `sizes` serve appropriately sized images per viewport. WebP and AVIF formats reduce file size with no perceptible quality loss in most cases.

### 9.3 Layout Shift

Cumulative Layout Shift (CLS) is the metric that measures how much the page moves during load — images popping in and pushing content down, fonts swapping and reflowing text, ads loading and displacing elements. Users experience this as the page "jumping." Reserve space for images with `width` and `height` attributes or CSS `aspect-ratio`. Avoid injecting content above existing content after load.

---

## Part 10: What Premium Actually Means

"Premium" is not dark backgrounds with gold accents. It is not large amounts of whitespace with tiny text. It is not a single centered word on a full-screen section. It is not gradients on gradients.

Premium design is characterized by:

**Decisions that are specific.** Every element is there because someone chose it. Nothing is a default that was never changed.

**Consistency.** The same typeface used the same way throughout. Spacing that follows a system. Colors that have names and meaning in the product. A component that looks the same in every context it appears.

**Restraint in the right places.** Not adding decoration when the content is strong enough. Not adding animation when the user needs information immediately. Not adding another section when the page is already complete.

**Respect for the user's time.** Information organized so the most important things are easiest to find. Copy that is shorter and more specific than first written. Load times that do not waste the user's attention.

None of this requires expensive tools, enterprise budgets, or years of design experience. It requires making deliberate choices and being honest when a choice is a default rather than a decision.

---

## The Single Test

Before you ship anything, ask: did a person make this decision, or did a tool make this decision that a person accepted?

If the answer is the latter, that is where to look first.

---

*Last updated: March 2026*
