# Motion tokens

Read this reference when defining, mapping, or reviewing motion values. It provides one semantic vocabulary across CSS, Motion, View Transitions, GSAP, Reanimated, and native Apple APIs without pretending those runtimes share identical parameters.

## Vocabulary

Use these names for motion intent:

| Token | Purpose | Typical behavior |
| --- | --- | --- |
| **Feedback** | Confirm immediate input or a small local state change | Immediate response; usually 120–180 ms when timed; minimal travel; no decorative overshoot |
| **Quiet** | Repeated product UI, menus, panels, selection, and high-trust workflows | Fast and restrained; usually 180–280 ms when timed; critically damped or nearly so when sprung |
| **Spatial** | Explain origin, destination, hierarchy, or persistent object identity | Usually 220–400 ms; geometry and direction carry meaning; large travel is avoided or compressed |
| **Physical** | Settle direct manipulation using measured gesture energy | Interruptible spring/decay behavior; release velocity is preserved; overshoot is slight and earned by input |
| **Expressive** | Rare branded or narrative emphasis | Usually 400–550 ms for a bounded sequence; may use richer staging, never at the expense of task speed or clarity |

These are semantic profiles, not five universal spring presets. Do not introduce parallel names such as `snappy`, `bouncy`, `gentle`, or framework-specific preset names into shared product tokens. If a framework exposes those names, map them privately to the nearest LoomLogic intent.

## Choosing a profile

1. Name the purpose before choosing values.
2. Use **feedback** for press, hover, focus, and small acknowledgements.
3. Use **quiet** for frequent product transitions and sensitive workflows.
4. Use **spatial** only when movement explains where content came from or went.
5. Use **physical** only when a gesture supplies position or velocity.
6. Use **expressive** sparingly for launches, storytelling, or a rare product moment.

Frequency lowers energy. A transition seen dozens of times per session should normally be feedback or quiet even if the first-use version could justify spatial explanation. Clinical, financial, destructive, error, permission, and persistence states do not use celebratory bounce.

## Timing and easing foundation

For web timing-based transitions, these are approved starting points, not component mandates:

```css
:root {
  --motion-duration-feedback: 150ms;
  --motion-duration-quiet: 240ms;
  --motion-duration-spatial: 320ms;
  --motion-duration-expressive: 480ms;

  --motion-ease-standard: cubic-bezier(.22, 1, .36, 1);
  --motion-ease-exit: cubic-bezier(.4, 0, 1, 1);
}
```

- Exits are generally shorter than entrances.
- Distance and visual mass may justify longer settlement, but large surfaces should move with less energy.
- Do not force a duration onto direct manipulation. Physical motion settles from live position and velocity.
- Do not animate layout-affecting properties in hot paths when a transform, clip, or crossfade can preserve the same meaning.

Map tokens into the project's existing token format and naming conventions. Do not scatter these raw values across components or create a second global token system.

## Spring mapping

Use response, damping, bounds, and input velocity rather than naming extra spring families.

- **Quiet:** critically damped or nearly so, with no visible overshoot.
- **Spatial:** usually critically damped; a small amount of continuity matters more than bounce.
- **Physical:** begin around a 0.3–0.4 s response with damping near 1.0, then tune against the runtime's parameter model and observed release behavior.
- **Expressive:** may use controlled overshoot only when the product moment earns it; never make content unreadable or delay completion.

Feedback is usually timed or platform-native. It may use a spring only when the component already has a spring-owned continuous presentation value. Preserve the gesture's release velocity in the units expected by the runtime and guard near-zero normalization.

## Cross-runtime mapping

- **CSS:** expose semantic durations/eases as project tokens and use them for simple transitions only.
- **Motion:** create typed transition helpers keyed by the semantic names when repetition justifies them; allow local physical parameters for gesture scale and mass.
- **View Transitions:** use quiet or spatial timing depending on whether the transition merely softens replacement or explains route continuity.
- **GSAP:** name timelines by product sequence; use the semantic profile to set pacing, not to create a second global duration system.
- **Reanimated:** map quiet, spatial, and physical intent to the installed version's timing/spring configuration; keep gesture settlement driven by live shared values and velocity.
- **SwiftUI/UIKit/AppKit:** express the same intent through native system APIs and platform conventions. Do not force web cubic-bezier values or exact web durations into native controls.

## Adaptive variants

Every motion token resolves through context:

- `prefers-reduced-motion` or Reduce Motion removes parallax, momentum, elastic overshoot, auto-play loops, and large travel. Preserve causality with an immediate update or short fade.
- Repeated expert workflows use the quietest adequate profile.
- Coarse input may need stronger feedback and larger intent thresholds, not more animation.
- Fine-pointer hover remains optional and must not reveal unique content or actions.
- Constrained devices drop blur, filters, large shadows, and continuous effects before functional feedback.
- Reduced transparency and increased contrast resolve materials and borders separately from motion timing.

Tokens never override platform-owned accessibility settings or standard navigation behavior.
