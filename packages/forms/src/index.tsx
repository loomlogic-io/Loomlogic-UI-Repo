import { useId, type InputHTMLAttributes, type SelectHTMLAttributes } from "react";
import "./styles.css";

interface FieldBaseProps {
  label: string;
  hint?: string;
  error?: string;
}

export function TextField({ error, hint, id, label, ...props }: FieldBaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const descriptionId = `${fieldId}-description`;
  return (
    <label className="ll-field" htmlFor={fieldId}>
      <span className="ll-field__label">{label}</span>
      <input className="ll-field__control" id={fieldId} aria-describedby={hint || error ? descriptionId : undefined} aria-invalid={Boolean(error)} {...props} />
      {(error || hint) && <span className="ll-field__hint" data-error={Boolean(error)} id={descriptionId}>{error ?? hint}</span>}
    </label>
  );
}

export function SelectField({ children, hint, id, label, ...props }: FieldBaseProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <label className="ll-field" htmlFor={fieldId}>
      <span className="ll-field__label">{label}</span>
      <select className="ll-field__control ll-field__select" id={fieldId} {...props}>{children}</select>
      {hint && <span className="ll-field__hint">{hint}</span>}
    </label>
  );
}
