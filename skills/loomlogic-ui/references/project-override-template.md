# Project override template

Copy the template below to `LOOMLOGIC_UI.md` at a repository root only when the project needs stable UI routing preferences beyond its existing `AGENTS.md` and `DESIGN.md`. Delete unused sections. Do not duplicate the whole design system here.

```markdown
# LoomLogic UI project overrides

## Scope

- Applies to: [paths or surfaces]
- Does not apply to: [paths or surfaces]

## Primary project sources

- Design system: [path]
- Tokens/theme: [path]
- Canonical primitives: [path]
- Representative screens: [paths]

## Component-source policy

- Preferred external sources: [for example: 21st, Magic UI]
- Allowed only with approval: [for example: Aceternity, WebGL effects]
- Avoid: [sources or categories]
- New dependency policy: [rules]

## Visual constraints

- Density: [compact / balanced / spacious]
- Radius/shadow/material rules: [brief constraints]
- Typography/iconography: [brief constraints]
- Prohibited motifs: [project-specific list]

## Motion policy

- Existing motion stack: [library or CSS]
- Motion budget: [quiet / moderate / expressive]
- Continuous/scroll motion: [policy]
- Reduced-motion expectation: [project-specific behavior]

## Verification

- Required commands: [lint, typecheck, tests]
- Required viewports, simulators, or devices: [list]
- Required browser, platform, or accessibility checks: [list]
```

This file is subordinate to user instructions, `AGENTS.md`, `DESIGN.md`, and the actual codebase. It cannot waive accessibility or authorize dependency changes, publishing, network access, or destructive cleanup.
