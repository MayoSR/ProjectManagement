import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
    },
});

function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData('Frozen yoghurt', new Date().toJSON().slice(0,10)),
    createData('Ice cream sandwich', new Date().toJSON().slice(0,10)),
    createData('Eclair', new Date().toJSON().slice(0,10)),
    createData('Cupcake', new Date().toJSON().slice(0,10)),
    createData('Gingerbread', new Date().toJSON().slice(0,10)),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Project Name</TableCell>
                        <TableCell align="right">Due Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
