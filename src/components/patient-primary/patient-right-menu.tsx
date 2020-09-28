import * as React from 'react';
import { Card } from 'primereact/card';

class PatientQuickNav extends React.PureComponent {



    render() {
        return (
            <div className="pu-panel">
                <Card header="Campaign Details">
                    <div>
                        <i className="pi pi-map-marker"></i>
                        <div className="pu-address">
                            Sirigiripuram, <br />
                            Ranga Reddy Mandal,<br />
                            Medchal District,<br />
                            Telangana, <br />
                            500 082<br />
                            India.
                        </div>
                    </div>
                </Card>
            </div>
        )
    }

}


export default PatientQuickNav;