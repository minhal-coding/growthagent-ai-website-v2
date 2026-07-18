import { readFile, readdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
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
const marketingHome = await readFile(path.join(root, "src/components/marketing-home.tsx"), "utf8");
const productPage = await readFile(path.join(root, "src/app/product/page.tsx"), "utf8");
const howItWorksPage = await readFile(path.join(root, "src/app/how-it-works/page.tsx"), "utf8");
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

assert(marketingHome.includes("ConstructionOpportunityPreview"), "Homepage command center preview is missing");
assert(marketingHome.includes("FloridaTrustSection"), "Homepage Florida map and trust ledger are missing");
assert(marketingHome.includes("HomepageCinematicWorkflow"), "Homepage four-step cinematic workflow is missing");
assert(marketingHome.includes("HomepageEarlyAccess"), "Homepage premium early-access preview is missing");
for (const valueTile of ["Source context preserved", "Service-area focused", "Designed for human review"]) {
  assert(marketingHome.includes(valueTile), `Homepage contractor-value strip is missing: ${valueTile}`);
}
assert(!marketingHome.includes("HomepageDivisionTeaser"), "Homepage still contains the 14-division teaser excluded by the locked reference");
assert(!marketingHome.includes("LeadListComparison"), "Homepage still contains the lead-list comparison excluded by the locked reference");
assert(!marketingHome.includes("DivisionExplorer"), "Homepage still bundles the full interactive division explorer");
assert(!marketingHome.includes("OpportunityAnatomy"), "Homepage still renders the full opportunity anatomy");
assert(!marketingHome.includes("SystemOrganizesVisual"), "Homepage still renders the full system-organizes section");
assert(productPage.includes("OpportunityAnatomy") && productPage.includes("LeadListComparison"), "Product route does not own the full opportunity anatomy and comparison");
assert(howItWorksPage.includes("FictionalProcessWalkthrough"), "How It Works route lacks its concise fictional process walkthrough");
assert(!howItWorksPage.includes("OpportunityAnatomy"), "How It Works duplicates the full product anatomy");

for (const oldAsset of ["construction-blueprint.png", "florida-validation-map.png"]) {
  assert(!source.includes(oldAsset), `Source still references superseded PNG asset: ${oldAsset}`);
}
for (const [asset, maxBytes] of [
  ["construction-blueprint.webp", 60000],
  ["construction-blueprint-mobile.webp", 20000],
  ["florida-validation-map.webp", 45000],
  ["florida-validation-map-mobile.webp", 15000],
]) {
  const assetStat = await stat(path.join(root, "public", asset));
  assert(assetStat.size <= maxBytes, `${asset} exceeds its optimized-size budget (${assetStat.size} bytes)`);
}
const referenceLogo = await stat(path.join(root, "public", "brand", "growthagent-ai-reference-lockup.png"));
assert(referenceLogo.size <= 150000, `Reference logo exceeds its optimized-size budget (${referenceLogo.size} bytes)`);
const referenceLogoBytes = await readFile(path.join(root, "public", "brand", "growthagent-ai-reference-lockup.png"));
assert(createHash("sha256").update(referenceLogoBytes).digest("hex") === "fb25e522d8f96b54a55ea421241215dafd16069279ac576f3bf2126b2bef0276", "Exact owner-supplied logo asset has changed");

const motion = await readFile(path.join(root, "src/components/ui/motion-reveal.tsx"), "utf8");
const globalCss = await readFile(path.join(root, "src/app/globals.css"), "utf8");
assert(motion.includes("useReducedMotion"), "Framer Motion components do not inspect reduced-motion preference");
assert(globalCss.includes("@media (prefers-reduced-motion: reduce)"), "Global reduced-motion safeguard is missing");
assert(globalCss.includes(".ga-glow-card::before") && globalCss.includes("display: none !important"), "Reduced motion does not disable nonessential glow/shine effects");
assert(motion.includes("ga-motion-safe") && globalCss.includes(".ga-motion-safe") && globalCss.includes("opacity: 1 !important"), "Reduced motion can leave reveal content hidden");
assert(globalCss.includes("--ga-gold-primary: #e4bd45") && globalCss.includes("--ga-gold-highlight: #f2c94c"), "Consolidated gold brand tokens are missing");
assert(!/#d4af37|#f6d665|#e0b93f|#f2cb52|rgba\(212,\s*175,\s*55/i.test(source + globalCss), "A superseded one-off gold value remains");

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
  const homeHtml = await readFile(path.join(out, "index.html"), "utf8");
  const howItWorksHtml = await readFile(path.join(out, "how-it-works/index.html"), "utf8");
  assert(!homeHtml.includes("Every signal should lead back to evidence."), "Exported homepage still contains the full product anatomy");
  assert(!homeHtml.includes("Built around 14 construction divisions"), "Exported homepage still contains the removed divisions explorer");
  assert(!homeHtml.includes("More than a lead list"), "Exported homepage still contains the removed comparison section");
  assert(homeHtml.includes("Starting in Florida") && homeHtml.includes("From public record to review-ready opportunity") && homeHtml.includes("Help shape the Florida launch"), "Exported homepage is missing a locked-reference section");
  assert(productHtml.includes("Every signal should lead back to evidence."), "Exported product route is missing the full opportunity anatomy");
  assert(howItWorksHtml.includes("One record. Six stages. One human decision."), "Exported How It Works route is missing its fictional walkthrough");
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
