import fs from "node:fs";
import path from "node:path";

const skill = fs.readFileSync("SKILL.md", "utf8");
const frontmatter = skill.match(/^---\n([\s\S]*?)\n---\n/);
if (!frontmatter) throw new Error("SKILL.md is missing YAML frontmatter");
if (!/^name:\s*loomlogic-ui\s*$/m.test(frontmatter[1])) {
  throw new Error("SKILL.md must declare name: loomlogic-ui");
}
if (!/^description:\s*\S+/m.test(frontmatter[1])) {
  throw new Error("SKILL.md must declare a non-empty description");
}

const entrypointReferences = [...skill.matchAll(/\]\((references\/[^)]+)\)/g)].map(
  (match) => match[1],
);
for (const reference of new Set(entrypointReferences)) {
  if (!fs.existsSync(reference)) throw new Error(`Missing reference: ${reference}`);
}

for (const required of ["agents/openai.yaml", "THIRD_PARTY_NOTICES.md"]) {
  if (!fs.existsSync(required)) throw new Error(`Missing required package file: ${required}`);
}

const appleReferences = [
  "README.md",
  "ios.md",
  "ipados.md",
  "macos.md",
  "platform-adaptation.md",
  "navigation-presentation.md",
  "windows-multitasking.md",
  "menus-commands.md",
  "input-interaction.md",
  "visual-system.md",
  "accessibility.md",
  "content-feedback.md",
  "localization-rtl.md",
  "app-icons.md",
  "official-resources.md",
  "verification.md",
].map((file) => path.join("references/apple", file));
for (const reference of appleReferences) {
  if (!fs.existsSync(reference)) throw new Error(`Missing Apple reference: ${reference}`);
}

const motionReferences = [
  "references/motion-engine-policy.md",
  "references/motion-tokens.md",
  "references/motion-primitives.md",
];
for (const reference of motionReferences) {
  if (!fs.existsSync(reference)) throw new Error(`Missing motion reference: ${reference}`);
}

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.name === ".git") return [];
    if (entry.isDirectory()) return markdownFiles(target);
    return entry.isFile() && entry.name.endsWith(".md") ? [target] : [];
  });
}

for (const file of markdownFiles(".")) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
    const rawTarget = match[1].trim().split(/\s+/)[0];
    if (!rawTarget || rawTarget.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(rawTarget)) {
      continue;
    }

    const withoutFragment = rawTarget.split("#")[0].split("?")[0];
    if (!withoutFragment) continue;

    const resolved = path.resolve(path.dirname(file), withoutFragment);
    if (!fs.existsSync(resolved)) {
      throw new Error(`Broken local Markdown link in ${file}: ${rawTarget}`);
    }
  }
}

console.log(
  `Validated LoomLogic UI, ${new Set(entrypointReferences).size} entrypoint references, ${motionReferences.length} motion references, and ${appleReferences.length} Apple references.`,
);
