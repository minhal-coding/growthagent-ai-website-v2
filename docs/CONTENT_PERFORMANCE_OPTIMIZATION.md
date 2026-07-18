# Content architecture and performance optimization

## Homepage length

| Viewport | Reviewed baseline | Optimized | Reduction |
| --- | ---: | ---: | ---: |
| Desktop, 1440 px | 11,048 px | 6,029 px | 45.4% |
| Mobile, 390 px | 19,637 px | 12,187 px | 37.9% |

The homepage retains the premium hero and Command Center, a six-stage overview, a concise lead-list comparison and opportunity-package teaser, all 14 planned divisions, the Florida and trust-ledger section, the Early Access Preview CTA, and the footer.

Detailed product information was reassigned rather than removed:

- `/product` owns the full opportunity anatomy, system organization, comparison, pipeline, source categories, and optional 3D demonstration.
- `/how-it-works` owns the full six-stage process, a concise fictional walkthrough, and the post-review roadmap.
- `/divisions` owns the complete desktop explorer, mobile accordion, and representative scopes for all 14 divisions.
- `/florida-launch` and `/trust-safety` retain launch-validation and control detail.

## Decorative assets

| Artwork | Original PNG | Desktop WebP | Mobile WebP |
| --- | ---: | ---: | ---: |
| Construction blueprint | 1,222,940 B | 50,926 B | 13,966 B |
| Florida validation map | 1,243,485 B | 34,828 B | 8,910 B |

The desktop pair is 85,754 B, 96.5% smaller than the 2,466,425 B original pair. A mobile viewport receives the 22,876 B mobile pair. Both variants remain local first-party assets and preserve the accepted compositions.

## Paint and compositing changes

- Removed large `mix-blend-screen` image surfaces and replaced them with normal-opacity responsive WebP backgrounds.
- Removed an extra Command Center radial layer and an extra map radial layer.
- Removed backdrop blur from repeated map and preview cards; reduced the sticky header blur from `xl` to `md` with a more opaque background.
- Added paint containment to blueprint artwork and patterned overlays.
- Applied `content-visibility: auto` with an intrinsic-size fallback to safe below-the-fold sections.
- Kept existing one-shot Framer Motion behavior and the reduced-motion visibility, shine, glow, transition, and optional-3D safeguards.

## Brand tokens

- Primary gold: `#e4bd45`
- Highlight gold: `#f2c94c`
- Primary gold RGB token: `228 189 69`
- Teal palette: unchanged

Superseded one-off gold values are regression-checked.

## Browser evidence

Chrome real-browser sampling covered 1440×1000, 768×1024, and 390×844. All three widths had no horizontal overflow. Across 300 sampled animation frames per viewport, no frame exceeded 34 ms. The mobile p95 was 16.8 ms; desktop and tablet p95 were 8.5 ms.

The preview remains non-indexed and creates no automatic Spline or unpkg request before explicit consent or under reduced motion.
