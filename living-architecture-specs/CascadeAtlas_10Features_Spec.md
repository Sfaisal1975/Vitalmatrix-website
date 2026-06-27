# CascadeAtlas Living Architecture — 10 Award-Winning Features Specification
# VitalMatrix Ltd | ICO ZC101813 | 6 May 2026
# Authority: ALB v1.5 | D-53 Zone Colours | T-01 Active

---

## Overview

10 interactive features built for the CascadeAtlas page. All pure HTML + CSS + vanilla JS. No React dependency.
Zone colours D-53: Z1=#C9A84C, Z2=#1A7A8A, Z3=#7B5EA7, Z4=#5F7C6C, Z5=#2E6DB4.
Pentagon layout canonical: Z1 top, Z2 right, Z3 bottom-right, Z4 bottom-left, Z5 left.
Background: #0A0F14. Fonts: Cormorant Garamond headings, Outfit body, DM Mono labels.
All IDs prefixed vm-ca-.

---

## Feature 1: Live Patient Cascade Simulator

**Purpose:** Practitioner adjusts zone burden scores and watches the pentagon react in real time.

**Components:**
- 5 range sliders (Z1-Z5, range 0-100)
- SVG pentagon with zone circles, cascade stack lines, TerrainLock ellipse
- Default scores: Z1=45, Z2=55, Z3=30, Z4=25, Z5=50

**Logic:**
- Activation thresholds: Z1-Z4=40, Z5=32
- Active zones glow brighter, inactive fade to 20% opacity
- Active stacks (both endpoints above threshold) animate dash-flow at velocity speed:
  - FAST: 1s (S2, S5)
  - MEDIUM: 2s (S1, S4, S6)
  - SLOW: 4s (S3)
- S4 always dashed, labelled THEORETICAL
- S6 labelled UNIDIRECTIONAL: Z1 to Z3 only
- TerrainLock: S1+S2 active + (S4 active OR both Z5,Z2 >= 60) — golden pulse on ellipse
- DRD: Driver among active zones gets pulsing ring + "HIGHEST BURDEN" label
- Z2 default tiebreaker

**File:** sections/ca-features-1-2.html (combined with Feature 2)

---

## Feature 2: Cascade Pathway Trace Animation

**Purpose:** Click a stack button to watch burden travel along the cascade line with a clinical narrative.

**Components:**
- 6 buttons (S1-S6)
- Particle animation along cascade curve
- Slide-in narrative panel

**Animations:**
- Source zone pulses on trigger
- Glowing particle travels at velocity speed
- Target zone illuminates on arrival
- S4: dashed particle trail + "THEORETICAL" watermark
- S6: one-way arrow + "UNIDIRECTIONAL" stamp

**Clinical Narratives:**
- S1: "Gut-driven immune disruption reaches metabolic energy burden. Mechanism Established. Weeks to months."
- S2: "Metabolic disruption impacts hormonal terrain rapidly via HPA axis. Established. Days to weeks."
- S3: "Detoxification burden accumulates slowly upstream. Emerging. Months to quarters."
- S4: "Hormonal-to-resilience feedback. Theoretical. Excluded from DRD cascade trace (D-12)."
- S5: "Immune-cardiovascular axis activates rapidly. Emerging. Days to weeks."
- S6: "Metabolic burden loads cardiovascular-neural axis. Established. UNIDIRECTIONAL: Z1 to Z3 only. Weeks."

**File:** sections/ca-features-1-2.html (combined with Feature 1)

---

## Feature 3: Three-Patient Terrain Comparison Overlay

**Purpose:** Show same pentagon with three different patient terrains overlaid to demonstrate architecture versatility.

**Components:**
- Toggle: "Architecture" / "Compare 3 Patients"
- 3 semi-transparent polygon overlays on SVG pentagon
- Legend panel with patient details

**Patient Data:**
| Patient | Driver | Scores (Z1/Z2/Z3/Z4/Z5) | Active Stacks | TerrainLock |
|---------|--------|--------------------------|---------------|-------------|
| Stephen | Z1 | 78/63/52/62/72 | S1, S2, S6 | Active |
| Maria | Z2 | 58/72/44/71/55 | S1, S3, S5 | Inactive |
| James | Z5 | 62/61/55/79/76 | S2, S3, S4 (Theoretical) | Inactive |

**Visual treatment:**
- Stephen: gold overlay at 15% opacity
- Maria: teal overlay at 15% opacity
- James: warm gold overlay at 15% opacity
- Active cascades as coloured lines per patient

**File:** sections/ca-features-3-4.html (combined with Feature 4)

---

## Feature 4: Evidence Tier Deep-Dive Panels

**Purpose:** Click evidence badges to reveal the scientific basis for each cascade classification.

**Components:**
- Click-to-open slide-out panel per stack
- Layer A: peer-reviewed science summary
- Layer B: VitalMatrix structured reasoning
- Confidence meter (horizontal bar)

**Evidence Data:**
| Stack | Layer A Summary | Confidence |
|-------|----------------|------------|
| S1 | Gut permeability to systemic inflammation to thyroid axis disruption. Multiple RCTs confirm mechanism. | 75% |
| S2 | HPA axis cortisol signalling disrupts HPG axis. Established endocrine pathway. | 88% |
| S3 | Phase I/II enzyme burden reduces mitochondrial efficiency. Emerging toxicology evidence. | 55% |
| S4 | Hormonal feedback to immune modulation. No peer-reviewed cascade evidence. | 20% |
| S5 | TMAO pathway linking gut microbiome to cardiovascular risk. Quarterly review active. | 50% |
| S6 | Metabolic substrate deficiency impacts neural tissue. UNIDIRECTIONAL: Z1 to Z3 only. | 82% |

**File:** sections/ca-features-3-4.html (combined with Feature 3)

---

## Feature 5: Cascade Chain Reaction Visualiser

**Purpose:** Select a starting zone and watch the domino cascade sequence unfold across the pentagon.

**Components:**
- "Chain Reaction Mode" toggle
- 3 zone start buttons (Z2, Z4, Z1)
- Sequential animation with velocity-based delays
- Character-by-character narrative typewriter

**Chain Sequences:**
- Z2 start: S1 to Z1 (2s) then S2 Z1 to Z5 (1s) then S4 Z5 to Z2 (2s, dashed)
  Narrative: "Gut burden reaches energy axis in weeks. Energy cascades to hormones in days. TerrainLock loop completes."
- Z4 start: S3 to Z1 (4s) then S2 Z1 to Z5 (1s) then S6 Z1 to Z3 (2s, UNIDIRECTIONAL)
  Narrative: "Detox burden reaches energy after months. Then rapid chain: hormones in days, cardiovascular in weeks. The most commonly missed upstream pathway."
- Z1 start: S2 to Z5 (1s) then S6 to Z3 (2s, UNIDIRECTIONAL)
  Narrative: "Metabolic burden hits hormones first. Then cardiovascular-neural. S6 is UNIDIRECTIONAL: Z1 to Z3 only."

**File:** sections/ca-features-5-6.html (combined with Feature 6)

---

## Feature 6: Practitioner Annotation Layer

**Purpose:** Pin clinical notes on zones and stacks during consultation. Export as text or PNG.

**Components:**
- Floating "Notes" button (gold, bottom-right)
- Transparent overlay on pentagon
- Click zone/stack to drop pin with text input
- Pins as coloured dots with hover tooltips
- sessionStorage persistence

**Actions:**
- Clear All: remove all pins
- Copy Notes: structured text to clipboard (Zone/Stack: note, one per line)
- Export PNG: canvas snapshot of pentagon with annotations

**File:** sections/ca-features-5-6.html (combined with Feature 5)

---

## Feature 7: Cascade Velocity Heatmap

**Purpose:** Transform the pentagon from a line diagram into a thermal map showing where burden moves fastest.

**Components:**
- "Heatmap Mode" toggle
- Filled zone regions sized by burden score
- Gradient paths between zones coloured by velocity
- Temperature legend

**Velocity Colours:**
- FAST: red-orange (#D63030 to #C9A84C), pulses at 1s
- MEDIUM: warm amber, pulses at 2s
- SLOW: cool blue-green, pulses at 4s

**Demo scores:** Z1=65, Z2=55, Z3=30, Z4=45, Z5=50
**TerrainLock active:** Z2-Z1-Z5 triangle fills with rotating golden gradient

**File:** sections/ca-features-7-8.html (combined with Feature 8)

---

## Feature 8: Time-Lapse Terrain Evolution

**Purpose:** Scrub through 4 timepoints to watch terrain evolve — baseline to cascade spread to post-intervention.

**Components:**
- Timeline scrubber slider (T0-T3)
- Play/pause button (3s auto-advance)
- Morphing pentagon: zones swell/shrink, stacks appear/disappear
- TIQ score counter, DRD badge movement

**Timepoint Data:**
| Timepoint | Z1 | Z2 | Z3 | Z4 | Z5 | TIQ | Active Stacks | TerrainLock | DRD Driver |
|-----------|----|----|----|----|-----|-----|---------------|-------------|------------|
| T0 Baseline | 20 | 25 | 15 | 18 | 22 | 7.8 | None | No | None |
| T1 Initial | 35 | 48 | 20 | 30 | 28 | 5.6 | S1 | No | Z2 |
| T2 Spread | 65 | 55 | 30 | 45 | 50 | 3.4 | S1, S2 | Yes | Z1 |
| T3 Post-Rx | 38 | 30 | 22 | 28 | 35 | 6.2 | None | No | None |

**File:** sections/ca-features-7-8.html (combined with Feature 7)

---

## Feature 9: Cascade Risk Predictor

**Purpose:** Click any zone to see "If this zone worsens, what happens next?" with probability projections.

**Components:**
- 5 zone buttons
- Risk cards with probability bars, evidence badges, timeframes
- "What if improves?" flip view
- Red flag icon for TerrainLock activation risk

**Risk Data:**
| Zone Worsens | Pathway | Probability | Evidence | Timeframe |
|-------------|---------|-------------|----------|-----------|
| Z1 | S2 to Z5 | 85% | Established | Days to weeks |
| Z1 | S6 to Z3 | 65% | Established, UNIDIRECTIONAL | Weeks |
| Z2 | S1 to Z1 | 80% | Mechanism Established | Weeks to months |
| Z2 | S5 to Z3 | 55% | Emerging | Days to weeks |
| Z3 | None | Terminal zone | N/A | N/A |
| Z4 | S3 to Z1 | 60% | Emerging | Months to quarters |
| Z5 | S4 to Z2 | 35% | Theoretical (D-12 excluded) | N/A |

**File:** sections/ca-features-9-10.html (combined with Feature 10)

---

## Feature 10: Interactive Clinical Scenario Walkthrough

**Purpose:** 6-step narrated tour overlaying the pentagon. The sales demo embedded in the product.

**Steps:**
1. Full pentagon dim. "Meet Stephen, 52. Persistent fatigue, brain fog, weight gain. Let us trace his terrain."
2. Z2 illuminates. "Gut-immune burden scores highest. Z2 Resilience Network: 2.8/10."
3. S1 animates Z2 to Z1. "Burden cascades via S1. Mechanism Established. Weeks to months."
4. S2 animates Z1 to Z5. "Z1 chains to Z5. FAST velocity. Hormonal terrain under pressure."
5. TerrainLock pulses. "S1 + S2 active. Z2 to Z1 to Z5 to Z2 loop is self-perpetuating."
6. DRD badge on Z1. "Z1 is the Driver. Clinical investigation starts here."
7. End card: "This is what VitalMatrix does with every patient." + CTA "Book a Discovery Call"

**File:** sections/ca-features-9-10.html (combined with Feature 9)

---

## File Manifest

| File | Features | Lines | Location |
|------|----------|-------|----------|
| ca-features-1-2.html | Simulator + Trace | 234 | LocalPreview/sections/ |
| ca-features-3-4.html | Comparison + Evidence | 252 | LocalPreview/sections/ |
| ca-features-5-6.html | Chain Reaction + Annotation | 302 | LocalPreview/sections/ |
| ca-features-7-8.html | Heatmap + Time-Lapse | 244 | LocalPreview/sections/ |
| ca-features-9-10.html | Risk Predictor + Walkthrough | 178 | LocalPreview/sections/ |

## Integration Status

| Target | Status |
|--------|--------|
| CascadeAtlas_latest.html (localhost:8080) | DONE — all 10 features inserted before CTA section |
| Living Architectures page (localhost:8080) | PENDING |
| GENOME Handbook JSX | PENDING |
| vitalmatrix_revamped CascadeAtlas | PENDING |

---

*CascadeAtlas 10 Features Spec | VitalMatrix Ltd | ICO ZC101813 | 6 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.5 | D-53 | T-01 Active*
