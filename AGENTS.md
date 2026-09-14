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
