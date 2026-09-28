# Windows and multitasking

Read this reference for iPadOS or macOS scenes, windows, documents, auxiliary UI, multitasking, full screen, resizing, restoration, and multi-display behavior.

## Model windows semantically

Define each window by the independent task or object it represents:

- **Primary application/window group:** the main browser or workspace.
- **Document window:** owns one document and its editing/navigation state.
- **Auxiliary window:** independently useful supporting content such as activity, comparison, or a detached viewer.
- **Inspector/panel:** follows the current selection or tool and usually remains subordinate to a primary window.
- **Settings:** app-level preferences, not document-specific editing.

Don't create a new window merely to avoid designing navigation. Do create one when simultaneous viewing, independent placement, or task continuity materially helps.

## State ownership

- Durable model state may be shared across scenes; transient navigation, selection, focus, scroll, draft, and presentation state usually belongs to the scene or window that displays it.
- Give every scene a stable identity and restoration path. Reopening should recover the meaningful object and context, not just the app's root screen.
- Coordinate shared edits and deletion across windows. A window must handle its represented object changing or disappearing elsewhere.
- Save enough context before suspension or closure to restore safely. Don't serialize animation or incidental presentation values as domain state.

## Resizing and adaptation

- Support continuous resizing on iPadOS and macOS. Test narrow, wide, short, tall, and extreme-but-supported configurations.
- Use available space, container proposals, and traits. Avoid branching on device name, assumed full screen, or fixed orientation.
- Preserve capability as the window changes. Collapse or relocate secondary UI; do not silently remove commands or invalidate the navigation path.
- Set minimum sizes only where the interface would otherwise become unusable. Prefer layout adaptation to restrictive size limits.
- Keep content legible and comfortably located on very large windows; don't stretch text lines, forms, and controls across the full width without purpose.

## iPadOS

- Work in both full-screen and windowed modes. The app doesn't control the user's multitasking arrangement.
- Avoid leading toolbar content that collides with system window controls. Use platform placements and inspect real windowed behavior.
- Support more than one window when separate records, documents, sessions, or workspaces benefit from simultaneous use.
- Test transitions between compact and regular traits, stage/window arrangements, external displays, and scene activation from content where supported.
- Keep touch behavior complete while adding keyboard, pointer, menu, and drag/drop productivity.

## macOS

- Distinguish main/key and active/inactive states. Window chrome, selection, focus, and commands must update appropriately.
- Support move, resize, minimize, close, reopen, full screen, tiling, multiple displays, and restoration according to the app's scene/document model.
- Prefer document- or window-scoped sheets over app-global interruption. Auxiliary panels should follow the correct owner without trapping focus.
- Ensure the Window menu and standard window commands reflect actual windows and remain correctly enabled.
- Persist window frame and split configuration sensibly, but recover from displays or sizes that no longer exist.

## Multitasking behavior

- Continue safe work in the background where the platform permits it and save state before suspension. Don't fabricate progress when execution pauses.
- Use notifications only when completion is meaningful and the user may need to return; don't notify for routine background work.
- Restore drafts, scroll, selection, and task state after switching away, reopening, or authentication.
- Respect resources: pause hidden visual work, cancel obsolete requests, and avoid one window's expensive work degrading every scene.

## Verification prompts

- Can two windows show different objects without sharing transient selection?
- Can one window close, resize, or enter full screen without corrupting another?
- Does deleting or modifying shared content update other windows safely?
- Are commands routed to the focused/key scene and validated against its selection?
- Does restoration work after termination, display removal, and an OS-driven size change?
- Does a compact iPad window retain the same capabilities as a wide one?

Official baselines: [Windows](https://developer.apple.com/design/human-interface-guidelines/windows), [Multitasking](https://developer.apple.com/design/human-interface-guidelines/multitasking), [Layout](https://developer.apple.com/design/human-interface-guidelines/layout), and [Multitasking on iPad, Mac, and Apple Vision Pro](https://developer.apple.com/documentation/uikit/multitasking-on-ipad-mac-and-apple-vision-pro).

