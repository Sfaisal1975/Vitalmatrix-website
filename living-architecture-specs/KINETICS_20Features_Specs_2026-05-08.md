# LA-5: KINETICS Velocity Board — 20-Feature Premium Specification

**Component:** LA5KineticsVelocity
**Build file:** GENOME_HandbookV7_Build3_AllLA_2026-04-11.jsx
**Standalone section:** sections/la5-kinetics-section.html (base only; 20-feature version in Build3 JSX)
**Authority:** ALB v1.5 | D-53 | T-01 Active
**Date:** 8 May 2026
**Evidence tier:** Emerging (Layer B) unless stated otherwise per feature

---

## Architecture Constants

- Seven nodes (N1-N7). MES = foundational context, never a node.
- Five zones (Z1-Z5). Z6+ = kill-level error.
- Six stacks (S1-S6). S4 THEORETICAL always. S6 UNIDIRECTIONAL: Z1 to Z3 only, in same sentence.
- Thresholds: Z1-Z4 = 40 internal. Z5 = 32 internal (hormonal sensitivity).
- Near-threshold (D-38): 5 internal points below activation threshold.
- N6 dampening: 0.7x applied to zone average and floor check.
- Display scale: 0-10 inverted. Translation: ROUND((100 - internal) / 10, 0).
- TerrainLock: Z2 to Z1 to Z5 to Z2. Activation: S1 Active + S2 Active + (S4 Active OR both Z5 and Z2 internal >= 60).
- DRD Phase 1 display: "Driver" (never "Driver"). T-01a active.

## Zone Colours (D-53, website and practitioner-facing)

| Zone | Colour | Hex |
|------|--------|-----|
| Z1 Metabolic Energy Axis | Gold | #C9A84C |
| Z2 Resilience Network | Teal | #1A7A8A |
| Z3 Cardiovascular-Neural Axis | Purple | #7B5EA7 |
| Z4 Detoxification Trident | Sage | #5F7C6C |
| Z5 Hormonal Terrain Axis | Blue | #2E6DB4 |

## Velocity Data (6 Stacks)

| Stack | From | To | Velocity | Weight | Evidence | Timing | Qualifier |
|-------|------|----|----------|--------|----------|--------|-----------|
| S1 | Z2 | Z1 | MEDIUM | 2 | Mechanism Established, Cascade Emerging | Weeks to months | — |
| S2 | Z1 | Z5 | FAST | 3 | Established | Days to weeks | — |
| S3 | Z4 | Z1 | SLOW | 1 | Emerging | Months to quarters | — |
| S4 | Z5 | Z2 | MEDIUM | 2 | Theoretical | Theoretical | THEORETICAL. Excluded from DRD cascade trace (D-12). |
| S5 | Z2 | Z3 | FAST | 3 | Emerging (TMAO quarterly review) | Days to weeks | — |
| S6 | Z1 | Z3 | MEDIUM | 2 | Established | Weeks | UNIDIRECTIONAL: Z1 to Z3 only. Reverse does not exist. |

---

## State Variables

| Variable | Type | Purpose |
|----------|------|---------|
| z1Val-z5Val | int 0-100 | Assessment 1 zone scores |
| z1bVal-z5bVal | int 0-100 | Assessment 2 zone scores (F5 split view) |
| viewMode | "driver" / "reactor" | F12: card ordering perspective |
| splitView | boolean | F5: comparative overlay toggle |
| showSeq | boolean | F4: intervention animation running |
| seqStep | int -1 to 3 | F4: current animation step |
| auditLog | array | F10: timestamped slider change entries |
| logOpen | boolean | F10: audit panel visibility |
| intTarget | zone or null | F2: propagation simulator intervention target |
| exportOpen | boolean | F20: export card visibility |

---

## Feature Register (20 Features)

### F1: Cascade Velocity Heatmap Timeline

**What:** Horizontal SVG sparkline strip showing velocity state over a 12-consultation window. Each stack row shows colour-coded cells (gold=FAST, white=MEDIUM, sage=SLOW, transparent=inactive).

**Clinical question answered:** "Is this cascade accelerating, decelerating, or stable over time?"

**Differentiation:** DeltaScan tracks zone scores over time. This tracks velocity over time: a fundamentally different clinical intelligence layer.

**Implementation:** Spec complete. Visual concept partially realised in F11 gradient map strip. Full 12-column heatmap deferred to standalone LA section file.

**Status:** SPEC COMPLETE

---

### F2: Cascade Propagation Simulator

**What:** Animated mini-pentagon SVG (280x280) with particle streams along active stack arrows. Click any zone to lock as intervention target: inbound particles halt, downstream stacks visually deactivate in sequence.

**Clinical question answered:** "What happens if I treat Z2 first?"

**Implementation:** `intTarget` state variable built. Full particle animation deferred to standalone LA section file for performance reasons.

**Status:** STATE BUILT, ANIMATION DEFERRED

---

### F3: Velocity-Weighted Urgency Stack Ranking

**What:** Dynamic ranking strip re-sorts six stacks by computed urgency index: `velocity_weight x activation_state x (source_burden / 100)`. Horizontal bar visualisation with live recalculation.

**Clinical question answered:** "Which cascade demands attention first, by clinical priority not stack number?"

**Computation:**
```
urgency = velWeight * (isActive ? 1 : 0) * (zScores[from] / 100)
Display: percentage bar, sorted descending
```

**Implementation:** Fully functional. Bar chart with velocity label per stack.

**Status:** BUILT

---

### F4: Intervention Sequence Animator

**What:** "Simulate" button animates predicted terrain response to treating DRD-designated Driver. 4-step sequence over 3 seconds: (a) driver zone score dims, (b) velocity badges visually downshift, (c) reactor zones dim with stagger delay, (d) TerrainLock re-evaluates.

**Clinical question answered:** "Why does treating the driver first produce the deepest downstream shift?"

**Governance label:** "Simulated terrain response. Not a clinical outcome prediction. For educational demonstration only."

**Implementation:** 4-step setTimeout sequence with opacity adjustments on stack cards.

**Status:** BUILT

---

### F5: Comparative Velocity Overlay (Split View)

**What:** Toggle splits the board into Assessment 1 (left) and Assessment 2 (right). Each side has independent zone sliders. Stack cards show velocity delta: ACCELERATED (red up arrow) / DECELERATED (teal down arrow) / STABLE (muted dash).

**Clinical question answered:** "Is the cascade getting faster or slower between consultations?"

**Differentiation:** DeltaScan compares zone scores. This compares cascade velocity. Fundamentally different clinical intelligence.

**Implementation:** Dual slider sets (z1Val-z5Val, z1bVal-z5bVal). Delta computed per stack card when splitView=true.

**Status:** BUILT

---

### F6: Velocity Resonance Detector

**What:** Identifies zones receiving 2+ inbound active cascades simultaneously. Displays "RES" badge on affected stack cards.

**Clinical question answered:** "Is this zone burdened from one upstream pathway, or because two cascades are converging on it?"

**Computation:**
```
inboundCount[zone] = count of active stacks where stack.to === zone
resonanceZones = zones where inboundCount >= 2
```

**Implementation:** Computed per render. RES badge shown on cards targeting resonance zones.

**Status:** BUILT

---

### F7: Velocity Decay Curve

**What:** Micro SVG sparkline (100x20) per active stack card showing theoretical decay curve if source zone burden were reduced. FAST: steep exponential drop. MEDIUM: moderate sigmoid. SLOW: long shallow tail.

**Clinical question answered:** "How long will downstream burden persist after I start treating the source zone?"

**Implementation:** SVG path element with velocity-specific bezier curves. Time estimate label (days/weeks/months).

**Evidence tier:** Emerging

**Status:** BUILT

---

### F8: Stack Dominance Radar

**What:** SVG radar chart (pentagon, 200x200) with coloured wedge sectors showing directional force per stack. TerrainLock trio merges into gold orbital band.

**Clinical question answered:** "Is cascade pressure concentrated on one pathway or distributed across many?"

**Implementation:** Spec complete. Partial implementation via F16 phase diagram quadrant labelling.

**Status:** SPEC COMPLETE

---

### F9: Cascade Chain Depth Counter

**What:** Recursive computation of downstream hop count per active stack. Displays 1, 2, 3, or gold infinity symbol for LOOP (TerrainLock).

**Clinical question answered:** "Is this a contained dysfunction or a spreading one?"

**Computation:**
```
function computeChainDepth(stackId, visited):
  if stackId in visited: return "LOOP"
  find downstream stacks where from === current stack.to
  if none active: return 1
  return 1 + max(computeChainDepth(downstream))
```

**Implementation:** Recursive function with loop detection. Infinity symbol on LOOP. Displayed per stack card header.

**Status:** BUILT

---

### F10: Velocity Audit Trail (Session Ledger)

**What:** Collapsible panel recording every slider change as timestamped entry. Logs zone, old value, new value, timestamp. "Copy to Clipboard" exports structured plain text.

**Clinical question answered:** "What clinical reasoning path did I explore during this session?"

**Implementation:** Array state, capped at 50 entries. Clipboard export via navigator.clipboard.writeText. Header: "KINETICS Session Audit | For practitioner records only | Not a clinical output."

**Status:** BUILT

---

### F11: Velocity Gradient Map

**What:** Full-width SVG strip (600x48) with five zone nodes connected by lines whose thickness encodes velocity. FAST=6px, MEDIUM=3px, SLOW=1.5px, inactive=0.5px. DRD zone marked with gold triangle needle.

**Clinical question answered:** One-glance readout of entire cascade flow state.

**Implementation:** SVG with dynamic strokeWidth per stack. DRD marker polygon. THEORETICAL stacks shown dashed.

**Status:** BUILT

---

### F12: Inverse Velocity View (Reactor Perspective)

**What:** Toggle "View: Driver" / "View: Reactor". Reactor view reorganises stack cards by target zone instead of source zone.

**Clinical question answered:** "Which zone is under the most cascade pressure right now, and from how many directions?"

**Implementation:** Button toggles viewMode state. Card array re-sorted by stack.to in reactor mode.

**Status:** BUILT

---

### F13: Velocity Confidence Interval Bands

**What:** Thin horizontal bar (4px) per stack card with three colour segments representing probability that true velocity is FAST/MEDIUM/SLOW. Near-threshold zones show equal segments. Deep-active zones show dominant segment. BORDERLINE badge on sliders in D-38 window.

**Clinical question answered:** "How confident is this velocity classification given the current zone score?"

**Computation:**
```
nearThreshold(zone):
  diff = zScores[zone] - thresholds[zone]
  if diff >= 0 and diff <= 5: "Borderline"
  if diff > 5: "High"
  else: "Below"
```

**Status:** BUILT

---

### F14: Stack Fingerprint Signature

**What:** 6-character code (F=Fast, M=Medium, S=Slow, -=inactive) computed from current velocity state. Pill badge at top of board. Five pre-defined clinical archetypes with nearest-match label.

**Archetypes:**
| Pattern | Name |
|---------|------|
| MF---- | Gut-Thyroid-Hormonal Loop |
| MF--F- | Gut-Driven Multi-Cascade |
| --S--- | Isolated Detox Burden |
| MFM-FM | Full TerrainLock State |
| ------ | Quiet Terrain |

**Clinical question answered:** "Does this patient's velocity pattern match a known clinical archetype?"

**Status:** BUILT

---

### F15: Cascade Bottleneck Detector

**What:** Identifies zones with 2+ inbound AND 1+ outbound active cascades. These are structural chokepoints: deactivating them collapses downstream propagation.

**Clinical question answered:** "Which zone's deactivation would collapse the most cascades?"

**Divergence alert:** When bottleneck differs from DRD designation, badge reads: "DRD: Z2 | Bottleneck: Z1 (differs)".

**Computation:**
```
bottleneckZones = zones where inboundCount >= 2 AND outboundCount >= 1
```

**Status:** BUILT

---

### F16: Velocity Phase Diagram

**What:** State-space chart (SVG, 200x160). X = active cascade count (0-6). Y = mean velocity weight (0-3). Four quadrant regions with dynamic label.

**Quadrants:**
| Region | Active Count | Mean Velocity | Label |
|--------|-------------|---------------|-------|
| Bottom-left | <= 3 | <= 1.5 | Quiet terrain |
| Bottom-right | > 3 | <= 1.5 | Distributed slow burden |
| Top-left | <= 3 | > 1.5 | Focused fast cascade |
| Top-right | > 3 | > 1.5 | Acute multi-cascade state |

**Clinical question answered:** "Is this terrain quiet, focused, distributed, or acute?"

**Status:** BUILT

---

### F17: Stack Pair Correlation Matrix

**What:** 6x6 grid. Rows and columns = six stacks. Cell fill: teal = both active, gold = one active, empty = both inactive. TerrainLock trio (S1+S2+S4) marked with dashed gold outline when all co-active. Co-activation density percentage.

**Clinical question answered:** "Which stacks are structurally co-activating?"

**Implementation:** pairActive(i,j) function. Density = count of co-active pairs / 15.

**Status:** BUILT

---

### F18: Velocity Differential Arrows

**What:** Dynamic SVG arrows on each stack card. Thickness: FAST=3px, MEDIUM=2px, SLOW=1px. Head scales proportionally. Spring animation on activation transitions.

**Implementation:** SVG line + polygon per card. Width and head size computed from velocity. Inactive arrows thin and muted.

**Status:** BUILT

---

### F19: Cascade Load Balance Indicator

**What:** Horizontal bar showing cascade traffic distribution across five zones. Segment width proportional to total inbound+outbound velocity weight. DRD marker. Bottleneck labels.

**Computation:**
```
loadPerZone[z] = sum of velWeight for all active stacks where from=z or to=z
segment width = (loadPerZone[z] / totalLoad) * 100%
```

**Clinical question answered:** "Which zone is doing the most cascade work?"

**Status:** BUILT

---

### F20: Velocity Board Export Card

**What:** "Export Card" button generates self-contained summary panel. Includes zone scores, stack states, velocities, TerrainLock status, fingerprint, phase label, DRD, bottlenecks. Formatted in VitalMatrix design system. Mandatory blank Practitioner Clinical Decision section (W5-3, W5-4 permanent). Clipboard export.

**T-01 compliance:**
- Protective header present
- Blank PCD section with 5 sub-labels (never pre-populated)
- "For practitioner use only. Not a diagnostic tool. ICO ZC101813."

**Status:** BUILT

---

## Compliance Checklist

- [x] S4 labelled THEORETICAL on every reference
- [x] S6 labelled UNIDIRECTIONAL in same sentence
- [x] DRD display: "Driver" (T-01a)
- [x] Evidence tier on every clinical claim
- [x] Protective header (W5-3, permanent)
- [x] Blank Practitioner Clinical Decision section (W5-4, permanent)
- [x] ICO ZC101813 on export card
- [x] No pharmaceutical content (T-01 W5-7)
- [x] British English throughout
- [x] No em dashes (colons or line breaks)
- [x] Zone colours D-53 compliant
- [x] TerrainLock activation note: "architecturally possible but clinically uncommon in Phase 1"

---

## Build Constraints

- No template literals (string concatenation only)
- No default parameters (ternary checks)
- No position: fixed
- No localStorage / sessionStorage
- All IDs prefixed la5-kin-
- Tab route: la5_kinetics (existing)
- Fonts: Cormorant Garamond (headings), Outfit (body), DM Mono (data labels)

---

*KINETICS 20-Feature Specs | VitalMatrix Ltd | ICO ZC101813 | 8 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.5 | D-53 | T-01 Active*
