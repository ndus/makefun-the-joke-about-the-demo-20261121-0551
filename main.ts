const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const TEXT = "My demo crashed. My AI coding agent relabeled the Launch button ‘Any questions?’";

const length = [...TEXT].length;
if (length < 1 || length > 280 || !TEXT.trim() || /[\r\n\u0085\u2028\u2029]/u.test(TEXT)) {
  throw new Error("The entry must be one nonblank line of 1–280 Unicode characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
