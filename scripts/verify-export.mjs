/**
 * Verification of the exported static site.
 *
 * There is no unit-test suite here — the deployable artefact is `out/`, so this
 * checks that artefact directly: that every asset the HTML points at really
 * exists, that every in-page anchor resolves, that the SEO files and social
 * metadata survived the export, and that no source map got published.
 *
 * Run after `npm run build`.
 */

import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
const failures = [];
const notes = [];

const fail = (message) => failures.push(message);
const note = (message) => notes.push(message);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

// ---------------------------------------------------------------- preconditions
if (!existsSync(outDir)) {
  console.error("verify: out/ does not exist — run `npm run build` first.");
  process.exit(1);
}

const indexPath = path.join(outDir, "index.html");
if (!existsSync(indexPath)) {
  console.error("verify: out/index.html is missing — the export is broken.");
  process.exit(1);
}

const html = await readFile(indexPath, "utf8");

// ------------------------------------------------------------------ 1. required files
const requiredFiles = [
  "index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "favicon.ico",
  "icon.png",
  "apple-icon.png",
  "opengraph-image.png",
  "CNAME",
  ".nojekyll",
];

for (const file of requiredFiles) {
  if (!existsSync(path.join(outDir, file))) fail(`missing required file: ${file}`);
}

// ------------------------------------------------- 2. referenced assets must exist
const references = new Set();

for (const match of html.matchAll(/(?:src|href)="(\/[^"]*)"/g)) {
  references.add(match[1]);
}

for (const match of html.matchAll(/srcSet="([^"]+)"/g)) {
  for (const candidate of match[1].split(",")) {
    const url = candidate.trim().split(/\s+/)[0];
    if (url?.startsWith("/")) references.add(url);
  }
}

for (const reference of references) {
  const clean = reference.split("?")[0];
  if (!existsSync(path.join(outDir, clean.replace(/^\//, "")))) {
    fail(`index.html references an asset that is not in the export: ${reference}`);
  }
}
note(`resolved ${references.size} local asset references`);

// ------------------------------------------------------- 3. anchors must resolve
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const anchors = new Set([...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]));

for (const anchor of anchors) {
  if (!ids.has(anchor)) fail(`in-page anchor "#${anchor}" has no matching element id`);
}
note(`checked ${anchors.size} in-page anchors`);

// -------------------------------------------------------------- 4. metadata sanity
const requiredMarkup = [
  ['property="og:image"', "Open Graph image"],
  ['name="twitter:card"', "Twitter card"],
  ['rel="canonical"', "canonical link"],
  ["application/ld+json", "JSON-LD structured data"],
  ['name="description"', "meta description"],
];

for (const [needle, label] of requiredMarkup) {
  if (!html.includes(needle)) fail(`index.html is missing the ${label} (${needle})`);
}

// ------------------------------- 5. content must survive without JavaScript (P0)
if (/opacity:0/.test(html)) {
  fail("index.html contains an inline opacity:0 — content may be invisible without JS");
}

// ---------------------------------------------------- 6. nothing private is published
let maps = 0;
for await (const file of walk(outDir)) {
  if (file.endsWith(".map")) {
    maps += 1;
    fail(`source map published: ${path.relative(outDir, file)}`);
  }
}
if (maps === 0) note("no source maps in the export");

// --------------------------------------------------------------- 7. sitemap/robots
const robots = await readFile(path.join(outDir, "robots.txt"), "utf8");
if (!robots.includes("Sitemap:")) fail("robots.txt does not advertise a sitemap");

const sitemap = await readFile(path.join(outDir, "sitemap.xml"), "utf8");
if (!sitemap.includes("<urlset")) fail("sitemap.xml is not a valid urlset");
if (!/<loc>https?:\/\//.test(sitemap)) fail("sitemap.xml has no absolute <loc> entries");

// ------------------------------------------------------------------------- report
for (const message of notes) console.log(`verify: ok — ${message}`);

if (failures.length > 0) {
  console.error(`\nverify: ${failures.length} problem(s) found:`);
  for (const message of failures) console.error(`  ✗ ${message}`);
  process.exit(1);
}

console.log("verify: export is valid.");
