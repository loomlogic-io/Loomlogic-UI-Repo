# Writing, feedback, loading, and progress

Read this reference for interface copy, errors, alerts, status, haptics, sound, loading, progress, cancellation, and completion.

## Interface writing

- Lead with the information or action people need. Prefer clear verbs and concrete nouns over cleverness, filler, or internal system terminology.
- Keep labels consistent across buttons, menus, toolbars, shortcuts, help, and accessibility names. The same action should not be called Save, Apply, and Done without a semantic distinction.
- Write for the device and input without needlessly hardcoding a modality. Prefer Select when both tap and click apply; use Tap or Click only when instructions truly depend on that action.
- Error copy states what happened, what remains safe, and what the person can do next. Avoid blame, fake empathy, opaque codes, and celebratory language before work has actually completed.
- Use sentence-style capitalization where platform/component conventions call for it and keep settings labels practical and searchable.
- Keep localizable strings out of concatenation and allow translators to reorder complete phrases.

## Feedback hierarchy

Choose the least disruptive channel that communicates the state:

1. Immediate control state for press, selection, toggle, or validation.
2. Inline status near the affected content for recoverable or scoped feedback.
3. Toolbar/status area for longer operations that outlive one control.
4. Sheet or confirmation for a focused decision.
5. Alert only for critical, actionable interruption.
6. Notification only when the app may be inactive and the result is important enough to bring the person back.

Pair color, animation, sound, and haptics with persistent or accessible meaning. Haptics should reinforce a cause-and-effect event, remain sparse, and never imply completion before persistence succeeds.

## Loading and async state

- Acknowledge the request immediately and keep unaffected content usable.
- Preserve final geometry with placeholders or progressive reveal when structure is known. Avoid blocking an entire window for a local refresh.
- Keep prior data visible during refresh when it remains useful, marked stale if that affects decisions.
- Distinguish initial loading, background refresh, pagination, queued, offline, retrying, partial, cancelled, failed, and completed states where the product needs them.
- Don't use animation to hide unknown or stalled work. Provide status and recovery when an operation takes unexpectedly long.
- Reserve success feedback for the truthful commit point: saved, uploaded, exported, paid, or approved—not button activation.

## Progress

- Use determinate progress when total work is knowable; report advancement accurately and avoid a fast rise followed by a misleading stall.
- Use indeterminate progress only while duration is genuinely unknown. When total work becomes measurable, transition to determinate without changing to a visually unrelated component.
- Place progress consistently and label it only when the label adds useful task context.
- Offer Cancel or Pause when interruption is safe and meaningful. Explain consequences before discarding completed work.
- Keep background progress discoverable across navigation or windows when the task continues there.
- Under Reduce Motion, keep progress perceptible without relying on spinning, pulsing, or sweeping effects alone.

## Failure, undo, and recovery

- Prefer undo for reversible actions over repeated confirmation. Confirm uncommon destructive actions that can't be recovered.
- Keep drafts and user input after validation or network failure. Focus and announce the first actionable error without losing context.
- If optimistic UI fails, restore the prior state and explain what didn't persist. Never leave a completed-looking animation attached to failed state.
- Support retry only when it can succeed without duplicating side effects; make idempotency a product/data concern, not a visual assumption.

Official baselines: [Writing](https://developer.apple.com/design/human-interface-guidelines/writing), [Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles), [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts), [Progress indicators](https://developer.apple.com/design/human-interface-guidelines/progress-indicators), [Launching](https://developer.apple.com/design/human-interface-guidelines/launching), [Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications), and [Playing haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics).
