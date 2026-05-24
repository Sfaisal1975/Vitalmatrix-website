# ANCHOR Cross-Cutting Overlay Specification

**Full name:** Adaptive Node Confidence and Hierarchy Report
**Mnemonic:** ANCHOR (D-33, mnemonic #27)
**Authority:** D-33 (definition), D-78 (cross-cutting overlay authorised), D-79 (Tier 4 placeholder reserved)
**Architecture position:** Cross-cutting element spanning L1 through L5. NOT a sixth FLINT layer (D-77, D-78).
**Build file:** GENOME_HandbookV7_Build3_AllLA_2026-04-11.jsx
**Tab route:** anchor_overlay
**Date:** 8 May 2026

---

## Purpose

ANCHOR is a deterministic verification engine that sits across all five FLINT layers. It detects errors, flags implausible outputs, enforces architectural rules, and provides evidence-based corrections. Every check traces to a locked D-series decision or ALB formula. ANCHOR does not use AI inference, probabilistic reasoning, or generative correction. It is rule-based.

---

## Architecture Position

```
L1 Node ── L2 Zone ── L3 Cascade ── L4 DRD ── L5 APEX
  |           |           |            |          |
  └───────────┴───────────┴────────────┴──────────┘
                 ANCHOR Cross-Cutting Overlay
           (verification, integrity, correction)
```

---

## What ANCHOR does NOT do

- Does not generate clinical conclusions (L4 DRD's job)
- Does not override practitioner decisions (PCD section remains blank)
- Does not use AI inference or probabilistic reasoning
- Does not add a sixth FLINT layer (cross-cutting element per D-78)
- Does not confabulate corrections: every correction traces to a locked decision

---

## Five Verification Domains

### Domain 1: Inter-Layer Consistency (D1)

Validates architectural constants and structural rules.

| Check | Rule | Source |
|-------|------|--------|
| Node count | NODES.length === 7 | ALB v1.5 |
| Zone count | ZONES.length === 5 | ALB v1.5 |
| Stack count | STACKS.length === 6 | ALB v1.5 |
| S4 Theoretical | S4.evidence === "Theoretical" | D-05 |
| S6 Unidirectional | S6.note contains "UNIDIRECTIONAL" | ALB v1.5 |
| No N8/MES node | No N8 or MES in NODES array | Architecture lock |
| No Z6+ | No zone with ID > Z5 | Architecture lock |
| Zone compositions | Each zone's node array matches ALB | ALB v1.5 |

### Domain 2: Score Plausibility (D2)

Identifies statistically unlikely score combinations that suggest data entry error.

| Check | Trigger | Correction |
|-------|---------|------------|
| Score range | Any zone < 0 or > 100 | "Must be 0-100 internal scale" |
| Uniform high burden | All five zones > 70 | "Clinically uncommon. Review for over-reporting bias." |
| Zero variance | Max - min <= 3 across all zones | "Data may not differentiate terrain patterns." |
| Z5 without Z1 | Z5 active but Z1 inactive | "Unusual given S2 FAST. Review Z1 intake data." |
| Floor violation | Zone below MAX(dampened nodes) - 10 | Provides computed floor value (D-37) |
| N6 dampening | Verifies N6 x 0.7 applied | Shows raw and dampened values |

### Domain 3: Evidence Chain Integrity (D3)

Cross-validates cascade stack activation against zone scores.

| Check | Rule | Source |
|-------|------|--------|
| Stack activation coherence | Stack firing requires both source and target zones above threshold | Definitional |
| Missing stack activation | Both zones above threshold but stack not firing | Warning |
| S6 direction | S6 only Z1 to Z3. Reverse does not exist. | ALB v1.5 |
| S4 DRD exclusion | S4 active but excluded from DRD cascade trace | D-12 |
| Orphaned DRD | DRD issued with < 2 active zones | Warning: limited clinical utility |
| TerrainLock S4 caveat | When TL active, S4 Theoretical caveat required | Architecture |

### Domain 4: DRD Coherence (D4)

Verifies DRD designation matches the actual highest-burden zone.

| Check | Rule | Source |
|-------|------|--------|
| DRD matches highest zone | DRD zone must have the highest internal score | D-10 |
| Z2 tiebreaker | When zones tie, Z2 is designated as DRD | ALB v1.5 |
| Z5 threshold distinction | Z5 uses threshold 32 (not 40) | ALB v1.5 |
| Correction output | When mismatch detected: "DRD corrected to [zone] (score [value]). Previous [zone] had score [value]." | D-10 |

### Domain 5: Governance Compliance (D5)

Confirms T-01 and W5 permanent rules are respected.

| Check | Rule | Source |
|-------|------|--------|
| T-01 output title | "Terrain Support Considerations" (not Protocol) | T-01 W5-1 |
| T-01 DRD display | "Highest burden zone" (not Driver) | T-01a |
| W5-3 protective header | Mandatory on every clinical output (PERMANENT) | W5-3 |
| W5-4 blank PCD | Practitioner Clinical Decision section blank, never pre-populated (PERMANENT) | W5-4 |

---

## API

### anchorVerify(zoneScores, nodeScores, activeStacks, drdZone)

**Parameters:**
- `zoneScores`: { Z1: int, Z2: int, Z3: int, Z4: int, Z5: int } (internal 0-100)
- `nodeScores`: { N1: int, ..., N7: int } or null (for structural checks only)
- `activeStacks`: ["S1", "S3", ...] array of active stack IDs
- `drdZone`: "Z2" etc. (current DRD designation)

**Returns:** Array of result objects:
```
{
  domain: "D1" | "D2" | "D3" | "D4" | "D5",
  check: string,      // human-readable check name
  status: "PASS" | "WARNING" | "FAIL" | "CORRECTED",
  detail: string,     // what was found
  correction: string | null  // evidence-based fix (null if PASS)
}
```

### anchorSummary(results)
Returns: `{ total, passed, warnings, fails, corrections }`

### anchorConsoleReport(results)
Outputs formatted report to browser console.

---

## Interactive UI (ANCHOROverlaySection)

**Tab:** anchor_overlay
**Background:** Cream (GENOME Handbook standard)

### Controls:
- 5 zone sliders (Z1-Z5, 0-100)
- DRD zone selector (5 buttons, one active)
- N6 raw score slider (shows dampened value)

### Display:
- Summary strip: 5 metric cards (Total, Passed, Warnings, Fails, Corrections)
- 5 collapsible domain panels (D1-D5), each showing per-check results
- Status icons: checkmark (pass), warning triangle (warning), cross (fail), gear (corrected)
- Corrections shown in italic with domain colour
- "Copy ANCHOR Report to Clipboard" button

### Interactive error testing:
- Set DRD to wrong zone: D4 detects and corrects
- Set all zones > 70: D2 flags uniform burden
- Set Z5 active without Z1: D2 flags S2 FAST anomaly
- Set a zone below floor: D2 computes and shows correct floor value

---

## Integration Points

### On mount (legacy compatibility)
`validateArchConstants()` now calls `anchorVerify(null, null, [], null)` and routes to `anchorConsoleReport()`. All existing call sites preserved.

### In FLINT pipeline (future)
When the practitioner app is built, `anchorVerify()` will be called after each FLINT layer completes, receiving the cumulative outputs. The results will populate the Session Governance Record (CZR).

### In DemoCaseBuilder
`anchorVerify()` can be called with the demo case zone scores to show verification in action during clinical walkthroughs.

---

## Compliance

- [x] Not a sixth FLINT layer (D-77, D-78)
- [x] Cross-cutting element only (D-78)
- [x] ANCHOR mnemonic (D-33, Tier 2)
- [x] All corrections trace to D-series decisions or ALB formulas
- [x] No AI inference, no generative content
- [x] T-01 compliant
- [x] W5-3 protective header present
- [x] W5-4 blank PCD acknowledged
- [x] ICO ZC101813 on export
- [x] British English throughout
- [x] No em dashes

---

*ANCHOR Cross-Cutting Overlay Spec | VitalMatrix Ltd | ICO ZC101813 | 8 May 2026*
*Dr Shahzad Faisal, MBBS, FAAMFM | ALB v1.5 | D-33, D-78, D-79 | T-01 Active*
