import * as React from "react";
import Form from "../../utils/ui.form";
import { Component, required } from "../../utils";
import { IFields } from "../../models";
import { Panel } from 'primereact/panel'

export const PatientRegistration: React.FC = () => {
  const fields: IFields = {
    salutation: {
      id: "salutation",
      label: "Salutation",
      fieldType: "dropdown"
    },
    firstName: {
      id: "firstName",
      label: "First Name",
      validation: { rule: required }
    },
    lastName: {
      id: "lastName",
      label: "Last Name"
    },
    middleName: {
      id: "middleName",
      label: "Middle Name"
    },
    gender: {
      id: "gender",
      label: "Gender",
      fieldType: "dropdown"
    },
    birthDate: {
      id: "birthDate",
      label: "Birth Date",
      fieldType: "calendar"
    },
    age: {
      id: "age",
      label: "Age",
      fieldType: "readonly"
    },
    height: {
      id: "height",
      label: "Height",
    },
    weight: {
      id: "weight",
      label: "Weight",
    },
    blood: {
      id: "blood",
      label: "Blood Group",
      fieldType: "dropdown"
    },
    emregeny_person: {
      id: "emgerncy-person",
      label: "Contact Name"
    },
    emregeny_relation: {
      id: "emgerncy-relationship",
      label: "Relationship"
    },
    emregeny_contact: {
      id: "emgerncy-contact",
      label: "Contact #"
    },
    address_doorNo: {
      id: "address-door",
      label: "Door #"
    },
    address_street: {
      id: "address-street",
      label: "Street #"
    },
    address_landmark: {
      id: "address-street",
      label: "Landmark"
    },
    address_area: {
      id: "address-street",
      label: "Area"
    },
    address_city: {
      id: "address-street",
      label: "City"
    },
    address_pincode: {
      id: "address-pincode",
      label: "Pincode"
    },
    address_dist: {
      id: "address-dist",
      label: "District"
    },
    address_state: {
      id: "address-state",
      label: "State"
    },
  };
  return (
    <Form fields={fields}
      action=""
      render={() => (
        <div>
          <Panel className="pu-panel" header="Personal">
            <div className="form-row pu-row">
              <div className="form-group col-md-2">
                <Component {...fields.salutation} />
              </div>
              <div className="form-group col-md-3">
                <Component {...fields.firstName} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.lastName} />
              </div>
              <div className="form-group col-md-3">
                <Component {...fields.middleName} />
              </div>
            </div>
            <div className="form-row pu-row">
              <div className="form-group col-md-2">
                <Component {...fields.gender} />
              </div>
              <div className="form-group col-md-2">
                <Component {...fields.birthDate} />
              </div>
              <div className="form-group col-md-2">
                <Component {...fields.blood} />
              </div>
              <div className="form-group col-md-2">
                <Component {...fields.height} />
              </div>
              <div className="form-group col-md-2">
                <Component {...fields.weight} />
              </div>
            </div>
          </Panel>
          <Panel className="pu-panel" header="Communication Address">
            <div className="form-row pu-row">
              <div className="form-group col-md-4">
                <Component {...fields.address_doorNo} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.address_street} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.address_landmark} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.address_area} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.address_city} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.address_pincode} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.address_dist} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.address_state} />
              </div>
            </div>
          </Panel>
          <Panel className="pu-panel" header="Emergency Contact">
            <div className="form-row pu-row">
              <div className="form-group col-md-4">
                <Component {...fields.emregeny_person} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.emregeny_relation} />
              </div>
              <div className="form-group col-md-4">
                <Component {...fields.emregeny_contact} />
              </div>
            </div>
          </Panel>
        </div>
      )}
    />
  );
};
