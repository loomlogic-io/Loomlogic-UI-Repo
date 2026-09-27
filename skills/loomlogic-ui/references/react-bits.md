# React Bits routing

Read this reference only when React Bits is being considered, requested, searched, or installed. Use the installed `animated-component-libraries` skill for component-specific implementation knowledge, then verify the current component and installation instructions on the official React Bits site.

## Choose the right React Bits surface

- Use the free [React Bits catalog](https://reactbits.dev) for individually copied animated React components, text effects, interactions, backgrounds, and creative utilities.
- Treat [React Bits Pro](https://pro.reactbits.dev) as a separate licensed source. It can include registries, blocks, application UI, templates, agent resources, and MCP-assisted discovery depending on the user's plan.
- Never assume that the user owns React Bits Pro, has configured its registry, or has a license key. Inspect repository configuration or ask before using paid assets.
- Never expose, reproduce, or redistribute licensed source or license credentials. Use the official registry/install path when the project has legitimate access.

## Selection workflow

1. Define the product need before browsing: text treatment, transition, feedback, navigation, gallery, background, cursor effect, or decorative atmosphere.
2. Search the official catalog and shortlist at most three real components. Do not invent names or rely on the installed reference's catalog counts.
3. Prefer the lightest candidate that still achieves the product purpose. Reject novelty that competes with primary content or interaction.
4. Inspect the current component page for framework, styling variant, dependencies, client/runtime requirements, and customization API.
5. For Pro projects, inspect `components.json` and the documented registry namespaces before using CLI or MCP discovery. Do not alter registry or credential configuration without the user's authorization.
6. Adapt the chosen source under LoomLogic's main adaptation contract and verify it in the actual page context.

## Variant and stack rules

- Choose the official Tailwind variant when the project already uses Tailwind; choose the CSS variant when it fits the project's styling architecture better. Do not introduce Tailwind solely for one effect.
- Preserve TypeScript when the project uses it. Convert JavaScript examples deliberately and type public props.
- Keep copied source local to the project's established component location. Rename only when that improves project consistency, and retain source provenance in an appropriate code comment or project note when licensing requires it.
- Reuse the project's existing motion and utility packages when compatible. Do not install overlapping animation libraries without a demonstrated need.
- Treat WebGL, canvas, shaders, model viewers, particle systems, and continuous pointer tracking as heavyweight even when packaged as a single component.

## Accessibility and behavior gates

- Text-animation components must leave meaningful text available to assistive technology and visible when scripts, observers, or motion are disabled.
- Interactive components must use semantic controls, keyboard support, visible focus, accessible names, and sufficient target sizes. A demo's visual interaction is not proof of accessible behavior.
- Cursor effects cannot replace the system cursor for essential actions, obscure focus, interfere with selection, or run on coarse-pointer devices without a safe fallback.
- Scroll effects cannot hijack reading, trap scrolling, or make content order ambiguous.
- Backgrounds must be non-interactive, ignored by assistive technology, and preserve foreground contrast.
- Provide a meaningful `prefers-reduced-motion` mode: usually static content or a restrained crossfade, not merely slower continuous motion.

## Performance gates

- Test on representative mobile and mid-tier hardware, not only a desktop development machine.
- Pause continuous effects when offscreen or when the document is hidden. Dispose of listeners, animation frames, observers, WebGL contexts, and GPU resources on unmount.
- Avoid stacking multiple ambient React Bits effects in one viewport. Establish one visual focal effect and keep the rest quiet.
- Lazy-load non-critical heavyweight effects when it improves the real loading path, but never let essential content depend on the lazy effect.
- Reject a component when a small CSS transition or existing project primitive provides comparable value at materially lower cost.

## Verification

Confirm the component renders with real content, at project breakpoints, with keyboard and touch input, under reduced motion, and without console errors or hydration warnings. Report whether the source came from free React Bits or a licensed Pro registry, which dependencies were added, and what was changed from the original.
