import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '@material-ui/core/Button';

class CreateProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <Button fullWidth variant="contained" color="primary" className="paper-margin">
                Create a Project
            </Button>
        )
    }
}

export default CreateProject