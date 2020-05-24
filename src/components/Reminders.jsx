import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

export default class Reminders extends Component {
    render() {
        return (
            <Paper elevation={3} className="paper-margin" id="reminder-pad">
                <Typography variant="subtitle1" className="format-typography">
                    Reminders
                </Typography>
                <Alert severity="info">This is an info alert</Alert>
                <Alert severity="info">This is an info alert</Alert>
                <Alert severity="info">This is an info alert</Alert>
                <Alert severity="info">This is an info alert</Alert>
            </Paper>
        )
    }
}
