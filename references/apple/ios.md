# iOS adaptation profile

Read this profile for native iPhone work. Also read [platform adaptation](platform-adaptation.md), then the topic references the feature needs.

## Product posture

iPhone is a personal, touch-first device commonly used in short, interrupted sessions, often one-handed and on the move. Prioritize the primary task, fast re-entry, obvious hierarchy, comfortable reach, and minimal persistent chrome. Preserve deeper capability through progressive disclosure rather than putting desktop density on a phone.

## Structure

- Use a navigation stack for hierarchical drill-down and keep the system back gesture available.
- Use tabs for stable peer destinations, not actions. Preserve each tab's navigation state and avoid reshuffling core tabs by context.
- Keep important content and primary actions reachable without requiring precision near unsafe edges. Derive layout from safe areas and available space, never device-model offsets.
- Use sheets for short, reversible, self-contained tasks; use full-screen presentations for immersive or genuinely complex work. Avoid nested modal hierarchies.
- Prefer standard share, document, photo, camera, browser, authentication, permission, and picker experiences when available.

## Controls and content

- Prefer native controls and familiar gestures. Custom controls must preserve touch targets, activation semantics, accessibility, state, and cancellation behavior.
- Use system text styles and Dynamic Type. Let layout reflow at accessibility sizes; don't disable scaling to preserve a composition.
- Use semantic system colors and appearance-aware asset variants for system-facing UI. Concentrate LoomLogic color and typography in content where it doesn't weaken familiarity or legibility.
- Prefer concise labels and content that supports quick scanning. Protect drafts and restore context after interruption, backgrounding, or authentication.

## Input and motion

- Touch is primary; keyboard, pointer, Voice Control, Switch Control, and VoiceOver remain supported paths where the feature applies.
- Preserve edge gestures and systemwide gestures. Add a custom gesture only when it has a discoverable control alternative and doesn't conflict with scrolling or navigation.
- Keep frequent transitions quiet and system-consistent. Apply the Dynamic Interaction System to custom direct manipulation, continuity, or feedback without replacing native navigation physics.
- Use haptics as sparse confirmation of a meaningful semantic event, never as the only feedback.

## iOS definition of done

- The main task is clear at compact widths and in both supported orientations.
- Safe areas, keyboard appearance, Dynamic Type, light/dark, contrast, Reduce Motion, and Reduce Transparency are handled.
- Back navigation, deep links, restoration, modal dismissal, permissions, offline/error, and interrupted async work preserve context.
- Touch targets and VoiceOver order are correct; custom gestures have non-gesture alternatives.
- The experience was run in Simulator and, for device-only behavior such as representative haptics or production VoiceOver validation, on hardware where required.

Official baseline: [Designing for iOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ios).

