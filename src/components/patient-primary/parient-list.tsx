import * as React  from 'react';
import {PatientRegistration} from './patient-primary';

class PatientList extends React.Component{
constructor(props:any){
    super(props);
}


render(){
    return(
        <div className="row">
            <div className="col-lg-10">
                <PatientRegistration />
            </div>
            <div className="col-lg-2">
                left
            </div>
        </div>
    )
}

}


export default PatientList;