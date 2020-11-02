import * as React from 'react';
import { Calendar } from 'primereact/calendar';
import Pageheader from '../../utils/ui.pageheader';
class PatientSchedule extends React.Component{

    render(){
        return(
            <div className="row shadow-sm bg-whilte rounded pu-page">
                 <div className="col-12 ">
                    <Pageheader pageTitle="Schedule" pageSubTitle="Schedule/Refer Patient" pageIcon="" />
                </div>
            </div>
        )
    }
}

export default PatientSchedule;