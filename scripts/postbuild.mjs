/**
 * Post-build validation for the static export.
 *
 * `gh-pages` publishes the whole `out/` directory verbatim. Reject an export
 * containing source maps so original chunk sources cannot be published.
 * The build must avoid generating them; this script never deletes files.
 */

import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");

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

if (!existsSync(outDir)) {
  console.log("postbuild: no out/ directory, nothing to do.");
  process.exit(0);
}

const sourceMaps = [];

for await (const file of walk(outDir)) {
  if (!file.endsWith(".map")) continue;
  sourceMaps.push(path.relative(outDir, file));
}

if (sourceMaps.length > 0) {
  console.error("postbuild: source maps found in out/; refusing to publish:");
  for (const file of sourceMaps) console.error(`  ${file}`);
  console.error("Disable source map generation before building again.");
  process.exit(1);
}

console.log("postbuild: no source maps found.");
