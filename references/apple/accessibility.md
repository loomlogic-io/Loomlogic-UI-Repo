# Native Apple accessibility

Accessibility is part of the interface architecture, not a post-build annotation pass. Prefer standard controls and containers because they provide useful semantics by default, then inspect and improve the result for the product's content and custom interactions.

## Semantic contract

- Every meaningful control exposes an accurate role, label, value/state, enabled status, and action. Add hints only when the result isn't clear from the label and context.
- Group related elements when they form one understandable unit; separate them when people need independent actions or values. Hide decorative duplicates from the accessibility tree.
- Preserve a logical reading and focus order across adaptive layouts. A visual rearrangement must not create an unrelated traversal order.
- Provide equivalent actions for gestures, drag and drop, hover, context menus, charts, maps, canvases, and custom direct manipulation.
- Announce meaningful async completion, errors, and state changes without making every visual update noisy.

## Visual and layout support

- Support Dynamic Type or the platform's accessibility text sizing. Test the largest relevant sizes, Bold Text, and layouts that must reflow rather than clip.
- Meet appropriate contrast and test Increase Contrast. Don't rely only on color; test Differentiate Without Color and On/Off Labels where relevant.
- Respect Reduce Transparency with solid or near-solid materials and defined separation. Respect Reduce Motion by removing large travel, parallax, elastic behavior, and unnecessary animation.
- Keep touch targets comfortable and preserve keyboard focus visibility. Magnification/zoom must not hide essential content or controls.

## Assistive technologies

- **VoiceOver:** complete the primary tasks using speech and gestures/keyboard alone; verify order, grouping, rotor behavior, adjustable controls, modal focus, errors, and custom content descriptions.
- **Voice Control:** labels and accessible names should let people identify and activate controls predictably. Avoid multiple visible controls with indistinguishable names.
- **Switch Control:** ensure controls are reachable, grouped sensibly, and don't require time-sensitive compound gestures.
- **Full Keyboard Access:** complete the flow without touch or pointer; verify traversal, activation, menus, escape/cancel, default actions, and visible focus.
- **Assistive Access:** if the product supports or targets it, use the current platform APIs and verify a simplified, focused experience rather than assuming the main UI automatically qualifies.

## Custom data and interactions

- Charts expose summaries, series, data points, trends, and selected values in a navigable structure; color and animation aren't the only data carriers.
- Canvas, timeline, and spatial editors provide named objects, selection state, alternative commands, and predictable focus.
- Drag/reorder offers explicit Move commands and announces the destination/result.
- Audio and haptic feedback always has visual/textual and accessible equivalents.
- Live or rapidly changing values announce only meaningful thresholds or user-requested detail.

## Test workflow

1. Inspect the accessibility hierarchy and run automated audits with Accessibility Inspector.
2. Complete representative tasks manually with VoiceOver. Use Screen Curtain where available to expose visual assumptions.
3. Complete them with Full Keyboard Access and, where relevant, Voice Control and Switch Control.
4. Test text sizes, Bold Text, Increase Contrast, Differentiate Without Color, Reduce Motion, Reduce Transparency, light/dark, and supported appearance variants.
5. Test on physical hardware for features the Simulator can't validate reliably. Automated audits supplement, not replace, assistive-technology use.

Record the platform, device, OS, settings, and task path actually tested. Do not claim accessibility from framework choice or inspector results alone.

Official baselines: [Accessibility HIG](https://developer.apple.com/design/human-interface-guidelines/accessibility), [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/accessibility-inspector), [Testing system accessibility features](https://developer.apple.com/documentation/accessibility/testing-system-accessibility-features-in-your-app), [Performing accessibility testing](https://developer.apple.com/documentation/accessibility/performing-accessibility-testing-for-your-app), and [SwiftUI accessibility fundamentals](https://developer.apple.com/documentation/swiftui/accessibility-fundamentals).
