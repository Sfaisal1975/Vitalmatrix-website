# VitalMatrix Homepage Restructure Plan
## Date: 15 April 2026
## Status: APPROVED — Awaiting implementation confirmation

---

## CURRENT STATE
- File: S8_Homepage_2026-04-13.html
- Sections: 27
- Collapsibles: 8
- File size: 584KB
- Features: 222

## TARGET STATE
- Homepage: 11 sections, ~300KB
- How It Works page: receives 6 sections + 4 collapsibles
- Platform Demo page (NEW): receives 5 sections + 5 collapsibles + new "Paste Your Consultation" feature
- P4 Founding Practitioners page: already receives Commitments + Founding cohorts (done in session)
- Existing pages: receive 4 sections

---

## PART 1: SECTIONS STAYING ON HOMEPAGE (11)

### 1. Hero
- Position: First
- Content: Cinematic hero image, cascade atlas background, heading, CTAs, VOS box
- No changes

### 2. Who VitalMatrix Serves (section-06)
- Position: Second (below hero)
- Content: 3 cards (FM Practitioners, Complex Case, Building Scale) with animated SVG visuals
- No changes

### 3. Is This Your Practice (personas)
- Position: Third
- Content: 3 persona cards (Solo, Complex Case Specialist, Growing Clinic Founder) + quiz CTA
- No changes

### 4. The Practice Problem
- Position: Fourth
- Content: 3 constraint cards (Workaround, Hidden Cost, Ceiling) on light teal background
- No changes

### 5. Founder and Clinical Quote (merged)
- Position: Fifth
- Content: Dr Faisal monogram, credentials, combined quote
- CHANGE: Absorb the "Platform statement" section text ("It removes everything...") into this section as a third paragraph
- Platform statement section (current #16) is then removed

### 6. Before and After Comparison
- Position: Sixth
- Content: Without/With VitalMatrix terminal comparison
- No changes

### 7. Platform Outputs (section-02)
- Position: Seventh
- Content: 5 output cards, FLINT pipeline timeline
- CHANGE: Remove all collapsible triggers below it (walkthrough, scroll demo, terrain demo, platform preview)
- ADD: Single CTA "Try the Platform Demo →" linking to new demo page
- The 5 output cards and pipeline timeline stay

### 8. Clinical Authority Guarantee
- Position: Eighth
- Content: Guarantee block with sage border
- No changes

### 9. Founding CTA (section-05, the slim version)
- Position: Ninth
- Content: "10 founding positions. Five-year rate lock." + 10 pulsing slots + CTAs
- CHANGE: CTA text "Explore Founding Programme" links to /founding-practitioners/ (P4)
- No changes to content

### 10. Next Steps (section-08)
- Position: Tenth
- Content: 3 cards (Book Walkthrough, See How It Works, Apply for Access)
- CHANGE: "See How It Works" card links to How It Works page
- No other changes

### 11. FAQ
- Position: Eleventh (last before footer)
- Content: 6 questions
- No changes

---

## PART 2: SECTIONS MOVING TO "HOW IT WORKS" PAGE (6 sections + 4 collapsibles)

These sections should be extracted and saved. They will be built into the How It Works page in a future session.

### Sections to extract:
1. **The Infrastructure Gap** (section-01) — lines around 3510
   - 4 cards: Documentation Gap, AI Limitation, Consistency Challenge, Scalability Barrier

2. **The Architecture** (FLINT hexagon explorer) — inside collapse-arch
   - 5 clickable hexagons, expandable detail panels, "Copy Summary" button
   - Collapsible trigger: "The FLINT architecture"

3. **Interactive Zone Map** — inside collapse-pentagon
   - Pentagon SVG with clickable zones, detail panel
   - Collapsible trigger: "Explore the five-zone pentagon map"

4. **From Workaround to Infrastructure** (section-03) — inside collapse-shift
   - 5 before/after rows (light teal / dark teal alternating)
   - Collapsible trigger: "From workaround to infrastructure"

5. **Clinical Philosophy** (section-04)
   - 4 principle cards: Terrain not targets, Direction not description, Sequence not simultaneity, Governance not autonomy

6. **Architecture by the Numbers** — inside collapse-numbers
   - 5 FLINT Layers, 7 Biological Nodes, 6 Cascade Stacks, 30 Branded Mnemonics
   - Collapsible trigger: "Architecture by the numbers"

### Also moves to How It Works:
- Architecture fact strip ticker (between architecture and philosophy)
- Gradient bridges between these sections

---

## PART 3: SECTIONS MOVING TO NEW "PLATFORM DEMO" PAGE (5 sections + 5 collapsibles)

These sections should be extracted and saved. They will form a new dedicated demo page.

### Sections to extract:
1. **Architecture Blueprint** (animated SVG) — inside collapse-blueprint
   - Full system schematic: 7 Nodes → 5 Zones → 6 Cascades → DRD → 5 Outputs
   - Collapsible trigger: "View the full architecture blueprint"

2. **Animated Walkthrough** (4-scene auto-play) — inside collapse-walkthrough
   - Scenes: Intake → Zone Scoring → DRD → Outputs
   - Collapsible trigger: "Watch it work: the full pipeline"

3. **Scroll-Driven Pipeline Demo** (viewport-locked) — inside collapse-scroll-demo
   - 400vh sticky scroll-through demo
   - Collapsible trigger: "Scroll through the pipeline: intake to outputs"

4. **Interactive Terrain Demo** (symptom selector + case parser) — inside collapse-terrain-demo
   - 15 symptom chips, free-text case parser, terminal output
   - Collapsible trigger: "Try it: interactive terrain demo"

5. **Platform Preview** (zone score bars) — inside collapse-platform-preview
   - Split view: 5 output descriptions + simulated zone score bars
   - Collapsible trigger: "See it in action: one intake, five outputs"

### NEW feature for this page:
- **"Paste Your Consultation. See It Transformed."** — the top feature
- Should be the HERO of the demo page, not a collapsible
- Practitioner pastes consultation notes → sees 5 output format previews

---

## PART 4: SECTIONS MOVING TO EXISTING PAGES (4 sections)

### 1. The Practitioner Experience (pentagon + 3 steps)
- Destination: How It Works page OR About page
- Content: Five-zone pentagon SVG, "Enter data → Review outputs → Approve" steps, stat badge

### 2. Security and Governance (trust wall, 6 cards)
- Destination: Trust & Safety page (/trust-safety/)
- Content: ICO, No Third-Party Sharing, No Model Training, Practitioner Authority, Audit Trail, GDPR
- Homepage already has the proof strip and inline guarantee — the full trust wall is detail

### 3. Email Notification Signup (Phase 2)
- Destination: Footer component on ALL pages
- Content: "Get notified when Phase 2 launches" + email input
- Should be a footer element, not a dedicated section

### 4. Platform Capabilities (horizontal scroll carousel)
- Destination: How It Works page
- Content: 10 branded engine cards (FLINT, NCZ, DRD, CascadeIQ, RECON, COMPASS, ANCHOR, MedTerrain, TerrainLock, AXIS)

---

## PART 5: SECTIONS REMOVED (1 section)

### 1. Platform Statement
- Current content: "It removes everything that was getting in the way of it."
- Action: Absorb this line into the Founder Quote section as a closing paragraph
- The full section wrapper is removed — the text survives inside the founder block

---

## PART 6: ELEMENTS THAT STAY ON ALL PAGES (shared components)

These are NOT section-specific. They remain on the homepage AND should be replicated on other pages:

1. **Proof strip** (ICO, Phase 1, UK Practice, 10 Slots, UK Data Residency)
2. **Status strip** (Pipeline Operational, Tests 121/121, API Connected, Gates)
3. **Mnemonic ticker** (branded capability names)
4. **Stat strip** (26 years, FM Compatible, 5 Zone Architecture)
5. **Glassmorphism nav bar** (floating pill with links)
6. **Chatbot widget** (API-connected with keyword fallback)
7. **Floating CTA** ("Book a Walkthrough" with scroll-aware text)
8. **Back to top button**
9. **Footer** (links, governance, TM text, performance badge)
10. **Keyboard shortcuts panel**
11. **Session summary panel**
12. **All analytics features** (scroll depth, CTA tracking, etc.)

---

## PART 7: RESULTING HOMEPAGE FLOW

```
HERO (cinematic, cascade atlas, CTAs)
  ↓
WHO VITALMATRIX SERVES (3 cards)
  ↓
IS THIS YOUR PRACTICE (3 personas + quiz CTA)
  ↓
THE PRACTICE PROBLEM (3 constraints)
  ↓
FOUNDER QUOTE (Dr Faisal + merged statement)
  ↓
BEFORE AND AFTER (terminal comparison)
  ↓
PLATFORM OUTPUTS (5 cards + pipeline + "Try Demo →" CTA)
  ↓
CLINICAL AUTHORITY GUARANTEE
  ↓
FOUNDING CTA (10 slots + "Explore Programme →")
  ↓
NEXT STEPS (Book / How It Works / Apply)
  ↓
FAQ (6 questions)
  ↓
FOOTER
```

## PART 8: NEW PAGE STRUCTURE

### How It Works page receives:
- Infrastructure Gap (4 cards)
- FLINT Architecture (hexagon explorer)
- Zone Map (interactive pentagon)
- From Workaround to Infrastructure (5 rows)
- Clinical Philosophy (4 principles)
- Architecture by the Numbers (stats)
- The Practitioner Experience (pentagon + steps)
- Platform Capabilities (horizontal carousel)
- Architecture fact strip

### Platform Demo page (NEW) receives:
- "Paste Your Consultation" (NEW hero feature)
- Architecture Blueprint (animated SVG)
- Animated Walkthrough (4-scene)
- Scroll-Driven Pipeline Demo
- Interactive Terrain Demo (symptom chips + case parser)
- Platform Preview (zone score bars)

### P4 Founding Practitioners page receives (already moved):
- Commitments (5 commitments detail)
- Founding Cohorts (Cohort A + B detail)
- Eligibility Validator
- Countdown with slots
- Value anchor (cost per consultation)
- Booking transparency (3 steps)
- Integration roadmap (3 phases)
- Urgency section

### Trust & Safety page receives:
- Security & Governance trust wall (6 cards)

### All pages receive (footer):
- Email notification signup (Phase 2)

---

## IMPLEMENTATION NOTES

1. BEFORE removing any section from the homepage, save it to a separate file
   so the content is preserved for the destination page build
2. The homepage JS features that reference moved sections will need updating
   (section indicator dots, TOC links, scroll tracking, etc.)
3. Analytics features should continue tracking on the homepage with reduced
   section count — update the section counter total
4. The collapsible memory (Feature 215) localStorage keys will need updating
   if collapsible IDs change
5. The enrolment manager (VM_ENROLLED_COUNT) stays on the homepage founding CTA

---

## ESTIMATED IMPACT

| Metric | Before | After |
|--------|--------|-------|
| Sections | 27 | 11 |
| Collapsibles | 8 | 0 |
| File size | 584KB | ~250KB (estimated) |
| Scroll depth to CTA | 12+ sections | 6 sections |
| Time to founding CTA | ~90s scroll | ~30s scroll |
| First meaningful paint | ~584KB parse | ~250KB parse |

---

VitalMatrix Ltd 2026 | ICO ZC101813
Prepared by W05 Claude Code | 15 April 2026
Approved by: [Awaiting Dr Faisal confirmation]
