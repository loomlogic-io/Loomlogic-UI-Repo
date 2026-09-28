# Motion primitives

Read this reference when a product needs reusable interaction patterns rather than one-off animation code. These primitives are behavioral contracts. Implement them with the runtime selected by [the motion engine policy](motion-engine-policy.md), the vocabulary in [motion tokens](motion-tokens.md), and the repository's existing accessible components.

Do not build a universal wrapper library preemptively. Create a shared primitive only after repeated product use demonstrates a stable API.

## Shared contract

Every primitive declares:

- its purpose and semantic commit point;
- one canonical state owner and one motion engine;
- source, destination, enter, exit, cancellation, reversal, and failure behavior;
- the exact properties and geometry the engine owns;
- keyboard, touch, pointer, screen-reader, and focus behavior;
- reduced-motion behavior;
- cleanup for observers, timelines, gesture handlers, and navigation interruption.

Accessible primitives remain authoritative. Motion decorates their lifecycle; it does not replace their roles, labels, focus management, dismissal, or keyboard semantics.

## Primitive catalog

### Press feedback

Use for buttons, rows, toggles, and direct controls.

- **Intent:** feedback.
- **Behavior:** respond on press-down/press-in; commit only on semantic activation; preserve cancel-by-moving-away and keyboard activation.
- **Runtime:** CSS for ordinary web controls, Motion only when the control already belongs to a Motion-owned interaction, native press mechanisms on Expo and Apple.
- **Reduced motion:** keep an immediate tonal, border, or opacity response; remove unnecessary scale or depth travel.

### Presence

Use when content must animate after it leaves logical state, such as a popover, dialog surface, toast, or conditional panel.

- **Intent:** quiet feedback or spatial continuity.
- **Behavior:** the accessible primitive owns open state and focus; the motion runtime owns presentation through enter/exit and cleans up after exit.
- **Runtime:** Motion for React product UI, Reanimated when a React Native surface needs custom presence, native transitions for Apple. CSS is sufficient when DOM lifetime already supports the exit.
- **Reduced motion:** immediate removal or a short fade that does not delay focus restoration.

### Layout change

Use to preserve orientation when items resize, filter, expand, collapse, or reorder.

- **Intent:** quiet or spatial.
- **Behavior:** animate from measured rendered geometry; preserve stable keys and scroll position; never imply persistence before the server confirms it.
- **Runtime:** Motion layout features for React, Reanimated layout APIs where supported and appropriate, native layout/transition APIs on Apple.
- **Reduced motion:** update immediately or crossfade; do not animate a long list across large distances.

### Shared identity

Use only when source and destination represent the same object across a component or route boundary.

- **Intent:** spatial continuity.
- **Behavior:** preserve recognizable crop, geometry, and hierarchy; reconcile loading, source removal, back navigation, scroll restoration, and focus.
- **Runtime:** Motion `layoutId` within a Motion-owned React lifecycle; View Transitions for progressively enhanced route/page continuity; native matched-geometry or transition APIs on Apple. Pick one for the handoff.
- **Reduced motion:** short crossfade or immediate state change with headings, focus, and announcements intact.

### Anchored overlay

Use for menus, popovers, tooltips, and contextual inspectors tied to a source.

- **Intent:** quiet or spatial.
- **Behavior:** preserve the trigger relationship, collision handling, dismissal, focus trap/restore, escape behavior, and pointer/keyboard parity. Exit toward the origin only while that relationship remains meaningful.
- **Runtime:** the accessible overlay primitive owns semantics and placement; CSS or Motion may own presentation on web, never both for the same properties. Use platform presentations on native targets.
- **Reduced motion:** immediate placement with a restrained fade; no scale from zero.

### Direct manipulation

Use for drag, swipe, scrub, resize, reorder, or sheet interactions.

- **Intent:** physical.
- **Behavior:** preserve grab offset, establish intent with hysteresis, capture the pointer/gesture, track 1:1, measure stable velocity, project only to valid destinations, and allow mid-flight re-grab.
- **Runtime:** Motion for web product gestures; Reanimated plus React Native Gesture Handler for Expo/React Native; native gesture and animation APIs for Apple.
- **Reduced motion:** keep direct tracking when required for control, remove momentum/elastic overshoot, and settle immediately or with a quiet bounded response.

### Morph

Use when one component keeps its identity and task while its affordance changes.

- **Intent:** spatial continuity or, rarely, expressive emphasis.
- **Behavior:** model stable source/transition/destination states; change geometry before dense content; crossfade labels/icons at an unambiguous point; keep reversal possible until the product action commits.
- **Runtime:** Motion for React product UI, Reanimated for native-mobile continuous morphs, native framework APIs for Apple. GSAP is reserved for a bounded cinematic web morph, not an ordinary product control.
- **Reduced motion:** preserve identity through content, focus, and state labels instead of shape travel.

### Scroll-linked relationship

Use when scroll explains progress, comparison, a timeline, or persistent context.

- **Intent:** spatial or expressive.
- **Behavior:** preserve native scrolling; derive ranges from layout; pause offscreen work; recalculate for resize, zoom, content, and localization.
- **Runtime:** native CSS scroll-driven animation where supported for a simple progressive enhancement, Motion for product scroll values, GSAP/ScrollTrigger only for complex bounded marketing storytelling, native scroll systems on Expo and Apple.
- **Reduced motion:** render the final information statically or use discrete state changes; never make essential content depend on scrubbing.

## Composition rules

- A primitive may contain smaller primitives only when ownership is nested and properties do not conflict. Example: a Motion-owned panel may contain CSS hover feedback on a child button, but the button's CSS cannot animate the panel transform.
- View Transitions and Motion do not both own the same route handoff. GSAP and Motion do not both own the same product interaction. Reanimated does not compete with JavaScript-driven animation for the same shared value.
- Platform navigation, sheets, windows, scrolling, keyboard movement, and standard controls remain platform-owned unless a documented product need requires a custom path.
- Separate persistent product state from transient presentation values. Completion callbacks may signal that presentation ended; they do not decide whether a payment, save, permission, clinical action, or destructive operation succeeded.

## Verification

For each primitive, exercise slow and fast input, reversal, repeated input, cancellation, interruption, async delay/failure, keyboard and touch alternatives, focus restoration, route back/forward where relevant, large text/zoom, reduced motion, and cleanup after unmount or navigation. Profile representative hardware for gesture, scroll, layout, or continuous effects.
