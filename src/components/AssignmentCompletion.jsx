import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import "../css/AssignmentCompletion.css";

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
                        data: [250, 150],
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
            options: {
                cutoutPercentage: 80,
                responsive: false,
            }
        }
    }

    render() {

        return (
            <div className="inner-pad">
                <Doughnut id="doughtnut-chart" data={this.state.data} options={this.state.options} />
            </div>
        )
    }
}
