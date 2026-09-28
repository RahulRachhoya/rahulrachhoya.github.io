# Rahul Rachhoya's portfolio

Live at https://rahulrachhoya.is-a.dev/.

React + Vite, native CSS, self-hosted Geist fonts, and Phosphor icons. Redesigned
with Leonxlnx/taste-skill. Four public AI projects have direct GitHub links,
recorded results, expandable case studies, and explicit benchmark limitations.

## Local development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Content

- `src/projects.js`: curated project descriptions, source links, evidence, and limits.
- `src/Portfolio.jsx`: page, interactive charts, project filters, contact, and themes.
- `src/portfolio.css`: shared light/dark tokens and responsive layout.
- `public/images/research-agent.webp`: cropped screenshot of the actual local demo.
- `public/rahulrachhoya-resume.pdf` and `public/resume.pdf`: current résumé aliases.
- `DESIGN_SYSTEM.md`: design direction, tokens, accessibility, and content decisions.

The public demo runs Groq; the recorded local agent uses Claude on Bedrock.
Other projects are reproducible local experiments, not hosted services.

## Deployment

GitHub Actions builds and deploys `master` to GitHub Pages. `public/CNAME` preserves
the custom domain. No API keys or secrets are needed by the portfolio. Theme choice
is stored locally in the browser; the site has no analytics or contact-form backend.
