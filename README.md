# LoomLogic UI

LoomLogic UI is a Codex-friendly orchestration skill for designing, building, reviewing, and polishing Web, Expo/React Native, and native Apple interfaces. It keeps the repository's own design system authoritative and adds LoomLogic's calm monochrome, editorial, luxury-tech quality bar where the product belongs to the LoomLogic family.

The skill is deliberately modular: [the entrypoint](SKILL.md) contains shared priorities and routing, while detailed workflows and platform guidance live under [`references/`](references/).

Its [Dynamic Interaction System](references/dynamic-interaction-system.md) adds coherent behavior for direct manipulation, interruptible springs, velocity and momentum, spatial/shared-element continuity, morphing components, scroll-linked behavior, adaptive motion, optical typography, depth, and synchronized feedback. It includes reusable Codex rules, LoomLogic Health and Northstone patterns, and an audit/refactor mode. The system borrows fluid-interface physics and design thinking without copying Apple styling or displacing the repository's Radix/shadcn base and vetted component sources.

## Motion architecture

The [motion engine policy](references/motion-engine-policy.md) is authoritative for runtime selection and ownership:

- CSS handles simple web transitions.
- `motion/react` is the default web product-motion engine.
- View Transitions progressively enhance route/page continuity and never replace correct navigation, focus, history, or fallbacks.
- GSAP is reserved for bounded complex, cinematic, timeline-heavy, or marketing sequences and never co-owns an interaction with Motion.
- Expo/React Native uses Reanimated plus React Native Gesture Handler for continuous gesture-driven motion.
- Native Apple targets use native SwiftUI, UIKit, and AppKit animation APIs. Motion and GSAP are web-only.

[Motion tokens](references/motion-tokens.md) provide the shared feedback, quiet, spatial, physical, and expressive vocabulary. [Motion primitives](references/motion-primitives.md) define reusable behavioral contracts. Every interaction keeps one canonical state owner and one motion engine.

## Routing

| Target | Guidance |
| --- | --- |
| Web | LoomLogic UI core plus repository conventions, accessible primitives, and the CSS → Motion → View Transitions/GSAP specialist hierarchy |
| Expo / React Native | LoomLogic UI core plus the native-mobile reference and Reanimated/Gesture Handler for continuous gestures |
| Expo / React Native with Appllama MCP available | The same build path, with optional pre-build reference research |
| Native Apple | LoomLogic UI core plus the `references/apple/` layer and native system animation APIs for SwiftUI, UIKit, AppKit, and Mac Catalyst |
| iPadOS | Its own resizable, multi-input, multiwindow adaptation profile—not a scaled iPhone layout |

Appllama is optional and research-only. The skill works without its MCP, and its absence must never block design or implementation.

## Expo / React Native coverage

The Expo / React Native path covers Apple HIG and Android platform conventions, semantic colors, Dynamic Type and accessibility, native controls, navigation and back semantics, gestures and Reanimated, perceived performance, release-build profiling, and simulator/device visual QA. It keeps the existing LoomLogic brand direction rather than replacing it with an external app's visual language.

Reference research is intentionally bounded:

- normal feature: 3–5 apps and 5–10 relevant screens;
- major redesign: 5–8 apps and 10–20 screens;
- 20–30+ screens only for an explicit deep competitive UX audit.

Research extracts patterns and interaction grammar. It never authorizes cloning screens, pixels, copy, artwork, or trade dress.

## Native Apple coverage

The [Native Apple reference layer](references/apple/) makes Apple platforms a full target beside Web and Expo/React Native. It covers separate iOS, iPadOS, and macOS profiles; cross-platform adaptation; navigation and presentation; windows and multitasking; menus and commands; touch, keyboard, pointer, focus, gestures, and drag and drop; Liquid Glass and standard materials; typography, semantic color, and SF Symbols; accessibility; interface writing and feedback; loading and progress; localization and right-to-left layouts; app icons and Icon Composer; official resources; and runtime verification.

Native Apple guidance separates platform chrome from branded content. Standard Apple navigation, controls, commands, presentations, materials, focus, animation APIs, and accessibility behavior remain familiar, while LoomLogic identity stays strong in hierarchy, content, data visualization, product interactions, typography where appropriate, and restrained brand accents. The Dynamic Interaction System informs behavior and interaction quality; it does not visually skin web apps as Apple software or replace native Apple frameworks.

The repository links to current official Apple sources instead of copying Apple UI kits, templates, SF Symbols, Icon Composer output, or other proprietary assets. Date-sensitive work should recheck the live HIG, framework documentation, SDK availability, and Apple Design Resources.

## Install

Install one user-wide canonical copy with the agent-skills CLI:

```bash
npx skills@latest add loomlogic-io/Loomlogic-UI-Repo --skill loomlogic-ui --global --yes
```

Update that copy with:

```bash
npx skills@latest update loomlogic-ui --global --yes
```

Do not install another copy inside each product repository. The CLI's global universal installation normally lives at `~/.agents/skills/loomlogic-ui/` and can be linked to supported agents. Agent-specific global directories remain supported when the CLI selects them.

## Project-specific configuration

Keep product-specific direction in `.loomlogic-ui/overrides.md` at the repository or package root. Use the [project override template](references/project-override-template.md) to point at the project's authoritative tokens, fonts, color roles, component registry/primitives, motion intensity, preferred sources, exceptions, and verification commands. `LOOMLOGIC_UI.md` remains supported for existing repositories.

The skill discovers these files automatically and then reads the named theme/component sources. The override narrows the global skill for one project; it must not contain a forked copy of `SKILL.md` or duplicate large token tables.

## Use

```text
Use $loomlogic-ui to implement this settings page. Preserve the repository's
design system, components, APIs, and accessibility behavior.
```

```text
Use $loomlogic-ui to design this Expo onboarding flow. Apply the LoomLogic
core plus the mobile guidance. If Appllama research is available, keep it to
the normal feature budget and extract patterns rather than cloning screens.
```

```text
Use $loomlogic-ui to build this native Apple feature for iPhone, iPad, and Mac.
Preserve the project's architecture and brand, apply each platform profile,
and verify resizable windows, input modes, commands, accessibility, and states.
```

See [practical prompts](references/prompts.md) for audits, redesigns, dashboards, mobile flows, native Apple work, dynamic interactions, motion refactors, and component selection.

## Design authority

The order is: explicit user direction, repository instructions, product/design documentation and tokens, existing components and framework conventions, then specialist skills and external inspiration. External catalogs are raw material, not a second design system.

## Attribution

The native-mobile and optional research guidance incorporates adapted ideas from the MIT-licensed [Appllama skills](https://github.com/Appllama/appllama-skills). The Dynamic Interaction System uses design-thinking and motion-physics foundations adapted from Emil Kowalski's MIT-licensed [Apple Design skill](https://github.com/emilkowalski/skills/tree/main/skills/apple-design). See [third-party notices](THIRD_PARTY_NOTICES.md).
