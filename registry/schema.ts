import type { LifecycleStatus } from "../packages/tokens/src";

export type RegistryKind = "component" | "pattern" | "page";
export type CodexRecommendation = "not-reviewed" | "recommended" | "withheld";

export interface RegistryLifecycle {
  status: LifecycleStatus;
  packageApproved: boolean;
  reviewedBy?: string;
}

export interface CodexPromotion {
  recommendation: CodexRecommendation;
  promotedToSkill: boolean;
  note: string;
}

export interface RegistryItem {
  id: string;
  name: string;
  kind: RegistryKind;
  packageName: `@loomlogic/${string}`;
  exportName: string;
  description: string;
  kits: string[];
  importExample: string;
  codexPrompt: string;
  lifecycle: RegistryLifecycle;
  codex: CodexPromotion;
}

export interface PackageRecord {
  name: `@loomlogic/${string}`;
  label: string;
  description: string;
  itemCount: number;
  lifecycle: LifecycleStatus;
  experimental?: boolean;
}

export interface KitRecord {
  id: string;
  name: string;
  type: "ui" | "motion" | "icons";
  description: string;
  inheritsFrom: "ll-core" | null;
  lifecycle: LifecycleStatus;
  packageNames: Array<`@loomlogic/${string}`>;
}
