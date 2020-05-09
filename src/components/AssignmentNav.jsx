import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import FolderIcon from '@material-ui/icons/Folder';
import React from 'react';
import BreadCrumb from "./AssignmentBreadCrumb"

class AssignmentNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subjects: ["Compiler Design", "Web Development", "Machine Learning"],
            phase: 0,
            currentSem: "Semester",
            currentSubject: "Subject",
            currentClass: "Class",
            currentAssignment: "Assignment",
        };
    }

    setSem = (e) => {
        this.setState({ phase: 1, currentSem: e.target.textContent })
    }

    unsetSem = (e) => {
        this.setState({
            phase: 0,
            currentSem: "Semester",
            currentSubject: "Subject",
            currentClass: "Class",
            currentAssignment: "Assignment",
        })
    }

    setSubject = (e) => {
        this.setState({ phase: 2, currentSubject: e.target.textContent })
    }

    unsetSubject = (e) => {
        this.setState({
            phase: 1,
            currentSubject: "Subject",
            currentClass: "Class",
            currentAssignment: "Assignment",
        })
    }

    setClass = (e) => {
        this.setState({ phase: 3, currentClass: e.target.textContent })
    }

    unsetClass = (e) => {
        this.setState({
            phase: 2,
            currentClass: "Class",
            currentAssignment: "Assignment",
        })
    }

    setAssignment = (e) => {
        this.setState({ phase: 3, currentAssignment: e.target.textContent })
    }

    unsetAssignment = (e) => {
        this.setState({
            phase: 3,
            currentAssignment: "Assignment",
        })
    }

    render() {
        const { phase, currentAssignment, currentClass, currentSem, currentSubject, subjects } = this.state
        if (phase === 0) {
            return (
                <Paper elevation={3} className="paper-margin" fullWidth>
                    <BreadCrumb 
                        unsetSemProp={this.unsetSem} 
                        unsetSubjectProp={this.unsetSubject} 
                        unsetClassProp={this.unsetClass} 
                        unsetAssignmentProp={this.unsetAssignment} 
                        currSub={currentSubject} 
                        currAssign={currentAssignment} 
                        currSem={currentSem} 
                        currClass={currentClass} 
                    />
                    <List className="list-items">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                            return (
                                <ListItem
                                    onClick={this.setSem}
                                >
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={"Semester " + value}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
            );
        }
        else if (phase === 1) {
            return (
                <Paper elevation={3} className="paper-margin" fullWidth>
                    <BreadCrumb 
                        unsetSemProp={this.unsetSem} 
                        unsetSubjectProp={this.unsetSubject} 
                        unsetClassProp={this.unsetClass} 
                        unsetAssignmentProp={this.unsetAssignment} 
                        currSub={currentSubject} 
                        currAssign={currentAssignment} 
                        currSem={currentSem} 
                        currClass={currentClass} 
                    />
                    <List className="list-items">
                        {subjects.map((value) => {
                            return (
                                <ListItem
                                    onClick={this.setSubject}
                                >
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={value}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
            )
        }
        else if (phase === 2) {
            return (
                <Paper elevation={3} className="paper-margin" fullWidth>
                    <BreadCrumb 
                        unsetSemProp={this.unsetSem} 
                        unsetSubjectProp={this.unsetSubject} 
                        unsetClassProp={this.unsetClass} 
                        unsetAssignmentProp={this.unsetAssignment} 
                        currSub={currentSubject} 
                        currAssign={currentAssignment} 
                        currSem={currentSem} 
                        currClass={currentClass} 
                    />
                    <List className="list-items">
                        {["A", "B", "C", "D"].map((value) => {
                            return (
                                <ListItem
                                    onClick={this.setClass}
                                >
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={"Section " + value}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
            )
        }
        else if (phase === 3) {
            return (
                <Paper elevation={3} className="paper-margin" fullWidth>
                    <BreadCrumb 
                        unsetSemProp={this.unsetSem} 
                        unsetSubjectProp={this.unsetSubject} 
                        unsetClassProp={this.unsetClass} 
                        unsetAssignmentProp={this.unsetAssignment} 
                        currSub={currentSubject} 
                        currAssign={currentAssignment} 
                        currSem={currentSem} 
                        currClass={currentClass} 
                    />
                    <List className="list-items">
                        {[1, 2, 3, 4].map((value) => {
                            return (
                                <ListItem
                                    onClick={this.setAssignment}
                                >
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={"Assignment " + value}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
            )
        }
    }
}

export default AssignmentNav