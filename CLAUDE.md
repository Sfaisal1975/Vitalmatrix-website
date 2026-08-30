# CLAUDE.md -- WEBSITE: Public Website (vitalmatrix_revamped)

@~/.claude/vitalmatrix-w05-global.md

---
PROJECT ROOT LABEL: Website
SHORTCUT: website
PATH: C:\Users\Lenovo\VitalMatrix\claudecode_context\vitalmatrix_revamped\
ALB: v1.6 (D-62)
NESTED REPO: this root is its own git repo (inside claudecode_context\). Commit and push HERE, not from the master root.
---

## Identity
- Public-facing website for VitalMatrix Ltd (HTML pages, design, SEO).
- Content type per master registry: Website HTML, design tokens, SEO.
- All routing of website HTML / design tokens / SEO work lands here (master CLAUDE.md routing table).
- British English throughout. No em dashes.

## Audience Tier and External-Deployment Gate
- This is EXTERNAL, public-facing output = Tier 2. Gate 1 (W08 Deployment) applies to all content before it goes live.
 - FCA financial promotion gate: ACTIVE (D-267, 14 June 2026, LOCKED). Frozen until W08 written clearance OR qualified
  FCA-authorised adviser sign-off (neither obtained). GBP 99/month may not appear in external written or public-facing
  content until then. When GBP 99 does appear, GBP 599 standard rate MUST display alongside every GBP 99 reference
  (D-241
  Clause 5).
  - Two separate communications, both FCA-gated, never conflate: (a) the practitioner subscription offer (gated per
  D-267 above); (b) any content inviting investment in VitalMatrix Ltd shares (SEIS/EIS, investor materials) is a
  separate communication and remains FCA-gated -- Section 21 FSMA applies in full there. Any confusion routes to SA
  immediately.
- Any investor-facing content routes through Gate 3 (SA) before release.

## Language and Claims Constraints (public site)
- Platform descriptor: D-235 "clinical intelligence platform" is the primary default; "terrain intelligence platform"
for regulatory / MHRA / DoC contexts (D-210); combined form where apt (D-235A). Never "clinical AI platform".
- Never claim clinical efficacy. Never use "clinically proven" or "scientifically proven".
- MHRA: DORS registered (D-314). Registration is NOT approval. Never state "MHRA approved".
- Credentials: MBBS, FAAMFM only (D-40). Never MD / FMAARM / ABAARM.
- T-01 language restrictions apply to all external-facing content. Evidence-tier and claim labels per the ALB.
- ASA CAP Code (non-broadcast) applies to all marketing copy.

## Design Constants
- Zone colours: Palette A (all non-GENOME outputs). Z5 = Deep Steel Blue #2E6DB4 (D-185). Warm Gold #D4B870 for Z5 is
superseded and wrong.
- All FLINT architecture / scoring / zone constants: authoritative in the ALB and master CLAUDE.md. This root does not
redefine them -- consult the ALB, never restate from memory.
- Web build standards (performance / accessibility / CSP / responsive) per the ECC web rules.

## Build Constraints
- W05 executes code only. If a specification is ambiguous or conflicts with existing code: STOP, flag to W06.
- No governance-document edits from this root. No architecture decisions (route to SA). No governing-prompt
modifications (route to W06).
- No patient data ever enters this or any root (K-MASTER-01).
- Nothing ships to the live site without Gate 1 (W08) clearance.

## "save" command
When user says "save" or "s":
1. List all files created or modified this session.
2. Stage and commit with a descriptive message IN THIS NESTED REPO.
3. Push to this repo's origin (not the master root's).
4. Produce a Standard Session Wrap file and update memory if state changed.

## "next" command
When user says "next":
1. Read memory for website-relevant tasks.
2. Show queue, ask which one.

---
VitalMatrix Ltd | ICO ZC101813 | Website root context | 30 August 2026 