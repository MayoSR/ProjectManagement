import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'progress',
    label: 'Progress',
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, progress) {
  return { name, progress };
}

const rows = [
  createData('Team 1', 32),
  createData('Team 2', 95),
  createData('Team 3', 30),
  createData('Team 4', 98),
  createData('Team 5', 99),
  createData('Team 6', 76),
  createData('Team 7', 35),
  createData('Team 8', 70),
  createData('Team 9', 19),
  createData('Team 10', 37),
  createData('Team 11', 64),
  createData('Team 12', 24),
  createData('Team 13', 17),
  createData('Team 14', 92),
  createData('Team 15', 85),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="paper-margin">
      <Typography variant="subtitle1" className="format-typography">
        Team-wise Progress
      </Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <LinearProgress
                      className={classes.margin}
                      variant="determinate"
                      color="secondary"
                      value={row.progress}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        id="pagination-container"
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
