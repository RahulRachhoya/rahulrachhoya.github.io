# Verification, 28 September 2026

- Production build and ESLint pass.
- Checked the page in the Codex browser at 320, 390, 768, 1024, and 1440 pixels.
  No horizontal overflow; both light and dark themes inspected.
- All filters produce the expected project counts (4, 2, 1, 1).
- Native case-study disclosures expose architecture, measurements, and limitations.
- Mobile menu closes with Escape and returns focus. Contact dialog opens from the
  mobile menu, traps focus, copies the email with feedback, and returns focus on Escape.
- GitHub repository and results links match the four public repositories. Their
  local README blob hashes matched GitHub before project copy was written.
- The public research agent completed a new search and returned paper citations.
- Both résumé aliases contain the same verified one-page PDF, with all four projects
  and the corrected benchmark / retrieval wording. Source is under `resume/`.
- Production image, favicon, and PDF HTTP responses matched their source files.
  JSON-LD parses. Browser console showed no warnings or errors.
- Lighthouse mobile lab run: performance 99, accessibility 100, best practices 100,
  SEO 100; LCP 2.0 seconds, CLS 0. These are local lab results, not field measurements.
- Dependency audit: zero known vulnerabilities after compatible updates.

Recorded experiment results remain qualified by sample size, hardware, provider,
and evaluation scope. No live status or fabricated GitHub counts are displayed.
