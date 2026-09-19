import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("the homepage composes an experience section after the hero", () => {
  const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /import \{ Experience \} from "@\/components\/sections\/Experience";/);
  assert.match(page, /<Hero \/>\s*<Experience \/>/);
});
