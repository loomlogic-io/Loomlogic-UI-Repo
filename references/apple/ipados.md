# iPadOS adaptation profile

Read this profile for every native iPad target, even when the codebase shares most views with iOS. iPadOS is its own resizable, multi-input, multiwindow environment—not an enlarged iPhone screen or a simplified Mac.

## Product posture

iPad supports focused touch use, keyboard-and-pointer productivity, Pencil work, multiple visible apps, freely resized windows, external displays, and more than one window from the same app. Design the task to remain coherent across these modes without removing capability when space becomes compact.

## Adaptation rules

- Drive layout from available space, traits, and container proposals rather than device model or orientation. Expect compact-width iPad windows and short, wide configurations.
- Keep the same core capability as the window changes size. Adapt what is simultaneously visible: tabs may become a sidebar, secondary panes may collapse into navigation, inspectors may become presentations, and secondary commands may move into overflow.
- Use split views when simultaneous hierarchy or detail improves the task. Maintain selection as panes appear, disappear, or collapse so people remain oriented.
- Treat top tab bars, adaptable sidebars, navigation split views, and toolbars as different semantic tools. Don't place commands in a tab bar or turn a sidebar into an action drawer.
- Avoid oversized phone layouts, excessive empty space, fixed centered phone-width columns, and modals used only because the iPhone version uses them.

## Windows and multitasking

- Support full-screen and windowed use unless the product has a documented exception. Test narrow, wide, short, and tall windows, not only standard device screenshots.
- Support multiple windows when people benefit from viewing or working with separate documents, records, sessions, or workspaces. Each scene owns appropriate navigation, selection, focus, and restoration state.
- Account for system window controls and toolbar space. Don't hardcode leading items where system controls can overlap.
- Preserve work when the scene resigns active, moves between displays, or is reopened. Coordinate shared model state without leaking one window's transient selection into another.

## Input and productivity

- Touch remains complete. Keyboard and pointer enhance rather than replace it.
- Provide standard shortcuts for frequent commands, visible menu commands where supported, logical focus order, hover only as optional preview, and context menus for relevant object actions.
- Support drag and drop within the app and across apps when the content model makes it useful. Provide visible or menu/keyboard alternatives and truthful copy/move semantics.
- Support Pencil as an input only when it advances the product task; don't make Pencil mandatory for ordinary controls.

## Presentation and brand

- Prefer anchored popovers and contextual menus where the source context matters. Use sheets or full-screen work for focused tasks; use another window when the content represents an independently useful workspace.
- Let standard navigation and controls adopt current system materials. Keep Liquid Glass out of ordinary content cards, tables, forms, and dense workspaces.
- Use the larger canvas for hierarchy, comparison, inspectors, and persistent context—not decoration or wider blank margins.

## iPadOS definition of done

- The flow works at compact and regular widths, in full-screen and windowed configurations, without capability loss or broken navigation.
- Touch, keyboard, pointer, focus, context menu, and drag-and-drop paths are coherent where relevant.
- Multiple windows, scene restoration, window controls, external keyboard appearance, and supported orientations are tested.
- Large text, VoiceOver, Full Keyboard Access, Increase Contrast, Reduce Motion, and Reduce Transparency are verified.
- The result uses iPad's space and inputs intentionally while retaining the product's identity.

Official baselines: [Designing for iPadOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados), [Layout](https://developer.apple.com/design/human-interface-guidelines/layout), [Multitasking](https://developer.apple.com/design/human-interface-guidelines/multitasking), and [Windows](https://developer.apple.com/design/human-interface-guidelines/windows).

