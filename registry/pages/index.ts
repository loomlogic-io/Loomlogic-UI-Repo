import type { RegistryItem } from "../schema";

export const pages: RegistryItem[] = [
  {
    id: "operations-dashboard",
    name: "Operations dashboard",
    kind: "page",
    packageName: "@loomlogic/pages",
    exportName: "OperationsDashboard",
    description: "A full-page operational overview that prioritizes work, context, and calm data density.",
    kits: ["ll-core", "ll-editorial"],
    importExample: 'import { OperationsDashboard } from "@loomlogic/pages";',
    codexPrompt: "Use OperationsDashboard as a page composition reference. Preserve the consuming product's real information architecture and data states.",
    lifecycle: { status: "Shortlisted", packageApproved: false },
    codex: { recommendation: "not-reviewed", promotedToSkill: false, note: "Page approval does not automatically change Codex recommendations." },
  },
];
