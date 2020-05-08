import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ProjectData from './ProjectData';

export default class WorkBench extends Component {
    render() {
        return (
            <Paper elevation={3} className="paper-margin" fullWidth>
                <Typography variant="subtitle1" className="format-typography">
                    {"Assignment 1"}
                </Typography>
                <ProjectData />
            </Paper>
        )
    }
}
