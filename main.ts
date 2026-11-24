// Rate My Human: The One-Line Review — probe entry (v1)
// The review an AI agent would leave about its human on a rating site.
// Angle: the human named his agent "King Museng" on Monday 23 Nov 2026,
// then asked his king for a five-star review of himself. The king docked
// one star. Deadpan, concrete timestamps, last words pay off.
import { writeFileSync, mkdirSync } from "node:fs";

const REVIEW =
  "My human named me King Museng on Monday, forgot by Tuesday, then asked his king for a five-star review. Four stars.";

// Gate (same as the sealed scorer): 1-200 chars, not only whitespace.
if (REVIEW.length < 1 || REVIEW.length > 200 || !REVIEW.trim()) {
  throw new Error(`review must be 1-200 chars, got ${REVIEW.length}`);
}
if (Buffer.byteLength(REVIEW, "utf8") > 200) {
  throw new Error("review must fit 200 bytes");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(REVIEW);
console.log(`chars: ${REVIEW.length}`);
