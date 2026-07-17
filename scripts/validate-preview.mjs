import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

async function filesUnder(directory) {
  const files = [];
  for (const entry of await readdir(directory)) {
    const full = path.join(directory, entry);
    if ((await stat(full)).isDirectory()) files.push(...await filesUnder(full));
    else files.push(full);
  }
  return files;
}

const sourceFiles = (await filesUnder(path.join(root, "src"))).filter((file) => /\.(ts|tsx)$/.test(file));
const source = (await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))).join("\n");
const requiredDivisions = [
  "Division 03 — Concrete",
  "Division 04 — Masonry",
  "Division 05 — Metals",
  "Division 06 — Wood, Plastics & Composites",
  "Division 07 — Thermal & Moisture Protection",
  "Division 08 — Openings",
  "Division 09 — Finishes",
  "Division 21 — Fire Suppression",
  "Division 22 — Plumbing",
  "Division 23 — Heating, Ventilating & Air Conditioning",
  "Division 26 — Electrical",
  "Division 31 — Earthwork",
  "Division 32 — Exterior Improvements",
  "Division 33 — Utilities",
];
for (const banned of [
  "Source verified",
  "Within service area",
  "Public record URL retained for review",
  "team will review",
  "requests are reviewed by a person",
  "Request Early Access",
  "Join Early Access",
  "Join Florida Early Access",
  "Request a Pilot",
]) assert(!source.toLowerCase().includes(banned.toLowerCase()), `Banned claim remains: ${banned}`);

const divisionData = await readFile(path.join(root, "src/components/division-data.ts"), "utf8");
for (const division of requiredDivisions) {
  const [number, name] = division.replace("Division ", "").split(" — ");
  assert(divisionData.includes(`number: "${number}"`) && divisionData.includes(`name: "${name}"`), `Required construction division is missing: ${division}`);
}
assert(!divisionData.includes('status: "Active"') && !divisionData.includes('status: "Live coverage"'), "A construction division is overstated as active or live");
assert(!divisionData.includes("Private-pilot focus"), "Division 09 is labeled Private-pilot focus without repository evidence");

for (const unsupported of ["pricing table", "customer logo", "client logo", "testimonial", "live metric", "fully autonomous", "automatically sends outreach", "autonomously contacts"]) {
  assert(!source.toLowerCase().includes(unsupported), `Unsupported marketing pattern remains: ${unsupported}`);
}

const motion = await readFile(path.join(root, "src/components/ui/motion-reveal.tsx"), "utf8");
const globalCss = await readFile(path.join(root, "src/app/globals.css"), "utf8");
assert(motion.includes("useReducedMotion"), "Framer Motion components do not inspect reduced-motion preference");
assert(globalCss.includes("@media (prefers-reduced-motion: reduce)"), "Global reduced-motion safeguard is missing");
assert(globalCss.includes(".ga-glow-card::before") && globalCss.includes("display: none !important"), "Reduced motion does not disable nonessential glow/shine effects");
assert(motion.includes("ga-motion-safe") && globalCss.includes(".ga-motion-safe") && globalCss.includes("opacity: 1 !important"), "Reduced motion can leave reveal content hidden");

const demo = await readFile(path.join(root, "src/components/construction-opportunity-preview.tsx"), "utf8");
assert((demo.match(/Fictional example/g) ?? []).length >= 3, "Fewer than three fictional record labels");
assert(demo.includes("Every record, jurisdiction, source category, and status below is a fictional validation example"), "Prominent fictional-data disclosure is missing");

const intake = await readFile(path.join(root, "src/components/early-access-form.tsx"), "utf8");
assert(!intake.includes("<form"), "Early-access preview contains a form element");
assert(!intake.includes("onSubmit"), "Early-access preview contains submit behavior");
assert(intake.includes("<fieldset disabled"), "Early-access preview fields are not disabled as a group");
assert(intake.includes("nothing entered here is sent, stored, or reviewed"), "Pre-field collection warning is missing");

const spline = await readFile(path.join(root, "src/components/ui/splite.tsx"), "utf8");
assert(spline.includes("Load optional 3D scene"), "Spline explicit-load action is missing");
assert(spline.includes("matchMedia(\"(prefers-reduced-motion: reduce)\")"), "Spline reduced-motion guard is missing");
assert(spline.includes("aria-hidden=\"true\""), "Spline canvas is not hidden from accessibility APIs");
assert(spline.includes("10000"), "Spline bounded timeout is missing");
assert(spline.includes("connects to Spline") && spline.includes("unpkg.com"), "Optional 3D disclosure must name both Spline and unpkg.com");
const splineImportIndex = spline.indexOf('import("@splinetool/runtime")');
const reducedGuardIndex = spline.lastIndexOf('matchMedia("(prefers-reduced-motion: reduce)")', splineImportIndex);
assert(spline.indexOf("if (!loadRequested") < splineImportIndex, "Spline runtime import is not gated by explicit activation");
assert(reducedGuardIndex !== -1 && reducedGuardIndex < splineImportIndex, "Spline runtime import is not guarded by reduced-motion detection");

const privacy = await readFile(path.join(root, "src/components/legal-page.tsx"), "utf8");
assert(privacy.includes("prod.spline.design") && privacy.includes("unpkg.com"), "Privacy preview must name both external 3D services");

const notFound = await readFile(path.join(root, "src/app/not-found.tsx"), "utf8");
assert(notFound.includes('href="/early-access"') && notFound.includes("View Early Access Preview"), "404 CTA must link to the Early Access Preview");

assert(!/localStorage|sessionStorage|indexedDB|navigator\.sendBeacon/.test(source), "Client-side storage or beacon behavior was added");
assert(!/google-analytics|googletagmanager|gtag\(|posthog|mixpanel|plausible|segment\.com/i.test(source), "Analytics behavior was added");

const robot = await readFile(path.join(root, "src/components/ui/growth-agent-robot-orbit.tsx"), "utf8");
assert(!robot.includes("<button"), "Static workflow stages still use buttons");

const header = await readFile(path.join(root, "src/components/site-header.tsx"), "utf8");
assert(header.includes("aria-current"), "Active navigation semantics are missing");
assert(header.includes("Close navigation menu") && header.includes("Open navigation menu"), "Mobile menu label is not state-aware");

const out = path.join(root, "out");
try {
  const routeTitles = {
    "index.html": "GrowthAgent AI | Florida Construction Opportunity Intelligence",
    "product/index.html": "Product Preview | GrowthAgent AI",
    "how-it-works/index.html": "How It Works | GrowthAgent AI",
    "divisions/index.html": "Construction Divisions | GrowthAgent AI",
    "florida-launch/index.html": "Florida Launch Plan | GrowthAgent AI",
    "trust-safety/index.html": "Trust &amp; Safety | GrowthAgent AI",
    "about/index.html": "About | GrowthAgent AI",
    "early-access/index.html": "Early Access Preview | GrowthAgent AI",
    "contact/index.html": "Contact Preview | GrowthAgent AI",
    "privacy/index.html": "Privacy Notice | GrowthAgent AI",
    "terms/index.html": "Terms of Use | GrowthAgent AI",
  };
  for (const [relative, title] of Object.entries(routeTitles)) {
    const html = await readFile(path.join(out, relative), "utf8");
    assert(/<meta[^>]+name="robots"[^>]+content="noindex, nofollow, noarchive"/.test(html), `${relative} does not emit preview noindex/nofollow/noarchive`);
    assert(!/<link[^>]+rel="canonical"/.test(html), `${relative} emits a preview canonical`);
    assert(html.includes(`<meta property="og:title" content="${title}"`), `${relative} has incorrect Open Graph title`);
    assert(html.includes(`<meta name="twitter:title" content="${title}"`), `${relative} has incorrect Twitter title`);
    assert(/<meta property="og:description" content="[^"]+"/.test(html), `${relative} lacks an Open Graph description`);
    assert(/<meta name="twitter:description" content="[^"]+"/.test(html), `${relative} lacks a Twitter description`);
  }
  const publicHtmlFiles = (await filesUnder(out)).filter((file) => file.endsWith(".html"));
  const exportedHtml = (await Promise.all(publicHtmlFiles.map((file) => readFile(file, "utf8")))).join("\n");
  for (const banned of ["Join Early Access", "Join Florida Early Access", "Request Early Access", "Request a Pilot"]) {
    assert(!exportedHtml.toLowerCase().includes(banned.toLowerCase()), `Exported public page contains prohibited conversion wording: ${banned}`);
  }
  const notFoundHtml = await readFile(path.join(out, "404.html"), "utf8");
  assert(notFoundHtml.includes("View Early Access Preview"), "Exported 404 CTA does not say View Early Access Preview");
  const productHtml = await readFile(path.join(out, "product/index.html"), "utf8");
  assert(productHtml.includes("Spline") && productHtml.includes("unpkg.com"), "Exported product disclosure does not name Spline and unpkg.com");
  const privacyHtml = await readFile(path.join(out, "privacy/index.html"), "utf8");
  assert(privacyHtml.includes("prod.spline.design") && privacyHtml.includes("unpkg.com"), "Exported Privacy preview does not name both external 3D services");
  const divisionsHtml = await readFile(path.join(out, "divisions/index.html"), "utf8");
  for (const division of requiredDivisions) {
    const [, name] = division.replace("Division ", "").split(" — ");
    assert(divisionsHtml.includes(name.replaceAll("&", "&amp;")), `Exported divisions route is missing: ${division}`);
  }
  assert(!/Private-pilot focus|Live coverage|>Active</i.test(divisionsHtml), "Exported divisions route overstates a division status");
  assert(!/<form\b/i.test(exportedHtml), "Exported preview contains a form element");
  assert(!/google-analytics|googletagmanager|gtag\(|posthog|mixpanel|plausible|segment\.com/i.test(exportedHtml), "Exported preview contains analytics behavior");
  const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");
  assert(!sitemap.includes("<url>"), "Preview sitemap contains indexable URLs");
  const robots = await readFile(path.join(out, "robots.txt"), "utf8");
  assert(robots.includes("Disallow: /"), "Preview robots.txt does not disallow crawling");
} catch (error) {
  failures.push(`Built-output validation failed: ${error.message}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}
console.log("Preview credibility and built-output checks passed.");
