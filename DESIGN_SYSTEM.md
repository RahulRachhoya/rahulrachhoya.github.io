# Portfolio design system

Reading this as an AI engineering portfolio for hiring teams, with confident
sans-serif typography and a restrained green palette. A visual overhaul of the
existing React/Vite site, retaining its URL, section anchors, navigation labels,
wordmark, contact workflow, employment record, and custom domain.

## Taste configuration

- DESIGN_VARIANCE: 6. Asymmetric hero; two-column project collection; split about;
  horizontal experience rows; four-part toolkit; full-width contact panel.
- MOTION_INTENSITY: 5. Hero sequence establishes hierarchy. IntersectionObserver
  reveals introduce sections. Buttons respond on hover and press. No scroll
  interception, perpetual decoration, or React scroll-state updates.
- VISUAL_DENSITY: 4. Short project introductions with native case-study disclosures.
- Foundation: existing React + native CSS, Phosphor icons, self-hosted Geist and
  Geist Mono. No design-system imitation or framework migration.

## Audit and changes

The prior site used Manrope, green/lime, conceptual workflow diagrams, three
employer project cards, a contact dialog, and one-page anchors. It lacked direct
repository links per project and the four new public projects. Google Fonts were
external, the theme metadata disagreed with the light design, and JSON-LD declared
an unsupported search action. New content is based on the four GitHub READMEs and
recorded result files. The research image is an actual recorded local demo.

## Tokens and interaction

- Light: page #f6f8f3, surface #eef2e9, text #202a23, accent #315d3e.
- Dark: page #141b17, surface #1e2a22, text #e7eee4, accent #b1d9a5.
- Radius: containers 18px, controls 8px, internal chart bars/tags 4-5px.
- Layers: header 10, skip link 20, native top-layer dialog.
- Default theme follows the system; Auto/Light/Dark selection persists locally.
- Original anchor IDs are preserved. Main project categories filter four repos.
- Charts use saved benchmark data and link to evidence. No fabricated activity,
  star counts, throughput, or live status. The research agent is the sole live demo.
- Native disclosures retain keyboard support. Contact has Gmail, Outlook, mailto,
  clipboard fallback, Escape dismissal, and trigger focus return.
- All motion honors reduced motion. Mobile navigation collapses below 768px.

## Evidence and limits

Source content was checked against GitHub on 28 September 2026. Local README blob
hashes matched the published repositories. Benchmark sample sizes, one-GPU scope,
RRF tie variation, and the public/local agent-provider difference are explicit.
Professional results remain in experience. See src/projects.js for case studies.
