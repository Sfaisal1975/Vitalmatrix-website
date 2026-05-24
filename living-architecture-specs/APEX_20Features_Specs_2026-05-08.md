# APEX 20 Features Specification
# LA-6: Assessment Priority and Evidence Xray
# D-53 | ALB v1.5 | T-01 Compliant | 8 May 2026

---

## Component Identity

| Field | Value |
|-------|-------|
| Component | LA-6 APEX Investigation Planner |
| Mnemonic | APEX: Assessment Priority and Evidence Xray (never "Adaptive Prioritised Examination") |
| Section file | sections/la6-apex-20features-section.html |
| Background | Charcoal #1A2030 |
| Zone colours | D-53: Z1 #C9A84C, Z2 #1A7A8A, Z3 #7B5EA7, Z4 #5F7C6C, Z5 #2E6DB4 |
| Fonts | Cormorant Garamond (headings), Outfit (body), DM Mono (data/labels) |
| Prefix | apex-fN- (N = feature number 1-20) |
| T-01 | Supplements, dietary, lifestyle only. No pharmaceutical. Evidence tiers on every investigation. |

---

## Feature Navigation

20 toggle buttons in a navigation bar. One feature visible at a time. F1 visible on load.

---

## Feature Specifications

### F1: Cascade-Linked Investigation Sequencing
- **Eyebrow:** Feature 1
- **Heading:** Cascade-Linked Investigation Sequencing
- **Interaction:** Zone selector. On selection, shows cascade-connected downstream zones via active stacks (S4 Theoretical excluded). Displays recommended investigation order: source zone first, then downstream reactors.
- **Visual:** Horizontal zone pills with gold SOURCE ZONE stamp on selected zone. Stack badge (via S1, via S2, etc.) on reactor zones. Arrow connectors between pills.
- **Data:** STACKS array for cascade paths. Tier 1 investigations for source zone displayed below sequence.

### F2: Live Budget Accumulator with Shortlist
- **Eyebrow:** Feature 2
- **Heading:** Live Budget Accumulator with Shortlist
- **Interaction:** Checkbox on each investigation row. Running total updates in real time. Budget bar fills with colour transitions at tier boundaries (GBP 400 = teal to gold, GBP 800 = gold to purple). Selected investigations panel appears when count > 0.
- **Visual:** Horizontal bar with two ceiling lines at 33% and 66%. Bar colour changes at tier transitions. Selected count and GBP total displayed above.
- **Data:** Mid-range cost parsed from each investigation's GBP range.

### F3: Evidence Confidence Heatmap
- **Eyebrow:** Feature 3
- **Heading:** Evidence Confidence Heatmap
- **Interaction:** Zone selector. Grid view with investigations as rows, evidence tiers (Established, Emerging, Observed in Practice, Theoretical, Contested) as columns. Matching cell highlighted with tier colour. Non-matching cells transparent.
- **Visual:** CSS Grid. 6-column layout (name + 5 tiers). Tier-coloured cells for matches. Circle glyph in matching cells.
- **Data:** All tests for selected zone, cross-referenced against evidence tier.

### F4: Cross-Zone Investigation Overlap Detector
- **Eyebrow:** Feature 4
- **Heading:** Cross-Zone Investigation Overlap Detector
- **Interaction:** Automatic scan across all 5 zones. Tests appearing in 2+ zones flagged as DUAL-YIELD with gold badge. Zone pills (coloured circles) show which zones the test covers. Saving estimate calculated.
- **Visual:** Overlap rows with zone indicator circles. Gold DUAL-YIELD badge. Summary line: "N investigations cover 2+ zones. Potential saving: GBP X."
- **Data:** Cross-zone test name matching. Cost saving = mid-range cost x (zone count - 1).

### F5: Tier Progression Waterfall
- **Eyebrow:** Feature 5
- **Heading:** Tier Progression Waterfall
- **Interaction:** Zone selector. Tier 1 tests clickable (toggle between Flagged / Within Range / unset). Tier 2 unlocks when >= 1 Tier 1 flagged. Tier 3 unlocks when >= 2 Tier 1 flagged. Locked tiers dimmed with lock icon.
- **Visual:** Vertical stack of 3 tier cards with arrow connectors. Flagged tests get gold background. Within Range tests get teal background. Locked tiers at 30% opacity with pointer-events disabled.
- **Data:** Flag state stored per test key. Unlock logic: flagCount >= 1 for Tier 2, >= 2 for Tier 3.

### F6: Functional Optimal Range Lens
- **Eyebrow:** Feature 6
- **Heading:** Functional Optimal Range Lens
- **Interaction:** Zone selector. Click any investigation with range data to expand an inline panel showing conventional vs functional optimal range bars. Magnifying glass icon indicates range data available.
- **Visual:** Two horizontal bars: grey for conventional range, gold-bordered for functional range. Numeric range labels above. Panel slides open/closed with max-height transition.
- **Data:** fr array [conv_low, conv_high, func_low, func_high] per investigation. Only tests with fr data show the icon.

### F7: Investigation Dependency Chain
- **Eyebrow:** Feature 7
- **Heading:** Investigation Dependency Chain
- **Interaction:** Zone selector. Comprehensive panel tests have a checkbox. When checked, individual tests covered by the panel are dimmed (35% opacity) with "Covered by [panel name]" badge.
- **Visual:** COMPREHENSIVE gold badge on parent panels. Dimmed rows with teal "Covered by" badge. Checkbox activates coverage dimming.
- **Data:** dep (parent key) and covers (array of child test name fragments) fields per investigation.

### F8: Practitioner Annotation Sticky Notes
- **Eyebrow:** Feature 8
- **Heading:** Practitioner Annotation Sticky Notes
- **Interaction:** Zone selector. Pin icon on each row. Click to toggle inline note input (max 140 chars). Notes persist within session via f8Notes object.
- **Visual:** Gold-dashed border note card below test row. Inline text input with placeholder. Pin emoji as toggle button.
- **Data:** f8Notes object keyed by zone + index. Notes stored in memory only (no localStorage per coding constraints).

### F9: Seasonal and Circadian Specimen Timing Advisor
- **Eyebrow:** Feature 9
- **Heading:** Seasonal and Circadian Specimen Timing Advisor
- **Interaction:** Zone selector. Each test shown with specimen type icon, optimal collection time, fasting requirement badge, and seasonal note.
- **Visual:** Timing rows with specimen emoji (blood, urine, saliva, stool, imaging, device). Gold fasting tag. Italic seasonal note. Structured layout with icon, name, time, and evidence badge.
- **Data:** spec, fast, time, season fields per investigation. Icon mapping per specimen type.

### F10: Budget Scenario Comparator
- **Eyebrow:** Feature 10
- **Heading:** Budget Scenario Comparator
- **Interaction:** Zone selector. Two-column split view: Scenario A (Tier 1 only) vs Scenario B (Tier 1 + Tier 2). Delta strip below shows cost difference, additional investigations, and zone coverage gain.
- **Visual:** CSS Grid 2-column layout. Cards with total cost range, investigation count, zone coverage count, and test list. Delta strip with gold DELTA label.
- **Data:** Cost aggregated from parseCostRange. Zone coverage counted from zones arrays.

### F11: Cascade Source Priority Marker
- **Eyebrow:** Feature 11
- **Heading:** Cascade Source Priority Marker
- **Interaction:** Five zone burden sliders (0-100). DRD designation computed (highest burden zone above threshold, Z2 tiebreaker). Zone tabs reordered: DRD zone first with pulsing gold HIGHEST BURDEN stamp. Cascade-connected reactor zones show stack label. SOURCE stamp on investigation rows.
- **Visual:** Pulsing gold stamp with box-shadow animation. Zone buttons reordered dynamically. Tier 1 investigations for DRD zone shown below.
- **Data:** f11Scores object. DRD computed per D-15 hybrid scoring. STACKS for cascade connections. S4 excluded from ordering.

### F12: Evidence Tier Confidence Trajectory
- **Eyebrow:** Feature 12
- **Heading:** Evidence Tier Confidence Trajectory
- **Interaction:** Zone selector. Each investigation row includes a micro-sparkline (40x14 SVG) showing 5-year evidence trajectory. Rising line = growing confidence.
- **Visual:** Inline SVG polyline in gold/teal. Points mapped from traj array (1=Contested to 5=Established). Sparkline positioned after test name.
- **Data:** traj array [5 values] per investigation representing evidence strength over 5 years.

### F13: Patient Cost Transparency Card
- **Eyebrow:** Feature 13
- **Heading:** Patient Cost Transparency Card
- **Interaction:** Zone selector. Toggle button switches between practitioner view (standard rows with evidence badges and cost ranges) and patient view (plain English names, single midpoint cost, one-sentence explanation).
- **Visual:** Patient view uses larger font, friendly names (pt field), approximate single cost, and zone-contextual description. Suitable for screen-sharing.
- **Data:** pt field (patient-friendly name) per investigation. parseCostMid for single price.

### F14: Multi-Zone Basket Consolidation
- **Eyebrow:** Feature 14
- **Heading:** Multi-Zone Basket Consolidation
- **Interaction:** Automatic. Tier 1 investigations from all 5 zones merged into specimen-type groups (blood, urine, saliva, stool, imaging, device). Duplicates collapsed with multi-zone badges.
- **Visual:** Specimen type headers with emoji icons and count. Zone indicator circles on multi-zone tests. DUAL-YIELD gold badge on overlaps. Summary line with total count and specimen type breakdown.
- **Data:** spec field for grouping. Test name matching for deduplication. Zone tracking per unique test.

### F15: Lab Provider Cost Comparison Grid
- **Eyebrow:** Feature 15
- **Heading:** Lab Provider Cost Comparison Grid
- **Interaction:** Zone selector. NHS Only toggle filters to tests available on NHS pathway. Three horizontal bars per test: NHS (teal), Private (gold), Specialist (purple). Bar width proportional to cost (max 500 scale).
- **Visual:** Horizontal bar segments with inline cost labels. Label column (60px) + bar. "Indicative pricing only" footer note.
- **Data:** nhs, priv, func fields per investigation. null = not available on that pathway.

### F16: Investigation Impact Radar
- **Eyebrow:** Feature 16
- **Heading:** Investigation Impact Radar
- **Interaction:** Zone selector. Hover any investigation row to reveal a mini pentagon radar chart (92x92 canvas) showing which zones the test informs. Multi-zone tests light multiple axes.
- **Visual:** Absolute-positioned radar panel appears on hover. Pentagon with 5 zone-coloured dots. Filled polygon for active zones. Zone count badge inline.
- **Data:** zones array per investigation. drawMiniRadar function using Canvas 2D API. Pentagon positions match CascadeAtlas canonical layout.

### F17: Borderline Zone Investigation Escalation
- **Eyebrow:** Feature 17
- **Heading:** Borderline Zone Investigation Escalation
- **Interaction:** Five zone burden sliders (0-100). Zones above threshold shown as ACTIVE. Zones within D-38 near-threshold window (5 points below threshold) shown as BORDERLINE with amber dashed border. Tier 3 investigations dimmed in borderline zones.
- **Visual:** Amber dashed border on borderline zone cards. BORDERLINE (D-38) tip label. D-38 tooltip text inline. NEAR THRESHOLD amber badge. Dimmed Tier 3 rows with "Consider if Tier 1 supports" badge.
- **Data:** ZTH thresholds. D-38: 5 internal points. Z1-Z4 borderline: 35-39. Z5 borderline: 27-31.

### F18: Historical Investigation Tracker
- **Eyebrow:** Feature 18
- **Heading:** Historical Investigation Tracker
- **Interaction:** Timeline with 3 clickable nodes (T1, T2, T3). Selecting a timepoint shows that shortlist. REPEAT badge on tests present in previous timepoint. NEW badge on tests not in previous. DROPPED section lists tests removed since previous.
- **Visual:** Horizontal timeline with circles connected by lines. Active node highlighted with gold border and glow. Teal REPEAT badges. Gold NEW badges. Red DROPPED badges on dimmed rows.
- **Data:** f18History object with date and tests array per timepoint. Diff computed between consecutive timepoints.

### F19: Cascade-Weighted Cost Efficiency Score
- **Eyebrow:** Feature 19
- **Heading:** Cascade-Weighted Cost Efficiency Score
- **Interaction:** Zone selector. Sort toggle reorders tests by efficiency (ascending = best value first). Each test shows GBP X/zone metric. Summary line shows average cost per zone covered.
- **Visual:** Inline efficiency label (GBP X/zone) in muted text. Zone count badge (gold for multi-zone, teal for single). Sort button toggles between default and efficiency order.
- **Data:** Efficiency = parseCostMid / zones.length. Rounded to integer.

### F20: Regulatory Provenance Watermark
- **Eyebrow:** Feature 20
- **Heading:** Regulatory Provenance Watermark
- **Interaction:** Zone selector. Evidence tier filter buttons (All, Established, Emerging). Provenance source line visible below each test (always visible in this feature, hover-only in other features).
- **Visual:** Italic provenance line in muted text. Filter buttons with active state. D-05 compliance footer note.
- **Data:** prov field per investigation containing source citation. Filter by ev field.

---

## Shared Data Model

Each investigation object contains:

```
{
  t:       String   Test name
  co:      String   Cost range (GBP XX-YY)
  ev:      String   Evidence tier (Established | Emerging | Observed in Practice)
  ph:      String   Phase label (Phase 1 | Phase 2 | Phase 3)
  pt:      String   Patient-friendly name (F13)
  fr:      Array    Functional range [conv_lo, conv_hi, func_lo, func_hi] (F6)
  spec:    String   Specimen type: blood | urine | saliva | stool | imaging | device (F9, F14)
  fast:    Boolean  Fasting required (F9)
  time:    String   Optimal collection window (F9)
  zones:   Array    Zones this test informs (F4, F14, F16, F19)
  prov:    String   Evidence provenance source (F20)
  nhs:     Number   NHS cost (0 = free, null = unavailable) (F15)
  priv:    Number   Private lab cost (null = unavailable) (F15)
  func:    Number   Specialist functional lab cost (F15)
  traj:    Array    5-year evidence trajectory [1-5 per year] (F12)
  dep:     String   Dependency key if this is a parent panel (F7)
  covers:  Array    Tests this panel makes redundant (F7)
  season:  String   Seasonal collection note (F9)
}
```

---

## Architecture Compliance

| Check | Status |
|-------|--------|
| D-53 zone colours | Z1 #C9A84C, Z2 #1A7A8A, Z3 #7B5EA7, Z4 #5F7C6C, Z5 #2E6DB4 |
| DRD T-01a language | "Highest burden zone" used. Never "Driver". |
| S4 THEORETICAL | Excluded from cascade sequencing (F1, F11). Labelled Theoretical in STACKS data. |
| S6 UNIDIRECTIONAL | S6 direction Z1 to Z3 only in STACKS data. |
| D-38 near-threshold | F17 implements 5 internal points below threshold. Z5 borderline: 27-31. |
| Evidence tiers | Every investigation carries evidence tier badge. D-05 five-tier classification. |
| T-01 content | Supplements, dietary, lifestyle only. No pharmaceutical content. |
| 31 TM footer | VOS + 30 mnemonics present in footer text. |
| MHRA governance | Footer line present. |
| British English | Throughout. No American spellings. |
| No template literals | All JS uses string concatenation. |
| Fonts | Cormorant Garamond, Outfit, DM Mono only. |
| APEX expansion | "Assessment Priority and Evidence Xray" in subtitle. |

---

## Build History

| Date | Action |
|------|--------|
| 8 May 2026 | 20 features built. Section file created. Specs created. |

---

APEX, VitalMatrix, and all associated marks are trademarks of VitalMatrix Ltd.
All rights reserved. ICO ZC101813.
