# Practical prompt examples

These examples are starting points, not rigid command syntax.

## Audit an existing page

```text
Use $loomlogic-ui to audit the billing settings page. Treat AGENTS.md, DESIGN.md,
the token files, and existing settings components as authoritative. Inspect the
runtime and code. Report proven accessibility, responsive, state, performance,
and design-system issues separately from subjective recommendations. Do not edit
anything yet.
```

## Build a product feature

```text
Use $loomlogic-ui to implement the saved-search panel in this React/TypeScript/
Tailwind app. Reuse existing primitives and APIs first. If a component gap is
real, compare at most three relevant results from 21st, Uiverse, Aceternity,
Magic UI, or React Bits and choose the best project fit. Adapt it to our tokens,
keyboard behavior, responsive layout, empty/error/loading states, and reduced
motion. Avoid new dependencies unless the interaction genuinely requires one.
```

## Redesign with alternatives

```text
Use $loomlogic-ui to explore three genuinely different redesign directions for
the onboarding stepper. Keep the product flow, content, tokens, stack, and
accessibility constraints fixed. Vary hierarchy, density, and interaction model,
not just color. Show tradeoffs and wait for my selection before changing the
production route.
```

## Landing page

```text
Use $loomlogic-ui to build the launch page from the supplied brief and assets.
Use the project's design system first and Impeccable or design-taste-frontend as
the primary craft lens. Use Aceternity, Magic UI, React Bits, Uiverse, or 21st
only for specific gaps. Keep the composition coherent, motion restrained,
performance strong, and the page fully responsive and accessible.
```

## Dashboard cleanup

```text
Use $loomlogic-ui to clean up this operations dashboard without changing its
data behavior or public component APIs. Consolidate token drift and duplicate
primitives, improve scanability at laptop widths, and cover loading, empty,
stale, partial, and error states. Decorative effects are out of scope.
```

## Expo / React Native flow

```text
Use $loomlogic-ui to implement this Expo checkout flow. Preserve the product's
tokens and the LoomLogic monochrome/editorial direction, then apply the native
mobile guidance for navigation, back behavior, semantic colors, accessibility,
gestures, performance, and simulator QA. If the Appllama MCP is already
available, research only the relevant pattern within the normal feature budget;
extract interaction patterns rather than copying a competitor's screen.
```

## Motion pass

```text
Use $loomlogic-ui to improve motion in the command palette and side panel. First
identify what motion should communicate and how often users see it. Reuse the
current motion stack, make transitions interruptible, keep frequent actions
fast, and implement a meaningful reduced-motion mode. Do not add ambient motion.
```

## Component search only

```text
Use $loomlogic-ui to select a premium toggle for this settings row. Do not edit
the project yet. Check our existing primitives, then compare up to three focused
options from Uiverse, 21st, Magic UI, or Aceternity. Evaluate semantics, keyboard
behavior, token adaptability, dependency cost, performance, responsiveness, and
maintenance. Recommend one and describe the adaptation required.
```

## Project override

```text
Use $loomlogic-ui and obey this repository's LOOMLOGIC_UI.md. The override may
narrow sources and visual style, but AGENTS.md, DESIGN.md, accessibility, and the
user's request still take precedence.
```

## React Bits component search

```text
Use $loomlogic-ui to find a React Bits component for this hero. Search the free
reactbits.dev catalog first unless this repository is already configured for
React Bits Pro. Compare no more than three candidates. Prefer a Tailwind or CSS
variant that matches the existing stack, inspect its real dependencies, and
reject options that add unjustified WebGL, continuous motion, cursor takeover,
or poor reduced-motion behavior. Adapt the winner to our tokens and semantics;
do not paste the demo unchanged.
```
