# TasteSkill v2 integration

Read this before using TasteSkill for a landing page, portfolio, or expressive web redesign. It replaces the previous externally resolved TasteSkill route; it does not broaden that route to dashboards, app workflows, Expo/React Native, or native Apple screens.

## Source and entrypoint

Use [the bundled upstream skill](../vendor/taste-skill/SKILL.md), install name `design-taste-frontend`. Resolve `<taste>` below to this LoomLogic UI package's `vendor/taste-skill` directory, not a similarly named global skill. V2 is a multi-file package: copying only `SKILL.md` loses its scripts, references, library, and assets.

The complete bundle is pinned to [Leonxlnx/taste-skill commit f624f37](https://github.com/Leonxlnx/taste-skill/tree/f624f37a8c650b9cc550253104925efe4c8de246/skills/taste-skill). [UPSTREAM.json](../vendor/taste-skill/UPSTREAM.json) records the revision and file checksums. Upstream files are unchanged; this integration contract contains LoomLogic's adaptations. Do not substitute v1, the older v2-experimental skill, or `gpt-taste`.

## Preserve project authority

Follow LoomLogic UI's source-priority order throughout the v2 workflow. Its house rules are design heuristics below user requirements, repository instructions, the implemented design system, real content, accessibility, and LoomLogic's brand and interaction rules.

- Keep the project's framework, primitives, dependency policy, tokens, fonts, logo assets, control geometry, and light/dark behavior. Do not import the optional base CSS reset or JavaScript globally into an existing product.
- Pass `--keep palette,type` when those are fixed. Treat a dealt composition as a candidate within existing constraints. Record a redraw or adaptation when it requires unavailable assets, unsupported claims, an altered logo, or an incompatible product behavior.
- Preserve locked logos and wordmarks. V2's ideas about cutting, stacking, stretching, or filling a brand name never authorize modifying a locked asset. Apply composition to surrounding content instead.
- Keep LoomLogic's monochrome CTAs, restrained blue accents, approved signature assets, fine borders, and established radii. V2's bans on lines, gradients, or particular button shapes do not override an approved design system.
- Follow the Dynamic Interaction System and project motion budget. V2's minimum moving-element count, section entrances, or footage requirement cannot require decorative motion, autoplay, extra dependencies, or a reduced-motion regression.
- Use imagery when it proves the subject. Do not pad a page with four pictures, invented interface fragments, or irrelevant stock to pass a threshold. Keep any real interface fragment truthful; `data-ui` is for real product UI only.
- Preserve approved copy and actual offerings. Upstream's permission to invent sample prices, names, or details applies only to an explicitly requested mockup with clearly identified samples. Do not invent production prices, testimonials, customers, or business facts.
- Treat large display type, short headings, density, and section variation as contextual design advice. Keep semantic headings, localization resilience, responsive readability, and the user's chosen content authoritative.

## Run from the target project root

Read the upstream entrypoint and only the references needed for the task. Inventory the client's material, write claims with evidence, choose a subject-specific idea and useful interaction, then build before layering motion. Do not stack v2 with another broad craft workflow by default.

```bash
node <taste>/scripts/draw.mjs --sector saas --brief "The actual client and conversion goal" --sections showcase,features,pricing,cta,footer --keep palette,type --options 3
node <taste>/scripts/draw.mjs --sector saas --brief "The actual client and conversion goal" --sections showcase,features,pricing,cta,footer --keep palette,type --direction <chosen-id>
node <taste>/scripts/lint.mjs <affected-source-files-or-directory>
node <taste>/scripts/inspect.mjs <local-url-or-html-path>
```

Replace the sector, roles, and brief with the real project. Use `--have` only for assets that exist. The scripts write working output to `.taste-skill/` in the target project; drawings also remember recent directions at `~/.taste-skill/history.json` unless `TASTE_SKILL_HISTORY` is set. They do not update the bundled source. Keep generated working files out of product commits unless intentionally needed.

The inspector needs Node 22+ and installed Chrome, Edge, or Chromium; set `CHROME_PATH` for a nonstandard executable. Draw/lint/asset commands need Node 18+. Image and footage searches need network access and preserve separate asset licenses and credits. No npm dependencies or API keys are required by the bundled scripts. Without the inspector runtime, use available browser tooling for screenshots and disclose the missing automated check.

## Interpret findings honestly

Run the inspector at its default 1440/768/390px widths and inspect the screenshots. Fix overflow, unreadable contrast, broken media, covered text, missing states, and inaccessible behavior. For a single section, review it in its real surrounding page rather than forcing whole-page quotas onto it.

When an upstream style finding conflicts with a documented brand or product requirement, record the rule, evidence, and reason. First retain the raw findings. The inspector supports `--allow <rule-id>` for a justified exception (for example `gradient` for a locked brand asset, `hairline` for required borders, `still-page` for a deliberately sparse motion budget, or `few-pictures` for a content-led page). Allow only the specific conflicting rule and disclose that it applies to the whole inspected page; manually inspect other uses of that pattern. Never allow contrast, overflow, broken images, or text collisions to satisfy a style preference.

The source linter has no `--allow` option. Prefer a documented finding; when an intentional source exception needs an inline `taste-skill-ignore`, keep it confined to the actual required line with an explanatory comment. Do not blanket-ignore files, mark marketing wrappers `data-ui`, alter the meter, or claim an unqualified pass after exceptions. Keep verification results separate from taste recommendations and report checks that could not run.

## Updating the bundle

Review the official upstream revision and copy the complete `skills/taste-skill/` directory plus the repository's MIT `LICENSE`. Rebuild `UPSTREAM.json` checksums for every copied file, then run `node scripts/validate-skill.mjs`. Keep local adaptations here and preserve upstream files so later updates remain auditable.
