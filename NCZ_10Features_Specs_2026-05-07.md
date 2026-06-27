# NCZ Architecture: 22 Premium Interactive Features
## Specification Document | P14 NCZArchitecture_latest.html
## Date: 8 May 2026 (F12-F16 added) | Original: 7 May 2026 | ALB v1.5 | D-53

---

### Feature 1: Live Node-to-Zone Assembly Animation
- **ID prefix:** ncz-f1-
- **Position:** After Section 2 (Seven Nodes)
- **Background:** Charcoal #1A2030
- **Trigger:** IntersectionObserver scroll-triggered
- **Behaviour:** Seven node chips animate from horizontal row into zone containers. N6 splits into four ghost copies (Z1, Z2, Z3, Z5) with gold "x0.7" dampening label. Assembly completes with fade.
- **Architectural compliance:** 7 nodes, N6 dampening 0.7, correct zone mappings
- **Caption:** "This is the framework you already know, made visible for the first time."

### Feature 2: Interactive Patient Burden Heatmap with App Preview
- **ID prefix:** ncz-f2-
- **Position:** After existing heatmap section
- **Background:** Prussian #0D2B4E
- **Behaviour:** 7 node rows x 5 zone columns with draggable burden sliders. Zone scores recalculate live with N6 dampening visibly applied. Device-framed app preview below shows activation badges, borderline tooltips, display scores.
- **Scoring:** Internal 0-100, display 0-10 inverted, N6 x0.7, floor MAX(dampened)-10
- **Thresholds:** Z1-Z4=40, Z5=32, near-threshold=5 internal points (D-38)
- **Caption:** "This is not a diagram. This is what you will see in your next consultation."

### Feature 3: Cascade Domino Chain
- **ID prefix:** ncz-f3-
- **Position:** After Feature 6 (Zone Breathing)
- **Background:** Charcoal #1A2030
- **Behaviour:** Click any zone on pentagon to trigger cascade domino sequence. Arrows animate at true velocity: FAST 1.2s, MEDIUM 2.4s, SLOW 4.5s. S4 renders dashed (THEORETICAL, excluded from DRD trace D-12). S6 labelled UNIDIRECTIONAL. TerrainLock detection with orbital glow. CascadeIQ side panel with log.
- **Architectural compliance:** 6 stacks, S4 THEORETICAL, S6 UNIDIRECTIONAL, TerrainLock Z2→Z1→Z5→Z2

### Feature 4: Split-Screen Workflow Comparison
- **ID prefix:** ncz-f4-
- **Position:** After FLINT context section
- **Background:** Charcoal #1A2030
- **Behaviour:** Left panel (scattered notes, spreadsheet, free-text EHR) fades to greyscale on scroll. Right panel (VitalMatrix structured output: node scores, zone badges, cascade detection, DRD as "Driver") sharpens with gold glow.
- **T-01 compliance:** DRD displayed as "Driver" (never "Driver")
- **Caption:** "Same clinical reasoning. One takes 45 minutes. The other is already done."

### Feature 5: Personalised Architecture Readiness Score
- **ID prefix:** ncz-f5-
- **Position:** After Feature 10, before CTA section
- **Background:** Deep Teal #0C4452
- **Behaviour:** 5 yes/no questions (no email required, instant result). Each "No" highlights corresponding section. Result: "Your practice is ready for X of 5 NCZ layers. VitalMatrix fills the remaining Y automatically."
- **Questions:** (1) Document node-level findings? (2) Map symptoms to zones? (3) Track cascade direction? (4) Structured DRD process? (5) Functional optimal ranges?
- **CTA:** "Book a Clinical Walkthrough" → /book/

### Feature 6: Zone Breathing Visualiser
- **ID prefix:** ncz-f6-
- **Position:** After existing pentagon map section
- **Background:** Deep Teal #0C4452
- **Behaviour:** SVG pentagon with pulsing vertices. High burden = fast shallow pulse, low burden = slow deep pulse. Cascade lines ripple. All zones low = "Terrain Coherence" gold glow. TerrainLock = Z2-Z1-Z5 triangle red pulse. 5 burden sliders.
- **Zone colours:** Z1=#C9A84C, Z2=#1A7A8A, Z3=#7B5EA7, Z4=#5F7C6C, Z5=#2E6DB4

### Feature 7: N6 Dampening X-Ray
- **ID prefix:** ncz-f7-
- **Position:** After Feature 1 (Node Assembly)
- **Background:** Prussian #0D2B4E
- **Behaviour:** Button triggers overlay dimming all except Z1, Z2, Z3, Z5. Gold lines from N6 to each zone with "x0.7" gate animation. Before/after counter shows zone scores. Toggle dampening on/off with live recalculation.
- **Caption:** "N6 appears in four of five zones. Without the dampening coefficient, every zone score would be inflated. The app applies this automatically."

### Feature 8: Cascade Archaeology Timeline
- **ID prefix:** ncz-f8-
- **Position:** After cascade stacks section
- **Background:** Deep Teal #0C4452
- **Behaviour:** Horizontal scrollable timeline. Fictional patient: Mark, 47, chronic fatigue + gut complaints. 5 consultation points over 18 months. Coloured arcs show active cascades at each point. Clickable arcs expand: zone scores, evidence tier, velocity. Final frame: DeltaScan comparison (T1 vs T5).
- **Caption:** "This is what the app builds for you in real time, consultation by consultation."

### Feature 9: Zone Isolation Theatre
- **ID prefix:** ncz-f9-
- **Position:** After Section 3 (Five Zones)
- **Background:** Dark overlay
- **Behaviour:** "Focus" button on each zone card. Click opens full overlay: zone expands, constituent nodes orbit, incoming/outgoing cascade arrows animate, threshold bar shown, near-threshold D-38 borderline badge, app preview sidebar. Click anywhere to exit.

### Feature 10: Live Architecture Stress Test
- **ID prefix:** ncz-f10-
- **Position:** After Feature 4 (Split-Screen)
- **Background:** Prussian #0D2B4E
- **Behaviour:** Clean NCZ pentagon + 7 node sliders (start zero). "Build a patient." Zones activate live, cascades fire at thresholds, DRD designation shifts (Z2 tiebreaker). TerrainLock illuminates. App-frame preview mirrors changes. Calculation counter. CTA: "Start your 14-day free trial."
- **Scoring:** Full pipeline: node scores → N6 dampening → zone composite → threshold check → cascade detection → DRD → floor formula

---

## Architecture Compliance Checklist (all 16 features)
- [x] Node count = 7 (not 8)
- [x] Zone count = 5 (Z6+ = error)
- [x] Stack count = 6 (S1-S6 only)
- [x] S4 labelled THEORETICAL on every reference
- [x] S6 labelled UNIDIRECTIONAL in same sentence
- [x] N6 dampening = 0.7
- [x] Zone thresholds: Z1-Z4=40, Z5=32
- [x] Display scale: 0-10 inverted
- [x] Floor formula: MAX(dampened)-10 on internal 0-100
- [x] DRD display: "Driver" (T-01)
- [x] TerrainLock: Z2→Z1→Z5→Z2, correct activation conditions
- [x] Z2 default tiebreaker
- [x] British English throughout
- [x] No template literals, no default parameters
- [x] Responsive @media rules per feature

### Feature 11: "Your Next Monday Morning" — Live Consultation Simulator (CROWN JEWEL)
- **ID prefix:** ncz-f11-
- **Position:** Before CTA section (final feature before conversion)
- **Background:** Prussian #0D2B4E
- **Behaviour:** Cinematic real-time consultation simulator. Practitioner clicks "Start Your Monday Morning" and watches a full consultation unfold:
  - Clock starts at 8:47 AM, ticks at 15x speed
  - Split panel: Left ("Without VitalMatrix") shows reconstruction timer counting to 45 min with greyscale fade. Right ("With VitalMatrix") shows live architecture response.
  - 8 intake lines type in sequentially (fictional patient Sarah, 41, teacher)
  - Each line triggers node score increases: N1=35, N2=47, N3=58, N6=70 (dampened=49)
  - Zone scores compute live: Z1 Active (5/10), Z2 Active (6/10), Z5 Active (6/10)
  - S1+S2+S4 fire. TerrainLock detected (Z2→Z1→Z5→Z2 loop)
  - DRD: "Driver: Z1 Metabolic Energy Axis"
  - Structured output assembles: T-01 compliant Personalised Terrain Management Protocol with protective header, zone summary, cascade trace, five blank Practitioner Clinical Decision fields
  - Clock shows 8:49 AM. Left timer at 7/45 min.
  - Reveal sequence: four messages at 1s intervals, gold Cormorant Garamond quote: "What would you do with 26 extra minutes — every consultation — for the rest of your career?"
  - CTA: "Book a Clinical Walkthrough" → /book/
  - "Watch Again" replay button
- **Scoring compliance:** N6 x0.7, floor MAX(dampened)-10, display ROUND((100-internal)/10), Z5 threshold 32
- **T-01 compliance:** Title "Personalised Terrain Management Protocol", DRD "Driver", protective header, blank Practitioner Clinical Decision section, S4 THEORETICAL, S6 UNIDIRECTIONAL
- **Emotional design:** Sells time, not technology. The practitioner sees 45 minutes compressed into 2. The question is not "do I need this" but "how soon can I start."

## Zone Colours (D-53 Website)
| Zone | Colour | Hex |
|------|--------|-----|
| Z1 | Gold | #C9A84C |
| Z2 | Teal | #1A7A8A |
| Z3 | Purple | #7B5EA7 |
| Z4 | Sage | #5F7C6C |
| Z5 | Blue | #2E6DB4 |

### Feature 12: Scoring Transparency Calculator
- **ID prefix:** ncz-f12-
- **Position:** After Feature 11 (Crown Jewel)
- **Background:** Charcoal #1A2030
- **Behaviour:** Two-panel layout. Left: 7 node burden sliders (0-100 internal scale). Right: 5 zone scores (display 0-10 inverted) with Active/Borderline/Inactive badges. Live formula trace panel shows all 5 calculation steps: raw capture, N6 dampening (x0.7), zone composite averaging, floor check (MAX(dampened)-10), display conversion (ROUND((100-internal)/10)).
- **Scoring compliance:** Internal 0-100, display 0-10 inverted, N6 x0.7, floor MAX(dampened)-10, thresholds Z1-Z4=40 Z5=32, near-threshold 5 points (D-38)
- **Caption:** "The app does this in milliseconds for every consultation. The practitioner sees the result. The architecture is always visible on demand."

### Feature 13: Evidence Tier Explorer
- **ID prefix:** ncz-f13-
- **Position:** After Feature 12
- **Background:** Deep Teal #0C4452
- **Behaviour:** 6 cascade stack cards in 3-column grid. Filter bar: All / Established / Emerging / Theoretical. Click any card to expand: evidence description, clinical significance, architectural role. S4 card rendered with dashed border (THEORETICAL). S6 card notes UNIDIRECTIONAL qualifier. Each card shows stack ID, direction, velocity, evidence tier badge.
- **Architectural compliance:** S4 THEORETICAL always labelled, excluded from DRD trace (D-12). S6 UNIDIRECTIONAL in same sentence.
- **Data:** Full evidence descriptions per stack with mechanism summaries.

### Feature 14: DeltaScan Terrain Shift Viewer
- **ID prefix:** ncz-f14-
- **Position:** After Feature 13
- **Background:** Prussian #0D2B4E
- **Behaviour:** Side-by-side T1 (Baseline) vs T2 (12-week follow-up) comparison. Fictional patient Mark, 47. 5 zone burden bars with internal scores, display scores, and delta arrows (improved/worsened). DRD designation panel per timepoint showing Driver shift (Z2 at baseline to Z1 at follow-up). Animated pulse arrow between columns.
- **Scoring:** Display 0-10 inverted. Delta calculated as T1-T2 internal difference.
- **Caption:** "Composite fictional patient. For architectural demonstration only."

### Feature 15: Five-Layer Pipeline Animation
- **ID prefix:** ncz-f15-
- **Position:** After Feature 14
- **Background:** Charcoal #1A2030
- **Behaviour:** Vertical stack of 5 FLINT layer cards (L1-L5) with connector lines. "Run Pipeline" button triggers sequential 1.2s activation: each layer lights up (gold border, expanded output text), previous layers dim to "done" state. Output text per layer shows fictional patient data flowing through the pipeline. "Reset" button returns to initial state.
- **Layers:** L1 Node Intelligence (WHERE?), L2 Zone Intelligence NCZ (WHICH?), L3 Cascade Intelligence CascadeIQ (HOW?), L4 Highest Burden Designation DRD (WHO?), L5 Examination Intelligence APEX (WHAT NEXT?)
- **T-01 compliance:** L4 displayed as "Highest Burden Designation" not "Driver-Reactor"

### Feature 16: Output Document Preview
- **ID prefix:** ncz-f16-
- **Position:** After Feature 15 (final feature before CTA)
- **Background:** Prussian #0D2B4E
- **Behaviour:** White document card with realistic Personalised Terrain Management Protocol layout. T-01 compliant header bar (Prussian Blue + gold badge). Protective header text. 7 clickable section blocks: Zone Activation Summary, Cascade Detection, Highest Burden Designation, Dietary, Supplemental, Lifestyle, Investigation Priorities (APEX). Click any block to expand and see content + "Maps to: [FLINT layer]" label. Blank Practitioner Clinical Decision section with 5 dashed sub-label fields (never pre-populated). Document footer with ICO ZC101813.
- **T-01 compliance:** Title "Personalised Terrain Management Protocol", protective header (PERMANENT), blank Practitioner Clinical Decision (PERMANENT), DRD as "Driver", supplements/dietary/lifestyle only, no pharmaceutical content.
- **Caption:** "This is the output. Click each section to see what it maps to."

---

### SV-1: Cross-Platform Terrain State Bridge
- **ID prefix:** ncz-sv1-
- **Position:** Before CTA
- **Background:** Charcoal #1A2030
- **Behaviour:** Floating panel with live terrain readout from demo data. Base64 state encoding. "Open in CascadeAtlas" and "Open in Terrain Intelligence" CTAs with ?state= param. Copy link. Sync from F10/F2 sliders. Three context cards.
- **Caption:** "One architecture. One patient. Three views."

### SV-2: FLINT Pipeline Live Trace Overlay
- **ID prefix:** ncz-sv2-
- **Position:** After SV-1
- **Background:** Prussian #0D2B4E
- **Behaviour:** 5-layer FLINT pipeline (L1-L5) with 1.5s sequential animation. Gold connecting lines. Each layer expands with computed data: nodes, zones, cascades, DRD, APEX tiers. T-01 output card assembles at end. Reset to replay.
- **Caption:** "Five layers. One patient. Eight seconds."

### SV-3: Multi-Page Architecture Navigator
- **ID prefix:** ncz-sv3-
- **Position:** After SV-2
- **Background:** Deep Teal #0C4452
- **Behaviour:** Circular SVG node graph. NCZ centre, 6 satellite pages. Animated gold connections. Click satellite for preview card with highlights and Visit Page CTA. Stats: 6 pages, 156+ features, 1 architecture.
- **Caption:** "Every feature on every page traces back to seven nodes, five zones, and six cascades."

### SV-4: Practitioner Onboarding Simulator
- **ID prefix:** ncz-sv4-
- **Position:** After SV-3
- **Background:** Prussian #0D2B4E
- **Behaviour:** 5-step guided walkthrough. Step 1: intake form (James, 54). Step 2: nodes activate. Step 3: zones compute with cascades. Step 4: DRD designation + TerrainLock. Step 5: T-01 output with elapsed timer. Prev/next nav + progress dots.
- **Caption:** "Your first patient is done. Your next one starts the same way."

### SV-5: Real-Time Architecture Validator
- **ID prefix:** ncz-sv5-
- **Position:** After SV-4
- **Background:** Charcoal #1A2030
- **Behaviour:** 12-check animated validation sequence (0.5s per check). Green shields for PASS. Checks: node/zone/stack count, S4 THEORETICAL, S6 UNIDIRECTIONAL, N6 across 4 zones, thresholds, display scale, floor formula, DRD language, T-01, TerrainLock. Gold compliance seal.
- **Caption:** "This is not a feature demonstration. This is the governance layer that runs on every consultation."

### SV-6: Terrain Intelligence Command Centre
- **ID prefix:** ncz-sv6-
- **Position:** After SV-5
- **Background:** Deep Teal #0C4452
- **Behaviour:** 3-column dashboard. Col 1: zone status strip (5 bars). Col 2: cascade activity feed (6 entries, S4 dashed, S6 UNIDIRECTIONAL, TerrainLock). Col 3: clinical summary (DRD, resilience score, active counts, mini T-01 card). Feature counter. Export to clipboard.
- **Caption:** "Everything the practitioner needs. One screen."

---

## File Details
- **Source:** NCZArchitecture_latest.html
- **Lines:** ~6982 (up from 921)
- **New sections:** 22 interactive features (10 premium + 1 crown jewel + 5 architectural depth + 6 SV integrations)
- **LA-2 NCZ Living Architecture:** Integrated (after F11, before F12)
- **Coding standard:** Vanilla JS, self-contained IIFEs, no dependencies
- **Build dates:** F1-F11: 07 May 2026 | F12-F16: 08 May 2026 | SV-1 to SV-6: 14 May 2026

---

VOS(TM) (VitalMatrix Operating System). VitalMatrix(TM), NCZ(TM), DRD(TM), APEX(TM), TIQ(TM), CIB(TM), CascadeIQ(TM), FLINT(TM), CZR(TM), TRACE(TM), DeltaScan(TM), MedTerrain(TM), TerrainLock(TM), CascadeAtlas(TM), PRISM(TM), KINETICS(TM), COHERENCE(TM), TerrainRoot(TM), ORBIT(TM), SPHERE(TM), HERALD(TM), BEACON(TM), MAPS(TM), RECON(TM), COMPASS(TM), GENOME(TM), ANCHOR(TM), AXIS(TM), INTAKE(TM), VECTOR(TM) and all associated marks are trademarks of VitalMatrix Ltd. All rights reserved. ICO ZC101813.
