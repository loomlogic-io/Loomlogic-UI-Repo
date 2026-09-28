# Localization and right-to-left layouts

Internationalize the architecture before translating copy. Layout, navigation, symbols, data formatting, search, sorting, text entry, and accessibility all need to work across supported languages and regions.

## String and data rules

- Localize complete semantic strings. Avoid concatenation, manual plural logic, and assembling sentences from UI fragments.
- Use platform localization catalogs and locale-aware formatting for dates, times, durations, numbers, measurement, currency, names, lists, and relative values.
- Separate language from region and calendar assumptions. Don't infer units, week start, currency, or date order from the interface language alone.
- Expect expansion, contraction, multiline labels, scripts with different metrics, and mixed-direction content. Avoid fixed-width labels and text baked into images.
- Localize accessibility labels, hints, values, notification copy, menus, shortcuts where required, app metadata, permission explanations, and error recovery.

## Right-to-left behavior

- Build with leading/trailing semantics and system layout direction. Avoid hardcoded left/right constraints when the relationship is language-relative.
- Mirror navigation flow, back/forward controls, disclosure direction, progress that follows reading order, and ordered previous/next relationships.
- Preserve symbols and controls that represent physical direction, clock direction, media playback, charts, maps, or another absolute concept unless current platform guidance says otherwise.
- Use SF Symbols that provide localization and RTL behavior when available. Don't manually flip a symbol without confirming its semantic direction.
- Keep numeric, code, URL, path, and mixed-script content readable with correct isolation and alignment rather than forcing the whole row into one direction.

## Adaptive composition

- Let text determine container size. At larger text or in longer locales, horizontal control groups may need to stack and toolbars may need overflow.
- Test menus, sidebars, tables, inspectors, alerts, sheets, window titles, widgets, and notifications—not only the main screen.
- Avoid relying on capitalization to create hierarchy across scripts. Preserve visual balance when scripts have different apparent size or baseline behavior.
- Ensure truncation doesn't remove the distinguishing part of a label, filename, or command. Prefer wrapping, flexible layout, or disambiguated short labels.

## Test matrix

- A long Latin locale for expansion.
- An RTL locale with full navigation and data entry.
- A CJK locale or another non-Latin script relevant to the product.
- Pseudolocalization, missing-string detection, and plural/format variants.
- Large text combined with localization and compact/resized windows.
- VoiceOver pronunciation/order and keyboard shortcuts under localized layouts.

Official baselines: [Right to left](https://developer.apple.com/design/human-interface-guidelines/right-to-left), [Inclusion](https://developer.apple.com/design/human-interface-guidelines/inclusion), [Interface fundamentals](https://developer.apple.com/documentation/technologyoverviews/interface-fundamentals), and [Localization](https://developer.apple.com/documentation/xcode/localization).

