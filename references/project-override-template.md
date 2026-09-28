# Project override template

Copy the template below to `.loomlogic-ui/overrides.md` at a repository root or package root only when the project needs stable UI routing preferences beyond its existing `AGENTS.md` and `DESIGN.md`. `LOOMLOGIC_UI.md` remains supported for existing repositories. Delete unused sections and point to authoritative files instead of duplicating the whole design system or pasting large token tables.

```markdown
# LoomLogic UI project overrides

## Scope

- Applies to: [paths or surfaces]
- Does not apply to: [paths or surfaces]

## Primary project sources

- Design system: [path]
- Tokens/theme: [path]
- Fonts/type scale: [path or font families]
- Color roles: [path and brief semantic notes]
- Canonical primitives: [path]
- Component registry: [path, for example components.json]
- Representative screens: [paths]
- Native Apple targets: [iOS / iPadOS / macOS, deployment versions, schemes]
- Apple UI architecture: [SwiftUI / UIKit / AppKit / Catalyst, scene/document model]

## Component-source policy

- Preferred external sources: [for example: 21st, Magic UI]
- Allowed only with approval: [for example: Aceternity, WebGL effects]
- Avoid: [sources or categories]
- New dependency policy: [rules]

## Visual constraints

- Density: [compact / balanced / spacious]
- Radius/shadow/material rules: [brief constraints]
- Typography/iconography: [brief constraints]
- Brand color usage: [brief semantic rules; keep exact values in the token source]
- Prohibited motifs: [project-specific list]

## Motion policy

- Existing runtimes by target: [CSS / motion/react / View Transitions / GSAP / Reanimated + React Native Gesture Handler / SwiftUI/UIKit/AppKit APIs]
- Motion profiles used: [feedback / quiet / spatial / physical / expressive]
- State and engine ownership: [where canonical state lives and any intentional interaction boundaries]
- Continuous/scroll motion: [policy]
- Reduced-motion expectation: [project-specific behavior]

## Exceptions

- [path or surface]: [intentional exception and reason]

## Verification

- Required commands: [lint, typecheck, tests]
- Required viewports, simulators, or devices: [list]
- Required browser, platform, or accessibility checks: [list]
- Required Apple destinations and input modes: [Simulator/device/Mac, window sizes, touch, keyboard, pointer, drag and drop]
```

This file is subordinate to user instructions, `AGENTS.md`, `DESIGN.md`, and the actual codebase. It cannot waive accessibility or authorize dependency changes, publishing, network access, or destructive cleanup.
