import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.css";

export type ButtonVariant = "primary" | "secondary" | "quiet" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
}

export function Button({
  children,
  className = "",
  disabled,
  leadingIcon,
  loading = false,
  size = "md",
  trailingIcon,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`ll-button ll-button--${variant} ll-button--${size} ${className}`.trim()}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="ll-button__spinner" aria-hidden="true" /> : leadingIcon}
      <span>{children}</span>
      {!loading && trailingIcon}
    </button>
  );
}
