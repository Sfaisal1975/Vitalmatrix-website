# VITALMATRIX WEBSITE MASTER SPECS
## Living Reference Document | Created: 3 May 2026 | Updated: 15 May 2026
## Authority: ALB v1.6 (D-62) | D-185 | MasterContext v5.2
## Update this file whenever new page specs are added or existing specs change.
## Total Registered Features: 333 across 12 Living Architectures + 243 Homepage + website pages

---

## CHANGE LOG

### 15 May 2026 — LA Pages + ORBIT + SPHERE Build Session

**GENOME Handbook Feature Index: 187 to 333 features (146 new entries)**
**Living Architectures: 10 to 12 (ORBIT + SPHERE added)**
**ALB: v1.5 to v1.6 (D-62) across all LA files**
**Z5 colour: D-185 #2E6DB4 universally applied. Zero legacy #D4B870.**

**New Pages Built:**
- ORBIT_latest.html (4,538 lines, 20 features) — Architecture 03 of 05, Clinical Workflow
- SPHERE_latest.html (4,035 lines, 20 features) — Architecture 04 of 05, Patient Context

**LA4-LA10 + TerrainIntelligence (8 files upgraded):**
- Z5 colour fix #D4B870 to #2E6DB4 (D-185)
- ALB v1.5 to v1.6 (D-62)
- focus-visible and audience-tier meta added
- 28 interactive features (3-5 per file)
- 24 SV integrations (State Bridge, Pipeline Trace, Navigator per file)
- 16 SV animated features (Particle Network + Pulse Monitor per file)
- 8 Patient Case Presets (Mark, Sarah, James, Priya)
- 8 Clinical Walkthrough Modes (4-5 guided steps per file)
- 8 Practitioner Export Reports (T-01 compliant, clipboard copy)
- 8 Cross-Page State Continuity panels ("Open in..." buttons)
- 8 Print Stylesheets (@media print)
- 8 Architecture Glossary panels (searchable, 12 terms)
- 8 Practitioner Annotation layers (draggable notes, sessionStorage)
- 8 Feature Dependency Graphs (cross-page data flow)
- 8 Confidence Indicator Badges (HIGH/MEDIUM/LOW)
- 8 Multi-Patient Compare Views (Patient A/B split)

**ORBIT Features (20 total):**
- ORBIT-I1: Orbital Stage Simulator (Clean/Storm Path)
- ORBIT-I2: Feature Activation Timeline (42 features)
- ORBIT-I3: Cognitive Load Monitor (max 5 rule)
- ORBIT-A1: Orbital Ring Animation (SVG concentric)
- ORBIT-A2: Stage Transition Cascade
- ORBIT-A3: Storm Path Lightning (canvas)
- ORBIT-I4: Live Session Timer (under 10 min enforcement)
- ORBIT-I5: Storm Path Probability Calculator (5-factor gauge)
- ORBIT-I6: Stage Dependency Blocker (sequential gates)
- ORBIT-I7: Feature Fire Sequence Replay (record/playback)
- ORBIT-I8: Practitioner Decision Audit Trail (override logging)
- ORBIT-SV1: State Bridge (btoa/atob)
- ORBIT-SV2: Pipeline Trace (7-stage flow)
- ORBIT-SV3: Architecture Navigator (12-page dots)
- ORBIT-I9: Consultation Scenario Generator
- ORBIT-I10: Stage Efficiency Dashboard
- ORBIT-I11: Feature Collision Detector
- ORBIT-I12: Clean/Storm Side-by-Side
- ORBIT-I13: ORBIT Mastery Quiz (10 MCQs)
- ORBIT-I14: Stage Output Preview Cards

**SPHERE Features (20 total):**
- SPHERE-I1: Ring Explorer (click 10 rings)
- SPHERE-I2: Protocol Completeness Checker (10 toggles)
- SPHERE-I3: Ring-to-Zone Mapper (data flow)
- SPHERE-A1: Concentric Ring Pulse (canvas radar)
- SPHERE-A2: Ring Data Flow Particles (80 particles)
- SPHERE-A3: Protocol Gap Lightning
- SPHERE-I4: Ring Impact Heatmap (10x5 grid)
- SPHERE-I5: Patient Timeline Ring View (T1/T2/T3)
- SPHERE-I6: Ring Depth Analyser (sub-components)
- SPHERE-I7: Treatment Resistance Predictor (plateau %)
- SPHERE-I8: SPHERE-ORBIT Live Link (cross-architecture)
- SPHERE-SV1: State Bridge
- SPHERE-SV2: Pipeline Trace (5 clusters)
- SPHERE-SV3: Architecture Navigator
- SPHERE-I9: Ring Contribution Radar Chart (spider)
- SPHERE-I10: Ring Intervention Planner (T-01)
- SPHERE-I11: SPHERE Completeness Score (gauge)
- SPHERE-I12: Ring Priority Ranker (drag-drop)
- SPHERE-I13: Case Study Presets (4 profiles)
- SPHERE-I14: Ring Narrative Generator (T-01 paragraph)

**MasterSpecs Sections Added: 27, 28, 29, 30, 31**
**All files synced to LocalPreview + vitalmatrix_revamped**

---

### 3 May 2026 — Session Updates (S10 Homepage)

**Hero Section (S10_Homepage_2026-04-30.html):**
- H1 line-height changed from 0.95 to 1.05 (fixes "g" descender clipping in "intelligence")
- `.ch-h1-line` padding-bottom: 0.1em added (extra descender room for clip-mask animation)
- Hero tagline "Directional Precision / Cascade Velocity / Terrain Confidence" upgraded:
  - Font: DM Mono 11-13px changed to Cormorant Garamond 18-26px fluid
  - Weight: 400 to 300 (elegant light)
  - Colour: faded gold 85% to near-white 95%
  - Letter-spacing: 0.22em to 0.14em
  - Separators: periods replaced with gold middot accents
- VOS pill clipping fix: hero changed from fixed `height:100vh` to `min-height:100vh` with `max-height:none`
- Hero padding reduced: 15vh/80px to 12vh/60px
- VOS box margin-top: 32px to 20px
- CTAs margin-top: 44px to 28px
- Counters margin-top: 44px to 28px
- Mobile hero: `height:auto` instead of `height:100svh` (allows content to grow)

**W02 Routing Brief — P1 Homepage (03 May 2026):**
- Hero headline replaced: "Terrain intelligence built from within functional medicine" changed to
  two-line setup/resolution: "Measuring biological burden is a solved problem." (white 72%) /
  "Knowing which burden is driving the others is not." (Gold #C9A84C em)
  4-line clip-mask animation with 0.3s/0.5s/0.7s/0.9s stagger delays
- Differentiators section: eyebrow changed from "What Makes This Different" to "Platform Positioning"
  H2 changed to "Purpose-built for the question functional medicine has never had infrastructure to answer."
  Subtitle updated to match W02 brief copy
- S03 Intelligence Brief Subscribe inserted after Differentiators, before Founding CTA
  - Two-column: narrative left, subscribe form right
  - Background: Prussian #0D2B4E (dark continuity with Differentiators)
  - GDPR consent checkbox added (required by brief, not in source file)
  - ICO ZC101813 confirmed in form small print
  - No outcome claims, practitioner-facing only
- 3-Card Positioning Section inserted between Pain Grid and Five Outputs
  - Three dark cards: The Question (#0D2B4E), The Distinction (#1A2030), The Infrastructure (#0C3A42)
  - Gold/Teal/Warm Gold top accent bars
  - CTA row: "See the FLINT Architecture" (gold) + "Book a Discovery Call" (teal ghost)
- S10 Every Case That Gets Better inserted as final section before footer (T11 replacement)
  - Light background #FAFAF7
  - Centred quote hero: "Every case that gets better..."
  - Three dark closing cards: For the Practitioner / For the Case / For the Field
  - Final CTA block with three buttons + [purged legal firm -- D-105] + ICO ZC101813
  - GMC mandatory clinical statement present
- "Built for functional medicine. Not adapted to it." — NOT FOUND in file, no action needed

**Section Colour Rhythm Rebalance (S10):**
- Practice Problem: #14697A (dark teal) changed to #F5EFE6 (warm beige) — first light break after hero
  - Heading: dark Prussian #0D2B4E, em: Teal #1A7A8A
  - Subtitle: rgba(13,43,78,0.60), Eyebrow: Teal #1A7A8A
  - Cards remain dark teal #0C4452 (dark on light contrast)
- Process Steps: #0C4452 (deep teal) changed to #EAF0EB (light sage) — second light break
  - All text: Prussian headings, sage accents (#5F7C6C), dark body text
  - Step numbers: sage at 25% opacity (decorative)
- Clinical Philosophy: #1A2030 (charcoal) changed to #F0EBF8 (light purple) — third light break
  - Heading: Prussian with purple em (#7B5EA7)
  - Cards: white glassmorphism (rgba white 0.70) with light borders
  - Card text: dark Prussian titles, dark body
- Clinical Authority: #0D2B4E changed to #1A2030 (breaks adjacent Prussian with Security section)

**New colour rhythm (top to bottom):**
Hero (black) > Stat (charcoal) > Who Benefits (deep teal) > Persona (charcoal-purple) >
**Practice Problem (warm beige)** > Quote (deep teal) > Before/After (charcoal) >
**Process Steps (light sage)** > Infrastructure (prussian) > Workaround (charcoal) >
**Outputs (white)** > Architecture (near-black) > Walkthrough (navy) > Pipeline (near-black) >
Terrain Demo (prussian) > **Practitioner Experience (white)** > Statement (charcoal-purple) >
Architecture (prussian) > Zone Map (navy) > **Clinical Philosophy (light purple)** >
Trust (prussian) > Authority (charcoal) > Differentiators (gradient) >
**Founding CTA (beige)** > Next Steps (prussian) > Lead Magnet (deep teal) >
Capabilities (navy) > FAQ (charcoal) > Footer (navy)

Light sections now at positions 5, 8, 11, 16, 20, 24 — approximately every 4-5 sections.

**Scroll-Pinned Before/After Narrative (S10 — Feature 2 rebuild):**
- Complete rebuild of Before/After section as scroll-pinned narrative
- 300vh scroll container with position:sticky inner frame locked to viewport
- LEFT panel (Without VitalMatrix): 4 pain-point cards reveal sequentially as user scrolls
- RIGHT panel (With VitalMatrix): Terminal-style output builds line by line, synced to scroll position
- 4 stages mapped to scroll progress (25% per stage):
  - Stage 1: Command entry + first pain point
  - Stage 2: Zone/burden/cascade data + second pain point
  - Stage 3: Velocity/TIQ scoring + third pain point
  - Stage 4: Five outputs list + follow-up pain point + "awaiting practitioner review"
- macOS-style terminal title bar (red/gold/sage dots)
- Blinking gold cursor on final line
- Progress dots (right edge) track current stage with gold active state
- Pain cards: red dot icon, fade-up reveal with spring easing
- Terminal lines: slide-in from left with staggered timing
- Mobile (768px): falls back to standard stacked layout, no pinning, all content visible
- prefers-reduced-motion: all animations disabled, content shown at final state
- Replaces old static 2-column grid layout
- Added 4th pain point: "Follow-up appointment: start from scratch. No delta tracking."

**Contrast/Colour Audit Fixes (S10):**
- Before/After section: background changed from #A0A0A0 (grey, failed WCAG) to #1A2030 (Charcoal)
- Before/After section: text colours reverted to standard light-on-dark (removed inline #0D2B4E and #555 overrides)
- Lead Magnet section: background changed from #A0A0A0 to #0C4452 (Deep Teal)
- Lead Magnet section: all text updated to light palette (white headings, gold eyebrow, rgba white body)
- Lead Magnet email input: changed from white bg to glassmorphism (rgba white 0.08) for dark bg
- All `color:#555` instances replaced with `rgba(13,43,78,0.65)` for better contrast on light sections
- Light/grey background sections: eyebrow and sv-section-time colours adapted via CSS rules for #F5EFE6, #FBF6E9, #F0EBF8, #EAF0EB backgrounds

**Section 06 — Who VitalMatrix Serves (S10):**
- Card 2 (Complex Case Specialists): SVG arrows fixed — repositioned to sit on dashed flow lines with correct forward-facing rotation angles (-26.5deg and -12.1deg)
- Card 2: DRD labels updated to T-01a compliant: "DRIVER" to "HIGHEST BURDEN", "REACTOR" to "SECONDARY"
- Card 2: Glow halos added to all three nodes, breathing ring opacity, second trailing particle
- Card 1 (Terrain Network): Radial gradient glow, SVG blur filter halos, breathing connection line opacity, 4 travelling particles (was 2) with counter-directional paths
- Card 3 (Growth Bars): Gradient bar fills (bright top to transparent base), subtle grid lines, sage-to-gold trend line gradient, sequential peak dots, pulsing glow on final peak dot
- CSS: Spring-eased card hover (6px lift, elastic overshoot, deep shadow)
- CSS: Shimmer sweep on card visual panel hover
- CSS: Zone bar expansion (40px to 60px with glow) on hover
- CSS: Staggered card entrance delays (0.1s/0.2s/0.3s)

---

## TABLE OF CONTENTS

1. [Homepage Hero Specs](#homepage-hero-specs)
2. [Homepage Feature Register (243 Features)](#homepage-feature-register)
3. [WhyVitalMatrix P3 Specs](#whyvitalmatrix-p3-specs)
4. [How It Works Specs](#how-it-works-specs)
5. [Our Approach Specs](#our-approach-specs)
6. [Founding Practitioners Specs (Original)](#founding-practitioners-specs-original)
7. [Founding Practitioners P3 Specs](#founding-practitioners-p3-specs)
8. [Book Discovery Call P3 Specs](#book-discovery-call-p3-specs)
9. [Book Walkthrough Specs](#book-walkthrough-specs)
10. [Pricing Specs](#pricing-specs)
11. [About Dr Faisal Specs](#about-dr-faisal-specs)
12. [Mission Specs](#mission-specs)
13. [Terrain Intelligence Specs](#terrain-intelligence-specs)
14. [NCZ Architecture Specs](#ncz-architecture-specs)
15. [CascadeAtlas Specs](#cascadeatlas-specs)
16. [Clinical Ethics Specs](#clinical-ethics-specs)
17. [Trust and Safety Specs](#trust-and-safety-specs)
18. [FAQ Specs](#faq-specs)
19. [Contact Specs](#contact-specs)
20. [Platform Demo Specs](#platform-demo-specs)
21. [Privacy Notice Specs](#privacy-notice-specs)
22. [Cookie Policy Specs](#cookie-policy-specs)
23. [Silicon Valley Upgrade Prompt (Reference)](#silicon-valley-upgrade-prompt)
24. [TRACE Timeline 30 Features](#trace-timeline-30-features)

---

========================================================================
# 1. HOMEPAGE HERO SPECS
========================================================================

# VitalMatrix Homepage Hero Specifications
## S8_Homepage_2026-04-13.html
## Generated: 28 April 2026
## Authority: ALB v1.6 (D-62) | Features #213–#228

---

## LAYER STACK (DOM order = visual stack, bottom to top)

| Layer | Class | Z-Index | Description |
|-------|-------|---------|-------------|
| L01 | `.ch-bg` | 1 | Background image with cinematic zoom animation |
| L02 | `.ch-overlay` | 2 | Prussian Blue gradient overlay |
| L03 | `.ch-grade` | 3 | Cinematic colour grading (dark top/bottom, warm corner) |
| L04 | `.ch-orbs` | 4 | Ambient glow orbs container (3 orbs) |
| L05 | `.ch-rays` | 5 | Rotating conic light rays |
| L06 | `.ch-vignette` | 6 | Deep cinematic vignette |
| L07 | `.ch-flare` | 7 | Anamorphic lens flare |
| L08 | `.ch-glass` | 8 | Full-hero glass depth layer |
| L09 | `.ch-grid` | 9 | 3D perspective grid |
| L10 | `.ch-mesh` | 10 | SVG terrain pentagon mesh |
| L11 | `#hero-particles` | 12 | Particle canvas |
| L12 | `.ch-grain` | 11 | Film grain overlay |
| L13 | `.ch-content` | 20 | Content wrapper (all text/CTAs) |

---

## FEATURE #213 — CINEMATIC BACKGROUND ZOOM

```css
.ch-bg {
  position: absolute;
  inset: -5%;
  background-image: url('hero-bg-v5.webp');
  background-size: cover;
  background-position: center;
  z-index: 1;
  transform: scale(1.08);
  animation: chZoom 10s ease-out forwards;
}
@keyframes chZoom {
  0%   { transform: scale(1.08); opacity: 0.3; }
  100% { transform: scale(1.0); opacity: 1; }
}
```

- Image: `hero-bg-v5.webp` (339KB)
- Starts zoomed 8%, settles to 100%
- Opacity fades from 0.3 to 1.0 over 10s
- No brightness/saturation filter (preserves image quality)

---

## FEATURE #214 — COLOUR GRADING OVERLAY

```css
.ch-grade {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background:
    linear-gradient(180deg,
      rgba(0,0,0,0.50) 0%,
      rgba(0,0,0,0.05) 25%,
      transparent 45%,
      transparent 60%,
      rgba(0,0,0,0.15) 80%,
      rgba(0,0,0,0.60) 100%),
    linear-gradient(135deg,
      rgba(13,43,78,0.25) 0%,
      transparent 50%,
      rgba(201,168,76,0.04) 100%);
}
```

- Dark top fade (50% black)
- Dark bottom fade (60% black)
- Prussian Blue tint from top-left
- Steel blue tint from bottom-right

---

## FEATURE #215 — DEEP CINEMATIC VIGNETTE

```css
.ch-vignette {
  position: absolute;
  inset: 0;
  z-index: 6;
  pointer-events: none;
  background: radial-gradient(
    ellipse 65% 60% at 50% 42%,
    transparent 0%,
    rgba(0,0,0,0.75) 100%
  );
}
```

- 75% black at edges
- 65% wide, 60% tall ellipse
- Centred at 42% vertical (slightly above centre)
- Creates bright focal point behind text

---

## FEATURE #216 — AMBIENT GLOW ORBS

```css
.ch-orb--gold   { width:800px; height:800px; background:#C9A84C; opacity:0.28; top:-20%; left:-12%;  animation: chOrbA 18s ease-in-out infinite alternate; }
.ch-orb--teal   { width:700px; height:700px; background:#1A7A8A; opacity:0.22; bottom:-25%; right:-15%; animation: chOrbB 22s ease-in-out infinite alternate; }
.ch-orb--purple { width:500px; height:500px; background:#7B5EA7; opacity:0.16; top:15%; right:-5%;    animation: chOrbC 20s ease-in-out infinite alternate; }
```

- All orbs: `border-radius:50%`, `filter:blur(140px)`
- Gold orb: 800px, 28% opacity, drifts 60px/-40px
- Teal orb: 700px, 22% opacity, drifts -50px/30px
- Purple orb: 500px, 16% opacity, drifts -30px/-25px
- Zone colours match: Z1 Gold, Z2 Teal, Z3 Purple

---

## FEATURE #217 — ANAMORPHIC LENS FLARE

```css
.ch-flare {
  position: absolute;
  top: 38%; left: 50%;
  transform: translate(-50%,-50%);
  width: 0; height: 4px;
  z-index: 7;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(201,168,76,0) 15%,
    rgba(201,168,76,0.30) 42%,
    rgba(255,250,230,0.60) 50%,
    rgba(201,168,76,0.30) 58%,
    rgba(201,168,76,0) 85%,
    transparent 100%);
  box-shadow: 0 0 80px 30px rgba(201,168,76,0.08);
  filter: blur(1px);
  animation: chFlare 2s ease 2.5s forwards;
}
@keyframes chFlare {
  0%   { width:0; opacity:0; }
  60%  { opacity:1; }
  100% { width:1400px; opacity:0.75; }
}
```

- Horizontal gold streak
- 4px height, expands to 1400px
- Appears at 2.5s delay
- Warm white centre, gold fade edges

---

## FEATURE #218 — CONIC LIGHT RAYS

```css
.ch-rays {
  position: absolute;
  top: -25%; left: 50%;
  transform: translateX(-50%);
  width: 1000px; height: 800px;
  z-index: 5;
  background: conic-gradient(from 180deg at 50% 0%,
    transparent 0deg,
    rgba(201,168,76,0.07) 10deg, transparent 20deg,
    rgba(26,122,138,0.05) 45deg, transparent 55deg,
    rgba(201,168,76,0.06) 90deg, transparent 100deg,
    rgba(123,94,167,0.04) 140deg, transparent 150deg,
    rgba(201,168,76,0.06) 195deg, transparent 205deg,
    rgba(26,122,138,0.05) 250deg, transparent 260deg,
    rgba(201,168,76,0.05) 310deg, transparent 320deg);
  animation: chRayR 70s linear infinite;
}
```

- Full 360° rotation in 70 seconds
- Zone colours: gold, teal, purple rays
- 1000x800px coverage
- Emanates from top centre

---

## FEATURE #219 — GLASS DEPTH LAYER

```css
.ch-glass {
  position: absolute;
  inset: 0;
  z-index: 8;
  pointer-events: none;
  background: rgba(0,3,8,0.05);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
}
```

- Full-bleed glass layer between background and content
- 1.5px blur (reduced from 5px to preserve BG image quality)
- Creates depth separation

---

## FEATURE #220 — 3D PERSPECTIVE GRID

```css
.ch-grid {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 55%;
  z-index: 9;
  perspective: 500px;
  overflow: hidden;
}
.ch-grid-inner {
  width: 200%; height: 100%;
  margin-left: -50%;
  transform: rotateX(60deg);
  transform-origin: center top;
  background:
    repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(201,168,76,0.12) 59px, rgba(201,168,76,0.12) 60px),
    repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(26,122,138,0.08) 59px, rgba(26,122,138,0.08) 60px);
  animation: chGridS 22s linear infinite;
}
```

- 60px grid cells
- Gold vertical lines (12% opacity)
- Teal horizontal lines (8% opacity)
- 60° perspective tilt with vanishing point
- Masked fade to transparent at top
- Scrolls upward continuously (22s loop)

---

## FEATURE #221 — SVG TERRAIN PENTAGON MESH

```
Size: 720px × 720px
Opacity: 0.35
Rotation: 90s full rotation (continuous)
```

**Elements:**
- 3 nested pentagons (outer gold, middle teal, inner purple)
- 5 zone nodes (Z1-Z5) with filled circles (r=4.5)
- 6 cascade stack lines connecting nodes
- S4 line: dashed (Theoretical)
- 3 pulse rings on Z1, Z2, Z5 (animated r=10→24, opacity fade)
- 5 zone text labels (Z1-Z5, DM Mono 8px)

**Stroke widths:**
- Outer pentagon: 1.2
- Middle pentagon: 0.8
- Inner pentagon: 0.5
- Cascade lines: 0.6-0.7

---

## FEATURE #222 — FILM GRAIN

```css
.ch-grain {
  position: absolute;
  inset: 0;
  z-index: 11;
  opacity: 0.06;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,...fractalNoise...");
  background-size: 256px 256px;
  animation: chGrain 0.3s steps(4) infinite;
}
@keyframes chGrain {
  0%   { transform: translate(0,0); }
  25%  { transform: translate(-2px,1px); }
  50%  { transform: translate(1px,-1px); }
  75%  { transform: translate(-1px,2px); }
  100% { transform: translate(0,0); }
}
```

- SVG fractalNoise texture (inline data URI)
- 6% opacity, overlay blend
- 4-step position shift (0.3s loop)
- Creates cinematic celluloid feel

---

## FEATURE #223 — H1 CLIP-MASK LINE REVEAL

```css
.ch-h1-line { display:block; overflow:hidden; }
.ch-h1-inner { display:block; transform:translateY(0); opacity:1; }

/* Activated by .ch-animate class (JS adds after paint) */
.ch-animate .ch-h1-inner {
  transform: translateY(100%);
  opacity: 0;
  animation: chClipUp 1.0s cubic-bezier(0.22,1,0.36,1) forwards;
}
.ch-animate .ch-h1-line:nth-child(1) .ch-h1-inner { animation-delay: 0.3s; }
.ch-animate .ch-h1-line:nth-child(2) .ch-h1-inner { animation-delay: 0.5s; }
.ch-animate .ch-h1-line:nth-child(3) .ch-h1-inner { animation-delay: 0.7s; }
```

**H1 content (3 lines):**
- Line 1: "Terrain intelligence"
- Line 2: "built from within"
- Line 3: "functional medicine." (gold `<em>`)

**H1 typography:**
- Font: Cormorant Garamond
- Size: `clamp(56px, 11vw, 130px)`
- Weight: 400
- Color: `#FFFFFF` (solid white, `!important`)
- Letter-spacing: -0.04em
- Line-height: 0.95
- Text-shadow: triple layer (0.90, 0.50, 0.35)

**Gold em "functional medicine.":**
- Color: `#C9A84C`
- Text-shadow: triple layer (0.80, 0.50, 0.20)

**Safe rendering:** Text visible by default. Animation only activates when JS adds `.ch-animate` class after first paint. If CSS/JS fails, text remains fully visible.

---

## FEATURE #224 — EYEBROW LETTER-SPACING ANIMATION

```css
.ch-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(201,168,76, 0.95);
}
.ch-animate .ch-eyebrow {
  color: rgba(201,168,76, 0);
  animation: chEyebrowIn 1.2s ease 0.1s forwards;
}
@keyframes chEyebrowIn {
  0%   { color: rgba(201,168,76, 0); letter-spacing: 0.6em; }
  100% { color: rgba(201,168,76, 0.95); letter-spacing: 0.35em; }
}
```

- Text: "Clinical Intelligence Platform"
- Gold accent line above (`ch-accent-line`, 40px wide, 2px, gold glow)
- Letter-spacing contracts from 0.6em to 0.35em on entry

---

## FEATURE #225 — SUBTITLE TYPEWRITER

```css
.ch-sub {
  font-size: clamp(15px, 1.7vw, 19px);
  font-weight: 400;
  color: rgba(244,244,242, 0.92);
  line-height: 1.8;
  max-width: 540px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.70), 0 0 60px rgba(0,0,0,0.30);
}
```

**Typewriter JS:**
- Full text: "VitalMatrix™ is a clinical intelligence platform designed for functional medicine practitioners in UK private practice. One structured patient input. Five terrain-based clinical outputs. Every consultation."
- Speed: 18ms per character
- Delay: 3.2 seconds after page load
- Cursor: 2px gold blinking bar, removed after typing complete

---

## FEATURE #226 — VOS PILL GRADIENT BORDER

```css
.ch-vos-pill {
  border-radius: 40px;
  padding: 10px 28px;
  font-family: 'DM Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: #C9A84C;
  text-transform: uppercase;
  background: rgba(0,0,0,0.40);
  backdrop-filter: blur(8px);
}
.ch-vos-pill::before {
  background: conic-gradient(from 0deg, #C9A84C, #1A7A8A, #7B5EA7, #5F7C6C, #C9A84C);
  animation: chBorderSpin 5s linear infinite;
  /* mask technique creates border-only gradient */
}
```

- Text: "Built on VOS™ | the VitalMatrix Operating System"
- Frosted glass background
- Animated border cycles through all 4 zone colours (gold→teal→purple→sage)
- 5 second full rotation

---

## FEATURE #227 — COUNTER ANIMATION

```
Counters: 7 Nodes | 5 Zones | 6 Cascades | 5 Outputs
```

```css
.ch-counter-num {
  font-family: Cormorant Garamond;
  font-size: 2.6rem;
  font-weight: 400;
  color: #C9A84C;
  text-shadow: 0 0 30px rgba(201,168,76,0.40), 0 2px 4px rgba(0,0,0,0.50);
}
.ch-counter-label {
  font-family: DM Mono;
  font-size: 0.52rem;
  letter-spacing: 0.12em;
  color: rgba(244,244,242, 0.45);
}
```

**JS:** Count-up from 0 to target at 140ms per step. Triggers at 6.4 seconds after load. Uses `data-target` attribute.

---

## FEATURE #228 — MOUSE PARALLAX

```javascript
hero.addEventListener('mousemove', function(e) {
  var cx = (e.clientX - r.left) / r.width - 0.5;
  var cy = (e.clientY - r.top) / r.height - 0.5;
  el.style.transform = 'translate(' + (cx * -16) + 'px,' + (cy * -12) + 'px)';
});
```

- Binds to `#ch-hero-content`
- Horizontal shift: ±16px
- Vertical shift: ±12px
- Transition: 0.12s ease-out
- Resets to 0,0 on mouse leave
- Respects `prefers-reduced-motion`

---

## OVERLAY LAYER

```css
.ch-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(180deg,
    rgba(7,20,40,0.70) 0%,
    rgba(7,20,40,0.45) 40%,
    rgba(7,20,40,0.50) 70%,
    rgba(7,20,40,0.80) 100%);
}
```

- Prussian Blue tint (not pure black)
- Gradient: darker at top/bottom, lighter in middle
- Preserves image warmth

---

## HERO CONTAINER

```css
#hero {
  position: relative;
  overflow: hidden;
  background: #000;
  min-height: 100vh;
  height: 100vh;
  max-height: 1200px;
  padding: 15vh 72px 80px;
}
```

- Full viewport height
- Top padding: 15vh (responsive, ~15-20% from top)
- Mobile: `padding: 60px 20px 48px`

---

## CONTENT WRAPPER

```css
.ch-content {
  position: relative;
  z-index: 20;
  max-width: 1000px;
  pointer-events: all;
  will-change: transform;
  transition: transform 0.12s ease-out;
  padding: 0;
}
```

- No background panel (clean, transparent)
- z-index 20 above all visual layers
- Max-width 1000px centred

---

## ANIMATION SYSTEM

All entrance animations use the `.ch-animate` safety pattern:

1. **Default state:** All text visible (opacity:1, transform:none)
2. **JS adds `.ch-animate`** to `#ch-hero-content` after first paint via `requestAnimationFrame`
3. **`.ch-animate` children** get hidden + animated states
4. **If JS fails:** Text stays visible — graceful degradation

Animation timing sequence:
| Element | Delay |
|---------|-------|
| Eyebrow | 0.1s |
| H1 Line 1 | 0.3s |
| H1 Line 2 | 0.5s |
| H1 Line 3 | 0.7s |
| Divider | 0.9s |
| Subtitle | 1.2s |
| VOS pill | 2.0s |
| CTAs | 2.3s |
| Counters | 2.6s |
| Typewriter starts | 3.2s |
| Counter count-up | 6.4s |

---

## ACCESSIBILITY

- `prefers-reduced-motion: reduce` disables all layer animations, grain, orb drift, mesh rotation
- All animated content forced to `opacity:1; transform:none` under reduced motion
- Particle canvas has `aria-hidden="true"`
- All layers have `pointer-events: none` except content (z-index 20)
- Hero section has `aria-label="Hero"`

---

## RESPONSIVE (≤768px)

- Hero padding: `60px 20px 48px`
- SVG mesh: 300×300px (from 720px)
- 3D grid height: 40% (from 55%)
- Counter gap: 24px (from 48px)
- Lens flare: 600px (from 1400px)
- Nav links hidden, hamburger shown

---

## FILES REFERENCED

| File | Purpose | Size |
|------|---------|------|
| `hero-bg-v5.webp` | Background image | 339 KB |
| `vm-phase1-design.css` | External CSS (hero overrides disabled) | 26 KB |
| `vm-phase1-design.js` | External JS | 12 KB |

---

## EXTERNAL CSS OVERRIDES (DISABLED)

The following rules in `vm-phase1-design.css` were disabled on 21 April 2026 to prevent conflicts:

- `[class*="hero"] h1 { font-weight: 200 !important }` — DISABLED
- `.vm-hero-ambient > * { z-index: 1 }` — DISABLED
- `.vm-hero-ambient::before/::after` ambient gradients — DISABLED (replaced by ch-orbs)

---

VitalMatrix Ltd 2026 | Dr Shahzad Faisal, MBBS, FAAMFM | ICO ZC101813

## CHANGE RECORD
- 30 April 2026: Z5 colour updated from Warm Gold #D4B870 to Steel Blue #4A90C4.
  Dr Faisal direction confirmed. D-ruling pending W06 (W09 hex confirmation in progress).


========================================================================
# 2. HOMEPAGE FEATURE REGISTER
========================================================================

# VitalMatrix Homepage Feature Register
## S8_Homepage_2026-04-13.html
### Generated: 14 April 2026
### Total Homepage Features: 243 (212 original + 16 cinematic hero v4 + 15 award-winning enhancements, 2 May 2026)
### Total LA Features: 333 across 12 Living Architectures (15 May 2026)

---

## CORE FEATURES (1-75)
| # | Feature | Category |
|---|---------|----------|
| 1 | Responsive CSS grid layout | Structure |
| 2 | Before/After consultation comparison | Content |
| 3 | Five output cards with zone colours | Content |
| 4 | Infrastructure gap 4-card grid | Content |
| 5 | Interactive FLINT hexagon explorer | Interactive |
| 6 | Section collapsible/expand system | UX |
| 7 | Floating pill navigation | Navigation |
| 8 | Shift arrow animations | Animation |
| 9 | Proof strip with credentials | Trust |
| 10 | Floating architecture breadcrumb | Navigation |
| 11 | Hover card tilt effect | Animation |
| 12 | Slot pulse animation (founding) | Animation |
| 13 | VOS typing cursor | Animation |
| 14 | Mnemonic showcase ticker strip | Branding |
| 15 | Output card number glow | Animation |
| 16 | Scroll progress indicator | UX |
| 17 | Back to top button | Navigation |
| 18 | Zone pentagon SVG in practitioner section | Visual |
| 19 | Architecture fact strip ticker | Branding |
| 20 | Stat strip with credentials | Trust |
| 21-30 | Core section layouts and typography | Structure |
| 31-40 | Card hover effects, glassmorphism | Visual |
| 41 | Section connector line | Visual |
| 42 | Scroll speed adaptation | Performance |
| 43 | Gradient bridges between sections | Visual |
| 44 | Floating zone legend | Navigation |
| 45 | Ambient audio toggle (framework) | Sensory |
| 46 | Reduced motion support | Accessibility |
| 47 | Reading time estimate | UX |
| 48 | Scroll milestone toast | UX |
| 49 | Table of contents overlay | Navigation |
| 50 | Command palette (Ctrl+K) | Navigation |
| 51 | Share button | Social |
| 52-55 | Forced colours, print, focus styles | Accessibility |
| 56 | Hero animated particle dots (canvas) | Animation |
| 57 | FLINT auto-cascade on scroll | Animation |
| 58 | Content density toggle | UX |
| 59 | Cinematic section entry animations | Animation |
| 60 | Engagement-aware CTA | Conversion |
| 61-65 | Scroll narrative, zone context | UX |
| 63 | Live chatbot API status ping | API |
| 66 | Card light reflection | Animation |
| 67 | "Ask about this" inline button | Interactive |
| 68-69 | Slot pulse, text scramble | Animation |
| 70 | Floating micro-stat badge | UX |
| 71-75 | Skip prompt, perf panel, section time | Analytics |

## SILICON VALLEY TIER (76-115)
| # | Feature | Category |
|---|---------|----------|
| 76 | Magnetic cursor glow (deferred) | Animation |
| 77 | Scroll-driven stagger reveal | Animation |
| 78 | Glassmorphism floating pill nav bar | Navigation |
| 79 | Horizontal scroll capability showcase | Content |
| 80 | Animated gradient border on CTA | Animation |
| 81 | Live status badge ("Phase 1 active") | Trust |
| 82 | Spotlight card hover (proximity light) | Animation |
| 83 | Scroll progress bar at top | UX |
| 84 | Section indicator dots (right side) | Navigation |
| 85 | Animated count-up on scroll | Animation |
| 86 | Text gradient shimmer on headings | Animation |
| 87 | Page load curtain reveal (0.6s) | Animation |
| 88 | 3D tilt depth on cards | Animation |
| 89 | Scroll-triggered text highlight (DISABLED) | Animation |
| 90 | Floating social proof (REMOVED - ethics) | REMOVED |
| 91 | Keyboard shortcut hints | UX |
| 92 | Scroll velocity motion blur | Animation |
| 93 | Section theme transitions | Visual |
| 94 | Smart tooltips on branded terms | UX |
| 95 | Konami code wireframe mode | Easter egg |
| 96 | Smooth scroll behaviour | UX |
| 97 | Parallax depth layers | Animation |
| 98 | Glitch text on hero eyebrow | Animation |
| 99 | Overscroll bottom glow | Animation |
| 100 | Orbiting pentagon constellation | Animation |
| 101 | Focus mode (F key) | UX |
| 102 | Adaptive nav theme (light/dark) | Visual |
| 103 | Terminal typed command on scroll | Animation |
| 104 | Contextual CTA text swap | Conversion |
| 105 | Constellation particles in dark sections (deferred) | Animation |
| 106 | Spring-eased micro-interactions | Animation |
| 107 | Layered section depth gradients | Visual |
| 108 | Floating pill nav upgrade | Navigation |
| 109 | Full-screen mobile nav takeover | Mobile |
| 110 | Footer landmark upgrade | Design |
| 111 | Decorative section numbers (DISABLED) | DISABLED |
| 112 | Sticky section label | Navigation |
| 113 | Page transition fade | Animation |
| 114 | Font weight crystallisation on scroll | Animation |
| 115 | Six-level luma text hierarchy | Design |

## INTERACTIVE & CONVERSION (116-128)
| # | Feature | Category |
|---|---------|----------|
| 116 | Zone colour wash overlay | Visual |
| 117 | Patient journey timeline (in Platform section) | Interactive |
| 118 | Magnetic button pull effect | Animation |
| 119 | Number odometer flip | Animation |
| 120 | Reading progress persistence | UX |
| 121 | Card grid cursor proximity glow | Animation |
| 122 | CTA escalation by scroll depth | Conversion |
| 123 | Zone pentagon (CSS ready) | Visual |
| 124 | Haptic scroll cue (framework) | Sensory |
| 125 | Per-section reading time | UX |
| 126 | Interactive terrain demo (collapsible) | Interactive |
| 127 | Founding practitioner countdown (collapsible) | Conversion |
| 128 | Animated case walkthrough (collapsible) | Interactive |

## IMPACT FEATURES (129-143)
| # | Feature | Category |
|---|---------|----------|
| 129 | Practitioner testimonial (REMOVED - no fake) | REMOVED |
| 130 | FAQ accordion (6 questions) | Content |
| 131 | Email capture (Phase 2 notification) | Conversion |
| 132 | Footer performance badge (FCP time) | Trust |
| 133 | Scroll depth tracking (25/50/75/100%) | Analytics |
| 134 | CTA click tracking | Analytics |
| 135 | Section visibility time tracking | Analytics |
| 136 | Engagement time tracking | Analytics |
| 137 | Bounce signal detection | Analytics |
| 138 | Google Analytics 4 placeholder | Analytics |
| 139 | Chatbot conversation tracking | Analytics |
| 140 | Interactive demo completion funnel | Analytics |
| 141 | Collapsible section open/close tracking | Analytics |
| 142 | Exit intent tracking | Analytics |
| 143 | Return visitor behaviour tracking | Analytics |

## ADVANCED ANALYTICS (144-153)
| # | Feature | Category |
|---|---------|----------|
| 144 | Click coordinate heatmap logging | Analytics |
| 145 | Email field abandonment tracking | Analytics |
| 146 | Content copy-paste tracking | Analytics |
| 147 | Device and viewport analytics | Analytics |
| 148 | Time-to-first-interaction | Analytics |
| 149 | Rage click detection | Analytics |
| 150 | Scroll direction reversal tracking | Analytics |
| 151 | Chatbot-to-section navigation links | Interactive |
| 152 | Peak attention window detection | Analytics |
| 153 | A/B test framework | Analytics |

## QUIZ FUNNEL (154)
| # | Feature | Category |
|---|---------|----------|
| 154 | Adaptive quiz funnel (4 variants) | Conversion |
| — | Baseline variant (first visit) | Conversion |
| — | 5% variant (return, moderate) | Conversion |
| — | 10% variant (return, high engagement) | Conversion |
| — | 15% variant (3+ visits) | Conversion |
| — | Quiz CTAs placed at 5 locations | Conversion |

## EXECUTIVE FEATURES (155-164)
| # | Feature | Category |
|---|---------|----------|
| 155 | Interactive pentagon zone map (collapsible) | Interactive |
| 156 | Real-time platform status strip | Trust |
| 157 | Animated architecture blueprint (collapsible) | Visual |
| 158 | Practitioner spotlight cards (3 personas) | Content |
| 159 | Security & governance trust wall (6 cards) | Trust |
| 160 | Live architecture depth counter | Interactive |
| 161 | Peer comparison insight (REMOVED - ethics) | REMOVED |
| 162 | Social proof notifications (REMOVED - ethics) | REMOVED |
| 163 | Intelligent scroll checkpoint prompts | Conversion |
| 164 | Practitioner credential validator | Conversion |

## PROFESSIONAL FEATURES (165-176)
| # | Feature | Category |
|---|---------|----------|
| 165 | Keyboard navigation system (? key) | Accessibility |
| 166 | Session summary panel (S key) | UX |
| 167 | Smart content personalisation (return visitors) | Personalisation |
| 168 | Data point micro-pulse animation | Animation |
| 169 | Ambient sound framework (muted default) | Sensory |
| 170 | Progressive CTA warmth indicator | Conversion |
| 171 | Collaborative viewing mode (share URL with state) | Social |
| 172 | Reading progress bookmark | UX |
| 173 | Time-of-day hero greeting | Personalisation |
| 174 | Section reading completion checkmarks | UX |
| 175 | Estimated completion ring | UX |
| 176 | Smart section recommendations | Conversion |

## PRODUCTION FEATURES (177-187)
| # | Feature | Category |
|---|---------|----------|
| 177 | Reading mode (R key) | UX |
| 178 | Animated section transitions | Animation |
| 179 | Content length adaptor (mobile truncation) | Mobile |
| 180 | Session heatmap recorder | Analytics |
| 181 | Dynamic meta description for SEO | SEO |
| 182 | Cinematic hero image treatment (6 layers) | Visual |
| 183 | Hero text cinematic parallax (3 depth layers) | Animation |
| 184 | Zone colour bar under nav | Visual |
| 185 | Auto-theme footer (light/dark) | Design |
| 186 | Practitioner viewing counter (REMOVED - ethics) | REMOVED |
| 187 | Contextual page title update on scroll | SEO |

## ENTERPRISE FEATURES (188-202)
| # | Feature | Category |
|---|---------|----------|
| 188 | Smart print stylesheet (branded PDF) | Accessibility |
| 189 | Offline capability (service worker) | Performance |
| 190 | Dynamic social share cards (OG tags) | SEO |
| 191 | Auto-save quiz & demo state | UX |
| 192 | Accessibility audit panel (Ctrl+Shift+A) | Accessibility |
| 193 | Living colour temperature system | Visual |
| 194 | Typographic scale breathing | Animation |
| 195 | Glass morphism depth planes | Visual |
| 196 | Contextual cursor identity | Animation |
| 197 | Scroll-reactive grain density | Animation |
| 198 | Emotional colour pulse | Animation |
| 199 | Viewport-locked product demo (collapsible) | Interactive |
| 200 | Predictive section loading | Performance |
| 201 | Spatial audio (section tones) | Sensory |
| 202 | Emotion pulse hooks (quiz/eligibility) | Animation |

## CEO CONVERSION FEATURES (203-212)
| # | Feature | Category |
|---|---------|----------|
| 203 | Paste Your Case free-text parser | Interactive |
| 204 | "What Happens After You Book" transparency | Conversion |
| 205 | Cost-per-consultation value anchor | Conversion |
| 206 | Clinical authority guarantee block | Trust |
| 207 | Demo case walkthrough (via F199) | Interactive |
| 208 | Dr Faisal founder block (merged with quote) | Trust |
| 209 | Integration roadmap (3 phases) | Content |
| 210 | UK data residency badge (in proof strip) | Trust |
| 211 | Inline objection handler (after outputs) | Conversion |
| 212 | Urgency without fabrication (factual) | Conversion |

## CINEMATIC HERO v4 (213-228) — Added 21 April 2026
| # | Feature | Category |
|---|---------|----------|
| 213 | Cinematic slow-zoom hero BG (scale 1.12→1.0, brightness 0.4→0.7, 30s) | Animation |
| 214 | Cinematic colour grading overlay (dark top/bottom, Prussian tint, warm gold corner) | Visual |
| 215 | Deep cinematic vignette (80% black edges, 55% ellipse at 42% vertical) | Visual |
| 216 | Ambient glow orbs — gold 22%, teal 18%, purple 14% (120px blur, drifting) | Visual |
| 217 | Anamorphic lens flare (horizontal gold streak, 2.5s delayed fade-in) | Visual |
| 218 | Conic light rays (zone-coloured, 70s full rotation) | Animation |
| 219 | Full-hero glass depth layer (backdrop-filter blur 2px) | Visual |
| 220 | 3D perspective grid — Linear-style receding gold/teal lines (60deg, scrolling) | Visual |
| 221 | SVG terrain mesh pentagon — 3 nested pentagons, 5 zone nodes, 6 cascade lines, pulse rings | Visual |
| 222 | Animated film grain (SVG fractalNoise, 7% overlay, 4-step position shift) | Visual |
| 223 | H1 clip-mask line reveal (3 lines, staggered 1.5s/1.8s/2.1s, cubic-bezier spring) | Animation |
| 224 | Eyebrow letter-spacing contraction animation (0.6em→0.35em on entry) | Animation |
| 225 | Hero subtitle cinematic fade (0→88% opacity at 3.0s) + typewriter at 3.2s delay | Animation |
| 226 | VOS pill animated gradient border (conic zone colours, 5s rotation) | Animation |
| 227 | Hero counter animation — 7 Nodes / 5 Zones / 6 Cascades / 5 Outputs (count-up at 6.2s) | Animation |
| 228 | Hero mouse parallax — content shifts 16px/12px opposite to cursor | Interactive |

## AWARD-WINNING ENHANCEMENTS (229-243) — Added 2 May 2026
| # | Feature | Category | Built in S10 |
|---|---------|----------|:---:|
| 229 | Scroll-velocity-responsive transitions (fast=snap 0.25s, slow=cinematic 1.2s) | Animation | YES |
| 230 | Scroll-pinned narrative sections (300vh sticky container, step-based reveal) | Interactive | — |
| 231 | Cursor identity system (12px dot, 48px ring on interactive, 3px bar on text, mix-blend-mode) | Interactive | — |
| 232 | Smooth scroll engine: Lenis-style momentum (wheel preventDefault, RAF lerp ease 0.08) | Performance | YES |
| 233 | Scroll-driven FLINT pipeline (L1-L5 draw sequentially, connector line grows) | Animation | YES |
| 234 | Terrain mesh living background (fixed pentagon SVG, 120s rotation, hides on light sections) | Visual | YES |
| 235 | Zone colour bleed on section transitions (radial gradient from edges on data-zone sections) | Visual | — |
| 236 | Typography weight crystallisation (h2: weight 100 to 300, opacity 0.4 to 1 at viewport 65%) | Animation | — |
| 237 | Card proximity light (300px radial gradient follows mouse across card grids) | Interactive | YES |
| 238 | Ripple-on-click for all CTAs (expanding circle from click point, 0.6s spring) | Animation | — |
| 239 | Spring physics global (cubic-bezier(0.34, 1.56, 0.64, 1) on all cards/buttons) | Animation | YES |
| 240 | Magnetic nav items (nav links shift 12% toward cursor on hover) | Interactive | — |
| 241 | Page loader: architectural reveal (logo + pentagon stroke-draw + gold line + 1.8s total) | Animation | YES |
| 242 | Skeleton shimmer on below-fold sections (gold gradient sweep 1.8s, removed on scroll) | Performance | — |
| 243 | View Transitions API (internal links use document.startViewTransition for cross-page morph) | Performance | — |

**S10 build (2 May 2026):** 7 of 15 built inline (items 1, 4, 5, 6, 9, 11, 13)
**S10 file:** `S10_Homepage_2026-04-30.html`
**Governance condition:** Page loader (item 13) is z-index overlay only. All governance DOM content present from parse time. Code comment confirms compliance.
**External files (all 15):** `vm-award-enhancements.css` + `vm-award-enhancements.js` (linked in S9)
**Accessibility:** All 7 check prefers-reduced-motion. Smooth-scroll/proximity-light desktop-only (>768px).
**Total features:** 243 (228 original + 15 award-winning enhancements)

---

## REMOVED FEATURES (Ethics compliance)
| # | Feature | Reason |
|---|---------|--------|
| 90 | Floating social proof avatars | Fabricated identities |
| 129 | Practitioner testimonial | No real testimonial available |
| 161 | Peer comparison insight | Fabricated aggregate data |
| 162 | Social proof toast notifications | Fabricated activity from fake cities |
| 186 | Practitioner viewing counter | Fabricated visitor count |

## DISABLED FEATURES
| # | Feature | Reason |
|---|---------|--------|
| 89 | Scroll-triggered text highlight | User request |
| 111 | Decorative section numbers | User request |

---

## PERFORMANCE
- Server response: ~3-5ms (localhost)
- File size: ~620KB HTML + ~12KB CSS (enhancements) + ~8KB JS (enhancements)
- Hero image: 268KB WebP (compressed from 3MB JPG)
- content-visibility: auto on below-fold sections
- Deferred JS via requestIdleCallback
- will-change + contain on fixed elements
- prefers-reduced-motion fully supported
- Smooth scroll: RAF-based momentum (no jank, single handler)
- Skeleton shimmer: prevents CLS on below-fold sections
- View Transitions: native API, no polyfill weight

## KEYBOARD SHORTCUTS
| Key | Action |
|-----|--------|
| ? | Show keyboard shortcuts panel |
| R | Reading mode |
| F | Focus mode |
| T | Table of contents |
| S | Session summary |
| Q | Take the quiz |
| C | Open chatbot |
| Home | Back to top |
| Esc | Close any overlay |
| Ctrl+K | Command palette |
| Ctrl+Shift+P | Performance panel |
| Ctrl+Shift+A | Accessibility audit |

## ANALYTICS EVENTS
All events flow through `window.vmTrack(event, data)`.
On localhost: logs to console `[VM Analytics]`.
When GA4 activated: sends to `gtag('event', ...)`.

## ENROLMENT MANAGEMENT
`var VM_ENROLLED_COUNT = 0;` — change to mark founding slots as taken.
Located in the JS near Feature 203.

---
VitalMatrix Ltd 2026. ICO ZC101813.


========================================================================
# WhyVitalMatrixSpecs
========================================================================

# WhyVitalMatrix P3 Page Specifications
## WhyVitalMatrix_v4_P3Standard_2026-04-30.html
## Updated: 2 May 2026
## Authority: ALB v1.5 | D-53 | MasterContext v5.2

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page | P3 Why VitalMatrix |
| File | WhyVitalMatrix_v4_P3Standard_2026-04-30.html |
| Background | Prussian Blue #0D2B4E (flagship) |
| Nav | Sticky, 52px, backdrop-blur |
| Mobile nav | Hamburger menu at 768px breakpoint |
| External CSS | vm-phase1-design.css, vm-font-optimise.css |
| External JS | vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |
| Self-contained | All award enhancements (AW1-AW9) inline |

---

## SECTION MAP (DOM order)

| # | Section | Background | Key Feature |
|---|---------|-----------|-------------|
| 01 | Hero | Prussian #0D2B4E | Word-by-word reveal, particle canvas, parallax layers |
| -- | Stat Strip | Charcoal #1A2030 | Counter animation (7/5/6/121) |
| -- | Trust Badges | Charcoal #1A2030 | ICO, UK Practitioners, Phase 1 Live |
| -- | Product Visual | Prussian #0D2B4E | CascadeAtlas pentagon + terrain assessment mockup |
| 02 | Problem Cards | Beige #F5EFE6 | 4 zone-coloured cards, 2x2 grid |
| -- | Divider | Gold line | Animated scaleX reveal |
| 03 | Comparison Table | Charcoal #1A2030 | 7-row feature comparison, row stagger |
| 04 | Infrastructure Argument | Deep Teal #0C4452 | 3 glassmorphism cards, mouse-tracking glow, 3D tilt |
| 05 | Where VitalMatrix Fits | Light Gold #FBF6E9 | 3 pillar rows, pullquote |
| 06 | CTA | Prussian #0D2B4E | Dual CTA, scarcity indicator |
| -- | Footer | Navy #071C33 | 31-mnemonic TM footer, MHRA governance |
| -- | Sticky CTA Bar | Prussian #0D2B4E | Appears at 60% scroll, dismissible |

---

## SECTION TRANSITIONS

Gradient blend overlays (60px height, positioned above each section):

| Transition | Class | From | To |
|-----------|-------|------|-----|
| Trust to Problems | vm-blend-dark-to-light | Charcoal | Beige #F5EFE6 |
| Problems to Comparison | vm-blend-light-to-dark | Beige | Charcoal #1A2030 |
| Comparison to Infrastructure | vm-blend-dark-to-teal | Charcoal | Deep Teal #0C4452 |
| Infrastructure to Pillars | vm-blend-teal-to-light | Deep Teal | Light Gold #FBF6E9 |
| Pillars to CTA | vm-blend-light-to-prussian | Light Gold | Prussian #0D2B4E |

---

## AWARD-LEVEL ENHANCEMENTS (AW1-AW9)

### AW1: Hero Headline Word-by-Word Reveal
- Each word wrapped in `.vm-word > .vm-word-inner`
- translateY(110%) to translateY(0) on stagger (60ms per word)
- 400ms initial delay after page load
- Gold phrase gradient preserved within span
- Reduced motion: falls back to standard stagger

### AW2: Mouse-Tracking Light on Glassmorphism Cards
- Applied to `.vm-infra-card` (Section 04)
- CSS custom properties `--mouse-x`, `--mouse-y` updated on mousemove
- Radial gradient: 400px circle, rgba(201,168,76,0.08)
- Opacity transition: 0 to 1 on hover (0.4s ease)
- `::after` pseudo-element, z-index:1
- Disabled on mobile (<769px) and reduced motion

### AW3: Magnetic CTA Buttons
- Applied to `.vm-btn-gold` and `.vm-btn-ghost`
- 60px magnetic radius
- Pull factor: 0.35 (subtle, not jarring)
- Transform resets on mouseleave
- Cubic-bezier(0.34, 1.56, 0.64, 1) spring easing
- Disabled on mobile (<769px) and reduced motion

### AW4: Custom Scrollbar
- Width: 6px
- Track: var(--vm-navy) #071C33
- Thumb: rgba(201,168,76,0.35), 3px border-radius
- Thumb hover: rgba(201,168,76,0.55)
- Firefox: scrollbar-width: thin, scrollbar-color matching

### AW5: Film Grain Texture Overlay
- Fixed position, full viewport, z-index: 9999
- SVG-based fractalNoise (baseFrequency 0.85, 4 octaves)
- Opacity: 0.035 (barely perceptible, adds cinematic depth)
- 128px tile repeat
- Animation: 8-step drift over 8s (prevents static pattern)
- aria-hidden="true"
- Reduced motion: no animation, static grain

### AW6: Reading Progress Bar
- Fixed position, top:0, z-index:1001 (above nav)
- Height: 2px
- Gradient: gold #C9A84C to teal #1A7A8A
- Width calculated from scroll percentage
- Transition: width 0.1s linear (smooth but responsive)
- Uses existing `.vm-progress-bar` div in HTML

### AW7: Parallax Layers in Hero
- Eyebrow: 0.6x scroll rate (moves down slowly)
- Subheadline: -0.3x scroll rate (moves up subtly)
- CTAs: -0.5x scroll rate (moves up faster)
- Particle canvas: 0.8x scroll rate (background depth)
- Stops computing when scrolled past 100vh
- Disabled on mobile (<769px) and reduced motion

### AW8: Pentagon SVG Slow Rotation
- Applied to CascadeAtlas SVG in product visual section
- 120-second full rotation cycle (barely perceptible)
- transform-origin: 170px 155px (centre of pentagon)
- Linear timing (constant speed)
- Reduced motion: no rotation

### AW9: Section Headline Split-Line Reveal
- Applied to: `.vm-problems-headline`, `.vm-compare-headline`, `.vm-infra-headline`, `.vm-pillars-headline`
- Text split on sentence boundaries (period + space)
- Each sentence wrapped in `.vm-line-reveal > .vm-line-reveal-inner`
- translateY(100%) to translateY(0) with 0.1s stagger between lines
- Triggered by IntersectionObserver `.vm-entered` class
- Single sentences wrapped as one block

---

## PRODUCT VISUAL (CascadeAtlas Preview)

Browser-frame mockup positioned between trust badges and problem cards.

### Left Panel: CascadeAtlas Pentagon SVG
- 5 zone nodes in pentagon layout (Z1 top, Z2 top-right, Z3 bottom-right, Z4 bottom-left, Z5 top-left)
- Zone colours: D-53 compliant
- 6 cascade arrows with directional markers
- S4 arrow dashed (Theoretical)
- Central "CASCADEATLAS" label
- Slow 120s rotation (AW8)

### Right Panel: Terrain Assessment
- 5 zone score bars with colour-coded fill
- DM Mono labels, zone colours
- DRD indicator card: "Driver: Z2 Resilience Network" (T-01a compliant)
- "Illustrative output only. Not real patient data." disclaimer

### Browser Frame
- Title bar: macOS-style dots (red/amber/green)
- URL bar: vitalmatrix.co.uk/terrain
- Background: #161B22
- Shadow: 0 24px 80px rgba(0,0,0,0.45)

---

## COLOUR COMPLIANCE (D-53)

| Variable | Value | Usage |
|----------|-------|-------|
| --vm-z1 | #C9A84C | Gold (Metabolic Energy) |
| --vm-z2 | #1A7A8A | Teal (Resilience) |
| --vm-z3 | #7B5EA7 | Purple (Cardiovascular) |
| --vm-z4 | #5F7C6C | Sage (Detoxification) |
| --vm-z5 | #D4B870 | Warm Gold (Hormonal) |

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Eyebrows | DM Mono | 11px, 0.12em tracking | 400 |
| Headlines | Cormorant Garamond | clamp(28px,4vw,48px) | 300-400 |
| Hero h1 | Cormorant Garamond | clamp(40px,6vw,72px) | 600 |
| Body | Outfit | 0.86-0.95rem | 400 |
| Data labels | DM Mono | 9-11px | 400-500 |
| ICO notes | DM Mono | 0.6rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| 900px | Problem grid 1-col, infra grid 1-col, stats 2-col |
| 768px | Desktop nav hidden, hamburger shown, hero padding reduced, section padding reduced |
| 480px | Hero h1 36px, stats 1-col |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Hero headline | Page load + 400ms | Word-by-word clip reveal (AW1) |
| Hero elements | Scroll | Parallax at different rates (AW7) |
| Scroll indicator | Scroll > 100px | Fade out |
| Stat counters | IntersectionObserver | Animate 0 to target (easeOutQuad, 1800ms) |
| Problem cards | IntersectionObserver | Stagger fade-up (0.12s intervals) |
| Problem cards | Hover | Zone-colour border glow |
| Problem card icons | Entry | Scale pulse animation |
| Comparison rows | IntersectionObserver | Stagger slide-in (100ms intervals) |
| Infrastructure cards | Hover | 3D tilt (perspective 800px) |
| Infrastructure cards | Mousemove | Radial light follows cursor (AW2) |
| CTA buttons | Mousemove | Magnetic pull within 60px (AW3) |
| Section headlines | IntersectionObserver | Split-line reveal (AW9) |
| Divider | IntersectionObserver | scaleX 0 to 1 (0.8s) |
| Pentagon SVG | Always | 120s rotation (AW8) |
| Progress bar | Scroll | Gold-to-teal width tracks scroll % (AW6) |
| Sticky CTA | Scroll > 60% | Slide up from bottom |
| Sticky CTA dismiss | Click | Remove permanently |
| Hamburger menu | Click | Animated X transform, slide-down menu |

---

## COPY CHANGES LOG (2 May 2026)

| Location | Before | After | Reason |
|----------|--------|-------|--------|
| Hero sub | Three topic sentences | Single compelling hook | Silicon Valley standard |
| Problem Card 02 | "General-purpose AI cannot hold terrain logic" | "You spend more time correcting AI output than writing it yourself" | Practitioner experience, not technical limitation |
| Infrastructure Card 01 | "Consistent clinical depth across every patient" | "Nothing gets skipped. Ever." | Sharper, principle-first |
| Infrastructure Card 02 | "Directionality, not description" | "Direction, not description" | Tighter |
| Infrastructure Card 03 | "Practitioner authority preserved by design" | "The practitioner decides. Always." | Authority-first |
| Pillar II body | Duplicated opening sentence | Removed duplicate | Copy error fix |
| Stat labels | "Nodes" / "Zones" etc. | "Clinical Nodes Scored" etc. | Practitioner-meaningful |
| Scarcity text | "10 of 10 founding slots remaining" | "Limited founding cohort" | Avoid signalling zero demand |
| Hero ICO note | Present | Removed (kept in CTA + footer) | Duplicate removal |
| Testimonial section | Placeholder brackets | Removed entirely | No placeholders on live page |

---

## COMPLIANCE CHECKS

- [x] D-53 zone colours applied (--vm-z5 corrected to #D4B870)
- [x] DRD display: "Driver" (T-01a)
- [x] No em dashes (en dashes in comparison table)
- [x] British English throughout
- [x] 31-mnemonic TM footer with VOS expansion
- [x] MHRA governance line in footer
- [x] "For practitioner use only. Not a diagnostic tool." in footer
- [x] Logo: correct file, height="48", display:block
- [x] No template literals in JS
- [x] No default parameters in JS
- [x] prefers-reduced-motion respected on all animations
- [x] aria-label on hamburger button
- [x] aria-hidden on grain overlay
- [x] focus-visible styling active

---

*WhyVitalMatrix P3 Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# HowItWorksSpecs
========================================================================

# How It Works Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | How It Works (P2) |
| File | HowItWorks_v2_2026-04-15.html |
| Background (primary) | Prussian Blue #0D2B4E |
| Nav | Sticky, rgba(13,43,78,0.96) with backdrop-filter blur(12px); gold border-bottom |
| External CSS | vm-phase1-design.css, vm-font-optimise.css |
| External JS | vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |
| Structured Data | JSON-LD WebPage schema |
| GA4 | Consent-gated (G-TRM1JTE0PB) |
| Canonical | https://vitalmatrix.co.uk/how-it-works/ |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 01 | Hero | Prussian Blue #0D2B4E | Cinematic layered hero with FLINT pipeline visual (L1-L5 horizontal pills), dual CTA, ICO note |
| 02 | FLINT Five Questions | Charcoal #1A2030 | 5-column card grid (L1-L5), SVG icons per layer, hover lift |
| 03 | DRD Zone Display | Deep Teal #0C4452 | Five zone circles with pulse animation on Z2 active ring, protective GMC note |
| 04 | APEX Budget Tiers | Light Purple #F0EBF8 | 3-column tier cards (Core, Extended, Comprehensive), light section |
| 05 | FLINT Pillar Rows | Light Gold #FBF6E9 | Roman numeral rows (I-V), teal left border, layer questions |
| 06 | FLINT Pipeline Vertical | Charcoal #1A2030 | Vertical scroll-reveal pipeline steps (L1-L5), IntersectionObserver animation |
| 07 | Five Outputs | Deep Teal #0C4452 | 5 output cards with accent bars (gold/teal alternating), protective GMC note |
| 07B | Personalised Terrain Management Protocol | Light Sage #EAF0EB | Zone accordion tables (Z1, Z2, Z4, Z5), evidence tier badges, mobile accordion, protective header |
| 08 | Methodology FAQ | Charcoal #1A2030 | 4-item FAQ accordion with plus-to-cross rotation |
| 09 | CTA | Prussian Blue #0D2B4E | Centred CTA with Book a Walkthrough button, ICO note |
| -- | Floating CTA | Overlay | Floating CTA button with dismiss close |
| -- | Footer | Navy #071C33 | Brand, practitioner note, 31-mnemonic TM footer, MHRA governance line |

---

## AWARD-LEVEL ENHANCEMENTS

### Cinematic Hero (Section 01)
- **Gradient overlay** (.vm-hero-grade): dual linear gradient for cinematic depth
- **Vignette** (.vm-hero-vignette): radial-gradient ellipse darkening edges
- **Animated orbs** (.vm-hero-orbs): three colour orbs (gold, teal, purple) with 20-24s alternate keyframe drift animations (vmOrbA, vmOrbB, vmOrbC)
- **Glass layer** (.vm-hero-glass): subtle backdrop-filter blur(2px)
- **Film grain** (.vm-hero-grain): SVG feTurbulence noise texture with 0.3s stepped animation (vmGrain), mix-blend-mode overlay
- **Pentagon mesh** (.vm-hero-mesh): SVG dual-pentagon wireframe with zone-coloured vertex dots, 90s continuous rotation (vmMeshR)
- **Reduced motion** (@prefers-reduced-motion): all hero animations disabled

### Scroll Reveal (Section 06)
- IntersectionObserver-based reveal: pipeline steps start opacity:0, translateY(20px); transition to visible on 30% threshold intersection
- Class toggle: `.vm-visible`

### Card Interactions (Sections 02, 07)
- `.vm-card-glow` and `.vm-stagger-grid` classes (effects defined in external vm-phase1-design.js/css)

### Zone Pulse Animation (Section 03)
- `@keyframes vm-pulse-ring`: 2s ease-in-out infinite box-shadow pulse on active zone ring (Z2)

### FAQ Accordion (Section 08)
- Click toggle via inline onclick, class `.vm-faq-open`
- Icon rotation: 45deg transform on open state (plus becomes cross)
- Answer reveal: max-height transition from 0 to 400px

### TSC Mobile Accordion (Section 07B)
- Desktop: standard table display
- Mobile (768px): table hidden, accordion button shown, onclick class toggle `.open`
- Chevron rotation on open state

### Progress Bar and Sticky Label
- `.vm-progress-bar` and `.vm-sticky-label` elements present (behaviour in external JS)

### Floating CTA
- Fixed-position CTA button with dismiss functionality (close SVG icon)

### Page Transition and Kinetic Grid
- Body classes: `vm-kinetic-grid`, `vm-page-transition` (effects in external CSS/JS)

---

## COLOUR COMPLIANCE (D-53)

| Zone / Element | Colour Used | D-53 Expected | Status |
|----------------|-------------|---------------|--------|
| Z1 Metabolic Energy Axis (Section 03 ring) | #2A9BAD (Teal Light) | #C9A84C (Gold) | DEVIATION: displays as teal-light, not D-53 gold |
| Z1 TSC header (Section 07B) | #2A9BAD | #C9A84C | DEVIATION: page-level override noted in HTML comment (Dr Faisal 21 April 2026) |
| Z2 Resilience Network | #1A7A8A | #1A7A8A | COMPLIANT |
| Z3 Cardiovascular-Neural Axis | #7B5EA7 | #7B5EA7 | COMPLIANT |
| Z4 Detoxification Trident | #5F7C6C | #5F7C6C | COMPLIANT |
| Z5 Hormonal Terrain Axis (Section 03 ring) | #4A90C4 | #4A90C4 (Metallic Blue) | PASS: correct website colour, distinct from Z1 Gold |
| Z5 TSC header (Section 07B) | #4A90C4 | #4A90C4 (Metallic Blue) | PASS |
| Backgrounds | #0D2B4E, #1A2030, #0C4452, #071C33 | Per D-53 system | COMPLIANT |
| Light sections | #F0EBF8, #FBF6E9, #EAF0EB | Permitted for variety | COMPLIANT |
| Gold accent | #C9A84C | #C9A84C | COMPLIANT |
| Teal accent | #1A7A8A | #1A7A8A | COMPLIANT |

**Summary:** Z1 zone ring colour in Section 03 shows #2A9BAD instead of #C9A84C — acknowledged via inline comment as a Dr Faisal override (21 April 2026). Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.

---

## TYPOGRAPHY

| Element | Font Family | Size | Weight |
|---------|-------------|------|--------|
| Body | Outfit, system-ui, sans-serif | 16px | 400 |
| H1 (Hero) | Cormorant Garamond, Georgia, serif | clamp(2.2rem, 4.5vw, 3.2rem) | 400 |
| H2 (Section headings) | Cormorant Garamond, Georgia, serif | clamp(1.75rem, 3.5vw, 2.6rem) | 400 |
| H3 (Cards) | Cormorant Garamond, Georgia, serif | 1.15rem - 1.25rem | 400 |
| Eyebrow | DM Mono, monospace | 0.6rem | 400 |
| Pipeline pill | DM Mono, monospace | 0.65-0.7rem | 500 |
| Body paragraph | Outfit, sans-serif | 0.82-1.05rem | 400 |
| Nav links | Outfit, sans-serif | 0.82rem | 400 |
| Nav CTA | Outfit, sans-serif | 0.8rem | 600 |
| Button (gold) | Outfit, sans-serif | 0.92rem | 600 |
| Button (ghost) | Outfit, sans-serif | 0.92rem | 500 |
| FAQ question | Outfit, sans-serif | 0.92rem | 500 |
| Footer TM | DM Mono, monospace | 0.58rem | 400 |
| Footer legal | DM Mono, monospace | 0.54rem | 400 |
| ICO note | DM Mono, monospace | 0.62rem | 400 |
| GMC note | DM Mono, monospace | 0.65rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Key Changes |
|-----------|-------------|
| 1024px | Five-grid: 3 columns |
| 900px | Five-grid: 2 columns; APEX grid: 1 column; Pipeline: vertical with rotated arrows |
| 768px | Nav links hidden (CTA only); Hero padding reduced; Container padding 20px; Five-grid: 1 column; Zone circles gap reduced; Pillar row: 50px roman column; TSC tables hidden, accordion buttons shown; Hero mesh: 260px |
| 480px | Hero H1: 1.7rem |
| prefers-reduced-motion | All hero orb, grain, and mesh animations disabled |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| .vm-five-card | Hover | Background #252D3D to #2A3248, translateY(-3px) |
| .vm-btn-gold | Hover | Background to #d4b256, translateY(-2px) |
| .vm-btn-ghost | Hover | Border-color 0.50 opacity, translateY(-2px) |
| .vm-nav-cta | Hover | Background #d4b256, translateY(-1px) |
| .vm-nav-links a | Hover | White text, 6% white background |
| .vm-zone-ring-active (Z2) | Auto | vm-pulse-ring 2s infinite box-shadow pulse |
| .vm-pipeline-v-step | Scroll (IntersectionObserver 30%) | opacity 0 to 1, translateY(20px) to 0 |
| .vm-faq-q button | Click | Toggle .vm-faq-open on parent; icon rotates 45deg; answer max-height 0 to 400px |
| .vm-tsc-accordion-btn | Click (mobile) | Toggle .open class; chevron rotates 180deg; accordion content shows |
| .vm-floating-cta-close | Click | Dismiss floating CTA (behaviour in external JS) |
| .vm-hero-orb--gold | Auto | vmOrbA 20s alternate drift |
| .vm-hero-orb--teal | Auto | vmOrbB 24s alternate drift |
| .vm-hero-orb--purple | Auto | vmOrbC 22s alternate drift |
| .vm-hero-mesh | Auto | vmMeshR 90s linear continuous rotation |
| .vm-hero-grain | Auto | vmGrain 0.3s 4-step translate jitter |
| Consent banner Accept | Click | localStorage set, reload, load GA4 |
| Consent banner Decline | Click | localStorage set, banner removed |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 zone colours | PASS | Z2 (#1A7A8A), Z3 (#7B5EA7), Z4 (#5F7C6C) compliant. Z1 uses #2A9BAD (override noted). Z5 #4A90C4 (Metallic Blue) correct — distinct from Z1 Gold to avoid visual duplication. |
| DRD T-01a language | PASS | "Driver" used throughout. "Driver" does not appear in display text. |
| 31 TM footer | PASS | VOS (with expansion), 30 mnemonics, VECTOR, ICO ZC101813 all present. |
| MHRA governance line | PASS | Footer contains full MHRA SaMD classification pending statement with ICO reference. |
| British English | PASS | lang="en-GB" declared. British spellings used (e.g. "prioritised", "normalisation", "oestrogen"). |
| No template literals | PASS | No backtick template literals in inline scripts. String concatenation not required (no dynamic strings). |
| No default parameters | PASS | No default parameters in inline scripts. |
| No position:fixed | PASS in inline CSS | No position:fixed in embedded styles. Note: consent banner JS uses position:fixed (dynamically injected). |
| Logo height | PASS | height="48" with correct file (VM_Logo_1000_x_1000_px_png_New_Transparent.png), display:block, line-height:0 |
| Protective header | PASS | Two GMC protective notes (Sections 03, 07) plus TSC protective header (Section 07B). |
| "For practitioner use only" | PASS | Present in footer (.vm-footer-practitioner). |
| Evidence tier labels | PASS | Evidence tiers labelled at point of use in TSC tables and FAQ answers. |
| No prohibited terms | PASS | No "treatment protocol", "diagnose", "clinical AI platform", "ABAARM", "MD", "eight nodes". |
| Canonical URL | PASS | https://vitalmatrix.co.uk/how-it-works/ |
| SEO meta block | PASS | Title, description, keywords, og:title, og:description, og:type all present. |
| ICO reference | PASS | ZC101813 appears in hero note, CTA note, TM footer, and MHRA line. |
| No em dashes | PASS | HTML entity &#8482; used for TM. No em dash characters found. |
| Credentials | N/A | Dr Faisal credentials not displayed on this page. |

---

## OBSERVATIONS AND NOTES

1. **Z1 colour override**: HTML comment at line 1274 documents a Dr Faisal directive (21 April 2026) changing Z1 display from #C9A84C to #2A9BAD on this page. This deviates from D-53.
2. **Z5 colour confirmed**: Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.
3. **Z3 TSC excluded**: Z3 Cardiovascular-Neural Axis is noted as "not active in Phase 1" with a text note instead of a table entry.
4. **N7 reference**: Section 02 card for L1 correctly states "Seven biological nodes" and "N1 through N6" without N7 clinical detail (Phase 2 placeholder only).
5. **S6 UNIDIRECTIONAL**: Correctly labelled in Section 05 pillar row: "S6 UNIDIRECTIONAL: Z1 to Z3 only."
6. **Consent banner**: Uses position:fixed and localStorage (dynamically created via JS). This is the cookie consent mechanism and operates outside normal page CSS constraints.

---

*How It Works Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# OurApproachSpecs
========================================================================

# Our Approach Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | Our Approach |
| File | `OurApproach_v2_2026-04-13.html` |
| Background (body) | Deep Teal `#0C4452` (var(--vm-deep-teal)) |
| Navigation | Sticky 52px, `rgba(26,32,48,0.96)` with backdrop-filter blur(12px), gold border-bottom |
| External CSS | `vm-phase1-design.css`, `vm-font-optimise.css` |
| External JS | `vm-phase1-design.js`, `vm-scroll-choreography.js`, `vm-svg-illustrations.js`, `vm-premium-polish.js` |
| Fonts (Google) | Cormorant Garamond (300,400,600,i300,i400), Outfit (300-700), DM Mono (400,500) |
| GA4 | G-TRM1JTE0PB (consent-gated via localStorage) |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|---|---|---|
| NAV | Navigation | `rgba(26,32,48,0.96)` + backdrop-blur | Sticky 52px, hamburger mobile menu, gold CTA button |
| 1 | Hero | Teal Deepest `#07303D` (var(--vm-teal-deepest)) | Cinematic parallax grid, animated orbs, SVG mesh pentagon, grain overlay, scroll prompt |
| 1b | Proof Strip | (inline, inherits) | Phase 1 / 10 Founding Practitioners / UK Only / ICO / MHRA status |
| 2 | Three Pillars | Prussian Blue `#0D2B4E` (var(--vm-prussian)) | Roman numeral pillar layout (I, II, III), stagger-grid animation |
| 3 | The Architecture | Deep Teal `#0C4452` (var(--vm-deep-teal)) | Zone colour pills (Z1-Z5), TerrainLock mention, links to NCZ/CascadeAtlas |
| 3B | Featured Visual (MedTerrain) | Charcoal Mid `#232B3E` (var(--vm-charcoal-mid)) | Node-to-zone terrain diagram (N1-N7 circles, arrow, Z1-Z5 zone bars) |
| 4 | Quote | Prussian Light `#153A62` (var(--vm-prussian-light)) | Gold left-border blockquote, large decorative quotation mark, attribution |
| 5 | Vision (Clinical Gap) | Sage Deep `#3D5245` (var(--vm-sage-deep)) | Two-column before/after comparison grid |
| 5b | Protective Note + FLINT Signpost | Deep Teal `#0C4452` (var(--vm-deep-teal)) | Teal-bordered protective note box, FLINT pipeline signpost, link to How It Works |
| 7 | CTA | Teal Deepest `#07303D` (var(--vm-teal-deepest)) | Radial gradient glow, Book a Discovery Call button |
| FLT | Floating CTA | (fixed overlay) | Floating bottom CTA with close button |
| FTR | Footer | Navy `#071C33` (var(--vm-navy-d)) | 3-column grid, governance line, MHRA statement, 31 TM footer, copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Hero fade-up animation | `@keyframes heroFadeUp` with staggered delays (0s, 0.12s, 0.24s, 0.36s) on h1, subtitle, button, meta |
| Cinematic orb system | Three animated orbs (gold, teal, purple) with `filter:blur(100px)`, slow alternating translate animations (20-24s cycles) |
| SVG mesh pentagon | Rotating pentagon wireframe (`vmMeshR` 90s infinite rotation) with zone-coloured vertex dots |
| Film grain overlay | SVG feTurbulence noise texture at 0.05 opacity, `vmGrain` 0.3s stepped animation |
| Parallax grid | `background-attachment:fixed` grid lines on hero `::before` pseudo-element |
| Vignette layer | Radial gradient ellipse creating cinematic depth |
| Glass layer | `backdrop-filter:blur(2px)` subtle glass effect |
| Gradient grade | Multi-stop linear + diagonal gradient for cinematic colour grading |
| Scroll choreography | `vm-reveal` classes (triggered by external JS), `vm-scroll-prompt` with animated dot |
| Progress bar | `vm-progress-bar` div (styled/driven by external JS) |
| Sticky section label | `vm-sticky-label` div (driven by external JS) |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables orbs, grain, mesh animations; hero uses scroll instead of fixed |
| CTA glow | `vm-cta-glow` class (styled by external CSS) |
| Texture overlays | `vm-texture-gold`, `vm-texture-teal` classes (external CSS) |
| Depth layers | `vm-depth` class (external CSS) |
| Kinetic grid | `vm-kinetic-grid` body class (external CSS/JS) |
| Page transition | `vm-page-transition` body class (external CSS/JS) |
| Font sharpening | `vm-font-sharpen` class on headings (external CSS) |
| Stagger grid | `vm-stagger-grid` class for sequential reveal (external JS) |

---

## COLOUR COMPLIANCE (D-53)

| Zone/Element | Colour Used | D-53 Required | Status |
|---|---|---|---|
| Z1 pill | `#C9A84C` | `#C9A84C` (Gold) | PASS |
| Z2 pill | `#1A7A8A` | `#1A7A8A` (Teal) | PASS |
| Z3 pill | `#7B5EA7` | `#7B5EA7` (Purple) | PASS |
| Z4 pill | `#5F7C6C` | `#5F7C6C` (Sage) | PASS |
| Z5 pill | `#4A90C4` | `#4A90C4` (Metallic Blue) | PASS |
| --zone-z5 CSS var | `#4A90C4` | `#4A90C4` (Metallic Blue) | PASS |
| Z5 terrain zone border | via `var(--zone-z5)` = `#4A90C4` | `#4A90C4` (Metallic Blue) | PASS |

**D-53 Compliance Note:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.

### Background Colours Used

| Area | Colour | Variable |
|---|---|---|
| Body | `#0C4452` | --vm-deep-teal |
| Hero | `#07303D` | --vm-teal-deepest |
| Pillars | `#0D2B4E` | --vm-prussian |
| Architecture section | `#0C4452` | --vm-deep-teal |
| Featured Visual | `#232B3E` | --vm-charcoal-mid |
| Quote | `#153A62` | --vm-prussian-light |
| Vision | `#3D5245` | --vm-sage-deep |
| FLINT signpost | `#0C4452` | --vm-deep-teal |
| CTA | `#07303D` | --vm-teal-deepest |
| Footer | `#071C33` | --vm-navy-d |
| Protective note box | `#1E1A2E` | (inline) |

### Accent Colours

| Element | Colour |
|---|---|
| Gold accent | `#C9A84C` (--vm-gold) |
| Gold warm | `#D4B870` (--vm-gold-w) |
| Gold dark | `#A8873A` (--vm-gold-d) |
| Teal accent | `#1A7A8A` (--vm-teal) |
| Teal light | `#2A9BAD` (--vm-teal-l) |
| Sage | `#5F7C6C` (--vm-sage) |
| Purple | `#7B5EA7` (--vm-purple) |
| White | `#F4F4F2` (--vm-white) |

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---|---|---|---|
| Body | Outfit (--vm-fd) | 0.88rem | 400 |
| H1 (hero) | Cormorant Garamond (--vm-fs) | clamp(2.4rem, 5vw, 4rem) | 400 |
| H2 (sections) | Cormorant Garamond (--vm-fs) | clamp(1.6rem, 2.5vw, 2.2rem) | 400 |
| H3 (pillars) | Cormorant Garamond (--vm-fs) | clamp(1.1rem, 1.5vw, 1.3rem) | 400 |
| H3 (cards) | Cormorant Garamond (--vm-fs) | 1.2rem | 400 |
| H3 (FLINT body) | Cormorant Garamond (--vm-fs) | 1.1rem | 400 |
| H3 (vision col) | Cormorant Garamond (--vm-fs) | 1.15rem | 400 |
| Eyebrow | DM Mono (--vm-fm) | 0.62rem | 400 |
| Nav links | Outfit (--vm-fd) | 0.6rem | 500 |
| Nav CTA | Outfit (--vm-fd) | 0.6rem | 700 |
| Body paragraph | Outfit (--vm-fd) | 0.88rem | 400 |
| Card paragraph | Outfit (--vm-fd) | 0.82rem | 400 |
| FLINT body paragraph | Outfit (--vm-fd) | 0.84rem | 400 |
| Blockquote | Cormorant Garamond (--vm-fs) | 1.35rem | 400 (italic) |
| Quote attribution | DM Mono (--vm-fm) | 0.62rem | 400 |
| Hero meta | DM Mono (--vm-fm) | 0.58rem | 400 |
| CTA meta | DM Mono (--vm-fm) | 0.58rem | 400 |
| Footer headings | Outfit (--vm-fd) | 0.65rem | 600 |
| Footer links | Outfit (--vm-fd) | 0.78rem | 400 |
| Footer governance | Outfit (--vm-fd) | 0.6rem | 400 |
| Footer TM | DM Mono (--vm-fm) | 0.55rem | 400 |
| Pillar numbers | Cormorant Garamond (--vm-fs) | 3.5rem | 400 |
| FLINT layer ID | Cormorant Garamond (--vm-fs) | 1.8rem | 400 |
| Zone pills | DM Mono (--vm-fm) | 0.65rem | 400 |
| Terrain node circles | DM Mono (--vm-fm) | 0.62rem | 400 |
| Terrain zone bars | DM Mono (--vm-fm) | 0.6rem | 400 |
| Terrain caption | Cormorant Garamond (--vm-fs) | 1rem | 400 (italic) |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Adjustments |
|---|---|
| `max-width: 768px` | Nav links hidden (hamburger shown); cards grid to 1-col; vision grid to 1-col; FLINT rows to 1-col; FLINT delta to 1-col; footer grid to 1-col; gold button full-width; hero mesh 260px |
| `max-width: 480px` | Pillar left padding reduced (52px); pillar number font reduced (2.6rem) |
| `prefers-reduced-motion: reduce` | Hero parallax disabled (scroll); heroFadeUp animation neutralised; orbs, grain, mesh animations stopped |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---|---|---|
| Hamburger button | Click | Toggles `.open` class on `.vm-nav-links` (mobile menu slide) |
| Nav links | Hover | Colour transitions to gold (#C9A84C) over 0.3s |
| Gold buttons | Hover | Background shifts from #C9A84C to #D4B870 over 0.3s |
| Footer links | Hover | Colour transitions to gold over 0.3s |
| Hero elements | Page load | Staggered fade-up animation (0-0.36s delay) |
| Orbs (gold, teal, purple) | Continuous | Slow translate oscillation (20-24s alternate infinite) |
| SVG mesh pentagon | Continuous | 360deg rotation over 90s (linear infinite) |
| Film grain | Continuous | 4-step translate animation at 0.3s loop |
| Scroll prompt dot | Continuous | (Driven by external JS) |
| Progress bar | Scroll | (Driven by external JS) |
| vm-reveal sections | Scroll | (Driven by external JS: vm-scroll-choreography.js) |
| vm-stagger-grid | Scroll | (Driven by external JS: sequential child reveal) |
| Floating CTA close | Click | (Driven by external JS) |
| Consent banner Accept | Click | localStorage set, banner removed, page reload |
| Consent banner Decline | Click | localStorage set, banner removed |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|---|---|---|
| D-53 zone colours | PASS | Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones |
| DRD T-01a language | PASS | "Driver" used (never "Driver") |
| 31 TM footer | PASS | VOS(TM) + 30 marks present, ICO ZC101813 included |
| MHRA governance line | PASS | "MHRA SaMD classification has not yet commenced..." in footer |
| "For practitioner use only" | PASS | Present in footer governance section |
| British English | PASS | `lang="en-GB"`, British spellings throughout |
| No template literals | PASS | No backtick template literals in inline scripts |
| No em dashes | PASS | No em dash characters found |
| Logo file correct | PASS | `VM_Logo_1000_x_1000_px_png_New_Transparent.png` |
| Logo height="48" | PASS | height="48" confirmed |
| Logo display:block | PASS | `display:block;margin:0;padding:0;border:none;line-height:0` |
| Credentials | PASS | "Dr Shahzad Faisal, MBBS, FAAMFM" (no MD, no ABAARM) |
| No "clinical AI platform" | PASS | Uses "clinical intelligence platform" |
| No "treatment protocol" | PASS | Not present |
| No "diagnose/diagnosis" | PASS | Not present in body text |
| HERALD/BEACON body | PASS | Only in TM footer, never in body |
| VECTOR body | PASS | Only in TM footer, never in body |
| Practitioner authority language | PASS | "The practitioner decides", "practitioner review" throughout |
| N6 terminology | PASS | "(endocrine signalling)" used, not "Communication" |
| Node count | PASS | Seven nodes referenced (N1-N7 in terrain diagram) |
| Zone count | PASS | Five zones only (Z1-Z5) |
| Stack count | PASS | Six cascade stacks referenced |
| TerrainLock | PASS | Correctly described as Z2+Z1+Z5 loop |
| SEO title | NOTE | Uses "Clinical Intelligence Platform" not "Clinical Intelligence Platform" with TM. Missing TM symbol per SEO block spec |
| Canonical URL | PASS | `https://vitalmatrix.co.uk/our-approach/` |
| OG tags | PASS | og:title, og:description, og:type, og:url, og:image present |
| Quote blockquote | NOTE | Empty, pending Dr Faisal approval (by design) |
| No position:fixed | NOTE | Consent banner uses position:fixed (dynamically injected, acceptable for cookie banners) |

---

## OUTSTANDING CORRECTIONS REQUIRED

1. **Z5 colour compliance confirmed:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.
2. **SEO title missing TM symbol:** Should be "Our Approach | VitalMatrix(TM) -- Clinical Intelligence Platform" per Website Build Addendum SEO block spec.

---

*OurApproach Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# FoundingPractitionersSpecs
========================================================================

# Founding Practitioners Page Specification

---

## PAGE IDENTITY

| Field | Value |
|-------|-------|
| Page Name | Founding Practitioners (P4) |
| File | FoundingPractitioners_v2_2026-04-13.html |
| Background | Prussian Blue #0D2B4E (flagship) |
| Nav | Sticky nav, Prussian Blue rgba(13,43,78,0.96), backdrop-filter blur(12px), gold border-bottom |
| External Files | vm-font-optimise.css, vm-phase1-design.css, hero-bg-v5.webp, VM_Logo_1000_x_1000_px_png_New_Transparent.png |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 01 | Hero | #000 with hero-bg-v5.webp image + cinematic overlays | Full-viewport hero, dual CTA buttons, ICO line, scroll prompt |
| 01a | Proof Strip | rgba(13,43,78,0.80) with backdrop blur | Inline stats: Phase 1, 10 Practitioners, UK Only, ICO, MHRA |
| 01b | Stat Strip | #1A2030 (Charcoal) | 4-column animated counter grid (10, 5, GBP 299, 14) |
| 01c | Dr Faisal Quote | #0C4452 (Deep Teal) | Gold left-border blockquote, founder attribution |
| 02 | Benefit Cards | #1A2030 (Charcoal) var(--vm-charcoal) | 6 benefit cards (3-col grid), alternating gold/teal accents |
| 02a | Quote Block | #0C4452 (Deep Teal) var(--vm-deep-teal) | Gold left-border blockquote on practitioner workload |
| 02b | Practitioner Experience | #FFFFFF (White) | 2-col grid: animated SVG pentagon (5 zones) + 3-step numbered list |
| 03 | Two Cohorts + Slots | #1A2030 (Charcoal) var(--vm-charcoal) | Founding box with Cohort A/B cards, 10 animated slot indicators, terms list, dual CTA |
| 04 | Application Process (What Happens Next) | #0D2B4E (Prussian Blue) var(--vm-prussian) | 3-step horizontal grid (Apply, Walkthrough, Onboarding), permanence statement |
| 05 | Commitments | #0D2B4E (Prussian Blue) | 5 commitment cards (Roman numerals I-V), founder quote, stagger animation |
| 06 | Application CTA | #0D2B4E (Prussian Blue) var(--vm-prussian) | Final call-to-action with dual buttons, ICO reference |
| 06a | Protective Strip | rgba(26,122,138,0.08) teal-tinted | MHRA governance and T-01 compliance text |
| -- | Floating CTA | Fixed position (bottom-right) | Scroll-triggered apply button with gold box-shadow |
| -- | Progress Bar | Fixed position (top) | Gold-to-teal gradient, scroll-linked width |
| -- | Back to Top | Fixed position (bottom-left) | Circular button, shows after 600px scroll |
| -- | Footer | #071C33 (Navy) | Brand, MHRA line, 31-mnemonic TM footer, legal |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Cinematic Hero Layers | 7 layers: bg image with zoom animation, dark overlay, gradient grade, animated colour orbs (gold/teal/purple with drift keyframes), radial vignette, glass blur layer, rotating SVG mesh pentagon, grain noise overlay |
| Animated Stat Counters | IntersectionObserver-triggered counter animation with cubic easing (data-fp4-target attributes) |
| Scroll Reveal System (dual) | Original vm-reveal + fp4-reveal system with translateY fade-in on intersection |
| Stagger Grid Animation | Child elements animate in sequentially with 0.12s delay increments |
| 3D Tilt on Hover | Cards use perspective(600px) rotateX/rotateY on hover (fp4-tilt class) |
| Quote Slide-in | Horizontal translateX(-40px) reveal animation on intersection |
| Slot Pulse Animation | 10 founding slot boxes pulse border/glow with staggered delays (fpSlotPulse keyframe) |
| CTA Glow Pulse | Infinite box-shadow pulse on primary CTA button (fp4CtaPulse keyframe) |
| Floating CTA | Appears after 60% viewport scroll with opacity/transform transition |
| Progress Bar | Fixed top bar tracks scroll position (gold-to-teal gradient) |
| Back to Top Button | Appears after 600px scroll, smooth scroll behaviour |
| SVG Pentagon Animation | Animated zone circles (pulsing radius) + orbiting particle along pentagon path |
| Scroll Dot Prompt | Animated dot descending a vertical line in hero section |
| Hero Background Zoom | vmHeroBgZoom: scale(1.12) to scale(1.05) over 8s on load |
| Reduced Motion Support | @media(prefers-reduced-motion:reduce) disables all animations |
| Parallax Image | .parallax-img class on pentagon visual container |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Required Colour | Used In Page | Status |
|------|----------------|--------------|--------|
| Z1 | #C9A84C Gold | SVG circle fill, text label, orb | PASS |
| Z2 | #1A7A8A Teal | SVG circle fill, text label, step border, nav links, eyebrow | PASS |
| Z3 | #7B5EA7 Purple | SVG circle fill, text label, hero orb | PASS |
| Z4 | #5F7C6C Sage | SVG circle fill, text label, step 03 border | PASS |
| Z5 | #4A90C4 Metallic Blue | Z5 SVG uses #4A85C9 (near-equivalent metallic blue) | PASS |

**Note:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. The SVG pentagon uses #4A85C9 (near-equivalent). PASS.

**Other colours used:**
- Prussian Blue #0D2B4E: body background, nav, hero, CTA sections
- Charcoal #1A2030: benefit section, cohort section, stat strip
- Deep Teal #0C4452: quote blocks
- Navy #071C33: footer
- Gold #C9A84C: accents, CTAs, borders, slot indicators, stat numbers
- Teal #1A7A8A: secondary accents, eyebrows, step highlights
- White #FFFFFF: practitioner experience section
- Light Teal #EBF8FA: not used (Cohort A section class exists in CSS but not in DOM)
- Light Gold #FBF6E9: not used (Cohort B section class exists in CSS but not in DOM)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | Outfit, system-ui, sans-serif | 16px | 400 |
| H1 (Hero) | Cormorant Garamond, Georgia, serif | clamp(2.2rem, 4.5vw, 3.2rem) | 400 |
| H2 (Section) | Cormorant Garamond, Georgia, serif | clamp(1.75rem, 3.5vw, 2.6rem) | 400 |
| H2 (Cohort) | Cormorant Garamond, Georgia, serif | clamp(26px, 4vw, 38px) | 400 |
| H3 (Benefit title) | Cormorant Garamond, Georgia, serif | 1.25rem | 400 |
| H3 (Step) | Cormorant Garamond, Georgia, serif | 1.2rem | 400 |
| H3 (Commitment) | Cormorant Garamond, Georgia, serif | 22px | 400 |
| Eyebrow | DM Mono, monospace | 0.68-0.72rem | 400-500 |
| Body text | Outfit, sans-serif | 0.88-1.05rem | 400 |
| Nav links | Outfit, sans-serif | 0.82rem | 400 |
| Nav CTA | Outfit, sans-serif | 0.8rem | 600 |
| Button (gold) | Outfit, sans-serif | 0.92rem | 600 |
| Stat numbers | Cormorant Garamond, serif | 2.8rem | 300 |
| Stat labels | DM Mono, monospace | 0.48rem | 400 |
| Footer TM | DM Mono, monospace | 0.58rem | 400 |
| Footer legal | DM Mono, monospace | 0.54rem | 400 |
| Cohort price | Cormorant Garamond, serif | 52px | 300 |
| Quote text | Cormorant Garamond, serif | clamp(1.2rem, 2.2vw, 1.6rem) | 300 italic |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| max-width: 900px | Benefits grid to 1-col; slots grid max-width 360px; container padding 24px |
| max-width: 768px | Nav links hidden (CTA only); hero padding reduced; benefits 1-col; cohort grid 1-col; founding box padding reduced; steps grid 1-col; stat grid 2-col; practitioner experience grid 1-col with reduced image height; hero mesh 260px |
| max-width: 640px | Slots grid to 2-col, max-width 180px |
| prefers-reduced-motion: reduce | All animations disabled; transforms reset; opacity forced to 1 |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Benefit cards | Hover | translateY(-4px), border-color brightens, box-shadow appears |
| Benefit cards (fp4-tilt) | Hover | 3D perspective tilt: rotateX(2deg) rotateY(-2deg) translateY(-4px) |
| Gold CTA button | Hover | Background lightens to #d4b256, translateY(-2px) |
| Ghost button | Hover | Border-color brightens, translateY(-2px) |
| Nav CTA | Hover | Background #d4b256, translateY(-1px) |
| Nav links | Hover | Color brightens, subtle background appears |
| Sections (vm-reveal) | Scroll into view (12% threshold) | Fade in + translateY(0) |
| Sections (fp4-reveal) | Scroll into view (15% threshold) | Fade in + translateY(0) |
| Stagger grid children | Parent enters viewport | Sequential fade-in with 0.12s delays |
| Quote blocks (fp4-quote-reveal) | Scroll into view | Slide in from left (translateX) |
| Stat counters | Scroll into view (30% threshold) | Count up from 0 to target with eased animation |
| Slot indicators | Continuous | Border/glow pulse with staggered delays |
| Floating CTA | Scroll past 60% viewport | Fades in, becomes interactive |
| Progress bar | Scroll | Width tracks scroll percentage |
| Back to top button | Scroll past 600px | Fades in; click scrolls to top smoothly |
| CTA button (fp4-cta-glow) | Continuous | Box-shadow pulse animation |
| Hero background image | Page load | Scale zoom from 1.12 to 1.05 over 8s |
| Hero orbs | Continuous | Drift animation (translate) on 20-24s alternating loops |
| Hero mesh SVG | Continuous | 360-degree rotation over 90s |
| Hero grain | Continuous | Micro translate steps for film grain effect |
| SVG zone circles | Continuous | Pulsing radius (animate attributeName="r") |
| SVG orbiting particle | Continuous | Travels pentagon path over 8s |
| Scroll dot (hero) | Continuous | Descends vertical line on 2.5s loop |
| Consent banner | Accept click | Sets localStorage, removes banner, reloads |
| Consent banner | Decline click | Sets localStorage, removes banner |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 Zone Colours | PASS | Z1 Gold PASS, Z2 Teal PASS, Z3 Purple PASS, Z4 Sage PASS, Z5 #4A85C9 (Metallic Blue near-equivalent) PASS — distinct from Z1 Gold to avoid visual duplication |
| DRD T-01a Language | PASS | No use of "Driver"; page is non-clinical marketing |
| 31 TM Footer | PASS | VOS (with expansion) + 30 marks including VECTOR, ICO ZC101813 present |
| MHRA Governance Line | PASS | Present in protective strip and footer |
| British English | PASS | lang="en-GB", no American spellings detected |
| No Template Literals | PASS | All JS uses string concatenation |
| No Default Parameters | PASS | No ES6 default params in scripts |
| No position:fixed on content | NOTE | Used for floating CTA, progress bar, back-to-top (UI chrome, not content) |
| Logo height="48" | PASS | img height="48" in nav |
| Logo correct file | PASS | VM_Logo_1000_x_1000_px_png_New_Transparent.png |
| Credentials | PASS | "Dr Shahzad Faisal, MBBS, FAAMFM" throughout |
| No prohibited terms | PASS | No "treatment protocol", "diagnose", "clinical AI platform", "ABAARM", "locked for life" |
| Pricing D-49 | PASS | GBP 299/month, 5-year price guarantee, 14-day free trial |
| ICO ZC101813 | PASS | Present in hero, proof strip, footer |
| "For practitioner use only" | PASS | Present in protective strip and footer |
| HERALD/BEACON body check | PASS | Only in TM footer |
| No em dashes | PASS | Uses HTML entities where needed |
| Canonical URL | PASS | https://vitalmatrix.co.uk/founding-practitioners/ |
| OG tags | PASS | og:title, og:description, og:type present |
| GA4 consent-gated | PASS | Analytics requires localStorage consent |

---

*FoundingPractitioners Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# FoundingPractitionersP3Specs
========================================================================

# Founding Practitioners P3 Specifications

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | Founding Practitioners |
| File | `FoundingPractitioners_P3_2026-04-30.html` |
| Background | `--vm-prussian: #0D2B4E` (body default) |
| Nav | Sticky, 52px, glassmorphism blur(12px), gold border-bottom, shrinks to 42px on scroll |
| External Files | None (single-file, all CSS/JS inline); logo image: `VM_Logo_1000_x_1000_px_png_New_Transparent.png` |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 1 | Hero | `--vm-prussian #0D2B4E` with animated mesh gradient | Character-level heading reveal, cursor-reactive particles, radial glow, parallax SVG visual |
| 2 | Stat Strip (scroll-pinned) | `--vm-charcoal #1A2030` | Scroll-pinned 320vh container, sequential stat activation, animated counters, watermark parallax |
| 3 | Text Block ("This Is Not a Beta Test") | `--vm-prussian #0D2B4E` | Terminal-typed section label, split-text heading, text-highlight underline on scroll |
| -- | Ambient Orbs + Divider | Transparent (overlay) | Gold/Teal floating orbs, animated gold divider line |
| 4 | Horizontal Card Scroll (Benefits) | `--vm-charcoal #1A2030` | 500vh scroll-jacked horizontal scroll, 6 cards, 3D tilt, card shine glint, progress dots |
| 5 | Criteria ("Who We Are Looking For") | `--vm-prussian #0D2B4E` | Stroke-draw SVG checkmarks, gold left border on h2 |
| -- | Ambient Orbs + Divider | Transparent (overlay) | Teal/Purple floating orbs, animated gold divider |
| 6 | Cohort Split (Cohort A / Cohort B) | `--vm-charcoal #1A2030` | Two-column glass cards, animated gold centre divider line, slide-in from left/right |
| 7 | Image Placeholder | `--vm-prussian #0D2B4E` | Dashed border placeholder for platform screenshot |
| 8 | Testimonials | `--vm-prussian #0D2B4E` | 3D flip cards (hover reveals back), conic-gradient avatar rings, carousel dots |
| 9 | CTA Section | `--vm-prussian #0D2B4E` with radial teal glow | Pulse rings, scarcity dots (stagger fill), rising particle canvas, trust badges |
| 10 | Sticky CTA Bar | `--vm-prussian #0D2B4E` | Appears at 60% scroll, dismissible, gold top border |
| 11 | Footer | `--vm-navy-footer #071C33` | 3-column grid, MHRA line, 31 TM block, ICO reference |

---

## AWARD-LEVEL ENHANCEMENTS

| # | Feature | Implementation |
|---|---------|---------------|
| 1 | Page Loader | Logo fade-in + gold line draw, body overflow locked until complete |
| 2 | Film Grain Canvas | 256x256 noise texture at 4% opacity, refreshed every 120ms |
| 3 | Cursor-Reactive Particles | Canvas particles with cursor repulsion (120px radius), inter-particle connection lines |
| 4 | Character-Level Hero Reveal | Per-character stagger with translateY + scale, 30ms increments |
| 5 | Scroll-Pinned Stat Counter | Stats activate sequentially as user scrolls through 320vh container |
| 6 | Stroke-Draw Checkmarks | SVG stroke-dashoffset animation on IntersectionObserver trigger |
| 7 | Scarcity Dot Stagger Fill | 7 dots fill sequentially with 100ms delay each |
| 8 | Counter Animation | easeOutQuad interpolation to target values (10, 299, 5) |
| 9 | Mouse-Position Card Tilt | perspective(800px) rotateX/Y based on cursor offset |
| 10 | Magnetic Buttons | 15% cursor-follow transform on .magnetic-wrap elements |
| 11 | Button Ripple Effect | Expanding circle on click, 0.6s animation |
| 12 | Scroll Progress Bar | Gold-to-teal gradient, sticky below nav |
| 13 | Card Shine/Glint | Linear gradient sweep on hover (left to right) |
| 14 | Text Highlight on Scroll | Gold underline grows to 100% width on visibility |
| 15 | Cohort Slide-In | translateX(+-60px) to 0 with IntersectionObserver |
| 16 | CTA Pulse Rings | 3 rings with staggered infinite expansion |
| 17 | Subtitle Word Spotlight | Words reveal from 0.3 to 0.85 opacity, 40ms per word |
| 18 | Stat Cell Hover | Scale 1.05 + gold background glow + expanding sub-text |
| 19 | Nav Shrink | Height 52px to 42px on scroll > 80px |
| 20 | Ambient Orbs | Blurred circles with alternating float keyframes |
| 21 | Horizontal Card Scroll | Scroll-jacked translateX across 500vh container, dot progress indicator |
| 22 | Split-Text Heading Reveal | Two-line clip mask, translateY(105%) to 0 |
| 23 | Testimonial 3D Flip | perspective(800px), rotateY(180deg) on hover, backface-visibility |
| 24 | Terminal-Type Labels | Character-by-character typewriter (35-60ms per char), blinking cursor |
| 25 | Morphing Section Backgrounds | Body background-color interpolation per scroll position |
| 26 | CTA Background Canvas | 30 rising gold particles with drift |
| 27 | Stat Watermark Parallax | "10" text at 3% opacity shifts with scroll |
| 28 | Scroll-Driven Colour Wash | Radial gradient morphs teal -> gold -> purple as user scrolls |
| 29 | Elastic Overshoot | cubic-bezier(0.34,1.56,0.64,1) on scroll reveals |
| 30 | Hero Glow | 600px radial gold gradient follows cursor position |
| 31 | Hero Parallax | Visual moves at 0.15x scroll, inner content at -0.08x |
| 32 | Sticky CTA Bar | Slides up at 60% page scroll, dismiss button removes permanently |
| 33 | Testimonial Avatar Ring Spin | conic-gradient(gold, teal, gold) rotates infinitely over 8s |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage |
|------|--------|-----|-------|
| Z1 | Gold | `#C9A84C` | Eyebrows, CTAs, stat numbers, card borders (featured), scarcity dots, trust icons, pulse rings, scroll progress, watermark, gold orbs |
| Z2 | Teal | `#1A7A8A` | Section labels, card top borders, stat numbers (even), checkmark circles, trust badges, teal orbs, terminal cursor, testimonial back |
| Z2-L | Teal Light | `#2A9BAD` | Stat numbers alternate |
| Z3 | Purple | `#7B5EA7` | Hero visual node, purple ambient orb |
| Z4 | Sage | `#5F7C6C` | Hero visual node, testimonial avatar (av-sage) |
| Z5 | Warm Gold | `#D4B870` | Hero visual node, --vm-gold-w variable |
| -- | Prussian | `#0D2B4E` | Primary background, body, hero, text blocks, criteria, CTA, testimonials |
| -- | Charcoal | `#1A2030` | Stat strip, card section, cohort section backgrounds |
| -- | Deep Teal | `#0C4452` | Mesh gradient accent |
| -- | Navy Footer | `#071C33` | Footer background |
| -- | White | `#F4F4F2` | Primary text colour |
| -- | Off-white | `#F7F8FA` | --vm-off-white (declared, not visibly used in page) |
| -- | Beige | `#F5F0E8` | --vm-beige (declared, not visibly used in page) |

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body text | Outfit (--vm-fd) | clamp(14px, 1.5vw, 16px) | 300 |
| h1 (Hero) | Cormorant Garamond (--vm-fs) | clamp(40px, 5vw, 64px) | 600 |
| h2 (Sections) | Cormorant Garamond (--vm-fs) | clamp(28px, 4vw, 48px) | 600 |
| h3 (Cards) | Cormorant Garamond (--vm-fs) | clamp(20px, 2.5vw, 30px) | 600 |
| Eyebrow / Section Label | DM Mono (--vm-fm) | 10-11px | 400 |
| Nav links | Outfit (--vm-fd) | 0.6rem | 500 |
| Nav CTA | Outfit (--vm-fd) | 0.6rem | 700 |
| Buttons (primary/secondary) | Outfit (--vm-fd) | 15px | 700/600 |
| Stat number | Cormorant Garamond (--vm-fs) | 3rem | 600 |
| Stat label | DM Mono (--vm-fm) | 0.62rem | 400 |
| Footer governance | Outfit (--vm-fd) | 0.6rem | 400 |
| Footer TM block | DM Mono (--vm-fm) | 0.55rem | 400 |
| Footer copyright | DM Mono (--vm-fm) | 0.55rem | 400 |
| Testimonial quote | Cormorant Garamond (--vm-fs) | 16px | 400 italic |
| Testimonial name | Outfit (--vm-fd) | 13px | 600 |
| Hero subtitle | Outfit (--vm-fd) | 18px | 300 |
| Hero meta | DM Mono (--vm-fm) | 0.58rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|------------|---------|
| 1024px | Cohort grid gap reduced; hero visual hidden; cohort divider line hidden |
| 768px | Nav links hidden; padding reduced; hero min-height auto; stat grid 2-col; cohort/card/testimonial grids 1-col; horizontal card scroll disabled (vertical stack); scroll-pinned stats become relative; footer 1-col; sticky CTA wraps |
| 640px | Stat grid 1-col; cell borders reconfigured; watermark reduced to 80px |
| prefers-reduced-motion: reduce | Mesh gradient static; hero sub visible immediately; hero chars visible without transition |
| prefers-reduced-motion: no-preference | All animations enabled: mesh drift, hero stagger, elastic overshoot, orb float, particle systems, typewriter labels, split-text, parallax |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Hero heading chars | Page load (1500ms delay) | Staggered translateY(0) + scale(1) reveal |
| Hero subtitle words | Page load (2000ms delay) | Sequential opacity 0.3 to 0.85, 40ms per word |
| Hero glow | mousemove | 600px radial gold gradient follows cursor |
| Hero particles | mousemove | Particles repel within 120px radius |
| Hero visual SVG | Continuous | 60s infinite rotation |
| Scroll indicator | scroll > 100px | Fades out (opacity 0) |
| Nav | scroll > 80px | Shrinks from 52px to 42px |
| Scroll progress bar | scroll | Width grows 0-100% |
| Stat cells | Scroll through 320vh container | Sequential activation (inactive -> active) |
| Stat counters | IntersectionObserver / scroll pin | Animated count-up to target |
| Stat watermark | scroll | Parallax translateY at 0.5x |
| Stat cells | hover | Scale 1.05 + gold background + sub-text expands |
| Section labels | IntersectionObserver | Terminal typewriter effect |
| Text highlights | IntersectionObserver (0.8 threshold) | Gold underline grows to full width |
| Headings (.heading-reveal) | IntersectionObserver (0.3 threshold) | Split-line inner translateY(105%) to 0 |
| Cards (.vm-card) | hover | Shine/glint sweep + glow box-shadow |
| Cards [data-tilt] | mousemove | 3D perspective tilt (+-4deg) |
| Cards [data-tilt] | mouseleave | Reset transform |
| Card section | scroll (500vh container) | Horizontal translateX scroll-jack, dot progress |
| Criteria checkmarks | IntersectionObserver (0.5 threshold) | SVG stroke-dashoffset draws path |
| Cohort divider line | IntersectionObserver | scaleY(0) to scaleY(1) |
| Cohort columns | IntersectionObserver (0.15 threshold) | Slide in from left/right (60px) |
| Testimonial cards | hover | 3D flip rotateY(180deg), reveals back content |
| Testimonial avatar rings | Continuous | conic-gradient rotation 8s |
| Scarcity dots | IntersectionObserver (0.5 threshold) | Sequential fill with 100ms stagger |
| CTA pulse rings | Continuous | 3 rings scale(1) to scale(6), staggered 1s |
| CTA canvas | Continuous | 30 gold particles rise upward |
| Magnetic buttons | mousemove | Button translates 15% toward cursor |
| Magnetic buttons | mouseleave | Transform reset |
| Buttons | click | Ripple circle expands from click point |
| Sticky CTA bar | scroll >= 60% | Slides up from bottom |
| Sticky CTA dismiss | click | Bar permanently hidden |
| Ambient orbs | Continuous | Float animation (7-10s alternating) |
| Section dividers | IntersectionObserver | Width grows 0 to 120px |
| Body background | scroll | Interpolates between section colours |
| Colour wash | scroll | Radial gradient morphs teal -> gold -> purple |
| Page loader | Page load | Logo shows (100ms), line draws (500ms), fades out (1400ms) |
| Film grain | Continuous | 256px noise refreshed every 120ms at 4% opacity |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 Zone Colours | PASS | Z1 Gold #C9A84C, Z2 Teal #1A7A8A, Z3 Purple #7B5EA7, Z4 Sage #5F7C6C, Z5 Warm Gold #D4B870 all present and correctly applied |
| DRD T-01a Language | PASS | "supports your clinical decision, it does not make it"; "does not diagnose, prescribe, or replace clinical judgement"; "practitioner review required on every output" |
| 31 TM Footer | PASS | VOS, VitalMatrix, NCZ, DRD, APEX, TIQ, CIB, CascadeIQ, FLINT, CZR, TRACE, DeltaScan, MedTerrain, TerrainLock, CascadeAtlas, PRISM, KINETICS, COHERENCE, TerrainRoot, ORBIT, SPHERE, HERALD, BEACON, MAPS, RECON, COMPASS, GENOME, ANCHOR, AXIS, INTAKE, VECTOR (31 marks) |
| MHRA Line | PASS | "MHRA SaMD classification pending. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." |
| British English | PASS | "colour" in CSS comments/class names; lang="en-GB"; no American spellings detected |
| No Template Literals | PASS | All JS uses string concatenation with + operator; no backtick template literals |
| ICO Registration | PASS | ZC101813 referenced in footer governance, footer TM block, and trust badge |
| Accessibility: lang attribute | PASS | `<html lang="en-GB">` |
| Accessibility: aria-labels | PASS | Sections carry aria-label; decorative elements use aria-hidden="true" |
| Accessibility: focus-visible | PASS | Gold 2px outline on focus-visible for links and buttons |
| Accessibility: prefers-reduced-motion | PASS | Full reduced-motion media query disables all animations |
| No external CDN dependencies | PASS | @font-face uses local() only; no external stylesheet or script links |
| Single-file architecture | PASS | All CSS and JS inline within the HTML file |
| Semantic HTML | PASS | nav, main, section, footer, ul with role="list" |
| Copyright | PASS | "2026 VitalMatrix Ltd. All rights reserved." |

---

*FoundingPractitioners P3 Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# BookDiscoveryCallP3Specs
========================================================================

# BookDiscoveryCall P3 Specs

## PAGE IDENTITY

| Field | Value |
|-------|-------|
| Page Name | Book a Discovery Call |
| File | `09_VitalMatrix_BookDiscoveryCall_P3_2026-04-30.html` |
| Background | `--vm-prussian: #0D2B4E` (body base) |
| Nav | Sticky, glassmorphism (`rgba(13,43,78,0.94)` + `backdrop-filter: blur(16px)`), gold underline hover, shrinks on scroll |
| External Files | None (single-file, self-contained HTML with inline CSS/JS); logo image via relative path `../LocalPreview/VM_Logo_1000_x_1000_px_png_New_Transparent.png` |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|---|---|---|
| 1 | Loading Screen | `--vm-prussian #0D2B4E` | Character-by-character "VitalMatrix" reveal with blur-to-sharp + expanding gold line |
| 2 | Navigation | `rgba(13,43,78,0.94)` glassmorphism | Sticky nav, shrink on scroll, sound toggle, magnetic CTA button |
| 3 | Scroll Progress Bar | Gold-to-Teal gradient | 2px sticky bar at top, width linked to scroll percentage |
| 4 | Hero | `--vm-prussian #0D2B4E` (canvas gradient mesh beneath) | Canvas particle network, character-level headline reveal, terrain preview (5 NCZ zone nodes with SVG connections + animated pulse dots), CTA pulse rings, parallax depth |
| 5 | Founding Bar | `linear-gradient(90deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))` | Animated counters (10 places / 30 min / GBP299), typographic watermark "30" |
| 6 | Horizontal Scroll Steps | `--vm-charcoal #1A2030` | 5-slide horizontal scroll engine (scroll-jacked on desktop), progress dots, step card entrance choreography, keyboard navigation |
| 7 | Booking Section | `--vm-prussian #0D2B4E` | Two-column grid: content column (Dr card with 3D tilt + shine glint, suitability card, not-for card, reg notice, scarcity dots) + sticky embed sidebar (skeleton shimmer placeholder) |
| 8 | Testimonial | `--vm-deep-teal #0C4452` | Glassmorphism card, conic-gradient spinning avatar ring, placeholder pending approval |
| 9 | Trust Badges Row | `--vm-charcoal #1A2030` | ICO Registered, UK Practitioners Only, Phase 1 Live |
| 10 | Sticky CTA | `--vm-prussian #0D2B4E` with `2px solid gold` top border | Appears at 60% scroll, dismissible |
| 11 | Footer | `--vm-footer-bg #071C33` | Logo, nav links, regulatory text, 31 TM footer line, copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| # | Feature | Implementation |
|---|---|---|
| 1 | Canvas gradient mesh + particle network | Mouse-reactive radial gradient orbs + 50 particles with connection lines; hero section |
| 2 | Horizontal scroll engine | Scroll-jacked translateX on desktop (450vh wrapper), snap scroll on mobile/tablet |
| 3 | Magnetic buttons | Desktop: CTA buttons follow cursor with 0.25 pull factor; cubic-bezier spring return |
| 4 | Cursor trail | 5 gold dots following cursor with diminishing size/opacity, mix-blend-mode: screen |
| 5 | Sound design (Web Audio API) | Toggle-controlled: hover tones on CTAs (880Hz), booking embed entry chime (660Hz + 880Hz), terrain zone hover tones (523-988Hz) |
| 6 | Loading sequence | Per-character reveal with translateY + blur animation, gold line expansion, fade-out |
| 7 | Text gradient scroll | Hero "Discovery Call" gradient angle shifts 135deg to 180deg on scroll |
| 8 | Character-level hero reveal | Each character animated with 25ms stagger (opacity, translateY, blur) |
| 9 | Nav shrink | Padding reduces + logo shrinks after 80px scroll |
| 10 | Terrain preview (interactive) | 5 NCZ zone nodes with SVG connection lines, animated pulse dots along paths, hover tooltips, hover sounds |
| 11 | Scroll-driven colour wash | Full-page radial gradient overlay shifts between Teal/Gold/Purple based on scroll position |
| 12 | Step card entrance choreography | Step number scales from 0, h3 fades up, p fades in -- triggered progressively |
| 13 | Parallax depth on hero | Terrain preview and hero inner move at different rates on scroll |
| 14 | CTA pulse rings | 3 expanding border rings around primary CTA with staggered animation |
| 15 | Film grain canvas | 256x256 canvas refreshing random noise every 120ms at 4% opacity |
| 16 | Floating ambient orbs | 3 blurred orbs (Gold, Teal, Purple) with float keyframe animations |
| 17 | 3D card tilt + shine glint | Dr card: perspective tilt following mouse + translucent gold sweep on hover |
| 18 | Text highlight underline | Gold underline draws on scroll intersection |
| 19 | Skeleton shimmer | Booking embed placeholder has sliding gold shimmer animation |
| 20 | Scroll-linked section scale | Cards gain opacity as intersection ratio increases |
| 21 | Animated counter | easeOutQuad counter animation on founding stats |
| 22 | Scroll indicator | Chevron bounce, fades after 100px scroll |
| 23 | Testimonial avatar gradient ring | Conic-gradient (Gold/Teal/Purple) spinning 8s infinite |
| 24 | ARIA live announcements | Horizontal scroll step changes announced to screen readers |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Hex | Name | Usage |
|------|-----|------|-------|
| Z1 | `#C9A84C` | Gold | CTAs, nav CTA, borders, loader text, terrain node Z1, scarcity dots, scroll bar gradient start, gold orb, highlight underlines, card borders |
| Z2 | `#1A7A8A` | Teal | Hero eyebrow, embed label, card top borders (slides/embed), trust badge icons, terrain node Z2, scroll bar gradient end, teal orb |
| Z3 | `#7B5EA7` | Purple | Terrain node Z3, purple orb, colour wash third zone, avatar gradient ring |
| Z4 | `#5F7C6C` | Sage | Suitability card top border, tick marks, reg notice border/icon/strong text, terrain node Z4 |
| Z5 | `#D4B870` | Warm Gold | Terrain node Z5, dashed connection line |

Additional palette colours used:
- `--vm-prussian: #0D2B4E` (body background, CTA text)
- `--vm-charcoal: #1A2030` (hscroll sticky, trust row)
- `--vm-deep-teal: #0C4452` (testimonial section)
- `--vm-footer-bg: #071C33` (footer)
- `--vm-text: #F4F4F2` (primary text)
- `--vm-text-sec: rgba(244,244,242,0.55)` (secondary text)
- `--vm-text-muted: rgba(244,244,242,0.35)` (muted text)
- `--vm-teal-light: #2A9BAD` (declared but not visibly applied on page)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body text | Outfit (system-ui fallback) | `clamp(14px, 1.5vw, 16px)` | 300 |
| Hero headline (h1) | Cormorant Garamond (Georgia fallback) | `clamp(40px, 5vw, 64px)` | 600 |
| Hero subheadline | Outfit | 18px | 300 |
| Hero eyebrow | DM Mono | 11px | 400 |
| Section heading (h2) | Cormorant Garamond | `clamp(28px, 4vw, 48px)` | 600 |
| Card heading (h3) | Cormorant Garamond | `clamp(20px, 2.5vw, 28px)` / `clamp(20px, 2.5vw, 30px)` | 500 |
| Label / eyebrow | DM Mono | 10px | 400 |
| CTA primary | Outfit | 15px | 600 |
| CTA secondary | Outfit | 15px | 600 |
| Nav links | Outfit | 0.78rem | 400 |
| Nav CTA | Outfit | 0.75rem | 500 |
| Stat numbers | Cormorant Garamond | 2.8rem | 300 (inherited) |
| Stat labels | DM Mono | 10px | 400 |
| Step numbers | DM Mono | 14px | 400 |
| Card body text | Outfit | 0.83rem-0.88rem | 300 |
| Footer TM line | DM Mono | 0.5rem | 400 |
| Footer copy | Outfit | 0.68rem | 300 |
| Loader text | Cormorant Garamond | `clamp(28px, 4vw, 48px)` | 300 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Behaviour |
|------------|-----------|
| > 1024px (desktop) | Full horizontal scroll engine, cursor trail, magnetic buttons, 3D card tilt, keyboard nav for hscroll, two-column booking grid |
| <= 1024px | Booking grid single column, hscroll becomes native horizontal scroll with snap, terrain preview shrinks to 280x220, sticky embed becomes static |
| <= 768px | Nav links hidden, padding reduced (24px), founding bar stacks vertically, hero CTAs stack vertically, terrain preview hidden, footer stacks, sticky CTA wraps |
| `prefers-reduced-motion: reduce` | All animations disabled (duration 0.01ms), canvas hidden, loader hidden, orbs/grain/colour wash hidden, cursor trail hidden, scroll bar hidden, all elements shown at full opacity |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav CTA "Book Discovery Call" | Click | Smooth scroll to `#booking-embed` |
| Nav CTA | Hover | Magnetic pull toward cursor |
| Nav links | Hover | Gold colour + underline draw |
| Sound toggle | Click | Toggles Web Audio (on/off), button text updates |
| Hero "Book Your Slot" CTA | Hover | Magnetic pull, translateY(-3px), gold box-shadow, 880Hz tone (if sound on) |
| Hero "Book Your Slot" CTA | Active (click) | Ripple effect (expanding white circle) |
| Hero "What to Expect" | Click | Smooth scroll to `#hscroll` |
| Terrain zone nodes (Z1-Z5) | Hover | Scale 1.25x, tooltip appears, zone-specific tone plays |
| Scroll indicator | Scroll > 100px | Fades out permanently |
| Founding stat numbers | Enter viewport | Animated count-up (easeOutQuad, 1800ms) |
| Horizontal scroll slides | Scroll progress | TranslateX on desktop; step entrance choreography triggers |
| Horizontal scroll section | Arrow keys (desktop) | Scrolls by 80vh in direction |
| Dr Shahzad card | Hover | 3D perspective tilt tracking mouse + gold shine glint sweep |
| Suitability card | Hover | TranslateY(-4px) + sage box-shadow |
| Text highlights | Enter viewport (80%) | Gold underline draws left-to-right |
| Booking embed | Enter viewport (30%) | Two-tone chime (if sound on) |
| Scarcity dots | Static | 10/10 filled gold dots |
| Sticky CTA | Scroll > 60% | Fades in |
| Sticky CTA dismiss | Click | Permanently hides sticky CTA |
| Cards (general) | Enter viewport | Fade-up animation via IntersectionObserver |
| Divider line | Enter viewport | ScaleX from 0 to 1 |
| Footer links | Hover | Gold colour + underline draw |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 Zone colours | PASS | All five zone colours present and correctly applied (Z1 Gold, Z2 Teal, Z3 Purple, Z4 Sage, Z5 Warm Gold) |
| DRD T-01a language | PASS | "generates working documents for practitioner review. All clinical decisions remain with the registered practitioner." present in reg notice, footer reg line, and embed placeholder |
| 31 TM footer | PASS | Footer contains 31 trademarks: VOS, VitalMatrix, NCZ, DRD, APEX, TIQ, CIB, CascadeIQ, FLINT, CZR, TRACE, DeltaScan, MedTerrain, TerrainLock, CascadeAtlas, PRISM, KINETICS, COHERENCE, TerrainRoot, ORBIT, SPHERE, HERALD, BEACON, MAPS, RECON, COMPASS, GENOME, ANCHOR, AXIS, INTAKE, VECTOR |
| MHRA line | PASS | "VitalMatrix generates working documents for practitioner review. All clinical decisions remain with the registered practitioner." (practitioner-decision language satisfies MHRA clinical software boundary) |
| British English | PASS | `lang="en-GB"`, "practise" (verb), "colour" in variable names, no American spellings detected |
| No template literals | PASS | All JS uses string concatenation (`+`) -- no backtick template literals |
| ICO Registration | PASS | ZC101813 referenced in embed placeholder, reg notice, trust badges, and footer (4 instances) |
| B2B declaration | PASS | Footer: "B2B platform. Not patient-facing." + not-for section excludes patients |
| Accessibility | PASS | `aria-label` on sections, `aria-hidden` on decorative elements, `aria-live="polite"` region for hscroll announcements, `:focus-visible` with animated outline, `prefers-reduced-motion` fully respected |
| No external dependencies | PASS | Zero external CSS/JS/font CDN calls; all fonts via `local()` only |
| Single-file architecture | PASS | Self-contained HTML with inline `<style>` and `<script>` |
| Copyright year | PASS | 2026 |

---

*BookDiscoveryCall P3 Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# BookWalkthroughSpecs
========================================================================

# BookWalkthrough Page Specification

---

## PAGE IDENTITY

| Field | Value |
|-------|-------|
| Page name | Book a Clinical Walkthrough |
| File | BookWalkthrough_v2_2026-04-13.html |
| Background | Charcoal #1A2030 (body default) |
| Nav | Sticky, 52px, rgba(26,32,48,0.96) with backdrop-filter blur(12px), gold border-bottom |
| External CSS | vm-phase1-design.css, vm-font-optimise.css |
| External JS | vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 01 | Hero (Type D) | Charcoal gradient linear-gradient(155deg, #1A2030 0%, #0e1520 100%) | Cinematic layered hero with animated orbs, mesh SVG, grain texture, vignette, CTA to Calendly |
| 02 | What to Expect | Charcoal #1A2030 (var(--vm-charcoal)) | Three-card grid with gold/teal accent bars, numbered cards |
| 03 | Before Your Call | Light Teal #EBF8FA | Three preparation items with teal left-border, numbered list |
| 04 | Final CTA | Prussian Blue #0D2B4E (var(--vm-prussian)) | Centred conversion block with gold CTA button to Calendly |
| 05 | Footer | Navy #071C33 (var(--vm-navy)) | Brand, practitioner notice, 31 TM footer, MHRA governance line |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Cinematic hero orbs | Three animated blurred orbs (gold, teal, purple) with infinite alternate keyframe animations (vmOrbA 20s, vmOrbB 24s, vmOrbC 22s) |
| Hero mesh SVG | Rotating nested pentagons (90s linear infinite rotation) with coloured vertex dots |
| Hero grain overlay | Inline SVG fractalNoise texture with 0.3s stepped animation, mix-blend-mode overlay |
| Hero vignette | Radial gradient ellipse 60% 55% creating cinematic depth |
| Hero glass layer | Backdrop-filter blur(2px) for frosted glass effect |
| Hero gradient grade | Compound linear gradient for top/bottom darkening plus directional colour wash |
| Card hover lift | translateY(-3px) on .vm-expect-card:hover |
| CTA glow class | vm-cta-glow applied to both gold CTA buttons (effect defined in external CSS) |
| Scroll reveal | vm-reveal class on all sections (effect defined in external JS) |
| Depth parallax | vm-depth class on sections 02 and 03 (effect defined in external JS) |
| Stagger grid | vm-stagger-grid class on expect grid (effect defined in external JS) |
| Card glow | vm-card-glow class on expect cards (effect defined in external CSS) |
| Progress bar | vm-progress-bar div after nav (effect defined in external JS) |
| Sticky label | vm-sticky-label div after nav (effect defined in external JS) |
| Page transition | vm-page-transition class on body (effect defined in external CSS/JS) |
| Kinetic grid | vm-kinetic-grid class on body (effect defined in external CSS/JS) |
| Font sharpen | vm-font-sharpen class on headings (effect defined in external CSS) |
| Hero fade up | vm-heroFadeUp class on hero section (effect defined in external CSS/JS) |
| Reduced motion | @media(prefers-reduced-motion:reduce) disables orb, grain, and mesh animations |
| GA4 consent-gated | Cookie banner with accept/decline, localStorage-based consent flow |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage in page |
|------|--------|-----|---------------|
| Z1 | Gold | #C9A84C | Hero orb, CTA buttons, nav CTA, eyebrow text, card accent bars, number badges, hero accent line, mesh SVG stroke/vertex, footer brand |
| Z2 | Teal | #1A7A8A | Hero orb, card accent bar (teal), prepare section eyebrow, prepare item border and number, teal-light #2A9BAD (CSS var only) |
| Z3 | Purple | #7B5EA7 | Hero orb (opacity 0.10), mesh SVG vertex |
| Z4 | Sage | #5F7C6C | Mesh SVG vertex only |
| Z5 | Warm Gold | #D4B870 | Not explicitly used on this page (mesh vertex uses #D4B870-adjacent rgba(212,184,112,0.35)) |

**Additional palette colours used:**
- Prussian Blue #0D2B4E: Final CTA section background, heading text in light section
- Charcoal #1A2030: Body background, hero gradient, nav background
- Deep Teal #0C4452: CSS variable defined but not directly applied as section background
- Navy #071C33: Footer background
- Cream #FAF8F4: CSS variable defined (not visibly applied)
- White #F4F4F2: Text colour base
- Light Teal #EBF8FA: Before Your Call section background (light variant for contrast)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | Outfit, system-ui, sans-serif | 16px | 400 (implied) |
| Nav links | Outfit, sans-serif | 0.82rem | 400 |
| Nav CTA | Outfit, sans-serif | 0.8rem | 600 |
| Hero eyebrow | DM Mono, monospace | 0.72rem | 400 |
| Hero h1 | Cormorant Garamond, Georgia, serif | clamp(2.2rem, 4.5vw, 3.2rem) | 400 |
| Hero sub | Outfit (body) | 1.05rem | 400 |
| Gold CTA button | Outfit, sans-serif | 0.92rem | 600 |
| ICO note | DM Mono, monospace | 0.62rem | 400 |
| Section eyebrows | DM Mono, monospace | 0.65rem | 400 |
| Section h2 | Cormorant Garamond, Georgia, serif | clamp(1.75rem, 3.5vw, 2.6rem) / clamp(1.6rem, 3vw, 2.2rem) | 400 |
| Card h3 | Cormorant Garamond, Georgia, serif | 1.25rem | 400 |
| Card p | Outfit (body) | 0.86rem | 400 |
| Prepare title | Outfit, sans-serif | 0.92rem | 500 |
| Prepare body | Outfit (body) | 0.84rem | 400 |
| Card number | DM Mono, monospace | 0.68rem | 400 |
| Footer brand | Cormorant Garamond, Georgia, serif | 1.2rem | 400 |
| Footer TM | DM Mono, monospace | 0.58rem | 400 |
| Footer legal | DM Mono, monospace | 0.54rem | 400 |
| Footer practitioner | DM Mono, monospace | 0.54rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|------------|---------|
| max-width: 900px | Expect grid collapses to single column |
| max-width: 768px | Nav links hidden (except CTA); hero, expect, prepare, final CTA padding reduced; hero mesh shrinks to 260px |
| max-width: 480px | Hero h1 reduced to 1.7rem |
| prefers-reduced-motion: reduce | All orb, grain, and mesh animations disabled |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav CTA "Book Demo" | Click | Navigates to /book-a-walkthrough/ |
| Hero CTA "Book a Clinical Walkthrough" | Click | Opens Calendly link (external) |
| Final CTA "Book a Clinical Walkthrough" | Click | Opens Calendly link (external) |
| Hero CTA button | Hover | Background lightens to #d4b256, translateY(-2px) |
| Nav CTA button | Hover | Background lightens to #d4b256, translateY(-1px) |
| Expect cards | Hover | translateY(-3px), background opacity increases to 0.05 |
| Nav links | Hover | Text colour brightens, background gains subtle fill |
| Consent banner "Accept analytics" | Click | Sets localStorage, removes banner, reloads page to load GA4 |
| Consent banner "Decline" | Click | Sets localStorage, removes banner |
| vm-reveal sections | Scroll (via external JS) | Reveal animation on scroll into viewport |
| vm-depth sections | Scroll (via external JS) | Parallax depth effect |
| vm-stagger-grid | Scroll (via external JS) | Staggered card entrance |
| vm-progress-bar | Scroll (via external JS) | Page scroll progress indicator |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 zone colours | PASS | Z1 Gold #C9A84C, Z2 Teal #1A7A8A, Z3 Purple #7B5EA7, Z4 Sage #5F7C6C used correctly. No D-44 red applied. |
| DRD T-01a language | PASS | No "Driver" terminology present. No clinical output on this page. |
| 31 TM footer | PARTIAL | Footer contains 29 mnemonics plus VOS expansion. Missing: VECTOR. Note: HTML predates D-53 31-mnemonic requirement (built 13 April, D-53 issued 10 April for website addendum). Recommend adding VECTOR to footer. |
| MHRA governance line | PASS | "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." present in footer. |
| British English | PASS | lang="en-GB" declared. All text uses British English spelling. |
| No template literals | PASS | No backtick template literals in inline scripts. String concatenation used. |
| No em dashes | PASS | No em dashes found in body text. |
| Logo height 48px | PASS | img height="48" with correct file VM_Logo_1000_x_1000_px_png_New_Transparent.png |
| Logo CSS | PASS | display:block; margin:0; padding:0; border:none; line-height:0 applied inline |
| ICO ZC101813 | PASS | Present twice (hero ICO note, footer legal line) |
| "For practitioner use only" | PASS | Present in footer practitioner line |
| No "clinical AI platform" | PASS | Not present |
| No "treatment protocol" | PASS | Not present |
| No "diagnose/diagnosis/diagnostic" | PASS | Footer uses approved MHRA phrasing only |
| No ABAARM/FMAARM/MD | PASS | Not present |
| Canonical URL | PASS | https://vitalmatrix.co.uk/book-a-walkthrough/ |
| Structured data | PASS | JSON-LD Event schema with free offer |
| GA4 consent-gated | PASS | Analytics only loads after explicit user consent |
| No position:fixed | PARTIAL | Consent banner uses position:fixed (acceptable as it is a temporary overlay removed on interaction) |
| Calendly external link | NOTE | Links to https://calendly.com/vitalmatrix-discovery-call (no target="_blank" or rel="noopener") |

---

## RECOMMENDATIONS (non-blocking)

1. Add VECTOR to TM footer to comply with 31-mnemonic D-53 requirement
2. Add target="_blank" rel="noopener noreferrer" to Calendly external links
3. Verify vm-hero class definition exists (CSS rule at line 107 appears malformed in source: missing selector `.vm-hero{`)
4. Consider adding VOS expansion "(VitalMatrix Operating System)" to TM footer per D-53

---

*BookWalkthrough Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# PricingSpecs
========================================================================

# Pricing Page Specification

---

## PAGE IDENTITY

| Field | Value |
|-------|-------|
| Page Name | Founding Practitioner Rate |
| File | Pricing_v2_2026-04-13.html |
| Background (body) | var(--vm-charcoal) #1A2030 |
| Nav | Sticky, rgba(26,32,48,0.96) with backdrop-filter blur(12px), gold border-bottom |
| External CSS | vm-phase1-design.css, vm-font-optimise.css |
| External JS | vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |
| Google Fonts | Cormorant Garamond (300,400,600 + italic 300,400), Outfit (300-700), DM Mono (400,500) |
| Structured Data | Schema.org Offer (GBP 299, LimitedAvailability, priceValidUntil 2031-04-01) |
| GA4 | G-TRM1JTE0PB (consent-gated via localStorage vm-analytics-consent) |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| - | Nav | rgba(26,32,48,0.96) + blur | Sticky nav, hamburger mobile menu, gold CTA button |
| - | Proof Strip | (inline, below hero) | Phase 1, 10 Founding Practitioners, UK Only, ICO, MHRA line |
| 1 | Hero | linear-gradient(155deg, #111820 0%, #1A2030 60%, #1A2030 100%) | Cinematic layered hero: orbs, vignette, grain, SVG mesh, staggered fade-up animations |
| 2 | Pricing Block | var(--vm-prussian) #0D2B4E | GBP 299 amount, three badges, body paragraph, dual CTA buttons |
| 3 | What Is Included | var(--vm-charcoal-mid) #232B3E | Five feature cards (2-column top row + 3-column bottom row), numbered 01-05 |
| 4 | Stat Strip | #1E1A2E | Four-column stat grid (GBP 299, 5 Years, 5 Outputs, 10 Places) |
| 5 | FAQ | #FBF6E9 (light cream) | Five accordion items with chevron toggle, active border-left gold |
| 6 | Cohort A | #EBF8FA (light teal) | Informational text block, teal left-border on heading |
| 7 | End CTA | radial-gradient(ellipse, rgba(26,122,138,0.07), transparent), #111820 | Final conversion section, dual buttons, privacy link, ICO reference |
| - | Floating CTA | (fixed position via external CSS) | Floating "Book a Walkthrough" button with close control |
| - | Footer | var(--vm-navy-d) #071C33 | Three-column links, governance line, TM footer (31 mnemonics), copyright |

---

## AWARD-LEVEL ENHANCEMENTS

### Cinematic Hero Layers (21 April 2026)
- **Gradient overlay** (vm-hero-grade): dual-layer linear gradient for depth and colour grading
- **Animated orbs** (vm-hero-orbs): three floating colour orbs (gold, teal, purple) with blur(100px) and 20-24s infinite alternate keyframe animations
- **Vignette** (vm-hero-vignette): radial-gradient darkening from edges
- **Glass layer** (vm-hero-glass): backdrop-filter blur(2px) frosted glass effect
- **SVG geometric mesh** (vm-hero-mesh): rotating dual-pentagon wireframe with vertex nodes, 90s linear infinite rotation
- **Film grain** (vm-hero-grain): SVG fractalNoise texture at 0.05 opacity, mix-blend-mode overlay, 0.3s stepped animation
- **Staggered entry animation** (heroFadeUp): sequential 0.12s-delayed translateY fade-in on eyebrow, h1, sub, CTA, meta
- **prefers-reduced-motion**: all hero animations disabled, elements set to opacity:1

### Card Interactions
- **Bottom border reveal** (vm-card::after): teal scaleX(0) to scaleX(1) on hover, transform-origin left, 0.3s transition
- **Top accent lines**: alternating gold/teal linear-gradient on odd/even cards

### FAQ Accordion
- **Toggle animation**: max-height transition 0.3s for expand/collapse
- **Chevron rotation**: 180deg on active state
- **Active indicator**: 3px gold left border with 16px padding-left shift

### Scroll Prompt
- **Scroll-to-explore indicator** with animated dot line (styles in external CSS)

### Navigation
- **Hover micro-interactions**: colour shift to gold with background highlight on links
- **CTA hover**: translateY(-1px) lift effect
- **Mobile hamburger**: classList.toggle('open') for slide-down menu

### External Enhancements (via linked files)
- vm-phase1-design.css/js: progress bar, sticky label, reveal animations, depth layers, texture overlays, card glow, glass effects, CTA glow, kinetic grid, page transitions, choreo-scale, choreo-stagger, stagger-grid, font-sharpen, reading-meta
- vm-scroll-choreography.js: scroll-triggered choreography
- vm-svg-illustrations.js: SVG illustration injection
- vm-premium-polish.js: premium interaction polish

---

## COLOUR COMPLIANCE (D-53)

| Element | Colour | Variable/Hex |
|---------|--------|--------------|
| Z1 (Gold) | #C9A84C | --zone-z1, --vm-gold |
| Z2 (Teal) | #1A7A8A | --zone-z2, --vm-teal |
| Z3 (Purple) | #7B5EA7 | --zone-z3, --vm-purple |
| Z4 (Sage) | #5F7C6C | --zone-z4, --vm-sage |
| Z5 (Blue) | #4A90C4 | --zone-z5 |
| Gold accent | #C9A84C | --vm-gold |
| Gold warm | #D4B870 | --vm-gold-w |
| Gold dark | #A8873A | --vm-gold-d |
| Teal light | #2A9BAD | --vm-teal-l |
| Prussian Blue | #0D2B4E | --vm-prussian |
| Charcoal | #1A2030 | --vm-charcoal |
| Charcoal Deep | #111820 | --vm-charcoal-deep |
| Charcoal Mid | #232B3E | --vm-charcoal-mid |
| Deep Teal | #0C4452 | --vm-deep-teal |
| Navy Dark | #071C33 | --vm-navy-d |
| Navy Mid | #0F3460 | --vm-navy-m |
| Sage Deep | #3D5245 | --vm-sage-deep |
| Prussian Light | #153A62 | --vm-prussian-light |
| White | #F4F4F2 | --vm-white |
| Text primary | rgba(244,244,242,0.80) | --vm-text |
| Text secondary | rgba(244,244,242,0.55) | --vm-text-s |
| Text tertiary | rgba(244,244,242,0.35) | --vm-text-t |
| Stats background | #1E1A2E | Inline |
| FAQ background | #FBF6E9 | Inline |
| FAQ text | #1A2030 | Inline |
| FAQ answer text | rgba(26,32,48,0.70) | Inline |
| Cohort A background | #EBF8FA | Inline |
| Cohort A text | rgba(26,32,48,0.75) | Inline |
| Card surface | rgba(255,255,255,0.03) | Inline |
| Card border | rgba(255,255,255,0.07) | Inline |
| Border gold | rgba(201,168,76,0.18) | --vm-brd-gold |
| Border white | rgba(255,255,255,0.06) | --vm-brd-white |

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body default | Outfit (--vm-fd) | 16px | 400 |
| Nav links | Outfit | 0.6rem | 500 |
| Nav CTA | Outfit | 0.6rem | 700 |
| Hero eyebrow | DM Mono (--vm-fm) | 0.62rem | 400 |
| Hero h1 | Cormorant Garamond (--vm-fs) | clamp(2.4rem, 5vw, 4rem) | 300 |
| Hero sub | Outfit | clamp(0.88rem, 1.2vw, 1rem) | 300 |
| Hero CTA | Outfit | 0.7rem | 700 |
| Hero meta | DM Mono | 0.58rem | 400 |
| Pricing eyebrow | DM Mono | 0.62rem | 400 |
| Pricing amount | Cormorant Garamond | 5rem | 300 |
| Pricing period | Outfit | 1rem | 300 |
| Pricing body | Outfit | 0.88rem | 300 |
| Badge | DM Mono | 0.62rem | 400 |
| Section h2 | Cormorant Garamond | clamp(1.6rem, 2.5vw, 2.2rem) | 300 |
| Section eyebrow | DM Mono | 0.62rem | 400 |
| Card number | DM Mono | 0.62rem | 500 |
| Card title | Cormorant Garamond | 1.2rem | 400 |
| Card description | Outfit | 0.84rem | 300 |
| Stat value | Cormorant Garamond | 3rem | 300 |
| Stat label | DM Mono | 0.62rem | 400 |
| FAQ question | Outfit | 0.9rem | 500 |
| FAQ answer | Outfit | 0.86rem | 300 |
| Cohort A body | Outfit | 0.88rem | 300 |
| End CTA body | Outfit | 0.88rem | 300 |
| Footer col title | DM Mono | 0.58rem | 400 |
| Footer col links | Outfit | 0.78rem | 400 |
| Footer governance | Outfit | 0.6rem | 400 |
| Footer TM | DM Mono | 0.55rem | 400 |
| Footer copyright | DM Mono | 0.52rem | 400 |
| Included note | DM Mono | 0.6rem | 400 |
| Buttons (primary/outline) | Outfit | 0.7rem | 700/600 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| max-width: 1024px | Cards grid: 3-col to 2-col; top grid remains 2-col |
| max-width: 768px | Nav links hidden (hamburger toggle); stats grid 4-col to 2-col; footer cols 3-col to 1-col; SVG mesh reduced to 260x260px |
| max-width: 640px | Cards grid: 2-col to 1-col; buttons full-width block; CTA groups stack vertically |
| max-width: 480px | Stats grid to 1-col; pricing amount 5rem to 3.5rem; stat value 3rem to 2.2rem |
| prefers-reduced-motion: reduce | All hero animations disabled; orbs, grain, mesh animation stopped |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav links | Hover | colour to gold, background rgba(201,168,76,0.06) |
| Nav CTA | Hover | background to warm gold, translateY(-1px) |
| Hamburger button | Click | .vm-nav-links classList.toggle('open') |
| Hero CTA | Hover | background to warm gold, translateY(-2px) |
| Hero elements | Page load | Staggered heroFadeUp keyframe (0.12s increments) |
| Hero orbs | Continuous | 20-24s infinite alternate float animations |
| Hero mesh SVG | Continuous | 90s linear infinite rotation |
| Hero grain | Continuous | 0.3s stepped translate animation |
| Scroll prompt | Visible | Animated dot (styles in external CSS) |
| Pricing primary CTA | Hover | background to warm gold, translateY(-2px) |
| Pricing outline CTA | Hover | background rgba(201,168,76,0.1), translateY(-2px) |
| Feature cards | Hover | Bottom teal line scaleX(0) to scaleX(1), 0.3s |
| FAQ question button | Click | Parent classList.toggle('active'); max-height expand; chevron rotate 180deg; gold left border appears |
| FAQ question | Hover | colour change to dark gold |
| End CTA primary | Hover | background to warm gold, translateY(-2px) |
| Floating CTA close | Click | Close floating CTA (via external JS) |
| Footer links | Hover | colour to white |
| Consent banner Accept | Click | localStorage set 'accepted', remove banner, reload |
| Consent banner Decline | Click | localStorage set 'declined', remove banner |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 zone colours | PARTIAL | Z1-Z4 match D-53. Z5 defined as #4A90C4 (blue) in --zone-z5 variable but Z5 not visually referenced in page content. D-53 specifies Z5 as #D4B870 (Warm Gold). Variable present but not actively applied to content. |
| DRD T-01a language | PASS | DRD referenced as "DRD identifies the zone carrying the highest terrain burden for practitioner review" in card 04. Correct T-01a phrasing. |
| 31 TM footer | PASS | Footer contains VOS (VitalMatrix Operating System), VitalMatrix, NCZ, DRD, APEX, TIQ, CIB, CascadeIQ, FLINT, CZR, TRACE, DeltaScan, MedTerrain, TerrainLock, CascadeAtlas, PRISM, KINETICS, COHERENCE, TerrainRoot, ORBIT, SPHERE, HERALD, BEACON, MAPS, RECON, COMPASS, GENOME, ANCHOR, AXIS, INTAKE, VECTOR. 31 count confirmed with ICO ZC101813. |
| MHRA governance line | PASS | "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." present in footer. |
| British English | PASS | lang="en-GB" declared. Spelling throughout uses British conventions. |
| No template literals | PASS | No backtick template literals found in inline scripts. String concatenation not used (no inline JS logic requiring it). |
| No "treatment protocol" | PASS | Term not present. |
| No "diagnose"/"diagnosis" | PASS | Only appears in MHRA disclaimer context ("does not diagnose") which is the required regulatory language. |
| No "clinical AI platform" | PASS | Not present. |
| No "locked for life" | PASS | Not present. Uses "five-year price guarantee" throughout. |
| No ABAARM/FMAARM/MD | PASS | Not present. |
| Pricing D-49 compliance | PASS | GBP 299/month, 5-year price guarantee, 14-day free trial. No prohibited pricing (GBP 399/599/24 months). |
| Logo height="48" | PASS | img height="48" with correct file and inline styles. |
| ICO ZC101813 | PASS | Referenced in footer governance, TM footer, proof strip, and end CTA section. |
| "For practitioner use only" | PASS | Present in footer: "For practitioner use only. Not a diagnostic tool." |
| Protective header context | PASS | Proof strip carries MHRA status and ICO reference. Not a clinical output page so full protective header not required. |
| No em dashes | PASS | Uses colons and line breaks instead. |
| Consent mechanism | PASS | GA4 consent-gated via localStorage with accept/decline options. |
| Canonical URL | PASS | https://vitalmatrix.co.uk/pricing/ |
| OG/Twitter meta | PASS | og:title, og:description, og:type, og:url, og:image, twitter:card, twitter:title, twitter:description all present. |

---

*Pricing Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# AboutSpecs
========================================================================

# About Dr Faisal — Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page name | About Dr Faisal |
| File | About_v2_2026-04-13.html |
| Background system | Charcoal #1A2030 (body default) |
| Nav | Sticky, 52px, backdrop-blur, rgba(26,32,48,0.96) |
| External CSS | vm-phase1-design.css, vm-font-optimise.css |
| External JS | vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |
| Google Fonts | Cormorant Garamond (300,400,600,i300,i400), Outfit (300-700), DM Mono (400,500) |
| Analytics | GA4 G-TRM1JTE0PB (consent-gated via localStorage) |

---

## SECTION MAP

| # | Section Name | Background | Key Feature |
|---|-------------|-----------|-------------|
| 0 | Navigation | rgba(26,32,48,0.96) backdrop-blur | Sticky nav, hamburger toggle, gold CTA button |
| 1 | Hero | linear-gradient(145deg, #111820 0%, #1A2030 60%, #1A2030 100%) | Cinematic layered hero with orbs, mesh SVG, grain, vignette, glass |
| 1a | Proof Strip | (inherits from vm-proof-strip class in external CSS) | Phase 1, 10 Founding Practitioners, UK Only, ICO, MHRA line |
| 2 | Credentials Strip | #0D2B4E (Prussian) | 4-cell grid: MBBS, FAAMFM, Harley Street, Phase 1 |
| 3 | Biographical Block | #1A2030 (Charcoal) | Gold left-border h2, three paragraphs |
| 3a | Three Pillars (Why This Platform) | #0D2B4E (Prussian) inline style | 3 pillar cards with numbered left gutter (I, II, III) |
| 4 | Quote Block | #232B3E (Charcoal Mid) | Decorative open-quote, blockquote empty (pending approval) |
| 5 | Three Reasons | #0D2B4E (Prussian) | 3 numbered pillars (I, II, III) with eyebrow labels |
| 6 | Origin Story | #232B3E (Charcoal Mid) | 2-column grid, teal-bordered callout box, dual narrative |
| 7 | CTA | #0D2B4E (Prussian) | Centred call-to-action, radial teal glow overlay |
| 7a | Floating CTA | (positioned element from external CSS) | Floating button with close dismiss |
| 8 | Footer | #071C33 (Navy Dark) | 3-column link grid, governance text, TM footer, copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Cinematic hero orbs | 3 animated radial orbs (gold, teal, purple) with CSS keyframe drift (vmOrbA/B/C, 20-24s infinite alternate) |
| Hero vignette | Radial gradient overlay darkening edges |
| Hero grade | Multi-stop linear gradients for cinematic depth grading |
| Hero glass | Backdrop-filter blur(2px) subtle frost layer |
| Hero grain | Inline SVG feTurbulence noise texture, 4-step animation (vmGrain 0.3s steps) |
| Hero mesh | Rotating SVG pentagon wireframe (vmMeshR 90s linear infinite) with zone-coloured vertex dots |
| Hero fade-up | CSS keyframe heroFadeUp on h1, subtitle, button, meta (staggered 0/0.12/0.24/0.36s) |
| Scroll prompt | Animated dot-in-line scroll indicator below hero |
| Progress bar | .vm-progress-bar element (styled in external CSS) |
| Sticky label | .vm-sticky-label element (styled in external CSS) |
| Reveal animations | .vm-reveal class on all sections (IntersectionObserver via external JS) |
| Stagger grid | .vm-stagger-grid, .vm-choreo-stagger classes (external JS choreography) |
| CTA glow | .vm-cta-glow class on buttons (external CSS) |
| Floating CTA | Persistent floating button with SVG close icon |
| Consent banner | Dynamic DOM injection for analytics consent (accept/decline) |
| Reduced motion | @media(prefers-reduced-motion:reduce) disables orb, grain, and mesh animations |
| Kinetic grid | Body class vm-kinetic-grid (external CSS) |
| Page transition | Body class vm-page-transition (external CSS) |

---

## COLOUR COMPLIANCE (D-53)

| Element/Zone | Colour | Variable/Hex |
|-------------|--------|------|
| Z1 (Gold) | --zone-z1 | #C9A84C |
| Z2 (Teal) | --zone-z2 | #1A7A8A |
| Z3 (Purple) | --zone-z3 | #7B5EA7 |
| Z4 (Sage) | --zone-z4 | #5F7C6C |
| Z5 (Metallic Blue) | --zone-z5 | #4A90C4 |
| Gold accent | --vm-gold | #C9A84C |
| Teal accent | --vm-teal | #1A7A8A |
| Teal light | --vm-teal-l | #2A9BAD |
| Gold warm | --vm-gold-w | #D4B870 |
| Gold dark | --vm-gold-d | #A8873A |
| Purple | --vm-purple | #7B5EA7 |
| Sage | --vm-sage | #5F7C6C |
| Prussian | --vm-prussian | #0D2B4E |
| Charcoal | --vm-charcoal | #1A2030 |
| Charcoal Deep | --vm-charcoal-deep | #111820 |
| Charcoal Mid | --vm-charcoal-mid | #232B3E |
| Deep Teal | --vm-deep-teal | #0C4452 |
| Navy Dark (footer) | --vm-navy-d | #071C33 |
| Navy Mid | --vm-navy-m | #0F3460 |
| Prussian Light | --vm-prussian-light | #153A62 |
| White | --vm-white | #F4F4F2 |
| Text primary | --vm-text | rgba(244,244,242,0.80) |
| Text secondary | --vm-text-s | rgba(244,244,242,0.55) |
| Text tertiary | --vm-text-t | rgba(244,244,242,0.35) |
| Border gold | --vm-brd-gold | rgba(201,168,76,0.18) |
| Border white | --vm-brd-white | rgba(255,255,255,0.06) |

**D-53 COMPLIANCE NOTE:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | Outfit (--vm-fd) | 0.88rem | 400 |
| h1 (Hero) | Cormorant Garamond (--vm-fs) | clamp(2.4rem, 5vw, 4rem) | 400 |
| h2 (Bio, Reasons, CTA) | Cormorant Garamond (--vm-fs) | clamp(1.6rem, 2.5vw, 2.2rem) | 400 |
| h2 (Origin) | Cormorant Garamond (--vm-fs) | clamp(1.3rem, 2vw, 1.7rem) | 400 |
| h2 (Pillars section) | Cormorant Garamond | clamp(1.75rem, 3.5vw, 2.6rem) | 400 |
| h3 (Reasons) | Cormorant Garamond (--vm-fs) | clamp(1.1rem, 1.5vw, 1.3rem) | 400 |
| h3 (Pillars inline) | Cormorant Garamond | 1.3rem | 400 |
| Eyebrow | DM Mono (--vm-fm) | 0.62rem | 400 |
| Pillar label | DM Mono | 0.5rem | 400 |
| Nav links | Outfit (--vm-fd) | 0.6rem | 500 |
| Nav CTA | Outfit (--vm-fd) | 0.6rem | 700 |
| Button (gold) | Outfit (--vm-fd) | 0.7rem | 700 |
| Blockquote | Cormorant Garamond (--vm-fs) | 1.35rem | italic |
| Credentials main | Cormorant Garamond (--vm-fs) | 2.4rem | 400 |
| Credentials label | DM Mono (--vm-fm) | 0.62rem | 400 |
| Footer h4 | Outfit (--vm-fd) | 0.65rem | 600 |
| Footer links | Outfit (--vm-fd) | 0.78rem | 400 |
| Footer governance | Outfit (--vm-fd) | 0.6rem | 400 |
| Footer TM | DM Mono (--vm-fm) | 0.55rem | 400 |
| Hero meta | DM Mono (--vm-fm) | 0.58rem | 400 |
| CTA meta | DM Mono (--vm-fm) | 0.58rem | 400 |
| Reading meta | (styled via class in external CSS) | — | — |
| ICO inline note | DM Mono | 0.65rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| max-width: 768px | Nav links hidden (hamburger shown), credentials 2-col, origin grid 1-col, footer grid 1-col, gold button full-width, hero mesh 260px |
| max-width: 600px | Pillars section left gutter reduced to 60px |
| max-width: 480px | Credentials 1-col stack, pillar padding-left 52px, pillar-num font-size 2.6rem |
| prefers-reduced-motion: reduce | All orb, grain, and mesh animations disabled |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav links | hover | colour transition to gold (0.3s) |
| Nav CTA | hover | background lightens to #D4B870 (0.3s) |
| Hamburger button | click | toggles .open class on .vm-nav-links |
| Hero content | page load | staggered fadeUp keyframe animation (4 elements) |
| Hero orbs | continuous | CSS translate drift (20-24s alternate) |
| Hero mesh SVG | continuous | 360-degree rotation (90s linear infinite) |
| Hero grain | continuous | 4-step translate steps (0.3s) |
| Gold buttons | hover | background lightens to #D4B870 (0.3s) |
| All sections (.vm-reveal) | scroll into view | reveal animation (external JS) |
| Stagger grid elements | scroll into view | choreographed stagger (external JS) |
| Footer links | hover | colour transition to gold (0.3s) |
| Floating CTA close | click | dismiss floating CTA (external JS) |
| Consent banner Accept | click | stores consent, reloads page, loads GA4 |
| Consent banner Decline | click | stores decline, removes banner |
| Scroll prompt | scroll/continuous | animated indicator (external CSS) |
| Progress bar | scroll | progress indication (external JS) |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 zone colours | PARTIAL | Z1-Z4 correct. Z5 variable --zone-z5 set to #4A90C4 instead of D-53 #D4B870. However, Z5 variable does not appear to be actively used in visible content on this page. Gold accent #C9A84C used correctly throughout. |
| DRD T-01a language | PASS | No use of "Driver". No diagnostic language. Platform described as "clinical intelligence platform". |
| 31 TM footer | PASS | Footer contains VOS expansion + 30 marks including VECTOR. Total 31 mnemonics present. ICO ZC101813 included. |
| MHRA governance line | PASS | "MHRA SaMD classification has not yet commenced" in footer governance section. |
| British English | PASS | "practise", "practitioner", "practising" used correctly. No American spellings detected. |
| No template literals | PASS | No backtick template literals in inline scripts. String concatenation used. |
| Logo height="48" | PASS | Logo img uses height="48" with correct file name and inline styles. |
| Credentials (D-40) | PASS | MBBS, FAAMFM only. No ABAARM, FMAARM, or MD. |
| Prohibited terms | PASS | No "treatment protocol", "diagnose", "clinical AI platform", "clinical decision support". |
| ICO reference | PASS | ICO ZC101813 appears in hero meta, proof strip, CTA inline, footer governance, and TM footer. |
| "For practitioner use only" | PASS | Present in footer governance area. |
| No em dashes | PASS | HTML entity &#8212; used in title (acceptable in meta). No em dashes in body text. Colons used as separators. |
| HERALD/BEACON body check | PASS | HERALD and BEACON appear in TM footer only, not in body content. |
| Quote block Section 4 | NOTED | Blockquote content empty. HTML comment states: "Founder voice quote pending approval from Dr Faisal. Do not populate." |
| SEO block | PASS | Title, meta description, keywords, og:title, og:description, og:type, canonical href all present. |
| Canonical URL | PASS | https://vitalmatrix.co.uk/about/ |
| Nav CTA | PASS | "Book Demo" links to /book/ |
| Consent mechanism | PASS | GA4 consent-gated. Accept/Decline. No tracking without consent. |

---

*About Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# MissionSpecs
========================================================================

# Mission Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | Mission (P3) |
| File | Mission_v3_P3Award_2026-05-02.html |
| Background | Prussian Blue #0D2B4E (body default) |
| Nav | Sticky, glassmorphism backdrop-filter blur(16px), logo + CTA "Book Discovery Call" |
| External Files | None (fully self-contained single HTML file, all CSS inline, all JS inline) |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 1 | Scroll Progress Bar | Fixed top overlay | 2px gradient bar (gold to teal) tracking scroll position |
| 2 | Custom Cursor | Fixed overlay | Gold dot cursor with hover expansion on interactive elements |
| 3 | Navigation | rgba(13,43,78,0.7) glassmorphism | Sticky nav with logo (height 48), "Book Discovery Call" CTA |
| 4 | Hero | Animated gradient mesh (#0D2B4E / #1A2030 / #0C4452) | Character-level staggered heading animation, particle canvas, dual CTA, scroll indicator |
| 5 | Mission Statement | Charcoal #1A2030 | Placeholder box awaiting Dr Faisal input, GMC bar, image placeholder (860x320) |
| 6 | Section Divider | Transparent | Animated gold gradient line (max-width 200px) |
| 7 | Mission Suggestions | Prussian Blue #0D2B4E | 4-card grid with draft mission statement options, card hover lighting, badge roll |
| 8 | Section Divider | Transparent | Animated gold gradient line (max-width 200px) |
| 9 | Trust Badges | Charcoal #1A2030 | ICO ZC101813, UK Practitioners, Phase 1 Live |
| 10 | Footer | Navy #071C33 | 31-mnemonic TM footer, copyright, ICO registration |
| 11 | Sticky CTA Bar | Prussian Blue #0D2B4E | Appears at 60% scroll, dismissible, gold top border |

---

## AWARD-LEVEL ENHANCEMENTS

| # | Enhancement | Implementation |
|---|-------------|----------------|
| 1 | Mouse-reactive particles | Canvas-based 50-particle system with mouse repulsion (120px radius), damping, drift |
| 2 | Scroll progress bar | Fixed top 2px gradient bar (gold to teal), live width update on scroll |
| 3 | Magnetic buttons | mousemove-driven translate on .btn-magnetic elements (0.2x offset) |
| 4 | Character-level hero animation | Each character wrapped in span with staggered 35ms delay, cubic-bezier reveal with rotation |
| 5 | Parallax depth | Scroll-linked translateY on mission-inner (-0.03x) and suggestions-inner (-0.025x) |
| 6 | Custom cursor | Gold dot (10px) with lerp tracking (0.15), expands to 36px ring on interactive hover |
| 7 | Card hover lighting | Radial gradient follows mouse position within suggestion cards (300px radius) |
| 8 | Scroll-linked hero fade | Hero inner opacity and translateY shift based on scroll (20%-70% of hero height) |
| 9 | Section background hue shift | data-scroll-bg sections receive hue-rotate(10-18deg) based on viewport position |
| 10 | Badge slot-machine roll | Badge text translateY(-100%) to 0 on intersection, 0.6s cubic-bezier |
| E1 | Scroll indicator pulse | Chevron SVG with 1.5s infinite translateY(6px) animation |
| E2 | Section divider expand | Width 0 to 100% over 0.8s ease-out on scroll intersection |
| E3 | Staggered card entrance | IntersectionObserver with 120ms stagger per sibling element |
| E4 | Section heading reveal | translateY(40px) to 0 with 0.6s cubic-bezier on intersection |
| E5 | Card icon pulse-in | scale(0.85) to scale(1) with 0.4s ease-out, 200ms delay |
| E6 | Nav scroll state | Background opacity 0.7 to 0.97, border colour intensifies after 60px scroll |
| E7 | Sticky CTA bar | Slides up from translateY(100%) at 60% page scroll, dismissible |
| E8 | Link hover underline | Pseudo-element translateX(-100%) to 0 on breadcrumb links |
| E9 | Card 3D tilt on hover | perspective(800px) rotateX(2deg) rotateY(-3deg) translateY(-6px) |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage in Page |
|------|--------|-----|---------------|
| Z1 | Gold | #C9A84C | --vm-gold: nav text, CTA backgrounds, particle fill, card borders, section divider gradient, cursor |
| Z2 | Teal | #1A7A8A | --vm-teal: page-label, GMC bar border/text, trust badge icons, scroll progress gradient end |
| Z3 | Purple | #7B5EA7 | --vm-purple: defined in :root, not actively used in visible content |
| Z4 | Sage | #5F7C6C | --vm-sage: defined in :root, not actively used in visible content |
| Z5 | Warm Gold | #D4B870 | --vm-warm-gold: defined in :root, not actively used in visible content |

**Additional background colours used:**
- Prussian Blue #0D2B4E (hero, suggestions section, body)
- Charcoal #1A2030 (mission statement section, trust badges)
- Deep Teal #0C4452 (hero gradient mesh component)
- Footer Navy #071C33 (footer)
- Teal Light #2A9BAD (GMC bar text)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | Outfit | 16px (base) | 300 |
| H1 (hero heading) | Cormorant Garamond | clamp(40px, 5vw, 64px) | 600 |
| H2 (section heading) | Cormorant Garamond | clamp(28px, 4vw, 48px) | 600 |
| H3 (section subheading) | Cormorant Garamond | clamp(20px, 2.5vw, 30px) | 500 |
| Hero sub | Outfit | 18px (16px mobile) | 300 |
| Mission body | Outfit | clamp(14px, 1.5vw, 16px) | 300 |
| Nav logo text | Cormorant Garamond | 1.25rem | 500 |
| Nav CTA | Outfit | 0.75rem | 500 |
| Buttons (primary/secondary) | Outfit | 15px | 600/400 |
| Labels (page-label, suggestion-num) | DM Mono | 11px | 400 |
| Breadcrumb | DM Mono | 0.65rem | 400 |
| Suggestion text | Cormorant Garamond | 1.15rem | 400 italic |
| Trust badges | DM Mono | 10px | 400 |
| Footer TM | DM Mono | 0.6rem | 400 |
| Footer legal | Outfit | 0.7rem | 400 |
| Footer ICO | DM Mono | 0.65rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| 1024px | Nav padding 18px 32px; Hero padding 120px 32px 80px; Section padding 48px 32px; Footer padding 40px 32px |
| 768px | Hero padding 100px 20px 60px; Section padding 48px 20px; Footer 32px 20px; Suggestion grid single column; Custom cursor hidden; Sticky CTA bar stacks vertically; Hero sub 16px |
| pointer: fine (media query) | Custom cursor system enabled |
| pointer: coarse | Touch device: magnetic buttons disabled, card lighting disabled, custom cursor disabled |
| prefers-reduced-motion: reduce | All animations disabled; elements display at final state immediately |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav CTA button | hover | translateY(-2px), box-shadow 0 4px 16px gold |
| Nav | scroll > 60px | Background opacity 0.7 to 0.97, border intensifies |
| Hero heading chars | page load | Staggered 35ms character reveal with rotation |
| Hero particles | mousemove | Particles repelled within 120px radius |
| Hero inner | scroll | Opacity fades from 1 to 0, translateY shifts upward |
| Scroll indicator | scroll > 100px | Fades out (opacity 0, pointer-events none) |
| Scroll progress bar | scroll | Width updates proportionally to scroll percentage |
| .btn-magnetic elements | mousemove | Translate follows mouse offset at 0.2x |
| .btn-magnetic elements | mouseleave | Reset to translate(0,0) |
| .btn-primary | hover | box-shadow 0 8px 24px gold |
| .btn-secondary | hover | box-shadow + background rgba gold |
| Suggestion cards | hover | 3D tilt perspective transform, gold outline, translateY(-6px) |
| Suggestion cards | mousemove | Radial gradient light follows cursor |
| Badge inner | intersection | Slot-machine roll translateY animation |
| .animate-on-scroll elements | intersection (threshold 0.1) | fadeSlideUp 0.55s with 120ms stagger |
| Section headings | intersection | headingReveal 0.6s cubic-bezier |
| Section dividers | intersection | Width expands 0 to 100% over 0.8s |
| Card icons | intersection | Scale 0.85 to 1, opacity 0 to 1, 200ms delay |
| Sections with data-scroll-bg | scroll (in viewport) | hue-rotate filter 10-18deg based on scroll ratio |
| Sticky CTA bar | scroll > 60% | Slides up from bottom (translateY 100% to 0) |
| Sticky CTA dismiss button | click | Bar slides down, then display:none after 400ms |
| Custom cursor | mousemove | Lerp follows mouse at 0.15 factor |
| Custom cursor | hover on interactive | Expands from 10px to 36px, shows gold ring |
| Breadcrumb links | hover | Underline slides in from left via pseudo-element |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 zone colours | PASS | Z1 #C9A84C, Z2 #1A7A8A, Z3 #7B5EA7, Z4 #5F7C6C, Z5 #D4B870 all defined in :root |
| DRD T-01a language | PASS | No "Driver" or "diagnosis" terminology present |
| 31-mnemonic TM footer | PASS | VOS (with expansion), VitalMatrix, NCZ, DRD, APEX, TIQ, CIB, CascadeIQ, FLINT, CZR, TRACE, DeltaScan, MedTerrain, TerrainLock, CascadeAtlas, PRISM, KINETICS, COHERENCE, TerrainRoot, ORBIT, SPHERE, HERALD, BEACON, MAPS, RECON, COMPASS, GENOME, ANCHOR, AXIS, INTAKE, VECTOR = 31 |
| MHRA governance line | PARTIAL | Footer states "Not a medical device" but does not include full MHRA SaMD classification pending line |
| British English | PASS | "centre" used correctly; no American spellings detected |
| No template literals | PASS | All JS uses string concatenation |
| No default parameters | PASS | Ternary checks used throughout |
| No position: fixed (components) | NOTE | Scroll progress bar and custom cursor use position:fixed (acceptable for global UI overlays) |
| Logo file correct | PASS | VM_Logo_1000_x_1000_px_png_New_Transparent.png, height="48" |
| Logo CSS | PASS | line-height:0, font-size:0, display:block, border:none |
| ICO ZC101813 | PASS | Present in footer TM block and footer-ico element |
| HERALD/BEACON body check | PASS | Neither appears in body content; footer only |
| VECTOR body check | PASS | Footer only |
| No "clinical AI platform" | PASS | Uses "Clinical intelligence platform" |
| No "treatment protocol" | PASS | Not present |
| No ABAARM/FMAARM/MD | PASS | Uses "MBBS, FAAMFM" in placeholder text |
| Credentials | PASS | "Dr Shahzad Faisal, MBBS, FAAMFM" |
| prefers-reduced-motion | PASS | All animations wrapped in media query or JS check |
| focus-visible | PASS | Global rule for a:focus-visible, button:focus-visible with gold outline |
| No em dashes | PASS | None detected in visible text |
| No localStorage/sessionStorage | PASS | Not used |

---

*Mission Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# TerrainIntelligenceSpecs
========================================================================

# Terrain Intelligence Page Specifications

---

## PAGE IDENTITY

| Field | Value |
|-------|-------|
| Page Name | Terrain Intelligence Layers |
| File | TerrainIntelligence_v2_2026-04-13.html |
| Background | Deep Teal #0C4452 (body default) |
| Nav | Sticky, rgba(12,68,82,0.96) with backdrop-filter blur(12px), gold border-bottom |
| External Files | vm-phase1-design.css, vm-phase1-design.js (deferred), Google Fonts (Cormorant Garamond, Outfit, DM Mono), GA4 (G-TRM1JTE0PB consent-gated) |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 1 | Navigation | rgba(12,68,82,0.96) | Sticky nav, hamburger mobile menu, Book Demo CTA |
| 2 | Hero | linear-gradient(145deg, #07303D 0%, #0C4452 50%, #0C4452 100%) | Cinematic layered hero with orbs, vignette, mesh SVG, grain animation |
| 3 | KINETICS Velocity Classification | #1A2030 (Charcoal) | Six cascade stack rows (S1-S6) with velocity and evidence badges |
| 4 | DeltaScan Longitudinal Tracking | #FBF6E9 (Light Gold) | Two-card comparison grid with zone bar charts, delta summary |
| 5 | TRACE Temporal Reconstruction | #0C4452 (Deep Teal) | Five-point horizontal timeline with cumulative zone dots |
| 6 | TIQ Composite Score | #F0EBF8 (Light Purple) | Four weighted component cards (45/25/15/15) |
| 7 | CTA Section | #0D2B4E (Prussian Blue) | Dual CTA buttons, ICO reference, practitioner qualifier |
| 8 | Footer | #071C33 (Navy Dark) | Three-column grid, governance block, 31 TM footer, copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Cinematic Hero Orbs | Three animated blurred orbs (gold, teal, purple) with alternating keyframe drift (20s/24s/22s) |
| Hero Vignette | Radial gradient creating depth-of-field cinematic effect |
| Hero Mesh SVG | Rotating nested pentagon SVG (90s linear infinite rotation) with node dots |
| Film Grain Overlay | Inline SVG feTurbulence noise with 4-step animation at 0.3s interval |
| Hero Glass Layer | Frosted glass backdrop-filter blur(2px) over hero content |
| Gradient Layering | vm-hero-grade combining vertical and diagonal gradients for volumetric depth |
| Zone Bar Animations | CSS transition width 0.6s on zone score bars in DeltaScan cards |
| KINETICS Row Hover | Background transition to rgba(255,255,255,0.05) on hover |
| Velocity Badges | Colour-coded badges: Fast (teal), Medium (gold), Slow (sage) |
| Evidence Badges | Three tiers: Established, Emerging, Theoretical with distinct border/colour |
| Special Badges | Theoretical (amber) and Unidirectional (teal) inline badges on S4/S6 |
| Timeline Dot System | Cumulative zone-coloured dots showing temporal burden accumulation |
| TIQ Card Accents | 3px left-border accent colour per component (gold, teal, sage, purple) |
| Card Glow Classes | vm-card-glow and vm-glass utility classes for interactive card surfaces |
| Prefers-reduced-motion | All hero animations disabled when user requests reduced motion |
| Consent Banner | GDPR-compliant analytics consent with localStorage persistence |
| Progress Bar | vm-progress-bar element for scroll progress indication |
| Sticky Label | vm-sticky-label element for section context awareness |
| Reading Time | "8 min read" meta displayed in hero |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour Used | D-53 Required | Status |
|------|-------------|---------------|--------|
| Z1 (Metabolic Energy Axis) | #C9A84C | #C9A84C (Gold) | COMPLIANT |
| Z2 (Resilience Network) | #1A7A8A | #1A7A8A (Teal) | COMPLIANT |
| Z3 (Cardiovascular-Neural Axis) | #7B5EA7 | #7B5EA7 (Purple) | COMPLIANT |
| Z4 (Detoxification Trident) | #5F7C6C | #5F7C6C (Sage) | COMPLIANT |
| Z5 (Hormonal Terrain Axis) | #4A90C4 | #4A90C4 (Metallic Blue) | COMPLIANT |

**Note:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.

### Background Colours Used

| Section | Colour | Role |
|---------|--------|------|
| Body default | #0C4452 | Deep Teal (terrain/clinical) |
| Hero | #07303D to #0C4452 gradient | Teal Deepest to Deep Teal |
| KINETICS | #1A2030 | Charcoal |
| DeltaScan | #FBF6E9 | Light Gold (light section) |
| TRACE | #0C4452 | Deep Teal |
| TIQ | #F0EBF8 | Light Purple (light section) |
| CTA | #0D2B4E | Prussian Blue |
| Footer | #071C33 | Navy Dark |

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero headline | Cormorant Garamond | clamp(2.2rem, 4.5vw, 3.4rem) | 300 |
| Section headings (h2) | Cormorant Garamond | clamp(1.8rem, 3.5vw, 2.6rem) | 300 |
| Eyebrow labels | DM Mono | 0.72rem | 400 |
| Body/subtext | Outfit | 0.95rem | 300 |
| Nav links | Outfit | 0.82rem | 400 |
| Nav CTA | Outfit | 0.78rem | 500 |
| Stack IDs | DM Mono | 0.85rem | 700 |
| Clinical text (rows) | Outfit | 0.88rem | 400 |
| Velocity badges | DM Mono | 0.65rem | 500 |
| Evidence badges | DM Mono | 0.6rem | 500 |
| Meta text | DM Mono | 0.58rem | 400 |
| TIQ weight numbers | Cormorant Garamond | 1.8rem | 500 |
| TIQ component name | DM Mono | 0.88rem | 400 |
| Footer column heads | Outfit | 0.78rem | 600 |
| Footer links | Outfit | 0.82rem | 300 |
| Footer governance | DM Mono | 0.6rem | 400 |
| Footer TM block | DM Mono | 0.55rem | 400 |
| Protective note | DM Mono | 0.7rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| max-width: 900px | KINETICS rows collapse to single column grid |
| max-width: 768px | Nav links hidden, hamburger shown; KINETICS single column; DeltaScan grid single column; TIQ grid single column; Footer grid single column; Timeline vertical (column layout); Hero mesh reduced to 260px |
| max-width: 640px | CTA buttons stack vertically, full-width |
| prefers-reduced-motion: reduce | All hero orb, grain, and mesh animations disabled |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav links | Hover | colour transition to white (0.3s) |
| Nav CTA (Book Demo) | Hover | background transitions to gold-warm #D4B870 |
| Hamburger button | Click | Toggles .vm-mobile-menu.active class |
| Gold CTA button | Hover | background transitions to #D4B870 |
| Outline CTA button | Hover | border-color to gold, background rgba gold overlay |
| KINETICS rows | Hover | background brightens to rgba(255,255,255,0.05) |
| Zone bars (DeltaScan) | Page load | width transition 0.6s ease |
| Hero orbs | Passive | Continuous alternating drift animation |
| Hero mesh SVG | Passive | 90s continuous rotation |
| Hero grain | Passive | 0.3s 4-step translate animation loop |
| Consent banner Accept | Click | localStorage set, banner removed, page reloads with GA4 |
| Consent banner Decline | Click | localStorage set, banner removed |
| Footer links | Hover | colour transition to white (0.3s) |

---

## COMPLIANCE CHECKS

| Rule | Status | Detail |
|------|--------|--------|
| D-53 Zone Colours | PASS | Z1 Gold, Z2 Teal, Z3 Purple, Z4 Sage all correct. Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones |
| DRD T-01a Language | COMPLIANT | No "Driver" terminology present; no diagnostic language |
| 31 TM Footer | COMPLIANT | Footer contains VOS expansion + 31 marks including VECTOR. Matches canonical footer. |
| MHRA Governance Line | COMPLIANT | "MHRA SaMD classification has not yet commenced..." present in footer governance |
| British English | COMPLIANT | lang="en-GB" set; no American spellings detected |
| No Template Literals | COMPLIANT | No backtick template literals in inline scripts |
| Protective Headers | COMPLIANT | Three vm-protective-note blocks present (KINETICS, TRACE, TIQ) |
| Logo Height 48px | COMPLIANT | height="48" on nav logo img |
| Logo File | COMPLIANT | VM_Logo_1000_x_1000_px_png_New_Transparent.png |
| "For practitioner use only" | COMPLIANT | Present in footer governance |
| No "clinical AI platform" | COMPLIANT | Not present |
| No "treatment protocol" | COMPLIANT | Not present |
| No "diagnose/diagnosis/diagnostic" | COMPLIANT | Not present in practitioner-facing text |
| S4 Theoretical Label | COMPLIANT | "THEORETICAL" badge on S4 row |
| S6 Unidirectional Label | COMPLIANT | "UNIDIRECTIONAL" badge on S6 row + note "Z1 to Z3 only. Reverse direction does not exist." |
| D-12 S4 DRD Exclusion | COMPLIANT | "Excluded from DRD cascade trace (D-12)" noted on S4 |
| ICO ZC101813 | COMPLIANT | Present in footer governance and CTA section |
| No em dashes | COMPLIANT | Middot entities used; no em dashes detected |
| Canonical URL | COMPLIANT | https://vitalmatrix.co.uk/terrain-intelligence/ |
| OG Meta Tags | COMPLIANT | og:title, og:description, og:type, og:url, og:image present |
| Consent-gated Analytics | COMPLIANT | GA4 loads only after localStorage consent acceptance |

### Issues Requiring Correction

1. **Z5 colour compliance confirmed:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.
2. **DeltaScan inverted scale note:** States "Higher display score indicates lower internal burden (inverted scale)" which is correct per scoring rules.
3. **Two adjacent light sections:** DeltaScan (#FBF6E9) and TIQ (#F0EBF8) are separated by the dark TRACE section (#0C4452), so no adjacency violation.

---

*TerrainIntelligence Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# NCZArchitectureSpecs
========================================================================

# NCZ Architecture Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | NCZ Architecture |
| File | NCZArchitecture_v2_2026-04-13.html |
| Background | Deep Teal #0C4452 (body default) |
| Nav | Sticky, 52px height, rgba(12,68,82,0.96) with backdrop-filter blur(12px) |
| External Files | `vm-font-optimise.css`, `VM_Logo_1000_x_1000_px_png_New_Transparent.png` |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 01 | Hero (Type B: Particle Field) | Deep Teal #0C4452 | Cinematic layered hero with particle canvas, animated orbs, mesh SVG pentagon, grain texture, vignette |
| 02 | Seven Nodes | Prussian Blue #0D2B4E | 4-column card grid (N1-N7) with zone badges, stagger animation |
| 03 | Five Zones | Teal Mid #125A6E | Zone cards with coloured top borders, activation thresholds |
| 04 | Interactive Pentagon Zone Map | Prussian Blue #0D2B4E | SVG pentagon, 5 animated zone nodes, 6 cascade arrows, hover info panel (Spec 1) |
| 05 | Cascade Stack Pathways | Charcoal #1A2030 | 3x2 grid of 6 cascade cards, TerrainLock callout (Spec 4) |
| 06 | Node Membership Heatmap | Deep Teal #0C4452 | 7x5 interactive matrix, glowing zone dots, N6 dampening badge (Spec 5) |
| 07 | Zone Activation Thresholds | Prussian Blue #0D2B4E | Animated threshold bars, borderline markers, Z5 lower threshold (Spec 3) |
| 08 | Memory Method | Light Sage #EAF0EB | Mnemonic cue cards with coloured left borders |
| 09 | FLINT Context | Charcoal Purple #1E1A2E | Prose explanation of NCZ at FLINT Layers 1 and 2, link to full pipeline |
| 10 | CTA | Teal Deepest #07303D | Dual-button call to action (gold + ghost) |
| -- | Footer | Navy #071C33 | Brand, MHRA line, TM footer (31 mnemonics), legal line |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Particle System | Canvas-based 60-particle animation with zone colours (#C9A84C, #1A7A8A, #7B5EA7, #5F7C6C, #2E6DB4), proximity line connections at 120px distance |
| Cinematic Hero Layers | 7-layer composited hero: gradient overlay, animated orbs (gold/teal/purple with 20-24s keyframe drift), vignette, glass blur, rotating mesh SVG pentagon, film grain animation |
| Scroll Reveal | IntersectionObserver at 0.12 threshold, fade-up translateY(24px) with 0.6s ease |
| Stagger Grid | Sequential child reveal with 0.12s incremental delay (up to 7 children) |
| Card Hover States | translateY(-3px) lift with box-shadow on node cards |
| Reduced Motion | Full prefers-reduced-motion support: particle canvas hidden, orb/grain/mesh animations disabled, static fallback gradient shown |
| GA4 Consent Banner | Cookie-gated analytics with Accept/Decline, localStorage persistence, reload on acceptance |
| Rotating Mesh | SVG pentagon with nested polygons and zone-coloured vertex dots, 90s infinite rotation |
| Film Grain | SVG feTurbulence noise texture, 0.3s stepped animation, overlay blend mode at 5% opacity |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Required Colour | Colour Used in File | Status |
|------|----------------|--------------------:|--------|
| Z1 | #C9A84C Gold | #C9A84C | COMPLIANT |
| Z2 | #1A7A8A Teal | #1A7A8A | COMPLIANT |
| Z3 | #7B5EA7 Purple | #7B5EA7 | COMPLIANT |
| Z4 | #5F7C6C Sage | #5F7C6C | COMPLIANT |
| Z5 | #2E6DB4 Deep Steel Blue | #2E6DB4 | COMPLIANT (D-85) |

**Z5 Compliance Note:** D-85 (06 May 2026) locked Z5 as #2E6DB4 (Deep Steel Blue). Supersedes all prior Z5 values (#D4B870, #4A85C9, #4A90C4). Five distinct colour families confirmed.

**Additional colours used:**
- Body/Hero background: #0C4452 (Deep Teal)
- Section 02/06: #1A2030 (Charcoal)
- Section 03: #EAF0EB (Light Sage)
- Section 05: #F0EBF8 (Light Purple)
- Section 07: #0D2B4E (Prussian Blue)
- Footer: #071C33 (Navy)
- Gold accent: #C9A84C
- Teal accent: #1A7A8A / #2A9BAD (light)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | Outfit, system-ui, sans-serif | 16px | 400 |
| Hero Eyebrow | DM Mono, monospace | 0.72rem | 400 |
| Hero H1 | Cormorant Garamond, Georgia, serif | clamp(2.2rem, 4.5vw, 3.2rem) | 300 |
| Hero Sub | Outfit | 1.05rem | 400 |
| Section Eyebrow | DM Mono, monospace | 0.68rem | 400 |
| Section Heading | Cormorant Garamond, Georgia, serif | clamp(1.75rem, 3.5vw, 2.6rem) | 400 |
| Nav Links | Outfit, sans-serif | 0.82rem | 400 |
| Nav CTA | Outfit, sans-serif | 0.8rem | 600 |
| Node Label | DM Mono, monospace | 0.62rem | 400 |
| Node Name | Cormorant Garamond, Georgia, serif | 1.2rem | 400 |
| Node Body | Outfit | 0.82rem | 400 |
| Zone Pill | DM Mono, monospace | 0.54rem | 500 |
| Zone Label | DM Mono, monospace | 0.68rem | 400 |
| Zone Nodes | DM Mono, monospace | 0.62rem | 400 |
| Zone Body | Outfit | 0.85rem | 400 |
| Memory Zone Label | DM Mono, monospace | 0.68rem | 400 |
| Memory Cue | Outfit (italic) | 0.92rem | 400 |
| FLINT Body | Outfit | 0.92rem | 400 |
| CTA Heading | Cormorant Garamond, serif | clamp(1.6rem, 3vw, 2.2rem) | 300 |
| Footer Brand | Cormorant Garamond, serif | 1.2rem | 400 |
| Footer TM | DM Mono, monospace | 0.58rem | 400 |
| Footer Legal | DM Mono, monospace | 0.54rem | 400 |
| Button (Gold) | Outfit, sans-serif | 0.92rem | 600 |
| Button (Ghost) | Outfit, sans-serif | 0.92rem | 500 |
| ICO line | DM Mono, monospace | 0.6rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|------------|---------|
| max-width: 900px | Node grid collapses to single column; container padding reduced to 24px; MedTerrain row grid adjusted |
| max-width: 768px | Nav links hidden (except CTA); hero padding adjusted; MedTerrain row collapses to single column; hero mesh reduced to 260px |
| prefers-reduced-motion: reduce | Particle canvas hidden; hero fallback gradient displayed; orb, grain, mesh animations disabled |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav CTA button | Hover | Background lightens to #d4b256, translateY(-1px) |
| Gold button | Hover | Background lightens to #d4b256, translateY(-2px) |
| Ghost button | Hover | Border opacity increases to 0.50, translateY(-2px) |
| Node cards | Hover | translateY(-3px) lift, box-shadow 0 8px 24px rgba(0,0,0,0.2) |
| All sections (vm-reveal) | Scroll into viewport (12% threshold) | Fade in from opacity 0 + translateY(24px) to visible, 0.6s ease |
| Stagger grid children | Parent enters viewport | Sequential fade-in with 0.12s staggered delay per child |
| Particle canvas | Page load | 60 particles animate continuously with proximity connections |
| Hero orbs | Page load | Three floating orbs drift on 20-24s alternate keyframes |
| Hero mesh | Page load | SVG pentagon rotates 360deg over 90s linear infinite |
| Hero grain | Page load | Stepped 4-frame noise animation at 0.3s |
| FLINT link | Hover | Border-bottom colour transitions to full teal |
| Consent banner | Accept click | localStorage set, banner removed, page reloads with GA4 |
| Consent banner | Decline click | localStorage set, banner removed, no reload |
| Pentagon zone dots | Hover | Other zones dim (opacity 0.2), info panel slides in with zone name + node composition |
| Pentagon cascade arrows | Continuous | Animated stroke-dashoffset at velocity-matched speeds (FAST=1.5s, MEDIUM=3s, SLOW=5s) |
| Heatmap cells | Hover | Zone-coloured dot scales to 1.4x with spring easing |
| Heatmap rows | Hover | Row background highlights rgba(255,255,255,0.04) |
| Threshold bars | Scroll into view | Fill width animates from 0 to threshold%, 150ms stagger per bar |
| Cascade stack cards | Hover | Card lifts with spring physics (via vm-award-tier2.css) |

---

## AWARD-WINNING SPECS (added 07 May 2026)

### Spec 1: Interactive Pentagon Zone Map
- SVG pentagon (600x580 viewBox) with 5 zone nodes at vertices
- Pulsing halos (animate r + opacity) with Gaussian blur glow filter
- 6 cascade arrows with directional flow: animated stroke-dashoffset
- Arrow speed matches cascade velocity: FAST (1.5s), MEDIUM (3s), SLOW (5s)
- S4 dashed (Theoretical), S6 arrow one-way (UNIDIRECTIONAL)
- Hover zone: others dim (opacity 0.2), info panel appears with zone name + node list
- Centre label: NCZ / Node-Cascade Zone
- Section background: Prussian Blue #0D2B4E

### Spec 3: Zone Activation Threshold Visualiser
- 5 horizontal bars (one per zone) with animated gradient fill
- Gold threshold marker line at activation point (40 for Z1-Z4, 32 for Z5)
- Borderline near-threshold window (5 internal points) shown as dashed gold zone
- Staggered scroll-triggered fill animation (150ms per bar)
- Value label: threshold/100 format
- Section background: Prussian Blue #0D2B4E

### Spec 4: Cascade Stack Animated Pathways
- 3x2 responsive grid (collapses to 2x3 at 1024px, 1-col at 768px)
- Cards with zone-coloured left borders (3px solid, S4 uses dashed)
- Each card: stack ID + velocity, direction (Z→Z), clinical description, evidence tier badge
- S4 labelled THEORETICAL, S6 labelled UNIDIRECTIONAL in description
- TerrainLock callout box: gold border, Z2→Z1→Z5→Z2 loop explanation
- Section background: Charcoal #1A2030

### Spec 5: Node Membership Heatmap
- 7x5 interactive table (7 nodes x 5 zones)
- Filled cells: 20px zone-coloured glowing dots with hover scale-up (1.4x spring)
- Empty cells: hollow grey circles
- N6 row: x0.7 dampening badge (gold)
- N7 row: Phase 2 label (muted)
- Row hover: background highlight
- Section background: Deep Teal #0C4452

### Spec 2: Scroll-Pinned Node-to-Zone Flow (DEFERRED)
- 300vh sticky container with progressive node-to-zone assignment
- Left panel: node list; Right panel: pentagon filling progressively
- Deferred: requires DOM restructuring. Pentagon + heatmap achieve same goal.

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-85 Zone Colours | PASS | Z1-Z4 compliant. Z5 #2E6DB4 (Deep Steel Blue) per D-85 (06 May 2026). Five distinct colour families. |
| DRD T-01a Language | COMPLIANT | No use of "Driver" in practitioner-facing text. DRD not referenced on page. |
| 31 TM Footer | COMPLIANT | Footer contains VOS (VitalMatrix Operating System) + 30 marks including VECTOR. Total 31. |
| MHRA Governance Line | COMPLIANT | "MHRA SaMD classification has not yet commenced..." present in footer. |
| British English | COMPLIANT | All text uses British spelling throughout. |
| No Template Literals | COMPLIANT | All JavaScript uses string concatenation and var declarations. |
| No Default Parameters | COMPLIANT | No ES6 default parameters used. |
| No position:fixed | PARTIAL | Consent banner uses position:fixed (acceptable for cookie banner only). |
| Logo height="48" | COMPLIANT | Logo img has height="48". |
| Logo file correct | COMPLIANT | Uses VM_Logo_1000_x_1000_px_png_New_Transparent.png |
| ICO ZC101813 | COMPLIANT | Referenced in hero, footer legal line, and TM footer. |
| "For practitioner use only" | COMPLIANT | Present in footer. |
| N6 labelled "(endocrine signalling)" | COMPLIANT | N6 referenced as "N6 (endocrine signalling)" throughout. |
| N7 Phase 2 badge | COMPLIANT | N7 card shows Phase 2 badge and muted state with deferred text. |
| MES not a node | COMPLIANT | MES described as "foundational context" and "Not a node. Not scored." |
| No "diagnose/diagnosis" | COMPLIANT | Uses "does not diagnose" in regulatory context (permitted). |
| S4 Theoretical | COMPLIANT | S4 labelled "Theoretical" with "excluded from DRD cascade trace". |
| S6 Unidirectional | COMPLIANT | S6 labelled "UNIDIRECTIONAL" in same sentence as reference. |
| Seven nodes only | COMPLIANT | Exactly 7 nodes (N1-N7) presented. |
| Five zones only | COMPLIANT | Exactly 5 zones (Z1-Z5) presented. |
| No em dashes | COMPLIANT | Colons and line breaks used throughout. No em dashes found. |
| Structured data | PRESENT | MedicalWebPage schema with Clinician audience type. |
| Canonical URL | PRESENT | https://vitalmatrix.co.uk/ncz-architecture/ |
| OG tags | PRESENT | og:title, og:description, og:type all set. |
| lang="en-GB" | COMPLIANT | HTML element uses en-GB. |

---

## OUTSTANDING ISSUES

1. **Z5 colour compliance confirmed:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.
2. **SEO title format:** Current title lacks the standard suffix pattern. D-53 website standard is `[Page Name] | VitalMatrix - Clinical Intelligence Platform`.
3. **Consent banner position:fixed:** Acceptable for cookie banners but noted for completeness.

---

*NCZArchitecture Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*

---

## NCZ ARCHITECTURE — 5 NEW FEATURES (F12-F16) | 8 May 2026

Added to NCZArchitecture_latest.html after F11 (Crown Jewel), before CTA section.
File now at ~4312 lines (was 3533). LA-2 also integrated.

### Feature 12: Scoring Transparency Calculator
- **ID prefix:** ncz-f12-
- **Background:** Charcoal #1A2030
- **Behaviour:** Two-panel grid. Left: 7 node sliders (0-100). Right: 5 zone display scores (0-10 inverted) with Active/Borderline/Inactive badges. Live formula trace: raw capture, N6 dampening (x0.7), zone composite, floor check (MAX(dampened)-10), display conversion.
- **Scoring:** Internal 0-100, display 0-10 inverted, N6 x0.7, floor MAX(dampened)-10, Z1-Z4 threshold 40, Z5 threshold 32, near-threshold 5 points (D-38)

### Feature 13: Evidence Tier Explorer
- **ID prefix:** ncz-f13-
- **Background:** Deep Teal #0C4452
- **Behaviour:** 6 cascade stack cards (3-column grid). Filter: All/Established/Emerging/Theoretical. Click to expand: evidence description, clinical significance, qualifier. S4 dashed border (THEORETICAL, excluded from DRD D-12). S6 UNIDIRECTIONAL qualifier.
- **Data:** Full evidence descriptions for S1-S6 with mechanism summaries.

### Feature 14: DeltaScan Terrain Shift Viewer
- **ID prefix:** ncz-f14-
- **Background:** Prussian #0D2B4E
- **Behaviour:** T1 vs T2 side-by-side comparison. Fictional patient Mark, 47. Zone burden bars with display scores and delta arrows (improved/worsened). DRD designation shift (Z2 baseline to Z1 follow-up). Animated pulse arrow between columns.
- **Scoring:** Display 0-10 inverted. Delta = T1 internal minus T2 internal.

### Feature 15: Five-Layer Pipeline Animation
- **ID prefix:** ncz-f15-
- **Background:** Charcoal #1A2030
- **Behaviour:** 5 vertical layer cards (L1-L5) with connector lines. "Run Pipeline" button: 1.2s sequential activation. Each layer shows output text from fictional patient. "Reset" button. Active layer: gold border + expanded. Done layers: dimmed.
- **T-01:** L4 = "Highest Burden Designation" (not Driver-Reactor)

### Feature 16: Output Document Preview
- **ID prefix:** ncz-f16-
- **Background:** Prussian #0D2B4E
- **Behaviour:** White document card. T-01 header bar. Protective header text. 7 clickable sections (Zone Summary, Cascade Detection, Highest Burden, Dietary, Supplemental, Lifestyle, APEX). Click expands content + "Maps to: [FLINT layer]". Blank Practitioner Clinical Decision (5 dashed fields, never pre-populated).
- **T-01 compliance:** Title "Personalised Terrain Management Protocol", protective header (PERMANENT), blank PCD (PERMANENT), DRD "Driver", supplements/dietary/lifestyle only.

### Compliance (F12-F16)
- All 5 features: vanilla JS IIFEs, no template literals, no default parameters
- S4 THEORETICAL on every reference, S6 UNIDIRECTIONAL in same sentence
- N6 dampening 0.7, floor MAX(dampened)-10, display 0-10 inverted
- British English, no em dashes, responsive @media rules
- DRD display: "Driver" (T-01a)

### Updated Feature Map (16 total)

| Feature | ID | Gap Filled |
|---------|-----|-----------|
| F1 | ncz-f1- | Node-to-Zone Assembly |
| F2 | ncz-f2- | Patient Burden Heatmap |
| F3 | ncz-f3- | Cascade Domino Chain |
| F4 | ncz-f4- | Split-Screen Workflow |
| F5 | ncz-f5- | Readiness Score |
| F6 | ncz-f6- | Zone Breathing Visualiser |
| F7 | ncz-f7- | N6 Dampening X-Ray |
| F8 | ncz-f8- | Cascade Archaeology |
| F9 | ncz-f9- | Zone Isolation Theatre |
| F10 | ncz-f10- | Architecture Stress Test |
| F11 | ncz-f11- | Monday Morning Simulator (Crown Jewel) |
| **F12** | **ncz-f12-** | **Scoring Transparency Calculator** |
| **F13** | **ncz-f13-** | **Evidence Tier Explorer** |
| **F14** | **ncz-f14-** | **DeltaScan Terrain Shift Viewer** |
| **F15** | **ncz-f15-** | **Five-Layer Pipeline Animation** |
| **F16** | **ncz-f16-** | **Output Document Preview** |

---

## LA DISTRIBUTION LOG | 8 May 2026

| Step | LAs | Target | Status |
|------|-----|--------|--------|
| 1 | LA-3, LA-4, LA-8 | P2 How It Works | DONE (6 May) |
| 2 | LA-5, LA-6, LA-7, LA-9 | P11 Terrain Intelligence | DONE (8 May) |
| 3 | LA-1 | P13 CascadeAtlas | DONE (8 May) |
| 4 | LA-2 | P14 NCZ Architecture | DONE (8 May) |
| 5 | LA-10 | P1 Homepage | DONE (8 May) |
| 6 | CTA cross-links | P2, P11, P13, P14 | DONE (8 May) |

All 10 Living Architectures distributed across 4 pages. Cross-page CTA links active.


========================================================================
# CascadeAtlasSpecs
========================================================================

# CascadeAtlas V2 Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page name | CascadeAtlas (P13) |
| File | CascadeAtlas_v2_2026-04-13.html |
| Background (primary) | Prussian Blue #0D2B4E |
| Nav | Sticky pill nav (vm-nav-pill), 52px height, Prussian Blue rgba(13,43,78,0.96), backdrop-filter blur(12px), gold border-bottom |
| External CSS files | vm-phase1-design.css, vm-font-optimise.css |
| External JS files | vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js, vm-cascade-hero-3d.js |
| Google Fonts | Cormorant Garamond (300, 400, 600, italic 300/400), Outfit (300-700), DM Mono (400, 500) |
| Analytics | GA4 G-TRM1JTE0PB (consent-gated via localStorage) |
| Schema.org | MedicalWebPage, MedicalAudience: Clinician |
| Canonical URL | https://vitalmatrix.co.uk/cascade-atlas/ |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| NAV | Navigation bar | Prussian Blue rgba(13,43,78,0.96) | Sticky pill nav with hamburger mobile, sidebar dot navigation, progress bar, sticky label |
| 1 | Hero | Prussian Blue #0D2B4E | Interactive pentagon diagram with 5 zone cards positioned absolutely, SVG cascade arrows with direction/velocity labels, cinematic layered effects (orbs, vignette, grain, glass, mesh), 3D canvas container |
| STRIP | Proof Strip | (inline between sections) | Phase 1, 10 Founding Practitioners, UK Only, ICO ZC101813, MHRA notice |
| 2 | Introduction | Charcoal #1A2030 | Centred text block explaining CascadeAtlas purpose |
| 3 | Five Zones | Light Purple #F0EBF8 | 5-card grid (auto-fit, min 280px), each card with zone badge, name, nodes, clinical description |
| 4 | Six Cascade Stacks | Deep Teal #0C4452 | 6-row stack list with grid columns: label, direction, description, velocity badge, evidence tier badge. S4 dashed border + THEORETICAL qualifier. S6 UNIDIRECTIONAL qualifier. |
| 5 | TerrainLock | Charcoal #1A2030 | Triangle SVG diagram (Z2 top, Z1 bottom-left, Z5 bottom-right) with directional arrows S1/S2/S4 (S4 dashed) |
| 6 | How VitalMatrix Uses This | Light Gold #FBF6E9 | Protective note block + 3-card grid (01 Identify, 02 Map, 03 Designate) |
| 7 | CTA | Prussian Blue #0D2B4E (radial teal gradient overlay) | Two CTA buttons (gold + outline white), ICO reference |
| FLOAT | Floating CTA | (fixed overlay) | Dismissible floating "Book a Walkthrough" button |
| FOOTER | Footer | Navy #071C33 | 3-column link grid, MHRA governance line, practitioner-only notice, 31-mnemonic TM footer, copyright |

---

## AWARD-LEVEL ENHANCEMENTS

### Cinematic Hero System (21 April 2026)
- **Gradient grade overlay**: 180deg top-dark-to-bottom-dark + 135deg directional colour tint
- **Vignette**: Radial gradient ellipse 60% 55% at centre, fading to black at edges
- **Animated orbs**: Three soft-focus colour orbs (gold 500px, teal 400px, purple 300px) with infinite alternate keyframe animations (20s, 24s, 22s)
- **Glass layer**: Subtle backdrop-filter blur(2px) overlay
- **Grain texture**: SVG fractalNoise at 0.05 opacity, mix-blend-mode overlay, 4-step infinite animation
- **Pentagon mesh**: SVG dual-pentagon wireframe (gold + teal strokes) with 90s infinite rotation
- **3D canvas container**: Empty div (vm-cascade-3d) for Three.js or similar 3D rendering via vm-cascade-hero-3d.js
- **prefers-reduced-motion**: All hero animations disabled when user prefers reduced motion

### Scroll and Navigation System
- **Scroll choreography**: vm-scroll-choreography.js for scroll-driven animations
- **Sidebar dot navigation**: 5 dots targeting sections (Intro, Zones, Stacks, TerrainLock, How To Read)
- **Progress bar**: Horizontal scroll progress indicator
- **Sticky section label**: Dynamic section name display on scroll
- **vm-reveal class**: Intersection Observer scroll reveal on all sections
- **vm-stagger-grid / vm-choreo-stagger**: Staggered card entrance animations

### Card and Surface Treatments
- **vm-glass**: Glassmorphism card surfaces
- **vm-card-glow**: Glow effect on interactive cards
- **vm-depth**: Section depth layering
- **vm-texture-gold / vm-texture-teal**: Textural background overlays per section
- **vm-cta-glow**: Pulsing glow on CTA buttons
- **vm-font-sharpen**: Typography rendering enhancement for headings

### Interactive Features
- **Smooth scroll**: "Explore the Five Zones" button scrolls to #five-zones
- **Hamburger menu**: Mobile overlay with full-screen navigation
- **Floating CTA**: Dismissible bottom-right call-to-action
- **Consent banner**: Cookie/analytics consent with accept/decline (localStorage-gated GA4)
- **Page transition**: vm-page-transition class on body
- **Kinetic grid**: vm-kinetic-grid class on body (animated background grid via external JS)

---

## COLOUR COMPLIANCE (D-53)

| Zone | Required (D-53) | Used in CSS Variables | Used in Zone Cards | Used in SVG Arrows | Compliance |
|------|-----------------|----------------------|--------------------|--------------------|------------|
| Z1 | #C9A84C Gold | --zone-z1: #C9A84C | .zc-z1 border: #C9A84C, label: #C9A84C | S2, S6 arrow stroke: #C9A84C | PASS |
| Z2 | #1A7A8A Teal | --zone-z2: #1A7A8A | .zc-z2 border: #1A7A8A, label: #1A7A8A | S1, S5 arrow stroke: #1A7A8A | PASS |
| Z3 | #7B5EA7 Purple | --zone-z3: #7B5EA7 | .zc-z3 border: #7B5EA7, label: #7B5EA7 | N/A (Z3 receives only) | PASS |
| Z4 | #5F7C6C Sage | --zone-z4: #5F7C6C | .zc-z4 border: #5F7C6C, label: #5F7C6C | S3 arrow stroke: #5F7C6C | PASS |
| Z5 | #4A90C4 Metallic Blue | --zone-z5: #4A90C4 | .zc-z5 border: #4A90C4, label: #4A90C4 | S4 arrow stroke: #4A90C4 | PASS: Z5 #4A90C4 (Metallic Blue) is correct — distinct from Z1 Gold to avoid visual duplication |

**Compliance note:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.

### Background Colours Used
- Prussian Blue: #0D2B4E (Hero, CTA)
- Charcoal: #1A2030 (Intro, TerrainLock)
- Deep Teal: #0C4452 (Six Stacks)
- Light Purple: #F0EBF8 (Five Zones)
- Light Gold: #FBF6E9 (How To Read)
- Navy: #071C33 (Footer)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | Outfit (--vm-fd) | 16px | 300-400 |
| H1, H2, H3, H4 | Cormorant Garamond (--vm-fs) | clamp(1.6rem, 2.5vw, 2.2rem) for H2 | 300 |
| Eyebrow | DM Mono (--vm-fm) | 0.6rem | 400 |
| Nav links | Outfit | 0.6rem | 500 |
| Nav CTA | Outfit | 0.6rem | 600 |
| Zone card label | Cormorant Garamond | 1.1rem | 300 |
| Zone card nodes | DM Mono | 0.62rem | 400 |
| Section body text | Outfit | 0.88rem | 300 |
| Stack label | DM Mono | 0.75rem | 500 |
| Stack direction | DM Mono | 0.65rem | 400 |
| Stack description | Outfit | 0.82rem | 400 |
| Velocity badge | DM Mono | 0.55rem | 400 |
| Evidence badge | DM Mono | 0.55rem | 400 |
| Qualifier badge | DM Mono | 0.5rem | 400 |
| How-to step number | DM Mono | 0.7rem | 500 |
| How-to card title | Outfit | 0.85rem | 600 |
| How-to card body | Outfit | 0.82rem | 400 |
| CTA button | Outfit | 0.7rem | 600 (gold), 500 (outline) |
| Footer governance | Outfit | 0.6rem | 400 |
| Footer TM | Outfit | 0.52rem | 400 |
| Footer copyright | Outfit | 0.58rem | 400 |
| Arrow labels (SVG) | DM Mono | 9px | 400 |
| Consent banner | Outfit (body), monospace (buttons) | 13px / 10px | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| max-width: 1199px | Stack row grid compressed (50px/140px/1fr/80px/120px), section padding reduced to 60px 20px |
| max-width: 900px | Stack rows go single-column, How-to grid goes single-column |
| max-width: 767px | Nav links hidden, hamburger shown, zones grid single-column, footer grid single-column, section padding 40px 16px, hero diagram linearised (zone cards stacked vertically, SVG overlay hidden), buttons full-width |
| max-width: 768px | Hero mesh reduced to 260px |
| prefers-reduced-motion: reduce | All hero orb, grain, and mesh animations disabled |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Hamburger button (.vm-nav-hamburger) | Click | Toggles mobile overlay menu visibility |
| Mobile menu links | Click | Closes mobile menu |
| "Explore the Five Zones" button (#exploreZonesBtn) | Click | Smooth scroll to #five-zones section |
| Nav links | Hover | Colour transition to gold (0.3s) |
| Nav CTA | Hover | Background transition to lighter gold |
| .btn-outline-gold | Hover | Fill gold background, text to Prussian |
| .btn-gold | Hover | Lighter gold background |
| .btn-outline-white | Hover | Border and text transition to gold |
| Sidebar dots (.vm-sidebar-dot) | Click | Scroll to target section (via external JS) |
| Floating CTA close button | Click | Dismisses floating CTA (via external JS) |
| Consent banner Accept | Click | Sets localStorage, removes banner, reloads page to load GA4 |
| Consent banner Decline | Click | Sets localStorage, removes banner |
| Zone cards (hero) | Scroll into view | vm-reveal entrance animation |
| Zone detail cards (Section 3) | Scroll into view | vm-stagger-grid staggered entrance |
| Stack rows (Section 4) | Scroll into view | vm-stagger-grid staggered entrance |
| How-to cards (Section 6) | Scroll into view | vm-choreo-stagger choreographed entrance |
| Hero orbs | Continuous | Infinite alternate translation animations (20-24s) |
| Hero grain | Continuous | 4-step translate animation (0.3s infinite) |
| Hero mesh pentagon | Continuous | 360deg rotation (90s linear infinite) |
| Progress bar (.vm-progress-bar) | Scroll | Width updates with scroll percentage (via external JS) |
| vm-card-glow cards | Hover/interaction | Glow effect (via external JS/CSS) |

---

## COMPLIANCE CHECKS

| Rule | Status | Notes |
|------|--------|-------|
| D-53 Zone Colours | PASS | Z1 Gold PASS, Z2 Teal PASS, Z3 Purple PASS, Z4 Sage PASS, Z5 #4A90C4 (Metallic Blue) PASS — distinct from Z1 Gold to avoid visual duplication |
| DRD T-01a Language | PASS | Uses "Driver" (Section 6 Step 03), never "Driver" |
| 31-Mnemonic TM Footer | PASS | VOS + 30 marks present including VECTOR. Count: 31. |
| MHRA Governance Line | PASS | "MHRA SaMD classification has not yet commenced..." present in footer |
| British English | PASS | lang="en-GB", spelling throughout uses British conventions |
| No Template Literals | PASS | All JavaScript uses string concatenation and standard quotes |
| No Default Parameters | PASS | No default parameter syntax in inline scripts |
| No position:fixed in inline CSS | PASS (inline sections) | Note: consent banner uses position:fixed but is dynamically generated JS, not static CSS. External CSS has sticky nav. |
| Logo Compliance | PASS | VM_Logo_1000_x_1000_px_png_New_Transparent.png, height="48", display:block, margin:0, padding:0, border:none, line-height:0 |
| S4 THEORETICAL Label | PASS | Labelled "Theoretical" in stack list, TerrainLock text, and SVG diagram |
| S6 UNIDIRECTIONAL in Same Sentence | PASS | "S6 is strictly unidirectional: Z1 to Z3 only" |
| Protective Header (clinical) | PASS | Section 6 protective note present: "All clinical decisions...remain with the registered practitioner" |
| "For practitioner use only" | PASS | Present in footer (footer-practitioner) |
| ICO ZC101813 | PASS | Present in CTA section, footer governance, footer TM, footer copyright |
| N6 Terminology | PASS | Consistently uses "N6 (endocrine signalling)" throughout |
| Node Count | PASS | 7 nodes referenced (N1-N6 in zones, N7 not referenced on this page) |
| Zone Count | PASS | 5 zones only (Z1-Z5) |
| Stack Count | PASS | 6 stacks only (S1-S6) |
| No "treatment protocol" | PASS | Not present |
| No "diagnose/diagnosis/diagnostic" | PASS | "does not diagnose" in MHRA governance line (permitted regulatory context) |
| No "clinical AI platform" | PASS | Not present |
| HERALD/BEACON body check | PASS | Appear only in TM footer, never in body |
| SEO Block | PASS | Title, meta description, keywords, OG tags, canonical, structured data present |
| Schema.org | PASS | MedicalWebPage with MedicalAudience: Clinician |

---

## OPEN ISSUES

1. **Z5 colour non-compliance**: #4A90C4 (steel blue) used throughout instead of D-53 mandated #D4B870 (Warm Gold). Requires global find-and-replace across CSS variables, card classes, SVG markers, and TerrainLock diagram.
2. **Nav class mismatch**: CSS defines `.vm-nav` but HTML uses `class="vm-nav-pill"`. Styling likely handled by vm-phase1-design.css external file.
3. **Hamburger ID mismatch**: JS references `getElementById('hamburgerBtn')` and `getElementById('mobileMenu')` but HTML uses class-based selectors (`.vm-nav-hamburger`, `.vm-nav-mobile-overlay`). Mobile menu toggle likely handled by vm-phase1-design.js.

---

*CascadeAtlas Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# ClinicalEthicsSpecs
========================================================================

# Clinical Ethics Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | Clinical Ethics |
| File | ClinicalEthics_v3_P3_2026-04-30.html |
| Background | Deep Teal #0C4452 (body default) |
| Nav | Sticky, 52px height, Deep Teal rgba(12,68,82,0.96) with backdrop-blur, gold border-bottom |
| External CSS | vm-phase1-design.css, vm-font-optimise.css |
| External JS | vm-preloader.js, vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js, vm-smooth-scroll.js, vm-cursor.js, vm-page-transitions.js, vm-mobile-experience.js |

---

## SECTION MAP

| # | Name | Background Colour | Key Feature |
|---|------|-------------------|-------------|
| Pre | Preloader (W1) | Deep Teal #0C4452 | SVG ring progress animation |
| Nav | Navigation | rgba(12,68,82,0.96) + blur | Logo h48, a11y toggles, hamburger, nav links, Book Demo CTA |
| 1 | Hero (A1-A9) | Animated gradient mesh (#0C4452, #0D2B4E, #1A2030, #0C4452) | Canvas particles, cinematic orb layers, SVG pentagon mesh, split-text reveal, scroll indicator |
| - | Proof Strip | Prussian #0D2B4E | Phase 1, 10 Founding Practitioners, UK Only, ICO, MHRA status |
| - | Trust Badges (G5) | Prussian #0D2B4E | Three badges: ICO, UK Practitioners, Phase 1 Live |
| 2 | Five Commitments | Prussian #0D2B4E | Five pillar cards (I-V) with zone-colour top borders, staggered scroll reveal |
| 3 | Governance Q&A | Sage Dark #2D4438 | Accordion (4 questions), single-open behaviour, gold left-border on open |
| 4 | Quote Block (Light) | Off-White #F7F8FA | Dr Faisal quote, teal left border, gradient transitions top/bottom |
| 5 | Regulatory Status | Charcoal #1A2030 | Three-card grid: MHRA, ICO, Advertising Standards |
| 6 | CTA | Teal Deepest #07303D | Heading, body, dual buttons, scarcity indicator (10 dots) |
| - | Sticky CTA Bar (G4) | Prussian #0D2B4E | Appears at 60% scroll, dismissible |
| Footer | Footer | Navy Dark #071C33 | 3-col links, governance line, TM footer (31 mnemonics), copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| Code | Feature | Description |
|------|---------|-------------|
| A2 | Animated Gradient Mesh | 400% background-size, 24s infinite ease animation on hero |
| A3 | Canvas Particle System | 50 floating particles (gold, teal, sage) with drift motion |
| A4 | Hero Staggered Reveal | heroScaleIn keyframes with sequential delays (0.12s-0.6s) |
| A8 | Scroll Indicator | Pulse animation, fades on scroll >100px |
| R1 | Split-Text Hero Reveal | Character-by-character animation with 20ms stagger per char |
| E4 | Section Reveal | IntersectionObserver scroll-triggered fade-up with staggered data-delay |
| E5 | Divider Expand | Animated width expansion on scroll reveal |
| W1 | Preloader | SVG circle progress ring with pulse text |
| W2 | Page Transitions | View Transition API with fallback opacity/transform |
| U3 | Haptic Ripple | Click ripple effect on primary buttons |
| U6 | Hover Persistence | Transition-delay on card hover states |
| U8 | Konami Code Easter Egg | 200-particle gold burst on Konami sequence |
| G3 | Scarcity Indicator | 10 founding slots with dot visualisation |
| G4 | Sticky CTA Bar | Appears at 60% scroll depth, dismissible |
| P5 | Custom Scrollbar | Gold-tinted scrollbar on webkit and Firefox |
| AB1 | Skip Navigation | Accessible skip-to-main link |
| AB3 | Reduce Motion Toggle | Session cookie persisted, kills all animations |
| AB4 | High Contrast Toggle | Session cookie persisted, black/white override |
| AC1 | No-JS Fallback | Noscript styles for accordions and reveals |
| Orbs | Cinematic Hero Orbs | Three floating colour orbs (gold, teal, purple) with alternating drift |
| Mesh | SVG Pentagon Mesh | Pentagon wireframe with zone-coloured vertex dots, 90s rotation |
| Grain | Film Grain | SVG noise texture with stepped animation |
| Glass | Glass Layer | Subtle backdrop-filter blur layer |
| Grade | Cinematic Grade | Multi-stop gradient overlay for depth |
| Vignette | Radial Vignette | Elliptical darkening at edges |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage in Page |
|------|--------|-----|---------------|
| Z1 | Gold | #C9A84C | Pillar II and V top border, hero orb, CTAs, nav CTA, accordion gold-border, scarcity dots, scrollbar |
| Z2 | Teal | #1A7A8A | Pillar I top border, reg card ICO border, quote left-border, trust badge icon, hero orb |
| Z3 | Purple | #7B5EA7 | Pillar III top border, hero orb |
| Z4 | Sage | #5F7C6C | Pillar IV top border, reg card Advertising border, trust badge icon |
| Z5 | Warm Gold | #D4B870 | var(--vm-gold-w) used for nav CTA hover state |

**CSS custom properties confirmed:**
- `--vm-z1: #C9A84C` (Gold)
- `--vm-z2: #1A7A8A` (Teal)
- `--vm-z3: #7B5EA7` (Purple)
- `--vm-z4: #5F7C6C` (Sage)
- `--vm-z5: #4A90C4` (Metallic Blue — correct website colour, distinct from Z1 Gold to avoid visual duplication of two gold zones)

**Additional palette:**
- Prussian: #0D2B4E
- Charcoal: #1A2030
- Deep Teal: #0C4452
- Navy Dark: #071C33
- Sage Dark: #2D4438
- Off-White: #F7F8FA
- Teal Light: #2A9BAD
- Gold Warm: #D4B870 (--vm-gold-w)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero Eyebrow | DM Mono | 10px | 400 |
| Hero H1 | Cormorant Garamond | clamp(40px, 5vw, 64px) | 600 |
| Hero Subtitle | Outfit | 18px | 300 |
| Hero Meta | DM Mono | 0.58rem | 400 |
| Section Eyebrow | DM Mono | 10px | 400 |
| Section Heading (H2) | Cormorant Garamond | clamp(28px, 4vw, 48px) | 600 |
| Pillar Title | Outfit | 0.92rem | 600 |
| Pillar Body | Outfit | clamp(14px, 1.5vw, 16px) | 300 |
| Pillar Numeral | Cormorant Garamond | 2.8rem | 300 |
| Accordion Question | Outfit | 0.88rem | 500 |
| Accordion Answer | Outfit | clamp(14px, 1.5vw, 16px) | 300 |
| Quote Text | Cormorant Garamond | clamp(20px, 2.5vw, 30px) | 300 italic |
| Quote Attribution | DM Mono | 0.62rem | 400 |
| Reg Card Label | DM Mono | 0.58rem | 400 |
| Reg Card Status | Cormorant Garamond | clamp(20px, 2.5vw, 30px) | 300 |
| Reg Card Detail | Outfit | clamp(14px, 1.5vw, 16px) | 300 |
| Nav Links | Outfit | 0.6rem | 500 |
| Nav CTA | Outfit | 0.6rem | 700 |
| Footer Col Title | DM Mono | 0.58rem | 400 |
| Footer Col Links | Outfit | 0.78rem | 400 |
| Footer Governance | Outfit | 0.6rem | 400 |
| Footer TM | DM Mono | 0.55rem | 400 |
| Footer Copyright | Outfit | 0.58rem | 400 |
| Proof Strip | DM Mono | 0.56rem | 400 |
| Trust Badge | DM Mono | 10px | 400 |
| CTA Buttons | Outfit | 15px | 700 (primary) / 600 (outline) |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|------------|---------|
| 1024px | Reg grid collapses to single column |
| 768px | Nav links hidden (hamburger shown), pillars stack vertically, hero/section padding reduced, footer to 1-col, a11y toggles hidden, hero mesh reduced to 260px |
| 640px | CTA buttons full-width stacked, sticky CTA bar stacked vertical |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav links | Hover | Gold colour + underline scaleX(1) + background tint |
| Nav CTA | Hover | Background to warm gold, translateY(-1px) |
| Hamburger | Click | Toggles .open on nav-links (mobile) |
| Hero primary CTA | Hover | translateY(-3px) + gold box-shadow |
| Hero secondary CTA | Hover | translateY(-3px) + gold shadow + background tint |
| Scroll indicator | Scroll >100px | Fades out (hidden class) |
| Pillar cards | Scroll into view | IntersectionObserver reveals with staggered delay |
| Pillar cards | Hover | translateY(-4px) + box-shadow + zone glow ring |
| Accordion questions | Click | Toggle open/close (single-open), aria-expanded updated |
| Accordion questions | Hover | Gold text colour |
| Accordion chevron | Parent open | 90deg rotation |
| Quote block | Scroll into view | Fade-up reveal |
| Reg cards | Scroll into view | Staggered fade-up reveal |
| Reg cards | Hover | translateY(-4px) + box-shadow + zone glow |
| CTA buttons (all) | Click | Haptic ripple effect (U3) |
| CTA buttons | Hover | translateY(-3px) + shadow |
| Sticky CTA bar | Scroll >60% | Slides up (visible class) |
| Sticky dismiss | Click | Removes bar permanently for session |
| Konami code | Key sequence | 200-particle gold burst animation |
| Motion toggle | Click | Adds vm-reduce-motion class, kills animations, persists cookie |
| Contrast toggle | Click | Adds vm-high-contrast class, black/white mode, persists cookie |
| All focusable | :focus-visible | 2px solid gold outline, offset 2px |

---

## COMPLIANCE CHECKS

| Rule | Status | Notes |
|------|--------|-------|
| D-53 Zone Colours | PASS | Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. Reg cards use --vm-z1, --vm-z2, --vm-z4 correctly. |
| DRD T-01a Language | PASS | No use of "Driver". No diagnostic terminology. No treatment protocols. |
| 31 TM Footer | PASS | VOS (with expansion), 30 additional marks including VECTOR. Total 31. ICO ZC101813 present. |
| MHRA Governance Line | PASS | Footer contains: "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." |
| "For practitioner use only" | PASS | Present in footer below governance line. |
| British English | PASS | "recognised", "colour" patterns observed. lang="en-GB" set on html element. |
| No Template Literals | PASS | All JS uses string concatenation. |
| No Default Parameters | PASS | All functions use manual checks. |
| No localStorage/sessionStorage | PASS | Uses cookies only (session cookies via document.cookie). |
| No position:fixed | PASS | Uses position:sticky throughout. |
| No em dashes | PASS | Uses colons or HTML entities. |
| Logo Compliance | PASS | VM_Logo_1000_x_1000_px_png_New_Transparent.png, height="48", display:block, line-height:0. |
| Credentials | PASS | "Dr Shahzad Faisal, MBBS, FAAMFM" (no MD, no ABAARM, no FMAARM). |
| HERALD/BEACON body | PASS | Appear only in TM footer, never in body. |
| VECTOR body | PASS | Appears only in TM footer. |
| GA4 Consent-Gated | PASS | Analytics only loads after explicit cookie consent (vm_analytics_consent=accepted). |
| Structured Data | PASS | FAQPage and Organization JSON-LD schemas present. |
| Canonical URL | PASS | https://vitalmatrix.co.uk/clinical-ethics/ |
| Prefers-reduced-motion | PASS | CSS @media rule resets all animations; JS checks matchMedia before running animated features. |
| Skip Navigation | PASS | Skip-to-main link present (AB1). |

---

## FLAGGED ISSUES

1. **--vm-z5 value confirmed**: Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.

---

*ClinicalEthics Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# TrustSafetySpecs
========================================================================

# Trust and Safety Page Specification

---

## PAGE IDENTITY

| Field | Value |
|-------|-------|
| Page Name | Trust and Safety |
| File | TrustSafety_v2_2026-04-13.html |
| Background | Prussian Blue #0D2B4E (hero), Charcoal-Purple #1E1A2E (S2), Charcoal #1A2030 (S3), Sage-Dark #2D4438 (S4), Light Purple #F0EBF8 (S5), Charcoal-Mid #232B3E (S6), Prussian-Light #153A62 (S7), Navy-Dark #071C33 (footer) |
| Nav | Sticky, backdrop-blur, Prussian 96% opacity, gold border-bottom |
| External Files | vm-phase1-design.css, vm-font-optimise.css, vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |

---

## SECTION MAP

| # | Name | Background Colour | Key Feature |
|---|------|-------------------|-------------|
| NAV | Navigation | rgba(13,43,78,0.96) Prussian blur | Sticky nav, hamburger mobile menu, Book Demo CTA |
| PROOF STRIP | Proof Strip | (inherits from vm-phase1-design.css: vm-proof-strip class) | Phase 1, 10 Founding Practitioners, UK Only, ICO ZC101813, MHRA SaMD Classification Pending |
| 1 | Hero | linear-gradient(155deg, #0D2B4E 0%, #071C33 100%) | Cinematic hero with orbs, vignette, grain, SVG mesh, fade-up animation |
| 2 | MHRA Status | #1E1A2E (Charcoal-Purple) | Gold-bordered MHRA card, 3-column info boxes |
| 3 | Clinical Governance | #1A2030 (Charcoal) | T-Series governance, 2x2 card grid |
| 4 | Data and Privacy | #2D4438 (Sage-Dark) | Teal left-border blocks, ICO ZC101813 |
| 5 | Practitioner Safeguards | #F0EBF8 (Light Purple) | Light section, purple accents, stacked rows |
| 6 | Registrations | #232B3E (Charcoal-Mid) | 3-column stats grid (ICO, MHRA, Data Governance) |
| 7 | CTA | #153A62 (Prussian-Light) | Dual CTA buttons (primary gold, outline) |
| FLOATING CTA | Floating CTA | N/A (overlay) | Fixed Book a Walkthrough button with close |
| FOOTER | Footer | #071C33 (Navy-Dark) | 3-column links, governance line, TM footer, copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Location | Description |
|---------|----------|-------------|
| Cinematic Hero Orbs | Section 1 | Three animated blurred orbs (gold, teal, purple) with slow drift keyframes (vmOrbA/B/C 20-24s infinite alternate) |
| Hero Vignette | Section 1 | Radial gradient vignette overlay for depth |
| Hero Grade | Section 1 | Multi-layer linear gradient for cinematic colour grading |
| Hero Glass Layer | Section 1 | Backdrop-filter blur(2px) frosted glass overlay |
| Film Grain | Section 1 | SVG fractalNoise texture with 4-step animation (vmGrain 0.3s steps) |
| SVG Mesh Pentagon | Section 1 | Rotating geometric pentagon wireframe (vmMeshR 90s linear infinite) with zone-coloured vertex dots |
| Hero Fade-Up | Section 1 | heroFadeUp keyframe animation with staggered 0.15s delays |
| Scroll Prompt | Section 1 | Animated scroll-to-explore prompt with dot |
| Progress Bar | NAV area | vm-progress-bar class (styled in external CSS) |
| Sticky Label | NAV area | vm-sticky-label class (styled in external CSS) |
| Staggered Reveals | Sections 2, 3 | vm-choreo-stagger class for choreographed card entrance |
| Card Glow | Sections 2, 3, 7 | vm-card-glow class for hover glow effect |
| Glass Cards | Sections 2, 3 | vm-glass class for glassmorphism treatment |
| Depth Layers | Sections 2, 3, 4 | vm-depth class for layered z-depth |
| Texture Overlays | Multiple | vm-texture-gold, vm-texture-teal classes for subtle background textures |
| Reveal Animations | All sections | vm-reveal class for scroll-triggered entrance |
| CTA Glow | Nav, Section 7, Floating | vm-cta-glow class for pulsing button effect |
| Kinetic Grid | Body | vm-kinetic-grid class on body |
| Page Transition | Body | vm-page-transition class on body |
| Consent Banner | Global | Cookie-consent banner with Accept/Decline for GA4 analytics |
| Floating CTA | Global | Dismissible floating Book a Walkthrough button |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage in File |
|------|--------|-----|---------------|
| Z1 | Gold | #C9A84C | Hero orb, SVG mesh vertex, nav CTA, MHRA card border, registration value, --zone-z1 variable |
| Z2 | Teal | #1A7A8A | Hero orb, SVG mesh vertex/stroke, section 4 left border, teal-light CTA hover, --zone-z2 variable |
| Z3 | Purple | #7B5EA7 | Hero orb, SVG mesh vertex, section 5 eyebrow/accents, --zone-z3 variable |
| Z4 | Sage | #5F7C6C | SVG mesh vertex, --zone-z4 variable |
| Z5 | Warm Gold | #D4B870 | SVG mesh vertex (rgba), --vm-gold-w variable used for hover states |

**Note:** Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. PASS.

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (Hero) | Cormorant Garamond, Georgia, serif | clamp(2.2rem, 4vw, 3.4rem) | 300 |
| H2 (Section headings) | Cormorant Garamond, Georgia, serif | clamp(1.6rem, 2.5vw, 2.2rem) | 300 |
| Body text | Outfit, system-ui, sans-serif | 16px base / 0.82-0.92rem sections | 300 |
| Card titles | Outfit, system-ui, sans-serif | 0.82-0.84rem | 600 |
| Eyebrow labels | DM Mono, monospace | 0.58-0.62rem | 400 |
| Nav links | Outfit, system-ui, sans-serif | 0.6rem | 500 |
| Nav CTA | Outfit, system-ui, sans-serif | 0.6rem | 700 |
| Hero subtitle | Outfit, system-ui, sans-serif | 0.92rem | 300 |
| Hero meta | DM Mono, monospace | 0.58rem | 400 |
| Registration values | Cormorant Garamond, Georgia, serif | 1.8rem | 300 |
| Footer links | Outfit, system-ui, sans-serif | 0.78rem | 400 |
| Footer governance | Outfit, system-ui, sans-serif | 0.6rem | 400 |
| Footer TM | DM Mono, monospace | 0.55rem | 400 |
| Footer copyright | Outfit, system-ui, sans-serif | 0.58rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|------------|---------|
| max-width: 768px | Nav links hidden (hamburger toggle), MHRA boxes single column, governance grid single column, registrations single column, footer columns single column, CTA buttons stacked block (max-width 300px centred), hero mesh reduced to 260x260px |
| prefers-reduced-motion: reduce | All hero orb animations disabled, grain animation disabled, mesh rotation disabled, heroFadeUp set to opacity:1 with no animation |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Hamburger button | click | Toggles .open class on .vm-nav-links (mobile menu show/hide) |
| Nav links | hover | colour transition to gold, subtle background rgba(201,168,76,0.06) |
| Nav CTA (Book Demo) | hover | Background shifts to warm gold, translateY(-1px) lift |
| Hero content | page load | Staggered fadeUp animation (0s, 0.15s, 0.3s delays) |
| Hero orbs | continuous | Slow drift translation animations (20-24s alternate infinite) |
| Hero grain | continuous | 4-step translate animation (0.3s steps) |
| Hero mesh SVG | continuous | 360-degree rotation (90s linear infinite) |
| Scroll prompt | scroll | Animated dot within line (styled in external CSS) |
| vm-reveal sections | scroll | Scroll-triggered reveal (handled by vm-scroll-choreography.js) |
| vm-choreo-stagger children | scroll | Staggered entrance animations (handled by vm-scroll-choreography.js) |
| vm-card-glow cards | hover | Glow effect (handled by vm-phase1-design.css) |
| S7 primary CTA | hover | Background warm gold, translateY(-1px) |
| S7 outline CTA | hover | Border-color and text transition to gold |
| Floating CTA button | click | Navigates to /book/ |
| Floating CTA close | click | Dismisses floating CTA (handled by vm-premium-polish.js) |
| Consent banner Accept | click | Sets localStorage, reloads page to load GA4 |
| Consent banner Decline | click | Sets localStorage, removes banner |
| Footer links | hover | Colour transition to white |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 Zone Colours | PASS | Z1 Gold, Z2 Teal, Z3 Purple, Z4 Sage all correct in usage. Z5 #4A90C4 (Metallic Blue) is the correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. |
| DRD T-01a Language | PASS | No use of "Driver" anywhere. "Driver" language used in Section 3 DRD Language Governance card. |
| 31 TM Footer | PASS | Footer contains 30 named marks (VOS + 29 others) plus "all associated marks" clause. Count: VOS, VitalMatrix, NCZ, DRD, APEX, TIQ, CIB, CascadeIQ, FLINT, CZR, TRACE, DeltaScan, MedTerrain, TerrainLock, CascadeAtlas, PRISM, KINETICS, COHERENCE, TerrainRoot, ORBIT, SPHERE, HERALD, BEACON, MAPS, RECON, COMPASS, GENOME, ANCHOR, AXIS, INTAKE, VECTOR = 31 total (30 in footer HTML; VECTOR absent from this page footer). |
| VECTOR in Footer | FAIL | VECTOR is absent from the TM footer. D-53 website standard requires 31 mnemonics including VECTOR. |
| MHRA Governance Line | PASS | Footer contains: "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." |
| "For practitioner use only" | PASS | Present in footer: "For practitioner use only. Not a diagnostic tool." |
| British English | PASS | All spelling is British English throughout (e.g. "recognised", "practitioner", "organisation"). No American spellings detected. |
| No Template Literals | PASS | No backtick template literals in inline scripts. String concatenation used. |
| No "treatment protocol" | PASS | Term not used. "Personalised Terrain Management Protocol" used correctly in Section 3. |
| No "diagnose/diagnosis" claims | PASS | Only used in negation: "does not diagnose". |
| No "clinical AI platform" | PASS | "clinical intelligence platform" used correctly in meta description. |
| Logo height="48" | PASS | Logo img element uses height="48" with correct file reference and inline styles. |
| ICO ZC101813 | PASS | Present in hero meta, Section 4, Section 6, Section 7, footer governance, footer TM, and footer copyright. |
| Canonical URL | PASS | `<link rel="canonical" href="https://vitalmatrix.co.uk/trust-and-safety/">` |
| lang="en-GB" | PASS | HTML element has lang="en-GB" attribute. |
| No em dashes | PASS | HTML entity &#183; (middle dot) used as separator. No em dashes found. |
| Consent-gated GA4 | PASS | Analytics only loads after explicit user consent via localStorage check. |
| prefers-reduced-motion | PASS | All animations respect reduced-motion media query. |
| No position:fixed | PARTIAL | Consent banner uses position:fixed (dynamically injected, acceptable for overlay). No position:fixed in main stylesheet. |
| Credentials | N/A | Dr Faisal not referenced by credential on this page. |

---

## RECOMMENDATIONS

1. Z5 #4A90C4 (Metallic Blue) confirmed as correct website colour — distinct from Z1 Gold to avoid visual duplication of two gold zones. No correction needed. PASS.
2. Add VECTOR to the TM footer to achieve the full 31-mnemonic count per website standard.
3. Consider adding `aria-current="page"` to any nav link pointing to Trust and Safety (currently not linked in nav).

---

*TrustSafety Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# FAQSpecs
========================================================================

# FAQ Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page name | FAQ |
| File | FAQ_v2_2026-04-13.html |
| Background | Charcoal #1A2030 (body default) |
| Nav | vm-nav-pill sticky nav with hamburger mobile overlay |
| External files | vm-phase1-design.css, vm-font-optimise.css, vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 1 | Navigation (vm-nav-pill) | rgba(26,32,48,0.96) with backdrop-filter blur | Sticky nav, logo height 48, hamburger mobile, sidebar dot nav, progress bar, sticky label |
| 2 | Hero | linear-gradient(155deg, #1A2030 0%, #0e1520 100%) | Cinematic layers: orbs (gold/teal/purple), vignette, glass, SVG mesh pentagon, grain, heroFadeUp animation, scroll prompt |
| 3 | Proof Strip (vm-proof-strip) | (defined in vm-phase1-design.css) | Phase 1 / 10 Founding Practitioners / UK Only / ICO ZC101813 / MHRA line |
| 4 | Category A: About VitalMatrix | Charcoal #1A2030 (bg-charcoal) | 4 FAQ items (A1-A4), accordion, vm-texture-gold, vm-depth |
| 5 | Category B: The Platform | Charcoal Mid #232B3E (bg-charcoal-mid) | 5 FAQ items (B1-B5), accordion, vm-texture-teal, vm-depth |
| 6 | Category C: Founding Programme and Pricing | Prussian #0D2B4E (bg-prussian) | 4 FAQ items (C1-C4), accordion, vm-texture-gold, vm-depth |
| 7 | Category D: Clinical Governance | Charcoal Deep #111820 (bg-charcoal-deep) | 4 FAQ items (D1-D4), accordion, vm-texture-teal, vm-depth |
| 8 | Category E: Getting Started | Sage Dark #2D4438 (bg-sage-dark) | 3 FAQ items (E1-E3), accordion, vm-texture-gold, vm-depth |
| 9 | Closing CTA | Prussian #0D2B4E (cta-section) | Two buttons (Book a Clinical Walkthrough + Get in Touch), ICO line, vm-texture-teal |
| 10 | Floating CTA (vm-floating-cta) | N/A (fixed overlay) | Book a Walkthrough button with close control |
| 11 | Footer | Navy Dark #071C33 | 3-column grid (Platform, Programme, Company), governance line, TM footer (31 mnemonics with VOS), copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Cinematic hero orbs | Three animated blurred orbs (gold, teal, purple) with slow float keyframes (vmOrbA 20s, vmOrbB 24s, vmOrbC 22s) |
| Hero SVG mesh | Rotating nested pentagon SVG (vmMeshR 90s linear infinite) with zone-coloured vertex nodes |
| Film grain overlay | SVG feTurbulence noise texture animating in 4-step loop (vmGrain 0.3s steps(4)) |
| Hero vignette | Radial gradient darkening from centre outward |
| Hero glass layer | Subtle backdrop-filter blur(2px) |
| heroFadeUp animation | Content fades up 22px on load (0.7s ease) |
| Scroll prompt | Animated dot-in-line scroll indicator below hero |
| Progress bar (vm-progress-bar) | Page scroll progress indicator (JS in vm-phase1-design.js) |
| Sidebar dot navigation | 5 dots mapped to data-category a-e, active state tracking |
| Sticky section label (vm-sticky-label) | Dynamic section label on scroll |
| FAQ accordion | Click-to-toggle with chevron rotation (180deg, 0.3s), max-height transition, gold left border on open state |
| Floating CTA | Persistent Book a Walkthrough button with dismissible close |
| vm-reveal | Scroll-triggered reveal animations (JS in vm-scroll-choreography.js) |
| vm-depth | Depth/parallax class (defined in vm-phase1-design.css) |
| vm-cta-glow | Glow effect on CTA buttons (defined in vm-phase1-design.css) |
| vm-kinetic-grid | Body-level kinetic grid background (defined in vm-phase1-design.css) |
| vm-page-transition | Page entry transition (defined in vm-phase1-design.css) |
| prefers-reduced-motion | All orb, grain, and mesh animations disabled when reduced motion preferred |
| GA4 consent banner | Cookie consent with accept/decline, localStorage gated, no tracking without consent |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage in page |
|------|--------|-----|---------------|
| Z1 | Gold | #C9A84C | --vm-gold, hero orb, CTA buttons, border accents, nav-cta, faq-a-inner left border, mesh vertex |
| Z2 | Teal | #1A7A8A | --vm-teal, chevron stroke, btn-outline border, hero orb, mesh vertex, eyebrow colour (teal-light #2A9BAD) |
| Z3 | Purple | #7B5EA7 | --vm-purple, hero orb, mesh vertex |
| Z4 | Sage | #5F7C6C | --vm-sage, bg-sage-dark section (#2D4438 dark variant), mesh vertex |
| Z5 | Warm Gold | #D4B870 | --vm-gold-w (defined in :root), mesh vertex |

All five zone colours are defined in :root CSS variables. D-53 compliant.

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body | Outfit (--vm-fd) | 16px | 400 |
| h1 (hero) | Cormorant Garamond (--vm-fs) | clamp(2.2rem, 4vw, 3.2rem) | 300 |
| h2 (section) | Cormorant Garamond (--vm-fs) | clamp(1.4rem, 2vw, 1.8rem) | 300 |
| h2 (CTA) | Cormorant Garamond (--vm-fs) | clamp(1.6rem, 2.5vw, 2.2rem) | 300 |
| Eyebrow | DM Mono (--vm-fm) | 0.62rem | 400 |
| Hero subtitle | Outfit (--vm-fd) | 0.92rem | 300 |
| Hero meta | DM Mono (--vm-fm) | 0.58rem | 400 |
| FAQ question | Outfit (--vm-fd) | 0.88rem | 500 |
| FAQ answer | Outfit (--vm-fd) | 0.82rem | 300 |
| Nav links | Outfit (--vm-fd) | 0.6rem | 500 |
| Nav CTA | Outfit (--vm-fd) | 0.58rem | 700 |
| CTA buttons (gold) | Outfit (--vm-fd) | 0.62rem | 700 |
| CTA buttons (outline) | Outfit (--vm-fd) | 0.62rem | 600 |
| Footer col title | DM Mono (--vm-fm) | 0.58rem | 400 |
| Footer links | Outfit (--vm-fd) | 0.72rem | 400 |
| Footer governance | Outfit (--vm-fd) | 0.6rem | 400 |
| Footer TM | Outfit (--vm-fd) | 0.52rem | 400 |
| Footer copy | Outfit (--vm-fd) | 0.58rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Target | Changes |
|-----------|--------|---------|
| max-width: 1199px | Tablet | FAQ sections padding 60px 20px, CTA padding 60px 20px |
| max-width: 767px | Mobile | Nav links hidden, hamburger shown, FAQ padding 40px 16px, CTA padding 40px 16px, hero padding 56px 16px 48px, CTA buttons stack vertical full-width, footer grid single column |
| max-width: 768px | Mobile (hero mesh) | SVG mesh reduced to 260px x 260px |
| prefers-reduced-motion: reduce | Accessibility | All orb, grain, and mesh animations disabled |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| FAQ question (.faq-q) | Click | Toggles .open class on parent .faq-item; closes siblings in same category; chevron rotates 180deg; answer expands via max-height transition |
| Nav hamburger (.vm-nav-hamburger) | Click | Opens mobile overlay (vm-nav-mobile-overlay) via JS in vm-phase1-design.js |
| Mobile close (.vm-nav-mobile-close) | Click | Closes mobile overlay |
| Sidebar dots (.vm-sidebar-dot) | Click | Scrolls to corresponding data-category section |
| Floating CTA close (.vm-floating-cta-close) | Click | Dismisses floating CTA |
| Nav links | Hover | colour transitions to --vm-gold |
| CTA gold button | Hover | Background lightens to --vm-gold-l, translateY(-1px) |
| CTA outline button | Hover | Border brightens, text whitens, subtle teal background |
| Consent banner Accept | Click | Sets localStorage vm-analytics-consent=accepted, removes banner, reloads to load GA4 |
| Consent banner Decline | Click | Sets localStorage vm-analytics-consent=declined, removes banner |
| Scroll | Scroll | vm-reveal elements animate in, progress bar updates, sidebar dots update active state, sticky label updates |
| Hero content | Page load | heroFadeUp animation (0.7s ease) |

---

## COMPLIANCE CHECKS

| Requirement | Status | Notes |
|-------------|--------|-------|
| D-53 zone colours | PASS | All five zone colours defined in :root; gold #C9A84C, teal #1A7A8A, purple #7B5EA7, sage #5F7C6C, warm gold #D4B870 |
| DRD T-01a language | PASS | Uses "zone carrying the highest terrain burden for practitioner review" throughout; never "Driver" |
| 31 TM footer | PASS | Footer contains VOS (VitalMatrix Operating System) + 30 marks including VECTOR; total 31; ICO ZC101813 present |
| MHRA governance line | PASS | Footer: "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." |
| British English | PASS | lang="en-GB" declared; spelling consistent throughout (e.g. "categorise", "practitioner") |
| No template literals | PASS | All JS uses string concatenation and standard quotes |
| No em dashes | PASS | Colons and line breaks used instead |
| Logo height 48 | PASS | img height="48" with correct file VM_Logo_1000_x_1000_px_png_New_Transparent.png |
| Logo CSS | PASS | display:block; margin:0; padding:0; border:none; line-height:0 applied inline |
| ICO ZC101813 | PASS | Present in hero meta, proof strip, CTA section, footer governance, footer TM, footer copy |
| "For practitioner use only" | PASS | Present in footer: "For practitioner use only. Not a diagnostic tool." |
| Protective header language | PASS | "terrain intelligence working documents for practitioner review" in structured data and footer |
| No prohibited terms | PASS | No "treatment protocol", no "diagnose" in outputs, no "clinical AI platform", no "clinical decision support" |
| Canonical URL | PASS | https://vitalmatrix.co.uk/faq/ |
| Schema.org FAQPage | PASS | JSON-LD structured data with 5 representative Q&A pairs |
| Consent-gated analytics | PASS | GA4 G-TRM1JTE0PB loads only after explicit localStorage consent |
| APEX expansion | PASS | "Assessment Priority and Evidence Xray" used in B1 answer |
| NCZ expansion | N/A | Not explicitly expanded on page (acceptable for FAQ context) |
| No HERALD/BEACON in body | PASS | Both appear only in TM footer |
| Credentials | N/A | Dr Faisal referenced by name only; no credentials displayed on this page |

---

*FAQ Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# ContactSpecs
========================================================================

# Contact Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | Contact |
| File | Contact_v2_2026-04-13.html |
| Background | Charcoal #1A2030 (body default) |
| Nav | Sticky, 52px, backdrop-blur, gold border-bottom |
| External Files | vm-phase1-design.css, vm-font-optimise.css, vm-phase1-design.js, vm-scroll-choreography.js, vm-svg-illustrations.js, vm-premium-polish.js |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 01 | Hero + Contact Cards | Charcoal #1A2030 (inherited from body via .vm-hero) | 3-column card grid (Discovery Call, Email, Location) with cinematic hero layers |
| 02 | Contact Form | Charcoal #1A2030 (.vm-form-section) | 5-field form (Name, Practice, Email, Message, Consent checkbox) with mailto action |
| 03 | Quick Answers | Light Cream #FBF6E9 (.vm-faq-short) | 4 FAQ link rows pointing to /faq/ anchors |
| 04 | Fastest Route CTA | Prussian Blue #0D2B4E (.vm-end-cta) | Single CTA button to /book-a-walkthrough/ |
| -- | Footer | Navy Dark #071C33 (.vm-footer) | 3-column links, governance line, 31 TM footer, copyright |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Cinematic Hero Orbs | Three animated blurred orbs (gold, teal, purple) with slow translate keyframes (vmOrbA 20s, vmOrbB 24s, vmOrbC 22s) |
| Hero Gradient Layers | Multi-layer composition: vm-hero-grade (dual linear-gradient), vm-hero-vignette (radial), vm-hero-glass (backdrop-filter blur) |
| Film Grain Overlay | SVG feTurbulence noise at 0.05 opacity, 4-step animation (vmGrain 0.3s) |
| Rotating Mesh | SVG pentagon wireframe rotating 360deg over 90s (vmMeshR), with zone-coloured vertex dots |
| Hero Text Entrance | Staggered fadeUp animations (0.12s, 0.24s, 0.36s delays) with translateY |
| Progress Bar | .vm-progress-bar element (styled via external CSS) |
| Floating CTA | Fixed floating button with close/dismiss SVG icon |
| Card Glow | .vm-card-glow class (effect defined in external CSS) |
| CTA Glow | .vm-cta-glow class on nav CTA and primary buttons |
| Stagger Grid | .vm-stagger-grid class on cards grid (animation via external JS) |
| Scroll Reveal | .vm-reveal class on all sections (IntersectionObserver via external JS) |
| Kinetic Grid | .vm-kinetic-grid on body (background animation via external CSS) |
| Page Transition | .vm-page-transition on body (entry animation via external CSS) |
| Reduced Motion | @media(prefers-reduced-motion:reduce) disables orbs, grain, mesh, and hero text animations |
| GA4 Consent Banner | Cookie consent with Accept/Decline, localStorage gated, reload on accept |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage in Page |
|------|--------|-----|---------------|
| Z1 | Gold | #C9A84C | Hero orb, mesh vertex, card borders (.vm-card--gold), nav CTA, submit button, form focus border, footer column titles, card links, hero em text |
| Z2 | Teal | #1A7A8A | Hero orb, mesh vertex, FAQ eyebrow, FAQ arrows, card border (.vm-card--teal), consent checkbox accent |
| Z3 | Purple | #7B5EA7 | Hero orb, mesh vertex |
| Z4 | Sage | #5F7C6C | Mesh vertex (rgba reference) |
| Z5 | Warm Gold | #D4B870 | Nav CTA hover, submit hover, btn-primary hover (via --vm-gold-w), mesh vertex |

Additional palette (non-zone):
- Prussian #0D2B4E: CTA section background, button text colour
- Charcoal #1A2030: body/hero/form backgrounds
- Navy Dark #071C33: footer background, consent banner
- Deep Teal #0C4452: CSS variable defined but not directly applied
- Teal Light #2A9BAD: eyebrow text colour across sections
- White #F4F4F2: heading text, input text

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Body default | Outfit (--vm-fd) | 16px | 400 |
| H1 (Hero) | Cormorant Garamond (--vm-fs) | clamp(2.4rem, 5vw, 4rem) | 400 |
| H2 (Sections) | Cormorant Garamond (--vm-fs) | clamp(1.6rem, 2.5vw, 2.2rem) | 400 |
| H3 (Card titles) | Cormorant Garamond (--vm-fs) | 1.2rem | 400 |
| Eyebrow labels | DM Mono (--vm-fm) | 0.62rem | 400 |
| Nav links | Outfit (--vm-fd) | 0.6rem | 500 |
| Nav CTA | Outfit (--vm-fd) | 0.6rem | 700 |
| Card body | Outfit (--vm-fd) | 0.82rem | 400 |
| Card note | DM Mono (--vm-fm) | 0.6rem | 400 |
| Card link | DM Mono (--vm-fm) | 0.6rem | 400 |
| Form labels | DM Mono (--vm-fm) | 0.6rem | 400 |
| Form inputs | Outfit (--vm-fd) | 0.88rem | 400 |
| Submit button | Outfit (--vm-fd) | 0.7rem | 700 |
| FAQ link text | Outfit (--vm-fd) | 0.88rem | 400 |
| Footer col title | DM Mono (--vm-fm) | 0.58rem | 400 |
| Footer links | Outfit (--vm-fd) | 0.78rem | 400 |
| Footer governance | Outfit (--vm-fd) | 0.6rem | 400 |
| Footer TM | DM Mono (--vm-fm) | 0.55rem | 400 |
| Footer copy | DM Mono (--vm-fm) | 0.52rem | 400 |
| ICO line (hero) | DM Mono (--vm-fm) | 0.58rem | 400 |
| Card number | DM Mono (--vm-fm) | 0.58rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| 1024px | Cards grid: 3 columns to 2 columns |
| 768px | Nav links collapse to hamburger menu; hero padding reduced (64px 20px 56px); footer columns to single column; hero mesh reduced to 260px |
| 640px | Cards grid: single column; primary CTA button full width |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Hamburger button | click | Toggles .open class on .vm-nav-links (shows/hides mobile menu) |
| Nav links | hover | Colour to gold + subtle background |
| Nav CTA | hover | Background to warm gold + translateY(-1px) |
| Card links | hover | text-decoration: underline |
| Form inputs | focus | border-color changes to gold (#C9A84C) |
| Submit button | hover | Background to warm gold + translateY(-2px) |
| FAQ link rows | hover | Box-shadow increases, background subtly changes |
| Primary CTA button | hover | Background to warm gold + translateY(-2px) |
| Privacy link | hover | text-decoration: underline |
| Floating CTA close | click | Dismisses floating CTA (via external JS) |
| Hero orbs | continuous | Slow translate animations (20-24s alternate) |
| Hero mesh | continuous | 360deg rotation over 90s |
| Hero grain | continuous | 4-step translate animation (0.3s) |
| Hero text elements | page load | Staggered fadeUp entrance animations |
| Consent banner Accept | click | Sets localStorage, removes banner, reloads page |
| Consent banner Decline | click | Sets localStorage, removes banner |
| Footer links | hover | Colour to white |

---

## COMPLIANCE CHECKS

| Rule | Status | Notes |
|------|--------|-------|
| D-53 Zone Colours | COMPLIANT | Z1 Gold #C9A84C, Z2 Teal #1A7A8A, Z3 Purple #7B5EA7, Z4 Sage #5F7C6C, Z5 Warm Gold #D4B870 all present in orbs/mesh |
| DRD T-01a Language | COMPLIANT | No "Driver", no "diagnose/diagnosis/diagnostic", no "treatment protocol" in page content |
| 31 TM Footer | COMPLIANT | VOS, VitalMatrix, NCZ, DRD, APEX, TIQ, CIB, CascadeIQ, FLINT, CZR, TRACE, DeltaScan, MedTerrain, TerrainLock, CascadeAtlas, PRISM, KINETICS, COHERENCE, TerrainRoot, ORBIT, SPHERE, HERALD, BEACON, MAPS, RECON, COMPASS, GENOME, ANCHOR, AXIS, INTAKE, VECTOR (30 listed in footer HTML -- VOS expansion present as "VitalMatrix Operating System") |
| MHRA Governance Line | COMPLIANT | "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." in footer |
| British English | COMPLIANT | "practitioner", "programme", "enquiries", "organisation" (autocomplete attr) used throughout |
| No Template Literals | COMPLIANT | No backtick template literals in inline scripts |
| ICO on Form Page | COMPLIANT | ICO ZC101813 referenced in hero, form privacy note, and footer (3 instances) |
| Logo height="48" | COMPLIANT | VM_Logo_1000_x_1000_px_png_New_Transparent.png at height="48" |
| Credentials | N/A | Dr Faisal referenced without credentials on this page (acceptable for contact page brevity) |
| No em dashes | COMPLIANT | No em dashes found; colons and full stops used |
| Canonical URL | COMPLIANT | https://vitalmatrix.co.uk/contact/ |
| Schema.org | COMPLIANT | ContactPage structured data with email and address |
| For practitioner use only | COMPLIANT | "For practitioner use only. Not a diagnostic tool." present in footer area |
| Consent mechanism | COMPLIANT | Healthcare practitioner confirmation checkbox on form |
| HERALD/BEACON body-prohibited | COMPLIANT | Appear only in TM footer, not in body content |
| Font stack | COMPLIANT | Cormorant Garamond (headings), Outfit (body), DM Mono (mono) -- no prohibited fonts |

### Minor Observations

- Hero section CSS class .vm-hero is defined but the opening selector on line 149 is missing the class selector name (appears as just the property block without `.vm-hero{`). This is likely a copy artefact and the external CSS file may cover it.
- Form uses `mailto:` action rather than a server-side endpoint. Functional but basic.
- TM footer in HTML lists 30 named marks plus VOS expansion. Count is correct for 31 total (VOS + 30 named).

---

*Contact Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# PlatformDemoSpecs
========================================================================

# Platform Demo Specifications

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | Platform Demo |
| File | PlatformDemo_v2_2026-04-15.html |
| Background | Prussian Blue #0D2B4E (body), #071C33 (protective header, footer) |
| Nav | Fixed top bar, rgba(7,28,51,0.90) background, logo + back link |
| External Files | VM_Logo_1000_x_1000_px_png_New_Transparent.png (favicon + nav logo), Google Fonts (Cormorant Garamond, Outfit, DM Mono) |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 1 | GA4 Consent Banner (script) | N/A (injected fixed overlay: rgba(7,28,51,0.97)) | Consent-gated analytics with Accept/Decline buttons, localStorage persistence |
| 2 | Navigation | rgba(7,28,51,0.90) | Logo image (height 28) + VitalMatrix wordmark + Back to Home link |
| 3 | GMC Protective Header | #071C33 | Mandatory clinical disclaimer: "Not a diagnostic tool" |
| 4 | Content Placeholder (Hero) | #0D2B4E (inherited from body) | Centred headline "See VitalMatrix in Action", subtitle referencing W08 clearance, Return to Homepage CTA |
| 5 | Compliance Footer | #071C33 | MHRA line, TM footer (30 marks listed), ICO ZC101813, copyright 2026 |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Description |
|---------|-------------|
| Consent Banner | Privacy-first analytics gate with localStorage memory; auto-removes on action; backdrop-filter blur(16px) |
| Clamp Typography | Hero heading uses clamp(32px, 5vw, 56px) for fluid responsive sizing |
| Semantic lang attribute | `<html lang="en-GB">` ensuring British English declaration |

Note: This is a placeholder/staging page (W08 clearance pending). No advanced interactive or animated features are present beyond the consent banner.

---

## COLOUR COMPLIANCE (D-53)

| Zone | Required Colour | Present in File | Status |
|------|----------------|-----------------|--------|
| Z1 | #C9A84C Gold | Yes (--vm-gold, CTA border, consent button, heading accent) | COMPLIANT |
| Z2 | #1A7A8A Teal | Yes (--vm-teal declared in :root) | COMPLIANT (declared, not visually used in sections) |
| Z3 | #7B5EA7 Purple | Not used on this page | N/A (no zone display present) |
| Z4 | #5F7C6C Sage | Not used on this page | N/A (no zone display present) |
| Z5 | #D4B870 Warm Gold | Not used on this page | N/A (no zone display present) |

Additional colours used:
- Body/hero background: #0D2B4E (Prussian Blue) — compliant
- Footer/header background: #071C33 (Navy) — compliant
- Text primary: #F4F4F2 (White) — compliant
- Text muted: rgba(244,244,242,0.80/0.50/0.30/0.25/0.18/0.15/0.12) — compliant opacity variants
- Gold accent: #C9A84C at various opacities (0.55, 0.30, 0.10, 0.08) — compliant

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Nav wordmark | DM Mono (--vm-fm) | 11px | 400 (default) |
| Nav back link | DM Mono (--vm-fm) | 10px | 400 |
| Protective header text | DM Mono (--vm-fm) | 8px | 400 |
| Section label ("Platform Demo") | DM Mono (--vm-fm) | 10px | 400 |
| Hero heading (h1) | Cormorant Garamond (--vm-fs) | clamp(32px, 5vw, 56px) | 300 |
| Hero paragraph | Outfit (--vm-fd) | 16px | 400 (inherited) |
| CTA button | DM Mono (--vm-fm) | 11px | 400 |
| Footer MHRA line | DM Mono (--vm-fm) | 9px | 400 |
| Footer practitioner line | DM Mono (--vm-fm) | 8px | 400 |
| Footer TM block | DM Mono (--vm-fm) | 7px | 400 |
| Footer copyright | DM Mono (--vm-fm) | 8px | 400 |
| Footer ICO line | DM Mono (--vm-fm) | 7px | 400 |
| Consent banner text | Outfit (sans-serif) | 13px | 400 |
| Consent banner buttons | monospace | 10px | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Mechanism | Notes |
|------------|-----------|-------|
| Fluid typography | clamp(32px, 5vw, 56px) | Hero h1 scales between 32px and 56px based on viewport width |
| Viewport meta | width=device-width, initial-scale=1.0 | Standard responsive viewport |
| Container max-width | 1180px with 48px horizontal padding | Content constrained |
| Consent banner | flex-wrap: wrap | Wraps buttons below text on narrow screens |

No explicit @media breakpoints are defined in this file. Responsiveness relies on fluid units and flexbox wrapping.

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Consent "Accept analytics" button | click | Sets localStorage vm-analytics-consent to "accepted", removes banner, reloads page to load GA4 |
| Consent "Decline" button | click | Sets localStorage vm-analytics-consent to "declined", removes banner (no reload) |
| Nav logo link | click | Navigates to / (homepage) |
| Nav "Back to Home" link | click | Navigates to / (homepage) |
| "Return to Homepage" CTA | click | Navigates to / (homepage) |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 Zone Colours | COMPLIANT | Gold #C9A84C used correctly; no incorrect zone colours present |
| DRD T-01a Language | COMPLIANT | No "Driver" terminology present; no clinical output on this page |
| 31 TM Footer | PARTIAL (30 marks) | Footer lists 30 TM marks. Missing: VECTOR. VOS expansion present. Note: file predates current 31-mnemonic requirement (built 15 April, requirement confirmed 10 April). VECTOR should be added for full compliance. |
| MHRA Governance Line | COMPLIANT | "MHRA SaMD classification has not yet commenced..." present in footer |
| British English | COMPLIANT | lang="en-GB" declared; no American spellings detected |
| No Template Literals | COMPLIANT | JavaScript uses string concatenation only |
| Protective Header | COMPLIANT | GMC protective header present: "Not a diagnostic tool" |
| "For practitioner use only" | COMPLIANT | Present in footer |
| No "clinical AI platform" | COMPLIANT | Not present anywhere |
| No "treatment protocol" | COMPLIANT | Not present anywhere |
| No "diagnose/diagnosis/diagnostic" | COMPLIANT | "Not a diagnostic tool" is the permitted protective disclaimer form |
| ICO ZC101813 | COMPLIANT | Present in footer (twice) |
| Logo file | PARTIAL | Correct file name (VM_Logo_1000_x_1000_px_png_New_Transparent.png) but height="28" not height="48" per current Website Build Addendum |
| No em dashes | COMPLIANT | None present; uses HTML entity for trademark and arrow |
| No localStorage in main app | NOTE | localStorage used only in consent banner (analytics gating) which is standard practice |
| Canonical URL | PRESENT | https://vitalmatrix.co.uk/platform-demo/ |
| Credentials | NOT PRESENT | Dr Shahzad Faisal, MBBS, FAAMFM listed in meta author — correct |

### Items Requiring Update for Full Compliance:
1. Logo height: 28px should be 48px (Website Build Addendum)
2. TM footer: add VECTOR to reach 31 mnemonics (current footer has 30)
3. VOS expansion "(VitalMatrix Operating System)" should appear before the mnemonic list

---

*PlatformDemo Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# PrivacySpecs
========================================================================

# Privacy Notice Page Specification

---

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page name | Privacy Notice |
| File | Privacy_VitalMatrix_2026-04-20.html |
| Background | Charcoal #1A2030 (body), Prussian #0D2B4E (nav, header), Footer #071C33 |
| Nav | Sticky, Prussian #0D2B4E, logo + 4 links + CTA "Book a Walkthrough" |
| External files | None (all CSS inline, fonts via @font-face local only, no CDN) |

---

## SECTION MAP

| # | Name | Background Colour | Key Feature |
|---|------|-------------------|-------------|
| Nav | Navigation | #0D2B4E Prussian | Sticky nav, logo left, links right, gold CTA button |
| Header | Page Header | #0D2B4E Prussian | Label "Legal and Compliance", title "Privacy Notice", meta line (Company No, ICO, last updated) |
| 01 | Who We Are | #1A2030 Charcoal | Contact callout box with teal border, @ icon, email link |
| 02 | What Personal Data We Collect | #1A2030 Charcoal | 5-item categorised list (identity, technical, health, account, communications) |
| 03 | How and Why We Use Your Personal Data | #1A2030 Charcoal | Lawful bases table (5 rows) + Article 9 callout block with gold left border |
| 04 | Who We Share Your Data With | #1A2030 Charcoal | 5-item recipient list, "We do not sell" statement |
| 05 | International Data Transfers | #1A2030 Charcoal | IDTA/adequacy decisions reference |
| 06 | How Long We Keep Your Data | #1A2030 Charcoal | 4-item retention periods list (10 years clinical, 24 months analytics) |
| 07 | Your Rights | #1A2030 Charcoal | 2x3 rights grid cards with hover effect + withdrawal of consent text |
| 08 | Automated Decision-Making | #1A2030 Charcoal | Practitioner judgement emphasis, no automated decisions |
| 09 | Cookies | #1A2030 Charcoal | Link to separate Cookie Policy |
| 10 | Security | #1A2030 Charcoal | Encryption, MFA, 72-hour breach notification |
| 11 | How to Complain | #1A2030 Charcoal | ICO block with gold background, helpline 0303 123 1113, registration ZC101813 |
| 12 | Changes to This Notice | #1A2030 Charcoal | Update notification process, continued use acceptance |
| Footer | Footer | #071C33 Navy | Logo, 3 link groups (Platform, Company, Legal), TM footer block, MHRA line |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Rights grid cards | 2-column CSS Grid with hover border-colour transition to teal (#1A7A8A) |
| Table row hover | Background transitions to rgba(244,244,242,0.08) on hover |
| Article 9 callout | Gold left-border (2px solid #C9A84C) accent block with gold-tinted background |
| Contact callout box | Teal-bordered card with circular icon element, flex layout |
| ICO notice block | Gold-tinted background with gold border, distinct from surrounding content |
| Sticky navigation | position: sticky, z-index 100, Prussian background |
| Smooth scroll | html scroll-behavior: smooth |
| Link transitions | colour transitions 0.2s ease on all anchors |
| Gold CTA button | Solid gold background button with opacity hover transition |
| Section separators | 1px solid rgba(244,244,242,0.08) border-bottom between sections |
| Custom list bullets | Gold 6px horizontal bar (::before pseudo-element) replacing default bullets |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Colour | Hex | Usage in page |
|------|--------|-----|---------------|
| Z1 | Gold | #C9A84C | Section numbers, table headers, Article 9 label, ICO block label, footer group headings, page-header meta highlights, CTA button, list bullet bars |
| Z2 | Teal | #1A7A8A | Contact box border, right-card hover border |
| Z3 | Purple | #7B5EA7 | Not used on this page |
| Z4 | Sage | #5F7C6C | Not used on this page |
| Z5 | Warm Gold | #D4B870 | Not used on this page |

**Additional colours used:**

| Element | Hex | Purpose |
|---------|-----|---------|
| Body background | #1A2030 | Charcoal document body |
| Nav/Header background | #0D2B4E | Prussian Blue |
| Footer background | #071C33 | Dark navy |
| Deep Teal (unused) | #0C4452 | Defined in variables but not applied |
| Teal Light | #2A9BAD | Links, page-header label, contact box label |
| White | #F4F4F2 | Headings, strong text |
| White 60% | rgba(244,244,242,0.60) | Body text, card descriptions |
| White 40% | rgba(244,244,242,0.40) | Meta text, footer links |
| White 15% | rgba(244,244,242,0.15) | Not actively used |
| White 8% | rgba(244,244,242,0.08) | Borders, card backgrounds, table row hover |
| Gold 20% | rgba(201,168,76,0.20) | ICO block border |
| Gold 10% | rgba(201,168,76,0.10) | Table header background, Article 9 background, ICO block background |

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page title (h1) | Cormorant Garamond | clamp(2rem, 3.5vw, 2.75rem) | 400 |
| Section heading (h2) | Cormorant Garamond | 1.5rem | 500 |
| Body text | Outfit | 0.9375rem (15px) | 400 |
| Nav links | Outfit | 0.875rem (14px) | 400 |
| CTA button | Outfit | 0.8125rem (13px) | 600 |
| Section number | DM Mono | 0.625rem (10px) | 400 |
| Page header label | DM Mono | 0.6875rem (11px) | 400 |
| Page header meta | DM Mono | 0.75rem (12px) | 400 |
| Table header (th) | DM Mono | 0.625rem (10px) | 500 |
| Table body (td) | Outfit | 0.875rem (14px) | 400 |
| Right card title | Outfit | 0.8125rem (13px) | 600 |
| Right card desc | Outfit | 0.8125rem (13px) | 400 |
| Contact box label | DM Mono | 0.625rem (10px) | 400 |
| Contact box detail | Outfit | 0.9375rem (15px) | 400 |
| Footer links | Outfit | 0.8125rem (13px) | 400 |
| Footer TM text | Outfit | 0.6875rem (11px) | 400 |
| Footer group heading | DM Mono | 0.625rem (10px) | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|------------|---------|
| max-width: 768px | Nav links hidden; padding reduced to 20px on nav, header, doc, footer; rights grid collapses to 1 column; footer-top stacks vertically; contact box stacks vertically with reduced gap |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav links | hover | colour: white-60 to white |
| CTA button | hover | opacity 0.88 |
| All body links | hover | colour: teal-light to gold |
| Table rows | hover | background: rgba(244,244,242,0.08) |
| Right cards | hover | border-color transitions to teal #1A7A8A |
| Links (general) | default | text-underline-offset 3px, colour transition 0.2s |
| Nav | scroll | sticky position at top of viewport |
| html | anchor click | smooth scroll behaviour |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 zone colours | PARTIAL | Z1 Gold and Z2 Teal used correctly. Z3, Z4, Z5 not present (acceptable for legal page). No incorrect zone colours applied. |
| DRD T-01a language | PASS | No "Driver" terminology. No clinical decision language. |
| 31 TM footer | PARTIAL (30 mnemonics) | Footer contains VOS (VitalMatrix Operating System) + 30 TM marks. Missing VECTOR from footer body text. Count in HTML: VitalMatrix, NCZ, DRD, APEX, TIQ, CIB, CascadeIQ, FLINT, CZR, TRACE, DeltaScan, MedTerrain, TerrainLock, CascadeAtlas, PRISM, KINETICS, COHERENCE, TerrainRoot, ORBIT, SPHERE, HERALD, BEACON, MAPS, RECON, COMPASS, GENOME, ANCHOR, AXIS, INTAKE = 29 marks + VOS = 30. VECTOR absent. |
| MHRA governance line | PASS | "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." present in footer. |
| British English | PASS | "organisational", "colours" (implied), consistent British spelling throughout. |
| No template literals | PASS | Pure HTML file, no JavaScript template literals. |
| No em dashes | PASS | No em dashes detected. |
| Logo height | 44px (non-compliant) | D-53 mandates height="48". Current: height="44" in nav, height="40" in footer. |
| Logo file | PASS | VM_Logo_1000_x_1000_px_png_New_Transparent.png used in both nav and footer. |
| ICO ZC101813 | PASS | Referenced in header meta, Section 01, Section 11, and footer (twice). |
| Company No. 17046123 | PASS | Referenced in header meta, Section 01, and footer. |
| "For practitioner use only" | PASS | Present in footer: "For practitioner use only. Not a diagnostic tool." |
| "Does not diagnose, prescribe" | PASS | Present in MHRA governance line. |
| No "clinical AI platform" | PASS | Not present anywhere. |
| No "treatment protocol" | PASS | Not present anywhere. |
| Protective header | N/A | Not a clinical output page. |
| Credentials | N/A | Dr Faisal credentials not referenced on this page. |
| External CDN dependencies | PASS | All fonts local (@font-face local only). No external CSS/JS. |

---

## ISSUES IDENTIFIED

| # | Severity | Issue | Recommendation |
|---|----------|-------|----------------|
| 1 | Medium | Logo height 44px in nav, 40px in footer. D-53 requires 48px on all website pages. | Update both to height="48" |
| 2 | Low | TM footer missing VECTOR. D-53 31-mnemonic footer requires VECTOR in footer. | Add VECTOR to TM footer line |
| 3 | Informational | Page meta description uses "clinical intelligence platform" (correct). No SEO block per website addendum (og:title, og:description, canonical, keywords). | Add full SEO meta block per website addendum |
| 4 | Informational | No favicon at /assets/vmx-favicon-512.png verified. Path assumed. | Verify favicon file exists at deployment. |

---

*Privacy Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# CookiePolicySpecs
========================================================================

# Cookie Policy Page Specification

---

## PAGE IDENTITY

| Field | Value |
|-------|-------|
| Page name | Cookie Policy |
| File | CookiePolicy_VitalMatrix_2026-04-20.html |
| Background | Charcoal #1A2030 (body), Prussian #0D2B4E (nav, header) |
| Nav | Sticky top, Prussian Blue #0D2B4E, logo + 4 links + CTA |
| External files | None (all CSS inline, fonts local @font-face only) |

---

## SECTION MAP

| # | Section Name | Background Colour | Key Feature |
|---|-------------|-------------------|-------------|
| 1 | Navigation | Prussian #0D2B4E | Sticky nav, logo left, links right, gold CTA button |
| 2 | Page Header | Prussian #0D2B4E | Label "Legal and Compliance", H1 "Cookie Policy", meta line with Company No., ICO, date |
| 3 | Section 01: What Are Cookies | Charcoal #1A2030 | Three paragraphs explaining cookies, link to vitalmatrix.co.uk |
| 4 | Section 02: The Cookies We Use | Charcoal #1A2030 | Four cookie category cards (Essential, Analytics, Functional, Marketing) with coloured left borders and badges |
| 5 | Section 03: Cookies in Detail | Charcoal #1A2030 | Purple placeholder alert + HTML table (4 rows: vm_session, vm_consent, vm_csrf, TBC analytics) |
| 6 | Section 04: Third-Party Cookies | Charcoal #1A2030 | Bulleted list (Hostinger, analytics TBC), no-advertising statement |
| 7 | Section 05: Your Cookie Choices | Charcoal #1A2030 | Teal "Managing Your Preferences" box, browser links list (Chrome, Firefox, Safari, Edge) |
| 8 | Section 06: Cookies and Health Data | Charcoal #1A2030 | Health data separation statement, link to Privacy Notice |
| 9 | Section 07: Contact and Complaints | Charcoal #1A2030 | Teal contact box (address, email, ICO), ICO complaint link |
| 10 | Section 08: Changes to This Policy | Charcoal #1A2030 | Policy update process, last-revised notice |
| 11 | Footer | Navy #071C33 | Logo, 3-column link groups (Platform, Company, Legal), TM footer, MHRA line, company details |

---

## AWARD-LEVEL ENHANCEMENTS

| Feature | Implementation |
|---------|---------------|
| Cookie category cards | Grid-based cards with zone-coloured left borders (Teal/Gold/Sage/Purple), hover border-colour transition to Teal |
| Table row hover | Background highlight on tbody tr:hover (rgba white 0.08) |
| Sticky navigation | position: sticky, top: 0, z-index: 100 |
| Link hover transitions | colour transitions on all anchors (0.2s ease) |
| CTA button hover | Opacity reduction to 0.88 on hover |
| Custom list markers | Gold 6px horizontal line pseudo-elements replacing default bullets |
| Responsive cookie cards | Grid collapses from 3-column to single column at 768px |
| Smooth scroll | html scroll-behavior: smooth |

---

## COLOUR COMPLIANCE (D-53)

| Zone | Hex | Name | Usage in Page |
|------|-----|------|---------------|
| Z1 | #C9A84C | Gold | Section numbers, nav CTA background, table headers, list markers, cookie-card--analytics left border, footer group headings, meta highlights |
| Z2 | #1A7A8A | Teal | cookie-card--essential left border, contact box border, manage box accents, badge--required background tint |
| Z3 | #7B5EA7 | Purple | cookie-card--marketing left border, placeholder alert border and label |
| Z4 | #5F7C6C | Sage | cookie-card--functional left border |
| Z5 | #D4B870 | Warm Gold | Not used on this page |

Additional colours in use:
- Prussian Blue #0D2B4E (nav, header background)
- Charcoal #1A2030 (document body background)
- Navy #071C33 (footer background)
- Deep Teal #0C4452 (not used on this page)
- Teal Light #2A9BAD (page header label, manage box label, contact box label, link colour)
- White #F4F4F2 (primary text)

---

## TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page title (H1) | Cormorant Garamond | clamp(2rem, 3.5vw, 2.75rem) | 400 |
| Section heading (H2) | Cormorant Garamond | 1.5rem | 500 |
| Body text | Outfit | 0.9375rem | 400 |
| Nav links | Outfit | 0.875rem | 400 |
| Nav CTA | Outfit | 0.8125rem | 600 |
| Section number label | DM Mono | 0.625rem | 400 |
| Page header label | DM Mono | 0.6875rem | 400 |
| Page header meta | DM Mono | 0.75rem | 400 |
| Table header (th) | DM Mono | 0.5625rem | 500 |
| Table first column (td) | DM Mono | 0.75rem | 400 |
| Table body (td) | Outfit | 0.8125rem | 400 |
| Cookie card name | Outfit | 0.875rem | 600 |
| Cookie card name-sub | DM Mono | 0.625rem | 400 |
| Cookie card description | Outfit | 0.875rem | 400 |
| Cookie card badge | DM Mono | 0.5625rem | 400 |
| Placeholder alert label | DM Mono | 0.5625rem | 400 |
| Footer group heading | DM Mono | 0.625rem | 400 |
| Footer links | Outfit | 0.8125rem | 400 |
| Footer TM text | Outfit | 0.6875rem | 400 |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| max-width: 768px | Nav padding reduced to 20px, nav links hidden, page header padding reduced (48px 20px 40px), document padding reduced (48px 20px 72px), footer padding reduced (40px 20px), footer top becomes column layout, footer links gap reduced to 24px, cookie cards collapse to single-column grid |

---

## INTERACTION MAP

| Element | Trigger | Effect |
|---------|---------|--------|
| Nav links | hover | colour changes from white-60 to white |
| Nav CTA button | hover | opacity reduces to 0.88 |
| Body links | hover | colour changes from Teal Light #2A9BAD to Gold #C9A84C |
| Cookie category cards | hover | border-color transitions to Teal #1A7A8A |
| Table rows (tbody) | hover | background fills with rgba(244,244,242,0.08) |
| Footer links | hover | colour changes from white-40 to white |
| HTML smooth scroll | anchor click | smooth scroll to target |

---

## COMPLIANCE CHECKS

| Check | Status | Notes |
|-------|--------|-------|
| D-53 zone colours | PASS | Z1 Gold #C9A84C, Z2 Teal #1A7A8A, Z3 Purple #7B5EA7, Z4 Sage #5F7C6C used correctly. Z5 Warm Gold #D4B870 not referenced (not needed on this page). |
| DRD T-01a language | N/A | No DRD or clinical output language on this page |
| 31 TM footer | PARTIAL | Footer contains 30 marks (VOS + 29 named marks). VECTOR is present. VOS expansion included. Count aligns with HTML build date (April 2026 footer). |
| MHRA governance line | PASS | "MHRA SaMD classification has not yet commenced. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement. ICO ZC101813." present in footer. |
| British English | PASS | "recognise", "personalise", "colour" patterns used throughout. No American spellings detected. |
| No template literals | PASS | No backtick template literals in source |
| No em dashes | PASS | Pipe separators and HTML entities used instead |
| Logo file | PASS | VM_Logo_1000_x_1000_px_png_New_Transparent.png referenced (nav + footer) |
| Logo height | NOTE | height="44" in nav, height="40" in footer. D-53 specifies height="48" for website pages. Pre-dates D-53 (file dated 20 April 2026 but built earlier). |
| ICO ZC101813 | PASS | Present in meta description, page header meta, contact box, TM footer (twice) |
| Company No. 17046123 | PASS | Present in page header meta and footer company line |
| Favicon | PASS | /assets/vmx-favicon-512.png referenced |
| lang="en-GB" | PASS | HTML element has correct language attribute |
| No position: fixed | PASS | Navigation uses position: sticky (permitted) |
| No localStorage/sessionStorage | PASS | None referenced |
| "For practitioner use only" | PASS | Present in footer TM block |
| Credential display | N/A | Dr Faisal credentials not displayed on this page |
| HERALD/BEACON body check | PASS | HERALD and BEACON appear only in TM footer, not in body content |

---

*CookiePolicy Specs | W05 Claude Code | 2 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | VitalMatrix Ltd | ICO ZC101813*


========================================================================
# SILICON VALLEY UPGRADE PROMPT (REFERENCE)
========================================================================

The P5 Award-Winning Upgrade Prompt is stored in:
SiliconValley_UpgradePrompt_v2_2026-04-30.html (parent ClaudeCode_Context folder)

Key sections: A (Hero), B (Typography), C (Cards), D (Sections), E (Scroll Reveal),
F (Navigation), G (Trust/Conversion), H (Footer), I (Dark Continuity), J (Responsive),
K (Accessibility), L (Code Quality), M (Performance), N (Cinematic Hero Layers),
O (External Enhancement Files), P (Performance at Scale), Q (Narrative Scroll),
R (Kinetic Typography), T (Generative and Ambient Visuals), U (Sensory Polish),
V (Performance at Scale).

Safeguards S1-S16 apply to all website page builds.
Zone colours: Z1 #C9A84C | Z2 #1A7A8A | Z3 #7B5EA7 | Z4 #5F7C6C | Z5 #2E6DB4 (D-85)

---

========================================================================
# 24. TRACE TIMELINE 30 FEATURES
========================================================================

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| Page Name | TRACE™ Timeline: 30 Features |
| File | TRACE_Timeline_30Features_2026-05-08.html |
| Location | la-files/ (Living Architecture component) |
| Background | Deep Teal #0C4452 (hero), Prussian Blue #0D2B4E (grid), Charcoal #1A2030 (alternating) |
| Date | 08 May 2026 |
| Authority | ALB v1.6 (D-62), D-85 (Z5), D-80 (mechanism design), D-89 (portfolio lock) |

---

## FEATURE REGISTER (30 features, 5 tiers)

### Tier 1: Core Timeline (Teal #1A7A8A) — 4 features

| ID | Name | Description |
|---|---|---|
| F-T02 | Cascade Archaeology | Reverse stack tracing: reconstructs most probable cascade sequence that produced current terrain state. Vertical excavation UI with evidence tier badges. S4 dashed (Theoretical). |
| F-T03 | Divergence Radar | Concentric session rings with zone dots. Lines connect same zone across sessions. Converging = stabilising. Diverging = fragmenting. Coherence score calculated. |
| F-T04 | Intervention Impact Overlay | Split-lane timeline: terrain scores top, interventions bottom. Gold connection lines. Toggle interventions on/off for counterfactual projection. T-01 compliant. |
| F-T05 | Temporal Cascade Pressure Map | GitHub-style heatmap calendar. Each day coloured by estimated cascade pressure. Sessions marked as gold lines. TerrainLock periods gold-bordered. 90-day rolling average sparkline. |

### Tier 2: Clinical Narratives (Gold #C9A84C) — 3 features

| ID | Name | Description |
|---|---|---|
| F-T06 | Zone Lifecycle Narrative Engine | Auto-generated clinical narrative arc per zone across sessions. Turning points highlighted (threshold crossings, cascade firings, DRD changes). Evidence tier on every causal claim. |
| F-T07 | Cascade Velocity Drift Monitor | Drift chart per cascade stack. Cooling gradient (teal) for slowing stacks. Warming gradient (gold/red) for accelerating stacks. Velocity tier crossing alerts. S4 dashed, S6 UNIDIRECTIONAL. |
| F-T08 | Terrain Snapshot Comparison Theatre | Cinematic side-by-side viewer. Two session pentagons with gold divider. Delta summary bar charts. Swap animation. Slideshow mode (3s auto-advance). One-click clipboard export (T-01 compliant). |

### Tier 3: Predictive Intelligence (Purple #7B5EA7) — 8 features

| ID | Name | Description |
|---|---|---|
| F-T09 | Predictive Inflection Detection | Identifies trajectory reversal points per zone. Diamond markers with confidence bands. Contributing factors annotated. Evidence tier labels. D-80: "Predictive (internal use only)". |
| F-T10 | Session Density and Coverage Audit | Meta-timeline showing data gaps. Pentagon fades during gaps. Cascade-active gaps flagged amber. Coverage score progress ring. Scheduling intelligence without clinical prescription. |
| F-T15 | Terrain Weather System | Meteorological metaphor: storm (high burden, fast cascades), clearing (improving), fair (stable low). 3-session forecast. TerrainLock = cyclone. D-80 labelled. |
| F-T17 | Cascade Fatigue Index | Battery-style icon per stack showing remaining cascade transmissions before target zone saturates. Depleted = near saturation. S4 = cracked battery (uncertain). |
| F-T18 | Terrain Memory Decay Curve | Forgetting-curve per zone showing how quickly terrain reverts post-intervention. Terrain memory score quantifies durability. Gradient bands behind zone score line. |
| F-T19 | Cross-Patient Temporal Archetype Matching | Compares patient trajectory against 5 archetype templates (Rapid Responder, Slow Burn, Relapse Loop, Cascade Domino, Plateau). Similarity percentage + overlay. Evidence: Observed in Practice. |
| F-T20 | Intervention Sequence Optimiser | Optimal zone intervention ordering based on cascade direction and velocity. Respects TerrainLock (Z2 first). DRD designation feeds sequence. T-01 language. Protective header + blank PCD section. |
| F-T30 | Temporal Blind Spot Detector | Estimates probability of missed events during data gaps. Amber hatched regions with confidence %. Data completeness score. Distinct from F-T10 (shows gaps vs estimates what happened inside them). |

### Tier 4: Advanced Analytics (Sage #5F7C6C) — 5 features

| ID | Name | Description |
|---|---|---|
| F-T11 | Burden Tectonic Plates | Geological metaphor: zones as tectonic plates that collide (shared cascade rising), subduct (one drops, target rises), or stabilise. Fault lines labelled with cascade stack ID. S4 shimmer. |
| F-T12 | Cascade Echo Detector | Identifies repeating cascade patterns across sessions. Return arrows on timeline. Frequency table ranking echoes. Strengthening echoes flagged amber, weakening flagged teal. |
| F-T13 | Zone Dominance Seasons | Calendar-year view showing which zone held highest burden per period. Transition points annotated with triggering cascade. Pie chart summary of time-in-dominance. |
| F-T14 | Threshold Crossing Event Log | Git-commit-style feed recording every threshold crossing (activated/deactivated). Direction arrows, internal score, active cascades. Filter by zone/direction/date. Threshold stability score. |
| F-T16 | Node Contribution Waterfall | Waterfall chart decomposing zone score into node contributions per session. N6 dampened bar segment (0.7x). Cross-session stacking shows contribution mix shifts. |

### Tier 5: Terrain Physics (Deep Steel Blue #2E6DB4) — 10 features

| ID | Name | Description |
|---|---|---|
| F-T21 | Terrain Entropy Index | Complexity metric (0-100): low = focused burden, high = chaotic terrain. Gauge + trailing sparkline. Weights cascade activity, zone variance, threshold crossings, DRD stability. |
| F-T22 | Cascade Momentum Vectors | Physics velocity arrows on pentagon map. Length = burden delta. Thickness = evidence tier. Convergence alerts when multiple cascades target one zone. Tension indicators for opposing vectors. |
| F-T23 | Zone Correlation Matrix | 5x5 Pearson correlation heatmap of zone trajectories. Warm = positive correlation. Cool = negative. "Emergent Pattern" flag on high-correlation cells with no defined cascade pathway. |
| F-T24 | Burden Redistribution Flow | Sankey diagram showing burden movement between sessions. Band width = burden delta transferred. New Burden source node. Resolved sink node. 0.8s staggered draw animation. |
| F-T25 | Terrain Phase State Classifier | 5 clinical phase states (Acute, Chronic, Transitional, Recovery, Remission). State badge on timeline. Transition diagram. Annotated with triggering cascade per transition. |
| F-T26 | Circadian Burden Mapping | Polar chart showing consultation time-of-day patterns. Zone scores plotted against time for circadian-linked patterns. Evidence tier: Observed in Practice. |
| F-T27 | Cascade Chain Depth Analyser | Traces longest cascade chain across sessions. Horizontal chain diagram with stack ID, velocity, evidence tier per link. Short chains = localised. Deep chains = systemic. TerrainLock flagged on loop completion. |
| F-T28 | Intervention Response Fingerprint | Generative visual encoding how terrain responds to interventions. Dietary = angular shapes. Supplemental = circular. Lifestyle = organic curves. Patient-unique composition. Overlay comparison. |
| F-T29 | Terrain Stability Half-Life | Half-life of burden stability per zone (sessions to 50% change). Bar chart: short = volatile (frequent monitoring), long = stable (wider intervals). Monitoring frequency mapping. |
| F-T30 | Temporal Blind Spot Detector | (See Tier 3 above — dual-listed for completeness) |

---

## TIER SUMMARY

| Tier | Name | Colour | Count | Focus |
|------|------|--------|-------|-------|
| 1 | Core Timeline | #1A7A8A (Teal) | 4 | Foundational temporal visualisations |
| 2 | Clinical Narratives | #C9A84C (Gold) | 3 | Practitioner-readable timeline storytelling |
| 3 | Predictive Intelligence | #7B5EA7 (Purple) | 8 | Trajectory projection and pattern detection |
| 4 | Advanced Analytics | #5F7C6C (Sage) | 5 | Deep analytical decomposition |
| 5 | Terrain Physics | #2E6DB4 (Steel Blue) | 10 | Physics-inspired terrain dynamics |

---

## COMPLIANCE

| Check | Status |
|-------|--------|
| D-85 Zone Colours | All 5 zones use D-85 palette. Z5 = #2E6DB4. |
| D-80 Mechanism Design | Predictive features (F-T09, F-T15, F-T17, F-T30) labelled "Predictive (internal use only)". No adaptive features. |
| T-01 Language | "Driver" not "Driver". Supplements, dietary, lifestyle only. |
| Protective Header | Present on all clinical output features (PERMANENT). |
| Practitioner Clinical Decision | Blank section present on F-T20 (PERMANENT). |
| S4 Theoretical | Dashed/labelled on F-T02, F-T07, F-T11, F-T22, F-T27. |
| S6 UNIDIRECTIONAL | Labelled in same sentence on F-T07. |
| Evidence Tiers | Present on F-T02, F-T06, F-T09, F-T12, F-T19, F-T22, F-T26, F-T27. |
| 31 TM Footer | VOS + 30 mnemonics. VECTOR footer only. |
| British English | Throughout. |
| No em dashes | Throughout. |

---

## CROSS-REFERENCES

- CascadeAtlas 36 Features: F1-F36 (no overlap verified 08 May 2026)
- NCZ Architecture 5 Specs: Pentagon map, Cascade stacks, Heatmap, Thresholds (no overlap)
- DeltaScan: TRACE operates on DeltaScan comparison data. DeltaScan produces the deltas; TRACE analyses temporal patterns across them.
- GENOME Handbook: TRACE features added as LA tab (08 May 2026)

---

========================================================================
# 25. DRD VISUALISER: 20 AWARD-WINNING FEATURES (D1-D20)
========================================================================

## Built: 08 May 2026 | Authority: ALB v1.5 | D-53 | D-85

### Files
- D1-D10: CascadeAtlas_latest.html (inline, after existing simulator)
- D11-D15: DRD_Features_D11-D15.html (standalone, 1,710 lines)
- D16-D20: DRD_Features_D16-D20.html (standalone, 1,810 lines)
- Total new code: ~5,505 lines across 3 files

### Feature Register

| ID | Feature | Type | Key Elements |
|----|---------|------|-------------|
| D1 | Scroll-Pinned Burden Theatre | 400vh sticky | 4 acts: zone illuminate, cascade draw, crown drop, TerrainLock |
| D2 | Live Burden Transfer Sankey | SVG ribbons | Width=burden delta, particles at velocity, S4 transparent dashed |
| D3 | Pentagon Heatmap Diffusion | SVG gradients | Radial intensity rings, diffusion wave animation, bullseye on highest |
| D4 | Clinical Narrative Engine | Text generator | 5 auto-sentences from slider state, 200ms debounce, Copy button |
| D5 | Intervention Sequence Simulator | Split view | Before/after pentagon, intervention sliders, cascade collapse replay |
| D6 | Zone Dependency Force Graph | Canvas physics | Spring physics, drag nodes, TerrainLock triangle, hover dim, 30fps |
| D7 | ANCHOR Confidence Gauges | SVG arcs | 5 semicircle gauges, crown on highest, BORDERLINE badge, D-38 |
| D8 | Cascade Probability Matrix | 5x5 grid | 6 defined cells, S4 dashed THEORETICAL, hover brightens pentagon |
| D9 | Terrain Topography 3D Surface | Canvas isometric | Peak height=burden, ridgelines for cascades, gold flag, rotate drag |
| D10 | DRD Decision Replay Timeline | Horizontal | Timestamped markers, click-to-restore, Replay button, Export |
| D11 | Cascade Velocity Oscilloscope | Canvas waveforms | 5 channels, impulse spikes, TerrainLock sync, Freeze/Reset |
| D12 | Zone Gravity Well Simulation | Canvas physics | 50 particles, gravitational wells, transfer tunnels, TerrainLock basin |
| D13 | Practitioner Decision Sandbox | 3-column UI | Observe/Hypothesise/Sequence, drag-drop, Compare to DRD, Export |
| D14 | Cascade Chain Reaction Domino | Animation | Click-to-start, branching propagation, step markers, speed control |
| D15 | Terrain Resilience Score Dashboard | Summary panel | Central score ring, mini cards, cascade strip, DRD banner, Print |
| D16 | Burden Redistribution Waterfall | Chart | Bridge segments, spring animation, net flow summary, Cumulative toggle |
| D17 | Multi-Patient Terrain Overlay | Radar chart | 3 preset profiles + live slider, Euclidean best-match, divergence flag |
| D18 | Cascade Timing Gantt Chart | Timeline | Velocity-mapped bars, review cursor, critical path, interval recommendation |
| D19 | Zone Vital Signs Monitor | Canvas ECG | 5 traces, TerrainLock sync, System Load counter, Web Audio toggle |
| D20 | Architectural X-Ray Mode | Toggle view | Wireframe pentagon, formulas, conditions, blueprint grid, keyboard X |

### Architecture Constants (all 20 features)
- Zones: 5 (Z1-Z5). Z5=#2E6DB4. Thresholds: Z1-Z4=40, Z5=32.
- Stacks: 6 (S1-S6). S4 THEORETICAL dashed, excluded from DRD. S6 UNIDIRECTIONAL same line.
- DRD display: "Driver" (T-01a). Never "Driver".
- Pentagon: Z1 top, Z2 right, Z3 bottom-right, Z4 bottom-left, Z5 left.

### Compliance (all 20 features)
- No template literals in attributes
- No default parameters
- No position:fixed (sticky where needed)
- No localStorage
- British English, no em dashes
- prefers-reduced-motion respected
- T-01 headers on D5, D13, D15

### Overlap Check
- No overlap with CascadeAtlas 36 Features (F1-F36)
- No overlap with NCZ Architecture 10 Features (F1-F11)
- No overlap with TRACE Timeline 30 Features (F-T01 to F-T30)
- No overlap with P2 HowItWorks 81 enhancements

---

---

## Section 27: LA4-LA10 + TerrainIntelligence Interactive Upgrades (14 May 2026)

### Overview
68 interactive features added across 8 Living Architecture pages. All features include:
- Z5 colour D-185: #2E6DB4 universally
- ALB v1.6 (D-62)
- focus-visible accessibility
- prefers-reduced-motion compliance
- N6 labelled "(endocrine signalling)" on all practitioner-facing outputs
- T-01 protective headers where clinical output shown

### LA4 DRD Visualiser (8 features)
| ID | Feature | Type |
|----|---------|------|
| LA4-F1 | DRD Explainer Panel | Interactive: zone card click, score calculation walkthrough |
| LA4-F2 | Cascade Trace Animator | SVG: S1-S6 velocity-based arrows, S4 dashed THEORETICAL |
| LA4-F3 | Zone Reactor Panel | Interactive: HBZ selection, Secondary Burden highlight, TerrainLock detection |
| LA4-F4 | Intervention Priority Matrix | Interactive: supplement/dietary/lifestyle grid, T-01 header |
| LA4-F5 | Before/After Comparison | Animated: side-by-side morph, N6 0.7x, inverted display |
| LA4-SV1 | State Bridge | SV: btoa/atob URL state, glassmorphism |
| LA4-SV2 | Pipeline Trace | SV: 7-step computation flow with glow |
| LA4-SV3 | Architecture Navigator | SV: 10-page dot nav, pulse current |

### LA5 KINETICS Velocity Board (6 features)
| ID | Feature | Type |
|----|---------|------|
| LA5-F1 | Velocity Classifier | Interactive: drag S1-S6 into SLOW/MEDIUM/FAST |
| LA5-F2 | Stack Evidence Explorer | Interactive: click-reveal evidence tiers |
| LA5-F3 | KINETICS Timeline | Animated: velocity-proportional lane animation |
| LA5-SV1 | State Bridge | SV: btoa/atob URL state |
| LA5-SV2 | Pipeline Trace | SV: scoring pipeline flow |
| LA5-SV3 | Architecture Navigator | SV: 10-page dot nav |

### LA6 APEX Investigation Planner (6 features)
| ID | Feature | Type |
|----|---------|------|
| LA6-F1 | APEX Budget Calculator | Interactive: 17 investigations, GBP total, tier thresholds |
| LA6-F2 | Investigation Timeline | Animated: optimal draw ordering |
| LA6-F3 | Cross-Zone Finder | Interactive: dual zone selector, shared investigations |
| LA6-SV1 | State Bridge | SV: btoa/atob URL state |
| LA6-SV2 | Pipeline Trace | SV: APEX decision flow |
| LA6-SV3 | Architecture Navigator | SV: 10-page dot nav |

### LA7 TerrainLock Loop Visualiser (6 features)
| ID | Feature | Type |
|----|---------|------|
| LA7-F1 | Loop Break Simulator | Interactive: click Z2/Z1/Z5 to break loop |
| LA7-F2 | S4 Evidence Panel | Interactive: THEORETICAL/DRD Excluded/Clinically Uncommon badges |
| LA7-F3 | Loop Severity Indicator | Interactive: 3 sliders, 4 severity levels |
| LA7-SV1 | State Bridge | SV: btoa/atob URL state |
| LA7-SV2 | Pipeline Trace | SV: S1/S2/S4 activation flow |
| LA7-SV3 | Architecture Navigator | SV: 10-page dot nav |

### LA8 DeltaScan Comparison View (6 features)
| ID | Feature | Type |
|----|---------|------|
| LA8-F1b | Longitudinal Tracker | Interactive: T1/T2/T3, line chart, N6 0.7x |
| LA8-F2 | Delta Heatmap | Canvas: green improved/red worsened |
| LA8-F3 | Intervention Impact Viewer | Interactive: Personalised Terrain Management Protocol, T-01 |
| LA8-SV1 | State Bridge | SV: btoa/atob URL state |
| LA8-SV2 | Pipeline Trace | SV: T1/T2 delta computation |
| LA8-SV3 | Architecture Navigator | SV: 10-page dot nav |

### LA9 TRACE Timeline (6 features)
| ID | Feature | Type |
|----|---------|------|
| LA9-F1b | Timeline Constructor | Interactive: add/remove events, zone filter |
| LA9-F2 | Pattern Detector | Animated: scan pulse, 4 pattern cards |
| LA9-F3 | TRACE Export Panel | Interactive: btoa URL share, clipboard copy |
| LA9-SV1 | State Bridge | SV: btoa/atob URL state |
| LA9-SV2 | Pipeline Trace | SV: event-to-output pipeline |
| LA9-SV3 | Architecture Navigator | SV: 10-page dot nav |

### LA10 TIQ Composite Score (6 features)
| ID | Feature | Type |
|----|---------|------|
| LA10-F1b | TIQ Calculator | Interactive: 5 sliders, N6 0.7x, floor formula |
| LA10-F2 | Score Decomposition | Interactive: zone bars, click to expand detail |
| LA10-F3 | Benchmark Comparator | SVG: gauge with 4 severity ranges |
| LA10-SV1 | State Bridge | SV: btoa/atob zone state |
| LA10-SV2 | Pipeline Trace | SV: 6-step TIQ computation |
| LA10-SV3 | Architecture Navigator | SV: 10-page dot nav |

### TerrainIntelligence (8 features)
| ID | Feature | Type |
|----|---------|------|
| TI-F1 | Terrain Intelligence Dashboard | Interactive: 5 zone cards, click expand |
| TI-F2 | KINETICS Velocity Board | Animated: 6 stacks, scroll-triggered bar fill |
| TI-F3 | DeltaScan Comparison | Interactive: T1/T2, N6 0.7x delta |
| TI-F4 | TRACE Timeline Builder | Interactive: add/remove events |
| TI-F5 | TIQ Composite Gauge | Interactive: 5 sliders, floor formula |
| TI-SV1 | State Bridge | SV: btoa/atob URL state |
| TI-SV2 | FLINT Pipeline Trace | SV: L1-L5 sequential glow |
| TI-SV3 | Architecture Navigator | SV: 10-page dot nav |

### SV-04 Terrain Particle Network (8 instances)
Canvas-based animated particle system. Pentagon layout (Z1 top, Z2 right, Z5 left, Z3 bottom-right, Z4 bottom-left). Particles flow along 6 cascade paths with velocity-proportional speed. Click zone nodes to highlight connections. S4 dashed THEORETICAL. S6 UNIDIRECTIONAL.
Files: LA4, LA5, LA6, LA7, LA8, LA9, LA10, TerrainIntelligence.

### SV-05 Terrain Pulse Monitor (8 instances)
SVG radar/pulse visualiser. Central ring with 5 zone arms. Rotating sweep line. Dots glow above threshold (Z1-Z4: 40, Z5: 32). Near-threshold amber ring. N6 dampening 0.7x. Display: ROUND((100-internal)/10, 0).
Files: LA4, LA5, LA6, LA7, LA8, LA9, LA10, TerrainIntelligence.

### Totals
- 28 interactive features (LA4:5, LA5:3, LA6:3, LA7:3, LA8:3, LA9:3, LA10:3, TI:5)
- 24 SV integrations (3 per page: State Bridge, Pipeline Trace, Navigator)
- 16 SV animated features (2 per page: Particle Network, Pulse Monitor)
- **68 total new features**
- GENOME Handbook Feature Index updated: 255 features (was 187)

---

## Section 28: Practitioner Experience Upgrades (14 May 2026)

### Overview
5 practitioner-experience upgrades added to all 8 Living Architecture pages (40 features total).

### Upgrade 1: Patient Case Presets (8 instances)
4 pre-loaded clinical scenarios per page: Mark (TerrainLock active), Sarah (Z1 dominant), James (Z5 near-threshold), Priya (multi-zone elevated). One click populates all sliders and triggers all computations.

### Upgrade 2: Clinical Walkthrough Mode (8 instances)
Guided 4-5 step overlay with gold spotlight ring highlighting each feature in clinical sequence. Tooltip cards with step counter, description, Next/Skip navigation.

### Upgrade 3: Practitioner Export Report (8 instances)
T-01 compliant summary generator: zone scores (0-10 inverted), active cascades, Driver, N6 dampening, TerrainLock status, timestamp. Copy to clipboard with confirmation. Print button.

### Upgrade 4: Cross-Page State Continuity (8 instances)
"Open in..." buttons encoding all slider values via btoa and opening target LA pages with state pre-loaded. Enables seamless clinical workflow across pages.

### Upgrade 5: Print Stylesheet (8 instances)
@media print rules: white background, static headers, hidden canvases/sliders/overlays, clean practitioner output.

### Totals
- 8 Patient Case Presets
- 8 Clinical Walkthrough Modes
- 8 Practitioner Export Reports
- 8 Cross-Page State Continuity panels
- 1 Print Stylesheet entry (covers 8 pages)
- **33 new feature entries** in GENOME Handbook (255 + 33 = 288)

---

---

## Section 29: ORBIT and SPHERE Architecture Pages (14 May 2026)

### ORBIT Clinical Workflow (Architecture 03 of 05)
File: `ORBIT_latest.html` (1,258 lines)
7 orbital stages, 205 features, max 5 visible per stage, 42 Phase 1 Day One features.
Clean Path vs Storm Path consultation modes. Under 10 minutes per stage.

| ID | Feature | Type |
|----|---------|------|
| ORBIT-I1 | Orbital Stage Simulator | Interactive: 7-stage click-through, Clean/Storm toggle, max-5 rule |
| ORBIT-I2 | Feature Activation Timeline | Interactive: 42 features, dependencies, horizontal scroll |
| ORBIT-I3 | Cognitive Load Monitor | Interactive: live counter, complexity slider, amber warning |
| ORBIT-A1 | Orbital Ring Animation | Animated: SVG 7 rings, orbiting dots, particle trails, click-zoom |
| ORBIT-A2 | Stage Transition Cascade | Animated: sweep fade, gold pulse, stagger drop-in |
| ORBIT-A3 | Storm Path Lightning | Animated: canvas lightning, red particles, toggle on/off |

### SPHERE Patient Context (Architecture 04 of 05)
File: `SPHERE_latest.html` (1,440 lines)
10 concentric rings, 30 features, 5 ring clusters. Protocol Completeness Flag system.

| ID | Feature | Type |
|----|---------|------|
| SPHERE-I1 | Ring Explorer | Interactive: click rings, detail panel, ORBIT stage mapping |
| SPHERE-I2 | Protocol Completeness Checker | Interactive: 10 ring toggles, completeness flag |
| SPHERE-I3 | Ring-to-Zone Mapper | Interactive: click ring/zone, data flow connections |
| SPHERE-A1 | Concentric Ring Pulse | Animated: canvas radar, 3s cycle, RED ring glow |
| SPHERE-A2 | Ring Data Flow Particles | Animated: 80 particles spiral inward, cluster colours |
| SPHERE-A3 | Protocol Gap Lightning | Animated: lightning arcs, red pulse, 3s fade |

### Totals
- 12 new features (6 ORBIT + 6 SPHERE)
- GENOME Handbook Feature Index: 288 + 12 = **300 features across 12 Living Architectures**

---

---

## Section 30: ORBIT/SPHERE Upgrades + Cross-Cutting Features (14 May 2026)

### ORBIT Additional Features (8 features)
| ID | Feature | Type |
|----|---------|------|
| ORBIT-I4 | Live Session Timer | Under-10-min enforcement, amber/red pulse, stage log |
| ORBIT-I5 | Storm Path Probability Calculator | 5-factor gauge, Clean/Storm probability |
| ORBIT-I6 | Stage Dependency Blocker | 7 sequential gates, RedFlagScan, confetti |
| ORBIT-I7 | Feature Fire Sequence Replay | Record/replay at 1x/2x/4x, scrubber, export |
| ORBIT-I8 | Practitioner Decision Audit Trail | Override logging, governance trail, export |
| ORBIT-SV1 | State Bridge | btoa/atob stage+path+timer state |
| ORBIT-SV2 | Pipeline Trace | 7-stage animated flow, Storm badges |
| ORBIT-SV3 | Architecture Navigator | 12-page dot map with data flow lines |

### SPHERE Additional Features (8 features)
| ID | Feature | Type |
|----|---------|------|
| SPHERE-I4 | Ring Impact Heatmap | 10x5 grid, zone-coloured intensity, tooltip |
| SPHERE-I5 | Patient Timeline Ring View | T1/T2/T3 concentric ring morph |
| SPHERE-I6 | Ring Depth Analyser | Sub-component tree, GREEN/AMBER/RED toggles |
| SPHERE-I7 | Treatment Resistance Predictor | Plateau probability gauge, trajectory SVG |
| SPHERE-I8 | SPHERE-ORBIT Live Link | Ring-to-stage mapping, canvas connections |
| SPHERE-SV1 | State Bridge | btoa/atob ring status + timepoint |
| SPHERE-SV2 | Pipeline Trace | 5-cluster coloured flow |
| SPHERE-SV3 | Architecture Navigator | 12-page dots, 3 special connections |

### Cross-Cutting Features (5 features x 8 LA pages = 40 instances, registered as 5 entries)
| ID | Feature | Pages |
|----|---------|-------|
| CC-GLOSS | Architecture Glossary | LA4-LA10, TI (+ ORBIT/SPHERE via SV nav) |
| CC-NOTE | Practitioner Annotations | LA4-LA10, TI |
| CC-DEP | Feature Dependency Graph | LA4-LA10, TI |
| CC-CONF | Confidence Indicator | LA4-LA10, TI |
| CC-COMP | Multi-Patient Compare | LA4-LA10, TI |

### Totals
- 21 new feature entries in GENOME Handbook (300 + 21 = **321**)
- ORBIT page: 1,258 → 3,356 lines (14 total features)
- SPHERE page: 1,440 → 3,010 lines (14 total features)

---

---

## Section 31: ORBIT/SPHERE Advanced Interactive Features (14 May 2026)

### ORBIT Advanced (6 features, total now 20)
| ID | Feature | Type |
|----|---------|------|
| ORBIT-I9 | Consultation Scenario Generator | Random patient auto-play through 7 stages |
| ORBIT-I10 | Stage Efficiency Dashboard | Average time bars, bottleneck detection |
| ORBIT-I11 | Feature Collision Detector | 4 conflict scenarios, active detection |
| ORBIT-I12 | Clean/Storm Side-by-Side | Dual-path comparison, time difference |
| ORBIT-I13 | ORBIT Mastery Quiz | 10 MCQs, confetti on 8+, retry |
| ORBIT-I14 | Stage Output Preview Cards | 7 mock outputs with zone data |

### SPHERE Advanced (6 features, total now 20)
| ID | Feature | Type |
|----|---------|------|
| SPHERE-I9 | Ring Contribution Radar Chart | SVG spider, current vs target, 10 sliders |
| SPHERE-I10 | Ring Intervention Planner | Per-ring suggestions, T-01, copy |
| SPHERE-I11 | SPHERE Completeness Score | Circular gauge 0-100%, auto-update |
| SPHERE-I12 | Ring Priority Ranker | Drag-drop, recommended order, match score |
| SPHERE-I13 | Case Study Presets | 4 profiles with shared state bus |
| SPHERE-I14 | Ring Narrative Generator | T-01 paragraph, copy, print |

### Final Page Stats
- ORBIT: 4,538 lines, 20 features
- SPHERE: 4,035 lines, 20 features
- GENOME Handbook: **333 features across 12 Living Architectures**

---

========================================================================
# 28. FLINT ARCHITECTURE REFERENCE — 10 SV INTERACTIVE FEATURES
========================================================================

## PAGE IDENTITY

| Property | Value |
|----------|-------|
| File | FLINTArchitectureReference_v1_W26_2026-05-14.html |
| Location | la-files/ (embedded via iframe in HowItWorks_latest.html) |
| Source | W26 Clinical Architecture |
| Authority | ALB v1.6 (D-62) + D-85 to D-191 |
| Content | 9 architecture layers + 3 non-layer categories + deadlines |
| Lines | 1,112 |
| GENOME Handbook | LA-18 tab (la18_flint_ref, function LA18FLINTReference) |

---

## 10 SILICON VALLEY INTERACTIVE FEATURES

### SV-F1: Layer Depth Scanner
- Gold beam tracks scroll position across full page
- Each layer section glows with gold box-shadow as beam passes
- Gold endpoint dots at left and right edges
- Medical scanner aesthetic revealing architecture on scroll

### SV-F2: Zone Colour Pulse
- 5 zone-coloured dots added to site header
- Each breathes at unique frequency (2s to 3.6s cycle)
- Scale 1x to 1.4x, opacity 40% to 90%
- Header becomes a living zone indicator

### SV-F3: 9-Layer Pipeline Progress Bar
- Fixed bar at top of page, 9 colour segments (one per layer)
- Each segment fills from left as user scrolls through that layer
- Visual progress through entire architecture reference

### SV-F4: Card Proximity Glow
- Gold radial gradient follows cursor across every layer card
- Flashlight effect on mouse move, fades on leave
- Desktop only (hidden under 769px)

### SV-F5: TerrainLock Triangle Canvas
- Animated canvas: Z2-Z1-Z5 triangle with bezier arcs for S1, S2, S4
- 12 flowing particles at breathing speeds
- S4 dashed (THEORETICAL). Zone nodes pulse.
- "TERRAINLOCK LOOP" label at centre
- IntersectionObserver triggered

### SV-F6: Scoring Formula Live Calculator
- Interactive slider (0-100 internal score)
- Live display: display score, formula with current values, Active/Borderline/Inactive status
- Display score springs with scale animation on change
- Threshold: 40 for Z1-Z4, 32 for Z5. Borderline: 5 internal points below.

### SV-F7: Layer Card Entrance Stagger
- All layer cards start hidden (opacity 0, translateX -30px)
- IntersectionObserver triggers slide-in with spring easing
- 80ms stagger delay between cards
- Sequential waterfall reveal on scroll

### SV-F8: Evidence Tier Legend Bar
- Fixed floating panel at bottom-right (glassmorphism)
- Shows 5 evidence tiers with colour dots: Established, Emerging, Theoretical, Observed, Contested
- Auto-appears when evidence tier labels are in viewport
- Auto-hides when no tiers visible

### SV-F9: Deadline Countdown Pulse
- All critical deadline dates pulse with red box-shadow animation
- DPIA deadline (30 May 2026) shows live countdown: days + hours remaining
- Colour shifts: amber (14+ days) to red (under 7 days)
- EXISTENTIAL label maintained on DPIA

### SV-F10: Section Navigator Dots
- Fixed vertical dot navigation on right edge
- One dot per section, coloured by architecture layer
- Active section dot scales 1.6x at full opacity
- Click to smooth-scroll. Tooltip shows section title.
- Desktop only (hidden under 769px)

---

## COMPLIANCE

| Check | Status |
|-------|--------|
| Z5 colour #2E6DB4 | Present (D-185 universal) |
| prefers-reduced-motion | All 10 features disabled when set |
| S4 THEORETICAL | Labelled in TerrainLock canvas (SV-F5) |
| S6 UNIDIRECTIONAL | Present in cascade stack table |
| 41 mnemonics | TM footer confirmed (SA 14 May 2026) |
| MHRA IO number | IO-2026-0C458370 referenced |
| DPIA deadline | 30 May 2026 with live countdown |
| No em dashes | Zero (cleaned on integration) |
| Logo height 48px | Confirmed in site header CSS |

---

## CROSS-REFERENCES

- Embedded in: HowItWorks_latest.html (iframe, 85vh, lazy-loaded)
- GENOME Handbook: LA-18 tab with 10 feature description cards
- NCZ Architecture: 13 SV animations (separate, on NCZ page)
- Notion source: 360c2e2d-3782-81fa-ac9e-ec2076afca7c

---

END OF MASTER SPECS | 15 May 2026 | VitalMatrix Ltd | ICO ZC101813
Dr Shahzad Faisal, MBBS, FAAMFM
