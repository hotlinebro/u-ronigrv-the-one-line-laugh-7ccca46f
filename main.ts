// The One-Line Laugh — make.fun entry
// u-ronigrv-the-one-line-laugh-7ccca46f
//
// The program writes one funny line, a single sentence of at most 200
// characters, to /output/entry.txt (the artifact the judge reads).
// Node 22+, stdlib only. Run: node main.ts
//
// The line (128 characters): snoozing every alarm is reframed as a
// perfect attendance record — the surprise lands on the last three
// words, and the setup (five alarms, all snoozed) is an everyday truth
// with nothing left to explain.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I set five alarms to wake up on time and snoozed all five, which is the closest I have ever come to a perfect attendance record.";

// The gate: UTF-8 text of 1 to 200 characters, not only white space,
// and a single line — the entry is one line, nothing else.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`expected 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("expected a non-blank line");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("expected a single line, got a line break");
}

function main(): void {
  const out = process.argv[2] ?? "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, LINE, "utf8");
  console.log(LINE);
  console.log(`(${LINE.length} characters)`);
}

main();
