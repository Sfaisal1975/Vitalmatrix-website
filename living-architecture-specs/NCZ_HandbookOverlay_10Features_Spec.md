# NCZ Architecture — 10 Handbook Overlay v2.0 Features Specification
# VitalMatrix Ltd | ICO ZC101813 | 13 May 2026
# Authority: ALB v1.6 | D-85 Zone Colours | T-01 Active
# Source: GENOME Handbook Chapter Overlay v2.0 NCZ Components

---

## Overview

10 interactive features derived from the GENOME Handbook v2.0 NCZ chapter components (NCZConnectivityMap, NCZCompositionBuilder, NCZOverlapMatrix, NCZNodeSharingVenn, NCZClinicalEntryCards, NCZBurdenSimulator, NCZChainTracer, NCZEvolutionTimeline, NCZZoneComparison, NCZClipboardRef). Converted to standalone HTML/CSS/vanilla JS for website integration.

Zone colours D-85: Z1=#C9A84C, Z2=#1A7A8A, Z3=#7B5EA7, Z4=#5F7C6C, Z5=#2E6DB4.
All IDs prefixed vm-ncz2-.

---

## Feature Index

| # | Feature | Source Component | What It Teaches |
|---|---------|-----------------|-----------------|
| 1 | Connectivity Map | NCZConnectivityMap | Which zones share nodes |
| 2 | Composition Builder | NCZCompositionBuilder | Drag nodes to correct zones |
| 3 | Overlap Matrix | NCZOverlapMatrix | 7x5 node-zone contribution grid |
| 4 | Node Sharing Venn | NCZNodeSharingVenn | Shared vs exclusive nodes |
| 5 | Clinical Entry Cards | NCZClinicalEntryCards | Zone-specific clinical questions |
| 6 | Burden Simulator | NCZBurdenSimulator | Live zone score calculation |
| 7 | Chain Tracer | NCZChainTracer | Cascade flow through any zone |
| 8 | Evolution Timeline | NCZEvolutionTimeline | Zone activation over 4 timepoints |
| 9 | Zone Comparison | NCZZoneComparison | Side-by-side zone analysis |
| 10 | Clipboard Reference | NCZClipboardRef | One-click architecture export |

---

## Feature 1: NCZ Connectivity Map

**Purpose:** Show which zones share nodes and how connected the architecture is.
**Interaction:** SVG pentagon. Click zone to highlight connections. Line thickness = shared node count. N6 connections in gold (0.7x dampened).
**Background:** Charcoal #1A2030

---

## Feature 2: NCZ Composition Builder

**Purpose:** Drag-and-drop learning of node-to-zone mappings.
**Interaction:** 7 draggable node chips → 5 zone containers. N6 places 4 times with "0.7x" badge. N7 = Phase 2. MES = context only.
**Background:** Prussian Blue #0D2B4E

---

## Feature 3: NCZ Overlap Matrix

**Purpose:** Comprehensive node-zone contribution grid.
**Interaction:** 7x5 grid. Cells filled with zone colour where node contributes. N6 row gold with "0.7x". Click cell for explanation. Hover row/column highlights.
**Background:** Deep Teal #0C4452

---

## Feature 4: NCZ Node Sharing Venn

**Purpose:** Show shared vs exclusive node assignments.
**Data:** N6 in 4 zones (shared). N2, N3, N4 in 2 zones each (shared). N1 exclusive to Z2. N5 exclusive to Z3. N7 no zone.
**Interaction:** Click overlaps for clinical implications.
**Background:** Charcoal #1A2030

---

## Feature 5: NCZ Clinical Entry Cards

**Purpose:** Zone-specific clinical entry point questions.
**Cards:** 5 expandable cards with clinical question, biomarker triggers, intake findings.
**Questions:** Z1 energy, Z2 resilience, Z3 cardiovascular-neural, Z4 detoxification, Z5 hormonal.
**Background:** Prussian Blue #0D2B4E

---

## Feature 6: NCZ Burden Simulator

**Purpose:** Live zone score calculation with full transparency.
**Interaction:** 7 node sliders (0-100). N6 dampening visible. Floor formula step by step. Display score computed. 5 zone cards with active/borderline/inactive.
**Data:** Default Stephen Clarke scores. Thresholds Z1-Z4=40, Z5=32. D-38 near-threshold.
**Background:** Deep Teal #0C4452

---

## Feature 7: NCZ Chain Tracer

**Purpose:** Trace all cascade chains passing through any zone.
**Interaction:** Click zone on pentagon to see inbound + outbound cascades with animated particles.
**Compliance:** S4 THEORETICAL. S6 UNIDIRECTIONAL in same sentence.
**Background:** Charcoal #1A2030

---

## Feature 8: NCZ Evolution Timeline

**Purpose:** Watch zone activation evolve over 4 fictional timepoints.
**Data:** T0 all below threshold → T1 Z2 activates → T2 Z1 via S1 → T3 Z5 via S2, TerrainLock risk.
**Interaction:** Play/pause auto-advance (3s/step). Mini zone bubbles with cascade arrows.
**Background:** Prussian Blue #0D2B4E

---

## Feature 9: NCZ Zone Comparison

**Purpose:** Side-by-side comparison of any two zones.
**Interaction:** Select 2 zones. Shows: shared/unique nodes, thresholds, clinical entry, cascade connections between them.
**Background:** Deep Teal #0C4452

---

## Feature 10: NCZ Clipboard Reference

**Purpose:** One-click architecture export as structured text.
**Content:** 7 nodes, 5 zones, compositions, thresholds, N6 dampening, floor formula, S4/S6 qualifiers.
**Actions:** Copy to Clipboard, Print View. ICO ZC101813 + TM footer.
**Background:** Charcoal #1A2030

---

## File Manifest

| File | Features | Location |
|------|----------|----------|
| ncz2-features-1-5.html | Connectivity + Builder + Matrix + Venn + Entry Cards | LocalPreview/sections/ |
| ncz2-features-6-10.html | Simulator + Tracer + Timeline + Comparison + Clipboard | LocalPreview/sections/ |
| NCZ_HandbookOverlay_10Features_Embed.html | All 10 combined for iframe | ClaudeCode_Context/ |

## Integration Targets

| Target | Method |
|--------|--------|
| NCZArchitecture_latest.html (localhost:8080) | Inline before CTA section |
| LivingArchitectures_latest.html | Inline after LA-2 NCZ section |
| GENOME Handbook JSX | iframe embed (new tab or existing ncz_arch tab) |
| Specs | This document + LivingArchitectures_MasterSpec.md updated |

---

*NCZ Handbook Overlay 10 Features Spec | VitalMatrix Ltd | ICO ZC101813 | 13 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.6 | D-85 | T-01 Active*
