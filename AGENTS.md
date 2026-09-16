# Prototype Instructions

## Beloshveyka decisions

- B2B contract garment production, not a shop. No cart, stock or checkout.
- Approved industrial black / off-white / safety-yellow direction. See design-decisions.md.
- User explicitly requested thinner text everywhere: body and headings 400, buttons/wordmark at most 500.
- Directions section: information on the left, photograph on the right on desktop.
- Omit the separate production block. Retain reviews, linking original Avito reviews rather than inventing quotes.
- Do not fabricate company contacts, completed projects or production metrics. Generated imagery is illustrative.
- The user explicitly authorized pushing this first version to main.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Confirmed version 2 scope (2026-09-14)
- Target companies and clothing brands; accept small/large, one-off/recurring orders after project assessment.
- 1000 units was a capacity reference, NOT a minimum order. Exact capacity and minimum remain unconfirmed: publish neither figure.
- Assess varied garment complexity; do not restrict the business to simple cuts.
- Customer-supplied materials or sourcing by agreement. Customers may start with an idea; determine preparation/sample scope individually.
- Individual pricing, timing, payment and delivery. Quality checks during production and for every finished garment.
- Branding applies to our production and customer-provided garments. Techniques and marking scope remain unconfirmed.
- Real photos/reviews exist but have not been supplied here. Keep current imagery explicitly illustrative; do not invent case studies.
- Website/email enquiries are intended; Telegram bot later. Contacts and legal details await confirmation. Keep the current brief preparation honestly local until delivery is connected.
- User explicitly authorized version 2 implementation and push to main.

## Confirmed version 3 scope (2026-09-16; overrides earlier scope where different)
- The user approved catalog/product pages alongside custom sewing, branding, services, projects/reviews, ordering and contacts. No cart or payment gateway is requested.
- Assortment orders start at 10 units; non-assortment sewing starts at 200 units total. Do not invent per-model/color/size aggregation rules.
- 100% prepayment by invoice or cash through the individual entrepreneur. Assortment lead time: up to 3 working days; confirm its start and scope individually. Other sewing is quoted after reviewing all available specifications.
- Pickup only, from production/warehouse at Lipkinskoye shosse, s27/L. Public phone: +7 (916) 237-15-59 only. Do not use old certificate phones as sales contacts or invent opening hours.
- Urgent warehouse orders with branding: +20% to the invoice, same-day dispatch subject to manager agreement. No invented order cutoff.
- T-shirts and footwear are bought-in. Signal vests include bought-in and own production; exact SKU origin is unconfirmed. Remaining catalog products are own production.
- Prices come from the existing shop, confirmed current by the client. Stock must always be confirmed. Footwear volume discounts are individually quoted.
- Real photos from the user-provided Yandex Disk are approved for use. Optimize selected images to local WebP and retain provenance in docs/photo-manifest.json. Product photos alone are not completed client case studies.
- Supplied certificate covers only specified cotton first-layer knitwear marked Beloshveyka. Do not use it as certification of the entire stock, protective workwear or third-party garments.
- The current order brief remains local, with explicit manual email/Avito handoff. No server recipient credentials were supplied; do not fake submission, file upload or success states. Telegram integration remains later.
- Version 3 implementation and push to GitHub are explicitly authorized. Keep the approved thin typography and industrial black/off-white/yellow style.

## Visual refinement after v3 (2026-09-16)
- User requests natural poses, selectively removed backgrounds/people, dark and light photographs that match their sections. Built-in ImageGen edits are allowed. Keep original catalog photos, use edited versions only in editorial blocks and record provenance.
- Quiet typography: Manrope 400 for sentence-case headings, smaller display sizes, restrained accents; Oswald remains only in the wordmark. No dense uppercase display text.
- Exactly eight primary pages: home, available clothing, custom sewing, logo application, services, cases/reviews, ordering, contacts. Home is reached through the brand; other seven must be in navigation. Supporting product/category/document routes remain.
- The requested photo brief is maintained in docs/photo-brief.md. Do not invent real production scenes, branding methods, client stories or opening hours.
- Do not repeat the model photo between homepage Conditions and Directions. Directions opens with the garment-only blue vest composition; Conditions retains the black/lime workwear model.

## Version 4 photography (2026-09-16)
- User requests varied, logically assigned imagery throughout the site; new AI illustrations in the established style are authorized, as is pushing the next version.
- `src/visuals.js` owns explicit page, service, category and gallery image choices. Never restore a shared default model in PageHero or Photo.
- All five Directions tabs have different images; homepage Conditions keeps its own image. Service galleries must match their service, not inherit the workwear gallery.
- New concept still lifes are labeled AI illustrations. They do not establish completed orders, actual equipment, branding techniques or a photographed facility. Utility pages may have text-only heroes.
- Preserve smaller, quiet typography and all confirmed v3 commercial conditions.

- Homepage assortment preview: frame all four models consistently from head to upper thighs. Enlarge/crop original full-length photos for product IDs 325 and 351 in this block; preserve full product views in the catalog and product galleries.
