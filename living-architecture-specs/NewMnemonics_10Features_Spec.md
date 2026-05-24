# New Mnemonics — 10 Award-Winning Features Specification
# VitalMatrix Ltd | ICO ZC101813 | 13 May 2026
# Authority: ALB v1.6 | D-85 | D-78 Option B | D-121 to D-129
# Source: GENOME Handbook Chapter Overlay v2.0 — New Mnemonic Components

---

## Overview

10 interactive features covering the new mnemonics introduced in the W26 LA Specification v1.0 and GENOME Handbook Chapter Overlay v2.0. Pure HTML + CSS + vanilla JS. No React.

**New mnemonics covered:**
- VOLTERRAIN (Layer 0 upstream drivers)
- VANTAGE (5-dimension integrative output)
- TerrainSpiral (temporal trajectory overlay)
- GRADE (Graded Reactivity, Absorption, and Detoxification Engine — replaces CAPACITY per D-124)
- CLVF (8-rule architectural compliance verification)
- VERITY (evidence verification and tier classification)
- NEXUS (cross-zone interaction detection, Tier 4 internal)
- MODES (terrain state classifier, Tier 4 internal)

All IDs prefixed vm-mnemo-.

---

## Feature Index

| # | Feature | Mnemonic | What It Shows |
|---|---------|----------|---------------|
| 1 | Driver Impact Visualiser | VOLTERRAIN | Driver → Node → Zone flow with sliders |
| 2 | Assessment Dashboard | GRADE | Three-state gauge (A/B/C) with FLINT anchors |
| 3 | Verification Console | CLVF | 8-rule compliance check with animated run |
| 4 | Trajectory Animator | TerrainSpiral | Cinematic T1→T2 terrain evolution |
| 5 | Dimension Explorer | VANTAGE | 5-card pentagon with synthesis view |
| 6 | Evidence Intelligence | VERITY | 5 evidence tiers with cascade examples |
| 7 | Cross-Zone Map | NEXUS | Defined vs potential zone interactions |
| 8 | State Classifier | MODES | 4-state terrain classification with toggles |
| 9 | Ecosystem Map | ALL | Complete mnemonic architecture visual |
| 10 | Flashcard Challenge | ALL | 15-card knowledge test on new mnemonics |

---

## Feature 1: VOLTERRAIN Driver Impact Visualiser

**Mnemonic:** VOLTERRAIN (Layer 0)
**Interaction:** SVG flow diagram: 7 drivers (left) → 7 nodes (middle) → 5 zones (right). Click driver to trace impact. Sliders adjust driver scores.
**Data:** Patient B defaults (D1=58, D2=35, D3=62, D4=38, D5=0, D6=22, D7=55)
**Background:** Prussian Blue #0D2B4E

## Feature 2: GRADE Assessment Dashboard

**Mnemonic:** GRADE (replaces CAPACITY per D-124, SA ruling pending)
**States:** Grade A (Adequate, green), Grade B (Depleted, amber), Grade C (Collapsed, red + W08 gate)
**Interaction:** Circular gauge with needle. Toggle Patient A/B-T1/B-T2. FLINT anchor indicators.
**Background:** Charcoal #1A2030

## Feature 3: CLVF Verification Console

**Mnemonic:** CLVF (8-rule compliance verification)
**Rules:** (1) 7 nodes, (2) 5 zones, (3) 6 stacks, (4) S4 THEORETICAL, (5) S6 UNIDIRECTIONAL, (6) N6=0.7, (7) Z5 threshold=32, (8) Floor=MAX(dampened)-10
**Interaction:** "Run Verification" animates through rules. All PASS on sample data.
**Background:** Deep Teal #0C4452

## Feature 4: TerrainSpiral Trajectory Animator

**Mnemonic:** TerrainSpiral (temporal overlay)
**Interaction:** SVG pentagon morphing between T1→T2. Zone bubbles swell/shrink. Cascades appear/disappear. TerrainLock activates. Play/pause/speed.
**Data:** Patient B T1→T2 (PROGRESSIVELY DESTABILISING)
**Background:** Prussian Blue #0D2B4E

## Feature 5: VANTAGE Dimension Explorer

**Mnemonic:** VANTAGE (5-dimension output)
**Interaction:** 5 cards in pentagon. Click to expand with detail. Orbiting animation. "Synthesis View" collapses all.
**Dimensions:** Zone Pattern, Cascade Pattern, DRD, APEX, Longitudinal Direction
**Note:** Internal CascadeAtlas only. Not practitioner-facing.
**Background:** Charcoal #1A2030

## Feature 6: VERITY Evidence Intelligence Panel

**Mnemonic:** VERITY (evidence tier classification)
**Tiers:** Established (teal), Emerging (gold), Theoretical (red), Observed in Practice (sage), Contested (purple)
**Interaction:** 5 expandable cards with definitions + architecture examples. Mini pentagon with clickable stacks.
**Background:** Deep Teal #0C4452

## Feature 7: NEXUS Cross-Zone Intelligence Map

**Mnemonic:** NEXUS (cross-zone detection, Tier 4 internal)
**Interaction:** Pentagon showing 6 defined stacks (solid lines) + 4 undefined pairs (dotted). Click defined for detail. Click undefined: "Would require SA D-series ruling."
**Data:** 6 of 10 possible zone pairs defined. Missing: Z3→Z4, Z4→Z2, Z3→Z5, Z4→Z3
**Background:** Prussian Blue #0D2B4E

## Feature 8: MODES Terrain State Classifier

**Mnemonic:** MODES (state classification, Tier 4 internal)
**States:** QUIESCENT (0-1 active), FOCAL (1-2), DISTRIBUTED (3-4), SYSTEMIC (5)
**Interaction:** 5 zone toggles. MODES badge updates live. Clinical guidance per state.
**Default:** Patient B T2 = all 5 active = SYSTEMIC
**Background:** Charcoal #1A2030

## Feature 9: New Mnemonic Ecosystem Map

**Mnemonics:** ALL new mnemonics in context
**Visual:** VOLTERRAIN → MES → FLINT L1-L5 → VANTAGE. TerrainSpiral arc. CLVF wrapper. GRADE/VERITY/MODES/NEXUS supporting.
**Interaction:** Click any mnemonic node for expansion, tier, phase, description. Phase 1/1.5 filter toggle.
**Background:** Deep Teal #0C4452

## Feature 10: Mnemonic Flashcard Challenge

**Mnemonics:** ALL (15 cards across 8 mnemonics)
**Interaction:** Multiple choice. Gold flash correct, shake wrong. Score counter. End screen with confidence %. Weak areas replay.
**Background:** Prussian Blue #0D2B4E

---

## File Manifest

| File | Features | Location |
|------|----------|----------|
| mnemo-features-1-5.html | VOLTERRAIN + GRADE + CLVF + TerrainSpiral + VANTAGE | LocalPreview/sections/ |
| mnemo-features-6-10.html | VERITY + NEXUS + MODES + Ecosystem + Flashcards | LocalPreview/sections/ |
| NewMnemonics_10Features_Embed.html | All 10 combined for iframe | ClaudeCode_Context/ |

## Integration Targets

| Target | Method |
|--------|--------|
| LivingArchitectures_latest.html | Inline after New LA Layers section |
| GENOME Handbook JSX | iframe embed (new_mnemonics tab) |
| Specs | This document + LivingArchitectures_MasterSpec.md |

---

*New Mnemonics 10 Features Spec | VitalMatrix Ltd | ICO ZC101813 | 13 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.6 | D-85 | T-01 Active*
