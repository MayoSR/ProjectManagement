import 'react-calendar/dist/Calendar.css';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class CalendarScheduler extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <Paper elevation={3} className="paper-margin">
                <Typography variant="subtitle1" className="format-typography">
                    Calendar
                </Typography>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </Paper>
        );
    }
}

export default CalendarScheduler