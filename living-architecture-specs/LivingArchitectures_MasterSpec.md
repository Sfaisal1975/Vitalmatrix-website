# Living Architectures Master Specification
# VitalMatrix Ltd | ICO ZC101813 | Updated 13 May 2026
# Authority: ALB v1.6 (D-62) | D-85 Zone Colours | D-78 Option B | T-01 Active
# DB-001 RESOLVED: TerrainLock formula = s1Active AND s2Active AND s4Active. Z5+Z2>=60 fallback REMOVED from all files.

---

## Overview

14 Living Architecture components (10 original + 4 new W26 layers) plus 80+ premium interactive features across 7 feature suites. All converted from GENOME Handbook React/JSX to standalone HTML/CSS/vanilla JS. No framework dependency.

**Zone colours D-85:** Z1=#C9A84C, Z2=#1A7A8A, Z3=#7B5EA7, Z4=#5F7C6C, Z5=#2E6DB4
**TerrainLock formula (DB-001):** s1Active AND s2Active AND s4Active. NO Z5+Z2>=60 fallback.
**S4:** THEORETICAL always. Excluded from DRD trace (D-12).
**S6:** UNIDIRECTIONAL in same sentence always.

## Feature Suite Summary

| Suite | Features | Spec File |
|-------|----------|-----------|
| CascadeAtlas Premium | 10 | CascadeAtlas_10Features_Spec.md |
| TerrainLock Premium | 20 | TerrainLock_20Features_Spec.md |
| Interactive Learning | 10 | InteractiveLearning_10Features_Spec.md |
| NCZ Handbook Overlay v2.0 | 10 | NCZ_HandbookOverlay_10Features_Spec.md |
| New Mnemonics (W26) | 10 | NewMnemonics_10Features_Spec.md |
| KINETICS Premium | 20 | KINETICS_20Features_Specs_2026-05-08.md |
| APEX Premium | 20 | APEX_20Features_Specs_2026-05-08.md |
| NCZ Original (P14) | 16 | NCZ_10Features_Specs_2026-05-07.md |
| Terrain Intelligence (P9) | 40 | (TI-1 to TI-40 in master spec below) |
| Silicon Valley Upgrades | 32 | vm-silicon-valley.js + v2.js + v3.js + upgrades v1/v2 |
| Overlay Addendum (INTERNAL) | 20 | addendum-features-1-5, 6-10, 11-15, 16-20.html |
| Practitioner Tools (T-01) | 10 | practitioner-features-1-5.html + 6-10.html |
| **Total** | **212** | |

## Silicon Valley Award-Winning Upgrades (26 features, 3 scripts)

Applied to: 37 website pages + GENOME Handbook Preview. All scripts load via `<script defer>`.

### vm-silicon-valley.js (V1: 6 features)

| # | Feature | Category |
|---|---------|----------|
| 1 | Lazy-load iframes (200px rootMargin) | Performance |
| 2 | Touch-friendly sliders + 44px tap targets | Mobile |
| 3 | ARIA labels, keyboard nav, focus rings, skip link | Accessibility |
| 4 | Spring physics hover, press feedback, scroll reveal | Animation |
| 5 | Unified 12px radius, section padding, font smoothing | Consistency |
| 6 | Custom scrollbar, print styles, responsive headings | Consistency |

### vm-silicon-valley-v2.js (V2: 8 features)

| # | Feature | Category |
|---|---------|----------|
| 7 | Cursor spotlight gradient on dark sections | Cursor Intelligence |
| 8 | Magnetic buttons (spring pull toward pointer) | Cursor Intelligence |
| 9 | 3D card tilt toward cursor | Cursor Intelligence |
| 10 | Sound design (click, toggle, slider tones) | Sound |
| 11 | Skeleton shimmer + pulsing dots on iframes | Loading States |
| 12 | Command Palette (Ctrl+K) — search sections/mnemonics | Navigation |
| 13 | Dark/Light mode toggle (bottom-left) | Theme |
| 14 | Presence indicator ("Dr Faisal is viewing") | Collaboration |

### vm-silicon-valley-v3.js (V3: 10 features)

| # | Feature | Category |
|---|---------|----------|
| 15 | Scroll velocity indicator (gold/teal/red) | Engagement |
| 16 | Mnemonic hover tooltips (22 definitions) | Education |
| 17 | Reading time estimator ("X min left") | UX |
| 18 | Floating zone colour legend (expandable) | Reference |
| 19 | Smart back-to-top with progress ring | Navigation |
| 20 | Copy-on-click for scores (clipboard + toast) | Utility |
| 21 | Section transition wipes (gold line) | Animation |
| 22 | Engagement heatmap dots (click positions) | Analytics |
| 23 | Keyboard shortcuts panel (press ?) | Navigation |
| 24 | Cinematic page entrance (staggered fade-in) | Animation |
| 25 | Section dot nav (fixed right, scroll-aware) | Navigation |
| 26 | Page fade-in animation | Animation |

### vm-sv-upgrades-existing.js (3 in-place upgrades to existing features)

| # | Upgrade | What It Enhances | Effect |
|---|---------|-----------------|--------|
| 27 | Particle Flow on Cascade Lines | LA-1 CascadeAtlas, all pentagon SVGs | Animated circles travel along stack lines at velocity-matched speed (FAST 1.2s, MEDIUM 2.4s, SLOW 4.5s). Two particles per line offset by half-cycle for continuous flow. Theoretical stacks get smaller, dimmer particles. |
| 28 | Glassmorphism + Depth on Zones | LA-2 NCZ, all zone bubbles/cards | backdrop-filter blur + saturate on zone elements. Floating 3D lift on hover (translateY -4px, scale 1.02, deep shadow). Inner glow border gradient on circular zone indicators. |
| 29 | Typewriter Reveal on Values | VANTAGE dimensions, score displays, narratives | Character-by-character reveal when element scrolls into view. Adaptive speed (15-40ms per char based on text length). Blinking cursor during typing. Screen reader announcement on completion. |

**Method:** No new sections or HTML structure. Pure JS enhancement of existing DOM elements via class injection, SVG particle generation, and IntersectionObserver-triggered animation. Runs 500ms after DOMContentLoaded to ensure all components are painted.

### Files

| File | Location | Size |
|------|----------|------|
| vm-silicon-valley.js | LocalPreview/ + ClaudeCode_Context/ + vitalmatrix_revamped/ | ~6KB |
| vm-silicon-valley-v2.js | LocalPreview/ + ClaudeCode_Context/ + vitalmatrix_revamped/ | ~8KB |
| vm-silicon-valley-v3.js | LocalPreview/ + ClaudeCode_Context/ + vitalmatrix_revamped/ | ~7KB |
| vm-sv-upgrades-existing.js | LocalPreview/ + ClaudeCode_Context/ + vitalmatrix_revamped/ | ~6KB |
| vm-sv-upgrades-existing-v2.js | LocalPreview/ + ClaudeCode_Context/ + vitalmatrix_revamped/ | ~5KB |

### vm-sv-upgrades-existing-v2.js (3 more in-place upgrades)

| # | Upgrade | What It Enhances | Effect |
|---|---------|-----------------|--------|
| 30 | Contextual Glow Halos | Accordions, cards, zones | Soft radial glow halo when element enters active/open/selected state. MutationObserver driven. |
| 31 | Smooth Number Counters | Score displays, sliders | Numbers count up/down with cubic ease-out (400ms) instead of jumping. MutationObserver on text content. |
| 32 | Ripple Feedback on Click | All clickable surfaces | Gold radial ripple from click point (0.6s). Buttons, cards, tabs, chips, zones, accordion headers. |

### GENOME Handbook Integration

GENOME_HandbookV7_Build3_Preview.html loads all 5 scripts via `<script defer>`.
All 32 Silicon Valley features active on the handbook preview page and 35 website pages.

## DB-001 Correction Log (8 May 2026, applied 13 May 2026)

All files corrected:
- `ca-features-1-2.html`: simulator TerrainLock calculation — fallback removed
- `tl-features-5-8.html`: forecaster gate status + forensic Gate 3 — label and formula corrected
- `CascadeAtlas_latest.html`: 9 score refs, 5 label refs — all corrected
- `LivingArchitectures_latest.html`: z5z2 variables set to false, labels corrected
- Zero `z5z2Both`, zero `S4 OR Z5`, zero `Z5+Z2>=60` fallback remaining in any file.

**Zone Colours D-53 (website):** Z1=#C9A84C, Z2=#1A7A8A, Z3=#7B5EA7, Z4=#5F7C6C, Z5=#2E6DB4
**Fonts:** Cormorant Garamond (headings), Outfit (body), DM Mono (labels)
**CTA System:** vm-cta-crosslinks.css (Primary gold, Explore ghost, Inline text+arrow)

---

## Distribution Status (8 May 2026)

| Step | LAs | Target Page | Status | Date |
|------|-----|-------------|--------|------|
| 1 | LA-3, LA-4, LA-8 | P2 How It Works | **DONE** | 6 May 2026 |
| 2 | LA-5, LA-6, LA-7, LA-9 | P11 Terrain Intelligence | **DONE** | 8 May 2026 |
| 3 | LA-1 | P13 CascadeAtlas | **DONE** | 8 May 2026 |
| 4 | LA-2 | P14 NCZ Architecture | **DONE** | 8 May 2026 |
| 5 | LA-10 | P1 Homepage | **DONE** | 8 May 2026 |
| 6 | CTA cross-links | P2, P11, P13, P14 | **DONE** | 8 May 2026 |

All 10 Living Architectures distributed. Cross-page CTA links active on P2, P11, P13, P14.

---

## Component Index

| LA | Component | Lines | Section File | Primary Page | Distributed | Also On |
|----|-----------|-------|-------------|-------------|-------------|---------|
| LA-1 | CascadeAtlas Interactive Map | 208 | la1-cascadeatlas-section.html | P13 CascadeAtlas | **YES** | P2 (via CTA) |
| LA-2 | NCZ V2 Interactive | 197 | la2-ncz-section.html | P14 NCZ Architecture | **YES** | P2 |
| LA-3 | FLINT 5-Layer Accordion | 149 | la3-flint-section.html | P2 How It Works | **YES** | LA page |
| LA-4 | DRD Slider Visualiser | 184 | la4-drd-section.html | P2 How It Works | **YES** | LA page |
| LA-5 | KINETICS Velocity Board | 137 | la5-kinetics-section.html | P11 Terrain Intelligence | **YES** | P2 (via CTA) |
| LA-6 | APEX Investigation Planner | 90 | la6-apex-section.html | P11 Terrain Intelligence | **YES** | LA page |
| LA-7 | TerrainLock Loop | 188 | la7-terrainlock-section.html | P11 Terrain Intelligence | **YES** | LA page |
| LA-8 | DeltaScan T1/T2 Comparison | 137 | la8-deltascan-section.html | P2 How It Works | **YES** | LA page |
| LA-9 | TRACE Patient Timeline | 112 | la9-trace-section.html | P11 Terrain Intelligence | **YES** | LA page |
| LA-10 | TIQ Score Widget | 131 | la10-tiq-section.html | P1 Homepage | **YES** | LA page |

---

## LA-1: CascadeAtlas Interactive Map

**Eyebrow:** Cascade Architecture
**Heading:** The CascadeAtlas Map
**Background:** Charcoal #1A2030
**Interaction:** Click zone for detail panel. Click stack line for stack detail. TerrainLock toggle.
**SVG:** Pentagon layout (Z1 top, Z2 right, Z3 bottom-right, Z4 bottom-left, Z5 left). 6 cascade lines with velocity dash animations. Evidence badges per stack.
**Compliance:** S4 dashed + THEORETICAL. S6 UNIDIRECTIONAL in same sentence. TerrainRoot: 0 references.

### CascadeAtlas 10 Award-Winning Features

See: CascadeAtlas_10Features_Spec.md for full detail.

| # | Feature | Type |
|---|---------|------|
| 1 | Live Patient Cascade Simulator | 5 sliders, real-time pentagon |
| 2 | Cascade Pathway Trace Animation | Particle travel + clinical narrative |
| 3 | Three-Patient Terrain Comparison | Stephen/Maria/James overlay |
| 4 | Evidence Tier Deep-Dive Panels | Layer A/B science + confidence meter |
| 5 | Cascade Chain Reaction Visualiser | Domino sequence + typewriter narrative |
| 6 | Practitioner Annotation Layer | Pin notes, export PNG/text |
| 7 | Cascade Velocity Heatmap | Thermal map + speed pulses |
| 8 | Time-Lapse Terrain Evolution | T0-T3 scrubber + morphing pentagon |
| 9 | Cascade Risk Predictor | "What happens if this zone worsens" |
| 10 | Interactive Clinical Walkthrough | 6-step narrated Stephen Clarke tour |

**Files:**
- ca-features-1-2.html (234 lines)
- ca-features-3-4.html (252 lines)
- ca-features-5-6.html (302 lines)
- ca-features-7-8.html (244 lines)
- ca-features-9-10.html (178 lines)

### 3 Silicon Valley Upgrades (14 May 2026)

**Patch file:** CascadeAtlas_3Upgrades_Patch.html
**Method:** In-place upgrades to existing F1, F5, F8. No new sections created.

**Upgrade 1: F1 Live Simulator — Particle Streams + Cascade Strength Meters**
- Active cascade lines emit continuous SVG particle streams (small circles travelling source-to-target)
- Particle density and speed match velocity: FAST=4 particles/dense/rapid, MEDIUM=2/moderate, SLOW=1/sparse
- Each zone displays real-time cascade pressure meter (total inbound velocity weight as horizontal bars)
- Zone circles emit expanding ripple rings on first activation (shockwave animation)
- Pressure header "CASCADE PRESSURE" with per-zone bar + numeric value
- All particles auto-clean on state change. No memory leak.
- **Status:** BUILT

**Upgrade 2: F5 Chain Reaction Visualiser — Shockwave Domino + Typewriter Narrative**
- Click source zone to trigger sequential cascade propagation with staggered delays
- Delays match velocity: FAST=0.8s gap, MEDIUM=1.2s gap, SLOW=2s gap between domino steps
- Each zone activation creates expanding shockwave ring (0.8s ease-out, fade to transparent)
- Zone circles flash with brightness pulse on domino arrival (vm-domino-glow)
- Cascade lines appear with stroke-opacity transition as each stack fires
- Typewriter narrative builds character-by-character (18ms per character)
- Per-source-zone narrative chains: Z2 triggers S1 to Z1 to S2 to Z5 to TerrainLock detection
- Z4 chain reveals "most commonly missed upstream cascade" (S3, SLOW, Emerging)
- S4 narrative states THEORETICAL and D-12 exclusion
- Gold-bordered narrative box with left accent bar
- **Status:** BUILT

**Upgrade 3: F8 DeltaScan Timeline — Morphing Zones + Live Cascade Lines + Animated Delta Strip**
- Zone circle radius scales proportional to burden: r = 10 + (score * 0.15)
- Cascade lines appear/disappear with smooth transition as interpolated scores cross thresholds during scrubbing
- Active cascade lines show velocity-proportional thickness (FAST=3px, MEDIUM=2px, SLOW=1px) and animated dash
- Stack ID labels appear on active cascade midpoints (e.g. "S1 M", "S2 F")
- Delta strip chips animate in with slide effect (staggered 80ms per zone)
- Chips colour-coded: green IMPROVED, red WORSENED, grey STABLE
- Each chip shows: zone ID, direction arrow, magnitude, and label
- DRD designation shift indicator: "DRD SHIFTED: Z2 to Z1" appears when scrubber crosses midpoint and DRD changes
- DRD golden dashed ring on designated zone at current interpolation point
- Borderline zones show dashed stroke during scrub
- Zone ACTIVE/BORDERLINE status labels appear below circles
- **Status:** BUILT

**Architecture compliance (all 3 upgrades):**
- S4 THEORETICAL: dashed lines, narrative labels D-12 exclusion
- S6 UNIDIRECTIONAL: arrow marker retained, narrative labels direction
- Z5 #2E6DB4 (D-85): all zone colours from existing ZONES constant
- No template literals. String concatenation only.
- No new sections. No new HTML structure. In-place JS enhancement.
- British English throughout.

### 3 Silicon Valley Upgrades v2 (14 May 2026)

**Patch file:** CascadeAtlas_3Upgrades_Patch_v2.html
**Method:** In-place upgrades to existing F7, F3, F14. No new sections created.

**Upgrade 4: F7 TerrainLock — Orbital Particles + Gate Proximity Bars**
- When TerrainLock ACTIVE: 3 gold SVG particles orbit continuously around the Z2-Z1-Z5 triangular path (3s loop, staggered 1s apart)
- Triangular path breathes with pulsing stroke opacity (vm-tl-breathe, 2s cycle)
- Zone circles on triangle vertices show scores and active/inactive opacity
- Stack labels (S1, S2, S4*) on triangle edges, gold when active, muted when inactive
- 3 gate proximity bars below triangle: track from source+target show percentage toward activation
- Gate bars colour-shift: gold when MET, amber when >80%, muted when <80%
- Z2 entry point marker badge appears when TerrainLock is active: "ENTRY POINT: Z2 Gut Restoration (Default Tiebreaker)"
- When INACTIVE: particles stop, triangle dims, gates show distance-to-activation as percentages
- **Status:** BUILT

**Upgrade 5: F3 Three-Patient Comparison — Morphing Transitions + Terrain Distance**
- "Auto Cycle" button added: rotates through patients one at a time (2s per patient)
- During cycle: current patient's polygon drawn at full opacity, others at 8% opacity
- Current patient's zone vertices get white-stroked dot markers
- Legend cards dim/brighten in sync with cycle (opacity transition 0.4s)
- Terrain Distance metric panel appears in Compare mode: pairwise Euclidean distance between all 3 patients
- Distance bars colour-coded: teal (similar), gold (moderate), red (divergent)
- Similarity percentage label per pair (e.g. "72% similar")
- Panel hidden in Architecture mode
- **Status:** BUILT

**Upgrade 6: F14 Session Playback — Waveform Visualisation + Ghost Trail**
- Canvas waveform (600x48) renders below playback bar after recording stops
- Waveform shows per-zone event traces as coloured lines (zone colours, 1.2px stroke)
- Background grid at 25% intervals for visual reference
- During playback: gold vertical line sweeps across waveform showing current position
- Ghost trail: text indicator shows what changed at each playback step ("Z2: 45 to 55 | Z1: 38 to 42")
- Ghost legend: "Previous" (faded gold dot) vs "Current" (solid gold dot)
- Waveform re-renders at each playback frame to maintain position marker accuracy
- "Playback complete" message when replay finishes
- **Status:** BUILT

**Architecture compliance (all 6 upgrades, v1 + v2):**
- S4 THEORETICAL: labelled "S4*" on TerrainLock triangle. Narrative states D-12 exclusion.
- S6 UNIDIRECTIONAL: not directly involved in F7/F3/F14 upgrades (no change needed)
- Z5 #2E6DB4 (D-85): all zone colours from existing ZONES constant
- TerrainLock activation: s1on && s2on && s4on (DB-001 corrected formula)
- Z2 tiebreaker: entry point marker states "Default Tiebreaker"
- No template literals. String concatenation only.
- No new sections. No new HTML structure. Pure JS enhancement of existing DOM.
- British English throughout.

### 4 Silicon Valley Upgrades v3 (14 May 2026)

**Patch file:** CascadeAtlas_4Upgrades_Patch_v3.html
**Method:** In-place upgrades to existing F9, F15, F21, F27. No new sections created.

**Upgrade 7: F9 Heatmap — Radial Heat Emanation + Thermal Pentagon Fill**
- Hot zones (score > 45) emit pulsing radial heat wave rings at burden-proportional frequency
- Higher burden = faster, more rings (1-3 concurrent waves per zone)
- Heat colour transitions: teal (<40) to gold (40-60) to red (>60)
- Pentagon interior gets radial gradient fill centred on the hottest zone (thermal centre-of-mass)
- Gradient breathes with subtle fill-opacity animation (3s cycle)
- Waves and gradient auto-clean and regenerate on every score change
- **Status:** BUILT

**Upgrade 8: F15 Pulse Monitor — ECG Trace Waveform**
- Per-zone canvas trace (300x28) draws ECG-style heartbeat waveform below pulse circles
- Active zones show coloured traces with QRS spikes at burden-proportional frequency
- Higher burden = faster heartbeat rate (40-160 BPM range)
- Inactive zones show flatline trace (0.5px grey)
- Traces scroll left continuously via requestAnimationFrame (hospital monitor effect)
- BPM readout per zone (e.g. "92 BPM" or "FLAT")
- Animation starts/stops with existing pulse toggle button
- **Status:** BUILT

**Upgrade 9: F21 Dominance Radar — Animated Bar Race + Crown + Sparklines**
- Bars animate to new widths with 0.6s cubic-bezier transition on every score change
- Bars re-sort by power ranking with smooth DOM reflow
- #1 ranked active stack gets gold crown emoji with bobbing animation (1.5s cycle)
- Each bar gets a 5-point sparkline (36x10 SVG) showing recent power history
- S4 bar always shows "THEO" suffix and dashed border
- Velocity label shown per bar (FAST/MEDIUM/SLOW)
- Power history tracked across last 5 updateAll() calls per stack
- **Status:** BUILT

**Upgrade 10: F27 TIQ Badge — SVG Ring Gauge + Band Label + Metric Cards**
- Large SVG ring gauge (140x140) with arc filling clockwise proportional to TIQ score
- Arc stroke colour transitions: green (<35) to gold (35-60) to red (>60)
- Fill animates with 0.8s cubic-bezier on score change (stroke-dashoffset transition)
- Centre: large Cormorant Garamond TIQ value with colour matching arc
- Band label below ring: "LOW BURDEN" / "MODERATE BURDEN" / "HIGH BURDEN" with fade-in animation
- Three metric cards: Active Zones (teal), Active Cascades (gold), TerrainLock status (gold/muted)
- All metrics update in real time from slider changes
- **Status:** BUILT

**Architecture compliance (all 10 upgrades, v1 + v2 + v3):**
- S4 THEORETICAL: dashed bar in radar (Upgrade 9), "THEO" suffix. D-12 exclusion in TerrainLock.
- S6 UNIDIRECTIONAL: retained in all cascade line calculations.
- Z5 #2E6DB4 (D-85): all zone colours from existing ZONES constant.
- TerrainLock: s1on && s2on && s4on (DB-001 corrected). TIQ metric card reflects status.
- TIQ computation: from existing computeTIQ() function. No formula change.
- No template literals. String concatenation only.
- No new sections. No new HTML. Pure JS enhancement of existing DOM.
- British English throughout.

---

## LA-2: NCZ V2 Interactive

**Eyebrow:** Node Convergence Zone Architecture
**Heading:** Seven Nodes. Five Zones. One Architecture.
**Background:** Deep Teal #0C4452
**Interaction:** Click node to highlight fed zones. Click zone to highlight source nodes. Toggle selection.
**Data:** 7 nodes (N1-N7) mapped to 5 zones. N6 dampening 0.7x badge. N7 Phase 2 placeholder.
**Compliance:** NCZ = Node Convergence Zones (Notion Register Row 02, confirmed 12 May 2026). MES not a node.

### NCZ Architecture: 16 Premium Interactive Features (P14)

**File:** NCZArchitecture_latest.html (~4312 lines)
**Full spec file:** NCZ_10Features_Specs_2026-05-07.md (updated to 16 features)

| # | Feature | ID Prefix | Background | Built |
|---|---------|-----------|------------|-------|
| F1 | Live Node-to-Zone Assembly Animation | ncz-f1- | Charcoal | 7 May |
| F2 | Interactive Patient Burden Heatmap | ncz-f2- | Prussian | 7 May |
| F3 | Cascade Domino Chain | ncz-f3- | Charcoal | 7 May |
| F4 | Split-Screen Workflow Comparison | ncz-f4- | Charcoal | 7 May |
| F5 | Personalised Architecture Readiness Score | ncz-f5- | Deep Teal | 7 May |
| F6 | Zone Breathing Visualiser | ncz-f6- | Deep Teal | 7 May |
| F7 | N6 Dampening X-Ray | ncz-f7- | Prussian | 7 May |
| F8 | Cascade Archaeology Timeline | ncz-f8- | Deep Teal | 7 May |
| F9 | Zone Isolation Theatre | ncz-f9- | Overlay | 7 May |
| F10 | Live Architecture Stress Test | ncz-f10- | Prussian | 7 May |
| F11 | "Your Next Monday Morning" Consultation Simulator | ncz-f11- | Prussian | 7 May |
| F12 | Scoring Transparency Calculator | ncz-f12- | Charcoal | 8 May |
| F13 | Evidence Tier Explorer | ncz-f13- | Deep Teal | 8 May |
| F14 | DeltaScan Terrain Shift Viewer | ncz-f14- | Prussian | 8 May |
| F15 | Five-Layer Pipeline Animation | ncz-f15- | Charcoal | 8 May |
| F16 | Output Document Preview | ncz-f16- | Prussian | 8 May |

### NCZ Handbook Overlay v2.0 Features (10 additional, 13 May 2026)

**Source:** GENOME Handbook Chapter Overlay v2.0 NCZ Components
**Full spec file:** NCZ_HandbookOverlay_10Features_Spec.md
**Files:** ncz2-features-1-5.html, ncz2-features-6-10.html

| # | Feature | ID Prefix | Source Component |
|---|---------|-----------|-----------------|
| 1 | Connectivity Map | vm-ncz2- | NCZConnectivityMap |
| 2 | Composition Builder | vm-ncz2- | NCZCompositionBuilder |
| 3 | Overlap Matrix | vm-ncz2- | NCZOverlapMatrix |
| 4 | Node Sharing Venn | vm-ncz2- | NCZNodeSharingVenn |
| 5 | Clinical Entry Cards | vm-ncz2- | NCZClinicalEntryCards |
| 6 | Burden Simulator | vm-ncz2- | NCZBurdenSimulator |
| 7 | Chain Tracer | vm-ncz2- | NCZChainTracer |
| 8 | Evolution Timeline | vm-ncz2- | NCZEvolutionTimeline |
| 9 | Zone Comparison | vm-ncz2- | NCZZoneComparison |
| 10 | Clipboard Reference | vm-ncz2- | NCZClipboardRef |

**Total NCZ features: 26** (16 original + 10 handbook overlay)

**F12 Scoring Transparency Calculator:** Two-panel layout. Left: 7 node sliders (0-100 internal). Right: 5 zone display scores (0-10 inverted) with Active/Borderline/Inactive badges. Live formula trace: raw capture, N6 dampening x0.7, zone composite, floor MAX(dampened)-10, display ROUND((100-internal)/10). All thresholds: Z1-Z4=40, Z5=32, near-threshold 5 points (D-38).

**F13 Evidence Tier Explorer:** 6 cascade stack cards, 3-column grid. Filter bar: All/Established/Emerging/Theoretical. Click to expand with evidence description and clinical significance. S4 dashed border (THEORETICAL, excluded from DRD D-12). S6 UNIDIRECTIONAL qualifier in same sentence.

**F14 DeltaScan Terrain Shift Viewer:** T1 vs T2 side-by-side comparison. Fictional patient Mark, 47. Zone burden bars with display scores and delta arrows. DRD designation shift (Z2 baseline to Z1 follow-up). Animated pulse arrow.

**F15 Five-Layer Pipeline Animation:** 5 vertical FLINT layer cards (L1-L5) with connectors. "Run Pipeline" triggers 1.2s sequential activation with fictional patient output text. L4 = "Highest Burden Designation" (T-01a compliant).

**F16 Output Document Preview:** White document card with T-01 header, protective header, 7 clickable sections mapping to FLINT layers, blank Practitioner Clinical Decision (5 fields, never pre-populated). T-01 fully compliant.

**Compliance (all 16 features):** Vanilla JS IIFEs, no template literals, no default parameters. S4 THEORETICAL, S6 UNIDIRECTIONAL. N6 x0.7, floor MAX(dampened)-10. British English, no em dashes. DRD "Highest burden zone" (T-01a).

---

## LA-3: FLINT 5-Layer Accordion

**Eyebrow:** Layer by Layer
**Heading:** The FLINT Five-Layer Architecture
**Background:** Soft Gold #F5F0E4
**Cards:** 5 jewel-tone dark cards (Burnt Gold, Deep Teal, Plum, Forest, Amber Dark)
**Interaction:** Click layer header to expand/collapse (one open at a time). Gold connecting arrows between layers.
**Layers:** L1 Node Scoring, L2 Zone Activation (NCZ), L3 Cascade Detection (CascadeIQ), L4 DRD Causality, L5 APEX Examination
**5 Award Features:**
1. Animated Pipeline Flow Connector (gold dot travels L1-L5)
2. Live Data Preview on Hover (coloured dots pop in)
3. Layer Completion Progress Ring (SVG arc fills on expand)
4. Cross-Layer Highlight Links (click terms to jump layers)
5. Split-Screen Architecture/Patient Toggle (Stephen Clarke case data)

---

## LA-4: DRD Slider Visualiser

**Eyebrow:** DRD Designation
**Heading:** Which Zone Carries the Highest Burden?
**Background:** Deep Teal #0C4452
**Interaction:** 5 range sliders (0-100). Live calculation of active zones, highest burden zone (Z2 tiebreaker), reactor zones, cascade trace.
**Logic:** Display score = ROUND((100 - internal) / 10). Floor = MAX(dampened) - 10. S4 excluded per D-12.
**Compliance:** T-01a: "Highest burden zone" not "Driver".

---

## LA-5: KINETICS Velocity Board (20-Feature Premium)

**Eyebrow:** Velocity Intelligence
**Heading:** How Fast Is the Terrain Moving?
**Background:** Deep Teal #0C4452
**Build file:** GENOME_HandbookV7_Build3_AllLA_2026-04-11.jsx (LA5KineticsVelocity function)
**Compliance:** S4 THEORETICAL. S6 UNIDIRECTIONAL in same sentence. T-01 protective header. Blank Practitioner Clinical Decision section on export.

### Base Features (original)
- 5 zone sliders (internal 0-100 scale, threshold labels)
- 6 cascade stack cards with velocity badges (FAST/MEDIUM/SLOW)
- Animated pulse bars per stack (speed matches velocity classification)
- TerrainLock detection with 3 gate readouts (S1, S2, S4/Z5+Z2>=60)
- Evidence tier badges per stack
- Direction arrows (source zone to target zone)
- Active/inactive status per stack
- Timing guidance per stack
- Qualifier badges (THEORETICAL, UNIDIRECTIONAL)

### Feature 1: Cascade Velocity Heatmap Timeline
- Horizontal SVG strip showing velocity state over a 12-consultation window
- Each stack row shows colour-coded cells per consultation (gold=FAST, white=MEDIUM, sage=SLOW)
- Current consultation column pulses; historical columns static
- Answers: "Is this cascade accelerating, decelerating, or stable?"
- **Status:** Spec complete. Visual concept in gradient map strip (F11 partial implementation).

### Feature 2: Cascade Propagation Simulator
- Mini-pentagon SVG (280x280) with particle streams along active stack arrows
- FAST stacks: dense rapid particles. SLOW stacks: sparse slow particles
- Click any zone circle to lock as intervention target: inbound particles halt, downstream stacks visually deactivate
- TerrainLock fires gold orbital pulse on S1-S2-S4 simultaneously
- **Status:** Intervention target state implemented (`intTarget`). Full particle animation deferred to standalone LA file.

### Feature 3: Velocity-Weighted Urgency Stack Ranking
- Dynamic ranking strip re-sorts stacks by computed urgency index: velocity_weight x activation x source_burden
- Horizontal bar visualisation (Stripe-style progress bars)
- Live-recalculates as sliders move
- DM Mono label: "Urgency order is computed, not listed. Practitioner review required."
- **Status:** BUILT. Fully functional in Build3.

### Feature 4: Intervention Sequence Animator
- "Simulate" button animates predicted terrain response to treating DRD zone
- 4-step sequence: driver zone dims, velocity badges downshift, reactors dim with stagger delay, TerrainLock re-evaluates
- Runs over 3 seconds with eased transitions
- Label: "Simulated terrain response. Not a clinical outcome prediction."
- **Status:** BUILT. 4-step sequence with opacity animation on stack cards.

### Feature 5: Comparative Velocity Overlay (Split View)
- Toggle splits board into Assessment 1 (left) and Assessment 2 (right)
- Each side has independent zone sliders
- Stack cards show velocity delta: ACCELERATED / DECELERATED / STABLE
- TerrainLock comparison between assessments
- **Status:** BUILT. Full split view with independent slider sets and delta indicators.

### Feature 6: Velocity Resonance Detector
- Identifies zones receiving 2+ inbound active cascades simultaneously
- Displays "RES" badge on affected stack cards
- Answers: "Is this zone burdened from one pathway or multiple converging cascades?"
- **Status:** BUILT. Resonance zones computed and displayed per card.

### Feature 7: Velocity Decay Curve
- Micro SVG sparkline (100x20) per active stack card
- FAST: steep exponential drop. MEDIUM: moderate sigmoid. SLOW: long shallow tail
- Time-to-sub-threshold estimate label
- Evidence tier: Emerging
- **Status:** BUILT. SVG path curves rendered per active stack card.

### Feature 8: Stack Dominance Radar
- SVG radar chart (pentagon, 200x200) with coloured wedge sectors
- Wedge opacity proportional to stack activation strength
- TerrainLock trio merges into gold orbital band
- Indicates concentrated vs distributed cascade pressure
- **Status:** Spec complete. Partial implementation via phase diagram quadrant (F16).

### Feature 9: Cascade Chain Depth Counter
- Computes downstream hop count per active stack (1, 2, 3, or LOOP/infinity)
- Chain link icon with depth number on each stack card
- LOOP shown as gold infinity symbol when TerrainLock detected
- Toggle: "Depth if driver treated" (shows chain collapse)
- **Status:** BUILT. Recursive chain depth computation with LOOP detection.

### Feature 10: Velocity Audit Trail (Session Ledger)
- Collapsible panel recording every slider change as timestamped ledger entry
- Logs: zone, old value, new value, timestamp
- Gold dots for activation events, muted dots for deactivation
- "Copy to Clipboard" exports structured plain text for Session Governance Record
- Header: "KINETICS Session Audit | For practitioner records only"
- **Status:** BUILT. Full audit log with clipboard export.

### Feature 11: Velocity Gradient Map
- Full-width horizontal SVG strip (600x48) with zone nodes and connection lines
- Line thickness encodes velocity: FAST=6px, MEDIUM=3px, SLOW=1.5px
- DRD zone marked with gold needle indicator
- TerrainLock bands pulse with synchronised gold shimmer
- **Status:** BUILT. SVG gradient strip with dynamic thickness and DRD marker.

### Feature 12: Inverse Velocity View (Reactor Perspective)
- Toggle: "View: Driver" / "View: Reactor"
- Reactor view reorganises cards by target zone instead of source zone
- Shows all inbound cascades per target zone consolidated
- Answers: "Which zone is under the most cascade pressure?"
- **Status:** BUILT. Toggle switches card ordering between driver and reactor perspective.

### Feature 13: Velocity Confidence Interval Bands
- Thin horizontal bar (4px) per stack card with three colour segments
- Segments represent probability of FAST/MEDIUM/SLOW given zone score proximity to threshold
- Borderline zones show equal segments; deep-active zones show dominant segment
- Micro-label: "BORDERLINE" when source zone is in near-threshold window (D-38)
- **Status:** BUILT. Confidence bands with borderline detection per slider.

### Feature 14: Stack Fingerprint Signature
- 6-character alphanumeric code computed from current velocity state (F=Fast, M=Medium, S=Slow, -=inactive)
- Pill badge at top of board, live-updating
- 5 pre-defined clinical archetype patterns with nearest-match label
- Novel patterns labelled: "No archetype match: novel pattern"
- **Status:** BUILT. Fingerprint computation with archetype matching.

### Feature 15: Cascade Bottleneck Detector
- Identifies zones with 2+ inbound AND 1+ outbound active cascades
- Amber highlight with tooltip explaining cascade collapse potential
- Divergence badge when bottleneck differs from DRD designation
- **Status:** BUILT. Bottleneck detection with DRD divergence alert in load balance panel.

### Feature 16: Velocity Phase Diagram
- State-space chart (SVG, 200x160) with X=active count, Y=mean velocity weight
- Four quadrant regions: Quiet, Focused Fast, Distributed Slow, Acute Multi-Cascade
- Gold dot plots current state, glides as sliders move
- Dynamic quadrant label updates in real time
- **Status:** BUILT. Full quadrant diagram with live dot positioning.

### Feature 17: Stack Pair Correlation Matrix
- 6x6 grid showing co-activation state between all stack pairs
- Teal fill = both active, gold fill = one active, empty = both inactive
- TerrainLock trio (S1+S2+S4) marked with dashed gold outline
- Co-activation density percentage displayed
- **Status:** BUILT. Full matrix with density metric.

### Feature 18: Velocity Differential Arrows
- Dynamic SVG arrows between zone chips on each stack card
- Arrow thickness: FAST=3px, MEDIUM=2px, SLOW=1px
- Arrow head scales proportionally
- Spring animation on activation/deactivation transitions
- **Status:** BUILT. Dynamic arrow rendering with velocity-proportional styling.

### Feature 19: Cascade Load Balance Indicator
- Horizontal bar showing distribution of cascade traffic across five zones
- Segment width proportional to total inbound+outbound velocity weight
- DRD marker and bottleneck labels
- Concentration vs distribution label
- **Status:** BUILT. Full load balance bar with per-zone percentages and bottleneck alerts.

### Feature 20: Velocity Board Export Card
- "Export Card" button generates self-contained summary panel
- Includes: zone scores, stack states, velocities, TerrainLock status, fingerprint, phase label, DRD, bottlenecks
- Formatted in VitalMatrix design system (Prussian Blue header, DM Mono labels, gold accents)
- Mandatory blank Practitioner Clinical Decision section (W5-3, W5-4 permanent)
- "Copy to Clipboard" exports structured plain text
- ICO ZC101813 footer
- **Status:** BUILT. Full export panel with clipboard function and T-01 compliance.

---

## LA-6: APEX Investigation Planner (20-Feature Premium)

**Eyebrow:** Examination Intelligence
**Heading:** Prioritised Investigation. Three Budget Tiers.
**Background:** Charcoal #1A2030
**Build file:** sections/la6-apex-20features-section.html
**Specs file:** APEX_20Features_Specs_2026-05-08.md
**Compliance:** APEX = Assessment Priority and Evidence Xray (never "Adaptive Prioritised Examination"). T-01 compliant. Evidence tiers on every investigation.

### Base Features (original)
- 5 zone selector buttons (Z1-Z5, D-53 colours)
- 3 budget tiers (GBP 200-400, 400-800, 800+)
- Investigation rows with evidence tier badges and cost ranges
- Per-zone investigation data (5 zones x 3 tiers)

### Feature 1: Cascade-Linked Investigation Sequencing
- Zone selector identifies cascade-connected downstream zones via active stacks (S4 excluded)
- Recommended investigation order: source zone first, then downstream reactors
- Gold SOURCE ZONE stamp, stack badges (via S1, via S2, etc.)
- **Status:** BUILT

### Feature 2: Live Budget Accumulator with Shortlist
- Checkbox on each investigation row, running total with real-time bar
- Bar colour transitions at tier boundaries (teal to gold to purple)
- Ceiling lines at GBP 400 and GBP 800
- Selected investigations panel
- **Status:** BUILT

### Feature 3: Evidence Confidence Heatmap
- Grid view: investigations x evidence tiers (Established/Emerging/Observed/Theoretical/Contested)
- Tier-coloured cells for matching evidence. Circle glyph in active cells
- **Status:** BUILT

### Feature 4: Cross-Zone Investigation Overlap Detector
- Automatic cross-zone scan. DUAL-YIELD gold badge on tests in 2+ zones
- Zone indicator circles. Saving estimate calculated
- **Status:** BUILT

### Feature 5: Tier Progression Waterfall
- Click Tier 1 results to flag/unflag. Tier 2 unlocks at 1 flag, Tier 3 at 2 flags
- Locked tiers dimmed with lock icon. Arrow connectors between tiers
- **Status:** BUILT

### Feature 6: Functional Optimal Range Lens
- Click to expand inline conventional vs functional optimal range bars
- Grey bar (conventional), gold-bordered bar (functional)
- Magnifying glass icon on tests with range data
- **Status:** BUILT

### Feature 7: Investigation Dependency Chain
- Comprehensive panel checkbox dims individual covered tests
- COMPREHENSIVE badge on parent panels. "Covered by" badge on redundant tests
- **Status:** BUILT

### Feature 8: Practitioner Annotation Sticky Notes
- Pin icon per row. Click to attach free-text note (max 140 chars)
- Gold-dashed border note cards. Session-persistent
- **Status:** BUILT

### Feature 9: Seasonal and Circadian Specimen Timing Advisor
- Specimen type icons (blood, urine, saliva, stool, imaging, device)
- Optimal collection windows, fasting requirement badges, seasonal notes
- **Status:** BUILT

### Feature 10: Budget Scenario Comparator
- Two-column split: Scenario A (Tier 1 only) vs Scenario B (Tier 1 + Tier 2)
- Delta strip showing cost difference, zone coverage gain, investigation count
- **Status:** BUILT

### Feature 11: Cascade Source Priority Marker
- 5 zone sliders for DRD computation (highest burden, Z2 tiebreaker)
- Zone tabs reordered: DRD first with pulsing HIGHEST BURDEN stamp
- Reactor zones show stack connection. SOURCE stamp on investigation rows
- **Status:** BUILT

### Feature 12: Evidence Tier Confidence Trajectory
- Micro-sparkline SVG (40x14) per investigation showing 5-year evidence trend
- Rising line = growing confidence. Gold/teal polyline
- **Status:** BUILT

### Feature 13: Patient Cost Transparency Card
- Toggle between practitioner view and patient-friendly view
- Plain English names, single midpoint cost, one-sentence explanation
- Suitable for screen-sharing during consultations
- **Status:** BUILT

### Feature 14: Multi-Zone Basket Consolidation
- Tier 1 investigations from all 5 zones merged by specimen type
- Duplicates collapsed with multi-zone badges. Specimen count summary
- **Status:** BUILT

### Feature 15: Lab Provider Cost Comparison Grid
- Three horizontal bars per test: NHS (teal), Private (gold), Specialist (purple)
- NHS Only filter toggle. Indicative pricing footer note
- **Status:** BUILT

### Feature 16: Investigation Impact Radar
- Mini pentagon radar canvas (92x92) on hover showing zone coverage
- Pentagon matches CascadeAtlas canonical layout. Zone count badge inline
- **Status:** BUILT

### Feature 17: Borderline Zone Investigation Escalation
- 5 zone sliders. D-38 near-threshold window (5 internal points below threshold)
- Amber dashed border on borderline zones. D-38 tooltip text
- Tier 3 dimmed in borderline zones with escalation note
- **Status:** BUILT

### Feature 18: Historical Investigation Tracker
- Timeline with 3 clickable nodes (T1, T2, T3)
- REPEAT, NEW, DROPPED badges comparing consecutive timepoints
- **Status:** BUILT

### Feature 19: Cascade-Weighted Cost Efficiency Score
- GBP X/zone metric per investigation. Sort toggle (default vs efficiency)
- Average cost per zone covered summary line
- **Status:** BUILT

### Feature 20: Regulatory Provenance Watermark
- Evidence source citation visible below each test
- Evidence tier filter (All, Established, Emerging)
- D-05 compliance footer note
- **Status:** BUILT

---

## LA-7: TerrainLock Loop

**Eyebrow:** TerrainLock Detection
**Heading:** The Self-Perpetuating Loop
**Background:** Prussian Blue #0D2B4E
**Interaction:** SVG triangular loop (Z2-Z1-Z5-Z2). 3 sliders for Z2, Z1, Z5. Animated dashes on active arrows. 3 gate status cards (MET/NOT MET).
**Activation:** S1 Active + S2 Active + (S4 Active OR both Z5 and Z2 internal >= 60)
**Compliance:** S4 THEORETICAL always. Z2 default tiebreaker entry point. Architecturally possible but clinically uncommon in Phase 1.

### TerrainLock 20 Award-Winning Features

See: TerrainLock_20Features_Spec.md for full detail.

| # | Feature | Category |
|---|---------|----------|
| 1 | Loop Velocity Orchestrator | Understanding |
| 2 | Escape Route Simulator | Breaking |
| 3 | Historical Pattern Analyser | Investigation |
| 4 | Three-Zone Pressure Gauge | Understanding |
| 5 | Lock vs Non-Lock Comparator | Breaking |
| 6 | Probability Forecaster | Prediction |
| 7 | Cohort Prevalence Map | Prediction |
| 8 | Gate Forensic Breakdown | Investigation |
| 9 | Breaking Animation Theatre | Breaking |
| 10 | Constitutional Context Panel | Investigation |
| 11 | Harmonic Resonance Visualiser | Understanding |
| 12 | Metabolic Cost Calculator | Breaking |
| 13 | Sensitivity Matrix | Prediction |
| 14 | Cascade Interference Map | Breaking |
| 15 | Break Point Sequencer | Breaking |
| 16 | Acoustic Sonification | Understanding |
| 17 | Comparative Case Gallery | Learning |
| 18 | Node Contribution Waterfall | Investigation |
| 19 | Alert Configuration | Prediction |
| 20 | Architectural Integrity Proof | Investigation |

**Files:**
- tl-features-1-4.html (281 lines)
- tl-features-5-8.html (270 lines)
- tl-features-9-12.html (329 lines)
- tl-features-13-16.html (410 lines)
- tl-features-17-20.html (310 lines)

---

## LA-8: DeltaScan T1/T2 Comparison

**Eyebrow:** DeltaScan Intelligence
**Heading:** Track Terrain Changes Over Time
**Background:** Charcoal #1A2030
**Visual:** T1 vs T2 panels with horizontal bar charts per zone. Delta results strip with directional arrows and IMPROVED/WORSENED labels.
**Data:** T1 (55,62,38,45,50) vs T2 (42,48,35,40,38). Meaningful change threshold: 8 internal points.
**Note:** DeltaScan is the sixth pipeline stage (follow-up layer, NOT a FLINT layer).

---

## LA-9: TRACE Patient Timeline

**Eyebrow:** Terrain History
**Heading:** Trace the Patient Journey Over Time
**Background:** Deep Teal #0C4452
**Visual:** Vertical timeline with gold gradient line. 6 fictional events (2014-2026) with zone associations, cascade activations, TerrainLock confirmation.
**Interaction:** Click-to-expand cards revealing zone burden tags and cascade markers.
**Compliance:** T-01: "Highest burden zone designation" not "Driver". Fictional composite disclaimer.

---

## LA-10: TIQ Score Widget

**Eyebrow:** Terrain Intelligence Quotient
**Heading:** One Score. Complete Terrain Picture.
**Background:** Prussian Blue #0D2B4E
**Visual:** Large central TIQ score (4.2/10) with animated count-up. Score ring colour changes by band. 5 zone mini-bars with animated fill.
**Bands:** 0-2 Critical, 3-4 Significant, 5-6 Moderate, 7-8 Good, 9-10 Optimal
**Scale:** Lower display = higher burden (inverted).

---

## NEW LA LAYERS (W26 Architecture, 10 May 2026)

### LA-VOLTERRAIN: Upstream Driver Panel

**Eyebrow:** Layer 0: Upstream Intelligence
**Heading:** VOLTERRAIN Driver Panel
**Background:** Prussian Blue #0D2B4E
**Interaction:** 7 driver sliders (0-100). Auto-computed status (Active/Suspected/Absent). Bioelectrical context computed from active driver count. D5 EMF fixed at Phase 1.5 pending.
**Data:** 7 drivers (D1-D7) with node mappings and evidence tiers.
**Phase:** Phase 1 specification only. Build deferred to Phase 1.5. W26 PROPOSED, SPECULATIVE.
**File:** la-volterrain-section.html (133 lines)

### LA-TERRAINSPIRAL: Temporal Trajectory

**Eyebrow:** Overlay T: Temporal Trajectory
**Heading:** TerrainSpiral Trajectory Intelligence
**Background:** Charcoal #1A2030
**Interaction:** Toggle between Patient B (PROGRESSIVELY DESTABILISING) and Patient C (MIXED-ZONE). T1/T2 comparison panels. Zone direction arrows. APEX budget modifier badge.
**Constraint:** Raw delta values internal CascadeAtlas only. Practitioner panels show category badge only.
**File:** la-terrainspiral-section.html (94 lines)

### LA-VANTAGE: Five-Dimension Synthesis

**Eyebrow:** Integrative Output
**Heading:** VANTAGE Five-Dimension Synthesis
**Background:** Deep Teal #0C4452
**Interaction:** 5 expandable dimension panels (one open at a time). Zone bubbles, TerrainLock badge, DRD designation, APEX priorities, trajectory delta chips.
**Constraint:** Internal CascadeAtlas only. Not practitioner-facing.
**File:** la-vantage-section.html (131 lines)

### LA-PANEL-A: Practitioner Terrain Snapshot

**Eyebrow:** Practitioner View
**Heading:** Terrain Snapshot
**Background:** Prussian Blue #0D2B4E
**Interaction:** Toggle Patient A (low burden) / Patient B (high burden). Zone bars, trajectory category badge, active cascades, APEX priorities.
**Hard floors:** NO VOLTERRAIN scores. NO TerrainSpiral deltas. NO bioelectrical context. NO MES. NO CLVF. NO internal formulae.
**Mandatory:** T-01 protective header. Blank Practitioner Clinical Decision section.
**File:** la-panela-section.html (157 lines)

---

## New Mnemonic Features (10 Features, 13 May 2026)

See: NewMnemonics_10Features_Spec.md for full detail.

| # | Feature | Mnemonic | Type |
|---|---------|----------|------|
| 1 | Driver Impact Visualiser | VOLTERRAIN | Driver→Node→Zone flow |
| 2 | Assessment Dashboard | GRADE | Three-state gauge (A/B/C) |
| 3 | Verification Console | CLVF | 8-rule compliance check |
| 4 | Trajectory Animator | TerrainSpiral | Cinematic T1→T2 evolution |
| 5 | Dimension Explorer | VANTAGE | 5-card pentagon synthesis |
| 6 | Evidence Intelligence | VERITY | 5 evidence tiers |
| 7 | Cross-Zone Map | NEXUS | Defined vs potential interactions |
| 8 | State Classifier | MODES | 4-state terrain classification |
| 9 | Ecosystem Map | ALL | Complete mnemonic architecture |
| 10 | Flashcard Challenge | ALL | 15-card knowledge test |

**Files:** mnemo-features-1-5.html, mnemo-features-6-10.html
**Integration:** Living Architectures page + GENOME Handbook (new_mnemonics tab)

---

## Distribution Map

### P1 Homepage
- LA-10 TIQ Score Widget
- CTA: "See how the score is calculated" to P2

### P2 How It Works (latest)
- LA-3 FLINT Accordion (with 5 award features)
- LA-2 NCZ V2 Interactive
- LA-5 KINETICS Velocity
- LA-4 DRD Visualiser
- LA-8 DeltaScan
- 8 CTA crosslink bars with preview labels

### P9 Terrain Intelligence (40-Feature Award-Winning Build, 13 May 2026)
- LA-5 KINETICS Velocity (20 features)
- LA-7 TerrainLock Loop (20 features)
- LA-6 APEX Investigation Planner (20 features)
- LA-9 TRACE Timeline
- TI-1 to TI-40: 40 page-level features (Core + Advanced + Practitioner + Integrative Intelligence)
- ANCHOR cross-cutting overlay integrated (TI-31)
- NCZ Handbook Overlay v2.0 features ported (TI-32, TI-33, TI-36, TI-37, TI-38, TI-39)
- Terrain Consciousness from CascadeAtlas F36 (TI-35)

### P13 CascadeAtlas
- LA-1 CascadeAtlas Map
- 10 Award-Winning CascadeAtlas Features (Simulator, Trace, Comparison, Evidence, Chain Reaction, Annotation, Heatmap, Time-Lapse, Risk Predictor, Walkthrough)

### P14 NCZ Architecture
- LA-2 NCZ V2 Interactive

### Living Architectures Page (standalone)
- All 10 LAs in sequence
- CascadeAtlas 10 features included

### GENOME Handbook
- LA-1 tab: iframe embed of CascadeAtlas_10Features_Embed.html
- LA-6 tab (la6_apex): native React component with 20-feature index panel
- LA-6 tab (apex_20_features): APEX 20 features (iframe embed or dedicated section)
- All other LAs remain as native React components

---

## File Manifest

### Section Files (ClaudeCode_Context/vitalmatrix_revamped/sections/)
la1-cascadeatlas-section.html | la2-ncz-section.html | la3-flint-section.html
la4-drd-section.html | la5-kinetics-section.html | la6-apex-section.html | la6-apex-20features-section.html
la7-terrainlock-section.html | la8-deltascan-section.html | la9-trace-section.html
la10-tiq-section.html

### CascadeAtlas Feature Files (LocalPreview/sections/)
ca-features-1-2.html | ca-features-3-4.html | ca-features-5-6.html
ca-features-7-8.html | ca-features-9-10.html

### TerrainLock Feature Files (LocalPreview/sections/)
tl-features-1-4.html | tl-features-5-8.html | tl-features-9-12.html
tl-features-13-16.html | tl-features-17-20.html

### Interactive Learning Feature Files (LocalPreview/sections/)
learn-features-1-2.html | learn-features-3-4.html | learn-features-5-6.html
learn-features-7-8.html | learn-features-9-10.html

### Embed Files
CascadeAtlas_10Features_Embed.html (ClaudeCode_Context/)
TerrainLock_20Features_Embed.html (ClaudeCode_Context/)
InteractiveLearning_10Features_Embed.html (ClaudeCode_Context/)

### CSS
vm-cta-crosslinks.css (vitalmatrix_revamped/)

### Specs
LivingArchitectures_MasterSpec.md (this file)
CascadeAtlas_10Features_Spec.md
TerrainLock_20Features_Spec.md
InteractiveLearning_10Features_Spec.md
APEX_20Features_Specs_2026-05-08.md
KINETICS_20Features_Specs_2026-05-08.md
ANCHOR_CrossCuttingOverlay_Specs_2026-05-08.md

---

## Interactive Learning Suite (10 Features)

See: InteractiveLearning_10Features_Spec.md for full detail.

| # | Feature | Learning Channel |
|---|---------|-----------------|
| 1 | Architecture Treasure Hunt | Discovery |
| 2 | 60-Second Speed Run | Visual |
| 3 | Architecture Jigsaw Puzzle | Kinesthetic |
| 4 | Register Switcher | Conceptual |
| 5 | One Patient Story | Emotional |
| 6 | Architecture Heartbeat Monitor | Visual |
| 7 | Conversation Simulator | Conceptual |
| 8 | Flashcard Blitz | Kinesthetic |
| 9 | Domino Chain Builder | Discovery |
| 10 | Before/After Comparison | Emotional |

**Integration:** Living Architectures page (inline before footer) + GENOME Handbook (interactive_learning tab, iframe embed).

---

## Website Conversion Sections (4 High-Value) | 8 May 2026

Four new sections designed to convert practitioners from interested to committed. Each combines multiple Living Architecture components into a single unified experience that sells the platform by letting practitioners use it before they subscribe. No email gate. No paywall. The architecture sells itself.

---

### WCS-1: "Build Your Own Case" — Live Full-Pipeline Demo

**Target pages:** P1 Homepage (above S10 close), P3 Why VitalMatrix (after S07)
**Background:** Prussian Blue #0D2B4E
**ID prefix:** wcs-1-
**Combines:** LA-4 (DRD sliders) + LA-5 (KINETICS velocity) + LA-1 (CascadeAtlas pentagon) + LA-10 (TIQ score)
**Estimated lines:** 400-500

**Concept:** The practitioner enters their own patient data (or uses a preset) and watches the entire FLINT pipeline produce a result in real time. Not a demo. Not a video. The actual architecture running on fictional-framed data they control.

**Layout:**
- **Top bar:** Eyebrow "Try It Now" + heading "Build a case. Watch the architecture respond." + sub-copy "No login. No email. Adjust the sliders. The five layers do the rest."
- **Left panel (40%):** 7 node burden sliders (N1-N7, internal 0-100). Three preset buttons: "Gut-Thyroid Case" / "Hormonal-Metabolic Case" / "Start Blank". Each preset loads a clinically coherent node score profile.
- **Right panel (60%):** Four stacked output cards that populate live as sliders move:
  1. **Zone Activation Card:** 5 zone badges with display scores. Active/Borderline/Inactive. N6 dampening visible.
  2. **Cascade Detection Card:** Mini CascadeAtlas pentagon (LA-1 simplified, 200x160) with active stack arrows. TerrainLock status.
  3. **DRD Designation Card:** Highest burden zone highlighted with gold crown. Secondary burden zones listed. Z2 tiebreaker note.
  4. **TIQ Composite Card:** Score ring (LA-10 style) with band label. Zone mini-bars beneath.
- **Bottom banner:** "This is what your first consultation produces. In under two minutes." + CTA: "Book a Clinical Walkthrough" (gold) + "Apply for Founding Access" (ghost)

**Scoring pipeline (live):**
1. Node scores from sliders
2. N6 dampening: multiply N6 value by 0.7
3. Zone composites: average constituent nodes per zone
4. Floor check: MAX(dampened node values in zone) - 10
5. Internal = MAX(average, floor)
6. Display = ROUND((100 - internal) / 10)
7. Threshold check: Z1-Z4 >= 40 Active, Z5 >= 32 Active, near-threshold 5 points below
8. Cascade detection: both source and target zones active = stack active (S4 excluded from DRD)
9. TerrainLock: S1 + S2 + (S4 OR Z5+Z2 >= 60)
10. DRD: highest internal zone score. Z2 tiebreaker.
11. TIQ: weighted composite (45% zone burden + 25% cascade + 15% coverage + 15% confidence)

**Presets:**
- Gut-Thyroid: N1=55, N2=48, N3=62, N4=30, N5=25, N6=72, N7=0. Expected: Z1 Active, Z2 Active, S1 Active, DRD=Z1.
- Hormonal-Metabolic: N1=30, N2=35, N3=70, N4=55, N5=20, N6=68, N7=0. Expected: Z1 Active, Z5 Active, S2 Active, DRD=Z1.
- Start Blank: all zeros.

**Compliance:** T-01a ("Highest burden zone"). S4 THEORETICAL. S6 UNIDIRECTIONAL. Protective disclaimer: "Fictional data framework. For architectural demonstration only. Not a clinical tool." British English. No em dashes.

**Why this converts:** The practitioner sees the architecture respond to data they recognise. They stop reading about VitalMatrix and start using it. The gap between "interested" and "I need this" closes in 30 seconds.

---

### WCS-2: "The 45-Minute Problem" — Time Reclamation Calculator

**Target pages:** P4 Founding Practitioners (after S09), P5 Pricing (above rate card)
**Background:** Charcoal #1A2030
**ID prefix:** wcs-2-
**Combines:** Original concept (no LA dependency, standalone)
**Estimated lines:** 200-250

**Concept:** Interactive calculator that translates architectural capability into the metric practitioners care about most: time. Not technology metrics. Not feature counts. Hours reclaimed per week, per month, per year. And what those hours are worth.

**Layout:**
- **Eyebrow:** "The Real Cost of the Workaround"
- **Heading:** "What would you do with 26 extra minutes per consultation?"
- **Three input sliders:**
  1. Complex cases per week (range 2-20, default 8)
  2. Current documentation time per case in minutes (range 20-90, default 45)
  3. VitalMatrix-assisted time per case in minutes (fixed display: 12 min, not adjustable, with note "Based on FLINT 5-layer pipeline timing")
- **Live output panel (4 metric cards):**
  1. **Minutes saved per case:** (slider2 - 12) = X minutes
  2. **Hours reclaimed per week:** (X * slider1) / 60 = Y hours
  3. **Hours reclaimed per month:** Y * 4.3 = Z hours
  4. **Annual time reclaimed:** Z * 12 = W hours. Subtext: "That is [W/8] additional full clinical days per year."
- **Emotional close row:** Gold bordered card with Cormorant Garamond italic: "Every hour spent reconstructing terrain-based reasoning from memory is an hour not spent on the patient in front of you."
- **CTA row:** "Apply for Founding Access" (gold) + "Book a Discovery Call" (ghost)

**Compliance:** No clinical claims. No outcome guarantees. "Based on FLINT 5-layer pipeline timing" is an architectural statement, not a clinical promise. No pricing displayed without FCA clearance. ICO ZC101813.

**Why this converts:** Practitioners do not buy technology. They buy time. This section makes time visible, personal, and impossible to dismiss. The number updates as they adjust their own caseload. The result is always striking because the documentation burden is always significant.

---

### WCS-3: "Evidence Wall" — Complete Cascade Evidence Architecture

**Target pages:** P11 Terrain Intelligence (after LA-9 TRACE, before TIQ), P8 Our Approach
**Background:** Deep Teal #0C4452
**ID prefix:** wcs-3-
**Combines:** LA-1 evidence data + LA-5 velocity data + LA-7 TerrainLock evidence
**Estimated lines:** 350-400

**Concept:** A scrollable, filterable evidence library that consolidates every cascade claim, evidence tier, and mechanism description in one authoritative section. This is the section practitioners share with colleagues who ask "where is the evidence?"

**Layout:**
- **Eyebrow:** "Evidence Architecture"
- **Heading:** "Every cascade claim carries a tier. Every tier is browsable."
- **Sub-copy:** "Established. Emerging. Theoretical. Observed in Practice. Contested. Five tiers. No claim exists without one."
- **Filter bar:** 5 tier toggle buttons (all active by default). Stack filter (S1-S6 + TerrainLock). Search input for keyword filtering.
- **Evidence cards (expandable, 3-column grid):**

  **S1: Z2 to Z1 (Gut drives Metabolic)**
  - Tier: Mechanism Established, Cascade Emerging (D-05 split label)
  - Velocity: MEDIUM
  - Mechanism summary: Intestinal permeability and microbiome disruption drive inflammatory signalling that suppresses thyroid conversion (T4 to T3). Mechanism well-documented in gastroenterology and endocrinology literature. Cascade directionality (gut initiating thyroid suppression rather than reverse) is emerging.
  - Clinical significance: Most common cascade entry point. Z2 gut restoration is the default tiebreaker in DRD.
  - Key pathways: LPS-mediated inflammation, zonulin-tight junction disruption, T4-to-T3 conversion impairment, HPA axis feedback
  - TerrainLock role: First leg of Z2 to Z1 to Z5 to Z2 loop

  **S2: Z1 to Z5 (Metabolic drives Hormonal)**
  - Tier: Established
  - Velocity: FAST
  - Mechanism summary: Metabolic-hormonal axis: adrenal-thyroid-pancreatic dysfunction directly modulates sex hormone production via substrate competition and HPA axis feedback. Well-established in endocrinology.
  - Clinical significance: Fastest cascade. Metabolic dysfunction loads hormonal terrain within days to weeks. Often the reason hormonal interventions produce only temporary improvement.
  - Key pathways: Cortisol-DHEA balance, insulin-SHBG relationship, thyroid-oestrogen metabolism
  - TerrainLock role: Second leg. FAST velocity means Z5 burden develops rapidly once Z1 crosses threshold.

  **S3: Z4 to Z1 (Detox drives Metabolic)**
  - Tier: Emerging
  - Velocity: SLOW
  - Mechanism summary: Impaired biotransformation increases circulating endotoxin load and metabolic waste, suppressing mitochondrial ATP production and thyroid function over months to years.
  - Clinical significance: Most commonly missed upstream pathway. SLOW velocity means the practitioner often addresses Z1 directly without recognising Z4 as the upstream source. The longest-developing cascade.
  - Key pathways: Phase I/II detoxification enzyme saturation, glutathione depletion, mitochondrial electron transport chain impairment

  **S4: Z5 to Z2 (Hormonal drives Resilience)**
  - Tier: THEORETICAL (always labelled)
  - Velocity: MEDIUM
  - Mechanism summary: Sex hormone shifts (particularly oestrogen dominance) may alter gut mucosal immunity and microbiome composition. Plausible mechanism. Cascade directionality not yet confirmed in clinical studies.
  - Clinical significance: Excluded from DRD cascade trace (D-12). Fires for display in TerrainLock animation only. S4 is the weakest evidential link in the TerrainLock loop. If future research disconfirms S4, TerrainLock activation criteria will require revision.
  - Architectural note: S4 is always displayed with dashed visual and THEORETICAL badge. DRD does not trace through S4.

  **S5: Z2 to Z3 (Gut drives Cardiovascular)**
  - Tier: Emerging
  - Velocity: FAST
  - Mechanism summary: TMAO pathway, intestinal permeability driving systemic inflammation affecting vascular endothelium and autonomic nervous system regulation. TMAO pathway under quarterly review.
  - Clinical significance: Z3 and Z4 are not ready for composite scoring in Phase 1. S5 is relevant for terrain mapping but Z3 outputs are educational, not scored.
  - Key pathways: TMAO (trimethylamine N-oxide), gut-derived endotoxaemia, vagal tone disruption

  **S6: Z1 to Z3 (Metabolic drives Cardiovascular) — UNIDIRECTIONAL**
  - Tier: Established
  - Velocity: MEDIUM
  - Mechanism summary: Insulin resistance, dyslipidaemia, and mitochondrial dysfunction directly impact cardiovascular risk markers and autonomic function. S6 is UNIDIRECTIONAL: Z1 to Z3 only. Reverse direction does not exist.
  - Clinical significance: Established metabolic-cardiovascular link. Z3 receives from both S5 and S6. Not ready for composite scoring in Phase 1.
  - Key pathways: Insulin resistance to endothelial dysfunction, sdLDL formation, autonomic neuropathy

  **TerrainLock: Z2 to Z1 to Z5 to Z2**
  - Tier: Architectural (Emerging for S1/S2, Theoretical for S4)
  - Activation: S1 Active + S2 Active + (S4 Active OR both Z5 and Z2 internal >= 60)
  - Mechanism summary: Self-perpetuating cascade loop. Three stacks fire simultaneously, creating a terrain state that regenerates regardless of single-zone intervention. Breaking requires identifying the loop entry point (default: Z2 gut restoration) and addressing the driver zone rather than the highest-scoring reactor.
  - Clinical significance: Architecturally possible but clinically uncommon in Phase 1. Explains the "partial response that recurs" pattern. When present, single-zone intervention produces temporary improvement followed by regression.

- **Evidence tier definitions panel (collapsible):**
  - Established: Mechanism confirmed in peer-reviewed literature with consistent replication
  - Emerging: Mechanism supported by preliminary evidence; clinical observation consistent; replication pending
  - Theoretical: Plausible mechanism based on known physiology; no direct clinical confirmation of cascade directionality
  - Observed in Practice: Clinician-reported pattern consistent with proposed mechanism; formal study not yet conducted
  - Contested: Published evidence exists both for and against the proposed mechanism

- **Bottom note:** "This evidence register is a living document. Founding practitioners contribute to the clinical validation layer. Evidence tiers are reviewed quarterly. S4 Theoretical status is flagged for active review."

**Compliance:** Every claim carries a tier label. S4 THEORETICAL. S6 UNIDIRECTIONAL in same sentence. Z3 and Z4 not ready for composite scoring in Phase 1 stated where relevant. No em dashes. British English. ICO ZC101813.

**Why this converts:** Practitioners trained in functional medicine are evidence-conscious. They do not adopt platforms that make unsupported claims. This section demonstrates that VitalMatrix knows exactly where its evidence stands, labels it honestly, and builds architectural guardrails around uncertainty. The transparency is the differentiator.

---

### WCS-4: "The Practitioner's Week" — Seven-Day Practice Transformation

**Target pages:** P3 Why VitalMatrix (after S05 30-Second Pitch), P4 Founding Practitioners (before CTA)
**Background:** alternating Prussian #0D2B4E and Charcoal #1A2030
**ID prefix:** wcs-4-
**Combines:** Original narrative concept + LA-10 (TIQ) + LA-8 (DeltaScan)
**Estimated lines:** 300-350

**Concept:** A day-by-day narrative showing how one practitioner's week changes with VitalMatrix. Not feature descriptions. A week in the life. Monday to Friday. Five consultations. Five structured outputs. The cumulative effect made visible.

**Layout:**
- **Eyebrow:** "One Week. Five Patients. Five Structured Outputs."
- **Heading:** "This is what changes when the infrastructure arrives."
- **Sub-copy:** "A fictional practitioner. A real week. The difference between carrying the cognitive load personally and having architecture that carries it for you."

- **Day cards (5 horizontal cards, alternating dark backgrounds, scroll-triggered reveal):**

  **Monday 08:30 — Sarah, 41, Teacher**
  Complex fatigue with gut and hormonal complaints. Three previous practitioners. No clear sequencing answer.
  *Without VitalMatrix:* 52 minutes reconstructing terrain logic. Note produced but sequencing rationale lives in the practitioner's head. No audit trail.
  *With VitalMatrix:* Intake completed. FLINT pipeline runs. Z1 Active (5/10), Z2 Active (5/10), Z5 Active (6/10). S1 + S2 active. DRD: Z1 Metabolic Energy Axis. Terrain Support Considerations document generated with protective header, evidence tiers, blank Practitioner Clinical Decision section. Time: 14 minutes.
  **TIQ: 4.2/10 (Significant)**

  **Tuesday 10:15 — James, 56, Director**
  Metabolic syndrome with cardiovascular risk markers. Weight plateau despite dietary compliance.
  *Without VitalMatrix:* 48 minutes. Biomarker review done well but cascade direction unclear. Supplements prescribed by severity ranking.
  *With VitalMatrix:* Z1 Active (4/10), Z4 Active (6/10). S3 Active (Z4 to Z1, SLOW, Emerging). DRD: Z4 Detoxification Trident. APEX Tier 2 prioritised: glutathione, organic acids, urinary metals. Intervention sequence: Z4 first, Z1 second.
  **TIQ: 5.1/10 (Moderate)**

  **Wednesday 14:00 — Priya, 38, Solicitor**
  Hormonal disruption, anxiety, brain fog. IVF history. Three years of symptom management without upstream investigation.
  *Without VitalMatrix:* 55 minutes. Hormonal panel reviewed. Z5 treated directly. Previous practitioners did the same.
  *With VitalMatrix:* Z1 Active (5/10), Z2 Active (4/10), Z5 Active (4/10). S1 + S2 + S4 all active. TerrainLock detected. DRD: Z2 Resilience Network (tiebreaker entry point). Loop-breaking sequence: Z2 gut restoration first. Not Z5. Not Z1. The upstream driver.
  **TIQ: 3.8/10 (Significant). TerrainLock: ACTIVE.**

  **Thursday 09:00 — David, 63, Retired**
  Follow-up consultation. 12-week review. Initial assessment: Z2 Active, Z1 Active.
  *Without VitalMatrix:* 40 minutes. "Feels a bit better." Difficult to quantify. Symptom diary reviewed manually.
  *With VitalMatrix:* DeltaScan comparison: Z2 internal 62 to 41 (below threshold). Z1 internal 55 to 43 (still Active). S1 deactivated. DRD shifted: Z1 now sole highest burden zone. New intervention sequence generated. Progress quantified.
  **TIQ: 5.9/10 (Moderate, improved from 3.4)**

  **Friday 16:30 — Last patient of the week**
  *Without VitalMatrix:* Cognitive bandwidth depleted. The same clinical depth available at 08:30 Monday is not available at 16:30 Friday. Documentation quality drops. Sequencing decisions become intuitive shortcuts.
  *With VitalMatrix:* The architecture does not fatigue. The FLINT pipeline produces the same structured depth at 16:30 Friday as it does at 08:30 Monday. Five patients this week. Five Terrain Support Considerations documents. Five governance audit trails. Five structured outputs that can be reviewed, reproduced, and built upon.

- **Weekly summary strip (gold background):**
  - 5 consultations completed
  - 5 structured outputs generated
  - Average time saved per consultation: 33 minutes
  - Total time reclaimed this week: 2 hours 45 minutes
  - 5 governance audit trails produced automatically
  - 0 sequencing decisions made from memory alone

- **Close quote (Cormorant Garamond italic, centred):**
  "The question is not whether you need this infrastructure. The question is how many more Fridays you are willing to carry the cognitive load without it."
  — Dr Shahzad Faisal, MBBS, FAAMFM

- **CTA row:** "Apply for Founding Access" (gold) + "Book a Discovery Call" (ghost)

**Compliance:** All patient names fictional. "Composite fictional cases for architectural demonstration only." T-01a compliant: "Highest burden zone" throughout. Protective header on any output preview. S4 THEORETICAL where referenced. TerrainLock architecturally possible but clinically uncommon in Phase 1. British English. No em dashes. ICO ZC101813.

**Why this converts:** Features are abstract. A week is concrete. The practitioner reads Monday and recognises their own 08:30. They read Friday and recognise their own 16:30. The gap between "without" and "with" is not a technology gap. It is a quality-of-life gap. That is what sells.

---

## WCS Summary (10 Sections)

| Section | Name | Target Pages | LAs Used | Conversion Mechanism |
|---------|------|-------------|----------|---------------------|
| WCS-1 | Build Your Own Case | P1, P3 | LA-1, LA-4, LA-5, LA-10 | Experience the architecture live |
| WCS-2 | The 45-Minute Problem | P4, P5 | Standalone | Make time savings personal |
| WCS-3 | Evidence Wall | P11, P8 | LA-1, LA-5, LA-7 | Answer "where is the evidence?" |
| WCS-4 | The Practitioner's Week | P3, P4 | LA-10, LA-8 | Make the daily difference visible |
| WCS-5 | The Sequencing Question | P2, P3 | LA-4 | Show why driver-first works |
| WCS-6 | The Documentation Audit | P4, P3 | Standalone | Self-discover the gaps |
| WCS-7 | Cascade Pattern Library | P11, P2 | LA-1, LA-5 | Pattern recognition sells |
| WCS-8 | The Integration Timeline | P4, P5 | Standalone | Kill adoption anxiety |
| WCS-9 | Side-by-Side Output | P2, P3 | NCZ-F16 extended | Workaround vs structured |
| WCS-10 | Reproducibility Argument | P9, P8 | Standalone | The second practitioner |

**Full specs:** WCS-1 to WCS-4 in this file (above). WCS-5 to WCS-10 in WCS_5to10_specs.md.

**Build priority:**
1. WCS-1 Build Your Own Case (interactive, highest conversion)
2. WCS-5 The Sequencing Question (core clinical argument)
3. WCS-4 The Practitioner's Week (emotional resonance)
4. WCS-9 Side-by-Side Output (immediate recognition)
5. WCS-7 Cascade Pattern Library (clinical credibility)
6. WCS-6 The Documentation Audit (self-assessment)
7. WCS-2 The 45-Minute Problem (pricing support)
8. WCS-10 Reproducibility Argument (professional standards)
9. WCS-8 The Integration Timeline (adoption anxiety)
10. WCS-3 Evidence Wall (evidence reference)

**Section files (to be created):**
- wcs-1-build-your-case.html
- wcs-2-time-calculator.html
- wcs-3-evidence-wall.html
- wcs-4-practitioner-week.html
- wcs-5-sequencing-question.html
- wcs-6-documentation-audit.html
- wcs-7-cascade-patterns.html
- wcs-8-integration-timeline.html
- wcs-9-side-by-side-output.html
- wcs-10-reproducibility.html

---

## P11 Terrain Intelligence: 40-Feature Award-Winning Build (13 May 2026)

**File:** TerrainIntelligence_latest.html (LocalPreview + vitalmatrix_revamped)
**Authority:** ALB v1.6 | D-85 | T-01 Active | ANCHOR D-78
**Audit:** 10 critical + 10 high issues fixed (13 May 2026). 5 cascade descriptions corrected, S1 evidence tier corrected, Z5 #2E6DB4 applied to 5 JS blocks, CDN replaced, position:fixed removed, T-01a DRD language fixed.

### Features TI-1 to TI-10: Core Terrain Intelligence

| # | Feature | Type |
|---|---------|------|
| TI-1 | Velocity Spectrum Visualiser | Horizontal bar, stacks positioned by velocity, animated particles |
| TI-2 | DeltaScan Animated Morphing Comparison | Two pentagon SVGs, polygon morph, delta arrows |
| TI-3 | TRACE Temporal Archaeology | 400vh scroll-pinned, 5 visit milestones, mini pentagons |
| TI-4 | TIQ Composite Score Gauge | 240-degree arc, 4 weighted segments, satellite cards |
| TI-5 | Velocity-to-Intervention Timeline | Gantt chart, cascade bars + investigation milestones, draggable marker |
| TI-6 | TerrainLock Loop Break-Point | Triangle SVG, 3 clickable break-points, cascade collapse modelling |
| TI-7 | Cascade Velocity Heatmap | 6x4 grid (stacks x time periods), temporal density, hot spots |
| TI-8 | Terrain Trajectory Sparklines | 5 mini SVG sparklines, 5-visit data, threshold line, trend arrows |
| TI-9 | Evidence Tier Confidence Waterfall | Vertical waterfall, uncertainty subtractions, Terrain Confidence Index |
| TI-10 | Cinematic Hero Particle Field | 60 particles, zone-coloured, pentagon constellation, velocity-matched cascade flows |

### Features TI-11 to TI-20: Advanced Clinical Intelligence

| # | Feature | Type |
|---|---------|------|
| TI-11 | Cascade Velocity Pendulum | 6 pendulums swinging at velocity-matched frequency |
| TI-12 | DeltaScan Zone Drift Radar | Spider/radar chart, 2 visit polygons, directional arrows |
| TI-13 | TRACE Cascade Archaeology Timeline | Horizontal timeline with cascade activation/deactivation events |
| TI-14 | TIQ Component Decomposition | 4 expandable panels (burden 40%, cascades 25%, TL 20%, confidence 15%) |
| TI-15 | Velocity Clinical Urgency Matrix | 3x3 grid (velocity x evidence), urgency score per cell |
| TI-16 | Terrain Velocity Waveform | Canvas, 3 sine waves (Fast/Medium/Slow), composite, scroll-driven |
| TI-17 | DeltaScan Improvement/Deterioration Split Gauge | Centre-split horizontal bar, net delta, zone chips |
| TI-18 | Interactive Cascade Propagation Simulator | Click zone to inject burden, chain reaction fires, event log |
| TI-19 | TRACE Session Comparison Cards | 3 visit cards, mini pentagons, parallax depth, delta on hover |
| TI-20 | Terrain Intelligence Summary Narrative | Typewriter AXIS-style paragraph, colour-coded terms, copy button |

### Features TI-21 to TI-30: Practitioner Experience

| # | Feature | Type |
|---|---------|------|
| TI-21 | Living Patient Terrain Hologram | 3D-perspective pentagon, zone panel heights, cascade threads, drag-rotate |
| TI-22 | Intelligent Terrain Narrator | Sticky panel, contextual commentary per scroll section, pre-written T-01 compliant |
| TI-23 | Practitioner Decision Confidence Builder | 5 sequential question cards, green/amber/red readiness, decision gauge |
| TI-24 | Cascade Velocity Heartbeat Monitor | ECG-style waveform, terrain BPM, TerrainLock arrhythmia |
| TI-25 | Terrain Age Estimation Engine | Reverse velocity analysis, estimated onset, cascade activation sequence |
| TI-26 | Zone Resilience Scoring | Inbound vs outbound cascade bars, recovery potential, terminal sink warnings |
| TI-27 | Adaptive Investigation Timeline | Practitioner-populated milestones, ordered/received/deferred tracking, coverage % |
| TI-28 | Terrain Pattern Library | 8 pre-built archetypes, load into sliders, similarity matching |
| TI-29 | Cascade Consequence Projector | 3-consultation forward model, intervention target selection, best-intervention callout |
| TI-30 | Terrain Intelligence Certificate | T-01 compliant output document, W5-3/W5-4 permanent, print view, clipboard export |

### Features TI-31 to TI-40: Integrative Intelligence (Handbook Overlay v2.0)

| # | Feature | Type | Overlay Source |
|---|---------|------|---------------|
| TI-31 | ANCHOR Verification Ribbon | Live 5-domain rule checking on interactive sections | ANCHOR D-78 |
| TI-32 | NCZ Connectivity Map Overlay | SVG pentagon, click zone for shared-node connections | NCZ Overlay F1 |
| TI-33 | NCZ Composition Builder | Drag-drop node-to-zone learning, N6 x4 dampened badge | NCZ Overlay F2 |
| TI-34 | FLINT Layer Overlay with Intelligence Threads | Vertical pipeline, cross-layer data threads, ANCHOR sidebar | FLINT Overlay |
| TI-35 | Terrain Consciousness Score | Meta-score: connectivity + propagation + feedback + resolution | CascadeAtlas F36 |
| TI-36 | NCZ Evolution Timeline with Cascade Events | 4 timepoints, auto-advance, cascade activation overlay | NCZ Overlay F8 |
| TI-37 | Burden Simulator with APEX Chain | 7 node sliders, live zone calc, chained to APEX investigation output | NCZ Overlay F6 |
| TI-38 | Zone Comparison with Cascade Differential | Select 2 zones, shared/unique nodes, cascade coupling score | NCZ Overlay F9 |
| TI-39 | Clipboard Reference Export | One-click terrain architecture + intelligence summary, print view | NCZ Overlay F10 |
| TI-40 | Integrative Intelligence Dashboard | 5 horizontal strips (KINETICS/DeltaScan/TRACE/TIQ/ANCHOR), unified narrative | Original |

### Build Status (13 May 2026)

All 40 features BUILT. Page: 2,195 lines (up from 927).

| Batch | Features Built | Date |
|-------|---------------|------|
| Batch 1 | TI-1, TI-4, TI-8, TI-18, TI-20, TI-24, TI-31, TI-35, TI-40 | 13 May |
| Batch 2 | TI-2, TI-3, TI-6, TI-9, TI-15, TI-22, TI-25, TI-29 | 13 May |
| Batch 3 | TI-5, TI-7, TI-11, TI-12, TI-13, TI-14, TI-16, TI-17, TI-19, TI-23, TI-26, TI-27, TI-28, TI-30, TI-32 to TI-39 | 13 May |

Key interactive features:
- 6 canvas/SVG animations (TI-24 heartbeat, TI-16 waveform, TI-11 pendulums, TI-12 radar, TI-8 sparklines, TI-2 morph)
- 3 scroll-pinned sections (TI-3 TRACE, TI-22 narrator, visits)
- 4 interactive simulators (TI-18 propagation, TI-6 break-point, TI-29 projector, TI-27 tracker)
- T-01 compliant certificate (TI-30) with W5-3/W5-4, copy to clipboard
- ANCHOR verification (TI-31), Terrain Consciousness (TI-35), Integrative Dashboard (TI-40)
- 7 Handbook Overlay v2.0 cards (TI-32 to TI-39)

### Features TI-41 to TI-50: Specified (not yet built)

| # | Feature | Type |
|---|---------|------|
| TI-41 | Cascade Interference Pattern Detector | Convergence analysis at target zones, constructive/destructive |
| TI-42 | Practitioner Pattern Recognition Trainer | 5-round interactive quiz, date-seeded randomisation |
| TI-43 | Cascade Energy Conservation Audit | Velocity-weighted energy balance between visits |
| TI-44 | Zone Threshold Proximity Heatstrip | 5-segment colour bar, distance from threshold, breach forecast |
| TI-45 | Cascade Pathway Redundancy Analyser | Independent inbound pathway count per zone |
| TI-46 | Temporal Cascade Overlap Detector | Time windows where multiple cascades converge |
| TI-47 | Zone Isolation Impact Modeller | Click to remove zone, cascade collapse calculation |
| TI-48 | Cascade Directionality Integrity Checker | 5-check S6/S4 compliance, ANCHOR sub-module |
| TI-49 | Terrain State Fingerprint | Generative SVG glyph from terrain state, hash code |
| TI-50 | Practitioner Confidence Calibration | Pre-investigation confidence vs TIQ alignment |

### Handbook Overlay v2.0 Integration Notes

Reviewed 13 May 2026. Two docx files extracted and analysed:
- GenomeHandbookChapter_OverlayArchitecture_v2_0_W26_2026-05-13.docx
- GenomeHandbookInsert_OverlayMnemonics_v1_0_W26_2026-05-10.docx

Key findings:
- 4-output overlay architecture (CLVF/VERITY, VANTAGE, TerrainSpiral, IC39)
- 10 new mnemonics (VOLTERRAIN, TerrainSpiral, MODES, GRADE, NEXUS, VANTAGE, VERITY, VISTA, CADENCE, VAULT)
- All Tier 4 internal. TM footer count UNVERIFIED (41 listed, W06 reconciliation pending)
- NCZ expansion: "Node Convergence Zones" (Notion Register Row 02, confirmed 12 May 2026)
- VOLTERRAIN: 7 upstream drivers (Redox, Circulation, Mitochondrial, pH, EMF/SPRA, Mycotoxin, Circadian)
- Synthesis Layer: 7 sequential gates, evidence tier floor rule, no write-back
- W08 gates required before VANTAGE practitioner surface, Grade C, DECOUPLED NEXUS
- CADENCE Phase 2 only, HIGHEST MHRA risk, 3 July 2026 governance deadline

### Compliance

- All 40 features: prefers-reduced-motion gated, no template literals, no default params, no localStorage, no position:fixed
- Z5 = #2E6DB4 (D-85) throughout
- S4 THEORETICAL labelled everywhere
- S6 UNIDIRECTIONAL in same sentence everywhere
- T-01a: "Highest burden zone" (never "Driver"), "Secondary burden zone" (never "Reactor")
- N6 dampening coefficient (0.7x) not exposed in practitioner-visible content
- All sample data labelled "SAMPLE DATA: NOT A REAL PATIENT"
- ANCHOR verification: deterministic, rule-based, no AI inference (D-78)
- MHRA line includes "diagnose", ICO ZC101813, 31 TM footer
- TI-30 certificate: W5-3 protective header (PERMANENT), W5-4 blank PCD (PERMANENT)

### File Manifest

| File | Location | Contents |
|------|----------|----------|
| TerrainIntelligence_latest.html | LocalPreview/ | Full page with 40 built features (2,195 lines) |
| TerrainIntelligence_latest.html | vitalmatrix_revamped/ | Synced copy |

---

*Living Architectures Master Spec | VitalMatrix Ltd | ICO ZC101813 | 13 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.6 | D-85 | T-01 Active*
