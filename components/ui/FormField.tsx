import {
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  useId,
} from "react";

const FIELD_BASE =
  "block w-full min-h-12 rounded-[var(--radius-control)] border border-border-strong bg-surface-raised " +
  "px-4 py-3 text-body text-text-primary placeholder:text-text-disabled " +
  "transition-[border-color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] " +
  "hover:border-text-primary " +
  "focus-visible:border-text-primary " +
  "disabled:border-border-hairline disabled:bg-surface-secondary disabled:text-text-disabled " +
  "aria-[invalid=true]:border-state-error";

interface FieldShellProps {
  id?: string;
  label: string;
  required?: boolean;
  helpText?: string;
  error?: string;
}

type TextFieldProps = FieldShellProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & { as?: "input" };

type TextAreaFieldProps = FieldShellProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & { as: "textarea" };

type FormFieldProps = TextFieldProps | TextAreaFieldProps;

/**
 * Text / email / tel / textarea field (MASTER.md §6.7). The label is always
 * visible and bound through for/id -- never placeholder-only. Help text and
 * errors are wired through aria-describedby, and an error also sets
 * aria-invalid rather than relying on the border colour alone.
 */
export function FormField(props: FormFieldProps) {
  const generatedId = useId();
  const {
    label,
    required,
    helpText,
    error,
    className = "",
    id,
    ...rest
  } = props;

  const fieldId = id ?? generatedId;
  const helpId = helpText ? `${fieldId}-help` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldId}
        className="text-body-sm font-medium text-text-primary"
      >
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={fieldId}
          rows={5}
          className={`${FIELD_BASE} resize-y ${className}`}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          className={`${FIELD_BASE} ${className}`}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {helpText ? (
        <p id={helpId} className="text-body-sm text-text-secondary">
          {helpText}
        </p>
      ) : null}

      {error ? (
        <p
          id={errorId}
          className="text-body-sm flex items-start gap-2 text-state-error"
        >
          <span aria-hidden="true">!</span>
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}
