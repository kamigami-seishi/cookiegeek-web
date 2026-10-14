/**
 * Post-build cleanup for the static export.
 *
 * `next build` emits at least one browser source map into `out/`, and `gh-pages`
 * publishes the whole directory verbatim, which would serve the original source
 * of a chunk to anyone who guesses the URL. Strip them so the published tree
 * never contains `.map` files, regardless of how the export is uploaded.
 */

import { readdir, rm, stat } from "node:fs/promises";
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

let removed = 0;
let bytes = 0;

for await (const file of walk(outDir)) {
  if (!file.endsWith(".map")) continue;
  bytes += (await stat(file)).size;
  await rm(file);
  removed += 1;
  console.log(`postbuild: removed ${path.relative(outDir, file)}`);
}

console.log(
  removed > 0
    ? `postbuild: stripped ${removed} source map(s), ${bytes.toLocaleString()} B`
    : "postbuild: no source maps found.",
);
