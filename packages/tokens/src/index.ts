export const color = {
  loomIce: "#D0E8F0",
  loomLight: "#B6D2E7",
  loomMid: "#9ABBE0",
  loomBlue: "#80A0D0",
  loomSteel: "#7088B8",
  loomDeep: "#536D9F",
  loomDark: "#455B86",
} as const;

export const radius = {
  control: "0.5rem",
  card: "0.625rem",
  panel: "0.75rem",
} as const;

export const motion = {
  micro: "160ms",
  component: "240ms",
  section: "480ms",
  ease: "cubic-bezier(.22, 1, .36, 1)",
} as const;

export type ThemeName = "light" | "dark";
export type LifecycleStatus = "Experimental" | "Shortlisted" | "Candidate" | "Approved";
