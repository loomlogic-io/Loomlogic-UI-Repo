# Promotion flow

The package lifecycle is:

`Experimental → Shortlisted → Candidate → Approved`

- **Experimental**: exploratory or third-party-derived work in `@loomlogic/labs`; not production-safe by default.
- **Shortlisted**: direction is useful enough to retain and compare.
- **Candidate**: API, accessibility, provenance, responsiveness, and package destination are under formal review.
- **Approved**: production package review is complete.

Promotion out of Labs requires documented provenance/license confidence, removal of demo-only code, token adaptation, accessibility verification, tests, and migration into the owning production package.

## Codex promotion is separate

Package approval does not automatically make an item a Codex-skill recommendation. `lifecycle.packageApproved` and `codex.promotedToSkill` are separate registry fields and require separate review decisions. This prevents a technically valid component from becoming the default recommendation for every product context.

No package publishing, registry release, or skill promotion is performed automatically by the UI Lab.
