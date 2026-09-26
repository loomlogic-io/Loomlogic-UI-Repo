import type { ReactNode } from "react";
import type { LifecycleStatus } from "@loomlogic/tokens";
import "./styles.css";

export function StatusBadge({ status }: { status: LifecycleStatus }) {
  return <span className="ll-status" data-status={status.toLowerCase()}><span aria-hidden="true" />{status}</span>;
}

export function Stat({ label, trend, value }: { label: string; trend?: string; value: ReactNode }) {
  return <div className="ll-stat"><span className="ll-stat__label">{label}</span><strong>{value}</strong>{trend && <small>{trend}</small>}</div>;
}
