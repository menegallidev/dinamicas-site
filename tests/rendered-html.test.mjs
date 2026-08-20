import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("keeps the sales page content and assets wired", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /Teacher,/);
  assert.match(page, /Quero Acessar Agora/);
  assert.match(
    page,
    /https:\/\/pay\.lowify\.com\.br\/checkout\.php\?product_id=QZjeXg/,
  );
  assert.match(page, /https:\/\/pay\.lowify\.com\.br\/go\.php\?offer=q1zasdy/);
  assert.match(page, /https:\/\/pay\.lowify\.com\.br\/go\.php\?offer=v0t2ghe/);

  await Promise.all([
    access(new URL("public/assets/videos/content-video.mp4", root)),
    access(new URL("public/assets/videos/hero-video.mp4", root)),
    access(new URL("public/assets/videos/hero-poster.jpg", root)),
    access(new URL("public/assets/videos/phone-poster.jpg", root)),
    access(new URL("public/assets/testimonials/01.jpeg", root)),
    access(new URL("public/assets/testimonials/06.jpeg", root)),
    access(new URL("public/assets/bonus/bonus-1.jpg", root)),
    access(new URL("public/assets/bonus/bonus-6.jpg", root)),
  ]);
});
