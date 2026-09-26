# Consuming packages

Install only the packages a production application needs:

```bash
pnpm add @loomlogic/tokens @loomlogic/core @loomlogic/buttons
```

Load tokens once at the application entry point, then import package exports directly:

```tsx
import "@loomlogic/tokens/styles.css";
import { Button } from "@loomlogic/buttons";

export function SaveAction() {
  return <Button>Save changes</Button>;
}
```

Production code should never import from `apps/ui-lab` or `registry`. Registry metadata powers discovery and review; package entry points are the runtime API.

Packages are private in V1 and have not been published. Publishing or changing release policy requires explicit approval.
