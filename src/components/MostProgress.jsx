import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import "../css/MostLeastProgress.css";

const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Top 5 teams',
            backgroundColor: 'rgba(54, 162, 235,0.2)',
            borderColor: '#1586d1',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54, 162, 235,0.4)',
            hoverBorderColor: '#1586d1',
            data: [87, 83, 77, 75, 72, 70]
        }
    ]
};

export default class MostProgress extends React.Component {
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