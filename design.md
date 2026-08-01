NOT YET AUTHORITATIVE. Pending W09 Brand Review sign-off. Until signed off, this file records observed and locked values only and does not override any live implementation.

# VitalMatrix Website Design Reference

Status: DRAFT. Documentation only. This file records what is currently in the codebase and what is governed by locked decisions. It does not change any CSS, HTML, or component, and it is not a source of truth until W09 Brand Review signs it off.

Authority pointers: ALB v1.6 (D-62). Zone colour locks D-185 and D-248. Descriptor and architecture constants per the governing prompt. British English. No em dashes.

---

## 1. Locked design system

Recorded as CSS custom properties with the `--vm-` prefix. These are the values named in the brief as the locked design system. Where a page currently declares a different or additional value inline, that divergence is recorded in sections 4 and 5, not here.

```css
:root {
  /* Backgrounds */
  --vm-prussian:   #0D2B4E;  /* Prussian Blue */
  --vm-charcoal:   #1A2030;  /* Charcoal */
  --vm-deep-teal:  #0C4452;  /* Deep Teal */

  /* Accents */
  --vm-gold:       #C9A84C;  /* Gold */
  --vm-teal:       #1A7A8A;  /* Teal */
  --vm-teal-l:     #2A9BAD;  /* Teal Light */
}
```

Typography:

- Headings: Cormorant Garamond
- Body: Outfit
- Data labels: DM Mono

---

## 2. Zone colours (Palette A)

| Zone | Name | Colour | Hex |
|------|------|--------|-----|
| Z1 | Metabolic Energy Axis | Gold | #C9A84C |
| Z2 | Resilience Network | Teal | #1A7A8A |
| Z3 | Cardiovascular-Neural Axis | Purple | #7B5EA7 |
| Z4 | Detoxification Trident | Sage | #5F7C6C |
| Z5 | Hormonal Terrain Axis | Deep Steel Blue | #2E6DB4 |

Z5 lock (D-248, 06 June 2026): Z5 Hormonal Terrain Axis is Deep Steel Blue #2E6DB4 in BOTH Palette A and Palette B. Any other Z5 value is a kill-level defect from that date. This reinforces D-185 (Z5 = Deep Steel Blue #2E6DB4; Warm Gold #D4B870 superseded and wrong).

Note: Z1 and Z5 both being non-decorative locked values, Z1 remains Gold #C9A84C. Gold #C9A84C used as Z1 or as a general accent is correct and is not a Z5 defect.

```css
:root {
  --vm-z1: #C9A84C;
  --vm-z2: #1A7A8A;
  --vm-z3: #7B5EA7;
  --vm-z4: #5F7C6C;
  --vm-z5: #2E6DB4;
}
```

---

## 3. Luma text hierarchy scale

Recorded exactly as found in `vm-phase1-design.css` lines 9-16 (the only `:root` block in that file). This scale breaches the `--vm-` prefix convention; that is recorded in gaps (section 5), not corrected here.

```css
:root {
  --luma-95: rgba(244,244,242,0.95);
  --luma-85: rgba(244,244,242,0.85);
  --luma-65: rgba(244,244,242,0.65);
  --luma-45: rgba(244,244,242,0.45);
  --luma-25: rgba(244,244,242,0.25);
  --luma-12: rgba(244,244,242,0.12);
}
```

---

## 4. Per-page inventory (eleven live pages)

Palette values currently declared inline on each live page, rather than inherited from a shared stylesheet. Recorded as found. Not consolidated. Line numbers are the inline `:root` / style-block declarations observed at time of writing.

### index.html (:50-53, :2514)
Full zone set present.
- Backgrounds: prussian #0D2B4E, charcoal #1A2030, deep-teal #0C4452, navy-d #071C33
- Accents: gold #C9A84C, gold-l #C9A84C, teal #1A7A8A, teal-l #2A9BAD, white #F4F4F2
- Zones: z1 #C9A84C, z2 #1A7A8A, z3 #7B5EA7, z4 #5F7C6C, z5 #2E6DB4
- :2514 accent #C9A84C, accent-glow rgba(201,168,76,0.15)

### HowItWorks_latest.html (:121-134, :2893)
Full zone set present.
- Backgrounds: prussian, charcoal, deep-teal, navy-d #071C33
- Accents: gold #C9A84C, gold-l #C9A84C, teal, teal-l, white
- Zones: z1, z2, z3, z4, z5 #2E6DB4
- :2893 la3-root full zone set + teal-light #2A9BAD

### TerrainIntelligence_latest.html (:47-54)
Has z5 but NOT z1-z4.
- Backgrounds: prussian, charcoal, deep-teal, charcoal-deep #111820, charcoal-mid #232B3E, prussian-light #153A62, navy-d, navy-m #0F3460, teal-deepest #07303D, teal-mid #125A6E, sage-dark #2D4438
- Accents: teal, teal-l, gold #C9A84C
- Zones: z5 #2E6DB4 (z1-z4 absent)
- Other: sage, purple, white, text/text-s/text-t, brd-gold, brd-white

### About_latest.html (:32-60)
No z1-z5 tokens. Z5's value routed through a misnamed gold-w token.
- Full background variants
- Accents: gold #C9A84C, gold-w #2E6DB4 (Z5 value carried on a "gold" token), gold-d #A8873A
- Other: sage, purple, white, text/text-s/text-t, brd-gold/brd-white, surface-1/surface-2

### Pricing_latest.html (:33-61)
No z tokens. Same structure as About.
- gold #C9A84C, gold-w #2E6DB4

### FoundingPractitioners_latest.html (:45-54)
No z tokens.
- Backgrounds: prussian, charcoal, deep-teal, navy-footer #071C33
- Accents: teal, teal-l, gold #C9A84C, gold-w #2E6DB4
- Other: sage, purple, white, off-white #F7F8FA, beige #F5F0E8, text/text-s/text-t, brd-gold, brd-white rgba(...0.12), surface-glass

### OurApproach_latest.html (:32-78)
No z tokens.
- Full background variants incl teal-deepest #07303D, teal-mid #125A6E, sage-deep #3D5245
- Accents: gold #C9A84C, gold-w #2E6DB4, gold-d

### FAQ_latest.html (:32-41)
No z tokens.
- Full background variants incl navy-s #1A3A5C
- Accents: gold #C9A84C, gold-d #A8873A, gold-l #C9A84C, gold-w #2E6DB4

### Contact_latest.html (:34-56)
No z tokens.
- Full background variants
- Accents: gold #C9A84C, gold-w #2E6DB4

### privacy-policy.html (:44-53)
Minimal palette. No teal, no z tokens. Uses "cream" not "white".
- prussian, charcoal, navy #071C33
- gold #C9A84C, gold-dim rgba(201,168,76,0.15)
- cream #F4F4F2, cream-dim rgba(244,244,242,0.65), cream-muted rgba(244,244,242,0.4)
- card-border rgba(255,255,255,0.09), card-hover

### terms-and-conditions.html (:44-52)
Minimal palette, matches privacy-policy.
- prussian, charcoal, navy #071C33
- gold #C9A84C, gold-dim rgba(201,168,76,0.15)
- cream #F4F4F2, cream-dim rgba(244,244,242,0.65), cream-muted rgba(244,244,242,0.4)
- card-border

---

## 5. Gaps

Tokens that vary between pages, and values present in the codebase but absent from the locked list in sections 1-3. No token is invented here. Values with no ruling behind them are marked UNREGISTERED.

### 5a. Structural inconsistencies (varying tokens)

- Zone tokens are declared on only 3 of 11 live pages (index, HowItWorks full; TerrainIntelligence z5 only). The other 8 pages carry no z1-z5 tokens.
- On 6 pages (About, Pricing, FoundingPractitioners, OurApproach, FAQ, Contact) the Z5 value #2E6DB4 is carried on a token named `--vm-gold-w`. The name says gold; the value is Deep Steel Blue. This is a naming defect: the token name and its value disagree. It resolves correctly at render time but is misleading and fragile.
- `--vm-gold-l` is declared as #C9A84C on index, HowItWorks, and FAQ, i.e. identical to `--vm-gold`. A "light gold" token duplicating the base gold value.
- White vs cream: 9 pages use `--vm-white` #F4F4F2; the 2 legal pages (privacy-policy, terms) use `--vm-cream` #F4F4F2 with a separate cream-dim / cream-muted opacity family instead of the luma scale.
- The `--luma-*` opacity scale (section 3) breaches the `--vm-` prefix convention. Recorded, not corrected.

### 5b. UNREGISTERED values (present in codebase, no ruling located)

Background variants:
- navy-d #071C33
- navy-m #0F3460
- navy-s #1A3A5C
- navy-footer #071C33
- navy #071C33 (legal pages)
- charcoal-deep #111820
- charcoal-mid #232B3E
- prussian-light #153A62
- teal-deepest #07303D
- teal-mid #125A6E
- sage-dark #2D4438
- sage-deep #3D5245

Accent / surface variants:
- gold-l #C9A84C (duplicate of gold)
- gold-w #2E6DB4 (misnamed carrier of the Z5 value)
- gold-d #A8873A
- gold-dim rgba(201,168,76,0.15)
- accent-glow rgba(201,168,76,0.15)
- teal-light #2A9BAD (duplicate of teal-l)
- off-white #F7F8FA
- beige #F5F0E8
- cream-dim rgba(244,244,242,0.65)
- cream-muted rgba(244,244,242,0.4)
- surface-1, surface-2, surface-glass, card-border rgba(255,255,255,0.09), card-hover, brd-gold, brd-white

Values in vm-phase1-design.css absent from this file:
- --vm-gold-l #E8C96A (line 104) — note this is a DIFFERENT value from the inline gold-l #C9A84C on the pages; the same token name carries two different hex values in different files. UNREGISTERED and conflicting.
- --vm-navy-d #071C33 (line 522)
- decorative #4A90C4 in CTA conic-gradient (lines 705, 723) — decorative, not a Z5 value; UNREGISTERED as a palette token.

Note on #4A90C4: this Metallic Blue appears in no palette, current or superseded. It was previously mis-documented as the `--vm-z5` value in MasterSpecs and has been corrected to #2E6DB4 per D-248. Its remaining occurrences are decorative gradient stops only.

---

VitalMatrix Ltd | ICO ZC101813 | Documentation draft | Deferred to W09 Brand Review
