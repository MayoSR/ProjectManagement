import React from 'react';
import { Doughnut as DoughnutChart } from 'react-chartjs-2';

export default class Testing extends React.Component {

    render() {
        const data = {
            datasets: [
                {
                    data: [300, 50],
                    backgroundColor: [
                        "#36A2EB",
                        "#FF6384",
                    ],
                    hoverBackgroundColor: [
                        "#36A2EB",
                        "#FF6384",
                    ]
                }]
        };

        return (
            <DoughnutChart data={data} width={45} height={45} options = {{        
                cutoutPercentage: 70,
                responsive: false
           }}/>
        );
    }
}