import * as React from "react";
import Form from "../../utils/ui.form";
import { Component, required } from "../../utils";
import { IFields } from "../../models";
export const PatientRegistration: React.FC = () => {
  const fields: IFields = {
    firstName: {
      id: "firstName",
      label: "First Name",
      validation: { rule: required }
    },
    lastName: {
      id: "lastName",
      label: "Last Name"
    }
  };
  return (
    <Form fields={fields}
      action=""
      render={() => (
        <React.Fragment>
          <Component {...fields.firstName} />
          <Component {...fields.lastName} />
        </React.Fragment>
      )}
    />
  );
};
