import * as React from 'react';

import { Chart } from 'primereact/chart';
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Year',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Year',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
        }
    ]
};
const multiAxisData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Males',
        backgroundColor: [
            '#AB47BC',
            '#AB47BC',
            '#AB47BC',
            '#AB47BC',
            '#AB47BC',
            '#AB47BC',
            '#AB47BC'
        ],
        yAxisID: 'y-axis-1',
        data: [65, 59, 80, 81, 56, 55, 10]
    }, {
        label: 'Females',
        backgroundColor: '#78909C',
        yAxisID: 'y-axis-2',
        data: [28, 48, 40, 19, 86, 27, 90]
    }]
};
const multiAxisOptions = {
    responsive: true,
    tooltips: {
        mode: 'index',
        intersect: true
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#495057'
            },
            gridLines: {
                color: '#ebedef'
            }
        }],
        yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            ticks: {
                min: 0,
                max: 100,
                fontColor: '#495057'
            },
            gridLines: {
                color: '#ebedef'
            }
        },
        {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
                drawOnChartArea: false,
                color: '#ebedef'
            },
            ticks: {
                min: 0,
                max: 100,
                fontColor: '#495057'
            }
        }]
    },
    legend: {
        labels: {
            fontColor: '#495057'
        }
    }
};
class OpenDashboard extends React.Component {
    constructor(props:any){
        super(props);

        
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h4>Dashboard</h4>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            Title 1
                       </div>
                        <div className="card-body">
                        <Chart type="line" data={data} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                           Title 2
                       </div>
                        <div className="card-body">
                        <Chart type="bar" data={multiAxisData} options={multiAxisOptions}  />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default OpenDashboard;