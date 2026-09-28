# Menus and commands

Read this reference for macOS and iPadOS menu bars, context menus, pull-down menus, command placement, validation, discoverability, and keyboard shortcuts.

## Command architecture

Model an action once as a semantic command, then expose it through the appropriate surfaces: menu bar, toolbar, button, context menu, keyboard shortcut, or automation. Command availability and state derive from the focused scene, current selection, permissions, and document state—not from duplicated view-local booleans.

## Menu bar

- On macOS, the menu bar is the complete, discoverable command map. Use standard menu groups and conventional placement before inventing custom top-level menus.
- On supported iPadOS configurations, provide relevant menu-bar commands and shortcuts for keyboard workflows rather than limiting capability to touch controls.
- Adopt standard commands such as New/Open/Close/Save, Undo/Redo, Cut/Copy/Paste, Find, View/sidebar/toolbar controls, Window management, Settings, and Help when the product supports those concepts.
- Keep labels concise and action-oriented. Use ellipses only when a command opens another step to collect information before it can run, following platform conventions.
- Dynamically validate availability and toggled state against the active context. Keep unavailable main-menu items visible when that helps command discovery; context menus should contain only relevant actions.

## Toolbars and context menus

- Toolbars contain frequent, high-value actions for the current content. On macOS, every toolbar action also needs a menu or another complete discoverable route.
- Context menus contain a small set of actions directly relevant to the selected object. They supplement the main interface and menu bar; never make them the only route.
- Use the same label, symbol, shortcut, destructive role, and result for the same command across surfaces.
- Avoid deep submenu nesting. Split a large command family into clearer menus or redesign the task instead of hiding complexity.

## Keyboard shortcuts

- Prefer standard system shortcuts and Command as the primary modifier. Don't repurpose familiar combinations for unrelated actions.
- Define custom shortcuts only for frequent app-specific commands; a shortcut is an accelerator, not the sole access path.
- Respect localized keyboards. Avoid combinations that depend on characters unavailable or difficult to produce in other layouts, and let the framework localize or mirror where supported.
- Display shortcuts in menu items and help/discovery surfaces; keep shortcut handling in the same command model as menu validation.
- Support Escape for cancellation/dismissal where platform conventions expect it, Return for the clear default action only when safe, and Delete variants without bypassing confirmation/undo policy.

## Selection and focus

- Route a command to the focused/key window and current responder/selection. Verify behavior with multiple windows and text editing focus.
- A command that changes selection or document content participates in undo/redo where appropriate.
- Mixed or unavailable selection states must be represented honestly. Don't apply a command to a hidden stale selection from another window.
- Use standard services and pasteboard behavior when the content type supports them.

## Review checklist

- [ ] Every important command has one semantic owner and consistent surfaces.
- [ ] Standard menus and placements are used where applicable.
- [ ] Toolbar and context-menu actions remain discoverable elsewhere.
- [ ] Enablement, toggled state, destructive role, and shortcut update with focus/selection.
- [ ] Undo/redo, copy/paste, text editing, window, and sidebar commands behave conventionally.
- [ ] Shortcuts work with localized layouts and Full Keyboard Access.
- [ ] Multiple windows route commands to the correct scene/document.

Official baselines: [Menus](https://developer.apple.com/design/human-interface-guidelines/menus), [Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus), [Keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards), and [Building and customizing the menu bar with SwiftUI](https://developer.apple.com/documentation/swiftui/building-and-customizing-the-menu-bar-with-swiftui).
