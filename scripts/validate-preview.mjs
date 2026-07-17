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
for (const banned of [
  "Source verified",
  "Within service area",
  "Public record URL retained for review",
  "team will review",
  "requests are reviewed by a person",
  "Request Early Access",
  "Join Florida Early Access",
  "Request a Pilot",
]) assert(!source.toLowerCase().includes(banned.toLowerCase()), `Banned claim remains: ${banned}`);

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
