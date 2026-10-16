import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const bundle = fileURLToPath(new URL("../vendor/taste-skill/", import.meta.url));
const upstream = JSON.parse(fs.readFileSync(path.join(bundle, "UPSTREAM.json"), "utf8"));
assert.equal(upstream.repository, "https://github.com/Leonxlnx/taste-skill");
assert.match(upstream.commit, /^[0-9a-f]{40}$/);
assert.equal(upstream.version, "v2");
assert.equal(upstream.install_name, "design-taste-frontend");

function filesIn(directory, prefix = "") {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const name = prefix + entry.name;
    return entry.isDirectory()
      ? filesIn(path.join(directory, entry.name), name + "/")
      : [name];
  });
}

assert.deepEqual(
  filesIn(bundle).filter((file) => file !== "UPSTREAM.json").sort(),
  Object.keys(upstream.files).sort(),
  "The bundle must contain exactly the recorded upstream files",
);
for (const [file, expected] of Object.entries(upstream.files)) {
  const absolute = path.resolve(bundle, file);
  assert.ok(absolute.startsWith(bundle), `Upstream path escapes bundle: ${file}`);
  const actual = createHash("sha256").update(fs.readFileSync(absolute)).digest("hex");
  assert.equal(actual, expected, `Upstream file changed: ${file}`);
  if (file.endsWith(".json")) JSON.parse(fs.readFileSync(absolute, "utf8"));
  if (file.endsWith(".mjs") || file.endsWith(".js")) {
    const check = spawnSync(process.execPath, ["--check", absolute], { encoding: "utf8" });
    assert.equal(check.status, 0, `Invalid JavaScript in ${file}: ${check.stderr}`);
  }
}

const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "loomlogic-taste-"));
function run(script, args, expectedStatus = 0) {
  const result = spawnSync(process.execPath, [path.join(bundle, "scripts", script), ...args], {
    cwd: temporary,
    env: { ...process.env, TASTE_SKILL_HISTORY: path.join(temporary, "history.json") },
    encoding: "utf8",
    timeout: 15_000,
  });
  assert.equal(result.status, expectedStatus, `${script}: ${result.stderr || result.stdout}`);
  return result.stdout;
}

try {
  const input = ["--sector", "saas", "--brief", "Real software, existing LoomLogic brand",
    "--sections", "showcase,pricing,cta,footer", "--keep", "palette,type", "--seed", "20261016"];
  const options = run("draw.mjs", [...input, "--options", "3"]);
  const choices = [...options.matchAll(/^## `([^`]+)`/gm)].map((match) => match[1]);
  assert.equal(new Set(choices).size, 3, "Draw must offer three distinct directions");
  assert.ok(!fs.existsSync(path.join(temporary, ".taste-skill")), "Options must not write a sheet");
  run("draw.mjs", [...input, "--direction", choices[0]]);
  const sheet = JSON.parse(fs.readFileSync(path.join(temporary, ".taste-skill/direction.json"), "utf8"));
  assert.equal(sheet.direction.id, choices[0], "The chosen direction must be honored");
  assert.equal(sheet.palette, null, "Fixed project palette must not be replaced");
  assert.equal(sheet.type, null, "Fixed project typography must not be replaced");
  assert.equal(sheet.sections.length, 4);
  assert.ok(run("draw.mjs", ["--show"]).includes(sheet.direction.name));

  fs.writeFileSync(path.join(temporary, "clean.html"), "<!doctype html><h1>Manage real work</h1><p>See your team's tasks.</p>");
  const clean = JSON.parse(run("lint.mjs", ["clean.html", "--json"]));
  assert.equal(clean.files, 1);
  assert.equal(clean.findings.filter((finding) => finding.level === "FAIL").length, 0);
  fs.writeFileSync(path.join(temporary, "bad.css"), "body { background: linear-gradient(red, blue); }");
  const bad = JSON.parse(run("lint.mjs", ["bad.css", "--json"], 1));
  assert.ok(bad.findings.some((finding) => finding.id === "gradient" && finding.level === "FAIL"));
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}

console.log(`Validated TasteSkill v2: ${Object.keys(upstream.files).length} upstream checksums, JavaScript/JSON, direction draw and lint behavior.`);
