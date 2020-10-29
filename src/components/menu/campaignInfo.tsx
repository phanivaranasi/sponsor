import * as React from 'react';


export default class CampaignInfo extends React.PureComponent {


    render() {
        return (<div className="row">
            <div className="col-lg-12 text-uppercase text-info text-center">
                <ul className="campaign-info">
                    <li><i className="pi pi-map-marker"></i></li>
                    <li>Sirigiripuram,</li>
                    <li>Ranga Reddy Mandal,</li>
                    <li>Medchal District,</li>
                    <li>Telangana,</li>
                    <li>500 082</li>
                    <li>India - <img width="16" src="/src/assets/flags/India.png" /></li>
                </ul>
            </div>
        </div>)
    }
}


