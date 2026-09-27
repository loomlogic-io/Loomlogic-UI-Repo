import type { PropsWithChildren } from "react";
import "./styles.css";

export function SignatureRule() {
  return <span className="ll-signature-rule" aria-hidden="true" />;
}

export function QuietLift({ children }: PropsWithChildren) {
  return <div className="ll-quiet-lift">{children}</div>;
}
