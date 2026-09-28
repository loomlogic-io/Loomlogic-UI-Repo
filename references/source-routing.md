# Source and skill routing

Read this reference when selecting design skills, catalogs, or motion tools. Availability can change; inspect the current environment and never assume a source is callable merely because it appears here.

For any motion runtime decision, read [the motion engine policy](motion-engine-policy.md). Its CSS → `motion/react` → progressive View Transitions / specialist GSAP hierarchy and native platform boundaries are authoritative over specialist examples.

## Broad craft and project workflows

| Resource | Use it for | Avoid using it for |
| --- | --- | --- |
| `21st-ui-build` | Production implementation grounded in project context and 21st supply | An undecided direction or critique-only request |
| `21st-ui-explore` | Three meaningfully different directions with fixed project constraints | Straightforward implementation |
| `21st-ui-review` | Deterministic review, accessibility, responsiveness, and token drift | Silent redesigns |
| `21st-ai` | Generating and iterating on 21st variants when the user wants that workflow | Routine hand-built changes when a direction is already clear |
| `21st-cli-use` | Searching, inspecting, or installing 21st catalog components and themes | Replacing working project primitives without a reason |
| `impeccable` | Holistic UI craft across product and marketing surfaces | Backend-only work; skipping its required context setup |
| `design-taste-frontend` | Distinctive landing pages, portfolios, and expressive redesigns | Dashboards, tables, and multi-step product workflows |
| `prototype` | Isolated, user-selectable UI variants | Production changes before the user selects a winner |

Do not stack `21st-ui-build`, `impeccable`, and `design-taste-frontend` by default. Choose the primary craft workflow whose scope best matches the task, then add narrow specialists only when needed.

For Expo/React Native tasks, route through `mobile-expo-react-native.md` before choosing specialists. Use `animate-expo` for native motion implementation when needed. Treat web catalogs as inspiration only; do not import DOM, CSS, Radix, or shadcn components into React Native.

For native Apple tasks, route through `apple/README.md` and the relevant iOS, iPadOS, or macOS profile before choosing specialists. Apple Human Interface Guidelines and first-party SwiftUI, UIKit, AppKit, Xcode, and Accessibility documentation are the platform authority. Existing project architecture and deployment targets remain authoritative for implementation. Treat web catalogs, Expo patterns, screenshots, and third-party app research as product inspiration only; do not translate them literally into native controls or behavior.

## Native Apple sources

| Need | Primary route | Boundary |
| --- | --- | --- |
| Platform behavior and components | Current Apple HIG topic linked from `apple/official-resources.md` | Summarize and apply; do not copy Apple artwork, templates, or proprietary assets into the skill |
| SwiftUI implementation | Current SwiftUI documentation and the project's established scene/data-flow architecture | Respect deployment targets and availability; don't rewrite UIKit/AppKit code merely to prefer SwiftUI |
| UIKit or AppKit implementation | Current framework documentation and existing project patterns | Preserve lifecycle, responder chain, focus, menu validation, and accessibility behavior |
| iPad adaptation | `apple/ipados.md`, layout, windows, multitasking, input, and menu guidance | iPadOS is not a stretched iPhone or reduced Mac |
| Liquid Glass and materials | `apple/visual-system.md` plus current Materials HIG and framework adoption guidance | Use for the functional navigation/control layer; don't turn the content layer into glassmorphism |
| Symbols and app icons | Current SF Symbols, App icons, Icon Composer, and Apple Design Resources pages | Use tools and references under Apple's terms; don't vendor their resource files into this repository |
| Motion and direct manipulation | Native SwiftUI/UIKit/AppKit APIs plus the Dynamic Interaction System | Motion and GSAP are web-only; `apple-design` may refine physics thinking, but it isn't the source of current platform rules |
| Verification | `apple/verification.md`, Xcode, Accessibility Inspector, Simulator, and physical devices | Previews and screenshots alone are not runtime proof |

## Component and inspiration sources

| Source | Best fit | Integration cautions |
| --- | --- | --- |
| Existing project components | Any need already covered locally | Preserve API and visual language; extend before duplicating |
| 21st.dev | React/shadcn discovery, themes, project-aware components, generated alternatives | Search with project context; inspect code before installing |
| Uiverse MCP | Small buttons, inputs, toggles, loaders, hover treatments, CSS micro-interactions | Often raw HTML/CSS; rebuild semantics, tokens, state model, and style scope |
| Aceternity UI | Expressive React/Tailwind sections, spatial interactions, premium marketing effects | Verify current official code; watch client boundaries, dependencies, and GPU cost |
| Magic UI via `animated-component-libraries` | shadcn/Tailwind-friendly animated sections and components | Add only the component and dependencies actually used; retheme it |
| React Bits via `animated-component-libraries` | Distinctive text animation, animated components, backgrounds, cursor effects, and micro-interactions; read `react-bits.md` | Distinguish free and Pro access; avoid WebGL, cursor takeover, or continuous animation when product value does not justify it |

External catalogs supply patterns, not product decisions. A result with the best screenshot may be the worst fit once semantics, content, density, dependency cost, and maintenance are considered.

## Motion specialists

| Need | Route |
| --- | --- |
| Build purposeful web motion | `animate` |
| General component polish and motion judgment | `emil-design-eng` |
| Gestures, sheets, springs, momentum, and fluid-interface behavior | LoomLogic Dynamic Interaction System; use `apple-design` as a physics/design-thinking specialist without importing Apple styling |
| Complex web timelines, advanced scroll, SVG, motion paths, or cinematic marketing choreography | `gsap-core`, bounded to a GSAP-owned sequence |
| Mobile web/touch/PWA behavior | `mobile-native` |
| React Native/Expo motion | `animate-expo` |
| Native Apple motion | SwiftUI/UIKit/AppKit APIs plus the LoomLogic Dynamic Interaction System; optionally `apple-design` for motion judgment |
| Name an unknown effect | `animation-vocabulary` |
| Find missing motion without implementing | `find-animation-opportunities` |
| Audit a motion system and plan fixes | `improve-animations` |
| Review specific animation code | `review-animations` |

Use CSS for simple web transitions and `motion/react` for product UI that needs presence, layout, gestures, live values, or interruption. Use View Transitions only as progressive enhancement for route/page continuity. Use GSAP only for bounded complex or cinematic web sequences, never as a co-owner with Motion. Expo/React Native uses Reanimated plus React Native Gesture Handler for continuous gestures; native Apple uses native system animation APIs. Keep one state owner and one engine per interaction.

When existing code uses another animation runtime, do not trigger an unsolicited migration. Maintain sound behavior within the requested scope, report the mismatch, and use the hierarchy for new work or an authorized migration.

## Optional mobile research

When the Appllama MCP is already available, `appllama-research.md` defines bounded pre-build research for Expo/React Native. It is not a component source or implementation dependency. Without it, continue with project evidence and platform guidance.

## Narrow specialists

- `pick-ui-library`: explicitly invoked dependency selection for primitives, charts, toasts, state, virtualization, and similar needs.
- `ask-sonner`: implementation or troubleshooting involving Sonner.
- `21st-design-sync`: publish project tokens as a 21st theme only when the user asks to publish or sync.
- `21st-registry`: publish/manage 21st components or templates only when the user asks.

## Selection rubric

Score candidates qualitatively in this order:

1. Project and product fit.
2. Accessibility and correct interaction behavior.
3. Compatibility with the current stack and component API.
4. Responsive and content resilience.
5. Dependency, bundle, client-runtime, and rendering cost.
6. Styling isolation and token adaptability.
7. Maintenance clarity and source confidence.
8. Visual novelty.

Novelty is last. If two candidates are otherwise close, prefer the simpler one or the one already aligned with the project's stack.
