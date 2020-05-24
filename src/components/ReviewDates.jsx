import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import CustomizedDialogs from './ReviewContent';

function createData(name, date) {
    return { name, date };
}

const rows = [
    createData('Review 1', "22/04/2019"),
    createData('Review 2', "28/04/2019"),
    createData('Review 3', "03/05/2019")
];

export default class ReviewDates extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <Paper elevation={3} className="paper-margin">
                <Typography variant="subtitle1" className="format-typography">
                    Upcoming Reviews
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="subtitle2">
                                            {row.name}
                                        </Typography>
                                        <Typography variant="caption">
                                            {row.date}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <CustomizedDialogs />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    }
}
