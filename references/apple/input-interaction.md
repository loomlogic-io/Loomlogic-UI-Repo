# Input and interaction

Read this reference for touch, gestures, keyboard, pointer, hover, focus, Apple Pencil, selection, drag and drop, and direct manipulation.

## Multi-input contract

Every supported input reaches the same product capability, but each can use its native strengths. Touch needs comfortable targets and direct manipulation. Pointer needs precision, selection, hover where useful, and secondary click. Keyboard needs focus, commands, shortcuts, and complete traversal. Assistive technologies need semantic elements and equivalent actions.

Don't hide product capability behind one modality. Hover, swipe, force, secondary click, drag, haptic, sound, and Pencil can accelerate or enrich an action, but a discoverable alternative must remain.

## Touch and gestures

- Preserve system gestures, scrolling, edge navigation, text selection, and multitasking gestures.
- Use familiar gestures for familiar outcomes. A custom gesture needs clear affordance, cancellation, bounds, and an accessible/keyboard alternative.
- Resolve gesture competition intentionally. Let scrolling win unless the custom control clearly owns the axis after an intent threshold.
- Keep touch targets at least the platform baseline and increase them for critical, moving, or one-handed contexts. The hit region can exceed the visible geometry.
- Apply the Dynamic Interaction System for velocity, interruption, projection, rubber-banding, and state truth in custom interactions.

## Keyboard and focus

- Support standard traversal and Full Keyboard Access. Keep focus order aligned with visual and task order as layouts adapt.
- Give custom controls correct focusability, labels, roles, state, activation, and focus appearance.
- Don't remove a visible focus ring or replace it with a low-contrast brand treatment.
- Keep focus within a modal task when appropriate and restore it to the initiating control on dismissal. Move focus deliberately after navigation, errors, or object deletion.
- Use semantic commands and standard shortcut conventions; see [Menus and commands](menus-commands.md).

## Pointer, mouse, and trackpad

- Preserve standard cursor/pointer effects and systemwide trackpad gestures. Don't replace the pointer for visual novelty.
- Use hover only to preview, reveal secondary detail, or improve precision; the interface remains understandable without it.
- On iPadOS, pointer behavior enhances touch rather than replacing it. Don't shrink controls or remove touch affordances when a pointer is present.
- Support primary/secondary click, modifier-assisted selection, range and multiple selection, and contextual menus where the content model expects them.
- Keep drag handles and resize affordances targetable without making dense content visually noisy.

## Apple Pencil

- Use Pencil for drawing, handwriting, annotation, hover preview, squeeze/rotation, or precision work only when relevant to the product.
- Provide touch or control alternatives for essential actions and don't require users to discover a Pencil-only gesture.
- Keep haptics short and meaningful; don't create continuous effects that make drawing or writing uncomfortable.

## Drag and drop

- Use system transfer representations and truthful copy/move/link semantics. Cross-app drag usually behaves as a copy unless the platform and content model communicate otherwise.
- Make valid destinations clear, maintain source context, auto-scroll carefully, and preserve the grab relationship.
- Provide alternate toolbar, menu, keyboard, or accessibility actions for every drag-only operation.
- Handle cancellation, unavailable destinations, permission failures, async import/export, and source deletion without losing content.
- For reorder, preserve selection and announce the result. Don't commit destructive or remote movement merely because the drop animation completed.

## Direct manipulation and feedback

- Press feedback begins immediately; product state commits at the semantic event.
- Keep interactions interruptible and start retargeting from the rendered value. Preserve release velocity only when it maps to a safe valid destination.
- Pair haptics and sound with visible and accessible feedback. Respect mute and preference settings and avoid feedback fatigue.
- Under Reduce Motion, remove large travel, parallax, elastic overshoot, and momentum while preserving state, focus, and causality.

Official baselines: [Gestures](https://developer.apple.com/design/human-interface-guidelines/gestures), [Keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards), [Virtual keyboards](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards), [Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices), [Focus and selection](https://developer.apple.com/design/human-interface-guidelines/focus-and-selection), and [Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop).
