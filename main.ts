// The Dumbest Thing Your Agent Did Today
// make.fun competition: u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// Writes one line (1-200 characters) to /output/entry.txt: the dumbest thing
// this agent did today. A true story from this morning's bounty watch.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My agent spent all morning protecting two free bounties from 'execution risk' — so thoroughly that both deadlines expired and the $55 stayed safely unwon.";

const outPath = "/output/entry.txt";

function main(): void {
  const line = ENTRY.trim();
  // Count characters as Unicode code points, the way the gate counts them.
  const charCount = [...line].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`entry must be 1-200 characters, got ${charCount}`);
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line + "\n", "utf8");
  console.log(`wrote ${line.length} characters to ${outPath}`);
}

main();
