const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const { formatMessage } = require("../script.js");

test("index.html has required content", () => {
  const html = fs.readFileSync("index.html", "utf8");
  assert.match(html, /DevOps Training/);
  assert.match(html, /CI\/CD Deployment Successful/);
  assert.match(html, /Deployed automatically using GitHub Actions/);
});

test("formatMessage works", () => {
  assert.match(formatMessage(new Date(0)), /1970-01-01/);
});
