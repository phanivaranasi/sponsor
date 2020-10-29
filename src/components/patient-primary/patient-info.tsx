import * as React from 'react';
import { IPatientInfo } from '../../models';


class PatientInfo extends React.PureComponent<IPatientInfo>{
    constructor(props:any){
        super(props);
        console.info(this.props.data);
    }


    render(){
        return(<div>Patient Info</div>)
    }
}

export default PatientInfo;