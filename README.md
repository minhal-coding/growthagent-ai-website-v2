# GrowthAgent AI Website V2

This repository is the isolated V2 development environment for the GrowthAgent AI public website.

It was initialized from [`minhal-coding/growthagent-ai-site`](https://github.com/minhal-coding/growthagent-ai-site) at source commit `6202928e83f89626bdbec4bc1447a7c0e434eba4`. The copy preserves the original site's visual and functional baseline while allowing the V2 positioning, content, navigation, accessibility, and SEO work to be developed independently.

The original repository, its branches, its GitHub Pages workflow, and the current public website are not deployment targets for this project.

## Stack

- Next.js 15 App Router with static export
- React 19 and TypeScript
- Tailwind CSS 4
- CSS motion and an explicit-consent optional Spline illustration
- npm (`package-lock.json`)

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

`npm test` checks the preview-only claims, fictional-data labeling, disabled intake, Spline consent and reduced-motion guards, navigation semantics, and the exported metadata/robots/sitemap behavior. Rendered desktop and mobile validation is also performed with Playwright as part of the V2 review.

## V2 routes

- `/`
- `/about`
- `/contact`
- `/early-access`
- `/florida-launch`
- `/how-it-works`
- `/product`
- `/privacy`
- `/terms`
- `/trust-safety`

The copied baseline routes and the full rebuild record are documented in [`docs/V2_REBUILD_REPORT.md`](docs/V2_REBUILD_REPORT.md).

## Deployment safety

The inherited GitHub Pages deployment authority is intentionally not included. GitHub Actions validates lint, types, and the production build but does not deploy.

The exported site is non-indexable by default. Without configuration, every page emits `noindex, nofollow, noarchive`, no canonical URL or structured data is published, `robots.txt` disallows all crawling, and the sitemap is empty.

Indexing can be enabled only after an owner has approved the final isolated URL and public-launch state. Both variables are required:

```bash
NEXT_PUBLIC_SITE_URL=https://owner-approved-isolated-url.example
NEXT_PUBLIC_ENABLE_INDEXING=true
```

Do not add an actual URL to the repository. A preview host should inject the approved value at build time. If an isolated preview is approved later, configure it against this repository only, use a distinct URL, and do not reuse production DNS or production deployment credentials.

## Invitation-only application access

The website can show a single **Invitation access** link in the desktop header and mobile navigation when an owner supplies the private application's approved access URL at build time:

```bash
NEXT_PUBLIC_INVITE_ONLY_APP_URL=<owner-supplied-https-url>
```

The repository does not provide a default URL. When the variable is absent, the link is not rendered. The configured value must be an absolute HTTPS URL without embedded credentials, query parameters, or fragments so access tokens and other secrets cannot be published in the static site. This link is only an access path for people who already have an invitation; it does not add signup, account creation, intake, analytics, or a claim of general availability.

## Preview-only interactions

- The early-access interface is a disabled visual preview. It has no form element or external endpoint and nothing entered is sent, stored, or reviewed.
- The product page does not request the external Spline scene by default. A visitor must choose **Load optional 3D scene** after seeing the third-party disclosure. Reduced-motion visitors receive the complete local fallback without a Spline request.
- Enabling collection or retaining the external scene still requires the owner approvals listed in the rebuild report.
