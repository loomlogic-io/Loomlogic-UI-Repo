# LoomLogic Dynamic Interaction System

Read this reference when building or reviewing gesture-driven UI, motion infrastructure, shared-element transitions, morphing components, scroll-linked behavior, material/depth systems, or product interaction patterns. For an ordinary color, spacing, or layout change, the core skill is enough.

This system uses fluid-interface physics as a behavioral foundation, not a visual costume. Do not imitate Apple chrome, roundedness, glass, iconography, navigation, or product conventions. Express the behavior through the repository's own tokens, LoomLogic's calm editorial/luxury-tech direction, product-specific branding, and the established Radix/shadcn primitive base. React Bits, Aceternity, Magic UI, Uiverse, and other installed guidance remain optional sources under the routing and adaptation rules in `SKILL.md`.

## Interaction engine

Treat an interaction as six cooperating layers. Fix the earliest broken layer rather than masking it with visual polish.

1. **Input and intent:** pointer, touch, keyboard, assistive technology, gesture thresholds, capture, cancellation, and modality.
2. **State and physics:** the canonical state, the live presentation value, velocity, projected destination, bounds, and spring.
3. **Geometry and continuity:** origins, coordinate spaces, source/destination identity, layout measurement, focus destination, and exit path.
4. **Presentation:** transform, opacity, clip/mask, type, material, depth, and product tokens.
5. **Feedback and adaptation:** visual, audio, and haptic feedback plus motion/transparency/contrast preferences.
6. **Runtime:** compositor cost, frame pacing, interruption, cleanup, server/client boundaries, and device capability.

Build on existing accessible components. Radix/shadcn primitives continue to own semantics, focus trapping/restoration, keyboard behavior, dismissal, and ARIA. Add motion around their lifecycle or through supported composition APIs; do not replace a `Dialog`, `Popover`, `Menu`, `Tabs`, or `Tooltip` with animated `div` elements. Keep one state owner and one motion engine per interaction.

## Engine rules

### Direct manipulation and intent

- Give press feedback on pointer-down while committing the action on activation/up. Preserve cancel-by-dragging-away and native keyboard activation.
- During a drag, track the pointer 1:1 after intent is established. Preserve the grab offset; do not snap the object center under the pointer.
- Use Pointer Events and pointer capture on the web when the project stack does not already provide equivalent gesture handling. On native, keep continuous gesture work off the JS thread when the existing stack supports it.
- Keep a short timestamped position history so release velocity is stable. Do not estimate velocity from a single noisy event.
- Apply hysteresis before committing gesture direction. Start around 8–12 CSS px for touch/drag intent, then tune to target size, device, and conflict with scrolling. Do not delay ordinary taps to support a gesture that does not exist.
- Detect plausible gestures together until intent is clear. Once an axis wins, lock deliberately and let native page scrolling win when the component does not own that axis.
- Provide a keyboard and screen-reader equivalent for every drag, swipe, scrub, or reorder operation.

### Interruptible and redirectable motion

- A user may re-grab, reverse, dismiss, or retarget an element while it is moving. Never disable input merely because a transition is active.
- Retarget from the current rendered value and current velocity, not from a stale logical start or previous target. A reversal must not jump or stop at an invisible wall.
- Separate X and Y motion when their velocities or constraints differ.
- Keep domain state distinct from transient presentation state. Commit product state at the correct semantic event; do not write every animation frame into application or server state.
- CSS transitions are appropriate for simple, non-gesture state changes. Use the existing spring/motion system when live values, velocity, layout measurement, exit presence, or mid-flight interruption matter.

### Spring physics and velocity handoff

Think in terms of response and damping rather than a fake fixed duration:

- **Quiet spring:** critically damped or nearly so; no visible overshoot. Use for frequent panels, menus, selection, layout settling, and high-trust workflows.
- **Physical spring:** slight overshoot only when the initiating gesture carried energy, such as a flick or drag release.
- **Expressive spring:** rare and product-specific. Never use bounce to decorate confirmations, clinical status, financial values, errors, or routine navigation.

Start with a roughly 0.3–0.4 s response and damping near 1.0, then tune by observed behavior and the installed library's parameter model. These are calibration points, not global constants. Frequent expert workflows should settle faster and more quietly.

At release, seed the spring with the measured gesture velocity in the units expected by the library. If an API expects normalized velocity, normalize against the remaining distance while guarding the near-zero case. Preserve the velocity sign when reversing.

### Momentum projection and destinations

Choose a destination from where the gesture is heading, not only where it stopped:

```text
projected = current + project(releaseVelocity, deceleration)
target = nearestAllowedTarget(projected)
settle(target, initialVelocity: releaseVelocity)
```

Use the motion library's proven decay/projection utility when available. Otherwise use a bounded exponential-decay projection and tune it against the component's scale. Clamp the projection before selecting a target; a fast flick must not skip a destructive confirmation, required review state, permission boundary, or unavailable item.

Position and velocity may disagree. Use both with explicit product rules: a slow drag can settle by position; a decisive flick can cross the threshold; a high-stakes commit still requires the semantic confirmation the workflow demands.

### Bounds, rubber-banding, and hysteresis

- At a non-destructive spatial boundary, apply progressively increasing resistance rather than a hard stop. Keep overshoot visibly subordinate to the real content range.
- On release outside the bound, settle immediately toward the legal value with the release velocity carried into the spring.
- Do not rubber-band values that imply impossible data, false progress, unsafe dosage, money, permissions, or a completed operation. Use a clear blocked state instead.
- Keep enter and exit thresholds separated where state could chatter near a boundary. Document thresholds beside the interaction logic and test slow, fast, and reversal cases.

### Spatial continuity and shared elements

- An element should enter and leave through a path that preserves its source relationship. Anchor popovers and menus to their trigger; dismiss panels toward their origin when that remains meaningful.
- Use a shared-element transition only when the source and destination represent the same object. Preserve recognizable geometry, crop, corner treatment, and content hierarchy during the handoff.
- Prefer the platform or current stack's layout/shared-element facility, such as View Transitions or an existing layout identity API. Do not add a second animation library solely for one shared element without a measured need.
- Freeze or deliberately reconcile scroll position and layout measurements during the handoff. Handle source removal, destination loading, interrupted navigation, and back navigation.
- Move focus to the new semantic destination when navigation completes, then restore it correctly on return. Motion continuity never replaces routing, headings, announcements, or focus management.
- For reduced motion, use a short cross-fade or immediate state change while retaining focus and context cues.

### Morphing components

Morph a component when its identity and task persist while its affordance changes: a compact recorder becoming a recording controller, a deal card opening into its workspace, or a filter chip expanding into an editor. Use a separate component transition when the task or semantic role changes.

- Define stable source, transition, and destination states. Keep one logical state machine; do not infer product state from animation progress.
- Preserve the control's accessible name and focus relationship, or announce the new role/state when it changes.
- Morph geometry before swapping dense content. Cross-fade labels/icons at the least ambiguous point; never scale body text to illegibility.
- Make the transition reversible until the product action commits. Handle cancellation and errors without snapping back through an unrelated path.
- Avoid shape-shifting every control. Morphing is for continuity, not spectacle.

### Scroll-linked motion

- Use scroll progress to explain a real relationship: persistent context, section progress, a media comparison, a timeline, or a compacting header. Never hijack scrolling or make essential content depend on a scrubbed animation.
- Prefer native scroll behavior and CSS scroll-driven animation when it fits the supported browser target; otherwise use the existing project stack. Keep the range bounded and derived from layout rather than magic page offsets.
- Transform and opacity are the default properties. Avoid continuous blur, large painted shadows, filters, and layout reads/writes on every frame.
- Pause observers and continuous effects when hidden or offscreen. Recalculate on resize, text zoom, content changes, and localization.
- Under reduced motion, show the final information statically or use discrete state changes. Preserve native scrolling and sticky context.

### Adaptive motion

Motion adapts to input, task frequency, content scale, device capability, and user preference:

| Context | Adaptation |
| --- | --- |
| Repeated expert workflow | Faster, quieter, little or no overshoot |
| First-use or spatially complex transition | Enough continuity to explain origin and destination |
| Coarse pointer/touch | Larger targets, no hover dependency, stronger intent thresholds |
| Fine pointer with hover | Subtle pre-contact depth or highlight where it clarifies interactivity |
| Large surface or long travel | Lower visual energy; consider a cross-fade/partial transform instead of sweeping motion |
| Low-end device or constrained browser | Remove expensive material/filter effects before removing functional feedback |
| `prefers-reduced-motion` | No parallax, momentum, elastic overshoot, or large spatial travel; use short fades/static changes |
| reduced transparency or increased contrast | Use solid/near-solid surfaces, defined borders, and stronger text contrast |

Treat user and OS preferences as inputs to the component, not a CSS afterthought. If the product offers a motion setting, it may reduce motion further but must not weaken the OS preference.

### Hover, pointer depth, and press

- Gate hover-only effects behind `(hover: hover) and (pointer: fine)`. The control must remain understandable and complete without hover.
- Use at most one or two restrained cues: tonal change, a 1–2 px lift, a localized shadow, border emphasis, or subtle perspective tied to pointer proximity.
- Press should visually reduce depth and respond immediately. Do not combine large scale, tilt, glow, cursor replacement, and magnetic movement on one control.
- Never move a small target away from the pointer or introduce depth that harms reading, data comparison, or target acquisition.
- Disable proximity/tilt effects for reduced motion, dense tables, clinical forms, and other high-frequency precision work unless testing proves a clear benefit.

### Optical typography in motion

- Use optical sizing when the chosen variable font supports it. Tune tracking and leading by text size; large display type generally tightens while small UI text needs neutral or slightly open spacing.
- Do not animate font size, weight, tracking, or line-height continuously in dense content. Prefer transform/opacity around a stable text layout, or discrete typographic states with measured containers.
- During shared-element or morph transitions, protect line breaks and baselines. Cross-fade between separately typeset source and destination text when scaling would distort glyphs.
- Use tabular numerals for changing measurements, timers, prices, and dashboard values when alignment matters. Announce meaningful updates without making every visual tick a live-region event.
- Verify 200% zoom, large text, localization, and long labels. Geometry must follow the type, not clip it.

### Material and depth

Depth communicates interaction hierarchy; it is not a glassmorphism theme.

- Start with LoomLogic's neutral solid surfaces, fine borders, and restrained shadows. Add translucency only for a floating layer that benefits from visible context beneath it.
- Use a small, named elevation/material scale mapped to tokens. Size, shadow softness, border contrast, and optional blur should agree about the layer's distance.
- Modal work may use a scrim because it interrupts the underlying task. A non-modal inspector or side panel should remain spatially connected without falsely disabling the page.
- Avoid stacking translucent surfaces, gradient borders, colored glass, large blue washes, or blur as decoration. Product color remains a controlled signal.
- Provide solid fallbacks for reduced transparency, higher contrast, unsupported `backdrop-filter`, and performance-constrained devices.

### Synchronized feedback

Coordinate feedback at the semantic moment:

- **Press:** immediate visual response; optional light haptic only when native conventions and product importance justify it.
- **Commit or snap:** visual settlement, sound, and haptic begin together—not at unrelated animation callbacks.
- **Async work:** acknowledge the request immediately, show truthful progress/state, and reserve completion feedback for actual completion.
- **Warning/error:** pair motion with text, iconography, and focus/announcement. Never encode severity only through shake, color, sound, or vibration.
- **Utility test:** sound or haptics must improve causality, confidence, or safety. Avoid them in routine web interactions, repeated clinical entry, and ambient decoration.

Respect silent mode, browser capability, platform guidance, and user settings. Never claim success while persistence, export, payment, or a clinical operation is still pending.

## Product patterns

Use these as interaction grammar, not fixed layouts. Product requirements and each repository remain authoritative.

### LoomLogic Health

- **Voice capture → structured chart:** morph the idle record control into a stable recording controller so the task retains identity. Respond instantly to the press, show truthful capture state, and keep cancel/pause/stop explicit. A waveform may confirm input but must not imply transcription accuracy. Reduced motion uses state/icon/text changes without pulsing or elastic expansion.
- **Processing → review:** move from recording to processing to review as explicit states, not a theatrical loading sequence. Preserve the encounter/patient context. The generated note arrives in a review surface with source/status continuity; practitioner approval remains the commit boundary.
- **Encounter row → note workspace:** a restrained shared-element transition may carry the patient/encounter header into the workspace. Focus lands on the page heading or first review issue, not an animated wrapper. Back navigation returns to the originating row and scroll position.
- **Clinical corrections:** use stable field geometry, inline provenance/status, and synchronized save feedback. Do not bounce, rubber-band, or optimistically celebrate unpersisted clinical data. Announce validation errors and keep the original text recoverable.
- **Task/review queues:** use quiet layout motion to preserve orientation when filters or statuses change. Never animate an item away before the server confirms a high-stakes completion; if persistence fails, restore it with an explicit explanation rather than a playful reversal.

### Northstone Intelligence

- **Deal card → deal workspace:** preserve deal identity, status, and key value through a shared-element handoff; progressively reveal documents, contacts, conversations, follow-ups, and intelligence. Back navigation restores the pipeline/list position.
- **Pipeline movement:** direct manipulation can support moving a deal between stages. Use pointer capture, intent hysteresis, edge auto-scroll, legal-target emphasis, and a keyboard move action. Hand release velocity into a short settle, but clamp projection to one authorized destination and confirm persistence before final success feedback.
- **Inspector and quick actions:** morph a compact action or row inspector into a focused side panel when the object stays the same. Anchor the panel to its source, preserve focus, and keep frequent CRM work quiet and fast.
- **Investor/buyer matching:** use continuity to connect a recommendation to its evidence, not to dramatize an AI score. Expand supporting reasons in place or into a linked inspector; uncertainty and source data remain visible.
- **Dense deal intelligence:** use sticky context and restrained scroll-linked progress only where it helps users navigate long diligence timelines or documents. Avoid parallax, tilting cards, animated numbers, and hover-dependent data access.

### Other LoomLogic products and client work

- Apply family resemblance through structure, typography, interaction quality, and the approved primitives—not forced blue gradients or copied motion.
- In AI phone-agent or automation workflows, morph listening/running controls only when state is truthful; distinguish queued, active, handed-off, completed, and failed states.
- In dashboards and internal tools, prioritize scanability and causal state transitions. Use layout continuity for filtering/reordering, not animation on every metric.
- For marketing surfaces, React Bits, Aceternity, Magic UI, or Uiverse may contribute one bounded expressive moment. Retheme it, protect performance and accessibility, and keep product UI calmer than marketing UI.

## Reusable Codex rules

Apply these rules while planning and implementing:

1. State the interaction's purpose in one phrase: feedback, continuity, orientation, direct manipulation, or comprehension. Remove motion with no purpose.
2. Inspect the existing primitive, state owner, motion stack, tokens, accessibility behavior, and dependency versions before editing.
3. Draw the states and interruption paths before choosing animation values. Include cancellation, reversal, async failure, navigation back, and reduced motion.
4. Keep accessible primitives authoritative. Add presentation without forking their semantics.
5. Use one engine per interaction and the fewest new dependencies possible.
6. Tune from live presentation values, preserve gesture velocity, and constrain projected destinations to valid product states.
7. Preserve LoomLogic/product identity. Never import a source library's demo theme or Apple styling wholesale.
8. Test mouse, touch, keyboard, screen reader flow, zoom/large text, reduced motion, interruption, slow device behavior, and async failure as relevant.
9. Report measured or observed behavior separately from aesthetic preference. Name any device/browser case not tested.

### Implementation checklist

- [ ] Purpose and semantic commit point are explicit.
- [ ] Source, destination, cancellation, reversal, and failure states are modeled.
- [ ] Pointer capture, grab offset, thresholds, axes, bounds, velocity history, and projection are correct where applicable.
- [ ] Mid-flight re-grab/retarget starts from the rendered value without a jump.
- [ ] Keyboard, focus, ARIA, and screen-reader behavior remain complete.
- [ ] Shared elements represent the same object and survive loading/back navigation.
- [ ] Reduced motion/transparency and high-contrast alternatives preserve meaning.
- [ ] Hover is optional and fine-pointer-only; touch targets remain adequate.
- [ ] Typography survives zoom, localization, and changing content.
- [ ] Materials use project tokens with solid/performance fallbacks.
- [ ] Feedback is synchronized with the truthful semantic event.
- [ ] Hidden/offscreen work stops; layout thrash, long tasks, and console errors are absent.
- [ ] Existing public APIs and product behavior are preserved unless change was authorized.

## Audit and refactor mode

Use this mode when the user asks to audit, standardize, repair, or refactor an existing interface. An audit is read-only unless fixes were requested.

### Inspect

1. Inventory motion libraries, CSS transitions/keyframes, gesture handlers, shared-element/layout IDs, scroll observers, haptics/audio, and motion preference utilities.
2. Trace representative interactions from input through state, render, animation, persistence, focus, and announcement. Inspect runtime behavior before inferring from code when possible.
3. Exercise slow drags, fast flicks, mid-flight reversals, repeated clicks, route back/forward, resize, 200% zoom, keyboard-only flow, touch/coarse input, reduced motion, async delay, and failure.
4. Record evidence: surface, trigger, expected behavior, observed behavior, user impact, confidence, and the owning file/component.

### Classify findings

- **Critical:** motion enables an unsafe/false commit, blocks access, traps focus, hides essential state, or causes data loss.
- **High:** input locks during transition, interruption jumps, keyboard/touch path is missing, reduced motion is ignored, or navigation loses context.
- **Medium:** velocity/threshold/bounds feel discontinuous, shared identity breaks, typography/material depth becomes unstable, or performance drops on representative hardware.
- **Low:** polish inconsistency with no meaningful task, accessibility, or performance impact.

Separate proven defects from taste recommendations. Avoid proposing motion merely because a surface is static.

### Refactor order

1. Restore semantics, focus, truthful state, and reduced-motion behavior.
2. Remove input locks, duplicated state owners, conflicting animation systems, layout thrash, and leaked observers.
3. Repair direct manipulation, presentation-value interruption, thresholds, bounds, velocity handoff, and valid target selection.
4. Add spatial continuity, shared elements, or morphs only where object identity and product value justify them.
5. Normalize tokens, materials, optical type, and synchronized feedback.
6. Remove obsolete code/dependencies only after all call sites and runtime paths are verified.

Make small, behavior-preserving patches. Do not combine an interaction-engine refactor with a visual redesign unless the user requested both.

### Audit/refactor report

Report:

- the interactions and environments inspected;
- findings ranked by severity and confidence, with evidence;
- the existing primitives and motion stack retained;
- minimal fixes made, with before/after behavior;
- dependencies added, removed, or deliberately avoided;
- accessibility, input, interruption, performance, and adaptive-motion verification;
- remaining risks and untested devices/browsers.
