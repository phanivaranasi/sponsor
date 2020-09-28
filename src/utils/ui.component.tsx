import * as React from "react";
import { FormContext, IFormContext, IValidation, IErrors } from "../models";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
export type componentType = "textbox" | "textarea" | "dropdown" | "calendar" | "readonly";
export interface IFieldProps {
  id: string;
  label?: string;
  fieldType?: componentType;
  options?: object[];
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
        <div className="p-field">
          <span className="p-float-label">
            {fieldType!.toLowerCase() === "textbox" && (
              <InputText type="text" className="p-inputtext-sm pu-input"  />
            )}
            {fieldType!.toLowerCase() === 'dropdown' && (
              <Dropdown id={id} className="form-control form-control-sm" options={options} optionLabel="name" ></Dropdown>
            )}
            {fieldType!.toLowerCase()==='calendar' && 
              (<Calendar showIcon={false} panelClassName="pu-calendar-panel" className="p-inputtext-sm p-d-block" id={id}></Calendar>)
            }
            {fieldType!.toLowerCase()==='readonly' && 
              (<input type="text" id={id} />)
            }
            {label && <label htmlFor={id}>{label}</label>}
          </span>


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
