import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import "../css/AssignToClasses.css";
import Doughnut from './Doughnut';

export default class AssignToClasses extends Component {
    render() {
        return (
            <Paper elevation={3} className="paper-margin">
                <Typography variant="subtitle1" className="format-typography">
                    Classes Assigned To
                </Typography>
                <div className="label-header">
                    <div id="submit-1">
                        <div className="color-box" id="color-1">

                        </div>
                        <Typography variant="body2">
                            Submitted
                        </Typography>
                    </div>
                    <div id="submit-2">
                        <div className="color-box" id="color-2">

                        </div>
                        <Typography variant="body2">
                            Not Submitted
                        </Typography>
                    </div>
                </div>
                <List className="assign-list-items">
                    {["A", "B", "C", "D"].map((value) => {
                        return (
                            <ListItem
                            >
                                <ListItemText
                                    className="list-text-flex"
                                    primary={"Class " + value}
                                />
                                <ListItemIcon
                                    className="list-text-flex"
                                >
                                    <Doughnut />
                                </ListItemIcon>
                            </ListItem>
                        )
                    })}
                </List>
                <div className="btn-center">
                    <Button fullWidth variant="contained" color="primary"> 
                        Assign a class
                    </Button>
                </div>
            </Paper>
        )
    }
}
