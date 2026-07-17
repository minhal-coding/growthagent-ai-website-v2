# GrowthAgent AI Website V2

This repository is the isolated V2 development environment for the GrowthAgent AI public website.

It was initialized from [`minhal-coding/growthagent-ai-site`](https://github.com/minhal-coding/growthagent-ai-site) at source commit `6202928e83f89626bdbec4bc1447a7c0e434eba4`. The copy preserves the original site's visual and functional baseline while allowing the V2 positioning, content, navigation, accessibility, and SEO work to be developed independently.

The original repository, its branches, its GitHub Pages workflow, and the current public website are not deployment targets for this project.

## Stack

- Next.js 15 App Router with static export
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion and Spline for motion and the robot experience
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
```

The repository currently has no automated unit or end-to-end test suite. Rendered desktop and mobile validation is performed separately as part of the V2 review.

## Routes in the copied baseline

- `/`
- `/about`
- `/agents`
- `/analytics`
- `/blog`
- `/compliance`
- `/contact`
- `/demo`
- `/faq`
- `/lead-research`
- `/pricing`
- `/privacy`
- `/responsible-ai`
- `/security`
- `/terms`
- `/use-cases`

## Deployment safety

The inherited GitHub Pages deployment authority is intentionally not included. GitHub Actions validates lint, types, and the production build but does not deploy.

If an isolated preview is approved later, configure it against this repository only, use a distinct preview URL, and do not reuse production DNS or production deployment credentials.
