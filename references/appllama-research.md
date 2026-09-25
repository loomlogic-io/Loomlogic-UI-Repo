# Optional Appllama reference research

Read this only for Expo or React Native work when the Appllama MCP is already available and real-app reference research would materially improve the task. Appllama is an optional research source, never a build dependency, design system, or requirement for using LoomLogic UI.

Do not configure, purchase, or require Appllama access unless the user asks. When it is unavailable, proceed from repository evidence, user-provided references, platform guidance, and other permitted research sources.

## Research budgets

Use the smallest sample that answers the design question:

| Scope | Apps | Relevant screens | Use when |
| --- | ---: | ---: | --- |
| Normal feature or screen | 3–5 | 5–10 | A focused screen, component, or short flow |
| Major redesign or new product flow | 5–8 | 10–20 | Information architecture, onboarding, paywall, or a multi-screen redesign |
| Deep competitive UX audit | Task-dependent | 20–30+ | Only when the user explicitly requests a deep audit or broad competitive study |

These are ceilings to guide effort, not quotas. Stop early when additional references repeat the same patterns. Do not escalate an ordinary build into a catalog sweep, and do not harvest the service's dataset.

## Research method

1. Define the question before searching: screen type, user decision, navigation role, content hierarchy, interaction, or flow placement.
2. Prefer comparable, successful products and the user's saved references. Diversity should come from meaningful product or interaction differences, not random screenshots.
3. Walk enough of each selected flow to understand context. A screen without its entry point, exit, and back behavior can be misleading.
4. Record recurring patterns: layout skeleton, information priority, native control choice, CTA placement, disclosure timing, progress model, modal/sheet/push semantics, empty/error treatment, and motion purpose.
5. Note useful outliers and tradeoffs. Popularity is evidence, not proof that a choice fits this product.
6. Synthesize a short pattern brief before implementation: what repeats, what varies, which pattern fits this product, and how it will be adapted to LoomLogic or the repository's design system.

## Pattern extraction, not cloning

References inform interaction grammar and decision structure. Never reproduce a competitor's pixels, full screen, copy, artwork, iconography, proprietary assets, or distinctive trade dress. Do not treat Appllama watermarks or capture artifacts as part of the source design.

Translate the evidence through the source priority in `SKILL.md`:

- keep the product's content, brand, tokens, components, and platform behavior;
- adapt proven hierarchy and navigation semantics to the actual user goal;
- explain the pattern adopted and the product-specific changes;
- reject a frequently observed pattern when it conflicts with accessibility, trust, platform expectations, or the user's requirements.

Research ends when it has changed or validated a concrete design decision. It must not delay a well-supported implementation merely because more screens are available.
