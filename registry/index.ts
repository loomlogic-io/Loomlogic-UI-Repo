import type { PackageRecord } from "./schema";
export { components } from "./components";
export { kits } from "./kits";
export { pages } from "./pages";
export { patterns } from "./patterns";
export type { CodexPromotion, KitRecord, PackageRecord, RegistryItem, RegistryLifecycle } from "./schema";

export const packages = [
  { name: "@loomlogic/tokens", label: "Tokens", description: "Color, type, spacing, radius, and motion foundations.", itemCount: 32, lifecycle: "Approved" },
  { name: "@loomlogic/core", label: "Core", description: "Configuration and cross-package utilities.", itemCount: 4, lifecycle: "Approved" },
  { name: "@loomlogic/buttons", label: "Buttons", description: "Action controls and button families.", itemCount: 4, lifecycle: "Approved" },
  { name: "@loomlogic/icons", label: "Icons", description: "LoomLogic interface symbols.", itemCount: 3, lifecycle: "Candidate" },
  { name: "@loomlogic/forms", label: "Forms", description: "Inputs, selection, validation, and field structure.", itemCount: 2, lifecycle: "Candidate" },
  { name: "@loomlogic/navigation", label: "Navigation", description: "Tabs and wayfinding primitives.", itemCount: 1, lifecycle: "Candidate" },
  { name: "@loomlogic/data-display", label: "Data display", description: "Status and structured values.", itemCount: 2, lifecycle: "Approved" },
  { name: "@loomlogic/motion", label: "Motion", description: "Adaptive timing and motion presets.", itemCount: 3, lifecycle: "Candidate" },
  { name: "@loomlogic/effects", label: "Effects", description: "Restrained brand and depth treatments.", itemCount: 2, lifecycle: "Candidate" },
  { name: "@loomlogic/patterns", label: "Patterns", description: "Reusable product compositions.", itemCount: 1, lifecycle: "Candidate" },
  { name: "@loomlogic/pages", label: "Pages", description: "Full-page product references.", itemCount: 1, lifecycle: "Shortlisted" },
  { name: "@loomlogic/labs", label: "Labs", description: "Third-party-derived and speculative work before promotion.", itemCount: 1, lifecycle: "Experimental", experimental: true },
] satisfies PackageRecord[];
