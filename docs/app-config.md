# Application configuration

Each consuming application declares one default UI kit, motion kit, and icon kit. Experimental packages are disabled by default.

```ts
import { defineLoomlogicConfig } from "@loomlogic/core";

export const loomlogicDesign = defineLoomlogicConfig({
  uiKit: "ll-core",
  motionKit: "ll-motion-core",
  iconKit: "ll-icons-core",
  allowExperimental: false,
});
```

An app may opt into another approved kit for a bounded component or route, but it should not freely mix visual families. Enabling `allowExperimental` is an explicit product decision and is never implied by importing the UI Lab.
