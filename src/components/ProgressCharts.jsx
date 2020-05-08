import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Line } from 'react-chartjs-2';

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
                        label: 'Completed',
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
            <Paper elevation={3} className="paper-margin" fullWidth>
                <Typography variant="subtitle1" className="format-typography">
                    {"Progress Report"}
                </Typography>
                <div className="inner-pad">
                    <Line
                        data={this.state.data}
                        options={{
                            title: {
                                display: true,
                                text: 'Progress per week',
                                fontSize: 20
                            },
                        }}
                    />
                </div>
            </Paper>
        )
    }
}
