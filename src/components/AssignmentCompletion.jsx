import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import "../css/AssignmentCompletion.css"
import { Doughnut } from 'react-chartjs-2';

export default class AssignmentCompletion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: [
                    "Submitted",
                    "Not Submitted"
                ],
                datasets: [
                    {
                        data: [300, 100],
                        backgroundColor: [
                            "#4caf50",
                            "#f44336"
                        ],
                        hoverBackgroundColor: [
                            "#1b5e20",
                            "#b71c1c"
                        ]
                    }]
            },
            options : {        
                cutoutPercentage: 80,
           }
        }
    }

    render() {

        return (
            <Paper elevation={3} className="paper-margin" fullWidth>
                <Typography variant="subtitle1" className="format-typography">
                    {"Submission Report"}
                </Typography>
                <div className="inner-pad">
                    <Doughnut id="doughtnut-chart" data={this.state.data} options = {this.state.options} />
                </div>
            </Paper>
        )
    }
}
