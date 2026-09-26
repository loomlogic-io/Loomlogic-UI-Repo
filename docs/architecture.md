# Architecture

LoomLogic UI is a pnpm monorepo with three source-of-truth layers:

1. `packages/` contains independently named, consumable code.
2. `registry/` contains discovery, lifecycle, kit membership, import, and Codex guidance metadata.
3. `skills/loomlogic-ui/` contains the Codex design and implementation guidance.

`apps/ui-lab/` reads the registry directly and renders the packages. It does not persist edits, require authentication, or depend on a database or CMS.

## Package boundaries

- `@loomlogic/tokens`: design foundations and light/dark semantic variables.
- `@loomlogic/core`: app configuration and cross-package utilities.
- `@loomlogic/buttons`, `icons`, `forms`, `navigation`, `data-display`: product primitives.
- `@loomlogic/motion`, `effects`: opt-in interaction and presentation behavior.
- `@loomlogic/patterns`, `pages`: composed product references.
- `@loomlogic/labs`: third-party-derived, adapted, or speculative work before production promotion.

Packages are the technical distribution units. Kits are visual and behavioral families that select from those units.

## Kit inheritance

`LL Core` is the base kit. Every UI kit may extend `LL Core` directly; kits must not extend another derived kit. Motion and icon kits are selected independently in each application config.

## Registry ownership

Registry files are reviewed through Git. The UI Lab is a viewer and interactive preview, not an admin tool. This keeps component code, metadata, promotion history, and review changes together.
