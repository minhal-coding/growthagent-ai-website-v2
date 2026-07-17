# GrowthAgent AI Website V2 rebuild report

## Isolation and baseline

- Source repository: `minhal-coding/growthagent-ai-site`
- Imported source commit: `6202928e83f89626bdbec4bc1447a7c0e434eba4`
- Isolated target repository: `minhal-coding/growthagent-ai-website-v2`
- Verified baseline commit on `main`: `4fcf105bc9c3614538c59f829b88c1aa62254a0c`
- Feature branch: `feat/florida-construction-website-v2`

The source was fetched through a one-time read-only URL. The only configured Git remote is the V2 target repository. The inherited GitHub Pages deployment workflow was not transferred; the V2 workflow validates the project and has no deployment authority.

## Baseline inspection

The copied site used Next.js 15 App Router, React 19, TypeScript, npm, Tailwind CSS 4, static export, Lucide icons, Spline, Framer Motion, and repository-hosted Geist font files. Its inherited routes were:

`/`, `/about`, `/agents`, `/analytics`, `/blog`, `/compliance`, `/contact`, `/demo`, `/faq`, `/lead-research`, `/pricing`, `/privacy`, `/responsible-ai`, `/security`, `/terms`, and `/use-cases`.

The baseline had no automated test suite and required no environment variables for its static build. Baseline lint, type-check, and production build passed. Desktop and mobile rendering, primary navigation, imagery, animation fallbacks, fonts, and representative routes were checked before the redesign began.

## Screenshot evidence

Baseline captures:

- [`baseline-home-desktop.png`](../output/playwright/baseline/baseline-home-desktop.png)
- [`baseline-home-mobile.png`](../output/playwright/baseline/baseline-home-mobile.png)
- [`baseline-product-desktop.png`](../output/playwright/baseline/baseline-product-desktop.png)
- [`baseline-pricing-desktop.png`](../output/playwright/baseline/baseline-pricing-desktop.png)
- [`baseline-security-desktop.png`](../output/playwright/baseline/baseline-security-desktop.png)
- [`baseline-contact-desktop.png`](../output/playwright/baseline/baseline-contact-desktop.png)
- [`baseline-live-home-desktop.png`](../output/playwright/baseline/baseline-live-home-desktop.png)

V2 captures:

- [`after-home-desktop.png`](../output/playwright/after/after-home-desktop.png)
- [`after-home-mobile.png`](../output/playwright/after/after-home-mobile.png)
- [`after-product-desktop.png`](../output/playwright/after/after-product-desktop.png)
- [`after-florida-launch-desktop.png`](../output/playwright/after/after-florida-launch-desktop.png)
- [`after-trust-safety-desktop.png`](../output/playwright/after/after-trust-safety-desktop.png)
- [`after-early-access-desktop.png`](../output/playwright/after/after-early-access-desktop.png)

## V2 route and navigation changes

The public navigation is now Product, How It Works, Florida Launch, Trust & Safety, About, and Join Florida Early Access. The V2 routes are `/`, `/product`, `/how-it-works`, `/florida-launch`, `/trust-safety`, `/about`, `/early-access`, `/contact`, `/privacy`, and `/terms`.

The inaccurate legacy routes for agents, analytics, blog, compliance, demo, FAQ, lead research, pricing, responsible AI, security, use cases, and their supporting components were removed. Static export therefore returns the V2 not-found page for those paths.

## Claims removed or corrected

- Replaced “AI-powered sales team,” general-purpose sales, and autonomous outreach positioning with an early-access Florida construction opportunity intelligence description.
- Removed “seven automations live,” unsupported lead/activity counters, customer counts, and monthly lead-volume claims.
- Removed unsupported pricing plans and plan limits.
- Removed 24/7 and completed-production-service implications.
- Removed placeholder customer logos and unrelated university, conference, SaaS, training, nonprofit, and multi-industry examples.
- Removed unsupported security and compliance badges or control claims.
- Replaced broad source coverage implications with selected public-source examples and explicit coverage caveats.
- Replaced fabricated-looking dashboard records with fictional Central Florida construction examples labeled “Demonstration Data.” No personal contacts are shown.

## Product and content changes

The site now explains a four-stage workflow: discover public records, verify source evidence, rank for fit, and require human review. Product examples use Orange, Seminole, and Osceola County; Division 09 — Finishes; source verification; service-area checks; and human-review status. The retained robot experience is framed as a review assistant rather than an autonomous sales team and has a non-3D fallback.

The early-access form is intentionally preview-only. It does not transmit or store form values and tells the visitor that no information was sent. A reviewed form endpoint, retention policy, and owner-approved privacy notice are required before collection is enabled.

## SEO and accessibility

- Truthful Florida construction title and description.
- Environment-aware canonical base URL, Open Graph metadata, and social metadata.
- Accurate `WebSite` structured data only; no fabricated product ratings or organization claims.
- Updated sitemap and robots configuration for the isolated V2 URL and V2 routes.
- One H1 on every public page with semantic section headings.
- Skip link, visible keyboard focus, labeled navigation and fields, status messaging, and adequate contrast.
- Responsive layouts with mobile navigation and no horizontal page overflow in tested viewports.
- Reduced-motion CSS behavior and a reduced-motion animation check.

## Validation

Commands:

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

There is no inherited unit-test script. Final lint, type-check, static production build, representative-route status checks, semantic heading checks, internal navigation, mobile-menu behavior, interactive demonstration selection, preview-form disclosure, 404 behavior for removed routes, image health, and horizontal-overflow checks are recorded in the Draft pull request.

## Security, privacy, and deployment

- No `.env` files, tokens, credentials, caches, build output, or deployment secrets are committed.
- Dependency audit results are recorded in the Draft pull request.
- The site has no authentication, analytics, form backend, database, or visitor-data storage.
- The robot visualization fetches a third-party Spline scene; the page remains understandable if that network request fails.
- No production or preview deployment was created. No DNS, GitHub Pages setting, production repository, application repository, or billable resource was touched.

An isolated preview can be added later only from this V2 repository, at a distinct URL, with deployment authority scoped to V2 and without production DNS or production credentials.

## Owner approvals still required

- Confirm the exact counties, record types, procurement sources, and launch coverage before publishing.
- Confirm feature availability and the meaning of ranking, verification, and human review before making stronger product claims.
- Approve the legal entity name, contact channel, Terms, Privacy language, retention rules, and form processor before collecting information.
- Approve the final canonical production or preview URL and social-sharing image.
- Approve any customer proof, performance metrics, pricing, service levels, security controls, or compliance claims before adding them.
- Decide whether to retain the externally hosted Spline scene or replace it with a locally controlled asset.

## Protected original

The source repository, its branches and workflows, its GitHub Pages deployment, and the existing public website were used only as read-only reference points. No production deployment or DNS change was made.
