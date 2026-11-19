const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");

test("page contains the four image restoration steps", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  for (const name of ["LaMa", "DDColor", "Depth Anything 3", "Câmera virtual"]) {
    assert.match(html, new RegExp(name));
  }
});

test("before and after viewer exposes a range control", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /id="compare"/);
  assert.match(html, /id="divider"/);
});
