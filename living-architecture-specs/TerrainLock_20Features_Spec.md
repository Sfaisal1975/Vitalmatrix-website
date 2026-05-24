# TerrainLock Loop Visualiser — 20 Award-Winning Features Specification
# VitalMatrix Ltd | ICO ZC101813 | 8 May 2026
# Authority: ALB v1.5 | D-53 Zone Colours | T-01 Active

---

## Overview

20 interactive features for the TerrainLock self-perpetuating loop visualiser. All pure HTML + CSS + vanilla JS. No React.
TerrainLock loop: Z2 → Z1 → Z5 → Z2 via S1 (MEDIUM) + S2 (FAST) + S4 (MEDIUM, THEORETICAL).
Activation: S1 Active + S2 Active + (S4 Active OR both Z5 and Z2 internal >= 60).
Z2 gut restoration is the default tiebreaker entry point.
Zone colours D-53: Z1=#C9A84C, Z2=#1A7A8A, Z5=#2E6DB4. Background: #0D2B4E. All IDs prefixed vm-tl-.

---

## Feature Index

### Understanding the Loop
| # | Feature | What It Answers |
|---|---------|----------------|
| 1 | Loop Velocity Orchestrator | How fast is it spinning? (3 speeds simultaneously) |
| 4 | Three-Zone Pressure Gauge Dashboard | How much pressure is in the system? |
| 11 | Harmonic Resonance Visualiser | When do the cascades reinforce each other? |
| 16 | Acoustic Sonification | What does the loop sound like? |

### Predicting the Loop
| # | Feature | What It Answers |
|---|---------|----------------|
| 6 | Probability Forecaster | How close is this patient to locking? |
| 7 | Cohort Prevalence Map | How many of my patients are at risk? |
| 13 | Sensitivity Matrix | What is the minimum change that breaks it? |
| 19 | Alert Configuration | When should I be warned? |

### Understanding Why It Formed
| # | Feature | What It Answers |
|---|---------|----------------|
| 3 | Historical Pattern Analyser | How did the loop assemble over months? |
| 8 | Gate Forensic Breakdown | Which nodes are driving each gate? |
| 10 | Constitutional Context Panel | Why was this patient vulnerable? |
| 18 | Node Contribution Waterfall | Forensic node-level burden tracing |
| 20 | Architectural Integrity Proof | Why does the detection exist? |

### Breaking the Loop
| # | Feature | What It Answers |
|---|---------|----------------|
| 2 | Escape Route Simulator | How do I break it? (interactive) |
| 5 | Lock vs Non-Lock Comparator | Why does detection change the direction? |
| 9 | Breaking Animation Theatre | What does recovery look like? (cinematic) |
| 12 | Metabolic Cost Calculator | What is the biological cost of the loop? |
| 14 | Cascade Interference Map | How does the loop distort other cascades? |
| 15 | Break Point Sequencer | Plan the intervention sequence (drag-and-drop) |

### Learning from the Loop
| # | Feature | What It Answers |
|---|---------|----------------|
| 17 | Comparative Case Gallery | 5 different loop presentations for pattern recognition |

---

## Feature 1: Loop Velocity Orchestrator

**Purpose:** Visualise the loop as a perpetual motion engine with three particles at different speeds.

**Components:**
- SVG triangle: Z2 (top) → Z1 (bottom-right) → Z5 (bottom-left) → Z2
- 3 orbiting particles: S1 MEDIUM (2.4s), S2 FAST (1.2s), S4 MEDIUM dashed (2.4s, THEORETICAL)
- Particles overlap, overtake, lap each other
- "Velocity ratio" display
- Tempo slider 0.25x to 4x
- Gold flash on convergence (all 3 at same zone)

---

## Feature 2: Escape Route Simulator

**Purpose:** Interactive loop-breaking experimentation with clinical timeline predictions.

**Components:**
- Active triangle with 3 gates MET
- 3 "Intervention Pressure" sliders (0-100% per stack)
- At 60% pressure: gate flips NOT MET, leg snaps (break animation)
- "Clinical Insight" panel per scenario
- "Recommended Sequence" badge: Z2 gut restoration first

---

## Feature 3: Historical Pattern Analyser

**Purpose:** Show how the loop assembled over time — cascade archaeology.

**Components:**
- Horizontal timeline: 7-month loop assembly (Stephen Clarke)
- Month 0: Z2 threshold. Month 3: S1. Month 5: Z1. Month 6: S2 FAST. Month 6.5: Z5. Month 7: S4 THEORETICAL
- Event nodes with stack colour, velocity badge, evidence tier
- "Disassembly Prediction" reverse timeline

---

## Feature 4: Three-Zone Pressure Gauge Dashboard

**Purpose:** Aircraft-instrument dashboard with cascade pressure redistribution.

**Components:**
- 3 circular gauges (Z2, Z1, Z5): needle 0-100, green/amber/red bands
- Connected by animated S1, S2, S4 flow lines
- Zone sliders for real-time control
- "System Pressure" composite indicator (centre)
- "Relief Valve" buttons per zone
- "Nearest Exit" indicator

---

## Feature 5: Lock vs Non-Lock Comparator

**Purpose:** Split-screen proving why detection changes clinical direction.

**Components:**
- Left: "Without TerrainLock" — Z1 highest burden, linear Z1→Z5 sequence
- Right: "With TerrainLock" — loop detected, Z2 gut restoration first
- Same data: Z1=65, Z2=55, Z5=50
- Toggle switch between views
- "Recommended Sequence" changes visibly

---

## Feature 6: Probability Forecaster

**Purpose:** Early warning — see the loop forming before it locks.

**Components:**
- 3 proximity rings (circular progress per gate)
- Composite "TerrainLock Probability" percentage at centre
- Timeline projection: "Estimated activation in X weeks"
- "Pre-emptive Window" bar
- Default scores below threshold but approaching: Z2=35, Z1=38, Z5=28

---

## Feature 7: Cohort Prevalence Map

**Purpose:** Population-level loop risk across a practitioner's caseload.

**Components:**
- 10 fictional patients as horizontal bars
- Mini triangle per patient showing gate status
- Sorted by proximity. Summary: "3 active, 2 at risk, 5 clear"
- Click to expand individual scores
- "Cohort Insight" panel with patterns

---

## Feature 8: Gate Forensic Breakdown

**Purpose:** Node-level forensic tracing of each gate.

**Components:**
- 3 expandable cards: Gate 1 (S1), Gate 2 (S2), Gate 3 (S4 or override)
- Node scores, N6 dampening 0.7x, floor formula step by step
- Gate 3: Path A (S4 active, THEORETICAL) vs Path B (Z5+Z2>=60)
- "Weakest Link" indicator per gate
- Demo: N1=42, N2=68, N3=81, N4=55, N5=49, N6=74, N7=38

---

## Feature 9: Breaking Animation Theatre

**Purpose:** Cinematic loop-breaking experience.

**Components:**
- 3 entry buttons: Z2 (recommended), Z1, Z5
- Phase 1 (0-3s): zone dims, score ticks down
- Phase 2 (3-5s): threshold crossed, leg fractures (glass-break particle effect)
- Phase 3 (5-8s): remaining stacks continue, triangle opens to arc
- Phase 4 (8-10s): recovery, ACTIVE → INTERRUPTED → RESOLVED
- Clinical timeline overlay. Replay + speed controls.

---

## Feature 10: Constitutional Context Panel

**Purpose:** Why this patient developed a loop.

**Components:**
- 3 SPHERE intake factors: Ring 5 Stress, Ring 3 Dietary, Ring 9 Constitutional
- Each maps to triangle leg with dashed connection
- "Constitutional Risk Profile": 3x higher probability
- "Environmental Triggers": stress + diet accelerated S1 by 40%
- Evidence: Observed in Practice. Practitioner authority disclaimer.

---

## Feature 11: Harmonic Resonance Visualiser

**Purpose:** Physics of the loop — oscillating frequencies.

**Components:**
- Oscilloscope canvas: 3 sine waves
- S1: 0.42 Hz teal. S2: 0.83 Hz gold. S4: 0.42 Hz dashed (THEORETICAL)
- Partial resonance flash (2 waves align)
- Full harmonic convergence gold flash (~4.8s)
- Beat frequency analyser panel
- Play/pause, speed control

---

## Feature 12: Metabolic Cost Calculator

**Purpose:** Quantify the biological cost of the loop.

**Components:**
- 3 metabolic load bars: S1 (15-20% ATP), S2 (2.3x cortisol), S4 (IgA suppression, THEORETICAL)
- "Total Loop Cost" gauge: 35-45% adaptive capacity
- Energy budget chart: sleep, immune, cognitive, physical, loop maintenance
- Evidence tier badges per estimate

---

## Feature 13: Sensitivity Matrix

**Purpose:** Minimum intervention precision.

**Components:**
- Heatmap grid: rows Z2/Z1/Z5, columns -20 to +20 (5-point steps)
- Gold (active), teal (breaks), amber (borderline)
- "Minimum Effective Intervention" highlighted
- "Combined Sensitivity" tab for 2-variable combinations
- Default: Z2=55, Z1=65, Z5=50

---

## Feature 14: Cascade Interference Map

**Purpose:** How the loop distorts the entire cascade network.

**Components:**
- Pentagon view with S3, S5, S6 shown alongside loop
- S3 burden absorbed by loop at Z1 junction
- S5 Z2 burden split between S1 (loop) and S5 (Z3)
- S6 Z1 burden sustained by loop (UNIDIRECTIONAL: Z1 to Z3 only)
- Animated particle splitting at junctions
- "Cascade Interference Report"

---

## Feature 15: Break Point Sequencer

**Purpose:** Practitioner intervention planning as visual design.

**Components:**
- Drag-and-drop timeline (6 months)
- Intervention cards: gut restoration (S1), cortisol (S2), hormonal (S4/Z5), general
- Projected loop status per week
- "Sequence Score": Optimal/Good/Suboptimal
- Compare up to 3 saved sequences

---

## Feature 16: Acoustic Sonification

**Purpose:** Multi-sensory loop intelligence.

**Components:**
- S1: 220 Hz mid. S2: 440 Hz high. S4: 220 Hz muted+reverb (THEORETICAL)
- Rhythm matches velocities: S2 pulses 2x per S1
- Zone reduction drops corresponding tone
- "Healthy Baseline" (silence) vs "Full Lock" (all tones)
- Volume, mute. Accessibility: audio supplementary.

---

## Feature 17: Comparative Case Gallery

**Purpose:** Pattern recognition training across 5 loop presentations.

**Cases:**
- A "Classic Lock": Z2 entry, all gates, 7 months
- B "Rapid Lock": Z1 entry, S2 FAST, 3 months
- C "Partial Lock": S1+S2 active, S4 not met, borderline
- D "False Positive": all above threshold, S4 THEORETICAL, Z5/Z2=60
- E "Resolved Lock": T1 active, T2 broken post gut restoration

---

## Feature 18: Node Contribution Waterfall

**Purpose:** Deepest forensic view — loop to individual nodes.

**Components:**
- Waterfall chart per loop zone (Z2, Z1, Z5)
- Node contributions with N6 dampening at 0.7x
- Floor formula: MAX(dampened) - 10
- Click node bar: "If reduced by 10, which gates break?"
- N6 highlighted as cross-cutting risk node

---

## Feature 19: Alert Configuration

**Purpose:** Configurable clinical surveillance.

**Components:**
- Threshold options: borderline range, 2-of-3 gates, probability %
- Sensitivity vs specificity indicator
- Preview: patient count per setting
- Session storage persistence

---

## Feature 20: Architectural Integrity Proof

**Purpose:** Trust through understanding — why the detection exists.

**Steps:**
1. "5-node graph has 3 possible triangular loops" (SVG)
2. "Only Z2→Z1→Z5→Z2 sustains — velocity combination" (bars)
3. "2 of 3 legs Established, 1 Theoretical" (badges)
4. "All 3 above threshold simultaneously = sustained burden" (probability)
- Final: "TerrainLock is not a feature we added. It is a property the architecture revealed."

---

## File Manifest

| File | Features | Location |
|------|----------|----------|
| tl-features-1-4.html | Velocity + Escape + History + Gauges | LocalPreview/sections/ |
| tl-features-5-8.html | Comparator + Forecaster + Cohort + Forensic | LocalPreview/sections/ |
| tl-features-9-12.html | Theatre + Constitutional + Harmonic + Cost | LocalPreview/sections/ |
| tl-features-13-16.html | Sensitivity + Interference + Sequencer + Acoustic | LocalPreview/sections/ |
| tl-features-17-20.html | Gallery + Waterfall + Alerts + Proof | LocalPreview/sections/ |
| TerrainLock_20Features_Embed.html | All 20 combined for iframe | ClaudeCode_Context/ |

## Integration Targets

| Target | Method |
|--------|--------|
| CascadeAtlas_latest.html (localhost:8080) | Inline after existing TerrainLock section |
| LivingArchitectures_latest.html | Inline after LA-7 TerrainLock section |
| GENOME Handbook JSX (LA-7 tab) | iframe embed of TerrainLock_20Features_Embed.html |
| Specs file | This document |

---

*TerrainLock 20 Features Spec | VitalMatrix Ltd | ICO ZC101813 | 8 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.5 | D-53 | T-01 Active*
