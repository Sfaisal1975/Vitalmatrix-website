# Interactive Learning — 10 Award-Winning Features Specification
# VitalMatrix Ltd | ICO ZC101813 | 8 May 2026
# Authority: ALB v1.5 | D-53 Zone Colours | T-01 Active

---

## Overview

10 interactive learning features designed to make the VitalMatrix architecture effortless to understand through play, discovery, and emotion. All pure HTML + CSS + vanilla JS. No React.
Target: Living Architectures page + GENOME Handbook.
Zone colours D-53: Z1=#C9A84C, Z2=#1A7A8A, Z3=#7B5EA7, Z4=#5F7C6C, Z5=#2E6DB4.
All IDs prefixed vm-learn-.

---

## Learning Channel Map

| Channel | Features |
|---------|----------|
| Discovery | 1 Treasure Hunt, 9 Domino Builder |
| Visual | 2 Speed Run, 6 Heartbeat Monitor |
| Kinesthetic | 3 Jigsaw Puzzle, 8 Flashcard Blitz |
| Conceptual | 4 Register Switcher, 7 Conversation Simulator |
| Emotional | 5 One Patient Story, 10 Before/After Comparison |

---

## Feature 1: Architecture Treasure Hunt

**Purpose:** Practitioner discovers the architecture through clinical reasoning, not reading.
**Interaction:** Single glowing Z2 node. Questions guide discovery of each cascade. Gold coin counter. Completion badge.
**Sequence:** Z2→S1→Z1→S2→Z5→S3(Z4→Z1)→S5(Z2→Z3)→S6(Z1→Z3, UNIDIRECTIONAL)→S4(Z5→Z2, THEORETICAL, TerrainLock)
**Compliance:** S4 THEORETICAL. S6 UNIDIRECTIONAL in same sentence. 6 stacks total.
**End State:** "Architecture Explorer — Full Terrain Map Unlocked" + replay button.

---

## Feature 2: 60-Second Architecture Speed Run

**Purpose:** Entire FLINT pipeline in exactly 60 seconds.
**Timeline:** 0-10s nodes, 10-20s zones, 20-35s cascades, 35-45s DRD, 45-55s TerrainLock, 55-60s TIQ + outputs.
**Controls:** Pause, Watch Again, Slow Mode (3 min).
**Data:** N7 Phase 2 badge. N6 dampening 0.7x. Z2 DRD demo. TIQ 4.2/10.

---

## Feature 3: Architecture Jigsaw Puzzle

**Purpose:** Drag-and-drop assembly builds muscle memory.
**Pieces:** 7 nodes, 5 zone labels, 6 cascade arrows.
**Validation:** Correct placement snaps + chime. Wrong bounces + hint.
**Progression:** Cascades unlock after zones placed. TerrainLock connectors after S1+S2+S4.
**Gamification:** Timer (optional), best time in sessionStorage.

---

## Feature 4: "Explain It To Me Like..." Register Switcher

**Purpose:** Same architecture at 5 complexity levels.
**Tabs:** Like I'm 5 / Medical Student / IFM Practitioner / Investor / Regulator.
**Visual:** Same pentagon, different labels and colour intensity per tab.
**Compliance:** Regulator tab includes MHRA SaMD, T-01, ICO ZC101813.

---

## Feature 5: "One Patient, One Pipeline" Scrollytelling

**Purpose:** Architecture explained through emotion and narrative.
**Patient:** Sarah, 44, teacher, 18 months fatigue.
**Data:** N1=35, N2=72, N3=65, N4=48, N5=32, N6=68, N7=28.
**Zones:** Z2 internal 62 (active), Z1 internal 55 (active), Z5 internal 30 (borderline, threshold 32).
**Cascades:** S1 (Z2→Z1), S5 (Z2→Z3).
**DRD:** Z2 highest burden.
**Outcome:** "12 weeks later, Z2 dropped 14 points. S1 deactivated. Energy returned."
**CTA:** "Book a Discovery Call."

---

## Feature 6: Architecture Heartbeat Monitor

**Purpose:** Read terrain patterns like ECG rhythms.
**Visual:** 5 horizontal traces (one per zone, zone colours) on dark monitor canvas.
**Behaviour:** Quiescent = flatline. Active = pulse proportional to burden. Cascade = spike transfer.
**Presets:** "Normal Sinus" (flat), "TerrainLock Rhythm" (triple-spike), "This Patient" (Stephen Clarke).
**Audio:** Gentle beep on cascade events (toggleable mute).

---

## Feature 7: Architecture Conversation Simulator

**Purpose:** Ask questions in natural language, get visual + text answers.
**Interface:** Chat bubbles + mini SVG pentagon (300x280).
**Pre-loaded questions:** "What happens if Z2 gets worse?", "Show me TerrainLock", "Which node matters most?", "What is the difference between Z1 and Z5?", "How does the loop form?", "Where should I start investigating?"
**Responses:** Visual animation on pentagon + plain-English text bubble.
**Input:** Clickable chips + free text (keyword matching).

---

## Feature 8: Architecture Flashcard Blitz

**Purpose:** Rapid-fire knowledge testing with instant visual feedback.
**Cards:** 20 cards: node-zone (7), cascade direction (6), velocity (4), evidence tier (3).
**Feedback:** Correct = gold confetti + animated answer. Wrong = shake + teaching moment.
**End screen:** "Architecture Confidence: X%. Areas to review: [topics]."
**Modes:** Full deck, Weak Areas Only, 5-second timer (optional).

---

## Feature 9: Architecture Domino Chain Builder

**Purpose:** Creative sandbox — build and break cascade chains.
**Interaction:** Click zone to start, click target to draw arrow.
**Validation:** Valid cascade = correct colour + velocity + evidence. Invalid = red + explanation.
**Challenges:** "Build TerrainLock" (Z2→Z1→Z5→Z2). "Maximum Chain from Z4" (3 hops).
**Notes:** S4 excluded from DRD trace when used. S6 UNIDIRECTIONAL.

---

## Feature 10: Before VitalMatrix vs After — Split Screen

**Purpose:** Business case made emotional through visual contrast.
**Left "Before":** Scattered notes, parallel testing, GBP 1,200, 3-month reassessment.
**Right "After":** Clean pipeline, directional sequence, GBP 280, 6-week reassessment.
**Visual:** Draggable centre divider. Pentagon on right with DRD badge on Z2.
**Banner:** "Same patient. Same data. Different architecture. Different outcome."
**CTA:** "See your next patient through the architecture."

---

## File Manifest

| File | Features | Location |
|------|----------|----------|
| learn-features-1-2.html | Treasure Hunt + Speed Run | LocalPreview/sections/ |
| learn-features-3-4.html | Jigsaw + Register Switcher | LocalPreview/sections/ |
| learn-features-5-6.html | Patient Story + Heartbeat | LocalPreview/sections/ |
| learn-features-7-8.html | Conversation + Flashcards | LocalPreview/sections/ |
| learn-features-9-10.html | Domino Builder + Before/After | LocalPreview/sections/ |
| InteractiveLearning_10Features_Embed.html | All 10 combined for iframe | ClaudeCode_Context/ |

## Integration Targets

| Target | Method |
|--------|--------|
| LivingArchitectures_latest.html | Inline at end of page (before footer) |
| GENOME Handbook JSX | iframe embed (new tab: interactive_learning) |
| Specs | This document + LivingArchitectures_MasterSpec.md updated |

---

*Interactive Learning 10 Features Spec | VitalMatrix Ltd | ICO ZC101813 | 8 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.5 | D-53 | T-01 Active*
