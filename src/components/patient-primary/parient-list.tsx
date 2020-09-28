import * as React from 'react';
import { PatientRegistration } from './patient-primary';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toolbar, ToolbarProps } from 'primereact/toolbar';
import PatientQuickNav from './patient-right-menu';
import Pageheader from '../../utils/ui.pageheader';
import { DataTable } from 'primereact/datatable';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Column } from 'primereact/column';
import { inherits } from 'util';
interface IPatientData {
    code: string;
    name: string;
    gender: string;
    age: number;
    bloodGroup: string;
}
class PatientData implements IPatientData {
    code: string;
    name: string;
    gender: string;
    age: number;
    bloodGroup: string;
}
interface IPatientList {
    displayNewPopup: boolean;
    patients: Array<IPatientData>;
    selectedProducts3: any;
    selectedProducts1: any;
}

interface IProps {
    patient: Array<PatientData>
}



class PatientList extends React.Component<IProps, IPatientList> {

    constructor(props: any) {
        super(props);
        this.state = {
            displayNewPopup: false,
            patients: [],
            selectedProducts3: null,
            selectedProducts1: null
        }
        setTimeout(() => {
            this.loadData();

        }, 500);
    }
    hideNewPopup = (name: string) => {
        this.setState({ displayNewPopup: false });

    }
    showNewPopup = (name: string) => {
        this.setState({ displayNewPopup: true });
    }
    detailCol = (rowdata: any) => {
        return <i className="pi pi-ellipsis-h"></i>
    }
    loadData() {
        let p1: Array<PatientData> = [];
        for (var i = 1; i < 10; i++) {
            let patient1 = new PatientData();
            patient1.age = 10;
            patient1.bloodGroup = "A+ve";
            patient1.code = "Code" + i;
            patient1.gender = "M";
            patient1.name = "Name" + i.toString();
            console.log(patient1);
            p1.push(patient1);
        }
        this.setState({ patients: p1 });
    }
    render() {

        const leftContent = ({ }: ToolbarProps) => {
            return (
                <div className="sizes">
                    <Button onClick={() => this.showNewPopup('displayNewPopup')} label="New" iconPos="right" icon="pi pi-plus" className="mr-2 p-button-sm p-button-raised p-button-success" />
                    <Button label="Delete" iconPos="right" icon="pi pi-trash" className="p-button-sm p-button-raised p-button-danger" />
                </div>
            )
        }

        return (
            <div className="row pu-page">
                <div className="col-12 ">
                    <Pageheader pageTitle="Patient" pageSubTitle="Register Patient" pageIcon="" />
                </div>
                <div className="col-lg-12">
                    <Toolbar id="appToolbar" left={leftContent} />
                </div>
                <div className="col-lg-10">
                    <DataTable
                       
                        dataKey="code"
                        selection={this.state.selectedProducts3}
                        onSelectionChange={e => this.setState({ selectedProducts3: e.value })}
                        className="p-datatable-sm"
                        value={this.state.patients}>
                        <Column selectionMode="multiple" headerStyle={{ width: '2em' }}></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="gender" header="Gender"></Column>
                        <Column field="age" header="Age"></Column>
                        <Column field="bloodGroup" header="Blood Group"></Column>
                        <Column body={this.detailCol} header="Details"></Column>
                    </DataTable>
                </div>
                <div className="col-lg-2">
                    <PatientQuickNav />
                </div>

                <Dialog position="top" header="New Patient" onHide={() => this.hideNewPopup('displayNewPopup')} visible={this.state.displayNewPopup}>
                    <PatientRegistration />
                </Dialog>
                <OverlayPanel>

                </OverlayPanel>
            </div >
        )
    }

}


export default PatientList;