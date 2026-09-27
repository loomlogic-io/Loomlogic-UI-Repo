export type UiKitName = "ll-core" | "ll-dynamic" | "ll-editorial" | "ll-glass";
export type MotionKitName = "ll-motion-core" | "ll-motion-dynamic";
export type IconKitName = "ll-icons-core" | "ll-icons-rounded";

export interface LoomlogicAppConfig {
  uiKit: UiKitName;
  motionKit: MotionKitName;
  iconKit: IconKitName;
  allowExperimental: boolean;
}

export const defineLoomlogicConfig = <Config extends LoomlogicAppConfig>(config: Config): Config => config;

export const llCoreConfig = defineLoomlogicConfig({
  uiKit: "ll-core",
  motionKit: "ll-motion-core",
  iconKit: "ll-icons-core",
  allowExperimental: false,
});

export const cx = (...values: Array<string | false | null | undefined>): string =>
  values.filter(Boolean).join(" ");
