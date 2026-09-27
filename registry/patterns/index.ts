import type { RegistryItem } from "../schema";

export const patterns: RegistryItem[] = [
  {
    id: "review-queue",
    name: "Review queue",
    kind: "pattern",
    packageName: "@loomlogic/patterns",
    exportName: "ReviewQueue",
    description: "A compact review list with clear status, identity, and next action.",
    kits: ["ll-core"],
    importExample: 'import { ReviewQueue } from "@loomlogic/patterns";',
    codexPrompt: "Use the ReviewQueue pattern for human-in-the-loop tasks. Keep status truthful and do not remove items before persistence succeeds.",
    lifecycle: { status: "Candidate", packageApproved: false },
    codex: { recommendation: "not-reviewed", promotedToSkill: false, note: "Pattern is usable in the lab but not yet promoted to the skill." },
  },
];
