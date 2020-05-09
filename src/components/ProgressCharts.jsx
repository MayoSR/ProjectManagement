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
                        label: 'Completion percentage',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: '#4caf50',
                        borderColor: '#4caf50',
                        borderWidth: 2,
                        data: [10, 15, 20, 35, 40, 55, 63, 75, 98, 100]
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
                            bezierCurve: false, //remove curves from your plot
                            scaleShowLabels: false, //remove labels
                            tooltipEvents: [], //remove trigger from tooltips so they will'nt be show
                            pointDot: false, //remove the points markers
                            scaleShowGridLines: true //set to false to remove the grids background
                        }}
                    />
                </div>
            </Paper>
        )
    }
}
