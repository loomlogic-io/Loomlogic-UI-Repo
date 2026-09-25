---
name: loomlogic-ui
description: Orchestrate project-aware web and Expo/React Native UI design, implementation, audits, redesigns, component selection, and motion. Preserve the project's design system while routing to focused skills and vetted sources. Use for substantial UI/UX work; do not use for backend-only tasks or tiny styling edits that need no design judgment.
---

# LoomLogic UI

Act as the routing and quality layer for UI work. Do not duplicate the specialist skills or turn every task into a multi-library exercise. Select the smallest useful set of references, adapt their ideas to the repository, and ship one coherent product surface.

## Source priority

Resolve conflicts in this order:

1. The user's explicit requirements and chosen direction.
2. Repository instructions, especially `AGENTS.md` and nested variants.
3. The project's `DESIGN.md`, `PRODUCT.md`, `.21st/DESIGN.md`, `.21st/design.json`, theme files, tokens, and brand assets.
4. Existing components, APIs, framework conventions, dependency policy, and nearby product UI.
5. Product requirements, real content, and actual interaction states.
6. Installed specialist design skills.
7. External component catalogs and inspiration sources.
8. Generic design conventions.

Existing project evidence always beats a catalog's defaults. If `LOOMLOGIC_UI.md` or `.loomlogic-ui/overrides.md` exists, treat it as a project-specific routing preference below `AGENTS.md` and the core design system; it may narrow sources or motion, but cannot silently weaken accessibility or contradict user instructions. The template is in [references/project-override-template.md](references/project-override-template.md).

## Platform routing

Identify the target platform before choosing specialists or implementation patterns.

- **Web:** use the LoomLogic UI core, the repository's web stack, and the web routes below. Keep lower-level interactive behavior on established accessible primitives, including the project's Radix/shadcn-style primitives when present; preserve semantic HTML, keyboard operation, focus management, and ARIA behavior.
- **Expo / React Native:** use the LoomLogic UI core plus [references/mobile-expo-react-native.md](references/mobile-expo-react-native.md). Native platform conventions refine implementation behavior; they do not replace the product's brand, tokens, content hierarchy, or LoomLogic's visual direction.
- **Optional mobile reference research:** if an Appllama MCP is already available and research would improve the task, read [references/appllama-research.md](references/appllama-research.md) before building. The MCP is research-only and never required. Do not delay or block implementation when it is absent.

For mixed web/native repositories, route each surface independently. Do not import web component libraries into React Native or force mobile-native conventions onto desktop web.

## LoomLogic brand system

Apply this approved system by default to LoomLogic corporate surfaces and products that are explicitly part of the LoomLogic family. Do not impose it on unrelated projects. Explicit user direction and authoritative product-specific brand rules still take precedence.

### Brand relationship

Treat LoomLogic as the parent design language, not a requirement that every product look identical. LoomLogic apps may share typography, spacing, geometry, components, interaction quality, and motion while keeping an independent product name, accent, imagery, and visual identity. When a product is intended to stand alone, use a subtle “by LoomLogic” endorsement rather than forcing the LoomLogic gradient or blue across the interface. Family resemblance should come primarily from structure and craft.

### Color and themes

- Light mode is the default first impression. Design it intentionally rather than as an inversion of dark mode.
- Dark mode must be equally complete, polished, and recognizably part of the same brand.
- Keep approximately 90–95% of the visible interface neutral: cool white, near-black, and cool gray surfaces, text, and borders.
- Blue is the LoomLogic signature, not the default UI color. Reserve it for the approved logo, selected or active details, small indicators, occasional hover feedback, restrained data-visualization accents, system states, thin rules, and subtle branded lighting.
- Avoid blue page washes, large blue sections, blue card systems, gradient borders by default, and pervasive blue charts.

Approved LoomLogic gradient palette:

```css
--loom-ice: #D0E8F0;
--loom-light: #B6D2E7;
--loom-mid: #9ABBE0;
--loom-blue: #80A0D0;
--loom-steel: #7088B8;
--loom-deep: #536D9F;
--loom-dark: #455B86;

--loom-gradient: linear-gradient(
  135deg,
  #D0E8F0 0%,
  #80A0D0 50%,
  #7088B8 100%
);
```

Treat the gradient as a signature asset, not a general-purpose fill.

Use these semantic foundations as approved starting tokens. Map them into the repository's token architecture; do not scatter raw values through components.

```css
/* Light — default */
--background: #FAFAFA;
--surface-primary: #FFFFFF;
--surface-secondary: #F5F6F7;
--surface-tertiary: #EFF1F3;
--text-primary: #0F1115;
--text-secondary: #5E646D;
--text-muted: #90969E;
--border-subtle: #E8EAED;
--border-default: #D8DCE1;
--border-strong: #C8CDD3;

/* Dark */
--background: #090B0D;
--surface-primary: #0E1114;
--surface-secondary: #14181C;
--surface-tertiary: #191E23;
--text-primary: #F4F5F6;
--text-secondary: #A7ADB2;
--text-muted: #747C83;
--border-subtle: #20262B;
--border-default: #2A3137;
--border-strong: #374047;
```

### Controls, logo, and visual character

- Keep primary CTAs monochromatic: near-black with white text in light mode, and near-white with near-black text in dark mode. Secondary actions are transparent or surface-colored with restrained borders. Do not use gradient buttons; blue may appear only in small interaction details when useful.
- The approved LoomLogic icon and wordmark are locked assets. Use an existing approved variant appropriate to the surface. Never redraw, recreate, distort, recolor, re-typeset, add effects to, change the proportions of, or derive an improvised variant from them. The interface adapts to the logo, not the reverse.
- Aim for a calm editorial/luxury-tech character: architectural composition, precise typography, useful density, strong alignment, considered whitespace, and understated technical detail. Premium quality should come from proportion and craft, not decoration.
- Keep geometry restrained: roughly 6–8px for buttons and inputs, 8–10px for small cards, 10–12px for panels, 12–16px for large product or media frames, and 12–14px for modals. Reserve pills for tags, filters, status, and compact metadata.
- Prefer fine borders, tonal surface changes, and minimal shadows. Do not automatically wrap each section in a card.
- Keep motion deliberate and sparse. Favor opacity, masks, line drawing, and subtle transforms; support reduced motion. Useful timing ranges are 150–180ms for micro-interactions, 220–280ms for component transitions, and 400–550ms for rare section transitions, with `cubic-bezier(.22, 1, .36, 1)` as a suitable default ease.
- Reject the generic purple/neon/glassmorphism AI look: no purple carryover, cyberpunk glow, giant blurred shadows, gratuitous gradients, floating glass panels, rounded-everything styling, generic AI imagery, or decorative motion without a product role.

## Start with reconnaissance

Before proposing or changing UI:

1. Read the applicable instructions and design/product context from the hierarchy above.
2. Inspect the target surface, neighboring components, token definitions, package manifest, and styling/motion conventions.
3. Identify the real stack. Preserve it. React, TypeScript, and Tailwind are adaptation targets only when the project uses them or the user requests them.
4. State the UI goal, constraints, and whether this is audit, exploration, implementation, or cleanup.
5. Prefer existing primitives. Search external sources only for a real gap or a material improvement.

Do not create a parallel design system. Do not replace dependencies or component APIs merely because a catalog example uses something different.

## Route deliberately

Use at most one broad craft/review skill and only the specialists the task genuinely needs. Read [references/source-routing.md](references/source-routing.md) when choosing sources or skills.

- Use `21st-ui-build` for project-aware implementation, `21st-ui-explore` for meaningful alternatives, and `21st-ui-review` for evidence-based audits. Use `21st-cli-use` or the 21st MCP for catalog search and retrieval.
- Use `impeccable` for holistic design judgment: hierarchy, information architecture, density, typography, accessibility, responsive behavior, product states, and anti-slop refinement. Follow its own setup and reference-routing requirements when invoked.
- Use `design-taste-frontend` only for landing pages, portfolios, and expressive redesigns—not routine dashboards or dense product workflows.
- Use the Uiverse MCP for small, isolated HTML/CSS interaction ideas such as buttons, loaders, toggles, inputs, and decorative micro-components. Treat results as inspiration or source material, never drop-in production code.
- Use Aceternity UI for polished React/Tailwind compositions, effects, and interaction patterns when an expressive marketing or storytelling surface warrants them. Verify the current official implementation before use.
- Use `animated-component-libraries` for Magic UI and React Bits. Prefer Magic UI for shadcn/Tailwind-aligned animated sections and primitives. Prefer React Bits for distinctive text animation, backgrounds, cursor effects, animated components, and self-contained micro-interactions. When React Bits is a candidate, read [references/react-bits.md](references/react-bits.md) before selecting or installing anything.
- Use `pick-ui-library` when the task is dependency selection rather than visual inspiration. Respect its explicit-invocation policy.
- Use `animate`, `emil-design-eng`, `apple-design`, `gsap-core`, or `animejs` only when motion is central and the selected tool matches the interaction. Use `mobile-native` for touch/mobile-web behavior. Use `review-animations`, `improve-animations`, or `find-animation-opportunities` for their stated read-only review modes.
- For Expo/React Native work, follow the mobile reference first; use `animate-expo` when motion implementation needs a specialist. Web catalogs are visual references only unless their patterns can be rebuilt with native primitives.
- Use `prototype` only when the user explicitly wants selectable variants. It must remain isolated until the user chooses.

If a named skill, MCP, CLI, or site is unavailable, say so briefly and continue with available project components or another appropriate source. Do not invent search results, APIs, or component names.

## Component-source decision tree

```text
Does an existing project component solve the need?
|- Yes -> reuse or extend it.
`- No
   |- Need an accessible behavioral primitive?
   |  `- choose a maintained primitive/library via project conventions or pick-ui-library.
   |- Need project-matched React/shadcn structure?
   |  `- search 21st; consider Magic UI when purposeful motion is part of the need.
   |- Need a small CSS micro-component or interaction idea?
   |  `- search Uiverse, then reconstruct it with project tokens and semantics.
   |- Need an expressive React/Tailwind section or spatial effect?
   |  `- compare Aceternity, Magic UI, and 21st results.
   |- Need an isolated animated visual effect, text treatment, background, or cursor interaction?
   |  `- search React Bits, then check accessibility, motion, rendering, and device cost.
   `- No source fits -> implement the simplest native project solution.
```

Shortlist no more than three candidates. Compare fit, accessibility, dependency cost, performance, responsiveness, styling isolation, maintenance, and license/source confidence. Choose one; do not collage incompatible visual languages.

## Adaptation contract

External code is raw material. Before it enters the project:

- convert it to the repository's framework, language, file structure, component patterns, and naming;
- preserve public component APIs unless the user authorizes a breaking change;
- replace arbitrary colors, spacing, typography, radii, shadows, z-indexes, and motion values with project tokens;
- preserve semantic HTML, accessible names, keyboard operation, focus visibility, contrast, target size, and correct ARIA behavior;
- support loading, disabled, empty, error, overflow, long-content, and localization-sensitive states when relevant;
- verify behavior at the project's breakpoints and on touch when applicable;
- provide `prefers-reduced-motion` behavior and avoid hiding essential content behind animation;
- prefer CSS for simple transitions; add a motion dependency only for interactions that need it;
- scope styles locally. Never leak broad selectors, resets, keyframe names, CSS variables, or utility changes into unrelated UI;
- remove demo code, placeholder copy, unused variants, unnecessary wrappers, redundant CSS, and unneeded dependencies;
- verify packages and APIs against the installed version before coding.

For React/TypeScript/Tailwind projects specifically: keep components typed, expose intentional props, use the existing class composition/variant utility, preserve server/client boundaries, and avoid turning a one-off visual into a new global primitive without evidence it will be reused.

## Quality gates

Reject or rewrite results that exhibit:

- blind copy/paste or unexplained catalog provenance;
- a second visual language alongside the product's existing system;
- decorative gradients, glow, glass, huge display type, card grids, or animations used by reflex;
- animation on every section, layout-property animation without need, inaccessible parallax, or missing reduced-motion handling;
- global CSS leakage, arbitrary z-indexes, hardcoded colors where tokens exist, or fragile selector coupling;
- unnecessary dependencies, duplicated primitives, large runtime effects for minor decoration, or hydration/client-boundary regressions;
- semantic regressions, div-based controls, poor focus behavior, inaccessible contrast, or mobile-hostile targets;
- fake product data, lorem ipsum, missing states, or inconsistent UX copy;
- “vibe-coded” inconsistency: locally attractive pieces that do not form a coherent system.

Gradients, glow, glass, and strong motion are not forbidden; they need a clear product role, project fit, and a restrained budget.

## Workflows and verification

Read [references/workflows.md](references/workflows.md) for audit, redesign, new feature UI, mobile/Expo, landing page, dashboard, motion, design-system cleanup, and component-selection workflows. Read only the relevant workflow.

Verify in proportion to the change: typecheck/lint/tests, deterministic design review when available, and runtime inspection at representative desktop/mobile sizes. Exercise keyboard navigation and interaction states. Check the console and confirm reduced-motion behavior for motion-heavy work.

Report the direction chosen, project primitives reused, external sources adapted, dependencies changed, meaningful tradeoffs, files changed, and verification performed. Clearly separate proven defects from subjective recommendations.

## Prompt examples

For practical invocations and project override examples, read [references/prompts.md](references/prompts.md).
