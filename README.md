# Rahul Rachhoya — AI engineering portfolio

Personal portfolio at **https://rahulrachhoya.is-a.dev/**, built with React and Vite.

The September 2026 UI refresh uses ivory surfaces, deep green, lime accents, Manrope typography, and original CSS/SVG illustrations. Three featured projects remain after removing the outdated fine-tuning project; additional GitHub projects await Rahul's selection.

## Run and verify

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Editing

- `src/Portfolio.jsx`: page sections, project/experience/skill data, workflow switcher, filters, and contact links.
- `src/portfolio.css`: design tokens, layout, mobile navigation, responsive styles, and reduced-motion support.
- `src/App.jsx` and `src/main.jsx`: application entry points.
- `public/`: résumé, custom domain, search metadata, and existing public assets.
- `index.html`: existing SEO and structured data.

Project overviews and experience entries use native disclosure controls. Navigation supports keyboard focus and Escape to close the mobile menu. Both contact buttons open a keyboard-accessible dialog with Gmail, Outlook, and default email-app choices on desktop and mobile. Gmail and Outlook open browser tabs; the email-app choice requires a configured mail handler. The copy button uses the browser clipboard API and offers manual copying if unavailable. No contact form submission service is required.

The workflow illustrations explain concepts; they do not run AI inference. The work history, skills, and September 2026 resume use Rahul's current candidate profile. Both public resume filenames serve the same updated one-page PDF.

## Publishing

The existing GitHub Actions workflow builds pushes to `master` or `main` and deploys `dist/` to GitHub Pages. `public/CNAME` preserves the current domain. The root portfolio is separate from the `rahul-studio` and `rahul-ai-lab` sites.

The previous UI remains recoverable through Git history.
