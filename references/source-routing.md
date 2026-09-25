# Source and skill routing

Read this reference when selecting design skills, catalogs, or motion tools. Availability can change; inspect the current environment and never assume a source is callable merely because it appears here.

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
| Gestures, sheets, springs, momentum, Apple-like material/behavior | `apple-design` |
| Framework-agnostic timelines, scroll, or complex choreography | `gsap-core` |
| SVG morphing, staggered sequences, or light framework-independent choreography | `animejs` |
| Mobile web/touch/PWA behavior | `mobile-native` |
| React Native/Expo motion | `animate-expo` |
| Name an unknown effect | `animation-vocabulary` |
| Find missing motion without implementing | `find-animation-opportunities` |
| Audit a motion system and plan fixes | `improve-animations` |
| Review specific animation code | `review-animations` |

Prefer the project's existing motion stack. CSS transitions handle simple state changes. Use a library when layout animation, gesture values, exit choreography, interruption, or timelines justify it.

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
