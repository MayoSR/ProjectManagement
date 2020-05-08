import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import "../css/ProjectData.css"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


export default class ProjectData extends Component {
    render() {
        return (
            <div id="project-data-container">
                <div id="project-title">
                    <Typography variant="h5">
                        Project Name
                    </Typography>
                    <div id="project-dets-container">
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button>Modify Project</Button>
                        <Button>Close Project</Button>
                    </ButtonGroup>
                    </div>
                </div>
                <div id="project-simple">
                    <Typography variant="subtitle2">
                        Deadline : 2020-07-05
                    </Typography>
                </div>
                <div id="project-simple">
                    <Typography variant="subtitle2">
                        Team Size : 3-4
                    </Typography>
                </div>
                <div id="project-attachments">
                    <Typography variant="subtitle2">
                        Attachments : compilerdesign.pdf
                    </Typography>
                </div>
                <div id="project-desc">
                    <Typography variant="subtitle2">
                        Description :
                    </Typography>
                    <Typography variant="body">
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </div>
            </div>
        )
    }
}
