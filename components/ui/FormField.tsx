import { type InputHTMLAttributes, type TextareaHTMLAttributes, useId } from "react";

const FIELD_BASE =
  "block w-full min-h-[48px] rounded-[var(--radius-control)] border border-border-strong bg-surface-raised " +
  "px-4 py-3 text-form-input text-text-primary placeholder:text-text-secondary " +
  "transition-[border-color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] " +
  "hover:border-text-primary " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring focus-visible:border-text-primary " +
  "aria-[invalid=true]:border-state-error";

interface FieldShellProps {
  id?: string;
  label: string;
  required?: boolean;
  helpText?: string;
  error?: string;
}

type TextFieldProps = FieldShellProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
    as?: "input";
  };

type TextAreaFieldProps = FieldShellProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & {
    as: "textarea";
  };

type FormFieldProps = TextFieldProps | TextAreaFieldProps;

/**
 * Text / email / tel / textarea field per MASTER.md §5.5. Label is always
 * visible and bound via for/id -- never placeholder-only. Help text and
 * error are wired through aria-describedby; error also sets aria-invalid.
 */
export function FormField(props: FormFieldProps) {
  const generatedId = useId();
  const { label, required, helpText, error, className = "", id, ...rest } = props;
  const fieldId = id ?? generatedId;
  const helpId = helpText ? `${fieldId}-help` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-form-label text-text-primary">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={fieldId}
          rows={4}
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
        <p id={helpId} className="text-body-s text-text-secondary">
          {helpText}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} className="text-body-s text-state-error flex items-start gap-2">
          <span aria-hidden="true">⚠</span>
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}
