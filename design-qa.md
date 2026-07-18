# Homepage restoration design QA

## Scope

- Locked visual references: `Screenshot 2026-07-17 173100.png`, `173107.png`, `173116.png`, and `173126.png`.
- Exact supplied brand asset: `public/brand/growthagent-ai-reference-lockup.png`.
- Verified states: 1158 × 950 desktop, 390 × 844 mobile, full-page desktop, and full-page mobile.
- Fidelity surfaces: header and hero, command center, Florida validation map and trust ledger, four-stage workflow, early-access preview, phone composition, and footer transition.

## Comparison evidence

- `output/playwright/after/comparison-hero.png`
- `output/playwright/after/comparison-florida-trust.png`
- `output/playwright/after/comparison-workflow.png`
- `output/playwright/after/comparison-early-access.png`
- `output/playwright/after/restored-home-mobile.png`

## Iteration history

### Iteration 1

- Mobile and off-screen full-page sections contained blank areas because content visibility and deferred motion left content uncaptured.
- The compact Florida section did not consistently reveal all trust-ledger rows.

Corrections: removed homepage-only deferred visibility, removed hero reveal gating, and rendered the compact trust rows without staggered reveal.

### Iteration 2

- The command center stacked internally at the locked 1158 px viewport and extended below the intended hero composition.
- The Florida trust section had excess vertical space compared with the reference.

Corrections: moved the compact command-center split to the desktop breakpoint, reduced only its compact spacing and type scale, and tightened the compact Florida layout.

### Final comparison

- The section order, visual hierarchy, dark blueprint language, gold and teal accents, Florida map/trust composition, four-stage flow, three-column early-access composition, and exact supplied logo match the locked visual direction.
- Safe preview wording remains intentionally different from the older screenshots: no active early-access application language, no live county/source implication, and no enabled form.
- Desktop and mobile show zero horizontal overflow.
- No console or page errors were observed.
- Navigation and safe preview CTAs resolve to the intended routes.

## Severity review

- P0: none
- P1: none
- P2: none
- P3: none requiring correction within the locked restoration scope

final result: passed
