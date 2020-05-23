import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class ProgressCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3',
                    'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8',
                    'Week 9', 'Week 10'],
                datasets: [
                    {
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(76, 175, 80,1)',
                        borderColor: 'rgba(76, 175, 80,1)',
                        borderWidth: 2,
                        data: [10, 15, 20, 35, 40, 55, 63, 75, 98, 100]
                    },
                    {
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(54, 162, 235,1)',
                        borderColor: 'rgba(54, 162, 235,1)',
                        borderWidth: 2,
                        data: [8, 10, 14, 17, 22, 45, 67, 77, 79, 100]
                    },
                    {
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(255, 99, 132,1)',
                        borderColor: 'rgba(255, 99, 132,1)',
                        borderWidth: 2,
                        data: [20, 40, 60, 75, 80, 86, 88, 90, 96, 100]
                    }
                ]
            }
        }
    }

    render() {

        return (

            <Paper elevation={3} className="paper-margin">
                <Typography variant="subtitle1" className="format-typography">
                    Progress Report
                </Typography>
                <div className="inner-pad">
                    <Line
                        height={250}
                        data={this.state.data}
                        options={{
                            bezierCurve: false,
                            scaleShowLabels: false,
                            tooltipEvents: [],
                            pointDot: false,
                            scaleShowGridLines: true,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        max: 100,
                                        stepSize: 20
                                    }
                                }],
                            },
                            legend: {
                                display: false
                            },

                        }}
                    />
                </div>
            </Paper>
        )
    }
}
