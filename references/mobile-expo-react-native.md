# Expo and React Native guidance

Read this reference for Expo or React Native design, implementation, review, or polish. It extends the LoomLogic core; it does not create a separate mobile brand or override repository-specific product rules.

Treat Apple's Human Interface Guidelines and Android's platform guidance as behavioral baselines, then adapt them through the repository's product requirements and design system.

## Preserve the design hierarchy

Apply the source priority in `SKILL.md` before these defaults. Preserve the project's navigation model, tokens, components, dependencies, and native architecture when they are sound.

For LoomLogic-family apps, carry the monochrome, editorial, luxury-tech direction into native surfaces:

- let neutral system-aware surfaces carry most of the interface;
- keep blue and the LoomLogic gradient rare and intentional;
- use restrained radii, fine separators, precise typography, and limited elevation;
- prefer platform materials and native depth cues over web-style glass panels, large shadows, or card stacks;
- keep primary actions monochromatic unless product-specific brand rules say otherwise.

Platform conventions determine behavior. LoomLogic determines visual character. Neither licenses a pixel-for-pixel imitation of another app.

## Native baseline

1. Inspect the actual Expo, React Native, router, gesture, animation, image, and list packages before choosing APIs. Do not replace the project's stack merely to match an example.
2. Prefer native controls or maintained native wrappers for switches, pickers, menus, date/time input, share sheets, context menus, and system permissions. Rebuilding a familiar control is justified only when the product requires behavior the native control cannot provide.
3. Use one platform-appropriate icon family per surface. Prefer SF Symbols on iOS and Material Symbols or the project's established family on Android. Do not use emoji as application chrome.
4. Derive insets from the safe-area system. Never hard-code notch, status-bar, Dynamic Island, or home-indicator offsets.
5. Use responsive measurements and current window dimensions. Verify rotation and larger devices when the product supports them.
6. Put scroll padding in the scroll content container, keep keyboard avoidance intentional, and ensure focused fields remain visible.
7. Use the navigator's native title, back behavior, gestures, and large-title collapse where they fit. Do not hand-build a header merely to make it look custom.

## Semantic color, type, and accessibility

- Map LoomLogic or product tokens to semantic roles such as background, grouped surface, primary text, secondary text, separator, accent, success, warning, and destructive. Do not scatter raw light-mode values through components.
- Design light and dark themes together. System materials and semantic colors may resolve differently by platform; resolve them to stable values before interpolating or animating them.
- Use the platform type ramp and Dynamic Type / font scaling. Preserve hierarchy at larger accessibility sizes instead of disabling scaling to protect a screenshot.
- Use tabular numerals for changing counts, times, prices, and aligned data. Make useful values selectable or copyable.
- Every interactive control needs an accessible role, name, state, and hint when the outcome is not evident. Group or hide descendants deliberately so screen readers announce the intended unit.
- Keep targets at least 44 x 44 points on iOS and meet the equivalent Android guidance. Never rely on color, motion, or haptics as the only feedback.
- Support screen readers, switch control, external keyboards where relevant, high contrast, and both platform text-size extremes. Preserve logical focus order after sheets, modals, errors, and async updates.
- Format dates, quantities, currency, and compact numbers with locale-aware APIs. Product copy should read like an interface, not raw database output.

## Navigation semantics

Model the route before styling the screen. Record what the destination is, whether the user should return to the previous state, and what back does on both platforms.

- **Push** when the destination is deeper in the same hierarchy and returning is meaningful.
- **Replace or redirect** after a true one-way transition such as completing mandatory onboarding, resolving an authentication gate, or finishing a flow whose prior state is no longer valid.
- **Modal with its own stack** for a self-contained multi-step task with Cancel/Done semantics.
- **Sheet** for a short, reversible interruption such as filters, a picker, or item options. If it grows into a multi-step destination, promote it to a route or modal.
- **Full-screen modal** for immersive, focused work that needs an explicit close action.
- **Overlay / transparent presentation** only when the underlying context must remain visible and meaningful.
- **System controller** for share, browser, media picker, permissions, and other OS-owned tasks.

Tabs are peer destinations: keep each tab's state and stack, avoid directional slide transitions between tabs, and define active-tab reselect behavior. Full-attention tasks belong above the tab navigator. Deep links and cold starts must resolve to a coherent back stack without flashing an incorrect authentication or theme state.

Back should remain available unless an irreversible request is briefly in flight or unsaved modal work needs confirmation. In-screen transient state may consume the first back action, but funnels, rating prompts, and paywalls must not trap users. A one-way transition must remove obsolete history; a temporary sign-in or upgrade gate launched from a feature should return users to that feature and finish the intent.

## Gesture, motion, and Reanimated

Choose motion by purpose and frequency before choosing an API.

- Keep high-frequency navigation, tab, keyboard, and scrolling behavior platform-native. Frequent feedback should be quiet and fast; reserve expressive motion for rare moments with a product purpose.
- Use motion for feedback, spatial continuity, state change, or explanation. Do not move data merely to decorate it.
- Use Reanimated and the gesture system for continuous, interruptible, finger-driven interactions. Preserve the live value when a gesture begins, carry release velocity into the settling animation, and keep the control grabbable during motion.
- Keep gesture-to-animation updates off the JavaScript thread. Prefer shared values and worklets for per-frame work; cross to JavaScript only at coarse event boundaries.
- Prefer transform and opacity for smooth animation. Avoid repeatedly animating layout properties in hot paths, animating recycled list rows on every mount, or measuring on each frame.
- Press feedback begins on press-in. Rows generally use a subtle highlight; compact buttons or cards may use a restrained scale. Exits should be quicker than entrances and should preserve spatial origin.
- Use the project's spring and timing vocabulary consistently. Do not add bounce unless the gesture or brand behavior earns it.
- Haptics are synchronized punctuation for selection, snapping, success, warning, or failure. Use at most one appropriate event per user action and always provide visual or audible feedback too.
- Respect Reduce Motion. Replace nonessential spatial movement with an immediate state change or restrained crossfade while leaving system-managed transitions to the OS.

Use `animate-expo` when the task needs deeper implementation guidance. Do not add Reanimated or another motion dependency for a simple transition the current stack already handles.

## State and perceived performance

- Keep server/cache state, durable client state, and local interaction state separate using the project's established tools. Avoid broad contexts that force unrelated screen updates.
- Reflect reversible actions immediately when safe, then reconcile or roll back with clear feedback.
- Prefer uncontrolled or isolated inputs for high-frequency typing paths when profiling shows controlled state is causing jank.
- Virtualize any collection that can grow. Use stable keys, avoid expensive work in item renderers, and do not attach entry animations to recycled rows by default.
- Use right-sized images, caching, recycling identifiers where supported, and placeholders that match the final geometry. Preload the next likely data or asset only when the interaction path justifies it.
- Match skeletons to known final structure; otherwise reveal progressively. Never block a whole screen with a spinner for a partial refresh.
- Measure startup, navigation, typing, scrolling, memory, and animation on a release build. Optimize demonstrated bottlenecks; do not scatter memoization or state libraries based on guesswork.

## Anti-generic mobile UI checks

Reject a result that looks assembled from AI defaults or unrelated templates. In addition to the main LoomLogic quality gates:

- keep one intentional accent and one neutral family unless the product design system specifies more;
- use a documented radius and elevation scale instead of mixing component-demo defaults;
- keep labels consistent for the same intent across the flow;
- avoid purple/indigo gradient CTAs, gratuitous glass, glow, sparkles, decorative confetti, oversized rounded containers, and card-per-section layouts unless the brand explicitly calls for them;
- use product-specific content and complete loading, empty, error, offline, disabled, permission-denied, and success states;
- adapt proven information architecture and interaction grammar, never another product's artwork, copy, trade dress, or exact screen composition.

## Simulator and device QA

A native flow is not finished from code review or static previews alone.

1. Run the actual app in the iOS Simulator and Android emulator when both platforms are supported.
2. Inspect representative phone sizes in light and dark themes, with large text, long/localized content, safe areas, keyboard, permission states, and offline/error conditions.
3. Exercise every transition and back path: header back, iOS edge swipe, Android system back, tab reselect, deep link, modal/sheet present and dismiss, interrupted gesture, and one-way transition.
4. Record important flows. Watch once at speed for feel and once frame-by-frame for dropped frames, theme flashes, layout jumps, clipping, stale state, keyboard jumps, and springs that settle incorrectly.
5. Profile the hero flow in a release build on a representative slower supported device. Development builds and simulators are insufficient proof of performance.
6. Re-test with Reduce Motion and a screen reader. Confirm focus placement, announcements, target sizes, contrast, and that no content depends solely on animation or haptics.

Report the devices and states actually verified. If hardware or a simulator is unavailable, say so plainly and distinguish code inspection from runtime verification.

## Mobile definition of done

- Navigation and back behavior are intentional on iOS and Android.
- Light/dark semantic colors, safe areas, keyboard, large text, and screen-reader behavior are verified.
- Native controls and platform conventions are used where they improve familiarity and reliability.
- Motion is purposeful, interruptible, reduced-motion aware, and smooth in a release build.
- Loading, empty, error, offline, permission, disabled, success, and long-content states are complete where relevant.
- Lists, images, inputs, and state updates are profiled on realistic data and hardware.
- The result is recognizably the product's design system and, when applicable, LoomLogic—not a copied reference or generic AI mobile template.
