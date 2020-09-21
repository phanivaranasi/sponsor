import * as React from "react";
import { FormContext, IFormContext, IValidation, IErrors } from "../models";

export type componentType = "textbox" | "textarea" | "dropdown" | "calendar";
export interface IFieldProps {
  id: string;
  label?: string;
  fieldType?: componentType;
  options?: string[];
  value?: string;
  validation?: IValidation
}

export const Component: React.FC<IFieldProps> = ({
  id,
  label,
  fieldType,
  options,
  value,
}) => {
  const getError = (errors: IErrors): string => (errors ? errors[id] : "");
  /**
 * Gets the inline styles for editor
 * @param {IErrors} errors - All the errors from the form
 * @returns {any} - The style object
 */
  const getEditorStyle = (errors: IErrors): any =>
    getError(errors) ? { borderColor: "red" } : {};
  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div>
          {label && <label htmlFor={id}>{label}</label>}
          {fieldType!.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              placeholder={label}
              style={getEditorStyle(context.errors)}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context.validate(id)}
              className="form-control"
            />
          )}
          {getError(context.errors) && (
            <div style={{ color: "red", fontSize: "80%" }}>
              <p>{getError(context.errors)}</p>
            </div>
          )}
        </div>
      )}
    </FormContext.Consumer>
  );
};
Component.defaultProps = {
  fieldType: "textbox",
};
