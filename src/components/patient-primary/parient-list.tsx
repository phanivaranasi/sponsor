import * as React from 'react';
import { PatientRegistration } from './patient-primary';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toolbar, ToolbarProps } from 'primereact/toolbar';
import PatientQuickNav from './patient-right-menu';
import { Sidebar } from 'primereact/sidebar';
import Pageheader from '../../utils/ui.pageheader';
import { DataTable } from 'primereact/datatable';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Column } from 'primereact/column';
import PatientInfo from './patient-info';
import { SplitButton } from 'primereact/splitbutton';

interface IPatientData {
    code: string;
    name: string;
    gender: string;
    age: number;
    bloodGroup: string;
    status?:string;
}
class PatientData implements IPatientData {
    code: string;
    name: string;
    gender: string;
    age: number;
    bloodGroup: string;
    status:string;
}
interface IPatientList {
    displayNewPopup: boolean;
    displayDeletePopup: boolean;
    displayCheckupPopup:boolean;
    patients: Array<IPatientData>;
    selectedProducts3: any;
    visiblePatientInfo: boolean;
    patientInfo: IPatientData;
 
}

interface IProps {

}



class PatientList extends React.Component<IProps, IPatientList> {

    item:Array<any>=[];
    constructor(props: any) {
        super(props);
        this.state = {
            displayNewPopup: false,
            displayDeletePopup: false,
            displayCheckupPopup:false,
            patients: [],
            selectedProducts3: null,
            visiblePatientInfo: false,
            patientInfo: null,
        }
        setTimeout(() => {
            this.loadData();

        }, 500);
        this.item=[{label:'Update',icon:'pi pi-refresh'}]
    }
    hideNewPopup = (name: string) => {
        this.setState({ displayNewPopup: false });

    }
    showNewPopup = (name: string) => {
        this.setState({ displayNewPopup: true });
    }
    openPatientInfo = (rowdata: any) => {
        console.log(">>> Row Data <<<", rowdata);
        this.setState({ visiblePatientInfo: true, patientInfo: rowdata });

    }
    hideDeletePopup = () => {
        this.setState({ displayDeletePopup: false });
    }
    detailCol = (rowdata: any) => {
        return <a data-pr-tooltip="Click to view patient info" className="pu-anchor" onClick={() => this.openPatientInfo(rowdata)} ><i className="pi pi-ellipsis-h"></i></a>
    }
    statusCol = (rowdata: any) => {

    }
    openGeneralCheckupInfo = (rowdata:any)=>{
        this.setState({displayCheckupPopup:true,patientInfo:rowdata});
    }
    deletePatient = () => {
        console.log(this.state.selectedProducts3);
        this.setState({ displayDeletePopup: true });
    }
    checkupPatient=(rowdata:any)=>{
        this.setState({displayCheckupPopup:true,patientInfo:rowdata});
        console.log(this.state.selectedProducts3);
    }
    renderFooter() {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={this.hideDeletePopup} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={this.hideDeletePopup} autoFocus />
            </div>
        );
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
            patient1.status = ""
            console.log(patient1);
            p1.push(patient1);
        }
        this.setState({ patients: p1 });
    }

    render() {

        const leftContent = ({ }: ToolbarProps) => {
            return (
                <div className="sizes">
                    <Button onClick={() => this.showNewPopup('displayNewPopup')}
                        label="New"
                        iconPos="right"
                        icon="pi pi-user-plus"
                        className="mr-2 p-button-sm p-button-raised p-button-success" />
                    <Button onClick={this.deletePatient}
                        label="Update"
                        iconPos="right"
                        icon="pi pi-user-edit"
                        className="mr-2 p-button-sm p-button-raised p-button-secondary" />
                    <Button onClick={this.deletePatient}
                        label="Delete"
                        iconPos="right"
                        icon="pi pi-user-minus"
                        className="mr-2 p-button-sm p-button-raised p-button-danger" />
                    <Button
                        disabled={this.state.selectedProducts3 == null || (this.state.selectedProducts3.legth <= 0)}
                        label="Reset"
                        iconPos="right"
                        icon="pi pi-replay"
                        className="mr-2 p-button-sm p-button-raised p-button-warning" />
                    <Button onClick={this.checkupPatient}
                        label="General CheckUp"
                        iconPos="left"
                        icon="icofont-prescription icofont-1x"
                        className="p-button-sm p-button-raised p-button-info" />
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
                <div className="col-lg-12">
                    <DataTable
                        dataKey="code"
                        selection={this.state.selectedProducts3}
                        onSelectionChange={e => this.setState({ selectedProducts3: e.value })}
                        className="p-datatable-sm p-datatable-striped"
                        value={this.state.patients}>
                        <Column selectionMode="multiple" headerStyle={{ width: '2em' }}></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="gender" header="Gender"></Column>
                        <Column field="age" header="Age"></Column>
                        <Column field="bloodGroup" header="Blood Group"></Column>
                        <Column body={this.statusCol} header="Status" ></Column>
                        <Column body={this.detailCol} header="Details"></Column>
                    </DataTable>
                </div>
                {/* <div className="col-lg-2">
                    <PatientQuickNav />
                </div> */}

                <Dialog position="top" header="New Patient" onHide={() => this.hideNewPopup('displayNewPopup')} visible={this.state.displayNewPopup}>
                    <PatientRegistration />
                </Dialog>
                <OverlayPanel>

                </OverlayPanel>
                <Sidebar visible={this.state.visiblePatientInfo} baseZIndex={1000000} onHide={() => this.setState({ visiblePatientInfo: false })}>
                    <PatientInfo data={this.state.patientInfo} ></PatientInfo>
                </Sidebar>

                <Dialog header="Confirmation" visible={this.state.displayDeletePopup} modal style={{ width: '350px' }} footer={this.renderFooter} onHide={this.hideDeletePopup}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                        <span>Are you surae you want to proceed?</span>
                    </div>
                </Dialog>

                <Dialog position="top" visible={this.state.displayCheckupPopup} header="General Checkup" baseZIndex={1000000} onHide={()=>this.setState({displayCheckupPopup:false})}>

                </Dialog>

            </div >
        )
    }

}


export default PatientList;