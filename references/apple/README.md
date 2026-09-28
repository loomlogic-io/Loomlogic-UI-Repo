# Native Apple reference index

Read this index for UI work that ships through SwiftUI, UIKit, AppKit, or Mac Catalyst. It extends the LoomLogic UI core; it does not replace repository instructions, the product design system, current Apple documentation, or the existing Dynamic Interaction System. Native Apple motion uses native SwiftUI/UIKit/AppKit system animation APIs. `motion/react` and GSAP are web-only and must not ship in native Apple targets.

## Operating model

1. Identify the affected Apple platforms, deployment targets, framework mix, scenes, documents, and supported window configurations.
2. Read [platform adaptation](platform-adaptation.md) and each affected platform profile: [iOS](ios.md), [iPadOS](ipados.md), or [macOS](macos.md).
3. Read only the topic references the task needs.
4. Confirm time-sensitive behavior and API availability against the live sources in [official resources](official-resources.md).
5. Verify with the matrix in [verification](verification.md).

## Topic routing

| Need | Read |
| --- | --- |
| Cross-platform structure and brand/platform boundaries | [Platform adaptation](platform-adaptation.md) |
| Hierarchy, tabs, sidebars, split views, toolbars | [Navigation and presentation](navigation-presentation.md) |
| Alerts, sheets, popovers, inspectors, panels, windows | [Navigation and presentation](navigation-presentation.md) and [Windows and multitasking](windows-multitasking.md) |
| Resizing, multiple scenes/windows, state restoration, full screen | [Windows and multitasking](windows-multitasking.md) |
| Menu bar, context menus, command placement, shortcuts | [Menus and commands](menus-commands.md) |
| Touch, gestures, keyboard, pointer, focus, Pencil, drag and drop | [Input and interaction](input-interaction.md) |
| Motion runtime, ownership, tokens, and reusable behavior | [Motion engine policy](../motion-engine-policy.md), [motion tokens](../motion-tokens.md), [motion primitives](../motion-primitives.md), and [Input and interaction](input-interaction.md) |
| Liquid Glass, standard materials, color, type, SF Symbols | [Visual system](visual-system.md) |
| VoiceOver, Voice Control, Switch Control, Full Keyboard Access, adaptable UI | [Accessibility](accessibility.md) |
| Labels, errors, haptics, sound, async state, progress | [Content and feedback](content-feedback.md) |
| Internationalization, expansion, RTL, locale formatting | [Localization and RTL](localization-rtl.md) |
| App icons, Icon Composer, asset workflow | [App icons](app-icons.md) |
| Live HIG, framework docs, tools, videos, resources | [Official resources](official-resources.md) |
| Build, test, simulator/device, accessibility and input QA | [Verification](verification.md) |

## Platform layer and LoomLogic layer

Keep these responsibilities distinct.

**Platform layer:** navigation containers, window behavior, menu and command placement, toolbar semantics, controls, presentation behavior, native animation APIs, keyboard conventions, focus, pointer behavior, semantic colors, text styles, SF Symbols, accessibility, system materials, safe areas, and state restoration.

**LoomLogic/product layer:** information architecture, task hierarchy, data visualization, domain-specific workspaces, product copy, content density, custom interactions, restrained brand accents, approved assets, and the Dynamic Interaction System.

Standard Apple behavior is not a visual theme. A LoomLogic app should feel native in operation without becoming an imitation of Settings, Finder, or another Apple app. Keep the content layer calm, precise, and recognizably LoomLogic; let system chrome behave like the platform.

The Dynamic Interaction System and Apple guidance inform purpose, continuity, physical behavior, and platform conventions; they do not visually skin web apps as Apple software. Keep one canonical state owner and one native animation owner per interaction.

## Source and asset policy

- Use current official Apple pages as references and link to them; do not paste large sections of the HIG into this repository.
- Do not vendor Apple UI kits, templates, fonts, SF Symbols, Icon Composer files, screenshots, bezels, logos, or other proprietary resources into the skill.
- Use Apple Design Resources and tools only for supported design/development work and under their current terms.
- Treat screenshots and third-party apps as observational evidence, never as permission to copy layouts, trade dress, copy, or assets.
- Recheck live guidance for each major SDK cycle. The official resource index was last reviewed on 2026-09-28.
