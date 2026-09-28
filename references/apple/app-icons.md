# App icons and Icon Composer

Read this reference when creating, updating, integrating, or reviewing an app icon for iOS, iPadOS, or macOS.

## Design intent

- Express one simple, recognizable product idea. Preserve LoomLogic or product identity across platforms without reproducing interface screenshots, standard controls, or Apple hardware.
- Keep important content centered and resilient to system masking, appearance variants, small sizes, and platform rendering.
- Avoid nonessential text. It is hard to read, doesn't localize well, and often duplicates the app name shown nearby.
- Prefer designed illustration or geometry over photography and excessive fine detail. Test recognition at small sizes and in crowded system contexts.
- Keep the concept consistent across platforms while allowing platform-specific composition when necessary.

## Layered workflow

1. Start from the current official app-icon template or grid in Apple Design Resources. Do not copy the template into this skill repository.
2. Prepare clean source artwork in layers, preferably vector where supported. Name and order layers clearly from back to front.
3. Leave system-rendered effects such as masks, specular behavior, refraction, translucency, and platform shadows to Icon Composer/current Xcode tooling where the deployment strategy supports them.
4. Import and annotate the layers in Icon Composer. Preview supported platforms and appearance modes, including default, dark, clear, and tinted variants where available.
5. Integrate the Icon Composer file or asset-catalog workflow according to current Xcode documentation and deployment targets. Understand whether it replaces an existing icon asset catalog and how older OS versions are generated or preserved.
6. Test in Xcode, Simulator, physical devices, Finder/Dock/Launchpad where applicable, Settings, search, notifications, share sheets, and App Store/TestFlight contexts.

## Constraints

- Don't pre-mask artwork; the system applies the platform shape.
- Don't bake in effects that conflict with system rendering unless careful cross-version tests prove they are intentional.
- Don't use Apple product replicas, restricted symbols, Apple logos, or unlicensed third-party artwork.
- Keep alternate icons closely related to the product and provide every required appearance variant. Treat alternate icons as reviewed product assets, not hidden seasonal experiments.
- Preserve an existing approved LoomLogic logo or icon; don't redraw or derive it to satisfy the current icon style. Adapt the composition around the approved asset and obtain brand approval when a new app icon is genuinely required.

## Repository policy

This skill stores guidance and official links only. It must not contain Apple templates, SF Symbols, Icon Composer binaries/files, product bezels, UI kits, or copied screenshots. Project-specific icon source and export files belong in the product repository under its asset and licensing policy.

Official baselines: [App icons HIG](https://developer.apple.com/design/human-interface-guidelines/app-icons), [Icon Composer](https://developer.apple.com/icon-composer/), [Creating your app icon using Icon Composer](https://developer.apple.com/documentation/xcode/creating-your-app-icon-using-icon-composer), and [Apple Design Resources](https://developer.apple.com/design/resources/).

