import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import QnA from './QnA';

export default class DoubtClarification extends Component {
    render() {
        return (
            <Paper elevation={3} className="paper-margin" fullWidth>
                <Typography variant="subtitle1" className="format-typography">
                    {"Doubts"}
                </Typography>
                <QnA />
            </Paper>
        )
    }
}
