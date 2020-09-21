import * as React from "react";
import { IValues } from "./IValue";
import { IErrors } from "./IError";
import { IFieldProps } from "../utils";

export interface IFields {
  [key: string]: IFieldProps;
}
export interface IValidation{
  rule:(values:IValues,fieldName:string,args:any)=>string;
  args?:any;
}
export interface IFormProps {
  action: string;
  fields: IFields;
  validation?:IValidation;
  render: () => React.ReactNode;
}

export interface IFormState {
  values: IValues;
  errors: IErrors;
  submitSuccess?: boolean;
}

export interface IFormContext extends IFormState {
  
  setValues: (values: IValues) => void;
  validate: (fieldName: string) => void;

}

export const FormContext = React.createContext<IFormContext>(undefined);
