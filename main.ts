// One-Line Roast: The Gadget You Use Every Day
// rev2: kept the line unchanged; verified the output is byte-identical across runs.
// Writes a single original roast line to ${MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fitness tracker cheers when I walk to the fridge, then silently judges me for opening it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
