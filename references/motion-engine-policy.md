# Motion engine policy

Read this reference before choosing or changing an animation runtime. It defines the authoritative LoomLogic runtime hierarchy. The repository's architecture, dependency policy, supported versions, and accessible primitives still govern implementation, but a local override must not make two engines co-own one interaction or move a web runtime onto a native target.

## Non-negotiable ownership rules

- Keep one canonical product-state owner per interaction. Animation values may represent transient presentation state; they do not become a second domain-state store.
- Keep one motion engine in control of an interaction from input through settlement. Do not let CSS, Motion, GSAP, Reanimated, or a native framework animate the same property or geometry lifecycle concurrently.
- Platform-owned transitions remain platform-owned. Add product motion around them only at a separate boundary.
- Preserve semantics, focus, input, cancellation, route state, and truthful async state independently of animation.
- Treat reduced motion as a behavioral branch, not a slower version of the same spectacle.

An interaction is the full causal unit, not an individual element. A dialog's trigger, enter/exit, backdrop, focus handoff, and interruption path normally share one owner. Two engines may exist on the same page when they control unrelated interactions and their properties do not overlap.

## Runtime hierarchy

| Target and need | Default runtime | Boundary |
| --- | --- | --- |
| Web: hover, focus, color, opacity, or a simple discrete transform | CSS transitions or keyframes | Do not add a JavaScript animation runtime for a simple state change. |
| Web: product UI with presence, layout, shared identity, springs, gestures, live values, or interruption | `motion/react` | This is the default web product-motion engine. Use the installed version's APIs and preserve server/client boundaries. |
| Web: route or page continuity supported by the browser | View Transitions API as progressive enhancement | Navigation, focus, history, and content must remain correct without it. It does not become a second state owner. |
| Web: complex cinematic, timeline-heavy, pinned, advanced scroll, SVG, or marketing choreography | GSAP | Specialist only. Keep it bounded to the sequence and never let it co-own an interaction with Motion. |
| Expo / React Native: continuous, interruptible, gesture-driven motion | React Native Reanimated plus React Native Gesture Handler | Keep per-frame gesture and animation work on the UI thread. Do not import Motion or GSAP. |
| Native Apple: SwiftUI, UIKit, AppKit, or Mac Catalyst motion | Native framework and system animation APIs | Use platform transitions, transactions, animators, gesture systems, and accessibility settings. Motion and GSAP are web-only. |

No animation is also a valid choice. Use it when motion would not improve feedback, continuity, orientation, direct manipulation, or comprehension.

## Web policy

### CSS first for simple transitions

Use CSS when the transition is discrete, local, non-gesture-driven, and does not need layout measurement, exit presence, velocity handoff, or mid-flight retargeting. Typical cases are hover/focus treatment, a color or border change, a short opacity transition, and a small deterministic transform.

CSS may style an interaction whose lifecycle belongs to Motion or GSAP, but it must not animate properties that runtime owns. Disable or scope `transition` declarations on Motion/GSAP-controlled properties so ownership is unambiguous.

### Motion for product interactions

Use `motion/react` as the default engine for React product motion that needs presence, layout animation, `layoutId` continuity, spring settlement, drag/gesture values, scroll-linked values, or interruption. Prefer the project's installed Motion APIs and utilities rather than building a parallel wrapper or adding a second general animation library.

Motion does not replace accessible primitives. Radix/shadcn-style components continue to own semantics, focus, dismissal, and keyboard behavior; Motion owns only the presentation lifecycle added through supported composition points.

### View Transitions for route continuity

Use View Transitions to progressively enhance route or page changes when source and destination identity is stable and the supported browser matrix justifies it.

- Feature-detect the API and keep the ordinary navigation path complete.
- Let the router own history, loading, errors, scroll restoration, and focus. The transition only presents the already-valid state change.
- Give transition names to the smallest stable set of elements. Avoid broad page snapshots when they create text artifacts, stale content, or excessive capture cost.
- Do not combine a View Transition and Motion/GSAP animation on the same shared element or route handoff.
- Under reduced motion, use an immediate update or a restrained crossfade with no large spatial travel.

### GSAP as a specialist

Use GSAP only when a bounded web sequence genuinely needs timeline orchestration, advanced ScrollTrigger behavior, pinning, motion paths, SVG drawing/morphing, FLIP across a complex scene, or cinematic marketing choreography that Motion and platform features do not express cleanly.

Keep application controls, dialogs, menus, navigation, routine layout changes, and gesture-driven product interactions in CSS or Motion. If a page contains both Motion product UI and a GSAP marketing sequence, separate their DOM ownership, properties, cleanup, and state boundaries. Never ask GSAP and Motion to animate the same element as part of the same interaction.

## Expo / React Native policy

Use React Native Reanimated with React Native Gesture Handler for continuous, interruptible, finger-driven interactions. Keep live values, recognition, and per-frame updates on the UI thread; cross to JavaScript at coarse semantic boundaries. Let the navigation and operating system own standard route, keyboard, and scroll behavior.

Do not import `motion/react`, Framer Motion compatibility layers, GSAP, or browser View Transitions into an Expo/React Native surface. A simple non-continuous transition may use the project's existing native mechanism; do not add Reanimated solely to fade one element when the current stack already handles it correctly.

## Native Apple policy

SwiftUI, UIKit, AppKit, and Mac Catalyst use native system animation APIs and platform transitions. Preserve the repository's framework mix and deployment targets:

- SwiftUI uses its state/transaction, transition, matched-geometry, phase/keyframe, and gesture APIs where supported.
- UIKit uses system transitions, `UIViewPropertyAnimator`, transition coordinators, and UIKit gesture APIs as appropriate.
- AppKit uses AppKit animation contexts, animators, transitions, and gesture/event APIs as appropriate.

Use current Apple documentation to select exact APIs and availability fallbacks. Keep standard navigation, presentation, window, focus, and accessibility motion platform-native. The Dynamic Interaction System may shape purpose, continuity, interruption, and physical behavior, but it does not replace native APIs or visually skin the app. `motion/react` and GSAP are web-only and must never ship in a native Apple target.

## Migration and dependency rules

1. Inventory the existing state owner, animation runtimes, properties, gesture handlers, and cleanup before changing an interaction.
2. Choose the destination engine from the hierarchy and define its ownership boundary.
3. Migrate one complete interaction at a time. Remove old listeners, transitions, layout IDs, timelines, and presentation state only after the new path is verified.
4. Do not add a dependency until the installed stack and platform APIs have been checked. Follow the repository's approval and lockfile policy.
5. Test interruption, reversal, cancellation, async failure, keyboard/touch alternatives, route restoration, reduced motion, and representative performance.

When an established product has a different engine, do not perform an unsolicited rewrite. Keep sound existing behavior for the requested change, report the policy mismatch, and use this hierarchy for new work or an authorized migration. The invariants—one state owner, one engine per interaction, platform boundaries, accessibility, and reduced motion—still apply immediately.
