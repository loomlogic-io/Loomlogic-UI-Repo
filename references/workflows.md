# UI workflows

Read only the section matching the current task. Shared source priority, adaptation, and quality gates remain in `SKILL.md`.

## Audit

1. Establish project intent from instructions, design context, tokens, and representative screens.
2. Inspect the actual runtime when available, then inspect code to validate observed behavior.
3. Use `21st-ui-review` for deterministic checks; use `impeccable` when the request needs broader hierarchy, density, UX, or craft judgment.
4. Cover semantics, keyboard/focus, contrast, responsive overflow, touch, loading/empty/error states, reduced motion, performance, token drift, and duplicate primitives.
5. Rank findings by user impact and confidence. Separate proven defects from subjective recommendations.
6. Do not modify code unless the user asked for fixes. For fixes, apply high-confidence changes first and verify each class of issue.

## Redesign

1. Audit the existing surface before choosing a direction. Identify what must remain recognizable and what is failing.
2. If direction is undecided, use `21st-ui-explore` or explicit `prototype`; keep content, stack, tokens, and requirements fixed across variants.
3. Make alternatives differ in hierarchy, density, navigation, interaction model, or composition—not merely color.
4. Recommend a direction with tradeoffs and get the user's choice when alternatives were requested.
5. Implement via `21st-ui-build` or the chosen primary craft skill. Migrate incrementally when a big-bang rewrite would risk behavior or APIs.
6. Verify parity for product behavior and states, then remove abandoned prototype code.

## New feature UI

1. Map the user goal, entry point, happy path, permissions, validation, loading, empty, error, and success states.
2. Reuse the nearest project pattern before searching catalogs.
3. For a missing primitive, choose behavior and accessibility first; visual effects come later.
4. Search 21st, Uiverse, Aceternity, Magic UI, or React Bits only for the specific gap.
5. Adapt one selected pattern to the existing API and tokens. Keep data/state ownership consistent with the application.
6. Test keyboard, touch, responsive layout, long content, failure states, and reduced motion.

## Expo / React Native

1. Read `mobile-expo-react-native.md` and inspect the actual Expo/React Native stack, navigation tree, tokens, native dependencies, and supported platforms.
2. Define the flow's route and back semantics before styling. Keep product and LoomLogic brand rules authoritative while using native controls and platform behavior.
3. If the Appllama MCP is already available and reference research would change a decision, read `appllama-research.md` and stay within the matching research budget. Otherwise proceed without it.
4. Implement complete state cycles with semantic colors, safe areas, large text, screen-reader behavior, keyboard handling, and reduced motion.
5. Use Reanimated and gesture worklets only where continuous or interruptible native motion requires them. Preserve the project's existing stack.
6. Verify the full flow in the simulator/emulator and profile the release build on representative hardware. Report which platforms, devices, themes, accessibility settings, and states were actually tested.

## Landing page or marketing surface

1. Clarify audience, promise, proof, conversion action, content hierarchy, and available brand assets.
2. Use `design-taste-frontend` or `impeccable` as the primary craft lens. Use 21st to explore/search when useful.
3. Select external effects only after the narrative and composition work without them.
4. Aceternity or Magic UI can support expressive sections; Uiverse can support isolated controls; React Bits can support a restrained hero/background effect.
5. Avoid a stitched-template page: repeated card grids, gradient text, glow everywhere, identical reveal animations, fake logos, and generic claims.
6. Protect Core Web Vitals, readable contrast, responsive typography, asset quality, and immediate access to the primary CTA.

## Application dashboard

1. Prioritize tasks, scan paths, information hierarchy, density, state clarity, and data legibility.
2. Use `impeccable`, `21st-ui-build`, or `21st-ui-review`; do not route to `design-taste-frontend` by default.
3. Prefer established product primitives and proven chart/table libraries. Use `pick-ui-library` when dependency choice is the actual question.
4. Use animation for causality, state change, or orientation—not ambient decoration.
5. Cover sparse/dense data, overflow, filters, saved state, permissions, loading, empty, stale, partial, and error states.
6. Verify at laptop widths as well as wide desktop; dashboards often fail first at intermediate widths.

## Motion

1. Explain the purpose: feedback, continuity, spatial orientation, attention, or delight.
2. Check frequency. Repeated workflows demand faster and quieter motion.
3. Reuse the existing motion stack. Choose CSS for simple transitions, Motion for React layout/gesture needs, GSAP for complex timelines/scroll, Anime.js for SVG/stagger choreography.
4. Animate compositor-friendly properties where possible and make interactions interruptible.
5. Define exit behavior, input modality, and reduced-motion alternative before polishing the happy path.
6. Test on representative hardware; pause offscreen/hidden continuous effects and avoid essential information encoded only in motion.

## Design-system cleanup

1. Inventory tokens, primitives, variants, duplicate patterns, hardcoded values, and API differences before editing.
2. Distinguish intentional exceptions from drift. Do not normalize away brand-defining behavior.
3. Choose canonical primitives based on actual usage and accessibility, not file age or visual preference.
4. Consolidate in small migrations with compatibility wrappers when needed; avoid simultaneous visual and behavioral rewrites.
5. Remove unused CSS/dependencies only after proving call sites are migrated.
6. Document durable decisions in the project's existing design documentation. Do not create a new documentation system if one already exists.

## Component selection

1. Write the required behavior, states, content constraints, and integration boundaries before searching.
2. Check existing project components, then shortlist at most three external candidates.
3. Evaluate with the selection rubric in `source-routing.md`.
4. Inspect source and package requirements. Verify license/source confidence when the code will ship.
5. Build a small isolated spike only when compatibility is uncertain; do not let the spike become production by accident.
6. Select one candidate, adapt it under the contract in `SKILL.md`, and remove discarded code/dependencies.
