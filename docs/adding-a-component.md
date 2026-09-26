# Adding a component

1. Choose the narrowest package that owns the behavior. New visual experiments start in `@loomlogic/labs`.
2. Build on semantic HTML or the package's established accessible primitive. Include keyboard, focus, disabled, loading, error, long-content, and reduced-motion behavior where relevant.
3. Style with `@loomlogic/tokens`; do not add an unrelated theme or scatter raw brand values through the component.
4. Export the component from the package entry point.
5. Add a typed record to `registry/components/index.ts`, including package lifecycle and the separate Codex recommendation fields.
6. Add a focused UI Lab preview and controls only for properties the component actually supports.
7. Add tests for behavioral or registry invariants, then run `pnpm validate`.

Do not place a component directly in the UI Lab. The lab consumes package exports so its preview matches production consumption.
