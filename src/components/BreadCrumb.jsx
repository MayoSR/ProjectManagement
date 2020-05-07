import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import FolderIcon from '@material-ui/icons/Folder';
import React from 'react';

class BreadCrumb extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subjects: ["Compiler Design", "Web Development", "Machine Learning"],
            selected: false,
            currentSem : "Semester",
            currentSubject : "Subject",
        };
    }

    setSem = (e) =>{
        this.setState({selected:true,currentSem:e.target.textContent})
    }

    unsetSem = (e) =>{
        this.setState({selected:false,currentSem:"Semester"})
    }

    setSubject = (e) =>{
        this.setState({currentSubject:e.target.textContent})
    }

    render() {
        const { currentSem,currentSubject,subjects,selected } = this.state
        return (
            <Paper elevation={3} className="paper-margin" fullWidth>
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                    <Link color="inherit" onClick={this.unsetSem}>
                        {currentSem}
                    </Link>
                    {selected && 
                        <Link color="inherit">
                            {currentSubject}
                        </Link>
                    }
                </Breadcrumbs>
                {!selected ?
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
                    :
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
                }
            </Paper>
        );
    }
}

export default BreadCrumb