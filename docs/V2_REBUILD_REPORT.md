# GrowthAgent AI Website V2 rebuild report

## Isolation and baseline

- Source repository: `minhal-coding/growthagent-ai-site`
- Imported source commit: `6202928e83f89626bdbec4bc1447a7c0e434eba4`
- Isolated target repository: `minhal-coding/growthagent-ai-website-v2`
- Verified baseline commit on `main`: `4fcf105bc9c3614538c59f829b88c1aa62254a0c`
- Feature branch: `feat/florida-construction-website-v2`

The source was fetched through a one-time read-only URL. The only configured Git remote is the isolated V2 target. The inherited GitHub Pages deployment workflow was not transferred; the V2 workflow validates the project and has no deployment authority.

## Baseline inspection

The copied site used Next.js 15 App Router, React 19, TypeScript, npm, Tailwind CSS 4, static export, Lucide icons, Spline, Framer Motion, and repository-hosted Geist font files. Its inherited routes were `/`, `/about`, `/agents`, `/analytics`, `/blog`, `/compliance`, `/contact`, `/demo`, `/faq`, `/lead-research`, `/pricing`, `/privacy`, `/responsible-ai`, `/security`, `/terms`, and `/use-cases`.

The baseline had no automated test suite and required no environment variables for its static build. Baseline lint, type-check, production build, desktop/mobile rendering, navigation, imagery, animation fallbacks, fonts, and representative routes were checked before the V2 work.

## Screenshot evidence

Baseline captures are under `output/playwright/baseline/`.

Corrected V2 captures under `output/playwright/after/`:

- `after-home-desktop.png`
- `after-home-mobile.png`
- `after-product-desktop.png`
- `after-florida-launch-desktop.png`
- `after-trust-safety-desktop.png`
- `after-early-access-desktop.png`
- `after-product-reduced-motion.png`
- `after-product-spline-consent.png`

## Route and navigation changes

The public navigation is Product, How It Works, Florida Launch, Trust & Safety, and About, with **Explore Florida Launch** as the primary CTA. **View Early Access Preview** links to the disabled intake preview. Active desktop and mobile links expose `aria-current="page"`; the mobile menu has state-aware open/close labels and closes after navigation.

The V2 routes are `/`, `/product`, `/how-it-works`, `/florida-launch`, `/trust-safety`, `/about`, `/early-access`, `/contact`, `/privacy`, and `/terms`. Inaccurate legacy product, industry, pricing, security, and content routes were removed and return the V2 not-found response.

## Claims removed or corrected

- Replaced general-purpose sales, autonomous outreach, nationwide, multi-industry, 24/7, and completed-production positioning with a planned first-market focus on Florida construction.
- Removed unsupported lead/activity counters, customer counts, metrics, pricing, customer logos, source coverage, security badges, compliance controls, and service-level implications.
- Recast discovery, verification, ranking, source, county, availability, and launch statements as planned design or validation work.
- Described permit, planning, and procurement inputs only as candidate source categories under evaluation.
- Removed named county examples and replaced them with generic illustrative validation topics.
- No customer, personal contact, source URL, available project, approved county, or active workflow is represented.

## Product and demonstration data

Every product record title begins with **Fictional example**. A prominent disclosure states that every record, jurisdiction, source category, and status is a fictional validation example. Detail labels use illustrative/example language, and a final disclaimer says no live record, verified source, approved county workflow, customer, or available project is represented.

The site previews four design stages: evaluate candidate records, design for source evidence, explore review organization, and keep a human responsible for the decision. The stages are static semantic list content, not controls. The second full demonstration is hidden on the mobile home page and replaced with a concise product summary.

## Independent review corrections

The independent product, credibility, UX, accessibility, SEO, privacy, and launch-readiness findings were addressed as follows:

- Standardized conversion paths on **Explore Florida Launch** and **View Early Access Preview**, without implying an operating request, pilot, or review process.
- Converted coverage/trade status treatments to neutral markers and clearly illustrative language.
- Converted the early-access experience to a disabled visual preview with no form element, endpoint, submit handler, enabled field, success simulation, storage, or review claim.
- Added the pre-field warning: **“Preview only — nothing entered here is sent, stored, or reviewed. Do not enter personal information.”**
- Changed the external Spline scene to explicit activation only. Default and reduced-motion experiences make zero Spline requests; error and timeout states retain the complete local fallback.
- Added active-link semantics, visible focus treatments, and state-aware mobile-menu behavior.
- Made every unconfigured build non-indexable and removed preview canonicals, social URLs/images, structured data, host declarations, and sitemap URLs.
- Added automated source and exported-output regression checks for the reviewed credibility and preview-safety requirements.

## SEO and accessibility

- Per-page titles, descriptions, and Open Graph/Twitter text without publishing an unapproved URL.
- Preview default: `noindex, nofollow, noarchive`, no canonical, no structured data, no social URL/image, `robots.txt` disallowing `/`, and an empty sitemap.
- Canonical URLs, social URLs/images, `WebSite` structured data, crawl permission, and sitemap URLs appear only when an approved `NEXT_PUBLIC_SITE_URL` is supplied with `NEXT_PUBLIC_ENABLE_INDEXING=true`.
- One H1 and one main landmark on each public route, skip link, visible keyboard focus, labeled navigation and fields, and substantive disclosures at readable contrast and size.
- Responsive layouts with no horizontal page overflow in tested desktop/mobile viewports.
- Reduced-motion behavior prevents Spline instantiation and the third-party scene request.

## Validation

Commands:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm test
npm audit --json
```

All commands passed. The audit reported zero known vulnerabilities. Playwright confirmed all ten public routes return 200 with one H1, one main landmark, no broken images, no horizontal overflow, preview noindex metadata, and no canonical. Removed `/pricing`, `/agents`, `/lead-research`, and `/security` routes return 404.

Rendered checks also confirmed active navigation semantics; mobile-menu open/close labeling and closure after navigation; one visible fictional demonstration on the mobile home page; no form or enabled intake controls; no Spline request before explicit consent; no Spline request under reduced motion; and one external scene request after explicit activation. The external request failed safely in the test environment and retained the local fallback.

## Privacy, dependencies, and deployment

- No `.env` file, token, credential, cache, build output, or deployment secret is committed.
- The site has no authentication, analytics, form backend, database, contact channel, or visitor-data storage.
- The Privacy notice discloses that the optional scene contacts Spline only after explicit activation. Owner approval of that dependency, its licensing, and final third-party disclosure remains required.
- No production or preview deployment was created. No DNS, GitHub Pages setting, production repository, application repository, or billable resource was touched.

An isolated preview can be added later only from this V2 repository, at a distinct URL, with deployment authority scoped to V2 and without production DNS or production credentials.

## Owner approvals still required

- Confirm exact counties, record types, sources, and launch coverage before publishing.
- Confirm feature availability and the meaning of ranking, verification, and human review before stronger product claims.
- Approve the legal entity name, contact channel, Terms, Privacy language, retention rules, processor, and data-handling terms before collecting information.
- Approve the final canonical public URL and social-sharing image before enabling indexing.
- Approve evidence before adding customer proof, performance metrics, pricing, service levels, security controls, certifications, or compliance claims.
- Decide whether to retain the externally hosted Spline scene or replace it with a locally controlled asset.

## Protected original

The source repository, its branches and workflows, its GitHub Pages deployment, and the existing public website were used only as read-only reference points. No production deployment or DNS change was made.
