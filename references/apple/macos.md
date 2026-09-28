# macOS adaptation profile

Read this profile for native Mac and Mac Catalyst work. A good Mac app is a windowed, keyboard-and-pointer-first environment with complete commands, precise selection, productive density, customization, and durable state—not a large iPad view in a desktop frame.

## Product posture

People commonly use a Mac for long, concentrated sessions while several apps and windows are open. They resize, move, minimize, tile, hide, reopen, and compare windows; use keyboard and pointer together; expect standard menus and shortcuts; and distinguish active, inactive, key, and main window state.

## Application structure

- Define window roles before composing screens: primary content or document windows, auxiliary windows, inspectors, settings, utility panels, and transient presentations.
- Use sidebars and split views for durable hierarchy; use inspectors for attributes or tools tied to the current selection; use separate windows for independently useful content.
- Keep the menu bar as the complete command map. Toolbars contain frequent contextual commands, not every command; every toolbar action must remain available through a menu or another discoverable path.
- Support standard File, Edit, View, Window, and Help expectations where applicable, including undo/redo, cut/copy/paste, selection, find, window management, settings, and help.
- Respect the responder chain, focus, selection, first responder, and command validation instead of routing every action through view-local state.

## Windows, layout, and density

- Support meaningful resizing. Define a minimum only where controls or content would otherwise become unusable; do not use size limits to avoid adaptation.
- Design active/inactive and key/non-key states. Selection, accent, and toolbar emphasis must remain understandable when a window loses focus.
- Use comfortable information density suited to precise input and large displays. Avoid iOS-sized rows, controls, margins, and card stacks unless touch compatibility or the product requires them.
- Preserve window frame, split position, selection, navigation, document, and restoration state at the right ownership level.
- Test full screen, multiple displays, different scaling settings, and multiple windows when supported.

## Input and commands

- Ensure complete keyboard operation, logical tab/focus movement, standard shortcuts, contextual validation, and visible menu discovery.
- Support primary and secondary click, hover as optional affordance, contextual menus, multiple selection, modifier-assisted selection, precise drag and drop, and system services where relevant.
- Never make a hidden hover affordance or context menu the only path to a command.
- Prefer familiar cursor and trackpad behavior; don't redefine systemwide gestures or replace the pointer for decoration.

## Presentation and materials

- Prefer nonmodal organization for tasks that benefit from simultaneous context. Use sheets for document- or window-scoped decisions, popovers for anchored transient choices, panels/inspectors for supporting tools, and alerts only for critical actionable interruption.
- Let standard title bars, toolbars, sidebars, controls, menus, and presentations adopt current platform materials. Use solid or standard content materials for workspaces and dense data.
- Keep LoomLogic expression in the content hierarchy, product workspaces, data visualization, custom task interactions, and restrained accents rather than overriding system chrome.

## Mac Catalyst

Treat Catalyst as a Mac product target, not merely a build destination. Audit menu bar commands, keyboard shortcuts, window management, pointer behavior, text and control metrics, toolbars, settings, drag and drop, and Mac idiom decisions. Preserve shared code where it produces correct behavior; introduce platform-specific adaptation where the Mac task demands it.

## macOS definition of done

- Every important action is discoverable from the menu bar, main interface, or both, and contextual availability validates correctly.
- Keyboard-only, pointer, selection, drag/drop, undo/redo, focus, and active/inactive states work.
- Primary and auxiliary windows resize, restore, enter full screen, and coexist correctly on supported displays.
- VoiceOver, Full Keyboard Access, contrast, reduced motion/transparency, and scalable content are verified.
- The interface has Mac-appropriate density and platform behavior while remaining recognizably the product.

Official baseline: [Designing for macOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-macos).
