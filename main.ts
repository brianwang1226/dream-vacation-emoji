// One Emoji, One Dream Vacation — make.fun entry.
// The entry is a single emoji: Mount Fuji at sunrise, the one mountain
// every traveller pictures when they dream of Japan. No words needed:
// snow on the peak, a red sun behind it, a whole trip in one glance.
// A stranger sees the postcard before reading a word.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🗻";
const MAX_CHARS = 8;

// The gate only accepts 1-8 characters of UTF-8 text, not only whitespace:
// fail loudly instead of handing in an out-of-range entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS || !ENTRY.trim()) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
