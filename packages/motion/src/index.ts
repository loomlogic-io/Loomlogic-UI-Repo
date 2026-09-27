export const motionPresets = {
  none: { duration: 0, easing: "linear", transform: "none" },
  subtle: { duration: 160, easing: "cubic-bezier(.22, 1, .36, 1)", transform: "translateY(-1px)" },
  dynamic: { duration: 260, easing: "cubic-bezier(.2, .9, .2, 1.1)", transform: "translateY(-2px) scale(1.01)" },
} as const;

export type MotionPresetName = keyof typeof motionPresets;

export function motionStyle(name: MotionPresetName, speed = 1) {
  const preset = motionPresets[name];
  return {
    transitionDuration: `${Math.round(preset.duration / Math.max(speed, 0.25))}ms`,
    transitionTimingFunction: preset.easing,
  };
}
