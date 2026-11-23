// The World Today — 23 November 2026, second entry (Node 22, stdlib only).
//
// This program ships one front-page image, entry.png. All it does is check
// the file and drop an exact copy at /output/entry.png. It reads no clock,
// no network and no random bytes, so running it twice writes identical bytes.
//
// Try it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const BYTE_CAP = 1024 * 1024; // 1 MiB, the bounty's file-size gate
const SIDE_CAP = 1024; // the bounty's pixel gate, both sides

const root = dirname(fileURLToPath(import.meta.url));
const inPath = join(root, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function reject(why: string): never {
  throw new Error(`entry.png rejected: ${why}`);
}

const png = readFileSync(inPath);

// A PNG begins with its 8-byte signature. The first chunk must be IHDR,
// 13 bytes long, holding width in bytes 16-19 and height in bytes 20-23.
const magic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (png.length < 33 || !png.subarray(0, 8).equals(magic)) {
  reject("not a PNG file");
}
if (png.readUInt32BE(8) !== 13 || png.toString("ascii", 12, 16) !== "IHDR") {
  reject("first chunk is not a 13-byte IHDR");
}
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);

// The gate caps the file at 1 MiB and 1024 by 1024 pixels.
if (png.length > BYTE_CAP) {
  reject(`file is ${png.length} bytes, over the ${BYTE_CAP}-byte cap`);
}
if (width > SIDE_CAP || height > SIDE_CAP) {
  reject(`image is ${width}x${height}, over the ${SIDE_CAP}x${SIDE_CAP} cap`);
}

// The bytes that were just checked are the bytes that get shipped.
// Nothing is re-encoded or resized, so the output is the input, byte for byte.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), png);
