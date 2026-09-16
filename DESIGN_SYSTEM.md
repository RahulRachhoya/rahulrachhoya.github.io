# Portfolio design system

## Direction

An editorial AI engineering portfolio with a clear hierarchy: introduction, selected work, about, experience, toolkit, and contact.

## Foundations

- Page: `#f7f8f2`; alternate sections: `#eef0e7`.
- Primary text: `#202822`; secondary text: `#656d63`.
- Deep green: `#233d32`; lime accent: `#d7f49a`.
- Typography: Manrope for content; DM Mono for small labels.
- Content width: 1220px maximum, with responsive gutters.
- Cards: 7–18px corner radii, restrained borders, original SVG/CSS illustrations.

## Components

The hero workflow switcher explains Voice AI, RAG, and agent workflows. Project filters show the existing four projects by category. Native details controls expose project overviews and work history. Skills use categorized tags. The contact panel offers email, email copying, GitHub, and LinkedIn.

## Responsive and accessible behavior

- Two project columns on desktop, one on small screens.
- Four skill columns on wide screens, two on tablets, one on phones.
- Mobile navigation has an expanded state, Escape dismissal, and focus return.
- A skip link, visible focus indicators, landmark sections, and semantic headings support keyboard navigation.
- Reduced-motion preferences disable smooth scrolling and transitions.
- Tested viewport widths: 320, 390, 768, 1024, and 1440 pixels.

## Content boundaries

This release redesigns the existing portfolio. It adds no new projects or outcome metrics. Graphics are conceptual illustrations; they are not product screenshots or live analytics. Project selection will happen separately.
