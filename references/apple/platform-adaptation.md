# Apple platform adaptation

Read this reference before sharing a native Apple interface across iOS, iPadOS, and macOS. Share product intent, domain models, data, and brand tokens; adapt the interaction grammar to each platform.

## Adaptation matrix

| Concern | iOS | iPadOS | macOS |
| --- | --- | --- | --- |
| Primary posture | Touch-first, focused, often brief | Touch plus keyboard/pointer/Pencil, resizable and multitasking | Keyboard/pointer-first, windowed, long-form productivity |
| Top-level navigation | Tabs or focused hierarchy | Top tab bar, adaptable sidebar, or split navigation based on product and space | Sidebar/split view, toolbar, menu bar, multiple windows |
| Hierarchy depth | Progressive drill-down | Simultaneous panes when space helps | More hierarchy visible with productive density |
| Presentation | Sheet/full screen/popover by task and space | Popover, sheet, inspector, or window; preserve source context | Sheet, popover, inspector/panel, or separate window; avoid unnecessary modality |
| Commands | Visible controls; shortcuts when relevant | Controls plus menu commands and keyboard shortcuts | Complete menu bar plus shortcuts; toolbar for frequent actions |
| Windows | App scene, usually one visible phone context | Full-screen or freely resizable; multiple scenes/windows | Resizable, movable, minimizable, full-screen; primary and auxiliary windows |
| Input | Touch primary | Touch remains complete; keyboard/pointer/Pencil add productivity | Keyboard and pointer complete; trackpad, selection, drag/drop expected |
| Density | Comfortable touch spacing | Adaptive; touch-safe with richer simultaneous context | Denser, precise, customizable |
| State | Restore navigation, drafts, task context | Per-scene navigation/selection plus shared durable model | Per-window/document state, focus/selection, frame and split restoration |

## What to share

- Domain models, validation, persistence, business rules, localization keys, content semantics, and product state machines.
- Semantic product color roles and brand assets, with platform-specific resolution to system-aware colors and asset variants.
- LoomLogic interaction intent: feedback, continuity, orientation, direct manipulation, and truthful async state.
- Reusable views only where their information hierarchy, control semantics, density, and adaptation remain correct on every destination.

## What to adapt

- Navigation containers, window and scene ownership, toolbars, menus, commands, presentations, focus, pointer behavior, selection, drag/drop, safe areas, density, keyboard behavior, and accessibility grouping.
- Typography metrics and system chrome. Use platform text styles and semantic colors rather than forcing web tokens or one platform's fixed sizes everywhere.
- Visibility, not capability. A narrow layout may collapse panes or move secondary commands into overflow, but resizing must not silently remove a task.
- Interaction copy when the input verb changes: tap on touch, click on Mac, select when input-agnostic wording is clearer.

## Brand boundary

Use standard Apple behavior for the functional layer and LoomLogic design for the content layer. Do not recolor every system control blue, replace standard typography in menus or controls, redraw SF Symbols, or force identical chrome across platforms. Brand through hierarchy, composition, content typography where suitable, neutral surfaces, restrained accents, data visualization, domain interactions, and approved product assets.

## Architecture questions

Before implementation, answer:

1. Which targets and deployment versions ship this feature?
2. Is the existing view genuinely cross-platform, or does each platform need a composition around shared content?
3. Who owns navigation, selection, focus, document state, transient presentation, and async work in each scene/window?
4. Which commands must exist in menus and shortcuts, and how do they validate against current focus/selection?
5. How does the interface behave at compact and regular sizes, in a short window, with large text, and with localized content?
6. Which newer APIs need availability guards and what is the fallback?
7. Which product-specific behavior belongs in the Dynamic Interaction System, and which transition should remain platform-native?

## Failure patterns

Reject:

- `if iPad` layout branches where available space or scene configuration is the real condition;
- one shared screen that preserves code reuse by weakening every platform;
- an iPad app that is a centered, wider iPhone flow;
- a Mac app with no menu model, keyboard workflow, or real window behavior;
- platform-specific forks that duplicate business logic and drift;
- custom chrome that competes with system navigation, window controls, or accessibility;
- version-specific visual assumptions without API availability and fallback behavior.

Official baselines: [Getting started](https://developer.apple.com/design/human-interface-guidelines/getting-started), [Layout](https://developer.apple.com/design/human-interface-guidelines/layout), and [Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles).

