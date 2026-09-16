# First-version QA

## Verified

- Production build: 14 prerendered routes, including 404.
- Three application tests: all routes, metadata, internal links/anchors and service assets pass.
- Four provided packaging/worker tests pass.
- Desktop browser: hero checked against approved industrial composition; no horizontal overflow at 1363px.
- Responsive browser iframe inspection: 390px home and 768px conditions page. Headings, CTAs and mobile navigation fit the inspected screens. Mobile menu opens and reports aria-expanded=true.
- Direction selector and FAQ expanded state work.
- Form: short phone rejected; valid local test input produces an explicit prepared-but-not-sent result. No external message or form submission performed.
- Browser error log contained extension metadata errors, not application exceptions in the inspected sample.

## Intentional differences from generated references

- User-requested 400-weight typography, 500 maximum for controls/wordmark.
- Fresh illustrative assets; not photographs of the actual business. Wordmark simplified to editable text.
- Unverified telephone and fabricated review quotes omitted. Reviews link to the supplied Avito profile.
- Minimum quantity follows the supplied description; discrepancy with the listing title is documented in README.
- Form explicitly limited to local brief preparation until a real receiver is configured.

## Remaining verification / launch requirements

- Full-page browser capture timed out; inspection used viewport screenshots and DOM checks instead. This is not a claim of pixel-perfect equivalence across all reference blocks.
- File selection/download and physical mobile-device testing were not completed.
- Confirm actual photos, review texts, minimum order, contacts and legal policy before production. Enable indexing only after launch review.
- No production deployment is implied by the GitHub push.

## Request widget — 2026-09-16

Source: /workspace/scratch/21fbeaa91fe2/generated_images/exec-d5ce6ea4-eb4b-428c-be73-a57af295f5d4.png (1254×1254 presentation mock).
Browser implementation: /workspace/scratch/widget-desktop-final.jpg (1363×936 desktop viewport), /workspace/scratch/widget-responsive.jpg (390×844 and 834×844 embedded browser viewports).
Full comparison: /workspace/scratch/21fbeaa91fe2/comparison.jpg. Focused comparison: /workspace/scratch/21fbeaa91fe2/widget-detail.jpg.
The mock is an enlarged component presentation, not the current homepage. Only the selected widget is in scope. Normalize to its specified 52 CSS pixels on desktop/tablet and 48 on phone; background imagery/layout is deliberately preserved. Hover tooltip compared in both source and implementation.

Required surfaces: existing Manrope 400, 13px tooltip; 4px corners, 24px desktop and 16px phone offsets; safety yellow #ffda18 and charcoal icon/tooltip; sharp Phosphor NotePencil vector icon from the existing library, no new raster assets; exact accessible name and tooltip “Оставить заявку”. The library pencil/note differs slightly from the generated glyph intentionally. Tooltip uses a plain rectangle, consistent with existing controls.

History: initial desktop capture found overlap with footer legal links (P2). Added 88px bottom reservation, preserving all links; post-fix CSS and browser rendering reviewed. Other backgrounds and sizes checked in the responsive capture. No remaining actionable P0/P1/P2 issues.

Interactions: desktop click and Enter focus/scroll to the same-page request section; mobile click reaches the local form; tablet catalog fallback opens the ordering page at the form. Hover tooltip visible; stable fixed button inside both responsive frames. Existing form delivery behavior is untouched. Browser console contained extension metadata errors, no observed application error. Build, six site checks and four worker checks passed. Touch hardware and OS safe-area behavior remain CSS-based, not physical-device tested.

final result: passed
