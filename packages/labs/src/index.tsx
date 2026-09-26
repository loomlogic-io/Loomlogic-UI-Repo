import type { ComponentProps } from "react";
import { Button } from "@loomlogic/buttons";
import "./styles.css";

/** Experimental surface only. Promotion requires provenance, accessibility, and package review. */
export function ExperimentalButton(props: ComponentProps<typeof Button>) {
  return <Button {...props} className={`ll-experimental-button ${props.className ?? ""}`.trim()} />;
}
