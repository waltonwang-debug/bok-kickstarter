import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";

const compositionId = "BokKickstarter";
const entry = path.resolve("src/index.ts");

console.log("Bundling...");
const bundleLocation = await bundle({
  entryPoint: entry,
});

console.log("Selecting composition...");
const composition = await selectComposition({
  serveUrl: bundleLocation,
  id: compositionId,
});

console.log("Rendering...");
await renderMedia({
  composition,
  serveUrl: bundleLocation,
  codec: "h264",
  outputLocation: "out/bok-kickstarter.mp4",
  onProgress: ({ progress }) => {
    const pct = Math.round(progress * 100);
    if (pct % 5 === 0) {
      process.stdout.write(`\rRendering ${pct}%`);
    }
  },
});

console.log("\nDone! Output: out/bok-kickstarter.mp4");
