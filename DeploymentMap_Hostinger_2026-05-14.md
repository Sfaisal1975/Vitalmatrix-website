# VitalMatrix Hostinger Deployment Map
## 14 May 2026 | W05 Claude Code
## GATED: W08 written clearance required before deploy (D-87, D-86)

---

## Pre-deployment Gate Status

| Gate | Status | Action Required |
|------|--------|----------------|
| W08 written clearance | PENDING | Must be received before any file goes to Hostinger |
| MHRA SaMD classification | PENDING (D-86) | All T-01 restrictions remain active |
| FCA clearance (P5 Pricing) | PENDING | One email to [purged legal firm -- D-105] |
| Privacy page (P12) | PENDING | [purged legal firm -- D-105] clearance required |
| Homepage 12 corrections | PENDING | SA tribunal gate active |

## DO NOT DEPLOY until all gates above are cleared.

---

## File-to-URL Mapping (18 pages)

| URL Path | Source File | Background | Priority |
|----------|-----------|------------|----------|
| `/` (index) | Homepage_latest.html | Prussian Blue | P1 |
| `/how-it-works/` | HowItWorks_latest.html | Deep Teal | P2 |
| `/why-vitalmatrix/` | WhyVitalMatrix_latest.html | Prussian Blue | P3 |
| `/founding-practitioners/` | FoundingPractitioners_latest.html | Prussian Blue | P4 |
| `/pricing/` | Pricing_latest.html | Charcoal | P5 (FCA gate) |
| `/about/` | About_latest.html | Charcoal | P6 |
| `/book/` | BookWalkthrough_latest.html | Charcoal | P7 |
| `/our-approach/` | OurApproach_latest.html | Deep Teal | P8 |
| `/book-discovery/` | BookDiscoveryCall_latest.html | Prussian Blue | P9 |
| `/clinical-ethics/` | ClinicalEthics_latest.html | Deep Teal | P10 |
| `/terrain-intelligence/` | TerrainIntelligence_latest.html | Deep Teal | P11 |
| `/privacy/` | Privacy_P3_2026-05-02.html | Charcoal | P12 ([purged legal firm -- D-105]) |
| `/cascadeatlas/` | CascadeAtlas_latest.html | Prussian Blue | P13 (SA gate) |
| `/ncz-architecture/` | NCZArchitecture_latest.html | Deep Teal | P14 (SA gate) |
| `/trust/` | TrustSafety_latest.html | Prussian Blue | P15 |
| `/faq/` | FAQ_latest.html | Charcoal | P19 |
| `/contact/` | Contact_latest.html | Charcoal | P20 |
| `/cookies/` | CookiePolicy_latest.html | Charcoal | P21 |
| `/mission/` | Mission_latest.html | Prussian Blue | P9b |
| `/privacy/` | Privacy_latest.html | Charcoal | P12 ([purged legal firm -- D-105] gate) |
| `/cookies/` | CookiePolicy_latest.html | Charcoal | P21 |
| `/platform-demo/` | PlatformDemo_latest.html | Charcoal | P16 |
| `/lead-gen/` | LeadGenLandingPage_latest.html | Prussian Blue | P17 |

## Shared Assets (deploy to root)

| File | Purpose |
|------|---------|
| vm-award-tier2.css | Shared award enhancements CSS |
| vm-award-tier2.js | Shared award enhancements JS |
| vm-award-enhancements.css | Homepage-specific award CSS |
| vm-award-enhancements.js | Homepage-specific award JS |
| vm-phase1-design.css | Phase 1 design CSS |
| vm-phase1-design.js | Phase 1 design JS |
| vm-cta-crosslinks.css | CTA cross-links CSS |
| vm-cursor.js | Custom cursor JS |
| vm-mobile-experience.js | Mobile UX JS |
| vm-page-transitions.js | Page transition JS |
| vm-preloader.js | Preloader JS |
| vm-smooth-scroll.js | Smooth scroll JS |
| VM_Logo_1000_x_1000_px_png_New_Transparent.png | Logo (height="48") |
| hero-bg.jpg | Hero background |
| hero-bg.webp | Hero background (WebP) |
| hero-bg-v5.webp | Hero background v5 (WebP) |
| manifest.json | PWA manifest |
| sw.js | Service worker |
| robots.txt | Search engine directives |
| sitemap.xml | Sitemap for Google |

## DO NOT Deploy

| Folder/File | Reason |
|-------------|--------|
| la-files/ | Internal Living Architecture demos. Not public. |
| redundant_v2/ | Old versions. Archive only. |
| extracted_sections/ | Build artefacts. |
| sections/ | Build artefacts. |
| hub.html | Internal preview hub. Not public. |
| index.html | Internal preview index. Not public. |
| MasterSpecs_VitalMatrix_Website.md | Internal spec. |
| DeploymentMap_Hostinger_2026-05-14.md | This file. |
| _internal/ | Internal governance, routing briefs, session wraps. Gitignored (2026-08-03). |
| _routing/ | W05->W06 routing briefs. Gitignored (2026-08-03). |
| Reference/ | Session wraps and reference docs. Gitignored (2026-08-03). |

Note (2026-08-03): under Hostinger GitHub auto-pull the whole repo is served, so
the above are now enforced via .gitignore rather than a manual deploy exclusion.
A tracked `Reference/SessionWraps/*.txt` wrap had reached the live site (HTTP 200)
and was removed from origin in the same cleanup commit.

## Hostinger Configuration

- Domain: vitalmatrix.co.uk
- SSL: Force HTTPS (Hostinger auto-SSL)
- PHP: Not required (static HTML)
- .htaccess redirects needed:
  - Trailing slash enforcement
  - www to non-www redirect
  - 404 page (create or use Homepage)

## Post-Deploy Checklist

1. Verify all 18 pages load at correct URLs
2. Check logo renders at 48px on all pages
3. Check zone colours render correctly (Z5 = Deep Steel Blue #2E6DB4)
4. Test mobile nav hamburger on 3 pages
5. Verify Google Search Console sitemap submission
6. Verify ICO ZC101813 appears on every page footer
7. Verify MHRA governance line on every page footer
8. Test Book Demo CTA links on 3 pages
9. Check prefers-reduced-motion disables animations

---

*Deployment map produced by W05 Claude Code | 14 May 2026*
*GATED: W08 clearance required. Do not deploy without written confirmation.*
*VitalMatrix Ltd | ICO ZC101813*
