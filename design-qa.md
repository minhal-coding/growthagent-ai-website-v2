# Design QA — Product, divisions, and motion expansion

## Target and method

- Accepted visual baseline: commit `1a97563190de4c88ebddc92ed7a1d3ee8509567c`.
- Baseline evidence: `output/playwright/after/final-home-desktop.png`, `final-home-mobile.png`, `final-workflow-desktop.png`, and `final-florida-trust-ledger.png`.
- Final evidence: the `expanded-*.png` files in `output/playwright/after/`.
- Browser method: local production static export at `http://127.0.0.1:4173/`. The in-app browser trusted bridge was unavailable earlier in this task, so the documented bundled Playwright fallback was used.
- Viewports checked: 1440×1000 desktop, 900×900 tablet, and 390×844 mobile.

## Fidelity comparison

- Preserved the accepted black, gold, teal, blueprint, typography, border, radius, icon, and elevation language.
- Preserved the premium hero and Command Center composition while expanding copy below the fold.
- New workflow, comparison, division explorer, source, display-stack, opportunity-anatomy, Florida, and trust surfaces use the existing spacing and surface vocabulary rather than a new design system.
- No replacement hero art, generic stock art, custom SVG illustration, pricing surface, logo wall, testimonial treatment, or unrelated visual motif was added.
- Desktop hierarchy remains cinematic and asymmetric; mobile collapses to a readable single-column flow and native accordion without horizontal scrolling.

## Functional and accessibility QA

- One H1 and one main landmark on every checked route.
- No unnamed links or buttons and no images missing `alt` attributes on checked routes.
- Desktop division selection updates the detail panel; mobile exposes 14 native disclosure controls with Division 09 first.
- Opportunity anatomy tabs use roving focus, Left/Right/Home/End keyboard controls, selected-state semantics, and a labelled tabpanel.
- Mobile navigation opens and exposes its route links.
- Gold CTA focus outline is visible and teal with retained link semantics.
- Reduced-motion mode disables reveal displacement, shine, pointer glow, and optional 3D activation; no reveal content remains hidden.
- No horizontal overflow at desktop, tablet, or 390px mobile widths.
- No console errors or failed requests occurred during the checked local routes.

## Privacy, launch-state, and network QA

- No form element, enabled personal-data control, analytics, storage, authentication, or customer endpoint was introduced.
- No automatic request to Spline or unpkg occurred during normal or reduced-motion route traversal.
- Preview pages emit `noindex, nofollow, noarchive`; the sitemap remains empty and robots disallows crawling.
- `/blog`, `/data-review`, `/login`, `/signup`, and `/pricing` return the approved 404 experience.

## Issue found and corrected

- Reduced-motion visitors could initially receive server-rendered off-screen reveal content with opacity zero. Added a reduced-motion visibility override and verified zero hidden reveal elements after hydration.
- Full-page capture initially deferred off-screen reveal content. Removed the content-visibility optimization and captured each evidence section after an actual viewport pass.
- Opportunity-anatomy tabs initially lacked roving keyboard focus. Added arrow/Home/End behavior and programmatic panel labelling.

## Result

No unresolved blocker, responsive break, accessibility regression, unsupported visual claim, or preview-safety regression was found in the final pass.

final result: passed
