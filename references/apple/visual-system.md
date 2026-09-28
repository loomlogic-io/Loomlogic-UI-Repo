# Native Apple visual system

Read this reference for Liquid Glass, standard materials, system chrome, typography, semantic color, Dark Mode, and SF Symbols.

## Functional layer versus content layer

Use current platform materials to distinguish functional controls/navigation from content. Standard framework components should receive the platform's current appearance automatically. LoomLogic's neutral, editorial content layer remains the visual foundation; don't make every surface resemble system chrome.

## Liquid Glass and materials

- Treat Liquid Glass as a functional layer for controls and navigation that float above content, such as supported bars, sidebars, toolbars, popovers, and transient controls.
- Do not use Liquid Glass as the default background for content cards, tables, forms, lists, document canvases, dashboards, or nested containers.
- Prefer standard system components. Add custom glass only to an important functional element whose layering and interactivity are clearer because content remains visible beneath it.
- Choose material by semantic purpose and legibility, not by the apparent color in one screenshot. Appearance changes with content, system settings, platform, and release.
- Use the more legible regular behavior for text-heavy or variable backgrounds. Reserve highly transparent treatment for visually rich media where contrast is explicitly protected.
- Avoid stacked glass, colored glass, gradient borders, blur-as-decoration, and a parallel web-style glassmorphism system.
- Verify Reduce Transparency, Increase Contrast, different system appearance preferences, light/dark content, scrolling beneath the material, and older deployment fallbacks.

## Typography

- Use system text styles for system-facing UI and most native application text. This preserves platform metrics, Dynamic Type or accessibility scaling, language coverage, optical behavior, and familiarity.
- Use LoomLogic or product typefaces only where branding materially benefits content and legibility remains strong. Don't replace typography in menus, standard controls, alerts, or dense system chrome.
- Avoid fixed heights around text. Let labels wrap, controls expand, and horizontal groups stack at large sizes.
- Use monospaced/tabular digits for changing measurements and aligned numeric data where supported; keep accessibility announcements meaningful rather than reading every tick.
- Validate weight, truncation, baseline alignment, and hierarchy in every supported script, appearance, and accessibility size.

## Color and appearance

- Map product tokens to semantic roles: background, grouped background, primary/secondary/tertiary label, separator, fill, accent, selection, success, warning, and destructive.
- Prefer system semantic colors for platform chrome and adaptive controls. Use product colors in content, data visualization, branded imagery, and controlled accents.
- Provide light, dark, and increased-contrast behavior for every custom color. Never animate unresolved dynamic colors; resolve endpoints in the current environment first.
- Don't use the same accent for interactive controls, selection, noninteractive decoration, and status if that makes meaning ambiguous.
- Never communicate state by color alone. Pair status with text, symbols, shape, position, or another perceivable cue.

## SF Symbols

- Prefer SF Symbols for standard actions and concepts when an appropriate symbol exists. Match weight, scale, baseline, rendering mode, and variant to the surrounding text/control.
- Let standard containers choose outline/fill variants when they already encode platform convention. Use fill for emphasis or selection only when semantics remain clear.
- Use localized and direction-aware symbols where available. Do not manually mirror symbols that represent a physical direction, media playback, or another non-language-relative concept.
- Keep symbol animation purposeful and subordinate to the state change. Respect Reduce Motion and avoid continuous decorative playback.
- Create a custom symbol only when the system library lacks the product concept. Follow SF Symbols templates and accessibility rules; provide an accessible label.
- Respect usage restrictions on Apple product/feature symbols. Never redraw or modify restricted symbols, and don't copy SF Symbols into this repository.

## LoomLogic mapping

- Neutral system-aware surfaces carry most UI.
- LoomLogic blue remains a controlled signal, not the tint of every native control or sidebar icon.
- The approved gradient remains a brand asset, not a navigation material or system-control fill.
- System chrome follows Apple behavior. LoomLogic appears through content hierarchy, data views, product-specific controls, restrained radii/borders, and carefully chosen motion.

Official baselines: [Materials](https://developer.apple.com/design/human-interface-guidelines/materials), [Typography](https://developer.apple.com/design/human-interface-guidelines/typography), [Color](https://developer.apple.com/design/human-interface-guidelines/color), [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [SF Symbols HIG](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), and [SF Symbols](https://developer.apple.com/sf-symbols/).
