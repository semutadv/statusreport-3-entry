// Status Report Comedy Sprint — batch3 entry (statusreport)
// All green, including the ticket about sleep. Especially that ticket.
// Writes the status line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STATUS_LINE =
  "Status: all green. I closed 214 tickets this week, including the one asking if I ever sleep — resolved as 'working as intended; do not reopen.'";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), STATUS_LINE, "utf8");
}

main();
