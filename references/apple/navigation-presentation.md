# Navigation and presentation

Read this reference when choosing hierarchy, tabs, sidebars, split views, toolbars, search, alerts, sheets, popovers, inspectors, panels, or full-screen presentations.

## Navigation model first

Map the product's places and tasks before selecting a container:

- **Peer destinations:** stable top-level areas. Use a tab model where the number and hierarchy fit; preserve each destination's state.
- **Hierarchy:** a parent-to-child path where returning is meaningful. Use a navigation stack or split navigation based on space and platform.
- **Simultaneous context:** a hierarchy, collection, detail, or inspector that becomes more useful when visible together. Use split views, sidebars, or inspectors.
- **Independent workspace:** content that should remain usable beside another context. Use another scene/window on iPadOS or macOS.
- **Transient action:** a short, contextual choice or reversible interruption. Use a menu, popover, confirmation dialog, or sheet according to scope.

Back, Close, Cancel, and Done are not interchangeable. Back moves through hierarchy. Close dismisses an independent presentation or window. Cancel abandons uncommitted work. Done completes or accepts a task. Preserve these semantics in labels, focus, keyboard shortcuts, and state transitions.

## Container rules

### Tabs

- Use tabs for navigation among peer destinations, never as a row of actions.
- Keep destinations stable and recognizable. Don't conditionally remove a primary tab without a product-level reason.
- Preserve navigation and scroll state per tab. Avoid directional push animation between peers.
- On iPadOS, consider an adaptable tab/sidebar experience when it matches the product; use a navigation split view when the product requires a persistent sidebar rather than a user-switchable tab presentation.

### Sidebars and split views

- Use a sidebar for top-level collections or major areas that benefit from persistent access in wide layouts.
- Keep hierarchy shallow in a sidebar; use another pane for deeper levels. Persistently show selection that leads to the detail.
- Allow hiding where the platform supports it, but keep the feature discoverable through edge gestures, toolbar controls, and View menu commands as appropriate.
- Test collapsed and expanded states. When a split view collapses, preserve the selected object and a coherent back path.

### Toolbars

- Toolbars expose frequent commands, navigation, title/context, and search. They do not replace tab bars or the menu bar.
- Prioritize; let less-frequent commands move to overflow. Use stable placement for repeated work.
- On macOS, every toolbar command must also be available in the menu system or another complete command surface because toolbars can be hidden or customized.
- Avoid hand-built bars that duplicate native title, safe-area, overflow, material, focus, and accessibility behavior.

## Presentation decision table

| Need | Preferred presentation |
| --- | --- |
| Critical, actionable information requiring a decision | Alert; concise and rare |
| Several choices tied to an intentional action | Confirmation dialog or action sheet on iOS/iPadOS; menu or alert only when semantics fit |
| Short reversible task that temporarily interrupts | Sheet |
| Choice/details anchored to a visible source | Popover; adapt appropriately in compact space |
| Attributes or tools that should remain available beside content | Inspector or panel on iPadOS/macOS |
| Independent document, record, or workspace | New scene/window on iPadOS/macOS |
| Immersive or complex task needing isolation | Full-screen presentation where platform and task justify it |
| Noncritical status or validation | Inline feedback near the source, not an alert |

## Modal discipline

- Use modality only when focused interruption improves comprehension, safety, or task completion.
- Keep modal work short and self-contained. Avoid an app-within-an-app hierarchy and stacked sheets/alerts.
- Preserve the initiating context and return focus/selection correctly on dismissal.
- Protect unsaved work with a confirmation only when data would actually be lost and undo/recovery can't solve it.
- Don't use an alert for passive information, routine success, connectivity banners, onboarding, or every recoverable error.

## Platform adaptation

- **iOS:** focused stacks and tabs; sheets for short tasks; full-screen only when depth or immersion warrants it; preserve edge-back.
- **iPadOS:** use the canvas for sidebars, split views, inspectors, and anchored popovers; adapt continuously as the window changes size.
- **macOS:** prefer simultaneous context and nonmodal windows/panels where productive; keep menus and shortcuts authoritative and use sheets for window-scoped decisions.

Official baselines: [Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars), [Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars), [Split views](https://developer.apple.com/design/human-interface-guidelines/split-views), [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars), [Modality](https://developer.apple.com/design/human-interface-guidelines/modality), and [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts).
