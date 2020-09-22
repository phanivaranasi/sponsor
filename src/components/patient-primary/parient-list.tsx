import * as React from 'react';
import { PatientRegistration } from './patient-primary';
import Tollbar from '../menu/toolbar';

import PatientQuickNav from './patient-right-menu';

class PatientList extends React.Component {
    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <div className="row">
                <div>
                    <h4>Patients'</h4>
                    <small>Registered Patients Information</small>
                </div>
                <div className="col-lg-12">
                    <Tollbar />
                </div>
                <div className="col-lg-10">
                    <PatientRegistration />
                </div>
                <div className="col-lg-2">
                    <PatientQuickNav />
                </div>
            </div >
        )
    }

}


export default PatientList;