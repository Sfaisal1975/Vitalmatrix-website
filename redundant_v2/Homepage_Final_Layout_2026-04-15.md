# VitalMatrix Homepage — Final Layout
## 15 April 2026 | 11 Sections | 495KB

---

## PRE-SECTION ELEMENTS (fixed/floating)

### Navigation Bar (Glassmorphism Floating Pill)
- **Position:** Fixed top, appears after scrolling past hero
- **Background:** `rgba(7,28,51,0.65)` with `backdrop-filter: blur(20px)`
- **Shape:** `border-radius: 999px`, max-width 960px, centred
- **Left:** VitalMatrix logo (28px) + "VITALMATRIX" in DM Mono gold
- **Links:** Architecture, Outputs, Philosophy, For Whom, Pricing
- **Right:** "Book Walkthrough" gold CTA pill
- **Mobile:** Hamburger → full-screen takeover nav
- **Adaptive:** Switches to light mode over white sections
- **Zone colour bar:** 2px progress bar at bottom, colour matches active zone section

### Proof Strip
- **Background:** Transparent over hero gradient
- **Content:** ICO ZC101813 · Phase 1 Active · UK Private Practice · 10 Founding Slots Available · UK Data Residency
- **Font:** DM Mono, 0.55rem, gold/white

### Status Strip
- **Background:** `#050A10`
- **Items:** Pipeline: Operational (green) · Tests: 121/121 (green) · API: Connected/Offline (live check) · Gates: O1 ✓ V1 ✓ O2 pending · Uptime: 99.9%

### Mnemonic Showcase Ticker
- **Background:** `#071C33`
- **Content:** FLINT™ · NCZ™ · CascadeIQ™ · DRD™ · KINETICS™ · COMPASS™ · APEX™ · TIQ™ · DeltaScan™ · RECON™ · ANCHOR™ · TerrainLock™ · ORBIT™ · MedTerrain™
- **Animation:** Continuous horizontal scroll, 60s loop, alternating teal/gold text

### Stat Strip
- **Background:** `#1A2030`
- **Items:** 26 Years Clinical Experience · Functional Medicine Framework Compatible · 5 Zone Architecture NCZ™
- **Font:** Cormorant Garamond numbers, DM Mono labels

---

## SECTION 1: HERO
- **Background:** `#020508` base + hero-bg.webp (268KB, brightness 0.35, saturate 0.60)
- **Overlay:** `rgba(2,5,8,0.80)` Prussian overlay
- **Text-zone gradient:** Left-side darkening for text legibility
- **Vignette:** Radial edge darkening
- **Letterbox bars:** Top 8%, bottom 10% gradient bars
- **Ambient glows:** Gold (500px, top-left), Teal (400px, bottom-right), Purple (300px, centre) — all pulsing
- **Film grain:** SVG noise at 6% opacity
- **Anamorphic streaks:** Two horizontal lens flares at 42% and 58%
- **Animated particles:** Canvas with 55 zone-coloured dots, pulsing glow halos, connection lines, mouse attraction

### Hero Content
- **Eyebrow:** "Clinical Intelligence Platform" — DM Mono 11px, gold 75% opacity
- **Heading:** "Terrain intelligence / built from within / *functional medicine.*" — Cormorant Garamond, clamp(48px-112px), weight 300, text-shadow
- **Gold accent line:** 160px wide, 2px thick, solid #C9A84C with gold box-shadow glow
- **Body text:** Platform description — Outfit 16-20px, weight 400, 72% opacity, text-shadow
- **VOS Box:** Pill border with "Built on VOS™ | the VitalMatrix Operating System" — gold text, gold border, gold glow
- **Reading time:** "5 min read" — DM Mono 9px
- **CTAs:**
  - "Book a Clinical Walkthrough" — Gold solid (#E8C96A), Prussian text, spring easing hover
  - "See How It Works" — Gold outline, 55% border, hover fills 15%
  - "Take the Quiz" — Teal outline pill with quiz icon

### Parallax
- Background image: 0.08x scroll speed
- Content: 0.30x scroll speed (never fades)

---

## SECTION 2: WHO VITALMATRIX SERVES
- **Background:** Gradient `#0C4452 → #0D2B4E → #1A2030` (top to bottom)
- **Padding-top:** 100px (nav clearance)
- **Eyebrow:** "Who VitalMatrix Serves" — DM Mono, teal
- **Heading:** "Built for functional medicine practitioners *in UK private practice.*"
- **Subtitle:** Description text

### 3 Cards (grid, equal height 420px min, align-items: stretch)
Each card has:
- **Upper visual zone:** 180px fixed height, gradient background, animated SVG illustration
- **Lower text zone:** Padding 28px, flex column
- **Gold accent bar:** 2px top, zone-coloured gradient

**Card 1: Functional Medicine Practitioners**
- Visual gradient: `#0A2E3D → #1A7A8A → #0D2B4E`
- SVG: Animated terrain network — 3 concentric pulsing rings, 6 zone-coloured nodes, connection lines, 2 travelling particles
- Accent: Gold (Z1)
- Title: White (#F4F4F2)

**Card 2: Complex Case Specialists**
- Visual gradient: `#151025 → #3D2E5A → #0D2B4E`
- SVG: DRD cascade direction — 3 nodes (DRIVER gold → CASCADE teal → REACTOR purple), animated dashed flow lines, directional arrows, travelling particle, DM Mono labels
- Accent: Teal (Z2)

**Card 3: Practitioners Building Scale**
- Visual gradient: `#121A20 → #3A4D40 → #0D2B4E`
- SVG: Growth bars — 5 gold bars growing upward with stagger, number labels (01-05), trend line drawing itself, gold dot at peak
- Accent: Sage (Z4)

---

## SECTION 3: IS THIS YOUR PRACTICE
- **Background:** `#1E1A2E` (deep plum)
- **Eyebrow:** "IS THIS YOUR PRACTICE?" with gold accent line
- **Heading:** "Three practitioners. *One shared problem.*"
- **Subtitle:** "The constraint is not clinical capacity. It is documentation infrastructure."

### 3 Persona Cards (`#2A2540` background, 1px border)
Each card has:
- Top accent bar (zone-coloured, 2px)
- Icon circle (40px, zone-coloured border)
- Persona label (DM Mono, zone-coloured)
- Title (Cormorant Garamond 1.2rem)
- "Composite scenario" badge (hidden, pops up on hover with spring easing)
- Italic quote with zone-coloured left border
- Solution text (Outfit 0.85rem)
- "Designed for:" footer

**Card 1: Solo Practitioner** — Gold accent, user icon
**Card 2: Complex Case Specialist** — Teal accent, cascade icon
**Card 3: Growing Clinic Founder** — Purple accent, grid icon

### Quiz CTA
- "Is this your practice? Take the quiz" — heading + description + teal pill CTA
- "5 questions · No email required · Instant result"

---

## SECTION 4: THE PRACTICE PROBLEM
- **Background:** `#E8F5F5` (very light teal)
- **Eyebrow:** "The Practice Problem" — teal with line accent
- **Heading:** "Three constraints..." (dark text on light background)
- **Subtitle:** Dark teal-grey text

### 3 Cards (dark teal `#0C4452` on light background)
- Top accent: Teal gradient (2px)
- Titles: White (#F4F4F2)
- Body: 60% white opacity
- Icons: Zone-coloured (gold, bright teal, sage)

**Card 1: The Workaround** — Gold icon (pen/paper)
**Card 2: The Hidden Cost** — Bright teal icon (clock)
**Card 3: The Ceiling** — Sage icon (barrier)

---

## SECTION 5: FOUNDER AND CLINICAL QUOTE
- **Background:** `#0C4452` (deep teal)
- **Layout:** Flex row — monogram left, text right

### Content
- **Monogram:** 72px circle, gradient background, "SF" in Cormorant gold
- **Name:** "Dr Shahzad Faisal" — Cormorant 20px
- **Credentials:** "MBBS, FAAMFM · 26 years clinical experience · Founder, VitalMatrix" — DM Mono 9px gold
- **Quote (3 paragraphs, italic, gold left border):**
  1. "I built VitalMatrix because I spent a decade reconstructing clinical reasoning..."
  2. "The workaround works when you have two patients per week..."
  3. "It removes everything that was getting in the way of it."

---

## SECTION 6: BEFORE AND AFTER COMPARISON
- **Background:** `#1E1A2E` (deep plum)
- **Eyebrow:** "The Same Patient Case"
- **Heading:** "Without VitalMatrix. *With VitalMatrix.*"
- **Layout:** 2-column grid

### Left panel (Without)
- Background: `rgba(255,255,255,0.03)`
- 3 popup boxes that animate in on scroll (scattered notes, no cascade, 45min documentation)

### Right panel (With)
- Background: `rgba(201,168,76,0.04)` with gold left border
- Terminal-style output showing: `$ vitalmatrix terrain-assess --patient 0042`
- Zone scores (Z2, Z1, Z5 active), cascade trace, TIQ score, 5 outputs listed
- "Replay" button

---

## SECTION 7: PLATFORM OUTPUTS
- **Background:** `#FFFFFF` (white)
- **Eyebrow:** "The Platform" — purple with line accent
- **Heading:** "One patient input. Six pipeline stages. *Five terrain-based outputs.*"

### FLINT Pipeline Timeline (embedded dark card)
- Dark Prussian card (`#0D2B4E`, 16px radius) on white background
- Label: "The FLINT™ Pipeline · Six Stages"
- 6 steps: L1 → L2 → L3 → L4 → L7 → L9
- Numbered circles with DM Mono labels
- Travelling gold pulse dot + 3 particle trail
- Hover tooltips: "WHERE is the burden?", "WHICH zones are active?", etc.
- "Ask the terminal" link

### 5 Output Cards (2+3 grid)
Each card: light tinted background, zone-coloured top accent bar, icon circle, output number, title, description

**Output 01:** Consultation Note (NCZ™ + DRD™) — Gold (`#FEF8F5`)
**Output 02:** Phased Personalised Terrain Management Protocol (COMPASS™) — Teal (`#F5FCFD`)
**Output 03:** Patient-Facing Summary — Purple (`#F8F5FC`)
**Output 04:** Functional Lab Interpretation Report (RECON™) — Sage (`#F3F7F4`)
**Output 05:** Session Governance Record (ANCHOR™) — Grey (`#F7F7F7`)

### CTAs
- "Take the 2-minute practice quiz" — teal pill
- "Try the Platform Demo →" — gold outline button

### Inline Objection Handler
- "Every output is a working draft. You review, edit, and approve before it enters the patient record."

---

## SECTION 8: CLINICAL AUTHORITY GUARANTEE
- **Background:** `#0D2B4E`
- **Layout:** Centred block with sage left border (3px)
- **Badge:** "Clinical Guarantee" pill (sage, top-right)
- **Title:** "Your authority. Preserved at every layer."
- **Text:** "VitalMatrix will **never auto-submit**... **Never auto-prescribe.** **Never auto-refer.**..."

---

## SECTION 9: FOUNDING CTA
- **Background:** `#0D2B4E`
- **Eyebrow:** "Founding Programme"
- **Heading:** "10 founding positions. *Five-year rate lock.*"
- **Description:** GBP 299/month, personal onboarding, UK only

### 10 Pulsing Slots
- Gold circles with sequential pulse animation (0.25s stagger)
- `slotPulse` animation: box-shadow glow + background fill
- Configurable via `VM_ENROLLED_COUNT` (taken slots show green checkmark)

### CTAs
- "Explore Founding Programme" — gold solid CTA → /founding-practitioners/
- "Book a Walkthrough First" — gold outline

---

## SECTION 10: NEXT STEPS
- **Background:** `#0D2B4E`
- **Eyebrow:** "Next Steps"
- **Heading:** "Three ways to start."

### 3 Cards (sky blue tint `#E8F3FD`)
Each card: icon circle, title, description, CTA button

**Card 1: Book a Clinical Walkthrough** — Gold icon, gold accent, "Book Now" CTA
**Card 2: See How It Works** — Teal icon, teal accent, "Explore the Architecture" → /how-it-works/
**Card 3: Apply for Founding Access** — Sage icon, sage accent, "Apply Now" → /apply/

---

## SECTION 11: FREQUENTLY ASKED QUESTIONS
- **Background:** `#1A2030`
- **Eyebrow:** "Questions"
- **Heading:** "Frequently asked."
- **Quiz CTA:** "Or take the quiz instead" — small teal pill

### 6 FAQ Items (accordion)
1. Is VitalMatrix MHRA approved?
2. What happens to patient data?
3. Can I cancel at any time?
4. Does it work with my existing clinical system?
5. What training is required?
6. How is this different from general-purpose AI tools?

Each item: click to expand, one open at a time, gold hover on question text

---

## FOOTER
- **Background:** `#071C33`
- **Logo:** 64px, lazy loading
- **Tagline:** "Clinical Intelligence Platform" — Cormorant 1.2rem
- **Link columns:** Platform (5 links) · Company (5 links) · Contact
- **Link hover:** Gold colour + 4px slide-right

### Email Signup (compact)
- Single row: email input + "Notify me for Phase 2" button
- "No newsletter. One notification when Phase 2 opens. ICO ZC101813."

### Governance
- Cookie/tracking statement
- 31-mnemonic TM block (VOS™ first through VECTOR™)
- © VitalMatrix Ltd 2026. ICO ZC101813. For practitioner use only.

---

## FLOATING ELEMENTS (always visible)

| Element | Position | Behaviour |
|---------|----------|-----------|
| Chatbot | Bottom-right, 120px up | Gold circle, opens chat panel, API-connected + keyword fallback |
| Back to top | Bottom-left, 120px up | Appears on scroll, smooth scroll to top |
| Floating CTA | Bottom-right, 180px up | Hidden until 3 sections read (opacity), text changes with scroll depth |
| Scroll progress bar | Top, full width | Gold/teal gradient, 2px, fills left to right |
| Section indicator dots | Right side, vertical | 8 dots tracking current section, tooltips on hover |
| Sticky section label | Top-left, below nav | Current section name with teal left border |
| Section counter | Top-left | "Section 3 of 11" |
| Live badge | Top centre | "Phase 1 active" with green pulse dot |

---

## COLOUR PALETTE

| Role | Colour | Hex |
|------|--------|-----|
| Prussian Blue (primary dark) | Deep navy | #0D2B4E |
| Charcoal | Section backgrounds | #1A2030 |
| Deep Teal | Section backgrounds | #0C4452 |
| Deep Plum | Section backgrounds | #1E1A2E |
| Gold (Z1 accent) | CTAs, highlights, borders | #C9A84C |
| Bright Gold (hover) | CTA hover state | #E8C96A |
| Teal (Z2 accent) | Secondary accent | #1A7A8A |
| Purple (Z3 accent) | Tertiary accent | #7B5EA7 |
| Sage (Z4 accent) | Quaternary accent | #5F7C6C |
| Blue (Z5 accent) | Quinary accent | #4A85C9 |
| White | Text, headings | #F4F4F2 |
| Light Teal | Practice Problem bg | #E8F5F5 |
| Sky Blue | Next Steps cards bg | #E8F3FD |
| Near Black | Hero base, overlays | #020508 |

---

## TYPOGRAPHY

| Role | Font | Weight | Size |
|------|------|--------|------|
| Headings | Cormorant Garamond | 300 | clamp(24px-112px) |
| Body | Outfit | 400 | 14-16px |
| Data/labels | DM Mono | 400 | 8-12px |
| Eyebrows | DM Mono | 400 | 9-11px, 0.22em spacing |

---

VitalMatrix Ltd 2026 | ICO ZC101813
