# LoomLogic UI

LoomLogic UI is a Git-backed design-system monorepo and interactive UI Lab for building, comparing, and promoting LoomLogic interface packages without turning the lab into a CMS or page builder.

V1 includes a package browser, kit browser, component previews, light and dark themes, desktop/tablet/mobile frames, state and motion controls, side-by-side kit comparison, lifecycle status, copyable imports and Codex prompts, composed patterns, and full-page previews.

## Workspace

```text
apps/
  ui-lab/                 Interactive package and kit workbench
packages/
  tokens/                 @loomlogic/tokens
  core/                   @loomlogic/core
  buttons/                @loomlogic/buttons
  icons/                  @loomlogic/icons
  forms/                  @loomlogic/forms
  navigation/             @loomlogic/navigation
  data-display/           @loomlogic/data-display
  motion/                 @loomlogic/motion
  effects/                @loomlogic/effects
  patterns/               @loomlogic/patterns
  pages/                  @loomlogic/pages
  labs/                   @loomlogic/labs
registry/
  components/ kits/ patterns/ pages/
skills/
  loomlogic-ui/           Canonical Codex skill package
```

The original root `SKILL.md`, `references/`, and `agents/` remain available for existing installer compatibility. The monorepo copy lives at `skills/loomlogic-ui/` so UI families and Codex guidance can evolve as distinct artifacts.

## Start the lab

Requires Node.js 22 or newer and pnpm 12.

```bash
corepack enable
pnpm install
pnpm dev
```

Open the local URL printed by Vite. The lab reads its catalog from `registry/`; there is no authentication, database, CMS, or drag-and-drop editing layer.

## Validate

```bash
pnpm validate
```

This runs lint, TypeScript checks, registry tests, and a production build.

## Design model

- Packages are technical distribution units with explicit imports.
- Kits are visual or behavioral families assembled from packages.
- `LL Core` is the base kit. Derived UI kits extend it directly and never form deep inheritance chains.
- Every app selects a default UI, motion, and icon kit and starts with `allowExperimental: false`.
- Third-party-derived and speculative work lives in `@loomlogic/labs` until promoted.
- Package approval and Codex-skill recommendation are separate review decisions.

Read the detailed guides:

- [Architecture](docs/architecture.md)
- [Adding a component](docs/adding-a-component.md)
- [Promotion flow](docs/promotion-flow.md)
- [Application configuration](docs/app-config.md)
- [Consuming packages](docs/consuming-packages.md)

## LoomLogic UI skill

The repository continues to include the LoomLogic UI Codex skill for designing, building, reviewing, and polishing web and Expo/React Native interfaces. It keeps each repository's design system authoritative and adds LoomLogic's calm monochrome, editorial, luxury-tech quality bar where the product belongs to the LoomLogic family.

The skill's [Dynamic Interaction System](skills/loomlogic-ui/references/dynamic-interaction-system.md) covers direct manipulation, interruptible springs, spatial/shared-element continuity, morphing components, scroll-linked behavior, adaptive motion, optical typography, depth, and synchronized feedback without displacing accessible Radix/shadcn-style foundations.

Install it with the agent-skills CLI:

```bash
npx skills@latest add loomlogic-io/Loomlogic-UI-Repo --skill loomlogic-ui
```

Example:

```text
Use $loomlogic-ui to implement this settings page. Preserve the repository's
design system, components, APIs, and accessibility behavior.
```

Appllama research remains optional and research-only. See the [skill prompts](skills/loomlogic-ui/references/prompts.md), [mobile guidance](skills/loomlogic-ui/references/mobile-expo-react-native.md), and [third-party notices](skills/loomlogic-ui/THIRD_PARTY_NOTICES.md).

## V1 boundaries

V1 intentionally excludes authentication, a database, a CMS, and a drag-and-drop builder. Packages are private and are not published by this repository workflow. Publishing, merging, or promoting recommendations to the Codex skill requires explicit approval.
