# Native Apple verification

Use this reference after native Apple UI changes. Scale the matrix to risk, but don't claim a native interface is complete from static code review or Xcode previews alone.

## 1. Build and automated checks

- Inspect the project's documented verification commands and schemes before choosing commands.
- Build every affected platform target and representative configuration with the installed Xcode/SDK.
- Run relevant unit, snapshot, UI, integration, and package tests. Treat snapshot approval as visual regression evidence, not interaction or accessibility proof.
- Check compiler warnings, availability diagnostics, localization warnings, asset issues, runtime logs, crashes, hangs, and main-thread violations.
- Verify the lowest supported deployment path or compile-time availability boundary, not only the newest SDK simulator.
- For changed public APIs or shared views, build every consumer target that can be affected.

## 2. Runtime matrix

Record the exact destinations tested.

### iOS

- Representative compact iPhone sizes and supported orientations.
- Light/dark, largest relevant Dynamic Type, keyboard shown/hidden, safe areas, interrupted/backgrounded flow, permissions, offline/failure, and restoration.
- Back button, edge-back, deep link, modal dismissal, and one-way transitions.

### iPadOS

- Compact and regular width; narrow/tall, wide/short, full-screen, and windowed configurations.
- Split/sidebar collapse and expansion, toolbar overflow, window controls, scene restoration, and multiple windows when supported.
- Touch, external keyboard, pointer/trackpad, menu commands, context menus, drag/drop, and Pencil where relevant.

### macOS

- Minimum, typical, and large windows; short/wide cases; full screen; multiple windows; active/inactive and key/non-key states.
- Menu bar coverage and validation, shortcuts, toolbar customization/overflow, sidebar/inspector visibility, selection, responder focus, undo/redo, drag/drop, and reopening/restoration.
- Multiple displays or scaling configurations when the surface is sensitive to them.

## 3. Accessibility matrix

- Run Accessibility Inspector audits, then manually complete representative tasks.
- VoiceOver: order, grouping, labels, values, actions, modal focus, errors, announcements, and custom content. Use physical hardware where Simulator isn't sufficient.
- Full Keyboard Access: traversal, activation, visible focus, menus, escape/cancel, default actions, and no keyboard traps.
- Voice Control and Switch Control when the changed interaction or audience makes them relevant.
- Largest text sizes, Bold Text, Increase Contrast, Differentiate Without Color, Reduce Motion, Reduce Transparency, and light/dark.
- Confirm charts, canvases, drag/reorder, gestures, haptics, and sound have equivalent semantic paths.

## 4. Content and localization

- Long localized strings, RTL, mixed-script content, plural/format variants, and locale-aware dates/numbers/currency.
- Truncation, wrapping, toolbar/menu overflow, window titles, alerts, sheets, widgets/notifications if affected, and accessibility pronunciation/order.
- Product copy remains consistent across menus, buttons, shortcuts, errors, and accessible names.

## 5. State and failure

- Loading, empty, stale, partial, offline, permission denied, disabled, cancelled, failed, retried, and completed states.
- Slow network, repeated activation, window closure mid-operation, background/suspension, app relaunch, and object deletion from another scene.
- Destructive actions, undo/redo, draft recovery, and truthful progress/commit feedback.
- Mid-animation interruption, rapid reversal, repeated input, and Reduce Motion for custom interactions.

## 6. Performance and energy

- Profile representative release behavior on realistic hardware for scrolling, typing, window resizing, navigation, image/data loading, and custom motion.
- Look for layout churn, main-thread work, retained scenes/windows, leaked observers/tasks, excessive blur/material cost, and continuous offscreen animation.
- Prefer measured fixes; don't add caching, memoization, or custom rendering without evidence.

## Completion report

Report:

- affected targets, schemes, deployment versions, devices/simulators, OS versions, window sizes, appearances, locales, and accessibility settings;
- automated commands and their results;
- manual flows and input modes exercised;
- warnings or defects found and fixed;
- anything not run, why, and the resulting risk.

Official tools: [Xcode](https://developer.apple.com/documentation/xcode), [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/accessibility-inspector), [Performing accessibility testing](https://developer.apple.com/documentation/accessibility/performing-accessibility-testing-for-your-app), and [Record, replay, and review UI automation with Xcode](https://developer.apple.com/videos/play/wwdc2025/344/).
