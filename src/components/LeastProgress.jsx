import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import "../css/MostLeastProgress.css";

const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Bottom 5 teams',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [8, 10, 12, 15, 18]
        }
    ],

};

export default class LeastProgress extends React.Component {
    render() {
        return (

            <HorizontalBar height={175} data={data} options={{
                scales: {
                    xAxes: [{
                        ticks: {
                            min: 0,
                            max: 100
                        }
                    }],
                    yAxes: [{
                        barThickness: 25
                    }]
                }
            }} />

        );
    }
}

