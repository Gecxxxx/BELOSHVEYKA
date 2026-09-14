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
