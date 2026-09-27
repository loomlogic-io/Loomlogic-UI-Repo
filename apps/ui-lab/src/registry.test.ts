import { describe, expect, it } from "vitest";
import { components, kits, packages } from "../../../registry";
import { appConfig } from "./config";

describe("LoomLogic registry", () => {
  it("keeps every derived UI kit shallow", () => {
    const core = kits.find((kit) => kit.id === "ll-core");
    const derivedUiKits = kits.filter((kit) => kit.type === "ui" && kit.id !== "ll-core");
    expect(core?.inheritsFrom).toBeNull();
    expect(derivedUiKits.every((kit) => kit.inheritsFrom === "ll-core")).toBe(true);
  });

  it("keeps experimental packages disabled by default", () => {
    expect(appConfig.allowExperimental).toBe(false);
    expect(packages.find((item) => item.name === "@loomlogic/labs")?.experimental).toBe(true);
  });

  it("models package approval and Codex promotion separately", () => {
    const approvedButton = components.find((item) => item.id === "button");
    expect(approvedButton?.lifecycle.packageApproved).toBe(true);
    expect(approvedButton?.codex.promotedToSkill).toBe(false);
  });

  it("uses unique registry ids", () => {
    expect(new Set(components.map((item) => item.id)).size).toBe(components.length);
  });
});
