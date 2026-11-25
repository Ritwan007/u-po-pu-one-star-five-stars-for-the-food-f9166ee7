import { mkdirSync, writeFileSync } from "node:fs";

// One-star alien review of Earth that still slips in a real compliment
// about the food. Single sentence, 138 characters.
const ENTRY =
  "One star \u2014 the locals insist on small talk, the sky leaks, and gravity is rude, but the nasi goreng made all three of my stomachs applaud.";

// Gate self-check: mirror the sealed scorer so an invalid entry is never
// written silently. The competition gate requires UTF-8 text of 1-200
// characters, not only whitespace, in a single sentence.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is blank");
}
const sentences = ENTRY.trim().split(/(?<=[.!?])\s+/);
if (sentences.length !== 1) {
  throw new Error(`entry must be one sentence, found ${sentences.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
